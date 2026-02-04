(ns rp.queries
  (:require [com.biffweb :as biff :refer [q]]))

(defn get-user-events
  "Pulls all events for a specific user from the database.
  
  Events are filtered by the user's ID to ensure data isolation."
  [{:keys [biff/db session] :as ctx}]
  (when-let [user-id (:uid session)]
    (q db
       '{:find (pull event [*])
         :in [user-id]
         :where [[event :event/user user-id]]}
       user-id)))

;; Keep the old function for backward compatibility during development
(defn get-all-events
  "DEPRECATED: Use get-user-events instead for proper multi-user support."
  [ctx]
  (get-user-events ctx))

(defn db-event->domain-event
  "Removes the event namespace prefix from a given event map.

  Works with namespace destructuring."
  [{:event/keys [type mesocycle microcycle workout exercise set-index
                 performed-weight performed-reps
                 prescribed-weight prescribed-reps timestamp]}]
  {:type type
   :mesocycle mesocycle
   :microcycle microcycle
   :workout workout
   :exercise exercise
   :set-index set-index
   :performed-weight performed-weight
   :performed-reps performed-reps
   :prescribed-weight prescribed-weight
   :prescribed-reps prescribed-reps
   :timestamp timestamp})
