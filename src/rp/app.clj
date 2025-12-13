(ns rp.app
  (:require [com.biffweb :as biff :refer [q]]
            [rp.middleware :as mid]
            [rp.ui :as ui]
            [rp.settings :as settings]
            [rum.core :as rum]
            [rp.domain.plan :as plan]
            [rp.domain.state :as st]
            [xtdb.api :as xt]
            [cheshire.core :as cheshire]
            [clojure.core :as c]))


(def example-events [(st/completed-set "Twice a week upper body focus" 0 :monday "Squat" 100 10 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :monday "Squat" 100 9  nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :monday "Pullup" 80 10  nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :thursday "Bench" 100 8 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :thursday "Bench" 100 6 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :thursday "Deadlift" 300 5 nil nil)
                     (st/completed-set "Twice a week upper body focus" 1 :monday "Squat" nil nil 102.5 10)])

(def merged-plan-struct
  (let [from-events (->> example-events
                       (st/get-microcycle 0)
                       st/microcycle->plan-structure)
      from-template (-> plan/template plan/->plan)]
  (merge from-template from-events)))






(defn app [{:keys [session biff/db] :as ctx}]
  (let [{:user/keys [email]} (xt/entity db (:uid session))]
    (ui/page
     {}
     [:div "Signed in as " email ". "
      (biff/form
       {:action "/auth/signout"
        :class "inline"}
       [:button.text-blue-500.hover:text-blue-800 {:type "submit"}
        "Sign out"])
      "."]
     [:div "Word"]
     [:.h-1 "Plan reconstructed from event log"]
     (ui/render-plan merged-plan-struct)
     [:.flex-grow
      ]

     [:.h-6])))



(def about-page
  (ui/page
   {:base/title (str "About " settings/app-name)}
   [:p "This app was made with "
    [:a.link {:href "https://biffweb.com"} "Biff"] "."]))

(defn echo [{:keys [params]}]
  {:status 200
   :headers {"content-type" "application/json"}
   :body params})

(def module
  {:static {"/about/" about-page}
   :routes ["/app" {:middleware [mid/wrap-signed-in]}
            ["" {:get app}]
            ]
   :api-routes [["/api/echo" {:post echo}]]})

(comment

  (let [tmplt plan/template
        plan-from-template (plan/->plan tmplt)]
    plan-from-template)

  (let [plan-from-events (->> example-events
       (st/get-microcycle 0)
       st/microcycle->plan-structure)]
    plan-from-events)
  merged-plan-struct

  ();;end of rich comment block
  )
