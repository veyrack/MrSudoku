(ns mrsudoku.model.solver
  (:require [mrsudoku.model.grid :as g]
            [mrsudoku.model.conflict :as c]))


(declare solution)
(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  (second (solution grid)))


;; Part Graph______________________________________________
(declare add-vect)
(defn add-vect
  "Add in the graph a edge in a node."
  [graph vect val]
  (if (contains? graph vect)
    (assoc graph vect (conj (get graph vect) val))
    (if (nil? val)
      (assoc graph vect #{})
      (assoc graph vect #{val}))))

(declare adding)
(defn adding
  "Add a edge (key) in a set of nodes."
  [graph key vals]
  (loop [res graph,s vals]
    (if (seq s)
      (recur (add-vect res (first s) key) (rest s))
      res)))

(declare complete)
(defn complete
  "Add the node that miss the graph"
  [res graph]
  (loop [res res, s (keys graph)]
    (if (seq s)
      (if (contains? res (first s))
        (recur res (rest s))
        (recur (add-vect res (first s) nil) (rest s)))
      res)))

(declare transpose)
(defn transpose
  "Inverse les liaisons du graphe"
  [graph]
  (loop [keys (keys graph),values (vals graph),res {}]
    (if (seq keys)
      (if (= #{} (first values))
        (recur (rest keys) (rest values) res)
        (recur (rest keys) (rest values) (adding res (first keys) (first values))))
      (complete res graph))))

(declare augment)
(defn augment
  "Find a solution where the node have a unique value, return a map with value and node."
  [graph src visited match]
  (loop [dests (get graph src),visited visited]
    (if (seq dests)
      (if (visited (first dests))
        (recur (rest dests) visited)
        (if-let [old-src (get match (first dests))]
          (let [[found, visited',match'] (augment graph old-src (conj visited (first dests)) match)]
            (if found
              [true, visited',(assoc match' (first dests) src)]
              (recur (rest dests) visited')))
          [true,(conj visited (first dests)),(assoc match (first dests) src)]))
     [false,visited,match])))

(declare inv-edges)
(defn inv-edges
  [src dests]
  (zipmap dests (repeat #{src})))

(declare dfs)
(defn dfs
  "Parcours en Profondeur (prefixe)"
  [graph vert f init visited]
  (if (visited vert)
    [init visited]
    (loop [verts (get graph vert), res (f init vert), visited (conj visited vert)]
      (if (seq verts)
        (let [[res', visited'] (dfs graph (first verts) f res visited)]
          (recur (rest verts) res' visited'))
        [res visited]))))

(declare dfs-post)
(defn dfs-post
  "Parcours en Profondeur (postfixe)"
  [graph vert f init visited]
  (if (visited vert)
    [init visited]
    (loop [verts (get graph vert), res init,visited (conj visited vert)]
      (if (seq verts)
        (let [[res', visited'] (dfs-post graph (first verts) f res visited)]
          (recur (rest verts) res' visited'))
        [(f res vert) visited]))))

(declare complete-matching?)
(defn complete-matching? [vars match]
  (= (count vars) (count match)))

(declare dfs-stack)
(defn dfs-stack
  "Parcours en Profondeur (pile)"
  [graph]
  (loop [verts (keys graph),stack (),visited #{}]
    (if (seq verts)
      (let [[stack',visited'] (dfs-post graph (first verts) conj stack visited)]
        (recur (rest verts) stack' visited'))
      stack)))

(declare compute-scc)
(defn compute-scc
  "Composants fortements connexes du graphe"
  [graph]
  (let [stack (dfs-stack graph), tgraph (transpose graph)]
    (loop [s stack,visited #{},res []]
      (if (seq s)
        (if (visited (first s))
          (recur (rest s) visited res)
          (let [[comp visited'] (dfs tgraph (first s) conj #{} visited)];;dfs-pre si ca marche pas
            (recur (rest s) visited' (conj res comp))))
        res))))

(defn doms-from-sccomp [variables compp]
  (if (= (count compp) 1)
     (if (contains? variables (first compp))
      {(first compp) #{}}
      {})
     (let [vars (clojure.set/select #(contains? variables %) compp)
           values (clojure.set/difference compp vars)]
      (zipmap vars (repeat values)))))

(defn doms-from-scc [vars scc]
  (reduce (fn [res comp] (conj res (doms-from-sccomp vars comp))) {} scc))

(defn isolated-values [variables scc]
  (into #{} (map first (filter #(and (= (count %) 1) (not (variables (first %)))) scc))))

(defn value-known-by [doms value]
  (reduce (fn [res [v values]]
           (if (contains? values value)
             (conj res v)
             res)) #{} doms))

(defn add-value [doms vs value]
  (into doms (map (fn [var] [var,(conj (get doms var) value)]) vs)))
               ;[var, (update doms var #(conj % value))]

(defn vars-of [doms]
  (loop [s doms,res #{}]
    (let [[x xdom] (first s)]
      (if (seq s)
        (if (> (count xdom) 1)
          (recur (rest s) (conj res x))
          (recur (rest s) res))
        res))))

(defn sinks
  [graph verts]
  (reduce (fn [ngraph vert]
            (if (contains? ngraph vert)
              ngraph
              (assoc ngraph vert #{})))
          graph
          verts))

(declare access)
(defn access [doms scc]
  (let [sccdoms (doms-from-scc (vars-of doms) scc)
        isolated (isolated-values (vars-of doms) scc)]
    (reduce (fn [doms' value] (add-value doms' (value-known-by doms value) value)) (sinks sccdoms (keys doms)) isolated)))

(declare max-matching)
(defn max-matching [doms]
  (reduce (fn [m node] (nth (augment doms node #{} m) 2)) {} (keys doms)))
  ;(loop [res {},keys (keys doms),visited #{}]
  ;  (if (seq keys)
  ;    (let [[rep,visited',match] (augment doms (first keys) visited res)]
  ;      ;(println rep visited' match)
  ;     (recur match (rest keys) visited'))
  ;  res)))

(defn add-vertex
  "Adds an unlinked vertex to the graph.
  Does nothing if already present"
  [graph vert]
  (if (contains? graph vert)
    vert
    (assoc graph vert #{})))

(defn add-edge
  "Adds the a->b edge to the supplied graph"
  [graph a b]
  (update graph a #(conj (or % #{}) b)))

(defn remove-edge
 "Removes the a->b edge"
 [g a b]
 (if (= (count (get g a)) 1)
  (dissoc g a)
  (update g a #(disj % b))))

(defn graph-with-matching [graph match]
  (reduce (fn [mgraph [src dest]]
            (-> mgraph
              ;(println src dest)
              (add-vertex src)
              (add-edge src dest)
              (remove-edge dest src)))
          graph match))

(declare alldiff)
(defn alldiff
  "Simplify the domaine for the all-different constraint, return nil if not satisfiable"
  [doms]
  (let [match (max-matching doms)]
       (if (complete-matching? doms match)
         (let [scc (compute-scc (graph-with-matching doms match))]
           ;(println scc)
           (access doms scc))
         nil)))

;;Part Grild-Solver_________________________________________________________________________________________
(defn which-bloc
  ([b]
   (cond
     (= 1 b) [1 1]
     (= 2 b) [1 4]
     (= 3 b) [1 7]
     (= 4 b) [4 1]
     (= 5 b) [4 4]
     (= 6 b) [4 7]
     (= 7 b) [7 1]
     (= 8 b) [7 4]
     (= 9 b) [7 7]
     :else nil))
  ([ligne col]
   (let [bx (quot (- ligne 1) 3)
         by (quot (- col 1) 3)]
     (+ (* bx 3) (inc by)))))

(defn cell-dom [grid coll ligne bloc]
  "Return a set with the possible number of a cell (without the number of the row, col and block)."
  (if-let [res (g/cell-value (g/cell grid coll ligne))]
    (conj #{} res)
    (let [d (reduce (fn [res add] (conj res add)) (c/values (g/row grid ligne)) (c/values (g/col grid coll))), delete (reduce (fn [res add] (conj res add)) d (c/values (g/block grid bloc)))]
     (clojure.set/difference #{1 2 3 4 5 6 7 8 9} delete))))

(defn rows-doms [grid row]
  "Create a graph with all the domains of the cells in a row (1 to 9)."
    (loop [res {}, col 1]
      (if (< (count res) 9)
        (if (< col 4)
          (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc col))
          (if (< col 7)
            (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc col))
            (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc col))))
        res)))

(defn cols-doms [grid col]
  "Create a graph with all the domains of the cells in a colonne (1 to 9)."
    (loop [res {}, row 1]
     (if (< (count res) 9)
       (if (< row 4)
         (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc row))
         (if (< row 7)
           (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc row))
           (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc row))))
       res)))

(defn bloc-doms [grid b]
  "Create a graph with all the domains of the cells in a block (1 to 9)."
  (if-let [bloc (which-bloc b)]
    (loop [res {}, lig (first bloc), col (second bloc), cpt 1]
      (if (< (count res) 9)
        (if (zero? (rem cpt 3))
          (recur (assoc res (keyword (str "v" lig col)) (cell-dom grid col lig b)) (inc lig) (second bloc) (inc cpt))
          (recur (assoc res (keyword (str "v" lig col)) (cell-dom grid col lig b)) lig (inc col) (inc cpt)))
        res))
    nil))


(defn grid-dom [grid]
  "Create a graph with all the domains of the cells"
  (loop [map {},cpt 1]
    (if (< cpt 10)
      (recur (merge map (rows-doms grid cpt)) (inc cpt))
      map)))

(defn solution
  "Find if the solution have a solution"
  ([grid] (solution grid 1 1))
  ([grid ligne col] (solution grid ligne col (grid-dom grid)))
  ([grid ligne col doms]
   ;(println ligne " " col)
   (if (and (< ligne 10) (< col 10))
     (let [cas (keyword (str "v" ligne col)), dom (get doms cas)]
       (if (= :init (get (g/cell grid col ligne) :status))
         (if (= col 9)
           (solution grid (inc ligne) 1)
           (solution grid ligne (inc col)))
         ;else: case non initiale
         (loop [dom dom]
           ;(println dom)
           (if (seq dom)
             (if (and (and (alldiff (rows-doms grid ligne)) (alldiff (cols-doms grid col))) (alldiff (bloc-doms grid (which-bloc ligne col))))
               (let [newgrid (g/change-cell grid col ligne (g/mk-cell :set (first dom)))]
                 (if (= col 9)
                   (let [[rep ngrid] (solution newgrid (inc ligne) 1)]
                     (if rep
                       [true ngrid]
                       (recur (rest dom))))
                   (let  [[rep ngrid] (solution newgrid ligne (inc col))]
                     (if rep
                      [true ngrid]
                      (recur (rest dom))))))
              ;else: aucune solution du domaine
              [false nil])
            [false nil]))))
     ;else: on a fini de parcourir la grille
     [true grid])))
