(ns mrsudoku.model.solver)

(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  ;; A compléter
  nil)


(defn all-singleton? [doms]
  (every? #(= (count %) 1) (vals doms)))

;(defn build-solution [doms]
;  (into {} (map (fn [[x xdom] doms [x (first xdom)]]))))

(defn solution? [constraints sol]
  (loop [cs constraints]
    (if (seq cs)
      (let [constraint (first cs)]
        (if ((:check constraint) (get sol (:var1 constraint)) (get sol (:var2 constraint)))
          (recur (rest cs))
          false))
      true)))

(defn select-var [doms]
  (some (fn [[x xdom]] (if (> (count xdom) 1)
                          x
                          nil))doms))

(defn find-solution [constraints doms]
  (if (all-singleton? doms)
    (let [sol (build-solution doms)]
      (if (solution? constraints sol)
        sol
        (let [x (select-var doms)]
          (loop [xval (get doms x)]
            (if (seq xval)
              (let [sol (find-solution constraints (assoc doms x #{(first xval)}))]
                (if sol
                  sol
                  (recur (rest xval))))
             nil)))))))

(defn add-edge [graph src dest]
  (assoc grapg src (conj (get graph src) dest)))

(defn augment [graph src visited match]
  (loop [dests (get graph src),visited visited]
    (if (seq dests)
      (if-let [old-src (get match (first dests))]
        (let [[found, visited',match'] (augment graph old-src (conj visited (first test)) match)]
          (if found
            [true, visited',(assoc match' (first dests) src)]
            (recur (rest dests) visited')))
       [true,(conj visited (first dests)),(assoc match (first dests) src)])
     [false,visited,match])))


(defn inv-edges [src dests]
  (zipmap dests (repeat #{src})))

(defn merge-edges [edge1 edge2]
  (loop [s edge2,m edge1]
    (if (seq s)
      (let [[k,n2] (first s)]
        (if-let [n1 (get m k)]
          (recur (rest s) (assoc m k (clojure.set/union n1 n2)))
          (recur (rest s) (assoc m k n2))))
      m)))

(defn sinks [graph verts]
  (reduce (fn [ngraph vert]
            (if (contains? ngraph vert)
              ngraph
              (assoc ngraph vert #{})))
          graph
          verts))
