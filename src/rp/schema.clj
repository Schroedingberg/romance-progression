(ns rp.schema)

(def schema
  {:user/id :uuid
   :user [:map {:closed true}
          [:xt/id                     :user/id]
          [:user/email                :string]
          [:user/joined-at            inst?]]

   :event/id :uuid
   :event [:map {:closed true}
           ;; Technical fields
           [:xt/id           :event/id]
           [:event/user      :uuid]
           [:event/timestamp inst?]
           ;; Domain fields
           [:event/type      [:enum
                              :set-completed]]

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
           [:event/prescribed-weight {:optional true} [:maybe :double]]
           [:event/prescribed-reps {:optional true} [:maybe :int]]
           [:event/performed-weight  :double]
           [:event/performed-reps  :int]]})

(def module
  {:schema schema})
