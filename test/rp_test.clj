(ns rp-test
  (:require [cheshire.core :as cheshire]
            [clojure.string :as str]
            [clojure.test :refer [deftest is]]
            [com.biffweb :as biff :refer [test-xtdb-node]]
            [rp :as main]
            [rp.app :as app]
            [malli.generator :as mg]
            [rum.core :as rum]
            [xtdb.api :as xt]))

;; TODO: Write at least a few integration tests / api tests
(deftest example-test
  (is (= 4 (+ 2 2))))

(defn get-context [node]
  {:biff.xtdb/node  node
   :biff/db         (xt/db node)
   :biff/malli-opts #'main/malli-opts})
