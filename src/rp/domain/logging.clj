(ns rp.domain.logging
  "Functions for creating event documents from form parameters.")

(defn- parse-optional-double [s]
  (when (and s (not= s ""))
    (parse-double s)))

(defn- parse-optional-long [s]
  (when (and s (not= s ""))
    (parse-long s)))

(defn completed-set
  "Create a set-completed event document from form parameters.
  
  Handles the mapping from HTML form field names to database field names.
  Supports both 'weight'/'reps' and 'performed-weight'/'performed-reps' params."
  [{:keys [mesocycle microcycle workout workout-day exercise-name set-index
           performed-weight performed-reps prescribed-weight prescribed-reps
           weight reps]}]
  {:event/type :set-completed
   :event/mesocycle mesocycle
   :event/microcycle (parse-long microcycle)
   :event/workout (keyword (or workout workout-day))
   :event/exercise exercise-name
   :event/set-index (parse-long set-index)
   :event/performed-weight (parse-optional-double (or weight performed-weight))
   :event/performed-reps (parse-optional-long (or reps performed-reps))
   :event/prescribed-weight (parse-optional-double prescribed-weight)
   :event/prescribed-reps (parse-optional-long prescribed-reps)
   :event/timestamp (java.time.Instant/now)})
