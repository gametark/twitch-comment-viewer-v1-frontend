(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{87138:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var n=r(231),i=r.n(n)},844:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(18157);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25944:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(18157),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let n=r(99920),i=r(57437),s=n._(r(2265)),a=r(98016),o=r(18029),u=r(41142),l=r(43461),c=r(844),h=r(60291),f=r(44467),d=r(53106),p=r(25944),m=r(4897),y=r(51507),g=new Set;function b(e,t,r,n,i,s){if("undefined"!=typeof window&&(s||(0,o.isLocalURL)(t))){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}Promise.resolve(s?e.prefetch(t,i):e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let P=s.default.forwardRef(function(e,t){let r,n;let{href:u,as:g,children:P,prefetch:O=null,passHref:C,replace:w,shallow:R,scroll:_,locale:E,onClick:M,onMouseEnter:j,onTouchStart:x,legacyBehavior:S=!1,...q}=e;r=P,S&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let N=s.default.useContext(h.RouterContext),A=s.default.useContext(f.AppRouterContext),T=null!=N?N:A,k=!N,I=!1!==O,D=null===O?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:Q,as:L}=s.default.useMemo(()=>{if(!N){let e=v(u);return{href:e,as:g?v(g):e}}let[e,t]=(0,a.resolveHref)(N,u,!0);return{href:e,as:g?(0,a.resolveHref)(N,g):t||e}},[N,u,g]),U=s.default.useRef(Q),F=s.default.useRef(L);S&&(n=s.default.Children.only(r));let K=S?n&&"object"==typeof n&&n.ref:t,[W,V,H]=(0,d.useIntersection)({rootMargin:"200px"}),z=s.default.useCallback(e=>{(F.current!==L||U.current!==Q)&&(H(),F.current=L,U.current=Q),W(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[L,K,Q,H,W]);s.default.useEffect(()=>{T&&V&&I&&b(T,Q,L,{locale:E},{kind:D},k)},[L,Q,V,E,I,null==N?void 0:N.locale,T,k,D]);let Z={ref:z,onClick(e){S||"function"!=typeof M||M(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,i,a,u,l,c){let{nodeName:h}=e.currentTarget;if("A"===h.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:l,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})};c?s.default.startTransition(f):f()}(e,T,Q,L,w,R,_,E,k)},onMouseEnter(e){S||"function"!=typeof j||j(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(I||!k)&&b(T,Q,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:D},k)},onTouchStart:function(e){S||"function"!=typeof x||x(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(I||!k)&&b(T,Q,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:D},k)}};if((0,l.isAbsoluteUrl)(L))Z.href=L;else if(!S||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);Z.href=t||(0,m.addBasePath)((0,c.addLocale)(L,e,null==N?void 0:N.defaultLocale))}return S?s.default.cloneElement(n,Z):(0,i.jsx)("a",{...q,...Z,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},98016:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return h}});let n=r(18323),i=r(41142),s=r(45519),a=r(43461),o=r(18157),u=r(18029),l=r(59195),c=r(80020);function h(e,t,r){let h;let f="string"==typeof t?t:(0,i.formatWithValidation)(t),d=f.match(/^[a-zA-Z]{1,}:\/\//),p=d?f.slice(d[0].length):f;if((p.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+f+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(p);f=(d?d[0]:"")+t}if(!(0,u.isLocalURL)(f))return r?[f]:f;try{h=new URL(f.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){h=new URL("/","http://n")}try{let e=new URL(f,h);e.pathname=(0,o.normalizePathTrailingSlash)(e.pathname);let t="";if((0,l.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:o}=(0,c.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,i.formatWithValidation)({pathname:a,hash:e.hash,query:(0,s.omit)(r,o)}))}let a=e.origin===h.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[f]:f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53106:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(2265),i=r(49189),s="function"==typeof IntersectionObserver,a=new Map,o=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,l=u||!s,[c,h]=(0,n.useState)(!1),f=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(s){if(l||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},o.push(r),a.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),a.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&h(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,i.requestIdleCallback)(()=>h(!0));return()=>(0,i.cancelIdleCallback)(e)}},[l,r,t,c,f.current]),[d,c,(0,n.useCallback)(()=>{h(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81943:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},60291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(99920)._(r(2265)).default.createContext(null)},41142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return s},formatWithValidation:function(){return o},urlObjectKeys:function(){return a}});let n=r(41452)._(r(18323)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,s=e.protocol||"",a=e.pathname||"",o=e.hash||"",u=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||i.test(s))&&!1!==l?(l="//"+(l||""),a&&"/"!==a[0]&&(a="/"+a)):l||(l=""),o&&"#"!==o[0]&&(o="#"+o),c&&"?"!==c[0]&&(c="?"+c),""+s+l+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+o}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function o(e){return s(e)}},59195:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return i.isDynamicRoute}});let n=r(49089),i=r(28083)},80020:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return s}});let n=r(41533),i=r(63169);function s(e,t,r){let s="",a=(0,i.getRouteRegex)(e),o=a.groups,u=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;s=e;let l=Object.keys(o);return l.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=o[e],i="["+(r?"...":"")+e+"]";return n&&(i=(t?"":"/")+"["+i+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(s=s.replace(i,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(s=""),{params:l,result:s}}},28083:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return s}});let n=r(82269),i=/\/\[[^/]+?\](?=\/|$)/;function s(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),i.test(e)}},18029:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});let n=r(43461),i=r(49404);function s(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},45519:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},18323:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return s},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},41533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(43461);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let s=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>s(e)):t.repeat?[s(n)]:s(n))}),a}}},63169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return f},getNamedRouteRegex:function(){return h},getRouteRegex:function(){return u}});let n=r(82269),i=r(81943),s=r(67741);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function o(e){let t=(0,s.removeTrailingSlash)(e).slice(1).split("/"),r={},o=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),s=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&s){let{key:e,optional:n,repeat:u}=a(s[1]);return r[e]={pos:o++,repeat:u,optional:n},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!s)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=a(s[1]);return r[e]={pos:o++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=o(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function l(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:s,keyPrefix:o}=e,{key:u,optional:l,repeat:c}=a(n),h=u.replace(/\W/g,"");o&&(h=""+o+h);let f=!1;(0===h.length||h.length>30)&&(f=!0),isNaN(parseInt(h.slice(0,1)))||(f=!0),f&&(h=r()),o?s[h]=""+o+u:s[h]=u;let d=t?(0,i.escapeStringRegexp)(t):"";return c?l?"(?:/"+d+"(?<"+h+">.+?))?":"/"+d+"(?<"+h+">.+?)":"/"+d+"(?<"+h+">[^/]+?)"}function c(e,t){let r;let a=(0,s.removeTrailingSlash)(e).slice(1).split("/"),o=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:a.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),s=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&s){let[r]=e.split(s[0]);return l({getSafeRouteKey:o,interceptionMarker:r,segment:s[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return s?l({getSafeRouteKey:o,segment:s[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function h(e,t){let r=c(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function f(e,t){let{parameterizedRoute:r}=o(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=c(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},49089:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let i=e[0];if(i.startsWith("[")&&i.endsWith("]")){let r=i.slice(1,-1),a=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),a=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function s(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===i.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');s(this.optionalRestSlugName,r),this.optionalRestSlugName=r,i="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');s(this.restSlugName,r),this.restSlugName=r,i="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');s(this.slugName,r),this.slugName=r,i="[]"}}this.children.has(i)||this.children.set(i,new r),this.children.get(i)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},43461:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return f},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return o},isAbsoluteUrl:function(){return s},isResSent:function(){return l},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>i.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function o(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let f="undefined"!=typeof performance,d=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},49152:function(){},8699:function(e,t,r){"use strict";r.d(t,{S:function(){return y}});var n=r(56298),i=r(2459),s=r(69948),a=r(49010),o=class extends a.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let s=t.queryKey,a=t.queryHash??(0,n.Rm)(s,t),o=this.get(a);return o||(o=new i.A({cache:this,queryKey:s,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=r(43494),l=r(30924),c=class extends u.F{#t;#r;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#r=e.mutationCache,this.#t=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#r.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#r.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){this.#n=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#i({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#r.canRun(this)});let t="pending"===this.state.status,r=!this.#n.canStart();try{if(!t){this.#i({type:"pending",variables:e,isPaused:r}),await this.#r.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#i({type:"pending",context:t,variables:e,isPaused:r})}let n=await this.#n.start();return await this.#r.config.onSuccess?.(n,e,this.state.context,this),await this.options.onSuccess?.(n,e,this.state.context),await this.#r.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,e,this.state.context),this.#i({type:"success",data:n}),n}catch(t){try{throw await this.#r.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#r.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#i({type:"error",error:t})}}finally{this.#r.runNext(this)}}#i(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#r.notify({mutation:this,type:"updated",action:e})})}},h=class extends a.l{constructor(e={}){super(),this.config=e,this.#s=new Map,this.#a=Date.now()}#s;#a;build(e,t,r){let n=new c({mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){let t=f(e),r=this.#s.get(t)??[];r.push(e),this.#s.set(t,r),this.notify({type:"added",mutation:e})}remove(e){let t=f(e);if(this.#s.has(t)){let r=this.#s.get(t)?.filter(t=>t!==e);r&&(0===r.length?this.#s.delete(t):this.#s.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#s.get(f(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#s.get(f(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#s.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.X7)(e,t))}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return s.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.ZT))))}};function f(e){return e.options.scope?.id??String(e.mutationId)}var d=r(34939),p=r(49937);function m(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}var y=class{#o;#r;#u;#l;#c;#h;#f;#d;constructor(e={}){this.#o=e.queryCache||new o,this.#r=e.mutationCache||new h,this.#u=e.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#h=0}mount(){this.#h++,1===this.#h&&(this.#f=d.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#d=p.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#h--,0===this.#h&&(this.#f?.(),this.#f=void 0,this.#d?.(),this.#d=void 0)}isFetching(e){return this.#o.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#r.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),n=this.#o.build(this,r);return e.revalidateIfStale&&n.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#o.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.defaultQueryOptions({queryKey:e}),s=this.#o.get(i.queryHash),a=s?.state.data,o=(0,n.SE)(t,a);if(void 0!==o)return this.#o.build(this,i).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return s.V.batch(()=>this.#o.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state}removeQueries(e){let t=this.#o;s.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#o,n={type:"active",...e};return s.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(s.V.batch(()=>this.#o.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return s.V.batch(()=>{if(this.#o.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(s.V.batch(()=>this.#o.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#o.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let i=async()=>{let r;let i=e.options,s=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},c=e.options.queryFn&&e.options.queryFn!==n.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),h=async(t,r,i)=>{if(u)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let s={queryKey:e.queryKey,pageParam:r,direction:i?"backward":"forward",meta:e.options.meta};l(s);let a=await c(s),{maxPages:o}=e.options,h=i?n.Ht:n.VX;return{pages:h(t.pages,a,o),pageParams:h(t.pageParams,r,o)}};if(s&&a.length){let e="backward"===s,t={pages:a,pageParams:o},n=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:m)(i,t);r=await h(t,n,e)}else{r=await h({pages:[],pageParams:[]},o[0]??i.initialPageParam);let e=t??a.length;for(let t=1;t<e;t++){let e=m(i,r);r=await h(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=i}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#r}getDefaultOptions(){return this.#u}setDefaultOptions(e){this.#u=e}setQueryDefaults(e,t){this.#l.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#l.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#c.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#u.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#u.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#o.clear(),this.#r.clear()}}},79839:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});var n=function(){return null}}}]);