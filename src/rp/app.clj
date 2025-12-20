(ns rp.app
  (:require [com.biffweb :as biff :refer [q]]
            [rp.middleware :as mid]
            [rp.ui :as ui]
            [rp.settings :as settings]
            [rp.commands :as commands]
            [rp.queries :as queries]
            [rum.core :as rum]
            [rp.domain.plan :as plan]
            [rp.domain.state :as st]
            [rp.domain.logging :as lg]
            [xtdb.api :as xt]
            [cheshire.core :as cheshire]
            [clojure.core :as c]
            [clojure.data :as data]))

(defn progress-map
  "Render the progress represented by events in the context of the plan generated from template as html."
  [events template]
  (-> events
      (st/view-progress-in-plan (plan/->plan template))
      (ui/render-plan)))

(defn app [{:keys [session biff/db] :as ctx}]
  (let [{:user/keys [email]} (xt/entity db (:uid session))
        db-events (queries/get-all-events ctx)
        events (map queries/db-event->domain-event db-events)]
    (ui/page
     {}
     [:div "Signed in as " email ". "
      (biff/form
       {:action "/auth/signout"
        :class "inline"}
       [:button.text-blue-500.hover:text-blue-800 {:type "submit"}
        "Sign out"])
      "."]

     (progress-map events plan/template)
     [:.flex-grow]

     [:.h-6])))


(defn log-set! [{:keys [session biff/db params] :as ctx}]
  (let [{:user/keys [email]} (xt/entity db (:uid session))
        user-id (biff/lookup-id db :user/email email)
        cleaned-data (lg/completed-set params)]

    (commands/log-user-event! ctx user-id cleaned-data)))

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
   :routes [["/app" {:middleware [mid/wrap-signed-in]}
             ["" {:get app}]]
            ["/log-set" {:post log-set! :middleware [mid/wrap-signed-in]}]]
   :api-routes [["/api/echo" {:post echo}]]})

(comment

  ();;end of rich comment block
  )
