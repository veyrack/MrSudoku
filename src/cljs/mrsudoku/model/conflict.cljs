(ns mrsudoku.model.conflict
  (:require [clojure.set :as set]
            [mrsudoku.model.grid :as g]))


;; ========================================================================
;; Fichier à compléter : il faut utiliser les fonctions du namespace grid.
;; et regarder également les tests dans `test/cljs/mrsudoku/conflict_test.cljs`
;; et bien sûr `test/cljs/mrsudoku/grid_test.cljs`  (et les autres tests ...)
;; ========================================================================

(defn values
  "Return the set of values of a vector or grid `cells`."
  [cells]

  (into #{} (map (fn [x] (get x :value)) (filter (fn [x] (get x :value)) cells))))

(defn values-except
  "Return the set of values of a vector of cells, except the `except`-th."
  [cells except]
  (values (remove (conj #{} (get cells (dec except))) cells)))



(defn mk-conflict [kind cx cy value]
  {:status :conflict
   :kind kind
   :value value})

(defn merge-conflict-kind
  [kind1 kind2]
  (if (set? kind1)
    (if (set? kind2)
      (clojure.set/union kind1 kind2)
      (conj kind1 kind2))
    (if (set? kind2)
      (conj kind2 kind1)
      (if (= 1 (count (conj #{} kind1 kind2)))
        kind1
        (conj #{} kind1 kind2)))))

(defn merge-conflict [conflict1 conflict2]
  (merge-conflict-kind (get conflict1 :kind) (get conflict2 :kind)))

(defn merge-conflicts [& conflicts]
  (apply (partial merge-with merge-conflict) conflicts))

(defn update-conflicts
  [conflict-kind cx cy value conflicts]
  (if-let [conflict (get conflicts [cx, cy])]
    (assoc conflicts [cx, cy] (mk-conflict (merge-conflict-kind conflict-kind (:kind conflict))
                                           cx cy value))
    (assoc conflicts [cx, cy] (mk-conflict conflict-kind cx cy value))))

(defn conflict-value [values except cell]
  (when-let [value (g/cell-value cell)]
    (when (and (not= (:status cell) :init)
               (contains? (values-except values except) value))
      value)))

(defn col-conflicts
  "Returns a map of conflicts in a `col`."
  [col cx]
  (loop [cy 1, cells (seq col), conflicts {}]
    ;(println conflicts)
    (if (seq cells)
      (let [cell (first cells)]
        (if-let [value (conflict-value col cy cell)]
          (recur (+ cy 1) (rest cells) (update-conflicts :col cx cy value conflicts))
          (recur (+ cy 1) (rest cells) conflicts)))
      ;; no more cells
      conflicts)))

(defn cols-conflicts
  [grid] (reduce merge-conflicts {}
                 (map (fn [c] (col-conflicts (g/col grid c) c)) (range 1 10))))



(defn conversion [n cy]
      (loop [s n,res {}]
        (if (seq s)
          (recur (rest s) (assoc res (first (first s)) (assoc (g/mk-cell :conflict cy) :kind :row)))
          res)))

(defn find-conflicts
  "Returns a map of conflicts in a `row`."
  [row cy ligne]
  (loop [cpt 1, res {}, s row]
    (if (seq s)
      (if (= cy (get (first s) :value))
        (recur (inc cpt) (assoc res (vector cpt ligne) (first s)) (rest s))
        (recur (inc cpt) res (rest s)))
      (if (= 1 (count res))
        {}
        (let [end (filter (fn [x] (= (get (second x) :status) :set)) res)]
          (conversion end cy))))))

(defn row-conflicts
  "Returns a map of conflicts in a `row`."
  [row cy]
  (let [map (values row)]
    (loop [s map,res {}]
      (if (seq s)
        (recur (rest s) (merge res (find-conflicts row (first s) cy)))
        (merge res {})))))

(defn rows-conflicts
  "Returns a map of conflicts in all rows of `grid`"
  [grid]
  (reduce merge-conflicts {}
                 (map (fn [c] (row-conflicts (g/row grid c) c)) (range 1 10))))

(defn block-conflicts
  [block b]
  (g/reduce-block (fn [conflicts index cx cy cell]
                    (if-let [value (conflict-value block index cell)]
                      (update-conflicts :block cx cy value conflicts)
                      conflicts)) {} block b))

(defn blocks-conflicts
  [grid]
  (reduce merge-conflicts {}
          (map (fn [b] (block-conflicts (g/block grid b) b)) (range 1 10))))

(defn grid-conflicts
  "Compute all conflicts in the Sudoku grid."
  [grid]
  (println "compute conflicts")
  (println (g/grid->str grid))
  (merge-conflicts (rows-conflicts grid)
                   (cols-conflicts grid)
                   (blocks-conflicts grid)))
