(ns rp.ui
  (:require [cheshire.core :as cheshire]
            [clojure.java.io :as io]
            [rp.settings :as settings]
            [com.biffweb :as biff]
            [ring.middleware.anti-forgery :as csrf]
            [ring.util.response :as ring-response]
            [rum.core :as rum]))

(defn static-path [path]
  (if-some [last-modified (some-> (io/resource (str "public" path))
                                  ring-response/resource-data
                                  :last-modified
                                  (.getTime))]
    (str path "?t=" last-modified)
    path))

(defn base [{:keys [::recaptcha] :as ctx} & body]
  (apply
   biff/base-html
   (-> ctx
       (merge #:base{:title settings/app-name
                     :lang "en-US"
                     :icon "/img/glider.png"
                     :description (str settings/app-name " Description")
                     :image "https://clojure.org/images/clojure-logo-120b.png"})
       (update :base/head (fn [head]
                            (concat [[:link {:rel "stylesheet" :href (static-path "/css/main.css")}]
                                     [:script {:src (static-path "/js/main.js")}]
                                     [:script {:src "https://unpkg.com/htmx.org@2.0.7"}]
                                     [:script {:src "https://unpkg.com/htmx-ext-ws@2.0.2/ws.js"}]
                                     [:script {:src "https://unpkg.com/hyperscript.org@0.9.14"}]
                                     (when recaptcha
                                       [:script {:src "https://www.google.com/recaptcha/api.js"
                                                 :async "async" :defer "defer"}])]
                                    head))))
   body))

(defn page [ctx & body]
  (base
   ctx
   [:.flex-grow]
   [:.p-3.mx-auto.max-w-screen-sm.w-full
    (when (bound? #'csrf/*anti-forgery-token*)
      {:hx-headers (cheshire/generate-string
                    {:x-csrf-token csrf/*anti-forgery-token*})})
    body]
   [:.flex-grow]
   [:.flex-grow]))

(defn on-error [{:keys [status ex] :as ctx}]
  {:status status
   :headers {"content-type" "text/html"}
   :body (rum/render-static-markup
          (page
           ctx
           [:h1.text-lg.font-bold
            (if (= status 404)
              "Page not found."
              "Something went wrong.")]))})



(defn map-entry->hidden-input-attrs
  "Convert a map entry [key value] to (html-) hidden input attributes."
  [[k v]]
  {:type "hidden"
   :name (name k)
   :id (name k)
   :value (str v)})


(defn input
  "Generic input element for forms."
  [attrs]
  [:input (merge {:type "number" :class "input input-bordered"} attrs)])



(defn set-row
  "Display a set in a row with input elements for logging.

  Apart from actual set data, takes a context map.
  This must contain the position of the set in the plan.
  This is required to log the set correctly."
  [{:keys [prescribed-weight prescribed-reps
           performed-weight performed-reps]}
   {:keys [mesocycle microcycle workout-day exercise-name] :as context-map}]
  (biff/form {:class "inline"}
             [:div.set-row.flex.items-center.gap-2
              (input {:name "weight"
                      :value performed-weight
                      :placeholder (or prescribed-weight "kg")
                      :inputmode "decimal"
                      :step "0.5"})
              [:span "×"]
              (input {:name "reps"
                      :value performed-reps
                      :placeholder (or prescribed-reps "reps")
                      :inputmode "numeric"})
              (map (comp input map-entry->hidden-input-attrs) context-map)
              [:input {:type "checkbox"
                       :hx-post "/log-set"
                       :hx-swap "outerHTML"
                       :hx-include "closest .exercise"
                       :name "completed"
                       :checked (some? performed-weight)}]]))

(defn exercise
  "Display an exercise with its sets."
  [exercise-name sets context-map] [:div.exercise.mb-6
                                    [:h3.text-lg.font-semibold.mb2 exercise-name]
                                    (input {:name "exercise-name" :value exercise-name :type "hidden"})
                                    [:div.sets.space-y-2
                                     (for [set-data sets]
                                       (set-row set-data
                                                (assoc context-map :exercise-name exercise-name)))]])

(defn workout
  "Display a workout as a section, with the exercises in it."
  [workout-day exercises context-map]
  [:div.workout
   [:h2.text-2xl.font-bold.mb-4
    name " - " (clojure.core/name workout-day)]
   [:div.exercises
    (for [[ex-name sets] exercises]
      (exercise ex-name sets (assoc context-map :workout-day (name workout-day))))]])

(defn microcycle [microcycle-idx workouts context-map]
  [:div.microcycle
   [:h2. "Week " (inc microcycle-idx)]
   [:div.workouts
    (for [[day exercises] workouts]
      (workout day exercises (assoc context-map :microcycle microcycle-idx)))]])

(defn mesocycle [mesocycle-name microcycles context-map]
  [:div.mesocycle
   [:h1 mesocycle-name]
   [:div.microcycles
    (for [[idx workouts] microcycles]
      (microcycle idx workouts (assoc context-map :mesocycle mesocycle-name)))]])

(defn render-plan [data]

  [:div.plan

   (for [[meso-name micros] data]
     (mesocycle meso-name micros {}))])
