// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9979){
var map__9980 = p__9979;
var map__9980__$1 = ((((!((map__9980 == null)))?(((((map__9980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9980):map__9980);
var operation = cljs.core.get.call(null,map__9980__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__9980__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9980__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__9980__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__9982_9994 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__9983_9995 = null;
var count__9984_9996 = (0);
var i__9985_9997 = (0);
while(true){
if((i__9985_9997 < count__9984_9996)){
var vec__9986_9998 = cljs.core._nth.call(null,chunk__9983_9995,i__9985_9997);
var k_9999 = cljs.core.nth.call(null,vec__9986_9998,(0),null);
var cb_10000 = cljs.core.nth.call(null,vec__9986_9998,(1),null);
try{cb_10000.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9989){var e_10001 = e9989;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9999,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10001);
}

var G__10002 = seq__9982_9994;
var G__10003 = chunk__9983_9995;
var G__10004 = count__9984_9996;
var G__10005 = (i__9985_9997 + (1));
seq__9982_9994 = G__10002;
chunk__9983_9995 = G__10003;
count__9984_9996 = G__10004;
i__9985_9997 = G__10005;
continue;
} else {
var temp__5720__auto___10006 = cljs.core.seq.call(null,seq__9982_9994);
if(temp__5720__auto___10006){
var seq__9982_10007__$1 = temp__5720__auto___10006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9982_10007__$1)){
var c__4351__auto___10008 = cljs.core.chunk_first.call(null,seq__9982_10007__$1);
var G__10009 = cljs.core.chunk_rest.call(null,seq__9982_10007__$1);
var G__10010 = c__4351__auto___10008;
var G__10011 = cljs.core.count.call(null,c__4351__auto___10008);
var G__10012 = (0);
seq__9982_9994 = G__10009;
chunk__9983_9995 = G__10010;
count__9984_9996 = G__10011;
i__9985_9997 = G__10012;
continue;
} else {
var vec__9990_10013 = cljs.core.first.call(null,seq__9982_10007__$1);
var k_10014 = cljs.core.nth.call(null,vec__9990_10013,(0),null);
var cb_10015 = cljs.core.nth.call(null,vec__9990_10013,(1),null);
try{cb_10015.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9993){var e_10016 = e9993;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10014,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10016);
}

var G__10017 = cljs.core.next.call(null,seq__9982_10007__$1);
var G__10018 = null;
var G__10019 = (0);
var G__10020 = (0);
seq__9982_9994 = G__10017;
chunk__9983_9995 = G__10018;
count__9984_9996 = G__10019;
i__9985_9997 = G__10020;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
