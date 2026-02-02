goog.provide('rp.state');
/**
 * Transform flat events into nested plan structure.
 *   
 *   Input:  [{:mesocycle "X" :microcycle 0 :workout :monday :exercise "Squat" :set-index 0 ...}]
 *   Output: {"X" {0 {:monday {"Squat" [{event} nil nil ...]}}}}
 */
rp.state.events__GT_plan_map = (function rp$state$events__GT_plan_map(events){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49697){
var map__49698 = p__49697;
var map__49698__$1 = cljs.core.__destructure_map(map__49698);
var event = map__49698__$1;
var mesocycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"mesocycle","mesocycle",-963467818));
var microcycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"microcycle","microcycle",230058657));
var workout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"workout","workout",280057936));
var exercise = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"exercise","exercise",-801618741));
var set_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"set-index","set-index",797648137));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mesocycle,microcycle,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(workout),exercise], null),(function (sets){
var sets__$1 = (function (){var or__5002__auto__ = sets;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var padded = cljs.core.into.cljs$core$IFn$_invoke$arity$2(sets__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = ((set_index + (1)) - cljs.core.count(sets__$1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(padded,set_index,event);
}));
}),cljs.core.PersistentArrayMap.EMPTY,events);
});
/**
 * Merge two vectors of sets, combining planned and performed data.
 */
rp.state.merge_sets = (function rp$state$merge_sets(performed,planned){
var n = (function (){var x__5087__auto__ = cljs.core.count(performed);
var y__5088__auto__ = cljs.core.count(planned);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49702_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$3(planned,p1__49702_SHARP_,cljs.core.PersistentArrayMap.EMPTY),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(performed,p1__49702_SHARP_,cljs.core.PersistentArrayMap.EMPTY)], 0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Merge event log with plan to show progress.
 *   
 *   Returns the plan structure with performed data merged in:
 *   - `:performed-weight`, `:performed-reps` when a set is logged
 *   - `:exercise-name`, `:muscle-groups` etc from the plan
 */
rp.state.view_progress_in_plan = (function rp$state$view_progress_in_plan(events,plan){
return rp.util.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic(rp.state.merge_sets,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rp.state.events__GT_plan_map(events),plan], 0));
});

//# sourceMappingURL=rp.state.js.map
