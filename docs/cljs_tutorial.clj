^{:nextjournal.clerk/visibility {:code :hide}}
(ns cljs-tutorial
  "ClojureScript for Backend Devs - An interactive Clerk notebook"
  {:nextjournal.clerk/toc true}
  (:require [nextjournal.clerk :as clerk]))

;; # ClojureScript for Backend Devs
;; A hands-on guide to REPL-driven ClojureScript development

;; ## Why This Tutorial?
;;
;; You know Clojure. You've built servers, queried databases, transformed data.
;; Now you want that same power in the browser. This tutorial bridges the gap.
;;
;; **To use this notebook:**
;; 1. Start a REPL with `clj -M:clerk`
;; 2. Run `(clerk/serve! {:browse? true})`
;; 3. Open this file and eval forms to see results

;; ---
;; ## Setup: Connecting to the ClojureScript REPL
;;
;; Unlike Clojure where you just `clj` and go, ClojureScript needs a JavaScript runtime.
;; shadow-cljs makes this easy.

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/html
 [:div.bg-blue-50.p-4.rounded-lg.border-l-4.border-blue-500
  [:h4.font-bold "Terminal Commands"]
  [:pre.bg-gray-800.text-green-400.p-3.rounded.mt-2
   "# Start shadow-cljs\nnpx shadow-cljs watch app\n\n# Connect your editor to nREPL port 7889"]])

;; ---
;; ## Part 1: The JavaScript Interop Essentials

;; In Clojure, you interop with Java. In ClojureScript, it's JavaScript.
;; The syntax is almost identical:

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/table
 {:head ["Clojure (Java)" "ClojureScript (JavaScript)"]
  :rows [["(.method obj arg)" "(.method obj arg)"]
         ["(.-field obj)" "(.-field obj)"]
         ["(new ClassName)" "(js/ClassName.)"]
         ["ClassName/staticMethod" "js/ClassName.staticMethod"]]})

;; ### The `js/` namespace
;; All global JavaScript objects live in `js/`:

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Console logging (your println equivalent)
(js/console.log \"Hello from ClojureScript!\")

;; Alerts (annoying but proves it works)
(js/alert \"It's alive!\")

;; The window object
js/window

;; Current URL
(.-href (.-location js/window))

;; Get current timestamp
(js/Date.now)")

;; ### Property access with `.-`

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; JavaScript: document.body
(.-body js/document)

;; JavaScript: window.innerWidth
(.-innerWidth js/window)

;; Nested: window.location.href
(.. js/window -location -href)
;; or
(-> js/window .-location .-href)")

;; ### Method calls with `.`

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; JavaScript: document.getElementById(\"app\")
(.getElementById js/document \"app\")

;; JavaScript: \"hello\".toUpperCase()
(.toUpperCase \"hello\")

;; JavaScript: [1,2,3].map(x => x * 2)
(.map #js [1 2 3] (fn [x] (* x 2)))")

;; ### Creating JavaScript objects

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; JavaScript: new Date()
(js/Date.)

;; JavaScript object literal: {name: \"Alice\", age: 30}
#js {:name \"Alice\" :age 30}

;; JavaScript array: [1, 2, 3]
#js [1 2 3]

;; Convert Clojure to JavaScript
(clj->js {:name \"Alice\" :nested {:foo \"bar\"}})

;; Convert JavaScript to Clojure
(js->clj #js {:name \"Alice\"} :keywordize-keys true)")

;; ---
;; ## Part 2: DOM Manipulation (The Raw Way)

;; Before we use Reagent, understand what's underneath:

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Get an element
(def app-div (.getElementById js/document \"app\"))

;; Set its content
(set! (.-innerHTML app-div) \"<h1>Hello!</h1>\")

;; Create an element
(def btn (.createElement js/document \"button\"))
(set! (.-textContent btn) \"Click me!\")

;; Add event listener
(.addEventListener btn \"click\"
                   (fn [e] (js/alert \"Clicked!\")))

;; Append to DOM
(.appendChild app-div btn)")

;; This is tedious. That's why we use Reagent.

;; ---
;; ## Part 3: Reagent - React Without the Ceremony

;; Reagent wraps React with a simple, Clojure-friendly API.
;; Components are just functions that return hiccup.

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 "(require '[reagent.core :as r])
(require '[reagent.dom :as rdom])")

;; ### Your first component

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; A component is just a function returning hiccup
(defn greeting []
  [:div
   [:h1 \"Hello, World!\"]
   [:p \"This is Reagent.\"]])

;; Render it to the DOM
(rdom/render [greeting]
             (.getElementById js/document \"app\"))")

;; ### Components with arguments

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 "(defn greeting [name]
  [:div
   [:h1 \"Hello, \" name \"!\"]
   [:p \"Welcome to the app.\"]])

;; Use it (note the vector syntax)
(rdom/render [greeting \"Alice\"]
             (.getElementById js/document \"app\"))")

;; ### Reactive atoms - The Magic
;;
;; This is where ClojureScript shines. Reagent atoms auto-update the UI.

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Define a reactive atom (like Clojure atom, but UI-aware)
(def counter (r/atom 0))

;; Component that uses the atom
(defn counter-component []
  [:div
   [:p \"Count: \" @counter]
   [:button {:on-click #(swap! counter inc)} \"+\"]
   [:button {:on-click #(swap! counter dec)} \"-\"]])

;; Render it
(rdom/render [counter-component]
             (.getElementById js/document \"app\"))

;; Now try in REPL:
(swap! counter inc)   ; UI updates!
(reset! counter 100)  ; UI updates!")

;; ### Local state with `r/atom` inside components
;;
;; The inner function is the render function. The outer function runs once
;; to set up state. This is called a "Form-2" component.

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; For component-local state, create the atom inside a closure
(defn input-component []
  (let [text (r/atom \"\")]
    (fn []  ; <-- Note: returning a function!
      [:div
       [:input {:type \"text\"
                :value @text
                :on-change #(reset! text (-> % .-target .-value))}]
       [:p \"You typed: \" @text]])))")

;; ---
;; ## Part 4: DataScript - Your In-Browser Database

;; DataScript is Datomic/XTDB for the browser. Same query language!

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 "(require '[datascript.core :as d])

;; Define a schema (like XTDB, but simpler)
(def schema
  {:person/name   {:db/unique :db.unique/identity}
   :person/age    {}
   :person/friends {:db/valueType :db.type/ref
                    :db/cardinality :db.cardinality/many}})

;; Create a connection (in-memory database)
(def conn (d/create-conn schema))")

;; ### Transactions

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Add data (same as XTDB!)
(d/transact! conn
             [{:person/name \"Alice\" :person/age 30}
              {:person/name \"Bob\" :person/age 25}])

;; Add with temp IDs for refs
(d/transact! conn
             [{:db/id -1 :person/name \"Carol\" :person/age 28}
              {:db/id -2 :person/name \"Dave\" :person/age 32
               :person/friends [-1]}])")

;; ### Queries

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Query - almost identical to XTDB!
(d/q '[:find ?name ?age
       :where
       [?e :person/name ?name]
       [?e :person/age ?age]]
     @conn)
;; => #{[\"Alice\" 30] [\"Bob\" 25] [\"Carol\" 28] [\"Dave\" 32]}

;; Pull syntax
(d/q '[:find [(pull ?e [:person/name :person/age]) ...]
       :where [?e :person/name]]
     @conn)

;; With parameters
(d/q '[:find ?name
       :in $ ?min-age
       :where
       [?e :person/name ?name]
       [?e :person/age ?age]
       [(> ?age ?min-age)]]
     @conn 27)")

;; ### Reactivity with DataScript

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Listen to all transactions
(d/listen! conn :my-listener
           (fn [tx-report]
             (js/console.log \"DB changed!\"
                             (clj->js (:tx-data tx-report)))))

;; Now any transact! will trigger the listener
(d/transact! conn [{:person/name \"Eve\" :person/age 22}])

;; Remove listener
(d/unlisten! conn :my-listener)")

;; ---
;; ## Part 5: Persistence - localStorage

;; The browser's key-value store. Simple but effective.

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Write (must be strings!)
(.setItem js/localStorage \"my-key\" \"my-value\")

;; Read
(.getItem js/localStorage \"my-key\")
;; => \"my-value\"

;; Remove
(.removeItem js/localStorage \"my-key\")

;; Store Clojure data (serialize to EDN)
(defn save! [key data]
  (.setItem js/localStorage key (pr-str data)))

(defn load [key]
  (when-let [s (.getItem js/localStorage key)]
    (cljs.reader/read-string s)))

;; Usage
(save! \"my-data\" {:name \"Alice\" :scores [1 2 3]})
(load \"my-data\")
;; => {:name \"Alice\" :scores [1 2 3]}")

;; ---
;; ## Part 6: Putting It Together - A Mini App

;; Let's build a simple todo list that persists to localStorage.

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 "(ns my-app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [datascript.core :as d]))

;; Schema
(def schema {:todo/text {} :todo/done? {}})

;; Database
(def conn (d/create-conn schema))

;; Persistence
(defn save-db! []
  (.setItem js/localStorage \"todos\"
            (pr-str (d/datoms @conn :eavt))))

;; Auto-save on changes
(d/listen! conn :persist (fn [_] (save-db!)))

;; Add a todo
(defn add-todo! [text]
  (d/transact! conn [{:todo/text text :todo/done? false}]))

;; Toggle done
(defn toggle! [id]
  (let [done? (:todo/done? (d/entity @conn id))]
    (d/transact! conn [{:db/id id :todo/done? (not done?)}])))

;; Query all todos
(defn all-todos []
  (d/q '[:find [(pull ?e [*]) ...]
         :where [?e :todo/text]]
       @conn))

;; Trigger re-render on DB changes
(def db-version (r/atom 0))
(d/listen! conn :render (fn [_] (swap! db-version inc)))

;; Components
(defn todo-item [{:keys [db/id todo/text todo/done?]}]
  [:li {:style {:text-decoration (if done? \"line-through\" \"none\")}}
   [:input {:type \"checkbox\"
            :checked done?
            :on-change #(toggle! id)}]
   text])

(defn todo-input []
  (let [text (r/atom \"\")]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (when (seq @text)
                             (add-todo! @text)
                             (reset! text \"\")))}
       [:input {:value @text
                :on-change #(reset! text (-> % .-target .-value))
                :placeholder \"What needs doing?\"}]
       [:button {:type \"submit\"} \"Add\"]])))

(defn app []
  @db-version  ; Subscribe to changes
  [:div
   [:h1 \"My Todos\"]
   [todo-input]
   [:ul
    (for [todo (all-todos)]
      ^{:key (:db/id todo)}
      [todo-item todo])]])

;; Mount
(defn init! []
  (rdom/render [app] (.getElementById js/document \"app\")))")

;; ---
;; ## Part 7: REPL Workflow Tips

;; ### Tip 1: Hot reload is your friend
;; shadow-cljs reloads on save. But sometimes you want manual control:

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Force re-render
(rdom/render [app] (.getElementById js/document \"app\"))")

;; ### Tip 2: Inspect state at any time

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; See your atoms
@my-atom

;; Query your database
(d/q '[:find ?e ?a ?v :where [?e ?a ?v]] @conn)

;; Dump localStorage
(js->clj (js/Object.entries js/localStorage))")

;; ### Tip 3: Debug with tap>

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/code
 ";; Set up a tap (like a debug logger)
(add-tap (fn [x] (js/console.log \"TAP:\" (clj->js x))))

;; Then in your code:
(tap> {:event :button-clicked :data some-data})")

;; ### Tip 4: Use the browser devtools
;; - **Elements tab**: inspect DOM
;; - **Console tab**: see your logs
;; - **Application tab**: inspect localStorage, Service Workers
;; - **Network tab**: see HTTP requests

;; ---
;; ## Exercises

;; 1. **Counter**: Build a counter with + and - buttons
;; 2. **Form**: Build a form with name/email inputs and a submit button
;; 3. **List**: Display a list of items from a DataScript query
;; 4. **Persistence**: Save/load the list to localStorage
;; 5. **PWA**: Add offline support with a service worker

;; ---
;; ## Resources

^{:nextjournal.clerk/visibility {:result :hide}}
(clerk/html
 [:ul
  [:li [:a {:href "https://reagent-project.github.io/"} "Reagent docs"]]
  [:li [:a {:href "https://github.com/tonsky/datascript"} "DataScript docs"]]
  [:li [:a {:href "https://shadow-cljs.github.io/docs/UsersGuide.html"} "shadow-cljs User Guide"]]
  [:li [:a {:href "https://cljs.info/cheatsheet/"} "ClojureScript Cheatsheet"]]])

;; Happy hacking! 🎉
