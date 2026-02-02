goog.provide('rp.plan');
rp.plan.PLAN_KEY = "rp-plan-template";
rp.plan.default_template = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Twice a week upper body focus",new cljs.core.Keyword(null,"n-microcycles","n-microcycles",1899238572),(4),new cljs.core.Keyword(null,"workouts","workouts",1343445337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"monday","monday",-1107743655),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),new cljs.core.PersistentArrayMap(null, 8, ["Dumbbell Press (Incline)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chest","chest",2066810546)], null)], null),"Cable Triceps Pushdown (Bar)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triceps","triceps",2059824810)], null)], null),"Seated Cable Row",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012)], null)], null),"Lying Biceps Dumbbell Curl",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biceps","biceps",2022048286)], null)], null),"Barbell Upright Row",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shoulders","shoulders",-104480270)], null)], null),"Barbell Squat (High Bar)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quads","quads",1347497505)], null)], null),"Bodyweight Squat",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quads","quads",1347497505)], null)], null),"Back Raise",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hamstrings","hamstrings",-946177423)], null)], null)], null)], null),new cljs.core.Keyword(null,"thursday","thursday",1681780767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentHashMap.fromArrays(["Cable Flexion Row","Barbell Squat (High Bar)","Bodyweight Squat","Dumbbell Shoulder Press","Back Raise","Pulldown (Narrow Grip)","Barbell Curl (Narrow Grip)","Pushup (Deficit)","Cable Overhead Triceps Extension"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quads","quads",1347497505)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quads","quads",1347497505)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(4),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shoulders","shoulders",-104480270)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hamstrings","hamstrings",-946177423)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biceps","biceps",2022048286)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chest","chest",2066810546)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3),new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triceps","triceps",2059824810)], null)], null)])], null)], null)], null);
/**
 * Expand {:n-sets 3 ...} into a vector of 3 set maps.
 */
rp.plan.expand_exercises = (function rp$plan$expand_exercises(p__49680){
var map__49681 = p__49680;
var map__49681__$1 = cljs.core.__destructure_map(map__49681);
var exercises = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49681__$1,new cljs.core.Keyword(null,"exercises","exercises",-277203742));
return cljs.core.reduce_kv((function (m,name,p__49682){
var map__49683 = p__49682;
var map__49683__$1 = cljs.core.__destructure_map(map__49683);
var ex = map__49683__$1;
var n_sets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"n-sets","n-sets",58835223));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,name,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n_sets,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ex,new cljs.core.Keyword(null,"n-sets","n-sets",58835223)),new cljs.core.Keyword(null,"exercise-name","exercise-name",460159781),name))));
}),cljs.core.PersistentArrayMap.EMPTY,exercises);
});
/**
 * Expand a template into the full plan structure.
 */
rp.plan.__GT_plan = (function rp$plan$__GT_plan(p__49687){
var map__49688 = p__49687;
var map__49688__$1 = cljs.core.__destructure_map(map__49688);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var n_microcycles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"n-microcycles","n-microcycles",1899238572));
var workouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"workouts","workouts",1343445337));
var expanded = cljs.core.update_vals(workouts,rp.plan.expand_exercises);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_microcycles),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n_microcycles,expanded)))]);
});
if((typeof rp !== 'undefined') && (typeof rp.plan !== 'undefined') && (typeof rp.plan.template_atom !== 'undefined')){
} else {
rp.plan.template_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
rp.plan.load_template = (function rp$plan$load_template(){
var or__5002__auto__ = (function (){var G__49696 = localStorage.getItem(rp.plan.PLAN_KEY);
if((G__49696 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__49696);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return rp.plan.default_template;
}
});
rp.plan.get_template = (function rp$plan$get_template(){
if((cljs.core.deref(rp.plan.template_atom) == null)){
cljs.core.reset_BANG_(rp.plan.template_atom,rp.plan.load_template());
} else {
}

return cljs.core.deref(rp.plan.template_atom);
});
rp.plan.get_plan = (function rp$plan$get_plan(){
return rp.plan.__GT_plan(rp.plan.get_template());
});
rp.plan.get_plan_name = (function rp$plan$get_plan_name(){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rp.plan.get_template());
});

//# sourceMappingURL=rp.plan.js.map
