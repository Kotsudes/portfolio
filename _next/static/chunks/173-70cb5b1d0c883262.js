(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{9749:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(s){a=!0,i=s}finally{try{c||null==n.return||n.return()}finally{if(a)throw i}}return o}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,a=void 0!==r&&r,s=t.priority,l=void 0!==s&&s,g=t.loading,m=t.lazyRoot,j=void 0===m?null:m,I=t.lazyBoundary,_=void 0===I?"200px":I,z=t.className,R=t.quality,M=t.width,L=t.height,P=t.style,C=t.objectFit,D=t.objectPosition,N=t.onLoadingComplete,T=(t.onError,t.placeholder),q=void 0===T?"empty":T,F=t.blurDataURL,U=b(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),W=u.useContext(h.ImageConfigContext),B=u.useMemo((function(){var t=v||W||d.imageConfigDefault,e=c(t.deviceSizes).concat(c(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return y({},t,{allSizes:e,deviceSizes:n})}),[W]),$=U,H=n?"responsive":"intrinsic";"layout"in $&&($.layout&&(H=$.layout),delete $.layout);var J=A;if("loader"in $){if($.loader){var V=$.loader;J=function(t){t.config;var e=b(t,["config"]);return V(e)}}delete $.loader}var Y="";if(function(t){return"object"===typeof t&&(S(t)||function(t){return void 0!==t.src}(t))}(e)){var G=S(e)?e.default:e;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(F=F||G.blurDataURL,Y=G.src,(!H||"fill"!==H)&&(L=L||G.height,M=M||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}e="string"===typeof e?e:Y;var Q=k(M),X=k(L),K=k(R),Z=!l&&("lazy"===g||"undefined"===typeof g);(e.startsWith("data:")||e.startsWith("blob:"))&&(a=!0,Z=!1);w.has(e)&&(Z=!1);var tt,et=o(u.useState(!1),2),nt=et[0],rt=et[1],it=o(p.useIntersection({rootRef:j,rootMargin:_,disabled:!Z}),3),ot=it[0],ct=it[1],at=it[2],st=!Z||ct,lt={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ut={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ft=!1,dt={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:D};0;0;var pt=Object.assign({},P,"raw"===H?{aspectRatio:"".concat(Q," / ").concat(X)}:dt),ht="blur"!==q||nt?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(F,'")'),backgroundPosition:D||"0% 0%"};if("fill"===H)lt.display="block",lt.position="absolute",lt.top=0,lt.left=0,lt.bottom=0,lt.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof X){var gt=X/Q,mt=isNaN(gt)?"100%":"".concat(100*gt,"%");"responsive"===H?(lt.display="block",lt.position="relative",ft=!0,ut.paddingTop=mt):"intrinsic"===H?(lt.display="inline-block",lt.position="relative",lt.maxWidth="100%",ft=!0,ut.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===H&&(lt.display="inline-block",lt.position="relative",lt.width=Q,lt.height=X)}else 0;var yt={src:x,srcSet:void 0,sizes:void 0};st&&(yt=O({config:B,src:e,unoptimized:a,layout:H,width:Q,quality:K,sizes:n,loader:J}));var bt=e;0;var vt,wt="imagesrcset",xt="imagesizes";wt="imageSrcSet",xt="imageSizes";var jt=(i(vt={},wt,yt.srcSet),i(vt,xt,yt.sizes),vt),St=u.default.useLayoutEffect,Ot=u.useRef(N),kt=u.useRef(e);u.useEffect((function(){Ot.current=N}),[N]),St((function(){kt.current!==e&&(at(),kt.current=e)}),[at,e]);var At=y({isLazy:Z,imgAttributes:yt,heightInt:X,widthInt:Q,qualityInt:K,layout:H,className:z,imgStyle:pt,blurStyle:ht,loading:g,config:B,unoptimized:a,placeholder:q,loader:J,srcString:bt,onLoadingCompleteRef:Ot,setBlurComplete:rt,setIntersection:ot,isVisible:st},$);return u.default.createElement(u.default.Fragment,null,"raw"===H?u.default.createElement(E,Object.assign({},At)):u.default.createElement("span",{style:lt},ft?u.default.createElement("span",{style:ut},tt?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,u.default.createElement(E,Object.assign({},At))),l?u.default.createElement(f.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+yt.src+yt.srcSet+yt.sizes,rel:"preload",as:"image",href:yt.srcSet?void 0:yt.src},jt))):null)};var s,l,u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),f=(s=n(3121))&&s.__esModule?s:{default:s},d=n(139),p=n(9246),h=n(8730),g=(n(670),n(2700));function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){m(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}function b(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(g.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e.path).concat(_(n))),c=o.searchParams;c.set("auto",c.get("auto")||"format"),c.set("fit",c.get("fit")||"max"),c.set("w",c.get("w")||r.toString()),i&&c.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(_(n))}],["akamai",function(t){var e=t.config,n=t.src,r=t.width;return"".concat(e.path).concat(_(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(t){return void 0!==t.default}function O(t){var e=t.config,n=t.src,r=t.unoptimized,i=t.layout,o=t.width,a=t.quality,s=t.sizes,l=t.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(t,e,n,r){var i=t.deviceSizes,o=t.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var a,s=/(^|\s)(1?\d?\d)vw/g,l=[];a=s.exec(r);a)l.push(parseInt(a[2]));if(l.length){var u,f=.01*(u=Math).min.apply(u,c(l));return{widths:o.filter((function(t){return t>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:c(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,i,s),f=u.widths,d=u.kind,p=f.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:f.map((function(t,r){return"".concat(l({config:e,src:n,quality:a,width:t})," ").concat("w"===d?t:r+1).concat(d)})).join(", "),src:l({config:e,src:n,quality:a,width:f[p]})}}function k(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function A(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",r=j.get(n);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function I(t,e,n,r,i,o){t&&t.src!==x&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(w.add(e),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=t.naturalWidth,c=t.naturalHeight;i.current({naturalWidth:n,naturalHeight:c})}})))}var E=function(t){var e=t.imgAttributes,n=t.heightInt,r=t.widthInt,i=t.qualityInt,o=t.layout,c=t.className,a=t.imgStyle,s=t.blurStyle,l=t.isLazy,f=t.placeholder,d=t.loading,p=t.srcString,h=t.config,g=t.unoptimized,m=t.loader,v=t.onLoadingCompleteRef,w=t.setBlurComplete,x=t.setIntersection,j=t.onError,S=(t.isVisible,b(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,e,"raw"!==o||e.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:c,style:y({},a,s),ref:u.useCallback((function(t){x(t),(null===t||void 0===t?void 0:t.complete)&&I(t,p,0,f,v,w)}),[x,p,o,f,v,w]),onLoad:function(t){I(t.currentTarget,p,0,f,v,w)},onError:function(t){"blur"===f&&w(!0),j&&j(t)}})),(l||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},S,O({config:h,src:p,unoptimized:g,layout:o,width:r,quality:i,sizes:e.sizes,loader:m}),"raw"!==o||e.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:a,className:c,loading:d||"lazy"}))))};function _(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(s){a=!0,i=s}finally{try{c||null==n.return||n.return()}finally{if(a)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!a,u=o.useRef(),f=i(o.useState(!1),2),d=f[0],p=f[1],h=i(o.useState(e?e.current:null),2),g=h[0],m=h[1],y=o.useCallback((function(t){u.current&&(u.current(),u.current=void 0),r||d||t&&t.tagName&&(u.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=l.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=s.get(r):(e=s.get(n),l.push(n));if(e)return e;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return s.set(n,e={id:n,observer:o,elements:i}),e}(n),i=r.id,o=r.observer,c=r.elements;return c.set(t,e),o.observe(t),function(){if(c.delete(t),o.unobserve(t),0===c.size){o.disconnect(),s.delete(i);var e=l.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&l.splice(e,1)}}}(t,(function(t){return t&&p(t)}),{root:g,rootMargin:n}))}),[r,g,n,d]),b=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!a&&!d){var t=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(t)}}}),[d]),o.useEffect((function(){e&&m(e.current)}),[e]),[y,d,b]};var o=n(7294),c=n(4686),a="undefined"!==typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},5675:function(t,e,n){t.exports=n(9749)},1954:function(t,e,n){"use strict";n.d(e,{JO:function(){return Pt}});var r=n(7294);const i=/^[a-z0-9]+(-[a-z0-9]+)*$/,o=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function c(t){return{...o,...t}}const a=(t,e,n,r="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),o={provider:i.length>0?i[0]:r,prefix:n,name:t};return e&&!s(o)?null:o}const o=i[0],c=o.split("-");if(c.length>1){const t={provider:r,prefix:c.shift(),name:c.join("-")};return e&&!s(t)?null:t}if(n&&""===r){const t={provider:r,prefix:"",name:o};return e&&!s(t,n)?null:t}return null},s=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(i)||!(e&&""===t.prefix||t.prefix.match(i))||!t.name.match(i));function l(t,e,n=!1){const r=function e(n,r){if(void 0!==t.icons[n])return Object.assign({},t.icons[n]);if(r>5)return null;const i=t.aliases;if(i&&void 0!==i[n]){const t=i[n],c=e(t.parent,r+1);return c?function(t,e){const n={...t};for(const r in o){const t=r;if(void 0!==e[t]){const r=e[t];if(void 0===n[t]){n[t]=r;continue}switch(t){case"rotate":n[t]=(n[t]+r)%4;break;case"hFlip":case"vFlip":n[t]=r!==n[t];break;default:n[t]=r}}}return n}(c,t):c}const c=t.chars;return!r&&c&&void 0!==c[n]?e(c[n],r+1):null}(e,0);if(r)for(const i in o)void 0===r[i]&&void 0!==t[i]&&(r[i]=t[i]);return r&&n?c(r):r}function u(t,e,n){n=n||{};const r=[];if("object"!==typeof t||"object"!==typeof t.icons)return r;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),r.push(t)}));const i=t.icons;Object.keys(i).forEach((n=>{const i=l(t,n,!0);i&&(e(n,i),r.push(n))}));const c=n.aliases||"all";if("none"!==c&&"object"===typeof t.aliases){const n=t.aliases;Object.keys(n).forEach((i=>{if("variations"===c&&function(t){for(const e in o)if(void 0!==t[e])return!0;return!1}(n[i]))return;const a=l(t,i,!0);a&&(e(i,a),r.push(i))}))}return r}const f={provider:"string",aliases:"object",not_found:"object"};for(const Nt in o)f[Nt]=typeof o[Nt];function d(t){if("object"!==typeof t||null===t)return null;const e=t;if("string"!==typeof e.prefix||!t.icons||"object"!==typeof t.icons)return null;for(const i in f)if(void 0!==t[i]&&typeof t[i]!==f[i])return null;const n=e.icons;for(const c in n){const t=n[c];if(!c.match(i)||"string"!==typeof t.body)return null;for(const e in o)if(void 0!==t[e]&&typeof t[e]!==typeof o[e])return null}const r=e.aliases;if(r)for(const c in r){const t=r[c],e=t.parent;if(!c.match(i)||"string"!==typeof e||!n[e]&&!r[e])return null;for(const n in o)if(void 0!==t[n]&&typeof t[n]!==typeof o[n])return null}return e}let p=Object.create(null);try{const t=window||self;t&&1===t._iconifyStorage.version&&(p=t._iconifyStorage.storage)}catch(Ct){}function h(t,e){void 0===p[t]&&(p[t]=Object.create(null));const n=p[t];return void 0===n[e]&&(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:Object.create(null)}}(t,e)),n[e]}function g(t,e){if(!d(e))return[];const n=Date.now();return u(e,((e,r)=>{r?t.icons[e]=r:t.missing[e]=n}))}function m(t,e){const n=t.icons[e];return void 0===n?null:n}let y=!1;function b(t){return"boolean"===typeof t&&(y=t),y}function v(t){const e="string"===typeof t?a(t,!0,y):t;return e?m(h(e.provider,e.prefix),e.name):null}function w(t,e){const n=a(t,!0,y);if(!n)return!1;return function(t,e,n){try{if("string"===typeof n.body)return t.icons[e]=Object.freeze(c(n)),!0}catch(Ct){}return!1}(h(n.provider,n.prefix),n.name,e)}const x=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function j(t,e){const n={};for(const r in t){const i=r;if(n[i]=t[i],void 0===e[i])continue;const o=e[i];switch(i){case"inline":case"slice":"boolean"===typeof o&&(n[i]=o);break;case"hFlip":case"vFlip":!0===o&&(n[i]=!n[i]);break;case"hAlign":case"vAlign":"string"===typeof o&&""!==o&&(n[i]=o);break;case"width":case"height":("string"===typeof o&&""!==o||"number"===typeof o&&o||null===o)&&(n[i]=o);break;case"rotate":"number"===typeof o&&(n[i]+=o)}}return n}const S=/(-?[0-9.]*[0-9]+[0-9.]*)/g,O=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function k(t,e,n){if(1===e)return t;if(n=void 0===n?100:n,"number"===typeof t)return Math.ceil(t*e*n)/n;if("string"!==typeof t)return t;const r=t.split(S);if(null===r||!r.length)return t;const i=[];let o=r.shift(),c=O.test(o);for(;;){if(c){const t=parseFloat(o);isNaN(t)?i.push(o):i.push(Math.ceil(t*e*n)/n)}else i.push(o);if(o=r.shift(),void 0===o)return i.join("");c=!c}}function A(t){let e="";switch(t.hAlign){case"left":e+="xMin";break;case"right":e+="xMax";break;default:e+="xMid"}switch(t.vAlign){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+=t.slice?" slice":" meet",e}function I(t,e){const n={left:t.left,top:t.top,width:t.width,height:t.height};let r,i,o=t.body;[t,e].forEach((t=>{const e=[],r=t.hFlip,i=t.vFlip;let c,a=t.rotate;switch(r?i?a+=2:(e.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),e.push("scale(-1 1)"),n.top=n.left=0):i&&(e.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),e.push("scale(1 -1)"),n.top=n.left=0),a<0&&(a-=4*Math.floor(a/4)),a%=4,a){case 1:c=n.height/2+n.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:c=n.width/2+n.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}a%2===1&&(0===n.left&&0===n.top||(c=n.left,n.left=n.top,n.top=c),n.width!==n.height&&(c=n.width,n.width=n.height,n.height=c)),e.length&&(o='<g transform="'+e.join(" ")+'">'+o+"</g>")})),null===e.width&&null===e.height?(i="1em",r=k(i,n.width/n.height)):null!==e.width&&null!==e.height?(r=e.width,i=e.height):null!==e.height?(i=e.height,r=k(i,n.width/n.height)):(r=e.width,i=k(r,n.height/n.width)),"auto"===r&&(r=n.width),"auto"===i&&(i=n.height),r="string"===typeof r?r:r.toString()+"",i="string"===typeof i?i:i.toString()+"";const c={attributes:{width:r,height:i,preserveAspectRatio:A(e),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:o};return e.inline&&(c.inline=!0),c}const E=/\sid="(\S+)"/g,_="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let z=0;function R(t,e=_){const n=[];let r;for(;r=E.exec(t);)n.push(r[1]);return n.length?(n.forEach((n=>{const r="function"===typeof e?e(n):e+(z++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")})),t):t}const M=Object.create(null);function L(t,e){M[t]=e}function P(t){return M[t]||M[""]}function C(t){let e;if("string"===typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:void 0===t.path?"/":t.path,maxURL:t.maxURL?t.maxURL:500,rotate:t.rotate?t.rotate:750,timeout:t.timeout?t.timeout:5e3,random:!0===t.random,index:t.index?t.index:0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const D=Object.create(null),N=["https://api.simplesvg.com","https://api.unisvg.com"],T=[];for(;N.length>0;)1===N.length||Math.random()>.5?T.push(N.shift()):T.push(N.pop());function q(t,e){const n=C(e);return null!==n&&(D[t]=n,!0)}function F(t){return D[t]}D[""]=C({resources:["https://api.iconify.design"].concat(T)});const U=(t,e)=>{let n=t,r=-1!==n.indexOf("?");return Object.keys(e).forEach((t=>{let i;try{i=function(t){switch(typeof t){case"boolean":return t?"true":"false";case"number":case"string":return encodeURIComponent(t);default:throw new Error("Invalid parameter")}}(e[t])}catch(Ct){return}n+=(r?"&":"?")+encodeURIComponent(t)+"="+i,r=!0})),n},W={},B={};let $=(()=>{let t;try{if(t=fetch,"function"===typeof t)return t}catch(Ct){}return null})();const H={prepare:(t,e,n)=>{const r=[];let i=W[e];void 0===i&&(i=function(t,e){const n=F(t);if(!n)return 0;let r;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=U(e+".json",{icons:""});r=n.maxURL-t-n.path.length-i.length}else r=0;const i=t+":"+e;return B[t]=n.path,W[i]=r,r}(t,e));const o="icons";let c={type:o,provider:t,prefix:e,icons:[]},a=0;return n.forEach(((n,s)=>{a+=n.length+1,a>=i&&s>0&&(r.push(c),c={type:o,provider:t,prefix:e,icons:[]},a=n.length),c.icons.push(n)})),r.push(c),r},send:(t,e,n)=>{if(!$)return void n("abort",424);let r=function(t){if("string"===typeof t){if(void 0===B[t]){const e=F(t);if(!e)return"/";B[t]=e.path}return B[t]}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");r+=U(t+".json",{icons:n});break}case"custom":{const t=e.uri;r+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;$(t+r).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"===typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{n("next",i)}))})).catch((()=>{n("next",i)}))}};const J=Object.create(null),V=Object.create(null);function Y(t,e){t.forEach((t=>{const n=t.provider;if(void 0===J[n])return;const r=J[n],i=t.prefix,o=r[i];o&&(r[i]=o.filter((t=>t.id!==e)))}))}let G=0;var Q={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function X(t,e,n,r){const i=t.resources.length,o=t.random?Math.floor(Math.random()*i):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(o).concat(t.resources.slice(0,o));const a=Date.now();let s,l="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"===typeof t&&p.push(t)}function y(){l="failed",p.forEach((t=>{t(void 0,s)}))}function b(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const r=c.shift();if(void 0===r)return d.length?void(f=setTimeout((()=>{h(),"pending"===l&&(b(),y())}),t.timeout)):void y();const i={status:"pending",resource:r,callback:(e,n)=>{!function(e,n,r){const i="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return s=r,void y();if(i)return s=r,void(d.length||(c.length?v():y()));if(h(),b(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(r)}))}(i,e,n)}};d.push(i),u++,f=setTimeout(v,t.rotate),n(r,e,i.callback)}return"function"===typeof r&&p.push(r),setTimeout(v),function(){return{startTime:a,payload:e,status:l,queriesSent:u,queriesPending:d.length,subscribe:m,abort:g}}}function K(t){const e=function(t){if("object"!==typeof t||"object"!==typeof t.resources||!(t.resources instanceof Array)||!t.resources.length)throw new Error("Invalid Reduncancy configuration");const e=Object.create(null);let n;for(n in Q)void 0!==t[n]?e[n]=t[n]:e[n]=Q[n];return e}(t);let n=[];function r(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,o){const c=X(e,t,i,((t,e)=>{r(),o&&o(t,e)}));return n.push(c),c},find:function(t){const e=n.find((e=>t(e)));return void 0!==e?e:null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:r}}function Z(){}const tt=Object.create(null);function et(t,e,n){let r,i;if("string"===typeof t){const e=P(t);if(!e)return n(void 0,424),Z;i=e.send;const o=function(t){if(void 0===tt[t]){const e=F(t);if(!e)return;const n={config:e,redundancy:K(e)};tt[t]=n}return tt[t]}(t);o&&(r=o.redundancy)}else{const e=C(t);if(e){r=K(e);const n=P(t.resources?t.resources[0]:"");n&&(i=n.send)}}return r&&i?r.query(e,i,n)().abort:(n(void 0,424),Z)}const nt={};function rt(){}const it=Object.create(null),ot=Object.create(null),ct=Object.create(null),at=Object.create(null);function st(t,e){void 0===ct[t]&&(ct[t]=Object.create(null));const n=ct[t];n[e]||(n[e]=!0,setTimeout((()=>{n[e]=!1,function(t,e){void 0===V[t]&&(V[t]=Object.create(null));const n=V[t];n[e]||(n[e]=!0,setTimeout((()=>{if(n[e]=!1,void 0===J[t]||void 0===J[t][e])return;const r=J[t][e].slice(0);if(!r.length)return;const i=h(t,e);let o=!1;r.forEach((n=>{const r=n.icons,c=r.pending.length;r.pending=r.pending.filter((n=>{if(n.prefix!==e)return!0;const c=n.name;if(void 0!==i.icons[c])r.loaded.push({provider:t,prefix:e,name:c});else{if(void 0===i.missing[c])return o=!0,!0;r.missing.push({provider:t,prefix:e,name:c})}return!1})),r.pending.length!==c&&(o||Y([{provider:t,prefix:e}],n.id),n.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),n.abort))}))})))}(t,e)})))}const lt=Object.create(null);function ut(t,e,n){void 0===ot[t]&&(ot[t]=Object.create(null));const r=ot[t];void 0===at[t]&&(at[t]=Object.create(null));const i=at[t];void 0===it[t]&&(it[t]=Object.create(null));const o=it[t];void 0===r[e]?r[e]=n:r[e]=r[e].concat(n).sort(),i[e]||(i[e]=!0,setTimeout((()=>{i[e]=!1;const n=r[e];delete r[e];const c=P(t);if(!c)return void function(){const n=(""===t?"":"@"+t+":")+e,r=Math.floor(Date.now()/6e4);lt[n]<r&&(lt[n]=r,console.error('Unable to retrieve icons for "'+n+'" because API is not configured properly.'))}();c.prepare(t,e,n).forEach((n=>{et(t,n,((r,i)=>{const c=h(t,e);if("object"!==typeof r){if(404!==i)return;const t=Date.now();n.icons.forEach((e=>{c.missing[e]=t}))}else try{const n=g(c,r);if(!n.length)return;const i=o[e];n.forEach((t=>{delete i[t]})),nt.store&&nt.store(t,r)}catch(a){console.error(a)}st(t,e)}))}))})))}const ft=(t,e)=>{const n=function(t,e=!0,n=!1){const r=[];return t.forEach((t=>{const i="string"===typeof t?a(t,!1,n):t;e&&!s(i,n)||r.push({provider:i.provider,prefix:i.prefix,name:i.name})})),r}(t,!0,b()),r=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let r={provider:"",prefix:"",name:""};return t.forEach((t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;const i=t.provider,o=t.prefix,c=t.name;void 0===n[i]&&(n[i]=Object.create(null));const a=n[i];void 0===a[o]&&(a[o]=h(i,o));const s=a[o];let l;l=void 0!==s.icons[c]?e.loaded:""===o||void 0!==s.missing[c]?e.missing:e.pending;const u={provider:i,prefix:o,name:c};l.push(u)})),e}(n);if(!r.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(r.loaded,r.missing,r.pending,rt)})),()=>{t=!1}}const i=Object.create(null),o=[];let c,l;r.pending.forEach((t=>{const e=t.provider,n=t.prefix;if(n===l&&e===c)return;c=e,l=n,o.push({provider:e,prefix:n}),void 0===it[e]&&(it[e]=Object.create(null));const r=it[e];void 0===r[n]&&(r[n]=Object.create(null)),void 0===i[e]&&(i[e]=Object.create(null));const a=i[e];void 0===a[n]&&(a[n]=[])}));const u=Date.now();return r.pending.forEach((t=>{const e=t.provider,n=t.prefix,r=t.name,o=it[e][n];void 0===o[r]&&(o[r]=u,i[e][n].push(r))})),o.forEach((t=>{const e=t.provider,n=t.prefix;i[e][n].length&&ut(e,n,i[e][n])})),e?function(t,e,n){const r=G++,i=Y.bind(null,n,r);if(!e.pending.length)return i;const o={id:r,icons:e,callback:t,abort:i};return n.forEach((t=>{const e=t.provider,n=t.prefix;void 0===J[e]&&(J[e]=Object.create(null));const r=J[e];void 0===r[n]&&(r[n]=[]),r[n].push(o)})),i}(e,r,o):rt},dt="iconify2",pt="iconify",ht="iconify-count",gt="iconify-version",mt=36e5,yt={local:!0,session:!0};let bt=!1;const vt={local:0,session:0},wt={local:[],session:[]};let xt="undefined"===typeof window?{}:window;function jt(t){const e=t+"Storage";try{if(xt&&xt[e]&&"number"===typeof xt[e].length)return xt[e]}catch(Ct){}return yt[t]=!1,null}function St(t,e,n){try{return t.setItem(ht,n.toString()),vt[e]=n,!0}catch(Ct){return!1}}function Ot(t){const e=t.getItem(ht);if(e){const t=parseInt(e);return t||0}return 0}const kt=()=>{if(bt)return;bt=!0;const t=Math.floor(Date.now()/mt)-168;function e(e){const n=jt(e);if(!n)return;const r=e=>{const r=pt+e.toString(),i=n.getItem(r);if("string"!==typeof i)return!1;let o=!0;try{const e=JSON.parse(i);if("object"!==typeof e||"number"!==typeof e.cached||e.cached<t||"string"!==typeof e.provider||"object"!==typeof e.data||"string"!==typeof e.data.prefix)o=!1;else{const t=e.provider,n=e.data.prefix;o=g(h(t,n),e.data).length>0}}catch(Ct){o=!1}return o||n.removeItem(r),o};try{const t=n.getItem(gt);if(t!==dt)return t&&function(t){try{const e=Ot(t);for(let n=0;n<e;n++)t.removeItem(pt+n.toString())}catch(Ct){}}(n),void function(t,e){try{t.setItem(gt,dt)}catch(Ct){}St(t,e,0)}(n,e);let i=Ot(n);for(let n=i-1;n>=0;n--)r(n)||(n===i-1?i--:wt[e].push(n));St(n,e,i)}catch(Ct){}}for(const n in yt)e(n)},At=(t,e)=>{function n(n){if(!yt[n])return!1;const r=jt(n);if(!r)return!1;let i=wt[n].shift();if(void 0===i&&(i=vt[n],!St(r,n,i+1)))return!1;try{const n={cached:Math.floor(Date.now()/mt),provider:t,data:e};r.setItem(pt+i.toString(),JSON.stringify(n))}catch(Ct){return!1}return!0}bt||kt(),Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))};const It=/[\s,]+/;function Et(t,e){e.split(It).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function _t(t,e){e.split(It).forEach((e=>{const n=e.trim();switch(n){case"left":case"center":case"right":t.hAlign=n;break;case"top":case"middle":case"bottom":t.vAlign=n;break;case"slice":case"crop":t.slice=!0;break;case"meet":t.slice=!1}}))}function zt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:r(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1===0?r(i):0)}}return e}const Rt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img",style:{}},Mt={...x,inline:!0};if(b(!0),L("",H),"undefined"!==typeof document&&"undefined"!==typeof window){nt.store=At,kt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"===typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!==typeof t||null===t||t instanceof Array||"object"!==typeof t.icons||"string"!==typeof t.prefix||!function(t,e){if("object"!==typeof t)return!1;if("string"!==typeof e&&(e="string"===typeof t.provider?t.provider:""),y&&""===e&&("string"!==typeof t.prefix||""===t.prefix)){let e=!1;return d(t)&&(t.prefix="",u(t,((t,n)=>{n&&w(t,n)&&(e=!0)}))),e}return!("string"!==typeof t.prefix||!s({provider:e,prefix:t.prefix,name:"a"}))&&!!g(h(e,t.prefix),t)}(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"===typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const r=e[t];if("object"!==typeof r||!r||void 0===r.resources)continue;q(t,r)||console.error(n)}catch(Dt){console.error(n)}}}}class Lt extends r.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const e=this.state,n=this.props.icon;if("object"===typeof n&&null!==n&&"string"===typeof n.body)return this._icon="",this._abortLoading(),void((t||null===e.icon)&&this._setData({data:c(n)}));let r;if("string"!==typeof n||null===(r=a(n,!1,!0)))return this._abortLoading(),void this._setData(null);const i=v(r);if(null!==i){if(this._icon!==n||null===e.icon){this._abortLoading(),this._icon=n;const t=["iconify"];""!==r.prefix&&t.push("iconify--"+r.prefix),""!==r.provider&&t.push("iconify--"+r.provider),this._setData({data:i,classes:t}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),this._loading={name:n,abort:ft([r],this._checkIcon.bind(this,!1))})}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,e=this.state.icon;if(null===e)return t.children?t.children:r.createElement("span",{});let n=t;return e.classes&&(n={...t,className:("string"===typeof t.className?t.className+" ":"")+e.classes.join(" ")}),((t,e,n,i)=>{const o=n?Mt:x,c=j(o,e),a="object"===typeof e.style&&null!==e.style?e.style:{},s={...Rt,ref:i,style:a};for(let r in e){const t=e[r];if(void 0!==t)switch(r){case"icon":case"style":case"children":case"onLoad":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":c[r]=!0===t||"true"===t||1===t;break;case"flip":"string"===typeof t&&Et(c,t);break;case"align":"string"===typeof t&&_t(c,t);break;case"color":a.color=t;break;case"rotate":"string"===typeof t?c[r]=zt(t):"number"===typeof t&&(c[r]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete s["aria-hidden"];break;default:void 0===o[r]&&(s[r]=t)}}const l=I(t,c);let u=0,f=e.id;"string"===typeof f&&(f=f.replace(/-/g,"_")),s.dangerouslySetInnerHTML={__html:R(l.body,f?()=>f+"ID"+u++:"iconifyReact")};for(let r in l.attributes)s[r]=l.attributes[r];return l.inline&&void 0===a.verticalAlign&&(a.verticalAlign="-0.125em"),r.createElement("svg",s)})(e.data,n,t._inline,t._ref)}}const Pt=r.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!1};return r.createElement(Lt,n)}));r.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!0};return r.createElement(Lt,n)}))}}]);