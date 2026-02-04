# XTDB2 Migration Guide

## Overview

XTDB v2 is a major rewrite with significant API changes. The migration is **not trivial** and requires:

1. **Schema changes** - XTDB2 uses SQL-style tables
2. **Query changes** - Datalog → SQL (XTQL)  
3. **Biff wrapper update** - Biff's `use-xtdb` is for v1
4. **Data migration** - Export from v1, import to v2

## Key Differences

### XTDB1 (Current)
```clojure
;; Document-oriented, Datalog queries
(xt/put node {:xt/id user-id :user/email "foo@example.com"})

(xt/q db
  '{:find [?e]
    :where [[?e :user/email email]]
    :in [email]}
  "foo@example.com")
```

### XTDB2 (Target)
```clojure
;; SQL-first, table-based
(xt/submit-tx node [[:sql "INSERT INTO users (_id, email) VALUES (?, ?)" 
                     [user-id "foo@example.com"]]])

(xt/q node "SELECT * FROM users WHERE email = ?" 
      {:args ["foo@example.com"]})
```

## Migration Steps

### 1. Update Dependencies

```clojure
;; Replace biff's XTDB1 with XTDB2
{com.xtdb/xtdb-api {:mvn/version "2.0.0-beta1"}  ; or latest
 com.xtdb/xtdb-core {:mvn/version "2.0.0-beta1"}}
```

### 2. Create Custom XTDB2 Component

Since Biff doesn't have XTDB2 support yet, you'll need a custom component:

```clojure
(ns rp.xtdb2
  (:require [xtdb.api :as xt]
            [xtdb.node :as xt-node]))

(defn use-xtdb2 [{:keys [xtdb/dir] :as ctx}]
  (let [node (xt-node/start-node {:xtdb/server {:port 5432}
                                  :xtdb.log/local {:path (str dir "/log")}
                                  :xtdb.buffer-pool/local {:path (str dir "/buffers")}})]
    (-> ctx
        (assoc :xtdb/node node)
        (update :biff/stop conj #(.close node)))))
```

### 3. Create Tables (Schema)

XTDB2 needs explicit tables:

```clojure
(defn setup-schema! [node]
  (xt/submit-tx node
    [[:sql "CREATE TABLE IF NOT EXISTS users (
              _id UUID PRIMARY KEY,
              email TEXT NOT NULL UNIQUE,
              password_hash TEXT,
              joined_at TIMESTAMPTZ NOT NULL)"]
     [:sql "CREATE TABLE IF NOT EXISTS events (
              _id UUID PRIMARY KEY,
              user_id UUID NOT NULL,
              type TEXT NOT NULL,
              mesocycle TEXT NOT NULL,
              microcycle INT NOT NULL,
              workout TEXT NOT NULL,
              exercise TEXT,
              set_index INT NOT NULL,
              prescribed_weight DOUBLE PRECISION,
              prescribed_reps INT,
              performed_weight DOUBLE PRECISION NOT NULL,
              performed_reps INT NOT NULL,
              timestamp TIMESTAMPTZ NOT NULL)"]]))
```

### 4. Update Queries

```clojure
;; Before (XTDB1)
(biff/q db
  '{:find (pull event [*])
    :where [[event :event/user]]})

;; After (XTDB2)
(xt/q node "SELECT * FROM events")
```

### 5. Update Commands

```clojure
;; Before
(biff/submit-tx ctx [{:db/op :create :db/doc-type :event ...}])

;; After
(xt/submit-tx node 
  [[:sql "INSERT INTO events (_id, user_id, type, ...) VALUES (?, ?, ?, ...)"
    [event-id user-id event-type ...]]])
```

## Recommendation

Given the complexity, I recommend **deferring XTDB2 migration** until:
1. Biff releases official XTDB2 support
2. OR you have a specific need for XTDB2 features (SQL, columnar storage)

**For now, XTDB1 works fine** for this use case. The app's data model is simple enough that the migration won't provide significant benefits yet.

## Alternative: Keep XTDB1

If you want to stay with XTDB1 but modernize, consider:
- Using PostgreSQL as the storage backend (`:biff.xtdb/topology :jdbc`)
- This gives you durability without changing the API

## Resources

- [XTDB2 Documentation](https://docs.xtdb.com/)
- [XTDB2 Migration Guide](https://docs.xtdb.com/guides/migrating-from-v1.html)
- [Biff XTDB Discussion](https://github.com/jacobobryant/biff/discussions)
