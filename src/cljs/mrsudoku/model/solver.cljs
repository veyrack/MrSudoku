(ns mrsudoku.model.solver)

(def graph {:A #{:F :B :C},
            :B #{:C}
            :C #{:D}
            :D #{:E}
            :E #{:C}
            :F #{:H :G}
            :G #{:H :I}
            :H #{:F :I}
            :I #{}})



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
                          nil)) doms))

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
(defn add-vect [graph vect val]
  (if (contains? graph vect)
    (assoc graph vect (conj (get graph vect) val))
    (if (nil? val)
      (assoc graph vect #{})
      (assoc graph vect #{val}))))

(defn transpose [graph]
  (loop [keys (keys graph),values (vals graph),res {}]
;    (println keys)
;    (println values)
;    (println res)
    (if (seq keys)
      (if (= #{} (first values))
        (recur (rest keys) (rest values) res)
        (recur (rest keys) (rest values) (adding res (first keys) (first values))))
      (completing res graph))))

(defn adding [graph key vals]
  (loop [res graph,s vals]
    (if (seq s)
      (recur (add-vect res (first s) key) (rest s))
      res)))

(defn completing [res graph]
  (loop [res res, s (keys graph)]
    (if (seq s)
      (if (contains? res (first s))
        (recur res (rest s))
        (recur (add-vect res (first s) nil) (rest s)))
      res)))

(defn add-edge [graph src dest]
  (assoc graph src (conj (get graph src) dest)))

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

(defn dfs [grpah vert f init visited]
  (if (visited vert)
    [init visited]
    (loop [verts (get graph vert), res (f init vert), visited (conj visited vert)]
      (if (seq verts)
        (let [[res', visited'] (dfs graph (first verts) f res visited)]
          (recur (rest verts) res' visited'))
        [res visited]))))

(defn dfs-post [grpah vert f init visited]
  (if (visited vert)
    [init visited]
    (loop [verts (get graph vert), res init,visited (conj visited vert)]
      (if (seq verts)
        (let [[res', visited'] (dfs-post graph (first verts) f res visited)]
          (recur (rest verts) res' visited'))
        [(f res vert) visited]))))

(defn complete-matching? [vars match]
  (= (count vars) (count match)))

(defn dfs-stack [graph]
  (loop [verts (keys graph),stack (),visited #{}]
    (if (seq verts)
      (let [[stack',visited'] (dfs-post graph (first verts) conj stack visited)]
        (recur (rest verts) stack' visited'))
      stack)))

(defn compute-scc [graph]
  (let [stack (dfs-stack graph), tgraph (transpose graph)]
    (loop [s stack,visited #{},res []]
      (if (seq s)
        (if (visited (first s))
          (recur (rest s) visited res)
          (let [[comp visited'] (dfs tgraph (first s) conj #{} visited)];;dfs-pre si ca marche pas
            (recur (rest s) visited' (conj res comp))))
        res))))
