(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function $S(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pd={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function WS(){if(M_)return bt;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function R(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,J={};function $(D,Z,it){this.props=D,this.context=Z,this.refs=J,this.updater=it||L}$.prototype.isReactComponent={},$.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},$.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Tt(){}Tt.prototype=$.prototype;function ht(D,Z,it){this.props=D,this.context=Z,this.refs=J,this.updater=it||L}var ot=ht.prototype=new Tt;ot.constructor=ht,W(ot,$.prototype),ot.isPureReactComponent=!0;var wt=Array.isArray,vt={H:null,A:null,T:null,S:null,V:null},Pt=Object.prototype.hasOwnProperty;function V(D,Z,it,tt,ft,Ct){return it=Ct.ref,{$$typeof:r,type:D,key:Z,ref:it!==void 0?it:null,props:Ct}}function S(D,Z){return V(D.type,Z,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(it){return Z[it]})}var M=/\/+/g;function k(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):Z.toString(36)}function C(){}function xe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ae(D,Z,it,tt,ft){var Ct=typeof D;(Ct==="undefined"||Ct==="boolean")&&(D=null);var Et=!1;if(D===null)Et=!0;else switch(Ct){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(D.$$typeof){case r:case t:Et=!0;break;case T:return Et=D._init,ae(Et(D._payload),Z,it,tt,ft)}}if(Et)return ft=ft(D),Et=tt===""?"."+k(D,0):tt,wt(ft)?(it="",Et!=null&&(it=Et.replace(M,"$&/")+"/"),ae(ft,Z,it,"",function(Yn){return Yn})):ft!=null&&(I(ft)&&(ft=S(ft,it+(ft.key==null||D&&D.key===ft.key?"":(""+ft.key).replace(M,"$&/")+"/")+Et)),Z.push(ft)),1;Et=0;var Ce=tt===""?".":tt+":";if(wt(D))for(var Zt=0;Zt<D.length;Zt++)tt=D[Zt],Ct=Ce+k(tt,Zt),Et+=ae(tt,Z,it,Ct,ft);else if(Zt=R(D),typeof Zt=="function")for(D=Zt.call(D),Zt=0;!(tt=D.next()).done;)tt=tt.value,Ct=Ce+k(tt,Zt++),Et+=ae(tt,Z,it,Ct,ft);else if(Ct==="object"){if(typeof D.then=="function")return ae(xe(D),Z,it,tt,ft);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Et}function F(D,Z,it){if(D==null)return D;var tt=[],ft=0;return ae(D,tt,"","",function(Ct){return Z.call(it,Ct,ft++)}),tt}function nt(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(it){(D._status===0||D._status===-1)&&(D._status=1,D._result=it)},function(it){(D._status===0||D._status===-1)&&(D._status=2,D._result=it)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ut=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Bt(){}return bt.Children={map:F,forEach:function(D,Z,it){F(D,function(){Z.apply(this,arguments)},it)},count:function(D){var Z=0;return F(D,function(){Z++}),Z},toArray:function(D){return F(D,function(Z){return Z})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=$,bt.Fragment=n,bt.Profiler=o,bt.PureComponent=ht,bt.StrictMode=s,bt.Suspense=p,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=vt,bt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return vt.H.useMemoCache(D)}},bt.cache=function(D){return function(){return D.apply(null,arguments)}},bt.cloneElement=function(D,Z,it){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var tt=W({},D.props),ft=D.key,Ct=void 0;if(Z!=null)for(Et in Z.ref!==void 0&&(Ct=void 0),Z.key!==void 0&&(ft=""+Z.key),Z)!Pt.call(Z,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&Z.ref===void 0||(tt[Et]=Z[Et]);var Et=arguments.length-2;if(Et===1)tt.children=it;else if(1<Et){for(var Ce=Array(Et),Zt=0;Zt<Et;Zt++)Ce[Zt]=arguments[Zt+2];tt.children=Ce}return V(D.type,ft,void 0,void 0,Ct,tt)},bt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},bt.createElement=function(D,Z,it){var tt,ft={},Ct=null;if(Z!=null)for(tt in Z.key!==void 0&&(Ct=""+Z.key),Z)Pt.call(Z,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ft[tt]=Z[tt]);var Et=arguments.length-2;if(Et===1)ft.children=it;else if(1<Et){for(var Ce=Array(Et),Zt=0;Zt<Et;Zt++)Ce[Zt]=arguments[Zt+2];ft.children=Ce}if(D&&D.defaultProps)for(tt in Et=D.defaultProps,Et)ft[tt]===void 0&&(ft[tt]=Et[tt]);return V(D,Ct,void 0,void 0,null,ft)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:m,render:D}},bt.isValidElement=I,bt.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:nt}},bt.memo=function(D,Z){return{$$typeof:y,type:D,compare:Z===void 0?null:Z}},bt.startTransition=function(D){var Z=vt.T,it={};vt.T=it;try{var tt=D(),ft=vt.S;ft!==null&&ft(it,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(Bt,ut)}catch(Ct){ut(Ct)}finally{vt.T=Z}},bt.unstable_useCacheRefresh=function(){return vt.H.useCacheRefresh()},bt.use=function(D){return vt.H.use(D)},bt.useActionState=function(D,Z,it){return vt.H.useActionState(D,Z,it)},bt.useCallback=function(D,Z){return vt.H.useCallback(D,Z)},bt.useContext=function(D){return vt.H.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D,Z){return vt.H.useDeferredValue(D,Z)},bt.useEffect=function(D,Z,it){var tt=vt.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tt.useEffect(D,Z)},bt.useId=function(){return vt.H.useId()},bt.useImperativeHandle=function(D,Z,it){return vt.H.useImperativeHandle(D,Z,it)},bt.useInsertionEffect=function(D,Z){return vt.H.useInsertionEffect(D,Z)},bt.useLayoutEffect=function(D,Z){return vt.H.useLayoutEffect(D,Z)},bt.useMemo=function(D,Z){return vt.H.useMemo(D,Z)},bt.useOptimistic=function(D,Z){return vt.H.useOptimistic(D,Z)},bt.useReducer=function(D,Z,it){return vt.H.useReducer(D,Z,it)},bt.useRef=function(D){return vt.H.useRef(D)},bt.useState=function(D){return vt.H.useState(D)},bt.useSyncExternalStore=function(D,Z,it){return vt.H.useSyncExternalStore(D,Z,it)},bt.useTransition=function(){return vt.H.useTransition()},bt.version="19.1.0",bt}var P_;function Im(){return P_||(P_=1,Pd.exports=WS()),Pd.exports}var ve=Im();const z=$S(ve);var kd={exports:{}},Tl={},xd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function ZS(){return k_||(k_=1,function(r){function t(F,nt){var ut=F.length;F.push(nt);t:for(;0<ut;){var Bt=ut-1>>>1,D=F[Bt];if(0<o(D,nt))F[Bt]=nt,F[ut]=D,ut=Bt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],ut=F.pop();if(ut!==nt){F[0]=ut;t:for(var Bt=0,D=F.length,Z=D>>>1;Bt<Z;){var it=2*(Bt+1)-1,tt=F[it],ft=it+1,Ct=F[ft];if(0>o(tt,ut))ft<D&&0>o(Ct,tt)?(F[Bt]=Ct,F[ft]=ut,Bt=ft):(F[Bt]=tt,F[it]=ut,Bt=it);else if(ft<D&&0>o(Ct,ut))F[Bt]=Ct,F[ft]=ut,Bt=ft;else break t}}return nt}function o(F,nt){var ut=F.sortIndex-nt.sortIndex;return ut!==0?ut:F.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],T=1,b=null,R=3,L=!1,W=!1,J=!1,$=!1,Tt=typeof setTimeout=="function"?setTimeout:null,ht=typeof clearTimeout=="function"?clearTimeout:null,ot=typeof setImmediate<"u"?setImmediate:null;function wt(F){for(var nt=n(y);nt!==null;){if(nt.callback===null)s(y);else if(nt.startTime<=F)s(y),nt.sortIndex=nt.expirationTime,t(p,nt);else break;nt=n(y)}}function vt(F){if(J=!1,wt(F),!W)if(n(p)!==null)W=!0,Pt||(Pt=!0,k());else{var nt=n(y);nt!==null&&ae(vt,nt.startTime-F)}}var Pt=!1,V=-1,S=5,I=-1;function N(){return $?!0:!(r.unstable_now()-I<S)}function M(){if($=!1,Pt){var F=r.unstable_now();I=F;var nt=!0;try{t:{W=!1,J&&(J=!1,ht(V),V=-1),L=!0;var ut=R;try{e:{for(wt(F),b=n(p);b!==null&&!(b.expirationTime>F&&N());){var Bt=b.callback;if(typeof Bt=="function"){b.callback=null,R=b.priorityLevel;var D=Bt(b.expirationTime<=F);if(F=r.unstable_now(),typeof D=="function"){b.callback=D,wt(F),nt=!0;break e}b===n(p)&&s(p),wt(F)}else s(p);b=n(p)}if(b!==null)nt=!0;else{var Z=n(y);Z!==null&&ae(vt,Z.startTime-F),nt=!1}}break t}finally{b=null,R=ut,L=!1}nt=void 0}}finally{nt?k():Pt=!1}}}var k;if(typeof ot=="function")k=function(){ot(M)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,xe=C.port2;C.port1.onmessage=M,k=function(){xe.postMessage(null)}}else k=function(){Tt(M,0)};function ae(F,nt){V=Tt(function(){F(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(F){switch(R){case 1:case 2:case 3:var nt=3;break;default:nt=R}var ut=R;R=nt;try{return F()}finally{R=ut}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ut=R;R=F;try{return nt()}finally{R=ut}},r.unstable_scheduleCallback=function(F,nt,ut){var Bt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?Bt+ut:Bt):ut=Bt,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ut+D,F={id:T++,callback:nt,priorityLevel:F,startTime:ut,expirationTime:D,sortIndex:-1},ut>Bt?(F.sortIndex=ut,t(y,F),n(p)===null&&F===n(y)&&(J?(ht(V),V=-1):J=!0,ae(vt,ut-Bt))):(F.sortIndex=D,t(p,F),W||L||(W=!0,Pt||(Pt=!0,k()))),F},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(F){var nt=R;return function(){var ut=R;R=nt;try{return F.apply(this,arguments)}finally{R=ut}}}}(Ld)),Ld}var x_;function JS(){return x_||(x_=1,xd.exports=ZS()),xd.exports}var Ud={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function tb(){if(L_)return Ye;L_=1;var r=Im();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ye.createPortal=function(p,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,T)},Ye.flushSync=function(p){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=T,s.d.f()}},Ye.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ye.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ye.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var T=y.as,b=m(T,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:R,fetchPriority:L}):T==="script"&&s.d.X(p,{crossOrigin:b,integrity:R,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ye.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ye.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,b=m(T,y.crossOrigin);s.d.L(p,T,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ye.preloadModule=function(p,y){if(typeof p=="string")if(y){var T=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ye.requestFormReset=function(p){s.d.r(p)},Ye.unstable_batchedUpdates=function(p,y){return p(y)},Ye.useFormState=function(p,y,T){return f.H.useFormState(p,y,T)},Ye.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ye.version="19.1.0",Ye}var U_;function eb(){if(U_)return Ud.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=tb(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function nb(){if(z_)return Tl;z_=1;var r=JS(),t=Im(),n=eb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,b=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Tt=Symbol.for("react.provider"),ht=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case $:return"Profiler";case J:return"StrictMode";case vt:return"Suspense";case Pt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case ot:return(e.displayName||"Context")+".Provider";case ht:return(e._context.displayName||"Context")+".Consumer";case wt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:xe(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return xe(e(i))}catch{}}return null}var ae=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},Bt=[],D=-1;function Z(e){return{current:e}}function it(e){0>D||(e.current=Bt[D],Bt[D]=null,D--)}function tt(e,i){D++,Bt[D]=e.current,e.current=i}var ft=Z(null),Ct=Z(null),Et=Z(null),Ce=Z(null);function Zt(e,i){switch(tt(Et,i),tt(Ct,e),tt(ft,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?o_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=o_(i),e=l_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(ft),tt(ft,e)}function Yn(){it(ft),it(Ct),it(Et)}function tr(e){e.memoizedState!==null&&tt(Ce,e);var i=ft.current,a=l_(i,e.type);i!==a&&(tt(Ct,e),tt(ft,a))}function Ti(e){Ct.current===e&&(it(ft),it(Ct)),Ce.current===e&&(it(Ce),pl._currentValue=ut)}var $r=Object.prototype.hasOwnProperty,Wr=r.unstable_scheduleCallback,Zr=r.unstable_cancelCallback,fo=r.unstable_shouldYield,eu=r.unstable_requestPaint,vn=r.unstable_now,Mh=r.unstable_getCurrentPriorityLevel,mo=r.unstable_ImmediatePriority,$s=r.unstable_UserBlockingPriority,Jr=r.unstable_NormalPriority,Ph=r.unstable_LowPriority,Ws=r.unstable_IdlePriority,go=r.log,nu=r.unstable_setDisableYieldValue,oe=null,Ft=null;function un(e){if(typeof go=="function"&&nu(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(oe,e)}catch{}}var Ke=Math.clz32?Math.clz32:ts,iu=Math.log,kh=Math.LN2;function ts(e){return e>>>=0,e===0?32:31-(iu(e)/kh|0)|0}var es=256,ns=4194304;function xn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=xn(l):(v&=E,v!==0?h=xn(v):a||(a=E&~e,a!==0&&(h=xn(a))))):(E=l&~d,E!==0?h=xn(E):v!==0?h=xn(v):a||(a=l&~e,a!==0&&(h=xn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function is(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function po(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var e=es;return es<<=1,(es&4194048)===0&&(es=256),e}function _o(){var e=ns;return ns<<=1,(ns&62914560)===0&&(ns=4194304),e}function Ai(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Si(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,B=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Ke(a),Y=1<<G;E[G]=0,w[G]=-1;var q=B[G];if(q!==null)for(B[G]=null,G=0;G<q.length;G++){var j=q[G];j!==null&&(j.lane&=-536870913)}a&=~Y}l!==0&&Xn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Xn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ke(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Eo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ke(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nr(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:I_(e.type))}function ru(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ne=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ne,me="__reactProps$"+ne,En="__reactContainer$"+ne,To="__reactEvents$"+ne,xh="__reactListeners$"+ne,ir="__reactHandles$"+ne,su="__reactResources$"+ne,rs="__reactMarker$"+ne;function rr(e){delete e[Ae],delete e[me],delete e[To],delete e[xh],delete e[ir]}function bi(e){var i=e[Ae];if(i)return i;for(var a=e.parentNode;a;){if(i=a[En]||a[Ae]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=f_(e);e!==null;){if(a=e[Ae])return a;e=f_(e)}return i}e=a,a=e.parentNode}return null}function $n(e){if(e=e[Ae]||e[En]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Wn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Je(e){var i=e[su];return i||(i=e[su]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ce(e){e[rs]=!0}var Ao=new Set,ta={};function Ln(e,i){wi(e,i),wi(e+"Capture",i)}function wi(e,i){for(ta[e]=i,e=0;e<i.length;e++)Ao.add(i[e])}var au=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},ss={};function lu(e){return $r.call(ss,e)?!0:$r.call(ou,e)?!1:au.test(e)?ss[e]=!0:(ou[e]=!0,!1)}function sr(e,i,a){if(lu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Zn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Le(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var as,uu;function Ri(e){if(as===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);as=i&&i[1]||"",uu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+as+e+uu}var ea=!1;function na(e,i){if(!e||ea)return"";ea=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(j){var q=j}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(j){q=j}e.call(Y.prototype)}}else{try{throw Error()}catch(j){q=j}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(j){if(j&&q&&typeof j.stack=="string")return[j.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),B=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===B.length)for(l=w.length-1,h=B.length-1;1<=l&&0<=h&&w[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==B[h]){var G=`
`+w[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{ea=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ri(a):""}function So(e){switch(e.tag){case 26:case 27:case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 15:return na(e.type,!1);case 11:return na(e.type.render,!1);case 1:return na(e.type,!0);case 31:return Ri("Activity");default:return""}}function ia(e){try{var i="";do i+=So(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Lh(e){var i=bo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ra(e){e._valueTracker||(e._valueTracker=Lh(e))}function wo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=bo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Uh=/[\n"\\]/g;function ge(e){return e.replace(Uh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cn(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+tn(i)):e.value!==""+tn(i)&&(e.value=""+tn(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ar(e,v,tn(i)):a!=null?ar(e,v,tn(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+tn(E):e.removeAttribute("name")}function ls(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+tn(a):"",i=i!=null?""+tn(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ar(e,i,a){i==="number"&&os(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ii(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+tn(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Qt(e,i,a){if(i!=null&&(i=""+tn(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+tn(a):""}function us(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ae(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=tn(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var cs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||cs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ro(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&cu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&cu(e,d,i[d])}function Io(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sa(e){return Bh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ci=null;function An(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Oi=null;function Co(e){var i=$n(e);if(i&&(e=i.stateNode)){var a=e[me]||null;t:switch(e=i.stateNode,i.type){case"input":if(cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[me]||null;if(!h)throw Error(s(90));cn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&wo(l)}break t;case"textarea":Qt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ii(e,!!a.multiple,i,!1)}}}var Jn=!1;function hu(e,i,a){if(Jn)return e(i,a);Jn=!0;try{var l=e(i);return l}finally{if(Jn=!1,(Di!==null||Oi!==null)&&(rc(),Di&&(i=Di,e=Oi,Oi=Di=null,Co(i),e)))for(i=0;i<e.length;i++)Co(e[i])}}function hs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[me]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(Un)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Sn=!1}var ti=null,or=null,Ni=null;function Do(){if(Ni)return Ni;var e,i=or,a=i.length,l,h="value"in ti?ti.value:ti.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ni=h.slice(e,1<l?1-l:void 0)}function ei(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Oo(){return!1}function De(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ni:Oo,this.isPropagationStopped=Oo,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=De(jt),ds=T({},jt,{view:0,detail:0}),fu=De(ds),oa,la,ii,ms=T({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(oa=e.screenX-ii.screenX,la=e.screenY-ii.screenY):la=oa=0,ii=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),bn=De(ms),du=T({},ms,{dataTransfer:0}),qh=De(du),gs=T({},ds,{relatedTarget:0}),ua=De(gs),No=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),ca=De(No),mu=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ha=De(mu),jh=T({},jt,{data:0}),Vo=De(jh),ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=pu[e])?!!i[e]:!1}function ys(){return Mo}var yu=T({},ds,{key:function(e){if(e.key){var i=ps[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fa=De(yu),_u=T({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=De(_u),Vi=T({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),vu=De(Vi),Eu=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tu=De(Eu),Au=T({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),da=De(Au),en=T({},jt,{newState:0,oldState:0}),Su=De(en),bu=[9,13,27,32],ri=Un&&"CompositionEvent"in window,c=null;Un&&"documentMode"in document&&(c=document.documentMode);var g=Un&&"TextEvent"in window&&!c,_=Un&&(!ri||c&&8<c&&11>=c),A=" ",x=!1;function H(e,i){switch(e){case"keyup":return bu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function et(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Se(e,i){switch(e){case"compositionend":return et(i);case"keypress":return i.which!==32?null:(x=!0,A);case"textInput":return e=i.data,e===A&&x?null:e;default:return null}}function xt(e,i){if(kt)return e==="compositionend"||!ri&&H(e,i)?(e=Do(),Ni=or=ti=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function be(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oe[e.type]:i==="textarea"}function Mi(e,i,a,l){Di?Oi?Oi.push(l):Oi=[l]:Di=l,i=cc(i,"onChange"),0<i.length&&(a=new aa("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Ue=null,si=null;function ko(e){n_(e,0)}function wu(e){var i=Wn(e);if(wo(i))return e}function Sg(e,i){if(e==="change")return i}var bg=!1;if(Un){var Hh;if(Un){var Fh="oninput"in document;if(!Fh){var wg=document.createElement("div");wg.setAttribute("oninput","return;"),Fh=typeof wg.oninput=="function"}Hh=Fh}else Hh=!1;bg=Hh&&(!document.documentMode||9<document.documentMode)}function Rg(){Ue&&(Ue.detachEvent("onpropertychange",Ig),si=Ue=null)}function Ig(e){if(e.propertyName==="value"&&wu(si)){var i=[];Mi(i,si,e,An(e)),hu(ko,i)}}function RA(e,i,a){e==="focusin"?(Rg(),Ue=i,si=a,Ue.attachEvent("onpropertychange",Ig)):e==="focusout"&&Rg()}function IA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wu(si)}function CA(e,i){if(e==="click")return wu(i)}function DA(e,i){if(e==="input"||e==="change")return wu(i)}function OA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hn=typeof Object.is=="function"?Object.is:OA;function xo(e,i){if(hn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!$r.call(i,h)||!hn(e[h],i[h]))return!1}return!0}function Cg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dg(e,i){var a=Cg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cg(a)}}function Og(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Og(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ng(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=os(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=os(e.document)}return i}function Gh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var NA=Un&&"documentMode"in document&&11>=document.documentMode,ma=null,Kh=null,Lo=null,Qh=!1;function Vg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qh||ma==null||ma!==os(l)||(l=ma,"selectionStart"in l&&Gh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Lo&&xo(Lo,l)||(Lo=l,l=cc(Kh,"onSelect"),0<l.length&&(i=new aa("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ma)))}function _s(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ga={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Yh={},Mg={};Un&&(Mg=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function vs(e){if(Yh[e])return Yh[e];if(!ga[e])return e;var i=ga[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mg)return Yh[e]=i[a];return e}var Pg=vs("animationend"),kg=vs("animationiteration"),xg=vs("animationstart"),VA=vs("transitionrun"),MA=vs("transitionstart"),PA=vs("transitioncancel"),Lg=vs("transitionend"),Ug=new Map,Xh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xh.push("scrollEnd");function zn(e,i){Ug.set(e,i),Ln(i,[e])}var zg=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=zg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ia(i)},zg.set(e,i),i)}return{value:e,source:i,stack:ia(i)}}var Rn=[],pa=0,$h=0;function Ru(){for(var e=pa,i=$h=pa=0;i<e;){var a=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Bg(a,h,d)}}function Iu(e,i,a,l){Rn[pa++]=e,Rn[pa++]=i,Rn[pa++]=a,Rn[pa++]=l,$h|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wh(e,i,a,l){return Iu(e,i,a,l),Cu(e)}function ya(e,i){return Iu(e,null,null,i),Cu(e)}function Bg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ke(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Cu(e){if(50<ll)throw ll=0,rd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var _a={};function kA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,i,a,l){return new kA(e,i,a,l)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,i){var a=e.alternate;return a===null?(a=fn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Du(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Zh(e)&&(v=1);else if(typeof e=="string")v=LS(e,a,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=fn(31,a,i,h),e.elementType=I,e.lanes=d,e;case W:return Es(a.children,h,d,i);case J:v=8,h|=24;break;case $:return e=fn(12,a,i,h|2),e.elementType=$,e.lanes=d,e;case vt:return e=fn(13,a,i,h),e.elementType=vt,e.lanes=d,e;case Pt:return e=fn(19,a,i,h),e.elementType=Pt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tt:case ot:v=10;break t;case ht:v=9;break t;case wt:v=11;break t;case V:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=fn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Es(e,i,a,l){return e=fn(7,e,l,i),e.lanes=a,e}function Jh(e,i,a){return e=fn(6,e,null,i),e.lanes=a,e}function tf(e,i,a){return i=fn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var va=[],Ea=0,Ou=null,Nu=0,In=[],Cn=0,Ts=null,ki=1,xi="";function As(e,i){va[Ea++]=Nu,va[Ea++]=Ou,Ou=e,Nu=i}function jg(e,i,a){In[Cn++]=ki,In[Cn++]=xi,In[Cn++]=Ts,Ts=e;var l=ki;e=xi;var h=32-Ke(l)-1;l&=~(1<<h),a+=1;var d=32-Ke(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,ki=1<<32-Ke(i)+h|a<<h|l,xi=d+e}else ki=1<<d|a<<h|l,xi=e}function ef(e){e.return!==null&&(As(e,1),jg(e,1,0))}function nf(e){for(;e===Ou;)Ou=va[--Ea],va[Ea]=null,Nu=va[--Ea],va[Ea]=null;for(;e===Ts;)Ts=In[--Cn],In[Cn]=null,xi=In[--Cn],In[Cn]=null,ki=In[--Cn],In[Cn]=null}var nn=null,le=null,qt=!1,Ss=null,ai=!1,rf=Error(s(519));function bs(e){var i=Error(s(418,""));throw Bo(wn(i,e)),rf}function Hg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ae]=e,i[me]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<cl.length;a++)Nt(cl[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),ls(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ra(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),us(i,l.value,l.defaultValue,l.children),ra(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||a_(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||bs(e)}function Fg(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:nn=nn.return}}function Uo(e){if(e!==nn)return!1;if(!qt)return Fg(e),qt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ed(e.type,e.memoizedProps)),a=!a),a&&le&&bs(e),Fg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=qn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Sr(e.type)?(e=bd,bd=null,le=e):le=i):le=nn?qn(e.stateNode.nextSibling):null;return!0}function zo(){le=nn=null,qt=!1}function Gg(){var e=Ss;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ss=null),e}function Bo(e){Ss===null?Ss=[e]:Ss.push(e)}var sf=Z(null),ws=null,Li=null;function lr(e,i,a){tt(sf,i._currentValue),i._currentValue=a}function Ui(e){e._currentValue=sf.current,it(sf)}function af(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function of(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),af(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),af(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function qo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;hn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ce.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}h=h.return}e!==null&&of(i,e,a,l),i.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){ws=e,Li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Kg(ws,e)}function Mu(e,i){return ws===null&&Rs(e),Kg(e,i)}function Kg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Li===null){if(e===null)throw Error(s(308));Li=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Li=Li.next=i;return a}var xA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},LA=r.unstable_scheduleCallback,UA=r.unstable_NormalPriority,we={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new xA,data:new Map,refCount:0}}function jo(e){e.refCount--,e.refCount===0&&LA(UA,function(){e.controller.abort()})}var Ho=null,uf=0,Ta=0,Aa=null;function zA(e,i){if(Ho===null){var a=Ho=[];uf=0,Ta=hd(),Aa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return uf++,i.then(Qg,Qg),i}function Qg(){if(--uf===0&&Ho!==null){Aa!==null&&(Aa.status="fulfilled");var e=Ho;Ho=null,Ta=0,Aa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function BA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Yg=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&zA(e,i),Yg!==null&&Yg(e,i)};var Is=Z(null);function cf(){var e=Is.current;return e!==null?e:Jt.pooledCache}function Pu(e,i){i===null?tt(Is,Is.current):tt(Is,i.pool)}function Xg(){var e=cf();return e===null?null:{parent:we._currentValue,pool:e}}var Fo=Error(s(460)),$g=Error(s(474)),ku=Error(s(542)),hf={then:function(){}};function Wg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xu(){}function Zg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(xu,xu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,tp(e),e;default:if(typeof i.status=="string")i.then(xu,xu);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,tp(e),e}throw Go=i,Fo}}var Go=null;function Jg(){if(Go===null)throw Error(s(459));var e=Go;return Go=null,e}function tp(e){if(e===Fo||e===ku)throw Error(s(483))}var ur=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Cu(e),Bg(e,null,a),i}return Iu(e,l,i,a),Cu(e)}function Ko(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Eo(e,a)}}function mf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var gf=!1;function Qo(){if(gf){var e=Aa;if(e!==null)throw e}}function Yo(e,i,a,l){gf=!1;var h=e.updateQueue;ur=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,B=w.next;w.next=null,v===null?d=B:v.next=B,v=w;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==v&&(E===null?G.firstBaseUpdate=B:E.next=B,G.lastBaseUpdate=w))}if(d!==null){var Y=h.baseState;v=0,G=B=w=null,E=d;do{var q=E.lane&-536870913,j=q!==E.lane;if(j?(Lt&q)===q:(l&q)===q){q!==0&&q===Ta&&(gf=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var _t=e,mt=E;q=i;var $t=a;switch(mt.tag){case 1:if(_t=mt.payload,typeof _t=="function"){Y=_t.call($t,Y,q);break t}Y=_t;break t;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=mt.payload,q=typeof _t=="function"?_t.call($t,Y,q):_t,q==null)break t;Y=T({},Y,q);break t;case 2:ur=!0}}q=E.callback,q!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[q]:j.push(q))}else j={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(B=G=j,w=Y):G=G.next=j,v|=q;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;j=E,E=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=Y),h.baseState=w,h.firstBaseUpdate=B,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),vr|=v,e.lanes=v,e.memoizedState=Y}}function ep(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function np(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ep(a[e],i)}var Sa=Z(null),Lu=Z(0);function ip(e,i){e=Gi,tt(Lu,e),tt(Sa,i),Gi=e|i.baseLanes}function pf(){tt(Lu,Gi),tt(Sa,Sa.current)}function yf(){Gi=Lu.current,it(Sa),it(Lu)}var fr=0,Rt=null,Yt=null,pe=null,Uu=!1,ba=!1,Cs=!1,zu=0,Xo=0,wa=null,qA=0;function he(){throw Error(s(321))}function _f(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!hn(e[a],i[a]))return!1;return!0}function vf(e,i,a,l,h,d){return fr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Bp:qp,Cs=!1,d=a(l,h),Cs=!1,ba&&(d=sp(i,a,l,h)),rp(e),d}function rp(e){F.H=Gu;var i=Yt!==null&&Yt.next!==null;if(fr=0,pe=Yt=Rt=null,Uu=!1,Xo=0,wa=null,i)throw Error(s(300));e===null||Ne||(e=e.dependencies,e!==null&&Vu(e)&&(Ne=!0))}function sp(e,i,a,l){Rt=e;var h=0;do{if(ba&&(wa=null),Xo=0,ba=!1,25<=h)throw Error(s(301));if(h+=1,pe=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=YA,d=i(a,l)}while(ba);return d}function jA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?$o(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function Ef(){var e=zu!==0;return zu=0,e}function Tf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Af(e){if(Uu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Uu=!1}fr=0,pe=Yt=Rt=null,ba=!1,Xo=zu=0,wa=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Rt.memoizedState=pe=e:pe=pe.next=e,pe}function ye(){if(Yt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=pe===null?Rt.memoizedState:pe.next;if(i!==null)pe=i,Yt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},pe===null?Rt.memoizedState=pe=e:pe=pe.next=e}return pe}function Sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var i=Xo;return Xo+=1,wa===null&&(wa=[]),e=Zg(wa,e,i),i=Rt,(pe===null?i.memoizedState:pe.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Bp:qp),e}function Bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===ot)return Qe(e)}throw Error(s(438,String(e)))}function bf(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Sf(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function zi(e,i){return typeof i=="function"?i(e):i}function qu(e){var i=ye();return wf(i,Yt,e)}function wf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,B=i,G=!1;do{var Y=B.lane&-536870913;if(Y!==B.lane?(Lt&Y)===Y:(fr&Y)===Y){var q=B.revertLane;if(q===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Y===Ta&&(G=!0);else if((fr&q)===q){B=B.next,q===Ta&&(G=!0);continue}else Y={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(E=w=Y,v=d):w=w.next=Y,Rt.lanes|=q,vr|=q;Y=B.action,Cs&&a(d,Y),d=B.hasEagerState?B.eagerState:a(d,Y)}else q={lane:Y,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(E=w=q,v=d):w=w.next=q,Rt.lanes|=Y,vr|=Y;B=B.next}while(B!==null&&B!==i);if(w===null?v=d:w.next=E,!hn(d,e.memoizedState)&&(Ne=!0,G&&(a=Aa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Rf(e){var i=ye(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Ne=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function ap(e,i,a){var l=Rt,h=ye(),d=qt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Ne=!0),h=h.queue;var E=up.bind(null,l,h,e);if(Wo(2048,8,E,[e]),h.getSnapshot!==i||v||pe!==null&&pe.memoizedState.tag&1){if(l.flags|=2048,Ra(9,ju(),lp.bind(null,l,h,a,i),null),Jt===null)throw Error(s(349));d||(fr&124)!==0||op(l,i,a)}return a}function op(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=Sf(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function lp(e,i,a,l){i.value=a,i.getSnapshot=l,cp(i)&&hp(e)}function up(e,i,a){return a(function(){cp(i)&&hp(e)})}function cp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!hn(e,a)}catch{return!0}}function hp(e){var i=ya(e,2);i!==null&&yn(i,e,2)}function If(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),Cs){un(!0);try{a()}finally{un(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},i}function fp(e,i,a,l){return e.baseState=a,wf(e,Yt,typeof l=="function"?l:zi)}function HA(e,i,a,l,h){if(Fu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,dp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function dp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var E=a(h,l),w=F.S;w!==null&&w(v,E),mp(e,i,E)}catch(B){Cf(e,i,B)}finally{F.T=d}}else try{d=a(h,l),mp(e,i,d)}catch(B){Cf(e,i,B)}}function mp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){gp(e,i,l)},function(l){return Cf(e,i,l)}):gp(e,i,a)}function gp(e,i,a){i.status="fulfilled",i.value=a,pp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,dp(e,a)))}function Cf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,pp(i),i=i.next;while(i!==l)}e.action=null}function pp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function yp(e,i){return i}function _p(e,i){if(qt){var a=Jt.formState;if(a!==null){t:{var l=Rt;if(qt){if(le){e:{for(var h=le,d=ai;h.nodeType!==8;){if(!d){h=null;break e}if(h=qn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=qn(h.nextSibling),l=h.data==="F!";break t}}bs(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yp,lastRenderedState:i},a.queue=l,a=Lp.bind(null,Rt,l),l.dispatch=a,l=If(!1),d=Mf.bind(null,Rt,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=HA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function vp(e){var i=ye();return Ep(i,Yt,e)}function Ep(e,i,a){if(i=wf(e,i,yp)[0],e=qu(zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=$o(i)}catch(v){throw v===Fo?ku:v}else l=i;i=ye();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,Ra(9,ju(),FA.bind(null,h,a),null)),[l,d,e]}function FA(e,i){e.action=i}function Tp(e){var i=ye(),a=Yt;if(a!==null)return Ep(i,a,e);ye(),i=i.memoizedState,a=ye();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ra(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=Sf(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function ju(){return{destroy:void 0,resource:void 0}}function Ap(){return ye().memoizedState}function Hu(e,i,a,l){var h=rn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=Ra(1|i,ju(),a,l)}function Wo(e,i,a,l){var h=ye();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&_f(l,Yt.memoizedState.deps)?h.memoizedState=Ra(i,d,a,l):(Rt.flags|=e,h.memoizedState=Ra(1|i,d,a,l))}function Sp(e,i){Hu(8390656,8,e,i)}function bp(e,i){Wo(2048,8,e,i)}function wp(e,i){return Wo(4,2,e,i)}function Rp(e,i){return Wo(4,4,e,i)}function Ip(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Cp(e,i,a){a=a!=null?a.concat([e]):null,Wo(4,4,Ip.bind(null,i,e),a)}function Df(){}function Dp(e,i){var a=ye();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&_f(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Op(e,i){var a=ye();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&_f(i,l[1]))return l[0];if(l=e(),Cs){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[l,i],l}function Of(e,i,a){return a===void 0||(fr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=My(),Rt.lanes|=e,vr|=e,a)}function Np(e,i,a,l){return hn(a,i)?a:Sa.current!==null?(e=Of(e,a,l),hn(e,i)||(Ne=!0),e):(fr&42)===0?(Ne=!0,e.memoizedState=a):(e=My(),Rt.lanes|=e,vr|=e,i)}function Vp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=F.T,E={};F.T=E,Mf(e,!1,i,a);try{var w=h(),B=F.S;if(B!==null&&B(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=BA(w,l);Zo(e,i,G,pn(e))}else Zo(e,i,l,pn(e))}catch(Y){Zo(e,i,{then:function(){},status:"rejected",reason:Y},pn())}finally{nt.p=d,F.T=v}}function GA(){}function Nf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Mp(e).queue;Vp(e,h,i,ut,a===null?GA:function(){return Pp(e),a(l)})}function Mp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:ut},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Pp(e){var i=Mp(e).next.queue;Zo(e,i,{},pn())}function Vf(){return Qe(pl)}function kp(){return ye().memoizedState}function xp(){return ye().memoizedState}function KA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();e=cr(a);var l=hr(i,e,a);l!==null&&(yn(l,i,a),Ko(l,i,a)),i={cache:lf()},e.payload=i;return}i=i.return}}function QA(e,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fu(e)?Up(i,a):(a=Wh(e,i,a,l),a!==null&&(yn(a,e,l),zp(a,i,l)))}function Lp(e,i,a){var l=pn();Zo(e,i,a,l)}function Zo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Up(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,hn(E,v))return Iu(e,i,h,0),Jt===null&&Ru(),!1}catch{}finally{}if(a=Wh(e,i,h,l),a!==null)return yn(a,e,l),zp(a,i,l),!0}return!1}function Mf(e,i,a,l){if(l={lane:2,revertLane:hd(),action:l,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(i)throw Error(s(479))}else i=Wh(e,a,l,2),i!==null&&yn(i,e,2)}function Fu(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Up(e,i){ba=Uu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function zp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Eo(e,a)}}var Gu={readContext:Qe,use:Bu,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he},Bp={readContext:Qe,use:Bu,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:Sp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Hu(4194308,4,Ip.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Hu(4194308,4,e,i)},useInsertionEffect:function(e,i){Hu(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var l=e();if(Cs){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=rn();if(a!==void 0){var h=a(i);if(Cs){un(!0);try{a(i)}finally{un(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=QA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=If(e);var i=e.queue,a=Lp.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Df,useDeferredValue:function(e,i){var a=rn();return Of(a,e,i)},useTransition:function(){var e=If(!1);return e=Vp.bind(null,Rt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=rn();if(qt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Jt===null)throw Error(s(349));(Lt&124)!==0||op(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Sp(up.bind(null,l,d,e),[e]),l.flags|=2048,Ra(9,ju(),lp.bind(null,l,d,a,i),null),a},useId:function(){var e=rn(),i=Jt.identifierPrefix;if(qt){var a=xi,l=ki;a=(l&~(1<<32-Ke(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=zu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=qA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Vf,useFormState:_p,useActionState:_p,useOptimistic:function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Mf.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:bf,useCacheRefresh:function(){return rn().memoizedState=KA.bind(null,Rt)}},qp={readContext:Qe,use:Bu,useCallback:Dp,useContext:Qe,useEffect:bp,useImperativeHandle:Cp,useInsertionEffect:wp,useLayoutEffect:Rp,useMemo:Op,useReducer:qu,useRef:Ap,useState:function(){return qu(zi)},useDebugValue:Df,useDeferredValue:function(e,i){var a=ye();return Np(a,Yt.memoizedState,e,i)},useTransition:function(){var e=qu(zi)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:$o(e),i]},useSyncExternalStore:ap,useId:kp,useHostTransitionStatus:Vf,useFormState:vp,useActionState:vp,useOptimistic:function(e,i){var a=ye();return fp(a,Yt,e,i)},useMemoCache:bf,useCacheRefresh:xp},YA={readContext:Qe,use:Bu,useCallback:Dp,useContext:Qe,useEffect:bp,useImperativeHandle:Cp,useInsertionEffect:wp,useLayoutEffect:Rp,useMemo:Op,useReducer:Rf,useRef:Ap,useState:function(){return Rf(zi)},useDebugValue:Df,useDeferredValue:function(e,i){var a=ye();return Yt===null?Of(a,e,i):Np(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Rf(zi)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:$o(e),i]},useSyncExternalStore:ap,useId:kp,useHostTransitionStatus:Vf,useFormState:Tp,useActionState:Tp,useOptimistic:function(e,i){var a=ye();return Yt!==null?fp(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bf,useCacheRefresh:xp},Ia=null,Jo=0;function Ku(e){var i=Jo;return Jo+=1,Ia===null&&(Ia=[]),Zg(Ia,e,i)}function tl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Qu(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function jp(e){var i=e._init;return i(e._payload)}function Hp(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Pi(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,U,K){return O===null||O.tag!==6?(O=Jh(U,P.mode,K),O.return=P,O):(O=h(O,U),O.return=P,O)}function w(P,O,U,K){var at=U.type;return at===W?G(P,O,U.props.children,K,U.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&jp(at)===O.type)?(O=h(O,U.props),tl(O,U),O.return=P,O):(O=Du(U.type,U.key,U.props,null,P.mode,K),tl(O,U),O.return=P,O)}function B(P,O,U,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=tf(U,P.mode,K),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function G(P,O,U,K,at){return O===null||O.tag!==7?(O=Es(U,P.mode,K,at),O.return=P,O):(O=h(O,U),O.return=P,O)}function Y(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Jh(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return U=Du(O.type,O.key,O.props,null,P.mode,U),tl(U,O),U.return=P,U;case L:return O=tf(O,P.mode,U),O.return=P,O;case S:var K=O._init;return O=K(O._payload),Y(P,O,U)}if(ae(O)||k(O))return O=Es(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return Y(P,Ku(O),U);if(O.$$typeof===ot)return Y(P,Mu(P,O),U);Qu(P,O)}return null}function q(P,O,U,K){var at=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return at!==null?null:E(P,O,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return U.key===at?w(P,O,U,K):null;case L:return U.key===at?B(P,O,U,K):null;case S:return at=U._init,U=at(U._payload),q(P,O,U,K)}if(ae(U)||k(U))return at!==null?null:G(P,O,U,K,null);if(typeof U.then=="function")return q(P,O,Ku(U),K);if(U.$$typeof===ot)return q(P,O,Mu(P,U),K);Qu(P,U)}return null}function j(P,O,U,K,at){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(U)||null,E(O,P,""+K,at);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case R:return P=P.get(K.key===null?U:K.key)||null,w(O,P,K,at);case L:return P=P.get(K.key===null?U:K.key)||null,B(O,P,K,at);case S:var Dt=K._init;return K=Dt(K._payload),j(P,O,U,K,at)}if(ae(K)||k(K))return P=P.get(U)||null,G(O,P,K,at,null);if(typeof K.then=="function")return j(P,O,U,Ku(K),at);if(K.$$typeof===ot)return j(P,O,U,Mu(O,K),at);Qu(O,K)}return null}function _t(P,O,U,K){for(var at=null,Dt=null,lt=O,gt=O=0,Me=null;lt!==null&&gt<U.length;gt++){lt.index>gt?(Me=lt,lt=null):Me=lt.sibling;var zt=q(P,lt,U[gt],K);if(zt===null){lt===null&&(lt=Me);break}e&&lt&&zt.alternate===null&&i(P,lt),O=d(zt,O,gt),Dt===null?at=zt:Dt.sibling=zt,Dt=zt,lt=Me}if(gt===U.length)return a(P,lt),qt&&As(P,gt),at;if(lt===null){for(;gt<U.length;gt++)lt=Y(P,U[gt],K),lt!==null&&(O=d(lt,O,gt),Dt===null?at=lt:Dt.sibling=lt,Dt=lt);return qt&&As(P,gt),at}for(lt=l(lt);gt<U.length;gt++)Me=j(lt,P,gt,U[gt],K),Me!==null&&(e&&Me.alternate!==null&&lt.delete(Me.key===null?gt:Me.key),O=d(Me,O,gt),Dt===null?at=Me:Dt.sibling=Me,Dt=Me);return e&&lt.forEach(function(Cr){return i(P,Cr)}),qt&&As(P,gt),at}function mt(P,O,U,K){if(U==null)throw Error(s(151));for(var at=null,Dt=null,lt=O,gt=O=0,Me=null,zt=U.next();lt!==null&&!zt.done;gt++,zt=U.next()){lt.index>gt?(Me=lt,lt=null):Me=lt.sibling;var Cr=q(P,lt,zt.value,K);if(Cr===null){lt===null&&(lt=Me);break}e&&lt&&Cr.alternate===null&&i(P,lt),O=d(Cr,O,gt),Dt===null?at=Cr:Dt.sibling=Cr,Dt=Cr,lt=Me}if(zt.done)return a(P,lt),qt&&As(P,gt),at;if(lt===null){for(;!zt.done;gt++,zt=U.next())zt=Y(P,zt.value,K),zt!==null&&(O=d(zt,O,gt),Dt===null?at=zt:Dt.sibling=zt,Dt=zt);return qt&&As(P,gt),at}for(lt=l(lt);!zt.done;gt++,zt=U.next())zt=j(lt,P,gt,zt.value,K),zt!==null&&(e&&zt.alternate!==null&&lt.delete(zt.key===null?gt:zt.key),O=d(zt,O,gt),Dt===null?at=zt:Dt.sibling=zt,Dt=zt);return e&&lt.forEach(function(XS){return i(P,XS)}),qt&&As(P,gt),at}function $t(P,O,U,K){if(typeof U=="object"&&U!==null&&U.type===W&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case R:t:{for(var at=U.key;O!==null;){if(O.key===at){if(at=U.type,at===W){if(O.tag===7){a(P,O.sibling),K=h(O,U.props.children),K.return=P,P=K;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&jp(at)===O.type){a(P,O.sibling),K=h(O,U.props),tl(K,U),K.return=P,P=K;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===W?(K=Es(U.props.children,P.mode,K,U.key),K.return=P,P=K):(K=Du(U.type,U.key,U.props,null,P.mode,K),tl(K,U),K.return=P,P=K)}return v(P);case L:t:{for(at=U.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),K=h(O,U.children||[]),K.return=P,P=K;break t}else{a(P,O);break}else i(P,O);O=O.sibling}K=tf(U,P.mode,K),K.return=P,P=K}return v(P);case S:return at=U._init,U=at(U._payload),$t(P,O,U,K)}if(ae(U))return _t(P,O,U,K);if(k(U)){if(at=k(U),typeof at!="function")throw Error(s(150));return U=at.call(U),mt(P,O,U,K)}if(typeof U.then=="function")return $t(P,O,Ku(U),K);if(U.$$typeof===ot)return $t(P,O,Mu(P,U),K);Qu(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),K=h(O,U),K.return=P,P=K):(a(P,O),K=Jh(U,P.mode,K),K.return=P,P=K),v(P)):a(P,O)}return function(P,O,U,K){try{Jo=0;var at=$t(P,O,U,K);return Ia=null,at}catch(lt){if(lt===Fo||lt===ku)throw lt;var Dt=fn(29,lt,null,P.mode);return Dt.lanes=K,Dt.return=P,Dt}finally{}}}var Ca=Hp(!0),Fp=Hp(!1),Dn=Z(null),oi=null;function dr(e){var i=e.alternate;tt(Re,Re.current&1),tt(Dn,e),oi===null&&(i===null||Sa.current!==null||i.memoizedState!==null)&&(oi=e)}function Gp(e){if(e.tag===22){if(tt(Re,Re.current),tt(Dn,e),oi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(oi=e)}}else mr()}function mr(){tt(Re,Re.current),tt(Dn,Dn.current)}function Bi(e){it(Dn),oi===e&&(oi=null),it(Re)}var Re=Z(0);function Yu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Pf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=pn(),h=cr(l);h.payload=i,a!=null&&(h.callback=a),i=hr(e,h,l),i!==null&&(yn(i,e,l),Ko(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=pn(),h=cr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(e,h,l),i!==null&&(yn(i,e,l),Ko(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=pn(),l=cr(a);l.tag=2,i!=null&&(l.callback=i),i=hr(e,l,a),i!==null&&(yn(i,e,a),Ko(i,e,a))}};function Kp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!xo(a,l)||!xo(h,d):!0}function Qp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&kf.enqueueReplaceState(i,i.state,null)}function Ds(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Xu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yp(e){Xu(e)}function Xp(e){console.error(e)}function $p(e){Xu(e)}function $u(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Wp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function xf(e,i,a){return a=cr(a),a.tag=3,a.payload={element:null},a.callback=function(){$u(e,i)},a}function Zp(e){return e=cr(e),e.tag=3,e}function Jp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Wp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Wp(i,a,l),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function XA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&qo(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return oi===null?ad():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===hf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),ld(e,l,h)),!1;case 22:return a.flags|=65536,l===hf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),ld(e,l,h)),!1}throw Error(s(435,a.tag))}return ld(e,l,h),ad(),!1}if(qt)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==rf&&(e=Error(s(422),{cause:l}),Bo(wn(e,a)))):(l!==rf&&(i=Error(s(423),{cause:l}),Bo(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=wn(l,a),h=xf(e.stateNode,l,h),mf(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:l});if(d=wn(d,a),ol===null?ol=[d]:ol.push(d),ue!==4&&(ue=2),i===null)return!0;l=wn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=xf(a.stateNode,l,e),mf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Er===null||!Er.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Zp(h),Jp(h,e,a,l),mf(a,h),!1}a=a.return}while(a!==null);return!1}var ty=Error(s(461)),Ne=!1;function ze(e,i,a,l){i.child=e===null?Fp(i,null,a,l):Ca(i,e.child,a,l)}function ey(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Rs(i),l=vf(e,i,a,v,d,h),E=Ef(),e!==null&&!Ne?(Tf(e,i,h),qi(e,i,h)):(qt&&E&&ef(i),i.flags|=1,ze(e,i,l,h),i.child)}function ny(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Zh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,iy(e,i,d,l,h)):(e=Du(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Ff(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(v,l)&&e.ref===i.ref)return qi(e,i,h)}return i.flags|=1,e=Pi(d,l),e.ref=i.ref,e.return=i,i.child=e}function iy(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(xo(d,l)&&e.ref===i.ref)if(Ne=!1,i.pendingProps=l=d,Ff(e,h))(e.flags&131072)!==0&&(Ne=!0);else return i.lanes=e.lanes,qi(e,i,h)}return Lf(e,i,a,l,h)}function ry(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return sy(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pu(i,d!==null?d.cachePool:null),d!==null?ip(i,d):pf(),Gp(i);else return i.lanes=i.childLanes=536870912,sy(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Pu(i,d.cachePool),ip(i,d),mr(),i.memoizedState=null):(e!==null&&Pu(i,null),pf(),mr());return ze(e,i,h,a),i.child}function sy(e,i,a,l){var h=cf();return h=h===null?null:{parent:we._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Pu(i,null),pf(),Gp(i),e!==null&&qo(e,i,l,!0),null}function Wu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Lf(e,i,a,l,h){return Rs(i),a=vf(e,i,a,l,void 0,h),l=Ef(),e!==null&&!Ne?(Tf(e,i,h),qi(e,i,h)):(qt&&l&&ef(i),i.flags|=1,ze(e,i,a,h),i.child)}function ay(e,i,a,l,h,d){return Rs(i),i.updateQueue=null,a=sp(i,l,a,h),rp(e),l=Ef(),e!==null&&!Ne?(Tf(e,i,d),qi(e,i,d)):(qt&&l&&ef(i),i.flags|=1,ze(e,i,a,d),i.child)}function oy(e,i,a,l,h){if(Rs(i),i.stateNode===null){var d=_a,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=kf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},ff(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):_a,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Pf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&kf.enqueueReplaceState(d,d.state,null),Yo(i,l,d,h),Qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Ds(a,E);d.props=w;var B=d.context,G=a.contextType;v=_a,typeof G=="object"&&G!==null&&(v=Qe(G));var Y=a.getDerivedStateFromProps;G=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||B!==v)&&Qp(i,d,l,v),ur=!1;var q=i.memoizedState;d.state=q,Yo(i,l,d,h),Qo(),B=i.memoizedState,E||q!==B||ur?(typeof Y=="function"&&(Pf(i,a,Y,l),B=i.memoizedState),(w=ur||Kp(i,a,w,l,q,B,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,df(e,i),v=i.memoizedProps,G=Ds(a,v),d.props=G,Y=i.pendingProps,q=d.context,B=a.contextType,w=_a,typeof B=="object"&&B!==null&&(w=Qe(B)),E=a.getDerivedStateFromProps,(B=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||q!==w)&&Qp(i,d,l,w),ur=!1,q=i.memoizedState,d.state=q,Yo(i,l,d,h),Qo();var j=i.memoizedState;v!==Y||q!==j||ur||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof E=="function"&&(Pf(i,a,E,l),j=i.memoizedState),(G=ur||Kp(i,a,G,l,q,j,w)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Wu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ca(i,e.child,null,h),i.child=Ca(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=qi(e,i,h),e}function ly(e,i,a,l){return zo(),i.flags|=256,ze(e,i,a,l),i.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(e){return{baseLanes:e,cachePool:Xg()}}function Bf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=On),e}function uy(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(qt){if(h?dr(i):mr(),qt){var E=le,w;if(w=E){t:{for(w=E,E=ai;w.nodeType!==8;){if(!E){E=null;break t}if(w=qn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:Ts!==null?{id:ki,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},w=fn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,nn=i,le=null,w=!0):w=!1}w||bs(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Sd(E)?i.lanes=32:i.lanes=536870912,null;Bi(i)}return E=l.children,l=l.fallback,h?(mr(),h=i.mode,E=Zu({mode:"hidden",children:E},h),l=Es(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=zf(a),h.childLanes=Bf(e,v,a),i.memoizedState=Uf,l):(dr(i),qf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(dr(i),i.flags&=-257,i=jf(e,i,a)):i.memoizedState!==null?(mr(),i.child=e.child,i.flags|=128,i=null):(mr(),h=l.fallback,E=i.mode,l=Zu({mode:"visible",children:l.children},E),h=Es(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ca(i,e.child,null,a),l=i.child,l.memoizedState=zf(a),l.childLanes=Bf(e,v,a),i.memoizedState=Uf,i=h);else if(dr(i),Sd(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var B=v.dgst;v=B,l=Error(s(419)),l.stack="",l.digest=v,Bo({value:l,source:null,stack:null}),i=jf(e,i,a)}else if(Ne||qo(e,i,a,!1),v=(a&e.childLanes)!==0,Ne||v){if(v=Jt,v!==null&&(l=a&-a,l=(l&42)!==0?1:er(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,ya(e,l),yn(v,e,l),ty;E.data==="$?"||ad(),i=jf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,le=qn(E.nextSibling),nn=i,qt=!0,Ss=null,ai=!1,e!==null&&(In[Cn++]=ki,In[Cn++]=xi,In[Cn++]=Ts,ki=e.id,xi=e.overflow,Ts=i),i=qf(i,l.children),i.flags|=4096);return i}return h?(mr(),h=l.fallback,E=i.mode,w=e.child,B=w.sibling,l=Pi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,B!==null?h=Pi(B,h):(h=Es(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=zf(a):(w=E.cachePool,w!==null?(B=we._currentValue,w=w.parent!==B?{parent:B,pool:B}:w):w=Xg(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Bf(e,v,a),i.memoizedState=Uf,l):(dr(i),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function qf(e,i){return i=Zu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zu(e,i){return e=fn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jf(e,i,a){return Ca(i,e.child,null,a),e=qf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function cy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),af(e.return,i,a)}function Hf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function hy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Re.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cy(e,a,i);else if(e.tag===19)cy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(tt(Re,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Yu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Hf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Yu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Hf(i,!0,a,null,d);break;case"together":Hf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),vr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(qo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Pi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Ff(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function $A(e,i,a){switch(i.tag){case 3:Zt(i,i.stateNode.containerInfo),lr(i,we,e.memoizedState.cache),zo();break;case 27:case 5:tr(i);break;case 4:Zt(i,i.stateNode.containerInfo);break;case 10:lr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?uy(e,i,a):(dr(i),e=qi(e,i,a),e!==null?e.sibling:null);dr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(qo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return hy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tt(Re,Re.current),l)break;return null;case 22:case 23:return i.lanes=0,ry(e,i,a);case 24:lr(i,we,e.memoizedState.cache)}return qi(e,i,a)}function fy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ne=!0;else{if(!Ff(e,a)&&(i.flags&128)===0)return Ne=!1,$A(e,i,a);Ne=(e.flags&131072)!==0}else Ne=!1,qt&&(i.flags&1048576)!==0&&jg(i,Nu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Zh(l)?(e=Ds(l,e),i.tag=1,i=oy(null,i,l,e,a)):(i.tag=0,i=Lf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===wt){i.tag=11,i=ey(null,i,l,e,a);break t}else if(h===V){i.tag=14,i=ny(null,i,l,e,a);break t}}throw i=xe(l)||l,Error(s(306,i,""))}}return i;case 0:return Lf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ds(l,i.pendingProps),oy(e,i,l,h,a);case 3:t:{if(Zt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,df(e,i),Yo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,lr(i,we,l),l!==d.cache&&of(i,[we],a,!0),Qo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=ly(e,i,l,a);break t}else if(l!==h){h=wn(Error(s(424)),i),Bo(h),i=ly(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=qn(e.firstChild),nn=i,qt=!0,Ss=null,ai=!0,a=Fp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zo(),l===h){i=qi(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return Wu(e,i),e===null?(a=p_(i.type,null,i.pendingProps,null))?i.memoizedState=a:qt||(a=i.type,e=i.pendingProps,l=fc(Et.current).createElement(a),l[Ae]=i,l[me]=e,qe(l,a,e),ce(l),i.stateNode=l):i.memoizedState=p_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return tr(i),e===null&&qt&&(l=i.stateNode=d_(i.type,i.pendingProps,Et.current),nn=i,ai=!0,h=le,Sr(i.type)?(bd=h,le=qn(l.firstChild)):le=h),ze(e,i,i.pendingProps.children,a),Wu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&qt&&((h=l=le)&&(l=bS(l,i.type,i.pendingProps,ai),l!==null?(i.stateNode=l,nn=i,le=qn(l.firstChild),ai=!1,h=!0):h=!1),h||bs(i)),tr(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Ed(h,d)?l=null:v!==null&&Ed(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=vf(e,i,jA,null,null,a),pl._currentValue=h),Wu(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&qt&&((e=a=le)&&(a=wS(a,i.pendingProps,ai),a!==null?(i.stateNode=a,nn=i,le=null,e=!0):e=!1),e||bs(i)),null;case 13:return uy(e,i,a);case 4:return Zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ca(i,null,l,a):ze(e,i,l,a),i.child;case 11:return ey(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,lr(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Rs(i),h=Qe(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return ny(e,i,i.type,i.pendingProps,a);case 15:return iy(e,i,i.type,i.pendingProps,a);case 19:return hy(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Zu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Pi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ry(e,i,a);case 24:return Rs(i),l=Qe(we),e===null?(h=cf(),h===null&&(h=Jt,d=lf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},ff(i),lr(i,we,h)):((e.lanes&a)!==0&&(df(e,i),Yo(i,null,null,a),Qo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),lr(i,we,l)):(l=d.cache,lr(i,we,l),l!==h.cache&&of(i,[we],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ji(e){e.flags|=4}function dy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T_(i)){if(i=Dn.current,i!==null&&((Lt&4194048)===Lt?oi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==oi))throw Go=hf,$g;e.flags|=8192}}function Ju(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?_o():536870912,e.lanes|=i,Va|=i)}function el(e,i){if(!qt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function WA(e,i,a){var l=i.pendingProps;switch(nf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(we),Yn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Uo(i)?ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Gg())),re(i),null;case 26:return a=i.memoizedState,e===null?(ji(i),a!==null?(re(i),dy(i,a)):(re(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ji(i),re(i),dy(i,a)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&ji(i),re(i),i.flags&=-16777217),null;case 27:Ti(i),a=Et.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}e=ft.current,Uo(i)?Hg(i):(e=d_(h,l,a),i.stateNode=e,ji(i))}return re(i),null;case 5:if(Ti(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}if(e=ft.current,Uo(i))Hg(i);else{switch(h=fc(Et.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ae]=i,e[me]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Et.current,Uo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=nn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ae]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||a_(e.nodeValue,a)),e||bs(i)}else e=fc(e).createTextNode(l),e[Ae]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Uo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ae]=i}else zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=Gg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Bi(i),i):(Bi(i),null)}if(Bi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Ju(i,i.updateQueue),re(i),null;case 4:return Yn(),e===null&&gd(i.stateNode.containerInfo),re(i),null;case 10:return Ui(i.type),re(i),null;case 19:if(it(Re),h=i.memoizedState,h===null)return re(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)el(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Yu(e),d!==null){for(i.flags|=128,el(h,!1),e=d.updateQueue,i.updateQueue=e,Ju(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)qg(a,e),a=a.sibling;return tt(Re,Re.current&1|2),i.child}e=e.sibling}h.tail!==null&&vn()>nc&&(i.flags|=128,l=!0,el(h,!1),i.lanes=4194304)}else{if(!l)if(e=Yu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Ju(i,e),el(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qt)return re(i),null}else 2*vn()-h.renderingStartTime>nc&&a!==536870912&&(i.flags|=128,l=!0,el(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=vn(),i.sibling=null,e=Re.current,tt(Re,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return Bi(i),yf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&Ju(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(Is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(we),re(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function ZA(e,i){switch(nf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ui(we),Yn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ti(i),null;case 13:if(Bi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));zo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Re),null;case 4:return Yn(),null;case 10:return Ui(i.type),null;case 22:case 23:return Bi(i),yf(),e!==null&&it(Is),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ui(we),null;case 25:return null;default:return null}}function my(e,i){switch(nf(i),i.tag){case 3:Ui(we),Yn();break;case 26:case 27:case 5:Ti(i);break;case 4:Yn();break;case 13:Bi(i);break;case 19:it(Re);break;case 10:Ui(i.type);break;case 22:case 23:Bi(i),yf(),e!==null&&it(Is);break;case 24:Ui(we)}}function nl(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Wt(i,i.return,E)}}function gr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,B=E;try{B()}catch(G){Wt(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){Wt(i,i.return,G)}}function gy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{np(i,a)}catch(l){Wt(e,e.return,l)}}}function py(e,i,a){a.props=Ds(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Wt(e,i,l)}}function il(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Wt(e,i,h)}}function li(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Wt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Wt(e,i,h)}else a.current=null}function yy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Wt(e,e.return,h)}}function Gf(e,i,a){try{var l=e.stateNode;vS(l,e.type,a,i),l[me]=i}catch(h){Wt(e,e.return,h)}}function _y(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sr(e.type)||e.tag===4}function Kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_y(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=hc));else if(l!==4&&(l===27&&Sr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Qf(e,i,a),e=e.sibling;e!==null;)Qf(e,i,a),e=e.sibling}function tc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Sr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,i,a),e=e.sibling;e!==null;)tc(e,i,a),e=e.sibling}function vy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);qe(i,l,a),i[Ae]=e,i[me]=a}catch(d){Wt(e,e.return,d)}}var Hi=!1,fe=!1,Yf=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function JA(e,i){if(e=e.containerInfo,_d=_c,e=Ng(e),Gh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,B=0,G=0,Y=e,q=null;e:for(;;){for(var j;Y!==a||h!==0&&Y.nodeType!==3||(E=v+h),Y!==d||l!==0&&Y.nodeType!==3||(w=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(j=Y.firstChild)!==null;)q=Y,Y=j;for(;;){if(Y===e)break e;if(q===a&&++B===h&&(E=v),q===d&&++G===l&&(w=v),(j=Y.nextSibling)!==null)break;Y=q,q=Y.parentNode}Y=j}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(vd={focusedElem:e,selectionRange:a},_c=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var _t=Ds(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(_t,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(mt){Wt(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Ad(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}}function Ty(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:pr(e,a),l&4&&nl(5,a);break;case 1:if(pr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var h=Ds(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}l&64&&gy(a),l&512&&il(a,a.return);break;case 3:if(pr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{np(e,i)}catch(v){Wt(a,a.return,v)}}break;case 27:i===null&&l&4&&vy(a);case 26:case 5:pr(e,a),i===null&&l&4&&yy(a),l&512&&il(a,a.return);break;case 12:pr(e,a);break;case 13:pr(e,a),l&4&&by(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lS.bind(null,a),RS(e,a))));break;case 22:if(l=a.memoizedState!==null||Hi,!l){i=i!==null&&i.memoizedState!==null||fe,h=Hi;var d=fe;Hi=l,(fe=i)&&!d?yr(e,a,(a.subtreeFlags&8772)!==0):pr(e,a),Hi=h,fe=d}break;case 30:break;default:pr(e,a)}}function Ay(e){var i=e.alternate;i!==null&&(e.alternate=null,Ay(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&rr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,sn=!1;function Fi(e,i,a){for(a=a.child;a!==null;)Sy(e,i,a),a=a.sibling}function Sy(e,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:fe||li(a,i),Fi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fe||li(a,i);var l=ie,h=sn;Sr(a.type)&&(ie=a.stateNode,sn=!1),Fi(e,i,a),fl(a.stateNode),ie=l,sn=h;break;case 5:fe||li(a,i);case 6:if(l=ie,h=sn,ie=null,Fi(e,i,a),ie=l,sn=h,ie!==null)if(sn)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(a.stateNode)}catch(d){Wt(a,i,d)}else try{ie.removeChild(a.stateNode)}catch(d){Wt(a,i,d)}break;case 18:ie!==null&&(sn?(e=ie,h_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),El(e)):h_(ie,a.stateNode));break;case 4:l=ie,h=sn,ie=a.stateNode.containerInfo,sn=!0,Fi(e,i,a),ie=l,sn=h;break;case 0:case 11:case 14:case 15:fe||gr(2,a,i),fe||gr(4,a,i),Fi(e,i,a);break;case 1:fe||(li(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&py(a,i,l)),Fi(e,i,a);break;case 21:Fi(e,i,a);break;case 22:fe=(l=fe)||a.memoizedState!==null,Fi(e,i,a),fe=l;break;default:Fi(e,i,a)}}function by(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(a){Wt(i,i.return,a)}}function tS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ey),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ey),i;default:throw Error(s(435,e.tag))}}function Xf(e,i){var a=tS(e);i.forEach(function(l){var h=uS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function dn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Sr(E.type)){ie=E.stateNode,sn=!1;break t}break;case 5:ie=E.stateNode,sn=!1;break t;case 3:case 4:ie=E.stateNode.containerInfo,sn=!0;break t}E=E.return}if(ie===null)throw Error(s(160));Sy(d,v,h),ie=null,sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)wy(i,e),i=i.sibling}var Bn=null;function wy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dn(i,e),mn(e),l&4&&(gr(3,e,e.return),nl(3,e),gr(5,e,e.return));break;case 1:dn(i,e),mn(e),l&512&&(fe||a===null||li(a,a.return)),l&64&&Hi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(dn(i,e),mn(e),l&512&&(fe||a===null||li(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[rs]||d[Ae]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),qe(d,l,a),d[Ae]=e,ce(d),l=d;break t;case"link":var v=v_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;case"meta":if(v=v_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ae]=e,ce(d),l=d}e.stateNode=l}else E_(h,e.type,e.stateNode);else e.stateNode=__(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?E_(h,e.type,e.stateNode):__(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:dn(i,e),mn(e),l&512&&(fe||a===null||li(a,a.return)),a!==null&&l&4&&Gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dn(i,e),mn(e),l&512&&(fe||a===null||li(a,a.return)),e.flags&32){h=e.stateNode;try{Tn(h,"")}catch(j){Wt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Gf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Yf=!0);break;case 6:if(dn(i,e),mn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Wt(e,e.return,j)}}break;case 3:if(gc=null,h=Bn,Bn=dc(i.containerInfo),dn(i,e),Bn=h,mn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{El(i.containerInfo)}catch(j){Wt(e,e.return,j)}Yf&&(Yf=!1,Ry(e));break;case 4:l=Bn,Bn=dc(e.stateNode.containerInfo),dn(i,e),mn(e),Bn=l;break;case 12:dn(i,e),mn(e);break;case 13:dn(i,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ed=vn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,B=Hi,G=fe;if(Hi=B||h,fe=G||w,dn(i,e),fe=G,Hi=B,mn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Hi||fe||Os(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var Y=w.memoizedProps.style,q=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;E.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(j){Wt(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){Wt(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Xf(e,a))));break;case 19:dn(i,e),mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xf(e,l)));break;case 30:break;case 21:break;default:dn(i,e),mn(e)}}function mn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(_y(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Kf(e);tc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Tn(v,""),a.flags&=-33);var E=Kf(e);tc(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,B=Kf(e);Qf(e,B,w);break;default:throw Error(s(161))}}catch(G){Wt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ry(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ry(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ty(e,i.alternate,i),i=i.sibling}function Os(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:gr(4,i,i.return),Os(i);break;case 1:li(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&py(i,i.return,a),Os(i);break;case 27:fl(i.stateNode);case 26:case 5:li(i,i.return),Os(i);break;case 22:i.memoizedState===null&&Os(i);break;case 30:Os(i);break;default:Os(i)}e=e.sibling}}function yr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:yr(h,d,a),nl(4,d);break;case 1:if(yr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){Wt(l,l.return,B)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)ep(w[h],E)}catch(B){Wt(l,l.return,B)}}a&&v&64&&gy(d),il(d,d.return);break;case 27:vy(d);case 26:case 5:yr(h,d,a),a&&l===null&&v&4&&yy(d),il(d,d.return);break;case 12:yr(h,d,a);break;case 13:yr(h,d,a),a&&v&4&&by(h,d);break;case 22:d.memoizedState===null&&yr(h,d,a),il(d,d.return);break;case 30:break;default:yr(h,d,a)}i=i.sibling}}function $f(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jo(a))}function Wf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jo(e))}function ui(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Iy(e,i,a,l),i=i.sibling}function Iy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ui(e,i,a,l),h&2048&&nl(9,i);break;case 1:ui(e,i,a,l);break;case 3:ui(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jo(e)));break;case 12:if(h&2048){ui(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Wt(i,i.return,w)}}else ui(e,i,a,l);break;case 13:ui(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ui(e,i,a,l):rl(e,i):d._visibility&2?ui(e,i,a,l):(d._visibility|=2,Da(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&$f(v,i);break;case 24:ui(e,i,a,l),h&2048&&Wf(i.alternate,i);break;default:ui(e,i,a,l)}}function Da(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=l,B=v.flags;switch(v.tag){case 0:case 11:case 15:Da(d,v,E,w,h),nl(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Da(d,v,E,w,h):rl(d,v):(G._visibility|=2,Da(d,v,E,w,h)),h&&B&2048&&$f(v.alternate,v);break;case 24:Da(d,v,E,w,h),h&&B&2048&&Wf(v.alternate,v);break;default:Da(d,v,E,w,h)}i=i.sibling}}function rl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:rl(a,l),h&2048&&$f(l.alternate,l);break;case 24:rl(a,l),h&2048&&Wf(l.alternate,l);break;default:rl(a,l)}i=i.sibling}}var sl=8192;function Oa(e){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)Cy(e),e=e.sibling}function Cy(e){switch(e.tag){case 26:Oa(e),e.flags&sl&&e.memoizedState!==null&&zS(Bn,e.memoizedState,e.memoizedProps);break;case 5:Oa(e);break;case 3:case 4:var i=Bn;Bn=dc(e.stateNode.containerInfo),Oa(e),Bn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=sl,sl=16777216,Oa(e),sl=i):Oa(e));break;default:Oa(e)}}function Dy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function al(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,Ny(l,e)}Dy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Oy(e),e=e.sibling}function Oy(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&gr(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ec(e)):al(e);break;default:al(e)}}function ec(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,Ny(l,e)}Dy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:gr(8,i,i.return),ec(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ec(i));break;default:ec(i)}e=e.sibling}}function Ny(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:gr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(Ay(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}var eS={getCacheForType:function(e){var i=Qe(we),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},nS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Jt=null,Ot=null,Lt=0,Kt=0,gn=null,_r=!1,Na=!1,Zf=!1,Gi=0,ue=0,vr=0,Ns=0,Jf=0,On=0,Va=0,ol=null,an=null,td=!1,ed=0,nc=1/0,ic=null,Er=null,Be=0,Tr=null,Ma=null,Pa=0,nd=0,id=null,Vy=null,ll=0,rd=null;function pn(){if((Gt&2)!==0&&Lt!==0)return Lt&-Lt;if(F.T!==null){var e=Ta;return e!==0?e:hd()}return nr()}function My(){On===0&&(On=(Lt&536870912)===0||qt?yo():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),On}function yn(e,i,a){(e===Jt&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(ka(e,0),Ar(e,Lt,On,!1)),Si(e,a),((Gt&2)===0||e!==Jt)&&(e===Jt&&((Gt&2)===0&&(Ns|=a),ue===4&&Ar(e,Lt,On,!1)),ci(e))}function Py(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||is(e,i),h=l?sS(e,i):od(e,i,!0),d=l;do{if(h===0){Na&&!l&&Ar(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!iS(a)){h=od(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=ol;var w=E.current.memoizedState.isDehydrated;if(w&&(ka(E,v).flags|=256),v=od(E,v,!1),v!==2){if(Zf&&!w){E.errorRecoveryDisabledLanes|=d,Ns|=d,h=4;break t}d=an,an=h,d!==null&&(an===null?an=d:an.push.apply(an,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){ka(e,0),Ar(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ar(l,i,On,!_r);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=ed+300-vn(),10<h)){if(Ar(l,i,On,!_r),Zs(l,0,!0)!==0)break t;l.timeoutHandle=u_(ky.bind(null,l,a,an,ic,td,i,On,Ns,Va,_r,d,2,-0,0),h);break t}ky(l,a,an,ic,td,i,On,Ns,Va,_r,d,0,-0,0)}}break}while(!0);ci(e)}function ky(e,i,a,l,h,d,v,E,w,B,G,Y,q,j){if(e.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(gl={stylesheets:null,count:0,unsuspend:US},Cy(i),Y=BS(),Y!==null)){e.cancelPendingCommit=Y(jy.bind(null,e,i,d,a,l,h,v,E,w,G,1,q,j)),Ar(e,d,v,!B);return}jy(e,i,d,a,l,h,v,E,w)}function iS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(e,i,a,l){i&=~Jf,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ke(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Xn(e,a,i)}function rc(){return(Gt&6)===0?(ul(0),!1):!0}function sd(){if(Ot!==null){if(Kt===0)var e=Ot.return;else e=Ot,Li=ws=null,Af(e),Ia=null,Jo=0,e=Ot;for(;e!==null;)my(e.alternate,e),e=e.return;Ot=null}}function ka(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,TS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sd(),Jt=e,Ot=a=Pi(e.current,null),Lt=i,Kt=0,gn=null,_r=!1,Na=is(e,i),Zf=!1,Va=On=Jf=Ns=vr=ue=0,an=ol=null,td=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ke(l),d=1<<h;i|=e[h],l&=~d}return Gi=i,Ru(),a}function xy(e,i){Rt=null,F.H=Gu,i===Fo||i===ku?(i=Jg(),Kt=3):i===$g?(i=Jg(),Kt=4):Kt=i===ty?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,Ot===null&&(ue=1,$u(e,wn(i,e.current)))}function Ly(){var e=F.H;return F.H=Gu,e===null?Gu:e}function Uy(){var e=F.A;return F.A=eS,e}function ad(){ue=4,_r||(Lt&4194048)!==Lt&&Dn.current!==null||(Na=!0),(vr&134217727)===0&&(Ns&134217727)===0||Jt===null||Ar(Jt,Lt,On,!1)}function od(e,i,a){var l=Gt;Gt|=2;var h=Ly(),d=Uy();(Jt!==e||Lt!==i)&&(ic=null,ka(e,i)),i=!1;var v=ue;t:do try{if(Kt!==0&&Ot!==null){var E=Ot,w=gn;switch(Kt){case 8:sd(),v=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(i=!0);var B=Kt;if(Kt=0,gn=null,xa(e,E,w,B),a&&Na){v=0;break t}break;default:B=Kt,Kt=0,gn=null,xa(e,E,w,B)}}rS(),v=ue;break}catch(G){xy(e,G)}while(!0);return i&&e.shellSuspendCounter++,Li=ws=null,Gt=l,F.H=h,F.A=d,Ot===null&&(Jt=null,Lt=0,Ru()),v}function rS(){for(;Ot!==null;)zy(Ot)}function sS(e,i){var a=Gt;Gt|=2;var l=Ly(),h=Uy();Jt!==e||Lt!==i?(ic=null,nc=vn()+500,ka(e,i)):Na=is(e,i);t:do try{if(Kt!==0&&Ot!==null){i=Ot;var d=gn;e:switch(Kt){case 1:Kt=0,gn=null,xa(e,i,d,1);break;case 2:case 9:if(Wg(d)){Kt=0,gn=null,By(i);break}i=function(){Kt!==2&&Kt!==9||Jt!==e||(Kt=7),ci(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:Wg(d)?(Kt=0,gn=null,By(i)):(Kt=0,gn=null,xa(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var E=Ot;if(!v||T_(v)){Kt=0,gn=null;var w=E.sibling;if(w!==null)Ot=w;else{var B=E.return;B!==null?(Ot=B,sc(B)):Ot=null}break e}}Kt=0,gn=null,xa(e,i,d,5);break;case 6:Kt=0,gn=null,xa(e,i,d,6);break;case 8:sd(),ue=6;break t;default:throw Error(s(462))}}aS();break}catch(G){xy(e,G)}while(!0);return Li=ws=null,F.H=l,F.A=h,Gt=a,Ot!==null?0:(Jt=null,Lt=0,Ru(),ue)}function aS(){for(;Ot!==null&&!fo();)zy(Ot)}function zy(e){var i=fy(e.alternate,e,Gi);e.memoizedProps=e.pendingProps,i===null?sc(e):Ot=i}function By(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=ay(a,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=ay(a,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:Af(i);default:my(a,i),i=Ot=qg(i,Gi),i=fy(a,i,Gi)}e.memoizedProps=e.pendingProps,i===null?sc(e):Ot=i}function xa(e,i,a,l){Li=ws=null,Af(i),Ia=null,Jo=0;var h=i.return;try{if(XA(e,h,i,a,Lt)){ue=1,$u(e,wn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ue=1,$u(e,wn(a,e.current)),Ot=null;return}i.flags&32768?(qt||l===1?e=!0:Na||(Lt&536870912)!==0?e=!1:(_r=e=!0,(l===2||l===9||l===3||l===6)&&(l=Dn.current,l!==null&&l.tag===13&&(l.flags|=16384))),qy(i,e)):sc(i)}function sc(e){var i=e;do{if((i.flags&32768)!==0){qy(i,_r);return}e=i.return;var a=WA(i.alternate,i,Gi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ue===0&&(ue=5)}function qy(e,i){do{var a=ZA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);ue=6,Ot=null}function jy(e,i,a,l,h,d,v,E,w){e.cancelPendingCommit=null;do ac();while(Be!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=$h,vo(e,a,d,v,E,w),e===Jt&&(Ot=Jt=null,Lt=0),Ma=i,Tr=e,Pa=a,nd=d,id=h,Vy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cS(Jr,function(){return Qy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=nt.p,nt.p=2,v=Gt,Gt|=4;try{JA(e,i,a)}finally{Gt=v,nt.p=h,F.T=l}}Be=1,Hy(),Fy(),Gy()}}function Hy(){if(Be===1){Be=0;var e=Tr,i=Ma,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{wy(i,e);var d=vd,v=Ng(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Og(E.ownerDocument.documentElement,E)){if(w!==null&&Gh(E)){var B=w.start,G=w.end;if(G===void 0&&(G=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(G,E.value.length);else{var Y=E.ownerDocument||document,q=Y&&Y.defaultView||window;if(q.getSelection){var j=q.getSelection(),_t=E.textContent.length,mt=Math.min(w.start,_t),$t=w.end===void 0?mt:Math.min(w.end,_t);!j.extend&&mt>$t&&(v=$t,$t=mt,mt=v);var P=Dg(E,mt),O=Dg(E,$t);if(P&&O&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var U=Y.createRange();U.setStart(P.node,P.offset),j.removeAllRanges(),mt>$t?(j.addRange(U),j.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),j.addRange(U))}}}}for(Y=[],j=E;j=j.parentNode;)j.nodeType===1&&Y.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Y.length;E++){var K=Y[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}_c=!!_d,vd=_d=null}finally{Gt=h,nt.p=l,F.T=a}}e.current=i,Be=2}}function Fy(){if(Be===2){Be=0;var e=Tr,i=Ma,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{Ty(e,i.alternate,i)}finally{Gt=h,nt.p=l,F.T=a}}Be=3}}function Gy(){if(Be===4||Be===3){Be=0,eu();var e=Tr,i=Ma,a=Pa,l=Vy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Be=5:(Be=0,Ma=Tr=null,Ky(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Er=null),Js(a),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=nt.p,nt.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{F.T=i,nt.p=h}}(Pa&3)!==0&&ac(),ci(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===rd?ll++:(ll=0,rd=e):ll=0,ul(0)}}function Ky(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,jo(i)))}function ac(e){return Hy(),Fy(),Gy(),Qy()}function Qy(){if(Be!==5)return!1;var e=Tr,i=nd;nd=0;var a=Js(Pa),l=F.T,h=nt.p;try{nt.p=32>a?32:a,F.T=null,a=id,id=null;var d=Tr,v=Pa;if(Be=0,Ma=Tr=null,Pa=0,(Gt&6)!==0)throw Error(s(331));var E=Gt;if(Gt|=4,Oy(d.current),Iy(d,d.current,v,a),Gt=E,ul(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{nt.p=h,F.T=l,Ky(e,i)}}function Yy(e,i,a){i=wn(a,i),i=xf(e.stateNode,i,2),e=hr(e,i,2),e!==null&&(Si(e,2),ci(e))}function Wt(e,i,a){if(e.tag===3)Yy(e,e,a);else for(;i!==null;){if(i.tag===3){Yy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Er===null||!Er.has(l))){e=wn(a,e),a=Zp(2),l=hr(i,a,2),l!==null&&(Jp(a,l,i,e),Si(l,2),ci(l));break}}i=i.return}}function ld(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new nS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Zf=!0,h.add(a),e=oS.bind(null,e,i,a),i.then(e,e))}function oS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(Lt&a)===a&&(ue===4||ue===3&&(Lt&62914560)===Lt&&300>vn()-ed?(Gt&2)===0&&ka(e,0):Jf|=a,Va===Lt&&(Va=0)),ci(e)}function Xy(e,i){i===0&&(i=_o()),e=ya(e,i),e!==null&&(Si(e,i),ci(e))}function lS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Xy(e,a)}function uS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Xy(e,a)}function cS(e,i){return Wr(e,i)}var oc=null,La=null,ud=!1,lc=!1,cd=!1,Vs=0;function ci(e){e!==La&&e.next===null&&(La===null?oc=La=e:La=La.next=e),lc=!0,ud||(ud=!0,fS())}function ul(e,i){if(!cd&&lc){cd=!0;do for(var a=!1,l=oc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Ke(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Jy(l,d))}else d=Lt,d=Zs(l,l===Jt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||is(l,d)||(a=!0,Jy(l,d));l=l.next}while(a);cd=!1}}function hS(){$y()}function $y(){lc=ud=!1;var e=0;Vs!==0&&(ES()&&(e=Vs),Vs=0);for(var i=vn(),a=null,l=oc;l!==null;){var h=l.next,d=Wy(l,i);d===0?(l.next=null,a===null?oc=h:a.next=h,h===null&&(La=a)):(a=l,(e!==0||(d&3)!==0)&&(lc=!0)),l=h}ul(e)}function Wy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ke(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=po(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=Jt,a=Lt,a=Zs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||is(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Zr(l),Js(a)){case 2:case 8:a=$s;break;case 32:a=Jr;break;case 268435456:a=Ws;break;default:a=Jr}return l=Zy.bind(null,e),a=Wr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Zr(l),e.callbackPriority=2,e.callbackNode=null,2}function Zy(e,i){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var l=Lt;return l=Zs(e,e===Jt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Py(e,l,i),Wy(e,vn()),e.callbackNode!=null&&e.callbackNode===a?Zy.bind(null,e):null)}function Jy(e,i){if(ac())return null;Py(e,i,!0)}function fS(){AS(function(){(Gt&6)!==0?Wr(mo,hS):$y()})}function hd(){return Vs===0&&(Vs=yo()),Vs}function t_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sa(""+e)}function e_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function dS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=t_((h[me]||null).action),v=l.submitter;v&&(i=(i=v[me]||null)?t_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new aa("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Vs!==0){var w=v?e_(h,v):new FormData(h);Nf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?e_(h,v):new FormData(h),Nf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var fd=0;fd<Xh.length;fd++){var dd=Xh[fd],mS=dd.toLowerCase(),gS=dd[0].toUpperCase()+dd.slice(1);zn(mS,"on"+gS)}zn(Pg,"onAnimationEnd"),zn(kg,"onAnimationIteration"),zn(xg,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(VA,"onTransitionRun"),zn(MA,"onTransitionStart"),zn(PA,"onTransitionCancel"),zn(Lg,"onTransitionEnd"),wi("onMouseEnter",["mouseout","mouseover"]),wi("onMouseLeave",["mouseout","mouseover"]),wi("onPointerEnter",["pointerout","pointerover"]),wi("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function n_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,B=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=B;try{d(h)}catch(G){Xu(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,B=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=B;try{d(h)}catch(G){Xu(G)}h.currentTarget=null,d=w}}}}function Nt(e,i){var a=i[To];a===void 0&&(a=i[To]=new Set);var l=e+"__bubble";a.has(l)||(i_(i,e,2,!1),a.add(l))}function md(e,i,a){var l=0;i&&(l|=4),i_(a,e,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function gd(e){if(!e[uc]){e[uc]=!0,Ao.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||md(a,!1,e),md(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uc]||(i[uc]=!0,md("selectionchange",!1,i))}}function i_(e,i,a,l){switch(I_(i)){case 2:var h=HS;break;case 8:h=FS;break;default:h=Dd}a=h.bind(null,i,a,e),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function pd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=bi(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}E=E.parentNode}}l=l.return}hu(function(){var B=d,G=An(a),Y=[];t:{var q=Ug.get(e);if(q!==void 0){var j=aa,_t=e;switch(e){case"keypress":if(ei(a)===0)break t;case"keydown":case"keyup":j=fa;break;case"focusin":_t="focus",j=ua;break;case"focusout":_t="blur",j=ua;break;case"beforeblur":case"afterblur":j=ua;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=vu;break;case Pg:case kg:case xg:j=ca;break;case Lg:j=Tu;break;case"scroll":case"scrollend":j=fu;break;case"wheel":j=da;break;case"copy":case"cut":case"paste":j=ha;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Po;break;case"toggle":case"beforetoggle":j=Su}var mt=(i&4)!==0,$t=!mt&&(e==="scroll"||e==="scrollend"),P=mt?q!==null?q+"Capture":null:q;mt=[];for(var O=B,U;O!==null;){var K=O;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||P===null||(K=hs(O,P),K!=null&&mt.push(hl(O,K,U))),$t)break;O=O.return}0<mt.length&&(q=new j(q,_t,null,a,G),Y.push({event:q,listeners:mt}))}}if((i&7)===0){t:{if(q=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",q&&a!==Ci&&(_t=a.relatedTarget||a.fromElement)&&(bi(_t)||_t[En]))break t;if((j||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,j?(_t=a.relatedTarget||a.toElement,j=B,_t=_t?bi(_t):null,_t!==null&&($t=u(_t),mt=_t.tag,_t!==$t||mt!==5&&mt!==27&&mt!==6)&&(_t=null)):(j=null,_t=B),j!==_t)){if(mt=bn,K="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(mt=Po,K="onPointerLeave",P="onPointerEnter",O="pointer"),$t=j==null?q:Wn(j),U=_t==null?q:Wn(_t),q=new mt(K,O+"leave",j,a,G),q.target=$t,q.relatedTarget=U,K=null,bi(G)===B&&(mt=new mt(P,O+"enter",_t,a,G),mt.target=U,mt.relatedTarget=$t,K=mt),$t=K,j&&_t)e:{for(mt=j,P=_t,O=0,U=mt;U;U=Ua(U))O++;for(U=0,K=P;K;K=Ua(K))U++;for(;0<O-U;)mt=Ua(mt),O--;for(;0<U-O;)P=Ua(P),U--;for(;O--;){if(mt===P||P!==null&&mt===P.alternate)break e;mt=Ua(mt),P=Ua(P)}mt=null}else mt=null;j!==null&&r_(Y,q,j,mt,!1),_t!==null&&$t!==null&&r_(Y,$t,_t,mt,!0)}}t:{if(q=B?Wn(B):window,j=q.nodeName&&q.nodeName.toLowerCase(),j==="select"||j==="input"&&q.type==="file")var at=Sg;else if(be(q))if(bg)at=DA;else{at=IA;var Dt=RA}else j=q.nodeName,!j||j.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&Io(B.elementType)&&(at=Sg):at=CA;if(at&&(at=at(e,B))){Mi(Y,at,a,G);break t}Dt&&Dt(e,q,B),e==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&ar(q,"number",q.value)}switch(Dt=B?Wn(B):window,e){case"focusin":(be(Dt)||Dt.contentEditable==="true")&&(ma=Dt,Kh=B,Lo=null);break;case"focusout":Lo=Kh=ma=null;break;case"mousedown":Qh=!0;break;case"contextmenu":case"mouseup":case"dragend":Qh=!1,Vg(Y,a,G);break;case"selectionchange":if(NA)break;case"keydown":case"keyup":Vg(Y,a,G)}var lt;if(ri)t:{switch(e){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else kt?H(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(_&&a.locale!=="ko"&&(kt||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&kt&&(lt=Do()):(ti=G,or="value"in ti?ti.value:ti.textContent,kt=!0)),Dt=cc(B,gt),0<Dt.length&&(gt=new Vo(gt,e,null,a,G),Y.push({event:gt,listeners:Dt}),lt?gt.data=lt:(lt=et(a),lt!==null&&(gt.data=lt)))),(lt=g?Se(e,a):xt(e,a))&&(gt=cc(B,"onBeforeInput"),0<gt.length&&(Dt=new Vo("onBeforeInput","beforeinput",null,a,G),Y.push({event:Dt,listeners:gt}),Dt.data=lt)),dS(Y,e,B,a,G)}n_(Y,i)})}function hl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function cc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=hs(e,a),h!=null&&l.unshift(hl(e,h,d)),h=hs(e,i),h!=null&&l.push(hl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,B=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||B===null||(w=B,h?(B=hs(a,d),B!=null&&v.unshift(hl(a,B,w))):h||(B=hs(a,d),B!=null&&v.push(hl(a,B,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var yS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(yS,`
`).replace(_S,"")}function a_(e,i){return i=s_(i),s_(e)===i}function hc(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":Ro(e,l,d);break;case"data":if(i!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=sa(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=sa(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=hc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=sa(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),sr(e,"popover",l);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":sr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zh.get(a)||a,sr(e,a,l))}}function yd(e,i,a,l,h,d){switch(a){case"style":Ro(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ta.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[me]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):sr(e,a,l)}}}function qe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var E=d=v=h=null,w=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":B=G;break;case"value":d=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xt(e,i,l,G,a,null)}}ls(e,d,E,w,B,v,h,!1),ra(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Xt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ii(e,!!l,i,!1):a!=null&&Ii(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Xt(e,i,v,E,a,null)}us(e,l,h,d),ra(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,w,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<cl.length;l++)Nt(cl[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,B,l,a,null)}return;default:if(Io(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&yd(e,i,G,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Xt(e,i,E,l,a,null))}function vS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,B=null,G=null;for(j in a){var Y=a[j];if(a.hasOwnProperty(j)&&Y!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=Y;default:l.hasOwnProperty(j)||Xt(e,i,j,null,l,Y)}}for(var q in l){var j=l[q];if(Y=a[q],l.hasOwnProperty(q)&&(j!=null||Y!=null))switch(q){case"type":d=j;break;case"name":h=j;break;case"checked":B=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Y&&Xt(e,i,q,j,l,Y)}}cn(e,v,E,w,B,G,d,h);return;case"select":j=v=E=q=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":q=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&Xt(e,i,h,d,l,w)}i=E,a=v,l=j,q!=null?Ii(e,!!a,q,!1):!!l!=!!a&&(i!=null?Ii(e,!!a,i,!0):Ii(e,!!a,a?[]:"",!1));return;case"textarea":j=q=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":q=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}Qt(e,q,j);return;case"option":for(var _t in a)if(q=a[_t],a.hasOwnProperty(_t)&&q!=null&&!l.hasOwnProperty(_t))switch(_t){case"selected":e.selected=!1;break;default:Xt(e,i,_t,null,l,q)}for(w in l)if(q=l[w],j=a[w],l.hasOwnProperty(w)&&q!==j&&(q!=null||j!=null))switch(w){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Xt(e,i,w,q,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)q=a[mt],a.hasOwnProperty(mt)&&q!=null&&!l.hasOwnProperty(mt)&&Xt(e,i,mt,null,l,q);for(B in l)if(q=l[B],j=a[B],l.hasOwnProperty(B)&&q!==j&&(q!=null||j!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:Xt(e,i,B,q,l,j)}return;default:if(Io(i)){for(var $t in a)q=a[$t],a.hasOwnProperty($t)&&q!==void 0&&!l.hasOwnProperty($t)&&yd(e,i,$t,void 0,l,q);for(G in l)q=l[G],j=a[G],!l.hasOwnProperty(G)||q===j||q===void 0&&j===void 0||yd(e,i,G,q,l,j);return}}for(var P in a)q=a[P],a.hasOwnProperty(P)&&q!=null&&!l.hasOwnProperty(P)&&Xt(e,i,P,null,l,q);for(Y in l)q=l[Y],j=a[Y],!l.hasOwnProperty(Y)||q===j||q==null&&j==null||Xt(e,i,Y,q,l,j)}var _d=null,vd=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function o_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ed(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Td=null;function ES(){var e=window.event;return e&&e.type==="popstate"?e===Td?!1:(Td=e,!0):(Td=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(e){return c_.resolve(null).then(e).catch(SS)}:u_;function SS(e){setTimeout(function(){throw e})}function Sr(e){return e==="head"}function h_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&fl(v.documentElement),a&2&&fl(v.body),a&4)for(a=v.head,fl(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[rs]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),El(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);El(i)}function Ad(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ad(a),rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function bS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[rs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=qn(e.nextSibling),e===null)break}return null}function wS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qn(e.nextSibling),e===null))return null;return e}function Sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function RS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function qn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var bd=null;function f_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function d_(e,i,a){switch(i=fc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function fl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);rr(e)}var Nn=new Map,m_=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=nt.d;nt.d={f:IS,r:CS,D:DS,C:OS,L:NS,m:VS,X:PS,S:MS,M:kS};function IS(){var e=Ki.f(),i=rc();return e||i}function CS(e){var i=$n(e);i!==null&&i.tag===5&&i.type==="form"?Pp(i):Ki.r(e)}var za=typeof document>"u"?null:document;function g_(e,i,a){var l=za;if(l&&typeof i=="string"&&i){var h=ge(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),m_.has(h)||(m_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),qe(i,"link",e),ce(i),l.head.appendChild(i)))}}function DS(e){Ki.D(e),g_("dns-prefetch",e,null)}function OS(e,i){Ki.C(e,i),g_("preconnect",e,i)}function NS(e,i,a){Ki.L(e,i,a);var l=za;if(l&&e&&i){var h='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ge(a.imageSizes)+'"]')):h+='[href="'+ge(e)+'"]';var d=h;switch(i){case"style":d=Ba(e);break;case"script":d=qa(e)}Nn.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Nn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(dl(d))||i==="script"&&l.querySelector(ml(d))||(i=l.createElement("link"),qe(i,"link",e),ce(i),l.head.appendChild(i)))}}function VS(e,i){Ki.m(e,i);var a=za;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=qa(e)}if(!Nn.has(d)&&(e=T({rel:"modulepreload",href:e},i),Nn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(d)))return}l=a.createElement("link"),qe(l,"link",e),ce(l),a.head.appendChild(l)}}}function MS(e,i,a){Ki.S(e,i,a);var l=za;if(l&&e){var h=Je(l).hoistableStyles,d=Ba(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(dl(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Nn.get(d))&&wd(e,a);var w=v=l.createElement("link");ce(w),qe(w,"link",e),w._p=new Promise(function(B,G){w.onload=B,w.onerror=G}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,mc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function PS(e,i){Ki.X(e,i);var a=za;if(a&&e){var l=Je(a).hoistableScripts,h=qa(e),d=l.get(h);d||(d=a.querySelector(ml(h)),d||(e=T({src:e,async:!0},i),(i=Nn.get(h))&&Rd(e,i),d=a.createElement("script"),ce(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function kS(e,i){Ki.M(e,i);var a=za;if(a&&e){var l=Je(a).hoistableScripts,h=qa(e),d=l.get(h);d||(d=a.querySelector(ml(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Nn.get(h))&&Rd(e,i),d=a.createElement("script"),ce(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function p_(e,i,a,l){var h=(h=Et.current)?dc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ba(a.href),a=Je(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ba(a.href);var d=Je(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(dl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Nn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nn.set(e,a),d||xS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=qa(a),a=Je(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ba(e){return'href="'+ge(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function y_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function xS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qe(i,"link",a),ce(i),e.head.appendChild(i))}function qa(e){return'[src="'+ge(e)+'"]'}function ml(e){return"script[async]"+e}function __(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ge(a.href)+'"]');if(l)return i.instance=l,ce(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ce(l),qe(l,"style",h),mc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ba(a.href);var d=e.querySelector(dl(h));if(d)return i.state.loading|=4,i.instance=d,ce(d),d;l=y_(a),(h=Nn.get(h))&&wd(l,h),d=(e.ownerDocument||e).createElement("link"),ce(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),qe(d,"link",l),i.state.loading|=4,mc(d,a.precedence,e),i.instance=d;case"script":return d=qa(a.src),(h=e.querySelector(ml(d)))?(i.instance=h,ce(h),h):(l=a,(h=Nn.get(d))&&(l=T({},a),Rd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ce(h),qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,mc(l,a.precedence,e));return i.instance}function mc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function wd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Rd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var gc=null;function v_(e,i,a){if(gc===null){var l=new Map,h=gc=new Map;h.set(a,l)}else h=gc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[rs]||d[Ae]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function E_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function LS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function T_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var gl=null;function US(){}function zS(e,i,a){if(gl===null)throw Error(s(475));var l=gl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ba(a.href),d=e.querySelector(dl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=pc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ce(d);return}d=e.ownerDocument||e,a=y_(a),(h=Nn.get(h))&&wd(a,h),d=d.createElement("link"),ce(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),qe(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=pc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function BS(){if(gl===null)throw Error(s(475));var e=gl;return e.stylesheets&&e.count===0&&Id(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Id(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function pc(){if(this.count--,this.count===0){if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Id(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(qS,e),yc=null,pc.call(e))}function qS(e,i){if(!(i.state.loading&4)){var a=yc.get(e);if(a)var l=a.get(null);else{a=new Map,yc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=pc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var pl={$$typeof:ot,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function jS(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ai(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.hiddenUpdates=Ai(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function A_(e,i,a,l,h,d,v,E,w,B,G,Y){return e=new jS(e,i,a,v,E,w,B,Y),i=1,d===!0&&(i|=24),d=fn(3,null,null,i),e.current=d,d.stateNode=e,i=lf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},ff(d),e}function S_(e){return e?(e=_a,e):_a}function b_(e,i,a,l,h,d){h=S_(h),l.context===null?l.context=h:l.pendingContext=h,l=cr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=hr(e,l,i),a!==null&&(yn(a,e,i),Ko(a,e,i))}function w_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Cd(e,i){w_(e,i),(e=e.alternate)&&w_(e,i)}function R_(e){if(e.tag===13){var i=ya(e,67108864);i!==null&&yn(i,e,67108864),Cd(e,67108864)}}var _c=!0;function HS(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=2,Dd(e,i,a,l)}finally{nt.p=d,F.T=h}}function FS(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=8,Dd(e,i,a,l)}finally{nt.p=d,F.T=h}}function Dd(e,i,a,l){if(_c){var h=Od(l);if(h===null)pd(e,i,l,vc,a),C_(e,l);else if(KS(h,e,i,a,l))l.stopPropagation();else if(C_(e,l),i&4&&-1<GS.indexOf(e)){for(;h!==null;){var d=$n(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=xn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-Ke(v);E.entanglements[1]|=w,v&=~w}ci(d),(Gt&6)===0&&(nc=vn()+500,ul(0))}}break;case 13:E=ya(d,2),E!==null&&yn(E,d,2),rc(),Cd(d,2)}if(d=Od(l),d===null&&pd(e,i,l,vc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else pd(e,i,l,null,a)}}function Od(e){return e=An(e),Nd(e)}var vc=null;function Nd(e){if(vc=null,e=bi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return vc=e,null}function I_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mh()){case mo:return 2;case $s:return 8;case Jr:case Ph:return 32;case Ws:return 268435456;default:return 32}default:return 32}}var Vd=!1,br=null,wr=null,Rr=null,yl=new Map,_l=new Map,Ir=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(e,i){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(i.pointerId)}}function vl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=$n(i),i!==null&&R_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function KS(e,i,a,l,h){switch(i){case"focusin":return br=vl(br,e,i,a,l,h),!0;case"dragenter":return wr=vl(wr,e,i,a,l,h),!0;case"mouseover":return Rr=vl(Rr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return yl.set(d,vl(yl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,_l.set(d,vl(_l.get(d)||null,e,i,a,l,h)),!0}return!1}function D_(e){var i=bi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,ru(e.priority,function(){if(a.tag===13){var l=pn();l=er(l);var h=ya(a,l);h!==null&&yn(h,a,l),Cd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Od(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ci=l,a.target.dispatchEvent(l),Ci=null}else return i=$n(a),i!==null&&R_(i),e.blockedOn=a,!1;i.shift()}return!0}function O_(e,i,a){Ec(e)&&a.delete(i)}function QS(){Vd=!1,br!==null&&Ec(br)&&(br=null),wr!==null&&Ec(wr)&&(wr=null),Rr!==null&&Ec(Rr)&&(Rr=null),yl.forEach(O_),_l.forEach(O_)}function Tc(e,i){e.blockedOn===i&&(e.blockedOn=null,Vd||(Vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,QS)))}var Ac=null;function N_(e){Ac!==e&&(Ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Nd(l||a)===null)continue;break}var d=$n(a);d!==null&&(e.splice(i,3),i-=3,Nf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function El(e){function i(w){return Tc(w,e)}br!==null&&Tc(br,e),wr!==null&&Tc(wr,e),Rr!==null&&Tc(Rr,e),yl.forEach(i),_l.forEach(i);for(var a=0;a<Ir.length;a++){var l=Ir[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ir.length&&(a=Ir[0],a.blockedOn===null);)D_(a),a.blockedOn===null&&Ir.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[me]||null;if(typeof d=="function")v||N_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[me]||null)E=v.formAction;else if(Nd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),N_(a)}}}function Md(e){this._internalRoot=e}Sc.prototype.render=Md.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();b_(a,l,e,i,null,null)},Sc.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;b_(e.current,2,null,e,null,null),rc(),i[En]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var i=nr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ir.length&&i!==0&&i<Ir[a].priority;a++);Ir.splice(a,0,e),a===0&&D_(e)}};var V_=t.version;if(V_!=="19.1.0")throw Error(s(527,V_,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var YS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{oe=bc.inject(YS),Ft=bc}catch{}}return Tl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Yp,d=Xp,v=$p,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=A_(e,1,!1,null,null,a,l,h,d,v,E,null),e[En]=i.current,gd(e),new Md(i)},Tl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Yp,v=Xp,E=$p,w=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),i=A_(e,1,!0,i,a??null,l,h,d,v,E,w,B),i.context=S_(null),a=i.current,l=pn(),l=er(l),h=cr(l),h.callback=null,hr(a,h,l),a=l,i.current.lanes=a,Si(i,a),ci(i),e[En]=i.current,gd(e),new Sc(i)},Tl.version="19.1.0",Tl}var B_;function ib(){if(B_)return kd.exports;B_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kd.exports=nb(),kd.exports}var rb=ib();const sb=({onClose:r,onSubmit:t})=>{const[n,s]=ve.useState(""),[o,u]=ve.useState(""),[f,m]=ve.useState(""),[p,y]=ve.useState(""),[T,b]=ve.useState(new Date().toISOString().split("T")[0]),R=L=>{L.preventDefault();const W={id:Date.now(),type:n,amount:parseFloat(o),category:f,description:p,date:T};t(W),r()};return z.createElement("div",{className:"form-container"},z.createElement("div",{className:"form-content"},z.createElement("h2",null,"Add Transaction"),z.createElement("form",{onSubmit:R},z.createElement("label",null,"Type:",z.createElement("select",{value:n,onChange:L=>s(L.target.value),required:!0},z.createElement("option",{value:"",disabled:!0},"Select type"),z.createElement("option",{value:"Income"},"Income"),z.createElement("option",{value:"Expense"},"Expense"))),z.createElement("label",null,"Amount:",z.createElement("input",{type:"number",value:o,onChange:L=>u(L.target.value),placeholder:"KES 0.00",required:!0})),z.createElement("label",null,"Category:",z.createElement("select",{value:f,onChange:L=>m(L.target.value),required:!0},z.createElement("option",{value:"Fuel"},"Fuel"),z.createElement("option",{value:"Driver"},"Driver"),z.createElement("option",{value:"Maize bran"},"Maize bran"),z.createElement("option",{value:"Wheat bran"},"Wheat bran"),z.createElement("option",{value:"loader"},"Loaders"),z.createElement("option",{value:"toll"},"Toll"),z.createElement("option",{value:"Helpers"},"Helpers"))),z.createElement("label",null,"Description:",z.createElement("input",{type:"text",value:p,onChange:L=>y(L.target.value),placeholder:"Enter transaction description...",required:!0})),z.createElement("label",null,"Date:",z.createElement("input",{type:"date",value:T,onChange:L=>b(L.target.value)})),z.createElement("div",{className:"buttons"},z.createElement("button",{type:"submit"},"Add transaction"),z.createElement("button",{type:"button",onClick:r},"Cancel transaction")))))},ab=({onAddTransaction:r})=>{const[t,n]=ve.useState(!1),s=o=>{console.log("Submitted transactions:",o),r(o),n(!1)};return z.createElement("div",{className:"button"},z.createElement("button",{id:"add-form",onClick:()=>n(!0)},"+ Add Transaction"),t&&z.createElement(sb,{onSubmit:s,onClose:()=>n(!1)}))},ob=({transactions:r=[]})=>{const t=r.reduce((m,p)=>{const y=p.date||new Date().toISOString().split("T")[0];return m[y]||(m[y]=[]),m[y].push(p),m},{}),n=Object.keys(t).sort((m,p)=>new Date(p)-new Date(m)),s=m=>{const p=m.filter(R=>R.type==="Income").reduce((R,L)=>R+parseFloat(L.amount),0),y=m.filter(R=>R.type==="Expense").reduce((R,L)=>(R[L.category]=(R[L.category]||0)+parseFloat(L.amount),R),{}),T=Object.values(y).reduce((R,L)=>R+L,0),b=p-T;return{totalRevenue:p,expenseByCategory:y,totalExpenses:T,net:b}},o=m=>new Date(m).toLocaleDateString("en-KE",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),u=m=>new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES",minimumFractionDigits:2}).format(m),f=s(r);return n.length===0?z.createElement("div",{style:dt.balanceSheet},z.createElement("div",{style:dt.header},z.createElement("h2",{style:dt.title},"Balance Sheet Summary"),z.createElement("p",{style:dt.period},"No transactions available"))):z.createElement("div",{style:dt.balanceSheet},z.createElement("div",{style:dt.header},z.createElement("h2",{style:dt.title},"Daily Balance Sheet Summary"),z.createElement("p",{style:dt.period},"Financial Overview by Day")),z.createElement("div",{style:{...dt.section,...dt.overallSummary}},z.createElement("h3",{style:dt.sectionTitle},"Overall Summary"),z.createElement("div",{style:dt.summaryGrid},z.createElement("div",{style:dt.summaryCard},z.createElement("h4",{style:dt.summaryTitle},"Total Revenue"),z.createElement("div",{style:dt.summaryAmount},u(f.totalRevenue))),z.createElement("div",{style:dt.summaryCard},z.createElement("h4",{style:dt.summaryTitle},"Total Expenses"),z.createElement("div",{style:dt.summaryAmount},u(f.totalExpenses))),z.createElement("div",{style:{...dt.summaryCard,backgroundColor:f.net>=0?"#e8f5e8":"#ffeaea"}},z.createElement("h4",{style:dt.summaryTitle},"Net Result"),z.createElement("div",{style:{...dt.summaryAmount,color:f.net>=0?"#2e7d32":"#d32f2f"}},u(Math.abs(f.net)))))),n.map(m=>{const p=t[m],{totalRevenue:y,expenseByCategory:T,totalExpenses:b,net:R}=s(p);return z.createElement("div",{key:m,style:dt.dailySheet},z.createElement("div",{style:dt.dateHeader},z.createElement("h3",{style:dt.dateTitle},o(m)),z.createElement("div",{style:dt.dateStats},p.length," transaction",p.length!==1?"s":"")),z.createElement("div",{style:dt.section},z.createElement("h4",{style:dt.subsectionTitle},"Revenue"),z.createElement("div",{style:dt.card},z.createElement("div",{style:dt.totalAmount},u(y)),z.createElement("div",{style:dt.subtitle},p.filter(L=>L.type==="Income").length," income transactions"))),z.createElement("div",{style:dt.section},z.createElement("h4",{style:dt.subsectionTitle},"Expenses by Category"),z.createElement("div",{style:dt.card},Object.keys(T).length>0?z.createElement(z.Fragment,null,z.createElement("table",{style:dt.table},z.createElement("thead",null,z.createElement("tr",{style:dt.tableHeader},z.createElement("th",{style:dt.th},"Category"),z.createElement("th",{style:dt.th},"Amount"),z.createElement("th",{style:dt.th},"%"))),z.createElement("tbody",null,Object.entries(T).sort(([,L],[,W])=>W-L).map(([L,W])=>z.createElement("tr",{key:L,style:dt.tableRow},z.createElement("td",{style:dt.td},L),z.createElement("td",{style:dt.td},u(W)),z.createElement("td",{style:dt.td},b>0?(W/b*100).toFixed(1):"0.0","%"))))),z.createElement("div",{style:dt.totalRow},z.createElement("strong",null,"Total Expenses: ",u(b)))):z.createElement("div",{style:dt.noData},"No expenses recorded"))),z.createElement("div",{style:dt.sectionNet},z.createElement("h4",{style:dt.subsectionTitle},R>=0?"Net Profit":"Net Loss"),z.createElement("div",{style:dt.card},z.createElement("div",{style:dt.netCalculation},z.createElement("div",{style:dt.calculationRow},z.createElement("span",null,"Revenue:"),z.createElement("span",null,u(y))),z.createElement("div",{style:dt.calculationRow},z.createElement("span",null,"Expenses:"),z.createElement("span",null,"(",u(b),")")),z.createElement("div",{style:dt.separator}),z.createElement("div",{style:{...dt.calculationRow,...dt.netResult,color:R>=0?"#2e7d32":"#d32f2f"}},z.createElement("span",null,z.createElement("strong",null,R>=0?"Net Profit:":"Net Loss:")),z.createElement("span",null,z.createElement("strong",null,u(Math.abs(R)))))))))}))},dt={balanceSheet:{maxWidth:"1200px",margin:"0 auto",padding:"20px",fontFamily:"Arial, sans-serif",backgroundColor:"#f5f5f5",minHeight:"100vh"},header:{textAlign:"center",marginBottom:"30px",backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)"},title:{fontSize:"2.2rem",color:"#2c3e50",margin:"0 0 10px 0",fontWeight:"bold"},period:{fontSize:"1rem",color:"#7f8c8d",margin:"0"},overallSummary:{backgroundColor:"#3498db",color:"white",borderRadius:"8px",padding:"20px",marginBottom:"40px"},dailySheet:{backgroundColor:"#ffffff",borderRadius:"8px",padding:"25px",marginBottom:"30px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",border:"1px solid #ecf0f1"},dateHeader:{textAlign:"center",marginBottom:"25px",borderBottom:"2px solid #3498db",paddingBottom:"15px"},dateTitle:{fontSize:"1.8rem",color:"#2c3e50",margin:"0 0 10px 0",fontWeight:"bold"},dateStats:{fontSize:"0.9rem",color:"#7f8c8d"},section:{marginBottom:"25px"},sectionNet:{marginBottom:"20px"},sectionTitle:{fontSize:"1.4rem",color:"#2c3e50",margin:"0 0 15px 0",fontWeight:"600"},subsectionTitle:{fontSize:"1.2rem",color:"#34495e",margin:"0 0 12px 0",fontWeight:"600"},card:{backgroundColor:"#f8f9fa",padding:"20px",borderRadius:"6px",border:"1px solid #e9ecef"},totalAmount:{fontSize:"2rem",color:"#27ae60",fontWeight:"bold",textAlign:"center",marginBottom:"8px"},subtitle:{fontSize:"0.9rem",color:"#7f8c8d",textAlign:"center"},table:{width:"100%",borderCollapse:"collapse",marginBottom:"15px"},tableHeader:{backgroundColor:"#ecf0f1"},th:{padding:"12px",textAlign:"left",borderBottom:"2px solid #bdc3c7",fontWeight:"600",color:"#2c3e50",fontSize:"0.9rem"},tableRow:{borderBottom:"1px solid #ecf0f1"},td:{padding:"10px 12px",color:"#34495e",fontSize:"0.9rem"},totalRow:{textAlign:"right",fontSize:"1rem",color:"#2c3e50",borderTop:"2px solid #bdc3c7",paddingTop:"10px"},noData:{textAlign:"center",color:"#7f8c8d",fontSize:"0.9rem",padding:"15px"},netCalculation:{maxWidth:"350px",margin:"0 auto"},calculationRow:{display:"flex",justifyContent:"space-between",padding:"8px 0",fontSize:"1rem"},separator:{height:"2px",backgroundColor:"#bdc3c7",margin:"10px 0"},netResult:{fontSize:"1.2rem",backgroundColor:"#ffffff",padding:"12px",borderRadius:"5px",marginTop:"8px",border:"1px solid #e9ecef"},summaryGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"15px",marginTop:"20px"},summaryCard:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"6px",textAlign:"center",boxShadow:"0 2px 6px rgba(0,0,0,0.1)"},summaryTitle:{fontSize:"1rem",color:"#7f8c8d",margin:"0 0 8px 0",fontWeight:"600"},summaryAmount:{fontSize:"1.4rem",color:"#2c3e50",margin:"0",fontWeight:"bold"}},RE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%2363bc0b'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-trending-up-icon%20lucide-trending-up'%3e%3cpath%20d='M16%207h6v6'/%3e%3cpath%20d='m22%207-8.5%208.5-5-5L2%2017'/%3e%3c/svg%3e",lb=({transactions:r,onDelete:t})=>z.createElement("div",{className:"container"},r.length===0?z.createElement(z.Fragment,null,z.createElement("img",{src:RE,alt:"Trending up"}),z.createElement("p",null,"No transactions yet"),z.createElement("p",null,"Start thinking your business finances by adding your first transactions")):z.createElement("ul",{className:"transaction-list"},r.map(n=>z.createElement("li",{key:n.id,className:`transaction-item ${n.type.toLowerCase()==="income"?"income":"expense"}`},z.createElement("div",{className:"transaction-info"},z.createElement("span",{className:"transaction-date"},n.date),z.createElement("span",{className:"transaction-category"},n.category),z.createElement("span",{className:"transaction-description"},n.description),z.createElement("span",{className:"transaction-amount"},"KES ",n.amount)),z.createElement("button",{className:"delete-btn",onClick:()=>{console.log("Delete button clicked for transaction:",n.id),console.log("Transaction ID type:",typeof n.id),console.log("Full transaction object:",n),t(String(n.id))},title:"Delete this transaction"},"Delete"))))),ub="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ba180b'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-trending-down-icon%20lucide-trending-down'%3e%3cpath%20d='M16%2017h6v-6'/%3e%3cpath%20d='m22%2017-8.5-8.5-5%205L2%207'/%3e%3c/svg%3e",cb=({transactions:r})=>{const t=r.filter(o=>o.type==="Income").reduce((o,u)=>o+parseFloat(u.amount),0),n=r.filter(o=>o.type==="Expense").reduce((o,u)=>o+parseFloat(u.amount),0),s=t-n;return z.createElement("div",{className:"cards-container"},z.createElement("div",{className:"card1"},z.createElement("h4",null,"Total Income"),z.createElement("img",{src:RE}),z.createElement("p",{className:"kes1"},"KES ",t),z.createElement("p",null,"From 0 transactions")),z.createElement("div",{className:"card2"},z.createElement("h4",null,"Total Expenses"),z.createElement("img",{src:ub}),z.createElement("p",{className:"kes2"},"KES ",n),z.createElement("p",null,"From 0 transactions")),z.createElement("div",{className:"card3"},z.createElement("h4",null,"Net Profit"),z.createElement("span",null,"KES"),z.createElement("p",{className:"kes3"},"KES ",s),z.createElement("p",null,"Profit this period")))},zd=()=>z.createElement("div",{className:"header-container"},z.createElement("h1",null,"Finance Tracker"),z.createElement("p",null,"Manage your business incomes and expenses")),hb=()=>{};var q_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},fb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},CE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,T=u>>2,b=(u&3)<<4|m>>4;let R=(m&15)<<2|y>>6,L=y&63;p||(L=64,f||(R=64)),s.push(n[T],n[b],n[R],n[L])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(IE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):fb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||b==null)throw new db;const R=u<<2|m>>4;if(s.push(R),y!==64){const L=m<<4&240|y>>2;if(s.push(L),b!==64){const W=y<<6&192|b;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mb=function(r){const t=IE(r);return CE.encodeByteArray(t,!0)},jc=function(r){return mb(r).replace(/\./g,"")},DE=function(r){try{return CE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=()=>gb().__FIREBASE_DEFAULTS__,yb=()=>{if(typeof process>"u"||typeof q_>"u")return;const r=q_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},_b=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&DE(r[1]);return t&&JSON.parse(t)},ch=()=>{try{return hb()||pb()||yb()||_b()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},OE=r=>{var t,n;return(n=(t=ch())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},vb=r=>{const t=OE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},NE=()=>{var r;return(r=ch())===null||r===void 0?void 0:r.config},VE=r=>{var t;return(t=ch())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ME(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[jc(JSON.stringify(n)),jc(JSON.stringify(f)),""].join(".")}const Il={};function Ab(){const r={prod:[],emulator:[]};for(const t of Object.keys(Il))Il[t]?r.emulator.push(t):r.prod.push(t);return r}function Sb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let j_=!1;function PE(r,t){if(typeof window>"u"||typeof document>"u"||!ro(window.location.host)||Il[r]===t||Il[r]||j_)return;Il[r]=t;function n(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=Ab().prod.length>0;function f(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function p(R,L){R.setAttribute("width","24"),R.setAttribute("id",L),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function y(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{j_=!0,f()},R}function T(R,L){R.setAttribute("id",L),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function b(){const R=Sb(s),L=n("text"),W=document.getElementById(L)||document.createElement("span"),J=n("learnmore"),$=document.getElementById(J)||document.createElement("a"),Tt=n("preprendIcon"),ht=document.getElementById(Tt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ot=R.element;m(ot),T($,J);const wt=y();p(ht,Tt),ot.append(ht,W,$,wt),document.body.appendChild(ot)}u?(W.innerText="Preview backend disconnected.",ht.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ht.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function wb(){var r;const t=(r=ch())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ib(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cb(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Db(){return!wb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xE(){try{return typeof indexedDB=="object"}catch{return!1}}function LE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function Ob(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="FirebaseError";class Qn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Nb,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Vb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Qn(o,m,s)}}function Vb(r,t){return r.replace(Mb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Mb=/\{\$([^}]+)}/g;function Pb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Br(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(H_(u)&&H_(f)){if(!Br(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function H_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Al(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Sl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function kb(r,t){const n=new xb(r,t);return n.subscribe.bind(n)}class xb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Lb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Bd),o.error===void 0&&(o.error=Bd),o.complete===void 0&&(o.complete=Bd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Bd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=1e3,zb=2,Bb=4*60*60*1e3,qb=.5;function F_(r,t=Ub,n=zb){const s=t*Math.pow(n,r),o=Math.round(qb*s*(Math.random()-.5)*2);return Math.min(Bb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Eb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),o=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fb(t))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ms){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ms){return this.instances.has(t)}getOptions(t=Ms){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ms){return this.component?this.component.multipleInstances?t:Ms:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hb(r){return r===Ms?void 0:r}function Fb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const Kb={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},Qb=Vt.INFO,Yb={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},Xb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Yb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hh{constructor(t){this.name=t,this._logLevel=Qb,this._logHandler=Xb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const $b=(r,t)=>t.some(n=>r instanceof n);let G_,K_;function Wb(){return G_||(G_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zb(){return K_||(K_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UE=new WeakMap,tm=new WeakMap,zE=new WeakMap,qd=new WeakMap,Cm=new WeakMap;function Jb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(kr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&UE.set(n,r)}).catch(()=>{}),Cm.set(t,r),t}function tw(r){if(tm.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});tm.set(r,t)}let em={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return tm.get(r);if(t==="objectStoreNames")return r.objectStoreNames||zE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function ew(r){em=r(em)}function nw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(jd(this),t,...n);return zE.set(s,t.sort?t.sort():[t]),kr(s)}:Zb().includes(r)?function(...t){return r.apply(jd(this),t),kr(UE.get(this))}:function(...t){return kr(r.apply(jd(this),t))}}function iw(r){return typeof r=="function"?nw(r):(r instanceof IDBTransaction&&tw(r),$b(r,Wb())?new Proxy(r,em):r)}function kr(r){if(r instanceof IDBRequest)return Jb(r);if(qd.has(r))return qd.get(r);const t=iw(r);return t!==r&&(qd.set(r,t),Cm.set(t,r)),t}const jd=r=>Cm.get(r);function BE(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=kr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(kr(f.result),p.oldVersion,p.newVersion,kr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const rw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],Hd=new Map;function Q_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Hd.get(t))return Hd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=sw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rw.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Hd.set(t,u),u}ew(r=>({...r,get:(t,n,s)=>Q_(t,n)||r.get(t,n,s),has:(t,n)=>!!Q_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ow(r){const t=r.getComponent();return t?.type==="VERSION"}const nm="@firebase/app",Y_="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new hh("@firebase/app"),lw="@firebase/app-compat",uw="@firebase/analytics-compat",cw="@firebase/analytics",hw="@firebase/app-check-compat",fw="@firebase/app-check",dw="@firebase/auth",mw="@firebase/auth-compat",gw="@firebase/database",pw="@firebase/data-connect",yw="@firebase/database-compat",_w="@firebase/functions",vw="@firebase/functions-compat",Ew="@firebase/installations",Tw="@firebase/installations-compat",Aw="@firebase/messaging",Sw="@firebase/messaging-compat",bw="@firebase/performance",ww="@firebase/performance-compat",Rw="@firebase/remote-config",Iw="@firebase/remote-config-compat",Cw="@firebase/storage",Dw="@firebase/storage-compat",Ow="@firebase/firestore",Nw="@firebase/ai",Vw="@firebase/firestore-compat",Mw="firebase",Pw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="[DEFAULT]",kw={[nm]:"fire-core",[lw]:"fire-core-compat",[cw]:"fire-analytics",[uw]:"fire-analytics-compat",[fw]:"fire-app-check",[hw]:"fire-app-check-compat",[dw]:"fire-auth",[mw]:"fire-auth-compat",[gw]:"fire-rtdb",[pw]:"fire-data-connect",[yw]:"fire-rtdb-compat",[_w]:"fire-fn",[vw]:"fire-fn-compat",[Ew]:"fire-iid",[Tw]:"fire-iid-compat",[Aw]:"fire-fcm",[Sw]:"fire-fcm-compat",[bw]:"fire-perf",[ww]:"fire-perf-compat",[Rw]:"fire-rc",[Iw]:"fire-rc-compat",[Cw]:"fire-gcs",[Dw]:"fire-gcs-compat",[Ow]:"fire-fst",[Vw]:"fire-fst-compat",[Nw]:"fire-vertex","fire-js":"fire-js",[Mw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map,xw=new Map,rm=new Map;function X_(r,t){try{r.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function vi(r){const t=r.name;if(rm.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;rm.set(t,r);for(const n of Hc.values())X_(n,r);for(const n of xw.values())X_(n,r);return!0}function Hs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Vn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new js("app","Firebase",Lw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=Pw;function qE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:im,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw xr.create("bad-app-name",{appName:String(o)});if(n||(n=NE()),!n)throw xr.create("no-options");const u=Hc.get(o);if(u){if(Br(n,u.options)&&Br(s,u.config))return u;throw xr.create("duplicate-app",{appName:o})}const f=new Gb(o);for(const p of rm.values())f.addComponent(p);const m=new Uw(n,s,f);return Hc.set(o,m),m}function Dm(r=im){const t=Hc.get(r);if(!t&&r===im&&NE())return qE();if(!t)throw xr.create("no-app",{appName:r});return t}function kn(r,t,n){var s;let o=(s=kw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$i.warn(m.join(" "));return}vi(new Fn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firebase-heartbeat-database",Bw=1,Pl="firebase-heartbeat-store";let Fd=null;function jE(){return Fd||(Fd=BE(zw,Bw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Pl)}catch(n){console.warn(n)}}}}).catch(r=>{throw xr.create("idb-open",{originalErrorMessage:r.message})})),Fd}async function qw(r){try{const n=(await jE()).transaction(Pl),s=await n.objectStore(Pl).get(HE(r));return await n.done,s}catch(t){if(t instanceof Qn)$i.warn(t.message);else{const n=xr.create("idb-get",{originalErrorMessage:t?.message});$i.warn(n.message)}}}async function $_(r,t){try{const s=(await jE()).transaction(Pl,"readwrite");await s.objectStore(Pl).put(t,HE(r)),await s.done}catch(n){if(n instanceof Qn)$i.warn(n.message);else{const s=xr.create("idb-set",{originalErrorMessage:n?.message});$i.warn(s.message)}}}function HE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=1024,Hw=30;class Fw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=W_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Hw){const f=Qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){$i.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=W_(),{heartbeatsToSend:s,unsentEntries:o}=Gw(this._heartbeatsCache.heartbeats),u=jc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return $i.warn(n),""}}}function W_(){return new Date().toISOString().substring(0,10)}function Gw(r,t=jw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Z_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Z_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xE()?LE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Z_(r){return jc(JSON.stringify({version:2,heartbeats:r})).length}function Qw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(r){vi(new Fn("platform-logger",t=>new aw(t),"PRIVATE")),vi(new Fn("heartbeat",t=>new Fw(t),"PRIVATE")),kn(nm,Y_,r),kn(nm,Y_,"esm2017"),kn("fire-js","")}Yw("");function Om(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function FE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xw=FE,GE=new js("auth","Firebase",FE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new hh("@firebase/auth");function $w(r,...t){Fc.logLevel<=Vt.WARN&&Fc.warn(`Auth (${so}): ${r}`,...t)}function Vc(r,...t){Fc.logLevel<=Vt.ERROR&&Fc.error(`Auth (${so}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,...t){throw Nm(r,...t)}function fi(r,...t){return Nm(r,...t)}function KE(r,t,n){const s=Object.assign(Object.assign({},Xw()),{[t]:n});return new js("auth","Firebase",s).create(t,{appName:r.name})}function Xi(r){return KE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return GE.create(r,...t)}function pt(r,t,...n){if(!r)throw Nm(t,...n)}function Qi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Vc(t),new Error(t)}function Wi(r,t){r||Qi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ww(){return J_()==="http:"||J_()==="https:"}function J_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ww()||kE()||"connection"in navigator)?navigator.onLine:!0}function Jw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Wi(n>t,"Short delay should be less than long delay!"),this.isMobile=bb()||Ib()}get(){return Zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r,t){Wi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],n1=new Kl(3e4,6e4);function Yr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Xr(r,t,n,s,o={}){return YE(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Gl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return Rb()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&ro(r.emulatorConfig.host)&&(y.credentials="include"),QE.fetch()(await XE(r,r.config.apiHost,n,m),y)})}async function YE(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},t1),t);try{const o=new r1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw wc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw wc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw wc(r,"user-disabled",f);const T=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw KE(r,T,y);Gn(r,T)}}catch(o){if(o instanceof Qn)throw o;Gn(r,"network-request-failed",{message:String(o)})}}async function Ql(r,t,n,s,o={}){const u=await Xr(r,t,n,s,o);return"mfaPendingCredential"in u&&Gn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function XE(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Vm(r.config,o):`${r.config.apiScheme}://${o}`;return e1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function i1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class r1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fi(this.auth,"network-request-failed")),n1.get())})}}function wc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=fi(r,t,s);return o.customData._tokenResponse=n,o}function tv(r){return r!==void 0&&r.enterprise!==void 0}class s1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return i1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function a1(r,t){return Xr(r,"GET","/v2/recaptchaConfig",Yr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(r,t){return Xr(r,"POST","/v1/accounts:delete",t)}async function Gc(r,t){return Xr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function l1(r,t=!1){const n=Fe(r),s=await n.getIdToken(t),o=Mm(s);pt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Cl(Gd(o.auth_time)),issuedAtTime:Cl(Gd(o.iat)),expirationTime:Cl(Gd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Gd(r){return Number(r)*1e3}function Mm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Vc("JWT malformed, contained fewer than 3 sections"),null;try{const o=DE(n);return o?JSON.parse(o):(Vc("Failed to decode base64 JWT payload"),null)}catch(o){return Vc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ev(r){const t=Mm(r);return pt(t,"internal-error"),pt(typeof t.exp<"u","internal-error"),pt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Qn&&u1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function u1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await kl(r,Gc(n,{idToken:s}));pt(o?.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?$E(u.providerUserInfo):[],m=f1(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!m?.length,T=p?y:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new am(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,b)}async function h1(r){const t=Fe(r);await Kc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function f1(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function $E(r){return r.map(t=>{var{providerId:n}=t,s=Om(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,t){const n=await YE(r,{},async()=>{const s=Gl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await XE(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&ro(r.emulatorConfig.host)&&(p.credentials="include"),QE.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m1(r,t){return Xr(r,"POST","/v2/accounts:revokeToken",Yr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){pt(t.idToken,"internal-error"),pt(typeof t.idToken<"u","internal-error"),pt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ev(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){pt(t.length!==0,"internal-error");const n=ev(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await d1(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Qa;return s&&(pt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(pt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(pt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r,t){pt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class jn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Om(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new am(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await kl(this,this.stsTokenManager.getToken(this.auth,t));return pt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return l1(this,t)}reload(){return h1(this)}_assign(t){this!==t&&(pt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new jn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){pt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Kc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(Xi(this.auth));const t=await this.getIdToken();return await kl(this,o1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,p,y,T;const b=(s=n.displayName)!==null&&s!==void 0?s:void 0,R=(o=n.email)!==null&&o!==void 0?o:void 0,L=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,W=(f=n.photoURL)!==null&&f!==void 0?f:void 0,J=(m=n.tenantId)!==null&&m!==void 0?m:void 0,$=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Tt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ht=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ot,emailVerified:wt,isAnonymous:vt,providerData:Pt,stsTokenManager:V}=n;pt(ot&&V,t,"internal-error");const S=Qa.fromJSON(this.name,V);pt(typeof ot=="string",t,"internal-error"),Dr(b,t.name),Dr(R,t.name),pt(typeof wt=="boolean",t,"internal-error"),pt(typeof vt=="boolean",t,"internal-error"),Dr(L,t.name),Dr(W,t.name),Dr(J,t.name),Dr($,t.name),Dr(Tt,t.name),Dr(ht,t.name);const I=new jn({uid:ot,auth:t,email:R,emailVerified:wt,displayName:b,isAnonymous:vt,photoURL:W,phoneNumber:L,tenantId:J,stsTokenManager:S,createdAt:Tt,lastLoginAt:ht});return Pt&&Array.isArray(Pt)&&(I.providerData=Pt.map(N=>Object.assign({},N))),$&&(I._redirectEventId=$),I}static async _fromIdTokenResponse(t,n,s=!1){const o=new Qa;o.updateFromServerResponse(n);const u=new jn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Kc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];pt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?$E(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Qa;m.updateFromIdToken(s);const p=new jn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new am(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Map;function Yi(r){Wi(r instanceof Function,"Expected a class definition");let t=nv.get(r);return t?(Wi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,nv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}WE.type="NONE";const iv=WE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ya{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Mc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Mc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Gc(this.auth,{idToken:t}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,t):null}return jn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ya(Yi(iv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Yi(iv);const f=Mc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const T=await y._get(f);if(T){let b;if(typeof T=="string"){const R=await Gc(t,{idToken:T}).catch(()=>{});if(!R)break;b=await jn._fromGetAccountInfoResponse(t,R,T)}else b=jn._fromJSON(t,T);y!==u&&(m=b),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ya(u,t,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ya(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(e0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ZE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(i0(t))return"Blackberry";if(r0(t))return"Webos";if(JE(t))return"Safari";if((t.includes("chrome/")||t0(t))&&!t.includes("edge/"))return"Chrome";if(n0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function ZE(r=Ze()){return/firefox\//i.test(r)}function JE(r=Ze()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function t0(r=Ze()){return/crios\//i.test(r)}function e0(r=Ze()){return/iemobile/i.test(r)}function n0(r=Ze()){return/android/i.test(r)}function i0(r=Ze()){return/blackberry/i.test(r)}function r0(r=Ze()){return/webos/i.test(r)}function Pm(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function g1(r=Ze()){var t;return Pm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function p1(){return Cb()&&document.documentMode===10}function s0(r=Ze()){return Pm(r)||n0(r)||r0(r)||i0(r)||/windows phone/i.test(r)||e0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(r,t=[]){let n;switch(r){case"Browser":n=rv(Ze());break;case"Worker":n=`${rv(Ze())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${so}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const p=t(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(r,t={}){return Xr(r,"GET","/v2/passwordPolicy",Yr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=6;class E1{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:v1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sv(this),this.idTokenSubscription=new sv(this),this.beforeStateQueue=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ya.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gc(this,{idToken:t}),s=await jn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Vn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===m)&&p?.user&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Kc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Jw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Vn(this.app))return Promise.reject(Xi(this));const n=t?Fe(t):null;return n&&pt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&pt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Vn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _1(this),n=new E1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new js("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await m1(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yi(t)||this._popupRedirectResolver;pt(n,this,"argument-error"),this.redirectPersistenceManager=await Ya.create(this,[Yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return pt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=a0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&$w(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Fs(r){return Fe(r)}class sv{constructor(t){this.auth=t,this.observer=null,this.addObserver=kb(n=>this.observer=n)}get next(){return pt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A1(r){fh=r}function o0(r){return fh.loadJS(r)}function S1(){return fh.recaptchaEnterpriseScript}function b1(){return fh.gapiScript}function w1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class R1{constructor(){this.enterprise=new I1}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class I1{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const C1="recaptcha-enterprise",l0="NO_RECAPTCHA";class D1{constructor(t){this.type=C1,this.auth=Fs(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{a1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new s1(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;tv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(l0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new R1().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&tv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=S1();p.length!==0&&(p+=m),o0(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function av(r,t,n,s=!1,o=!1){const u=new D1(r);let f;if(o)f=l0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function om(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await av(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await av(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(r,t){const n=Hs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Br(u,t??{}))return o;Gn(o,"already-initialized")}return n.initialize({options:t})}function N1(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Yi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function V1(r,t,n){const s=Fs(r);pt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=u0(t),{host:f,port:m}=M1(t),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pt(Br(y,s.config.emulator)&&Br(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,ro(f)?(ME(`${u}//${f}${p}`),PE("Auth",!0)):P1()}function u0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function M1(r){const t=u0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ov(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:ov(f)}}}function ov(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function P1(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qi("not implemented")}_getIdTokenResponse(t){return Qi("not implemented")}_linkToIdToken(t,n){return Qi("not implemented")}_getReauthenticationResolver(t){return Qi("not implemented")}}async function k1(r,t){return Xr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(r,t){return Ql(r,"POST","/v1/accounts:signInWithPassword",Yr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(r,t){return Ql(r,"POST","/v1/accounts:signInWithEmailLink",Yr(r,t))}async function U1(r,t){return Ql(r,"POST","/v1/accounts:signInWithEmailLink",Yr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends km{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new xl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new xl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return om(t,n,"signInWithPassword",x1);case"emailLink":return L1(t,{email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return om(t,s,"signUpPassword",k1);case"emailLink":return U1(t,{idToken:n,email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(r,t){return Ql(r,"POST","/v1/accounts:signInWithIdp",Yr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="http://localhost";class xs extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Om(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new xs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Xa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Xa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Xa(t,n)}buildRequest(){const t={requestUri:z1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function q1(r){const t=Al(Sl(r)).link,n=t?Al(Sl(t)).deep_link_id:null,s=Al(Sl(r)).deep_link_id;return(s?Al(Sl(s)).link:null)||s||n||t||r}class xm{constructor(t){var n,s,o,u,f,m;const p=Al(Sl(t)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,T=(s=p.oobCode)!==null&&s!==void 0?s:null,b=B1((o=p.mode)!==null&&o!==void 0?o:null);pt(y&&T&&b,"argument-error"),this.apiKey=y,this.operation=b,this.code=T,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=q1(t);try{return new xm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(t,n){return xl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=xm.parseLink(n);return pt(s,"argument-error"),xl._fromEmailAndCode(t,s.code,s.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends c0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Yl{constructor(){super("facebook.com")}static credential(t){return xs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Yl{constructor(){super("github.com")}static credential(t){return xs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Yl{constructor(){super("twitter.com")}static credential(t,n){return xs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(r,t){return Ql(r,"POST","/v1/accounts:signUp",Yr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await jn._fromIdTokenResponse(t,s,o),f=lv(s);return new Ls({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=lv(s);return new Ls({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function lv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Qn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Qc(t,n,s,o)}}function h0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Qc._fromErrorAndOperation(r,u,t,s):u})}async function H1(r,t,n=!1){const s=await kl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ls._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(r,t,n=!1){const{auth:s}=r;if(Vn(s.app))return Promise.reject(Xi(s));const o="reauthenticate";try{const u=await kl(r,h0(s,o,t,r),n);pt(u.idToken,s,"internal-error");const f=Mm(u.idToken);pt(f,s,"internal-error");const{sub:m}=f;return pt(r.uid===m,s,"user-mismatch"),Ls._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Gn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(r,t,n=!1){if(Vn(r.app))return Promise.reject(Xi(r));const s="signIn",o=await h0(r,s,t),u=await Ls._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function G1(r,t){return f0(Fs(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(r){const t=Fs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function K1(r,t,n){if(Vn(r.app))return Promise.reject(Xi(r));const s=Fs(r),f=await om(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",j1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&d0(r),p}),m=await Ls._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function Q1(r,t,n){return Vn(r.app)?Promise.reject(Xi(r)):G1(Fe(r),ao.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&d0(r),s})}function Y1(r,t,n,s){return Fe(r).onIdTokenChanged(t,n,s)}function X1(r,t,n){return Fe(r).beforeAuthStateChanged(t,n)}function $1(r,t,n,s){return Fe(r).onAuthStateChanged(t,n,s)}function W1(r){return Fe(r).signOut()}const Yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=1e3,J1=10;class g0 extends m0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);p1()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,J1):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}g0.type="LOCAL";const tR=g0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends m0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}p0.type="SESSION";const y0=p0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new dh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await eR(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Lm("",20);o.port1.start();const T=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const R=b;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(T),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function iR(r){di().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function rR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sR(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function aR(){return _0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="firebaseLocalStorageDb",oR=1,Xc="firebaseLocalStorage",E0="fbase_key";class Xl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(r,t){return r.transaction([Xc],t?"readwrite":"readonly").objectStore(Xc)}function lR(){const r=indexedDB.deleteDatabase(v0);return new Xl(r).toPromise()}function lm(){const r=indexedDB.open(v0,oR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Xc,{keyPath:E0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Xc)?t(s):(s.close(),await lR(),t(await lm()))})})}async function uv(r,t,n){const s=mh(r,!0).put({[E0]:t,value:n});return new Xl(s).toPromise()}async function uR(r,t){const n=mh(r,!1).get(t),s=await new Xl(n).toPromise();return s===void 0?null:s.value}function cv(r,t){const n=mh(r,!0).delete(t);return new Xl(n).toPromise()}const cR=800,hR=3;class T0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>hR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(aR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new nR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await lm();return await uv(t,Yc,"1"),await cv(t,Yc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>uv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>uR(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>cv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=mh(o,!1).getAll();return new Xl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T0.type="LOCAL";const fR=T0;new Kl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(r,t){return t?Yi(t):(pt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends km{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Xa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Xa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mR(r){return f0(r.auth,new Um(r),r.bypassAuthState)}function gR(r){const{auth:t,user:n}=r;return pt(n,t,"internal-error"),F1(n,new Um(r),r.bypassAuthState)}async function pR(r){const{auth:t,user:n}=r;return pt(n,t,"internal-error"),H1(n,new Um(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return gR;default:Gn(this.auth,"internal-error")}}resolve(t){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=new Kl(2e3,1e4);class Ka extends A0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ka.currentPopupAction&&Ka.currentPopupAction.cancel(),Ka.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return pt(t,this.auth,"internal-error"),t}async onExecution(){Wi(this.filter.length===1,"Popup operations only handle one event");const t=Lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ka.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yR.get())};t()}}Ka.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="pendingRedirect",Pc=new Map;class vR extends A0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Pc.get(this.auth._key());if(!t){try{const s=await ER(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Pc.set(this.auth._key(),t)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ER(r,t){const n=SR(t),s=AR(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function TR(r,t){Pc.set(r._key(),t)}function AR(r){return Yi(r._redirectPersistence)}function SR(r){return Mc(_R,r.config.apiKey,r.name)}async function bR(r,t,n=!1){if(Vn(r.app))return Promise.reject(Xi(r));const s=Fs(r),o=dR(s,t),f=await new vR(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=10*60*1e3;class RR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!IR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!S0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wR&&this.cachedEventUids.clear(),this.cachedEventUids.has(hv(t))}saveEventToCache(t){this.cachedEventUids.add(hv(t)),this.lastProcessedEventTime=Date.now()}}function hv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function S0({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function IR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(r,t={}){return Xr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OR=/^https?/;async function NR(r){if(r.config.emulator)return;const{authorizedDomains:t}=await CR(r);for(const n of t)try{if(VR(n))return}catch{}Gn(r,"unauthorized-domain")}function VR(r){const t=sm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!OR.test(n))return!1;if(DR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new Kl(3e4,6e4);function fv(){const r=di().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function PR(r){return new Promise((t,n)=>{var s,o,u;function f(){fv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fv(),n(fi(r,"network-request-failed"))},timeout:MR.get()})}if(!((o=(s=di().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=di().gapi)===null||u===void 0)&&u.load)f();else{const m=w1("iframefcb");return di()[m]=()=>{gapi.load?f():n(fi(r,"network-request-failed"))},o0(`${b1()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw kc=null,t})}let kc=null;function kR(r){return kc=kc||PR(r),kc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Kl(5e3,15e3),LR="__/auth/iframe",UR="emulator/auth/iframe",zR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(r){const t=r.config;pt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Vm(t,UR):`https://${r.config.authDomain}/${LR}`,s={apiKey:t.apiKey,appName:r.name,v:so},o=BR.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Gl(s).slice(1)}`}async function jR(r){const t=await kR(r),n=di().gapi;return pt(n,r,"internal-error"),t.open({where:document.body,url:qR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=fi(r,"network-request-failed"),m=di().setTimeout(()=>{u(f)},xR.get());function p(){di().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FR=500,GR=600,KR="_blank",QR="http://localhost";class dv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YR(r,t,n,s=FR,o=GR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},HR),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Ze().toLowerCase();n&&(m=t0(y)?KR:n),ZE(y)&&(t=t||QR,p.scrollbars="yes");const T=Object.entries(p).reduce((R,[L,W])=>`${R}${L}=${W},`,"");if(g1(y)&&m!=="_self")return XR(t||"",m),new dv(null);const b=window.open(t||"",m,T);pt(b,r,"popup-blocked");try{b.focus()}catch{}return new dv(b)}function XR(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="__/auth/handler",WR="emulator/auth/handler",ZR=encodeURIComponent("fac");async function mv(r,t,n,s,o,u){pt(r.config.authDomain,r,"auth-domain-config-required"),pt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:so,eventId:o};if(t instanceof c0){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Pb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,b]of Object.entries({}))f[T]=b}if(t instanceof Yl){const T=t.getScopes().filter(b=>b!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const p=await r._getAppCheckToken(),y=p?`#${ZR}=${encodeURIComponent(p)}`:"";return`${JR(r)}?${Gl(m).slice(1)}${y}`}function JR({config:r}){return r.emulator?Vm(r,WR):`https://${r.authDomain}/${$R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y0,this._completeRedirectFn=bR,this._overrideRedirectResult=TR}async _openPopup(t,n,s,o){var u;Wi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await mv(t,n,s,sm(),o);return YR(t,f,Lm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await mv(t,n,s,sm(),o);return iR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Wi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await jR(t),s=new RR(t);return n.register("authEvent",o=>(pt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Kd,{type:Kd},o=>{var u;const f=(u=o?.[0])===null||u===void 0?void 0:u[Kd];f!==void 0&&n(!!f),Gn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return s0()||JE()||Pm()}}const eI=tI;var gv="@firebase/auth",pv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rI(r){vi(new Fn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;pt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a0(r)},y=new T1(s,o,u,p);return N1(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),vi(new Fn("auth-internal",t=>{const n=Fs(t.getProvider("auth").getImmediate());return(s=>new nI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(gv,pv,iI(r)),kn(gv,pv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=5*60,aI=VE("authIdTokenMaxAge")||sI;let yv=null;const oI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>aI)return;const o=n?.token;yv!==o&&(yv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lI(r=Dm()){const t=Hs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=O1(r,{popupRedirectResolver:eI,persistence:[fR,tR,y0]}),s=VE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=oI(u.toString());X1(n,f,()=>f(n.currentUser)),Y1(n,m=>f(m))}}const o=OE("auth");return o&&V1(n,`http://${o}`),n}function uI(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}A1({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=fi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",uI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rI("Browser");var cI="firebase",hI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(cI,hI,"app");const b0="@firebase/installations",zm="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=1e4,R0=`w:${zm}`,I0="FIS_v2",fI="https://firebaseinstallations.googleapis.com/v1",dI=60*60*1e3,mI="installations",gI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new js(mI,gI,pI);function C0(r){return r instanceof Qn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0({projectId:r}){return`${fI}/projects/${r}/installations`}function O0(r){return{token:r.token,requestStatus:2,expiresIn:_I(r.expiresIn),creationTime:Date.now()}}async function N0(r,t){const s=(await t.json()).error;return Us.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function V0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function yI(r,{refreshToken:t}){const n=V0(r);return n.append("Authorization",vI(t)),n}async function M0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function _I(r){return Number(r.replace("s","000"))}function vI(r){return`${I0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=D0(r),o=V0(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:I0,appId:r.appId,sdkVersion:R0},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await M0(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:O0(y.authToken)}}else throw await N0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=/^[cdef][\w-]{21}$/,um="";function SI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=bI(r);return AI.test(n)?n:um}catch{return um}}function bI(r){return TI(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Map;function x0(r,t){const n=gh(r);L0(n,t),wI(n,t)}function L0(r,t){const n=k0.get(r);if(n)for(const s of n)s(t)}function wI(r,t){const n=RI();n&&n.postMessage({key:r,fid:t}),II()}let Ps=null;function RI(){return!Ps&&"BroadcastChannel"in self&&(Ps=new BroadcastChannel("[Firebase] FID Change"),Ps.onmessage=r=>{L0(r.data.key,r.data.fid)}),Ps}function II(){k0.size===0&&Ps&&(Ps.close(),Ps=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="firebase-installations-database",DI=1,zs="firebase-installations-store";let Qd=null;function Bm(){return Qd||(Qd=BE(CI,DI,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(zs)}}})),Qd}async function $c(r,t){const n=gh(r),o=(await Bm()).transaction(zs,"readwrite"),u=o.objectStore(zs),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&x0(r,t.fid),t}async function U0(r){const t=gh(r),s=(await Bm()).transaction(zs,"readwrite");await s.objectStore(zs).delete(t),await s.done}async function ph(r,t){const n=gh(r),o=(await Bm()).transaction(zs,"readwrite"),u=o.objectStore(zs),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&x0(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(r){let t;const n=await ph(r.appConfig,s=>{const o=OI(s),u=NI(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===um?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function OI(r){const t=r||{fid:SI(),registrationStatus:0};return z0(t)}function NI(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Us.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=VI(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:MI(r)}:{installationEntry:t}}async function VI(r,t){try{const n=await EI(r,t);return $c(r.appConfig,n)}catch(n){throw C0(n)&&n.customData.serverCode===409?await U0(r.appConfig):await $c(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function MI(r){let t=await _v(r.appConfig);for(;t.registrationStatus===1;)await P0(100),t=await _v(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await qm(r);return s||n}return t}function _v(r){return ph(r,t=>{if(!t)throw Us.create("installation-not-found");return z0(t)})}function z0(r){return PI(r)?{fid:r.fid,registrationStatus:0}:r}function PI(r){return r.registrationStatus===1&&r.registrationTime+w0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI({appConfig:r,heartbeatServiceProvider:t},n){const s=xI(r,n),o=yI(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:R0,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await M0(()=>fetch(s,m));if(p.ok){const y=await p.json();return O0(y)}else throw await N0("Generate Auth Token",p)}function xI(r,{fid:t}){return`${D0(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(r,t=!1){let n;const s=await ph(r.appConfig,u=>{if(!B0(u))throw Us.create("not-registered");const f=u.authToken;if(!t&&zI(f))return u;if(f.requestStatus===1)return n=LI(r,t),u;{if(!navigator.onLine)throw Us.create("app-offline");const m=qI(u);return n=UI(r,m),m}});return n?await n:s.authToken}async function LI(r,t){let n=await vv(r.appConfig);for(;n.authToken.requestStatus===1;)await P0(100),n=await vv(r.appConfig);const s=n.authToken;return s.requestStatus===0?jm(r,t):s}function vv(r){return ph(r,t=>{if(!B0(t))throw Us.create("not-registered");const n=t.authToken;return jI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function UI(r,t){try{const n=await kI(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await $c(r.appConfig,s),n}catch(n){if(C0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await U0(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await $c(r.appConfig,s)}throw n}}function B0(r){return r!==void 0&&r.registrationStatus===2}function zI(r){return r.requestStatus===2&&!BI(r)}function BI(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+dI}function qI(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function jI(r){return r.requestStatus===1&&r.requestTime+w0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(r){const t=r,{installationEntry:n,registrationPromise:s}=await qm(t);return s?s.catch(console.error):jm(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(r,t=!1){const n=r;return await GI(n),(await jm(n,t)).token}async function GI(r){const{registrationPromise:t}=await qm(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(r){if(!r||!r.options)throw Yd("App Configuration");if(!r.name)throw Yd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Yd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Yd(r){return Us.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="installations",QI="installations-internal",YI=r=>{const t=r.getProvider("app").getImmediate(),n=KI(t),s=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},XI=r=>{const t=r.getProvider("app").getImmediate(),n=Hs(t,q0).getImmediate();return{getId:()=>HI(n),getToken:o=>FI(n,o)}};function $I(){vi(new Fn(q0,YI,"PUBLIC")),vi(new Fn(QI,XI,"PRIVATE"))}$I();kn(b0,zm);kn(b0,zm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="analytics",WI="firebase_id",ZI="origin",JI=60*1e3,tC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new hh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_n=new js("analytics","Analytics",eC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(r){if(!r.startsWith(Hm)){const t=_n.create("invalid-gtag-resource",{gtagURL:r});return ln.warn(t.message),""}return r}function j0(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function iC(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function rC(r,t){const n=iC("firebase-js-sdk-policy",{createScriptURL:nC}),s=document.createElement("script"),o=`${Hm}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function sC(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function aC(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await j0(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){ln.error(m)}r("config",o,u)}async function oC(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await j0(n);for(const p of f){const y=m.find(b=>b.measurementId===p),T=y&&t[y.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){ln.error(u)}}function lC(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await oC(r,t,n,m,p)}else if(u==="config"){const[m,p]=f;await aC(r,t,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){ln.error(m)}}return o}function uC(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=lC(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function cC(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Hm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=30,fC=1e3;class dC{constructor(t={},n=fC){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const H0=new dC;function mC(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function gC(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:mC(s)},u=tC.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw _n.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function pC(r,t=H0,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw _n.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw _n.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new vC;return setTimeout(async()=>{m.abort()},JI),F0({appId:s,apiKey:o,measurementId:u},f,m,t)}async function F0(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=H0){var u;const{appId:f,measurementId:m}=r;try{await yC(s,t)}catch(p){if(m)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:m};throw p}try{const p=await gC(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!_C(y)){if(o.deleteThrottleMetadata(f),m)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:m};throw p}const T=Number((u=y?.customData)===null||u===void 0?void 0:u.httpStatus)===503?F_(n,o.intervalMillis,hC):F_(n,o.intervalMillis),b={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return o.setThrottleMetadata(f,b),ln.debug(`Calling attemptFetch again in ${T} millis`),F0(r,b,s,o)}}function yC(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(_n.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function _C(r){if(!(r instanceof Qn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class vC{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function EC(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(){if(xE())try{await LE()}catch(r){return ln.warn(_n.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return ln.warn(_n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AC(r,t,n,s,o,u,f){var m;const p=pC(r);p.then(L=>{n[L.measurementId]=L.appId,r.options.measurementId&&L.measurementId!==r.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>ln.error(L)),t.push(p);const y=TC().then(L=>{if(L)return s.getId()}),[T,b]=await Promise.all([p,y]);cC(u)||rC(u,T.measurementId),o("js",new Date);const R=(m=f?.config)!==null&&m!==void 0?m:{};return R[ZI]="firebase",R.update=!0,b!=null&&(R[WI]=b),o("config",T.measurementId,R),T.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(t){this.app=t}_delete(){return delete Dl[this.app.options.appId],Promise.resolve()}}let Dl={},Ev=[];const Tv={};let Xd="dataLayer",bC="gtag",Av,G0,Sv=!1;function wC(){const r=[];if(kE()&&r.push("This is a browser extension environment."),Ob()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=_n.create("invalid-analytics-context",{errorInfo:t});ln.warn(n.message)}}function RC(r,t,n){wC();const s=r.options.appId;if(!s)throw _n.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _n.create("no-api-key");if(Dl[s]!=null)throw _n.create("already-exists",{id:s});if(!Sv){sC(Xd);const{wrappedGtag:u,gtagCore:f}=uC(Dl,Ev,Tv,Xd,bC);G0=u,Av=f,Sv=!0}return Dl[s]=AC(r,Ev,Tv,t,Av,Xd,n),new SC(r)}function IC(r=Dm()){r=Fe(r);const t=Hs(r,Wc);return t.isInitialized()?t.getImmediate():CC(r)}function CC(r,t={}){const n=Hs(r,Wc);if(n.isInitialized()){const o=n.getImmediate();if(Br(t,n.getOptions()))return o;throw _n.create("already-initialized")}return n.initialize({options:t})}function DC(r,t,n,s){r=Fe(r),EC(G0,Dl[r.app.options.appId],t,n,s).catch(o=>ln.error(o))}const bv="@firebase/analytics",wv="0.10.17";function OC(){vi(new Fn(Wc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return RC(s,o,n)},"PUBLIC")),vi(new Fn("analytics-internal",r,"PRIVATE")),kn(bv,wv),kn(bv,wv,"esm2017");function r(t){try{const n=t.getProvider(Wc).getImmediate();return{logEvent:(s,o,u)=>DC(n,s,o,u)}}catch(n){throw _n.create("interop-component-reg-failed",{reason:n})}}}OC();var Rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,K0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,S){function I(){}I.prototype=S.prototype,V.D=S.prototype,V.prototype=new I,V.prototype.constructor=V,V.C=function(N,M,k){for(var C=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)C[xe-2]=arguments[xe];return S.prototype[M].apply(N,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,S,I){I||(I=0);var N=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)N[M]=S.charCodeAt(I++)|S.charCodeAt(I++)<<8|S.charCodeAt(I++)<<16|S.charCodeAt(I++)<<24;else for(M=0;16>M;++M)N[M]=S[I++]|S[I++]<<8|S[I++]<<16|S[I++]<<24;S=V.g[0],I=V.g[1],M=V.g[2];var k=V.g[3],C=S+(k^I&(M^k))+N[0]+3614090360&4294967295;S=I+(C<<7&4294967295|C>>>25),C=k+(M^S&(I^M))+N[1]+3905402710&4294967295,k=S+(C<<12&4294967295|C>>>20),C=M+(I^k&(S^I))+N[2]+606105819&4294967295,M=k+(C<<17&4294967295|C>>>15),C=I+(S^M&(k^S))+N[3]+3250441966&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(k^I&(M^k))+N[4]+4118548399&4294967295,S=I+(C<<7&4294967295|C>>>25),C=k+(M^S&(I^M))+N[5]+1200080426&4294967295,k=S+(C<<12&4294967295|C>>>20),C=M+(I^k&(S^I))+N[6]+2821735955&4294967295,M=k+(C<<17&4294967295|C>>>15),C=I+(S^M&(k^S))+N[7]+4249261313&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(k^I&(M^k))+N[8]+1770035416&4294967295,S=I+(C<<7&4294967295|C>>>25),C=k+(M^S&(I^M))+N[9]+2336552879&4294967295,k=S+(C<<12&4294967295|C>>>20),C=M+(I^k&(S^I))+N[10]+4294925233&4294967295,M=k+(C<<17&4294967295|C>>>15),C=I+(S^M&(k^S))+N[11]+2304563134&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(k^I&(M^k))+N[12]+1804603682&4294967295,S=I+(C<<7&4294967295|C>>>25),C=k+(M^S&(I^M))+N[13]+4254626195&4294967295,k=S+(C<<12&4294967295|C>>>20),C=M+(I^k&(S^I))+N[14]+2792965006&4294967295,M=k+(C<<17&4294967295|C>>>15),C=I+(S^M&(k^S))+N[15]+1236535329&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(M^k&(I^M))+N[1]+4129170786&4294967295,S=I+(C<<5&4294967295|C>>>27),C=k+(I^M&(S^I))+N[6]+3225465664&4294967295,k=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(k^S))+N[11]+643717713&4294967295,M=k+(C<<14&4294967295|C>>>18),C=I+(k^S&(M^k))+N[0]+3921069994&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^k&(I^M))+N[5]+3593408605&4294967295,S=I+(C<<5&4294967295|C>>>27),C=k+(I^M&(S^I))+N[10]+38016083&4294967295,k=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(k^S))+N[15]+3634488961&4294967295,M=k+(C<<14&4294967295|C>>>18),C=I+(k^S&(M^k))+N[4]+3889429448&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^k&(I^M))+N[9]+568446438&4294967295,S=I+(C<<5&4294967295|C>>>27),C=k+(I^M&(S^I))+N[14]+3275163606&4294967295,k=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(k^S))+N[3]+4107603335&4294967295,M=k+(C<<14&4294967295|C>>>18),C=I+(k^S&(M^k))+N[8]+1163531501&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^k&(I^M))+N[13]+2850285829&4294967295,S=I+(C<<5&4294967295|C>>>27),C=k+(I^M&(S^I))+N[2]+4243563512&4294967295,k=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(k^S))+N[7]+1735328473&4294967295,M=k+(C<<14&4294967295|C>>>18),C=I+(k^S&(M^k))+N[12]+2368359562&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(I^M^k)+N[5]+4294588738&4294967295,S=I+(C<<4&4294967295|C>>>28),C=k+(S^I^M)+N[8]+2272392833&4294967295,k=S+(C<<11&4294967295|C>>>21),C=M+(k^S^I)+N[11]+1839030562&4294967295,M=k+(C<<16&4294967295|C>>>16),C=I+(M^k^S)+N[14]+4259657740&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^k)+N[1]+2763975236&4294967295,S=I+(C<<4&4294967295|C>>>28),C=k+(S^I^M)+N[4]+1272893353&4294967295,k=S+(C<<11&4294967295|C>>>21),C=M+(k^S^I)+N[7]+4139469664&4294967295,M=k+(C<<16&4294967295|C>>>16),C=I+(M^k^S)+N[10]+3200236656&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^k)+N[13]+681279174&4294967295,S=I+(C<<4&4294967295|C>>>28),C=k+(S^I^M)+N[0]+3936430074&4294967295,k=S+(C<<11&4294967295|C>>>21),C=M+(k^S^I)+N[3]+3572445317&4294967295,M=k+(C<<16&4294967295|C>>>16),C=I+(M^k^S)+N[6]+76029189&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^k)+N[9]+3654602809&4294967295,S=I+(C<<4&4294967295|C>>>28),C=k+(S^I^M)+N[12]+3873151461&4294967295,k=S+(C<<11&4294967295|C>>>21),C=M+(k^S^I)+N[15]+530742520&4294967295,M=k+(C<<16&4294967295|C>>>16),C=I+(M^k^S)+N[2]+3299628645&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(M^(I|~k))+N[0]+4096336452&4294967295,S=I+(C<<6&4294967295|C>>>26),C=k+(I^(S|~M))+N[7]+1126891415&4294967295,k=S+(C<<10&4294967295|C>>>22),C=M+(S^(k|~I))+N[14]+2878612391&4294967295,M=k+(C<<15&4294967295|C>>>17),C=I+(k^(M|~S))+N[5]+4237533241&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~k))+N[12]+1700485571&4294967295,S=I+(C<<6&4294967295|C>>>26),C=k+(I^(S|~M))+N[3]+2399980690&4294967295,k=S+(C<<10&4294967295|C>>>22),C=M+(S^(k|~I))+N[10]+4293915773&4294967295,M=k+(C<<15&4294967295|C>>>17),C=I+(k^(M|~S))+N[1]+2240044497&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~k))+N[8]+1873313359&4294967295,S=I+(C<<6&4294967295|C>>>26),C=k+(I^(S|~M))+N[15]+4264355552&4294967295,k=S+(C<<10&4294967295|C>>>22),C=M+(S^(k|~I))+N[6]+2734768916&4294967295,M=k+(C<<15&4294967295|C>>>17),C=I+(k^(M|~S))+N[13]+1309151649&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~k))+N[4]+4149444226&4294967295,S=I+(C<<6&4294967295|C>>>26),C=k+(I^(S|~M))+N[11]+3174756917&4294967295,k=S+(C<<10&4294967295|C>>>22),C=M+(S^(k|~I))+N[2]+718787259&4294967295,M=k+(C<<15&4294967295|C>>>17),C=I+(k^(M|~S))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+k&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var I=S-this.blockSize,N=this.B,M=this.h,k=0;k<S;){if(M==0)for(;k<=I;)o(this,V,k),k+=this.blockSize;if(typeof V=="string"){for(;k<S;)if(N[M++]=V.charCodeAt(k++),M==this.blockSize){o(this,N),M=0;break}}else for(;k<S;)if(N[M++]=V[k++],M==this.blockSize){o(this,N),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var I=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=I&255,I/=256;for(this.u(V),V=Array(16),S=I=0;4>S;++S)for(var N=0;32>N;N+=8)V[I++]=this.g[S]>>>N&255;return V};function u(V,S){var I=m;return Object.prototype.hasOwnProperty.call(I,V)?I[V]:I[V]=S(V)}function f(V,S){this.h=S;for(var I=[],N=!0,M=V.length-1;0<=M;M--){var k=V[M]|0;N&&k==S||(I[M]=k,N=!1)}this.g=I}var m={};function p(V){return-128<=V&&128>V?u(V,function(S){return new f([S|0],0>S?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return b;if(0>V)return $(y(-V));for(var S=[],I=1,N=0;V>=I;N++)S[N]=V/I|0,I*=4294967296;return new f(S,0)}function T(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return $(T(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(S,8)),N=b,M=0;M<V.length;M+=8){var k=Math.min(8,V.length-M),C=parseInt(V.substring(M,M+k),S);8>k?(k=y(Math.pow(S,k)),N=N.j(k).add(y(C))):(N=N.j(I),N=N.add(y(C)))}return N}var b=p(0),R=p(1),L=p(16777216);r=f.prototype,r.m=function(){if(J(this))return-$(this).m();for(var V=0,S=1,I=0;I<this.g.length;I++){var N=this.i(I);V+=(0<=N?N:4294967296+N)*S,S*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(W(this))return"0";if(J(this))return"-"+$(this).toString(V);for(var S=y(Math.pow(V,6)),I=this,N="";;){var M=wt(I,S).g;I=Tt(I,M.j(S));var k=((0<I.g.length?I.g[0]:I.h)>>>0).toString(V);if(I=M,W(I))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function W(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function J(V){return V.h==-1}r.l=function(V){return V=Tt(this,V),J(V)?-1:W(V)?0:1};function $(V){for(var S=V.g.length,I=[],N=0;N<S;N++)I[N]=~V.g[N];return new f(I,~V.h).add(R)}r.abs=function(){return J(this)?$(this):this},r.add=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0,M=0;M<=S;M++){var k=N+(this.i(M)&65535)+(V.i(M)&65535),C=(k>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);N=C>>>16,k&=65535,C&=65535,I[M]=C<<16|k}return new f(I,I[I.length-1]&-2147483648?-1:0)};function Tt(V,S){return V.add($(S))}r.j=function(V){if(W(this)||W(V))return b;if(J(this))return J(V)?$(this).j($(V)):$($(this).j(V));if(J(V))return $(this.j($(V)));if(0>this.l(L)&&0>V.l(L))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,I=[],N=0;N<2*S;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<V.g.length;M++){var k=this.i(N)>>>16,C=this.i(N)&65535,xe=V.i(M)>>>16,ae=V.i(M)&65535;I[2*N+2*M]+=C*ae,ht(I,2*N+2*M),I[2*N+2*M+1]+=k*ae,ht(I,2*N+2*M+1),I[2*N+2*M+1]+=C*xe,ht(I,2*N+2*M+1),I[2*N+2*M+2]+=k*xe,ht(I,2*N+2*M+2)}for(N=0;N<S;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=S;N<2*S;N++)I[N]=0;return new f(I,0)};function ht(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function ot(V,S){this.g=V,this.h=S}function wt(V,S){if(W(S))throw Error("division by zero");if(W(V))return new ot(b,b);if(J(V))return S=wt($(V),S),new ot($(S.g),$(S.h));if(J(S))return S=wt(V,$(S)),new ot($(S.g),S.h);if(30<V.g.length){if(J(V)||J(S))throw Error("slowDivide_ only works with positive integers.");for(var I=R,N=S;0>=N.l(V);)I=vt(I),N=vt(N);var M=Pt(I,1),k=Pt(N,1);for(N=Pt(N,2),I=Pt(I,2);!W(N);){var C=k.add(N);0>=C.l(V)&&(M=M.add(I),k=C),N=Pt(N,1),I=Pt(I,1)}return S=Tt(V,M.j(S)),new ot(M,S)}for(M=b;0<=V.l(S);){for(I=Math.max(1,Math.floor(V.m()/S.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=y(I),C=k.j(S);J(C)||0<C.l(V);)I-=N,k=y(I),C=k.j(S);W(k)&&(k=R),M=M.add(k),V=Tt(V,C)}return new ot(M,V)}r.A=function(V){return wt(this,V).h},r.and=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0;N<S;N++)I[N]=this.i(N)&V.i(N);return new f(I,this.h&V.h)},r.or=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0;N<S;N++)I[N]=this.i(N)|V.i(N);return new f(I,this.h|V.h)},r.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0;N<S;N++)I[N]=this.i(N)^V.i(N);return new f(I,this.h^V.h)};function vt(V){for(var S=V.g.length+1,I=[],N=0;N<S;N++)I[N]=V.i(N)<<1|V.i(N-1)>>>31;return new f(I,V.h)}function Pt(V,S){var I=S>>5;S%=32;for(var N=V.g.length-I,M=[],k=0;k<N;k++)M[k]=0<S?V.i(k+I)>>>S|V.i(k+I+1)<<32-S:V.i(k+I);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,K0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Lr=f}).apply(typeof Rv<"u"?Rv:typeof self<"u"?self:typeof window<"u"?window:{});var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q0,bl,Y0,xc,cm,X0,$0,W0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rc=="object"&&Rc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var x=c[A];if(!(x in _))break t;_=_[x]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,x={next:function(){if(!A&&_<c.length){var H=_++;return{value:g(H,c[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function T(c,g,_){return c.call.apply(c.bind,arguments)}function b(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,A),c.apply(g,x)}}return function(){return c.apply(g,arguments)}}function R(c,g,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,R.apply(null,arguments)}function L(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function W(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,x,H){for(var et=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)et[kt-2]=arguments[kt];return g.prototype[x].apply(A,et)}}function J(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function $(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const x=c.length||0,H=A.length||0;c.length=x+H;for(let et=0;et<H;et++)c[x+et]=A[et]}else c.push(A)}}class Tt{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ht(c){return/^[\s\xa0]*$/.test(c)}function ot(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function wt(c){return wt[" "](c),c}wt[" "]=function(){};var vt=ot().indexOf("Gecko")!=-1&&!(ot().toLowerCase().indexOf("webkit")!=-1&&ot().indexOf("Edge")==-1)&&!(ot().indexOf("Trident")!=-1||ot().indexOf("MSIE")!=-1)&&ot().indexOf("Edge")==-1;function Pt(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function V(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let _,A;for(let x=1;x<arguments.length;x++){A=arguments[x];for(_ in A)c[_]=A[_];for(let H=0;H<I.length;H++)_=I[H],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function M(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function k(c){m.setTimeout(()=>{throw c},0)}function C(){var c=Bt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class xe{constructor(){this.h=this.g=null}add(g,_){const A=ae.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ae=new Tt(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ut=!1,Bt=new xe,D=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(Z)}};var Z=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){k(_)}var g=ae;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ut=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function Ct(c,g){if(tt.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(vt){t:{try{wt(g.nodeName);var x=!0;break t}catch{}x=!1}x||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Et[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}W(Ct,tt);var Et={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function Yn(c,g,_,A,x){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=x,this.key=++Zt,this.da=this.fa=!1}function tr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ti(c){this.src=c,this.g={},this.h=0}Ti.prototype.add=function(c,g,_,A,x){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var et=Wr(c,g,A,x);return-1<et?(g=c[et],_||(g.fa=!1)):(g=new Yn(g,this.src,H,!!A,x),g.fa=_,c.push(g)),g};function $r(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],x=Array.prototype.indexOf.call(A,g,void 0),H;(H=0<=x)&&Array.prototype.splice.call(A,x,1),H&&(tr(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Wr(c,g,_,A){for(var x=0;x<c.length;++x){var H=c[x];if(!H.da&&H.listener==g&&H.capture==!!_&&H.ha==A)return x}return-1}var Zr="closure_lm_"+(1e6*Math.random()|0),fo={};function eu(c,g,_,A,x){if(Array.isArray(g)){for(var H=0;H<g.length;H++)eu(c,g[H],_,A,x);return null}return _=nu(_),c&&c[Ce]?c.K(g,_,y(A)?!!A.capture:!1,x):vn(c,g,_,!1,A,x)}function vn(c,g,_,A,x,H){if(!g)throw Error("Invalid event type");var et=y(x)?!!x.capture:!!x,kt=Ws(c);if(kt||(c[Zr]=kt=new Ti(c)),_=kt.add(g,_,A,et,H),_.proxy)return _;if(A=Mh(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ft||(x=et),x===void 0&&(x=!1),c.addEventListener(g.toString(),A,x);else if(c.attachEvent)c.attachEvent(Jr(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Mh(){function c(_){return g.call(c.src,c.listener,_)}const g=Ph;return c}function mo(c,g,_,A,x){if(Array.isArray(g))for(var H=0;H<g.length;H++)mo(c,g[H],_,A,x);else A=y(A)?!!A.capture:!!A,_=nu(_),c&&c[Ce]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],_=Wr(H,_,A,x),-1<_&&(tr(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=Ws(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Wr(g,_,A,x)),(_=-1<c?g[c]:null)&&$s(_))}function $s(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Ce])$r(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Jr(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Ws(g))?($r(_,c),_.h==0&&(_.src=null,g[Zr]=null)):tr(c)}}}function Jr(c){return c in fo?fo[c]:fo[c]="on"+c}function Ph(c,g){if(c.da)c=!0;else{g=new Ct(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&$s(c),c=_.call(A,g)}return c}function Ws(c){return c=c[Zr],c instanceof Ti?c:null}var go="__closure_events_fn_"+(1e9*Math.random()>>>0);function nu(c){return typeof c=="function"?c:(c[go]||(c[go]=function(g){return c.handleEvent(g)}),c[go])}function oe(){it.call(this),this.i=new Ti(this),this.M=this,this.F=null}W(oe,it),oe.prototype[Ce]=!0,oe.prototype.removeEventListener=function(c,g,_,A){mo(this,c,g,_,A)};function Ft(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new tt(g,c);else if(g instanceof tt)g.target=g.target||c;else{var x=g;g=new tt(A,c),N(g,x)}if(x=!0,_)for(var H=_.length-1;0<=H;H--){var et=g.g=_[H];x=un(et,A,!0,g)&&x}if(et=g.g=c,x=un(et,A,!0,g)&&x,x=un(et,A,!1,g)&&x,_)for(H=0;H<_.length;H++)et=g.g=_[H],x=un(et,A,!1,g)&&x}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)tr(_[A]);delete c.g[g],c.h--}}this.F=null},oe.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},oe.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function un(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var x=!0,H=0;H<g.length;++H){var et=g[H];if(et&&!et.da&&et.capture==_){var kt=et.listener,Se=et.ha||et.src;et.fa&&$r(c.i,et),x=kt.call(Se,A)!==!1&&x}}return x&&!A.defaultPrevented}function Ke(c,g,_){if(typeof c=="function")_&&(c=R(c,_));else if(c&&typeof c.handleEvent=="function")c=R(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function iu(c){c.g=Ke(()=>{c.g=null,c.i&&(c.i=!1,iu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class kh extends it{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(c){it.call(this),this.h=c,this.g={}}W(ts,it);var es=[];function ns(c){Pt(c.g,function(g,_){this.g.hasOwnProperty(_)&&$s(g)},c),c.g={}}ts.prototype.N=function(){ts.aa.N.call(this),ns(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xn=m.JSON.stringify,Zs=m.JSON.parse,is=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function po(){}po.prototype.h=null;function yo(c){return c.h||(c.h=c.i())}function _o(){}var Ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){tt.call(this,"d")}W(Si,tt);function vo(){tt.call(this,"c")}W(vo,tt);var Xn={},Eo=null;function er(){return Eo=Eo||new oe}Xn.La="serverreachability";function Js(c){tt.call(this,Xn.La,c)}W(Js,tt);function nr(c){const g=er();Ft(g,new Js(g))}Xn.STAT_EVENT="statevent";function ru(c,g){tt.call(this,Xn.STAT_EVENT,c),this.stat=g}W(ru,tt);function ne(c){const g=er();Ft(g,new ru(g,c))}Xn.Ma="timingevent";function Ae(c,g){tt.call(this,Xn.Ma,c),this.size=g}W(Ae,tt);function me(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function To(c,g,_,A,x,H){c.info(function(){if(c.g)if(H)for(var et="",kt=H.split("&"),Se=0;Se<kt.length;Se++){var xt=kt[Se].split("=");if(1<xt.length){var Oe=xt[0];xt=xt[1];var be=Oe.split("_");et=2<=be.length&&be[1]=="type"?et+(Oe+"="+xt+"&"):et+(Oe+"=redacted&")}}else et=null;else et=H;return"XMLHTTP REQ ("+A+") [attempt "+x+"]: "+g+`
`+_+`
`+et})}function xh(c,g,_,A,x,H,et){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+x+"]: "+g+`
`+_+`
`+H+" "+et})}function ir(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+rs(c,_)+(A?" "+A:"")})}function su(c,g){c.info(function(){return"TIMEOUT: "+g})}En.prototype.info=function(){};function rs(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var x=A[1];if(Array.isArray(x)&&!(1>x.length)){var H=x[0];if(H!="noop"&&H!="stop"&&H!="close")for(var et=1;et<x.length;et++)x[et]=""}}}}return xn(_)}catch{return g}}var rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function Wn(){}W(Wn,po),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},$n=new Wn;function Je(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ce}function ce(){this.i=null,this.g="",this.h=!1}var Ao={},ta={};function Ln(c,g,_){c.L=1,c.v=us(cn(g)),c.m=_,c.P=!0,wi(c,null)}function wi(c,g){c.F=Date.now(),ss(c),c.A=cn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Co(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ce,c.g=Tu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new kh(R(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var x="readystatechange";Array.isArray(x)||(x&&(es[0]=x.toString()),x=es);for(var H=0;H<x.length;H++){var et=eu(_,x[H],A||g.handleEvent,!1,g.h||g);if(!et)break;g.g[et.key]=et}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),nr(),To(c.i,c.u,c.A,c.l,c.R,c.m)}Je.prototype.ca=function(c){c=c.target;const g=this.M;g&&bn(c)==3?g.j():this.Y(c)},Je.prototype.Y=function(c){try{if(c==this.g)t:{const be=bn(this.g);var g=this.g.Ba();const Mi=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||be!=4||g==7||(g==8||0>=Mi?nr(3):nr(2)),sr(this);var _=this.g.Z();this.X=_;e:if(au(this)){var A=du(this.g);c="";var x=A.length,H=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),Zn(this);var et="";break e}this.h.i=new m.TextDecoder}for(g=0;g<x;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(H&&g==x-1)});A.length=0,this.h.g+=c,this.C=0,et=this.h.g}else et=this.g.oa();if(this.o=_==200,xh(this.i,this.u,this.A,this.l,this.R,be,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Se=this.g;if((kt=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ht(kt)){var xt=kt;break e}}xt=null}if(_=xt)ir(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,as(this,_);else{this.o=!1,this.s=3,ne(12),Le(this),Zn(this);break t}}if(this.P){_=!0;let Ue;for(;!this.J&&this.C<et.length;)if(Ue=ou(this,et),Ue==ta){be==4&&(this.s=4,ne(14),_=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Ao){this.s=4,ne(15),ir(this.i,this.l,et,"[Invalid Chunk]"),_=!1;break}else ir(this.i,this.l,Ue,null),as(this,Ue);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||et.length!=0||this.h.h||(this.s=1,ne(16),_=!1),this.o=this.o&&_,!_)ir(this.i,this.l,et,"[Invalid Chunked Response]"),Le(this),Zn(this);else if(0<et.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+et.length),ys(Oe),Oe.M=!0,ne(11))}}else ir(this.i,this.l,et,null),as(this,et);be==4&&Le(this),this.o&&!this.J&&(be==4?_u(this.j,this):(this.o=!1,ss(this)))}else qh(this.g),_==400&&0<et.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Le(this),Zn(this)}}}catch{}finally{}};function au(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ou(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?ta:(_=Number(g.substring(_,A)),isNaN(_)?Ao:(A+=1,A+_>g.length?ta:(g=g.slice(A,A+_),c.C=A+_,g)))}Je.prototype.cancel=function(){this.J=!0,Le(this)};function ss(c){c.S=Date.now()+c.I,lu(c,c.I)}function lu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=me(R(c.ba,c),g)}function sr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Je.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(su(this.i,this.A),this.L!=2&&(nr(),ne(17)),Le(this),this.s=2,Zn(this)):lu(this,this.S-c)};function Zn(c){c.j.G==0||c.J||_u(c.j,c)}function Le(c){sr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ns(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function as(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||So(_.h,c))){if(!c.K&&So(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var x=A;if(x[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)fa(_),ca(_);else break t;Mo(_),ne(18)}}else _.za=x[1],0<_.za-_.T&&37500>x[2]&&_.F&&_.v==0&&!_.C&&(_.C=me(R(_.Za,_),6e3));if(1>=na(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Vi(_,11)}else if((c.K||_.g==c)&&fa(_),!ht(g))for(x=_.Da.g.parse(g),g=0;g<x.length;g++){let xt=x[g];if(_.T=xt[0],xt=xt[1],_.G==2)if(xt[0]=="c"){_.K=xt[1],_.ia=xt[2];const Oe=xt[3];Oe!=null&&(_.la=Oe,_.j.info("VER="+_.la));const be=xt[4];be!=null&&(_.Aa=be,_.j.info("SVER="+_.Aa));const Mi=xt[5];Mi!=null&&typeof Mi=="number"&&0<Mi&&(A=1.5*Mi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ue=c.g;if(Ue){const si=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var H=A.h;H.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ia(H,H.h),H.h=null))}if(A.D){const ko=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(A.ya=ko,Qt(A.I,A.D,ko))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var et=c;if(A.qa=Eu(A,A.J?A.ia:null,A.W),et.K){tn(A.h,et);var kt=et,Se=A.L;Se&&(kt.I=Se),kt.B&&(sr(kt),ss(kt)),A.g=et}else pu(A);0<_.i.length&&ha(_)}else xt[0]!="stop"&&xt[0]!="close"||Vi(_,7);else _.G==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?Vi(_,7):No(_):xt[0]!="noop"&&_.l&&_.l.ta(xt),_.v=0)}}nr(4)}catch{}}var uu=class{constructor(c,g){this.g=c,this.map=g}};function Ri(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ea(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function na(c){return c.h?1:c.g?c.g.size:0}function So(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ia(c,g){c.g?c.g.add(g):c.h=g}function tn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ri.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function bo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return J(c.i)}function Lh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function ra(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function wo(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=ra(c),A=Lh(c),x=A.length,H=0;H<x;H++)g.call(void 0,A[H],_&&_[H],c)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),x=null;if(0<=A){var H=c[_].substring(0,A);x=c[_].substring(A+1)}else H=c[_];g(H,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ge(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ge){this.h=c.h,ls(this,c.j),this.o=c.o,this.g=c.g,ar(this,c.s),this.l=c.l;var g=c.i,_=new Ci;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),Ii(this,_),this.m=c.m}else c&&(g=String(c).match(os))?(this.h=!1,ls(this,g[1]||"",!0),this.o=Tn(g[2]||""),this.g=Tn(g[3]||"",!0),ar(this,g[4]),this.l=Tn(g[5]||"",!0),Ii(this,g[6]||"",!0),this.m=Tn(g[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}ge.prototype.toString=function(){var c=[],g=this.j;g&&c.push(cs(g,Ro,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(cs(g,Ro,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(cs(_,_.charAt(0)=="/"?zh:Io,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",cs(_,sa)),c.join("")};function cn(c){return new ge(c)}function ls(c,g,_){c.j=_?Tn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ar(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ii(c,g,_){g instanceof Ci?(c.i=g,hu(c.i,c.h)):(_||(g=cs(g,Bh)),c.i=new Ci(g,c.h))}function Qt(c,g,_){c.i.set(g,_)}function us(c){return Qt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function cs(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,cu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ro=/[#\/\?@]/g,Io=/[#\?:]/g,zh=/[#\?]/g,Bh=/[#\?@]/g,sa=/#/g;function Ci(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function An(c){c.g||(c.g=new Map,c.h=0,c.i&&Uh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Ci.prototype,r.add=function(c,g){An(this),this.i=null,c=Jn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Di(c,g){An(c),g=Jn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Oi(c,g){return An(c),g=Jn(c,g),c.g.has(g)}r.forEach=function(c,g){An(this),this.g.forEach(function(_,A){_.forEach(function(x){c.call(g,x,A,this)},this)},this)},r.na=function(){An(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const x=c[A];for(let H=0;H<x.length;H++)_.push(g[A])}return _},r.V=function(c){An(this);let g=[];if(typeof c=="string")Oi(this,c)&&(g=g.concat(this.g.get(Jn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return An(this),this.i=null,c=Jn(this,c),Oi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Co(c,g,_){Di(c,g),0<_.length&&(c.i=null,c.g.set(Jn(c,g),J(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const H=encodeURIComponent(String(A)),et=this.V(A);for(A=0;A<et.length;A++){var x=H;et[A]!==""&&(x+="="+encodeURIComponent(String(et[A]))),c.push(x)}}return this.i=c.join("&")};function Jn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function hu(c,g){g&&!c.j&&(An(c),c.i=null,c.g.forEach(function(_,A){var x=A.toLowerCase();A!=x&&(Di(this,A),Co(this,x,_))},c)),c.j=g}function hs(c,g){const _=new En;if(m.Image){const A=new Image;A.onload=L(Sn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=L(Sn,_,"TestLoadImage: error",!1,g,A),A.onabort=L(Sn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=L(Sn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Un(c,g){const _=new En,A=new AbortController,x=setTimeout(()=>{A.abort(),Sn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(x),H.ok?Sn(_,"TestPingServer: ok",!0,g):Sn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(x),Sn(_,"TestPingServer: error",!1,g)})}function Sn(c,g,_,A,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),A(_)}catch{}}function fs(){this.g=new is}function ti(c,g,_){const A=_||"";try{wo(c,function(x,H){let et=x;y(x)&&(et=xn(x)),g.push(A+H+"="+encodeURIComponent(et))})}catch(x){throw g.push(A+"type="+encodeURIComponent("_badmap")),x}}function or(c){this.l=c.Ub||null,this.j=c.eb||!1}W(or,po),or.prototype.g=function(){return new Ni(this.l,this.j)},or.prototype.i=function(c){return function(){return c}}({});function Ni(c,g){oe.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Ni,oe),r=Ni.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ni(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Do(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Do(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ei(this):ni(this),this.readyState==3&&Do(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ei(this))},r.Qa=function(c){this.g&&(this.response=c,ei(this))},r.ga=function(){this.g&&ei(this)};function ei(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ni(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Oo(c){let g="";return Pt(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function De(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Oo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qt(c,g,_))}function jt(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(jt,oe);var aa=/^https?$/i,ds=["POST","PUT"];r=jt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?yo(this.o):yo($n),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){fu(this,H);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var x in A)_.set(x,A[x]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())_.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),x=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ds,g,void 0))||A||x||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,et]of _)this.g.setRequestHeader(H,et);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ms(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){fu(this,H)}};function fu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,oa(c),ii(c)}function oa(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),ii(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},r.bb=function(){la(this)};function la(c){if(c.h&&typeof f<"u"&&(!c.v[1]||bn(c)!=4||c.Z()!=2)){if(c.u&&bn(c)==4)Ke(c.Ea,0,c);else if(Ft(c,"readystatechange"),bn(c)==4){c.h=!1;try{const et=c.Z();t:switch(et){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=et===0){var x=String(c.D).match(os)[1]||null;!x&&m.self&&m.self.location&&(x=m.self.location.protocol.slice(0,-1)),A=!aa.test(x?x.toLowerCase():"")}_=A}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var H=2<bn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",oa(c)}}finally{ii(c)}}}}function ii(c,g){if(c.g){ms(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ft(c,"ready");try{_.onreadystatechange=A}catch{}}}function ms(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function bn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Zs(g)}};function du(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function qh(c){const g={};c=(c.g&&2<=bn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ht(c[A]))continue;var _=M(c[A]);const x=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=g[x]||[];g[x]=H,H.push(_)}V(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function ua(c){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,c),this.cb=gs("retryDelaySeedMs",1e4,c),this.Wa=gs("forwardChannelMaxRetries",2,c),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(c&&c.concurrentRequestLimit),this.Da=new fs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ua.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ne(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Eu(this,null,this.W),ha(this)};function No(c){if(mu(c),c.G==3){var g=c.U++,_=cn(c.I);if(Qt(_,"SID",c.K),Qt(_,"RID",g),Qt(_,"TYPE","terminate"),ps(c,_),g=new Je(c,c.j,g),g.L=2,g.v=us(cn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Tu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ss(g)}vu(c)}function ca(c){c.g&&(ys(c),c.g.cancel(),c.g=null)}function mu(c){ca(c),c.u&&(m.clearTimeout(c.u),c.u=null),fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ha(c){if(!ea(c.h)&&!c.s){c.s=!0;var g=c.Ga;nt||D(),ut||(nt(),ut=!0),Bt.add(g,c),c.B=0}}function jh(c,g){return na(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=me(R(c.Ga,c,g),Po(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const x=new Je(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(x.H=H,H=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=gu(this,x,g),_=cn(this.I),Qt(_,"RID",c),Qt(_,"CVER",22),this.D&&Qt(_,"X-HTTP-Session-Id",this.D),ps(this,_),H&&(this.O?g="headers="+encodeURIComponent(String(Oo(H)))+"&"+g:this.m&&De(_,this.m,H)),ia(this.h,x),this.Ua&&Qt(_,"TYPE","init"),this.P?(Qt(_,"$req",g),Qt(_,"SID","null"),x.T=!0,Ln(x,_,null)):Ln(x,_,g),this.G=2}}else this.G==3&&(c?Vo(this,c):this.i.length==0||ea(this.h)||Vo(this))};function Vo(c,g){var _;g?_=g.l:_=c.U++;const A=cn(c.I);Qt(A,"SID",c.K),Qt(A,"RID",_),Qt(A,"AID",c.T),ps(c,A),c.m&&c.o&&De(A,c.m,c.o),_=new Je(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=gu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ia(c.h,_),Ln(_,A,g)}function ps(c,g){c.H&&Pt(c.H,function(_,A){Qt(g,A,_)}),c.l&&wo({},function(_,A){Qt(g,A,_)})}function gu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?R(c.l.Na,c.l,c):null;t:{var x=c.i;let H=-1;for(;;){const et=["count="+_];H==-1?0<_?(H=x[0].g,et.push("ofs="+H)):H=0:et.push("ofs="+H);let kt=!0;for(let Se=0;Se<_;Se++){let xt=x[Se].g;const Oe=x[Se].map;if(xt-=H,0>xt)H=Math.max(0,x[Se].g-100),kt=!1;else try{ti(Oe,et,"req"+xt+"_")}catch{A&&A(Oe)}}if(kt){A=et.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function pu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;nt||D(),ut||(nt(),ut=!0),Bt.add(g,c),c.v=0}}function Mo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=me(R(c.Fa,c),Po(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=me(R(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),ca(this),yu(this))};function ys(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function yu(c){c.g=new Je(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=cn(c.qa);Qt(g,"RID","rpc"),Qt(g,"SID",c.K),Qt(g,"AID",c.T),Qt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qt(g,"TO",c.ja),Qt(g,"TYPE","xmlhttp"),ps(c,g),c.m&&c.o&&De(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=us(cn(g)),_.m=null,_.P=!0,wi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ca(this),Mo(this),ne(19))};function fa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function _u(c,g){var _=null;if(c.g==g){fa(c),ys(c),c.g=null;var A=2}else if(So(c.h,g))_=g.D,tn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var x=c.B;A=er(),Ft(A,new Ae(A,_)),ha(c)}else pu(c);else if(x=g.s,x==3||x==0&&0<g.X||!(A==1&&jh(c,g)||A==2&&Mo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),x){case 1:Vi(c,5);break;case 4:Vi(c,10);break;case 3:Vi(c,6);break;default:Vi(c,2)}}}function Po(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Vi(c,g){if(c.j.info("Error code "+g),g==2){var _=R(c.fb,c),A=c.Xa;const x=!A;A=new ge(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ls(A,"https"),us(A),x?hs(A.toString(),_):Un(A.toString(),_)}else ne(2);c.G=0,c.l&&c.l.sa(g),vu(c),mu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function vu(c){if(c.G=0,c.ka=[],c.l){const g=bo(c.h);(g.length!=0||c.i.length!=0)&&($(c.ka,g),$(c.ka,c.i),c.h.i.length=0,J(c.i),c.i.length=0),c.l.ra()}}function Eu(c,g,_){var A=_ instanceof ge?cn(_):new ge(_);if(A.g!="")g&&(A.g=g+"."+A.g),ar(A,A.s);else{var x=m.location;A=x.protocol,g=g?g+"."+x.hostname:x.hostname,x=+x.port;var H=new ge(null);A&&ls(H,A),g&&(H.g=g),x&&ar(H,x),_&&(H.l=_),A=H}return _=c.D,g=c.ya,_&&g&&Qt(A,_,g),Qt(A,"VER",c.la),ps(c,A),A}function Tu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new jt(new or({eb:_})):new jt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}r=Au.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function da(){}da.prototype.g=function(c,g){return new en(c,g)};function en(c,g){oe.call(this),this.g=new ua(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ht(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ht(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ri(this)}W(en,oe),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){No(this.g)},en.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=xn(c),c=_);g.i.push(new uu(g.Ya++,c)),g.G==3&&ha(g)},en.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,en.aa.N.call(this)};function Su(c){Si.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}W(Su,Si);function bu(){vo.call(this),this.status=1}W(bu,vo);function ri(c){this.g=c}W(ri,Au),ri.prototype.ua=function(){Ft(this.g,"a")},ri.prototype.ta=function(c){Ft(this.g,new Su(c))},ri.prototype.sa=function(c){Ft(this.g,new bu)},ri.prototype.ra=function(){Ft(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,W0=function(){return new da},$0=function(){return er()},X0=Xn,cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,xc=rr,bi.COMPLETE="complete",Y0=bi,_o.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",oe.prototype.listen=oe.prototype.K,bl=_o,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,Q0=jt}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore",Cv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new hh("@firebase/firestore");function ja(){return Bs.logLevel}function st(r,...t){if(Bs.logLevel<=Vt.DEBUG){const n=t.map(Fm);Bs.debug(`Firestore (${oo}): ${r}`,...n)}}function Zi(r,...t){if(Bs.logLevel<=Vt.ERROR){const n=t.map(Fm);Bs.error(`Firestore (${oo}): ${r}`,...n)}}function qr(r,...t){if(Bs.logLevel<=Vt.WARN){const n=t.map(Fm);Bs.warn(`Firestore (${oo}): ${r}`,...n)}}function Fm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,Z0(r,s,n)}function Z0(r,t,n){let s=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Zi(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||Z0(t,o,s)}function St(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends Qn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class NC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class VC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MC{constructor(t){this.t=t,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ur,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ur)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new J0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new $e(t)}}class PC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new PC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=LC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function It(r,t){return r<t?-1:r>t?1:0}function hm(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return It(s,o);{const u=tT(),f=UC(u.encode(Ov(r,n)),u.encode(Ov(t,n)));return f!==0?f:It(s,o)}}n+=s>65535?2:1}return It(r.length,t.length)}function Ov(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function UC(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return It(r[n],t[n]);return It(r.length,t.length)}function Ja(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="__name__";class hi{constructor(t,n,s){n===void 0?n=0:n>t.length&&yt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&yt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return hi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof hi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=hi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return It(t.length,n.length)}static compareSegments(t,n){const s=hi.isNumericId(t),o=hi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?hi.extractNumericId(t).compare(hi.extractNumericId(n)):hm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Lr.fromString(t.substring(4,t.length-2))}}class te extends hi{construct(t,n,s){return new te(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new rt(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new te(n)}static emptyPath(){return new te([])}}const zC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends hi{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return zC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nv}static keyField(){return new He([Nv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new rt(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new rt(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new rt(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new rt(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(te.fromString(t))}static fromName(t){return new ct(te.fromString(t).popFirst(5))}static empty(){return new ct(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&te.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return te.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new te(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(r,t,n){if(!n)throw new rt(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function BC(r,t,n,s){if(t===!0&&s===!0)throw new rt(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Vv(r){if(!ct.isDocumentKey(r))throw new rt(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Mv(r){if(ct.isDocumentKey(r))throw new rt(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function nT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function yh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":yt(12329,{type:typeof r})}function Ll(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new rt(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yh(r);throw new rt(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(r,t){const n={typeString:r};return t&&(n.value=t),n}function $l(r,t){if(!nT(r))throw new rt(Q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new rt(Q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=-62135596800,kv=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(t){return ee.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*kv);return new ee(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Pv)throw new rt(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kv}_compareTo(t){return this.seconds===t.seconds?It(this.nanoseconds,t.nanoseconds):It(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($l(t,ee._jsonSchema))return new ee(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Pv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Te("string",ee._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new ee(0,0))}static max(){return new At(new ee(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;function qC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new ee(n+1,0):new ee(n,s));return new jr(o,ct.empty(),t)}function jC(r){return new jr(r.readTime,r.key,Ul)}class jr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new jr(At.min(),ct.empty(),Ul)}static max(){return new jr(At.max(),ct.empty(),Ul)}}function HC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ct.comparator(r.documentKey,t.documentKey),n!==0?n:It(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==FC)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):X.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):X.reject(n)}static resolve(t){return new X((n,s)=>{n(t)})}static reject(t){return new X((n,s)=>{s(t)})}static waitFor(t){return new X((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=X.resolve(!1);for(const s of t)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new X((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(T=>{f[y]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(t,n){return new X((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function KC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}_h.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=-1;function vh(r){return r==null}function Zc(r){return r===0&&1/r==-1/0}function QC(r){return typeof r=="number"&&Number.isInteger(r)&&!Zc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="";function YC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=xv(t)),t=XC(r.get(n),t);return xv(t)}function XC(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case iT:n+="";break;default:n+=u}}return n}function xv(r){return r+iT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Gs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function rT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.comparator=t,this.root=n||je.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ic(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ic(this.root,t,this.comparator,!0)}}class Ic{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??je.RED,this.left=o??je.EMPTY,this.right=u??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new je(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return je.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw yt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw yt(27949);return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw yt(57766)}get value(){throw yt(16141)}get color(){throw yt(16727)}get left(){throw yt(29726)}get right(){throw yt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new je(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uv(this.data.getIterator())}getIteratorFrom(t){return new Uv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ie(this.comparator);return n.data=t,n}}class Uv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new Hn([])}unionWith(t){let n=new Ie(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Hn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ja(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new sT("Invalid base64 string: "+u):u}}(t);return new Ge(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new Ge(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return It(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const $C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=$C.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:de(r.seconds),nanos:de(r.nanos)}}function de(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Fr(r){return typeof r=="string"?Ge.fromBase64String(r):Ge.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="server_timestamp",oT="__type__",lT="__previous_value__",uT="__local_write_time__";function Qm(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[oT])===null||n===void 0?void 0:n.stringValue)===aT}function Eh(r){const t=r.mapValue.fields[lT];return Qm(t)?Eh(t):t}function zl(r){const t=Hr(r.mapValue.fields[uT].timestampValue);return new ee(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(t,n,s,o,u,f,m,p,y,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=T}}const Jc="(default)";class Bl{constructor(t,n){this.projectId=t,this.database=n||Jc}static empty(){return new Bl("","")}get isDefaultDatabase(){return this.database===Jc}isEqual(t){return t instanceof Bl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="__type__",ZC="__max__",Cc={mapValue:{}},hT="__vector__",th="value";function Gr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Qm(r)?4:t2(r)?9007199254740991:JC(r)?10:11:yt(28295,{value:r})}function Ei(r,t){if(r===t)return!0;const n=Gr(r);if(n!==Gr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return zl(r).isEqual(zl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Hr(o.timestampValue),m=Hr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Fr(o.bytesValue).isEqual(Fr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return de(o.geoPointValue.latitude)===de(u.geoPointValue.latitude)&&de(o.geoPointValue.longitude)===de(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return de(o.integerValue)===de(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=de(o.doubleValue),m=de(u.doubleValue);return f===m?Zc(f)===Zc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Ja(r.arrayValue.values||[],t.arrayValue.values||[],Ei);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Lv(f)!==Lv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Ei(f[p],m[p])))return!1;return!0}(r,t);default:return yt(52216,{left:r})}}function ql(r,t){return(r.values||[]).find(n=>Ei(n,t))!==void 0}function to(r,t){if(r===t)return 0;const n=Gr(r),s=Gr(t);if(n!==s)return It(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return It(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=de(u.integerValue||u.doubleValue),p=de(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return zv(r.timestampValue,t.timestampValue);case 4:return zv(zl(r),zl(t));case 5:return hm(r.stringValue,t.stringValue);case 6:return function(u,f){const m=Fr(u),p=Fr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const T=It(m[y],p[y]);if(T!==0)return T}return It(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=It(de(u.latitude),de(f.latitude));return m!==0?m:It(de(u.longitude),de(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Bv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,p,y,T;const b=u.fields||{},R=f.fields||{},L=(m=b[th])===null||m===void 0?void 0:m.arrayValue,W=(p=R[th])===null||p===void 0?void 0:p.arrayValue,J=It(((y=L?.values)===null||y===void 0?void 0:y.length)||0,((T=W?.values)===null||T===void 0?void 0:T.length)||0);return J!==0?J:Bv(L,W)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Cc.mapValue&&f===Cc.mapValue)return 0;if(u===Cc.mapValue)return 1;if(f===Cc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},T=Object.keys(y);p.sort(),T.sort();for(let b=0;b<p.length&&b<T.length;++b){const R=hm(p[b],T[b]);if(R!==0)return R;const L=to(m[p[b]],y[T[b]]);if(L!==0)return L}return It(p.length,T.length)}(r.mapValue,t.mapValue);default:throw yt(23264,{le:n})}}function zv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return It(r,t);const n=Hr(r),s=Hr(t),o=It(n.seconds,s.seconds);return o!==0?o:It(n.nanos,s.nanos)}function Bv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=to(n[o],s[o]);if(u)return u}return It(n.length,s.length)}function eo(r){return fm(r)}function fm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Hr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Fr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ct.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=fm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${fm(n.fields[f])}`;return o+"}"}(r.mapValue):yt(61005,{value:r})}function Lc(r){switch(Gr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Eh(r);return t?16+Lc(t):16;case 5:return 2*r.stringValue.length;case 6:return Fr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Lc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Gs(s.fields,(u,f)=>{o+=u.length+Lc(f)}),o}(r.mapValue);default:throw yt(13486,{value:r})}}function qv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function dm(r){return!!r&&"integerValue"in r}function Ym(r){return!!r&&"arrayValue"in r}function jv(r){return!!r&&"nullValue"in r}function Hv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uc(r){return!!r&&"mapValue"in r}function JC(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[cT])===null||n===void 0?void 0:n.stringValue)===hT}function Ol(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Gs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ol(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ol(r.arrayValue.values[n]);return t}return Object.assign({},r)}function t2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===ZC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.value=t}static empty(){return new Mn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Uc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ol(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ol(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ei(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Uc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Gs(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Mn(Ol(this.value))}}function fT(r){const t=[];return Gs(r.fields,(n,s)=>{const o=new He([n]);if(Uc(s)){const u=fT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new Hn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new We(t,0,At.min(),At.min(),At.min(),Mn.empty(),0)}static newFoundDocument(t,n,s,o){return new We(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new We(t,2,n,At.min(),At.min(),Mn.empty(),0)}static newUnknownDocument(t,n){return new We(t,3,n,At.min(),At.min(),Mn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof We&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n){this.position=t,this.inclusive=n}}function Fv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ct.comparator(ct.fromName(f.referenceValue),n.key):s=to(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ei(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n="asc"){this.field=t,this.dir=n}}function e2(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{}class Ee extends dT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new i2(t,n,s):n==="array-contains"?new a2(t,s):n==="in"?new o2(t,s):n==="not-in"?new l2(t,s):n==="array-contains-any"?new u2(t,s):new Ee(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new r2(t,s):new s2(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(to(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends dT{constructor(t,n){super(),this.filters=t,this.op=n,this.he=null}static create(t,n){return new Kn(t,n)}matches(t){return mT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function mT(r){return r.op==="and"}function gT(r){return n2(r)&&mT(r)}function n2(r){for(const t of r.filters)if(t instanceof Kn)return!1;return!0}function mm(r){if(r instanceof Ee)return r.field.canonicalString()+r.op.toString()+eo(r.value);if(gT(r))return r.filters.map(t=>mm(t)).join(",");{const t=r.filters.map(n=>mm(n)).join(",");return`${r.op}(${t})`}}function pT(r,t){return r instanceof Ee?function(s,o){return o instanceof Ee&&s.op===o.op&&s.field.isEqual(o.field)&&Ei(s.value,o.value)}(r,t):r instanceof Kn?function(s,o){return o instanceof Kn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&pT(f,o.filters[m]),!0):!1}(r,t):void yt(19439)}function yT(r){return r instanceof Ee?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(r):r instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(yT).join(" ,")+"}"}(r):"Filter"}class i2 extends Ee{constructor(t,n,s){super(t,n,s),this.key=ct.fromName(s.referenceValue)}matches(t){const n=ct.comparator(t.key,this.key);return this.matchesComparison(n)}}class r2 extends Ee{constructor(t,n){super(t,"in",n),this.keys=_T("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class s2 extends Ee{constructor(t,n){super(t,"not-in",n),this.keys=_T("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function _T(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ct.fromName(s.referenceValue))}class a2 extends Ee{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ym(n)&&ql(n.arrayValue,this.value)}}class o2 extends Ee{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ql(this.value.arrayValue,n)}}class l2 extends Ee{constructor(t,n){super(t,"not-in",n)}matches(t){if(ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ql(this.value.arrayValue,n)}}class u2 extends Ee{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ym(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ql(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Pe=null}}function Kv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new c2(r,t,n,s,o,u,f)}function Xm(r){const t=St(r);if(t.Pe===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>mm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),vh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>eo(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>eo(s)).join(",")),t.Pe=n}return t.Pe}function $m(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!e2(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!pT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Gv(r.startAt,t.startAt)&&Gv(r.endAt,t.endAt)}function gm(r){return ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function h2(r,t,n,s,o,u,f,m){return new co(r,t,n,s,o,u,f,m)}function vT(r){return new co(r)}function Qv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ET(r){return r.collectionGroup!==null}function Nl(r){const t=St(r);if(t.Te===null){t.Te=[];const n=new Set;for(const u of t.explicitOrderBy)t.Te.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ie(He.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Te.push(new jl(u,s))}),n.has(He.keyField().canonicalString())||t.Te.push(new jl(He.keyField(),s))}return t.Te}function mi(r){const t=St(r);return t.Ie||(t.Ie=f2(t,Nl(r))),t.Ie}function f2(r,t){if(r.limitType==="F")return Kv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new jl(o.field,u)});const n=r.endAt?new eh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new eh(r.startAt.position,r.startAt.inclusive):null;return Kv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function pm(r,t){const n=r.filters.concat([t]);return new co(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function ym(r,t,n){return new co(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Th(r,t){return $m(mi(r),mi(t))&&r.limitType===t.limitType}function TT(r){return`${Xm(mi(r))}|lt:${r.limitType}`}function Ha(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>yT(o)).join(", ")}]`),vh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>eo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>eo(o)).join(",")),`Target(${s})`}(mi(r))}; limitType=${r.limitType})`}function Ah(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ct.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Nl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=Fv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Nl(s),o)||s.endAt&&!function(f,m,p){const y=Fv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Nl(s),o))}(r,t)}function d2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function AT(r){return(t,n)=>{let s=!1;for(const o of Nl(r)){const u=m2(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function m2(r,t,n){const s=r.field.isKeyField()?ct.comparator(t.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?to(p,y):yt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return yt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Gs(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return rT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new se(ct.comparator);function Ji(){return g2}const ST=new se(ct.comparator);function wl(...r){let t=ST;for(const n of r)t=t.insert(n.key,n);return t}function bT(r){let t=ST;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ks(){return Vl()}function wT(){return Vl()}function Vl(){return new Ks(r=>r.toString(),(r,t)=>r.isEqual(t))}const p2=new se(ct.comparator),y2=new Ie(ct.comparator);function Mt(...r){let t=y2;for(const n of r)t=t.add(n);return t}const _2=new Ie(It);function v2(){return _2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zc(t)?"-0":t}}function RT(r){return{integerValue:""+r}}function E2(r,t){return QC(t)?RT(t):Wm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this._=void 0}}function T2(r,t,n){return r instanceof nh?function(o,u){const f={fields:{[oT]:{stringValue:aT},[uT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Qm(u)&&(u=Eh(u)),u&&(f.fields[lT]=u),{mapValue:f}}(n,t):r instanceof Hl?CT(r,t):r instanceof Fl?DT(r,t):function(o,u){const f=IT(o,u),m=Yv(f)+Yv(o.Ee);return dm(f)&&dm(o.Ee)?RT(m):Wm(o.serializer,m)}(r,t)}function A2(r,t,n){return r instanceof Hl?CT(r,t):r instanceof Fl?DT(r,t):n}function IT(r,t){return r instanceof ih?function(s){return dm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class nh extends Sh{}class Hl extends Sh{constructor(t){super(),this.elements=t}}function CT(r,t){const n=OT(t);for(const s of r.elements)n.some(o=>Ei(o,s))||n.push(s);return{arrayValue:{values:n}}}class Fl extends Sh{constructor(t){super(),this.elements=t}}function DT(r,t){let n=OT(t);for(const s of r.elements)n=n.filter(o=>!Ei(o,s));return{arrayValue:{values:n}}}class ih extends Sh{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Yv(r){return de(r.integerValue||r.doubleValue)}function OT(r){return Ym(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function S2(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Hl&&o instanceof Hl||s instanceof Fl&&o instanceof Fl?Ja(s.elements,o.elements,Ei):s instanceof ih&&o instanceof ih?Ei(s.Ee,o.Ee):s instanceof nh&&o instanceof nh}(r.transform,t.transform)}class b2{constructor(t,n){this.version=t,this.transformResults=n}}class gi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gi}static exists(t){return new gi(void 0,t)}static updateTime(t){return new gi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class bh{}function NT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Zm(r.key,gi.none()):new Wl(r.key,r.data,gi.none());{const n=r.data,s=Mn.empty();let o=new Ie(He.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Qs(r.key,s,new Hn(o.toArray()),gi.none())}}function w2(r,t,n){r instanceof Wl?function(o,u,f){const m=o.value.clone(),p=$v(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Qs?function(o,u,f){if(!zc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=$v(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(VT(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Ml(r,t,n,s){return r instanceof Wl?function(u,f,m,p){if(!zc(u.precondition,f))return m;const y=u.value.clone(),T=Wv(u.fieldTransforms,p,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Qs?function(u,f,m,p){if(!zc(u.precondition,f))return m;const y=Wv(u.fieldTransforms,p,f),T=f.data;return T.setAll(VT(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,t,n,s):function(u,f,m){return zc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function R2(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=IT(s.transform,o||null);u!=null&&(n===null&&(n=Mn.empty()),n.set(s.field,u))}return n||null}function Xv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ja(s,o,(u,f)=>S2(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Wl extends bh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qs extends bh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function VT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function $v(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,A2(f,m,n[o]))}return s}function Wv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,T2(u,f,t))}return s}class Zm extends bh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I2 extends bh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&w2(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=wT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=NT(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Mt())}isEqual(t){return this.batchId===t.batchId&&Ja(this.mutations,t.mutations,(n,s)=>Xv(n,s))&&Ja(this.baseMutations,t.baseMutations,(n,s)=>Xv(n,s))}}class Jm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{Ve:t.mutations.length,me:s.length});let o=function(){return p2}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Jm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Ut;function N2(r){switch(r){case Q.OK:return yt(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return yt(15467,{code:r})}}function MT(r){if(r===void 0)return Zi("GRPC error has no .code"),Q.UNKNOWN;switch(r){case _e.OK:return Q.OK;case _e.CANCELLED:return Q.CANCELLED;case _e.UNKNOWN:return Q.UNKNOWN;case _e.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case _e.INTERNAL:return Q.INTERNAL;case _e.UNAVAILABLE:return Q.UNAVAILABLE;case _e.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case _e.NOT_FOUND:return Q.NOT_FOUND;case _e.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case _e.ABORTED:return Q.ABORTED;case _e.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case _e.DATA_LOSS:return Q.DATA_LOSS;default:return yt(39323,{code:r})}}(Ut=_e||(_e={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new Lr([4294967295,4294967295],0);function Zv(r){const t=tT().encode(r),n=new K0;return n.update(t),new Uint8Array(n.digest())}function Jv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Lr([n,s],0),new Lr([o,u],0)]}class tg{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(s<0)throw new Rl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*t.length-n,this.ge=Lr.fromNumber(this.fe)}pe(t,n,s){let o=t.add(n.multiply(Lr.fromNumber(s)));return o.compare(V2)===1&&(o=new Lr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const n=Zv(t),[s,o]=Jv(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);if(!this.ye(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new tg(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.fe===0)return;const n=Zv(t),[s,o]=Jv(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);this.we(f)}}we(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Zl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new wh(At.min(),o,new se(It),Ji(),Mt())}}class Zl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Zl(s,n,Mt(),Mt(),Mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n,s,o){this.Se=t,this.removedTargetIds=n,this.key=s,this.be=o}}class PT{constructor(t,n){this.targetId=t,this.De=n}}class kT{constructor(t,n,s=Ge.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class tE{constructor(){this.ve=0,this.Ce=eE(),this.Fe=Ge.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=Mt(),n=Mt(),s=Mt();return this.Ce.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:yt(38017,{changeType:u})}}),new Zl(this.Fe,this.Me,t,n,s)}ke(){this.xe=!1,this.Ce=eE()}qe(t,n){this.xe=!0,this.Ce=this.Ce.insert(t,n)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,Ht(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class M2{constructor(t){this.We=t,this.Ge=new Map,this.ze=Ji(),this.je=Dc(),this.Je=Dc(),this.He=new se(It)}Ye(t){for(const n of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(n,t.be):this.Xe(n,t.key,t.be);for(const n of t.removedTargetIds)this.Xe(n,t.key,t.be)}et(t){this.forEachTarget(t,n=>{const s=this.tt(n);switch(t.state){case 0:this.nt(n)&&s.Be(t.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(t.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(t.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(t.resumeToken));break;default:yt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ge.forEach((s,o)=>{this.nt(o)&&n(o)})}it(t){const n=t.targetId,s=t.De.count,o=this.st(n);if(o){const u=o.target;if(gm(u))if(s===0){const f=new ct(u.path);this.Xe(n,f,We.newNoDocument(f,At.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this.ot(n);if(f!==s){const m=this._t(t),p=m?this.ut(m,t,f):1;if(p!==0){this.rt(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,y)}}}}}_t(t){const n=t.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Fr(s).toUint8Array()}catch(p){if(p instanceof sT)return qr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new tg(f,o,u)}catch(p){return qr(p instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.fe===0?null:m}ut(t,n,s){return n.De.count===s-this.ht(t,n.targetId)?0:2}ht(t,n){const s=this.We.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.We.lt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.Xe(n,u,null),o++)}),o}Pt(t){const n=new Map;this.Ge.forEach((u,f)=>{const m=this.st(f);if(m){if(u.current&&gm(m.target)){const p=new ct(m.target.path);this.Tt(p).has(f)||this.It(f,p)||this.Xe(f,p,We.newNoDocument(p,t))}u.Ne&&(n.set(f,u.Le()),u.ke())}});let s=Mt();this.Je.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,f)=>f.setReadTime(t));const o=new wh(t,n,this.He,this.ze,s);return this.ze=Ji(),this.je=Dc(),this.Je=Dc(),this.He=new se(It),o}Ze(t,n){if(!this.nt(t))return;const s=this.It(t,n.key)?2:0;this.tt(t).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(t)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(t))}Xe(t,n,s){if(!this.nt(t))return;const o=this.tt(t);this.It(t,n)?o.qe(n,1):o.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(t)),this.Je=this.Je.insert(n,this.dt(n).add(t)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(t){this.Ge.delete(t)}ot(t){const n=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let n=this.Ge.get(t);return n||(n=new tE,this.Ge.set(t,n)),n}dt(t){let n=this.Je.get(t);return n||(n=new Ie(It),this.Je=this.Je.insert(t,n)),n}Tt(t){let n=this.je.get(t);return n||(n=new Ie(It),this.je=this.je.insert(t,n)),n}nt(t){const n=this.st(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}st(t){const n=this.Ge.get(t);return n&&n.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new tE),this.We.getRemoteKeysForTarget(t).forEach(n=>{this.Xe(t,n,null)})}It(t,n){return this.We.getRemoteKeysForTarget(t).has(n)}}function Dc(){return new se(ct.comparator)}function eE(){return new se(ct.comparator)}const P2={asc:"ASCENDING",desc:"DESCENDING"},k2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},x2={and:"AND",or:"OR"};class L2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function _m(r,t){return r.useProto3Json||vh(t)?t:{value:t}}function rh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function U2(r,t){return rh(r,t.toTimestamp())}function pi(r){return Ht(!!r,49232),At.fromTimestamp(function(n){const s=Hr(n);return new ee(s.seconds,s.nanos)}(r))}function eg(r,t){return vm(r,t).canonicalString()}function vm(r,t){const n=function(o){return new te(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function LT(r){const t=te.fromString(r);return Ht(jT(t),10190,{key:t.toString()}),t}function Em(r,t){return eg(r.databaseId,t.path)}function $d(r,t){const n=LT(t);if(n.get(1)!==r.databaseId.projectId)throw new rt(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new rt(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ct(zT(n))}function UT(r,t){return eg(r.databaseId,t)}function z2(r){const t=LT(r);return t.length===4?te.emptyPath():zT(t)}function Tm(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zT(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function nE(r,t,n){return{name:Em(r,t),fields:n.value.mapValue.fields}}function B2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:yt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,T){return y.useProto3Json?(Ht(T===void 0||typeof T=="string",58123),Ge.fromBase64String(T||"")):(Ht(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ge.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const T=y.code===void 0?Q.UNKNOWN:MT(y.code);return new rt(T,y.message||"")}(f);n=new kT(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=$d(r,s.document.name),u=pi(s.document.updateTime),f=s.document.createTime?pi(s.document.createTime):At.min(),m=new Mn({mapValue:{fields:s.document.fields}}),p=We.newFoundDocument(o,u,f,m),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Bc(y,T,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=$d(r,s.document),u=s.readTime?pi(s.readTime):At.min(),f=We.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Bc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=$d(r,s.document),u=s.removedTargetIds||[];n=new Bc([],u,o,null)}else{if(!("filter"in t))return yt(11601,{At:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new O2(o,u),m=s.targetId;n=new PT(m,f)}}return n}function q2(r,t){let n;if(t instanceof Wl)n={update:nE(r,t.key,t.value)};else if(t instanceof Zm)n={delete:Em(r,t.key)};else if(t instanceof Qs)n={update:nE(r,t.key,t.data),updateMask:$2(t.fieldMask)};else{if(!(t instanceof I2))return yt(16599,{Rt:t.type});n={verify:Em(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof nh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Fl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ih)return{fieldPath:f.field.canonicalString(),increment:m.Ee};throw yt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:U2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:yt(27497)}(r,t.precondition)),n}function j2(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?pi(o.updateTime):pi(u);return f.isEqual(At.min())&&(f=pi(u)),new b2(f,o.transformResults||[])}(n,t))):[]}function H2(r,t){return{documents:[UT(r,t.path)]}}function F2(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=UT(r,o);const u=function(y){if(y.length!==0)return qT(Kn.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(T=>function(R){return{field:Fa(R.field),direction:Q2(R.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=_m(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{Vt:n,parent:o}}function G2(r){let t=z2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=function(b){const R=BT(b);return R instanceof Kn&&gT(R)?R.getFilters():[R]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(R=>function(W){return new jl(Ga(W.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(R))}(n.orderBy));let m=null;n.limit&&(m=function(b){let R;return R=typeof b=="object"?b.value:b,vh(R)?null:R}(n.limit));let p=null;n.startAt&&(p=function(b){const R=!!b.before,L=b.values||[];return new eh(L,R)}(n.startAt));let y=null;return n.endAt&&(y=function(b){const R=!b.before,L=b.values||[];return new eh(L,R)}(n.endAt)),h2(t,o,f,u,m,"F",p,y)}function K2(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function BT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return Ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return Ee.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return Ee.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return Ee.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return yt(61313);default:return yt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Ee.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return yt(58110);default:return yt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(s=>BT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return yt(1026)}}(n.compositeFilter.op))}(r):yt(30097,{filter:r})}function Q2(r){return P2[r]}function Y2(r){return k2[r]}function X2(r){return x2[r]}function Fa(r){return{fieldPath:r.canonicalString()}}function Ga(r){return He.fromServerFormat(r.fieldPath)}function qT(r){return r instanceof Ee?function(n){if(n.op==="=="){if(Hv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NAN"}};if(jv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NAN"}};if(jv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fa(n.field),op:Y2(n.op),value:n.value}}}(r):r instanceof Kn?function(n){const s=n.getFilters().map(o=>qT(o));return s.length===1?s[0]:{compositeFilter:{op:X2(n.op),filters:s}}}(r):yt(54877,{filter:r})}function $2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function jT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,s,o,u=At.min(),f=At.min(),m=Ge.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Pr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(t){this.gt=t}}function Z2(r){const t=G2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ym(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.Dn=new tD}addToCollectionParentIndex(t,n){return this.Dn.add(n),X.resolve()}getCollectionParents(t,n){return X.resolve(this.Dn.getEntries(n))}addFieldIndex(t,n){return X.resolve()}deleteFieldIndex(t,n){return X.resolve()}deleteAllFieldIndexes(t){return X.resolve()}createTargetIndexes(t,n){return X.resolve()}getDocumentsMatchingTarget(t,n){return X.resolve(null)}getIndexType(t,n){return X.resolve(0)}getFieldIndexes(t,n){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,n){return X.resolve(jr.min())}getMinOffsetFromCollectionGroup(t,n){return X.resolve(jr.min())}updateCollectionGroup(t,n,s){return X.resolve()}updateIndexEntries(t,n){return X.resolve()}}class tD{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ie(te.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ie(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},HT=41943040;class on{static withCacheSize(t){return new on(t,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(HT,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new no(0)}static ur(){return new no(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="LruGarbageCollector",eD=1048576;function sE([r,t],[n,s]){const o=It(r,n);return o===0?It(t,s):o}class nD{constructor(t){this.Tr=t,this.buffer=new Ie(sE),this.Ir=0}dr(){return++this.Ir}Er(t){const n=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();sE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){st(rE,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){uo(n)?st(rE,"Ignoring IndexedDB error during garbage collection: ",n):await lo(n)}await this.Rr(3e5)})}}class rD{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.mr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return X.resolve(_h.ue);const s=new nD(n);return this.Vr.forEachTarget(t,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(t,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.Vr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(iE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iE):this.pr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,n){let s,o,u,f,m,p,y;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(t,s,n))).next(b=>(u=b,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(b=>(y=Date.now(),ja()<=Vt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${b} documents in `+(y-p)+`ms
Total Duration: ${y-T}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function sD(r,t){return new rD(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.changes=new Ks(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,We.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Ml(s.mutation,o,Hn.empty(),ee.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Mt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Mt()){const o=ks();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=wl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=ks();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Mt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Ji();const f=Vl(),m=function(){return Vl()}();return n.forEach((p,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof Qs)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),Ml(T.mutation,y,T.mutation.getFieldMask(),ee.now())):f.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var b;return m.set(y,new oD(T,(b=f.get(y))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Vl();let o=new se((f,m)=>f-m),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let T=s.get(p)||Hn.empty();T=m.applyToLocalView(y,T),s.set(p,T);const b=(o.get(m.batchId)||Mt()).add(p);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,T=p.value,b=wT();T.forEach(R=>{if(!u.has(R)){const L=NT(n.get(R),s.get(R));L!==null&&b.set(R,L),u=u.add(R)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,b))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ET(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):X.resolve(ks());let m=Ul,p=u;return f.next(y=>X.forEach(y,(T,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(T)?X.resolve():this.remoteDocumentCache.getEntry(t,T).next(R=>{p=p.insert(T,R)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,Mt())).next(T=>({batchId:m,changes:bT(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ct(n)).next(s=>{let o=wl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=wl();return this.indexManager.getCollectionParents(t,u).next(m=>X.forEach(m,p=>{const y=function(b,R){return new co(R,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(T=>{T.forEach((b,R)=>{f=f.insert(b,R)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,We.newInvalidDocument(T)))});let m=wl();return f.forEach((p,y)=>{const T=u.get(p);T!==void 0&&Ml(T.mutation,y,Hn.empty(),ee.now()),Ah(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,n){return X.resolve(this.Br.get(n))}saveBundleMetadata(t,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:pi(o.createTime)}}(n)),X.resolve()}getNamedQuery(t,n){return X.resolve(this.Lr.get(n))}saveNamedQuery(t,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:Z2(o.bundledQuery),readTime:pi(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.overlays=new se(ct.comparator),this.kr=new Map}getOverlay(t,n){return X.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ks();return X.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.wt(t,n,u)}),X.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),X.resolve()}getOverlaysForCollection(t,n,s){const o=ks(),u=n.length+1,f=new ct(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new se((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=ks(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=ks(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,T)=>m.set(y,T)),!(m.size()>=o)););return X.resolve(m)}wt(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new D2(n,s));let u=this.kr.get(n);u===void 0&&(u=Mt(),this.kr.set(n,u)),this.kr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(t){return X.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.qr=new Ie(Pe.Qr),this.$r=new Ie(Pe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,n){const s=new Pe(t,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Wr(new Pe(t,n))}Gr(t,n){t.forEach(s=>this.removeReference(s,n))}zr(t){const n=new ct(new te([])),s=new Pe(n,t),o=new Pe(n,t+1),u=[];return this.$r.forEachInRange([s,o],f=>{this.Wr(f),u.push(f.key)}),u}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const n=new ct(new te([])),s=new Pe(n,t),o=new Pe(n,t+1);let u=Mt();return this.$r.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Pe(t,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Pe{constructor(t,n){this.key=t,this.Hr=n}static Qr(t,n){return ct.comparator(t.key,n.key)||It(t.Hr,n.Hr)}static Ur(t,n){return It(t.Hr,n.Hr)||ct.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ie(Pe.Qr)}checkEmpty(t){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new C2(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Yr=this.Yr.add(new Pe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(t,n){return X.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Km:this.er-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Pe(n,0),o=new Pe(n,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],f=>{const m=this.Zr(f.Hr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ie(It);return n.forEach(o=>{const u=new Pe(o,0),f=new Pe(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,f],m=>{s=s.add(m.Hr)})}),X.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ct.isDocumentKey(u)||(u=u.child(""));const f=new Pe(new ct(u),0);let m=new Ie(It);return this.Yr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Hr)),!0)},f),X.resolve(this.ei(m))}ei(t){const n=[];return t.forEach(s=>{const o=this.Zr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ht(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return X.forEach(n.mutations,o=>{const u=new Pe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Yr=s})}rr(t){}containsKey(t,n){const s=new Pe(n,0),o=this.Yr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}ti(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(t){this.ni=t,this.docs=function(){return new se(ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():We.newInvalidDocument(n))}getEntries(t,n){let s=Ji();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():We.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Ji();const f=n.path,m=new ct(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:T}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||HC(jC(T),s)<=0||(o.has(T.key)||Ah(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(t,n,s,o){yt(9500)}ri(t,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new mD(this)}getSize(t){return X.resolve(this.size)}}class mD extends aD{constructor(t){super(),this.Or=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(t,o)):this.Or.removeEntry(s)}),X.waitFor(n)}getFromCache(t,n){return this.Or.getEntry(t,n)}getAllFromCache(t,n){return this.Or.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(t){this.persistence=t,this.ii=new Ks(n=>Xm(n),$m),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.si=0,this.oi=new ng,this.targetCount=0,this._i=no.ar()}forEachTarget(t,n){return this.ii.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),X.resolve()}hr(t){this.ii.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this._i=new no(n),this.highestTargetId=n),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,n){return this.hr(n),this.targetCount+=1,X.resolve()}updateTargetData(t,n){return this.hr(n),X.resolve()}removeTargetData(t,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ii.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ii.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,n){const s=this.ii.get(n)||null;return X.resolve(s)}addMatchingKeys(t,n,s){return this.oi.Kr(n,s),X.resolve()}removeMatchingKeys(t,n,s){this.oi.Gr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.oi.zr(n),X.resolve()}getMatchingKeysForTargetId(t,n){const s=this.oi.Jr(n);return X.resolve(s)}containsKey(t,n){return X.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(t,n){this.ai={},this.overlays={},this.ui=new _h(0),this.ci=!1,this.ci=!0,this.li=new hD,this.referenceDelegate=t(this),this.hi=new gD(this),this.indexManager=new J2,this.remoteDocumentCache=function(o){return new dD(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new W2(n),this.Ti=new uD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new cD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ai[t.toKey()];return s||(s=new fD(n,this.referenceDelegate),this.ai[t.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new pD(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(t,n){return X.or(Object.values(this.ai).map(s=>()=>s.containsKey(t,n)))}}class pD extends GC{constructor(t){super(),this.currentSequenceNumber=t}}class ig{constructor(t){this.persistence=t,this.Ai=new ng,this.Ri=null}static Vi(t){return new ig(t)}get mi(){if(this.Ri)return this.Ri;throw yt(60996)}addReference(t,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),X.resolve()}removeReference(t,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(t,n){return this.mi.add(n.toString()),X.resolve()}removeTarget(t,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Ii(){this.Ri=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,s=>{const o=ct.fromPath(s);return this.fi(t,o).next(u=>{u||n.removeEntry(o,At.min())})}).next(()=>(this.Ri=null,n.apply(t)))}updateLimboDocument(t,n){return this.fi(t,n).next(s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(t){return 0}fi(t,n){return X.or([()=>X.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class sh{constructor(t,n){this.persistence=t,this.gi=new Ks(s=>YC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=sD(this,n)}static Vi(t,n){return new sh(t,n)}Ii(){}di(t){return X.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}mr(t){const n=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}yr(t){let n=0;return this.gr(t,s=>{n++}).next(()=>n)}gr(t,n){return X.forEach(this.gi,(s,o)=>this.Sr(t,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(t,f=>this.Sr(t,f,n).next(m=>{m||(s++,u.removeEntry(f,At.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.gi.set(n,t.currentSequenceNumber),X.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.gi.set(s,t.currentSequenceNumber),X.resolve()}removeReference(t,n,s){return this.gi.set(s,t.currentSequenceNumber),X.resolve()}updateLimboDocument(t,n){return this.gi.set(n,t.currentSequenceNumber),X.resolve()}Pi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Lc(t.data.value)),n}Sr(t,n,s){return X.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.gi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Is=s,this.ds=o}static Es(t,n){let s=Mt(),o=Mt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new rg(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Db()?8:KC(Ze())>0?6:4}()}initialize(t,n){this.gs=t,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ps(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ys(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new yD;return this.ws(t,n,f).next(m=>{if(u.result=m,this.Rs)return this.Ss(t,n,f,m.size)})}).next(()=>u.result)}Ss(t,n,s,o){return s.documentReadCount<this.Vs?(ja()<=Vt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Ha(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(ja()<=Vt.DEBUG&&st("QueryEngine","Query:",Ha(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ja()<=Vt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Ha(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,mi(n))):X.resolve())}ps(t,n){if(Qv(n))return X.resolve(null);let s=mi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=ym(n,null,"F"),s=mi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Mt(...u);return this.gs.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.bs(n,m);return this.Ds(n,y,f,p.readTime)?this.ps(t,ym(n,null,"F")):this.vs(t,y,n,p)}))})))}ys(t,n,s,o){return Qv(n)||o.isEqual(At.min())?X.resolve(null):this.gs.getDocuments(t,s).next(u=>{const f=this.bs(n,u);return this.Ds(n,f,s,o)?X.resolve(null):(ja()<=Vt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ha(n)),this.vs(t,f,n,qC(o,Ul)).next(m=>m))})}bs(t,n){let s=new Ie(AT(t));return n.forEach((o,u)=>{Ah(t,u)&&(s=s.add(u))}),s}Ds(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(t,n,s){return ja()<=Vt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Ha(n)),this.gs.getDocumentsMatchingQuery(t,n,jr.min(),s)}vs(t,n,s,o){return this.gs.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="LocalStore",vD=3e8;class ED{constructor(t,n,s,o){this.persistence=t,this.Cs=n,this.serializer=o,this.Fs=new se(It),this.Ms=new Ks(u=>Xm(u),$m),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(s)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lD(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Fs))}}function TD(r,t,n,s){return new ED(r,t,n,s)}async function GT(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ns(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Mt();for(const y of o){f.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}for(const y of u){m.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Bs:y,removedBatchIds:f,addedBatchIds:m}))})})}function AD(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Os.newChangeBuffer({trackRemovals:!0});return function(m,p,y,T){const b=y.batch,R=b.keys();let L=X.resolve();return R.forEach(W=>{L=L.next(()=>T.getEntry(p,W)).next(J=>{const $=y.docVersions.get(W);Ht($!==null,48541),J.version.compareTo($)<0&&(b.applyToRemoteDocument(J,y),J.isValidDocument()&&(J.setReadTime(y.commitVersion),T.addEntry(J)))})}),L.next(()=>m.mutationQueue.removeMutationBatch(p,b))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Mt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function KT(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hi.getLastRemoteSnapshotVersion(n))}function SD(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Os.newChangeBuffer({trackRemovals:!0});o=n.Fs;const m=[];t.targetChanges.forEach((T,b)=>{const R=o.get(b);if(!R)return;m.push(n.hi.removeMatchingKeys(u,T.removedDocuments,b).next(()=>n.hi.addMatchingKeys(u,T.addedDocuments,b)));let L=R.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?L=L.withResumeToken(Ge.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):T.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(T.resumeToken,s)),o=o.insert(b,L),function(J,$,Tt){return J.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=vD?!0:Tt.addedDocuments.size+Tt.modifiedDocuments.size+Tt.removedDocuments.size>0}(R,L,T)&&m.push(n.hi.updateTargetData(u,L))});let p=Ji(),y=Mt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(bD(u,f,t.documentUpdates).next(T=>{p=T.Ls,y=T.ks})),!s.isEqual(At.min())){const T=n.hi.getLastRemoteSnapshotVersion(u).next(b=>n.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Fs=o,u))}function bD(r,t,n){let s=Mt(),o=Mt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Ji();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):st(sg,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Ls:f,ks:o}})}function wD(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Km),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function RD(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.hi.getTargetData(s,t).next(u=>u?(o=u,X.resolve(o)):n.hi.allocateTargetId(s).next(f=>(o=new Pr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(t,s.targetId)),s})}async function Am(r,t,n){const s=St(r),o=s.Fs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!uo(f))throw f;st(sg,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Fs=s.Fs.remove(t),s.Ms.delete(o.target)}function aE(r,t,n){const s=St(r);let o=At.min(),u=Mt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,T){const b=St(p),R=b.Ms.get(T);return R!==void 0?X.resolve(b.Fs.get(R)):b.hi.getTargetData(y,T)}(s,f,mi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?u:Mt())).next(m=>(ID(s,d2(t),m),{documents:m,qs:u})))}function ID(r,t,n){let s=r.xs.get(t)||At.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(t,s)}class oE{constructor(){this.activeTargetIds=v2()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class CD{constructor(){this.Fo=new oE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,n,s){this.Mo[t]=n}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new oE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="ConnectivityMonitor";class uE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){st(lE,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){st(lE,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc=null;function Sm(){return Oc===null?Oc=function(){return 268435456+Math.round(2147483648*Math.random())}():Oc++,"0x"+Oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="RestConnection",OD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ND{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+t.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Jc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(t,n,s,o,u){const f=Sm(),m=this.Go(t,n.toUriEncodedString());st(Wd,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,u);const{host:y}=new URL(m),T=ro(y);return this.jo(t,m,p,s,T).then(b=>(st(Wd,`Received RPC '${t}' ${f}: `,b),b),b=>{throw qr(Wd,`RPC '${t}' ${f} failed with error: `,b,"url: ",m,"request:",s),b})}Jo(t,n,s,o,u,f){return this.Wo(t,n,s,o,u)}zo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}Go(t,n){const s=OD[t];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class MD extends ND{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,n,s,o,u){const f=Sm();return new Promise((m,p)=>{const y=new Q0;y.setWithCredentials(!0),y.listenOnce(Y0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case xc.NO_ERROR:const b=y.getResponseJson();st(Xe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),m(b);break;case xc.TIMEOUT:st(Xe,`RPC '${t}' ${f} timed out`),p(new rt(Q.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const R=y.getStatus();if(st(Xe,`RPC '${t}' ${f} failed with status:`,R,"response text:",y.getResponseText()),R>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const W=L?.error;if(W&&W.status&&W.message){const J=function(Tt){const ht=Tt.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(ht)>=0?ht:Q.UNKNOWN}(W.status);p(new rt(J,W.message))}else p(new rt(Q.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new rt(Q.UNAVAILABLE,"Connection failed."));break;default:yt(9055,{c_:t,streamId:f,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{st(Xe,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);st(Xe,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}P_(t,n,s){const o=Sm(),u=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=W0(),m=$0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const T=u.join("");st(Xe,`Creating RPC '${t}' stream ${o}: ${T}`,p);const b=f.createWebChannel(T,p);this.T_(b);let R=!1,L=!1;const W=new VD({Ho:$=>{L?st(Xe,`Not sending because RPC '${t}' stream ${o} is closed:`,$):(R||(st(Xe,`Opening RPC '${t}' stream ${o} transport.`),b.open(),R=!0),st(Xe,`RPC '${t}' stream ${o} sending:`,$),b.send($))},Yo:()=>b.close()}),J=($,Tt,ht)=>{$.listen(Tt,ot=>{try{ht(ot)}catch(wt){setTimeout(()=>{throw wt},0)}})};return J(b,bl.EventType.OPEN,()=>{L||(st(Xe,`RPC '${t}' stream ${o} transport opened.`),W.s_())}),J(b,bl.EventType.CLOSE,()=>{L||(L=!0,st(Xe,`RPC '${t}' stream ${o} transport closed`),W.__(),this.I_(b))}),J(b,bl.EventType.ERROR,$=>{L||(L=!0,qr(Xe,`RPC '${t}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),W.__(new rt(Q.UNAVAILABLE,"The operation could not be completed")))}),J(b,bl.EventType.MESSAGE,$=>{var Tt;if(!L){const ht=$.data[0];Ht(!!ht,16349);const ot=ht,wt=ot?.error||((Tt=ot[0])===null||Tt===void 0?void 0:Tt.error);if(wt){st(Xe,`RPC '${t}' stream ${o} received error:`,wt);const vt=wt.status;let Pt=function(I){const N=_e[I];if(N!==void 0)return MT(N)}(vt),V=wt.message;Pt===void 0&&(Pt=Q.INTERNAL,V="Unknown error status: "+vt+" with message "+wt.message),L=!0,W.__(new rt(Pt,V)),b.close()}else st(Xe,`RPC '${t}' stream ${o} received:`,ht),W.a_(ht)}}),J(m,X0.STAT_EVENT,$=>{$.stat===cm.PROXY?st(Xe,`RPC '${t}' stream ${o} detected buffering proxy`):$.stat===cm.NOPROXY&&st(Xe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.o_()},0),W}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(n=>n===t)}}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(r){return new L2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Fi=t,this.timerId=n,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="PersistentStream";class YT{constructor(t,n,s,o,u,f,m,p){this.Fi=t,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new QT(t,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(Zi(n.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(n)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===n&&this.W_(s,o)},s=>{t(()=>{const o=new rt(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(t,n){const s=this.K_(this.b_);this.stream=this.z_(t,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return st(cE,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return n=>{this.Fi.enqueueAndForget(()=>this.b_===t?n():(st(cE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PD extends YT{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}z_(t,n){return this.connection.P_("Listen",t,n)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const n=B2(this.serializer,t),s=function(u){if(!("targetChange"in u))return At.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?pi(f.readTime):At.min()}(t);return this.listener.J_(n,s)}H_(t){const n={};n.database=Tm(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=gm(p)?{documents:H2(u,p)}:{query:F2(u,p).Vt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=xT(u,f.resumeToken);const y=_m(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){m.readTime=rh(u,f.snapshotVersion.toTimestamp());const y=_m(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=K2(this.serializer,t);s&&(n.labels=s),this.k_(n)}Y_(t){const n={};n.database=Tm(this.serializer),n.removeTarget=t,this.k_(n)}}class kD extends YT{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,n){return this.connection.P_("Write",t,n)}j_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const n=j2(t.writeResults,t.commitTime),s=pi(t.commitTime);return this.listener.ta(s,n)}na(){const t={};t.database=Tm(this.serializer),this.k_(t)}X_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>q2(this.serializer,s))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{}class LD extends xD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new rt(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(t,vm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new rt(Q.UNKNOWN,u.toString())})}Jo(t,n,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Jo(t,vm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new rt(Q.UNKNOWN,f.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class UD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zi(n),this._a=!1):st("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="RemoteStore";class zD{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(f=>{s.enqueueAndForget(async()=>{Ys(this)&&(st(qs,"Restarting streams for network reachability change."),await async function(p){const y=St(p);y.Ia.add(4),await Jl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Ih(y)}(this))})}),this.Aa=new UD(s,o)}}async function Ih(r){if(Ys(r))for(const t of r.da)await t(!0)}async function Jl(r){for(const t of r.da)await t(!1)}function XT(r,t){const n=St(r);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),ug(n)?lg(n):ho(n).x_()&&og(n,t))}function ag(r,t){const n=St(r),s=ho(n);n.Ta.delete(t),s.x_()&&$T(n,t),n.Ta.size===0&&(s.x_()?s.B_():Ys(n)&&n.Aa.set("Unknown"))}function og(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ho(r).H_(t)}function $T(r,t){r.Ra.$e(t),ho(r).Y_(t)}function lg(r){r.Ra=new M2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),ho(r).start(),r.Aa.aa()}function ug(r){return Ys(r)&&!ho(r).M_()&&r.Ta.size>0}function Ys(r){return St(r).Ia.size===0}function WT(r){r.Ra=void 0}async function BD(r){r.Aa.set("Online")}async function qD(r){r.Ta.forEach((t,n)=>{og(r,t)})}async function jD(r,t){WT(r),ug(r)?(r.Aa.la(t),lg(r)):r.Aa.set("Unknown")}async function HD(r,t,n){if(r.Aa.set("Online"),t instanceof kT&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ta.delete(m),o.Ra.removeTarget(m))}(r,t)}catch(s){st(qs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ah(r,s)}else if(t instanceof Bc?r.Ra.Ye(t):t instanceof PT?r.Ra.it(t):r.Ra.et(t),!n.isEqual(At.min()))try{const s=await KT(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Ra.Pt(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const T=u.Ta.get(y);T&&u.Ta.set(y,T.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const T=u.Ta.get(p);if(!T)return;u.Ta.set(p,T.withResumeToken(Ge.EMPTY_BYTE_STRING,T.snapshotVersion)),$T(u,p);const b=new Pr(T.target,p,y,T.sequenceNumber);og(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){st(qs,"Failed to raise snapshot:",s),await ah(r,s)}}async function ah(r,t,n){if(!uo(t))throw t;r.Ia.add(1),await Jl(r),r.Aa.set("Offline"),n||(n=()=>KT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(qs,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await Ih(r)})}function ZT(r,t){return t().catch(n=>ah(r,n,t))}async function Ch(r){const t=St(r),n=Kr(t);let s=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Km;for(;FD(t);)try{const o=await wD(t.localStore,s);if(o===null){t.Pa.length===0&&n.B_();break}s=o.batchId,GD(t,o)}catch(o){await ah(t,o)}JT(t)&&tA(t)}function FD(r){return Ys(r)&&r.Pa.length<10}function GD(r,t){r.Pa.push(t);const n=Kr(r);n.x_()&&n.Z_&&n.X_(t.mutations)}function JT(r){return Ys(r)&&!Kr(r).M_()&&r.Pa.length>0}function tA(r){Kr(r).start()}async function KD(r){Kr(r).na()}async function QD(r){const t=Kr(r);for(const n of r.Pa)t.X_(n.mutations)}async function YD(r,t,n){const s=r.Pa.shift(),o=Jm.from(s,t,n);await ZT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Ch(r)}async function XD(r,t){t&&Kr(r).Z_&&await async function(s,o){if(function(f){return N2(f)&&f!==Q.ABORTED}(o.code)){const u=s.Pa.shift();Kr(s).N_(),await ZT(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Ch(s)}}(r,t),JT(r)&&tA(r)}async function hE(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),st(qs,"RemoteStore received new credentials");const s=Ys(n);n.Ia.add(3),await Jl(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Ih(n)}async function $D(r,t){const n=St(r);t?(n.Ia.delete(2),await Ih(n)):t||(n.Ia.add(2),await Jl(n),n.Aa.set("Unknown"))}function ho(r){return r.Va||(r.Va=function(n,s,o){const u=St(n);return u.ia(),new PD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:BD.bind(null,r),e_:qD.bind(null,r),n_:jD.bind(null,r),J_:HD.bind(null,r)}),r.da.push(async t=>{t?(r.Va.N_(),ug(r)?lg(r):r.Aa.set("Unknown")):(await r.Va.stop(),WT(r))})),r.Va}function Kr(r){return r.ma||(r.ma=function(n,s,o){const u=St(n);return u.ia(),new kD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:KD.bind(null,r),n_:XD.bind(null,r),ea:QD.bind(null,r),ta:YD.bind(null,r)}),r.da.push(async t=>{t?(r.ma.N_(),await Ch(r)):(await r.ma.stop(),r.Pa.length>0&&(st(qs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new cg(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hg(r,t){if(Zi("AsyncQueue",`${t}: ${r}`),uo(r))return new rt(Q.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{static emptySet(t){return new $a(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ct.comparator(n.key,s.key):(n,s)=>ct.comparator(n.key,s.key),this.keyedMap=wl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof $a)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new $a;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.fa=new se(ct.comparator)}track(t){const n=t.doc.key,s=this.fa.get(n);s?t.type!==0&&s.type===3?this.fa=this.fa.insert(n,t):t.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.fa=this.fa.remove(n):t.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):yt(63341,{At:t,ga:s}):this.fa=this.fa.insert(n,t)}pa(){const t=[];return this.fa.inorderTraversal((n,s)=>{t.push(s)}),t}}class io{constructor(t,n,s,o,u,f,m,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new io(t,n,$a.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Th(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class ZD{constructor(){this.queries=dE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=dE(),u.forEach((f,m)=>{for(const p of m.wa)p.onError(s)})})(this,new rt(Q.ABORTED,"Firestore shutting down"))}}function dE(){return new Ks(r=>TT(r),Th)}async function JD(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Sa()&&t.ba()&&(s=2):(u=new WD,s=t.ba()?0:1);try{switch(s){case 0:u.ya=await n.onListen(o,!0);break;case 1:u.ya=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=hg(f,`Initialization of query '${Ha(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.wa.push(t),t.va(n.onlineState),u.ya&&t.Ca(u.ya)&&fg(n)}async function tO(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.wa.indexOf(t);f>=0&&(u.wa.splice(f,1),u.wa.length===0?o=t.ba()?0:1:!u.Sa()&&t.ba()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function eO(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.wa)m.Ca(o)&&(s=!0);f.ya=o}}s&&fg(n)}function nO(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.wa)u.onError(n);s.queries.delete(t)}function fg(r){r.Da.forEach(t=>{t.next()})}var bm,mE;(mE=bm||(bm={})).Fa="default",mE.Cache="cache";class iO{constructor(t,n,s){this.query=t,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new io(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),n=!0):this.Ba(t,this.onlineState)&&(this.La(t),n=!0),this.Oa=t,n}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),n=!0),n}Ba(t,n){if(!t.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(t){t=io.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==bm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(t){this.key=t}}class nA{constructor(t){this.key=t}}class rO{constructor(t,n){this.query=t,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Mt(),this.mutatedKeys=Mt(),this.Xa=AT(t),this.eu=new $a(this.Xa)}get tu(){return this.Ha}nu(t,n){const s=n?n.ru:new fE,o=n?n.eu:this.eu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,b)=>{const R=o.get(T),L=Ah(this.query,b)?b:null,W=!!R&&this.mutatedKeys.has(R.key),J=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let $=!1;R&&L?R.data.isEqual(L.data)?W!==J&&(s.track({type:3,doc:L}),$=!0):this.iu(R,L)||(s.track({type:2,doc:L}),$=!0,(p&&this.Xa(L,p)>0||y&&this.Xa(L,y)<0)&&(m=!0)):!R&&L?(s.track({type:0,doc:L}),$=!0):R&&!L&&(s.track({type:1,doc:R}),$=!0,(p||y)&&(m=!0)),$&&(L?(f=f.add(L),u=J?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:f,ru:s,Ds:m,mutatedKeys:u}}iu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const f=t.ru.pa();f.sort((T,b)=>function(L,W){const J=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt(20277,{At:$})}};return J(L)-J(W)}(T.type,b.type)||this.Xa(T.doc,b.doc)),this.su(s),o=o!=null&&o;const m=n&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,f.length!==0||y?{snapshot:new io(this.query,t.eu,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=Mt(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const n=[];return t.forEach(s=>{this.Za.has(s)||n.push(new nA(s))}),this.Za.forEach(s=>{t.has(s)||n.push(new eA(s))}),n}uu(t){this.Ha=t.qs,this.Za=Mt();const n=this.nu(t.documents);return this.applyChanges(n,!0)}cu(){return io.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const dg="SyncEngine";class sO{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class aO{constructor(t){this.key=t,this.lu=!1}}class oO{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new Ks(m=>TT(m),Th),this.Tu=new Map,this.Iu=new Set,this.du=new se(ct.comparator),this.Eu=new Map,this.Au=new ng,this.Ru={},this.Vu=new Map,this.mu=no.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function lO(r,t,n=!0){const s=lA(r);let o;const u=s.Pu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await iA(s,t,n,!0),o}async function uO(r,t){const n=lA(r);await iA(n,t,!0,!1)}async function iA(r,t,n,s){const o=await RD(r.localStore,mi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await cO(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&XT(r.remoteStore,o),m}async function cO(r,t,n,s,o){r.gu=(b,R,L)=>async function(J,$,Tt,ht){let ot=$.view.nu(Tt);ot.Ds&&(ot=await aE(J.localStore,$.query,!1).then(({documents:V})=>$.view.nu(V,ot)));const wt=ht&&ht.targetChanges.get($.targetId),vt=ht&&ht.targetMismatches.get($.targetId)!=null,Pt=$.view.applyChanges(ot,J.isPrimaryClient,wt,vt);return pE(J,$.targetId,Pt._u),Pt.snapshot}(r,b,R,L);const u=await aE(r.localStore,t,!0),f=new rO(t,u.qs),m=f.nu(u.documents),p=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);pE(r,n,y._u);const T=new sO(t,n,f);return r.Pu.set(t,T),r.Tu.has(n)?r.Tu.get(n).push(t):r.Tu.set(n,[t]),y.snapshot}async function hO(r,t,n){const s=St(r),o=s.Pu.get(t),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(f=>!Th(f,t))),void s.Pu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Am(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&ag(s.remoteStore,o.targetId),wm(s,o.targetId)}).catch(lo)):(wm(s,o.targetId),await Am(s.localStore,o.targetId,!0))}async function fO(r,t){const n=St(r),s=n.Pu.get(t),o=n.Tu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),ag(n.remoteStore,s.targetId))}async function dO(r,t,n){const s=EO(r);try{const o=await function(f,m){const p=St(f),y=ee.now(),T=m.reduce((L,W)=>L.add(W.key),Mt());let b,R;return p.persistence.runTransaction("Locally write mutations","readwrite",L=>{let W=Ji(),J=Mt();return p.Os.getEntries(L,T).next($=>{W=$,W.forEach((Tt,ht)=>{ht.isValidDocument()||(J=J.add(Tt))})}).next(()=>p.localDocuments.getOverlayedDocuments(L,W)).next($=>{b=$;const Tt=[];for(const ht of m){const ot=R2(ht,b.get(ht.key).overlayedDocument);ot!=null&&Tt.push(new Qs(ht.key,ot,fT(ot.value.mapValue),gi.exists(!0)))}return p.mutationQueue.addMutationBatch(L,y,Tt,m)}).next($=>{R=$;const Tt=$.applyToLocalDocumentSet(b,J);return p.documentOverlayCache.saveOverlays(L,$.batchId,Tt)})}).then(()=>({batchId:R.batchId,changes:bT(b)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Ru[f.currentUser.toKey()];y||(y=new se(It)),y=y.insert(m,p),f.Ru[f.currentUser.toKey()]=y}(s,o.batchId,n),await tu(s,o.changes),await Ch(s.remoteStore)}catch(o){const u=hg(o,"Failed to persist write");n.reject(u)}}async function rA(r,t){const n=St(r);try{const s=await SD(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.lu=!0:o.modifiedDocuments.size>0?Ht(f.lu,14607):o.removedDocuments.size>0&&(Ht(f.lu,42227),f.lu=!1))}),await tu(n,s,t)}catch(s){await lo(s)}}function gE(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Pu.forEach((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=St(f);p.onlineState=m;let y=!1;p.queries.forEach((T,b)=>{for(const R of b.wa)R.va(m)&&(y=!0)}),y&&fg(p)}(s.eventManager,t),o.length&&s.hu.J_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function mO(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),u=o&&o.key;if(u){let f=new se(ct.comparator);f=f.insert(u,We.newNoDocument(u,At.min()));const m=Mt().add(u),p=new wh(At.min(),new Map,new se(It),f,m);await rA(s,p),s.du=s.du.remove(u),s.Eu.delete(t),mg(s)}else await Am(s.localStore,t,!1).then(()=>wm(s,t,n)).catch(lo)}async function gO(r,t){const n=St(r),s=t.batch.batchId;try{const o=await AD(n.localStore,t);aA(n,s,null),sA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tu(n,o)}catch(o){await lo(o)}}async function pO(r,t,n){const s=St(r);try{const o=await function(f,m){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return p.mutationQueue.lookupMutationBatch(y,m).next(b=>(Ht(b!==null,37113),T=b.keys(),p.mutationQueue.removeMutationBatch(y,b))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,T,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>p.localDocuments.getDocuments(y,T))})}(s.localStore,t);aA(s,t,n),sA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await tu(s,o)}catch(o){await lo(o)}}function sA(r,t){(r.Vu.get(t)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(t)}function aA(r,t,n){const s=St(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Ru[s.currentUser.toKey()]=o}}function wm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Tu.get(t))r.Pu.delete(s),n&&r.hu.pu(s,n);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach(s=>{r.Au.containsKey(s)||oA(r,s)})}function oA(r,t){r.Iu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(ag(r.remoteStore,n),r.du=r.du.remove(t),r.Eu.delete(n),mg(r))}function pE(r,t,n){for(const s of n)s instanceof eA?(r.Au.addReference(s.key,t),yO(r,s)):s instanceof nA?(st(dg,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,t),r.Au.containsKey(s.key)||oA(r,s.key)):yt(19791,{yu:s})}function yO(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Iu.has(s)||(st(dg,"New document in limbo: "+n),r.Iu.add(s),mg(r))}function mg(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const n=new ct(te.fromString(t)),s=r.mu.next();r.Eu.set(s,new aO(n)),r.du=r.du.insert(n,s),XT(r.remoteStore,new Pr(mi(vT(n.path)),s,"TargetPurposeLimboResolution",_h.ue))}}async function tu(r,t,n){const s=St(r),o=[],u=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach((m,p)=>{f.push(s.gu(p,t,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:(T=n?.targetChanges.get(p.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(y){o.push(y);const b=rg.Es(p.targetId,y);u.push(b)}}))}),await Promise.all(f),s.hu.J_(o),await async function(p,y){const T=St(p);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>X.forEach(y,R=>X.forEach(R.Is,L=>T.persistence.referenceDelegate.addReference(b,R.targetId,L)).next(()=>X.forEach(R.ds,L=>T.persistence.referenceDelegate.removeReference(b,R.targetId,L)))))}catch(b){if(!uo(b))throw b;st(sg,"Failed to update sequence numbers: "+b)}for(const b of y){const R=b.targetId;if(!b.fromCache){const L=T.Fs.get(R),W=L.snapshotVersion,J=L.withLastLimboFreeSnapshotVersion(W);T.Fs=T.Fs.insert(R,J)}}}(s.localStore,u))}async function _O(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){st(dg,"User change. New user:",t.toKey());const s=await GT(n.localStore,t);n.currentUser=t,function(u,f){u.Vu.forEach(m=>{m.forEach(p=>{p.reject(new rt(Q.CANCELLED,f))})}),u.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await tu(n,s.Bs)}}function vO(r,t){const n=St(r),s=n.Eu.get(t);if(s&&s.lu)return Mt().add(s.key);{let o=Mt();const u=n.Tu.get(t);if(!u)return o;for(const f of u){const m=n.Pu.get(f);o=o.unionWith(m.view.tu)}return o}}function lA(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=rA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mO.bind(null,t),t.hu.J_=eO.bind(null,t.eventManager),t.hu.pu=nO.bind(null,t.eventManager),t}function EO(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pO.bind(null,t),t}class oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rh(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,n){return null}Fu(t,n){return null}vu(t){return TD(this.persistence,new _D,t.initialUser,this.serializer)}Du(t){return new FT(ig.Vi,this.serializer)}bu(t){return new CD}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oh.provider={build:()=>new oh};class TO extends oh{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,n){Ht(this.persistence.referenceDelegate instanceof sh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new iD(s,t.asyncQueue,n)}Du(t){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new FT(s=>sh.Vi(s,n),this.serializer)}}class Rm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_O.bind(null,this.syncEngine),await $D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ZD}()}createDatastore(t){const n=Rh(t.databaseInfo.databaseId),s=function(u){return new MD(u)}(t.databaseInfo);return function(u,f,m,p){return new LD(u,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new zD(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>gE(this.syncEngine,n,0),function(){return uE.C()?new uE:new DD}())}createSyncEngine(t,n){return function(o,u,f,m,p,y,T){const b=new oO(o,u,f,m,p,y);return T&&(b.fu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);st(qs,"RemoteStore shutting down."),u.Ia.add(5),await Jl(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rm.provider={build:()=>new Rm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Zi("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="FirestoreClient";class SO{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=$e.UNAUTHENTICATED,this.clientId=Gm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{st(Qr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(Qr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=hg(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Jd(r,t){r.asyncQueue.verifyOperationInProgress(),st(Qr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await GT(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>{qr("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{st("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{qr("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=t}async function yE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await bO(r);st(Qr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>hE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>hE(t.remoteStore,o)),r._onlineComponents=t}async function bO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(Qr,"Using user provided OfflineComponentProvider");try{await Jd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Jd(r,new oh)}}else st(Qr,"Using default OfflineComponentProvider"),await Jd(r,new TO(void 0));return r._offlineComponents}async function uA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(Qr,"Using user provided OnlineComponentProvider"),await yE(r,r._uninitializedComponentsProvider._online)):(st(Qr,"Using default OnlineComponentProvider"),await yE(r,new Rm))),r._onlineComponents}function wO(r){return uA(r).then(t=>t.syncEngine)}async function RO(r){const t=await uA(r),n=t.eventManager;return n.onListen=lO.bind(null,t.syncEngine),n.onUnlisten=hO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=uO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=fO.bind(null,t.syncEngine),n}function IO(r,t,n={}){const s=new Ur;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const T=new AO({next:R=>{T.Ou(),f.enqueueAndForget(()=>tO(u,b)),R.fromCache&&p.source==="server"?y.reject(new rt(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),b=new iO(m,T,{includeMetadataChanges:!0,ka:!0});return JD(u,b)}(await RO(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="firestore.googleapis.com",vE=!0;class EE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hA,this.ssl=vE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:vE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=HT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<eD)throw new rt(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}BC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new rt(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new rt(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new rt(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Dh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new rt(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new rt(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new NC;switch(s.type){case"firstParty":return new kC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new rt(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=_E.get(n);s&&(st("ComponentProvider","Removing Datastore"),_E.delete(n),s.terminate())}(this),Promise.resolve()}}function CO(r,t,n,s={}){var o;r=Ll(r,Dh);const u=ro(t),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;u&&(ME(`https://${p}`),PE("Firestore",!0)),f.host!==hA&&f.host!==p&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:u,emulatorOptions:s});if(!Br(y,m)&&(r._setSettings(y),s.mockUserToken)){let T,b;if(typeof s.mockUserToken=="string")T=s.mockUserToken,b=$e.MOCK_USER;else{T=Tb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new rt(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new $e(R)}r._authCredentials=new VC(new J0(T,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Xs(this.firestore,t,this._query)}}class ke{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ke(this.firestore,t,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if($l(n,ke._jsonSchema))return new ke(t,s||null,new ct(te.fromString(n.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Te("string",ke._jsonSchemaVersion),referencePath:Te("string")};class zr extends Xs{constructor(t,n,s){super(t,n,vT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ke(this.firestore,null,new ct(t))}withConverter(t){return new zr(this.firestore,t,this._path)}}function fA(r,t,...n){if(r=Fe(r),eT("collection","path",t),r instanceof Dh){const s=te.fromString(t,...n);return Mv(s),new zr(r,null,s)}{if(!(r instanceof ke||r instanceof zr))throw new rt(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return Mv(s),new zr(r.firestore,null,s)}}function dA(r,t,...n){if(r=Fe(r),arguments.length===1&&(t=Gm.newId()),eT("doc","path",t),r instanceof Dh){const s=te.fromString(t,...n);return Vv(s),new ke(r,null,new ct(s))}{if(!(r instanceof ke||r instanceof zr))throw new rt(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return Vv(s),new ke(r.firestore,r instanceof zr?r.converter:null,new ct(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="AsyncQueue";class AE{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new QT(this,"async_queue_retry"),this.oc=()=>{const s=Zd();s&&st(TE,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=t;const n=Zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Ur;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!uo(t))throw t;st(TE,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const n=this._c.then(()=>(this.nc=!0,t().catch(s=>{throw this.tc=s,this.nc=!1,Zi("INTERNAL UNHANDLED ERROR: ",SE(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(t,n,s){this.ac(),this.sc.indexOf(t)>-1&&(n=0);const o=cg.createAndSchedule(this,t,n,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&yt(47125,{hc:SE(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const n of this.ec)if(n.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const n=this.ec.indexOf(t);this.ec.splice(n,1)}}function SE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Oh extends Dh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new AE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new AE(t),this._firestoreClient=void 0,await t}}}function DO(r,t){const n=typeof r=="object"?r:Dm(),s=typeof r=="string"?r:Jc,o=Hs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=vb("firestore");u&&CO(o,...u)}return o}function mA(r){if(r._terminated)throw new rt(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OO(r),r._firestoreClient}function OO(r){var t,n,s;const o=r._freezeSettings(),u=function(m,p,y,T){return new WC(m,p,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,cA(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new SO(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m?._online.build();return{_offline:m?._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pn(Ge.fromBase64String(t))}catch(n){throw new rt(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pn(Ge.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($l(t,Pn._jsonSchema))return Pn.fromBase64String(t.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:Te("string",Pn._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return It(this._lat,t._lat)||It(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yi._jsonSchemaVersion}}static fromJSON(t){if($l(t,yi._jsonSchema))return new yi(t.latitude,t.longitude)}}yi._jsonSchemaVersion="firestore/geoPoint/1.0",yi._jsonSchema={type:Te("string",yi._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}toJSON(){return{type:_i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($l(t,_i._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new _i(t.vectorValues);throw new rt(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_i._jsonSchemaVersion="firestore/vectorValue/1.0",_i._jsonSchema={type:Te("string",_i._jsonSchemaVersion),vectorValues:Te("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=/^__.*__$/;class VO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Qs(t,this.data,this.fieldMask,n,this.fieldTransforms):new Wl(t,this.data,n,this.fieldTransforms)}}function pA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt(40011,{Ec:r})}}class pg{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new pg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Rc({path:s,mc:!1});return o.fc(t),o}gc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return lh(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(pA(this.Ec)&&NO.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class MO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Rh(t)}Dc(t,n,s,o=!1){return new pg({Ec:t,methodName:n,bc:s,path:He.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yA(r){const t=r._freezeSettings(),n=Rh(r._databaseId);return new MO(r._databaseId,!!t.ignoreUndefinedProperties,n)}function PO(r,t,n,s,o,u={}){const f=r.Dc(u.merge||u.mergeFields?2:0,t,n,o);EA("Data must be an object, but it was:",f,s);const m=_A(s,f);let p,y;if(u.merge)p=new Hn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const b of u.mergeFields){const R=xO(t,b,n);if(!f.contains(R))throw new rt(Q.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);UO(T,R)||T.push(R)}p=new Hn(T),y=f.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,y=f.fieldTransforms;return new VO(new Mn(m),p,y)}function kO(r,t,n,s=!1){return yg(n,r.Dc(s?4:3,t))}function yg(r,t){if(vA(r=Fe(r)))return EA("Unsupported field value:",t,r),_A(r,t);if(r instanceof gA)return function(s,o){if(!pA(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=yg(m,o.yc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=Fe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return E2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ee.fromDate(s);return{timestampValue:rh(o.serializer,u)}}if(s instanceof ee){const u=new ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:rh(o.serializer,u)}}if(s instanceof yi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:xT(o.serializer,s._byteString)};if(s instanceof ke){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:eg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof _i)return function(f,m){return{mapValue:{fields:{[cT]:{stringValue:hT},[th]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.wc("VectorValues must only contain numeric values.");return Wm(m.serializer,y)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${yh(s)}`)}(r,t)}function _A(r,t){const n={};return rT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gs(r,(s,o)=>{const u=yg(o,t.Vc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function vA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof yi||r instanceof Pn||r instanceof ke||r instanceof gA||r instanceof _i)}function EA(r,t,n){if(!vA(n)||!nT(n)){const s=yh(n);throw s==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+s)}}function xO(r,t,n){if((t=Fe(t))instanceof gg)return t._internalPath;if(typeof t=="string")return TA(r,t);throw lh("Field path arguments must be of type string or ",r,!1,void 0,n)}const LO=new RegExp("[~\\*/\\[\\]]");function TA(r,t,n){if(t.search(LO)>=0)throw lh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new gg(...t.split("."))._internalPath}catch{throw lh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function lh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new rt(Q.INVALID_ARGUMENT,m+r+p)}function UO(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Nh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zO extends AA{data(){return super.data()}}function Nh(r,t){return typeof t=="string"?TA(r,t):t instanceof gg?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new rt(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{}class SA extends _g{}function qO(r,t,...n){let s=[];t instanceof _g&&s.push(t),s=s.concat(n),function(u){const f=u.filter(p=>p instanceof vg).length,m=u.filter(p=>p instanceof Vh).length;if(f>1||f>0&&m>0)throw new rt(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Vh extends SA{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Vh(t,n,s)}_apply(t){const n=this._parse(t);return bA(t._query,n),new Xs(t.firestore,t.converter,pm(t._query,n))}_parse(t){const n=yA(t.firestore);return function(u,f,m,p,y,T,b){let R;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new rt(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){wE(b,T);const W=[];for(const J of b)W.push(bE(p,u,J));R={arrayValue:{values:W}}}else R=bE(p,u,b)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||wE(b,T),R=kO(m,f,b,T==="in"||T==="not-in");return Ee.create(y,T,R)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function jO(r,t,n){const s=t,o=Nh("where",r);return Vh._create(o,s,n)}class vg extends _g{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new vg(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)bA(f,p),f=pm(f,p)}(t._query,n),new Xs(t.firestore,t.converter,pm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eg extends SA{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Eg(t,n)}_apply(t){const n=function(o,u,f){if(o.startAt!==null)throw new rt(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new rt(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jl(u,f)}(t._query,this._field,this._direction);return new Xs(t.firestore,t.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new co(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,n))}}function HO(r,t="asc"){const n=t,s=Nh("orderBy",r);return Eg._create(s,n)}function bE(r,t,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new rt(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ET(t)&&n.indexOf("/")!==-1)throw new rt(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(te.fromString(n));if(!ct.isDocumentKey(s))throw new rt(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qv(r,new ct(s))}if(n instanceof ke)return qv(r,n._key);throw new rt(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yh(n)}.`)}function wE(r,t){if(!Array.isArray(r)||r.length===0)throw new rt(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bA(r,t){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new rt(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new rt(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class FO{convertValue(t,n="none"){switch(Gr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return de(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Fr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Gs(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[th].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>de(f.doubleValue));return new _i(u)}convertGeoPoint(t){return new yi(de(t.latitude),de(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Eh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zl(t));default:return null}}convertTimestamp(t){const n=Hr(t);return new ee(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=te.fromString(t);Ht(jT(s),9688,{name:t});const o=new Bl(s.get(1),s.get(3)),u=new ct(s.popFirst(5));return o.isEqual(n)||Zi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class Nc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wa extends AA{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Nh("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new rt(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Wa._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Wa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wa._jsonSchema={type:Te("string",Wa._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class qc extends Wa{data(t={}){return super.data(t)}}class Za{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Nc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new qc(this._firestore,this._userDataWriter,s.key,s,new Nc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Nc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Nc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:KO(m.type),doc:p,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new rt(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Za._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Gm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function KO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt(61501,{type:r})}}Za._jsonSchemaVersion="firestore/querySnapshot/1.0",Za._jsonSchema={type:Te("string",Za._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};class QO extends FO{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function YO(r){r=Ll(r,Xs);const t=Ll(r.firestore,Oh),n=mA(t),s=new QO(t);return BO(r._query),IO(n,r._query).then(o=>new Za(t,s,r,o))}function XO(r){return wA(Ll(r.firestore,Oh),[new Zm(r._key,gi.none())])}function $O(r,t){const n=Ll(r.firestore,Oh),s=dA(r),o=GO(r.converter,t);return wA(n,[PO(yA(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,gi.exists(!1))]).then(()=>s)}function wA(r,t){return function(s,o){const u=new Ur;return s.asyncQueue.enqueueAndForget(async()=>dO(await wO(s),o,u)),u.promise}(mA(r),t)}(function(t,n=!0){(function(o){oo=o})(so),vi(new Fn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Oh(new MC(s.getProvider("auth-internal")),new xC(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new rt(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bl(y.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),kn(Iv,Cv,t),kn(Iv,Cv,"esm2017")})();const WO={apiKey:"AIzaSyB_851yvrL4JUz33TAl_ruxurOtT4Rrud0",authDomain:"my-finance-tracker-82c77.firebaseapp.com",projectId:"my-finance-tracker-82c77",storageBucket:"my-finance-tracker-82c77.firebasestorage.app",messagingSenderId:"623672480384",appId:"1:623672480384:web:5bdeef1416359f846d0c65",measurementId:"G-NJSJSBS90K"},Tg=qE(WO);IC(Tg);const Ag=DO(Tg),uh=lI(Tg),ZO=({onLogin:r})=>{const[t,n]=ve.useState(""),[s,o]=ve.useState(""),[u,f]=ve.useState(!0),[m,p]=ve.useState(""),[y,T]=ve.useState(!1),b=async R=>{R.preventDefault(),T(!0),p("");try{if(u){const L=await Q1(uh,t,s);console.log("User logged in:",L.user),r(L.user)}else{const L=await K1(uh,t,s);console.log("User registered:",L.user),r(L.user)}}catch(L){p(L.message),console.error("Authentication error:",L)}finally{T(!1)}};return z.createElement("div",{style:{maxWidth:"400px",margin:"50px auto",padding:"20px"}},z.createElement("h2",null,u?"Login":"Register"),m&&z.createElement("div",{style:{color:"red",marginBottom:"10px"}},m),z.createElement("form",{onSubmit:b},z.createElement("div",{style:{marginBottom:"15px"}},z.createElement("label",null,"Email:"),z.createElement("input",{type:"email",value:t,onChange:R=>n(R.target.value),required:!0,style:{width:"100%",padding:"8px",marginTop:"5px"}})),z.createElement("div",{style:{marginBottom:"15px"}},z.createElement("label",null,"Password:"),z.createElement("input",{type:"password",value:s,onChange:R=>o(R.target.value),required:!0,style:{width:"100%",padding:"8px",marginTop:"5px"}})),z.createElement("button",{type:"submit",disabled:y,style:{width:"100%",padding:"10px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:y?"not-allowed":"pointer"}},y?"Please wait...":u?"Login":"Register")),z.createElement("p",{style:{textAlign:"center",marginTop:"20px"}},u?"Don't have an account? ":"Already have an account? ",z.createElement("button",{type:"button",onClick:()=>f(!u),style:{background:"none",border:"none",color:"#007bff",cursor:"pointer",textDecoration:"underline"}},u?"Register":"Login")))},JO=async(r,t)=>{try{console.log("Adding transaction for user:",r);const n={...t,userId:r,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s=await $O(fA(Ag,"transactions"),n);return console.log("Transaction added with ID:",s.id),{id:s.id,...n}}catch(n){throw console.error("Error adding transaction:",n),n}},tN=async r=>{try{console.log("Getting transactions for user:",r);const t=qO(fA(Ag,"transactions"),jO("userId","==",r),HO("createdAt","desc")),n=await YO(t),s=[];return n.forEach(o=>{s.push({id:o.id,...o.data()})}),console.log("Found",s.length,"transactions"),s}catch(t){throw console.error("Error getting transactions:",t),t}},eN=async r=>{try{if(console.log("Deleting transaction:",r),console.log("Transaction ID type:",typeof r),!r)throw new Error("Transaction ID is required");const t=String(r).trim();if(!t)throw new Error("Invalid transaction ID");return console.log("Using string transaction ID:",t),await XO(dA(Ag,"transactions",t)),console.log("Transaction deleted successfully"),t}catch(t){throw console.error("Error deleting transaction:",t),console.error("Original transaction ID:",r),console.error("Transaction ID type:",typeof r),t}};function nN(){const[r,t]=ve.useState(null),[n,s]=ve.useState(!0),[o,u]=ve.useState([]),[f,m]=ve.useState(!1),[p,y]=ve.useState(null);ve.useEffect(()=>{const J=$1(uh,$=>{t($),s(!1),$?console.log("User authenticated:",$.email):(console.log("User not authenticated"),u([]))});return()=>J()},[]),ve.useEffect(()=>{r&&T()},[r]);const T=async()=>{if(r)try{m(!0),y(null);const J=await tN(r.uid);console.log("Loaded transactions:",J),J.length>0&&(console.log("First transaction:",J[0]),console.log("First transaction ID:",J[0].id),console.log("First transaction ID type:",typeof J[0].id)),u(J),console.log("Loaded transactions:",J.length)}catch(J){y("Failed to load transactions"),console.error("Error loading transactions:",J)}finally{m(!1)}},b=async J=>{if(console.log("=== DEBUG: Adding transaction ==="),console.log("User:",r),console.log("Transaction data:",J),!r){y("You must be logged in to add transactions");return}try{y(null),console.log("Calling addTransactionToDB...");const $=await JO(r.uid,J);console.log("New transaction returned:",$),u(Tt=>{const ht=[$,...Tt];return console.log("Updated transactions:",ht),ht}),console.log("Transaction added successfully")}catch($){y("Failed to add transaction: "+$.message),console.error("Error adding transaction:",$)}},R=async J=>{if(console.log("=== DEBUG: Deleting transaction ==="),console.log("Transaction ID:",J),console.log("Transaction ID type:",typeof J),console.log("Current transactions:",o),!r){y("You must be logged in to delete transactions");return}if(!J){y("Invalid transaction ID"),console.error("Transaction ID is missing or invalid");return}const $=String(J);console.log("String transaction ID:",$);const Tt=o.find(ot=>ot.id===$);if(console.log("Transaction exists in state:",Tt),!window.confirm("Are you sure you want to delete this transaction?")){console.log("User cancelled deletion");return}try{y(null),console.log("Calling deleteTransactionFromDB with:",$),await eN($),console.log("Database deletion successful"),u(ot=>{const wt=ot.filter(vt=>String(vt.id)!==$);return console.log("Filtered transactions:",wt),console.log("Original count:",ot.length,"New count:",wt.length),wt}),console.log("Transaction deleted successfully")}catch(ot){y("Failed to delete transaction: "+ot.message),console.error("Error deleting transaction:",ot),console.error("Full error object:",ot)}},L=J=>{t(J),console.log("User logged in successfully:",J.email)},W=async()=>{try{await W1(uh),t(null),u([]),y(null),console.log("User logged out successfully")}catch(J){console.error("Error logging out:",J)}};return n?z.createElement("div",null,z.createElement(zd,null),z.createElement("div",{style:{textAlign:"center",padding:"50px",fontSize:"18px",color:"#666"}},z.createElement("div",null,"Loading..."))):r?z.createElement("div",null,z.createElement(zd,null),z.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 20px",backgroundColor:"#f8f9fa",borderBottom:"1px solid #dee2e6"}},z.createElement("span",{style:{color:"#666"}},"Welcome, ",r.email),z.createElement("button",{onClick:W,style:{padding:"8px 16px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Logout")),p&&z.createElement("div",{style:{color:"#d32f2f",textAlign:"center",padding:"12px",backgroundColor:"#ffebee",margin:"10px",borderRadius:"8px",border:"1px solid #ffcdd2"}},p,z.createElement("button",{onClick:T,style:{marginLeft:"10px",padding:"4px 8px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Retry")),f&&z.createElement("div",{style:{textAlign:"center",padding:"20px",color:"#666"}},"Loading transactions..."),!f&&o.length===0&&!p&&z.createElement("div",{style:{textAlign:"center",padding:"20px",color:"#666",backgroundColor:"#f5f5f5",margin:"10px",borderRadius:"8px"}},"No transactions yet. Add your first transaction below!"),z.createElement(ab,{onAddTransaction:b}),z.createElement(cb,{transactions:o}),z.createElement(lb,{transactions:o,onDelete:R}),z.createElement(ob,{transactions:o})):z.createElement("div",null,z.createElement(zd,null),z.createElement(ZO,{onLogin:L}))}rb.createRoot(document.getElementById("root")).render(z.createElement(ve.StrictMode,null,z.createElement(nN,null)));
