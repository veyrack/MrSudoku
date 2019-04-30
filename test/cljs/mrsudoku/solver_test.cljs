(ns mrsudoku.solver_test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [mrsudoku.model.grid :as g]
            [mrsudoku.model.solver :as s]))

(deftest cell-value-test
  (is (= (cell-value {:status :init, :value 5}) 5))
  (is (= (cell-value {:status :empty}) nil)))


(def graph {:A #{:F :B :C},
            :B #{:C}
            :C #{:D}
            :D #{:E}
            :E #{:C}
            :F #{:H :G}
            :G #{:H :I}
            :H #{:F :I}
            :I #{}})

(def biparti {:x1 #{1 4 43}
              :x2 #{1}
              :x3 #{4}})
(def domaines {:a #{1,3}
               :b #{1,2,3}})

(def constraint [{:var1 :b
                  :var2 :a
                  :check not=}])

(def alldiff-doms
  {:v1 #{1,2,3}
   :v2 #{1 2 4 5}
   :v3 #{4 5 6}
   :v4 #{4 5 6}
   :v5 #{4 5 6}})

(def ^:private sudoku-grid @#'g/sudoku-grid)

(deftest add-vect-test
  (is (= (s/add-vect alldiff-doms :v1 4) {:v1 #{1,2,3,4}
                                          :v2 #{1 2 4 5}
                                          :v3 #{4 5 6}
                                          :v4 #{4 5 6}
                                          :v5 #{4 5 6}})))

(deftest adding
  (is (= (s/adding alldiff-doms 1 #{:v4 :v5}) {:v1 #{1,2,3,4}
                                               :v2 #{1 2 4 5}
                                               :v3 #{4 5 6}
                                               :v4 #{1 4 5 6}
                                               :v5 #{1 4 5 6}})))


(deftest completin
  (is (= (s/completin {:v1 #{1,2,3,4}
                       :v2 #{1 2 4 5}
                       :v3 #{4 5 6}
                       :v4 #{1 4 5 6}} alldiff-doms) {:v1 #{1,2,3,4}
                                                          :v2 #{1 2 4 5}
                                                          :v3 #{4 5 6}
                                                          :v4 #{1 4 5 6}
                                                          :v5 #{}})))

(deftest transpose
  (is (= (s/transpose alldiff-doms) {:v2 #{}, 1 #{:v2 :v5 :v1 :v4}, :v5 #{}, :v1 #{}, 4 #{:v2 :v5 :v1 :v4 :v3}, 6 #{:v5 :v4 :v3}, 3 #{:v1}, 2 #{:v2 :v1}, :v4 #{}, :v3 #{}, 5 #{:v2 :v5 :v4 :v3}})))

(deftest augment
  (is (= (s/augment {:x1 #{1 4 43}
                     :x2 #{1}
                     :x3 #{4}} :x2 #{1} {1 :x1}) [false #{1} {1 :x1}])))

(deftest inv-edges
  (is (= (s/inv-edges 1 #{:v1 :v2 :v3}) {:v2 #{1}, :v1 #{1}, :v3 #{1}})))

(deftest dfs
  (is (= (s/dfs graph :A conj #{} #{}) [#{:I :A :F :D :B :C :E :G :H} #{:I :A :F :D :B :C :E :G :H}])))

(deftest dfs-post
  (is (= (s/dfs-post graph :A conj #{} #{}) [#{:I :A :F :D :B :C :E :G :H} #{:I :A :F :D :B :C :E :G :H}])))

(deftest complete-matching?
  (is (= (s/complete-matching? (s/vars-of alldiff-doms) (s/max-matching alldiff-doms)) true)))


(deftest dfs-stack
  (is (= (s/dfs-stack alldiff-doms) (:v5 :v4 :v3 6 :v2 5 4 :v1 2 3 1))))

(deftest compute-scc
  (is (= (s/compute-scc (s/graph-with-matching alldiff-doms (s/max-matching alldiff-doms))) [#{3} #{:v1} #{1} #{:v2} #{2} #{:v5 4 6 :v4 :v3 5}])))

(deftest doms-from-scc
  (is (= (s/doms-from-scc (s/vars-of alldiff-doms) (s/compute-scc (s/graph-with-matching alldiff-doms (s/max-matching alldiff-doms)))) {:v1 #{}, :v2 #{}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})))

(deftest isolated-values
  (is (= (s/isolated-values (s/vars-of alldiff-doms) (s/compute-scc alldiff-doms)) #{1 2 3})))

(deftest value-known-by
  (is (= (s/value-known-by alldiff-doms 1) #{:v1 :v2})))

(deftest access
  (is (= (s/access biparti (s/compute-scc (s/graph-with-matching biparti (s/max-matching biparti)))) {:x1 #{1 4 43}, :x2 #{1}, :x3 #{4}})))

(deftest max-matching
  (is (= (s/max-matching alldiff-doms) {1 :v2
                                        3 :v1
                                        4 :v5
                                        6 :v4
                                        5 :v3})))

(deftest graph-with-matching
  (is (= (s/graph-with-matching biparti (s/max-matching biparti)) {:x1 #{1 4}, 1 #{:x2}, 4 #{:x3}, 43 #{:x1}})))

(deftest alldiff
  (is (= (s/alldiff alldiff-doms) {:v1 #{1,2,3}
                                   :v2 #{1 2}
                                   :v3 #{4 5 6}
                                   :v4 #{4 5 6}
                                   :v5 #{4 5 6}})))

(deftest which-bloc
  (is (= (s/which-bloc 7 7) 9)))

(deftest cell-dom
  (is (= (s/cell-dom sudoku-grid 1 1 1) #{5})))

(deftest grid-dom
  (is (= (s/grid-dom sudoku-grid))))
