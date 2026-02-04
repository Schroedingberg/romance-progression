(ns rp.domain.state
  "State reconstruction from events.

  This provides functions to create set-completed events
  and functions to rebuild state from a flat event log.

  The most important is view-progress-in-plan,
  which you can supply an event-log and a plan and
  get the progress in the context of the plan.
  "
  (:require [rp.util.core :as utils]))

(defn completed-set "Create a completed set with full context."
  [mesocycle microcycle workout exercise performed-weight performed-reps prescribed-weight prescribed-reps]
  {:type :set-completed
   :mesocycle mesocycle
   :microcycle microcycle
   :workout workout
   :exercise exercise
   :performed-weight performed-weight
   :performed-reps performed-reps
   :prescribed-weight prescribed-weight
   :prescribed-reps prescribed-reps
   :timestamp (java.time.Instant/now)})


(defn events->indexed-sets
  "Convert a list of events for one exercise into a sparse vector by set-index.
  Events with set-index are placed at that position; events without are appended."
  [events]
  (let [indexed (filter :set-index events)
        max-idx (if (seq indexed)
                  (apply max (map :set-index indexed))
                  -1)
        base-vec (vec (repeat (inc max-idx) {}))
        with-indexed (reduce (fn [v e]
                               (assoc v (:set-index e) e))
                             base-vec
                             indexed)
        unindexed (remove :set-index events)]
    (into with-indexed unindexed)))

(defn events->plan-map
  "Transforms a flat event log into a nested map that is congruent with the structure of a plan.

  This can then be used to visualize the progress in the context of a plan with
  view-progress-in-plan
  "
  [events]
  (as-> events e
    (group-by (juxt :mesocycle :microcycle :workout) e)
    (update-vals e (partial group-by :exercise))
    (update-vals e (fn [exercises-map]
                     (update-vals exercises-map events->indexed-sets)))
    (reduce-kv (fn [m k v]
                 (assoc-in m k v)) {} e)))

(defn merge-sets
  "Takes two vectors with exercise maps and merges each one of them, by position.

  Pads the shorter vector with empty maps.
  Caution: This relies on the sets being in vectors, because ordering is kind of important here."
  [from-events from-plan]
  (let [max-count (max (count from-events) (count from-plan))
        pad-planned (concat from-plan (repeat {}))
        pad-performed (concat from-events (repeat {}))]
    (vec (take max-count (map merge pad-planned pad-performed)))))

;; ============================================================================
;; Public API
;; ============================================================================

(defn view-progress-in-plan
  "Creates a progress view (a map) from a given event log and a plan.

  This deep-merges plan and event log so you can see:
  - What was planned
  - What has been done
  - What exactly was performed"
  [event-log plan]
  (let [from-events (->> event-log
                         events->plan-map)]
    (utils/deep-merge-with merge-sets from-events plan)))





;; Fiddling comment section
(comment

  (def events
    [(completed-set "full body" 0 :monday "Squat" 100 10 nil nil)
     (completed-set "full body" 0 :monday "Pullup" 80 10  nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 8 nil nil)
     (completed-set "full body" 0 :thursday "Deadlift" 300 5 nil nil)
     (completed-set "full body" 1 :monday "Squat" nil nil 102.5 10)])





  (def plan
    {"full body"
     {0
      {:monday {"Squat"
                [{}]
                "Pullup"
                [{}]}
       :thursday {"Bench"
                  [{}]
                  "Deadlift"
                  [{}]}}}})





  (view-progress-in-plan events plan)


  ()) ;;
