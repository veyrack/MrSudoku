// Compiled by ClojureScript 1.10.339 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__13503){
var vec__13504 = p__13503;
var seq__13505 = cljs.core.seq.call(null,vec__13504);
var first__13506 = cljs.core.first.call(null,seq__13505);
var seq__13505__$1 = cljs.core.next.call(null,seq__13505);
var _ = first__13506;
var text = seq__13505__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__13507){
var vec__13508 = p__13507;
var seq__13509 = cljs.core.seq.call(null,vec__13508);
var first__13510 = cljs.core.first.call(null,seq__13509);
var seq__13509__$1 = cljs.core.next.call(null,seq__13509);
var _ = first__13510;
var text = seq__13509__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__13511){
var vec__13512 = p__13511;
var _ = cljs.core.nth.call(null,vec__13512,(0),null);
var text = cljs.core.nth.call(null,vec__13512,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__13515){
var vec__13516 = p__13515;
var seq__13517 = cljs.core.seq.call(null,vec__13516);
var first__13518 = cljs.core.first.call(null,seq__13517);
var seq__13517__$1 = cljs.core.next.call(null,seq__13517);
var _ = first__13518;
var children = seq__13517__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__13519){
var vec__13520 = p__13519;
var _ = cljs.core.nth.call(null,vec__13520,(0),null);
var inline = cljs.core.nth.call(null,vec__13520,(1),null);
var terminate = cljs.core.nth.call(null,vec__13520,(2),null);
var inline__$1 = (function (){var or__3949__auto__ = inline;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__3949__auto__ = terminate;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__13523__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__13523 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13524__i = 0, G__13524__a = new Array(arguments.length -  0);
while (G__13524__i < G__13524__a.length) {G__13524__a[G__13524__i] = arguments[G__13524__i + 0]; ++G__13524__i;}
  _ = new cljs.core.IndexedSeq(G__13524__a,0,null);
} 
return G__13523__delegate.call(this,_);};
G__13523.cljs$lang$maxFixedArity = 0;
G__13523.cljs$lang$applyTo = (function (arglist__13525){
var _ = cljs.core.seq(arglist__13525);
return G__13523__delegate(_);
});
G__13523.cljs$core$IFn$_invoke$arity$variadic = G__13523__delegate;
return G__13523;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__13526){
var vec__13527 = p__13526;
var seq__13528 = cljs.core.seq.call(null,vec__13527);
var first__13529 = cljs.core.first.call(null,seq__13528);
var seq__13528__$1 = cljs.core.next.call(null,seq__13528);
var _ = first__13529;
var children = seq__13528__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__13530){
var vec__13531 = p__13530;
var seq__13532 = cljs.core.seq.call(null,vec__13531);
var first__13533 = cljs.core.first.call(null,seq__13532);
var seq__13532__$1 = cljs.core.next.call(null,seq__13532);
var _ = first__13533;
var args = seq__13532__$1;
var vec__13534 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__13535 = cljs.core.seq.call(null,vec__13534);
var first__13536 = cljs.core.first.call(null,seq__13535);
var seq__13535__$1 = cljs.core.next.call(null,seq__13535);
var offset = first__13536;
var children = seq__13535__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__13537){
var vec__13538 = p__13537;
var seq__13539 = cljs.core.seq.call(null,vec__13538);
var first__13540 = cljs.core.first.call(null,seq__13539);
var seq__13539__$1 = cljs.core.next.call(null,seq__13539);
var _ = first__13540;
var args = seq__13539__$1;
var vec__13541 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__13542 = cljs.core.seq.call(null,vec__13541);
var first__13543 = cljs.core.first.call(null,seq__13542);
var seq__13542__$1 = cljs.core.next.call(null,seq__13542);
var offset = first__13543;
var children = seq__13542__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__13545 = null;
var G__13545__0 = (function (){
return rf.call(null);
});
var G__13545__1 = (function (res){
return rf.call(null,res);
});
var G__13545__2 = (function (res,node){
var delta = (function (){var G__13544 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__13544__$1 = (((G__13544 instanceof cljs.core.Keyword))?G__13544.fqn:null);
switch (G__13544__$1) {
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__13545 = function(res,node){
switch(arguments.length){
case 0:
return G__13545__0.call(this);
case 1:
return G__13545__1.call(this,res);
case 2:
return G__13545__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13545.cljs$core$IFn$_invoke$arity$0 = G__13545__0;
G__13545.cljs$core$IFn$_invoke$arity$1 = G__13545__1;
G__13545.cljs$core$IFn$_invoke$arity$2 = G__13545__2;
return G__13545;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13550 = arguments.length;
var i__4532__auto___13551 = (0);
while(true){
if((i__4532__auto___13551 < len__4531__auto___13550)){
args__4534__auto__.push((arguments[i__4532__auto___13551]));

var G__13552 = (i__4532__auto___13551 + (1));
i__4532__auto___13551 = G__13552;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq13547){
var G__13548 = cljs.core.first.call(null,seq13547);
var seq13547__$1 = cljs.core.next.call(null,seq13547);
var G__13549 = cljs.core.first.call(null,seq13547__$1);
var seq13547__$2 = cljs.core.next.call(null,seq13547__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13548,G__13549,seq13547__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__13553){
var map__13554 = p__13553;
var map__13554__$1 = ((((!((map__13554 == null)))?(((((map__13554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13554):map__13554);
var options = map__13554__$1;
var width = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__13554,map__13554__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__13554,map__13554__$1,options,width){
return (function() {
var G__13559 = null;
var G__13559__0 = (function (){
return rf.call(null);
});
var G__13559__1 = (function (res){
return rf.call(null,res);
});
var G__13559__2 = (function (res,p__13556){
var map__13557 = p__13556;
var map__13557__$1 = ((((!((map__13557 == null)))?(((((map__13557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13557):map__13557);
var node = map__13557__$1;
var op = cljs.core.get.call(null,map__13557__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__13557__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__13560 = buffers_STAR__STAR_;
var G__13561 = res_STAR___$1;
buffers_STAR_ = G__13560;
res__$1 = G__13561;
continue;
}
}
break;
}
}
}
});
G__13559 = function(res,p__13556){
switch(arguments.length){
case 0:
return G__13559__0.call(this);
case 1:
return G__13559__1.call(this,res);
case 2:
return G__13559__2.call(this,res,p__13556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13559.cljs$core$IFn$_invoke$arity$0 = G__13559__0;
G__13559.cljs$core$IFn$_invoke$arity$1 = G__13559__1;
G__13559.cljs$core$IFn$_invoke$arity$2 = G__13559__2;
return G__13559;
})()
;})(pos,bufs,map__13554,map__13554__$1,options,width))
});
;})(map__13554,map__13554__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__13562){
var map__13563 = p__13562;
var map__13563__$1 = ((((!((map__13563 == null)))?(((((map__13563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13563):map__13563);
var options = map__13563__$1;
var width = cljs.core.get.call(null,map__13563__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__13563,map__13563__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__13563,map__13563__$1,options,width){
return (function() {
var G__13569 = null;
var G__13569__0 = (function (){
return rf.call(null);
});
var G__13569__1 = (function (res){
return rf.call(null,res);
});
var G__13569__2 = (function (res,p__13565){
var map__13566 = p__13565;
var map__13566__$1 = ((((!((map__13566 == null)))?(((((map__13566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13566):map__13566);
var node = map__13566__$1;
var op = cljs.core.get.call(null,map__13566__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__13566__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__13568 = op;
var G__13568__$1 = (((G__13568 instanceof cljs.core.Keyword))?G__13568.fqn:null);
switch (G__13568__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__4037__auto__ = (0);
var y__4038__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__13569 = function(res,p__13565){
switch(arguments.length){
case 0:
return G__13569__0.call(this);
case 1:
return G__13569__1.call(this,res);
case 2:
return G__13569__2.call(this,res,p__13565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13569.cljs$core$IFn$_invoke$arity$0 = G__13569__0;
G__13569.cljs$core$IFn$_invoke$arity$1 = G__13569__1;
G__13569.cljs$core$IFn$_invoke$arity$2 = G__13569__2;
return G__13569;
})()
;})(fits,length,tab_stops,column,map__13563,map__13563__$1,options,width))
});
;})(map__13563,map__13563__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_13571__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_13571__$1),fipp.engine.format_nodes.call(null,options_13571__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});

//# sourceMappingURL=engine.js.map
