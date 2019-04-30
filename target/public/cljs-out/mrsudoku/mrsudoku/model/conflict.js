// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.conflict');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('mrsudoku.model.grid');
/**
 * Return the set of values of a vector or grid `cells`.
 */
mrsudoku.model.conflict.values = (function mrsudoku$model$conflict$values(cells){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (x){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"value","value",305978217));
}),cljs.core.filter.call(null,(function (x){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"value","value",305978217));
}),cells)));
});
/**
 * Return the set of values of a vector of cells, except the `except`-th.
 */
mrsudoku.model.conflict.values_except = (function mrsudoku$model$conflict$values_except(cells,except){
return mrsudoku.model.conflict.values.call(null,cljs.core.remove.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.get.call(null,cells,(except - (1)))),cells));
});
mrsudoku.model.conflict.mk_conflict = (function mrsudoku$model$conflict$mk_conflict(kind,cx,cy,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
mrsudoku.model.conflict.merge_conflict_kind = (function mrsudoku$model$conflict$merge_conflict_kind(kind1,kind2){
if(cljs.core.set_QMARK_.call(null,kind1)){
if(cljs.core.set_QMARK_.call(null,kind2)){
return clojure.set.union.call(null,kind1,kind2);
} else {
return cljs.core.conj.call(null,kind1,kind2);
}
} else {
if(cljs.core.set_QMARK_.call(null,kind2)){
return cljs.core.conj.call(null,kind2,kind1);
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1,kind2)))){
return kind1;
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1,kind2);
}
}
}
});
mrsudoku.model.conflict.merge_conflict = (function mrsudoku$model$conflict$merge_conflict(conflict1,conflict2){
return mrsudoku.model.conflict.merge_conflict_kind.call(null,cljs.core.get.call(null,conflict1,new cljs.core.Keyword(null,"kind","kind",-717265803)),cljs.core.get.call(null,conflict2,new cljs.core.Keyword(null,"kind","kind",-717265803)));
});
mrsudoku.model.conflict.merge_conflicts = (function mrsudoku$model$conflict$merge_conflicts(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8543 = arguments.length;
var i__4532__auto___8544 = (0);
while(true){
if((i__4532__auto___8544 < len__4531__auto___8543)){
args__4534__auto__.push((arguments[i__4532__auto___8544]));

var G__8545 = (i__4532__auto___8544 + (1));
i__4532__auto___8544 = G__8545;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mrsudoku.model.conflict.merge_conflicts.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mrsudoku.model.conflict.merge_conflicts.cljs$core$IFn$_invoke$arity$variadic = (function (conflicts){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.merge_with,mrsudoku.model.conflict.merge_conflict),conflicts);
});

mrsudoku.model.conflict.merge_conflicts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mrsudoku.model.conflict.merge_conflicts.cljs$lang$applyTo = (function (seq8542){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8542));
});

mrsudoku.model.conflict.update_conflicts = (function mrsudoku$model$conflict$update_conflicts(conflict_kind,cx,cy,value,conflicts){
var temp__5718__auto__ = cljs.core.get.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
if(cljs.core.truth_(temp__5718__auto__)){
var conflict = temp__5718__auto__;
return cljs.core.assoc.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mrsudoku.model.conflict.mk_conflict.call(null,mrsudoku.model.conflict.merge_conflict_kind.call(null,conflict_kind,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(conflict)),cx,cy,value));
} else {
return cljs.core.assoc.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mrsudoku.model.conflict.mk_conflict.call(null,conflict_kind,cx,cy,value));
}
});
mrsudoku.model.conflict.conflict_value = (function mrsudoku$model$conflict$conflict_value(values,except,cell){
var temp__5720__auto__ = mrsudoku.model.grid.cell_value.call(null,cell);
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"init","init",-1875481434))) && (cljs.core.contains_QMARK_.call(null,mrsudoku.model.conflict.values_except.call(null,values,except),value)))){
return value;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns a map of conflicts in a `col`.
 */
mrsudoku.model.conflict.col_conflicts = (function mrsudoku$model$conflict$col_conflicts(col,cx){
var cy = (1);
var cells = cljs.core.seq.call(null,col);
var conflicts = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,cells)){
var cell = cljs.core.first.call(null,cells);
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,col,cy,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
var G__8546 = (cy + (1));
var G__8547 = cljs.core.rest.call(null,cells);
var G__8548 = mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),cx,cy,value,conflicts);
cy = G__8546;
cells = G__8547;
conflicts = G__8548;
continue;
} else {
var G__8549 = (cy + (1));
var G__8550 = cljs.core.rest.call(null,cells);
var G__8551 = conflicts;
cy = G__8549;
cells = G__8550;
conflicts = G__8551;
continue;
}
} else {
return conflicts;
}
break;
}
});
mrsudoku.model.conflict.cols_conflicts = (function mrsudoku$model$conflict$cols_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return mrsudoku.model.conflict.col_conflicts.call(null,mrsudoku.model.grid.col.call(null,grid,c),c);
}),cljs.core.range.call(null,(1),(10))));
});
mrsudoku.model.conflict.conversion = (function mrsudoku$model$conflict$conversion(n,cy){
var s = n;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8552 = cljs.core.rest.call(null,s);
var G__8553 = cljs.core.assoc.call(null,res,cljs.core.first.call(null,cljs.core.first.call(null,s)),cljs.core.assoc.call(null,mrsudoku.model.grid.mk_cell.call(null,new cljs.core.Keyword(null,"conflict","conflict",1978796605),cy),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"row","row",-570139521)));
s = G__8552;
res = G__8553;
continue;
} else {
return res;
}
break;
}
});
/**
 * Returns a map of conflicts in a `row`.
 */
mrsudoku.model.conflict.find_conflicts = (function mrsudoku$model$conflict$find_conflicts(row,cy,ligne){
var cpt = (1);
var res = cljs.core.PersistentArrayMap.EMPTY;
var s = row;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cy,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)))){
var G__8554 = (cpt + (1));
var G__8555 = cljs.core.assoc.call(null,res,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cpt,ligne],null)),cljs.core.first.call(null,s));
var G__8556 = cljs.core.rest.call(null,s);
cpt = G__8554;
res = G__8555;
s = G__8556;
continue;
} else {
var G__8557 = (cpt + (1));
var G__8558 = res;
var G__8559 = cljs.core.rest.call(null,s);
cpt = G__8557;
res = G__8558;
s = G__8559;
continue;
}
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,res))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var end = cljs.core.filter.call(null,((function (cpt,res,s){
return (function (x){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.second.call(null,x),new cljs.core.Keyword(null,"status","status",-1997798413)),new cljs.core.Keyword(null,"set","set",304602554));
});})(cpt,res,s))
,res);
return mrsudoku.model.conflict.conversion.call(null,end,cy);
}
}
break;
}
});
/**
 * Returns a map of conflicts in a `row`.
 */
mrsudoku.model.conflict.row_conflicts = (function mrsudoku$model$conflict$row_conflicts(row,cy){
var map = mrsudoku.model.conflict.values.call(null,row);
var s = map;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8560 = cljs.core.rest.call(null,s);
var G__8561 = cljs.core.merge.call(null,res,mrsudoku.model.conflict.find_conflicts.call(null,row,cljs.core.first.call(null,s),cy));
s = G__8560;
res = G__8561;
continue;
} else {
return cljs.core.merge.call(null,res,cljs.core.PersistentArrayMap.EMPTY);
}
break;
}
});
/**
 * Returns a map of conflicts in all rows of `grid`
 */
mrsudoku.model.conflict.rows_conflicts = (function mrsudoku$model$conflict$rows_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return mrsudoku.model.conflict.row_conflicts.call(null,mrsudoku.model.grid.row.call(null,grid,c),c);
}),cljs.core.range.call(null,(1),(10))));
});
mrsudoku.model.conflict.block_conflicts = (function mrsudoku$model$conflict$block_conflicts(block,b){
return mrsudoku.model.grid.reduce_block.call(null,(function (conflicts,index,cx,cy,cell){
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,block,index,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"block","block",664686210),cx,cy,value,conflicts);
} else {
return conflicts;
}
}),cljs.core.PersistentArrayMap.EMPTY,block,b);
});
mrsudoku.model.conflict.blocks_conflicts = (function mrsudoku$model$conflict$blocks_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (b){
return mrsudoku.model.conflict.block_conflicts.call(null,mrsudoku.model.grid.block.call(null,grid,b),b);
}),cljs.core.range.call(null,(1),(10))));
});
/**
 * Compute all conflicts in the Sudoku grid.
 */
mrsudoku.model.conflict.grid_conflicts = (function mrsudoku$model$conflict$grid_conflicts(grid){
cljs.core.println.call(null,"compute conflicts");

cljs.core.println.call(null,mrsudoku.model.grid.grid__GT_str.call(null,grid));

return mrsudoku.model.conflict.merge_conflicts.call(null,mrsudoku.model.conflict.rows_conflicts.call(null,grid),mrsudoku.model.conflict.cols_conflicts.call(null,grid),mrsudoku.model.conflict.blocks_conflicts.call(null,grid));
});

//# sourceMappingURL=conflict.js.map
