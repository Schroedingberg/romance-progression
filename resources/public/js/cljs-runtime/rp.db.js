goog.provide('rp.db');
rp.db.schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926),new cljs.core.Keyword("event","microcycle","event/microcycle",65781575),new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921),new cljs.core.Keyword("event","prescribed-reps","event/prescribed-reps",1065594799),new cljs.core.Keyword("event","prescribed-weight","event/prescribed-weight",130489296),new cljs.core.Keyword("event","timestamp","event/timestamp",-1672439471),new cljs.core.Keyword("event","exercise","event/exercise",-686440847),new cljs.core.Keyword("event","set-index","event/set-index",966873267),new cljs.core.Keyword("event","mesocycle","event/mesocycle",-877063244),new cljs.core.Keyword("event","workout","event/workout",230278710),new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword("event","id","event/id",-1282332774)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)]);
if((typeof rp !== 'undefined') && (typeof rp.db !== 'undefined') && (typeof rp.db.conn !== 'undefined')){
} else {
rp.db.conn = (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(rp.db.schema) : datascript.core.create_conn.call(null, rp.db.schema));
}
if((typeof rp !== 'undefined') && (typeof rp.db !== 'undefined') && (typeof rp.db.db_version !== 'undefined')){
} else {
rp.db.db_version = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
var G__49670_49699 = rp.db.conn;
var G__49671_49700 = new cljs.core.Keyword(null,"ui","ui",-469653645);
var G__49672_49701 = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rp.db.db_version,cljs.core.inc);
});
(datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 ? datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(G__49670_49699,G__49671_49700,G__49672_49701) : datascript.core.listen_BANG_.call(null, G__49670_49699,G__49671_49700,G__49672_49701));
/**
 * Log a completed set. Returns the transaction result.
 */
rp.db.log_set_BANG_ = (function rp$db$log_set_BANG_(p__49675){
var map__49676 = p__49675;
var map__49676__$1 = cljs.core.__destructure_map(map__49676);
var microcycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"microcycle","microcycle",230058657));
var prescribed_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"prescribed-weight","prescribed-weight",-1310149054));
var reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"reps","reps",1391310856));
var prescribed_reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"prescribed-reps","prescribed-reps",1505638857));
var set_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"set-index","set-index",797648137));
var exercise = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"exercise","exercise",-801618741));
var workout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"workout","workout",280057936));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var mesocycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword(null,"mesocycle","mesocycle",-963467818));
var G__49677 = rp.db.conn;
var G__49678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49679 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926),new cljs.core.Keyword("event","microcycle","event/microcycle",65781575),new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921),new cljs.core.Keyword("event","timestamp","event/timestamp",-1672439471),new cljs.core.Keyword("event","exercise","event/exercise",-686440847),new cljs.core.Keyword("event","set-index","event/set-index",966873267),new cljs.core.Keyword("event","mesocycle","event/mesocycle",-877063244),new cljs.core.Keyword("event","workout","event/workout",230278710),new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword("event","id","event/id",-1282332774)],[reps,microcycle,weight,Date.now(),exercise,set_index,mesocycle,workout,new cljs.core.Keyword(null,"set-completed","set-completed",1778641666),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())]);
var G__49679__$1 = (cljs.core.truth_(prescribed_weight)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49679,new cljs.core.Keyword("event","prescribed-weight","event/prescribed-weight",130489296),prescribed_weight):G__49679);
if(cljs.core.truth_(prescribed_reps)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49679__$1,new cljs.core.Keyword("event","prescribed-reps","event/prescribed-reps",1065594799),prescribed_reps);
} else {
return G__49679__$1;
}
})()], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__49677,G__49678) : datascript.core.transact_BANG_.call(null, G__49677,G__49678));
});
/**
 * Convert DataScript entity to domain event map.
 */
rp.db.entity__GT_event = (function rp$db$entity__GT_event(e){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"microcycle","microcycle",230058657),new cljs.core.Keyword(null,"prescribed-weight","prescribed-weight",-1310149054),new cljs.core.Keyword(null,"set-index","set-index",797648137),new cljs.core.Keyword(null,"prescribed-reps","prescribed-reps",1505638857),new cljs.core.Keyword(null,"exercise","exercise",-801618741),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"workout","workout",280057936),new cljs.core.Keyword(null,"performed-weight","performed-weight",-700084459),new cljs.core.Keyword(null,"mesocycle","mesocycle",-963467818),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"performed-reps","performed-reps",1973912284)],[new cljs.core.Keyword("event","microcycle","event/microcycle",65781575).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","prescribed-weight","event/prescribed-weight",130489296).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","set-index","event/set-index",966873267).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","prescribed-reps","event/prescribed-reps",1065594799).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","exercise","event/exercise",-686440847).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","type","event/type",1532247862).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","workout","event/workout",230278710).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","mesocycle","event/mesocycle",-877063244).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","timestamp","event/timestamp",-1672439471).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926).cljs$core$IFn$_invoke$arity$1(e)]);
});
/**
 * Get all logged events, sorted by timestamp.
 */
rp.db.get_all_events = (function rp$db$get_all_events(){
cljs.core.deref(rp.db.db_version);

return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rp.db.entity__GT_event,(function (){var G__49689 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","type","event/type",1532247862)], null)], null);
var G__49690 = cljs.core.deref(rp.db.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__49689,G__49690) : datascript.core.q.call(null, G__49689,G__49690));
})()));
});
rp.db.db__GT_edn = (function rp$db$db__GT_edn(){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__49693 = cljs.core.deref(rp.db.conn);
return (datascript.core.serializable.cljs$core$IFn$_invoke$arity$1 ? datascript.core.serializable.cljs$core$IFn$_invoke$arity$1(G__49693) : datascript.core.serializable.call(null, G__49693));
})()], 0));
});
rp.db.load_from_edn_BANG_ = (function rp$db$load_from_edn_BANG_(edn_str){
if(cljs.core.truth_(edn_str)){
return cljs.core.reset_BANG_(rp.db.conn,(function (){var G__49694 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(edn_str);
var G__49695 = rp.db.schema;
return (datascript.core.from_serializable.cljs$core$IFn$_invoke$arity$2 ? datascript.core.from_serializable.cljs$core$IFn$_invoke$arity$2(G__49694,G__49695) : datascript.core.from_serializable.call(null, G__49694,G__49695));
})());
} else {
return null;
}
});

//# sourceMappingURL=rp.db.js.map
