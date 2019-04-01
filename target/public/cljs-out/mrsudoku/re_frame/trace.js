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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11770){
var map__11771 = p__11770;
var map__11771__$1 = ((((!((map__11771 == null)))?(((((map__11771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11771):map__11771);
var operation = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__11773_11785 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11774_11786 = null;
var count__11775_11787 = (0);
var i__11776_11788 = (0);
while(true){
if((i__11776_11788 < count__11775_11787)){
var vec__11777_11789 = cljs.core._nth.call(null,chunk__11774_11786,i__11776_11788);
var k_11790 = cljs.core.nth.call(null,vec__11777_11789,(0),null);
var cb_11791 = cljs.core.nth.call(null,vec__11777_11789,(1),null);
try{cb_11791.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11780){var e_11792 = e11780;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11790,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11792);
}

var G__11793 = seq__11773_11785;
var G__11794 = chunk__11774_11786;
var G__11795 = count__11775_11787;
var G__11796 = (i__11776_11788 + (1));
seq__11773_11785 = G__11793;
chunk__11774_11786 = G__11794;
count__11775_11787 = G__11795;
i__11776_11788 = G__11796;
continue;
} else {
var temp__5720__auto___11797 = cljs.core.seq.call(null,seq__11773_11785);
if(temp__5720__auto___11797){
var seq__11773_11798__$1 = temp__5720__auto___11797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11773_11798__$1)){
var c__4351__auto___11799 = cljs.core.chunk_first.call(null,seq__11773_11798__$1);
var G__11800 = cljs.core.chunk_rest.call(null,seq__11773_11798__$1);
var G__11801 = c__4351__auto___11799;
var G__11802 = cljs.core.count.call(null,c__4351__auto___11799);
var G__11803 = (0);
seq__11773_11785 = G__11800;
chunk__11774_11786 = G__11801;
count__11775_11787 = G__11802;
i__11776_11788 = G__11803;
continue;
} else {
var vec__11781_11804 = cljs.core.first.call(null,seq__11773_11798__$1);
var k_11805 = cljs.core.nth.call(null,vec__11781_11804,(0),null);
var cb_11806 = cljs.core.nth.call(null,vec__11781_11804,(1),null);
try{cb_11806.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11784){var e_11807 = e11784;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11805,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11807);
}

var G__11808 = cljs.core.next.call(null,seq__11773_11798__$1);
var G__11809 = null;
var G__11810 = (0);
var G__11811 = (0);
seq__11773_11785 = G__11808;
chunk__11774_11786 = G__11809;
count__11775_11787 = G__11810;
i__11776_11788 = G__11811;
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
