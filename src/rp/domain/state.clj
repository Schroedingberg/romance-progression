(ns rp.domain.state
)



(defn completed-set "Log a completed set with full context."
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





(defn ->set [event]
  (select-keys event [:weight :reps]))

(defn ->sets [events]
  (mapv ->set events))

(defn get-all-workouts-for-day
  "Get all instances of a certain workout.
   That would be e.g. the monday workout,
   over the whole history.
  Not sure how useful this is, more of an exercise.
   "
  [day events]
  (->> events
       (filter #(= (:workout %) day))
       (group-by (juxt :mesocycle :microcycle :workout :exercise))))




;; Probably have to ditch the :exercise to make this usable for workouts that consist of several exercises
;; AAAAnd thats what i did. To actually render the "day" for ui i might have to put the vals through another group-by :exercise then
;; Actually I am doing that directly in this function. This gives us structurally almost what we need to render this in the UI, only need to transform this somehow to make rendering more convenient. Maybe its already possible like this, lets
;; explore further
;; Maybe we just need to come up with a better name for this function
(defn get-microcycle [n events]
  (let [by-microcycle-and-workout (->> events
                                       (filter #(= (:microcycle %) n))
                                       (group-by (juxt :mesocycle :microcycle :workout)))]
    (update-vals by-microcycle-and-workout (partial group-by :exercise))))


(defn microcycle->plan-structure
  "Transform a microcycle view on the events into a nested map that is congruent
  with the structure of a plan."
  [microcycle]

  (reduce-kv (fn [m k v]
               (assoc-in m k v)) {} microcycle))




(comment

  (def events
    [(completed-set "full body" 0 :monday "Squat" 100 10 nil nil)
     (completed-set "full body" 0 :monday "Squat" 100 9  nil nil)
     (completed-set "full body" 0 :monday "Pullup" 80 10  nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 8 nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 6 nil nil)
     (completed-set "full body" 0 :thursday "Deadlift" 300 5 nil nil)
     (completed-set "full body" 1 :monday "Squat" nil nil 102.5 10)])

  (def ^:private new-value
    (->> events
         (get-microcycle 0)
         microcycle->plan-structure))

  new-value







  ()) ;;
 ;;)
