goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32749){
var map__32750 = p__32749;
var map__32750__$1 = cljs.core.__destructure_map(map__32750);
var runtime = map__32750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33023 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33023)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__32772 = runtime;
var G__32773 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33023);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__32772,G__32773) : shadow.remote.runtime.shared.process.call(null, G__32772,G__32773));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32775,res){
var map__32777 = p__32775;
var map__32777__$1 = cljs.core.__destructure_map(map__32777);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32780 = res;
var G__32780__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32780,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32780);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32780__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32780__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32784 = arguments.length;
switch (G__32784) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32791,msg,handlers,timeout_after_ms){
var map__32792 = p__32791;
var map__32792__$1 = cljs.core.__destructure_map(map__32792);
var runtime = map__32792__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33052 = arguments.length;
var i__5727__auto___33053 = (0);
while(true){
if((i__5727__auto___33053 < len__5726__auto___33052)){
args__5732__auto__.push((arguments[i__5727__auto___33053]));

var G__33055 = (i__5727__auto___33053 + (1));
i__5727__auto___33053 = G__33055;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32811,ev,args){
var map__32813 = p__32811;
var map__32813__$1 = cljs.core.__destructure_map(map__32813);
var runtime = map__32813__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32814 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32817 = null;
var count__32818 = (0);
var i__32819 = (0);
while(true){
if((i__32819 < count__32818)){
var ext = chunk__32817.cljs$core$IIndexed$_nth$arity$2(null, i__32819);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33081 = seq__32814;
var G__33082 = chunk__32817;
var G__33083 = count__32818;
var G__33084 = (i__32819 + (1));
seq__32814 = G__33081;
chunk__32817 = G__33082;
count__32818 = G__33083;
i__32819 = G__33084;
continue;
} else {
var G__33086 = seq__32814;
var G__33087 = chunk__32817;
var G__33088 = count__32818;
var G__33089 = (i__32819 + (1));
seq__32814 = G__33086;
chunk__32817 = G__33087;
count__32818 = G__33088;
i__32819 = G__33089;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32814);
if(temp__5823__auto__){
var seq__32814__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32814__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32814__$1);
var G__33091 = cljs.core.chunk_rest(seq__32814__$1);
var G__33092 = c__5525__auto__;
var G__33093 = cljs.core.count(c__5525__auto__);
var G__33094 = (0);
seq__32814 = G__33091;
chunk__32817 = G__33092;
count__32818 = G__33093;
i__32819 = G__33094;
continue;
} else {
var ext = cljs.core.first(seq__32814__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33096 = cljs.core.next(seq__32814__$1);
var G__33097 = null;
var G__33098 = (0);
var G__33099 = (0);
seq__32814 = G__33096;
chunk__32817 = G__33097;
count__32818 = G__33098;
i__32819 = G__33099;
continue;
} else {
var G__33100 = cljs.core.next(seq__32814__$1);
var G__33101 = null;
var G__33102 = (0);
var G__33103 = (0);
seq__32814 = G__33100;
chunk__32817 = G__33101;
count__32818 = G__33102;
i__32819 = G__33103;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32804){
var G__32805 = cljs.core.first(seq32804);
var seq32804__$1 = cljs.core.next(seq32804);
var G__32806 = cljs.core.first(seq32804__$1);
var seq32804__$2 = cljs.core.next(seq32804__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32805,G__32806,seq32804__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32856,p__32857){
var map__32858 = p__32856;
var map__32858__$1 = cljs.core.__destructure_map(map__32858);
var runtime = map__32858__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32859 = p__32857;
var map__32859__$1 = cljs.core.__destructure_map(map__32859);
var msg = map__32859__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__32863 = cljs.core.deref(state_ref);
var map__32863__$1 = cljs.core.__destructure_map(map__32863);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32878,msg){
var map__32879 = p__32878;
var map__32879__$1 = cljs.core.__destructure_map(map__32879);
var runtime = map__32879__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32897,key,p__32898){
var map__32900 = p__32897;
var map__32900__$1 = cljs.core.__destructure_map(map__32900);
var state = map__32900__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32900__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32901 = p__32898;
var map__32901__$1 = cljs.core.__destructure_map(map__32901);
var spec = map__32901__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32901__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32901__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32916,key,spec){
var map__32917 = p__32916;
var map__32917__$1 = cljs.core.__destructure_map(map__32917);
var runtime = map__32917__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___33128 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___33128 == null)){
} else {
var on_welcome_33129 = temp__5827__auto___33128;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_33129.cljs$core$IFn$_invoke$arity$0 ? on_welcome_33129.cljs$core$IFn$_invoke$arity$0() : on_welcome_33129.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32921_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32921_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32922_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32922_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32923_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32923_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32924_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32924_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32926_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32926_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32942,key){
var map__32944 = p__32942;
var map__32944__$1 = cljs.core.__destructure_map(map__32944);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32954,msg){
var map__32955 = p__32954;
var map__32955__$1 = cljs.core.__destructure_map(map__32955);
var runtime = map__32955__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32955__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32963,p__32964){
var map__32965 = p__32963;
var map__32965__$1 = cljs.core.__destructure_map(map__32965);
var runtime = map__32965__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32967 = p__32964;
var map__32967__$1 = cljs.core.__destructure_map(map__32967);
var msg = map__32967__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32967__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32967__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32977 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32979 = null;
var count__32980 = (0);
var i__32981 = (0);
while(true){
if((i__32981 < count__32980)){
var map__32995 = chunk__32979.cljs$core$IIndexed$_nth$arity$2(null, i__32981);
var map__32995__$1 = cljs.core.__destructure_map(map__32995);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32995__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__33164 = seq__32977;
var G__33165 = chunk__32979;
var G__33166 = count__32980;
var G__33167 = (i__32981 + (1));
seq__32977 = G__33164;
chunk__32979 = G__33165;
count__32980 = G__33166;
i__32981 = G__33167;
continue;
} else {
var G__33169 = seq__32977;
var G__33170 = chunk__32979;
var G__33171 = count__32980;
var G__33172 = (i__32981 + (1));
seq__32977 = G__33169;
chunk__32979 = G__33170;
count__32980 = G__33171;
i__32981 = G__33172;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32977);
if(temp__5823__auto__){
var seq__32977__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32977__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32977__$1);
var G__33174 = cljs.core.chunk_rest(seq__32977__$1);
var G__33175 = c__5525__auto__;
var G__33176 = cljs.core.count(c__5525__auto__);
var G__33177 = (0);
seq__32977 = G__33174;
chunk__32979 = G__33175;
count__32980 = G__33176;
i__32981 = G__33177;
continue;
} else {
var map__32999 = cljs.core.first(seq__32977__$1);
var map__32999__$1 = cljs.core.__destructure_map(map__32999);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__33178 = cljs.core.next(seq__32977__$1);
var G__33179 = null;
var G__33180 = (0);
var G__33181 = (0);
seq__32977 = G__33178;
chunk__32979 = G__33179;
count__32980 = G__33180;
i__32981 = G__33181;
continue;
} else {
var G__33182 = cljs.core.next(seq__32977__$1);
var G__33183 = null;
var G__33184 = (0);
var G__33185 = (0);
seq__32977 = G__33182;
chunk__32979 = G__33183;
count__32980 = G__33184;
i__32981 = G__33185;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
