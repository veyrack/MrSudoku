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
var len__4531__auto___13798 = arguments.length;
var i__4532__auto___13799 = (0);
while(true){
if((i__4532__auto___13799 < len__4531__auto___13798)){
args__4534__auto__.push((arguments[i__4532__auto___13799]));

var G__13800 = (i__4532__auto___13799 + (1));
i__4532__auto___13799 = G__13800;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq13797){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13797));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__13801){
var vec__13802 = p__13801;
var test = cljs.core.nth.call(null,vec__13802,(0),null);
var result = cljs.core.nth.call(null,vec__13802,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__13806){
var vec__13807 = p__13806;
var seq__13808 = cljs.core.seq.call(null,vec__13807);
var first__13809 = cljs.core.first.call(null,seq__13808);
var seq__13808__$1 = cljs.core.next.call(null,seq__13808);
var head = first__13809;
var first__13809__$1 = cljs.core.first.call(null,seq__13808__$1);
var seq__13808__$2 = cljs.core.next.call(null,seq__13808__$1);
var expr = first__13809__$1;
var more = seq__13808__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13807,seq__13808,first__13809,seq__13808__$1,head,first__13809__$1,seq__13808__$2,expr,more){
return (function (p1__13805_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13805_SHARP_);
});})(clauses,default$,vec__13807,seq__13808,first__13809,seq__13808__$1,head,first__13809__$1,seq__13808__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__13811){
var vec__13812 = p__13811;
var seq__13813 = cljs.core.seq.call(null,vec__13812);
var first__13814 = cljs.core.first.call(null,seq__13813);
var seq__13813__$1 = cljs.core.next.call(null,seq__13813);
var head = first__13814;
var more = seq__13813__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__13812,seq__13813,first__13814,seq__13813__$1,head,more){
return (function (p1__13810_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13810_SHARP_);
});})(clauses,vec__13812,seq__13813,first__13814,seq__13813__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__13816){
var vec__13817 = p__13816;
var seq__13818 = cljs.core.seq.call(null,vec__13817);
var first__13819 = cljs.core.first.call(null,seq__13818);
var seq__13818__$1 = cljs.core.next.call(null,seq__13818);
var head = first__13819;
var first__13819__$1 = cljs.core.first.call(null,seq__13818__$1);
var seq__13818__$2 = cljs.core.next.call(null,seq__13818__$1);
var pred = first__13819__$1;
var first__13819__$2 = cljs.core.first.call(null,seq__13818__$2);
var seq__13818__$3 = cljs.core.next.call(null,seq__13818__$2);
var expr = first__13819__$2;
var more = seq__13818__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13817,seq__13818,first__13819,seq__13818__$1,head,first__13819__$1,seq__13818__$2,pred,first__13819__$2,seq__13818__$3,expr,more){
return (function (p1__13815_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13815_SHARP_);
});})(clauses,default$,vec__13817,seq__13818,first__13819,seq__13818__$1,head,first__13819__$1,seq__13818__$2,pred,first__13819__$2,seq__13818__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__13821){
var vec__13822 = p__13821;
var seq__13823 = cljs.core.seq.call(null,vec__13822);
var first__13824 = cljs.core.first.call(null,seq__13823);
var seq__13823__$1 = cljs.core.next.call(null,seq__13823);
var head = first__13824;
var stmts = seq__13823__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13822,seq__13823,first__13824,seq__13823__$1,head,stmts){
return (function (p1__13820_SHARP_){
return fipp.visit.visit.call(null,p,p1__13820_SHARP_);
});})(vec__13822,seq__13823,first__13824,seq__13823__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__13826){
var vec__13827 = p__13826;
var seq__13828 = cljs.core.seq.call(null,vec__13827);
var first__13829 = cljs.core.first.call(null,seq__13828);
var seq__13828__$1 = cljs.core.next.call(null,seq__13828);
var head = first__13829;
var first__13829__$1 = cljs.core.first.call(null,seq__13828__$1);
var seq__13828__$2 = cljs.core.next.call(null,seq__13828__$1);
var test = first__13829__$1;
var more = seq__13828__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13827,seq__13828,first__13829,seq__13828__$1,head,first__13829__$1,seq__13828__$2,test,more){
return (function (p1__13825_SHARP_){
return fipp.visit.visit.call(null,p,p1__13825_SHARP_);
});})(vec__13827,seq__13828,first__13829,seq__13828__$1,head,first__13829__$1,seq__13828__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__13831){
var vec__13832 = p__13831;
var seq__13833 = cljs.core.seq.call(null,vec__13832);
var first__13834 = cljs.core.first.call(null,seq__13833);
var seq__13833__$1 = cljs.core.next.call(null,seq__13833);
var params = first__13834;
var body = seq__13833__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13832,seq__13833,first__13834,seq__13833__$1,params,body){
return (function (p1__13830_SHARP_){
return fipp.visit.visit.call(null,p,p1__13830_SHARP_);
});})(vec__13832,seq__13833,first__13834,seq__13833__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__13837){
var vec__13838 = p__13837;
var seq__13839 = cljs.core.seq.call(null,vec__13838);
var first__13840 = cljs.core.first.call(null,seq__13839);
var seq__13839__$1 = cljs.core.next.call(null,seq__13839);
var head = first__13840;
var first__13840__$1 = cljs.core.first.call(null,seq__13839__$1);
var seq__13839__$2 = cljs.core.next.call(null,seq__13839__$1);
var fn_name = first__13840__$1;
var more = seq__13839__$2;
var vec__13841 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13841,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13841,(1),null);
var vec__13844 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13844,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__13844,(1),null);
var vec__13847 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__13847,(0),null);
var body = cljs.core.nth.call(null,vec__13847,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13841,docstring,more__$1,vec__13844,attr_map,more__$2,vec__13847,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13838,seq__13839,first__13840,seq__13839__$1,head,first__13840__$1,seq__13839__$2,fn_name,more){
return (function (p1__13835_SHARP_){
return fipp.visit.visit.call(null,p,p1__13835_SHARP_);
});})(vec__13841,docstring,more__$1,vec__13844,attr_map,more__$2,vec__13847,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13838,seq__13839,first__13840,seq__13839__$1,head,first__13840__$1,seq__13839__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__13841,docstring,more__$1,vec__13844,attr_map,more__$2,vec__13847,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13838,seq__13839,first__13840,seq__13839__$1,head,first__13840__$1,seq__13839__$2,fn_name,more){
return (function (p1__13836_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13836_SHARP_);
});})(vec__13841,docstring,more__$1,vec__13844,attr_map,more__$2,vec__13847,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13838,seq__13839,first__13840,seq__13839__$1,head,first__13840__$1,seq__13839__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__13852){
var vec__13853 = p__13852;
var seq__13854 = cljs.core.seq.call(null,vec__13853);
var first__13855 = cljs.core.first.call(null,seq__13854);
var seq__13854__$1 = cljs.core.next.call(null,seq__13854);
var head = first__13855;
var more = seq__13854__$1;
var vec__13856 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__13856,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13856,(1),null);
var vec__13859 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__13859,(0),null);
var body = cljs.core.nth.call(null,vec__13859,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13856,fn_name,more__$1,vec__13859,params,body,vec__13853,seq__13854,first__13855,seq__13854__$1,head,more){
return (function (p1__13850_SHARP_){
return fipp.visit.visit.call(null,p,p1__13850_SHARP_);
});})(vec__13856,fn_name,more__$1,vec__13859,params,body,vec__13853,seq__13854,first__13855,seq__13854__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__13856,fn_name,more__$1,vec__13859,params,body,vec__13853,seq__13854,first__13855,seq__13854__$1,head,more){
return (function (p1__13851_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13851_SHARP_);
});})(vec__13856,fn_name,more__$1,vec__13859,params,body,vec__13853,seq__13854,first__13855,seq__13854__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__13865){
var vec__13866 = p__13865;
var _ = cljs.core.nth.call(null,vec__13866,(0),null);
var params = cljs.core.nth.call(null,vec__13866,(1),null);
var body = cljs.core.nth.call(null,vec__13866,(2),null);
var form = vec__13866;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__13869 = cljs.core.split_with.call(null,((function (vec__13866,_,params,body,form){
return (function (p1__13862_SHARP_){
return cljs.core.not_EQ_.call(null,p1__13862_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__13866,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__13869,(0),null);
var rests = cljs.core.nth.call(null,vec__13869,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__13869,inits,rests,vec__13866,_,params,body,form){
return (function (p1__13863_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13863_SHARP_ + (1)))].join(''));
});})(vec__13869,inits,rests,vec__13866,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13869,inits,rests,params_STAR_,body_STAR_,vec__13866,_,params,body,form){
return (function (p1__13864_SHARP_){
return fipp.visit.visit.call(null,p,p1__13864_SHARP_);
});})(vec__13869,inits,rests,params_STAR_,body_STAR_,vec__13866,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__13873){
var vec__13874 = p__13873;
var seq__13875 = cljs.core.seq.call(null,vec__13874);
var first__13876 = cljs.core.first.call(null,seq__13875);
var seq__13875__$1 = cljs.core.next.call(null,seq__13875);
var head = first__13876;
var clauses = seq__13875__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13874,seq__13875,first__13876,seq__13875__$1,head,clauses){
return (function (p1__13872_SHARP_){
return fipp.visit.visit.call(null,p,p1__13872_SHARP_);
});})(vec__13874,seq__13875,first__13876,seq__13875__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__13878){
var vec__13879 = p__13878;
var seq__13880 = cljs.core.seq.call(null,vec__13879);
var first__13881 = cljs.core.first.call(null,seq__13880);
var seq__13880__$1 = cljs.core.next.call(null,seq__13880);
var head = first__13881;
var first__13881__$1 = cljs.core.first.call(null,seq__13880__$1);
var seq__13880__$2 = cljs.core.next.call(null,seq__13880__$1);
var ns_sym = first__13881__$1;
var more = seq__13880__$2;
var vec__13882 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13882,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13882,(1),null);
var vec__13885 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13885,(0),null);
var specs = cljs.core.nth.call(null,vec__13885,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__13882,docstring,more__$1,vec__13885,attr_map,specs,vec__13879,seq__13880,first__13881,seq__13880__$1,head,first__13881__$1,seq__13880__$2,ns_sym,more){
return (function (p1__13877_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__13877_SHARP_);
});})(vec__13882,docstring,more__$1,vec__13885,attr_map,specs,vec__13879,seq__13880,first__13881,seq__13880__$1,head,first__13881__$1,seq__13880__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__13888){
var vec__13889 = p__13888;
var macro = cljs.core.nth.call(null,vec__13889,(0),null);
var arg = cljs.core.nth.call(null,vec__13889,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__13892 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__13892__$1 = (((G__13892 instanceof cljs.core.Keyword))?G__13892.fqn:null);
switch (G__13892__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13892__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__13894(s__13895){
return (new cljs.core.LazySeq(null,(function (){
var s__13895__$1 = s__13895;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13895__$1);
if(temp__5720__auto__){
var s__13895__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13895__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13895__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13897 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13896 = (0);
while(true){
if((i__13896 < size__4323__auto__)){
var vec__13898 = cljs.core._nth.call(null,c__4322__auto__,i__13896);
var k = cljs.core.nth.call(null,vec__13898,(0),null);
var v = cljs.core.nth.call(null,vec__13898,(1),null);
cljs.core.chunk_append.call(null,b__13897,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__13904 = (i__13896 + (1));
i__13896 = G__13904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13897),fipp$clojure$pretty_bindings_$_iter__13894.call(null,cljs.core.chunk_rest.call(null,s__13895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13897),null);
}
} else {
var vec__13901 = cljs.core.first.call(null,s__13895__$2);
var k = cljs.core.nth.call(null,vec__13901,(0),null);
var v = cljs.core.nth.call(null,vec__13901,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__13894.call(null,cljs.core.rest.call(null,s__13895__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__13906){
var vec__13907 = p__13906;
var seq__13908 = cljs.core.seq.call(null,vec__13907);
var first__13909 = cljs.core.first.call(null,seq__13908);
var seq__13908__$1 = cljs.core.next.call(null,seq__13908);
var head = first__13909;
var first__13909__$1 = cljs.core.first.call(null,seq__13908__$1);
var seq__13908__$2 = cljs.core.next.call(null,seq__13908__$1);
var bvec = first__13909__$1;
var body = seq__13908__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13907,seq__13908,first__13909,seq__13908__$1,head,first__13909__$1,seq__13908__$2,bvec,body){
return (function (p1__13905_SHARP_){
return fipp.visit.visit.call(null,p,p1__13905_SHARP_);
});})(vec__13907,seq__13908,first__13909,seq__13908__$1,head,first__13909__$1,seq__13908__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__13910_SHARP_){
return fipp.visit.visit.call(null,p,p1__13910_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__13911){
var vec__13912 = p__13911;
var seq__13913 = cljs.core.seq.call(null,vec__13912);
var first__13914 = cljs.core.first.call(null,seq__13913);
var seq__13913__$1 = cljs.core.next.call(null,seq__13913);
var head = first__13914;
var first__13914__$1 = cljs.core.first.call(null,seq__13913__$1);
var seq__13913__$2 = cljs.core.next.call(null,seq__13913__$1);
var fields = first__13914__$1;
var opts_PLUS_specs = seq__13913__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__13915){
var vec__13916 = p__13915;
var seq__13917 = cljs.core.seq.call(null,vec__13916);
var first__13918 = cljs.core.first.call(null,seq__13917);
var seq__13917__$1 = cljs.core.next.call(null,seq__13917);
var head = first__13918;
var opts_PLUS_specs = seq__13917__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__13919(s__13920){
return (new cljs.core.LazySeq(null,(function (){
var s__13920__$1 = s__13920;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13920__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__13927 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__13927,(0),null);
var syms = cljs.core.nth.call(null,vec__13927,(1),null);
var iterys__4320__auto__ = ((function (s__13920__$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13919_$_iter__13921(s__13922){
return (new cljs.core.LazySeq(null,((function (s__13920__$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13922__$1 = s__13922;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__13922__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__13922__$1,s__13920__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13919_$_iter__13921_$_iter__13923(s__13924){
return (new cljs.core.LazySeq(null,((function (s__13922__$1,s__13920__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13924__$1 = s__13924;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__13924__$1);
if(temp__5720__auto____$2){
var s__13924__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13924__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13924__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13926 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13925 = (0);
while(true){
if((i__13925 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__13925);
cljs.core.chunk_append.call(null,b__13926,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__13930 = (i__13925 + (1));
i__13925 = G__13930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13926),fipp$clojure$build_symbol_map_$_iter__13919_$_iter__13921_$_iter__13923.call(null,cljs.core.chunk_rest.call(null,s__13924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13926),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__13924__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__13919_$_iter__13921_$_iter__13923.call(null,cljs.core.rest.call(null,s__13924__$2)));
}
} else {
return null;
}
break;
}
});})(s__13922__$1,s__13920__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13922__$1,s__13920__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13919_$_iter__13921.call(null,cljs.core.rest.call(null,s__13922__$1)));
} else {
var G__13931 = cljs.core.rest.call(null,s__13922__$1);
s__13922__$1 = G__13931;
continue;
}
} else {
return null;
}
break;
}
});})(s__13920__$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13920__$1,vec__13927,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13919.call(null,cljs.core.rest.call(null,s__13920__$1)));
} else {
var G__13932 = cljs.core.rest.call(null,s__13920__$1);
s__13920__$1 = G__13932;
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
var G__13934 = arguments.length;
switch (G__13934) {
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
