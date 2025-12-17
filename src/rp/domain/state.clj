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


(defn events->plan-map
  "Transforms a flat event log into a nested map that is congruent with the structure of a plan.

  This can then be used to visualize the progress in the context of a plan with
  view-progress-in-plan
  "
  [events]
  (as-> events e
    (group-by (juxt :mesocycle :microcycle :workout) e)
    (update-vals  e (partial group-by :exercise))
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

;; Public API
;; TODO: Move internal functions of state reconstruction to private namespace and expose public api via public namespace

(defn view-progress-in-plan
  "Creates a progress view (a map) from a given event log and a plan.

  This just deep-merges plan and event log.
  From that you can see what was planned, what of it has been done and what
  exactly has been performed."
  [event-log plan]
  (let [from-events (->> event-log
                         events->plan-map)]
    (utils/deep-merge-with merge-sets from-events plan)))





;; Fiddling comment section
(comment

  (def events
    [(completed-set "full body" 0 :monday "Squat" 100 10 nil nil)
     (completed-set "full body" 0 :monday "Squat" 100 9  nil nil)
     (completed-set "full body" 0 :monday "Pullup" 80 10  nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 8 nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 6 nil nil)
     (completed-set "full body" 0 :thursday "Deadlift" 300 5 nil nil)
     (completed-set "full body" 1 :monday "Squat" nil nil 102.5 10)])

  (def ^:private from-events
    (->> events
         (get-microcycle 0)
         microcycle->plan-structure
         vals
         first))

  from-events

  (def plan-excerpt
    {0
     {:monday
      {"Squat"
       [{:muscle-groups [:quads], :equipment [:barbell :rack]}
        {:muscle-groups [:quads], :equipment [:barbell :rack]}],
       "Pullup"
       [{:muscle-groups [:back], :equipment [:parallel-bar]}]},
      :thursday
      {"Bench"
       [{:muscle-groups [:chest], :equipment [:bench :barbell]}
        {:muscle-groups [:chest], :equipment [:bench :barbell]}],
       "Deadlift"
       [{:muscle-groups [:hamstrings], :equipment [:barbell]}
        {:muscle-groups [:hamstrings], :equipment [:barbell]}]}}})

  ;; What we want to do is merge the map that we built from the event log with the plan-map.
  ;; We've constructed (hopefully) all levels of those maps such that every value is in turn a map,
  ;; except for the sets of an exercise - which is basically the leaf level of our tree.
  ;; Those we store as vectors. This is primariy due to the fact that a set cant be really assigned an identity in a meaningful way.
  ;; Now, if these assumptions hold true, we can do the following on the workout level:
  (let [wo-from-events (get-in from-events [0 :monday])
        wo-from-plan   (get-in plan-excerpt [0 :monday])]
    (merge-with merge-sets wo-from-events wo-from-plan)) ;; Here we just merge monday's workouts with our merge sets function.

;; To do that on the next higher level, so for a full microcycle, we could do this:
  (let [wo-from-events (get-in from-events [0])
        wo-from-plan   (get-in plan-excerpt [0])]
    ;; We're basically taking the previous block and feed it as the function argument to another merge-with
    (merge-with (partial merge-with merge-sets) wo-from-events wo-from-plan))

  ;; As long as our assumption holds true (just maps on every level, except leaves), we can do all of this way more concisely with the deep-merge function.
  ;; That can be found in the docs for merge-with, so it's included in the utils namespace here.
  ;; This will just do a merge on all maps found and will apply the provided function only if it encounters something that's not a map.
  ;; Of course, this locks us into that particular structure, but so far this has only advantages.
  (let [wo-from-events (get-in from-events [0])
        wo-from-plan   (get-in plan-excerpt [0])]
    (utils/deep-merge-with merge-sets wo-from-events wo-from-plan))

;; Now for readability we omitted the top level: the mesocycle name.

  ()) ;;
 ;;)
