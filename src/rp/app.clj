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
            [clojure.core :as c]
            [clojure.data :as data]))


(def example-events [(st/completed-set "Twice a week upper body focus" 0 :monday "Barbell Upright Row" 30 10 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :monday "Squat" 100 10 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :monday "Squat" 100 9  nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :monday "Pullup" 80 10  nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :thursday "Bench" 100 8 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :thursday "Bench" 100 6 nil nil)
                     (st/completed-set "Twice a week upper body focus" 0 :thursday "Deadlift" 300 5 nil nil)
                     (st/completed-set "Twice a week upper body focus" 1 :monday "Squat" nil nil 102.5 10)])

;; TODO: Dont define global vars in app.clj
(def progress-map
  (-> example-events
    (st/view-progress-in-plan (plan/->plan plan/template))
    (ui/render-plan)))

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
     progress-map
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

      ();;end of rich comment block
  )
