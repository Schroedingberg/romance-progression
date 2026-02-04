goog.provide('rp.util');
/**
 * Like merge-with but preserves key order from the second map.
 */
rp.util.ordered_merge_with = (function rp$util$ordered_merge_with(f,m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,k);
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(cljs.core.truth_((function (){var and__5000__auto__ = v1;
if(cljs.core.truth_(and__5000__auto__)){
return v2;
} else {
return and__5000__auto__;
}
})())?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null, v1,v2)):(cljs.core.truth_(v1)?v1:v2
)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(m2),cljs.core.keys(m1))));
});
/**
 * Recursively merge maps, applying f only at leaf nodes.
 *   Preserves key order from the second (plan) map.
 */
rp.util.deep_merge_with = (function rp$util$deep_merge_with(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49684 = arguments.length;
var i__5727__auto___49685 = (0);
while(true){
if((i__5727__auto___49685 < len__5726__auto___49684)){
args__5732__auto__.push((arguments[i__5727__auto___49685]));

var G__49686 = (i__5727__auto___49685 + (1));
i__5727__auto___49685 = G__49686;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return rp.util.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(rp.util.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var rp$util$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rp.util.ordered_merge_with,rp$util$m),maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var rp$util$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__49691__i = 0, G__49691__a = new Array(arguments.length -  0);
while (G__49691__i < G__49691__a.length) {G__49691__a[G__49691__i] = arguments[G__49691__i + 0]; ++G__49691__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__49691__a,0,null);
} 
return rp$util$m__delegate.call(this,maps__$1);};
rp$util$m.cljs$lang$maxFixedArity = 0;
rp$util$m.cljs$lang$applyTo = (function (arglist__49692){
var maps__$1 = cljs.core.seq(arglist__49692);
return rp$util$m__delegate(maps__$1);
});
rp$util$m.cljs$core$IFn$_invoke$arity$variadic = rp$util$m__delegate;
return rp$util$m;
})()
,maps);
}));

(rp.util.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rp.util.deep_merge_with.cljs$lang$applyTo = (function (seq49673){
var G__49674 = cljs.core.first(seq49673);
var seq49673__$1 = cljs.core.next(seq49673);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49674,seq49673__$1);
}));


//# sourceMappingURL=rp.util.js.map
