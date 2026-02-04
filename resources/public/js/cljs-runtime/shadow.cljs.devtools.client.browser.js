goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45526 = arguments.length;
var i__5727__auto___45527 = (0);
while(true){
if((i__5727__auto___45527 < len__5726__auto___45526)){
args__5732__auto__.push((arguments[i__5727__auto___45527]));

var G__45528 = (i__5727__auto___45527 + (1));
i__5727__auto___45527 = G__45528;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45085){
var G__45086 = cljs.core.first(seq45085);
var seq45085__$1 = cljs.core.next(seq45085);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45086,seq45085__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45098 = cljs.core.seq(sources);
var chunk__45099 = null;
var count__45100 = (0);
var i__45101 = (0);
while(true){
if((i__45101 < count__45100)){
var map__45108 = chunk__45099.cljs$core$IIndexed$_nth$arity$2(null, i__45101);
var map__45108__$1 = cljs.core.__destructure_map(map__45108);
var src = map__45108__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45112){var e_45532 = e45112;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45532);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45532.message)].join('')));
}

var G__45533 = seq__45098;
var G__45534 = chunk__45099;
var G__45535 = count__45100;
var G__45536 = (i__45101 + (1));
seq__45098 = G__45533;
chunk__45099 = G__45534;
count__45100 = G__45535;
i__45101 = G__45536;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45098);
if(temp__5823__auto__){
var seq__45098__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45098__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45098__$1);
var G__45537 = cljs.core.chunk_rest(seq__45098__$1);
var G__45538 = c__5525__auto__;
var G__45539 = cljs.core.count(c__5525__auto__);
var G__45540 = (0);
seq__45098 = G__45537;
chunk__45099 = G__45538;
count__45100 = G__45539;
i__45101 = G__45540;
continue;
} else {
var map__45113 = cljs.core.first(seq__45098__$1);
var map__45113__$1 = cljs.core.__destructure_map(map__45113);
var src = map__45113__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45113__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45113__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45113__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45113__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45114){var e_45541 = e45114;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45541);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45541.message)].join('')));
}

var G__45542 = cljs.core.next(seq__45098__$1);
var G__45543 = null;
var G__45544 = (0);
var G__45545 = (0);
seq__45098 = G__45542;
chunk__45099 = G__45543;
count__45100 = G__45544;
i__45101 = G__45545;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45121 = cljs.core.seq(js_requires);
var chunk__45122 = null;
var count__45123 = (0);
var i__45124 = (0);
while(true){
if((i__45124 < count__45123)){
var js_ns = chunk__45122.cljs$core$IIndexed$_nth$arity$2(null, i__45124);
var require_str_45546 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45546);


var G__45547 = seq__45121;
var G__45548 = chunk__45122;
var G__45549 = count__45123;
var G__45550 = (i__45124 + (1));
seq__45121 = G__45547;
chunk__45122 = G__45548;
count__45123 = G__45549;
i__45124 = G__45550;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45121);
if(temp__5823__auto__){
var seq__45121__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45121__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45121__$1);
var G__45551 = cljs.core.chunk_rest(seq__45121__$1);
var G__45552 = c__5525__auto__;
var G__45553 = cljs.core.count(c__5525__auto__);
var G__45554 = (0);
seq__45121 = G__45551;
chunk__45122 = G__45552;
count__45123 = G__45553;
i__45124 = G__45554;
continue;
} else {
var js_ns = cljs.core.first(seq__45121__$1);
var require_str_45555 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45555);


var G__45556 = cljs.core.next(seq__45121__$1);
var G__45557 = null;
var G__45558 = (0);
var G__45559 = (0);
seq__45121 = G__45556;
chunk__45122 = G__45557;
count__45123 = G__45558;
i__45124 = G__45559;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45129){
var map__45130 = p__45129;
var map__45130__$1 = cljs.core.__destructure_map(map__45130);
var msg = map__45130__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45131(s__45132){
return (new cljs.core.LazySeq(null,(function (){
var s__45132__$1 = s__45132;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__45132__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__45137 = cljs.core.first(xs__6383__auto__);
var map__45137__$1 = cljs.core.__destructure_map(map__45137);
var src = map__45137__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45137__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__45132__$1,map__45137,map__45137__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45130,map__45130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45131_$_iter__45133(s__45134){
return (new cljs.core.LazySeq(null,((function (s__45132__$1,map__45137,map__45137__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45130,map__45130__$1,msg,info,reload_info){
return (function (){
var s__45134__$1 = s__45134;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__45134__$1);
if(temp__5823__auto____$1){
var s__45134__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45134__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__45134__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__45136 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__45135 = (0);
while(true){
if((i__45135 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__45135);
cljs.core.chunk_append(b__45136,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45561 = (i__45135 + (1));
i__45135 = G__45561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45136),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45131_$_iter__45133(cljs.core.chunk_rest(s__45134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45136),null);
}
} else {
var warning = cljs.core.first(s__45134__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45131_$_iter__45133(cljs.core.rest(s__45134__$2)));
}
} else {
return null;
}
break;
}
});})(s__45132__$1,map__45137,map__45137__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45130,map__45130__$1,msg,info,reload_info))
,null,null));
});})(s__45132__$1,map__45137,map__45137__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45130,map__45130__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45131(cljs.core.rest(s__45132__$1)));
} else {
var G__45562 = cljs.core.rest(s__45132__$1);
s__45132__$1 = G__45562;
continue;
}
} else {
var G__45563 = cljs.core.rest(s__45132__$1);
s__45132__$1 = G__45563;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45144_45564 = cljs.core.seq(warnings);
var chunk__45145_45565 = null;
var count__45146_45566 = (0);
var i__45147_45567 = (0);
while(true){
if((i__45147_45567 < count__45146_45566)){
var map__45150_45568 = chunk__45145_45565.cljs$core$IIndexed$_nth$arity$2(null, i__45147_45567);
var map__45150_45569__$1 = cljs.core.__destructure_map(map__45150_45568);
var w_45570 = map__45150_45569__$1;
var msg_45571__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45150_45569__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45150_45569__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45150_45569__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45150_45569__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45574)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45572),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45573),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45571__$1)].join(''));


var G__45575 = seq__45144_45564;
var G__45576 = chunk__45145_45565;
var G__45577 = count__45146_45566;
var G__45578 = (i__45147_45567 + (1));
seq__45144_45564 = G__45575;
chunk__45145_45565 = G__45576;
count__45146_45566 = G__45577;
i__45147_45567 = G__45578;
continue;
} else {
var temp__5823__auto___45579 = cljs.core.seq(seq__45144_45564);
if(temp__5823__auto___45579){
var seq__45144_45580__$1 = temp__5823__auto___45579;
if(cljs.core.chunked_seq_QMARK_(seq__45144_45580__$1)){
var c__5525__auto___45581 = cljs.core.chunk_first(seq__45144_45580__$1);
var G__45582 = cljs.core.chunk_rest(seq__45144_45580__$1);
var G__45583 = c__5525__auto___45581;
var G__45584 = cljs.core.count(c__5525__auto___45581);
var G__45585 = (0);
seq__45144_45564 = G__45582;
chunk__45145_45565 = G__45583;
count__45146_45566 = G__45584;
i__45147_45567 = G__45585;
continue;
} else {
var map__45151_45586 = cljs.core.first(seq__45144_45580__$1);
var map__45151_45587__$1 = cljs.core.__destructure_map(map__45151_45586);
var w_45588 = map__45151_45587__$1;
var msg_45589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45151_45587__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45151_45587__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45151_45587__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45151_45587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45592)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45590),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45591),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45589__$1)].join(''));


var G__45593 = cljs.core.next(seq__45144_45580__$1);
var G__45594 = null;
var G__45595 = (0);
var G__45596 = (0);
seq__45144_45564 = G__45593;
chunk__45145_45565 = G__45594;
count__45146_45566 = G__45595;
i__45147_45567 = G__45596;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45128_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45128_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45161){
var map__45162 = p__45161;
var map__45162__$1 = cljs.core.__destructure_map(map__45162);
var msg = map__45162__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45162__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45162__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45163 = cljs.core.seq(updates);
var chunk__45165 = null;
var count__45166 = (0);
var i__45167 = (0);
while(true){
if((i__45167 < count__45166)){
var path = chunk__45165.cljs$core$IIndexed$_nth$arity$2(null, i__45167);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45303_45598 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45307_45599 = null;
var count__45308_45600 = (0);
var i__45309_45601 = (0);
while(true){
if((i__45309_45601 < count__45308_45600)){
var node_45602 = chunk__45307_45599.cljs$core$IIndexed$_nth$arity$2(null, i__45309_45601);
if(cljs.core.not(node_45602.shadow$old)){
var path_match_45603 = shadow.cljs.devtools.client.browser.match_paths(node_45602.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45603)){
var new_link_45604 = (function (){var G__45338 = node_45602.cloneNode(true);
G__45338.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45603),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45338;
})();
(node_45602.shadow$old = true);

(new_link_45604.onload = ((function (seq__45303_45598,chunk__45307_45599,count__45308_45600,i__45309_45601,seq__45163,chunk__45165,count__45166,i__45167,new_link_45604,path_match_45603,node_45602,path,map__45162,map__45162__$1,msg,updates,reload_info){
return (function (e){
var seq__45339_45605 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45341_45606 = null;
var count__45342_45607 = (0);
var i__45343_45608 = (0);
while(true){
if((i__45343_45608 < count__45342_45607)){
var map__45347_45609 = chunk__45341_45606.cljs$core$IIndexed$_nth$arity$2(null, i__45343_45608);
var map__45347_45610__$1 = cljs.core.__destructure_map(map__45347_45609);
var task_45611 = map__45347_45610__$1;
var fn_str_45612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45347_45610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45347_45610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45614 = goog.getObjectByName(fn_str_45612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45613)].join(''));

(fn_obj_45614.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45614.cljs$core$IFn$_invoke$arity$2(path,new_link_45604) : fn_obj_45614.call(null, path,new_link_45604));


var G__45615 = seq__45339_45605;
var G__45616 = chunk__45341_45606;
var G__45617 = count__45342_45607;
var G__45618 = (i__45343_45608 + (1));
seq__45339_45605 = G__45615;
chunk__45341_45606 = G__45616;
count__45342_45607 = G__45617;
i__45343_45608 = G__45618;
continue;
} else {
var temp__5823__auto___45620 = cljs.core.seq(seq__45339_45605);
if(temp__5823__auto___45620){
var seq__45339_45624__$1 = temp__5823__auto___45620;
if(cljs.core.chunked_seq_QMARK_(seq__45339_45624__$1)){
var c__5525__auto___45625 = cljs.core.chunk_first(seq__45339_45624__$1);
var G__45626 = cljs.core.chunk_rest(seq__45339_45624__$1);
var G__45627 = c__5525__auto___45625;
var G__45628 = cljs.core.count(c__5525__auto___45625);
var G__45629 = (0);
seq__45339_45605 = G__45626;
chunk__45341_45606 = G__45627;
count__45342_45607 = G__45628;
i__45343_45608 = G__45629;
continue;
} else {
var map__45352_45630 = cljs.core.first(seq__45339_45624__$1);
var map__45352_45631__$1 = cljs.core.__destructure_map(map__45352_45630);
var task_45632 = map__45352_45631__$1;
var fn_str_45633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45352_45631__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45352_45631__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45635 = goog.getObjectByName(fn_str_45633,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45634)].join(''));

(fn_obj_45635.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45635.cljs$core$IFn$_invoke$arity$2(path,new_link_45604) : fn_obj_45635.call(null, path,new_link_45604));


var G__45636 = cljs.core.next(seq__45339_45624__$1);
var G__45637 = null;
var G__45638 = (0);
var G__45639 = (0);
seq__45339_45605 = G__45636;
chunk__45341_45606 = G__45637;
count__45342_45607 = G__45638;
i__45343_45608 = G__45639;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45602);
});})(seq__45303_45598,chunk__45307_45599,count__45308_45600,i__45309_45601,seq__45163,chunk__45165,count__45166,i__45167,new_link_45604,path_match_45603,node_45602,path,map__45162,map__45162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45603], 0));

goog.dom.insertSiblingAfter(new_link_45604,node_45602);


var G__45640 = seq__45303_45598;
var G__45641 = chunk__45307_45599;
var G__45642 = count__45308_45600;
var G__45643 = (i__45309_45601 + (1));
seq__45303_45598 = G__45640;
chunk__45307_45599 = G__45641;
count__45308_45600 = G__45642;
i__45309_45601 = G__45643;
continue;
} else {
var G__45644 = seq__45303_45598;
var G__45645 = chunk__45307_45599;
var G__45646 = count__45308_45600;
var G__45647 = (i__45309_45601 + (1));
seq__45303_45598 = G__45644;
chunk__45307_45599 = G__45645;
count__45308_45600 = G__45646;
i__45309_45601 = G__45647;
continue;
}
} else {
var G__45648 = seq__45303_45598;
var G__45649 = chunk__45307_45599;
var G__45650 = count__45308_45600;
var G__45651 = (i__45309_45601 + (1));
seq__45303_45598 = G__45648;
chunk__45307_45599 = G__45649;
count__45308_45600 = G__45650;
i__45309_45601 = G__45651;
continue;
}
} else {
var temp__5823__auto___45652 = cljs.core.seq(seq__45303_45598);
if(temp__5823__auto___45652){
var seq__45303_45653__$1 = temp__5823__auto___45652;
if(cljs.core.chunked_seq_QMARK_(seq__45303_45653__$1)){
var c__5525__auto___45654 = cljs.core.chunk_first(seq__45303_45653__$1);
var G__45655 = cljs.core.chunk_rest(seq__45303_45653__$1);
var G__45656 = c__5525__auto___45654;
var G__45657 = cljs.core.count(c__5525__auto___45654);
var G__45658 = (0);
seq__45303_45598 = G__45655;
chunk__45307_45599 = G__45656;
count__45308_45600 = G__45657;
i__45309_45601 = G__45658;
continue;
} else {
var node_45659 = cljs.core.first(seq__45303_45653__$1);
if(cljs.core.not(node_45659.shadow$old)){
var path_match_45660 = shadow.cljs.devtools.client.browser.match_paths(node_45659.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45660)){
var new_link_45661 = (function (){var G__45371 = node_45659.cloneNode(true);
G__45371.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45660),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45371;
})();
(node_45659.shadow$old = true);

(new_link_45661.onload = ((function (seq__45303_45598,chunk__45307_45599,count__45308_45600,i__45309_45601,seq__45163,chunk__45165,count__45166,i__45167,new_link_45661,path_match_45660,node_45659,seq__45303_45653__$1,temp__5823__auto___45652,path,map__45162,map__45162__$1,msg,updates,reload_info){
return (function (e){
var seq__45380_45662 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45382_45663 = null;
var count__45383_45664 = (0);
var i__45384_45665 = (0);
while(true){
if((i__45384_45665 < count__45383_45664)){
var map__45388_45666 = chunk__45382_45663.cljs$core$IIndexed$_nth$arity$2(null, i__45384_45665);
var map__45388_45667__$1 = cljs.core.__destructure_map(map__45388_45666);
var task_45668 = map__45388_45667__$1;
var fn_str_45669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45388_45667__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45388_45667__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45671 = goog.getObjectByName(fn_str_45669,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45670)].join(''));

(fn_obj_45671.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45671.cljs$core$IFn$_invoke$arity$2(path,new_link_45661) : fn_obj_45671.call(null, path,new_link_45661));


var G__45672 = seq__45380_45662;
var G__45673 = chunk__45382_45663;
var G__45674 = count__45383_45664;
var G__45675 = (i__45384_45665 + (1));
seq__45380_45662 = G__45672;
chunk__45382_45663 = G__45673;
count__45383_45664 = G__45674;
i__45384_45665 = G__45675;
continue;
} else {
var temp__5823__auto___45676__$1 = cljs.core.seq(seq__45380_45662);
if(temp__5823__auto___45676__$1){
var seq__45380_45677__$1 = temp__5823__auto___45676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45380_45677__$1)){
var c__5525__auto___45678 = cljs.core.chunk_first(seq__45380_45677__$1);
var G__45679 = cljs.core.chunk_rest(seq__45380_45677__$1);
var G__45680 = c__5525__auto___45678;
var G__45681 = cljs.core.count(c__5525__auto___45678);
var G__45682 = (0);
seq__45380_45662 = G__45679;
chunk__45382_45663 = G__45680;
count__45383_45664 = G__45681;
i__45384_45665 = G__45682;
continue;
} else {
var map__45392_45683 = cljs.core.first(seq__45380_45677__$1);
var map__45392_45684__$1 = cljs.core.__destructure_map(map__45392_45683);
var task_45685 = map__45392_45684__$1;
var fn_str_45686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45392_45684__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45392_45684__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45688 = goog.getObjectByName(fn_str_45686,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45687)].join(''));

(fn_obj_45688.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45688.cljs$core$IFn$_invoke$arity$2(path,new_link_45661) : fn_obj_45688.call(null, path,new_link_45661));


var G__45689 = cljs.core.next(seq__45380_45677__$1);
var G__45690 = null;
var G__45691 = (0);
var G__45692 = (0);
seq__45380_45662 = G__45689;
chunk__45382_45663 = G__45690;
count__45383_45664 = G__45691;
i__45384_45665 = G__45692;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45659);
});})(seq__45303_45598,chunk__45307_45599,count__45308_45600,i__45309_45601,seq__45163,chunk__45165,count__45166,i__45167,new_link_45661,path_match_45660,node_45659,seq__45303_45653__$1,temp__5823__auto___45652,path,map__45162,map__45162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45660], 0));

goog.dom.insertSiblingAfter(new_link_45661,node_45659);


var G__45693 = cljs.core.next(seq__45303_45653__$1);
var G__45694 = null;
var G__45695 = (0);
var G__45696 = (0);
seq__45303_45598 = G__45693;
chunk__45307_45599 = G__45694;
count__45308_45600 = G__45695;
i__45309_45601 = G__45696;
continue;
} else {
var G__45697 = cljs.core.next(seq__45303_45653__$1);
var G__45698 = null;
var G__45699 = (0);
var G__45700 = (0);
seq__45303_45598 = G__45697;
chunk__45307_45599 = G__45698;
count__45308_45600 = G__45699;
i__45309_45601 = G__45700;
continue;
}
} else {
var G__45701 = cljs.core.next(seq__45303_45653__$1);
var G__45702 = null;
var G__45703 = (0);
var G__45704 = (0);
seq__45303_45598 = G__45701;
chunk__45307_45599 = G__45702;
count__45308_45600 = G__45703;
i__45309_45601 = G__45704;
continue;
}
}
} else {
}
}
break;
}


var G__45705 = seq__45163;
var G__45706 = chunk__45165;
var G__45707 = count__45166;
var G__45708 = (i__45167 + (1));
seq__45163 = G__45705;
chunk__45165 = G__45706;
count__45166 = G__45707;
i__45167 = G__45708;
continue;
} else {
var G__45709 = seq__45163;
var G__45710 = chunk__45165;
var G__45711 = count__45166;
var G__45712 = (i__45167 + (1));
seq__45163 = G__45709;
chunk__45165 = G__45710;
count__45166 = G__45711;
i__45167 = G__45712;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45163);
if(temp__5823__auto__){
var seq__45163__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45163__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45163__$1);
var G__45713 = cljs.core.chunk_rest(seq__45163__$1);
var G__45714 = c__5525__auto__;
var G__45715 = cljs.core.count(c__5525__auto__);
var G__45716 = (0);
seq__45163 = G__45713;
chunk__45165 = G__45714;
count__45166 = G__45715;
i__45167 = G__45716;
continue;
} else {
var path = cljs.core.first(seq__45163__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45395_45717 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45399_45718 = null;
var count__45400_45719 = (0);
var i__45401_45720 = (0);
while(true){
if((i__45401_45720 < count__45400_45719)){
var node_45721 = chunk__45399_45718.cljs$core$IIndexed$_nth$arity$2(null, i__45401_45720);
if(cljs.core.not(node_45721.shadow$old)){
var path_match_45722 = shadow.cljs.devtools.client.browser.match_paths(node_45721.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45722)){
var new_link_45723 = (function (){var G__45455 = node_45721.cloneNode(true);
G__45455.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45722),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45455;
})();
(node_45721.shadow$old = true);

(new_link_45723.onload = ((function (seq__45395_45717,chunk__45399_45718,count__45400_45719,i__45401_45720,seq__45163,chunk__45165,count__45166,i__45167,new_link_45723,path_match_45722,node_45721,path,seq__45163__$1,temp__5823__auto__,map__45162,map__45162__$1,msg,updates,reload_info){
return (function (e){
var seq__45456_45724 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45458_45725 = null;
var count__45459_45726 = (0);
var i__45460_45727 = (0);
while(true){
if((i__45460_45727 < count__45459_45726)){
var map__45477_45728 = chunk__45458_45725.cljs$core$IIndexed$_nth$arity$2(null, i__45460_45727);
var map__45477_45729__$1 = cljs.core.__destructure_map(map__45477_45728);
var task_45730 = map__45477_45729__$1;
var fn_str_45731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45477_45729__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45477_45729__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45733 = goog.getObjectByName(fn_str_45731,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45732)].join(''));

(fn_obj_45733.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45733.cljs$core$IFn$_invoke$arity$2(path,new_link_45723) : fn_obj_45733.call(null, path,new_link_45723));


var G__45734 = seq__45456_45724;
var G__45735 = chunk__45458_45725;
var G__45736 = count__45459_45726;
var G__45737 = (i__45460_45727 + (1));
seq__45456_45724 = G__45734;
chunk__45458_45725 = G__45735;
count__45459_45726 = G__45736;
i__45460_45727 = G__45737;
continue;
} else {
var temp__5823__auto___45738__$1 = cljs.core.seq(seq__45456_45724);
if(temp__5823__auto___45738__$1){
var seq__45456_45739__$1 = temp__5823__auto___45738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45456_45739__$1)){
var c__5525__auto___45740 = cljs.core.chunk_first(seq__45456_45739__$1);
var G__45741 = cljs.core.chunk_rest(seq__45456_45739__$1);
var G__45742 = c__5525__auto___45740;
var G__45743 = cljs.core.count(c__5525__auto___45740);
var G__45744 = (0);
seq__45456_45724 = G__45741;
chunk__45458_45725 = G__45742;
count__45459_45726 = G__45743;
i__45460_45727 = G__45744;
continue;
} else {
var map__45478_45748 = cljs.core.first(seq__45456_45739__$1);
var map__45478_45749__$1 = cljs.core.__destructure_map(map__45478_45748);
var task_45750 = map__45478_45749__$1;
var fn_str_45751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45478_45749__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45478_45749__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45753 = goog.getObjectByName(fn_str_45751,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45752)].join(''));

(fn_obj_45753.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45753.cljs$core$IFn$_invoke$arity$2(path,new_link_45723) : fn_obj_45753.call(null, path,new_link_45723));


var G__45754 = cljs.core.next(seq__45456_45739__$1);
var G__45755 = null;
var G__45756 = (0);
var G__45757 = (0);
seq__45456_45724 = G__45754;
chunk__45458_45725 = G__45755;
count__45459_45726 = G__45756;
i__45460_45727 = G__45757;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45721);
});})(seq__45395_45717,chunk__45399_45718,count__45400_45719,i__45401_45720,seq__45163,chunk__45165,count__45166,i__45167,new_link_45723,path_match_45722,node_45721,path,seq__45163__$1,temp__5823__auto__,map__45162,map__45162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45722], 0));

goog.dom.insertSiblingAfter(new_link_45723,node_45721);


var G__45758 = seq__45395_45717;
var G__45759 = chunk__45399_45718;
var G__45760 = count__45400_45719;
var G__45761 = (i__45401_45720 + (1));
seq__45395_45717 = G__45758;
chunk__45399_45718 = G__45759;
count__45400_45719 = G__45760;
i__45401_45720 = G__45761;
continue;
} else {
var G__45762 = seq__45395_45717;
var G__45763 = chunk__45399_45718;
var G__45764 = count__45400_45719;
var G__45765 = (i__45401_45720 + (1));
seq__45395_45717 = G__45762;
chunk__45399_45718 = G__45763;
count__45400_45719 = G__45764;
i__45401_45720 = G__45765;
continue;
}
} else {
var G__45766 = seq__45395_45717;
var G__45767 = chunk__45399_45718;
var G__45768 = count__45400_45719;
var G__45769 = (i__45401_45720 + (1));
seq__45395_45717 = G__45766;
chunk__45399_45718 = G__45767;
count__45400_45719 = G__45768;
i__45401_45720 = G__45769;
continue;
}
} else {
var temp__5823__auto___45770__$1 = cljs.core.seq(seq__45395_45717);
if(temp__5823__auto___45770__$1){
var seq__45395_45771__$1 = temp__5823__auto___45770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45395_45771__$1)){
var c__5525__auto___45772 = cljs.core.chunk_first(seq__45395_45771__$1);
var G__45773 = cljs.core.chunk_rest(seq__45395_45771__$1);
var G__45774 = c__5525__auto___45772;
var G__45775 = cljs.core.count(c__5525__auto___45772);
var G__45776 = (0);
seq__45395_45717 = G__45773;
chunk__45399_45718 = G__45774;
count__45400_45719 = G__45775;
i__45401_45720 = G__45776;
continue;
} else {
var node_45777 = cljs.core.first(seq__45395_45771__$1);
if(cljs.core.not(node_45777.shadow$old)){
var path_match_45778 = shadow.cljs.devtools.client.browser.match_paths(node_45777.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45778)){
var new_link_45782 = (function (){var G__45479 = node_45777.cloneNode(true);
G__45479.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45778),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45479;
})();
(node_45777.shadow$old = true);

(new_link_45782.onload = ((function (seq__45395_45717,chunk__45399_45718,count__45400_45719,i__45401_45720,seq__45163,chunk__45165,count__45166,i__45167,new_link_45782,path_match_45778,node_45777,seq__45395_45771__$1,temp__5823__auto___45770__$1,path,seq__45163__$1,temp__5823__auto__,map__45162,map__45162__$1,msg,updates,reload_info){
return (function (e){
var seq__45480_45783 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45482_45784 = null;
var count__45483_45785 = (0);
var i__45484_45786 = (0);
while(true){
if((i__45484_45786 < count__45483_45785)){
var map__45492_45787 = chunk__45482_45784.cljs$core$IIndexed$_nth$arity$2(null, i__45484_45786);
var map__45492_45788__$1 = cljs.core.__destructure_map(map__45492_45787);
var task_45789 = map__45492_45788__$1;
var fn_str_45790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492_45788__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492_45788__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45792 = goog.getObjectByName(fn_str_45790,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45791)].join(''));

(fn_obj_45792.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45792.cljs$core$IFn$_invoke$arity$2(path,new_link_45782) : fn_obj_45792.call(null, path,new_link_45782));


var G__45793 = seq__45480_45783;
var G__45794 = chunk__45482_45784;
var G__45795 = count__45483_45785;
var G__45796 = (i__45484_45786 + (1));
seq__45480_45783 = G__45793;
chunk__45482_45784 = G__45794;
count__45483_45785 = G__45795;
i__45484_45786 = G__45796;
continue;
} else {
var temp__5823__auto___45797__$2 = cljs.core.seq(seq__45480_45783);
if(temp__5823__auto___45797__$2){
var seq__45480_45798__$1 = temp__5823__auto___45797__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45480_45798__$1)){
var c__5525__auto___45799 = cljs.core.chunk_first(seq__45480_45798__$1);
var G__45800 = cljs.core.chunk_rest(seq__45480_45798__$1);
var G__45801 = c__5525__auto___45799;
var G__45802 = cljs.core.count(c__5525__auto___45799);
var G__45803 = (0);
seq__45480_45783 = G__45800;
chunk__45482_45784 = G__45801;
count__45483_45785 = G__45802;
i__45484_45786 = G__45803;
continue;
} else {
var map__45493_45804 = cljs.core.first(seq__45480_45798__$1);
var map__45493_45805__$1 = cljs.core.__destructure_map(map__45493_45804);
var task_45806 = map__45493_45805__$1;
var fn_str_45807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45493_45805__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45493_45805__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45812 = goog.getObjectByName(fn_str_45807,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45808)].join(''));

(fn_obj_45812.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45812.cljs$core$IFn$_invoke$arity$2(path,new_link_45782) : fn_obj_45812.call(null, path,new_link_45782));


var G__45813 = cljs.core.next(seq__45480_45798__$1);
var G__45814 = null;
var G__45815 = (0);
var G__45816 = (0);
seq__45480_45783 = G__45813;
chunk__45482_45784 = G__45814;
count__45483_45785 = G__45815;
i__45484_45786 = G__45816;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45777);
});})(seq__45395_45717,chunk__45399_45718,count__45400_45719,i__45401_45720,seq__45163,chunk__45165,count__45166,i__45167,new_link_45782,path_match_45778,node_45777,seq__45395_45771__$1,temp__5823__auto___45770__$1,path,seq__45163__$1,temp__5823__auto__,map__45162,map__45162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45778], 0));

goog.dom.insertSiblingAfter(new_link_45782,node_45777);


var G__45817 = cljs.core.next(seq__45395_45771__$1);
var G__45818 = null;
var G__45819 = (0);
var G__45820 = (0);
seq__45395_45717 = G__45817;
chunk__45399_45718 = G__45818;
count__45400_45719 = G__45819;
i__45401_45720 = G__45820;
continue;
} else {
var G__45821 = cljs.core.next(seq__45395_45771__$1);
var G__45822 = null;
var G__45823 = (0);
var G__45824 = (0);
seq__45395_45717 = G__45821;
chunk__45399_45718 = G__45822;
count__45400_45719 = G__45823;
i__45401_45720 = G__45824;
continue;
}
} else {
var G__45825 = cljs.core.next(seq__45395_45771__$1);
var G__45826 = null;
var G__45827 = (0);
var G__45828 = (0);
seq__45395_45717 = G__45825;
chunk__45399_45718 = G__45826;
count__45400_45719 = G__45827;
i__45401_45720 = G__45828;
continue;
}
}
} else {
}
}
break;
}


var G__45829 = cljs.core.next(seq__45163__$1);
var G__45830 = null;
var G__45831 = (0);
var G__45832 = (0);
seq__45163 = G__45829;
chunk__45165 = G__45830;
count__45166 = G__45831;
i__45167 = G__45832;
continue;
} else {
var G__45836 = cljs.core.next(seq__45163__$1);
var G__45837 = null;
var G__45838 = (0);
var G__45839 = (0);
seq__45163 = G__45836;
chunk__45165 = G__45837;
count__45166 = G__45838;
i__45167 = G__45839;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__45494){
var map__45495 = p__45494;
var map__45495__$1 = cljs.core.__destructure_map(map__45495);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45495__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45496,done,error){
var map__45497 = p__45496;
var map__45497__$1 = cljs.core.__destructure_map(map__45497);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45499,done,error){
var map__45501 = p__45499;
var map__45501__$1 = cljs.core.__destructure_map(map__45501);
var msg = map__45501__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45502){
var map__45503 = p__45502;
var map__45503__$1 = cljs.core.__destructure_map(map__45503);
var src = map__45503__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45503__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45504 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45504) : done.call(null, G__45504));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45505){
var map__45506 = p__45505;
var map__45506__$1 = cljs.core.__destructure_map(map__45506);
var msg__$1 = map__45506__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45506__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e45507){var ex = e45507;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45511){
var map__45512 = p__45511;
var map__45512__$1 = cljs.core.__destructure_map(map__45512);
var env = map__45512__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45522){
var map__45523 = p__45522;
var map__45523__$1 = cljs.core.__destructure_map(map__45523);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45524){
var map__45525 = p__45524;
var map__45525__$1 = cljs.core.__destructure_map(map__45525);
var svc = map__45525__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
