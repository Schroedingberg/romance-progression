(ns rp.queries
  (:require [com.biffweb :as biff :refer [q]]))

(defn get-all-events
  "Pulls all events from db.

  This is a quick fix for development, assuming that there's only one user.
  As soon as we have multiple users, this wont work anymore."
  [{:keys [biff/db] :as ctx}]
  (q db
     '{:find (pull event [*])
       :where [[event :event/user]]}))

(defn db-event->domain-event
  "Removes the event namespace prefix from a given event map.

  Works with namespace destructuring."
  [{:event/keys [type mesocycle microcycle workout exercise
                 performed-weight performed-reps
                 prescribed-weight prescribed-reps timestamp]}]
  {:type type
   :mesocycle mesocycle
   :microcycle microcycle
   :workout workout
   :exercise exercise
   :performed-weight performed-weight
   :performed-reps performed-reps
   :prescribed-weight prescribed-weight
   :prescribed-reps prescribed-reps
   :timestamp timestamp})
