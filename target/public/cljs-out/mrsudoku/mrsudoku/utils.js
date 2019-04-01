// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.utils');
goog.require('cljs.core');
/**
 * Concatenate vectors.
 */
mrsudoku.utils.concatv = (function mrsudoku$utils$concatv(var_args){
var G__9230 = arguments.length;
switch (G__9230) {
case 0:
return mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9232 = arguments.length;
var i__4532__auto___9233 = (0);
while(true){
if((i__4532__auto___9233 < len__4531__auto___9232)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9233]));

var G__9234 = (i__4532__auto___9233 + (1));
i__4532__auto___9233 = G__9234;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$1 = (function (v){
return v;
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return cljs.core.into.call(null,v1,v2);
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,more){
return cljs.core.into.call(null,v1,cljs.core.apply.call(null,cljs.core.concat,cljs.core.cons.call(null,v2,more)));
});

/** @this {Function} */
mrsudoku.utils.concatv.cljs$lang$applyTo = (function (seq9227){
var G__9228 = cljs.core.first.call(null,seq9227);
var seq9227__$1 = cljs.core.next.call(null,seq9227);
var G__9229 = cljs.core.first.call(null,seq9227__$1);
var seq9227__$2 = cljs.core.next.call(null,seq9227__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9228,G__9229,seq9227__$2);
});

mrsudoku.utils.concatv.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=utils.js.map
