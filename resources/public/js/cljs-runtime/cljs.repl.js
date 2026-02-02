goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39929){
var map__39933 = p__39929;
var map__39933__$1 = cljs.core.__destructure_map(map__39933);
var m = map__39933__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39955_40731 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39956_40732 = null;
var count__39957_40733 = (0);
var i__39958_40734 = (0);
while(true){
if((i__39958_40734 < count__39957_40733)){
var f_40735 = chunk__39956_40732.cljs$core$IIndexed$_nth$arity$2(null, i__39958_40734);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40735], 0));


var G__40736 = seq__39955_40731;
var G__40737 = chunk__39956_40732;
var G__40738 = count__39957_40733;
var G__40739 = (i__39958_40734 + (1));
seq__39955_40731 = G__40736;
chunk__39956_40732 = G__40737;
count__39957_40733 = G__40738;
i__39958_40734 = G__40739;
continue;
} else {
var temp__5823__auto___40740 = cljs.core.seq(seq__39955_40731);
if(temp__5823__auto___40740){
var seq__39955_40741__$1 = temp__5823__auto___40740;
if(cljs.core.chunked_seq_QMARK_(seq__39955_40741__$1)){
var c__5525__auto___40742 = cljs.core.chunk_first(seq__39955_40741__$1);
var G__40743 = cljs.core.chunk_rest(seq__39955_40741__$1);
var G__40744 = c__5525__auto___40742;
var G__40745 = cljs.core.count(c__5525__auto___40742);
var G__40746 = (0);
seq__39955_40731 = G__40743;
chunk__39956_40732 = G__40744;
count__39957_40733 = G__40745;
i__39958_40734 = G__40746;
continue;
} else {
var f_40748 = cljs.core.first(seq__39955_40741__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40748], 0));


var G__40749 = cljs.core.next(seq__39955_40741__$1);
var G__40750 = null;
var G__40751 = (0);
var G__40752 = (0);
seq__39955_40731 = G__40749;
chunk__39956_40732 = G__40750;
count__39957_40733 = G__40751;
i__39958_40734 = G__40752;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40754 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40754], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40754)))?cljs.core.second(arglists_40754):arglists_40754)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40014_40807 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40015_40808 = null;
var count__40016_40809 = (0);
var i__40017_40810 = (0);
while(true){
if((i__40017_40810 < count__40016_40809)){
var vec__40087_40817 = chunk__40015_40808.cljs$core$IIndexed$_nth$arity$2(null, i__40017_40810);
var name_40818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40087_40817,(0),null);
var map__40090_40819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40087_40817,(1),null);
var map__40090_40820__$1 = cljs.core.__destructure_map(map__40090_40819);
var doc_40821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40090_40820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40090_40820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40818], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40822], 0));

if(cljs.core.truth_(doc_40821)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40821], 0));
} else {
}


var G__40829 = seq__40014_40807;
var G__40830 = chunk__40015_40808;
var G__40831 = count__40016_40809;
var G__40832 = (i__40017_40810 + (1));
seq__40014_40807 = G__40829;
chunk__40015_40808 = G__40830;
count__40016_40809 = G__40831;
i__40017_40810 = G__40832;
continue;
} else {
var temp__5823__auto___40835 = cljs.core.seq(seq__40014_40807);
if(temp__5823__auto___40835){
var seq__40014_40839__$1 = temp__5823__auto___40835;
if(cljs.core.chunked_seq_QMARK_(seq__40014_40839__$1)){
var c__5525__auto___40843 = cljs.core.chunk_first(seq__40014_40839__$1);
var G__40846 = cljs.core.chunk_rest(seq__40014_40839__$1);
var G__40847 = c__5525__auto___40843;
var G__40848 = cljs.core.count(c__5525__auto___40843);
var G__40849 = (0);
seq__40014_40807 = G__40846;
chunk__40015_40808 = G__40847;
count__40016_40809 = G__40848;
i__40017_40810 = G__40849;
continue;
} else {
var vec__40150_40850 = cljs.core.first(seq__40014_40839__$1);
var name_40851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40150_40850,(0),null);
var map__40153_40853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40150_40850,(1),null);
var map__40153_40854__$1 = cljs.core.__destructure_map(map__40153_40853);
var doc_40855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153_40854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153_40854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40851], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40856], 0));

if(cljs.core.truth_(doc_40855)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40855], 0));
} else {
}


var G__40860 = cljs.core.next(seq__40014_40839__$1);
var G__40861 = null;
var G__40862 = (0);
var G__40863 = (0);
seq__40014_40807 = G__40860;
chunk__40015_40808 = G__40861;
count__40016_40809 = G__40862;
i__40017_40810 = G__40863;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40234 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40235 = null;
var count__40236 = (0);
var i__40237 = (0);
while(true){
if((i__40237 < count__40236)){
var role = chunk__40235.cljs$core$IIndexed$_nth$arity$2(null, i__40237);
var temp__5823__auto___40873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___40873__$1)){
var spec_40877 = temp__5823__auto___40873__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40877)], 0));
} else {
}


var G__40878 = seq__40234;
var G__40879 = chunk__40235;
var G__40880 = count__40236;
var G__40881 = (i__40237 + (1));
seq__40234 = G__40878;
chunk__40235 = G__40879;
count__40236 = G__40880;
i__40237 = G__40881;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__40234);
if(temp__5823__auto____$1){
var seq__40234__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40234__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40234__$1);
var G__40884 = cljs.core.chunk_rest(seq__40234__$1);
var G__40885 = c__5525__auto__;
var G__40886 = cljs.core.count(c__5525__auto__);
var G__40887 = (0);
seq__40234 = G__40884;
chunk__40235 = G__40885;
count__40236 = G__40886;
i__40237 = G__40887;
continue;
} else {
var role = cljs.core.first(seq__40234__$1);
var temp__5823__auto___40889__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___40889__$2)){
var spec_40890 = temp__5823__auto___40889__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40890)], 0));
} else {
}


var G__40891 = cljs.core.next(seq__40234__$1);
var G__40892 = null;
var G__40893 = (0);
var G__40894 = (0);
seq__40234 = G__40891;
chunk__40235 = G__40892;
count__40236 = G__40893;
i__40237 = G__40894;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40360 = datafied_throwable;
var map__40360__$1 = cljs.core.__destructure_map(map__40360);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40360__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40362 = cljs.core.last(via);
var map__40362__$1 = cljs.core.__destructure_map(map__40362);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40363 = data;
var map__40363__$1 = cljs.core.__destructure_map(map__40363);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40363__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40363__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40363__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40364 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40364__$1 = cljs.core.__destructure_map(map__40364);
var top_data = map__40364__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40375 = phase;
var G__40375__$1 = (((G__40375 instanceof cljs.core.Keyword))?G__40375.fqn:null);
switch (G__40375__$1) {
case "read-source":
var map__40387 = data;
var map__40387__$1 = cljs.core.__destructure_map(map__40387);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40388 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40388__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40388,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40388);
var G__40388__$2 = (cljs.core.truth_((function (){var fexpr__40389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40389.cljs$core$IFn$_invoke$arity$1 ? fexpr__40389.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40389.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40388__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40388__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40388__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40393 = top_data;
var G__40393__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40393,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40393);
var G__40393__$2 = (cljs.core.truth_((function (){var fexpr__40397 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40397.cljs$core$IFn$_invoke$arity$1 ? fexpr__40397.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40397.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40393__$1);
var G__40393__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40393__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40393__$2);
var G__40393__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40393__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40393__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40393__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40393__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40408 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(3),null);
var G__40411 = top_data;
var G__40411__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40411);
var G__40411__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40411__$1);
var G__40411__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40411__$2);
var G__40411__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40411__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40411__$4;
}

break;
case "execution":
var vec__40422 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40346_SHARP_){
var or__5002__auto__ = (p1__40346_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__40450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40450.cljs$core$IFn$_invoke$arity$1 ? fexpr__40450.cljs$core$IFn$_invoke$arity$1(p1__40346_SHARP_) : fexpr__40450.call(null, p1__40346_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__40452 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40452__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40452,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40452);
var G__40452__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40452__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40452__$1);
var G__40452__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40452__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40452__$2);
var G__40452__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40452__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40452__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40452__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40452__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40375__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40500){
var map__40528 = p__40500;
var map__40528__$1 = cljs.core.__destructure_map(map__40528);
var triage_data = map__40528__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40528__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40587 = phase;
var G__40587__$1 = (((G__40587 instanceof cljs.core.Keyword))?G__40587.fqn:null);
switch (G__40587__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40612 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40613 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40614 = loc;
var G__40615 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40625_40972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40626_40973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40627_40974 = true;
var _STAR_print_fn_STAR__temp_val__40628_40975 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40627_40974);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40628_40975);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40488_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40488_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40626_40973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40625_40972);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40612,G__40613,G__40614,G__40615) : format.call(null, G__40612,G__40613,G__40614,G__40615));

break;
case "macroexpansion":
var G__40654 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40655 = cause_type;
var G__40656 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40657 = loc;
var G__40658 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40654,G__40655,G__40656,G__40657,G__40658) : format.call(null, G__40654,G__40655,G__40656,G__40657,G__40658));

break;
case "compile-syntax-check":
var G__40661 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40662 = cause_type;
var G__40663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40664 = loc;
var G__40665 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40661,G__40662,G__40663,G__40664,G__40665) : format.call(null, G__40661,G__40662,G__40663,G__40664,G__40665));

break;
case "compilation":
var G__40671 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40672 = cause_type;
var G__40673 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40674 = loc;
var G__40675 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40671,G__40672,G__40673,G__40674,G__40675) : format.call(null, G__40671,G__40672,G__40673,G__40674,G__40675));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40677 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40678 = symbol;
var G__40679 = loc;
var G__40680 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40681_40986 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40682_40987 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40683_40988 = true;
var _STAR_print_fn_STAR__temp_val__40684_40989 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40683_40988);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40684_40989);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40489_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40489_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40682_40987);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40681_40986);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40677,G__40678,G__40679,G__40680) : format.call(null, G__40677,G__40678,G__40679,G__40680));
} else {
var G__40703 = "Execution error%s at %s(%s).\n%s\n";
var G__40704 = cause_type;
var G__40705 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40706 = loc;
var G__40707 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40703,G__40704,G__40705,G__40706,G__40707) : format.call(null, G__40703,G__40704,G__40705,G__40706,G__40707));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40587__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
