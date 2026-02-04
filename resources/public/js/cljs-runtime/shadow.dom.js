goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36819 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36819(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36825 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36825(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35009 = coll;
var G__35010 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35009,G__35010) : shadow.dom.lazy_native_coll_seq.call(null, G__35009,G__35010));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35050 = arguments.length;
switch (G__35050) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35055 = arguments.length;
switch (G__35055) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35060 = arguments.length;
switch (G__35060) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35075 = arguments.length;
switch (G__35075) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35083 = arguments.length;
switch (G__35083) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35117 = arguments.length;
switch (G__35117) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e35138){if((e35138 instanceof Object)){
var e = e35138;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35138;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35157 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35158 = null;
var count__35159 = (0);
var i__35160 = (0);
while(true){
if((i__35160 < count__35159)){
var el = chunk__35158.cljs$core$IIndexed$_nth$arity$2(null, i__35160);
var handler_36884__$1 = ((function (seq__35157,chunk__35158,count__35159,i__35160,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__35157,chunk__35158,count__35159,i__35160,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36884__$1);


var G__36886 = seq__35157;
var G__36887 = chunk__35158;
var G__36888 = count__35159;
var G__36889 = (i__35160 + (1));
seq__35157 = G__36886;
chunk__35158 = G__36887;
count__35159 = G__36888;
i__35160 = G__36889;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35157);
if(temp__5823__auto__){
var seq__35157__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35157__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35157__$1);
var G__36890 = cljs.core.chunk_rest(seq__35157__$1);
var G__36891 = c__5525__auto__;
var G__36892 = cljs.core.count(c__5525__auto__);
var G__36893 = (0);
seq__35157 = G__36890;
chunk__35158 = G__36891;
count__35159 = G__36892;
i__35160 = G__36893;
continue;
} else {
var el = cljs.core.first(seq__35157__$1);
var handler_36894__$1 = ((function (seq__35157,chunk__35158,count__35159,i__35160,el,seq__35157__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__35157,chunk__35158,count__35159,i__35160,el,seq__35157__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36894__$1);


var G__36895 = cljs.core.next(seq__35157__$1);
var G__36896 = null;
var G__36897 = (0);
var G__36898 = (0);
seq__35157 = G__36895;
chunk__35158 = G__36896;
count__35159 = G__36897;
i__35160 = G__36898;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35205 = arguments.length;
switch (G__35205) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35230 = cljs.core.seq(events);
var chunk__35231 = null;
var count__35232 = (0);
var i__35233 = (0);
while(true){
if((i__35233 < count__35232)){
var vec__35258 = chunk__35231.cljs$core$IIndexed$_nth$arity$2(null, i__35233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36916 = seq__35230;
var G__36917 = chunk__35231;
var G__36918 = count__35232;
var G__36919 = (i__35233 + (1));
seq__35230 = G__36916;
chunk__35231 = G__36917;
count__35232 = G__36918;
i__35233 = G__36919;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35230);
if(temp__5823__auto__){
var seq__35230__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35230__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35230__$1);
var G__36920 = cljs.core.chunk_rest(seq__35230__$1);
var G__36921 = c__5525__auto__;
var G__36922 = cljs.core.count(c__5525__auto__);
var G__36923 = (0);
seq__35230 = G__36920;
chunk__35231 = G__36921;
count__35232 = G__36922;
i__35233 = G__36923;
continue;
} else {
var vec__35269 = cljs.core.first(seq__35230__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35269,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36924 = cljs.core.next(seq__35230__$1);
var G__36925 = null;
var G__36926 = (0);
var G__36927 = (0);
seq__35230 = G__36924;
chunk__35231 = G__36925;
count__35232 = G__36926;
i__35233 = G__36927;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35275 = cljs.core.seq(styles);
var chunk__35276 = null;
var count__35277 = (0);
var i__35278 = (0);
while(true){
if((i__35278 < count__35277)){
var vec__35299 = chunk__35276.cljs$core$IIndexed$_nth$arity$2(null, i__35278);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35299,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36928 = seq__35275;
var G__36929 = chunk__35276;
var G__36930 = count__35277;
var G__36931 = (i__35278 + (1));
seq__35275 = G__36928;
chunk__35276 = G__36929;
count__35277 = G__36930;
i__35278 = G__36931;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35275);
if(temp__5823__auto__){
var seq__35275__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35275__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35275__$1);
var G__36932 = cljs.core.chunk_rest(seq__35275__$1);
var G__36933 = c__5525__auto__;
var G__36934 = cljs.core.count(c__5525__auto__);
var G__36935 = (0);
seq__35275 = G__36932;
chunk__35276 = G__36933;
count__35277 = G__36934;
i__35278 = G__36935;
continue;
} else {
var vec__35316 = cljs.core.first(seq__35275__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36937 = cljs.core.next(seq__35275__$1);
var G__36938 = null;
var G__36939 = (0);
var G__36940 = (0);
seq__35275 = G__36937;
chunk__35276 = G__36938;
count__35277 = G__36939;
i__35278 = G__36940;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35355_36941 = key;
var G__35355_36942__$1 = (((G__35355_36941 instanceof cljs.core.Keyword))?G__35355_36941.fqn:null);
switch (G__35355_36942__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36948 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_36948,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_36948,"aria-");
}
})())){
el.setAttribute(ks_36948,value);
} else {
(el[ks_36948] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35413){
var map__35417 = p__35413;
var map__35417__$1 = cljs.core.__destructure_map(map__35417);
var props = map__35417__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35417__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35418 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35418,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35418,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35418,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35424 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35424,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35424;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35430 = arguments.length;
switch (G__35430) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35447){
var vec__35449 = p__35447;
var seq__35450 = cljs.core.seq(vec__35449);
var first__35451 = cljs.core.first(seq__35450);
var seq__35450__$1 = cljs.core.next(seq__35450);
var nn = first__35451;
var first__35451__$1 = cljs.core.first(seq__35450__$1);
var seq__35450__$2 = cljs.core.next(seq__35450__$1);
var np = first__35451__$1;
var nc = seq__35450__$2;
var node = vec__35449;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35453 = nn;
var G__35454 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35453,G__35454) : create_fn.call(null, G__35453,G__35454));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35457 = nn;
var G__35459 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35457,G__35459) : create_fn.call(null, G__35457,G__35459));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35466 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
var seq__35470_36984 = cljs.core.seq(node_children);
var chunk__35471_36985 = null;
var count__35472_36986 = (0);
var i__35473_36987 = (0);
while(true){
if((i__35473_36987 < count__35472_36986)){
var child_struct_36989 = chunk__35471_36985.cljs$core$IIndexed$_nth$arity$2(null, i__35473_36987);
var children_36990 = shadow.dom.dom_node(child_struct_36989);
if(cljs.core.seq_QMARK_(children_36990)){
var seq__35531_36991 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36990));
var chunk__35533_36992 = null;
var count__35534_36993 = (0);
var i__35535_36994 = (0);
while(true){
if((i__35535_36994 < count__35534_36993)){
var child_36996 = chunk__35533_36992.cljs$core$IIndexed$_nth$arity$2(null, i__35535_36994);
if(cljs.core.truth_(child_36996)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36996);


var G__36997 = seq__35531_36991;
var G__36998 = chunk__35533_36992;
var G__36999 = count__35534_36993;
var G__37000 = (i__35535_36994 + (1));
seq__35531_36991 = G__36997;
chunk__35533_36992 = G__36998;
count__35534_36993 = G__36999;
i__35535_36994 = G__37000;
continue;
} else {
var G__37001 = seq__35531_36991;
var G__37002 = chunk__35533_36992;
var G__37003 = count__35534_36993;
var G__37004 = (i__35535_36994 + (1));
seq__35531_36991 = G__37001;
chunk__35533_36992 = G__37002;
count__35534_36993 = G__37003;
i__35535_36994 = G__37004;
continue;
}
} else {
var temp__5823__auto___37005 = cljs.core.seq(seq__35531_36991);
if(temp__5823__auto___37005){
var seq__35531_37006__$1 = temp__5823__auto___37005;
if(cljs.core.chunked_seq_QMARK_(seq__35531_37006__$1)){
var c__5525__auto___37007 = cljs.core.chunk_first(seq__35531_37006__$1);
var G__37008 = cljs.core.chunk_rest(seq__35531_37006__$1);
var G__37009 = c__5525__auto___37007;
var G__37010 = cljs.core.count(c__5525__auto___37007);
var G__37011 = (0);
seq__35531_36991 = G__37008;
chunk__35533_36992 = G__37009;
count__35534_36993 = G__37010;
i__35535_36994 = G__37011;
continue;
} else {
var child_37012 = cljs.core.first(seq__35531_37006__$1);
if(cljs.core.truth_(child_37012)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37012);


var G__37013 = cljs.core.next(seq__35531_37006__$1);
var G__37014 = null;
var G__37015 = (0);
var G__37016 = (0);
seq__35531_36991 = G__37013;
chunk__35533_36992 = G__37014;
count__35534_36993 = G__37015;
i__35535_36994 = G__37016;
continue;
} else {
var G__37017 = cljs.core.next(seq__35531_37006__$1);
var G__37018 = null;
var G__37019 = (0);
var G__37020 = (0);
seq__35531_36991 = G__37017;
chunk__35533_36992 = G__37018;
count__35534_36993 = G__37019;
i__35535_36994 = G__37020;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36990);
}


var G__37023 = seq__35470_36984;
var G__37024 = chunk__35471_36985;
var G__37025 = count__35472_36986;
var G__37026 = (i__35473_36987 + (1));
seq__35470_36984 = G__37023;
chunk__35471_36985 = G__37024;
count__35472_36986 = G__37025;
i__35473_36987 = G__37026;
continue;
} else {
var temp__5823__auto___37029 = cljs.core.seq(seq__35470_36984);
if(temp__5823__auto___37029){
var seq__35470_37034__$1 = temp__5823__auto___37029;
if(cljs.core.chunked_seq_QMARK_(seq__35470_37034__$1)){
var c__5525__auto___37035 = cljs.core.chunk_first(seq__35470_37034__$1);
var G__37037 = cljs.core.chunk_rest(seq__35470_37034__$1);
var G__37038 = c__5525__auto___37035;
var G__37039 = cljs.core.count(c__5525__auto___37035);
var G__37040 = (0);
seq__35470_36984 = G__37037;
chunk__35471_36985 = G__37038;
count__35472_36986 = G__37039;
i__35473_36987 = G__37040;
continue;
} else {
var child_struct_37042 = cljs.core.first(seq__35470_37034__$1);
var children_37044 = shadow.dom.dom_node(child_struct_37042);
if(cljs.core.seq_QMARK_(children_37044)){
var seq__35559_37045 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37044));
var chunk__35561_37046 = null;
var count__35562_37047 = (0);
var i__35563_37048 = (0);
while(true){
if((i__35563_37048 < count__35562_37047)){
var child_37050 = chunk__35561_37046.cljs$core$IIndexed$_nth$arity$2(null, i__35563_37048);
if(cljs.core.truth_(child_37050)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37050);


var G__37053 = seq__35559_37045;
var G__37054 = chunk__35561_37046;
var G__37055 = count__35562_37047;
var G__37056 = (i__35563_37048 + (1));
seq__35559_37045 = G__37053;
chunk__35561_37046 = G__37054;
count__35562_37047 = G__37055;
i__35563_37048 = G__37056;
continue;
} else {
var G__37057 = seq__35559_37045;
var G__37058 = chunk__35561_37046;
var G__37059 = count__35562_37047;
var G__37060 = (i__35563_37048 + (1));
seq__35559_37045 = G__37057;
chunk__35561_37046 = G__37058;
count__35562_37047 = G__37059;
i__35563_37048 = G__37060;
continue;
}
} else {
var temp__5823__auto___37061__$1 = cljs.core.seq(seq__35559_37045);
if(temp__5823__auto___37061__$1){
var seq__35559_37063__$1 = temp__5823__auto___37061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35559_37063__$1)){
var c__5525__auto___37065 = cljs.core.chunk_first(seq__35559_37063__$1);
var G__37067 = cljs.core.chunk_rest(seq__35559_37063__$1);
var G__37068 = c__5525__auto___37065;
var G__37069 = cljs.core.count(c__5525__auto___37065);
var G__37070 = (0);
seq__35559_37045 = G__37067;
chunk__35561_37046 = G__37068;
count__35562_37047 = G__37069;
i__35563_37048 = G__37070;
continue;
} else {
var child_37071 = cljs.core.first(seq__35559_37063__$1);
if(cljs.core.truth_(child_37071)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37071);


var G__37072 = cljs.core.next(seq__35559_37063__$1);
var G__37073 = null;
var G__37074 = (0);
var G__37075 = (0);
seq__35559_37045 = G__37072;
chunk__35561_37046 = G__37073;
count__35562_37047 = G__37074;
i__35563_37048 = G__37075;
continue;
} else {
var G__37080 = cljs.core.next(seq__35559_37063__$1);
var G__37081 = null;
var G__37082 = (0);
var G__37083 = (0);
seq__35559_37045 = G__37080;
chunk__35561_37046 = G__37081;
count__35562_37047 = G__37082;
i__35563_37048 = G__37083;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37044);
}


var G__37084 = cljs.core.next(seq__35470_37034__$1);
var G__37085 = null;
var G__37086 = (0);
var G__37087 = (0);
seq__35470_36984 = G__37084;
chunk__35471_36985 = G__37085;
count__35472_36986 = G__37086;
i__35473_36987 = G__37087;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35628 = cljs.core.seq(node);
var chunk__35629 = null;
var count__35630 = (0);
var i__35631 = (0);
while(true){
if((i__35631 < count__35630)){
var n = chunk__35629.cljs$core$IIndexed$_nth$arity$2(null, i__35631);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__37120 = seq__35628;
var G__37121 = chunk__35629;
var G__37122 = count__35630;
var G__37123 = (i__35631 + (1));
seq__35628 = G__37120;
chunk__35629 = G__37121;
count__35630 = G__37122;
i__35631 = G__37123;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35628);
if(temp__5823__auto__){
var seq__35628__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35628__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35628__$1);
var G__37124 = cljs.core.chunk_rest(seq__35628__$1);
var G__37125 = c__5525__auto__;
var G__37126 = cljs.core.count(c__5525__auto__);
var G__37127 = (0);
seq__35628 = G__37124;
chunk__35629 = G__37125;
count__35630 = G__37126;
i__35631 = G__37127;
continue;
} else {
var n = cljs.core.first(seq__35628__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__37132 = cljs.core.next(seq__35628__$1);
var G__37133 = null;
var G__37134 = (0);
var G__37135 = (0);
seq__35628 = G__37132;
chunk__35629 = G__37133;
count__35630 = G__37134;
i__35631 = G__37135;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35671 = arguments.length;
switch (G__35671) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35683 = arguments.length;
switch (G__35683) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35706 = arguments.length;
switch (G__35706) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37180 = arguments.length;
var i__5727__auto___37181 = (0);
while(true){
if((i__5727__auto___37181 < len__5726__auto___37180)){
args__5732__auto__.push((arguments[i__5727__auto___37181]));

var G__37182 = (i__5727__auto___37181 + (1));
i__5727__auto___37181 = G__37182;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35782_37188 = cljs.core.seq(nodes);
var chunk__35786_37189 = null;
var count__35787_37190 = (0);
var i__35788_37191 = (0);
while(true){
if((i__35788_37191 < count__35787_37190)){
var node_37193 = chunk__35786_37189.cljs$core$IIndexed$_nth$arity$2(null, i__35788_37191);
fragment.appendChild(shadow.dom._to_dom(node_37193));


var G__37194 = seq__35782_37188;
var G__37195 = chunk__35786_37189;
var G__37196 = count__35787_37190;
var G__37197 = (i__35788_37191 + (1));
seq__35782_37188 = G__37194;
chunk__35786_37189 = G__37195;
count__35787_37190 = G__37196;
i__35788_37191 = G__37197;
continue;
} else {
var temp__5823__auto___37198 = cljs.core.seq(seq__35782_37188);
if(temp__5823__auto___37198){
var seq__35782_37199__$1 = temp__5823__auto___37198;
if(cljs.core.chunked_seq_QMARK_(seq__35782_37199__$1)){
var c__5525__auto___37200 = cljs.core.chunk_first(seq__35782_37199__$1);
var G__37201 = cljs.core.chunk_rest(seq__35782_37199__$1);
var G__37202 = c__5525__auto___37200;
var G__37203 = cljs.core.count(c__5525__auto___37200);
var G__37204 = (0);
seq__35782_37188 = G__37201;
chunk__35786_37189 = G__37202;
count__35787_37190 = G__37203;
i__35788_37191 = G__37204;
continue;
} else {
var node_37205 = cljs.core.first(seq__35782_37199__$1);
fragment.appendChild(shadow.dom._to_dom(node_37205));


var G__37211 = cljs.core.next(seq__35782_37199__$1);
var G__37212 = null;
var G__37213 = (0);
var G__37214 = (0);
seq__35782_37188 = G__37211;
chunk__35786_37189 = G__37212;
count__35787_37190 = G__37213;
i__35788_37191 = G__37214;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35757){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35757));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35823_37222 = cljs.core.seq(scripts);
var chunk__35824_37223 = null;
var count__35825_37224 = (0);
var i__35826_37225 = (0);
while(true){
if((i__35826_37225 < count__35825_37224)){
var vec__35861_37230 = chunk__35824_37223.cljs$core$IIndexed$_nth$arity$2(null, i__35826_37225);
var script_tag_37231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861_37230,(0),null);
var script_body_37232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861_37230,(1),null);
eval(script_body_37232);


var G__37234 = seq__35823_37222;
var G__37235 = chunk__35824_37223;
var G__37236 = count__35825_37224;
var G__37237 = (i__35826_37225 + (1));
seq__35823_37222 = G__37234;
chunk__35824_37223 = G__37235;
count__35825_37224 = G__37236;
i__35826_37225 = G__37237;
continue;
} else {
var temp__5823__auto___37238 = cljs.core.seq(seq__35823_37222);
if(temp__5823__auto___37238){
var seq__35823_37242__$1 = temp__5823__auto___37238;
if(cljs.core.chunked_seq_QMARK_(seq__35823_37242__$1)){
var c__5525__auto___37243 = cljs.core.chunk_first(seq__35823_37242__$1);
var G__37244 = cljs.core.chunk_rest(seq__35823_37242__$1);
var G__37245 = c__5525__auto___37243;
var G__37246 = cljs.core.count(c__5525__auto___37243);
var G__37247 = (0);
seq__35823_37222 = G__37244;
chunk__35824_37223 = G__37245;
count__35825_37224 = G__37246;
i__35826_37225 = G__37247;
continue;
} else {
var vec__35885_37249 = cljs.core.first(seq__35823_37242__$1);
var script_tag_37250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35885_37249,(0),null);
var script_body_37251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35885_37249,(1),null);
eval(script_body_37251);


var G__37253 = cljs.core.next(seq__35823_37242__$1);
var G__37254 = null;
var G__37255 = (0);
var G__37256 = (0);
seq__35823_37222 = G__37253;
chunk__35824_37223 = G__37254;
count__35825_37224 = G__37255;
i__35826_37225 = G__37256;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35891){
var vec__35893 = p__35891;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35893,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35893,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35919 = arguments.length;
switch (G__35919) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36028 = cljs.core.seq(style_keys);
var chunk__36029 = null;
var count__36030 = (0);
var i__36031 = (0);
while(true){
if((i__36031 < count__36030)){
var it = chunk__36029.cljs$core$IIndexed$_nth$arity$2(null, i__36031);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37313 = seq__36028;
var G__37314 = chunk__36029;
var G__37315 = count__36030;
var G__37316 = (i__36031 + (1));
seq__36028 = G__37313;
chunk__36029 = G__37314;
count__36030 = G__37315;
i__36031 = G__37316;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36028);
if(temp__5823__auto__){
var seq__36028__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36028__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36028__$1);
var G__37317 = cljs.core.chunk_rest(seq__36028__$1);
var G__37318 = c__5525__auto__;
var G__37319 = cljs.core.count(c__5525__auto__);
var G__37320 = (0);
seq__36028 = G__37317;
chunk__36029 = G__37318;
count__36030 = G__37319;
i__36031 = G__37320;
continue;
} else {
var it = cljs.core.first(seq__36028__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37321 = cljs.core.next(seq__36028__$1);
var G__37322 = null;
var G__37323 = (0);
var G__37324 = (0);
seq__36028 = G__37321;
chunk__36029 = G__37322;
count__36030 = G__37323;
i__36031 = G__37324;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k36059,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__36072 = k36059;
var G__36072__$1 = (((G__36072 instanceof cljs.core.Keyword))?G__36072.fqn:null);
switch (G__36072__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36059,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__36078){
var vec__36079 = p__36078;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36079,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36079,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36058){
var self__ = this;
var G__36058__$1 = this;
return (new cljs.core.RecordIter((0),G__36058__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36060,other36061){
var self__ = this;
var this36060__$1 = this;
return (((!((other36061 == null)))) && ((((this36060__$1.constructor === other36061.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36060__$1.x,other36061.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36060__$1.y,other36061.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36060__$1.__extmap,other36061.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k36059){
var self__ = this;
var this__5307__auto____$1 = this;
var G__36138 = k36059;
var G__36138__$1 = (((G__36138 instanceof cljs.core.Keyword))?G__36138.fqn:null);
switch (G__36138__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36059);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__36058){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__36158 = cljs.core.keyword_identical_QMARK_;
var expr__36159 = k__5309__auto__;
if(cljs.core.truth_((pred__36158.cljs$core$IFn$_invoke$arity$2 ? pred__36158.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36159) : pred__36158.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__36159)))){
return (new shadow.dom.Coordinate(G__36058,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36158.cljs$core$IFn$_invoke$arity$2 ? pred__36158.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36159) : pred__36158.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__36159)))){
return (new shadow.dom.Coordinate(self__.x,G__36058,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__36058),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__36058){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36058,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36066){
var extmap__5342__auto__ = (function (){var G__36213 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36066,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36213);
} else {
return G__36213;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36066),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36066),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k36267,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__36328 = k36267;
var G__36328__$1 = (((G__36328 instanceof cljs.core.Keyword))?G__36328.fqn:null);
switch (G__36328__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36267,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__36344){
var vec__36346 = p__36344;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36346,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36346,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36266){
var self__ = this;
var G__36266__$1 = this;
return (new cljs.core.RecordIter((0),G__36266__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36268,other36269){
var self__ = this;
var this36268__$1 = this;
return (((!((other36269 == null)))) && ((((this36268__$1.constructor === other36269.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36268__$1.w,other36269.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36268__$1.h,other36269.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36268__$1.__extmap,other36269.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k36267){
var self__ = this;
var this__5307__auto____$1 = this;
var G__36388 = k36267;
var G__36388__$1 = (((G__36388 instanceof cljs.core.Keyword))?G__36388.fqn:null);
switch (G__36388__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36267);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__36266){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__36392 = cljs.core.keyword_identical_QMARK_;
var expr__36393 = k__5309__auto__;
if(cljs.core.truth_((pred__36392.cljs$core$IFn$_invoke$arity$2 ? pred__36392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36393) : pred__36392.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__36393)))){
return (new shadow.dom.Size(G__36266,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36392.cljs$core$IFn$_invoke$arity$2 ? pred__36392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36393) : pred__36392.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__36393)))){
return (new shadow.dom.Size(self__.w,G__36266,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__36266),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__36266){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36266,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36284){
var extmap__5342__auto__ = (function (){var G__36420 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36284,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36284)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36420);
} else {
return G__36420;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36284),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36284),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__37409 = (i + (1));
var G__37410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37409;
ret = G__37410;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36449){
var vec__36450 = p__36449;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36450,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36458 = arguments.length;
switch (G__36458) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37420 = ps;
var G__37421 = (i + (1));
el__$1 = G__37420;
i = G__37421;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36529 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36535_37438 = cljs.core.seq(props);
var chunk__36536_37439 = null;
var count__36537_37440 = (0);
var i__36538_37441 = (0);
while(true){
if((i__36538_37441 < count__36537_37440)){
var vec__36563_37442 = chunk__36536_37439.cljs$core$IIndexed$_nth$arity$2(null, i__36538_37441);
var k_37443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36563_37442,(0),null);
var v_37444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36563_37442,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_37443);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37443),v_37444);


var G__37446 = seq__36535_37438;
var G__37447 = chunk__36536_37439;
var G__37448 = count__36537_37440;
var G__37449 = (i__36538_37441 + (1));
seq__36535_37438 = G__37446;
chunk__36536_37439 = G__37447;
count__36537_37440 = G__37448;
i__36538_37441 = G__37449;
continue;
} else {
var temp__5823__auto___37451 = cljs.core.seq(seq__36535_37438);
if(temp__5823__auto___37451){
var seq__36535_37452__$1 = temp__5823__auto___37451;
if(cljs.core.chunked_seq_QMARK_(seq__36535_37452__$1)){
var c__5525__auto___37454 = cljs.core.chunk_first(seq__36535_37452__$1);
var G__37455 = cljs.core.chunk_rest(seq__36535_37452__$1);
var G__37456 = c__5525__auto___37454;
var G__37457 = cljs.core.count(c__5525__auto___37454);
var G__37458 = (0);
seq__36535_37438 = G__37455;
chunk__36536_37439 = G__37456;
count__36537_37440 = G__37457;
i__36538_37441 = G__37458;
continue;
} else {
var vec__36566_37459 = cljs.core.first(seq__36535_37452__$1);
var k_37460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36566_37459,(0),null);
var v_37461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36566_37459,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_37460);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37460),v_37461);


var G__37463 = cljs.core.next(seq__36535_37452__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__36535_37438 = G__37463;
chunk__36536_37439 = G__37464;
count__36537_37440 = G__37465;
i__36538_37441 = G__37466;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36596 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596,(1),null);
var seq__36602_37468 = cljs.core.seq(node_children);
var chunk__36604_37469 = null;
var count__36605_37470 = (0);
var i__36606_37471 = (0);
while(true){
if((i__36606_37471 < count__36605_37470)){
var child_struct_37473 = chunk__36604_37469.cljs$core$IIndexed$_nth$arity$2(null, i__36606_37471);
if((!((child_struct_37473 == null)))){
if(typeof child_struct_37473 === 'string'){
var text_37474 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37474),child_struct_37473].join(''));
} else {
var children_37475 = shadow.dom.svg_node(child_struct_37473);
if(cljs.core.seq_QMARK_(children_37475)){
var seq__36728_37477 = cljs.core.seq(children_37475);
var chunk__36730_37478 = null;
var count__36731_37479 = (0);
var i__36732_37480 = (0);
while(true){
if((i__36732_37480 < count__36731_37479)){
var child_37481 = chunk__36730_37478.cljs$core$IIndexed$_nth$arity$2(null, i__36732_37480);
if(cljs.core.truth_(child_37481)){
node.appendChild(child_37481);


var G__37482 = seq__36728_37477;
var G__37483 = chunk__36730_37478;
var G__37484 = count__36731_37479;
var G__37485 = (i__36732_37480 + (1));
seq__36728_37477 = G__37482;
chunk__36730_37478 = G__37483;
count__36731_37479 = G__37484;
i__36732_37480 = G__37485;
continue;
} else {
var G__37486 = seq__36728_37477;
var G__37487 = chunk__36730_37478;
var G__37488 = count__36731_37479;
var G__37489 = (i__36732_37480 + (1));
seq__36728_37477 = G__37486;
chunk__36730_37478 = G__37487;
count__36731_37479 = G__37488;
i__36732_37480 = G__37489;
continue;
}
} else {
var temp__5823__auto___37490 = cljs.core.seq(seq__36728_37477);
if(temp__5823__auto___37490){
var seq__36728_37491__$1 = temp__5823__auto___37490;
if(cljs.core.chunked_seq_QMARK_(seq__36728_37491__$1)){
var c__5525__auto___37493 = cljs.core.chunk_first(seq__36728_37491__$1);
var G__37494 = cljs.core.chunk_rest(seq__36728_37491__$1);
var G__37495 = c__5525__auto___37493;
var G__37496 = cljs.core.count(c__5525__auto___37493);
var G__37497 = (0);
seq__36728_37477 = G__37494;
chunk__36730_37478 = G__37495;
count__36731_37479 = G__37496;
i__36732_37480 = G__37497;
continue;
} else {
var child_37498 = cljs.core.first(seq__36728_37491__$1);
if(cljs.core.truth_(child_37498)){
node.appendChild(child_37498);


var G__37499 = cljs.core.next(seq__36728_37491__$1);
var G__37500 = null;
var G__37501 = (0);
var G__37502 = (0);
seq__36728_37477 = G__37499;
chunk__36730_37478 = G__37500;
count__36731_37479 = G__37501;
i__36732_37480 = G__37502;
continue;
} else {
var G__37503 = cljs.core.next(seq__36728_37491__$1);
var G__37504 = null;
var G__37505 = (0);
var G__37506 = (0);
seq__36728_37477 = G__37503;
chunk__36730_37478 = G__37504;
count__36731_37479 = G__37505;
i__36732_37480 = G__37506;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37475);
}
}


var G__37507 = seq__36602_37468;
var G__37508 = chunk__36604_37469;
var G__37509 = count__36605_37470;
var G__37510 = (i__36606_37471 + (1));
seq__36602_37468 = G__37507;
chunk__36604_37469 = G__37508;
count__36605_37470 = G__37509;
i__36606_37471 = G__37510;
continue;
} else {
var G__37512 = seq__36602_37468;
var G__37513 = chunk__36604_37469;
var G__37514 = count__36605_37470;
var G__37515 = (i__36606_37471 + (1));
seq__36602_37468 = G__37512;
chunk__36604_37469 = G__37513;
count__36605_37470 = G__37514;
i__36606_37471 = G__37515;
continue;
}
} else {
var temp__5823__auto___37516 = cljs.core.seq(seq__36602_37468);
if(temp__5823__auto___37516){
var seq__36602_37517__$1 = temp__5823__auto___37516;
if(cljs.core.chunked_seq_QMARK_(seq__36602_37517__$1)){
var c__5525__auto___37518 = cljs.core.chunk_first(seq__36602_37517__$1);
var G__37519 = cljs.core.chunk_rest(seq__36602_37517__$1);
var G__37520 = c__5525__auto___37518;
var G__37521 = cljs.core.count(c__5525__auto___37518);
var G__37522 = (0);
seq__36602_37468 = G__37519;
chunk__36604_37469 = G__37520;
count__36605_37470 = G__37521;
i__36606_37471 = G__37522;
continue;
} else {
var child_struct_37523 = cljs.core.first(seq__36602_37517__$1);
if((!((child_struct_37523 == null)))){
if(typeof child_struct_37523 === 'string'){
var text_37524 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37524),child_struct_37523].join(''));
} else {
var children_37525 = shadow.dom.svg_node(child_struct_37523);
if(cljs.core.seq_QMARK_(children_37525)){
var seq__36750_37527 = cljs.core.seq(children_37525);
var chunk__36752_37528 = null;
var count__36753_37529 = (0);
var i__36754_37530 = (0);
while(true){
if((i__36754_37530 < count__36753_37529)){
var child_37531 = chunk__36752_37528.cljs$core$IIndexed$_nth$arity$2(null, i__36754_37530);
if(cljs.core.truth_(child_37531)){
node.appendChild(child_37531);


var G__37533 = seq__36750_37527;
var G__37534 = chunk__36752_37528;
var G__37535 = count__36753_37529;
var G__37536 = (i__36754_37530 + (1));
seq__36750_37527 = G__37533;
chunk__36752_37528 = G__37534;
count__36753_37529 = G__37535;
i__36754_37530 = G__37536;
continue;
} else {
var G__37537 = seq__36750_37527;
var G__37538 = chunk__36752_37528;
var G__37539 = count__36753_37529;
var G__37540 = (i__36754_37530 + (1));
seq__36750_37527 = G__37537;
chunk__36752_37528 = G__37538;
count__36753_37529 = G__37539;
i__36754_37530 = G__37540;
continue;
}
} else {
var temp__5823__auto___37541__$1 = cljs.core.seq(seq__36750_37527);
if(temp__5823__auto___37541__$1){
var seq__36750_37542__$1 = temp__5823__auto___37541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36750_37542__$1)){
var c__5525__auto___37543 = cljs.core.chunk_first(seq__36750_37542__$1);
var G__37544 = cljs.core.chunk_rest(seq__36750_37542__$1);
var G__37545 = c__5525__auto___37543;
var G__37546 = cljs.core.count(c__5525__auto___37543);
var G__37547 = (0);
seq__36750_37527 = G__37544;
chunk__36752_37528 = G__37545;
count__36753_37529 = G__37546;
i__36754_37530 = G__37547;
continue;
} else {
var child_37554 = cljs.core.first(seq__36750_37542__$1);
if(cljs.core.truth_(child_37554)){
node.appendChild(child_37554);


var G__37555 = cljs.core.next(seq__36750_37542__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__36750_37527 = G__37555;
chunk__36752_37528 = G__37556;
count__36753_37529 = G__37557;
i__36754_37530 = G__37558;
continue;
} else {
var G__37560 = cljs.core.next(seq__36750_37542__$1);
var G__37561 = null;
var G__37562 = (0);
var G__37563 = (0);
seq__36750_37527 = G__37560;
chunk__36752_37528 = G__37561;
count__36753_37529 = G__37562;
i__36754_37530 = G__37563;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37525);
}
}


var G__37564 = cljs.core.next(seq__36602_37517__$1);
var G__37565 = null;
var G__37566 = (0);
var G__37567 = (0);
seq__36602_37468 = G__37564;
chunk__36604_37469 = G__37565;
count__36605_37470 = G__37566;
i__36606_37471 = G__37567;
continue;
} else {
var G__37568 = cljs.core.next(seq__36602_37517__$1);
var G__37569 = null;
var G__37570 = (0);
var G__37571 = (0);
seq__36602_37468 = G__37568;
chunk__36604_37469 = G__37569;
count__36605_37470 = G__37570;
i__36606_37471 = G__37571;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37582 = arguments.length;
var i__5727__auto___37583 = (0);
while(true){
if((i__5727__auto___37583 < len__5726__auto___37582)){
args__5732__auto__.push((arguments[i__5727__auto___37583]));

var G__37584 = (i__5727__auto___37583 + (1));
i__5727__auto___37583 = G__37584;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36778){
var G__36779 = cljs.core.first(seq36778);
var seq36778__$1 = cljs.core.next(seq36778);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36779,seq36778__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
