(ns rp.auth
  "For simplicity, this uses bcrypt for password hashing and session-based auth.
  If you want OIDC later, consider using:
  - buddy-auth + buddy-sign for JWT
  - ring-oauth2 for OAuth2/OIDC flows
  - Or a service like Auth0/Clerk"
  (:require [com.biffweb :as biff]
            [rp.ui :as ui]
            [rp.settings :as settings]
            [rp.middleware :as mid]
            [xtdb.api :as xt]
            [clojure.tools.logging :as log])
  (:import [org.mindrot.jbcrypt BCrypt]))

;; Password hashing
(defn hash-password [password]
  (BCrypt/hashpw password (BCrypt/gensalt 12)))

(defn check-password [password hash]
  (try
    (BCrypt/checkpw password hash)
    (catch Exception _ false)))

;; Auth pages
(defn signup-page [{:keys [params] :as ctx}]
  (ui/page
   ctx
   [:h2 (str "Sign up for " settings/app-name)]
   (biff/form
    {:action "/auth/signup"}
    [:label {:for "email"} "Email"]
    [:input#email {:name "email" :type "email" :required true
                   :autocomplete "email" :placeholder "you@example.com"}]
    [:label {:for "password"} "Password"]
    [:input#password {:name "password" :type "password" :required true
                      :minlength "8" :placeholder "At least 8 characters"}]
    [:button {:type "submit"} "Sign up"]
    (when-some [error (:error params)]
      [:small {:style {:color "var(--pico-color-red-500)"}}
       (case error
         "email-taken" "An account with this email already exists."
         "weak-password" "Password must be at least 8 characters."
         "There was an error.")]))
   [:p [:small "Already have an account? " [:a {:href "/signin"} "Sign in"] "."]]))

(defn signin-page [{:keys [params] :as ctx}]
  (ui/page
   ctx
   [:h2 (str "Sign in to " settings/app-name)]
   (biff/form
    {:action "/auth/signin"}
    [:label {:for "email"} "Email"]
    [:input#email {:name "email" :type "email" :required true
                   :autocomplete "email" :placeholder "you@example.com"}]
    [:label {:for "password"} "Password"]
    [:input#password {:name "password" :type "password" :required true
                      :placeholder "Your password"}]
    [:button {:type "submit"} "Sign in"]
    (when-some [error (:error params)]
      [:small {:style {:color "var(--pico-color-red-500)"}}
       (case error
         "invalid-credentials" "Invalid email or password."
         "not-signed-in" "You must be signed in to view that page."
         "There was an error.")]))
   [:p [:small "Don't have an account? " [:a {:href "/"} "Sign up"] "."]]))

;; Auth handlers
(defn signup! [{:keys [biff/db params] :as ctx}]
  (let [{:keys [email password]} params]
    (cond
      (< (count password) 8)
      {:status 303 :headers {"location" "/?error=weak-password"}}

      (biff/lookup db :user/email email)
      {:status 303 :headers {"location" "/?error=email-taken"}}

      :else
      (let [user-id (random-uuid)]
        (biff/submit-tx ctx
                        [{:db/op :create
                          :db/doc-type :user
                          :xt/id user-id
                          :user/email email
                          :user/password-hash (hash-password password)
                          :user/joined-at (java.time.Instant/now)}])
        (log/info "New user signed up:" email)
        {:status 303
         :headers {"location" "/app"}
         :session {:uid user-id}}))))

(defn signin! [{:keys [biff/db params] :as ctx}]
  (let [{:keys [email password]} params
        user (biff/lookup db :user/email email)]
    (if (and user (check-password password (:user/password-hash user)))
      {:status 303
       :headers {"location" "/app"}
       :session {:uid (:xt/id user)}}
      {:status 303
       :headers {"location" "/signin?error=invalid-credentials"}})))

(defn signout! [_ctx]
  {:status 303
   :headers {"location" "/"}
   :session nil})

(def module
  {:routes [["" {:middleware [mid/wrap-redirect-signed-in]}
             ["/" {:get signup-page}]
             ["/signin" {:get signin-page}]]
            ["/auth/signup" {:post signup!}]
            ["/auth/signin" {:post signin!}]
            ["/auth/signout" {:post signout!}]]})
