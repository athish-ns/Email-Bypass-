(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{1683:function(e,n,o){"use strict";o.d(n,{Z:function(){return createReactComponent}});var i=o(2265),c=o(4275),u=o.n(c),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},s=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,n,o)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,__spreadValues=(e,n)=>{for(var o in n||(n={}))g.call(n,o)&&__defNormalProp(e,o,n[o]);if(m)for(var o of m(n))v.call(n,o)&&__defNormalProp(e,o,n[o]);return e},__spreadProps=(e,n)=>f(e,d(n)),__objRest=(e,n)=>{var o={};for(var i in e)g.call(e,i)&&0>n.indexOf(i)&&(o[i]=e[i]);if(null!=e&&m)for(var i of m(e))0>n.indexOf(i)&&v.call(e,i)&&(o[i]=e[i]);return o},createReactComponent=(e,n,o)=>{let c=(0,i.forwardRef)((n,c)=>{var{color:u="currentColor",size:s=24,stroke:f=2,children:d}=n,m=__objRest(n,["color","size","stroke","children"]);return(0,i.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:c},l),{width:s,height:s,stroke:u,strokeWidth:f,className:`tabler-icon tabler-icon-${e}`}),m),[...o.map(([e,n])=>(0,i.createElement)(e,n)),...d||[]])});return c.propTypes={color:u().string,size:u().oneOfType([u().string,u().number]),stroke:u().oneOfType([u().string,u().number])},c.displayName=`${n}`,c}},3018:function(e,n,o){"use strict";var i=o(1289);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,n,o,c,u,l){if(l!==i){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},4275:function(e,n,o){e.exports=o(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3386:function(e,n,o){"use strict";o.d(n,{Z:function(){return O}});var i,c,u,__assign=function(){return(__assign=Object.assign||function(e){for(var n,o=1,i=arguments.length;o<i;o++)for(var c in n=arguments[o])Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);return e}).apply(this,arguments)};function __rest(e,n){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>n.indexOf(i)&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,i=Object.getOwnPropertySymbols(e);c<i.length;c++)0>n.indexOf(i[c])&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(o[i[c]]=e[i[c]]);return o}function __spreadArray(e,n,o){if(o||2==arguments.length)for(var i,c=0,u=n.length;c<u;c++)!i&&c in n||(i||(i=Array.prototype.slice.call(n,0,c)),i[c]=n[c]);return e.concat(i||Array.prototype.slice.call(n))}"function"==typeof SuppressedError&&SuppressedError;var l=o(2265),s="right-scroll-bar-position",f="width-before-scroll-bar";function assignRef(e,n){return"function"==typeof e?e(n):e&&(e.current=n),e}function useCallbackRef(e,n){var o=(0,l.useState)(function(){return{value:e,callback:n,facade:{get current(){return o.value},set current(value){var i=o.value;i!==value&&(o.value=value,o.callback(value,i))}}}})[0];return o.callback=n,o.facade}function useMergeRefs(e,n){return useCallbackRef(n||null,function(n){return e.forEach(function(e){return assignRef(e,n)})})}function ItoI(e){return e}var d=(void 0===i&&(i={}),(c=function innerCreateMedium(e,n){void 0===n&&(n=ItoI);var o=[],i=!1;return{read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:e},useMedium:function(e){var c=n(e,i);return o.push(c),function(){o=o.filter(function(e){return e!==c})}},assignSyncMedium:function(e){for(i=!0;o.length;){var n=o;o=[],n.forEach(e)}o={push:function(n){return e(n)},filter:function(){return o}}},assignMedium:function(e){i=!0;var n=[];if(o.length){var c=o;o=[],c.forEach(e),n=o}var executeQueue=function(){var o=n;n=[],o.forEach(e)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),o={push:function(e){n.push(e),cycle()},filter:function(e){return n=n.filter(e),o}}}}}(null)).options=__assign({async:!0,ssr:!1},i),c),nothing=function(){},m=l.forwardRef(function(e,n){var o=l.useRef(null),i=l.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),c=i[0],u=i[1],s=e.forwardProps,f=e.children,m=e.className,g=e.removeScrollBar,v=e.enabled,y=e.shards,b=e.sideCar,S=e.noIsolation,w=e.inert,_=e.allowPinchZoom,E=e.as,C=void 0===E?"div":E,O=e.gapMode,R=__rest(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=useMergeRefs([o,n]),x=__assign(__assign({},R),c);return l.createElement(l.Fragment,null,v&&l.createElement(b,{sideCar:d,removeScrollBar:g,shards:y,noIsolation:S,inert:w,setCallbacks:u,allowPinchZoom:!!_,lockRef:o,gapMode:O}),s?l.cloneElement(l.Children.only(f),__assign(__assign({},x),{ref:P})):l.createElement(C,__assign({},x,{className:m,ref:P}),f))});m.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},m.classNames={fullWidth:f,zeroRight:s};var SideCar=function(e){var n=e.sideCar,o=__rest(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=n.read();if(!i)throw Error("Sidecar medium not found");return l.createElement(i,__assign({},o))};function exportSidecar(e,n){return e.useMedium(n),SideCar}function makeStyleTag(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=u||o.nc;return n&&e.setAttribute("nonce",n),e}function injectStyles(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function insertStyleTag(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}SideCar.isSideCarExport=!0;var stylesheetSingleton=function(){var e=0,n=null;return{add:function(o){0==e&&(n=makeStyleTag())&&(injectStyles(n,o),insertStyleTag(n)),e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},styleHookSingleton=function(){var e=stylesheetSingleton();return function(n,o){l.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&o])}},styleSingleton=function(){var e=styleHookSingleton();return function(n){return e(n.styles,n.dynamic),null}},g={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var n=window.getComputedStyle(document.body),o=n["padding"===e?"paddingLeft":"marginLeft"],i=n["padding"===e?"paddingTop":"marginTop"],c=n["padding"===e?"paddingRight":"marginRight"];return[parse(o),parse(i),parse(c)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return g;var n=getOffset(e),o=document.documentElement.clientWidth,i=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,i-o+n[2]-n[0])}},v=styleSingleton(),getStyles=function(e,n,o,i){var c=e.left,u=e.top,l=e.right,d=e.gap;return void 0===o&&(o="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(i,";\n   padding-right: ").concat(d,"px ").concat(i,";\n  }\n  body {\n    overflow: hidden ").concat(i,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(i,";"),"margin"===o&&"\n    padding-left: ".concat(c,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(l,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d,"px ").concat(i,";\n    "),"padding"===o&&"padding-right: ".concat(d,"px ").concat(i,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(s," {\n    right: ").concat(d,"px ").concat(i,";\n  }\n  \n  .").concat(f," {\n    margin-right: ").concat(d,"px ").concat(i,";\n  }\n  \n  .").concat(s," .").concat(s," {\n    right: 0 ").concat(i,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    margin-right: 0 ").concat(i,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(d,"px;\n  }\n")},RemoveScrollBar=function(e){var n=e.noRelative,o=e.noImportant,i=e.gapMode,c=void 0===i?"margin":i,u=l.useMemo(function(){return getGapWidth(c)},[c]);return l.createElement(v,{styles:getStyles(u,!n,c,o?"":"!important")})},y=!1;if("undefined"!=typeof window)try{var b=Object.defineProperty({},"passive",{get:function(){return y=!0,!0}});window.addEventListener("test",b,b),window.removeEventListener("test",b,b)}catch(e){y=!1}var S=!!y&&{passive:!1},elementCanBeScrolled=function(e,n){var o=window.getComputedStyle(e);return"hidden"!==o[n]&&!(o.overflowY===o.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===o[n])},locationCouldBeScrolled=function(e,n){var o=n.ownerDocument,i=n;do{if("undefined"!=typeof ShadowRoot&&i instanceof ShadowRoot&&(i=i.host),elementCouldBeScrolled(e,i)){var c=getScrollVariables(e,i);if(c[1]>c[2])return!0}i=i.parentNode}while(i&&i!==o.body);return!1},elementCouldBeScrolled=function(e,n){return"v"===e?elementCanBeScrolled(n,"overflowY"):elementCanBeScrolled(n,"overflowX")},getScrollVariables=function(e,n){return"v"===e?[n.scrollTop,n.scrollHeight,n.clientHeight]:[n.scrollLeft,n.scrollWidth,n.clientWidth]},handleScroll=function(e,n,o,i,c){var u,l=(u=window.getComputedStyle(n).direction,"h"===e&&"rtl"===u?-1:1),s=l*i,f=o.target,d=n.contains(f),m=!1,g=s>0,v=0,y=0;do{var b=getScrollVariables(e,f),S=b[0],w=b[1]-b[2]-l*S;(S||w)&&elementCouldBeScrolled(e,f)&&(v+=w,y+=S),f=f instanceof ShadowRoot?f.host:f.parentNode}while(!d&&f!==document.body||d&&(n.contains(f)||n===f));return g&&(c&&1>Math.abs(v)||!c&&s>v)?m=!0:!g&&(c&&1>Math.abs(y)||!c&&-s>y)&&(m=!0),m},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},w=0,_=[];function getOutermostShadowParent(e){for(var n=null;null!==e;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}var E=exportSidecar(d,function(e){var n=l.useRef([]),o=l.useRef([0,0]),i=l.useRef(),c=l.useState(w++)[0],u=l.useState(styleSingleton)[0],s=l.useRef(e);l.useEffect(function(){s.current=e},[e]),l.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var n=__spreadArray([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var f=l.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!s.current.allowPinchZoom;var c,u=getTouchXY(e),l=o.current,f="deltaX"in e?e.deltaX:l[0]-u[0],d="deltaY"in e?e.deltaY:l[1]-u[1],m=e.target,g=Math.abs(f)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===g&&"range"===m.type)return!1;var v=locationCouldBeScrolled(g,m);if(!v)return!0;if(v?c=g:(c="v"===g?"h":"v",v=locationCouldBeScrolled(g,m)),!v)return!1;if(!i.current&&"changedTouches"in e&&(f||d)&&(i.current=c),!c)return!0;var y=i.current||c;return handleScroll(y,n,e,"h"===y?f:d,!0)},[]),d=l.useCallback(function(e){if(_.length&&_[_.length-1]===u){var o="deltaY"in e?getDeltaXY(e):getTouchXY(e),i=n.current.filter(function(n){var i;return n.name===e.type&&(n.target===e.target||e.target===n.shadowParent)&&(i=n.delta)[0]===o[0]&&i[1]===o[1]})[0];if(i&&i.should){e.cancelable&&e.preventDefault();return}if(!i){var c=(s.current.shards||[]).map(extractRef).filter(Boolean).filter(function(n){return n.contains(e.target)});(c.length>0?f(e,c[0]):!s.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),m=l.useCallback(function(e,o,i,c){var u={name:e,delta:o,target:i,should:c,shadowParent:getOutermostShadowParent(i)};n.current.push(u),setTimeout(function(){n.current=n.current.filter(function(e){return e!==u})},1)},[]),g=l.useCallback(function(e){o.current=getTouchXY(e),i.current=void 0},[]),v=l.useCallback(function(n){m(n.type,getDeltaXY(n),n.target,f(n,e.lockRef.current))},[]),y=l.useCallback(function(n){m(n.type,getTouchXY(n),n.target,f(n,e.lockRef.current))},[]);l.useEffect(function(){return _.push(u),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:y}),document.addEventListener("wheel",d,S),document.addEventListener("touchmove",d,S),document.addEventListener("touchstart",g,S),function(){_=_.filter(function(e){return e!==u}),document.removeEventListener("wheel",d,S),document.removeEventListener("touchmove",d,S),document.removeEventListener("touchstart",g,S)}},[]);var b=e.removeScrollBar,E=e.inert;return l.createElement(l.Fragment,null,E?l.createElement(u,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,b?l.createElement(RemoveScrollBar,{gapMode:e.gapMode}):null)}),C=l.forwardRef(function(e,n){return l.createElement(m,__assign({},e,{ref:n,sideCar:E}))});C.classNames=m.classNames;var O=C},7960:function(e,n,o){"use strict";o(2265),o(4040)},1853:function(e,n,o){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=o(2265);function h(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var c="function"==typeof Object.is?Object.is:h,u=i.useState,l=i.useEffect,s=i.useLayoutEffect,f=i.useDebugValue;function q(e,n){var o=n(),i=u({inst:{value:o,getSnapshot:n}}),c=i[0].inst,d=i[1];return s(function(){c.value=o,c.getSnapshot=n,r(c)&&d({inst:c})},[e,o,n]),l(function(){return r(c)&&d({inst:c}),e(function(){r(c)&&d({inst:c})})},[e]),f(o),o}function r(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!c(e,o)}catch(e){return!0}}function t(e,n){return n()}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?t:q;n.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:d},8704:function(e,n,o){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=o(2265),c=o(6272);function p(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var u="function"==typeof Object.is?Object.is:p,l=c.useSyncExternalStore,s=i.useRef,f=i.useEffect,d=i.useMemo,m=i.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,o,i,c){var g=s(null);if(null===g.current){var v={hasValue:!1,value:null};g.current=v}else v=g.current;var y=l(e,(g=d(function(){function a(n){if(!s){if(s=!0,e=n,n=i(n),void 0!==c&&v.hasValue){var o=v.value;if(c(o,n))return l=o}return l=n}if(o=l,u(e,n))return o;var f=i(n);return void 0!==c&&c(o,f)?o:(e=n,l=f)}var e,l,s=!1,f=void 0===o?null:o;return[function(){return a(n())},null===f?void 0:function(){return a(f())}]},[n,o,i,c]))[0],g[1]);return f(function(){v.hasValue=!0,v.value=y},[y]),m(y),y}},6272:function(e,n,o){"use strict";e.exports=o(1853)},5401:function(e,n,o){"use strict";e.exports=o(8704)},8893:function(e,n,o){"use strict";o.d(n,{Z:function(){return C}});var i=o(2265);function filterFalsyChildren(e){return i.Children.toArray(e).filter(Boolean)}var c={root:"m-4081bf90"},u=o(9748),l=o(1222),s=o(2817),f=o(2141),d=o(1154),m=o(1292),g=Object.defineProperty,v=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,n,o)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,__spreadValues=(e,n)=>{for(var o in n||(n={}))S.call(n,o)&&__defNormalProp(e,o,n[o]);if(b)for(var o of b(n))w.call(n,o)&&__defNormalProp(e,o,n[o]);return e},__spreadProps=(e,n)=>v(e,y(n)),__objRest=(e,n)=>{var o={};for(var i in e)S.call(e,i)&&0>n.indexOf(i)&&(o[i]=e[i]);if(null!=e&&b)for(var i of b(e))0>n.indexOf(i)&&w.call(e,i)&&(o[i]=e[i]);return o};let _={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},E=(0,m.Z)((e,{grow:n,preventGrowOverflow:o,gap:i,align:c,justify:l,wrap:s},{childWidth:f})=>({root:{"--group-child-width":n&&o?f:void 0,"--group-gap":(0,u.bG)(i),"--group-align":c,"--group-justify":l,"--group-wrap":s}})),C=(0,l.d)((e,n)=>{let o=(0,s.w)("Group",_,e),{classNames:l,className:m,style:g,styles:v,unstyled:y,children:b,gap:S,align:w,justify:C,wrap:O,grow:R,preventGrowOverflow:P,vars:x,variant:k,__size:T}=o,j=__objRest(o,["classNames","className","style","styles","unstyled","children","gap","align","justify","wrap","grow","preventGrowOverflow","vars","variant","__size"]),N=filterFalsyChildren(b),B=N.length,I=(0,u.bG)(null!=S?S:"md"),M=`calc(${100/B}% - (${I} - ${I} / ${B}))`,L=(0,f.y)({name:"Group",props:o,stylesCtx:{childWidth:M},className:m,style:g,classes:c,classNames:l,styles:v,unstyled:y,vars:x,varsResolver:E});return i.createElement(d.x,__spreadValues(__spreadProps(__spreadValues({},L("root")),{ref:n,variant:k,mod:{grow:R},size:T}),j),N)});C.classes=c,C.displayName="@mantine/core/Group"},7305:function(e,n,o){"use strict";o.d(n,{R:function(){return createSafeContext}});var i=o(2265);function createSafeContext(e){let n=(0,i.createContext)(null);return[({children:e,value:o})=>i.createElement(n.Provider,{value:o},e),()=>{let o=(0,i.useContext)(n);if(null===o)throw Error(e);return o}]}},2444:function(e,n,o){"use strict";o.d(n,{q:function(){return useDisclosure}});var i=o(2265);function useDisclosure(e=!1,n){let{onOpen:o,onClose:c}=n||{},[u,l]=(0,i.useState)(e),s=(0,i.useCallback)(()=>{l(e=>e||(null==o||o(),!0))},[o]),f=(0,i.useCallback)(()=>{l(e=>e?(null==c||c(),!1):e)},[c]),d=(0,i.useCallback)(()=>{u?f():s()},[f,s,u]);return[u,{open:s,close:f,toggle:d}]}},853:function(e,n,o){"use strict";o.d(n,{s:function(){return useWindowEvent}});var i=o(2265);function useWindowEvent(e,n,o){(0,i.useEffect)(()=>(window.addEventListener(e,n,o),()=>window.removeEventListener(e,n,o)),[e,n])}},4660:function(e,n,o){"use strict";o.d(n,{Ue:function(){return create}});let createStoreImpl=e=>{let n;let o=new Set,setState=(e,i)=>{let c="function"==typeof e?e(n):e;if(!Object.is(c,n)){let e=n;n=(null!=i?i:"object"!=typeof c)?c:Object.assign({},n,c),o.forEach(o=>o(n,e))}},getState=()=>n,i={setState,getState,subscribe:e=>(o.add(e),()=>o.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}};return n=e(setState,getState,i),i},createStore=e=>e?createStoreImpl(e):createStoreImpl;var i=o(2265),c=o(5401);let{useDebugValue:u}=i,{useSyncExternalStoreWithSelector:l}=c,s=!1;function useStore(e,n=e.getState,o){o&&!s&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),s=!0);let i=l(e.subscribe,e.getState,e.getServerState||e.getState,n,o);return u(i),i}let createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let n="function"==typeof e?createStore(e):e,useBoundStore=(e,o)=>useStore(n,e,o);return Object.assign(useBoundStore,n),useBoundStore},create=e=>e?createImpl(e):createImpl}}]);