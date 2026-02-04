(ns rp.ui
  "Reagent components for the workout tracking UI.
  
  Component hierarchy:
    app
    └── microcycle-section (week)
        └── workout-section (day)
            └── exercise-card
                └── set-row (weight/reps input)"
  (:require [reagent.core :as r]
            [rp.db :as db]
            [rp.plan :as plan]
            [rp.state :as state]
            [clojure.string :as str]))

(defn- set-row
  "A single set with weight/reps inputs."
  [mesocycle microcycle workout exercise set-index set-data]
  (let [weight (r/atom "")
        reps (r/atom "")]
    (fn [mesocycle microcycle workout exercise set-index set-data]
      (let [{:keys [performed-weight performed-reps prescribed-weight prescribed-reps]} set-data
            completed? (some? performed-weight)]
        [:form {:style {:display "flex" :gap "0.5rem" :align-items "center" :margin-bottom "0.5rem"}}
         [:input {:type "number"
                  :placeholder (if prescribed-weight (str prescribed-weight " kg") "kg")
                  :value (if completed? performed-weight @weight)
                  :disabled completed?
                  :on-change #(reset! weight (-> % .-target .-value))
                  :style {:width "5rem"}}]
         [:span "×"]
         [:input {:type "number"
                  :placeholder (if prescribed-reps (str prescribed-reps) "reps")
                  :value (if completed? performed-reps @reps)
                  :disabled completed?
                  :on-change #(reset! reps (-> % .-target .-value))
                  :style {:width "4rem"}}]
         [:input {:type "checkbox"
                  :checked completed?
                  :disabled completed?
                  :on-change (fn [_]
                               (when (and (seq @weight) (seq @reps))
                                 (db/log-set!
                                  {:mesocycle mesocycle
                                   :microcycle microcycle
                                   :workout workout
                                   :exercise exercise
                                   :set-index set-index
                                   :weight (js/parseFloat @weight)
                                   :reps (js/parseInt @reps)
                                   :prescribed-weight prescribed-weight
                                   :prescribed-reps prescribed-reps})))}]
         (when completed? [:span "✓"])]))))

(defn- exercise-card
  "An exercise with its sets."
  [mesocycle microcycle workout-key exercise-name sets]
  (let [muscle-groups (some :muscle-groups sets)]
    [:article {:key exercise-name}
     [:h4 exercise-name
      (when muscle-groups
        [:small {:style {:font-weight "normal" :margin-left "0.5rem" :color "var(--pico-muted-color)"}}
         (str/join ", " (map name muscle-groups))])]
     (for [[idx set-data] (map-indexed vector sets)]
       ^{:key idx}
       [set-row mesocycle microcycle workout-key exercise-name idx set-data])]))

(defn- workout-section
  "A workout day with its exercises."
  [mesocycle microcycle workout-key exercises-map]
  [:section {:key (name workout-key)}
   [:h3 (str/capitalize (name workout-key))]
   (for [[exercise-name sets] exercises-map]
     ^{:key exercise-name}
     [exercise-card mesocycle microcycle workout-key exercise-name sets])])

(defn- microcycle-section
  "A week with its workouts."
  [mesocycle-name microcycle-idx workouts-map]
  [:section {:key microcycle-idx}
   [:h2 (str "Week " (inc microcycle-idx))]
   (for [[workout-key exercises-map] workouts-map]
     ^{:key workout-key}
     [workout-section mesocycle-name microcycle-idx workout-key exercises-map])])

(defn app
  "Main app component - renders the full workout plan with progress."
  []
  (let [events (db/get-all-events)
        plan (plan/get-plan)
        plan-name (plan/get-plan-name)
        progress (state/view-progress-in-plan events plan)
        mesocycle-data (get progress plan-name)]
    [:main.container
     [:header
      [:h1 plan-name]
      [:p "Track your workout progression"]]

     (for [[microcycle-idx workouts-map] (sort-by first mesocycle-data)]
       ^{:key microcycle-idx}
       [microcycle-section plan-name microcycle-idx workouts-map])

     [:footer {:style {:margin-top "2rem" :text-align "center"}}
      [:small "Romance Progression • Local-first PWA"]]]))

