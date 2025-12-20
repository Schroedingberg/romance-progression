(ns rp.domain.logging)


(defn maybe-double [d]
  (when-not (nil? d) (parse-double d)))

(defn maybe-int [n]
  (when-not (nil? n) (parse-long n)))


;; TODO Figure out how to make the mapping from request to db doc more transparent and DRY
(defn completed-set "Create a completed set with full context."
  [{:keys [mesocycle microcycle workout workout-day exercise-name performed-weight performed-reps prescribed-weight prescribed-reps weight reps]}]
  {:event/type :set-completed
   :event/mesocycle mesocycle
   :event/microcycle (parse-long microcycle)
   :event/workout (keyword (or workout workout-day))
   :event/exercise exercise-name
   :event/performed-weight (maybe-double (or weight performed-weight))
   :event/performed-reps (maybe-int (or reps performed-reps))
   :event/prescribed-weight (maybe-double prescribed-weight)
   :event/prescribed-reps (maybe-int prescribed-reps)
   :event/timestamp (java.time.Instant/now)})
