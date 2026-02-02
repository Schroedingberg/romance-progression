goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36407 = (function (f,blockable,meta36408){
this.f = f;
this.blockable = blockable;
this.meta36408 = meta36408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36409,meta36408__$1){
var self__ = this;
var _36409__$1 = this;
return (new cljs.core.async.t_cljs$core$async36407(self__.f,self__.blockable,meta36408__$1));
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36409){
var self__ = this;
var _36409__$1 = this;
return self__.meta36408;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36408","meta36408",-1637216098,null)], null);
}));

(cljs.core.async.t_cljs$core$async36407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36407");

(cljs.core.async.t_cljs$core$async36407.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36407.
 */
cljs.core.async.__GT_t_cljs$core$async36407 = (function cljs$core$async$__GT_t_cljs$core$async36407(f,blockable,meta36408){
return (new cljs.core.async.t_cljs$core$async36407(f,blockable,meta36408));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36402 = arguments.length;
switch (G__36402) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async36407(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36442 = arguments.length;
switch (G__36442) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36461 = arguments.length;
switch (G__36461) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36468 = arguments.length;
switch (G__36468) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41571 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41571) : fn1.call(null, val_41571));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41571) : fn1.call(null, val_41571));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36501 = arguments.length;
switch (G__36501) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___41576 = n;
var x_41577 = (0);
while(true){
if((x_41577 < n__5593__auto___41576)){
(a[x_41577] = x_41577);

var G__41578 = (x_41577 + (1));
x_41577 = G__41578;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36555 = (function (flag,meta36556){
this.flag = flag;
this.meta36556 = meta36556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36557,meta36556__$1){
var self__ = this;
var _36557__$1 = this;
return (new cljs.core.async.t_cljs$core$async36555(self__.flag,meta36556__$1));
}));

(cljs.core.async.t_cljs$core$async36555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36557){
var self__ = this;
var _36557__$1 = this;
return self__.meta36556;
}));

(cljs.core.async.t_cljs$core$async36555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36556","meta36556",-625540959,null)], null);
}));

(cljs.core.async.t_cljs$core$async36555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36555");

(cljs.core.async.t_cljs$core$async36555.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36555.
 */
cljs.core.async.__GT_t_cljs$core$async36555 = (function cljs$core$async$__GT_t_cljs$core$async36555(flag,meta36556){
return (new cljs.core.async.t_cljs$core$async36555(flag,meta36556));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async36555(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36586 = (function (flag,cb,meta36588){
this.flag = flag;
this.cb = cb;
this.meta36588 = meta36588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36589,meta36588__$1){
var self__ = this;
var _36589__$1 = this;
return (new cljs.core.async.t_cljs$core$async36586(self__.flag,self__.cb,meta36588__$1));
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36589){
var self__ = this;
var _36589__$1 = this;
return self__.meta36588;
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36588","meta36588",441374178,null)], null);
}));

(cljs.core.async.t_cljs$core$async36586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36586");

(cljs.core.async.t_cljs$core$async36586.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36586.
 */
cljs.core.async.__GT_t_cljs$core$async36586 = (function cljs$core$async$__GT_t_cljs$core$async36586(flag,cb,meta36588){
return (new cljs.core.async.t_cljs$core$async36586(flag,cb,meta36588));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async36586(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36623_SHARP_){
var G__36636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36623_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36636) : fret.call(null, G__36636));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36624_SHARP_){
var G__36644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36624_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36644) : fret.call(null, G__36644));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41587 = (i + (1));
i = G__41587;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41588 = arguments.length;
var i__5727__auto___41589 = (0);
while(true){
if((i__5727__auto___41589 < len__5726__auto___41588)){
args__5732__auto__.push((arguments[i__5727__auto___41589]));

var G__41590 = (i__5727__auto___41589 + (1));
i__5727__auto___41589 = G__41590;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36683){
var map__36684 = p__36683;
var map__36684__$1 = cljs.core.__destructure_map(map__36684);
var opts = map__36684__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36671){
var G__36676 = cljs.core.first(seq36671);
var seq36671__$1 = cljs.core.next(seq36671);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36676,seq36671__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36714 = arguments.length;
switch (G__36714) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36224__auto___41595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_36810){
var state_val_36811 = (state_36810[(1)]);
if((state_val_36811 === (7))){
var inst_36803 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36818_41597 = state_36810__$1;
(statearr_36818_41597[(2)] = inst_36803);

(statearr_36818_41597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (1))){
var state_36810__$1 = state_36810;
var statearr_36820_41598 = state_36810__$1;
(statearr_36820_41598[(2)] = null);

(statearr_36820_41598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (4))){
var inst_36777 = (state_36810[(7)]);
var inst_36777__$1 = (state_36810[(2)]);
var inst_36782 = (inst_36777__$1 == null);
var state_36810__$1 = (function (){var statearr_36829 = state_36810;
(statearr_36829[(7)] = inst_36777__$1);

return statearr_36829;
})();
if(cljs.core.truth_(inst_36782)){
var statearr_36830_41601 = state_36810__$1;
(statearr_36830_41601[(1)] = (5));

} else {
var statearr_36831_41602 = state_36810__$1;
(statearr_36831_41602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (13))){
var state_36810__$1 = state_36810;
var statearr_36833_41606 = state_36810__$1;
(statearr_36833_41606[(2)] = null);

(statearr_36833_41606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (6))){
var inst_36777 = (state_36810[(7)]);
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36810__$1,(11),to,inst_36777);
} else {
if((state_val_36811 === (3))){
var inst_36805 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36810__$1,inst_36805);
} else {
if((state_val_36811 === (12))){
var state_36810__$1 = state_36810;
var statearr_36843_41610 = state_36810__$1;
(statearr_36843_41610[(2)] = null);

(statearr_36843_41610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (2))){
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36810__$1,(4),from);
} else {
if((state_val_36811 === (11))){
var inst_36796 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
if(cljs.core.truth_(inst_36796)){
var statearr_36849_41617 = state_36810__$1;
(statearr_36849_41617[(1)] = (12));

} else {
var statearr_36853_41618 = state_36810__$1;
(statearr_36853_41618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (9))){
var state_36810__$1 = state_36810;
var statearr_36855_41621 = state_36810__$1;
(statearr_36855_41621[(2)] = null);

(statearr_36855_41621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (5))){
var state_36810__$1 = state_36810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36861_41625 = state_36810__$1;
(statearr_36861_41625[(1)] = (8));

} else {
var statearr_36862_41627 = state_36810__$1;
(statearr_36862_41627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (14))){
var inst_36801 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36864_41632 = state_36810__$1;
(statearr_36864_41632[(2)] = inst_36801);

(statearr_36864_41632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (10))){
var inst_36793 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36866_41636 = state_36810__$1;
(statearr_36866_41636[(2)] = inst_36793);

(statearr_36866_41636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (8))){
var inst_36789 = cljs.core.async.close_BANG_(to);
var state_36810__$1 = state_36810;
var statearr_36868_41641 = state_36810__$1;
(statearr_36868_41641[(2)] = inst_36789);

(statearr_36868_41641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_36871 = [null,null,null,null,null,null,null,null];
(statearr_36871[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_36871[(1)] = (1));

return statearr_36871;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_36810){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_36810);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e36874){var ex__34755__auto__ = e36874;
var statearr_36875_41652 = state_36810;
(statearr_36875_41652[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_36810[(4)]))){
var statearr_36876_41654 = state_36810;
(statearr_36876_41654[(1)] = cljs.core.first((state_36810[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41659 = state_36810;
state_36810 = G__41659;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_36810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_36810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_36880 = f__36225__auto__();
(statearr_36880[(6)] = c__36224__auto___41595);

return statearr_36880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__36901){
var vec__36904 = p__36901;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904,(1),null);
var job = vec__36904;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36224__auto___41670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_36914){
var state_val_36915 = (state_36914[(1)]);
if((state_val_36915 === (1))){
var state_36914__$1 = state_36914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36914__$1,(2),res,v);
} else {
if((state_val_36915 === (2))){
var inst_36911 = (state_36914[(2)]);
var inst_36912 = cljs.core.async.close_BANG_(res);
var state_36914__$1 = (function (){var statearr_36936 = state_36914;
(statearr_36936[(7)] = inst_36911);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36914__$1,inst_36912);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0 = (function (){
var statearr_36945 = [null,null,null,null,null,null,null,null];
(statearr_36945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__);

(statearr_36945[(1)] = (1));

return statearr_36945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1 = (function (state_36914){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_36914);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e36946){var ex__34755__auto__ = e36946;
var statearr_36947_41697 = state_36914;
(statearr_36947_41697[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_36914[(4)]))){
var statearr_36949_41699 = state_36914;
(statearr_36949_41699[(1)] = cljs.core.first((state_36914[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41701 = state_36914;
state_36914 = G__41701;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = function(state_36914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1.call(this,state_36914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_36951 = f__36225__auto__();
(statearr_36951[(6)] = c__36224__auto___41670);

return statearr_36951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36957){
var vec__36959 = p__36957;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(1),null);
var job = vec__36959;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___41706 = n;
var __41707 = (0);
while(true){
if((__41707 < n__5593__auto___41706)){
var G__36964_41708 = type;
var G__36964_41709__$1 = (((G__36964_41708 instanceof cljs.core.Keyword))?G__36964_41708.fqn:null);
switch (G__36964_41709__$1) {
case "compute":
var c__36224__auto___41712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41707,c__36224__auto___41712,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async){
return (function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = ((function (__41707,c__36224__auto___41712,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async){
return (function (state_36982){
var state_val_36983 = (state_36982[(1)]);
if((state_val_36983 === (1))){
var state_36982__$1 = state_36982;
var statearr_36995_41713 = state_36982__$1;
(statearr_36995_41713[(2)] = null);

(statearr_36995_41713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (2))){
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36982__$1,(4),jobs);
} else {
if((state_val_36983 === (3))){
var inst_36980 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36982__$1,inst_36980);
} else {
if((state_val_36983 === (4))){
var inst_36972 = (state_36982[(2)]);
var inst_36973 = process__$1(inst_36972);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36973)){
var statearr_37021_41719 = state_36982__$1;
(statearr_37021_41719[(1)] = (5));

} else {
var statearr_37022_41721 = state_36982__$1;
(statearr_37022_41721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (5))){
var state_36982__$1 = state_36982;
var statearr_37027_41723 = state_36982__$1;
(statearr_37027_41723[(2)] = null);

(statearr_37027_41723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (6))){
var state_36982__$1 = state_36982;
var statearr_37031_41724 = state_36982__$1;
(statearr_37031_41724[(2)] = null);

(statearr_37031_41724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (7))){
var inst_36978 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_37043_41725 = state_36982__$1;
(statearr_37043_41725[(2)] = inst_36978);

(statearr_37043_41725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41707,c__36224__auto___41712,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async))
;
return ((function (__41707,switch__34751__auto__,c__36224__auto___41712,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0 = (function (){
var statearr_37052 = [null,null,null,null,null,null,null];
(statearr_37052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__);

(statearr_37052[(1)] = (1));

return statearr_37052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1 = (function (state_36982){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_36982);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37062){var ex__34755__auto__ = e37062;
var statearr_37064_41730 = state_36982;
(statearr_37064_41730[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_36982[(4)]))){
var statearr_37066_41731 = state_36982;
(statearr_37066_41731[(1)] = cljs.core.first((state_36982[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41732 = state_36982;
state_36982 = G__41732;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = function(state_36982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1.call(this,state_36982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__;
})()
;})(__41707,switch__34751__auto__,c__36224__auto___41712,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async))
})();
var state__36226__auto__ = (function (){var statearr_37088 = f__36225__auto__();
(statearr_37088[(6)] = c__36224__auto___41712);

return statearr_37088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
});})(__41707,c__36224__auto___41712,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async))
);


break;
case "async":
var c__36224__auto___41735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41707,c__36224__auto___41735,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async){
return (function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = ((function (__41707,c__36224__auto___41735,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async){
return (function (state_37113){
var state_val_37114 = (state_37113[(1)]);
if((state_val_37114 === (1))){
var state_37113__$1 = state_37113;
var statearr_37119_41738 = state_37113__$1;
(statearr_37119_41738[(2)] = null);

(statearr_37119_41738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37114 === (2))){
var state_37113__$1 = state_37113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37113__$1,(4),jobs);
} else {
if((state_val_37114 === (3))){
var inst_37111 = (state_37113[(2)]);
var state_37113__$1 = state_37113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37113__$1,inst_37111);
} else {
if((state_val_37114 === (4))){
var inst_37101 = (state_37113[(2)]);
var inst_37102 = async(inst_37101);
var state_37113__$1 = state_37113;
if(cljs.core.truth_(inst_37102)){
var statearr_37139_41739 = state_37113__$1;
(statearr_37139_41739[(1)] = (5));

} else {
var statearr_37144_41740 = state_37113__$1;
(statearr_37144_41740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37114 === (5))){
var state_37113__$1 = state_37113;
var statearr_37145_41741 = state_37113__$1;
(statearr_37145_41741[(2)] = null);

(statearr_37145_41741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37114 === (6))){
var state_37113__$1 = state_37113;
var statearr_37149_41744 = state_37113__$1;
(statearr_37149_41744[(2)] = null);

(statearr_37149_41744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37114 === (7))){
var inst_37107 = (state_37113[(2)]);
var state_37113__$1 = state_37113;
var statearr_37169_41745 = state_37113__$1;
(statearr_37169_41745[(2)] = inst_37107);

(statearr_37169_41745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41707,c__36224__auto___41735,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async))
;
return ((function (__41707,switch__34751__auto__,c__36224__auto___41735,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0 = (function (){
var statearr_37179 = [null,null,null,null,null,null,null];
(statearr_37179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__);

(statearr_37179[(1)] = (1));

return statearr_37179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1 = (function (state_37113){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37113);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37183){var ex__34755__auto__ = e37183;
var statearr_37187_41751 = state_37113;
(statearr_37187_41751[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37113[(4)]))){
var statearr_37192_41753 = state_37113;
(statearr_37192_41753[(1)] = cljs.core.first((state_37113[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41755 = state_37113;
state_37113 = G__41755;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = function(state_37113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1.call(this,state_37113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__;
})()
;})(__41707,switch__34751__auto__,c__36224__auto___41735,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async))
})();
var state__36226__auto__ = (function (){var statearr_37226 = f__36225__auto__();
(statearr_37226[(6)] = c__36224__auto___41735);

return statearr_37226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
});})(__41707,c__36224__auto___41735,G__36964_41708,G__36964_41709__$1,n__5593__auto___41706,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36964_41709__$1)].join('')));

}

var G__41756 = (__41707 + (1));
__41707 = G__41756;
continue;
} else {
}
break;
}

var c__36224__auto___41757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_37292){
var state_val_37293 = (state_37292[(1)]);
if((state_val_37293 === (7))){
var inst_37288 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37305_41759 = state_37292__$1;
(statearr_37305_41759[(2)] = inst_37288);

(statearr_37305_41759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (1))){
var state_37292__$1 = state_37292;
var statearr_37306_41760 = state_37292__$1;
(statearr_37306_41760[(2)] = null);

(statearr_37306_41760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (4))){
var inst_37262 = (state_37292[(7)]);
var inst_37262__$1 = (state_37292[(2)]);
var inst_37266 = (inst_37262__$1 == null);
var state_37292__$1 = (function (){var statearr_37309 = state_37292;
(statearr_37309[(7)] = inst_37262__$1);

return statearr_37309;
})();
if(cljs.core.truth_(inst_37266)){
var statearr_37310_41761 = state_37292__$1;
(statearr_37310_41761[(1)] = (5));

} else {
var statearr_37311_41762 = state_37292__$1;
(statearr_37311_41762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (6))){
var inst_37270 = (state_37292[(8)]);
var inst_37262 = (state_37292[(7)]);
var inst_37270__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37280 = [inst_37262,inst_37270__$1];
var inst_37281 = (new cljs.core.PersistentVector(null,2,(5),inst_37279,inst_37280,null));
var state_37292__$1 = (function (){var statearr_37312 = state_37292;
(statearr_37312[(8)] = inst_37270__$1);

return statearr_37312;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37292__$1,(8),jobs,inst_37281);
} else {
if((state_val_37293 === (3))){
var inst_37290 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37292__$1,inst_37290);
} else {
if((state_val_37293 === (2))){
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37292__$1,(4),from);
} else {
if((state_val_37293 === (9))){
var inst_37285 = (state_37292[(2)]);
var state_37292__$1 = (function (){var statearr_37325 = state_37292;
(statearr_37325[(9)] = inst_37285);

return statearr_37325;
})();
var statearr_37326_41765 = state_37292__$1;
(statearr_37326_41765[(2)] = null);

(statearr_37326_41765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (5))){
var inst_37268 = cljs.core.async.close_BANG_(jobs);
var state_37292__$1 = state_37292;
var statearr_37328_41766 = state_37292__$1;
(statearr_37328_41766[(2)] = inst_37268);

(statearr_37328_41766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (8))){
var inst_37270 = (state_37292[(8)]);
var inst_37283 = (state_37292[(2)]);
var state_37292__$1 = (function (){var statearr_37329 = state_37292;
(statearr_37329[(10)] = inst_37283);

return statearr_37329;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37292__$1,(9),results,inst_37270);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0 = (function (){
var statearr_37333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__);

(statearr_37333[(1)] = (1));

return statearr_37333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1 = (function (state_37292){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37292);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37338){var ex__34755__auto__ = e37338;
var statearr_37339_41773 = state_37292;
(statearr_37339_41773[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37292[(4)]))){
var statearr_37340_41774 = state_37292;
(statearr_37340_41774[(1)] = cljs.core.first((state_37292[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41775 = state_37292;
state_37292 = G__41775;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = function(state_37292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1.call(this,state_37292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_37349 = f__36225__auto__();
(statearr_37349[(6)] = c__36224__auto___41757);

return statearr_37349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


var c__36224__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_37406){
var state_val_37408 = (state_37406[(1)]);
if((state_val_37408 === (7))){
var inst_37402 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37414_41777 = state_37406__$1;
(statearr_37414_41777[(2)] = inst_37402);

(statearr_37414_41777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (20))){
var state_37406__$1 = state_37406;
var statearr_37416_41785 = state_37406__$1;
(statearr_37416_41785[(2)] = null);

(statearr_37416_41785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (1))){
var state_37406__$1 = state_37406;
var statearr_37419_41790 = state_37406__$1;
(statearr_37419_41790[(2)] = null);

(statearr_37419_41790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (4))){
var inst_37356 = (state_37406[(7)]);
var inst_37356__$1 = (state_37406[(2)]);
var inst_37357 = (inst_37356__$1 == null);
var state_37406__$1 = (function (){var statearr_37427 = state_37406;
(statearr_37427[(7)] = inst_37356__$1);

return statearr_37427;
})();
if(cljs.core.truth_(inst_37357)){
var statearr_37430_41791 = state_37406__$1;
(statearr_37430_41791[(1)] = (5));

} else {
var statearr_37433_41792 = state_37406__$1;
(statearr_37433_41792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (15))){
var inst_37384 = (state_37406[(8)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37406__$1,(18),to,inst_37384);
} else {
if((state_val_37408 === (21))){
var inst_37397 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37445_41797 = state_37406__$1;
(statearr_37445_41797[(2)] = inst_37397);

(statearr_37445_41797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (13))){
var inst_37399 = (state_37406[(2)]);
var state_37406__$1 = (function (){var statearr_37453 = state_37406;
(statearr_37453[(9)] = inst_37399);

return statearr_37453;
})();
var statearr_37462_41798 = state_37406__$1;
(statearr_37462_41798[(2)] = null);

(statearr_37462_41798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (6))){
var inst_37356 = (state_37406[(7)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37406__$1,(11),inst_37356);
} else {
if((state_val_37408 === (17))){
var inst_37392 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37392)){
var statearr_37467_41799 = state_37406__$1;
(statearr_37467_41799[(1)] = (19));

} else {
var statearr_37472_41800 = state_37406__$1;
(statearr_37472_41800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (3))){
var inst_37404 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37406__$1,inst_37404);
} else {
if((state_val_37408 === (12))){
var inst_37378 = (state_37406[(10)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37406__$1,(14),inst_37378);
} else {
if((state_val_37408 === (2))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37406__$1,(4),results);
} else {
if((state_val_37408 === (19))){
var state_37406__$1 = state_37406;
var statearr_37511_41806 = state_37406__$1;
(statearr_37511_41806[(2)] = null);

(statearr_37511_41806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (11))){
var inst_37378 = (state_37406[(2)]);
var state_37406__$1 = (function (){var statearr_37526 = state_37406;
(statearr_37526[(10)] = inst_37378);

return statearr_37526;
})();
var statearr_37532_41812 = state_37406__$1;
(statearr_37532_41812[(2)] = null);

(statearr_37532_41812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (9))){
var state_37406__$1 = state_37406;
var statearr_37548_41815 = state_37406__$1;
(statearr_37548_41815[(2)] = null);

(statearr_37548_41815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (5))){
var state_37406__$1 = state_37406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37549_41818 = state_37406__$1;
(statearr_37549_41818[(1)] = (8));

} else {
var statearr_37552_41820 = state_37406__$1;
(statearr_37552_41820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (14))){
var inst_37386 = (state_37406[(11)]);
var inst_37384 = (state_37406[(8)]);
var inst_37384__$1 = (state_37406[(2)]);
var inst_37385 = (inst_37384__$1 == null);
var inst_37386__$1 = cljs.core.not(inst_37385);
var state_37406__$1 = (function (){var statearr_37559 = state_37406;
(statearr_37559[(11)] = inst_37386__$1);

(statearr_37559[(8)] = inst_37384__$1);

return statearr_37559;
})();
if(inst_37386__$1){
var statearr_37572_41821 = state_37406__$1;
(statearr_37572_41821[(1)] = (15));

} else {
var statearr_37575_41822 = state_37406__$1;
(statearr_37575_41822[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (16))){
var inst_37386 = (state_37406[(11)]);
var state_37406__$1 = state_37406;
var statearr_37580_41823 = state_37406__$1;
(statearr_37580_41823[(2)] = inst_37386);

(statearr_37580_41823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (10))){
var inst_37373 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37585_41825 = state_37406__$1;
(statearr_37585_41825[(2)] = inst_37373);

(statearr_37585_41825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (18))){
var inst_37389 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37586_41829 = state_37406__$1;
(statearr_37586_41829[(2)] = inst_37389);

(statearr_37586_41829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (8))){
var inst_37364 = cljs.core.async.close_BANG_(to);
var state_37406__$1 = state_37406;
var statearr_37588_41831 = state_37406__$1;
(statearr_37588_41831[(2)] = inst_37364);

(statearr_37588_41831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0 = (function (){
var statearr_37614 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__);

(statearr_37614[(1)] = (1));

return statearr_37614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1 = (function (state_37406){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37406);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37615){var ex__34755__auto__ = e37615;
var statearr_37616_41835 = state_37406;
(statearr_37616_41835[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37406[(4)]))){
var statearr_37617_41841 = state_37406;
(statearr_37617_41841[(1)] = cljs.core.first((state_37406[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41844 = state_37406;
state_37406 = G__41844;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34752__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_37620 = f__36225__auto__();
(statearr_37620[(6)] = c__36224__auto__);

return statearr_37620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));

return c__36224__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37633 = arguments.length;
switch (G__37633) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37645 = arguments.length;
switch (G__37645) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37665 = arguments.length;
switch (G__37665) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36224__auto___41861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_37700){
var state_val_37701 = (state_37700[(1)]);
if((state_val_37701 === (7))){
var inst_37696 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37710_41862 = state_37700__$1;
(statearr_37710_41862[(2)] = inst_37696);

(statearr_37710_41862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (1))){
var state_37700__$1 = state_37700;
var statearr_37711_41863 = state_37700__$1;
(statearr_37711_41863[(2)] = null);

(statearr_37711_41863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (4))){
var inst_37676 = (state_37700[(7)]);
var inst_37676__$1 = (state_37700[(2)]);
var inst_37677 = (inst_37676__$1 == null);
var state_37700__$1 = (function (){var statearr_37714 = state_37700;
(statearr_37714[(7)] = inst_37676__$1);

return statearr_37714;
})();
if(cljs.core.truth_(inst_37677)){
var statearr_37715_41864 = state_37700__$1;
(statearr_37715_41864[(1)] = (5));

} else {
var statearr_37716_41865 = state_37700__$1;
(statearr_37716_41865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (13))){
var state_37700__$1 = state_37700;
var statearr_37717_41866 = state_37700__$1;
(statearr_37717_41866[(2)] = null);

(statearr_37717_41866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (6))){
var inst_37676 = (state_37700[(7)]);
var inst_37682 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37676) : p.call(null, inst_37676));
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37682)){
var statearr_37718_41873 = state_37700__$1;
(statearr_37718_41873[(1)] = (9));

} else {
var statearr_37719_41878 = state_37700__$1;
(statearr_37719_41878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (3))){
var inst_37698 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37700__$1,inst_37698);
} else {
if((state_val_37701 === (12))){
var state_37700__$1 = state_37700;
var statearr_37723_41883 = state_37700__$1;
(statearr_37723_41883[(2)] = null);

(statearr_37723_41883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (2))){
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37700__$1,(4),ch);
} else {
if((state_val_37701 === (11))){
var inst_37676 = (state_37700[(7)]);
var inst_37686 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37700__$1,(8),inst_37686,inst_37676);
} else {
if((state_val_37701 === (9))){
var state_37700__$1 = state_37700;
var statearr_37728_41895 = state_37700__$1;
(statearr_37728_41895[(2)] = tc);

(statearr_37728_41895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (5))){
var inst_37679 = cljs.core.async.close_BANG_(tc);
var inst_37680 = cljs.core.async.close_BANG_(fc);
var state_37700__$1 = (function (){var statearr_37732 = state_37700;
(statearr_37732[(8)] = inst_37679);

return statearr_37732;
})();
var statearr_37733_41903 = state_37700__$1;
(statearr_37733_41903[(2)] = inst_37680);

(statearr_37733_41903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (14))){
var inst_37694 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37734_41905 = state_37700__$1;
(statearr_37734_41905[(2)] = inst_37694);

(statearr_37734_41905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (10))){
var state_37700__$1 = state_37700;
var statearr_37735_41906 = state_37700__$1;
(statearr_37735_41906[(2)] = fc);

(statearr_37735_41906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (8))){
var inst_37688 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37688)){
var statearr_37736_41907 = state_37700__$1;
(statearr_37736_41907[(1)] = (12));

} else {
var statearr_37737_41908 = state_37700__$1;
(statearr_37737_41908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_37738 = [null,null,null,null,null,null,null,null,null];
(statearr_37738[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_37738[(1)] = (1));

return statearr_37738;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_37700){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37700);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37740){var ex__34755__auto__ = e37740;
var statearr_37742_41909 = state_37700;
(statearr_37742_41909[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37700[(4)]))){
var statearr_37751_41912 = state_37700;
(statearr_37751_41912[(1)] = cljs.core.first((state_37700[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41916 = state_37700;
state_37700 = G__41916;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_37700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_37700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_37753 = f__36225__auto__();
(statearr_37753[(6)] = c__36224__auto___41861);

return statearr_37753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36224__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_37786){
var state_val_37787 = (state_37786[(1)]);
if((state_val_37787 === (7))){
var inst_37782 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
var statearr_37794_41917 = state_37786__$1;
(statearr_37794_41917[(2)] = inst_37782);

(statearr_37794_41917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (1))){
var inst_37757 = init;
var inst_37758 = inst_37757;
var state_37786__$1 = (function (){var statearr_37799 = state_37786;
(statearr_37799[(7)] = inst_37758);

return statearr_37799;
})();
var statearr_37800_41918 = state_37786__$1;
(statearr_37800_41918[(2)] = null);

(statearr_37800_41918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (4))){
var inst_37763 = (state_37786[(8)]);
var inst_37763__$1 = (state_37786[(2)]);
var inst_37765 = (inst_37763__$1 == null);
var state_37786__$1 = (function (){var statearr_37802 = state_37786;
(statearr_37802[(8)] = inst_37763__$1);

return statearr_37802;
})();
if(cljs.core.truth_(inst_37765)){
var statearr_37803_41920 = state_37786__$1;
(statearr_37803_41920[(1)] = (5));

} else {
var statearr_37804_41921 = state_37786__$1;
(statearr_37804_41921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (6))){
var inst_37758 = (state_37786[(7)]);
var inst_37768 = (state_37786[(9)]);
var inst_37763 = (state_37786[(8)]);
var inst_37768__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37758,inst_37763) : f.call(null, inst_37758,inst_37763));
var inst_37769 = cljs.core.reduced_QMARK_(inst_37768__$1);
var state_37786__$1 = (function (){var statearr_37806 = state_37786;
(statearr_37806[(9)] = inst_37768__$1);

return statearr_37806;
})();
if(inst_37769){
var statearr_37808_41924 = state_37786__$1;
(statearr_37808_41924[(1)] = (8));

} else {
var statearr_37809_41925 = state_37786__$1;
(statearr_37809_41925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (3))){
var inst_37784 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37786__$1,inst_37784);
} else {
if((state_val_37787 === (2))){
var state_37786__$1 = state_37786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37786__$1,(4),ch);
} else {
if((state_val_37787 === (9))){
var inst_37768 = (state_37786[(9)]);
var inst_37758 = inst_37768;
var state_37786__$1 = (function (){var statearr_37817 = state_37786;
(statearr_37817[(7)] = inst_37758);

return statearr_37817;
})();
var statearr_37818_41926 = state_37786__$1;
(statearr_37818_41926[(2)] = null);

(statearr_37818_41926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (5))){
var inst_37758 = (state_37786[(7)]);
var state_37786__$1 = state_37786;
var statearr_37820_41927 = state_37786__$1;
(statearr_37820_41927[(2)] = inst_37758);

(statearr_37820_41927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (10))){
var inst_37780 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
var statearr_37821_41928 = state_37786__$1;
(statearr_37821_41928[(2)] = inst_37780);

(statearr_37821_41928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (8))){
var inst_37768 = (state_37786[(9)]);
var inst_37775 = cljs.core.deref(inst_37768);
var state_37786__$1 = state_37786;
var statearr_37822_41931 = state_37786__$1;
(statearr_37822_41931[(2)] = inst_37775);

(statearr_37822_41931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34752__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34752__auto____0 = (function (){
var statearr_37823 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37823[(0)] = cljs$core$async$reduce_$_state_machine__34752__auto__);

(statearr_37823[(1)] = (1));

return statearr_37823;
});
var cljs$core$async$reduce_$_state_machine__34752__auto____1 = (function (state_37786){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37786);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37824){var ex__34755__auto__ = e37824;
var statearr_37825_41940 = state_37786;
(statearr_37825_41940[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37786[(4)]))){
var statearr_37827_41941 = state_37786;
(statearr_37827_41941[(1)] = cljs.core.first((state_37786[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41942 = state_37786;
state_37786 = G__41942;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34752__auto__ = function(state_37786){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34752__auto____1.call(this,state_37786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34752__auto____0;
cljs$core$async$reduce_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34752__auto____1;
return cljs$core$async$reduce_$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_37838 = f__36225__auto__();
(statearr_37838[(6)] = c__36224__auto__);

return statearr_37838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));

return c__36224__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__36224__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_37846){
var state_val_37847 = (state_37846[(1)]);
if((state_val_37847 === (1))){
var inst_37841 = cljs.core.async.reduce(f__$1,init,ch);
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37846__$1,(2),inst_37841);
} else {
if((state_val_37847 === (2))){
var inst_37843 = (state_37846[(2)]);
var inst_37844 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37843) : f__$1.call(null, inst_37843));
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37846__$1,inst_37844);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34752__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34752__auto____0 = (function (){
var statearr_37863 = [null,null,null,null,null,null,null];
(statearr_37863[(0)] = cljs$core$async$transduce_$_state_machine__34752__auto__);

(statearr_37863[(1)] = (1));

return statearr_37863;
});
var cljs$core$async$transduce_$_state_machine__34752__auto____1 = (function (state_37846){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37846);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37864){var ex__34755__auto__ = e37864;
var statearr_37865_41961 = state_37846;
(statearr_37865_41961[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37846[(4)]))){
var statearr_37866_41964 = state_37846;
(statearr_37866_41964[(1)] = cljs.core.first((state_37846[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41974 = state_37846;
state_37846 = G__41974;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34752__auto__ = function(state_37846){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34752__auto____1.call(this,state_37846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34752__auto____0;
cljs$core$async$transduce_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34752__auto____1;
return cljs$core$async$transduce_$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_37872 = f__36225__auto__();
(statearr_37872[(6)] = c__36224__auto__);

return statearr_37872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));

return c__36224__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37875 = arguments.length;
switch (G__37875) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36224__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_37923){
var state_val_37924 = (state_37923[(1)]);
if((state_val_37924 === (7))){
var inst_37905 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
var statearr_37936_41992 = state_37923__$1;
(statearr_37936_41992[(2)] = inst_37905);

(statearr_37936_41992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (1))){
var inst_37893 = cljs.core.seq(coll);
var inst_37894 = inst_37893;
var state_37923__$1 = (function (){var statearr_37943 = state_37923;
(statearr_37943[(7)] = inst_37894);

return statearr_37943;
})();
var statearr_37944_41999 = state_37923__$1;
(statearr_37944_41999[(2)] = null);

(statearr_37944_41999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (4))){
var inst_37894 = (state_37923[(7)]);
var inst_37903 = cljs.core.first(inst_37894);
var state_37923__$1 = state_37923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37923__$1,(7),ch,inst_37903);
} else {
if((state_val_37924 === (13))){
var inst_37917 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
var statearr_37955_42008 = state_37923__$1;
(statearr_37955_42008[(2)] = inst_37917);

(statearr_37955_42008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (6))){
var inst_37908 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
if(cljs.core.truth_(inst_37908)){
var statearr_37961_42010 = state_37923__$1;
(statearr_37961_42010[(1)] = (8));

} else {
var statearr_37964_42011 = state_37923__$1;
(statearr_37964_42011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (3))){
var inst_37921 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37923__$1,inst_37921);
} else {
if((state_val_37924 === (12))){
var state_37923__$1 = state_37923;
var statearr_37967_42023 = state_37923__$1;
(statearr_37967_42023[(2)] = null);

(statearr_37967_42023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (2))){
var inst_37894 = (state_37923[(7)]);
var state_37923__$1 = state_37923;
if(cljs.core.truth_(inst_37894)){
var statearr_37969_42027 = state_37923__$1;
(statearr_37969_42027[(1)] = (4));

} else {
var statearr_37970_42028 = state_37923__$1;
(statearr_37970_42028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (11))){
var inst_37914 = cljs.core.async.close_BANG_(ch);
var state_37923__$1 = state_37923;
var statearr_37974_42029 = state_37923__$1;
(statearr_37974_42029[(2)] = inst_37914);

(statearr_37974_42029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (9))){
var state_37923__$1 = state_37923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37975_42037 = state_37923__$1;
(statearr_37975_42037[(1)] = (11));

} else {
var statearr_37976_42042 = state_37923__$1;
(statearr_37976_42042[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (5))){
var inst_37894 = (state_37923[(7)]);
var state_37923__$1 = state_37923;
var statearr_37978_42044 = state_37923__$1;
(statearr_37978_42044[(2)] = inst_37894);

(statearr_37978_42044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (10))){
var inst_37919 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
var statearr_37981_42052 = state_37923__$1;
(statearr_37981_42052[(2)] = inst_37919);

(statearr_37981_42052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (8))){
var inst_37894 = (state_37923[(7)]);
var inst_37910 = cljs.core.next(inst_37894);
var inst_37894__$1 = inst_37910;
var state_37923__$1 = (function (){var statearr_37987 = state_37923;
(statearr_37987[(7)] = inst_37894__$1);

return statearr_37987;
})();
var statearr_37988_42053 = state_37923__$1;
(statearr_37988_42053[(2)] = null);

(statearr_37988_42053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_37991 = [null,null,null,null,null,null,null,null];
(statearr_37991[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_37991[(1)] = (1));

return statearr_37991;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_37923){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_37923);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e37993){var ex__34755__auto__ = e37993;
var statearr_37994_42063 = state_37923;
(statearr_37994_42063[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_37923[(4)]))){
var statearr_37996_42068 = state_37923;
(statearr_37996_42068[(1)] = cljs.core.first((state_37923[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42069 = state_37923;
state_37923 = G__42069;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_37923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_37923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_38004 = f__36225__auto__();
(statearr_38004[(6)] = c__36224__auto__);

return statearr_38004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));

return c__36224__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38011 = arguments.length;
switch (G__38011) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42080 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42080(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42088 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42088(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42101 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42101(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42115 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42115(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38060 = (function (ch,cs,meta38061){
this.ch = ch;
this.cs = cs;
this.meta38061 = meta38061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38062,meta38061__$1){
var self__ = this;
var _38062__$1 = this;
return (new cljs.core.async.t_cljs$core$async38060(self__.ch,self__.cs,meta38061__$1));
}));

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38062){
var self__ = this;
var _38062__$1 = this;
return self__.meta38061;
}));

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38061","meta38061",1369655593,null)], null);
}));

(cljs.core.async.t_cljs$core$async38060.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38060");

(cljs.core.async.t_cljs$core$async38060.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async38060");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38060.
 */
cljs.core.async.__GT_t_cljs$core$async38060 = (function cljs$core$async$__GT_t_cljs$core$async38060(ch,cs,meta38061){
return (new cljs.core.async.t_cljs$core$async38060(ch,cs,meta38061));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async38060(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36224__auto___42136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_38347){
var state_val_38348 = (state_38347[(1)]);
if((state_val_38348 === (7))){
var inst_38337 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38358_42140 = state_38347__$1;
(statearr_38358_42140[(2)] = inst_38337);

(statearr_38358_42140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (20))){
var inst_38128 = (state_38347[(7)]);
var inst_38180 = cljs.core.first(inst_38128);
var inst_38186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38180,(0),null);
var inst_38187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38180,(1),null);
var state_38347__$1 = (function (){var statearr_38359 = state_38347;
(statearr_38359[(8)] = inst_38186);

return statearr_38359;
})();
if(cljs.core.truth_(inst_38187)){
var statearr_38360_42144 = state_38347__$1;
(statearr_38360_42144[(1)] = (22));

} else {
var statearr_38362_42145 = state_38347__$1;
(statearr_38362_42145[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (27))){
var inst_38093 = (state_38347[(9)]);
var inst_38235 = (state_38347[(10)]);
var inst_38237 = (state_38347[(11)]);
var inst_38252 = (state_38347[(12)]);
var inst_38252__$1 = cljs.core._nth(inst_38235,inst_38237);
var inst_38254 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38252__$1,inst_38093,done);
var state_38347__$1 = (function (){var statearr_38376 = state_38347;
(statearr_38376[(12)] = inst_38252__$1);

return statearr_38376;
})();
if(cljs.core.truth_(inst_38254)){
var statearr_38382_42151 = state_38347__$1;
(statearr_38382_42151[(1)] = (30));

} else {
var statearr_38384_42152 = state_38347__$1;
(statearr_38384_42152[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (1))){
var state_38347__$1 = state_38347;
var statearr_38387_42153 = state_38347__$1;
(statearr_38387_42153[(2)] = null);

(statearr_38387_42153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (24))){
var inst_38128 = (state_38347[(7)]);
var inst_38206 = (state_38347[(2)]);
var inst_38207 = cljs.core.next(inst_38128);
var inst_38103 = inst_38207;
var inst_38104 = null;
var inst_38105 = (0);
var inst_38106 = (0);
var state_38347__$1 = (function (){var statearr_38404 = state_38347;
(statearr_38404[(13)] = inst_38104);

(statearr_38404[(14)] = inst_38103);

(statearr_38404[(15)] = inst_38206);

(statearr_38404[(16)] = inst_38106);

(statearr_38404[(17)] = inst_38105);

return statearr_38404;
})();
var statearr_38415_42154 = state_38347__$1;
(statearr_38415_42154[(2)] = null);

(statearr_38415_42154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (39))){
var state_38347__$1 = state_38347;
var statearr_38435_42155 = state_38347__$1;
(statearr_38435_42155[(2)] = null);

(statearr_38435_42155[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (4))){
var inst_38093 = (state_38347[(9)]);
var inst_38093__$1 = (state_38347[(2)]);
var inst_38094 = (inst_38093__$1 == null);
var state_38347__$1 = (function (){var statearr_38440 = state_38347;
(statearr_38440[(9)] = inst_38093__$1);

return statearr_38440;
})();
if(cljs.core.truth_(inst_38094)){
var statearr_38441_42156 = state_38347__$1;
(statearr_38441_42156[(1)] = (5));

} else {
var statearr_38442_42157 = state_38347__$1;
(statearr_38442_42157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (15))){
var inst_38104 = (state_38347[(13)]);
var inst_38103 = (state_38347[(14)]);
var inst_38106 = (state_38347[(16)]);
var inst_38105 = (state_38347[(17)]);
var inst_38123 = (state_38347[(2)]);
var inst_38124 = (inst_38106 + (1));
var tmp38420 = inst_38104;
var tmp38421 = inst_38103;
var tmp38422 = inst_38105;
var inst_38103__$1 = tmp38421;
var inst_38104__$1 = tmp38420;
var inst_38105__$1 = tmp38422;
var inst_38106__$1 = inst_38124;
var state_38347__$1 = (function (){var statearr_38454 = state_38347;
(statearr_38454[(13)] = inst_38104__$1);

(statearr_38454[(14)] = inst_38103__$1);

(statearr_38454[(18)] = inst_38123);

(statearr_38454[(16)] = inst_38106__$1);

(statearr_38454[(17)] = inst_38105__$1);

return statearr_38454;
})();
var statearr_38455_42160 = state_38347__$1;
(statearr_38455_42160[(2)] = null);

(statearr_38455_42160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (21))){
var inst_38211 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38466_42162 = state_38347__$1;
(statearr_38466_42162[(2)] = inst_38211);

(statearr_38466_42162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (31))){
var inst_38252 = (state_38347[(12)]);
var inst_38263 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38252);
var state_38347__$1 = state_38347;
var statearr_38469_42163 = state_38347__$1;
(statearr_38469_42163[(2)] = inst_38263);

(statearr_38469_42163[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (32))){
var inst_38236 = (state_38347[(19)]);
var inst_38235 = (state_38347[(10)]);
var inst_38237 = (state_38347[(11)]);
var inst_38234 = (state_38347[(20)]);
var inst_38265 = (state_38347[(2)]);
var inst_38270 = (inst_38237 + (1));
var tmp38459 = inst_38236;
var tmp38460 = inst_38235;
var tmp38461 = inst_38234;
var inst_38234__$1 = tmp38461;
var inst_38235__$1 = tmp38460;
var inst_38236__$1 = tmp38459;
var inst_38237__$1 = inst_38270;
var state_38347__$1 = (function (){var statearr_38477 = state_38347;
(statearr_38477[(19)] = inst_38236__$1);

(statearr_38477[(10)] = inst_38235__$1);

(statearr_38477[(11)] = inst_38237__$1);

(statearr_38477[(21)] = inst_38265);

(statearr_38477[(20)] = inst_38234__$1);

return statearr_38477;
})();
var statearr_38480_42166 = state_38347__$1;
(statearr_38480_42166[(2)] = null);

(statearr_38480_42166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (40))){
var inst_38295 = (state_38347[(22)]);
var inst_38299 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38295);
var state_38347__$1 = state_38347;
var statearr_38484_42169 = state_38347__$1;
(statearr_38484_42169[(2)] = inst_38299);

(statearr_38484_42169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (33))){
var inst_38278 = (state_38347[(23)]);
var inst_38284 = cljs.core.chunked_seq_QMARK_(inst_38278);
var state_38347__$1 = state_38347;
if(inst_38284){
var statearr_38485_42170 = state_38347__$1;
(statearr_38485_42170[(1)] = (36));

} else {
var statearr_38486_42171 = state_38347__$1;
(statearr_38486_42171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (13))){
var inst_38116 = (state_38347[(24)]);
var inst_38120 = cljs.core.async.close_BANG_(inst_38116);
var state_38347__$1 = state_38347;
var statearr_38487_42172 = state_38347__$1;
(statearr_38487_42172[(2)] = inst_38120);

(statearr_38487_42172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (22))){
var inst_38186 = (state_38347[(8)]);
var inst_38203 = cljs.core.async.close_BANG_(inst_38186);
var state_38347__$1 = state_38347;
var statearr_38488_42175 = state_38347__$1;
(statearr_38488_42175[(2)] = inst_38203);

(statearr_38488_42175[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (36))){
var inst_38278 = (state_38347[(23)]);
var inst_38286 = cljs.core.chunk_first(inst_38278);
var inst_38287 = cljs.core.chunk_rest(inst_38278);
var inst_38292 = cljs.core.count(inst_38286);
var inst_38234 = inst_38287;
var inst_38235 = inst_38286;
var inst_38236 = inst_38292;
var inst_38237 = (0);
var state_38347__$1 = (function (){var statearr_38491 = state_38347;
(statearr_38491[(19)] = inst_38236);

(statearr_38491[(10)] = inst_38235);

(statearr_38491[(11)] = inst_38237);

(statearr_38491[(20)] = inst_38234);

return statearr_38491;
})();
var statearr_38492_42181 = state_38347__$1;
(statearr_38492_42181[(2)] = null);

(statearr_38492_42181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (41))){
var inst_38278 = (state_38347[(23)]);
var inst_38301 = (state_38347[(2)]);
var inst_38304 = cljs.core.next(inst_38278);
var inst_38234 = inst_38304;
var inst_38235 = null;
var inst_38236 = (0);
var inst_38237 = (0);
var state_38347__$1 = (function (){var statearr_38496 = state_38347;
(statearr_38496[(19)] = inst_38236);

(statearr_38496[(10)] = inst_38235);

(statearr_38496[(11)] = inst_38237);

(statearr_38496[(20)] = inst_38234);

(statearr_38496[(25)] = inst_38301);

return statearr_38496;
})();
var statearr_38497_42182 = state_38347__$1;
(statearr_38497_42182[(2)] = null);

(statearr_38497_42182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (43))){
var state_38347__$1 = state_38347;
var statearr_38498_42183 = state_38347__$1;
(statearr_38498_42183[(2)] = null);

(statearr_38498_42183[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (29))){
var inst_38324 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38499_42184 = state_38347__$1;
(statearr_38499_42184[(2)] = inst_38324);

(statearr_38499_42184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (44))){
var inst_38334 = (state_38347[(2)]);
var state_38347__$1 = (function (){var statearr_38500 = state_38347;
(statearr_38500[(26)] = inst_38334);

return statearr_38500;
})();
var statearr_38501_42187 = state_38347__$1;
(statearr_38501_42187[(2)] = null);

(statearr_38501_42187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (6))){
var inst_38222 = (state_38347[(27)]);
var inst_38221 = cljs.core.deref(cs);
var inst_38222__$1 = cljs.core.keys(inst_38221);
var inst_38224 = cljs.core.count(inst_38222__$1);
var inst_38225 = cljs.core.reset_BANG_(dctr,inst_38224);
var inst_38233 = cljs.core.seq(inst_38222__$1);
var inst_38234 = inst_38233;
var inst_38235 = null;
var inst_38236 = (0);
var inst_38237 = (0);
var state_38347__$1 = (function (){var statearr_38510 = state_38347;
(statearr_38510[(27)] = inst_38222__$1);

(statearr_38510[(28)] = inst_38225);

(statearr_38510[(19)] = inst_38236);

(statearr_38510[(10)] = inst_38235);

(statearr_38510[(11)] = inst_38237);

(statearr_38510[(20)] = inst_38234);

return statearr_38510;
})();
var statearr_38515_42191 = state_38347__$1;
(statearr_38515_42191[(2)] = null);

(statearr_38515_42191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (28))){
var inst_38234 = (state_38347[(20)]);
var inst_38278 = (state_38347[(23)]);
var inst_38278__$1 = cljs.core.seq(inst_38234);
var state_38347__$1 = (function (){var statearr_38516 = state_38347;
(statearr_38516[(23)] = inst_38278__$1);

return statearr_38516;
})();
if(inst_38278__$1){
var statearr_38520_42194 = state_38347__$1;
(statearr_38520_42194[(1)] = (33));

} else {
var statearr_38521_42195 = state_38347__$1;
(statearr_38521_42195[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (25))){
var inst_38236 = (state_38347[(19)]);
var inst_38237 = (state_38347[(11)]);
var inst_38244 = (inst_38237 < inst_38236);
var inst_38245 = inst_38244;
var state_38347__$1 = state_38347;
if(cljs.core.truth_(inst_38245)){
var statearr_38522_42196 = state_38347__$1;
(statearr_38522_42196[(1)] = (27));

} else {
var statearr_38523_42198 = state_38347__$1;
(statearr_38523_42198[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (34))){
var state_38347__$1 = state_38347;
var statearr_38524_42199 = state_38347__$1;
(statearr_38524_42199[(2)] = null);

(statearr_38524_42199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (17))){
var state_38347__$1 = state_38347;
var statearr_38526_42200 = state_38347__$1;
(statearr_38526_42200[(2)] = null);

(statearr_38526_42200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (3))){
var inst_38339 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38347__$1,inst_38339);
} else {
if((state_val_38348 === (12))){
var inst_38216 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38529_42201 = state_38347__$1;
(statearr_38529_42201[(2)] = inst_38216);

(statearr_38529_42201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (2))){
var state_38347__$1 = state_38347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38347__$1,(4),ch);
} else {
if((state_val_38348 === (23))){
var state_38347__$1 = state_38347;
var statearr_38530_42202 = state_38347__$1;
(statearr_38530_42202[(2)] = null);

(statearr_38530_42202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (35))){
var inst_38316 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38534_42203 = state_38347__$1;
(statearr_38534_42203[(2)] = inst_38316);

(statearr_38534_42203[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (19))){
var inst_38128 = (state_38347[(7)]);
var inst_38139 = cljs.core.chunk_first(inst_38128);
var inst_38141 = cljs.core.chunk_rest(inst_38128);
var inst_38142 = cljs.core.count(inst_38139);
var inst_38103 = inst_38141;
var inst_38104 = inst_38139;
var inst_38105 = inst_38142;
var inst_38106 = (0);
var state_38347__$1 = (function (){var statearr_38543 = state_38347;
(statearr_38543[(13)] = inst_38104);

(statearr_38543[(14)] = inst_38103);

(statearr_38543[(16)] = inst_38106);

(statearr_38543[(17)] = inst_38105);

return statearr_38543;
})();
var statearr_38545_42204 = state_38347__$1;
(statearr_38545_42204[(2)] = null);

(statearr_38545_42204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (11))){
var inst_38128 = (state_38347[(7)]);
var inst_38103 = (state_38347[(14)]);
var inst_38128__$1 = cljs.core.seq(inst_38103);
var state_38347__$1 = (function (){var statearr_38562 = state_38347;
(statearr_38562[(7)] = inst_38128__$1);

return statearr_38562;
})();
if(inst_38128__$1){
var statearr_38563_42205 = state_38347__$1;
(statearr_38563_42205[(1)] = (16));

} else {
var statearr_38565_42208 = state_38347__$1;
(statearr_38565_42208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (9))){
var inst_38218 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38569_42209 = state_38347__$1;
(statearr_38569_42209[(2)] = inst_38218);

(statearr_38569_42209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (5))){
var inst_38101 = cljs.core.deref(cs);
var inst_38102 = cljs.core.seq(inst_38101);
var inst_38103 = inst_38102;
var inst_38104 = null;
var inst_38105 = (0);
var inst_38106 = (0);
var state_38347__$1 = (function (){var statearr_38571 = state_38347;
(statearr_38571[(13)] = inst_38104);

(statearr_38571[(14)] = inst_38103);

(statearr_38571[(16)] = inst_38106);

(statearr_38571[(17)] = inst_38105);

return statearr_38571;
})();
var statearr_38573_42214 = state_38347__$1;
(statearr_38573_42214[(2)] = null);

(statearr_38573_42214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (14))){
var state_38347__$1 = state_38347;
var statearr_38574_42217 = state_38347__$1;
(statearr_38574_42217[(2)] = null);

(statearr_38574_42217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (45))){
var inst_38331 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38576_42218 = state_38347__$1;
(statearr_38576_42218[(2)] = inst_38331);

(statearr_38576_42218[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (26))){
var inst_38222 = (state_38347[(27)]);
var inst_38326 = (state_38347[(2)]);
var inst_38328 = cljs.core.seq(inst_38222);
var state_38347__$1 = (function (){var statearr_38585 = state_38347;
(statearr_38585[(29)] = inst_38326);

return statearr_38585;
})();
if(inst_38328){
var statearr_38586_42219 = state_38347__$1;
(statearr_38586_42219[(1)] = (42));

} else {
var statearr_38587_42220 = state_38347__$1;
(statearr_38587_42220[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (16))){
var inst_38128 = (state_38347[(7)]);
var inst_38133 = cljs.core.chunked_seq_QMARK_(inst_38128);
var state_38347__$1 = state_38347;
if(inst_38133){
var statearr_38593_42222 = state_38347__$1;
(statearr_38593_42222[(1)] = (19));

} else {
var statearr_38594_42223 = state_38347__$1;
(statearr_38594_42223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (38))){
var inst_38313 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38595_42225 = state_38347__$1;
(statearr_38595_42225[(2)] = inst_38313);

(statearr_38595_42225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (30))){
var state_38347__$1 = state_38347;
var statearr_38596_42226 = state_38347__$1;
(statearr_38596_42226[(2)] = null);

(statearr_38596_42226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (10))){
var inst_38104 = (state_38347[(13)]);
var inst_38106 = (state_38347[(16)]);
var inst_38115 = cljs.core._nth(inst_38104,inst_38106);
var inst_38116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38115,(0),null);
var inst_38118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38115,(1),null);
var state_38347__$1 = (function (){var statearr_38600 = state_38347;
(statearr_38600[(24)] = inst_38116);

return statearr_38600;
})();
if(cljs.core.truth_(inst_38118)){
var statearr_38603_42228 = state_38347__$1;
(statearr_38603_42228[(1)] = (13));

} else {
var statearr_38605_42229 = state_38347__$1;
(statearr_38605_42229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (18))){
var inst_38214 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38607_42230 = state_38347__$1;
(statearr_38607_42230[(2)] = inst_38214);

(statearr_38607_42230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (42))){
var state_38347__$1 = state_38347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38347__$1,(45),dchan);
} else {
if((state_val_38348 === (37))){
var inst_38093 = (state_38347[(9)]);
var inst_38295 = (state_38347[(22)]);
var inst_38278 = (state_38347[(23)]);
var inst_38295__$1 = cljs.core.first(inst_38278);
var inst_38296 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38295__$1,inst_38093,done);
var state_38347__$1 = (function (){var statearr_38618 = state_38347;
(statearr_38618[(22)] = inst_38295__$1);

return statearr_38618;
})();
if(cljs.core.truth_(inst_38296)){
var statearr_38621_42233 = state_38347__$1;
(statearr_38621_42233[(1)] = (39));

} else {
var statearr_38624_42234 = state_38347__$1;
(statearr_38624_42234[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (8))){
var inst_38106 = (state_38347[(16)]);
var inst_38105 = (state_38347[(17)]);
var inst_38108 = (inst_38106 < inst_38105);
var inst_38109 = inst_38108;
var state_38347__$1 = state_38347;
if(cljs.core.truth_(inst_38109)){
var statearr_38626_42235 = state_38347__$1;
(statearr_38626_42235[(1)] = (10));

} else {
var statearr_38628_42236 = state_38347__$1;
(statearr_38628_42236[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34752__auto__ = null;
var cljs$core$async$mult_$_state_machine__34752__auto____0 = (function (){
var statearr_38632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38632[(0)] = cljs$core$async$mult_$_state_machine__34752__auto__);

(statearr_38632[(1)] = (1));

return statearr_38632;
});
var cljs$core$async$mult_$_state_machine__34752__auto____1 = (function (state_38347){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_38347);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e38633){var ex__34755__auto__ = e38633;
var statearr_38634_42238 = state_38347;
(statearr_38634_42238[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_38347[(4)]))){
var statearr_38636_42239 = state_38347;
(statearr_38636_42239[(1)] = cljs.core.first((state_38347[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42240 = state_38347;
state_38347 = G__42240;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34752__auto__ = function(state_38347){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34752__auto____1.call(this,state_38347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34752__auto____0;
cljs$core$async$mult_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34752__auto____1;
return cljs$core$async$mult_$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_38641 = f__36225__auto__();
(statearr_38641[(6)] = c__36224__auto___42136);

return statearr_38641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38658 = arguments.length;
switch (G__38658) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42247 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42247(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42249 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42249(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42250 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42250(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42252 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42252(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42254 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42254(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42259 = arguments.length;
var i__5727__auto___42260 = (0);
while(true){
if((i__5727__auto___42260 < len__5726__auto___42259)){
args__5732__auto__.push((arguments[i__5727__auto___42260]));

var G__42262 = (i__5727__auto___42260 + (1));
i__5727__auto___42260 = G__42262;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38759){
var map__38772 = p__38759;
var map__38772__$1 = cljs.core.__destructure_map(map__38772);
var opts = map__38772__$1;
var statearr_38783_42264 = state;
(statearr_38783_42264[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38791_42266 = state;
(statearr_38791_42266[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_38795_42268 = state;
(statearr_38795_42268[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38747){
var G__38748 = cljs.core.first(seq38747);
var seq38747__$1 = cljs.core.next(seq38747);
var G__38749 = cljs.core.first(seq38747__$1);
var seq38747__$2 = cljs.core.next(seq38747__$1);
var G__38750 = cljs.core.first(seq38747__$2);
var seq38747__$3 = cljs.core.next(seq38747__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38748,G__38749,G__38750,seq38747__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38832 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38833){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38833 = meta38833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38834,meta38833__$1){
var self__ = this;
var _38834__$1 = this;
return (new cljs.core.async.t_cljs$core$async38832(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38833__$1));
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38834){
var self__ = this;
var _38834__$1 = this;
return self__.meta38833;
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38832.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38833","meta38833",-1993102894,null)], null);
}));

(cljs.core.async.t_cljs$core$async38832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38832");

(cljs.core.async.t_cljs$core$async38832.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async38832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38832.
 */
cljs.core.async.__GT_t_cljs$core$async38832 = (function cljs$core$async$__GT_t_cljs$core$async38832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38833){
return (new cljs.core.async.t_cljs$core$async38832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38833));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__36224__auto___42288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_38974){
var state_val_38975 = (state_38974[(1)]);
if((state_val_38975 === (7))){
var inst_38917 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
if(cljs.core.truth_(inst_38917)){
var statearr_38978_42289 = state_38974__$1;
(statearr_38978_42289[(1)] = (8));

} else {
var statearr_38979_42290 = state_38974__$1;
(statearr_38979_42290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (20))){
var inst_38907 = (state_38974[(7)]);
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38974__$1,(23),out,inst_38907);
} else {
if((state_val_38975 === (1))){
var inst_38877 = calc_state();
var inst_38884 = cljs.core.__destructure_map(inst_38877);
var inst_38885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38884,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38884,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38884,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38889 = inst_38877;
var state_38974__$1 = (function (){var statearr_38995 = state_38974;
(statearr_38995[(8)] = inst_38888);

(statearr_38995[(9)] = inst_38889);

(statearr_38995[(10)] = inst_38885);

(statearr_38995[(11)] = inst_38887);

return statearr_38995;
})();
var statearr_38997_42293 = state_38974__$1;
(statearr_38997_42293[(2)] = null);

(statearr_38997_42293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (24))){
var inst_38892 = (state_38974[(12)]);
var inst_38889 = inst_38892;
var state_38974__$1 = (function (){var statearr_39009 = state_38974;
(statearr_39009[(9)] = inst_38889);

return statearr_39009;
})();
var statearr_39010_42294 = state_38974__$1;
(statearr_39010_42294[(2)] = null);

(statearr_39010_42294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (4))){
var inst_38911 = (state_38974[(13)]);
var inst_38907 = (state_38974[(7)]);
var inst_38906 = (state_38974[(2)]);
var inst_38907__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38906,(0),null);
var inst_38908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38906,(1),null);
var inst_38911__$1 = (inst_38907__$1 == null);
var state_38974__$1 = (function (){var statearr_39014 = state_38974;
(statearr_39014[(13)] = inst_38911__$1);

(statearr_39014[(14)] = inst_38908);

(statearr_39014[(7)] = inst_38907__$1);

return statearr_39014;
})();
if(cljs.core.truth_(inst_38911__$1)){
var statearr_39015_42296 = state_38974__$1;
(statearr_39015_42296[(1)] = (5));

} else {
var statearr_39017_42297 = state_38974__$1;
(statearr_39017_42297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (15))){
var inst_38934 = (state_38974[(15)]);
var inst_38893 = (state_38974[(16)]);
var inst_38934__$1 = cljs.core.empty_QMARK_(inst_38893);
var state_38974__$1 = (function (){var statearr_39022 = state_38974;
(statearr_39022[(15)] = inst_38934__$1);

return statearr_39022;
})();
if(inst_38934__$1){
var statearr_39026_42298 = state_38974__$1;
(statearr_39026_42298[(1)] = (17));

} else {
var statearr_39027_42299 = state_38974__$1;
(statearr_39027_42299[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (21))){
var inst_38892 = (state_38974[(12)]);
var inst_38889 = inst_38892;
var state_38974__$1 = (function (){var statearr_39034 = state_38974;
(statearr_39034[(9)] = inst_38889);

return statearr_39034;
})();
var statearr_39035_42301 = state_38974__$1;
(statearr_39035_42301[(2)] = null);

(statearr_39035_42301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (13))){
var inst_38924 = (state_38974[(2)]);
var inst_38925 = calc_state();
var inst_38889 = inst_38925;
var state_38974__$1 = (function (){var statearr_39040 = state_38974;
(statearr_39040[(9)] = inst_38889);

(statearr_39040[(17)] = inst_38924);

return statearr_39040;
})();
var statearr_39042_42303 = state_38974__$1;
(statearr_39042_42303[(2)] = null);

(statearr_39042_42303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (22))){
var inst_38954 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_39045_42304 = state_38974__$1;
(statearr_39045_42304[(2)] = inst_38954);

(statearr_39045_42304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (6))){
var inst_38908 = (state_38974[(14)]);
var inst_38915 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38908,change);
var state_38974__$1 = state_38974;
var statearr_39046_42308 = state_38974__$1;
(statearr_39046_42308[(2)] = inst_38915);

(statearr_39046_42308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (25))){
var state_38974__$1 = state_38974;
var statearr_39054_42309 = state_38974__$1;
(statearr_39054_42309[(2)] = null);

(statearr_39054_42309[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (17))){
var inst_38908 = (state_38974[(14)]);
var inst_38894 = (state_38974[(18)]);
var inst_38936 = (inst_38894.cljs$core$IFn$_invoke$arity$1 ? inst_38894.cljs$core$IFn$_invoke$arity$1(inst_38908) : inst_38894.call(null, inst_38908));
var inst_38937 = cljs.core.not(inst_38936);
var state_38974__$1 = state_38974;
var statearr_39057_42318 = state_38974__$1;
(statearr_39057_42318[(2)] = inst_38937);

(statearr_39057_42318[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (3))){
var inst_38960 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38974__$1,inst_38960);
} else {
if((state_val_38975 === (12))){
var state_38974__$1 = state_38974;
var statearr_39077_42321 = state_38974__$1;
(statearr_39077_42321[(2)] = null);

(statearr_39077_42321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (2))){
var inst_38892 = (state_38974[(12)]);
var inst_38889 = (state_38974[(9)]);
var inst_38892__$1 = cljs.core.__destructure_map(inst_38889);
var inst_38893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38974__$1 = (function (){var statearr_39089 = state_38974;
(statearr_39089[(12)] = inst_38892__$1);

(statearr_39089[(18)] = inst_38894);

(statearr_39089[(16)] = inst_38893);

return statearr_39089;
})();
return cljs.core.async.ioc_alts_BANG_(state_38974__$1,(4),inst_38901);
} else {
if((state_val_38975 === (23))){
var inst_38945 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
if(cljs.core.truth_(inst_38945)){
var statearr_39098_42332 = state_38974__$1;
(statearr_39098_42332[(1)] = (24));

} else {
var statearr_39102_42333 = state_38974__$1;
(statearr_39102_42333[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (19))){
var inst_38940 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_39108_42334 = state_38974__$1;
(statearr_39108_42334[(2)] = inst_38940);

(statearr_39108_42334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (11))){
var inst_38908 = (state_38974[(14)]);
var inst_38921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38908);
var state_38974__$1 = state_38974;
var statearr_39113_42342 = state_38974__$1;
(statearr_39113_42342[(2)] = inst_38921);

(statearr_39113_42342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (9))){
var inst_38930 = (state_38974[(19)]);
var inst_38908 = (state_38974[(14)]);
var inst_38893 = (state_38974[(16)]);
var inst_38930__$1 = (inst_38893.cljs$core$IFn$_invoke$arity$1 ? inst_38893.cljs$core$IFn$_invoke$arity$1(inst_38908) : inst_38893.call(null, inst_38908));
var state_38974__$1 = (function (){var statearr_39118 = state_38974;
(statearr_39118[(19)] = inst_38930__$1);

return statearr_39118;
})();
if(cljs.core.truth_(inst_38930__$1)){
var statearr_39121_42350 = state_38974__$1;
(statearr_39121_42350[(1)] = (14));

} else {
var statearr_39123_42351 = state_38974__$1;
(statearr_39123_42351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (5))){
var inst_38911 = (state_38974[(13)]);
var state_38974__$1 = state_38974;
var statearr_39130_42353 = state_38974__$1;
(statearr_39130_42353[(2)] = inst_38911);

(statearr_39130_42353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (14))){
var inst_38930 = (state_38974[(19)]);
var state_38974__$1 = state_38974;
var statearr_39131_42358 = state_38974__$1;
(statearr_39131_42358[(2)] = inst_38930);

(statearr_39131_42358[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (26))){
var inst_38950 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_39133_42362 = state_38974__$1;
(statearr_39133_42362[(2)] = inst_38950);

(statearr_39133_42362[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (16))){
var inst_38942 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
if(cljs.core.truth_(inst_38942)){
var statearr_39143_42363 = state_38974__$1;
(statearr_39143_42363[(1)] = (20));

} else {
var statearr_39145_42364 = state_38974__$1;
(statearr_39145_42364[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (10))){
var inst_38956 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_39148_42368 = state_38974__$1;
(statearr_39148_42368[(2)] = inst_38956);

(statearr_39148_42368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (18))){
var inst_38934 = (state_38974[(15)]);
var state_38974__$1 = state_38974;
var statearr_39150_42371 = state_38974__$1;
(statearr_39150_42371[(2)] = inst_38934);

(statearr_39150_42371[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (8))){
var inst_38907 = (state_38974[(7)]);
var inst_38919 = (inst_38907 == null);
var state_38974__$1 = state_38974;
if(cljs.core.truth_(inst_38919)){
var statearr_39152_42377 = state_38974__$1;
(statearr_39152_42377[(1)] = (11));

} else {
var statearr_39155_42380 = state_38974__$1;
(statearr_39155_42380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34752__auto__ = null;
var cljs$core$async$mix_$_state_machine__34752__auto____0 = (function (){
var statearr_39166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39166[(0)] = cljs$core$async$mix_$_state_machine__34752__auto__);

(statearr_39166[(1)] = (1));

return statearr_39166;
});
var cljs$core$async$mix_$_state_machine__34752__auto____1 = (function (state_38974){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_38974);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e39172){var ex__34755__auto__ = e39172;
var statearr_39176_42393 = state_38974;
(statearr_39176_42393[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_38974[(4)]))){
var statearr_39178_42394 = state_38974;
(statearr_39178_42394[(1)] = cljs.core.first((state_38974[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42399 = state_38974;
state_38974 = G__42399;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34752__auto__ = function(state_38974){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34752__auto____1.call(this,state_38974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34752__auto____0;
cljs$core$async$mix_$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34752__auto____1;
return cljs$core$async$mix_$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_39181 = f__36225__auto__();
(statearr_39181[(6)] = c__36224__auto___42288);

return statearr_39181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42415 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42415(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42421 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42421(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42423 = (function() {
var G__42424 = null;
var G__42424__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42424__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42424 = function(p,v){
switch(arguments.length){
case 1:
return G__42424__1.call(this,p);
case 2:
return G__42424__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42424.cljs$core$IFn$_invoke$arity$1 = G__42424__1;
G__42424.cljs$core$IFn$_invoke$arity$2 = G__42424__2;
return G__42424;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39284 = arguments.length;
switch (G__39284) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42423(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42423(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39311 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39312){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39312 = meta39312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39313,meta39312__$1){
var self__ = this;
var _39313__$1 = this;
return (new cljs.core.async.t_cljs$core$async39311(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39312__$1));
}));

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39313){
var self__ = this;
var _39313__$1 = this;
return self__.meta39312;
}));

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39312","meta39312",-343866312,null)], null);
}));

(cljs.core.async.t_cljs$core$async39311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39311");

(cljs.core.async.t_cljs$core$async39311.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39311.
 */
cljs.core.async.__GT_t_cljs$core$async39311 = (function cljs$core$async$__GT_t_cljs$core$async39311(ch,topic_fn,buf_fn,mults,ensure_mult,meta39312){
return (new cljs.core.async.t_cljs$core$async39311(ch,topic_fn,buf_fn,mults,ensure_mult,meta39312));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39299 = arguments.length;
switch (G__39299) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39294_SHARP_){
if(cljs.core.truth_((p1__39294_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39294_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39294_SHARP_.call(null, topic)))){
return p1__39294_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39294_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async39311(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__36224__auto___42436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_39493){
var state_val_39494 = (state_39493[(1)]);
if((state_val_39494 === (7))){
var inst_39488 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39503_42437 = state_39493__$1;
(statearr_39503_42437[(2)] = inst_39488);

(statearr_39503_42437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (20))){
var state_39493__$1 = state_39493;
var statearr_39504_42438 = state_39493__$1;
(statearr_39504_42438[(2)] = null);

(statearr_39504_42438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (1))){
var state_39493__$1 = state_39493;
var statearr_39508_42439 = state_39493__$1;
(statearr_39508_42439[(2)] = null);

(statearr_39508_42439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (24))){
var inst_39468 = (state_39493[(7)]);
var inst_39477 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39468);
var state_39493__$1 = state_39493;
var statearr_39512_42442 = state_39493__$1;
(statearr_39512_42442[(2)] = inst_39477);

(statearr_39512_42442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (4))){
var inst_39374 = (state_39493[(8)]);
var inst_39374__$1 = (state_39493[(2)]);
var inst_39377 = (inst_39374__$1 == null);
var state_39493__$1 = (function (){var statearr_39515 = state_39493;
(statearr_39515[(8)] = inst_39374__$1);

return statearr_39515;
})();
if(cljs.core.truth_(inst_39377)){
var statearr_39516_42443 = state_39493__$1;
(statearr_39516_42443[(1)] = (5));

} else {
var statearr_39517_42444 = state_39493__$1;
(statearr_39517_42444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (15))){
var inst_39462 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39521_42445 = state_39493__$1;
(statearr_39521_42445[(2)] = inst_39462);

(statearr_39521_42445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (21))){
var inst_39483 = (state_39493[(2)]);
var state_39493__$1 = (function (){var statearr_39523 = state_39493;
(statearr_39523[(9)] = inst_39483);

return statearr_39523;
})();
var statearr_39524_42446 = state_39493__$1;
(statearr_39524_42446[(2)] = null);

(statearr_39524_42446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (13))){
var inst_39419 = (state_39493[(10)]);
var inst_39426 = cljs.core.chunked_seq_QMARK_(inst_39419);
var state_39493__$1 = state_39493;
if(inst_39426){
var statearr_39525_42447 = state_39493__$1;
(statearr_39525_42447[(1)] = (16));

} else {
var statearr_39526_42448 = state_39493__$1;
(statearr_39526_42448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (22))){
var inst_39474 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
if(cljs.core.truth_(inst_39474)){
var statearr_39527_42449 = state_39493__$1;
(statearr_39527_42449[(1)] = (23));

} else {
var statearr_39528_42450 = state_39493__$1;
(statearr_39528_42450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (6))){
var inst_39374 = (state_39493[(8)]);
var inst_39470 = (state_39493[(11)]);
var inst_39468 = (state_39493[(7)]);
var inst_39468__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39374) : topic_fn.call(null, inst_39374));
var inst_39469 = cljs.core.deref(mults);
var inst_39470__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39469,inst_39468__$1);
var state_39493__$1 = (function (){var statearr_39531 = state_39493;
(statearr_39531[(11)] = inst_39470__$1);

(statearr_39531[(7)] = inst_39468__$1);

return statearr_39531;
})();
if(cljs.core.truth_(inst_39470__$1)){
var statearr_39534_42451 = state_39493__$1;
(statearr_39534_42451[(1)] = (19));

} else {
var statearr_39535_42452 = state_39493__$1;
(statearr_39535_42452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (25))){
var inst_39479 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39536_42453 = state_39493__$1;
(statearr_39536_42453[(2)] = inst_39479);

(statearr_39536_42453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (17))){
var inst_39419 = (state_39493[(10)]);
var inst_39453 = cljs.core.first(inst_39419);
var inst_39454 = cljs.core.async.muxch_STAR_(inst_39453);
var inst_39455 = cljs.core.async.close_BANG_(inst_39454);
var inst_39456 = cljs.core.next(inst_39419);
var inst_39394 = inst_39456;
var inst_39395 = null;
var inst_39396 = (0);
var inst_39397 = (0);
var state_39493__$1 = (function (){var statearr_39542 = state_39493;
(statearr_39542[(12)] = inst_39396);

(statearr_39542[(13)] = inst_39455);

(statearr_39542[(14)] = inst_39394);

(statearr_39542[(15)] = inst_39395);

(statearr_39542[(16)] = inst_39397);

return statearr_39542;
})();
var statearr_39543_42462 = state_39493__$1;
(statearr_39543_42462[(2)] = null);

(statearr_39543_42462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (3))){
var inst_39490 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39493__$1,inst_39490);
} else {
if((state_val_39494 === (12))){
var inst_39464 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39546_42465 = state_39493__$1;
(statearr_39546_42465[(2)] = inst_39464);

(statearr_39546_42465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (2))){
var state_39493__$1 = state_39493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39493__$1,(4),ch);
} else {
if((state_val_39494 === (23))){
var state_39493__$1 = state_39493;
var statearr_39550_42466 = state_39493__$1;
(statearr_39550_42466[(2)] = null);

(statearr_39550_42466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (19))){
var inst_39374 = (state_39493[(8)]);
var inst_39470 = (state_39493[(11)]);
var inst_39472 = cljs.core.async.muxch_STAR_(inst_39470);
var state_39493__$1 = state_39493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39493__$1,(22),inst_39472,inst_39374);
} else {
if((state_val_39494 === (11))){
var inst_39419 = (state_39493[(10)]);
var inst_39394 = (state_39493[(14)]);
var inst_39419__$1 = cljs.core.seq(inst_39394);
var state_39493__$1 = (function (){var statearr_39552 = state_39493;
(statearr_39552[(10)] = inst_39419__$1);

return statearr_39552;
})();
if(inst_39419__$1){
var statearr_39553_42468 = state_39493__$1;
(statearr_39553_42468[(1)] = (13));

} else {
var statearr_39554_42469 = state_39493__$1;
(statearr_39554_42469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (9))){
var inst_39466 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39555_42470 = state_39493__$1;
(statearr_39555_42470[(2)] = inst_39466);

(statearr_39555_42470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (5))){
var inst_39387 = cljs.core.deref(mults);
var inst_39391 = cljs.core.vals(inst_39387);
var inst_39392 = cljs.core.seq(inst_39391);
var inst_39394 = inst_39392;
var inst_39395 = null;
var inst_39396 = (0);
var inst_39397 = (0);
var state_39493__$1 = (function (){var statearr_39556 = state_39493;
(statearr_39556[(12)] = inst_39396);

(statearr_39556[(14)] = inst_39394);

(statearr_39556[(15)] = inst_39395);

(statearr_39556[(16)] = inst_39397);

return statearr_39556;
})();
var statearr_39559_42475 = state_39493__$1;
(statearr_39559_42475[(2)] = null);

(statearr_39559_42475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (14))){
var state_39493__$1 = state_39493;
var statearr_39563_42480 = state_39493__$1;
(statearr_39563_42480[(2)] = null);

(statearr_39563_42480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (16))){
var inst_39419 = (state_39493[(10)]);
var inst_39431 = cljs.core.chunk_first(inst_39419);
var inst_39432 = cljs.core.chunk_rest(inst_39419);
var inst_39433 = cljs.core.count(inst_39431);
var inst_39394 = inst_39432;
var inst_39395 = inst_39431;
var inst_39396 = inst_39433;
var inst_39397 = (0);
var state_39493__$1 = (function (){var statearr_39572 = state_39493;
(statearr_39572[(12)] = inst_39396);

(statearr_39572[(14)] = inst_39394);

(statearr_39572[(15)] = inst_39395);

(statearr_39572[(16)] = inst_39397);

return statearr_39572;
})();
var statearr_39576_42502 = state_39493__$1;
(statearr_39576_42502[(2)] = null);

(statearr_39576_42502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (10))){
var inst_39396 = (state_39493[(12)]);
var inst_39394 = (state_39493[(14)]);
var inst_39395 = (state_39493[(15)]);
var inst_39397 = (state_39493[(16)]);
var inst_39405 = cljs.core._nth(inst_39395,inst_39397);
var inst_39407 = cljs.core.async.muxch_STAR_(inst_39405);
var inst_39408 = cljs.core.async.close_BANG_(inst_39407);
var inst_39412 = (inst_39397 + (1));
var tmp39560 = inst_39396;
var tmp39561 = inst_39394;
var tmp39562 = inst_39395;
var inst_39394__$1 = tmp39561;
var inst_39395__$1 = tmp39562;
var inst_39396__$1 = tmp39560;
var inst_39397__$1 = inst_39412;
var state_39493__$1 = (function (){var statearr_39585 = state_39493;
(statearr_39585[(12)] = inst_39396__$1);

(statearr_39585[(14)] = inst_39394__$1);

(statearr_39585[(15)] = inst_39395__$1);

(statearr_39585[(16)] = inst_39397__$1);

(statearr_39585[(17)] = inst_39408);

return statearr_39585;
})();
var statearr_39587_42504 = state_39493__$1;
(statearr_39587_42504[(2)] = null);

(statearr_39587_42504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (18))){
var inst_39459 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39589_42505 = state_39493__$1;
(statearr_39589_42505[(2)] = inst_39459);

(statearr_39589_42505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (8))){
var inst_39396 = (state_39493[(12)]);
var inst_39397 = (state_39493[(16)]);
var inst_39401 = (inst_39397 < inst_39396);
var inst_39402 = inst_39401;
var state_39493__$1 = state_39493;
if(cljs.core.truth_(inst_39402)){
var statearr_39590_42506 = state_39493__$1;
(statearr_39590_42506[(1)] = (10));

} else {
var statearr_39591_42507 = state_39493__$1;
(statearr_39591_42507[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_39593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39593[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_39593[(1)] = (1));

return statearr_39593;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_39493){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_39493);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e39594){var ex__34755__auto__ = e39594;
var statearr_39595_42515 = state_39493;
(statearr_39595_42515[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_39493[(4)]))){
var statearr_39596_42516 = state_39493;
(statearr_39596_42516[(1)] = cljs.core.first((state_39493[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42517 = state_39493;
state_39493 = G__42517;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_39493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_39493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_39599 = f__36225__auto__();
(statearr_39599[(6)] = c__36224__auto___42436);

return statearr_39599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39606 = arguments.length;
switch (G__39606) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39620 = arguments.length;
switch (G__39620) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39644 = arguments.length;
switch (G__39644) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__36224__auto___42534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_39814){
var state_val_39815 = (state_39814[(1)]);
if((state_val_39815 === (7))){
var state_39814__$1 = state_39814;
var statearr_39825_42537 = state_39814__$1;
(statearr_39825_42537[(2)] = null);

(statearr_39825_42537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (1))){
var state_39814__$1 = state_39814;
var statearr_39829_42538 = state_39814__$1;
(statearr_39829_42538[(2)] = null);

(statearr_39829_42538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (4))){
var inst_39720 = (state_39814[(7)]);
var inst_39719 = (state_39814[(8)]);
var inst_39726 = (inst_39720 < inst_39719);
var state_39814__$1 = state_39814;
if(cljs.core.truth_(inst_39726)){
var statearr_39837_42540 = state_39814__$1;
(statearr_39837_42540[(1)] = (6));

} else {
var statearr_39838_42541 = state_39814__$1;
(statearr_39838_42541[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (15))){
var inst_39790 = (state_39814[(9)]);
var inst_39797 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39790);
var state_39814__$1 = state_39814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39814__$1,(17),out,inst_39797);
} else {
if((state_val_39815 === (13))){
var inst_39790 = (state_39814[(9)]);
var inst_39790__$1 = (state_39814[(2)]);
var inst_39793 = cljs.core.some(cljs.core.nil_QMARK_,inst_39790__$1);
var state_39814__$1 = (function (){var statearr_39840 = state_39814;
(statearr_39840[(9)] = inst_39790__$1);

return statearr_39840;
})();
if(cljs.core.truth_(inst_39793)){
var statearr_39845_42542 = state_39814__$1;
(statearr_39845_42542[(1)] = (14));

} else {
var statearr_39849_42543 = state_39814__$1;
(statearr_39849_42543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (6))){
var state_39814__$1 = state_39814;
var statearr_39851_42544 = state_39814__$1;
(statearr_39851_42544[(2)] = null);

(statearr_39851_42544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (17))){
var inst_39799 = (state_39814[(2)]);
var state_39814__$1 = (function (){var statearr_39864 = state_39814;
(statearr_39864[(10)] = inst_39799);

return statearr_39864;
})();
var statearr_39865_42545 = state_39814__$1;
(statearr_39865_42545[(2)] = null);

(statearr_39865_42545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (3))){
var inst_39804 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39814__$1,inst_39804);
} else {
if((state_val_39815 === (12))){
var _ = (function (){var statearr_39873 = state_39814;
(statearr_39873[(4)] = cljs.core.rest((state_39814[(4)])));

return statearr_39873;
})();
var state_39814__$1 = state_39814;
var ex39858 = (state_39814__$1[(2)]);
var statearr_39877_42546 = state_39814__$1;
(statearr_39877_42546[(5)] = ex39858);


if((ex39858 instanceof Object)){
var statearr_39881_42548 = state_39814__$1;
(statearr_39881_42548[(1)] = (11));

(statearr_39881_42548[(5)] = null);

} else {
throw ex39858;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (2))){
var inst_39711 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39719 = cnt;
var inst_39720 = (0);
var state_39814__$1 = (function (){var statearr_39888 = state_39814;
(statearr_39888[(11)] = inst_39711);

(statearr_39888[(7)] = inst_39720);

(statearr_39888[(8)] = inst_39719);

return statearr_39888;
})();
var statearr_39889_42549 = state_39814__$1;
(statearr_39889_42549[(2)] = null);

(statearr_39889_42549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (11))){
var inst_39760 = (state_39814[(2)]);
var inst_39764 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39814__$1 = (function (){var statearr_39890 = state_39814;
(statearr_39890[(12)] = inst_39760);

return statearr_39890;
})();
var statearr_39892_42550 = state_39814__$1;
(statearr_39892_42550[(2)] = inst_39764);

(statearr_39892_42550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (9))){
var inst_39720 = (state_39814[(7)]);
var _ = (function (){var statearr_39893 = state_39814;
(statearr_39893[(4)] = cljs.core.cons((12),(state_39814[(4)])));

return statearr_39893;
})();
var inst_39773 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39720) : chs__$1.call(null, inst_39720));
var inst_39774 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39720) : done.call(null, inst_39720));
var inst_39775 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39773,inst_39774);
var ___$1 = (function (){var statearr_39894 = state_39814;
(statearr_39894[(4)] = cljs.core.rest((state_39814[(4)])));

return statearr_39894;
})();
var state_39814__$1 = state_39814;
var statearr_39895_42553 = state_39814__$1;
(statearr_39895_42553[(2)] = inst_39775);

(statearr_39895_42553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (5))){
var inst_39787 = (state_39814[(2)]);
var state_39814__$1 = (function (){var statearr_39896 = state_39814;
(statearr_39896[(13)] = inst_39787);

return statearr_39896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39814__$1,(13),dchan);
} else {
if((state_val_39815 === (14))){
var inst_39795 = cljs.core.async.close_BANG_(out);
var state_39814__$1 = state_39814;
var statearr_39897_42557 = state_39814__$1;
(statearr_39897_42557[(2)] = inst_39795);

(statearr_39897_42557[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (16))){
var inst_39802 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
var statearr_39900_42559 = state_39814__$1;
(statearr_39900_42559[(2)] = inst_39802);

(statearr_39900_42559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (10))){
var inst_39720 = (state_39814[(7)]);
var inst_39778 = (state_39814[(2)]);
var inst_39781 = (inst_39720 + (1));
var inst_39720__$1 = inst_39781;
var state_39814__$1 = (function (){var statearr_39901 = state_39814;
(statearr_39901[(14)] = inst_39778);

(statearr_39901[(7)] = inst_39720__$1);

return statearr_39901;
})();
var statearr_39902_42562 = state_39814__$1;
(statearr_39902_42562[(2)] = null);

(statearr_39902_42562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (8))){
var inst_39785 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
var statearr_39903_42565 = state_39814__$1;
(statearr_39903_42565[(2)] = inst_39785);

(statearr_39903_42565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_39908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39908[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_39908[(1)] = (1));

return statearr_39908;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_39814){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_39814);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e39909){var ex__34755__auto__ = e39909;
var statearr_39910_42572 = state_39814;
(statearr_39910_42572[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_39814[(4)]))){
var statearr_39912_42573 = state_39814;
(statearr_39912_42573[(1)] = cljs.core.first((state_39814[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42575 = state_39814;
state_39814 = G__42575;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_39814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_39814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_39919 = f__36225__auto__();
(statearr_39919[(6)] = c__36224__auto___42534);

return statearr_39919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39925 = arguments.length;
switch (G__39925) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36224__auto___42583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_39989){
var state_val_39990 = (state_39989[(1)]);
if((state_val_39990 === (7))){
var inst_39950 = (state_39989[(7)]);
var inst_39953 = (state_39989[(8)]);
var inst_39950__$1 = (state_39989[(2)]);
var inst_39953__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39950__$1,(0),null);
var inst_39954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39950__$1,(1),null);
var inst_39964 = (inst_39953__$1 == null);
var state_39989__$1 = (function (){var statearr_40002 = state_39989;
(statearr_40002[(7)] = inst_39950__$1);

(statearr_40002[(8)] = inst_39953__$1);

(statearr_40002[(9)] = inst_39954);

return statearr_40002;
})();
if(cljs.core.truth_(inst_39964)){
var statearr_40005_42584 = state_39989__$1;
(statearr_40005_42584[(1)] = (8));

} else {
var statearr_40006_42585 = state_39989__$1;
(statearr_40006_42585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (1))){
var inst_39928 = cljs.core.vec(chs);
var inst_39930 = inst_39928;
var state_39989__$1 = (function (){var statearr_40008 = state_39989;
(statearr_40008[(10)] = inst_39930);

return statearr_40008;
})();
var statearr_40010_42586 = state_39989__$1;
(statearr_40010_42586[(2)] = null);

(statearr_40010_42586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (4))){
var inst_39930 = (state_39989[(10)]);
var state_39989__$1 = state_39989;
return cljs.core.async.ioc_alts_BANG_(state_39989__$1,(7),inst_39930);
} else {
if((state_val_39990 === (6))){
var inst_39984 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40021_42587 = state_39989__$1;
(statearr_40021_42587[(2)] = inst_39984);

(statearr_40021_42587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (3))){
var inst_39986 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39989__$1,inst_39986);
} else {
if((state_val_39990 === (2))){
var inst_39930 = (state_39989[(10)]);
var inst_39942 = cljs.core.count(inst_39930);
var inst_39943 = (inst_39942 > (0));
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39943)){
var statearr_40027_42590 = state_39989__$1;
(statearr_40027_42590[(1)] = (4));

} else {
var statearr_40028_42591 = state_39989__$1;
(statearr_40028_42591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (11))){
var inst_39930 = (state_39989[(10)]);
var inst_39977 = (state_39989[(2)]);
var tmp40022 = inst_39930;
var inst_39930__$1 = tmp40022;
var state_39989__$1 = (function (){var statearr_40029 = state_39989;
(statearr_40029[(10)] = inst_39930__$1);

(statearr_40029[(11)] = inst_39977);

return statearr_40029;
})();
var statearr_40030_42599 = state_39989__$1;
(statearr_40030_42599[(2)] = null);

(statearr_40030_42599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (9))){
var inst_39953 = (state_39989[(8)]);
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39989__$1,(11),out,inst_39953);
} else {
if((state_val_39990 === (5))){
var inst_39982 = cljs.core.async.close_BANG_(out);
var state_39989__$1 = state_39989;
var statearr_40054_42603 = state_39989__$1;
(statearr_40054_42603[(2)] = inst_39982);

(statearr_40054_42603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (10))){
var inst_39980 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40056_42605 = state_39989__$1;
(statearr_40056_42605[(2)] = inst_39980);

(statearr_40056_42605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (8))){
var inst_39930 = (state_39989[(10)]);
var inst_39950 = (state_39989[(7)]);
var inst_39953 = (state_39989[(8)]);
var inst_39954 = (state_39989[(9)]);
var inst_39972 = (function (){var cs = inst_39930;
var vec__39946 = inst_39950;
var v = inst_39953;
var c = inst_39954;
return (function (p1__39921_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39921_SHARP_);
});
})();
var inst_39973 = cljs.core.filterv(inst_39972,inst_39930);
var inst_39930__$1 = inst_39973;
var state_39989__$1 = (function (){var statearr_40065 = state_39989;
(statearr_40065[(10)] = inst_39930__$1);

return statearr_40065;
})();
var statearr_40073_42611 = state_39989__$1;
(statearr_40073_42611[(2)] = null);

(statearr_40073_42611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_40091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40091[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_40091[(1)] = (1));

return statearr_40091;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_39989){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_39989);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e40101){var ex__34755__auto__ = e40101;
var statearr_40108_42612 = state_39989;
(statearr_40108_42612[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_39989[(4)]))){
var statearr_40118_42613 = state_39989;
(statearr_40118_42613[(1)] = cljs.core.first((state_39989[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42614 = state_39989;
state_39989 = G__42614;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_39989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_39989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_40127 = f__36225__auto__();
(statearr_40127[(6)] = c__36224__auto___42583);

return statearr_40127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40144 = arguments.length;
switch (G__40144) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36224__auto___42624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_40189){
var state_val_40190 = (state_40189[(1)]);
if((state_val_40190 === (7))){
var inst_40157 = (state_40189[(7)]);
var inst_40157__$1 = (state_40189[(2)]);
var inst_40158 = (inst_40157__$1 == null);
var inst_40159 = cljs.core.not(inst_40158);
var state_40189__$1 = (function (){var statearr_40214 = state_40189;
(statearr_40214[(7)] = inst_40157__$1);

return statearr_40214;
})();
if(inst_40159){
var statearr_40216_42625 = state_40189__$1;
(statearr_40216_42625[(1)] = (8));

} else {
var statearr_40221_42626 = state_40189__$1;
(statearr_40221_42626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (1))){
var inst_40148 = (0);
var state_40189__$1 = (function (){var statearr_40226 = state_40189;
(statearr_40226[(8)] = inst_40148);

return statearr_40226;
})();
var statearr_40227_42628 = state_40189__$1;
(statearr_40227_42628[(2)] = null);

(statearr_40227_42628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (4))){
var state_40189__$1 = state_40189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40189__$1,(7),ch);
} else {
if((state_val_40190 === (6))){
var inst_40178 = (state_40189[(2)]);
var state_40189__$1 = state_40189;
var statearr_40233_42633 = state_40189__$1;
(statearr_40233_42633[(2)] = inst_40178);

(statearr_40233_42633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (3))){
var inst_40180 = (state_40189[(2)]);
var inst_40181 = cljs.core.async.close_BANG_(out);
var state_40189__$1 = (function (){var statearr_40250 = state_40189;
(statearr_40250[(9)] = inst_40180);

return statearr_40250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40189__$1,inst_40181);
} else {
if((state_val_40190 === (2))){
var inst_40148 = (state_40189[(8)]);
var inst_40154 = (inst_40148 < n);
var state_40189__$1 = state_40189;
if(cljs.core.truth_(inst_40154)){
var statearr_40251_42634 = state_40189__$1;
(statearr_40251_42634[(1)] = (4));

} else {
var statearr_40252_42635 = state_40189__$1;
(statearr_40252_42635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (11))){
var inst_40148 = (state_40189[(8)]);
var inst_40162 = (state_40189[(2)]);
var inst_40171 = (inst_40148 + (1));
var inst_40148__$1 = inst_40171;
var state_40189__$1 = (function (){var statearr_40257 = state_40189;
(statearr_40257[(8)] = inst_40148__$1);

(statearr_40257[(10)] = inst_40162);

return statearr_40257;
})();
var statearr_40264_42636 = state_40189__$1;
(statearr_40264_42636[(2)] = null);

(statearr_40264_42636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (9))){
var state_40189__$1 = state_40189;
var statearr_40270_42637 = state_40189__$1;
(statearr_40270_42637[(2)] = null);

(statearr_40270_42637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (5))){
var state_40189__$1 = state_40189;
var statearr_40272_42638 = state_40189__$1;
(statearr_40272_42638[(2)] = null);

(statearr_40272_42638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (10))){
var inst_40175 = (state_40189[(2)]);
var state_40189__$1 = state_40189;
var statearr_40274_42643 = state_40189__$1;
(statearr_40274_42643[(2)] = inst_40175);

(statearr_40274_42643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40190 === (8))){
var inst_40157 = (state_40189[(7)]);
var state_40189__$1 = state_40189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40189__$1,(11),out,inst_40157);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_40277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40277[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_40277[(1)] = (1));

return statearr_40277;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_40189){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_40189);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e40278){var ex__34755__auto__ = e40278;
var statearr_40279_42645 = state_40189;
(statearr_40279_42645[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_40189[(4)]))){
var statearr_40280_42646 = state_40189;
(statearr_40280_42646[(1)] = cljs.core.first((state_40189[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42647 = state_40189;
state_40189 = G__42647;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_40189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_40189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_40284 = f__36225__auto__();
(statearr_40284[(6)] = c__36224__auto___42624);

return statearr_40284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40304 = (function (f,ch,meta40293,_,fn1,meta40305){
this.f = f;
this.ch = ch;
this.meta40293 = meta40293;
this._ = _;
this.fn1 = fn1;
this.meta40305 = meta40305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40306,meta40305__$1){
var self__ = this;
var _40306__$1 = this;
return (new cljs.core.async.t_cljs$core$async40304(self__.f,self__.ch,self__.meta40293,self__._,self__.fn1,meta40305__$1));
}));

(cljs.core.async.t_cljs$core$async40304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40306){
var self__ = this;
var _40306__$1 = this;
return self__.meta40305;
}));

(cljs.core.async.t_cljs$core$async40304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40285_SHARP_){
var G__40347 = (((p1__40285_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40285_SHARP_) : self__.f.call(null, p1__40285_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40347) : f1.call(null, G__40347));
});
}));

(cljs.core.async.t_cljs$core$async40304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40293","meta40293",-23414619,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40292","cljs.core.async/t_cljs$core$async40292",1386603715,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40305","meta40305",126294908,null)], null);
}));

(cljs.core.async.t_cljs$core$async40304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40304");

(cljs.core.async.t_cljs$core$async40304.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40304.
 */
cljs.core.async.__GT_t_cljs$core$async40304 = (function cljs$core$async$__GT_t_cljs$core$async40304(f,ch,meta40293,_,fn1,meta40305){
return (new cljs.core.async.t_cljs$core$async40304(f,ch,meta40293,_,fn1,meta40305));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40292 = (function (f,ch,meta40293){
this.f = f;
this.ch = ch;
this.meta40293 = meta40293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40294,meta40293__$1){
var self__ = this;
var _40294__$1 = this;
return (new cljs.core.async.t_cljs$core$async40292(self__.f,self__.ch,meta40293__$1));
}));

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40294){
var self__ = this;
var _40294__$1 = this;
return self__.meta40293;
}));

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async40304(self__.f,self__.ch,self__.meta40293,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40385 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40385) : self__.f.call(null, G__40385));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40293","meta40293",-23414619,null)], null);
}));

(cljs.core.async.t_cljs$core$async40292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40292");

(cljs.core.async.t_cljs$core$async40292.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40292.
 */
cljs.core.async.__GT_t_cljs$core$async40292 = (function cljs$core$async$__GT_t_cljs$core$async40292(f,ch,meta40293){
return (new cljs.core.async.t_cljs$core$async40292(f,ch,meta40293));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40431 = (function (f,ch,meta40432){
this.f = f;
this.ch = ch;
this.meta40432 = meta40432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40433,meta40432__$1){
var self__ = this;
var _40433__$1 = this;
return (new cljs.core.async.t_cljs$core$async40431(self__.f,self__.ch,meta40432__$1));
}));

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40433){
var self__ = this;
var _40433__$1 = this;
return self__.meta40432;
}));

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40432","meta40432",-1859215004,null)], null);
}));

(cljs.core.async.t_cljs$core$async40431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40431");

(cljs.core.async.t_cljs$core$async40431.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40431.
 */
cljs.core.async.__GT_t_cljs$core$async40431 = (function cljs$core$async$__GT_t_cljs$core$async40431(f,ch,meta40432){
return (new cljs.core.async.t_cljs$core$async40431(f,ch,meta40432));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40431(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40472 = (function (p,ch,meta40473){
this.p = p;
this.ch = ch;
this.meta40473 = meta40473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40474,meta40473__$1){
var self__ = this;
var _40474__$1 = this;
return (new cljs.core.async.t_cljs$core$async40472(self__.p,self__.ch,meta40473__$1));
}));

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40474){
var self__ = this;
var _40474__$1 = this;
return self__.meta40473;
}));

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40473","meta40473",-446999584,null)], null);
}));

(cljs.core.async.t_cljs$core$async40472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40472");

(cljs.core.async.t_cljs$core$async40472.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40472.
 */
cljs.core.async.__GT_t_cljs$core$async40472 = (function cljs$core$async$__GT_t_cljs$core$async40472(p,ch,meta40473){
return (new cljs.core.async.t_cljs$core$async40472(p,ch,meta40473));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async40472(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40579 = arguments.length;
switch (G__40579) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36224__auto___42672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_40621){
var state_val_40622 = (state_40621[(1)]);
if((state_val_40622 === (7))){
var inst_40611 = (state_40621[(2)]);
var state_40621__$1 = state_40621;
var statearr_40645_42673 = state_40621__$1;
(statearr_40645_42673[(2)] = inst_40611);

(statearr_40645_42673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (1))){
var state_40621__$1 = state_40621;
var statearr_40651_42674 = state_40621__$1;
(statearr_40651_42674[(2)] = null);

(statearr_40651_42674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (4))){
var inst_40591 = (state_40621[(7)]);
var inst_40591__$1 = (state_40621[(2)]);
var inst_40592 = (inst_40591__$1 == null);
var state_40621__$1 = (function (){var statearr_40652 = state_40621;
(statearr_40652[(7)] = inst_40591__$1);

return statearr_40652;
})();
if(cljs.core.truth_(inst_40592)){
var statearr_40653_42675 = state_40621__$1;
(statearr_40653_42675[(1)] = (5));

} else {
var statearr_40660_42676 = state_40621__$1;
(statearr_40660_42676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (6))){
var inst_40591 = (state_40621[(7)]);
var inst_40600 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40591) : p.call(null, inst_40591));
var state_40621__$1 = state_40621;
if(cljs.core.truth_(inst_40600)){
var statearr_40669_42677 = state_40621__$1;
(statearr_40669_42677[(1)] = (8));

} else {
var statearr_40670_42678 = state_40621__$1;
(statearr_40670_42678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (3))){
var inst_40617 = (state_40621[(2)]);
var state_40621__$1 = state_40621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40621__$1,inst_40617);
} else {
if((state_val_40622 === (2))){
var state_40621__$1 = state_40621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40621__$1,(4),ch);
} else {
if((state_val_40622 === (11))){
var inst_40604 = (state_40621[(2)]);
var state_40621__$1 = state_40621;
var statearr_40685_42680 = state_40621__$1;
(statearr_40685_42680[(2)] = inst_40604);

(statearr_40685_42680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (9))){
var state_40621__$1 = state_40621;
var statearr_40694_42681 = state_40621__$1;
(statearr_40694_42681[(2)] = null);

(statearr_40694_42681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (5))){
var inst_40598 = cljs.core.async.close_BANG_(out);
var state_40621__$1 = state_40621;
var statearr_40696_42682 = state_40621__$1;
(statearr_40696_42682[(2)] = inst_40598);

(statearr_40696_42682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (10))){
var inst_40608 = (state_40621[(2)]);
var state_40621__$1 = (function (){var statearr_40698 = state_40621;
(statearr_40698[(8)] = inst_40608);

return statearr_40698;
})();
var statearr_40702_42683 = state_40621__$1;
(statearr_40702_42683[(2)] = null);

(statearr_40702_42683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (8))){
var inst_40591 = (state_40621[(7)]);
var state_40621__$1 = state_40621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40621__$1,(11),out,inst_40591);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_40711 = [null,null,null,null,null,null,null,null,null];
(statearr_40711[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_40711[(1)] = (1));

return statearr_40711;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_40621){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_40621);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e40713){var ex__34755__auto__ = e40713;
var statearr_40714_42684 = state_40621;
(statearr_40714_42684[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_40621[(4)]))){
var statearr_40716_42685 = state_40621;
(statearr_40716_42685[(1)] = cljs.core.first((state_40621[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42686 = state_40621;
state_40621 = G__42686;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_40621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_40621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_40717 = f__36225__auto__();
(statearr_40717[(6)] = c__36224__auto___42672);

return statearr_40717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40720 = arguments.length;
switch (G__40720) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36224__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_40910){
var state_val_40911 = (state_40910[(1)]);
if((state_val_40911 === (7))){
var inst_40872 = (state_40910[(2)]);
var state_40910__$1 = state_40910;
var statearr_40922_42688 = state_40910__$1;
(statearr_40922_42688[(2)] = inst_40872);

(statearr_40922_42688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (20))){
var inst_40787 = (state_40910[(7)]);
var inst_40827 = (state_40910[(2)]);
var inst_40828 = cljs.core.next(inst_40787);
var inst_40768 = inst_40828;
var inst_40769 = null;
var inst_40770 = (0);
var inst_40771 = (0);
var state_40910__$1 = (function (){var statearr_40928 = state_40910;
(statearr_40928[(8)] = inst_40771);

(statearr_40928[(9)] = inst_40768);

(statearr_40928[(10)] = inst_40770);

(statearr_40928[(11)] = inst_40827);

(statearr_40928[(12)] = inst_40769);

return statearr_40928;
})();
var statearr_40929_42689 = state_40910__$1;
(statearr_40929_42689[(2)] = null);

(statearr_40929_42689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (1))){
var state_40910__$1 = state_40910;
var statearr_40933_42690 = state_40910__$1;
(statearr_40933_42690[(2)] = null);

(statearr_40933_42690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (4))){
var inst_40755 = (state_40910[(13)]);
var inst_40755__$1 = (state_40910[(2)]);
var inst_40758 = (inst_40755__$1 == null);
var state_40910__$1 = (function (){var statearr_40935 = state_40910;
(statearr_40935[(13)] = inst_40755__$1);

return statearr_40935;
})();
if(cljs.core.truth_(inst_40758)){
var statearr_40938_42691 = state_40910__$1;
(statearr_40938_42691[(1)] = (5));

} else {
var statearr_40939_42692 = state_40910__$1;
(statearr_40939_42692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (15))){
var state_40910__$1 = state_40910;
var statearr_40945_42693 = state_40910__$1;
(statearr_40945_42693[(2)] = null);

(statearr_40945_42693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (21))){
var state_40910__$1 = state_40910;
var statearr_40948_42694 = state_40910__$1;
(statearr_40948_42694[(2)] = null);

(statearr_40948_42694[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (13))){
var inst_40771 = (state_40910[(8)]);
var inst_40768 = (state_40910[(9)]);
var inst_40770 = (state_40910[(10)]);
var inst_40769 = (state_40910[(12)]);
var inst_40781 = (state_40910[(2)]);
var inst_40783 = (inst_40771 + (1));
var tmp40942 = inst_40768;
var tmp40943 = inst_40770;
var tmp40944 = inst_40769;
var inst_40768__$1 = tmp40942;
var inst_40769__$1 = tmp40944;
var inst_40770__$1 = tmp40943;
var inst_40771__$1 = inst_40783;
var state_40910__$1 = (function (){var statearr_40952 = state_40910;
(statearr_40952[(14)] = inst_40781);

(statearr_40952[(8)] = inst_40771__$1);

(statearr_40952[(9)] = inst_40768__$1);

(statearr_40952[(10)] = inst_40770__$1);

(statearr_40952[(12)] = inst_40769__$1);

return statearr_40952;
})();
var statearr_40953_42695 = state_40910__$1;
(statearr_40953_42695[(2)] = null);

(statearr_40953_42695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (22))){
var state_40910__$1 = state_40910;
var statearr_40956_42696 = state_40910__$1;
(statearr_40956_42696[(2)] = null);

(statearr_40956_42696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (6))){
var inst_40755 = (state_40910[(13)]);
var inst_40766 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40755) : f.call(null, inst_40755));
var inst_40767 = cljs.core.seq(inst_40766);
var inst_40768 = inst_40767;
var inst_40769 = null;
var inst_40770 = (0);
var inst_40771 = (0);
var state_40910__$1 = (function (){var statearr_40958 = state_40910;
(statearr_40958[(8)] = inst_40771);

(statearr_40958[(9)] = inst_40768);

(statearr_40958[(10)] = inst_40770);

(statearr_40958[(12)] = inst_40769);

return statearr_40958;
})();
var statearr_40959_42697 = state_40910__$1;
(statearr_40959_42697[(2)] = null);

(statearr_40959_42697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (17))){
var inst_40787 = (state_40910[(7)]);
var inst_40797 = cljs.core.chunk_first(inst_40787);
var inst_40801 = cljs.core.chunk_rest(inst_40787);
var inst_40803 = cljs.core.count(inst_40797);
var inst_40768 = inst_40801;
var inst_40769 = inst_40797;
var inst_40770 = inst_40803;
var inst_40771 = (0);
var state_40910__$1 = (function (){var statearr_40960 = state_40910;
(statearr_40960[(8)] = inst_40771);

(statearr_40960[(9)] = inst_40768);

(statearr_40960[(10)] = inst_40770);

(statearr_40960[(12)] = inst_40769);

return statearr_40960;
})();
var statearr_40961_42698 = state_40910__$1;
(statearr_40961_42698[(2)] = null);

(statearr_40961_42698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (3))){
var inst_40875 = (state_40910[(2)]);
var state_40910__$1 = state_40910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40910__$1,inst_40875);
} else {
if((state_val_40911 === (12))){
var inst_40842 = (state_40910[(2)]);
var state_40910__$1 = state_40910;
var statearr_40984_42699 = state_40910__$1;
(statearr_40984_42699[(2)] = inst_40842);

(statearr_40984_42699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (2))){
var state_40910__$1 = state_40910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40910__$1,(4),in$);
} else {
if((state_val_40911 === (23))){
var inst_40870 = (state_40910[(2)]);
var state_40910__$1 = state_40910;
var statearr_40994_42700 = state_40910__$1;
(statearr_40994_42700[(2)] = inst_40870);

(statearr_40994_42700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (19))){
var inst_40836 = (state_40910[(2)]);
var state_40910__$1 = state_40910;
var statearr_40996_42701 = state_40910__$1;
(statearr_40996_42701[(2)] = inst_40836);

(statearr_40996_42701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (11))){
var inst_40768 = (state_40910[(9)]);
var inst_40787 = (state_40910[(7)]);
var inst_40787__$1 = cljs.core.seq(inst_40768);
var state_40910__$1 = (function (){var statearr_40998 = state_40910;
(statearr_40998[(7)] = inst_40787__$1);

return statearr_40998;
})();
if(inst_40787__$1){
var statearr_41001_42702 = state_40910__$1;
(statearr_41001_42702[(1)] = (14));

} else {
var statearr_41004_42703 = state_40910__$1;
(statearr_41004_42703[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (9))){
var inst_40845 = (state_40910[(2)]);
var inst_40852 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40910__$1 = (function (){var statearr_41006 = state_40910;
(statearr_41006[(15)] = inst_40845);

return statearr_41006;
})();
if(cljs.core.truth_(inst_40852)){
var statearr_41008_42704 = state_40910__$1;
(statearr_41008_42704[(1)] = (21));

} else {
var statearr_41009_42705 = state_40910__$1;
(statearr_41009_42705[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (5))){
var inst_40760 = cljs.core.async.close_BANG_(out);
var state_40910__$1 = state_40910;
var statearr_41010_42706 = state_40910__$1;
(statearr_41010_42706[(2)] = inst_40760);

(statearr_41010_42706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (14))){
var inst_40787 = (state_40910[(7)]);
var inst_40789 = cljs.core.chunked_seq_QMARK_(inst_40787);
var state_40910__$1 = state_40910;
if(inst_40789){
var statearr_41013_42707 = state_40910__$1;
(statearr_41013_42707[(1)] = (17));

} else {
var statearr_41014_42708 = state_40910__$1;
(statearr_41014_42708[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (16))){
var inst_40840 = (state_40910[(2)]);
var state_40910__$1 = state_40910;
var statearr_41021_42709 = state_40910__$1;
(statearr_41021_42709[(2)] = inst_40840);

(statearr_41021_42709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40911 === (10))){
var inst_40771 = (state_40910[(8)]);
var inst_40769 = (state_40910[(12)]);
var inst_40779 = cljs.core._nth(inst_40769,inst_40771);
var state_40910__$1 = state_40910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40910__$1,(13),out,inst_40779);
} else {
if((state_val_40911 === (18))){
var inst_40787 = (state_40910[(7)]);
var inst_40825 = cljs.core.first(inst_40787);
var state_40910__$1 = state_40910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40910__$1,(20),out,inst_40825);
} else {
if((state_val_40911 === (8))){
var inst_40771 = (state_40910[(8)]);
var inst_40770 = (state_40910[(10)]);
var inst_40774 = (inst_40771 < inst_40770);
var inst_40775 = inst_40774;
var state_40910__$1 = state_40910;
if(cljs.core.truth_(inst_40775)){
var statearr_41036_42710 = state_40910__$1;
(statearr_41036_42710[(1)] = (10));

} else {
var statearr_41037_42711 = state_40910__$1;
(statearr_41037_42711[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34752__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34752__auto____0 = (function (){
var statearr_41039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41039[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34752__auto__);

(statearr_41039[(1)] = (1));

return statearr_41039;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34752__auto____1 = (function (state_40910){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_40910);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e41043){var ex__34755__auto__ = e41043;
var statearr_41044_42716 = state_40910;
(statearr_41044_42716[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_40910[(4)]))){
var statearr_41046_42720 = state_40910;
(statearr_41046_42720[(1)] = cljs.core.first((state_40910[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42721 = state_40910;
state_40910 = G__42721;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34752__auto__ = function(state_40910){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34752__auto____1.call(this,state_40910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34752__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34752__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_41058 = f__36225__auto__();
(statearr_41058[(6)] = c__36224__auto__);

return statearr_41058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));

return c__36224__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41069 = arguments.length;
switch (G__41069) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41077 = arguments.length;
switch (G__41077) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41090 = arguments.length;
switch (G__41090) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36224__auto___42732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_41136){
var state_val_41137 = (state_41136[(1)]);
if((state_val_41137 === (7))){
var inst_41130 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
var statearr_41149_42733 = state_41136__$1;
(statearr_41149_42733[(2)] = inst_41130);

(statearr_41149_42733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (1))){
var inst_41111 = null;
var state_41136__$1 = (function (){var statearr_41150 = state_41136;
(statearr_41150[(7)] = inst_41111);

return statearr_41150;
})();
var statearr_41151_42734 = state_41136__$1;
(statearr_41151_42734[(2)] = null);

(statearr_41151_42734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (4))){
var inst_41115 = (state_41136[(8)]);
var inst_41115__$1 = (state_41136[(2)]);
var inst_41116 = (inst_41115__$1 == null);
var inst_41117 = cljs.core.not(inst_41116);
var state_41136__$1 = (function (){var statearr_41156 = state_41136;
(statearr_41156[(8)] = inst_41115__$1);

return statearr_41156;
})();
if(inst_41117){
var statearr_41159_42735 = state_41136__$1;
(statearr_41159_42735[(1)] = (5));

} else {
var statearr_41163_42736 = state_41136__$1;
(statearr_41163_42736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (6))){
var state_41136__$1 = state_41136;
var statearr_41170_42737 = state_41136__$1;
(statearr_41170_42737[(2)] = null);

(statearr_41170_42737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (3))){
var inst_41132 = (state_41136[(2)]);
var inst_41134 = cljs.core.async.close_BANG_(out);
var state_41136__$1 = (function (){var statearr_41177 = state_41136;
(statearr_41177[(9)] = inst_41132);

return statearr_41177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41136__$1,inst_41134);
} else {
if((state_val_41137 === (2))){
var state_41136__$1 = state_41136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41136__$1,(4),ch);
} else {
if((state_val_41137 === (11))){
var inst_41115 = (state_41136[(8)]);
var inst_41124 = (state_41136[(2)]);
var inst_41111 = inst_41115;
var state_41136__$1 = (function (){var statearr_41184 = state_41136;
(statearr_41184[(7)] = inst_41111);

(statearr_41184[(10)] = inst_41124);

return statearr_41184;
})();
var statearr_41187_42738 = state_41136__$1;
(statearr_41187_42738[(2)] = null);

(statearr_41187_42738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (9))){
var inst_41115 = (state_41136[(8)]);
var state_41136__$1 = state_41136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41136__$1,(11),out,inst_41115);
} else {
if((state_val_41137 === (5))){
var inst_41111 = (state_41136[(7)]);
var inst_41115 = (state_41136[(8)]);
var inst_41119 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41115,inst_41111);
var state_41136__$1 = state_41136;
if(inst_41119){
var statearr_41192_42740 = state_41136__$1;
(statearr_41192_42740[(1)] = (8));

} else {
var statearr_41195_42741 = state_41136__$1;
(statearr_41195_42741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (10))){
var inst_41127 = (state_41136[(2)]);
var state_41136__$1 = state_41136;
var statearr_41205_42744 = state_41136__$1;
(statearr_41205_42744[(2)] = inst_41127);

(statearr_41205_42744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41137 === (8))){
var inst_41111 = (state_41136[(7)]);
var tmp41190 = inst_41111;
var inst_41111__$1 = tmp41190;
var state_41136__$1 = (function (){var statearr_41207 = state_41136;
(statearr_41207[(7)] = inst_41111__$1);

return statearr_41207;
})();
var statearr_41208_42745 = state_41136__$1;
(statearr_41208_42745[(2)] = null);

(statearr_41208_42745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_41212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41212[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_41212[(1)] = (1));

return statearr_41212;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_41136){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_41136);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e41216){var ex__34755__auto__ = e41216;
var statearr_41217_42747 = state_41136;
(statearr_41217_42747[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_41136[(4)]))){
var statearr_41225_42748 = state_41136;
(statearr_41225_42748[(1)] = cljs.core.first((state_41136[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42749 = state_41136;
state_41136 = G__42749;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_41136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_41136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_41235 = f__36225__auto__();
(statearr_41235[(6)] = c__36224__auto___42732);

return statearr_41235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41250 = arguments.length;
switch (G__41250) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36224__auto___42754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_41302){
var state_val_41303 = (state_41302[(1)]);
if((state_val_41303 === (7))){
var inst_41295 = (state_41302[(2)]);
var state_41302__$1 = state_41302;
var statearr_41309_42755 = state_41302__$1;
(statearr_41309_42755[(2)] = inst_41295);

(statearr_41309_42755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (1))){
var inst_41259 = (new Array(n));
var inst_41260 = inst_41259;
var inst_41261 = (0);
var state_41302__$1 = (function (){var statearr_41310 = state_41302;
(statearr_41310[(7)] = inst_41260);

(statearr_41310[(8)] = inst_41261);

return statearr_41310;
})();
var statearr_41311_42756 = state_41302__$1;
(statearr_41311_42756[(2)] = null);

(statearr_41311_42756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (4))){
var inst_41264 = (state_41302[(9)]);
var inst_41264__$1 = (state_41302[(2)]);
var inst_41265 = (inst_41264__$1 == null);
var inst_41266 = cljs.core.not(inst_41265);
var state_41302__$1 = (function (){var statearr_41312 = state_41302;
(statearr_41312[(9)] = inst_41264__$1);

return statearr_41312;
})();
if(inst_41266){
var statearr_41313_42758 = state_41302__$1;
(statearr_41313_42758[(1)] = (5));

} else {
var statearr_41314_42759 = state_41302__$1;
(statearr_41314_42759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (15))){
var inst_41288 = (state_41302[(2)]);
var state_41302__$1 = state_41302;
var statearr_41316_42760 = state_41302__$1;
(statearr_41316_42760[(2)] = inst_41288);

(statearr_41316_42760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (13))){
var state_41302__$1 = state_41302;
var statearr_41318_42762 = state_41302__$1;
(statearr_41318_42762[(2)] = null);

(statearr_41318_42762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (6))){
var inst_41261 = (state_41302[(8)]);
var inst_41283 = (inst_41261 > (0));
var state_41302__$1 = state_41302;
if(cljs.core.truth_(inst_41283)){
var statearr_41319_42764 = state_41302__$1;
(statearr_41319_42764[(1)] = (12));

} else {
var statearr_41320_42765 = state_41302__$1;
(statearr_41320_42765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (3))){
var inst_41297 = (state_41302[(2)]);
var state_41302__$1 = state_41302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41302__$1,inst_41297);
} else {
if((state_val_41303 === (12))){
var inst_41260 = (state_41302[(7)]);
var inst_41285 = cljs.core.vec(inst_41260);
var state_41302__$1 = state_41302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41302__$1,(15),out,inst_41285);
} else {
if((state_val_41303 === (2))){
var state_41302__$1 = state_41302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41302__$1,(4),ch);
} else {
if((state_val_41303 === (11))){
var inst_41276 = (state_41302[(2)]);
var inst_41277 = (new Array(n));
var inst_41260 = inst_41277;
var inst_41261 = (0);
var state_41302__$1 = (function (){var statearr_41325 = state_41302;
(statearr_41325[(7)] = inst_41260);

(statearr_41325[(8)] = inst_41261);

(statearr_41325[(10)] = inst_41276);

return statearr_41325;
})();
var statearr_41326_42766 = state_41302__$1;
(statearr_41326_42766[(2)] = null);

(statearr_41326_42766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (9))){
var inst_41260 = (state_41302[(7)]);
var inst_41274 = cljs.core.vec(inst_41260);
var state_41302__$1 = state_41302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41302__$1,(11),out,inst_41274);
} else {
if((state_val_41303 === (5))){
var inst_41260 = (state_41302[(7)]);
var inst_41261 = (state_41302[(8)]);
var inst_41269 = (state_41302[(11)]);
var inst_41264 = (state_41302[(9)]);
var inst_41268 = (inst_41260[inst_41261] = inst_41264);
var inst_41269__$1 = (inst_41261 + (1));
var inst_41270 = (inst_41269__$1 < n);
var state_41302__$1 = (function (){var statearr_41327 = state_41302;
(statearr_41327[(11)] = inst_41269__$1);

(statearr_41327[(12)] = inst_41268);

return statearr_41327;
})();
if(cljs.core.truth_(inst_41270)){
var statearr_41328_42769 = state_41302__$1;
(statearr_41328_42769[(1)] = (8));

} else {
var statearr_41329_42770 = state_41302__$1;
(statearr_41329_42770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (14))){
var inst_41292 = (state_41302[(2)]);
var inst_41293 = cljs.core.async.close_BANG_(out);
var state_41302__$1 = (function (){var statearr_41332 = state_41302;
(statearr_41332[(13)] = inst_41292);

return statearr_41332;
})();
var statearr_41333_42771 = state_41302__$1;
(statearr_41333_42771[(2)] = inst_41293);

(statearr_41333_42771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (10))){
var inst_41281 = (state_41302[(2)]);
var state_41302__$1 = state_41302;
var statearr_41334_42772 = state_41302__$1;
(statearr_41334_42772[(2)] = inst_41281);

(statearr_41334_42772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41303 === (8))){
var inst_41260 = (state_41302[(7)]);
var inst_41269 = (state_41302[(11)]);
var tmp41331 = inst_41260;
var inst_41260__$1 = tmp41331;
var inst_41261 = inst_41269;
var state_41302__$1 = (function (){var statearr_41335 = state_41302;
(statearr_41335[(7)] = inst_41260__$1);

(statearr_41335[(8)] = inst_41261);

return statearr_41335;
})();
var statearr_41336_42774 = state_41302__$1;
(statearr_41336_42774[(2)] = null);

(statearr_41336_42774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_41341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41341[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_41341[(1)] = (1));

return statearr_41341;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_41302){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_41302);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e41342){var ex__34755__auto__ = e41342;
var statearr_41343_42775 = state_41302;
(statearr_41343_42775[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_41302[(4)]))){
var statearr_41345_42776 = state_41302;
(statearr_41345_42776[(1)] = cljs.core.first((state_41302[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42777 = state_41302;
state_41302 = G__42777;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_41302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_41302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_41346 = f__36225__auto__();
(statearr_41346[(6)] = c__36224__auto___42754);

return statearr_41346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41354 = arguments.length;
switch (G__41354) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36224__auto___42780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36225__auto__ = (function (){var switch__34751__auto__ = (function (state_41456){
var state_val_41457 = (state_41456[(1)]);
if((state_val_41457 === (7))){
var inst_41451 = (state_41456[(2)]);
var state_41456__$1 = state_41456;
var statearr_41468_42781 = state_41456__$1;
(statearr_41468_42781[(2)] = inst_41451);

(statearr_41468_42781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (1))){
var inst_41367 = [];
var inst_41369 = inst_41367;
var inst_41374 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41456__$1 = (function (){var statearr_41469 = state_41456;
(statearr_41469[(7)] = inst_41369);

(statearr_41469[(8)] = inst_41374);

return statearr_41469;
})();
var statearr_41470_42782 = state_41456__$1;
(statearr_41470_42782[(2)] = null);

(statearr_41470_42782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (4))){
var inst_41386 = (state_41456[(9)]);
var inst_41386__$1 = (state_41456[(2)]);
var inst_41387 = (inst_41386__$1 == null);
var inst_41391 = cljs.core.not(inst_41387);
var state_41456__$1 = (function (){var statearr_41475 = state_41456;
(statearr_41475[(9)] = inst_41386__$1);

return statearr_41475;
})();
if(inst_41391){
var statearr_41479_42787 = state_41456__$1;
(statearr_41479_42787[(1)] = (5));

} else {
var statearr_41480_42788 = state_41456__$1;
(statearr_41480_42788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (15))){
var inst_41369 = (state_41456[(7)]);
var inst_41443 = cljs.core.vec(inst_41369);
var state_41456__$1 = state_41456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41456__$1,(18),out,inst_41443);
} else {
if((state_val_41457 === (13))){
var inst_41435 = (state_41456[(2)]);
var state_41456__$1 = state_41456;
var statearr_41485_42790 = state_41456__$1;
(statearr_41485_42790[(2)] = inst_41435);

(statearr_41485_42790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (6))){
var inst_41369 = (state_41456[(7)]);
var inst_41440 = inst_41369.length;
var inst_41441 = (inst_41440 > (0));
var state_41456__$1 = state_41456;
if(cljs.core.truth_(inst_41441)){
var statearr_41486_42796 = state_41456__$1;
(statearr_41486_42796[(1)] = (15));

} else {
var statearr_41487_42797 = state_41456__$1;
(statearr_41487_42797[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (17))){
var inst_41448 = (state_41456[(2)]);
var inst_41449 = cljs.core.async.close_BANG_(out);
var state_41456__$1 = (function (){var statearr_41488 = state_41456;
(statearr_41488[(10)] = inst_41448);

return statearr_41488;
})();
var statearr_41489_42798 = state_41456__$1;
(statearr_41489_42798[(2)] = inst_41449);

(statearr_41489_42798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (3))){
var inst_41453 = (state_41456[(2)]);
var state_41456__$1 = state_41456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41456__$1,inst_41453);
} else {
if((state_val_41457 === (12))){
var inst_41369 = (state_41456[(7)]);
var inst_41428 = cljs.core.vec(inst_41369);
var state_41456__$1 = state_41456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41456__$1,(14),out,inst_41428);
} else {
if((state_val_41457 === (2))){
var state_41456__$1 = state_41456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41456__$1,(4),ch);
} else {
if((state_val_41457 === (11))){
var inst_41369 = (state_41456[(7)]);
var inst_41386 = (state_41456[(9)]);
var inst_41393 = (state_41456[(11)]);
var inst_41421 = inst_41369.push(inst_41386);
var tmp41490 = inst_41369;
var inst_41369__$1 = tmp41490;
var inst_41374 = inst_41393;
var state_41456__$1 = (function (){var statearr_41491 = state_41456;
(statearr_41491[(7)] = inst_41369__$1);

(statearr_41491[(8)] = inst_41374);

(statearr_41491[(12)] = inst_41421);

return statearr_41491;
})();
var statearr_41492_42799 = state_41456__$1;
(statearr_41492_42799[(2)] = null);

(statearr_41492_42799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (9))){
var inst_41374 = (state_41456[(8)]);
var inst_41412 = cljs.core.keyword_identical_QMARK_(inst_41374,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41456__$1 = state_41456;
var statearr_41493_42800 = state_41456__$1;
(statearr_41493_42800[(2)] = inst_41412);

(statearr_41493_42800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (5))){
var inst_41408 = (state_41456[(13)]);
var inst_41386 = (state_41456[(9)]);
var inst_41374 = (state_41456[(8)]);
var inst_41393 = (state_41456[(11)]);
var inst_41393__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41386) : f.call(null, inst_41386));
var inst_41408__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41393__$1,inst_41374);
var state_41456__$1 = (function (){var statearr_41494 = state_41456;
(statearr_41494[(13)] = inst_41408__$1);

(statearr_41494[(11)] = inst_41393__$1);

return statearr_41494;
})();
if(inst_41408__$1){
var statearr_41495_42801 = state_41456__$1;
(statearr_41495_42801[(1)] = (8));

} else {
var statearr_41496_42802 = state_41456__$1;
(statearr_41496_42802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (14))){
var inst_41386 = (state_41456[(9)]);
var inst_41393 = (state_41456[(11)]);
var inst_41430 = (state_41456[(2)]);
var inst_41431 = [];
var inst_41432 = inst_41431.push(inst_41386);
var inst_41369 = inst_41431;
var inst_41374 = inst_41393;
var state_41456__$1 = (function (){var statearr_41497 = state_41456;
(statearr_41497[(14)] = inst_41432);

(statearr_41497[(7)] = inst_41369);

(statearr_41497[(8)] = inst_41374);

(statearr_41497[(15)] = inst_41430);

return statearr_41497;
})();
var statearr_41498_42805 = state_41456__$1;
(statearr_41498_42805[(2)] = null);

(statearr_41498_42805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (16))){
var state_41456__$1 = state_41456;
var statearr_41499_42806 = state_41456__$1;
(statearr_41499_42806[(2)] = null);

(statearr_41499_42806[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (10))){
var inst_41414 = (state_41456[(2)]);
var state_41456__$1 = state_41456;
if(cljs.core.truth_(inst_41414)){
var statearr_41500_42807 = state_41456__$1;
(statearr_41500_42807[(1)] = (11));

} else {
var statearr_41501_42808 = state_41456__$1;
(statearr_41501_42808[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (18))){
var inst_41445 = (state_41456[(2)]);
var state_41456__$1 = state_41456;
var statearr_41502_42809 = state_41456__$1;
(statearr_41502_42809[(2)] = inst_41445);

(statearr_41502_42809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41457 === (8))){
var inst_41408 = (state_41456[(13)]);
var state_41456__$1 = state_41456;
var statearr_41503_42811 = state_41456__$1;
(statearr_41503_42811[(2)] = inst_41408);

(statearr_41503_42811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34752__auto__ = null;
var cljs$core$async$state_machine__34752__auto____0 = (function (){
var statearr_41504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41504[(0)] = cljs$core$async$state_machine__34752__auto__);

(statearr_41504[(1)] = (1));

return statearr_41504;
});
var cljs$core$async$state_machine__34752__auto____1 = (function (state_41456){
while(true){
var ret_value__34753__auto__ = (function (){try{while(true){
var result__34754__auto__ = switch__34751__auto__(state_41456);
if(cljs.core.keyword_identical_QMARK_(result__34754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34754__auto__;
}
break;
}
}catch (e41509){var ex__34755__auto__ = e41509;
var statearr_41510_42812 = state_41456;
(statearr_41510_42812[(2)] = ex__34755__auto__);


if(cljs.core.seq((state_41456[(4)]))){
var statearr_41511_42813 = state_41456;
(statearr_41511_42813[(1)] = cljs.core.first((state_41456[(4)])));

} else {
throw ex__34755__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42814 = state_41456;
state_41456 = G__42814;
continue;
} else {
return ret_value__34753__auto__;
}
break;
}
});
cljs$core$async$state_machine__34752__auto__ = function(state_41456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34752__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34752__auto____1.call(this,state_41456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34752__auto____0;
cljs$core$async$state_machine__34752__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34752__auto____1;
return cljs$core$async$state_machine__34752__auto__;
})()
})();
var state__36226__auto__ = (function (){var statearr_41515 = f__36225__auto__();
(statearr_41515[(6)] = c__36224__auto___42780);

return statearr_41515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36226__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
