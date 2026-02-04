(ns rp.storage
  "localStorage persistence with auto-save on DB changes."
  (:require [rp.db :as db]))

(def ^:private DB-KEY "rp-workout-db")

(defn- save-db! []
  (.setItem js/localStorage DB-KEY (db/db->edn)))

(defn load-db!
  "Load persisted data and set up auto-save. Calls on-complete when ready."
  [on-complete]
  (when-let [data (.getItem js/localStorage DB-KEY)]
    (db/load-from-edn! data))
  ;; Auto-save on every transaction
  (add-watch db/db-version :auto-save (fn [_ _ _ _] (save-db!)))
  (on-complete))

