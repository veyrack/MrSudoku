// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14476 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__14477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14478 = null;
var count__14479 = (0);
var i__14480 = (0);
while(true){
if((i__14480 < count__14479)){
var vec__14481 = cljs.core._nth.call(null,chunk__14478,i__14480);
var effect_key = cljs.core.nth.call(null,vec__14481,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14481,(1),null);
var temp__5718__auto___14497 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14497)){
var effect_fn_14498 = temp__5718__auto___14497;
effect_fn_14498.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14499 = seq__14477;
var G__14500 = chunk__14478;
var G__14501 = count__14479;
var G__14502 = (i__14480 + (1));
seq__14477 = G__14499;
chunk__14478 = G__14500;
count__14479 = G__14501;
i__14480 = G__14502;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14477);
if(temp__5720__auto__){
var seq__14477__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14477__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14477__$1);
var G__14503 = cljs.core.chunk_rest.call(null,seq__14477__$1);
var G__14504 = c__4351__auto__;
var G__14505 = cljs.core.count.call(null,c__4351__auto__);
var G__14506 = (0);
seq__14477 = G__14503;
chunk__14478 = G__14504;
count__14479 = G__14505;
i__14480 = G__14506;
continue;
} else {
var vec__14484 = cljs.core.first.call(null,seq__14477__$1);
var effect_key = cljs.core.nth.call(null,vec__14484,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14484,(1),null);
var temp__5718__auto___14507 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14507)){
var effect_fn_14508 = temp__5718__auto___14507;
effect_fn_14508.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14509 = cljs.core.next.call(null,seq__14477__$1);
var G__14510 = null;
var G__14511 = (0);
var G__14512 = (0);
seq__14477 = G__14509;
chunk__14478 = G__14510;
count__14479 = G__14511;
i__14480 = G__14512;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9910__auto___14513 = re_frame.interop.now.call(null);
var duration__9911__auto___14514 = (end__9910__auto___14513 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9911__auto___14514,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9910__auto___14513);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14476;
}} else {
var seq__14487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14488 = null;
var count__14489 = (0);
var i__14490 = (0);
while(true){
if((i__14490 < count__14489)){
var vec__14491 = cljs.core._nth.call(null,chunk__14488,i__14490);
var effect_key = cljs.core.nth.call(null,vec__14491,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14491,(1),null);
var temp__5718__auto___14515 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14515)){
var effect_fn_14516 = temp__5718__auto___14515;
effect_fn_14516.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14517 = seq__14487;
var G__14518 = chunk__14488;
var G__14519 = count__14489;
var G__14520 = (i__14490 + (1));
seq__14487 = G__14517;
chunk__14488 = G__14518;
count__14489 = G__14519;
i__14490 = G__14520;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14487);
if(temp__5720__auto__){
var seq__14487__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14487__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14487__$1);
var G__14521 = cljs.core.chunk_rest.call(null,seq__14487__$1);
var G__14522 = c__4351__auto__;
var G__14523 = cljs.core.count.call(null,c__4351__auto__);
var G__14524 = (0);
seq__14487 = G__14521;
chunk__14488 = G__14522;
count__14489 = G__14523;
i__14490 = G__14524;
continue;
} else {
var vec__14494 = cljs.core.first.call(null,seq__14487__$1);
var effect_key = cljs.core.nth.call(null,vec__14494,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14494,(1),null);
var temp__5718__auto___14525 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14525)){
var effect_fn_14526 = temp__5718__auto___14525;
effect_fn_14526.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14527 = cljs.core.next.call(null,seq__14487__$1);
var G__14528 = null;
var G__14529 = (0);
var G__14530 = (0);
seq__14487 = G__14527;
chunk__14488 = G__14528;
count__14489 = G__14529;
i__14490 = G__14530;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__14531 = cljs.core.seq.call(null,value);
var chunk__14532 = null;
var count__14533 = (0);
var i__14534 = (0);
while(true){
if((i__14534 < count__14533)){
var map__14535 = cljs.core._nth.call(null,chunk__14532,i__14534);
var map__14535__$1 = ((((!((map__14535 == null)))?(((((map__14535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14535):map__14535);
var effect = map__14535__$1;
var ms = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14531,chunk__14532,count__14533,i__14534,map__14535,map__14535__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14531,chunk__14532,count__14533,i__14534,map__14535,map__14535__$1,effect,ms,dispatch))
,ms);
}


var G__14539 = seq__14531;
var G__14540 = chunk__14532;
var G__14541 = count__14533;
var G__14542 = (i__14534 + (1));
seq__14531 = G__14539;
chunk__14532 = G__14540;
count__14533 = G__14541;
i__14534 = G__14542;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14531);
if(temp__5720__auto__){
var seq__14531__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14531__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14531__$1);
var G__14543 = cljs.core.chunk_rest.call(null,seq__14531__$1);
var G__14544 = c__4351__auto__;
var G__14545 = cljs.core.count.call(null,c__4351__auto__);
var G__14546 = (0);
seq__14531 = G__14543;
chunk__14532 = G__14544;
count__14533 = G__14545;
i__14534 = G__14546;
continue;
} else {
var map__14537 = cljs.core.first.call(null,seq__14531__$1);
var map__14537__$1 = ((((!((map__14537 == null)))?(((((map__14537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14537):map__14537);
var effect = map__14537__$1;
var ms = cljs.core.get.call(null,map__14537__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14537__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14531,chunk__14532,count__14533,i__14534,map__14537,map__14537__$1,effect,ms,dispatch,seq__14531__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14531,chunk__14532,count__14533,i__14534,map__14537,map__14537__$1,effect,ms,dispatch,seq__14531__$1,temp__5720__auto__))
,ms);
}


var G__14547 = cljs.core.next.call(null,seq__14531__$1);
var G__14548 = null;
var G__14549 = (0);
var G__14550 = (0);
seq__14531 = G__14547;
chunk__14532 = G__14548;
count__14533 = G__14549;
i__14534 = G__14550;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__14551 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14552 = null;
var count__14553 = (0);
var i__14554 = (0);
while(true){
if((i__14554 < count__14553)){
var event = cljs.core._nth.call(null,chunk__14552,i__14554);
re_frame.router.dispatch.call(null,event);


var G__14555 = seq__14551;
var G__14556 = chunk__14552;
var G__14557 = count__14553;
var G__14558 = (i__14554 + (1));
seq__14551 = G__14555;
chunk__14552 = G__14556;
count__14553 = G__14557;
i__14554 = G__14558;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14551);
if(temp__5720__auto__){
var seq__14551__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14551__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14551__$1);
var G__14559 = cljs.core.chunk_rest.call(null,seq__14551__$1);
var G__14560 = c__4351__auto__;
var G__14561 = cljs.core.count.call(null,c__4351__auto__);
var G__14562 = (0);
seq__14551 = G__14559;
chunk__14552 = G__14560;
count__14553 = G__14561;
i__14554 = G__14562;
continue;
} else {
var event = cljs.core.first.call(null,seq__14551__$1);
re_frame.router.dispatch.call(null,event);


var G__14563 = cljs.core.next.call(null,seq__14551__$1);
var G__14564 = null;
var G__14565 = (0);
var G__14566 = (0);
seq__14551 = G__14563;
chunk__14552 = G__14564;
count__14553 = G__14565;
i__14554 = G__14566;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__14567 = cljs.core.seq.call(null,value);
var chunk__14568 = null;
var count__14569 = (0);
var i__14570 = (0);
while(true){
if((i__14570 < count__14569)){
var event = cljs.core._nth.call(null,chunk__14568,i__14570);
clear_event.call(null,event);


var G__14571 = seq__14567;
var G__14572 = chunk__14568;
var G__14573 = count__14569;
var G__14574 = (i__14570 + (1));
seq__14567 = G__14571;
chunk__14568 = G__14572;
count__14569 = G__14573;
i__14570 = G__14574;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14567);
if(temp__5720__auto__){
var seq__14567__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14567__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14567__$1);
var G__14575 = cljs.core.chunk_rest.call(null,seq__14567__$1);
var G__14576 = c__4351__auto__;
var G__14577 = cljs.core.count.call(null,c__4351__auto__);
var G__14578 = (0);
seq__14567 = G__14575;
chunk__14568 = G__14576;
count__14569 = G__14577;
i__14570 = G__14578;
continue;
} else {
var event = cljs.core.first.call(null,seq__14567__$1);
clear_event.call(null,event);


var G__14579 = cljs.core.next.call(null,seq__14567__$1);
var G__14580 = null;
var G__14581 = (0);
var G__14582 = (0);
seq__14567 = G__14579;
chunk__14568 = G__14580;
count__14569 = G__14581;
i__14570 = G__14582;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
