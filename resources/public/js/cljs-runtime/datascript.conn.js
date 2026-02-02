goog.provide('datascript.conn');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {extend_clj.core.IAtom3}
 * @implements {cljs.core.ILookup}
*/
datascript.conn.Conn = (function (atom,validator,watches,meta){
this.atom = atom;
this.validator = validator;
this.watches = watches;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 6455552;
});
(datascript.conn.Conn.prototype.equiv = (function (other__40502__auto__){
var self__ = this;
var this__40501__auto__ = this;
return this__40501__auto__.cljs$core$IEquiv$_equiv$arity$2(null, other__40502__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this__40501__auto__,oldv__40509__auto__,newv__40504__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
var seq__45872 = cljs.core.seq(self__.watches);
var chunk__45873 = null;
var count__45874 = (0);
var i__45875 = (0);
while(true){
if((i__45875 < count__45874)){
var vec__45894 = chunk__45873.cljs$core$IIndexed$_nth$arity$2(null, i__45875);
var k__40510__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45894,(0),null);
var f__40505__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45894,(1),null);
(f__40505__auto__.cljs$core$IFn$_invoke$arity$4 ? f__40505__auto__.cljs$core$IFn$_invoke$arity$4(k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__) : f__40505__auto__.call(null, k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__));


var G__46270 = seq__45872;
var G__46271 = chunk__45873;
var G__46272 = count__45874;
var G__46273 = (i__45875 + (1));
seq__45872 = G__46270;
chunk__45873 = G__46271;
count__45874 = G__46272;
i__45875 = G__46273;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45872);
if(temp__5823__auto__){
var seq__45872__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45872__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45872__$1);
var G__46275 = cljs.core.chunk_rest(seq__45872__$1);
var G__46276 = c__5525__auto__;
var G__46277 = cljs.core.count(c__5525__auto__);
var G__46278 = (0);
seq__45872 = G__46275;
chunk__45873 = G__46276;
count__45874 = G__46277;
i__45875 = G__46278;
continue;
} else {
var vec__45897 = cljs.core.first(seq__45872__$1);
var k__40510__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(0),null);
var f__40505__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(1),null);
(f__40505__auto__.cljs$core$IFn$_invoke$arity$4 ? f__40505__auto__.cljs$core$IFn$_invoke$arity$4(k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__) : f__40505__auto__.call(null, k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__));


var G__46279 = cljs.core.next(seq__45872__$1);
var G__46280 = null;
var G__46281 = (0);
var G__46282 = (0);
seq__45872 = G__46279;
chunk__45873 = G__46280;
count__45874 = G__46281;
i__45875 = G__46282;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this__40501__auto__,key__40511__auto__,f__40505__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
(this__40501__auto____$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__40511__auto__,f__40505__auto__));

return this__40501__auto____$1;
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this__40501__auto__,key__40511__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return (this__40501__auto____$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__40511__auto__));
}));

(datascript.conn.Conn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o__40503__auto__,other__40502__auto__){
var self__ = this;
var o__40503__auto____$1 = this;
return (o__40503__auto____$1 === other__40502__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__40501__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return goog.getUid(this__40501__auto____$1);
}));

(datascript.conn.Conn.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this__40501__auto__,newv__40504__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40501__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, cljs.core.constantly(newv__40504__auto__),cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this__40501__auto__,f__40505__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40501__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40505__auto__,cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this__40501__auto__,f__40505__auto__,a__40506__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40501__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40505__auto__,(new cljs.core.List(null,a__40506__auto__,null,(1),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this__40501__auto__,f__40505__auto__,a__40506__auto__,b__40507__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40501__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40505__auto__,(new cljs.core.List(null,a__40506__auto__,(new cljs.core.List(null,b__40507__auto__,null,(1),null)),(2),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this__40501__auto__,f__40505__auto__,a__40506__auto__,b__40507__auto__,xs__40508__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40501__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40505__auto__,cljs.core.cons(a__40506__auto__,cljs.core.cons(b__40507__auto__,xs__40508__auto__))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__40501__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return self__.meta;
}));

(datascript.conn.Conn.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this__40501__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return this__40501__auto____$1.extend_clj$core$IAtom3$deref_impl$arity$1(null, );
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$validate$arity$3 = (function (this__40501__auto__,validator__40513__auto__,value__40514__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
if((!((validator__40513__auto__ == null)))){
if(cljs.core.truth_((validator__40513__auto__.cljs$core$IFn$_invoke$arity$1 ? validator__40513__auto__.cljs$core$IFn$_invoke$arity$1(value__40514__auto__) : validator__40513__auto__.call(null, value__40514__auto__)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid reference state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__40514__auto__], null));
}
} else {
return null;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$notify_watches$arity$3 = (function (this__40501__auto__,oldv__40509__auto__,newv__40504__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
var seq__45964 = cljs.core.seq(self__.watches);
var chunk__45965 = null;
var count__45966 = (0);
var i__45967 = (0);
while(true){
if((i__45967 < count__45966)){
var vec__45993 = chunk__45965.cljs$core$IIndexed$_nth$arity$2(null, i__45967);
var k__40510__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45993,(0),null);
var w__40515__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45993,(1),null);
(w__40515__auto__.cljs$core$IFn$_invoke$arity$4 ? w__40515__auto__.cljs$core$IFn$_invoke$arity$4(k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__) : w__40515__auto__.call(null, k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__));


var G__46285 = seq__45964;
var G__46286 = chunk__45965;
var G__46287 = count__45966;
var G__46288 = (i__45967 + (1));
seq__45964 = G__46285;
chunk__45965 = G__46286;
count__45966 = G__46287;
i__45967 = G__46288;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45964);
if(temp__5823__auto__){
var seq__45964__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45964__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45964__$1);
var G__46289 = cljs.core.chunk_rest(seq__45964__$1);
var G__46290 = c__5525__auto__;
var G__46291 = cljs.core.count(c__5525__auto__);
var G__46292 = (0);
seq__45964 = G__46289;
chunk__45965 = G__46290;
count__45966 = G__46291;
i__45967 = G__46292;
continue;
} else {
var vec__45998 = cljs.core.first(seq__45964__$1);
var k__40510__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45998,(0),null);
var w__40515__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45998,(1),null);
(w__40515__auto__.cljs$core$IFn$_invoke$arity$4 ? w__40515__auto__.cljs$core$IFn$_invoke$arity$4(k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__) : w__40515__auto__.call(null, k__40510__auto__,this__40501__auto____$1,oldv__40509__auto__,newv__40504__auto__));


var G__46294 = cljs.core.next(seq__45964__$1);
var G__46295 = null;
var G__46296 = (0);
var G__46297 = (0);
seq__45964 = G__46294;
chunk__45965 = G__46295;
count__45966 = G__46296;
i__45967 = G__46297;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$swap_STAR_$arity$3 = (function (this__40501__auto__,f__40505__auto__,args__40519__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
var oldv__40509__auto__ = cljs.core.deref(this__40501__auto____$1);
var newv__40504__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__40505__auto__,oldv__40509__auto__,args__40519__auto__);
this__40501__auto____$1.extend_clj$core$IAtom3$validate$arity$3(null, self__.validator,newv__40504__auto__);

this__40501__auto____$1.extend_clj$core$IAtom3$compare_and_set_impl$arity$3(null, oldv__40509__auto__,newv__40504__auto__);

this__40501__auto____$1.extend_clj$core$IAtom3$notify_watches$arity$3(null, oldv__40509__auto__,newv__40504__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldv__40509__auto__,newv__40504__auto__], null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$deref_impl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atom));
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$compare_and_set_impl$arity$3 = (function (this$,oldv,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_and_set_BANG_(self__.atom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),oldv),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),newv));
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__40501__auto__,k__40510__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
return this__40501__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__40510__auto__,null);
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__40501__auto__,k__40510__auto__,not_found__40512__auto__){
var self__ = this;
var this__40501__auto____$1 = this;
var G__46015 = k__40510__auto__;
var G__46015__$1 = (((G__46015 instanceof cljs.core.Keyword))?G__46015.fqn:null);
switch (G__46015__$1) {
case "atom":
return self__.atom;

break;
default:
return not_found__40512__auto__;

}
}));

(datascript.conn.Conn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(datascript.conn.Conn.cljs$lang$type = true);

(datascript.conn.Conn.cljs$lang$ctorStr = "datascript.conn/Conn");

(datascript.conn.Conn.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"datascript.conn/Conn");
}));

/**
 * Positional factory function for datascript.conn/Conn.
 */
datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(atom,validator,watches,meta){
return (new datascript.conn.Conn(atom,validator,watches,meta));
});


datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(var_args){
var G__46029 = arguments.length;
switch (G__46029) {
case 1:
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___46314 = arguments.length;
var i__5727__auto___46315 = (0);
while(true){
if((i__5727__auto___46315 < len__5726__auto___46314)){
args_arr__5751__auto__.push((arguments[i__5727__auto___46315]));

var G__46316 = (i__5727__auto___46315 + (1));
i__5727__auto___46315 = G__46316;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic = (function (atom,rest__40520__auto__){
var opts__40521__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,rest__40520__auto__);
var ref__40522__auto__ = (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
var temp__5827__auto___46317 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(opts__40521__auto__);
if((temp__5827__auto___46317 == null)){
} else {
var validator__40513__auto___46318 = temp__5827__auto___46317;
ref__40522__auto__.extend_clj$core$IAtom3$validate$arity$3(null, validator__40513__auto___46318,cljs.core.deref(ref__40522__auto__));

(ref__40522__auto__.validator = validator__40513__auto___46318);
}

var temp__5827__auto___46319 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts__40521__auto__);
if((temp__5827__auto___46319 == null)){
} else {
var meta__40523__auto___46320 = temp__5827__auto___46319;
cljs.core.reset_meta_BANG_(ref__40522__auto__,meta__40523__auto___46320);
}

return ref__40522__auto__;
}));

/** @this {Function} */
(datascript.conn.__GT_Conn.cljs$lang$applyTo = (function (seq46027){
var G__46028 = cljs.core.first(seq46027);
var seq46027__$1 = cljs.core.next(seq46027);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46028,seq46027__$1);
}));

(datascript.conn.__GT_Conn.cljs$lang$maxFixedArity = (1));


datascript.conn.make_conn = (function datascript$conn$make_conn(opts){
var G__46043 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(opts);
return (datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 ? datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1(G__46043) : datascript.conn.__GT_Conn.call(null, G__46043));
});
datascript.conn.with$ = (function datascript$conn$with(var_args){
var G__46049 = arguments.length;
switch (G__46049) {
case 2:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
}));

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if((db instanceof datascript.db.FilteredDB)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data(datascript.db.__GT_TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tx_meta),tx_data);
}
}));

(datascript.conn.with$.cljs$lang$maxFixedArity = 3);

/**
 * Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.
 */
datascript.conn.db_with = (function datascript$conn$db_with(db,tx_data){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.conn.conn_QMARK_ = (function datascript$conn$conn_QMARK_(conn){
var and__5000__auto__ = (((!((conn == null))))?(((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$))))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__5000__auto__){
var temp__5825__auto__ = cljs.core.deref(conn);
if((temp__5825__auto__ == null)){
return true;
} else {
var db = temp__5825__auto__;
return datascript.db.db_QMARK_(db);
}
} else {
return and__5000__auto__;
}
});
datascript.conn.conn_from_db = (function datascript$conn$conn_from_db(db){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5825__auto__ = datascript.storage.storage(db);
if((temp__5825__auto__ == null)){
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var storage = temp__5825__auto__;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
datascript.conn.conn_from_datoms = (function datascript$conn$conn_from_datoms(var_args){
var G__46074 = arguments.length;
switch (G__46074) {
case 1:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3 = (function (datoms,schema,opts){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.conn_from_datoms.cljs$lang$maxFixedArity = 3);

datascript.conn.create_conn = (function datascript$conn$create_conn(var_args){
var G__46125 = arguments.length;
switch (G__46125) {
case 0:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.conn.conn_from_db(datascript.db.empty_db(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2 = (function (schema,opts){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.create_conn.cljs$lang$maxFixedArity = 2);

datascript.conn._transact_BANG_ = (function datascript$conn$_transact_BANG_(conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var _STAR_report = cljs.core.volatile_BANG_(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (db){
var r = datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
cljs.core.vreset_BANG_(_STAR_report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
}));

return cljs.core.deref(_STAR_report);
});
datascript.conn.transact_BANG_ = (function datascript$conn$transact_BANG_(var_args){
var G__46170 = arguments.length;
switch (G__46170) {
case 2:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
}));

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.conn._transact_BANG_(conn,tx_data,tx_meta);
var seq__46173_46336 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__46174_46337 = null;
var count__46175_46338 = (0);
var i__46176_46339 = (0);
while(true){
if((i__46176_46339 < count__46175_46338)){
var vec__46197_46340 = chunk__46174_46337.cljs$core$IIndexed$_nth$arity$2(null, i__46176_46339);
var __46341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46197_46340,(0),null);
var callback_46342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46197_46340,(1),null);
(callback_46342.cljs$core$IFn$_invoke$arity$1 ? callback_46342.cljs$core$IFn$_invoke$arity$1(report) : callback_46342.call(null, report));


var G__46346 = seq__46173_46336;
var G__46347 = chunk__46174_46337;
var G__46348 = count__46175_46338;
var G__46349 = (i__46176_46339 + (1));
seq__46173_46336 = G__46346;
chunk__46174_46337 = G__46347;
count__46175_46338 = G__46348;
i__46176_46339 = G__46349;
continue;
} else {
var temp__5823__auto___46350 = cljs.core.seq(seq__46173_46336);
if(temp__5823__auto___46350){
var seq__46173_46351__$1 = temp__5823__auto___46350;
if(cljs.core.chunked_seq_QMARK_(seq__46173_46351__$1)){
var c__5525__auto___46352 = cljs.core.chunk_first(seq__46173_46351__$1);
var G__46354 = cljs.core.chunk_rest(seq__46173_46351__$1);
var G__46355 = c__5525__auto___46352;
var G__46356 = cljs.core.count(c__5525__auto___46352);
var G__46357 = (0);
seq__46173_46336 = G__46354;
chunk__46174_46337 = G__46355;
count__46175_46338 = G__46356;
i__46176_46339 = G__46357;
continue;
} else {
var vec__46203_46358 = cljs.core.first(seq__46173_46351__$1);
var __46359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203_46358,(0),null);
var callback_46360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203_46358,(1),null);
(callback_46360.cljs$core$IFn$_invoke$arity$1 ? callback_46360.cljs$core$IFn$_invoke$arity$1(report) : callback_46360.call(null, report));


var G__46361 = cljs.core.next(seq__46173_46351__$1);
var G__46362 = null;
var G__46363 = (0);
var G__46364 = (0);
seq__46173_46336 = G__46361;
chunk__46174_46337 = G__46362;
count__46175_46338 = G__46363;
i__46176_46339 = G__46364;
continue;
}
} else {
}
}
break;
}

return report;
}));

(datascript.conn.transact_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_conn_BANG_ = (function datascript$conn$reset_conn_BANG_(var_args){
var G__46210 = arguments.length;
switch (G__46210) {
case 2:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
}));

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var db_before = cljs.core.deref(conn);
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(db_before)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46207_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46207_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.db._datoms(db_before,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)):null),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
var temp__5825__auto___46367 = datascript.storage.storage(db_before);
if((temp__5825__auto___46367 == null)){
cljs.core.reset_BANG_(conn,db);
} else {
var storage_46368 = temp__5825__auto___46367;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
}

var seq__46222_46369 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__46223_46370 = null;
var count__46224_46371 = (0);
var i__46225_46372 = (0);
while(true){
if((i__46225_46372 < count__46224_46371)){
var vec__46234_46373 = chunk__46223_46370.cljs$core$IIndexed$_nth$arity$2(null, i__46225_46372);
var __46374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46234_46373,(0),null);
var callback_46375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46234_46373,(1),null);
(callback_46375.cljs$core$IFn$_invoke$arity$1 ? callback_46375.cljs$core$IFn$_invoke$arity$1(report) : callback_46375.call(null, report));


var G__46376 = seq__46222_46369;
var G__46377 = chunk__46223_46370;
var G__46378 = count__46224_46371;
var G__46379 = (i__46225_46372 + (1));
seq__46222_46369 = G__46376;
chunk__46223_46370 = G__46377;
count__46224_46371 = G__46378;
i__46225_46372 = G__46379;
continue;
} else {
var temp__5823__auto___46382 = cljs.core.seq(seq__46222_46369);
if(temp__5823__auto___46382){
var seq__46222_46383__$1 = temp__5823__auto___46382;
if(cljs.core.chunked_seq_QMARK_(seq__46222_46383__$1)){
var c__5525__auto___46384 = cljs.core.chunk_first(seq__46222_46383__$1);
var G__46385 = cljs.core.chunk_rest(seq__46222_46383__$1);
var G__46386 = c__5525__auto___46384;
var G__46387 = cljs.core.count(c__5525__auto___46384);
var G__46388 = (0);
seq__46222_46369 = G__46385;
chunk__46223_46370 = G__46386;
count__46224_46371 = G__46387;
i__46225_46372 = G__46388;
continue;
} else {
var vec__46237_46389 = cljs.core.first(seq__46222_46383__$1);
var __46390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46237_46389,(0),null);
var callback_46391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46237_46389,(1),null);
(callback_46391.cljs$core$IFn$_invoke$arity$1 ? callback_46391.cljs$core$IFn$_invoke$arity$1(report) : callback_46391.call(null, report));


var G__46406 = cljs.core.next(seq__46222_46383__$1);
var G__46407 = null;
var G__46408 = (0);
var G__46409 = (0);
seq__46222_46369 = G__46406;
chunk__46223_46370 = G__46407;
count__46224_46371 = G__46408;
i__46225_46372 = G__46409;
continue;
}
} else {
}
}
break;
}

return db;
}));

(datascript.conn.reset_conn_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_schema_BANG_ = (function datascript$conn$reset_schema_BANG_(conn,schema){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var db = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,datascript.db.with_schema,schema);
return db;
});
datascript.conn.listen_BANG_ = (function datascript$conn$listen_BANG_(var_args){
var G__46258 = arguments.length;
switch (G__46258) {
case 2:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
}));

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,callback], 0));

return key;
}));

(datascript.conn.listen_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.unlisten_BANG_ = (function datascript$conn$unlisten_BANG_(conn,key){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});

//# sourceMappingURL=datascript.conn.js.map
