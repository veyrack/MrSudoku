// Compiled by ClojureScript 1.10.339 {}
goog.provide('jx.reporter.karma');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.data');
goog.require('fipp.clojure');
jx.reporter.karma.karma = cljs.core.volatile_BANG_.call(null,null);
jx.reporter.karma.karma_QMARK_ = (function jx$reporter$karma$karma_QMARK_(){
return !((cljs.core.deref.call(null,jx.reporter.karma.karma) == null));
});
jx.reporter.karma.karma_info_BANG_ = (function jx$reporter$karma$karma_info_BANG_(m){
if(cljs.core.truth_(jx.reporter.karma.karma_QMARK_.call(null))){
return cljs.core.deref.call(null,jx.reporter.karma.karma).info(cljs.core.clj__GT_js.call(null,m));
} else {
return null;
}
});
jx.reporter.karma.karma_result_BANG_ = (function jx$reporter$karma$karma_result_BANG_(m){
if(cljs.core.truth_(jx.reporter.karma.karma_QMARK_.call(null))){
return cljs.core.deref.call(null,jx.reporter.karma.karma).result(cljs.core.clj__GT_js.call(null,m));
} else {
return null;
}
});
jx.reporter.karma.coverage_result = (function jx$reporter$karma$coverage_result(){
return ({"coverage": (window["__coverage__"])});
});
jx.reporter.karma.karma_complete_BANG_ = (function jx$reporter$karma$karma_complete_BANG_(){
if(cljs.core.truth_(jx.reporter.karma.karma_QMARK_.call(null))){
return cljs.core.deref.call(null,jx.reporter.karma.karma).complete(jx.reporter.karma.coverage_result.call(null));
} else {
return null;
}
});
jx.reporter.karma.now = (function jx$reporter$karma$now(){
return (new Date()).getTime();
});
jx.reporter.karma.indent = (function jx$reporter$karma$indent(n,s){
var indentation = cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.repeat.call(null,n," "));
return clojure.string.replace.call(null,s,/\n/,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indentation)].join(''));
});
jx.reporter.karma.remove_last_new_line = (function jx$reporter$karma$remove_last_new_line(s){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
});
jx.reporter.karma.format_fn = (function jx$reporter$karma$format_fn(indentation,p__11264){
var vec__11265 = p__11264;
var seq__11266 = cljs.core.seq.call(null,vec__11265);
var first__11267 = cljs.core.first.call(null,seq__11266);
var seq__11266__$1 = cljs.core.next.call(null,seq__11266);
var c = first__11267;
var q = seq__11266__$1;
var e = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__11265,seq__11266,first__11267,seq__11266__$1,c,q){
return (function (p1__11263_SHARP_){
var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11268_11270 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11269_11271 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11268_11270,_STAR_print_fn_STAR_11269_11271,sb__4462__auto__,vec__11265,seq__11266,first__11267,seq__11266__$1,c,q){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_11268_11270,_STAR_print_fn_STAR_11269_11271,sb__4462__auto__,vec__11265,seq__11266,first__11267,seq__11266__$1,c,q))
;

try{fipp.clojure.pprint.call(null,p1__11263_SHARP_);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11269_11271;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11268_11270;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
});})(vec__11265,seq__11266,first__11267,seq__11266__$1,c,q))
,q)))].join('');
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(jx.reporter.karma.indent.call(null,(indentation + (2)),jx.reporter.karma.remove_last_new_line.call(null,e))),")"].join('');
});
jx.reporter.karma.format_diff = (function jx$reporter$karma$format_diff(indentation,assert,p__11272){
var vec__11273 = p__11272;
var seq__11274 = cljs.core.seq.call(null,vec__11273);
var first__11275 = cljs.core.first.call(null,seq__11274);
var seq__11274__$1 = cljs.core.next.call(null,seq__11274);
var c = first__11275;
var first__11275__$1 = cljs.core.first.call(null,seq__11274__$1);
var seq__11274__$2 = cljs.core.next.call(null,seq__11274__$1);
var a = first__11275__$1;
var first__11275__$2 = cljs.core.first.call(null,seq__11274__$2);
var seq__11274__$3 = cljs.core.next.call(null,seq__11274__$2);
var b = first__11275__$2;
var q = seq__11274__$3;
if(((cljs.core._EQ_.call(null,c,new cljs.core.Symbol(null,"=","=",-1501502141,null))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,assert),(3))) && ((q == null)))){
var format = ((function (vec__11273,seq__11274,first__11275,seq__11274__$1,c,first__11275__$1,seq__11274__$2,a,first__11275__$2,seq__11274__$3,b,q){
return (function (sign,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sign)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(value)?jx.reporter.karma.indent.call(null,(indentation + (2)),jx.reporter.karma.remove_last_new_line.call(null,(function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11279_11281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11280_11282 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11279_11281,_STAR_print_fn_STAR_11280_11282,sb__4462__auto__,vec__11273,seq__11274,first__11275,seq__11274__$1,c,first__11275__$1,seq__11274__$2,a,first__11275__$2,seq__11274__$3,b,q){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_11279_11281,_STAR_print_fn_STAR_11280_11282,sb__4462__auto__,vec__11273,seq__11274,first__11275,seq__11274__$1,c,first__11275__$1,seq__11274__$2,a,first__11275__$2,seq__11274__$3,b,q))
;

try{fipp.clojure.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11280_11282;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11279_11281;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
})())):"\n"))].join('');
});})(vec__11273,seq__11274,first__11275,seq__11274__$1,c,first__11275__$1,seq__11274__$2,a,first__11275__$2,seq__11274__$3,b,q))
;
var vec__11276 = clojure.data.diff.call(null,a,b);
var removed = cljs.core.nth.call(null,vec__11276,(0),null);
var added = cljs.core.nth.call(null,vec__11276,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(format.call(null,"-",removed)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(format.call(null,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indentation," "))),"+"].join(''),added))].join('');
} else {
return null;
}
});
jx.reporter.karma.format_log = (function jx$reporter$karma$format_log(p__11283){
var map__11284 = p__11283;
var map__11284__$1 = ((((!((map__11284 == null)))?(((((map__11284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11284):map__11284);
var result = map__11284__$1;
var expected = cljs.core.get.call(null,map__11284__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__11284__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var message = cljs.core.get.call(null,map__11284__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var indentation = cljs.core.count.call(null,"expected: ");
return ["FAIL in   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.test.testing_vars_str.call(null,result)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.seq_QMARK_.call(null,expected)) && (cljs.core.seq_QMARK_.call(null,actual))))?["expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jx.reporter.karma.format_fn.call(null,indentation,expected)),"\n","  actual: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jx.reporter.karma.format_fn.call(null,indentation,cljs.core.second.call(null,actual))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = jx.reporter.karma.format_diff.call(null,indentation,expected,cljs.core.second.call(null,actual));
if(cljs.core.truth_(temp__5720__auto__)){
var diff = temp__5720__auto__;
return ["    diff: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff),"\n"].join('');
} else {
return null;
}
})())].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," failed with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual),"\n"].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(message)?[" message: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jx.reporter.karma.indent.call(null,indentation,message)),"\n"].join(''):null))].join('');
});
jx.reporter.karma.test_var_result = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
jx.reporter.karma.test_var_time_start = cljs.core.volatile_BANG_.call(null,jx.reporter.karma.now.call(null));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.Keyword(null,"karma","karma",1375588493),(function (_){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (_){
cljs.core.vreset_BANG_.call(null,jx.reporter.karma.test_var_time_start,jx.reporter.karma.now.call(null));

return cljs.core.vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
var var_meta = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(m));
var result = new cljs.core.PersistentArrayMap(null, 6, ["suite",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var_meta)], null),"description",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_meta),"success",(cljs.core.count.call(null,cljs.core.deref.call(null,jx.reporter.karma.test_var_result)) === (0)),"skipped",null,"time",(jx.reporter.karma.now.call(null) - cljs.core.deref.call(null,jx.reporter.karma.test_var_time_start)),"log",cljs.core.map.call(null,jx.reporter.karma.format_log,cljs.core.deref.call(null,jx.reporter.karma.test_var_result))], null);
return jx.reporter.karma.karma_result_BANG_.call(null,result);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

return cljs.core._vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.conj.call(null,cljs.core._deref.call(null,jx.reporter.karma.test_var_result),m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core._vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.conj.call(null,cljs.core._deref.call(null,jx.reporter.karma.test_var_result),m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (_){
return jx.reporter.karma.karma_complete_BANG_.call(null);
}));
jx.reporter.karma.start = (function jx$reporter$karma$start(tc,total_count){
cljs.core.vreset_BANG_.call(null,jx.reporter.karma.karma,tc);

return jx.reporter.karma.karma_info_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),total_count], null));
});

//# sourceMappingURL=karma.js.map
