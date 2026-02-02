goog.provide('rp.core');
if((typeof rp !== 'undefined') && (typeof rp.core !== 'undefined') && (typeof rp.core.root !== 'undefined')){
} else {
rp.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
rp.core.register_service_worker = (function rp$core$register_service_worker(){
if(cljs.core.truth_(navigator.serviceWorker)){
return navigator.serviceWorker.register("/sw.js");
} else {
return null;
}
});
rp.core.init_BANG_ = (function rp$core$init_BANG_(){
return rp.storage.load_db_BANG_((function (){
if(cljs.core.truth_(cljs.core.deref(rp.core.root))){
} else {
cljs.core.reset_BANG_(rp.core.root,reagent.dom.client.create_root(document.getElementById("app")));
}

reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rp.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.app], null));

return rp.core.register_service_worker();
}));
});

//# sourceMappingURL=rp.core.js.map
