// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.solver');
goog.require('cljs.core');
/**
 * Solve the sudoku `grid` by returing a full solved grid,
 *  or `nil` if the solver fails.
 */
mrsudoku.model.solver.solve = (function mrsudoku$model$solver$solve(grid){
return null;
});
mrsudoku.model.solver.all_singleton_QMARK_ = (function mrsudoku$model$solver$all_singleton_QMARK_(doms){
return cljs.core.every_QMARK_.call(null,(function (p1__18007_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__18007_SHARP_),(1));
}),cljs.core.vals.call(null,doms));
});
mrsudoku.model.solver.solution_QMARK_ = (function mrsudoku$model$solver$solution_QMARK_(constraints,sol){
var cs = constraints;
while(true){
if(cljs.core.seq.call(null,cs)){
var constraint = cljs.core.first.call(null,cs);
if(cljs.core.truth_(new cljs.core.Keyword(null,"check","check",1226308904).cljs$core$IFn$_invoke$arity$1(constraint).call(null,cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var1","var1",1378718176).cljs$core$IFn$_invoke$arity$1(constraint)),cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var2","var2",-1416129845).cljs$core$IFn$_invoke$arity$1(constraint))))){
var G__18008 = cljs.core.rest.call(null,cs);
cs = G__18008;
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
mrsudoku.model.solver.select_var = (function mrsudoku$model$solver$select_var(doms){
return cljs.core.some.call(null,(function (p__18009){
var vec__18010 = p__18009;
var x = cljs.core.nth.call(null,vec__18010,(0),null);
var xdom = cljs.core.nth.call(null,vec__18010,(1),null);
if((cljs.core.count.call(null,xdom) > (1))){
return x;
} else {
return null;
}
}),doms);
});
mrsudoku.model.solver.find_solution = (function mrsudoku$model$solver$find_solution(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.solver.all_singleton_QMARK_.call(null,doms))){
var sol = mrsudoku.model.solver.build_solution.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.solution_QMARK_.call(null,constraints,sol))){
return sol;
} else {
var x = mrsudoku.model.solver.select_var.call(null,doms);
var xval = cljs.core.get.call(null,doms,x);
while(true){
if(cljs.core.seq.call(null,xval)){
var sol__$1 = mrsudoku.model.solver.find_solution.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xval)])));
if(cljs.core.truth_(sol__$1)){
return sol__$1;
} else {
var G__18013 = cljs.core.rest.call(null,xval);
xval = G__18013;
continue;
}
} else {
return null;
}
break;
}
}
} else {
return null;
}
});
mrsudoku.model.solver.add_edge = (function mrsudoku$model$solver$add_edge(graph,src,dest){
return cljs.core.assoc.call(null,mrsudoku.model.solver.grapg,src,cljs.core.conj.call(null,cljs.core.get.call(null,graph,src),dest));
});
mrsudoku.model.solver.augment = (function mrsudoku$model$solver$augment(graph,src,visited,match){
var dests = cljs.core.get.call(null,graph,src);
var visited__$1 = visited;
while(true){
if(cljs.core.seq.call(null,dests)){
var temp__5718__auto__ = cljs.core.get.call(null,match,cljs.core.first.call(null,dests));
if(cljs.core.truth_(temp__5718__auto__)){
var old_src = temp__5718__auto__;
var vec__18014 = mrsudoku.model.solver.augment.call(null,graph,old_src,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,cljs.core.test)),match);
var found = cljs.core.nth.call(null,vec__18014,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18014,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18014,(2),null);
if(cljs.core.truth_(found)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,visited_SINGLEQUOTE_,cljs.core.assoc.call(null,match_SINGLEQUOTE_,cljs.core.first.call(null,dests),src)], null);
} else {
var G__18017 = cljs.core.rest.call(null,dests);
var G__18018 = visited_SINGLEQUOTE_;
dests = G__18017;
visited__$1 = G__18018;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),cljs.core.assoc.call(null,match,cljs.core.first.call(null,dests),src)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,visited__$1,match], null);
}
break;
}
});
mrsudoku.model.solver.inv_edges = (function mrsudoku$model$solver$inv_edges(src,dests){
return cljs.core.zipmap.call(null,dests,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([src])));
});
mrsudoku.model.solver.merge_edges = (function mrsudoku$model$solver$merge_edges(edge1,edge2){
var s = edge2;
var m = edge1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__18019 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__18019,(0),null);
var n2 = cljs.core.nth.call(null,vec__18019,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var n1 = temp__5718__auto__;
var G__18022 = cljs.core.rest.call(null,s);
var G__18023 = cljs.core.assoc.call(null,m,k,clojure.set.union.call(null,n1,n2));
s = G__18022;
m = G__18023;
continue;
} else {
var G__18024 = cljs.core.rest.call(null,s);
var G__18025 = cljs.core.assoc.call(null,m,k,n2);
s = G__18024;
m = G__18025;
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

//# sourceMappingURL=solver.js.map
