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
var _STAR_current_trace_STAR_11920 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__11921 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11922 = null;
var count__11923 = (0);
var i__11924 = (0);
while(true){
if((i__11924 < count__11923)){
var vec__11925 = cljs.core._nth.call(null,chunk__11922,i__11924);
var effect_key = cljs.core.nth.call(null,vec__11925,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11925,(1),null);
var temp__5718__auto___11941 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11941)){
var effect_fn_11942 = temp__5718__auto___11941;
effect_fn_11942.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11943 = seq__11921;
var G__11944 = chunk__11922;
var G__11945 = count__11923;
var G__11946 = (i__11924 + (1));
seq__11921 = G__11943;
chunk__11922 = G__11944;
count__11923 = G__11945;
i__11924 = G__11946;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11921);
if(temp__5720__auto__){
var seq__11921__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11921__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11921__$1);
var G__11947 = cljs.core.chunk_rest.call(null,seq__11921__$1);
var G__11948 = c__4351__auto__;
var G__11949 = cljs.core.count.call(null,c__4351__auto__);
var G__11950 = (0);
seq__11921 = G__11947;
chunk__11922 = G__11948;
count__11923 = G__11949;
i__11924 = G__11950;
continue;
} else {
var vec__11928 = cljs.core.first.call(null,seq__11921__$1);
var effect_key = cljs.core.nth.call(null,vec__11928,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11928,(1),null);
var temp__5718__auto___11951 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11951)){
var effect_fn_11952 = temp__5718__auto___11951;
effect_fn_11952.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11953 = cljs.core.next.call(null,seq__11921__$1);
var G__11954 = null;
var G__11955 = (0);
var G__11956 = (0);
seq__11921 = G__11953;
chunk__11922 = G__11954;
count__11923 = G__11955;
i__11924 = G__11956;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11748__auto___11957 = re_frame.interop.now.call(null);
var duration__11749__auto___11958 = (end__11748__auto___11957 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11749__auto___11958,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11748__auto___11957);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11920;
}} else {
var seq__11931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11932 = null;
var count__11933 = (0);
var i__11934 = (0);
while(true){
if((i__11934 < count__11933)){
var vec__11935 = cljs.core._nth.call(null,chunk__11932,i__11934);
var effect_key = cljs.core.nth.call(null,vec__11935,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11935,(1),null);
var temp__5718__auto___11959 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11959)){
var effect_fn_11960 = temp__5718__auto___11959;
effect_fn_11960.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11961 = seq__11931;
var G__11962 = chunk__11932;
var G__11963 = count__11933;
var G__11964 = (i__11934 + (1));
seq__11931 = G__11961;
chunk__11932 = G__11962;
count__11933 = G__11963;
i__11934 = G__11964;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11931);
if(temp__5720__auto__){
var seq__11931__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11931__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11931__$1);
var G__11965 = cljs.core.chunk_rest.call(null,seq__11931__$1);
var G__11966 = c__4351__auto__;
var G__11967 = cljs.core.count.call(null,c__4351__auto__);
var G__11968 = (0);
seq__11931 = G__11965;
chunk__11932 = G__11966;
count__11933 = G__11967;
i__11934 = G__11968;
continue;
} else {
var vec__11938 = cljs.core.first.call(null,seq__11931__$1);
var effect_key = cljs.core.nth.call(null,vec__11938,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11938,(1),null);
var temp__5718__auto___11969 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11969)){
var effect_fn_11970 = temp__5718__auto___11969;
effect_fn_11970.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11971 = cljs.core.next.call(null,seq__11931__$1);
var G__11972 = null;
var G__11973 = (0);
var G__11974 = (0);
seq__11931 = G__11971;
chunk__11932 = G__11972;
count__11933 = G__11973;
i__11934 = G__11974;
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
var seq__11975 = cljs.core.seq.call(null,value);
var chunk__11976 = null;
var count__11977 = (0);
var i__11978 = (0);
while(true){
if((i__11978 < count__11977)){
var map__11979 = cljs.core._nth.call(null,chunk__11976,i__11978);
var map__11979__$1 = ((((!((map__11979 == null)))?(((((map__11979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11979):map__11979);
var effect = map__11979__$1;
var ms = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11975,chunk__11976,count__11977,i__11978,map__11979,map__11979__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11975,chunk__11976,count__11977,i__11978,map__11979,map__11979__$1,effect,ms,dispatch))
,ms);
}


var G__11983 = seq__11975;
var G__11984 = chunk__11976;
var G__11985 = count__11977;
var G__11986 = (i__11978 + (1));
seq__11975 = G__11983;
chunk__11976 = G__11984;
count__11977 = G__11985;
i__11978 = G__11986;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11975);
if(temp__5720__auto__){
var seq__11975__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11975__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11975__$1);
var G__11987 = cljs.core.chunk_rest.call(null,seq__11975__$1);
var G__11988 = c__4351__auto__;
var G__11989 = cljs.core.count.call(null,c__4351__auto__);
var G__11990 = (0);
seq__11975 = G__11987;
chunk__11976 = G__11988;
count__11977 = G__11989;
i__11978 = G__11990;
continue;
} else {
var map__11981 = cljs.core.first.call(null,seq__11975__$1);
var map__11981__$1 = ((((!((map__11981 == null)))?(((((map__11981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11981):map__11981);
var effect = map__11981__$1;
var ms = cljs.core.get.call(null,map__11981__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11981__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11975,chunk__11976,count__11977,i__11978,map__11981,map__11981__$1,effect,ms,dispatch,seq__11975__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11975,chunk__11976,count__11977,i__11978,map__11981,map__11981__$1,effect,ms,dispatch,seq__11975__$1,temp__5720__auto__))
,ms);
}


var G__11991 = cljs.core.next.call(null,seq__11975__$1);
var G__11992 = null;
var G__11993 = (0);
var G__11994 = (0);
seq__11975 = G__11991;
chunk__11976 = G__11992;
count__11977 = G__11993;
i__11978 = G__11994;
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
var seq__11995 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11996 = null;
var count__11997 = (0);
var i__11998 = (0);
while(true){
if((i__11998 < count__11997)){
var event = cljs.core._nth.call(null,chunk__11996,i__11998);
re_frame.router.dispatch.call(null,event);


var G__11999 = seq__11995;
var G__12000 = chunk__11996;
var G__12001 = count__11997;
var G__12002 = (i__11998 + (1));
seq__11995 = G__11999;
chunk__11996 = G__12000;
count__11997 = G__12001;
i__11998 = G__12002;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11995);
if(temp__5720__auto__){
var seq__11995__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11995__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11995__$1);
var G__12003 = cljs.core.chunk_rest.call(null,seq__11995__$1);
var G__12004 = c__4351__auto__;
var G__12005 = cljs.core.count.call(null,c__4351__auto__);
var G__12006 = (0);
seq__11995 = G__12003;
chunk__11996 = G__12004;
count__11997 = G__12005;
i__11998 = G__12006;
continue;
} else {
var event = cljs.core.first.call(null,seq__11995__$1);
re_frame.router.dispatch.call(null,event);


var G__12007 = cljs.core.next.call(null,seq__11995__$1);
var G__12008 = null;
var G__12009 = (0);
var G__12010 = (0);
seq__11995 = G__12007;
chunk__11996 = G__12008;
count__11997 = G__12009;
i__11998 = G__12010;
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
var seq__12011 = cljs.core.seq.call(null,value);
var chunk__12012 = null;
var count__12013 = (0);
var i__12014 = (0);
while(true){
if((i__12014 < count__12013)){
var event = cljs.core._nth.call(null,chunk__12012,i__12014);
clear_event.call(null,event);


var G__12015 = seq__12011;
var G__12016 = chunk__12012;
var G__12017 = count__12013;
var G__12018 = (i__12014 + (1));
seq__12011 = G__12015;
chunk__12012 = G__12016;
count__12013 = G__12017;
i__12014 = G__12018;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12011);
if(temp__5720__auto__){
var seq__12011__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12011__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12011__$1);
var G__12019 = cljs.core.chunk_rest.call(null,seq__12011__$1);
var G__12020 = c__4351__auto__;
var G__12021 = cljs.core.count.call(null,c__4351__auto__);
var G__12022 = (0);
seq__12011 = G__12019;
chunk__12012 = G__12020;
count__12013 = G__12021;
i__12014 = G__12022;
continue;
} else {
var event = cljs.core.first.call(null,seq__12011__$1);
clear_event.call(null,event);


var G__12023 = cljs.core.next.call(null,seq__12011__$1);
var G__12024 = null;
var G__12025 = (0);
var G__12026 = (0);
seq__12011 = G__12023;
chunk__12012 = G__12024;
count__12013 = G__12025;
i__12014 = G__12026;
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
