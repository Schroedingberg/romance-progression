^{:nextjournal.clerk/visibility {:code :hide}}
(ns docs.pwa-architecture
  "# Romance Progression PWA Architecture

  This notebook documents the local-first ClojureScript PWA for workout tracking.
  The design follows event-sourcing principles: we store events (\"I did 8 reps at 100kg\")
  and derive state from them."
  {:nextjournal.clerk/toc true}
  (:require [nextjournal.clerk :as clerk]))

;; ## Overview
;;
;; The app has a simple but powerful architecture:
;;
;; 1. **Plan Templates** define what workouts to do (exercises, sets, schedule)
;; 2. **Events** record what was actually performed
;; 3. **State** merges events with the plan to show progress
;;
;; All data is stored locally in the browser using localStorage.

;; ## Data Flow
;;
;; ```
;; ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
;; │   plan.cljs │────▶│  state.cljs │────▶│   ui.cljs   │
;; │  (template) │     │  (merge)    │     │ (reagent)   │
;; └─────────────┘     └─────────────┘     └─────────────┘
;;                            ▲
;;                            │
;;                     ┌─────────────┐
;;                     │   db.cljs   │
;;                     │ (DataScript)│
;;                     └─────────────┘
;; ```

;; ## Module Responsibilities
;;
;; | Module | Purpose |
;; |--------|---------|
;; | `core.cljs` | Entry point, initializes app |
;; | `plan.cljs` | Template expansion, localStorage persistence |
;; | `db.cljs` | DataScript event store |
;; | `state.cljs` | Merge events with plan for progress view |
;; | `ui.cljs` | Reagent components |
;; | `util.cljs` | Deep merge utilities |
;; | `storage.cljs` | localStorage auto-save |

;; ## Plan Structure
;;
;; A plan template defines the workout schedule:

(def example-template
  {:name "My Program"
   :n-microcycles 4  ;; 4 weeks
   :workouts
   {:monday
    {:exercises {"Squat" {:n-sets 3 :muscle-groups [:quads]}
                 "Press" {:n-sets 2 :muscle-groups [:shoulders]}}}}})

;; The `->plan` function expands this into the full structure:
;;
;; ```clojure
;; {"My Program"
;;  {0 {:monday {"Squat" [{:exercise-name "Squat" :muscle-groups [:quads]}
;;                        {:exercise-name "Squat" :muscle-groups [:quads]}
;;                        {:exercise-name "Squat" :muscle-groups [:quads]}]
;;               "Press" [...]}}
;;   1 {...}
;;   2 {...}
;;   3 {...}}}
;; ```

;; ## Event Structure
;;
;; When you complete a set, an event is logged:

(def example-event
  {:mesocycle "My Program"
   :microcycle 0
   :workout :monday
   :exercise "Squat"
   :set-index 0
   :performed-weight 100
   :performed-reps 8
   :prescribed-weight 95  ;; optional - from last session
   :prescribed-reps 8
   :timestamp 1234567890})

;; ## State Reconstruction
;;
;; `view-progress-in-plan` merges events into the plan:
;;
;; 1. Convert events to a nested map structure matching the plan
;; 2. Deep-merge, keeping plan order but adding event data
;; 3. For each set, merge performed data on top of planned data
;;
;; The result is the plan with `:performed-weight` and `:performed-reps`
;; filled in for completed sets.

;; ## Why Event Sourcing?
;;
;; 1. **Simple storage**: Just append events, never update
;; 2. **Full history**: Can show progression over time
;; 3. **Future progression**: Easy to calculate "last weight + 2.5kg"
;; 4. **Offline-first**: Events sync when online

;; ## Key Functions
;;
;; ### `plan/->plan`
;; Expands template into full workout structure
;;
;; ### `state/view-progress-in-plan`
;; Merges event log with plan to show current progress
;;
;; ### `db/log-set!`
;; Appends a set completion event
;;
;; ### `util/deep-merge-with`
;; Recursively merges maps, applying a function at leaves

;; ## Running the PWA
;;
;; ```bash
;; # Development
;; npx shadow-cljs watch app
;;
;; # Tests
;; npx shadow-cljs compile test
;;
;; # Production build
;; npx shadow-cljs release app
;; ```

;; ## Testing Strategy
;;
;; Tests run in Node.js via shadow-cljs `:node-test` target.
;; This keeps tests fast and avoids browser complexity.
;;
;; Key test areas:
;; - `util/deep-merge-with` - merge behavior
;; - `state/view-progress-in-plan` - event reconstruction
;; - `plan/->plan` - template expansion
