goog.provide('rp.storage');
rp.storage.DB_KEY = "rp-workout-db";
rp.storage.save_db_BANG_ = (function rp$storage$save_db_BANG_(){
return localStorage.setItem(rp.storage.DB_KEY,rp.db.db__GT_edn());
});
/**
 * Load persisted data and set up auto-save. Calls on-complete when ready.
 */
rp.storage.load_db_BANG_ = (function rp$storage$load_db_BANG_(on_complete){
var temp__5823__auto___49705 = localStorage.getItem(rp.storage.DB_KEY);
if(cljs.core.truth_(temp__5823__auto___49705)){
var data_49707 = temp__5823__auto___49705;
rp.db.load_from_edn_BANG_(data_49707);
} else {
}

cljs.core.add_watch(rp.db.db_version,new cljs.core.Keyword(null,"auto-save","auto-save",1805740650),(function (_,___$1,___$2,___$3){
return rp.storage.save_db_BANG_();
}));

return (on_complete.cljs$core$IFn$_invoke$arity$0 ? on_complete.cljs$core$IFn$_invoke$arity$0() : on_complete.call(null, ));
});

//# sourceMappingURL=rp.storage.js.map
