(ns rp.ui
  (:require [cheshire.core :as cheshire]
            [clojure.java.io :as io]
            [rp.settings :as settings]
            [com.biffweb :as biff]
            [ring.middleware.anti-forgery :as csrf]
            [ring.util.response :as ring-response]

            [rum.core :as rum]
            [clojure.string :as str]))

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
                            (concat [;; Pico CSS - classless semantic CSS framework
                                     [:link {:rel "stylesheet"
                                             :href "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"}]

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
   [:main.container
    (when (bound? #'csrf/*anti-forgery-token*)
      {:hx-headers (cheshire/generate-string
                    {:x-csrf-token csrf/*anti-forgery-token*})})
    body]))

(defn on-error [{:keys [status ex] :as ctx}]
  {:status status
   :headers {"content-type" "text/html"}
   :body (rum/render-static-markup
          (page
           ctx
           [:h1
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
  [:input (merge {:type "number"} attrs)])





(defn log-set-feedback-row [{:keys [mesocycle microcycle workout-day exercise-name]}]
  [:div "Ok!"])



(defn set-row
  "Display a set in a row with input elements for logging.

  Apart from actual set data, takes a context map.
  This must contain the position of the set in the plan.
  This is required to log the set correctly."
  [{:keys [prescribed-weight prescribed-reps
           performed-weight performed-reps]}
   {:keys [mesocycle microcycle workout-day exercise-name] :as context-map}]
  (biff/form {:role "group" :class "set-row"}
             (input {:name "weight"
                     :value performed-weight
                     :placeholder (or prescribed-weight "kg")
                     :inputmode "decimal"
                     :disabled (some? performed-weight)
                     :step "0.5"
                     :style {:width "5rem"}})
             (input {:name "reps"
                     :value performed-reps
                     :placeholder (or prescribed-reps "reps")
                     :inputmode "numeric"
                     :disabled (some? performed-reps)
                     :style {:width "4rem"}})
             (map (comp input map-entry->hidden-input-attrs) context-map)
             [:input {:type "checkbox"
                      :hx-post "/log-set"
                      :hx-swap "outerHTML"
                      :hx-target "closest form.set-row"
                      :name "completed"
                      :disabled (some? performed-weight)
                      :checked (some? performed-weight)}]))


(defn exercise
  "Display an exercise with its sets."
  [exercise-name sets context-map]
  [:article
   [:h4 exercise-name]
   (input {:name "exercise-name" :value exercise-name :type "hidden"})
   (map-indexed
    (fn [idx set-data]
      (set-row set-data
               (assoc context-map
                      :exercise-name exercise-name
                      :set-index idx)))
    sets)])

(defn workout
  "Display a workout as a section, with the exercises in it."
  [workout-day exercises context-map]
  [:section
   [:h3 (->> workout-day name str/capitalize)]
   (for [[ex-name sets] exercises]
     (exercise ex-name sets (assoc context-map :workout-day (name workout-day))))])

(defn microcycle [microcycle-idx workouts context-map]
  [:section
   [:h2 "Week " (inc microcycle-idx)]
   (for [[day exercises] workouts]
     (workout day exercises (assoc context-map :microcycle microcycle-idx)))])

(defn mesocycle [mesocycle-name microcycles context-map]
  [:section
   [:h1 mesocycle-name]
   (for [[idx workouts] microcycles]
     (microcycle idx workouts (assoc context-map :mesocycle mesocycle-name)))])

(defn render-plan [data]
  (for [[meso-name micros] data]
    (mesocycle meso-name micros {})))
