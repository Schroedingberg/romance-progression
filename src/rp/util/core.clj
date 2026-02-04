(ns rp.util.core)

(defn ordered-merge-with
  "Like merge-with but preserves the key order of the second (base) map.
  Keys from the first map that aren't in the second are appended at the end."
  [f m1 m2]
  (let [base-keys (keys m2)
        extra-keys (remove (set base-keys) (keys m1))
        all-keys (concat base-keys extra-keys)]
    (reduce (fn [acc k]
              (let [v1 (get m1 k)
                    v2 (get m2 k)]
                (assoc acc k (cond
                               (and v1 v2) (f v1 v2)
                               v1 v1
                               :else v2))))
            (array-map)
            all-keys)))

(defn deep-merge-with
  "Like merge-with, but merges maps recursively, applying the given fn
  only when there's a non-map at a particular level.
  Preserves key order from the second (plan) map.
  (deep-merge-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
                     {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
  -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}"
  [f & maps]
  (apply
   (fn m [& maps]
     (if (every? map? maps)
       (reduce (partial ordered-merge-with m) maps)
       (apply f maps)))
   maps))
