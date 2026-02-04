goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44545,p__44546){
var map__44549 = p__44545;
var map__44549__$1 = cljs.core.__destructure_map(map__44549);
var svc = map__44549__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44549__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44549__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44549__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44550 = p__44546;
var map__44550__$1 = cljs.core.__destructure_map(map__44550);
var msg = map__44550__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44550__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44550__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44550__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44550__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44566,p__44567){
var map__44568 = p__44566;
var map__44568__$1 = cljs.core.__destructure_map(map__44568);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44568__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44569 = p__44567;
var map__44569__$1 = cljs.core.__destructure_map(map__44569);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44569__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44573,p__44574){
var map__44575 = p__44573;
var map__44575__$1 = cljs.core.__destructure_map(map__44575);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44575__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44575__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44576 = p__44574;
var map__44576__$1 = cljs.core.__destructure_map(map__44576);
var msg = map__44576__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44576__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44577,tid){
var map__44578 = p__44577;
var map__44578__$1 = cljs.core.__destructure_map(map__44578);
var svc = map__44578__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44578__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44594 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44595 = null;
var count__44596 = (0);
var i__44597 = (0);
while(true){
if((i__44597 < count__44596)){
var vec__44615 = chunk__44595.cljs$core$IIndexed$_nth$arity$2(null, i__44597);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44615,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44615,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44636 = seq__44594;
var G__44637 = chunk__44595;
var G__44638 = count__44596;
var G__44639 = (i__44597 + (1));
seq__44594 = G__44636;
chunk__44595 = G__44637;
count__44596 = G__44638;
i__44597 = G__44639;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44594);
if(temp__5823__auto__){
var seq__44594__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44594__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44594__$1);
var G__44640 = cljs.core.chunk_rest(seq__44594__$1);
var G__44641 = c__5525__auto__;
var G__44642 = cljs.core.count(c__5525__auto__);
var G__44643 = (0);
seq__44594 = G__44640;
chunk__44595 = G__44641;
count__44596 = G__44642;
i__44597 = G__44643;
continue;
} else {
var vec__44618 = cljs.core.first(seq__44594__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44618,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44618,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44646 = cljs.core.next(seq__44594__$1);
var G__44647 = null;
var G__44648 = (0);
var G__44649 = (0);
seq__44594 = G__44646;
chunk__44595 = G__44647;
count__44596 = G__44648;
i__44597 = G__44649;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44584_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44584_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44585_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44585_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44587_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44587_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44588_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44588_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44625){
var map__44626 = p__44625;
var map__44626__$1 = cljs.core.__destructure_map(map__44626);
var svc = map__44626__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
