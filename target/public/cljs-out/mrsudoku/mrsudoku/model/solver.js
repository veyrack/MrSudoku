// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.solver');
goog.require('cljs.core');
goog.require('mrsudoku.model.grid');
/**
 * Solve the sudoku `grid` by returing a full solved grid,
 *  or `nil` if the solver fails.
 */
mrsudoku.model.solver.solve = (function mrsudoku$model$solver$solve(grid){
return cljs.core.second.call(null,mrsudoku.model.solver.solution.call(null,grid));
});
/**
 * Ajoute au graphe une liaison entre vect(sommet) et la valeur donnée
 */
mrsudoku.model.solver.add_vect = (function mrsudoku$model$solver$add_vect(graph,vect,val){
if(cljs.core.contains_QMARK_.call(null,graph,vect)){
return cljs.core.assoc.call(null,graph,vect,cljs.core.conj.call(null,cljs.core.get.call(null,graph,vect),val));
} else {
if((val == null)){
return cljs.core.assoc.call(null,graph,vect,cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.assoc.call(null,graph,vect,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
}
}
});
/**
 * Ajoute dans le gaphe une valeur à un ensemble de sommet(vals)
 */
mrsudoku.model.solver.adding = (function mrsudoku$model$solver$adding(graph,key,vals){
var res = graph;
var s = vals;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8941 = mrsudoku.model.solver.add_vect.call(null,res,cljs.core.first.call(null,s),key);
var G__8942 = cljs.core.rest.call(null,s);
res = G__8941;
s = G__8942;
continue;
} else {
return res;
}
break;
}
});
/**
 * S'il manque des sommets au graphe, la fonction les ajoute
 */
mrsudoku.model.solver.completin = (function mrsudoku$model$solver$completin(res,graph){
var res__$1 = res;
var s = cljs.core.keys.call(null,graph);
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.contains_QMARK_.call(null,res__$1,cljs.core.first.call(null,s))){
var G__8943 = res__$1;
var G__8944 = cljs.core.rest.call(null,s);
res__$1 = G__8943;
s = G__8944;
continue;
} else {
var G__8945 = mrsudoku.model.solver.add_vect.call(null,res__$1,cljs.core.first.call(null,s),null);
var G__8946 = cljs.core.rest.call(null,s);
res__$1 = G__8945;
s = G__8946;
continue;
}
} else {
return res__$1;
}
break;
}
});
/**
 * Inverse les liaisons du graphe
 */
mrsudoku.model.solver.transpose = (function mrsudoku$model$solver$transpose(graph){
var keys = cljs.core.keys.call(null,graph);
var values = cljs.core.vals.call(null,graph);
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys)){
if(cljs.core._EQ_.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.first.call(null,values))){
var G__8947 = cljs.core.rest.call(null,keys);
var G__8948 = cljs.core.rest.call(null,values);
var G__8949 = res;
keys = G__8947;
values = G__8948;
res = G__8949;
continue;
} else {
var G__8950 = cljs.core.rest.call(null,keys);
var G__8951 = cljs.core.rest.call(null,values);
var G__8952 = mrsudoku.model.solver.adding.call(null,res,cljs.core.first.call(null,keys),cljs.core.first.call(null,values));
keys = G__8950;
values = G__8951;
res = G__8952;
continue;
}
} else {
return mrsudoku.model.solver.completin.call(null,res,graph);
}
break;
}
});
/**
 * Lie une sommet à une valeur unique, ou vole la valeur d'un autre sommet
 */
mrsudoku.model.solver.augment = (function mrsudoku$model$solver$augment(graph,src,visited,match){
var dests = cljs.core.get.call(null,graph,src);
var visited__$1 = visited;
while(true){
if(cljs.core.seq.call(null,dests)){
if(cljs.core.truth_(visited__$1.call(null,cljs.core.first.call(null,dests)))){
var G__8956 = cljs.core.rest.call(null,dests);
var G__8957 = visited__$1;
dests = G__8956;
visited__$1 = G__8957;
continue;
} else {
var temp__5718__auto__ = cljs.core.get.call(null,match,cljs.core.first.call(null,dests));
if(cljs.core.truth_(temp__5718__auto__)){
var old_src = temp__5718__auto__;
var vec__8953 = mrsudoku.model.solver.augment.call(null,graph,old_src,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),match);
var found = cljs.core.nth.call(null,vec__8953,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8953,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8953,(2),null);
if(cljs.core.truth_(found)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,visited_SINGLEQUOTE_,cljs.core.assoc.call(null,match_SINGLEQUOTE_,cljs.core.first.call(null,dests),src)], null);
} else {
var G__8958 = cljs.core.rest.call(null,dests);
var G__8959 = visited_SINGLEQUOTE_;
dests = G__8958;
visited__$1 = G__8959;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),cljs.core.assoc.call(null,match,cljs.core.first.call(null,dests),src)], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,visited__$1,match], null);
}
break;
}
});
/**
 * Inverse les sommets
 */
mrsudoku.model.solver.inv_edges = (function mrsudoku$model$solver$inv_edges(src,dests){
return cljs.core.zipmap.call(null,dests,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([src])));
});
mrsudoku.model.solver.merge_edges = (function mrsudoku$model$solver$merge_edges(edge1,edge2){
var s = edge2;
var m = edge1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__8960 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__8960,(0),null);
var n2 = cljs.core.nth.call(null,vec__8960,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var n1 = temp__5718__auto__;
var G__8963 = cljs.core.rest.call(null,s);
var G__8964 = cljs.core.assoc.call(null,m,k,clojure.set.union.call(null,n1,n2));
s = G__8963;
m = G__8964;
continue;
} else {
var G__8965 = cljs.core.rest.call(null,s);
var G__8966 = cljs.core.assoc.call(null,m,k,n2);
s = G__8965;
m = G__8966;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.solver.sinks = (function mrsudoku$model$solver$sinks(graph,verts){
return cljs.core.reduce.call(null,(function (ngraph,vert){
if(cljs.core.contains_QMARK_.call(null,ngraph,vert)){
return ngraph;
} else {
return cljs.core.assoc.call(null,ngraph,vert,cljs.core.PersistentHashSet.EMPTY);
}
}),graph,verts);
});
/**
 * Parcours en Profondeur (prefixe)
 */
mrsudoku.model.solver.dfs = (function mrsudoku$model$solver$dfs(graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = f.call(null,init,vert);
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__8967 = mrsudoku.model.solver.dfs.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8967,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8967,(1),null);
var G__8970 = cljs.core.rest.call(null,verts);
var G__8971 = res_SINGLEQUOTE_;
var G__8972 = visited_SINGLEQUOTE_;
verts = G__8970;
res = G__8971;
visited__$1 = G__8972;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,visited__$1], null);
}
break;
}
}
});
/**
 * Parcours en Profondeur (postfixe)
 */
mrsudoku.model.solver.dfs_post = (function mrsudoku$model$solver$dfs_post(graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = init;
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__8973 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8973,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8973,(1),null);
var G__8976 = cljs.core.rest.call(null,verts);
var G__8977 = res_SINGLEQUOTE_;
var G__8978 = visited_SINGLEQUOTE_;
verts = G__8976;
res = G__8977;
visited__$1 = G__8978;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,res,vert),visited__$1], null);
}
break;
}
}
});
mrsudoku.model.solver.complete_matching_QMARK_ = (function mrsudoku$model$solver$complete_matching_QMARK_(vars,match){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,vars),cljs.core.count.call(null,match));
});
/**
 * Parcours en Profondeur (pile)
 */
mrsudoku.model.solver.dfs_stack = (function mrsudoku$model$solver$dfs_stack(graph){
var verts = cljs.core.keys.call(null,graph);
var stack = cljs.core.List.EMPTY;
var visited = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__8979 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),cljs.core.conj,stack,visited);
var stack_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8979,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8979,(1),null);
var G__8982 = cljs.core.rest.call(null,verts);
var G__8983 = stack_SINGLEQUOTE_;
var G__8984 = visited_SINGLEQUOTE_;
verts = G__8982;
stack = G__8983;
visited = G__8984;
continue;
} else {
return stack;
}
break;
}
});
/**
 * Composants fortements connexes du graphe
 */
mrsudoku.model.solver.compute_scc = (function mrsudoku$model$solver$compute_scc(graph){
var stack = mrsudoku.model.solver.dfs_stack.call(null,graph);
var tgraph = mrsudoku.model.solver.transpose.call(null,graph);
var s = stack;
var visited = cljs.core.PersistentHashSet.EMPTY;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.truth_(visited.call(null,cljs.core.first.call(null,s)))){
var G__8988 = cljs.core.rest.call(null,s);
var G__8989 = visited;
var G__8990 = res;
s = G__8988;
visited = G__8989;
res = G__8990;
continue;
} else {
var vec__8985 = mrsudoku.model.solver.dfs.call(null,tgraph,cljs.core.first.call(null,s),cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,visited);
var comp = cljs.core.nth.call(null,vec__8985,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8985,(1),null);
var G__8991 = cljs.core.rest.call(null,s);
var G__8992 = visited_SINGLEQUOTE_;
var G__8993 = cljs.core.conj.call(null,res,comp);
s = G__8991;
visited = G__8992;
res = G__8993;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.doms_from_sccomp = (function mrsudoku$model$solver$doms_from_sccomp(variables,compp){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,compp),(1))){
if(cljs.core.contains_QMARK_.call(null,variables,cljs.core.first.call(null,compp))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,compp),cljs.core.PersistentHashSet.EMPTY]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
var vars = clojure.set.select.call(null,(function (p1__8994_SHARP_){
return cljs.core.contains_QMARK_.call(null,variables,p1__8994_SHARP_);
}),compp);
var values = clojure.set.difference.call(null,compp,vars);
return cljs.core.zipmap.call(null,vars,cljs.core.repeat.call(null,values));
}
});
mrsudoku.model.solver.doms_from_scc = (function mrsudoku$model$solver$doms_from_scc(vars,scc){
return cljs.core.reduce.call(null,(function (res,comp){
return cljs.core.conj.call(null,res,mrsudoku.model.solver.doms_from_sccomp.call(null,vars,comp));
}),cljs.core.PersistentArrayMap.EMPTY,scc);
});
mrsudoku.model.solver.isolated_values = (function mrsudoku$model$solver$isolated_values(variables,scc){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__8995_SHARP_){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__8995_SHARP_),(1))) && (cljs.core.not.call(null,variables.call(null,cljs.core.first.call(null,p1__8995_SHARP_)))));
}),scc)));
});
mrsudoku.model.solver.value_known_by = (function mrsudoku$model$solver$value_known_by(doms,value){
return cljs.core.reduce.call(null,(function (res,p__8996){
var vec__8997 = p__8996;
var v = cljs.core.nth.call(null,vec__8997,(0),null);
var values = cljs.core.nth.call(null,vec__8997,(1),null);
if(cljs.core.contains_QMARK_.call(null,values,value)){
return cljs.core.conj.call(null,res,v);
} else {
return res;
}
}),cljs.core.PersistentHashSet.EMPTY,doms);
});
mrsudoku.model.solver.add_value = (function mrsudoku$model$solver$add_value(doms,vs,value){
return cljs.core.into.call(null,doms,cljs.core.map.call(null,(function (var$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.conj.call(null,cljs.core.get.call(null,doms,var$),value)], null);
}),vs));
});
mrsudoku.model.solver.vars_of = (function mrsudoku$model$solver$vars_of(doms){
var s = doms;
var res = cljs.core.PersistentHashSet.EMPTY;
while(true){
var vec__9000 = cljs.core.first.call(null,s);
var x = cljs.core.nth.call(null,vec__9000,(0),null);
var xdom = cljs.core.nth.call(null,vec__9000,(1),null);
if(cljs.core.seq.call(null,s)){
if((cljs.core.count.call(null,xdom) > (1))){
var G__9003 = cljs.core.rest.call(null,s);
var G__9004 = cljs.core.conj.call(null,res,x);
s = G__9003;
res = G__9004;
continue;
} else {
var G__9005 = cljs.core.rest.call(null,s);
var G__9006 = res;
s = G__9005;
res = G__9006;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.access = (function mrsudoku$model$solver$access(doms,scc){
var sccdoms = mrsudoku.model.solver.doms_from_scc.call(null,mrsudoku.model.solver.vars_of.call(null,doms),scc);
var isolated = mrsudoku.model.solver.isolated_values.call(null,mrsudoku.model.solver.vars_of.call(null,doms),scc);
return cljs.core.reduce.call(null,((function (sccdoms,isolated){
return (function (doms_SINGLEQUOTE_,value){
return mrsudoku.model.solver.add_value.call(null,doms_SINGLEQUOTE_,mrsudoku.model.solver.value_known_by.call(null,doms,value),value);
});})(sccdoms,isolated))
,sccdoms,isolated);
});
mrsudoku.model.solver.max_matching = (function mrsudoku$model$solver$max_matching(doms){
return cljs.core.reduce.call(null,(function (m,node){
return cljs.core.nth.call(null,mrsudoku.model.solver.augment.call(null,doms,node,cljs.core.PersistentHashSet.EMPTY,m),(2));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,doms));
});
/**
 * Adds an unlinked vertex to the graph.
 *   Does nothing if already present
 */
mrsudoku.model.solver.add_vertex = (function mrsudoku$model$solver$add_vertex(graph,vert){
if(cljs.core.contains_QMARK_.call(null,graph,vert)){
return vert;
} else {
return cljs.core.assoc.call(null,graph,vert,cljs.core.PersistentHashSet.EMPTY);
}
});
/**
 * Adds the a->b edge to the supplied graph
 */
mrsudoku.model.solver.add_edge = (function mrsudoku$model$solver$add_edge(graph,a,b){
return cljs.core.update.call(null,graph,a,(function (p1__9007_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3949__auto__ = p1__9007_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),b);
}));
});
/**
 * Removes the a->b edge
 */
mrsudoku.model.solver.remove_edge = (function mrsudoku$model$solver$remove_edge(g,a,b){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.get.call(null,g,a)),(1))){
return cljs.core.dissoc.call(null,g,a);
} else {
return cljs.core.update.call(null,g,a,(function (p1__9008_SHARP_){
return cljs.core.disj.call(null,p1__9008_SHARP_,b);
}));
}
});
mrsudoku.model.solver.graph_with_matching = (function mrsudoku$model$solver$graph_with_matching(graph,match){
return cljs.core.reduce.call(null,(function (mgraph,p__9009){
var vec__9010 = p__9009;
var src = cljs.core.nth.call(null,vec__9010,(0),null);
var dest = cljs.core.nth.call(null,vec__9010,(1),null);
return mrsudoku.model.solver.remove_edge.call(null,mrsudoku.model.solver.add_edge.call(null,mrsudoku.model.solver.add_vertex.call(null,mgraph,src),src,dest),dest,src);
}),graph,match);
});
/**
 * simplify the doms for the all-different constraint,return nil if not satisfiable
 */
mrsudoku.model.solver.alldiff = (function mrsudoku$model$solver$alldiff(doms){
var match = mrsudoku.model.solver.max_matching.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.complete_matching_QMARK_.call(null,doms,match))){
var scc = mrsudoku.model.solver.compute_scc.call(null,mrsudoku.model.solver.graph_with_matching.call(null,doms,match));
return mrsudoku.model.solver.access.call(null,doms,scc);
} else {
return null;
}
});
/**
 * Return the set of values of a vector or grid `cells`.
 */
mrsudoku.model.solver.values = (function mrsudoku$model$solver$values(cells){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (x){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"value","value",305978217));
}),cljs.core.filter.call(null,(function (x){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"value","value",305978217));
}),cells)));
});
mrsudoku.model.solver.which_bloc = (function mrsudoku$model$solver$which_bloc(var_args){
var G__9014 = arguments.length;
switch (G__9014) {
case 1:
return mrsudoku.model.solver.which_bloc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mrsudoku.model.solver.which_bloc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.which_bloc.cljs$core$IFn$_invoke$arity$1 = (function (b){
if(cljs.core._EQ_.call(null,(1),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
} else {
if(cljs.core._EQ_.call(null,(2),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null);
} else {
if(cljs.core._EQ_.call(null,(3),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(7)], null);
} else {
if(cljs.core._EQ_.call(null,(4),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null);
} else {
if(cljs.core._EQ_.call(null,(5),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null);
} else {
if(cljs.core._EQ_.call(null,(6),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null);
} else {
if(cljs.core._EQ_.call(null,(7),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(1)], null);
} else {
if(cljs.core._EQ_.call(null,(8),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(4)], null);
} else {
if(cljs.core._EQ_.call(null,(9),b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(7)], null);
} else {
return null;

}
}
}
}
}
}
}
}
}
});

mrsudoku.model.solver.which_bloc.cljs$core$IFn$_invoke$arity$2 = (function (ligne,col){
var bx = cljs.core.quot.call(null,(ligne - (1)),(3));
var by = cljs.core.quot.call(null,(col - (1)),(3));
return ((bx * (3)) + (by + (1)));
});

mrsudoku.model.solver.which_bloc.cljs$lang$maxFixedArity = 2;

mrsudoku.model.solver.cell_dom = (function mrsudoku$model$solver$cell_dom(grid,coll,ligne,bloc){

var temp__5718__auto__ = mrsudoku.model.grid.cell_value.call(null,mrsudoku.model.grid.cell.call(null,grid,coll,ligne));
if(cljs.core.truth_(temp__5718__auto__)){
var res = temp__5718__auto__;
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,res);
} else {
var d = cljs.core.reduce.call(null,((function (temp__5718__auto__){
return (function (res,add){
return cljs.core.conj.call(null,res,add);
});})(temp__5718__auto__))
,mrsudoku.model.solver.values.call(null,mrsudoku.model.grid.row.call(null,grid,ligne)),mrsudoku.model.solver.values.call(null,mrsudoku.model.grid.col.call(null,grid,coll)));
var delete$ = cljs.core.reduce.call(null,((function (d,temp__5718__auto__){
return (function (res,add){
return cljs.core.conj.call(null,res,add);
});})(d,temp__5718__auto__))
,d,mrsudoku.model.solver.values.call(null,mrsudoku.model.grid.block.call(null,grid,bloc)));
return clojure.set.difference.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null),delete$);
}
});
mrsudoku.model.solver.rows_doms = (function mrsudoku$model$solver$rows_doms(grid,row){

var res = cljs.core.PersistentArrayMap.EMPTY;
var col = (1);
while(true){
if((cljs.core.count.call(null,res) < (9))){
if((col < (4))){
var G__9016 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,row,mrsudoku.model.solver.which_bloc.call(null,row,col)));
var G__9017 = (col + (1));
res = G__9016;
col = G__9017;
continue;
} else {
if((col < (7))){
var G__9018 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,row,mrsudoku.model.solver.which_bloc.call(null,row,col)));
var G__9019 = (col + (1));
res = G__9018;
col = G__9019;
continue;
} else {
var G__9020 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,row,mrsudoku.model.solver.which_bloc.call(null,row,col)));
var G__9021 = (col + (1));
res = G__9020;
col = G__9021;
continue;
}
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.cols_doms = (function mrsudoku$model$solver$cols_doms(grid,col){

var res = cljs.core.PersistentArrayMap.EMPTY;
var row = (1);
while(true){
if((cljs.core.count.call(null,res) < (9))){
if((row < (4))){
var G__9022 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,row,mrsudoku.model.solver.which_bloc.call(null,row,col)));
var G__9023 = (row + (1));
res = G__9022;
row = G__9023;
continue;
} else {
if((row < (7))){
var G__9024 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,row,mrsudoku.model.solver.which_bloc.call(null,row,col)));
var G__9025 = (row + (1));
res = G__9024;
row = G__9025;
continue;
} else {
var G__9026 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,row,mrsudoku.model.solver.which_bloc.call(null,row,col)));
var G__9027 = (row + (1));
res = G__9026;
row = G__9027;
continue;
}
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.bloc_doms = (function mrsudoku$model$solver$bloc_doms(grid,b){

var temp__5718__auto__ = mrsudoku.model.solver.which_bloc.call(null,b);
if(cljs.core.truth_(temp__5718__auto__)){
var bloc = temp__5718__auto__;
var res = cljs.core.PersistentArrayMap.EMPTY;
var lig = cljs.core.first.call(null,bloc);
var col = cljs.core.second.call(null,bloc);
var cpt = (1);
while(true){
if((cljs.core.count.call(null,res) < (9))){
if((cljs.core.rem.call(null,cpt,(3)) === (0))){
var G__9028 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,lig,b));
var G__9029 = (lig + (1));
var G__9030 = cljs.core.second.call(null,bloc);
var G__9031 = (cpt + (1));
res = G__9028;
lig = G__9029;
col = G__9030;
cpt = G__9031;
continue;
} else {
var G__9032 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),mrsudoku.model.solver.cell_dom.call(null,grid,col,lig,b));
var G__9033 = lig;
var G__9034 = (col + (1));
var G__9035 = (cpt + (1));
res = G__9032;
lig = G__9033;
col = G__9034;
cpt = G__9035;
continue;
}
} else {
return res;
}
break;
}
} else {
return null;
}
});
mrsudoku.model.solver.grid_dom = (function mrsudoku$model$solver$grid_dom(grid){
var map = cljs.core.PersistentArrayMap.EMPTY;
var cpt = (1);
while(true){
if((cpt < (10))){
var G__9036 = cljs.core.merge.call(null,map,mrsudoku.model.solver.rows_doms.call(null,grid,cpt));
var G__9037 = (cpt + (1));
map = G__9036;
cpt = G__9037;
continue;
} else {
return map;
}
break;
}
});
mrsudoku.model.solver.solution = (function mrsudoku$model$solver$solution(var_args){
var G__9039 = arguments.length;
switch (G__9039) {
case 1:
return mrsudoku.model.solver.solution.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mrsudoku.model.solver.solution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return mrsudoku.model.solver.solution.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.solution.cljs$core$IFn$_invoke$arity$1 = (function (grid){
return mrsudoku.model.solver.solution.call(null,grid,(1),(1));
});

mrsudoku.model.solver.solution.cljs$core$IFn$_invoke$arity$3 = (function (grid,ligne,col){
return mrsudoku.model.solver.solution.call(null,grid,ligne,col,mrsudoku.model.solver.grid_dom.call(null,grid));
});

mrsudoku.model.solver.solution.cljs$core$IFn$_invoke$arity$4 = (function (grid,ligne,col,doms){
if((((ligne < (10))) && ((col < (10))))){
var cas = cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ligne),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''));
var dom = cljs.core.get.call(null,doms,cas);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.get.call(null,mrsudoku.model.grid.cell.call(null,grid,col,ligne),new cljs.core.Keyword(null,"status","status",-1997798413)))){
if(cljs.core._EQ_.call(null,col,(9))){
return mrsudoku.model.solver.solution.call(null,grid,(ligne + (1)),(1));
} else {
return mrsudoku.model.solver.solution.call(null,grid,ligne,(col + (1)));
}
} else {
var dom__$1 = dom;
while(true){
if(cljs.core.seq.call(null,dom__$1)){
if(cljs.core.truth_((function (){var and__3938__auto__ = (function (){var and__3938__auto__ = mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.rows_doms.call(null,grid,ligne));
if(cljs.core.truth_(and__3938__auto__)){
return mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.cols_doms.call(null,grid,col));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(and__3938__auto__)){
return mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.bloc_doms.call(null,grid,mrsudoku.model.solver.which_bloc.call(null,ligne,col)));
} else {
return and__3938__auto__;
}
})())){
var newgrid = mrsudoku.model.grid.change_cell.call(null,grid,col,ligne,mrsudoku.model.grid.mk_cell.call(null,new cljs.core.Keyword(null,"set","set",304602554),cljs.core.first.call(null,dom__$1)));
if(cljs.core._EQ_.call(null,col,(9))){
var vec__9040 = mrsudoku.model.solver.solution.call(null,newgrid,(ligne + (1)),(1));
var rep = cljs.core.nth.call(null,vec__9040,(0),null);
var ngrid = cljs.core.nth.call(null,vec__9040,(1),null);
if(cljs.core.truth_(rep)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ngrid], null);
} else {
var G__9047 = cljs.core.rest.call(null,dom__$1);
dom__$1 = G__9047;
continue;
}
} else {
var vec__9043 = mrsudoku.model.solver.solution.call(null,newgrid,ligne,(col + (1)));
var rep = cljs.core.nth.call(null,vec__9043,(0),null);
var ngrid = cljs.core.nth.call(null,vec__9043,(1),null);
if(cljs.core.truth_(rep)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ngrid], null);
} else {
var G__9048 = cljs.core.rest.call(null,dom__$1);
dom__$1 = G__9048;
continue;
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
}
break;
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grid], null);
}
});

mrsudoku.model.solver.solution.cljs$lang$maxFixedArity = 4;

/**
 * Verifie si toute les clefs du domaine ont une seule valeur
 */
mrsudoku.model.solver.all_singleton_QMARK_ = (function mrsudoku$model$solver$all_singleton_QMARK_(doms){
return cljs.core.every_QMARK_.call(null,(function (p1__9049_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__9049_SHARP_),(1));
}),cljs.core.vals.call(null,doms));
});
/**
 * Construit une solution en choissisant les premiers elements de chaque domaine
 */
mrsudoku.model.solver.build_solution = (function mrsudoku$model$solver$build_solution(domaine){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9050){
var vec__9051 = p__9050;
var x = cljs.core.nth.call(null,vec__9051,(0),null);
var xdom = cljs.core.nth.call(null,vec__9051,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.first.call(null,xdom)], null);
}),domaine));
});
/**
 * Verifie si sol est une solution selon les contraintes
 */
mrsudoku.model.solver.solution_QMARK_ = (function mrsudoku$model$solver$solution_QMARK_(constraints,sol){
var cs = constraints;
while(true){
if(cljs.core.seq.call(null,cs)){
var constraint = cljs.core.first.call(null,cs);
if(cljs.core.truth_(new cljs.core.Keyword(null,"check","check",1226308904).cljs$core$IFn$_invoke$arity$1(constraint).call(null,cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var1","var1",1378718176).cljs$core$IFn$_invoke$arity$1(constraint)),cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var2","var2",-1416129845).cljs$core$IFn$_invoke$arity$1(constraint))))){
var G__9054 = cljs.core.rest.call(null,cs);
cs = G__9054;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
/**
 * Selectionne dans doms le premier element qui n'est pas un singleton
 */
mrsudoku.model.solver.select_var = (function mrsudoku$model$solver$select_var(doms){
return cljs.core.some.call(null,(function (p__9055){
var vec__9056 = p__9055;
var x = cljs.core.nth.call(null,vec__9056,(0),null);
var xdom = cljs.core.nth.call(null,vec__9056,(1),null);
if((cljs.core.count.call(null,xdom) > (1))){
return x;
} else {
return null;
}
}),doms);
});
/**
 * Cherche une solution dans doms selon les contraintes
 */
mrsudoku.model.solver.find_solution = (function mrsudoku$model$solver$find_solution(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.solver.all_singleton_QMARK_.call(null,doms))){
var sol = mrsudoku.model.solver.build_solution.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.solution_QMARK_.call(null,constraints,sol))){
return sol;
} else {
return null;
}
} else {
var x = mrsudoku.model.solver.select_var.call(null,doms);
var xval = cljs.core.get.call(null,doms,x);
while(true){
if(cljs.core.seq.call(null,xval)){
var sol = mrsudoku.model.solver.find_solution.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xval)])));
if(cljs.core.truth_(sol)){
return sol;
} else {
var G__9059 = cljs.core.rest.call(null,xval);
xval = G__9059;
continue;
}
} else {
return null;
}
break;
}
}
});

//# sourceMappingURL=solver.js.map
