// Compiled by ClojureScript 1.10.339 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11067 = arguments.length;
var i__4532__auto___11068 = (0);
while(true){
if((i__4532__auto___11068 < len__4531__auto___11067)){
args__4534__auto__.push((arguments[i__4532__auto___11068]));

var G__11069 = (i__4532__auto___11068 + (1));
i__4532__auto___11068 = G__11069;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq11066){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11066));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__11070){
var vec__11071 = p__11070;
var test = cljs.core.nth.call(null,vec__11071,(0),null);
var result = cljs.core.nth.call(null,vec__11071,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__11075){
var vec__11076 = p__11075;
var seq__11077 = cljs.core.seq.call(null,vec__11076);
var first__11078 = cljs.core.first.call(null,seq__11077);
var seq__11077__$1 = cljs.core.next.call(null,seq__11077);
var head = first__11078;
var first__11078__$1 = cljs.core.first.call(null,seq__11077__$1);
var seq__11077__$2 = cljs.core.next.call(null,seq__11077__$1);
var expr = first__11078__$1;
var more = seq__11077__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__11076,seq__11077,first__11078,seq__11077__$1,head,first__11078__$1,seq__11077__$2,expr,more){
return (function (p1__11074_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__11074_SHARP_);
});})(clauses,default$,vec__11076,seq__11077,first__11078,seq__11077__$1,head,first__11078__$1,seq__11077__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__11080){
var vec__11081 = p__11080;
var seq__11082 = cljs.core.seq.call(null,vec__11081);
var first__11083 = cljs.core.first.call(null,seq__11082);
var seq__11082__$1 = cljs.core.next.call(null,seq__11082);
var head = first__11083;
var more = seq__11082__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__11081,seq__11082,first__11083,seq__11082__$1,head,more){
return (function (p1__11079_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__11079_SHARP_);
});})(clauses,vec__11081,seq__11082,first__11083,seq__11082__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__11085){
var vec__11086 = p__11085;
var seq__11087 = cljs.core.seq.call(null,vec__11086);
var first__11088 = cljs.core.first.call(null,seq__11087);
var seq__11087__$1 = cljs.core.next.call(null,seq__11087);
var head = first__11088;
var first__11088__$1 = cljs.core.first.call(null,seq__11087__$1);
var seq__11087__$2 = cljs.core.next.call(null,seq__11087__$1);
var pred = first__11088__$1;
var first__11088__$2 = cljs.core.first.call(null,seq__11087__$2);
var seq__11087__$3 = cljs.core.next.call(null,seq__11087__$2);
var expr = first__11088__$2;
var more = seq__11087__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__11086,seq__11087,first__11088,seq__11087__$1,head,first__11088__$1,seq__11087__$2,pred,first__11088__$2,seq__11087__$3,expr,more){
return (function (p1__11084_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__11084_SHARP_);
});})(clauses,default$,vec__11086,seq__11087,first__11088,seq__11087__$1,head,first__11088__$1,seq__11087__$2,pred,first__11088__$2,seq__11087__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__11090){
var vec__11091 = p__11090;
var seq__11092 = cljs.core.seq.call(null,vec__11091);
var first__11093 = cljs.core.first.call(null,seq__11092);
var seq__11092__$1 = cljs.core.next.call(null,seq__11092);
var head = first__11093;
var stmts = seq__11092__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11091,seq__11092,first__11093,seq__11092__$1,head,stmts){
return (function (p1__11089_SHARP_){
return fipp.visit.visit.call(null,p,p1__11089_SHARP_);
});})(vec__11091,seq__11092,first__11093,seq__11092__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__11095){
var vec__11096 = p__11095;
var seq__11097 = cljs.core.seq.call(null,vec__11096);
var first__11098 = cljs.core.first.call(null,seq__11097);
var seq__11097__$1 = cljs.core.next.call(null,seq__11097);
var head = first__11098;
var first__11098__$1 = cljs.core.first.call(null,seq__11097__$1);
var seq__11097__$2 = cljs.core.next.call(null,seq__11097__$1);
var test = first__11098__$1;
var more = seq__11097__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11096,seq__11097,first__11098,seq__11097__$1,head,first__11098__$1,seq__11097__$2,test,more){
return (function (p1__11094_SHARP_){
return fipp.visit.visit.call(null,p,p1__11094_SHARP_);
});})(vec__11096,seq__11097,first__11098,seq__11097__$1,head,first__11098__$1,seq__11097__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__11100){
var vec__11101 = p__11100;
var seq__11102 = cljs.core.seq.call(null,vec__11101);
var first__11103 = cljs.core.first.call(null,seq__11102);
var seq__11102__$1 = cljs.core.next.call(null,seq__11102);
var params = first__11103;
var body = seq__11102__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11101,seq__11102,first__11103,seq__11102__$1,params,body){
return (function (p1__11099_SHARP_){
return fipp.visit.visit.call(null,p,p1__11099_SHARP_);
});})(vec__11101,seq__11102,first__11103,seq__11102__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__11106){
var vec__11107 = p__11106;
var seq__11108 = cljs.core.seq.call(null,vec__11107);
var first__11109 = cljs.core.first.call(null,seq__11108);
var seq__11108__$1 = cljs.core.next.call(null,seq__11108);
var head = first__11109;
var first__11109__$1 = cljs.core.first.call(null,seq__11108__$1);
var seq__11108__$2 = cljs.core.next.call(null,seq__11108__$1);
var fn_name = first__11109__$1;
var more = seq__11108__$2;
var vec__11110 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__11110,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11110,(1),null);
var vec__11113 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__11113,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__11113,(1),null);
var vec__11116 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__11116,(0),null);
var body = cljs.core.nth.call(null,vec__11116,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__3938__auto__ = params;
if(cljs.core.truth_(and__3938__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__3938__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__3938__auto__ = params;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__3938__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__11110,docstring,more__$1,vec__11113,attr_map,more__$2,vec__11116,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11107,seq__11108,first__11109,seq__11108__$1,head,first__11109__$1,seq__11108__$2,fn_name,more){
return (function (p1__11104_SHARP_){
return fipp.visit.visit.call(null,p,p1__11104_SHARP_);
});})(vec__11110,docstring,more__$1,vec__11113,attr_map,more__$2,vec__11116,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11107,seq__11108,first__11109,seq__11108__$1,head,first__11109__$1,seq__11108__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__11110,docstring,more__$1,vec__11113,attr_map,more__$2,vec__11116,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11107,seq__11108,first__11109,seq__11108__$1,head,first__11109__$1,seq__11108__$2,fn_name,more){
return (function (p1__11105_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__11105_SHARP_);
});})(vec__11110,docstring,more__$1,vec__11113,attr_map,more__$2,vec__11116,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11107,seq__11108,first__11109,seq__11108__$1,head,first__11109__$1,seq__11108__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__11121){
var vec__11122 = p__11121;
var seq__11123 = cljs.core.seq.call(null,vec__11122);
var first__11124 = cljs.core.first.call(null,seq__11123);
var seq__11123__$1 = cljs.core.next.call(null,seq__11123);
var head = first__11124;
var more = seq__11123__$1;
var vec__11125 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__11125,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11125,(1),null);
var vec__11128 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__11128,(0),null);
var body = cljs.core.nth.call(null,vec__11128,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__11125,fn_name,more__$1,vec__11128,params,body,vec__11122,seq__11123,first__11124,seq__11123__$1,head,more){
return (function (p1__11119_SHARP_){
return fipp.visit.visit.call(null,p,p1__11119_SHARP_);
});})(vec__11125,fn_name,more__$1,vec__11128,params,body,vec__11122,seq__11123,first__11124,seq__11123__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__11125,fn_name,more__$1,vec__11128,params,body,vec__11122,seq__11123,first__11124,seq__11123__$1,head,more){
return (function (p1__11120_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__11120_SHARP_);
});})(vec__11125,fn_name,more__$1,vec__11128,params,body,vec__11122,seq__11123,first__11124,seq__11123__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__11134){
var vec__11135 = p__11134;
var _ = cljs.core.nth.call(null,vec__11135,(0),null);
var params = cljs.core.nth.call(null,vec__11135,(1),null);
var body = cljs.core.nth.call(null,vec__11135,(2),null);
var form = vec__11135;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__11138 = cljs.core.split_with.call(null,((function (vec__11135,_,params,body,form){
return (function (p1__11131_SHARP_){
return cljs.core.not_EQ_.call(null,p1__11131_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__11135,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__11138,(0),null);
var rests = cljs.core.nth.call(null,vec__11138,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__11138,inits,rests,vec__11135,_,params,body,form){
return (function (p1__11132_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11132_SHARP_ + (1)))].join(''));
});})(vec__11138,inits,rests,vec__11135,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11138,inits,rests,params_STAR_,body_STAR_,vec__11135,_,params,body,form){
return (function (p1__11133_SHARP_){
return fipp.visit.visit.call(null,p,p1__11133_SHARP_);
});})(vec__11138,inits,rests,params_STAR_,body_STAR_,vec__11135,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__11142){
var vec__11143 = p__11142;
var seq__11144 = cljs.core.seq.call(null,vec__11143);
var first__11145 = cljs.core.first.call(null,seq__11144);
var seq__11144__$1 = cljs.core.next.call(null,seq__11144);
var head = first__11145;
var clauses = seq__11144__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11143,seq__11144,first__11145,seq__11144__$1,head,clauses){
return (function (p1__11141_SHARP_){
return fipp.visit.visit.call(null,p,p1__11141_SHARP_);
});})(vec__11143,seq__11144,first__11145,seq__11144__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__11147){
var vec__11148 = p__11147;
var seq__11149 = cljs.core.seq.call(null,vec__11148);
var first__11150 = cljs.core.first.call(null,seq__11149);
var seq__11149__$1 = cljs.core.next.call(null,seq__11149);
var head = first__11150;
var first__11150__$1 = cljs.core.first.call(null,seq__11149__$1);
var seq__11149__$2 = cljs.core.next.call(null,seq__11149__$1);
var ns_sym = first__11150__$1;
var more = seq__11149__$2;
var vec__11151 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__11151,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11151,(1),null);
var vec__11154 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__11154,(0),null);
var specs = cljs.core.nth.call(null,vec__11154,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__11151,docstring,more__$1,vec__11154,attr_map,specs,vec__11148,seq__11149,first__11150,seq__11149__$1,head,first__11150__$1,seq__11149__$2,ns_sym,more){
return (function (p1__11146_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__11146_SHARP_);
});})(vec__11151,docstring,more__$1,vec__11154,attr_map,specs,vec__11148,seq__11149,first__11150,seq__11149__$1,head,first__11150__$1,seq__11149__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__11157){
var vec__11158 = p__11157;
var macro = cljs.core.nth.call(null,vec__11158,(0),null);
var arg = cljs.core.nth.call(null,vec__11158,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__11161 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__11161__$1 = (((G__11161 instanceof cljs.core.Keyword))?G__11161.fqn:null);
switch (G__11161__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11161__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__11163(s__11164){
return (new cljs.core.LazySeq(null,(function (){
var s__11164__$1 = s__11164;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11164__$1);
if(temp__5720__auto__){
var s__11164__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11164__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11164__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11166 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11165 = (0);
while(true){
if((i__11165 < size__4323__auto__)){
var vec__11167 = cljs.core._nth.call(null,c__4322__auto__,i__11165);
var k = cljs.core.nth.call(null,vec__11167,(0),null);
var v = cljs.core.nth.call(null,vec__11167,(1),null);
cljs.core.chunk_append.call(null,b__11166,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__11173 = (i__11165 + (1));
i__11165 = G__11173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11166),fipp$clojure$pretty_bindings_$_iter__11163.call(null,cljs.core.chunk_rest.call(null,s__11164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11166),null);
}
} else {
var vec__11170 = cljs.core.first.call(null,s__11164__$2);
var k = cljs.core.nth.call(null,vec__11170,(0),null);
var v = cljs.core.nth.call(null,vec__11170,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__11163.call(null,cljs.core.rest.call(null,s__11164__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__11175){
var vec__11176 = p__11175;
var seq__11177 = cljs.core.seq.call(null,vec__11176);
var first__11178 = cljs.core.first.call(null,seq__11177);
var seq__11177__$1 = cljs.core.next.call(null,seq__11177);
var head = first__11178;
var first__11178__$1 = cljs.core.first.call(null,seq__11177__$1);
var seq__11177__$2 = cljs.core.next.call(null,seq__11177__$1);
var bvec = first__11178__$1;
var body = seq__11177__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11176,seq__11177,first__11178,seq__11177__$1,head,first__11178__$1,seq__11177__$2,bvec,body){
return (function (p1__11174_SHARP_){
return fipp.visit.visit.call(null,p,p1__11174_SHARP_);
});})(vec__11176,seq__11177,first__11178,seq__11177__$1,head,first__11178__$1,seq__11177__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__11179_SHARP_){
return fipp.visit.visit.call(null,p,p1__11179_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__11180){
var vec__11181 = p__11180;
var seq__11182 = cljs.core.seq.call(null,vec__11181);
var first__11183 = cljs.core.first.call(null,seq__11182);
var seq__11182__$1 = cljs.core.next.call(null,seq__11182);
var head = first__11183;
var first__11183__$1 = cljs.core.first.call(null,seq__11182__$1);
var seq__11182__$2 = cljs.core.next.call(null,seq__11182__$1);
var fields = first__11183__$1;
var opts_PLUS_specs = seq__11182__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__11184){
var vec__11185 = p__11184;
var seq__11186 = cljs.core.seq.call(null,vec__11185);
var first__11187 = cljs.core.first.call(null,seq__11186);
var seq__11186__$1 = cljs.core.next.call(null,seq__11186);
var head = first__11187;
var opts_PLUS_specs = seq__11186__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__11188(s__11189){
return (new cljs.core.LazySeq(null,(function (){
var s__11189__$1 = s__11189;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11189__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__11196 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__11196,(0),null);
var syms = cljs.core.nth.call(null,vec__11196,(1),null);
var iterys__4320__auto__ = ((function (s__11189__$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__11188_$_iter__11190(s__11191){
return (new cljs.core.LazySeq(null,((function (s__11189__$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__11191__$1 = s__11191;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__11191__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__11191__$1,s__11189__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__11188_$_iter__11190_$_iter__11192(s__11193){
return (new cljs.core.LazySeq(null,((function (s__11191__$1,s__11189__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__11193__$1 = s__11193;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__11193__$1);
if(temp__5720__auto____$2){
var s__11193__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11193__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11193__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11195 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11194 = (0);
while(true){
if((i__11194 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__11194);
cljs.core.chunk_append.call(null,b__11195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__11199 = (i__11194 + (1));
i__11194 = G__11199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11195),fipp$clojure$build_symbol_map_$_iter__11188_$_iter__11190_$_iter__11192.call(null,cljs.core.chunk_rest.call(null,s__11193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11195),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__11193__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__11188_$_iter__11190_$_iter__11192.call(null,cljs.core.rest.call(null,s__11193__$2)));
}
} else {
return null;
}
break;
}
});})(s__11191__$1,s__11189__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__11191__$1,s__11189__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__11188_$_iter__11190.call(null,cljs.core.rest.call(null,s__11191__$1)));
} else {
var G__11200 = cljs.core.rest.call(null,s__11191__$1);
s__11191__$1 = G__11200;
continue;
}
} else {
return null;
}
break;
}
});})(s__11189__$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__11189__$1,vec__11196,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__11188.call(null,cljs.core.rest.call(null,s__11189__$1)));
} else {
var G__11201 = cljs.core.rest.call(null,s__11189__$1);
s__11189__$1 = G__11201;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__11203 = arguments.length;
switch (G__11203) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
