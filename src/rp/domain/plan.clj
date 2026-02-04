(ns rp.domain.plan
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]))

(def default-template-path "resources/sample-plan.edn")


(defn expand-exercises
  "Turn the n-sets specification from a template into n-sets maps, representing sets.
  Uses array-map to preserve the order of exercises as defined in the template."
  [{:keys [exercises]}]
  (reduce-kv
   (fn [m exercise-name {:keys [n-sets] :as ex}]
     (assoc m exercise-name
            (vec (repeat n-sets (-> ex
                                    (dissoc :n-sets)
                                    (assoc :exercise-name exercise-name))))))
   (array-map)
   exercises))




(defn ->plan [{:keys [name n-microcycles workouts] :as template}]
  (let [expanded-workouts (update-vals  workouts expand-exercises)
        microcycles (zipmap
                     (take n-microcycles (iterate inc 0))
                     (repeat n-microcycles expanded-workouts))]
    {name microcycles}))

(def template (->> (io/resource "sample-plan.edn")
                   slurp
                   edn/read-string))

(->plan template)

(->> template
     ->plan
     :microcycles
     first)

(keys template)

(comment

  (let [le-set ()])

  template

  (-> template
      ->plan
      (get-in ["Twice a week upper body focus" 0 :monday]))
  ();; end of rich comment block
  )
