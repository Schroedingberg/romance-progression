(ns rp.domain.plan
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]))

(def default-template-path "resources/sample-plan.edn")



(defn expand-exercises [{:keys [exercises]}]
  (update-vals exercises (fn [{:keys [n-sets] :as ex}]
                           ((comp vec repeat) n-sets ex))))

(defn ->plan [{:keys [name n-microcycles workouts] :as template}]
  (let [expanded-workouts (update-vals  workouts expand-exercises)
        microcycles (zipmap (take n-microcycles (iterate inc 0)) (repeat n-microcycles expanded-workouts))]
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



  (->plan template)
  ();; end of rich comment block
  )
