goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____64569 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____64569))
{return or__3548__auto____64569;
} else
{var or__3548__auto____64570 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____64570))
{return or__3548__auto____64570;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__64634 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____64571 = this$;

if(cljs.core.truth_(and__3546__auto____64571))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64571;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____64572 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64572))
{return or__3548__auto____64572;
} else
{var or__3548__auto____64573 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64573))
{return or__3548__auto____64573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__64635 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____64574 = this$;

if(cljs.core.truth_(and__3546__auto____64574))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64574;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____64575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64575))
{return or__3548__auto____64575;
} else
{var or__3548__auto____64576 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64576))
{return or__3548__auto____64576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__64636 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____64577 = this$;

if(cljs.core.truth_(and__3546__auto____64577))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64577;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____64578 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64578))
{return or__3548__auto____64578;
} else
{var or__3548__auto____64579 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64579))
{return or__3548__auto____64579;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__64637 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____64580 = this$;

if(cljs.core.truth_(and__3546__auto____64580))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64580;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____64581 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64581))
{return or__3548__auto____64581;
} else
{var or__3548__auto____64582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64582))
{return or__3548__auto____64582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__64638 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____64583 = this$;

if(cljs.core.truth_(and__3546__auto____64583))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64583;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____64584 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64584))
{return or__3548__auto____64584;
} else
{var or__3548__auto____64585 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64585))
{return or__3548__auto____64585;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__64639 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____64586 = this$;

if(cljs.core.truth_(and__3546__auto____64586))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64586;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____64587 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64587))
{return or__3548__auto____64587;
} else
{var or__3548__auto____64588 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64588))
{return or__3548__auto____64588;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__64640 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____64589 = this$;

if(cljs.core.truth_(and__3546__auto____64589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____64590 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64590))
{return or__3548__auto____64590;
} else
{var or__3548__auto____64591 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64591))
{return or__3548__auto____64591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__64641 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____64592 = this$;

if(cljs.core.truth_(and__3546__auto____64592))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64592;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____64593 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64593))
{return or__3548__auto____64593;
} else
{var or__3548__auto____64594 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64594))
{return or__3548__auto____64594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__64642 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____64595 = this$;

if(cljs.core.truth_(and__3546__auto____64595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____64596 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64596))
{return or__3548__auto____64596;
} else
{var or__3548__auto____64597 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64597))
{return or__3548__auto____64597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__64643 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____64598 = this$;

if(cljs.core.truth_(and__3546__auto____64598))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64598;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____64599 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64599))
{return or__3548__auto____64599;
} else
{var or__3548__auto____64600 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64600))
{return or__3548__auto____64600;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__64644 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____64601 = this$;

if(cljs.core.truth_(and__3546__auto____64601))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64601;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____64602 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64602))
{return or__3548__auto____64602;
} else
{var or__3548__auto____64603 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64603))
{return or__3548__auto____64603;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__64645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____64604 = this$;

if(cljs.core.truth_(and__3546__auto____64604))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64604;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____64605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64605))
{return or__3548__auto____64605;
} else
{var or__3548__auto____64606 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64606))
{return or__3548__auto____64606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__64646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____64607 = this$;

if(cljs.core.truth_(and__3546__auto____64607))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64607;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____64608 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64608))
{return or__3548__auto____64608;
} else
{var or__3548__auto____64609 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64609))
{return or__3548__auto____64609;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__64647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____64610 = this$;

if(cljs.core.truth_(and__3546__auto____64610))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64610;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____64611 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64611))
{return or__3548__auto____64611;
} else
{var or__3548__auto____64612 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64612))
{return or__3548__auto____64612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__64648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____64613 = this$;

if(cljs.core.truth_(and__3546__auto____64613))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64613;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____64614 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64614))
{return or__3548__auto____64614;
} else
{var or__3548__auto____64615 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64615))
{return or__3548__auto____64615;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__64649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____64616 = this$;

if(cljs.core.truth_(and__3546__auto____64616))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64616;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____64617 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64617))
{return or__3548__auto____64617;
} else
{var or__3548__auto____64618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64618))
{return or__3548__auto____64618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__64650 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____64619 = this$;

if(cljs.core.truth_(and__3546__auto____64619))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64619;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____64620 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64620))
{return or__3548__auto____64620;
} else
{var or__3548__auto____64621 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64621))
{return or__3548__auto____64621;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__64651 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____64622 = this$;

if(cljs.core.truth_(and__3546__auto____64622))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64622;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____64623 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64623))
{return or__3548__auto____64623;
} else
{var or__3548__auto____64624 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64624))
{return or__3548__auto____64624;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__64652 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____64625 = this$;

if(cljs.core.truth_(and__3546__auto____64625))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64625;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____64626 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64626))
{return or__3548__auto____64626;
} else
{var or__3548__auto____64627 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64627))
{return or__3548__auto____64627;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__64653 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____64628 = this$;

if(cljs.core.truth_(and__3546__auto____64628))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64628;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____64629 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64629))
{return or__3548__auto____64629;
} else
{var or__3548__auto____64630 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64630))
{return or__3548__auto____64630;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__64654 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____64631 = this$;

if(cljs.core.truth_(and__3546__auto____64631))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____64631;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____64632 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64632))
{return or__3548__auto____64632;
} else
{var or__3548__auto____64633 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____64633))
{return or__3548__auto____64633;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__64634.call(this,this$);
case  2 :
return _invoke__64635.call(this,this$,a);
case  3 :
return _invoke__64636.call(this,this$,a,b);
case  4 :
return _invoke__64637.call(this,this$,a,b,c);
case  5 :
return _invoke__64638.call(this,this$,a,b,c,d);
case  6 :
return _invoke__64639.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__64640.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__64641.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__64642.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__64643.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__64644.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__64645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__64646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__64647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__64648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__64649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__64650.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__64651.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__64652.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__64653.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__64654.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____64656 = coll;

if(cljs.core.truth_(and__3546__auto____64656))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____64656;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____64657 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64657))
{return or__3548__auto____64657;
} else
{var or__3548__auto____64658 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____64658))
{return or__3548__auto____64658;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____64659 = coll;

if(cljs.core.truth_(and__3546__auto____64659))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____64659;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____64660 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64660))
{return or__3548__auto____64660;
} else
{var or__3548__auto____64661 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____64661))
{return or__3548__auto____64661;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____64662 = coll;

if(cljs.core.truth_(and__3546__auto____64662))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____64662;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____64663 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64663))
{return or__3548__auto____64663;
} else
{var or__3548__auto____64664 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____64664))
{return or__3548__auto____64664;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__64671 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____64665 = coll;

if(cljs.core.truth_(and__3546__auto____64665))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____64665;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____64666 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64666))
{return or__3548__auto____64666;
} else
{var or__3548__auto____64667 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____64667))
{return or__3548__auto____64667;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__64672 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____64668 = coll;

if(cljs.core.truth_(and__3546__auto____64668))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____64668;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____64669 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64669))
{return or__3548__auto____64669;
} else
{var or__3548__auto____64670 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____64670))
{return or__3548__auto____64670;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__64671.call(this,coll,n);
case  3 :
return _nth__64672.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____64674 = coll;

if(cljs.core.truth_(and__3546__auto____64674))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____64674;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____64675 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64675))
{return or__3548__auto____64675;
} else
{var or__3548__auto____64676 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____64676))
{return or__3548__auto____64676;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____64677 = coll;

if(cljs.core.truth_(and__3546__auto____64677))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____64677;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____64678 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64678))
{return or__3548__auto____64678;
} else
{var or__3548__auto____64679 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____64679))
{return or__3548__auto____64679;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__64686 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____64680 = o;

if(cljs.core.truth_(and__3546__auto____64680))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____64680;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____64681 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64681))
{return or__3548__auto____64681;
} else
{var or__3548__auto____64682 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____64682))
{return or__3548__auto____64682;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__64687 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____64683 = o;

if(cljs.core.truth_(and__3546__auto____64683))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____64683;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____64684 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64684))
{return or__3548__auto____64684;
} else
{var or__3548__auto____64685 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____64685))
{return or__3548__auto____64685;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__64686.call(this,o,k);
case  3 :
return _lookup__64687.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____64689 = coll;

if(cljs.core.truth_(and__3546__auto____64689))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____64689;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____64690 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64690))
{return or__3548__auto____64690;
} else
{var or__3548__auto____64691 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____64691))
{return or__3548__auto____64691;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____64692 = coll;

if(cljs.core.truth_(and__3546__auto____64692))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____64692;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____64693 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64693))
{return or__3548__auto____64693;
} else
{var or__3548__auto____64694 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____64694))
{return or__3548__auto____64694;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____64695 = coll;

if(cljs.core.truth_(and__3546__auto____64695))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____64695;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____64696 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64696))
{return or__3548__auto____64696;
} else
{var or__3548__auto____64697 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____64697))
{return or__3548__auto____64697;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____64698 = coll;

if(cljs.core.truth_(and__3546__auto____64698))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____64698;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____64699 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64699))
{return or__3548__auto____64699;
} else
{var or__3548__auto____64700 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____64700))
{return or__3548__auto____64700;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____64701 = coll;

if(cljs.core.truth_(and__3546__auto____64701))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____64701;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____64702 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64702))
{return or__3548__auto____64702;
} else
{var or__3548__auto____64703 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____64703))
{return or__3548__auto____64703;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____64704 = coll;

if(cljs.core.truth_(and__3546__auto____64704))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____64704;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____64705 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64705))
{return or__3548__auto____64705;
} else
{var or__3548__auto____64706 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____64706))
{return or__3548__auto____64706;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____64707 = coll;

if(cljs.core.truth_(and__3546__auto____64707))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____64707;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____64708 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64708))
{return or__3548__auto____64708;
} else
{var or__3548__auto____64709 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____64709))
{return or__3548__auto____64709;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____64710 = o;

if(cljs.core.truth_(and__3546__auto____64710))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____64710;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____64711 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64711))
{return or__3548__auto____64711;
} else
{var or__3548__auto____64712 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____64712))
{return or__3548__auto____64712;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____64713 = o;

if(cljs.core.truth_(and__3546__auto____64713))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____64713;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____64714 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64714))
{return or__3548__auto____64714;
} else
{var or__3548__auto____64715 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____64715))
{return or__3548__auto____64715;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____64716 = o;

if(cljs.core.truth_(and__3546__auto____64716))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____64716;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____64717 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64717))
{return or__3548__auto____64717;
} else
{var or__3548__auto____64718 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____64718))
{return or__3548__auto____64718;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____64719 = o;

if(cljs.core.truth_(and__3546__auto____64719))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____64719;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____64720 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64720))
{return or__3548__auto____64720;
} else
{var or__3548__auto____64721 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____64721))
{return or__3548__auto____64721;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__64728 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____64722 = coll;

if(cljs.core.truth_(and__3546__auto____64722))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____64722;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____64723 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64723))
{return or__3548__auto____64723;
} else
{var or__3548__auto____64724 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____64724))
{return or__3548__auto____64724;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__64729 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____64725 = coll;

if(cljs.core.truth_(and__3546__auto____64725))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____64725;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____64726 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____64726))
{return or__3548__auto____64726;
} else
{var or__3548__auto____64727 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____64727))
{return or__3548__auto____64727;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__64728.call(this,coll,f);
case  3 :
return _reduce__64729.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____64731 = o;

if(cljs.core.truth_(and__3546__auto____64731))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____64731;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____64732 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64732))
{return or__3548__auto____64732;
} else
{var or__3548__auto____64733 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____64733))
{return or__3548__auto____64733;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____64734 = o;

if(cljs.core.truth_(and__3546__auto____64734))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____64734;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____64735 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64735))
{return or__3548__auto____64735;
} else
{var or__3548__auto____64736 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____64736))
{return or__3548__auto____64736;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____64737 = o;

if(cljs.core.truth_(and__3546__auto____64737))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____64737;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____64738 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64738))
{return or__3548__auto____64738;
} else
{var or__3548__auto____64739 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____64739))
{return or__3548__auto____64739;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____64740 = o;

if(cljs.core.truth_(and__3546__auto____64740))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____64740;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____64741 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____64741))
{return or__3548__auto____64741;
} else
{var or__3548__auto____64742 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____64742))
{return or__3548__auto____64742;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____64743 = d;

if(cljs.core.truth_(and__3546__auto____64743))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____64743;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____64744 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____64744))
{return or__3548__auto____64744;
} else
{var or__3548__auto____64745 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____64745))
{return or__3548__auto____64745;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____64746 = this$;

if(cljs.core.truth_(and__3546__auto____64746))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____64746;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____64747 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64747))
{return or__3548__auto____64747;
} else
{var or__3548__auto____64748 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____64748))
{return or__3548__auto____64748;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____64749 = this$;

if(cljs.core.truth_(and__3546__auto____64749))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____64749;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____64750 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64750))
{return or__3548__auto____64750;
} else
{var or__3548__auto____64751 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____64751))
{return or__3548__auto____64751;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____64752 = this$;

if(cljs.core.truth_(and__3546__auto____64752))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____64752;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____64753 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____64753))
{return or__3548__auto____64753;
} else
{var or__3548__auto____64754 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____64754))
{return or__3548__auto____64754;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__64755 = null;
var G__64755__64756 = (function (o,k){
return null;
});
var G__64755__64757 = (function (o,k,not_found){
return not_found;
});
G__64755 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__64755__64756.call(this,o,k);
case  3 :
return G__64755__64757.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64755;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__64759 = null;
var G__64759__64760 = (function (_,f){
return f.call(null);
});
var G__64759__64761 = (function (_,f,start){
return start;
});
G__64759 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__64759__64760.call(this,_,f);
case  3 :
return G__64759__64761.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64759;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__64763 = null;
var G__64763__64764 = (function (_,n){
return null;
});
var G__64763__64765 = (function (_,n,not_found){
return not_found;
});
G__64763 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__64763__64764.call(this,_,n);
case  3 :
return G__64763__64765.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64763;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__64773 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__64767 = cljs.core._nth.call(null,cicoll,0);
var n__64768 = 1;

while(true){
if(cljs.core.truth_((n__64768 < cljs.core._count.call(null,cicoll))))
{{
var G__64777 = f.call(null,val__64767,cljs.core._nth.call(null,cicoll,n__64768));
var G__64778 = (n__64768 + 1);
val__64767 = G__64777;
n__64768 = G__64778;
continue;
}
} else
{return val__64767;
}
break;
}
}
});
var ci_reduce__64774 = (function (cicoll,f,val){
var val__64769 = val;
var n__64770 = 0;

while(true){
if(cljs.core.truth_((n__64770 < cljs.core._count.call(null,cicoll))))
{{
var G__64779 = f.call(null,val__64769,cljs.core._nth.call(null,cicoll,n__64770));
var G__64780 = (n__64770 + 1);
val__64769 = G__64779;
n__64770 = G__64780;
continue;
}
} else
{return val__64769;
}
break;
}
});
var ci_reduce__64775 = (function (cicoll,f,val,idx){
var val__64771 = val;
var n__64772 = idx;

while(true){
if(cljs.core.truth_((n__64772 < cljs.core._count.call(null,cicoll))))
{{
var G__64781 = f.call(null,val__64771,cljs.core._nth.call(null,cicoll,n__64772));
var G__64782 = (n__64772 + 1);
val__64771 = G__64781;
n__64772 = G__64782;
continue;
}
} else
{return val__64771;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__64773.call(this,cicoll,f);
case  3 :
return ci_reduce__64774.call(this,cicoll,f,val);
case  4 :
return ci_reduce__64775.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__64783 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__64796 = null;
var G__64796__64797 = (function (_,f){
var this__64784 = this;
return cljs.core.ci_reduce.call(null,this__64784.a,f,(this__64784.a[this__64784.i]),(this__64784.i + 1));
});
var G__64796__64798 = (function (_,f,start){
var this__64785 = this;
return cljs.core.ci_reduce.call(null,this__64785.a,f,start,this__64785.i);
});
G__64796 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__64796__64797.call(this,_,f);
case  3 :
return G__64796__64798.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64796;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__64786 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__64787 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__64800 = null;
var G__64800__64801 = (function (coll,n){
var this__64788 = this;
var i__64789 = (n + this__64788.i);

if(cljs.core.truth_((i__64789 < this__64788.a.length)))
{return (this__64788.a[i__64789]);
} else
{return null;
}
});
var G__64800__64802 = (function (coll,n,not_found){
var this__64790 = this;
var i__64791 = (n + this__64790.i);

if(cljs.core.truth_((i__64791 < this__64790.a.length)))
{return (this__64790.a[i__64791]);
} else
{return not_found;
}
});
G__64800 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__64800__64801.call(this,coll,n);
case  3 :
return G__64800__64802.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64800;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__64792 = this;
return (this__64792.a.length - this__64792.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__64793 = this;
return (this__64793.a[this__64793.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__64794 = this;
if(cljs.core.truth_(((this__64794.i + 1) < this__64794.a.length)))
{return (new cljs.core.IndexedSeq(this__64794.a,(this__64794.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__64795 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__64804 = null;
var G__64804__64805 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__64804__64806 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__64804 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__64804__64805.call(this,array,f);
case  3 :
return G__64804__64806.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64804;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__64808 = null;
var G__64808__64809 = (function (array,k){
return (array[k]);
});
var G__64808__64810 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__64808 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__64808__64809.call(this,array,k);
case  3 :
return G__64808__64810.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64808;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__64812 = null;
var G__64812__64813 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__64812__64814 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__64812 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__64812__64813.call(this,array,n);
case  3 :
return G__64812__64814.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64812;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____64816 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____64816))
{var s__64817 = temp__3698__auto____64816;

return cljs.core._first.call(null,s__64817);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__64818 = cljs.core.next.call(null,s);
s = G__64818;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__64819 = cljs.core.seq.call(null,x);
var n__64820 = 0;

while(true){
if(cljs.core.truth_(s__64819))
{{
var G__64821 = cljs.core.next.call(null,s__64819);
var G__64822 = (n__64820 + 1);
s__64819 = G__64821;
n__64820 = G__64822;
continue;
}
} else
{return n__64820;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__64823 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__64824 = (function() { 
var G__64826__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__64827 = conj.call(null,coll,x);
var G__64828 = cljs.core.first.call(null,xs);
var G__64829 = cljs.core.next.call(null,xs);
coll = G__64827;
x = G__64828;
xs = G__64829;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__64826 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64826__delegate.call(this, coll, x, xs);
};
G__64826.cljs$lang$maxFixedArity = 2;
G__64826.cljs$lang$applyTo = (function (arglist__64830){
var coll = cljs.core.first(arglist__64830);
var x = cljs.core.first(cljs.core.next(arglist__64830));
var xs = cljs.core.rest(cljs.core.next(arglist__64830));
return G__64826__delegate.call(this, coll, x, xs);
});
return G__64826;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__64823.call(this,coll,x);
default:
return conj__64824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__64824.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__64831 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__64832 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__64831.call(this,coll,n);
case  3 :
return nth__64832.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__64834 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__64835 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__64834.call(this,o,k);
case  3 :
return get__64835.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__64838 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__64839 = (function() { 
var G__64841__delegate = function (coll,k,v,kvs){
while(true){
var ret__64837 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__64842 = ret__64837;
var G__64843 = cljs.core.first.call(null,kvs);
var G__64844 = cljs.core.second.call(null,kvs);
var G__64845 = cljs.core.nnext.call(null,kvs);
coll = G__64842;
k = G__64843;
v = G__64844;
kvs = G__64845;
continue;
}
} else
{return ret__64837;
}
break;
}
};
var G__64841 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__64841__delegate.call(this, coll, k, v, kvs);
};
G__64841.cljs$lang$maxFixedArity = 3;
G__64841.cljs$lang$applyTo = (function (arglist__64846){
var coll = cljs.core.first(arglist__64846);
var k = cljs.core.first(cljs.core.next(arglist__64846));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__64846)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__64846)));
return G__64841__delegate.call(this, coll, k, v, kvs);
});
return G__64841;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__64838.call(this,coll,k,v);
default:
return assoc__64839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__64839.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__64848 = (function (coll){
return coll;
});
var dissoc__64849 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__64850 = (function() { 
var G__64852__delegate = function (coll,k,ks){
while(true){
var ret__64847 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__64853 = ret__64847;
var G__64854 = cljs.core.first.call(null,ks);
var G__64855 = cljs.core.next.call(null,ks);
coll = G__64853;
k = G__64854;
ks = G__64855;
continue;
}
} else
{return ret__64847;
}
break;
}
};
var G__64852 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64852__delegate.call(this, coll, k, ks);
};
G__64852.cljs$lang$maxFixedArity = 2;
G__64852.cljs$lang$applyTo = (function (arglist__64856){
var coll = cljs.core.first(arglist__64856);
var k = cljs.core.first(cljs.core.next(arglist__64856));
var ks = cljs.core.rest(cljs.core.next(arglist__64856));
return G__64852__delegate.call(this, coll, k, ks);
});
return G__64852;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__64848.call(this,coll);
case  2 :
return dissoc__64849.call(this,coll,k);
default:
return dissoc__64850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__64850.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__450__auto____64857 = o;

if(cljs.core.truth_((function (){var and__3546__auto____64858 = x__450__auto____64857;

if(cljs.core.truth_(and__3546__auto____64858))
{var and__3546__auto____64859 = x__450__auto____64857.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____64859))
{return cljs.core.not.call(null,x__450__auto____64857.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____64859;
}
} else
{return and__3546__auto____64858;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____64857);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__64861 = (function (coll){
return coll;
});
var disj__64862 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__64863 = (function() { 
var G__64865__delegate = function (coll,k,ks){
while(true){
var ret__64860 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__64866 = ret__64860;
var G__64867 = cljs.core.first.call(null,ks);
var G__64868 = cljs.core.next.call(null,ks);
coll = G__64866;
k = G__64867;
ks = G__64868;
continue;
}
} else
{return ret__64860;
}
break;
}
};
var G__64865 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64865__delegate.call(this, coll, k, ks);
};
G__64865.cljs$lang$maxFixedArity = 2;
G__64865.cljs$lang$applyTo = (function (arglist__64869){
var coll = cljs.core.first(arglist__64869);
var k = cljs.core.first(cljs.core.next(arglist__64869));
var ks = cljs.core.rest(cljs.core.next(arglist__64869));
return G__64865__delegate.call(this, coll, k, ks);
});
return G__64865;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__64861.call(this,coll);
case  2 :
return disj__64862.call(this,coll,k);
default:
return disj__64863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__64863.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____64870 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64871 = x__450__auto____64870;

if(cljs.core.truth_(and__3546__auto____64871))
{var and__3546__auto____64872 = x__450__auto____64870.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____64872))
{return cljs.core.not.call(null,x__450__auto____64870.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____64872;
}
} else
{return and__3546__auto____64871;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____64870);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____64873 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64874 = x__450__auto____64873;

if(cljs.core.truth_(and__3546__auto____64874))
{var and__3546__auto____64875 = x__450__auto____64873.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____64875))
{return cljs.core.not.call(null,x__450__auto____64873.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____64875;
}
} else
{return and__3546__auto____64874;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____64873);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____64876 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64877 = x__450__auto____64876;

if(cljs.core.truth_(and__3546__auto____64877))
{var and__3546__auto____64878 = x__450__auto____64876.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____64878))
{return cljs.core.not.call(null,x__450__auto____64876.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____64878;
}
} else
{return and__3546__auto____64877;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____64876);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____64879 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64880 = x__450__auto____64879;

if(cljs.core.truth_(and__3546__auto____64880))
{var and__3546__auto____64881 = x__450__auto____64879.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____64881))
{return cljs.core.not.call(null,x__450__auto____64879.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____64881;
}
} else
{return and__3546__auto____64880;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____64879);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____64882 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64883 = x__450__auto____64882;

if(cljs.core.truth_(and__3546__auto____64883))
{var and__3546__auto____64884 = x__450__auto____64882.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____64884))
{return cljs.core.not.call(null,x__450__auto____64882.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____64884;
}
} else
{return and__3546__auto____64883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____64882);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____64885 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64886 = x__450__auto____64885;

if(cljs.core.truth_(and__3546__auto____64886))
{var and__3546__auto____64887 = x__450__auto____64885.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____64887))
{return cljs.core.not.call(null,x__450__auto____64885.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____64887;
}
} else
{return and__3546__auto____64886;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____64885);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____64888 = x;

if(cljs.core.truth_((function (){var and__3546__auto____64889 = x__450__auto____64888;

if(cljs.core.truth_(and__3546__auto____64889))
{var and__3546__auto____64890 = x__450__auto____64888.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____64890))
{return cljs.core.not.call(null,x__450__auto____64888.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____64890;
}
} else
{return and__3546__auto____64889;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____64888);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__64891 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__64891.push(key);
}));
return keys__64891;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__450__auto____64892 = s;

if(cljs.core.truth_((function (){var and__3546__auto____64893 = x__450__auto____64892;

if(cljs.core.truth_(and__3546__auto____64893))
{var and__3546__auto____64894 = x__450__auto____64892.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____64894))
{return cljs.core.not.call(null,x__450__auto____64892.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____64894;
}
} else
{return and__3546__auto____64893;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____64892);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____64895 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____64895))
{return cljs.core.not.call(null,(function (){var or__3548__auto____64896 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____64896))
{return or__3548__auto____64896;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____64895;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____64897 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____64897))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____64897;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____64898 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____64898))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____64898;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____64899 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____64899))
{return (n == n.toFixed());
} else
{return and__3546__auto____64899;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____64900 = coll;

if(cljs.core.truth_(and__3546__auto____64900))
{var and__3546__auto____64901 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____64901))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____64901;
}
} else
{return and__3546__auto____64900;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___64906 = (function (x){
return true;
});
var distinct_QMARK___64907 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___64908 = (function() { 
var G__64910__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__64902 = cljs.core.set([y,x]);
var xs__64903 = more;

while(true){
var x__64904 = cljs.core.first.call(null,xs__64903);
var etc__64905 = cljs.core.next.call(null,xs__64903);

if(cljs.core.truth_(xs__64903))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__64902,x__64904)))
{return false;
} else
{{
var G__64911 = cljs.core.conj.call(null,s__64902,x__64904);
var G__64912 = etc__64905;
s__64902 = G__64911;
xs__64903 = G__64912;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__64910 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64910__delegate.call(this, x, y, more);
};
G__64910.cljs$lang$maxFixedArity = 2;
G__64910.cljs$lang$applyTo = (function (arglist__64913){
var x = cljs.core.first(arglist__64913);
var y = cljs.core.first(cljs.core.next(arglist__64913));
var more = cljs.core.rest(cljs.core.next(arglist__64913));
return G__64910__delegate.call(this, x, y, more);
});
return G__64910;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___64906.call(this,x);
case  2 :
return distinct_QMARK___64907.call(this,x,y);
default:
return distinct_QMARK___64908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___64908.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__64914 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__64914)))
{return r__64914;
} else
{if(cljs.core.truth_(r__64914))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__64916 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__64917 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__64915 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__64915,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__64915);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__64916.call(this,comp);
case  2 :
return sort__64917.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__64919 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__64920 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__64919.call(this,keyfn,comp);
case  3 :
return sort_by__64920.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__64922 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__64923 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__64922.call(this,f,val);
case  3 :
return reduce__64923.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__64929 = (function (f,coll){
var temp__3695__auto____64925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____64925))
{var s__64926 = temp__3695__auto____64925;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__64926),cljs.core.next.call(null,s__64926));
} else
{return f.call(null);
}
});
var seq_reduce__64930 = (function (f,val,coll){
var val__64927 = val;
var coll__64928 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__64928))
{{
var G__64932 = f.call(null,val__64927,cljs.core.first.call(null,coll__64928));
var G__64933 = cljs.core.next.call(null,coll__64928);
val__64927 = G__64932;
coll__64928 = G__64933;
continue;
}
} else
{return val__64927;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__64929.call(this,f,val);
case  3 :
return seq_reduce__64930.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__64934 = null;
var G__64934__64935 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__64934__64936 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__64934 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__64934__64935.call(this,coll,f);
case  3 :
return G__64934__64936.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__64934;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___64938 = (function (){
return 0;
});
var _PLUS___64939 = (function (x){
return x;
});
var _PLUS___64940 = (function (x,y){
return (x + y);
});
var _PLUS___64941 = (function() { 
var G__64943__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__64943 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64943__delegate.call(this, x, y, more);
};
G__64943.cljs$lang$maxFixedArity = 2;
G__64943.cljs$lang$applyTo = (function (arglist__64944){
var x = cljs.core.first(arglist__64944);
var y = cljs.core.first(cljs.core.next(arglist__64944));
var more = cljs.core.rest(cljs.core.next(arglist__64944));
return G__64943__delegate.call(this, x, y, more);
});
return G__64943;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___64938.call(this);
case  1 :
return _PLUS___64939.call(this,x);
case  2 :
return _PLUS___64940.call(this,x,y);
default:
return _PLUS___64941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___64941.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___64945 = (function (x){
return (- x);
});
var ___64946 = (function (x,y){
return (x - y);
});
var ___64947 = (function() { 
var G__64949__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__64949 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64949__delegate.call(this, x, y, more);
};
G__64949.cljs$lang$maxFixedArity = 2;
G__64949.cljs$lang$applyTo = (function (arglist__64950){
var x = cljs.core.first(arglist__64950);
var y = cljs.core.first(cljs.core.next(arglist__64950));
var more = cljs.core.rest(cljs.core.next(arglist__64950));
return G__64949__delegate.call(this, x, y, more);
});
return G__64949;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___64945.call(this,x);
case  2 :
return ___64946.call(this,x,y);
default:
return ___64947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___64947.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___64951 = (function (){
return 1;
});
var _STAR___64952 = (function (x){
return x;
});
var _STAR___64953 = (function (x,y){
return (x * y);
});
var _STAR___64954 = (function() { 
var G__64956__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__64956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64956__delegate.call(this, x, y, more);
};
G__64956.cljs$lang$maxFixedArity = 2;
G__64956.cljs$lang$applyTo = (function (arglist__64957){
var x = cljs.core.first(arglist__64957);
var y = cljs.core.first(cljs.core.next(arglist__64957));
var more = cljs.core.rest(cljs.core.next(arglist__64957));
return G__64956__delegate.call(this, x, y, more);
});
return G__64956;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___64951.call(this);
case  1 :
return _STAR___64952.call(this,x);
case  2 :
return _STAR___64953.call(this,x,y);
default:
return _STAR___64954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___64954.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___64958 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___64959 = (function (x,y){
return (x / y);
});
var _SLASH___64960 = (function() { 
var G__64962__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__64962 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64962__delegate.call(this, x, y, more);
};
G__64962.cljs$lang$maxFixedArity = 2;
G__64962.cljs$lang$applyTo = (function (arglist__64963){
var x = cljs.core.first(arglist__64963);
var y = cljs.core.first(cljs.core.next(arglist__64963));
var more = cljs.core.rest(cljs.core.next(arglist__64963));
return G__64962__delegate.call(this, x, y, more);
});
return G__64962;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___64958.call(this,x);
case  2 :
return _SLASH___64959.call(this,x,y);
default:
return _SLASH___64960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___64960.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___64964 = (function (x){
return true;
});
var _LT___64965 = (function (x,y){
return (x < y);
});
var _LT___64966 = (function() { 
var G__64968__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__64969 = y;
var G__64970 = cljs.core.first.call(null,more);
var G__64971 = cljs.core.next.call(null,more);
x = G__64969;
y = G__64970;
more = G__64971;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__64968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64968__delegate.call(this, x, y, more);
};
G__64968.cljs$lang$maxFixedArity = 2;
G__64968.cljs$lang$applyTo = (function (arglist__64972){
var x = cljs.core.first(arglist__64972);
var y = cljs.core.first(cljs.core.next(arglist__64972));
var more = cljs.core.rest(cljs.core.next(arglist__64972));
return G__64968__delegate.call(this, x, y, more);
});
return G__64968;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___64964.call(this,x);
case  2 :
return _LT___64965.call(this,x,y);
default:
return _LT___64966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___64966.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___64973 = (function (x){
return true;
});
var _LT__EQ___64974 = (function (x,y){
return (x <= y);
});
var _LT__EQ___64975 = (function() { 
var G__64977__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__64978 = y;
var G__64979 = cljs.core.first.call(null,more);
var G__64980 = cljs.core.next.call(null,more);
x = G__64978;
y = G__64979;
more = G__64980;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__64977 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64977__delegate.call(this, x, y, more);
};
G__64977.cljs$lang$maxFixedArity = 2;
G__64977.cljs$lang$applyTo = (function (arglist__64981){
var x = cljs.core.first(arglist__64981);
var y = cljs.core.first(cljs.core.next(arglist__64981));
var more = cljs.core.rest(cljs.core.next(arglist__64981));
return G__64977__delegate.call(this, x, y, more);
});
return G__64977;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___64973.call(this,x);
case  2 :
return _LT__EQ___64974.call(this,x,y);
default:
return _LT__EQ___64975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___64975.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___64982 = (function (x){
return true;
});
var _GT___64983 = (function (x,y){
return (x > y);
});
var _GT___64984 = (function() { 
var G__64986__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__64987 = y;
var G__64988 = cljs.core.first.call(null,more);
var G__64989 = cljs.core.next.call(null,more);
x = G__64987;
y = G__64988;
more = G__64989;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__64986 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64986__delegate.call(this, x, y, more);
};
G__64986.cljs$lang$maxFixedArity = 2;
G__64986.cljs$lang$applyTo = (function (arglist__64990){
var x = cljs.core.first(arglist__64990);
var y = cljs.core.first(cljs.core.next(arglist__64990));
var more = cljs.core.rest(cljs.core.next(arglist__64990));
return G__64986__delegate.call(this, x, y, more);
});
return G__64986;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___64982.call(this,x);
case  2 :
return _GT___64983.call(this,x,y);
default:
return _GT___64984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___64984.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___64991 = (function (x){
return true;
});
var _GT__EQ___64992 = (function (x,y){
return (x >= y);
});
var _GT__EQ___64993 = (function() { 
var G__64995__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__64996 = y;
var G__64997 = cljs.core.first.call(null,more);
var G__64998 = cljs.core.next.call(null,more);
x = G__64996;
y = G__64997;
more = G__64998;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__64995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__64995__delegate.call(this, x, y, more);
};
G__64995.cljs$lang$maxFixedArity = 2;
G__64995.cljs$lang$applyTo = (function (arglist__64999){
var x = cljs.core.first(arglist__64999);
var y = cljs.core.first(cljs.core.next(arglist__64999));
var more = cljs.core.rest(cljs.core.next(arglist__64999));
return G__64995__delegate.call(this, x, y, more);
});
return G__64995;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___64991.call(this,x);
case  2 :
return _GT__EQ___64992.call(this,x,y);
default:
return _GT__EQ___64993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___64993.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__65000 = (function (x){
return x;
});
var max__65001 = (function (x,y){
return ((x > y) ? x : y);
});
var max__65002 = (function() { 
var G__65004__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__65004 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65004__delegate.call(this, x, y, more);
};
G__65004.cljs$lang$maxFixedArity = 2;
G__65004.cljs$lang$applyTo = (function (arglist__65005){
var x = cljs.core.first(arglist__65005);
var y = cljs.core.first(cljs.core.next(arglist__65005));
var more = cljs.core.rest(cljs.core.next(arglist__65005));
return G__65004__delegate.call(this, x, y, more);
});
return G__65004;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__65000.call(this,x);
case  2 :
return max__65001.call(this,x,y);
default:
return max__65002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__65002.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__65006 = (function (x){
return x;
});
var min__65007 = (function (x,y){
return ((x < y) ? x : y);
});
var min__65008 = (function() { 
var G__65010__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__65010 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65010__delegate.call(this, x, y, more);
};
G__65010.cljs$lang$maxFixedArity = 2;
G__65010.cljs$lang$applyTo = (function (arglist__65011){
var x = cljs.core.first(arglist__65011);
var y = cljs.core.first(cljs.core.next(arglist__65011));
var more = cljs.core.rest(cljs.core.next(arglist__65011));
return G__65010__delegate.call(this, x, y, more);
});
return G__65010;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__65006.call(this,x);
case  2 :
return min__65007.call(this,x,y);
default:
return min__65008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__65008.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__65012 = (n % d);

return cljs.core.fix.call(null,((n - rem__65012) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__65013 = cljs.core.quot.call(null,n,d);

return (n - (d * q__65013));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__65014 = (function (){
return Math.random.call(null);
});
var rand__65015 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__65014.call(this);
case  1 :
return rand__65015.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___65017 = (function (x){
return true;
});
var _EQ__EQ___65018 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___65019 = (function() { 
var G__65021__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__65022 = y;
var G__65023 = cljs.core.first.call(null,more);
var G__65024 = cljs.core.next.call(null,more);
x = G__65022;
y = G__65023;
more = G__65024;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__65021 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65021__delegate.call(this, x, y, more);
};
G__65021.cljs$lang$maxFixedArity = 2;
G__65021.cljs$lang$applyTo = (function (arglist__65025){
var x = cljs.core.first(arglist__65025);
var y = cljs.core.first(cljs.core.next(arglist__65025));
var more = cljs.core.rest(cljs.core.next(arglist__65025));
return G__65021__delegate.call(this, x, y, more);
});
return G__65021;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___65017.call(this,x);
case  2 :
return _EQ__EQ___65018.call(this,x,y);
default:
return _EQ__EQ___65019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___65019.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__65026 = n;
var xs__65027 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____65028 = xs__65027;

if(cljs.core.truth_(and__3546__auto____65028))
{return (n__65026 > 0);
} else
{return and__3546__auto____65028;
}
})()))
{{
var G__65029 = (n__65026 - 1);
var G__65030 = cljs.core.next.call(null,xs__65027);
n__65026 = G__65029;
xs__65027 = G__65030;
continue;
}
} else
{return xs__65027;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__65035 = null;
var G__65035__65036 = (function (coll,n){
var temp__3695__auto____65031 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____65031))
{var xs__65032 = temp__3695__auto____65031;

return cljs.core.first.call(null,xs__65032);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__65035__65037 = (function (coll,n,not_found){
var temp__3695__auto____65033 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____65033))
{var xs__65034 = temp__3695__auto____65033;

return cljs.core.first.call(null,xs__65034);
} else
{return not_found;
}
});
G__65035 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__65035__65036.call(this,coll,n);
case  3 :
return G__65035__65037.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65035;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___65039 = (function (){
return "";
});
var str_STAR___65040 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___65041 = (function() { 
var G__65043__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__65044 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__65045 = cljs.core.next.call(null,more);
sb = G__65044;
more = G__65045;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__65043 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__65043__delegate.call(this, x, ys);
};
G__65043.cljs$lang$maxFixedArity = 1;
G__65043.cljs$lang$applyTo = (function (arglist__65046){
var x = cljs.core.first(arglist__65046);
var ys = cljs.core.rest(arglist__65046);
return G__65043__delegate.call(this, x, ys);
});
return G__65043;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___65039.call(this);
case  1 :
return str_STAR___65040.call(this,x);
default:
return str_STAR___65041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___65041.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__65047 = (function (){
return "";
});
var str__65048 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__65049 = (function() { 
var G__65051__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__65051 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__65051__delegate.call(this, x, ys);
};
G__65051.cljs$lang$maxFixedArity = 1;
G__65051.cljs$lang$applyTo = (function (arglist__65052){
var x = cljs.core.first(arglist__65052);
var ys = cljs.core.rest(arglist__65052);
return G__65051__delegate.call(this, x, ys);
});
return G__65051;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__65047.call(this);
case  1 :
return str__65048.call(this,x);
default:
return str__65049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__65049.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__65053 = (function (s,start){
return s.substring(start);
});
var subs__65054 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__65053.call(this,s,start);
case  3 :
return subs__65054.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__65056 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__65057 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__65056.call(this,ns);
case  2 :
return symbol__65057.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__65059 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__65060 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__65059.call(this,ns);
case  2 :
return keyword__65060.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__65062 = cljs.core.seq.call(null,x);
var ys__65063 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__65062 === null)))
{return (ys__65063 === null);
} else
{if(cljs.core.truth_((ys__65063 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__65062),cljs.core.first.call(null,ys__65063))))
{{
var G__65064 = cljs.core.next.call(null,xs__65062);
var G__65065 = cljs.core.next.call(null,ys__65063);
xs__65062 = G__65064;
ys__65063 = G__65065;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__65066_SHARP_,p2__65067_SHARP_){
return cljs.core.hash_combine.call(null,p1__65066_SHARP_,cljs.core.hash.call(null,p2__65067_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__65068__65069 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__65068__65069))
{var G__65071__65073 = cljs.core.first.call(null,G__65068__65069);
var vec__65072__65074 = G__65071__65073;
var key_name__65075 = cljs.core.nth.call(null,vec__65072__65074,0,null);
var f__65076 = cljs.core.nth.call(null,vec__65072__65074,1,null);
var G__65068__65077 = G__65068__65069;

var G__65071__65078 = G__65071__65073;
var G__65068__65079 = G__65068__65077;

while(true){
var vec__65080__65081 = G__65071__65078;
var key_name__65082 = cljs.core.nth.call(null,vec__65080__65081,0,null);
var f__65083 = cljs.core.nth.call(null,vec__65080__65081,1,null);
var G__65068__65084 = G__65068__65079;

var str_name__65085 = cljs.core.name.call(null,key_name__65082);

obj[str_name__65085] = f__65083;
var temp__3698__auto____65086 = cljs.core.next.call(null,G__65068__65084);

if(cljs.core.truth_(temp__3698__auto____65086))
{var G__65068__65087 = temp__3698__auto____65086;

{
var G__65088 = cljs.core.first.call(null,G__65068__65087);
var G__65089 = G__65068__65087;
G__65071__65078 = G__65088;
G__65068__65079 = G__65089;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65090 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65091 = this;
return (new cljs.core.List(this__65091.meta,o,coll,(this__65091.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65092 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65093 = this;
return this__65093.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__65094 = this;
return this__65094.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__65095 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__65096 = this;
return this__65096.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__65097 = this;
return this__65097.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65098 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65099 = this;
return (new cljs.core.List(meta,this__65099.first,this__65099.rest,this__65099.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65100 = this;
return this__65100.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65101 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65102 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65103 = this;
return (new cljs.core.List(this__65103.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65104 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65105 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__65106 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__65107 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__65108 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__65109 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65110 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65111 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65112 = this;
return this__65112.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65113 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__65114){
var items = cljs.core.seq( arglist__65114 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65115 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65116 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65117 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65118 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__65118.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65119 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__65120 = this;
return this__65120.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__65121 = this;
if(cljs.core.truth_((this__65121.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__65121.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65122 = this;
return this__65122.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65123 = this;
return (new cljs.core.Cons(meta,this__65123.first,this__65123.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__65124 = null;
var G__65124__65125 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__65124__65126 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__65124 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__65124__65125.call(this,string,f);
case  3 :
return G__65124__65126.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65124;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__65128 = null;
var G__65128__65129 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__65128__65130 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__65128 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__65128__65129.call(this,string,k);
case  3 :
return G__65128__65130.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65128;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__65132 = null;
var G__65132__65133 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__65132__65134 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__65132 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__65132__65133.call(this,string,n);
case  3 :
return G__65132__65134.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65132;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__65142 = null;
var G__65142__65143 = (function (tsym65136,coll){
var tsym65136__65138 = this;

var this$__65139 = tsym65136__65138;

return cljs.core.get.call(null,coll,this$__65139.toString());
});
var G__65142__65144 = (function (tsym65137,coll,not_found){
var tsym65137__65140 = this;

var this$__65141 = tsym65137__65140;

return cljs.core.get.call(null,coll,this$__65141.toString(),not_found);
});
G__65142 = function(tsym65137,coll,not_found){
switch(arguments.length){
case  2 :
return G__65142__65143.call(this,tsym65137,coll);
case  3 :
return G__65142__65144.call(this,tsym65137,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65142;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__65146 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__65146;
} else
{lazy_seq.x = x__65146.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65147 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65148 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65149 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65150 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__65150.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65151 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__65152 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__65153 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65154 = this;
return this__65154.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65155 = this;
return (new cljs.core.LazySeq(meta,this__65155.realized,this__65155.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__65156 = cljs.core.array.call(null);

var s__65157 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__65157)))
{ary__65156.push(cljs.core.first.call(null,s__65157));
{
var G__65158 = cljs.core.next.call(null,s__65157);
s__65157 = G__65158;
continue;
}
} else
{return ary__65156;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__65159 = s;
var i__65160 = n;
var sum__65161 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____65162 = (i__65160 > 0);

if(cljs.core.truth_(and__3546__auto____65162))
{return cljs.core.seq.call(null,s__65159);
} else
{return and__3546__auto____65162;
}
})()))
{{
var G__65163 = cljs.core.next.call(null,s__65159);
var G__65164 = (i__65160 - 1);
var G__65165 = (sum__65161 + 1);
s__65159 = G__65163;
i__65160 = G__65164;
sum__65161 = G__65165;
continue;
}
} else
{return sum__65161;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__65169 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__65170 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__65171 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__65166 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__65166))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__65166),concat.call(null,cljs.core.rest.call(null,s__65166),y));
} else
{return y;
}
})));
});
var concat__65172 = (function() { 
var G__65174__delegate = function (x,y,zs){
var cat__65168 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__65167 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__65167))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__65167),cat.call(null,cljs.core.rest.call(null,xys__65167),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__65168.call(null,concat.call(null,x,y),zs);
};
var G__65174 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65174__delegate.call(this, x, y, zs);
};
G__65174.cljs$lang$maxFixedArity = 2;
G__65174.cljs$lang$applyTo = (function (arglist__65175){
var x = cljs.core.first(arglist__65175);
var y = cljs.core.first(cljs.core.next(arglist__65175));
var zs = cljs.core.rest(cljs.core.next(arglist__65175));
return G__65174__delegate.call(this, x, y, zs);
});
return G__65174;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__65169.call(this);
case  1 :
return concat__65170.call(this,x);
case  2 :
return concat__65171.call(this,x,y);
default:
return concat__65172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__65172.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___65176 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___65177 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___65178 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___65179 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___65180 = (function() { 
var G__65182__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__65182 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__65182__delegate.call(this, a, b, c, d, more);
};
G__65182.cljs$lang$maxFixedArity = 4;
G__65182.cljs$lang$applyTo = (function (arglist__65183){
var a = cljs.core.first(arglist__65183);
var b = cljs.core.first(cljs.core.next(arglist__65183));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65183)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65183))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65183))));
return G__65182__delegate.call(this, a, b, c, d, more);
});
return G__65182;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___65176.call(this,a);
case  2 :
return list_STAR___65177.call(this,a,b);
case  3 :
return list_STAR___65178.call(this,a,b,c);
case  4 :
return list_STAR___65179.call(this,a,b,c,d);
default:
return list_STAR___65180.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___65180.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__65193 = (function (f,args){
var fixed_arity__65184 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__65184 + 1)) <= fixed_arity__65184)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__65194 = (function (f,x,args){
var arglist__65185 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__65186 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__65185,fixed_arity__65186) <= fixed_arity__65186)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__65185));
} else
{return f.cljs$lang$applyTo(arglist__65185);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__65185));
}
});
var apply__65195 = (function (f,x,y,args){
var arglist__65187 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__65188 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__65187,fixed_arity__65188) <= fixed_arity__65188)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__65187));
} else
{return f.cljs$lang$applyTo(arglist__65187);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__65187));
}
});
var apply__65196 = (function (f,x,y,z,args){
var arglist__65189 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__65190 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__65189,fixed_arity__65190) <= fixed_arity__65190)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__65189));
} else
{return f.cljs$lang$applyTo(arglist__65189);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__65189));
}
});
var apply__65197 = (function() { 
var G__65199__delegate = function (f,a,b,c,d,args){
var arglist__65191 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__65192 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__65191,fixed_arity__65192) <= fixed_arity__65192)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__65191));
} else
{return f.cljs$lang$applyTo(arglist__65191);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__65191));
}
};
var G__65199 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__65199__delegate.call(this, f, a, b, c, d, args);
};
G__65199.cljs$lang$maxFixedArity = 5;
G__65199.cljs$lang$applyTo = (function (arglist__65200){
var f = cljs.core.first(arglist__65200);
var a = cljs.core.first(cljs.core.next(arglist__65200));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65200)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65200))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65200)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65200)))));
return G__65199__delegate.call(this, f, a, b, c, d, args);
});
return G__65199;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__65193.call(this,f,a);
case  3 :
return apply__65194.call(this,f,a,b);
case  4 :
return apply__65195.call(this,f,a,b,c);
case  5 :
return apply__65196.call(this,f,a,b,c,d);
default:
return apply__65197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__65197.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__65201){
var obj = cljs.core.first(arglist__65201);
var f = cljs.core.first(cljs.core.next(arglist__65201));
var args = cljs.core.rest(cljs.core.next(arglist__65201));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___65202 = (function (x){
return false;
});
var not_EQ___65203 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___65204 = (function() { 
var G__65206__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__65206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65206__delegate.call(this, x, y, more);
};
G__65206.cljs$lang$maxFixedArity = 2;
G__65206.cljs$lang$applyTo = (function (arglist__65207){
var x = cljs.core.first(arglist__65207);
var y = cljs.core.first(cljs.core.next(arglist__65207));
var more = cljs.core.rest(cljs.core.next(arglist__65207));
return G__65206__delegate.call(this, x, y, more);
});
return G__65206;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___65202.call(this,x);
case  2 :
return not_EQ___65203.call(this,x,y);
default:
return not_EQ___65204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___65204.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__65208 = pred;
var G__65209 = cljs.core.next.call(null,coll);
pred = G__65208;
coll = G__65209;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____65210 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____65210))
{return or__3548__auto____65210;
} else
{{
var G__65211 = pred;
var G__65212 = cljs.core.next.call(null,coll);
pred = G__65211;
coll = G__65212;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__65213 = null;
var G__65213__65214 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__65213__65215 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__65213__65216 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__65213__65217 = (function() { 
var G__65219__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__65219 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65219__delegate.call(this, x, y, zs);
};
G__65219.cljs$lang$maxFixedArity = 2;
G__65219.cljs$lang$applyTo = (function (arglist__65220){
var x = cljs.core.first(arglist__65220);
var y = cljs.core.first(cljs.core.next(arglist__65220));
var zs = cljs.core.rest(cljs.core.next(arglist__65220));
return G__65219__delegate.call(this, x, y, zs);
});
return G__65219;
})()
;
G__65213 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__65213__65214.call(this);
case  1 :
return G__65213__65215.call(this,x);
case  2 :
return G__65213__65216.call(this,x,y);
default:
return G__65213__65217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65213.cljs$lang$maxFixedArity = 2;
G__65213.cljs$lang$applyTo = G__65213__65217.cljs$lang$applyTo;
return G__65213;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__65221__delegate = function (args){
return x;
};
var G__65221 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__65221__delegate.call(this, args);
};
G__65221.cljs$lang$maxFixedArity = 0;
G__65221.cljs$lang$applyTo = (function (arglist__65222){
var args = cljs.core.seq( arglist__65222 );;
return G__65221__delegate.call(this, args);
});
return G__65221;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__65226 = (function (){
return cljs.core.identity;
});
var comp__65227 = (function (f){
return f;
});
var comp__65228 = (function (f,g){
return (function() {
var G__65232 = null;
var G__65232__65233 = (function (){
return f.call(null,g.call(null));
});
var G__65232__65234 = (function (x){
return f.call(null,g.call(null,x));
});
var G__65232__65235 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__65232__65236 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__65232__65237 = (function() { 
var G__65239__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__65239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65239__delegate.call(this, x, y, z, args);
};
G__65239.cljs$lang$maxFixedArity = 3;
G__65239.cljs$lang$applyTo = (function (arglist__65240){
var x = cljs.core.first(arglist__65240);
var y = cljs.core.first(cljs.core.next(arglist__65240));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65240)));
return G__65239__delegate.call(this, x, y, z, args);
});
return G__65239;
})()
;
G__65232 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__65232__65233.call(this);
case  1 :
return G__65232__65234.call(this,x);
case  2 :
return G__65232__65235.call(this,x,y);
case  3 :
return G__65232__65236.call(this,x,y,z);
default:
return G__65232__65237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65232.cljs$lang$maxFixedArity = 3;
G__65232.cljs$lang$applyTo = G__65232__65237.cljs$lang$applyTo;
return G__65232;
})()
});
var comp__65229 = (function (f,g,h){
return (function() {
var G__65241 = null;
var G__65241__65242 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__65241__65243 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__65241__65244 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__65241__65245 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__65241__65246 = (function() { 
var G__65248__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__65248 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65248__delegate.call(this, x, y, z, args);
};
G__65248.cljs$lang$maxFixedArity = 3;
G__65248.cljs$lang$applyTo = (function (arglist__65249){
var x = cljs.core.first(arglist__65249);
var y = cljs.core.first(cljs.core.next(arglist__65249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65249)));
return G__65248__delegate.call(this, x, y, z, args);
});
return G__65248;
})()
;
G__65241 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__65241__65242.call(this);
case  1 :
return G__65241__65243.call(this,x);
case  2 :
return G__65241__65244.call(this,x,y);
case  3 :
return G__65241__65245.call(this,x,y,z);
default:
return G__65241__65246.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65241.cljs$lang$maxFixedArity = 3;
G__65241.cljs$lang$applyTo = G__65241__65246.cljs$lang$applyTo;
return G__65241;
})()
});
var comp__65230 = (function() { 
var G__65250__delegate = function (f1,f2,f3,fs){
var fs__65223 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__65251__delegate = function (args){
var ret__65224 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__65223),args);
var fs__65225 = cljs.core.next.call(null,fs__65223);

while(true){
if(cljs.core.truth_(fs__65225))
{{
var G__65252 = cljs.core.first.call(null,fs__65225).call(null,ret__65224);
var G__65253 = cljs.core.next.call(null,fs__65225);
ret__65224 = G__65252;
fs__65225 = G__65253;
continue;
}
} else
{return ret__65224;
}
break;
}
};
var G__65251 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__65251__delegate.call(this, args);
};
G__65251.cljs$lang$maxFixedArity = 0;
G__65251.cljs$lang$applyTo = (function (arglist__65254){
var args = cljs.core.seq( arglist__65254 );;
return G__65251__delegate.call(this, args);
});
return G__65251;
})()
;
};
var G__65250 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65250__delegate.call(this, f1, f2, f3, fs);
};
G__65250.cljs$lang$maxFixedArity = 3;
G__65250.cljs$lang$applyTo = (function (arglist__65255){
var f1 = cljs.core.first(arglist__65255);
var f2 = cljs.core.first(cljs.core.next(arglist__65255));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65255)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65255)));
return G__65250__delegate.call(this, f1, f2, f3, fs);
});
return G__65250;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__65226.call(this);
case  1 :
return comp__65227.call(this,f1);
case  2 :
return comp__65228.call(this,f1,f2);
case  3 :
return comp__65229.call(this,f1,f2,f3);
default:
return comp__65230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__65230.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__65256 = (function (f,arg1){
return (function() { 
var G__65261__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__65261 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__65261__delegate.call(this, args);
};
G__65261.cljs$lang$maxFixedArity = 0;
G__65261.cljs$lang$applyTo = (function (arglist__65262){
var args = cljs.core.seq( arglist__65262 );;
return G__65261__delegate.call(this, args);
});
return G__65261;
})()
;
});
var partial__65257 = (function (f,arg1,arg2){
return (function() { 
var G__65263__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__65263 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__65263__delegate.call(this, args);
};
G__65263.cljs$lang$maxFixedArity = 0;
G__65263.cljs$lang$applyTo = (function (arglist__65264){
var args = cljs.core.seq( arglist__65264 );;
return G__65263__delegate.call(this, args);
});
return G__65263;
})()
;
});
var partial__65258 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__65265__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__65265 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__65265__delegate.call(this, args);
};
G__65265.cljs$lang$maxFixedArity = 0;
G__65265.cljs$lang$applyTo = (function (arglist__65266){
var args = cljs.core.seq( arglist__65266 );;
return G__65265__delegate.call(this, args);
});
return G__65265;
})()
;
});
var partial__65259 = (function() { 
var G__65267__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__65268__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__65268 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__65268__delegate.call(this, args);
};
G__65268.cljs$lang$maxFixedArity = 0;
G__65268.cljs$lang$applyTo = (function (arglist__65269){
var args = cljs.core.seq( arglist__65269 );;
return G__65268__delegate.call(this, args);
});
return G__65268;
})()
;
};
var G__65267 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__65267__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__65267.cljs$lang$maxFixedArity = 4;
G__65267.cljs$lang$applyTo = (function (arglist__65270){
var f = cljs.core.first(arglist__65270);
var arg1 = cljs.core.first(cljs.core.next(arglist__65270));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65270)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65270))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65270))));
return G__65267__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__65267;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__65256.call(this,f,arg1);
case  3 :
return partial__65257.call(this,f,arg1,arg2);
case  4 :
return partial__65258.call(this,f,arg1,arg2,arg3);
default:
return partial__65259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__65259.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__65271 = (function (f,x){
return (function() {
var G__65275 = null;
var G__65275__65276 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__65275__65277 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__65275__65278 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__65275__65279 = (function() { 
var G__65281__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__65281 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65281__delegate.call(this, a, b, c, ds);
};
G__65281.cljs$lang$maxFixedArity = 3;
G__65281.cljs$lang$applyTo = (function (arglist__65282){
var a = cljs.core.first(arglist__65282);
var b = cljs.core.first(cljs.core.next(arglist__65282));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65282)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65282)));
return G__65281__delegate.call(this, a, b, c, ds);
});
return G__65281;
})()
;
G__65275 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__65275__65276.call(this,a);
case  2 :
return G__65275__65277.call(this,a,b);
case  3 :
return G__65275__65278.call(this,a,b,c);
default:
return G__65275__65279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65275.cljs$lang$maxFixedArity = 3;
G__65275.cljs$lang$applyTo = G__65275__65279.cljs$lang$applyTo;
return G__65275;
})()
});
var fnil__65272 = (function (f,x,y){
return (function() {
var G__65283 = null;
var G__65283__65284 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__65283__65285 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__65283__65286 = (function() { 
var G__65288__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__65288 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65288__delegate.call(this, a, b, c, ds);
};
G__65288.cljs$lang$maxFixedArity = 3;
G__65288.cljs$lang$applyTo = (function (arglist__65289){
var a = cljs.core.first(arglist__65289);
var b = cljs.core.first(cljs.core.next(arglist__65289));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65289)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65289)));
return G__65288__delegate.call(this, a, b, c, ds);
});
return G__65288;
})()
;
G__65283 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__65283__65284.call(this,a,b);
case  3 :
return G__65283__65285.call(this,a,b,c);
default:
return G__65283__65286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65283.cljs$lang$maxFixedArity = 3;
G__65283.cljs$lang$applyTo = G__65283__65286.cljs$lang$applyTo;
return G__65283;
})()
});
var fnil__65273 = (function (f,x,y,z){
return (function() {
var G__65290 = null;
var G__65290__65291 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__65290__65292 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__65290__65293 = (function() { 
var G__65295__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__65295 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65295__delegate.call(this, a, b, c, ds);
};
G__65295.cljs$lang$maxFixedArity = 3;
G__65295.cljs$lang$applyTo = (function (arglist__65296){
var a = cljs.core.first(arglist__65296);
var b = cljs.core.first(cljs.core.next(arglist__65296));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65296)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65296)));
return G__65295__delegate.call(this, a, b, c, ds);
});
return G__65295;
})()
;
G__65290 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__65290__65291.call(this,a,b);
case  3 :
return G__65290__65292.call(this,a,b,c);
default:
return G__65290__65293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65290.cljs$lang$maxFixedArity = 3;
G__65290.cljs$lang$applyTo = G__65290__65293.cljs$lang$applyTo;
return G__65290;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__65271.call(this,f,x);
case  3 :
return fnil__65272.call(this,f,x,y);
case  4 :
return fnil__65273.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__65299 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65297 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65297))
{var s__65298 = temp__3698__auto____65297;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__65298)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__65298)));
} else
{return null;
}
})));
});

return mapi__65299.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65300 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65300))
{var s__65301 = temp__3698__auto____65300;

var x__65302 = f.call(null,cljs.core.first.call(null,s__65301));

if(cljs.core.truth_((x__65302 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__65301));
} else
{return cljs.core.cons.call(null,x__65302,keep.call(null,f,cljs.core.rest.call(null,s__65301)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__65312 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65309))
{var s__65310 = temp__3698__auto____65309;

var x__65311 = f.call(null,idx,cljs.core.first.call(null,s__65310));

if(cljs.core.truth_((x__65311 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__65310));
} else
{return cljs.core.cons.call(null,x__65311,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__65310)));
}
} else
{return null;
}
})));
});

return keepi__65312.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__65357 = (function (p){
return (function() {
var ep1 = null;
var ep1__65362 = (function (){
return true;
});
var ep1__65363 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__65364 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65319 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____65319))
{return p.call(null,y);
} else
{return and__3546__auto____65319;
}
})());
});
var ep1__65365 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65320 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____65320))
{var and__3546__auto____65321 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____65321))
{return p.call(null,z);
} else
{return and__3546__auto____65321;
}
} else
{return and__3546__auto____65320;
}
})());
});
var ep1__65366 = (function() { 
var G__65368__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65322 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____65322))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____65322;
}
})());
};
var G__65368 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65368__delegate.call(this, x, y, z, args);
};
G__65368.cljs$lang$maxFixedArity = 3;
G__65368.cljs$lang$applyTo = (function (arglist__65369){
var x = cljs.core.first(arglist__65369);
var y = cljs.core.first(cljs.core.next(arglist__65369));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65369)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65369)));
return G__65368__delegate.call(this, x, y, z, args);
});
return G__65368;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__65362.call(this);
case  1 :
return ep1__65363.call(this,x);
case  2 :
return ep1__65364.call(this,x,y);
case  3 :
return ep1__65365.call(this,x,y,z);
default:
return ep1__65366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__65366.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__65358 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__65370 = (function (){
return true;
});
var ep2__65371 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65323 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____65323))
{return p2.call(null,x);
} else
{return and__3546__auto____65323;
}
})());
});
var ep2__65372 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65324 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____65324))
{var and__3546__auto____65325 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____65325))
{var and__3546__auto____65326 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____65326))
{return p2.call(null,y);
} else
{return and__3546__auto____65326;
}
} else
{return and__3546__auto____65325;
}
} else
{return and__3546__auto____65324;
}
})());
});
var ep2__65373 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65327 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____65327))
{var and__3546__auto____65328 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____65328))
{var and__3546__auto____65329 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____65329))
{var and__3546__auto____65330 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____65330))
{var and__3546__auto____65331 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____65331))
{return p2.call(null,z);
} else
{return and__3546__auto____65331;
}
} else
{return and__3546__auto____65330;
}
} else
{return and__3546__auto____65329;
}
} else
{return and__3546__auto____65328;
}
} else
{return and__3546__auto____65327;
}
})());
});
var ep2__65374 = (function() { 
var G__65376__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65332 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____65332))
{return cljs.core.every_QMARK_.call(null,(function (p1__65303_SHARP_){
var and__3546__auto____65333 = p1.call(null,p1__65303_SHARP_);

if(cljs.core.truth_(and__3546__auto____65333))
{return p2.call(null,p1__65303_SHARP_);
} else
{return and__3546__auto____65333;
}
}),args);
} else
{return and__3546__auto____65332;
}
})());
};
var G__65376 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65376__delegate.call(this, x, y, z, args);
};
G__65376.cljs$lang$maxFixedArity = 3;
G__65376.cljs$lang$applyTo = (function (arglist__65377){
var x = cljs.core.first(arglist__65377);
var y = cljs.core.first(cljs.core.next(arglist__65377));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65377)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65377)));
return G__65376__delegate.call(this, x, y, z, args);
});
return G__65376;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__65370.call(this);
case  1 :
return ep2__65371.call(this,x);
case  2 :
return ep2__65372.call(this,x,y);
case  3 :
return ep2__65373.call(this,x,y,z);
default:
return ep2__65374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__65374.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__65359 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__65378 = (function (){
return true;
});
var ep3__65379 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65334 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____65334))
{var and__3546__auto____65335 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____65335))
{return p3.call(null,x);
} else
{return and__3546__auto____65335;
}
} else
{return and__3546__auto____65334;
}
})());
});
var ep3__65380 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65336 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____65336))
{var and__3546__auto____65337 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____65337))
{var and__3546__auto____65338 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____65338))
{var and__3546__auto____65339 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____65339))
{var and__3546__auto____65340 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____65340))
{return p3.call(null,y);
} else
{return and__3546__auto____65340;
}
} else
{return and__3546__auto____65339;
}
} else
{return and__3546__auto____65338;
}
} else
{return and__3546__auto____65337;
}
} else
{return and__3546__auto____65336;
}
})());
});
var ep3__65381 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65341 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____65341))
{var and__3546__auto____65342 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____65342))
{var and__3546__auto____65343 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____65343))
{var and__3546__auto____65344 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____65344))
{var and__3546__auto____65345 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____65345))
{var and__3546__auto____65346 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____65346))
{var and__3546__auto____65347 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____65347))
{var and__3546__auto____65348 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____65348))
{return p3.call(null,z);
} else
{return and__3546__auto____65348;
}
} else
{return and__3546__auto____65347;
}
} else
{return and__3546__auto____65346;
}
} else
{return and__3546__auto____65345;
}
} else
{return and__3546__auto____65344;
}
} else
{return and__3546__auto____65343;
}
} else
{return and__3546__auto____65342;
}
} else
{return and__3546__auto____65341;
}
})());
});
var ep3__65382 = (function() { 
var G__65384__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65349 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____65349))
{return cljs.core.every_QMARK_.call(null,(function (p1__65304_SHARP_){
var and__3546__auto____65350 = p1.call(null,p1__65304_SHARP_);

if(cljs.core.truth_(and__3546__auto____65350))
{var and__3546__auto____65351 = p2.call(null,p1__65304_SHARP_);

if(cljs.core.truth_(and__3546__auto____65351))
{return p3.call(null,p1__65304_SHARP_);
} else
{return and__3546__auto____65351;
}
} else
{return and__3546__auto____65350;
}
}),args);
} else
{return and__3546__auto____65349;
}
})());
};
var G__65384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65384__delegate.call(this, x, y, z, args);
};
G__65384.cljs$lang$maxFixedArity = 3;
G__65384.cljs$lang$applyTo = (function (arglist__65385){
var x = cljs.core.first(arglist__65385);
var y = cljs.core.first(cljs.core.next(arglist__65385));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65385)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65385)));
return G__65384__delegate.call(this, x, y, z, args);
});
return G__65384;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__65378.call(this);
case  1 :
return ep3__65379.call(this,x);
case  2 :
return ep3__65380.call(this,x,y);
case  3 :
return ep3__65381.call(this,x,y,z);
default:
return ep3__65382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__65382.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__65360 = (function() { 
var G__65386__delegate = function (p1,p2,p3,ps){
var ps__65352 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__65387 = (function (){
return true;
});
var epn__65388 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__65305_SHARP_){
return p1__65305_SHARP_.call(null,x);
}),ps__65352);
});
var epn__65389 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__65306_SHARP_){
var and__3546__auto____65353 = p1__65306_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____65353))
{return p1__65306_SHARP_.call(null,y);
} else
{return and__3546__auto____65353;
}
}),ps__65352);
});
var epn__65390 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__65307_SHARP_){
var and__3546__auto____65354 = p1__65307_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____65354))
{var and__3546__auto____65355 = p1__65307_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____65355))
{return p1__65307_SHARP_.call(null,z);
} else
{return and__3546__auto____65355;
}
} else
{return and__3546__auto____65354;
}
}),ps__65352);
});
var epn__65391 = (function() { 
var G__65393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____65356 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____65356))
{return cljs.core.every_QMARK_.call(null,(function (p1__65308_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__65308_SHARP_,args);
}),ps__65352);
} else
{return and__3546__auto____65356;
}
})());
};
var G__65393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65393__delegate.call(this, x, y, z, args);
};
G__65393.cljs$lang$maxFixedArity = 3;
G__65393.cljs$lang$applyTo = (function (arglist__65394){
var x = cljs.core.first(arglist__65394);
var y = cljs.core.first(cljs.core.next(arglist__65394));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65394)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65394)));
return G__65393__delegate.call(this, x, y, z, args);
});
return G__65393;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__65387.call(this);
case  1 :
return epn__65388.call(this,x);
case  2 :
return epn__65389.call(this,x,y);
case  3 :
return epn__65390.call(this,x,y,z);
default:
return epn__65391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__65391.cljs$lang$applyTo;
return epn;
})()
};
var G__65386 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65386__delegate.call(this, p1, p2, p3, ps);
};
G__65386.cljs$lang$maxFixedArity = 3;
G__65386.cljs$lang$applyTo = (function (arglist__65395){
var p1 = cljs.core.first(arglist__65395);
var p2 = cljs.core.first(cljs.core.next(arglist__65395));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65395)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65395)));
return G__65386__delegate.call(this, p1, p2, p3, ps);
});
return G__65386;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__65357.call(this,p1);
case  2 :
return every_pred__65358.call(this,p1,p2);
case  3 :
return every_pred__65359.call(this,p1,p2,p3);
default:
return every_pred__65360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__65360.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__65435 = (function (p){
return (function() {
var sp1 = null;
var sp1__65440 = (function (){
return null;
});
var sp1__65441 = (function (x){
return p.call(null,x);
});
var sp1__65442 = (function (x,y){
var or__3548__auto____65397 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____65397))
{return or__3548__auto____65397;
} else
{return p.call(null,y);
}
});
var sp1__65443 = (function (x,y,z){
var or__3548__auto____65398 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____65398))
{return or__3548__auto____65398;
} else
{var or__3548__auto____65399 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____65399))
{return or__3548__auto____65399;
} else
{return p.call(null,z);
}
}
});
var sp1__65444 = (function() { 
var G__65446__delegate = function (x,y,z,args){
var or__3548__auto____65400 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____65400))
{return or__3548__auto____65400;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__65446 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65446__delegate.call(this, x, y, z, args);
};
G__65446.cljs$lang$maxFixedArity = 3;
G__65446.cljs$lang$applyTo = (function (arglist__65447){
var x = cljs.core.first(arglist__65447);
var y = cljs.core.first(cljs.core.next(arglist__65447));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65447)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65447)));
return G__65446__delegate.call(this, x, y, z, args);
});
return G__65446;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__65440.call(this);
case  1 :
return sp1__65441.call(this,x);
case  2 :
return sp1__65442.call(this,x,y);
case  3 :
return sp1__65443.call(this,x,y,z);
default:
return sp1__65444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__65444.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__65436 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__65448 = (function (){
return null;
});
var sp2__65449 = (function (x){
var or__3548__auto____65401 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____65401))
{return or__3548__auto____65401;
} else
{return p2.call(null,x);
}
});
var sp2__65450 = (function (x,y){
var or__3548__auto____65402 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____65402))
{return or__3548__auto____65402;
} else
{var or__3548__auto____65403 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____65403))
{return or__3548__auto____65403;
} else
{var or__3548__auto____65404 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____65404))
{return or__3548__auto____65404;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__65451 = (function (x,y,z){
var or__3548__auto____65405 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____65405))
{return or__3548__auto____65405;
} else
{var or__3548__auto____65406 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____65406))
{return or__3548__auto____65406;
} else
{var or__3548__auto____65407 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____65407))
{return or__3548__auto____65407;
} else
{var or__3548__auto____65408 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____65408))
{return or__3548__auto____65408;
} else
{var or__3548__auto____65409 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____65409))
{return or__3548__auto____65409;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__65452 = (function() { 
var G__65454__delegate = function (x,y,z,args){
var or__3548__auto____65410 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____65410))
{return or__3548__auto____65410;
} else
{return cljs.core.some.call(null,(function (p1__65313_SHARP_){
var or__3548__auto____65411 = p1.call(null,p1__65313_SHARP_);

if(cljs.core.truth_(or__3548__auto____65411))
{return or__3548__auto____65411;
} else
{return p2.call(null,p1__65313_SHARP_);
}
}),args);
}
};
var G__65454 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65454__delegate.call(this, x, y, z, args);
};
G__65454.cljs$lang$maxFixedArity = 3;
G__65454.cljs$lang$applyTo = (function (arglist__65455){
var x = cljs.core.first(arglist__65455);
var y = cljs.core.first(cljs.core.next(arglist__65455));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65455)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65455)));
return G__65454__delegate.call(this, x, y, z, args);
});
return G__65454;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__65448.call(this);
case  1 :
return sp2__65449.call(this,x);
case  2 :
return sp2__65450.call(this,x,y);
case  3 :
return sp2__65451.call(this,x,y,z);
default:
return sp2__65452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__65452.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__65437 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__65456 = (function (){
return null;
});
var sp3__65457 = (function (x){
var or__3548__auto____65412 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____65412))
{return or__3548__auto____65412;
} else
{var or__3548__auto____65413 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____65413))
{return or__3548__auto____65413;
} else
{return p3.call(null,x);
}
}
});
var sp3__65458 = (function (x,y){
var or__3548__auto____65414 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____65414))
{return or__3548__auto____65414;
} else
{var or__3548__auto____65415 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____65415))
{return or__3548__auto____65415;
} else
{var or__3548__auto____65416 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____65416))
{return or__3548__auto____65416;
} else
{var or__3548__auto____65417 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____65417))
{return or__3548__auto____65417;
} else
{var or__3548__auto____65418 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____65418))
{return or__3548__auto____65418;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__65459 = (function (x,y,z){
var or__3548__auto____65419 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____65419))
{return or__3548__auto____65419;
} else
{var or__3548__auto____65420 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____65420))
{return or__3548__auto____65420;
} else
{var or__3548__auto____65421 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____65421))
{return or__3548__auto____65421;
} else
{var or__3548__auto____65422 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____65422))
{return or__3548__auto____65422;
} else
{var or__3548__auto____65423 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____65423))
{return or__3548__auto____65423;
} else
{var or__3548__auto____65424 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____65424))
{return or__3548__auto____65424;
} else
{var or__3548__auto____65425 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____65425))
{return or__3548__auto____65425;
} else
{var or__3548__auto____65426 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____65426))
{return or__3548__auto____65426;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__65460 = (function() { 
var G__65462__delegate = function (x,y,z,args){
var or__3548__auto____65427 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____65427))
{return or__3548__auto____65427;
} else
{return cljs.core.some.call(null,(function (p1__65314_SHARP_){
var or__3548__auto____65428 = p1.call(null,p1__65314_SHARP_);

if(cljs.core.truth_(or__3548__auto____65428))
{return or__3548__auto____65428;
} else
{var or__3548__auto____65429 = p2.call(null,p1__65314_SHARP_);

if(cljs.core.truth_(or__3548__auto____65429))
{return or__3548__auto____65429;
} else
{return p3.call(null,p1__65314_SHARP_);
}
}
}),args);
}
};
var G__65462 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65462__delegate.call(this, x, y, z, args);
};
G__65462.cljs$lang$maxFixedArity = 3;
G__65462.cljs$lang$applyTo = (function (arglist__65463){
var x = cljs.core.first(arglist__65463);
var y = cljs.core.first(cljs.core.next(arglist__65463));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65463)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65463)));
return G__65462__delegate.call(this, x, y, z, args);
});
return G__65462;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__65456.call(this);
case  1 :
return sp3__65457.call(this,x);
case  2 :
return sp3__65458.call(this,x,y);
case  3 :
return sp3__65459.call(this,x,y,z);
default:
return sp3__65460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__65460.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__65438 = (function() { 
var G__65464__delegate = function (p1,p2,p3,ps){
var ps__65430 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__65465 = (function (){
return null;
});
var spn__65466 = (function (x){
return cljs.core.some.call(null,(function (p1__65315_SHARP_){
return p1__65315_SHARP_.call(null,x);
}),ps__65430);
});
var spn__65467 = (function (x,y){
return cljs.core.some.call(null,(function (p1__65316_SHARP_){
var or__3548__auto____65431 = p1__65316_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____65431))
{return or__3548__auto____65431;
} else
{return p1__65316_SHARP_.call(null,y);
}
}),ps__65430);
});
var spn__65468 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__65317_SHARP_){
var or__3548__auto____65432 = p1__65317_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____65432))
{return or__3548__auto____65432;
} else
{var or__3548__auto____65433 = p1__65317_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____65433))
{return or__3548__auto____65433;
} else
{return p1__65317_SHARP_.call(null,z);
}
}
}),ps__65430);
});
var spn__65469 = (function() { 
var G__65471__delegate = function (x,y,z,args){
var or__3548__auto____65434 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____65434))
{return or__3548__auto____65434;
} else
{return cljs.core.some.call(null,(function (p1__65318_SHARP_){
return cljs.core.some.call(null,p1__65318_SHARP_,args);
}),ps__65430);
}
};
var G__65471 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65471__delegate.call(this, x, y, z, args);
};
G__65471.cljs$lang$maxFixedArity = 3;
G__65471.cljs$lang$applyTo = (function (arglist__65472){
var x = cljs.core.first(arglist__65472);
var y = cljs.core.first(cljs.core.next(arglist__65472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65472)));
return G__65471__delegate.call(this, x, y, z, args);
});
return G__65471;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__65465.call(this);
case  1 :
return spn__65466.call(this,x);
case  2 :
return spn__65467.call(this,x,y);
case  3 :
return spn__65468.call(this,x,y,z);
default:
return spn__65469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__65469.cljs$lang$applyTo;
return spn;
})()
};
var G__65464 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65464__delegate.call(this, p1, p2, p3, ps);
};
G__65464.cljs$lang$maxFixedArity = 3;
G__65464.cljs$lang$applyTo = (function (arglist__65473){
var p1 = cljs.core.first(arglist__65473);
var p2 = cljs.core.first(cljs.core.next(arglist__65473));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65473)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65473)));
return G__65464__delegate.call(this, p1, p2, p3, ps);
});
return G__65464;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__65435.call(this,p1);
case  2 :
return some_fn__65436.call(this,p1,p2);
case  3 :
return some_fn__65437.call(this,p1,p2,p3);
default:
return some_fn__65438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__65438.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__65486 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65474))
{var s__65475 = temp__3698__auto____65474;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__65475)),map.call(null,f,cljs.core.rest.call(null,s__65475)));
} else
{return null;
}
})));
});
var map__65487 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__65476 = cljs.core.seq.call(null,c1);
var s2__65477 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____65478 = s1__65476;

if(cljs.core.truth_(and__3546__auto____65478))
{return s2__65477;
} else
{return and__3546__auto____65478;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__65476),cljs.core.first.call(null,s2__65477)),map.call(null,f,cljs.core.rest.call(null,s1__65476),cljs.core.rest.call(null,s2__65477)));
} else
{return null;
}
})));
});
var map__65488 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__65479 = cljs.core.seq.call(null,c1);
var s2__65480 = cljs.core.seq.call(null,c2);
var s3__65481 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____65482 = s1__65479;

if(cljs.core.truth_(and__3546__auto____65482))
{var and__3546__auto____65483 = s2__65480;

if(cljs.core.truth_(and__3546__auto____65483))
{return s3__65481;
} else
{return and__3546__auto____65483;
}
} else
{return and__3546__auto____65482;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__65479),cljs.core.first.call(null,s2__65480),cljs.core.first.call(null,s3__65481)),map.call(null,f,cljs.core.rest.call(null,s1__65479),cljs.core.rest.call(null,s2__65480),cljs.core.rest.call(null,s3__65481)));
} else
{return null;
}
})));
});
var map__65489 = (function() { 
var G__65491__delegate = function (f,c1,c2,c3,colls){
var step__65485 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__65484 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__65484)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__65484),step.call(null,map.call(null,cljs.core.rest,ss__65484)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__65396_SHARP_){
return cljs.core.apply.call(null,f,p1__65396_SHARP_);
}),step__65485.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__65491 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__65491__delegate.call(this, f, c1, c2, c3, colls);
};
G__65491.cljs$lang$maxFixedArity = 4;
G__65491.cljs$lang$applyTo = (function (arglist__65492){
var f = cljs.core.first(arglist__65492);
var c1 = cljs.core.first(cljs.core.next(arglist__65492));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65492)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65492))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__65492))));
return G__65491__delegate.call(this, f, c1, c2, c3, colls);
});
return G__65491;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__65486.call(this,f,c1);
case  3 :
return map__65487.call(this,f,c1,c2);
case  4 :
return map__65488.call(this,f,c1,c2,c3);
default:
return map__65489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__65489.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____65493 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65493))
{var s__65494 = temp__3698__auto____65493;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__65494),take.call(null,(n - 1),cljs.core.rest.call(null,s__65494)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__65497 = (function (n,coll){
while(true){
var s__65495 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____65496 = (n > 0);

if(cljs.core.truth_(and__3546__auto____65496))
{return s__65495;
} else
{return and__3546__auto____65496;
}
})()))
{{
var G__65498 = (n - 1);
var G__65499 = cljs.core.rest.call(null,s__65495);
n = G__65498;
coll = G__65499;
continue;
}
} else
{return s__65495;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__65497.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__65500 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__65501 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__65500.call(this,n);
case  2 :
return drop_last__65501.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__65503 = cljs.core.seq.call(null,coll);
var lead__65504 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__65504))
{{
var G__65505 = cljs.core.next.call(null,s__65503);
var G__65506 = cljs.core.next.call(null,lead__65504);
s__65503 = G__65505;
lead__65504 = G__65506;
continue;
}
} else
{return s__65503;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__65509 = (function (pred,coll){
while(true){
var s__65507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____65508 = s__65507;

if(cljs.core.truth_(and__3546__auto____65508))
{return pred.call(null,cljs.core.first.call(null,s__65507));
} else
{return and__3546__auto____65508;
}
})()))
{{
var G__65510 = pred;
var G__65511 = cljs.core.rest.call(null,s__65507);
pred = G__65510;
coll = G__65511;
continue;
}
} else
{return s__65507;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__65509.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65512 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65512))
{var s__65513 = temp__3698__auto____65512;

return cljs.core.concat.call(null,s__65513,cycle.call(null,s__65513));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__65514 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__65515 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__65514.call(this,n);
case  2 :
return repeat__65515.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__65517 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__65518 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__65517.call(this,n);
case  2 :
return repeatedly__65518.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__65524 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__65520 = cljs.core.seq.call(null,c1);
var s2__65521 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____65522 = s1__65520;

if(cljs.core.truth_(and__3546__auto____65522))
{return s2__65521;
} else
{return and__3546__auto____65522;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__65520),cljs.core.cons.call(null,cljs.core.first.call(null,s2__65521),interleave.call(null,cljs.core.rest.call(null,s1__65520),cljs.core.rest.call(null,s2__65521))));
} else
{return null;
}
})));
});
var interleave__65525 = (function() { 
var G__65527__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__65523 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__65523)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__65523),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__65523)));
} else
{return null;
}
})));
};
var G__65527 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65527__delegate.call(this, c1, c2, colls);
};
G__65527.cljs$lang$maxFixedArity = 2;
G__65527.cljs$lang$applyTo = (function (arglist__65528){
var c1 = cljs.core.first(arglist__65528);
var c2 = cljs.core.first(cljs.core.next(arglist__65528));
var colls = cljs.core.rest(cljs.core.next(arglist__65528));
return G__65527__delegate.call(this, c1, c2, colls);
});
return G__65527;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__65524.call(this,c1,c2);
default:
return interleave__65525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__65525.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__65531 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____65529 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____65529))
{var coll__65530 = temp__3695__auto____65529;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__65530),cat.call(null,cljs.core.rest.call(null,coll__65530),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__65531.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__65532 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__65533 = (function() { 
var G__65535__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__65535 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__65535__delegate.call(this, f, coll, colls);
};
G__65535.cljs$lang$maxFixedArity = 2;
G__65535.cljs$lang$applyTo = (function (arglist__65536){
var f = cljs.core.first(arglist__65536);
var coll = cljs.core.first(cljs.core.next(arglist__65536));
var colls = cljs.core.rest(cljs.core.next(arglist__65536));
return G__65535__delegate.call(this, f, coll, colls);
});
return G__65535;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__65532.call(this,f,coll);
default:
return mapcat__65533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__65533.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65537 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65537))
{var s__65538 = temp__3698__auto____65537;

var f__65539 = cljs.core.first.call(null,s__65538);
var r__65540 = cljs.core.rest.call(null,s__65538);

if(cljs.core.truth_(pred.call(null,f__65539)))
{return cljs.core.cons.call(null,f__65539,filter.call(null,pred,r__65540));
} else
{return filter.call(null,pred,r__65540);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__65542 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__65542.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__65541_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__65541_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__65549 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__65550 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65543 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65543))
{var s__65544 = temp__3698__auto____65543;

var p__65545 = cljs.core.take.call(null,n,s__65544);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__65545))))
{return cljs.core.cons.call(null,p__65545,partition.call(null,n,step,cljs.core.drop.call(null,step,s__65544)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__65551 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65546 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65546))
{var s__65547 = temp__3698__auto____65546;

var p__65548 = cljs.core.take.call(null,n,s__65547);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__65548))))
{return cljs.core.cons.call(null,p__65548,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__65547)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__65548,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__65549.call(this,n,step);
case  3 :
return partition__65550.call(this,n,step,pad);
case  4 :
return partition__65551.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__65557 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__65558 = (function (m,ks,not_found){
var sentinel__65553 = cljs.core.lookup_sentinel;
var m__65554 = m;
var ks__65555 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__65555))
{var m__65556 = cljs.core.get.call(null,m__65554,cljs.core.first.call(null,ks__65555),sentinel__65553);

if(cljs.core.truth_((sentinel__65553 === m__65556)))
{return not_found;
} else
{{
var G__65560 = sentinel__65553;
var G__65561 = m__65556;
var G__65562 = cljs.core.next.call(null,ks__65555);
sentinel__65553 = G__65560;
m__65554 = G__65561;
ks__65555 = G__65562;
continue;
}
}
} else
{return m__65554;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__65557.call(this,m,ks);
case  3 :
return get_in__65558.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__65563,v){
var vec__65564__65565 = p__65563;
var k__65566 = cljs.core.nth.call(null,vec__65564__65565,0,null);
var ks__65567 = cljs.core.nthnext.call(null,vec__65564__65565,1);

if(cljs.core.truth_(ks__65567))
{return cljs.core.assoc.call(null,m,k__65566,assoc_in.call(null,cljs.core.get.call(null,m,k__65566),ks__65567,v));
} else
{return cljs.core.assoc.call(null,m,k__65566,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__65568,f,args){
var vec__65569__65570 = p__65568;
var k__65571 = cljs.core.nth.call(null,vec__65569__65570,0,null);
var ks__65572 = cljs.core.nthnext.call(null,vec__65569__65570,1);

if(cljs.core.truth_(ks__65572))
{return cljs.core.assoc.call(null,m,k__65571,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__65571),ks__65572,f,args));
} else
{return cljs.core.assoc.call(null,m,k__65571,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__65571),args));
}
};
var update_in = function (m,p__65568,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__65568, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__65573){
var m = cljs.core.first(arglist__65573);
var p__65568 = cljs.core.first(cljs.core.next(arglist__65573));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65573)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65573)));
return update_in__delegate.call(this, m, p__65568, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65574 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__65607 = null;
var G__65607__65608 = (function (coll,k){
var this__65575 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__65607__65609 = (function (coll,k,not_found){
var this__65576 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__65607 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__65607__65608.call(this,coll,k);
case  3 :
return G__65607__65609.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65607;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__65577 = this;
var new_array__65578 = cljs.core.aclone.call(null,this__65577.array);

(new_array__65578[k] = v);
return (new cljs.core.Vector(this__65577.meta,new_array__65578));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__65611 = null;
var G__65611__65612 = (function (tsym65579,k){
var this__65581 = this;
var tsym65579__65582 = this;

var coll__65583 = tsym65579__65582;

return cljs.core._lookup.call(null,coll__65583,k);
});
var G__65611__65613 = (function (tsym65580,k,not_found){
var this__65584 = this;
var tsym65580__65585 = this;

var coll__65586 = tsym65580__65585;

return cljs.core._lookup.call(null,coll__65586,k,not_found);
});
G__65611 = function(tsym65580,k,not_found){
switch(arguments.length){
case  2 :
return G__65611__65612.call(this,tsym65580,k);
case  3 :
return G__65611__65613.call(this,tsym65580,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65611;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65587 = this;
var new_array__65588 = cljs.core.aclone.call(null,this__65587.array);

new_array__65588.push(o);
return (new cljs.core.Vector(this__65587.meta,new_array__65588));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__65615 = null;
var G__65615__65616 = (function (v,f){
var this__65589 = this;
return cljs.core.ci_reduce.call(null,this__65589.array,f);
});
var G__65615__65617 = (function (v,f,start){
var this__65590 = this;
return cljs.core.ci_reduce.call(null,this__65590.array,f,start);
});
G__65615 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__65615__65616.call(this,v,f);
case  3 :
return G__65615__65617.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65615;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65591 = this;
if(cljs.core.truth_((this__65591.array.length > 0)))
{var vector_seq__65592 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__65591.array.length)))
{return cljs.core.cons.call(null,(this__65591.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__65592.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65593 = this;
return this__65593.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__65594 = this;
var count__65595 = this__65594.array.length;

if(cljs.core.truth_((count__65595 > 0)))
{return (this__65594.array[(count__65595 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__65596 = this;
if(cljs.core.truth_((this__65596.array.length > 0)))
{var new_array__65597 = cljs.core.aclone.call(null,this__65596.array);

new_array__65597.pop();
return (new cljs.core.Vector(this__65596.meta,new_array__65597));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__65598 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65599 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65600 = this;
return (new cljs.core.Vector(meta,this__65600.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65601 = this;
return this__65601.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__65619 = null;
var G__65619__65620 = (function (coll,n){
var this__65602 = this;
if(cljs.core.truth_((function (){var and__3546__auto____65603 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____65603))
{return (n < this__65602.array.length);
} else
{return and__3546__auto____65603;
}
})()))
{return (this__65602.array[n]);
} else
{return null;
}
});
var G__65619__65621 = (function (coll,n,not_found){
var this__65604 = this;
if(cljs.core.truth_((function (){var and__3546__auto____65605 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____65605))
{return (n < this__65604.array.length);
} else
{return and__3546__auto____65605;
}
})()))
{return (this__65604.array[n]);
} else
{return not_found;
}
});
G__65619 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__65619__65620.call(this,coll,n);
case  3 :
return G__65619__65621.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65619;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65606 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__65606.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__65623){
var args = cljs.core.seq( arglist__65623 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65624 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__65652 = null;
var G__65652__65653 = (function (coll,k){
var this__65625 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__65652__65654 = (function (coll,k,not_found){
var this__65626 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__65652 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__65652__65653.call(this,coll,k);
case  3 :
return G__65652__65654.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65652;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__65627 = this;
var v_pos__65628 = (this__65627.start + key);

return (new cljs.core.Subvec(this__65627.meta,cljs.core._assoc.call(null,this__65627.v,v_pos__65628,val),this__65627.start,((this__65627.end > (v_pos__65628 + 1)) ? this__65627.end : (v_pos__65628 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__65656 = null;
var G__65656__65657 = (function (tsym65629,k){
var this__65631 = this;
var tsym65629__65632 = this;

var coll__65633 = tsym65629__65632;

return cljs.core._lookup.call(null,coll__65633,k);
});
var G__65656__65658 = (function (tsym65630,k,not_found){
var this__65634 = this;
var tsym65630__65635 = this;

var coll__65636 = tsym65630__65635;

return cljs.core._lookup.call(null,coll__65636,k,not_found);
});
G__65656 = function(tsym65630,k,not_found){
switch(arguments.length){
case  2 :
return G__65656__65657.call(this,tsym65630,k);
case  3 :
return G__65656__65658.call(this,tsym65630,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65656;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65637 = this;
return (new cljs.core.Subvec(this__65637.meta,cljs.core._assoc_n.call(null,this__65637.v,this__65637.end,o),this__65637.start,(this__65637.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__65660 = null;
var G__65660__65661 = (function (coll,f){
var this__65638 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__65660__65662 = (function (coll,f,start){
var this__65639 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__65660 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__65660__65661.call(this,coll,f);
case  3 :
return G__65660__65662.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65660;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65640 = this;
var subvec_seq__65641 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__65640.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__65640.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__65641.call(null,this__65640.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65642 = this;
return (this__65642.end - this__65642.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__65643 = this;
return cljs.core._nth.call(null,this__65643.v,(this__65643.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__65644 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__65644.start,this__65644.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__65644.meta,this__65644.v,this__65644.start,(this__65644.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__65645 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65646 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65647 = this;
return (new cljs.core.Subvec(meta,this__65647.v,this__65647.start,this__65647.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65648 = this;
return this__65648.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__65664 = null;
var G__65664__65665 = (function (coll,n){
var this__65649 = this;
return cljs.core._nth.call(null,this__65649.v,(this__65649.start + n));
});
var G__65664__65666 = (function (coll,n,not_found){
var this__65650 = this;
return cljs.core._nth.call(null,this__65650.v,(this__65650.start + n),not_found);
});
G__65664 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__65664__65665.call(this,coll,n);
case  3 :
return G__65664__65666.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65664;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65651 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__65651.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__65668 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__65669 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__65668.call(this,v,start);
case  3 :
return subvec__65669.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65671 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65672 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65673 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65674 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__65674.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65675 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__65676 = this;
return cljs.core._first.call(null,this__65676.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__65677 = this;
var temp__3695__auto____65678 = cljs.core.next.call(null,this__65677.front);

if(cljs.core.truth_(temp__3695__auto____65678))
{var f1__65679 = temp__3695__auto____65678;

return (new cljs.core.PersistentQueueSeq(this__65677.meta,f1__65679,this__65677.rear));
} else
{if(cljs.core.truth_((this__65677.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__65677.meta,this__65677.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65680 = this;
return this__65680.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65681 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__65681.front,this__65681.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65682 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65683 = this;
if(cljs.core.truth_(this__65683.front))
{return (new cljs.core.PersistentQueue(this__65683.meta,(this__65683.count + 1),this__65683.front,cljs.core.conj.call(null,(function (){var or__3548__auto____65684 = this__65683.rear;

if(cljs.core.truth_(or__3548__auto____65684))
{return or__3548__auto____65684;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__65683.meta,(this__65683.count + 1),cljs.core.conj.call(null,this__65683.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65685 = this;
var rear__65686 = cljs.core.seq.call(null,this__65685.rear);

if(cljs.core.truth_((function (){var or__3548__auto____65687 = this__65685.front;

if(cljs.core.truth_(or__3548__auto____65687))
{return or__3548__auto____65687;
} else
{return rear__65686;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__65685.front,cljs.core.seq.call(null,rear__65686)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65688 = this;
return this__65688.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__65689 = this;
return cljs.core._first.call(null,this__65689.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__65690 = this;
if(cljs.core.truth_(this__65690.front))
{var temp__3695__auto____65691 = cljs.core.next.call(null,this__65690.front);

if(cljs.core.truth_(temp__3695__auto____65691))
{var f1__65692 = temp__3695__auto____65691;

return (new cljs.core.PersistentQueue(this__65690.meta,(this__65690.count - 1),f1__65692,this__65690.rear));
} else
{return (new cljs.core.PersistentQueue(this__65690.meta,(this__65690.count - 1),cljs.core.seq.call(null,this__65690.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__65693 = this;
return cljs.core.first.call(null,this__65693.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__65694 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65695 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65696 = this;
return (new cljs.core.PersistentQueue(meta,this__65696.count,this__65696.front,this__65696.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65697 = this;
return this__65697.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65698 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__65699 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__65700 = array.length;

var i__65701 = 0;

while(true){
if(cljs.core.truth_((i__65701 < len__65700)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__65701]))))
{return i__65701;
} else
{{
var G__65702 = (i__65701 + incr);
i__65701 = G__65702;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___65704 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___65705 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____65703 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____65703))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____65703;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___65704.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___65705.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__65708 = cljs.core.hash.call(null,a);
var b__65709 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__65708 < b__65709)))
{return -1;
} else
{if(cljs.core.truth_((a__65708 > b__65709)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65710 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__65737 = null;
var G__65737__65738 = (function (coll,k){
var this__65711 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__65737__65739 = (function (coll,k,not_found){
var this__65712 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__65712.strobj,(this__65712.strobj[k]),not_found);
});
G__65737 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__65737__65738.call(this,coll,k);
case  3 :
return G__65737__65739.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65737;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__65713 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__65714 = goog.object.clone.call(null,this__65713.strobj);
var overwrite_QMARK___65715 = new_strobj__65714.hasOwnProperty(k);

(new_strobj__65714[k] = v);
if(cljs.core.truth_(overwrite_QMARK___65715))
{return (new cljs.core.ObjMap(this__65713.meta,this__65713.keys,new_strobj__65714));
} else
{var new_keys__65716 = cljs.core.aclone.call(null,this__65713.keys);

new_keys__65716.push(k);
return (new cljs.core.ObjMap(this__65713.meta,new_keys__65716,new_strobj__65714));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__65713.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__65717 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__65717.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__65741 = null;
var G__65741__65742 = (function (tsym65718,k){
var this__65720 = this;
var tsym65718__65721 = this;

var coll__65722 = tsym65718__65721;

return cljs.core._lookup.call(null,coll__65722,k);
});
var G__65741__65743 = (function (tsym65719,k,not_found){
var this__65723 = this;
var tsym65719__65724 = this;

var coll__65725 = tsym65719__65724;

return cljs.core._lookup.call(null,coll__65725,k,not_found);
});
G__65741 = function(tsym65719,k,not_found){
switch(arguments.length){
case  2 :
return G__65741__65742.call(this,tsym65719,k);
case  3 :
return G__65741__65743.call(this,tsym65719,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65741;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__65726 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65727 = this;
if(cljs.core.truth_((this__65727.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__65707_SHARP_){
return cljs.core.vector.call(null,p1__65707_SHARP_,(this__65727.strobj[p1__65707_SHARP_]));
}),this__65727.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65728 = this;
return this__65728.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65729 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65730 = this;
return (new cljs.core.ObjMap(meta,this__65730.keys,this__65730.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65731 = this;
return this__65731.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65732 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__65732.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__65733 = this;
if(cljs.core.truth_((function (){var and__3546__auto____65734 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____65734))
{return this__65733.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____65734;
}
})()))
{var new_keys__65735 = cljs.core.aclone.call(null,this__65733.keys);
var new_strobj__65736 = goog.object.clone.call(null,this__65733.strobj);

new_keys__65735.splice(cljs.core.scan_array.call(null,1,k,new_keys__65735),1);
cljs.core.js_delete.call(null,new_strobj__65736,k);
return (new cljs.core.ObjMap(this__65733.meta,new_keys__65735,new_strobj__65736));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65746 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__65784 = null;
var G__65784__65785 = (function (coll,k){
var this__65747 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__65784__65786 = (function (coll,k,not_found){
var this__65748 = this;
var bucket__65749 = (this__65748.hashobj[cljs.core.hash.call(null,k)]);
var i__65750 = (cljs.core.truth_(bucket__65749)?cljs.core.scan_array.call(null,2,k,bucket__65749):null);

if(cljs.core.truth_(i__65750))
{return (bucket__65749[(i__65750 + 1)]);
} else
{return not_found;
}
});
G__65784 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__65784__65785.call(this,coll,k);
case  3 :
return G__65784__65786.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65784;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__65751 = this;
var h__65752 = cljs.core.hash.call(null,k);
var bucket__65753 = (this__65751.hashobj[h__65752]);

if(cljs.core.truth_(bucket__65753))
{var new_bucket__65754 = cljs.core.aclone.call(null,bucket__65753);
var new_hashobj__65755 = goog.object.clone.call(null,this__65751.hashobj);

(new_hashobj__65755[h__65752] = new_bucket__65754);
var temp__3695__auto____65756 = cljs.core.scan_array.call(null,2,k,new_bucket__65754);

if(cljs.core.truth_(temp__3695__auto____65756))
{var i__65757 = temp__3695__auto____65756;

(new_bucket__65754[(i__65757 + 1)] = v);
return (new cljs.core.HashMap(this__65751.meta,this__65751.count,new_hashobj__65755));
} else
{new_bucket__65754.push(k,v);
return (new cljs.core.HashMap(this__65751.meta,(this__65751.count + 1),new_hashobj__65755));
}
} else
{var new_hashobj__65758 = goog.object.clone.call(null,this__65751.hashobj);

(new_hashobj__65758[h__65752] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__65751.meta,(this__65751.count + 1),new_hashobj__65758));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__65759 = this;
var bucket__65760 = (this__65759.hashobj[cljs.core.hash.call(null,k)]);
var i__65761 = (cljs.core.truth_(bucket__65760)?cljs.core.scan_array.call(null,2,k,bucket__65760):null);

if(cljs.core.truth_(i__65761))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__65788 = null;
var G__65788__65789 = (function (tsym65762,k){
var this__65764 = this;
var tsym65762__65765 = this;

var coll__65766 = tsym65762__65765;

return cljs.core._lookup.call(null,coll__65766,k);
});
var G__65788__65790 = (function (tsym65763,k,not_found){
var this__65767 = this;
var tsym65763__65768 = this;

var coll__65769 = tsym65763__65768;

return cljs.core._lookup.call(null,coll__65769,k,not_found);
});
G__65788 = function(tsym65763,k,not_found){
switch(arguments.length){
case  2 :
return G__65788__65789.call(this,tsym65763,k);
case  3 :
return G__65788__65790.call(this,tsym65763,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65788;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__65770 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65771 = this;
if(cljs.core.truth_((this__65771.count > 0)))
{var hashes__65772 = cljs.core.js_keys.call(null,this__65771.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__65745_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__65771.hashobj[p1__65745_SHARP_])));
}),hashes__65772);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65773 = this;
return this__65773.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65774 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65775 = this;
return (new cljs.core.HashMap(meta,this__65775.count,this__65775.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65776 = this;
return this__65776.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65777 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__65777.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__65778 = this;
var h__65779 = cljs.core.hash.call(null,k);
var bucket__65780 = (this__65778.hashobj[h__65779]);
var i__65781 = (cljs.core.truth_(bucket__65780)?cljs.core.scan_array.call(null,2,k,bucket__65780):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__65781)))
{return coll;
} else
{var new_hashobj__65782 = goog.object.clone.call(null,this__65778.hashobj);

if(cljs.core.truth_((3 > bucket__65780.length)))
{cljs.core.js_delete.call(null,new_hashobj__65782,h__65779);
} else
{var new_bucket__65783 = cljs.core.aclone.call(null,bucket__65780);

new_bucket__65783.splice(i__65781,2);
(new_hashobj__65782[h__65779] = new_bucket__65783);
}
return (new cljs.core.HashMap(this__65778.meta,(this__65778.count - 1),new_hashobj__65782));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__65792 = ks.length;

var i__65793 = 0;
var out__65794 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__65793 < len__65792)))
{{
var G__65795 = (i__65793 + 1);
var G__65796 = cljs.core.assoc.call(null,out__65794,(ks[i__65793]),(vs[i__65793]));
i__65793 = G__65795;
out__65794 = G__65796;
continue;
}
} else
{return out__65794;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__65797 = cljs.core.seq.call(null,keyvals);
var out__65798 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__65797))
{{
var G__65799 = cljs.core.nnext.call(null,in$__65797);
var G__65800 = cljs.core.assoc.call(null,out__65798,cljs.core.first.call(null,in$__65797),cljs.core.second.call(null,in$__65797));
in$__65797 = G__65799;
out__65798 = G__65800;
continue;
}
} else
{return out__65798;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__65801){
var keyvals = cljs.core.seq( arglist__65801 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__65802_SHARP_,p2__65803_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____65804 = p1__65802_SHARP_;

if(cljs.core.truth_(or__3548__auto____65804))
{return or__3548__auto____65804;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__65803_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__65805){
var maps = cljs.core.seq( arglist__65805 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__65808 = (function (m,e){
var k__65806 = cljs.core.first.call(null,e);
var v__65807 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__65806)))
{return cljs.core.assoc.call(null,m,k__65806,f.call(null,cljs.core.get.call(null,m,k__65806),v__65807));
} else
{return cljs.core.assoc.call(null,m,k__65806,v__65807);
}
});
var merge2__65810 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__65808,(function (){var or__3548__auto____65809 = m1;

if(cljs.core.truth_(or__3548__auto____65809))
{return or__3548__auto____65809;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__65810,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__65811){
var f = cljs.core.first(arglist__65811);
var maps = cljs.core.rest(arglist__65811);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__65813 = cljs.core.ObjMap.fromObject([],{});
var keys__65814 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__65814))
{var key__65815 = cljs.core.first.call(null,keys__65814);
var entry__65816 = cljs.core.get.call(null,map,key__65815,"\uFDD0'user/not-found");

{
var G__65817 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__65816,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__65813,key__65815,entry__65816):ret__65813);
var G__65818 = cljs.core.next.call(null,keys__65814);
ret__65813 = G__65817;
keys__65814 = G__65818;
continue;
}
} else
{return ret__65813;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__65819 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__65840 = null;
var G__65840__65841 = (function (coll,v){
var this__65820 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__65840__65842 = (function (coll,v,not_found){
var this__65821 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__65821.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__65840 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__65840__65841.call(this,coll,v);
case  3 :
return G__65840__65842.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65840;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__65844 = null;
var G__65844__65845 = (function (tsym65822,k){
var this__65824 = this;
var tsym65822__65825 = this;

var coll__65826 = tsym65822__65825;

return cljs.core._lookup.call(null,coll__65826,k);
});
var G__65844__65846 = (function (tsym65823,k,not_found){
var this__65827 = this;
var tsym65823__65828 = this;

var coll__65829 = tsym65823__65828;

return cljs.core._lookup.call(null,coll__65829,k,not_found);
});
G__65844 = function(tsym65823,k,not_found){
switch(arguments.length){
case  2 :
return G__65844__65845.call(this,tsym65823,k);
case  3 :
return G__65844__65846.call(this,tsym65823,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65844;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__65830 = this;
return (new cljs.core.Set(this__65830.meta,cljs.core.assoc.call(null,this__65830.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__65831 = this;
return cljs.core.keys.call(null,this__65831.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__65832 = this;
return (new cljs.core.Set(this__65832.meta,cljs.core.dissoc.call(null,this__65832.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__65833 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__65834 = this;
var and__3546__auto____65835 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____65835))
{var and__3546__auto____65836 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____65836))
{return cljs.core.every_QMARK_.call(null,(function (p1__65812_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__65812_SHARP_);
}),other);
} else
{return and__3546__auto____65836;
}
} else
{return and__3546__auto____65835;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__65837 = this;
return (new cljs.core.Set(meta,this__65837.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__65838 = this;
return this__65838.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__65839 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__65839.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__65849 = cljs.core.seq.call(null,coll);
var out__65850 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__65849))))
{{
var G__65851 = cljs.core.rest.call(null,in$__65849);
var G__65852 = cljs.core.conj.call(null,out__65850,cljs.core.first.call(null,in$__65849));
in$__65849 = G__65851;
out__65850 = G__65852;
continue;
}
} else
{return out__65850;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__65853 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____65854 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____65854))
{var e__65855 = temp__3695__auto____65854;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__65855));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__65853,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__65848_SHARP_){
var temp__3695__auto____65856 = cljs.core.find.call(null,smap,p1__65848_SHARP_);

if(cljs.core.truth_(temp__3695__auto____65856))
{var e__65857 = temp__3695__auto____65856;

return cljs.core.second.call(null,e__65857);
} else
{return p1__65848_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__65865 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__65858,seen){
while(true){
var vec__65859__65860 = p__65858;
var f__65861 = cljs.core.nth.call(null,vec__65859__65860,0,null);
var xs__65862 = vec__65859__65860;

var temp__3698__auto____65863 = cljs.core.seq.call(null,xs__65862);

if(cljs.core.truth_(temp__3698__auto____65863))
{var s__65864 = temp__3698__auto____65863;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__65861)))
{{
var G__65866 = cljs.core.rest.call(null,s__65864);
var G__65867 = seen;
p__65858 = G__65866;
seen = G__65867;
continue;
}
} else
{return cljs.core.cons.call(null,f__65861,step.call(null,cljs.core.rest.call(null,s__65864),cljs.core.conj.call(null,seen,f__65861)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__65865.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__65868 = cljs.core.Vector.fromArray([]);
var s__65869 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__65869)))
{{
var G__65870 = cljs.core.conj.call(null,ret__65868,cljs.core.first.call(null,s__65869));
var G__65871 = cljs.core.next.call(null,s__65869);
ret__65868 = G__65870;
s__65869 = G__65871;
continue;
}
} else
{return cljs.core.seq.call(null,ret__65868);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____65872 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____65872))
{return or__3548__auto____65872;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__65873 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__65873 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__65873 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____65874 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____65874))
{return or__3548__auto____65874;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__65875 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__65875 > -1)))
{return cljs.core.subs.call(null,x,2,i__65875);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__65878 = cljs.core.ObjMap.fromObject([],{});
var ks__65879 = cljs.core.seq.call(null,keys);
var vs__65880 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____65881 = ks__65879;

if(cljs.core.truth_(and__3546__auto____65881))
{return vs__65880;
} else
{return and__3546__auto____65881;
}
})()))
{{
var G__65882 = cljs.core.assoc.call(null,map__65878,cljs.core.first.call(null,ks__65879),cljs.core.first.call(null,vs__65880));
var G__65883 = cljs.core.next.call(null,ks__65879);
var G__65884 = cljs.core.next.call(null,vs__65880);
map__65878 = G__65882;
ks__65879 = G__65883;
vs__65880 = G__65884;
continue;
}
} else
{return map__65878;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__65887 = (function (k,x){
return x;
});
var max_key__65888 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__65889 = (function() { 
var G__65891__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__65876_SHARP_,p2__65877_SHARP_){
return max_key.call(null,k,p1__65876_SHARP_,p2__65877_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__65891 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65891__delegate.call(this, k, x, y, more);
};
G__65891.cljs$lang$maxFixedArity = 3;
G__65891.cljs$lang$applyTo = (function (arglist__65892){
var k = cljs.core.first(arglist__65892);
var x = cljs.core.first(cljs.core.next(arglist__65892));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65892)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65892)));
return G__65891__delegate.call(this, k, x, y, more);
});
return G__65891;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__65887.call(this,k,x);
case  3 :
return max_key__65888.call(this,k,x,y);
default:
return max_key__65889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__65889.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__65893 = (function (k,x){
return x;
});
var min_key__65894 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__65895 = (function() { 
var G__65897__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__65885_SHARP_,p2__65886_SHARP_){
return min_key.call(null,k,p1__65885_SHARP_,p2__65886_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__65897 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65897__delegate.call(this, k, x, y, more);
};
G__65897.cljs$lang$maxFixedArity = 3;
G__65897.cljs$lang$applyTo = (function (arglist__65898){
var k = cljs.core.first(arglist__65898);
var x = cljs.core.first(cljs.core.next(arglist__65898));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65898)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65898)));
return G__65897__delegate.call(this, k, x, y, more);
});
return G__65897;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__65893.call(this,k,x);
case  3 :
return min_key__65894.call(this,k,x,y);
default:
return min_key__65895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__65895.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__65901 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__65902 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65899))
{var s__65900 = temp__3698__auto____65899;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__65900),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__65900)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__65901.call(this,n,step);
case  3 :
return partition_all__65902.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65904 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65904))
{var s__65905 = temp__3698__auto____65904;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__65905))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__65905),take_while.call(null,pred,cljs.core.rest.call(null,s__65905)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__65906 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__65907 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__65923 = null;
var G__65923__65924 = (function (rng,f){
var this__65908 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__65923__65925 = (function (rng,f,s){
var this__65909 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__65923 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__65923__65924.call(this,rng,f);
case  3 :
return G__65923__65925.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65923;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__65910 = this;
var comp__65911 = (cljs.core.truth_((this__65910.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__65911.call(null,this__65910.start,this__65910.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__65912 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__65912.end - this__65912.start) / this__65912.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__65913 = this;
return this__65913.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__65914 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__65914.meta,(this__65914.start + this__65914.step),this__65914.end,this__65914.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__65915 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__65916 = this;
return (new cljs.core.Range(meta,this__65916.start,this__65916.end,this__65916.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__65917 = this;
return this__65917.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__65927 = null;
var G__65927__65928 = (function (rng,n){
var this__65918 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__65918.start + (n * this__65918.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____65919 = (this__65918.start > this__65918.end);

if(cljs.core.truth_(and__3546__auto____65919))
{return cljs.core._EQ_.call(null,this__65918.step,0);
} else
{return and__3546__auto____65919;
}
})()))
{return this__65918.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__65927__65929 = (function (rng,n,not_found){
var this__65920 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__65920.start + (n * this__65920.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____65921 = (this__65920.start > this__65920.end);

if(cljs.core.truth_(and__3546__auto____65921))
{return cljs.core._EQ_.call(null,this__65920.step,0);
} else
{return and__3546__auto____65921;
}
})()))
{return this__65920.start;
} else
{return not_found;
}
}
});
G__65927 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__65927__65928.call(this,rng,n);
case  3 :
return G__65927__65929.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__65927;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__65922 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__65922.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__65931 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__65932 = (function (end){
return range.call(null,0,end,1);
});
var range__65933 = (function (start,end){
return range.call(null,start,end,1);
});
var range__65934 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__65931.call(this);
case  1 :
return range__65932.call(this,start);
case  2 :
return range__65933.call(this,start,end);
case  3 :
return range__65934.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65936 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65936))
{var s__65937 = temp__3698__auto____65936;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__65937),take_nth.call(null,n,cljs.core.drop.call(null,n,s__65937)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65939))
{var s__65940 = temp__3698__auto____65939;

var fst__65941 = cljs.core.first.call(null,s__65940);
var fv__65942 = f.call(null,fst__65941);
var run__65943 = cljs.core.cons.call(null,fst__65941,cljs.core.take_while.call(null,(function (p1__65938_SHARP_){
return cljs.core._EQ_.call(null,fv__65942,f.call(null,p1__65938_SHARP_));
}),cljs.core.next.call(null,s__65940)));

return cljs.core.cons.call(null,run__65943,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__65943),s__65940))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__65958 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____65954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____65954))
{var s__65955 = temp__3695__auto____65954;

return reductions.call(null,f,cljs.core.first.call(null,s__65955),cljs.core.rest.call(null,s__65955));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__65959 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____65956 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____65956))
{var s__65957 = temp__3698__auto____65956;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__65957)),cljs.core.rest.call(null,s__65957));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__65958.call(this,f,init);
case  3 :
return reductions__65959.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__65962 = (function (f){
return (function() {
var G__65967 = null;
var G__65967__65968 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__65967__65969 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__65967__65970 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__65967__65971 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__65967__65972 = (function() { 
var G__65974__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__65974 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65974__delegate.call(this, x, y, z, args);
};
G__65974.cljs$lang$maxFixedArity = 3;
G__65974.cljs$lang$applyTo = (function (arglist__65975){
var x = cljs.core.first(arglist__65975);
var y = cljs.core.first(cljs.core.next(arglist__65975));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65975)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65975)));
return G__65974__delegate.call(this, x, y, z, args);
});
return G__65974;
})()
;
G__65967 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__65967__65968.call(this);
case  1 :
return G__65967__65969.call(this,x);
case  2 :
return G__65967__65970.call(this,x,y);
case  3 :
return G__65967__65971.call(this,x,y,z);
default:
return G__65967__65972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65967.cljs$lang$maxFixedArity = 3;
G__65967.cljs$lang$applyTo = G__65967__65972.cljs$lang$applyTo;
return G__65967;
})()
});
var juxt__65963 = (function (f,g){
return (function() {
var G__65976 = null;
var G__65976__65977 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__65976__65978 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__65976__65979 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__65976__65980 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__65976__65981 = (function() { 
var G__65983__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__65983 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65983__delegate.call(this, x, y, z, args);
};
G__65983.cljs$lang$maxFixedArity = 3;
G__65983.cljs$lang$applyTo = (function (arglist__65984){
var x = cljs.core.first(arglist__65984);
var y = cljs.core.first(cljs.core.next(arglist__65984));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65984)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65984)));
return G__65983__delegate.call(this, x, y, z, args);
});
return G__65983;
})()
;
G__65976 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__65976__65977.call(this);
case  1 :
return G__65976__65978.call(this,x);
case  2 :
return G__65976__65979.call(this,x,y);
case  3 :
return G__65976__65980.call(this,x,y,z);
default:
return G__65976__65981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65976.cljs$lang$maxFixedArity = 3;
G__65976.cljs$lang$applyTo = G__65976__65981.cljs$lang$applyTo;
return G__65976;
})()
});
var juxt__65964 = (function (f,g,h){
return (function() {
var G__65985 = null;
var G__65985__65986 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__65985__65987 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__65985__65988 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__65985__65989 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__65985__65990 = (function() { 
var G__65992__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__65992 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65992__delegate.call(this, x, y, z, args);
};
G__65992.cljs$lang$maxFixedArity = 3;
G__65992.cljs$lang$applyTo = (function (arglist__65993){
var x = cljs.core.first(arglist__65993);
var y = cljs.core.first(cljs.core.next(arglist__65993));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__65993)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__65993)));
return G__65992__delegate.call(this, x, y, z, args);
});
return G__65992;
})()
;
G__65985 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__65985__65986.call(this);
case  1 :
return G__65985__65987.call(this,x);
case  2 :
return G__65985__65988.call(this,x,y);
case  3 :
return G__65985__65989.call(this,x,y,z);
default:
return G__65985__65990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65985.cljs$lang$maxFixedArity = 3;
G__65985.cljs$lang$applyTo = G__65985__65990.cljs$lang$applyTo;
return G__65985;
})()
});
var juxt__65965 = (function() { 
var G__65994__delegate = function (f,g,h,fs){
var fs__65961 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__65995 = null;
var G__65995__65996 = (function (){
return cljs.core.reduce.call(null,(function (p1__65944_SHARP_,p2__65945_SHARP_){
return cljs.core.conj.call(null,p1__65944_SHARP_,p2__65945_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__65961);
});
var G__65995__65997 = (function (x){
return cljs.core.reduce.call(null,(function (p1__65946_SHARP_,p2__65947_SHARP_){
return cljs.core.conj.call(null,p1__65946_SHARP_,p2__65947_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__65961);
});
var G__65995__65998 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__65948_SHARP_,p2__65949_SHARP_){
return cljs.core.conj.call(null,p1__65948_SHARP_,p2__65949_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__65961);
});
var G__65995__65999 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__65950_SHARP_,p2__65951_SHARP_){
return cljs.core.conj.call(null,p1__65950_SHARP_,p2__65951_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__65961);
});
var G__65995__66000 = (function() { 
var G__66002__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__65952_SHARP_,p2__65953_SHARP_){
return cljs.core.conj.call(null,p1__65952_SHARP_,cljs.core.apply.call(null,p2__65953_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__65961);
};
var G__66002 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__66002__delegate.call(this, x, y, z, args);
};
G__66002.cljs$lang$maxFixedArity = 3;
G__66002.cljs$lang$applyTo = (function (arglist__66003){
var x = cljs.core.first(arglist__66003);
var y = cljs.core.first(cljs.core.next(arglist__66003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__66003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__66003)));
return G__66002__delegate.call(this, x, y, z, args);
});
return G__66002;
})()
;
G__65995 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__65995__65996.call(this);
case  1 :
return G__65995__65997.call(this,x);
case  2 :
return G__65995__65998.call(this,x,y);
case  3 :
return G__65995__65999.call(this,x,y,z);
default:
return G__65995__66000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__65995.cljs$lang$maxFixedArity = 3;
G__65995.cljs$lang$applyTo = G__65995__66000.cljs$lang$applyTo;
return G__65995;
})()
};
var G__65994 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__65994__delegate.call(this, f, g, h, fs);
};
G__65994.cljs$lang$maxFixedArity = 3;
G__65994.cljs$lang$applyTo = (function (arglist__66004){
var f = cljs.core.first(arglist__66004);
var g = cljs.core.first(cljs.core.next(arglist__66004));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__66004)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__66004)));
return G__65994__delegate.call(this, f, g, h, fs);
});
return G__65994;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__65962.call(this,f);
case  2 :
return juxt__65963.call(this,f,g);
case  3 :
return juxt__65964.call(this,f,g,h);
default:
return juxt__65965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__65965.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__66006 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__66009 = cljs.core.next.call(null,coll);
coll = G__66009;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__66007 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____66005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____66005))
{return (n > 0);
} else
{return and__3546__auto____66005;
}
})()))
{{
var G__66010 = (n - 1);
var G__66011 = cljs.core.next.call(null,coll);
n = G__66010;
coll = G__66011;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__66006.call(this,n);
case  2 :
return dorun__66007.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__66012 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__66013 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__66012.call(this,n);
case  2 :
return doall__66013.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__66015 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__66015),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__66015),1)))
{return cljs.core.first.call(null,matches__66015);
} else
{return cljs.core.vec.call(null,matches__66015);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__66016 = re.exec(s);

if(cljs.core.truth_((matches__66016 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__66016),1)))
{return cljs.core.first.call(null,matches__66016);
} else
{return cljs.core.vec.call(null,matches__66016);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__66017 = cljs.core.re_find.call(null,re,s);
var match_idx__66018 = s.search(re);
var match_str__66019 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__66017))?cljs.core.first.call(null,match_data__66017):match_data__66017);
var post_match__66020 = cljs.core.subs.call(null,s,(match_idx__66018 + cljs.core.count.call(null,match_str__66019)));

if(cljs.core.truth_(match_data__66017))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__66017,re_seq.call(null,re,post_match__66020));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__66022__66023 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___66024 = cljs.core.nth.call(null,vec__66022__66023,0,null);
var flags__66025 = cljs.core.nth.call(null,vec__66022__66023,1,null);
var pattern__66026 = cljs.core.nth.call(null,vec__66022__66023,2,null);

return (new RegExp(pattern__66026,flags__66025));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__66021_SHARP_){
return print_one.call(null,p1__66021_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____66027 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____66027))
{var and__3546__auto____66031 = (function (){var x__450__auto____66028 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____66029 = x__450__auto____66028;

if(cljs.core.truth_(and__3546__auto____66029))
{var and__3546__auto____66030 = x__450__auto____66028.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____66030))
{return cljs.core.not.call(null,x__450__auto____66028.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____66030;
}
} else
{return and__3546__auto____66029;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____66028);
}
})();

if(cljs.core.truth_(and__3546__auto____66031))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____66031;
}
} else
{return and__3546__auto____66027;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____66032 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____66033 = x__450__auto____66032;

if(cljs.core.truth_(and__3546__auto____66033))
{var and__3546__auto____66034 = x__450__auto____66032.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____66034))
{return cljs.core.not.call(null,x__450__auto____66032.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____66034;
}
} else
{return and__3546__auto____66033;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____66032);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__66035 = cljs.core.first.call(null,objs);
var sb__66036 = (new goog.string.StringBuffer());

var G__66037__66038 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__66037__66038))
{var obj__66039 = cljs.core.first.call(null,G__66037__66038);
var G__66037__66040 = G__66037__66038;

while(true){
if(cljs.core.truth_((obj__66039 === first_obj__66035)))
{} else
{sb__66036.append(" ");
}
var G__66041__66042 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__66039,opts));

if(cljs.core.truth_(G__66041__66042))
{var string__66043 = cljs.core.first.call(null,G__66041__66042);
var G__66041__66044 = G__66041__66042;

while(true){
sb__66036.append(string__66043);
var temp__3698__auto____66045 = cljs.core.next.call(null,G__66041__66044);

if(cljs.core.truth_(temp__3698__auto____66045))
{var G__66041__66046 = temp__3698__auto____66045;

{
var G__66049 = cljs.core.first.call(null,G__66041__66046);
var G__66050 = G__66041__66046;
string__66043 = G__66049;
G__66041__66044 = G__66050;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____66047 = cljs.core.next.call(null,G__66037__66040);

if(cljs.core.truth_(temp__3698__auto____66047))
{var G__66037__66048 = temp__3698__auto____66047;

{
var G__66051 = cljs.core.first.call(null,G__66037__66048);
var G__66052 = G__66037__66048;
obj__66039 = G__66051;
G__66037__66040 = G__66052;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__66036);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__66053 = cljs.core.first.call(null,objs);

var G__66054__66055 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__66054__66055))
{var obj__66056 = cljs.core.first.call(null,G__66054__66055);
var G__66054__66057 = G__66054__66055;

while(true){
if(cljs.core.truth_((obj__66056 === first_obj__66053)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__66058__66059 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__66056,opts));

if(cljs.core.truth_(G__66058__66059))
{var string__66060 = cljs.core.first.call(null,G__66058__66059);
var G__66058__66061 = G__66058__66059;

while(true){
cljs.core.string_print.call(null,string__66060);
var temp__3698__auto____66062 = cljs.core.next.call(null,G__66058__66061);

if(cljs.core.truth_(temp__3698__auto____66062))
{var G__66058__66063 = temp__3698__auto____66062;

{
var G__66066 = cljs.core.first.call(null,G__66058__66063);
var G__66067 = G__66058__66063;
string__66060 = G__66066;
G__66058__66061 = G__66067;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____66064 = cljs.core.next.call(null,G__66054__66057);

if(cljs.core.truth_(temp__3698__auto____66064))
{var G__66054__66065 = temp__3698__auto____66064;

{
var G__66068 = cljs.core.first.call(null,G__66054__66065);
var G__66069 = G__66054__66065;
obj__66056 = G__66068;
G__66054__66057 = G__66069;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__66070){
var objs = cljs.core.seq( arglist__66070 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__66071){
var objs = cljs.core.seq( arglist__66071 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__66072){
var objs = cljs.core.seq( arglist__66072 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__66073){
var objs = cljs.core.seq( arglist__66073 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__66074){
var objs = cljs.core.seq( arglist__66074 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__66075 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__66075,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____66076 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____66076))
{var nspc__66077 = temp__3698__auto____66076;

return cljs.core.str.call(null,nspc__66077,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____66078 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____66078))
{var nspc__66079 = temp__3698__auto____66078;

return cljs.core.str.call(null,nspc__66079,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__66080 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__66080,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__66081 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__66082 = this;
var G__66083__66084 = cljs.core.seq.call(null,this__66082.watches);

if(cljs.core.truth_(G__66083__66084))
{var G__66086__66088 = cljs.core.first.call(null,G__66083__66084);
var vec__66087__66089 = G__66086__66088;
var key__66090 = cljs.core.nth.call(null,vec__66087__66089,0,null);
var f__66091 = cljs.core.nth.call(null,vec__66087__66089,1,null);
var G__66083__66092 = G__66083__66084;

var G__66086__66093 = G__66086__66088;
var G__66083__66094 = G__66083__66092;

while(true){
var vec__66095__66096 = G__66086__66093;
var key__66097 = cljs.core.nth.call(null,vec__66095__66096,0,null);
var f__66098 = cljs.core.nth.call(null,vec__66095__66096,1,null);
var G__66083__66099 = G__66083__66094;

f__66098.call(null,key__66097,this$,oldval,newval);
var temp__3698__auto____66100 = cljs.core.next.call(null,G__66083__66099);

if(cljs.core.truth_(temp__3698__auto____66100))
{var G__66083__66101 = temp__3698__auto____66100;

{
var G__66108 = cljs.core.first.call(null,G__66083__66101);
var G__66109 = G__66083__66101;
G__66086__66093 = G__66108;
G__66083__66094 = G__66109;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__66102 = this;
return this$.watches = cljs.core.assoc.call(null,this__66102.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__66103 = this;
return this$.watches = cljs.core.dissoc.call(null,this__66103.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__66104 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__66104.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__66105 = this;
return this__66105.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__66106 = this;
return this__66106.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__66107 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__66116 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__66117 = (function() { 
var G__66119__delegate = function (x,p__66110){
var map__66111__66112 = p__66110;
var map__66111__66113 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__66111__66112))?cljs.core.apply.call(null,cljs.core.hash_map,map__66111__66112):map__66111__66112);
var validator__66114 = cljs.core.get.call(null,map__66111__66113,"\uFDD0'validator");
var meta__66115 = cljs.core.get.call(null,map__66111__66113,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__66115,validator__66114,null));
};
var G__66119 = function (x,var_args){
var p__66110 = null;
if (goog.isDef(var_args)) {
  p__66110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__66119__delegate.call(this, x, p__66110);
};
G__66119.cljs$lang$maxFixedArity = 1;
G__66119.cljs$lang$applyTo = (function (arglist__66120){
var x = cljs.core.first(arglist__66120);
var p__66110 = cljs.core.rest(arglist__66120);
return G__66119__delegate.call(this, x, p__66110);
});
return G__66119;
})()
;
atom = function(x,var_args){
var p__66110 = var_args;
switch(arguments.length){
case  1 :
return atom__66116.call(this,x);
default:
return atom__66117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__66117.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____66121 = a.validator;

if(cljs.core.truth_(temp__3698__auto____66121))
{var validate__66122 = temp__3698__auto____66121;

if(cljs.core.truth_(validate__66122.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__66123 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__66123,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___66124 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___66125 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___66126 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___66127 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___66128 = (function() { 
var G__66130__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__66130 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__66130__delegate.call(this, a, f, x, y, z, more);
};
G__66130.cljs$lang$maxFixedArity = 5;
G__66130.cljs$lang$applyTo = (function (arglist__66131){
var a = cljs.core.first(arglist__66131);
var f = cljs.core.first(cljs.core.next(arglist__66131));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__66131)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__66131))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__66131)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__66131)))));
return G__66130__delegate.call(this, a, f, x, y, z, more);
});
return G__66130;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___66124.call(this,a,f);
case  3 :
return swap_BANG___66125.call(this,a,f,x);
case  4 :
return swap_BANG___66126.call(this,a,f,x,y);
case  5 :
return swap_BANG___66127.call(this,a,f,x,y,z);
default:
return swap_BANG___66128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___66128.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__66132){
var iref = cljs.core.first(arglist__66132);
var f = cljs.core.first(cljs.core.next(arglist__66132));
var args = cljs.core.rest(cljs.core.next(arglist__66132));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__66133 = (function (){
return gensym.call(null,"G__");
});
var gensym__66134 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__66133.call(this);
case  1 :
return gensym__66134.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__66136 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__66136.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__66137 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__66137.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__66137.state,this__66137.f);
}
return cljs.core.deref.call(null,this__66137.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__66138){
var body = cljs.core.seq( arglist__66138 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__66139__66140 = options;
var map__66139__66141 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__66139__66140))?cljs.core.apply.call(null,cljs.core.hash_map,map__66139__66140):map__66139__66140);
var keywordize_keys__66142 = cljs.core.get.call(null,map__66139__66141,"\uFDD0'keywordize-keys");
var keyfn__66143 = (cljs.core.truth_(keywordize_keys__66142)?cljs.core.keyword:cljs.core.str);
var f__66149 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____66148 = (function iter__66144(s__66145){
return (new cljs.core.LazySeq(null,false,(function (){
var s__66145__66146 = s__66145;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__66145__66146)))
{var k__66147 = cljs.core.first.call(null,s__66145__66146);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__66143.call(null,k__66147),thisfn.call(null,(x[k__66147]))]),iter__66144.call(null,cljs.core.rest.call(null,s__66145__66146)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____66148.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__66149.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__66150){
var x = cljs.core.first(arglist__66150);
var options = cljs.core.rest(arglist__66150);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__66151 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__66155__delegate = function (args){
var temp__3695__auto____66152 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__66151),args);

if(cljs.core.truth_(temp__3695__auto____66152))
{var v__66153 = temp__3695__auto____66152;

return v__66153;
} else
{var ret__66154 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__66151,cljs.core.assoc,args,ret__66154);
return ret__66154;
}
};
var G__66155 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66155__delegate.call(this, args);
};
G__66155.cljs$lang$maxFixedArity = 0;
G__66155.cljs$lang$applyTo = (function (arglist__66156){
var args = cljs.core.seq( arglist__66156 );;
return G__66155__delegate.call(this, args);
});
return G__66155;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__66158 = (function (f){
while(true){
var ret__66157 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__66157)))
{{
var G__66161 = ret__66157;
f = G__66161;
continue;
}
} else
{return ret__66157;
}
break;
}
});
var trampoline__66159 = (function() { 
var G__66162__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__66162 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__66162__delegate.call(this, f, args);
};
G__66162.cljs$lang$maxFixedArity = 1;
G__66162.cljs$lang$applyTo = (function (arglist__66163){
var f = cljs.core.first(arglist__66163);
var args = cljs.core.rest(arglist__66163);
return G__66162__delegate.call(this, f, args);
});
return G__66162;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__66158.call(this,f);
default:
return trampoline__66159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__66159.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__66164 = (function (){
return rand.call(null,1);
});
var rand__66165 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__66164.call(this);
case  1 :
return rand__66165.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__66167 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__66167,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__66167,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___66176 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___66177 = (function (h,child,parent){
var or__3548__auto____66168 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____66168))
{return or__3548__auto____66168;
} else
{var or__3548__auto____66169 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____66169))
{return or__3548__auto____66169;
} else
{var and__3546__auto____66170 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____66170))
{var and__3546__auto____66171 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____66171))
{var and__3546__auto____66172 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____66172))
{var ret__66173 = true;
var i__66174 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____66175 = cljs.core.not.call(null,ret__66173);

if(cljs.core.truth_(or__3548__auto____66175))
{return or__3548__auto____66175;
} else
{return cljs.core._EQ_.call(null,i__66174,cljs.core.count.call(null,parent));
}
})()))
{return ret__66173;
} else
{{
var G__66179 = isa_QMARK_.call(null,h,child.call(null,i__66174),parent.call(null,i__66174));
var G__66180 = (i__66174 + 1);
ret__66173 = G__66179;
i__66174 = G__66180;
continue;
}
}
break;
}
} else
{return and__3546__auto____66172;
}
} else
{return and__3546__auto____66171;
}
} else
{return and__3546__auto____66170;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___66176.call(this,h,child);
case  3 :
return isa_QMARK___66177.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__66181 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__66182 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__66181.call(this,h);
case  2 :
return parents__66182.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__66184 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__66185 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__66184.call(this,h);
case  2 :
return ancestors__66185.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__66187 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__66188 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__66187.call(this,h);
case  2 :
return descendants__66188.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__66198 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__66199 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__66193 = "\uFDD0'parents".call(null,h);
var td__66194 = "\uFDD0'descendants".call(null,h);
var ta__66195 = "\uFDD0'ancestors".call(null,h);
var tf__66196 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____66197 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__66193.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__66195.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__66195.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__66193,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__66196.call(null,"\uFDD0'ancestors".call(null,h),tag,td__66194,parent,ta__66195),"\uFDD0'descendants":tf__66196.call(null,"\uFDD0'descendants".call(null,h),parent,ta__66195,tag,td__66194)});
})());

if(cljs.core.truth_(or__3548__auto____66197))
{return or__3548__auto____66197;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__66198.call(this,h,tag);
case  3 :
return derive__66199.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__66205 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__66206 = (function (h,tag,parent){
var parentMap__66201 = "\uFDD0'parents".call(null,h);
var childsParents__66202 = (cljs.core.truth_(parentMap__66201.call(null,tag))?cljs.core.disj.call(null,parentMap__66201.call(null,tag),parent):cljs.core.set([]));
var newParents__66203 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__66202))?cljs.core.assoc.call(null,parentMap__66201,tag,childsParents__66202):cljs.core.dissoc.call(null,parentMap__66201,tag));
var deriv_seq__66204 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__66190_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__66190_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__66190_SHARP_),cljs.core.second.call(null,p1__66190_SHARP_)));
}),cljs.core.seq.call(null,newParents__66203)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__66201.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__66191_SHARP_,p2__66192_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__66191_SHARP_,p2__66192_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__66204));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__66205.call(this,h,tag);
case  3 :
return underive__66206.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__66208 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____66210 = (cljs.core.truth_((function (){var and__3546__auto____66209 = xprefs__66208;

if(cljs.core.truth_(and__3546__auto____66209))
{return xprefs__66208.call(null,y);
} else
{return and__3546__auto____66209;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____66210))
{return or__3548__auto____66210;
} else
{var or__3548__auto____66212 = (function (){var ps__66211 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__66211) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__66211),prefer_table)))
{} else
{}
{
var G__66215 = cljs.core.rest.call(null,ps__66211);
ps__66211 = G__66215;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____66212))
{return or__3548__auto____66212;
} else
{var or__3548__auto____66214 = (function (){var ps__66213 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__66213) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__66213),y,prefer_table)))
{} else
{}
{
var G__66216 = cljs.core.rest.call(null,ps__66213);
ps__66213 = G__66216;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____66214))
{return or__3548__auto____66214;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____66217 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____66217))
{return or__3548__auto____66217;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__66226 = cljs.core.reduce.call(null,(function (be,p__66218){
var vec__66219__66220 = p__66218;
var k__66221 = cljs.core.nth.call(null,vec__66219__66220,0,null);
var ___66222 = cljs.core.nth.call(null,vec__66219__66220,1,null);
var e__66223 = vec__66219__66220;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__66221)))
{var be2__66225 = (cljs.core.truth_((function (){var or__3548__auto____66224 = (be === null);

if(cljs.core.truth_(or__3548__auto____66224))
{return or__3548__auto____66224;
} else
{return cljs.core.dominates.call(null,k__66221,cljs.core.first.call(null,be),prefer_table);
}
})())?e__66223:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__66225),k__66221,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__66221," and ",cljs.core.first.call(null,be2__66225),", and neither is preferred")));
}
return be2__66225;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__66226))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__66226));
return cljs.core.second.call(null,best_entry__66226);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____66227 = mf;

if(cljs.core.truth_(and__3546__auto____66227))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____66227;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____66228 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66228))
{return or__3548__auto____66228;
} else
{var or__3548__auto____66229 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____66229))
{return or__3548__auto____66229;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____66230 = mf;

if(cljs.core.truth_(and__3546__auto____66230))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____66230;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____66231 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66231))
{return or__3548__auto____66231;
} else
{var or__3548__auto____66232 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____66232))
{return or__3548__auto____66232;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____66233 = mf;

if(cljs.core.truth_(and__3546__auto____66233))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____66233;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____66234 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66234))
{return or__3548__auto____66234;
} else
{var or__3548__auto____66235 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____66235))
{return or__3548__auto____66235;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____66236 = mf;

if(cljs.core.truth_(and__3546__auto____66236))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____66236;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____66237 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66237))
{return or__3548__auto____66237;
} else
{var or__3548__auto____66238 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____66238))
{return or__3548__auto____66238;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____66239 = mf;

if(cljs.core.truth_(and__3546__auto____66239))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____66239;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____66240 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66240))
{return or__3548__auto____66240;
} else
{var or__3548__auto____66241 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____66241))
{return or__3548__auto____66241;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____66242 = mf;

if(cljs.core.truth_(and__3546__auto____66242))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____66242;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____66243 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66243))
{return or__3548__auto____66243;
} else
{var or__3548__auto____66244 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____66244))
{return or__3548__auto____66244;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____66245 = mf;

if(cljs.core.truth_(and__3546__auto____66245))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____66245;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____66246 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66246))
{return or__3548__auto____66246;
} else
{var or__3548__auto____66247 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____66247))
{return or__3548__auto____66247;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____66248 = mf;

if(cljs.core.truth_(and__3546__auto____66248))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____66248;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____66249 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____66249))
{return or__3548__auto____66249;
} else
{var or__3548__auto____66250 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____66250))
{return or__3548__auto____66250;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__66251 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__66252 = cljs.core._get_method.call(null,mf,dispatch_val__66251);

if(cljs.core.truth_(target_fn__66252))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__66251)));
}
return cljs.core.apply.call(null,target_fn__66252,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__66253 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__66254 = this;
cljs.core.swap_BANG_.call(null,this__66254.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__66254.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__66254.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__66254.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__66255 = this;
cljs.core.swap_BANG_.call(null,this__66255.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__66255.method_cache,this__66255.method_table,this__66255.cached_hierarchy,this__66255.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__66256 = this;
cljs.core.swap_BANG_.call(null,this__66256.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__66256.method_cache,this__66256.method_table,this__66256.cached_hierarchy,this__66256.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__66257 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__66257.cached_hierarchy),cljs.core.deref.call(null,this__66257.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__66257.method_cache,this__66257.method_table,this__66257.cached_hierarchy,this__66257.hierarchy);
}
var temp__3695__auto____66258 = cljs.core.deref.call(null,this__66257.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____66258))
{var target_fn__66259 = temp__3695__auto____66258;

return target_fn__66259;
} else
{var temp__3695__auto____66260 = cljs.core.find_and_cache_best_method.call(null,this__66257.name,dispatch_val,this__66257.hierarchy,this__66257.method_table,this__66257.prefer_table,this__66257.method_cache,this__66257.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____66260))
{var target_fn__66261 = temp__3695__auto____66260;

return target_fn__66261;
} else
{return cljs.core.deref.call(null,this__66257.method_table).call(null,this__66257.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__66262 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__66262.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__66262.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__66262.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__66262.method_cache,this__66262.method_table,this__66262.cached_hierarchy,this__66262.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__66263 = this;
return cljs.core.deref.call(null,this__66263.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__66264 = this;
return cljs.core.deref.call(null,this__66264.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__66265 = this;
return cljs.core.do_dispatch.call(null,mf,this__66265.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__66266__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__66266 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__66266__delegate.call(this, _, args);
};
G__66266.cljs$lang$maxFixedArity = 1;
G__66266.cljs$lang$applyTo = (function (arglist__66267){
var _ = cljs.core.first(arglist__66267);
var args = cljs.core.rest(arglist__66267);
return G__66266__delegate.call(this, _, args);
});
return G__66266;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
