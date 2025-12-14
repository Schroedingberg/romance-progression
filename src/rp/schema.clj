(ns rp.schema)

(def schema
  {:user/id :uuid
   :user [:map {:closed true}
          [:xt/id                     :user/id]
          [:user/email                :string]
          [:user/joined-at            inst?]
          [:user/foo {:optional true} :string]
          [:user/bar {:optional true} :string]]

   :event/id :uuid
   :event [:map {:closed true}
           ;; Technical fields
           [:xt/id           :event/id]
           [:event/user      :uuid]
           [:event/timestamp inst?]
           ;; Domain fields
           [:event/type      [:enum :microcycle-started
                              :workout-started
                              :set-completed
                              :workout-completed
                              :microcycle-completed]]

           [:event/mesocycle :string]
           [:event/microcycle :int]
           [:event/workout   [:enum :monday
                              :tuesday
                              :wednesday
                              :thursday
                              :friday
                              :saturday
                              :sunday]]

           [:event/exercise  {:optional true} :string]
           [:event/prescribed-weight :double]
           [:event/prescribed-reps :int]
           [:event/performed-weight    {:optional true} :double]
           [:event/performed-reps      {:optional true} :int]]})


(def module
  {:schema schema})
