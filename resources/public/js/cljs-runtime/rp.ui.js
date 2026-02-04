goog.provide('rp.ui');
/**
 * A single set with weight/reps inputs.
 */
rp.ui.set_row = (function rp$ui$set_row(mesocycle,microcycle,workout,exercise,set_index,set_data){
var weight = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var reps = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (mesocycle__$1,microcycle__$1,workout__$1,exercise__$1,set_index__$1,set_data__$1){
var map__49706 = set_data__$1;
var map__49706__$1 = cljs.core.__destructure_map(map__49706);
var performed_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"performed-weight","performed-weight",-700084459));
var performed_reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"performed-reps","performed-reps",1973912284));
var prescribed_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"prescribed-weight","prescribed-weight",-1310149054));
var prescribed_reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"prescribed-reps","prescribed-reps",1505638857));
var completed_QMARK_ = (!((performed_weight == null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(prescribed_weight)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prescribed_weight)," kg"].join(''):"kg"),new cljs.core.Keyword(null,"value","value",305978217),((completed_QMARK_)?performed_weight:cljs.core.deref(weight)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49703_SHARP_){
return cljs.core.reset_BANG_(weight,p1__49703_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5rem"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(prescribed_reps)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(prescribed_reps):"reps"),new cljs.core.Keyword(null,"value","value",305978217),((completed_QMARK_)?performed_reps:cljs.core.deref(reps)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49704_SHARP_){
return cljs.core.reset_BANG_(reps,p1__49704_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
if(((cljs.core.seq(cljs.core.deref(weight))) && (cljs.core.seq(cljs.core.deref(reps))))){
return rp.db.log_set_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"microcycle","microcycle",230058657),new cljs.core.Keyword(null,"prescribed-weight","prescribed-weight",-1310149054),new cljs.core.Keyword(null,"reps","reps",1391310856),new cljs.core.Keyword(null,"set-index","set-index",797648137),new cljs.core.Keyword(null,"prescribed-reps","prescribed-reps",1505638857),new cljs.core.Keyword(null,"exercise","exercise",-801618741),new cljs.core.Keyword(null,"workout","workout",280057936),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"mesocycle","mesocycle",-963467818)],[microcycle__$1,prescribed_weight,parseInt(cljs.core.deref(reps)),set_index__$1,prescribed_reps,exercise__$1,workout__$1,parseFloat(cljs.core.deref(weight)),mesocycle__$1]));
} else {
return null;
}
})], null)], null),((completed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2713"], null):null)], null);
});
});
/**
 * An exercise with its sets.
 */
rp.ui.exercise_card = (function rp$ui$exercise_card(mesocycle,microcycle,workout_key,exercise_name,sets){
var muscle_groups = cljs.core.some(new cljs.core.Keyword(null,"muscle-groups","muscle-groups",1334525798),sets);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),exercise_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),exercise_name,(cljs.core.truth_(muscle_groups)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),"var(--pico-muted-color)"], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,muscle_groups))], null):null)], null),(function (){var iter__5480__auto__ = (function rp$ui$exercise_card_$_iter__49708(s__49709){
return (new cljs.core.LazySeq(null,(function (){
var s__49709__$1 = s__49709;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49709__$1);
if(temp__5823__auto__){
var s__49709__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49709__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49709__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49711 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49710 = (0);
while(true){
if((i__49710 < size__5479__auto__)){
var vec__49712 = cljs.core._nth(c__5478__auto__,i__49710);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(0),null);
var set_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(1),null);
cljs.core.chunk_append(b__49711,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.set_row,mesocycle,microcycle,workout_key,exercise_name,idx,set_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__49748 = (i__49710 + (1));
i__49710 = G__49748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49711),rp$ui$exercise_card_$_iter__49708(cljs.core.chunk_rest(s__49709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49711),null);
}
} else {
var vec__49715 = cljs.core.first(s__49709__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49715,(0),null);
var set_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49715,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.set_row,mesocycle,microcycle,workout_key,exercise_name,idx,set_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),rp$ui$exercise_card_$_iter__49708(cljs.core.rest(s__49709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,sets));
})()], null);
});
/**
 * A workout day with its exercises.
 */
rp.ui.workout_section = (function rp$ui$workout_section(mesocycle,microcycle,workout_key,exercises_map){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(workout_key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),clojure.string.capitalize(cljs.core.name(workout_key))], null),(function (){var iter__5480__auto__ = (function rp$ui$workout_section_$_iter__49718(s__49719){
return (new cljs.core.LazySeq(null,(function (){
var s__49719__$1 = s__49719;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49719__$1);
if(temp__5823__auto__){
var s__49719__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49719__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49719__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49721 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49720 = (0);
while(true){
if((i__49720 < size__5479__auto__)){
var vec__49722 = cljs.core._nth(c__5478__auto__,i__49720);
var exercise_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49722,(0),null);
var sets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49722,(1),null);
cljs.core.chunk_append(b__49721,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.exercise_card,mesocycle,microcycle,workout_key,exercise_name,sets], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),exercise_name], null)));

var G__49749 = (i__49720 + (1));
i__49720 = G__49749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49721),rp$ui$workout_section_$_iter__49718(cljs.core.chunk_rest(s__49719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49721),null);
}
} else {
var vec__49725 = cljs.core.first(s__49719__$2);
var exercise_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49725,(0),null);
var sets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49725,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.exercise_card,mesocycle,microcycle,workout_key,exercise_name,sets], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),exercise_name], null)),rp$ui$workout_section_$_iter__49718(cljs.core.rest(s__49719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(exercises_map);
})()], null);
});
/**
 * A week with its workouts.
 */
rp.ui.microcycle_section = (function rp$ui$microcycle_section(mesocycle_name,microcycle_idx,workouts_map){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),microcycle_idx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Week ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((microcycle_idx + (1)))].join('')], null),(function (){var iter__5480__auto__ = (function rp$ui$microcycle_section_$_iter__49728(s__49729){
return (new cljs.core.LazySeq(null,(function (){
var s__49729__$1 = s__49729;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49729__$1);
if(temp__5823__auto__){
var s__49729__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49729__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49729__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49731 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49730 = (0);
while(true){
if((i__49730 < size__5479__auto__)){
var vec__49732 = cljs.core._nth(c__5478__auto__,i__49730);
var workout_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(0),null);
var exercises_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(1),null);
cljs.core.chunk_append(b__49731,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.workout_section,mesocycle_name,microcycle_idx,workout_key,exercises_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),workout_key], null)));

var G__49750 = (i__49730 + (1));
i__49730 = G__49750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49731),rp$ui$microcycle_section_$_iter__49728(cljs.core.chunk_rest(s__49729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49731),null);
}
} else {
var vec__49735 = cljs.core.first(s__49729__$2);
var workout_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49735,(0),null);
var exercises_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49735,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.workout_section,mesocycle_name,microcycle_idx,workout_key,exercises_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),workout_key], null)),rp$ui$microcycle_section_$_iter__49728(cljs.core.rest(s__49729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(workouts_map);
})()], null);
});
/**
 * Main app component - renders the full workout plan with progress.
 */
rp.ui.app = (function rp$ui$app(){
var events = rp.db.get_all_events();
var plan = rp.plan.get_plan();
var plan_name = rp.plan.get_plan_name();
var progress = rp.state.view_progress_in_plan(events,plan);
var mesocycle_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(progress,plan_name);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),plan_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Track your workout progression"], null)], null),(function (){var iter__5480__auto__ = (function rp$ui$app_$_iter__49738(s__49739){
return (new cljs.core.LazySeq(null,(function (){
var s__49739__$1 = s__49739;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49739__$1);
if(temp__5823__auto__){
var s__49739__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49739__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49739__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49741 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49740 = (0);
while(true){
if((i__49740 < size__5479__auto__)){
var vec__49742 = cljs.core._nth(c__5478__auto__,i__49740);
var microcycle_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49742,(0),null);
var workouts_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49742,(1),null);
cljs.core.chunk_append(b__49741,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.microcycle_section,plan_name,microcycle_idx,workouts_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),microcycle_idx], null)));

var G__49751 = (i__49740 + (1));
i__49740 = G__49751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49741),rp$ui$app_$_iter__49738(cljs.core.chunk_rest(s__49739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49741),null);
}
} else {
var vec__49745 = cljs.core.first(s__49739__$2);
var microcycle_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(0),null);
var workouts_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.microcycle_section,plan_name,microcycle_idx,workouts_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),microcycle_idx], null)),rp$ui$app_$_iter__49738(cljs.core.rest(s__49739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,mesocycle_data));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"Romance Progression \u2022 Local-first PWA"], null)], null)], null);
});

//# sourceMappingURL=rp.ui.js.map
