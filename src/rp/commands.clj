(ns rp.commands
  "Commands for changing the state of the system.

  Anything that writes to the database goes in here."
  (:require [xtdb.api :as xt]
            [com.biffweb :as biff]))





(defn log-user-event! [{:keys [biff/db] :as ctx} user-id event]
  (let [doc (merge event {:event/user user-id :event/timestamp (java.time.Instant/now)})]
    (biff/submit-tx ctx [(assoc doc :db/op :create :db/doc-type :event)])
    doc))










;; =============================================================================
;; Helpers
;; =============================================================================
