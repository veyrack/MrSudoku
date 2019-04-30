(ns mrsudoku.model.solver)

(require '[mrsudoku.model.grid :as g])

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


(declare all-singleton?)
(declare build-solution)
(declare solution?)
(declare select-var)
(declare find-solution)
(declare add-vect)
(declare transpose)
(declare adding)
(declare completing)
(declare add-edge)
(declare augment)
(declare inv-edges)
(declare merge-edges)
(declare sinks)
(declare dfs)
(declare dfs-post)
(declare complete-matching?)
(declare dfs-stack)
(declare compute-scc)
(declare doms-from-sccomp)
(declare doms-from-scc)
(declare isolated-values)
(declare value-known-by)
(declare add-value)
(declare vars-of)
(declare access)
(declare max-matching)
(declare complete-matching?)
(declare add-vertex)
(declare remove-edge)
(declare graph-with-matching)
(declare alldiff)

(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  (second (solution grid)))


(defn all-singleton?
  "Verifie si toute les clefs du domaine ont une seule valeur"
  [doms]
  (every? #(= (count %) 1) (vals doms)))


(defn build-solution
  "Construit une solution en choissisant les premiers elements de chaque domaine"
  [domaine]
  (into {} (map (fn [[x xdom]] [x (first xdom)]) domaine)))


(defn solution?
  "Verifie si sol est une solution selon les contraintes"
  [constraints sol]
  (loop [cs constraints]
    (if (seq cs)
      (let [constraint (first cs)]
        (if ((:check constraint) (get sol (:var1 constraint)) (get sol (:var2 constraint)))
          (recur (rest cs))
          false))
      true)))

(defn select-var
  "Selectionne dans doms le premier element qui n'est pas un singleton"
  [doms]
  (some (fn [[x xdom]] (if (> (count xdom) 1)
                          x
                          nil)) doms))

(defn find-solution
      "Cherche une solution dans doms selon les contraintes"
      [constraints doms]
      (if (all-singleton? doms)
        (let [sol (build-solution doms)]
          (if (solution? constraints sol)
            sol
            nil))
        (let [x (select-var doms)]
            (loop [xval (get doms x)]
              (if (seq xval)
                (let [sol (find-solution constraints (assoc doms x #{(first xval)}))]
                  (if sol
                    sol
                    (recur (rest xval))))
                nil)))))


(defn add-vect
  "Ajoute au graphe une liaison entre vect(sommet) et la valeur donnée"
  [graph vect val]
  (if (contains? graph vect)
    (assoc graph vect (conj (get graph vect) val))
    (if (nil? val)
      (assoc graph vect #{})
      (assoc graph vect #{val}))))

(defn adding
  "Ajoute dans le gaphe une valeur à un ensemble de sommet(vals)"
  [graph key vals]
  (loop [res graph,s vals]
    (if (seq s)
      (recur (add-vect res (first s) key) (rest s))
      res)))

(defn transpose
  "Inverse les liaisons du graphe"
  [graph]
  (loop [keys (keys graph),values (vals graph),res {}]
;    (println keys)
;    (println values)
;    (println res)
    (if (seq keys)
      (if (= #{} (first values))
        (recur (rest keys) (rest values) res)
        (recur (rest keys) (rest values) (adding res (first keys) (first values))))
      (completing res graph))))



(defn completing
  "S'il manque des sommets au graphe, la fonction les ajoute"
  [res graph]
  (loop [res res, s (keys graph)]
    (if (seq s)
      (if (contains? res (first s))
        (recur res (rest s))
        (recur (add-vect res (first s) nil) (rest s)))
      res)))

;(defn add-edge [graph src dest]
;  (assoc graph src (conj (get graph src) dest)))

(defn augment
  "Lie une sommet à une valeur unique, ou vole la valeur d'un autre sommet"
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


(defn inv-edges
  ""
  [src dests]
  (zipmap dests (repeat #{src})))

(defn merge-edges
  ""
  [edge1 edge2]
  (loop [s edge2,m edge1]
    (if (seq s)
      (let [[k,n2] (first s)]
        (if-let [n1 (get m k)]
          (recur (rest s) (assoc m k (clojure.set/union n1 n2)))
          (recur (rest s) (assoc m k n2))))
      m)))


(defn sinks
  ""
  [graph verts]
  (reduce (fn [ngraph vert]
            (if (contains? ngraph vert)
              ngraph
              (assoc ngraph vert #{})))
          graph
          verts))

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

(defn complete-matching? [vars match]
  (= (count vars) (count match)))

(defn dfs-stack
  "Parcours en Profondeur (pile)"
  [graph]
  (loop [verts (keys graph),stack (),visited #{}]
    (if (seq verts)
      (let [[stack',visited'] (dfs-post graph (first verts) conj stack visited)]
        (recur (rest verts) stack' visited'))
      stack)))

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


(def alldiff-doms
  {:v1 #{1,2,3}
   :v2 #{1 2 4 5}
   :v3 #{4 5 6}
   :v4 #{4 5 6}
   :v5 #{4 5 6}})


(defn doms-from-sccomp [variables compp]
  (if (= (count compp) 1)
     (if (contains? variables (first compp))
      {(first compp) #{}}
      {})
     (let [vars (clojure.set/select #(contains? variables %) compp)
           values (clojure.set/difference compp vars)]
      (zipmap vars (repeat values)))))

;(doms-from-scc (vars-of alldiff-doms) [#{3} #{:v1} #{1} #{:v2} #{2} #{:v5 4 6 :v4 :v3 5}])

(defn doms-from-scc [vars scc]
  (reduce (fn [res comp] (conj res (doms-from-sccomp vars comp))) {} scc))

;(group-by #(contains? variables %) comp)->{true #{:v3 :v4 :v5}   false #{4 5 6}))

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


(defn access [doms scc]
  (let [sccdoms (doms-from-scc (vars-of doms) scc)
        isolated (isolated-values (vars-of doms) scc)]
    (reduce (fn [doms' value] (add-value doms' (value-known-by doms value) value)) sccdoms isolated)))

;(vars-of biparti)
;(doms-from-scc (vars-of alldiff-doms) (compute-scc (graph-with-matching alldiff-doms (max-matching alldiff-doms))))
;(access biparti (compute-scc (graph-with-matching biparti (max-matching biparti))))
;(access alldiff-doms (compute-scc (graph-with-matching alldiff-doms (max-matching alldiff-doms))))

(defn max-matching [doms]
  (reduce (fn [m node] (nth (augment doms node #{} m) 2)) {} (keys doms)))
  ;(loop [res {},keys (keys doms),visited #{}]
  ;  (if (seq keys)
  ;    (let [[rep,visited',match] (augment doms (first keys) visited res)]
  ;      ;(println rep visited' match)
  ;     (recur match (rest keys) visited'))
  ;  res)))


(defn complete-matching? [vars match]
  (= (count vars) (count match)))

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

;(compute-scc (graph-with-matching alldiff-doms (max-matching alldiff-doms)))

;(alldiff alldiff-doms)

(defn alldiff
  "simplify the doms for the all-different constraint,return nil if not satisfiable"
  [doms]
  (let [match (max-matching doms)]
       (if (complete-matching? doms match)
         (let [scc (compute-scc (graph-with-matching doms match))]
           ;(println scc)
           (access doms scc))
         nil)))

;;FONCTIONS RAJOUTEE_________________________________________________________________________________________

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
  "Retourne le domaine de la cellule en eliminant les valeurs de la colonne, ligne et block"
  (if-let [res (cell-value (cell grid coll ligne))]
    (conj #{} res)
    (let [d (reduce (fn [res add] (conj res add)) (values (row grid ligne)) (values (col grid coll))), delete (reduce (fn [res add] (conj res add)) d (values (block grid bloc)))]
     (clojure.set/difference #{1 2 3 4 5 6 7 8 9} delete))))

(defn rows-doms [grid row]
  "Retourne les domaines de chaque cellule de la ligne (row: nombre de 1 à 9)"
    (loop [res {}, col 1]
      (if (< (count res) 9)
        (if (< col 4)
          (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc col))
          (if (< col 7)
            (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc col))
            (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc col))))
        res)))

(defn cols-doms [grid col]
  "Retourne les domaines de chaque cellule de la colonne (col: nombre de 1 à 9)"
    (loop [res {}, row 1]
     (if (< (count res) 9)
       (if (< row 4)
         (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc row))
         (if (< row 7)
           (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc row))
           (recur (assoc res (keyword (str "v" row col)) (cell-dom grid col row (which-bloc row col))) (inc row))))
       res)))



(defn bloc-doms [grid b]
  "Retourne les domaines de chaque cellule du block (b: nombre de 1 à 9)"
  (if-let [bloc (which-bloc b)]
    (loop [res {}, lig (first bloc), col (second bloc), cpt 1]
      (if (< (count res) 9)
        (if (zero? (rem cpt 3))
          (recur (assoc res (keyword (str "v" lig col)) (cell-dom grid col lig b)) (inc lig) (second bloc) (inc cpt))
          (recur (assoc res (keyword (str "v" lig col)) (cell-dom grid col lig b)) lig (inc col) (inc cpt)))
        res))
    nil))

;(bloc-doms sudoku-grid 1)
;=>{:v21 #{6}, :v11 #{5}, :v32 #{9}, :v31 #{1 2}, :v33 #{8}, :v22 #{7 4 2}, :v13 #{1 4 2}, :v12 #{3}, :v23 #{7 4 2}}


(defn grid-dom [grid]
  (loop [map {},cpt 1]
    (if (< cpt 10)
      (recur (merge map (rows-doms grid cpt)) (inc cpt))
      map)))

(defn solution
  ([grid] (solution grid 1 1))
  ([grid ligne col] (solution grid ligne col (grid-dom grid)))
  ([grid ligne col doms]
   (println ligne " " col)
   (if (and (< ligne 10) (< col 10))
     (let [cas (keyword (str "v" ligne col)), dom (get doms cas)]
       (if (= :init (get (cell grid col ligne) :status))
         (if (= col 9)
           (solution grid (inc ligne) 1)
           (solution grid ligne (inc col)))
         ;else: case non initiale
         (loop [dom dom]
           (println dom)
           (if (seq dom)
             (if (and (and (alldiff (rows-doms grid ligne)) (alldiff (cols-doms grid col))) (alldiff (bloc-doms grid (which-bloc ligne col))))
               (let [newgrid (change-cell grid col ligne (mk-cell :set (first dom)))]
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

;______________________________________________________________________________________________________________________
