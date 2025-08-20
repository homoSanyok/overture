import{$ as dt,$a as y,$b as an,A as eo,Aa as yl,Ab as Qi,B as $t,Ba as Sl,Bb as Y,C as Ui,Ca as Cl,Cb as R,D as to,Da as Tl,Db as tn,E as sl,Ea as wl,Eb as Et,F as oo,Fa as Ht,Fb as Rl,G as Ct,Ga as xl,Gb as Dl,H as zi,Ha as _l,Hb as on,I as al,Ia as El,Ib as rn,J as ll,Ja as Ko,Jb as Zi,K as cl,Ka as v,Kb as Ji,L as He,La as G,Lb as nn,M as dl,Ma as qi,Mb as es,N as me,Na as qr,Nb as Pl,O as j,Oa as kl,Ob as Gt,P as Wo,Pa as Yr,Pb as Ol,Q as m,Qa as ao,Qb as V,R as ue,Ra as Qr,Rb as kt,S as ul,Sa as Yi,Sb as te,T as $,Ta as X,Tb as U,U as Wi,Ua as wt,Ub as ae,V as P,Va as O,Vb as ho,W as p,Wa as Re,Wb as Bl,X as jo,Xa as Ml,Xb as Nl,Y as I,Ya as Al,Yb as ne,Z as pe,Za as K,Zb as sn,_ as ee,_a as he,_b as Ll,a as f,aa as pl,ab as rt,ac as fo,b as W,ba as hl,bb as xt,bc as ln,ca as ro,cb as Zr,cc as cn,d as J,da as Ke,db as _e,dc as dn,e as Ae,ea as Ie,eb as se,ec as De,f as Li,fa as le,fb as lo,fc as Fl,g as el,ga as ce,gb as co,gc as nt,h as tl,ha as no,hb as C,hc as go,i as Fi,ia as A,ib as T,ic as un,j as $i,ja as Xo,jb as k,k as Hi,ka as Kr,kb as Jr,l as Xe,la as be,lb as en,lc as $l,m as Fe,ma as Ee,mb as uo,mc as ts,n as yt,na as ji,nb as ve,o as we,oa as Ge,ob as q,oc as os,p as x,pa as Tt,pb as _,pc as rs,q as zo,qa as fl,qb as ut,r as ol,ra as Xi,rb as pt,s as rl,sa as gl,sb as qe,t as D,ta as xe,tb as Ye,u as Gi,ua as ml,ub as Qe,v as $e,va as Ki,vb as _t,w as nl,wa as io,wb as ht,x as Vi,xa as so,xb as Il,y as il,ya as bl,yb as ke,z as St,za as vl,zb as po}from"./chunk-ZM5KY2BP.js";var Ar=J((f2,gh)=>{"use strict";gh.exports=function e(o,t,r,n){if(!(this instanceof e))return new e(o,t,r,n);this.left=o||0,this.top=t||0,this.right=r||0,this.bottom=n||0,this.width=Math.abs(this.right-this.left),this.height=Math.abs(this.bottom-this.top)}});var mh=J(Pa=>{"use strict";Pa.x=function(){return window.innerHeight>document.documentElement.clientHeight};Pa.y=function(){return window.innerWidth>document.documentElement.clientWidth}});var vh=J((m2,bh)=>{"use strict";var Ir=document.createElement("div"),Rr=Ir.style;Rr.width="100px";Rr.height="100px";Rr.overflow="scroll";Rr.position="absolute";Rr.top="-9999px";document.documentElement.appendChild(Ir);bh.exports=Ir.offsetWidth-Ir.clientWidth;document.documentElement.removeChild(Ir)});var Sh=J((b2,yh)=>{"use strict";yh.exports=function(e){var o=e;if(e===window)return!0;if(e===document)return!1;for(;o;){if(getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}});var Th=J((v2,Ch)=>{"use strict";Ch.exports=document.createElement("div")});var xh=J((y2,Ba)=>{"use strict";var Oa=getComputedStyle(document.documentElement,"");Oa?(Lo=(Array.prototype.slice.call(Oa).join("").match(/-(moz|webkit|ms)-/)||Oa.OLink===""&&["","o"])[1],wh="WebKit|Moz|MS|O".match(new RegExp("("+Lo+")","i"))[1],Ba.exports={dom:wh,lowercase:Lo,css:"-"+Lo+"-",js:Lo[0].toUpperCase()+Lo.substr(1)}):Ba.exports={dom:"",lowercase:"",css:"",js:""};var Lo,wh});var Na=J((S2,Mh)=>{"use strict";var _h=Th().style,Eh=xh().lowercase;Mh.exports=function(e,o){if(!(!e||!o)){var t,r;if(typeof o=="string"){if(t=o,arguments.length<3)return e.style[kh(t)];r=arguments[2]||"",o={},o[t]=r}for(t in o)typeof o[t]=="number"&&/left|right|bottom|top|width|height/i.test(t)&&(o[t]+="px"),r=o[t]||"",e.style[kh(t)]=r}};function kh(e){var o=e[0].toUpperCase()+e.slice(1);return _h[e]!==void 0?e:_h[Eh+o]!==void 0?Eh+o:""}});var Dr=J((C2,Ah)=>{"use strict";Ah.exports=function(e){return e+="",parseFloat(e.slice(0,-2))||0}});var Rh=J((T2,Ih)=>{"use strict";var dy=Na(),uy=Dr();Ih.exports=function(e){var o=dy(e,"transform"),t=/translate(?:3d)?\s*\(([^\)]*)\)/.exec(o);if(!t)return[0,0];var r=t[1].split(/\s*,\s*/);return r.map(function(n){return uy(n)})}});var Fa=J((x2,Ph)=>{"use strict";var Qt=window,mi=document,La=Ar(),bi=mh(),vi=vh(),py=Sh(),w2=Rh();Ph.exports=Dh;function Dh(e){if(!e)throw Error("Bad argument");var o,t;if(e===Qt)return t=La(Qt.pageXOffset,Qt.pageYOffset),t.width=Qt.innerWidth-(bi.y()?vi:0),t.height=Qt.innerHeight-(bi.x()?vi:0),t.right=t.left+t.width,t.bottom=t.top+t.height,t;if(e===mi){var r=Dh(mi.documentElement);return r.bottom=Math.max(window.innerHeight,r.bottom),r.right=Math.max(window.innerWidth,r.right),r.height=Math.max(window.innerHeight,r.height),r.width=Math.max(window.innerHeight,r.width),bi.y(mi.documentElement)&&(r.right-=vi),bi.x(mi.documentElement)&&(r.bottom-=vi),r}try{o=e.getBoundingClientRect()}catch{o=La(e.clientLeft,e.clientTop)}var n=py(e),i=n?0:Qt.pageXOffset,s=n?0:Qt.pageYOffset;return t=La(o.left+i,o.top+s,o.left+i+e.offsetWidth,o.top+s+e.offsetHeight),t}});var Si=J((_2,Oh)=>{"use strict";Oh.exports={freeze:hy,unfreeze:fy,isFrozen:gy};var yi=new WeakMap;function hy(e,o){var t=yi.get(e);return t&&t[o]?!1:(t||(t={},yi.set(e,t)),t[o]=!0,!0)}function fy(e,o){var t=yi.get(e);return!t||!t[o]?!1:(t[o]=null,!0)}function gy(e,o){var t=yi.get(e);return t&&t[o]}});var Ti=J((E2,Bh)=>{"use strict";var Ci=new WeakMap;function my(e,o,t){var r=Ci.get(e),n;if(!o){if(n=r||{},t&&t.length){var i={};for(var o in n)i[o]=n[o].filter(function(a){return $a(a,t)});n=i}return n}return!r||!r[o]?[]:(n=r[o],t&&t.length&&(n=n.filter(function(s){return $a(s,t)})),n)}function by(e,o,t,r){var n=Ci.get(e);if(!n||!n[o])return!1;var i=n[o];if(r&&r.length&&!$a(t,r))return!1;for(var s=0;s<i.length;s++)if(i[s]===t){i.splice(s,1);break}}function vy(e,o,t,r){if(t){var n=Ci.get(e);n||(n={},Ci.set(e,n)),(n[o]=n[o]||[]).push(t),r&&r.length&&(t._ns=r)}}function $a(e,o){if(!e._ns)return!1;for(var t=o.length;t--;)if(e._ns.indexOf(o[t])>=0)return!0}Bh.exports={get:my,remove:by,add:vy}});var xi=J((k2,Lh)=>{"use strict";Lh.exports=Fo;var Nh=Si(),wi=Ti();function Fo(e,o,t){if(!e)return e;var r,n;if(t===void 0){var i=[].slice.call(arguments,1),s=e.removeAll||e.removeAllListeners;if(s&&s.apply(e,i),!o){r=wi.get(e);for(o in r)Fo(e,o);return e}if(typeof o=="function"){t=o,o=null,r=wi.get(e);for(o in r)r[o].indexOf(t)>=0&&Fo(e,o,t);return e}return o=""+o,o.split(/\s+/).forEach(function(c){var d=c.split(".");if(c=d.shift(),r=wi.get(e,c,d),c){var u={};u[c]=r,r=u}for(var h in r)[].slice.call(r[h]).forEach(function(g){Fo(e,h,g)})}),e}Array.isArray(o)||(o=(o+"").split(/\s+/));var a=e.removeEventListener||e.removeListener||e.detachEvent||e.off;if(o.forEach(function(c){var d=c.split(".");if(c=d.shift(),a)if(Nh.freeze(e,"off"+c))a.call(e,c,t),Nh.unfreeze(e,"off"+c);else return e;wi.remove(e,c,t,d)}),t.__wrapFn){var l=t.__wrapFn;t.__wrapFn=null,Fo(e,o,l)}if(t.__origFn){var l=t.__origFn;t.__origFn=null,Fo(e,o,l)}return e}});var Ha=J((M2,$h)=>{"use strict";var Fh=Si(),yy=Ti(),Sy=xi();$h.exports=Cy;function Cy(e,o,t,r={}){if(!e)return e;if(typeof e=="string"||r.target){for(;t.__wrapFn;)t=t.__wrapFn;var n=e;e=r.target||document,t.__wrapFn=Ty.bind({target:e,selector:n,cb:t}),t.__wrapFn.__origFn=t,t=t.__wrapFn}Array.isArray(o)||(o=(o+"").split(/\s+/));var i=e.addEventListener||e.addListener||e.attachEvent||e.on;return o.forEach(function(s){var a=s.split(".");if(s=a.shift(),i)if(Fh.freeze(e,"on"+s))i.call(e,s,t),Fh.unfreeze(e,"on"+s);else return e;yy.add(e,s,t,a)}),function(){Sy(e,o,t)}}function Ty(e){var o=this.cb,t=this.selector,r=this.target,n=e.target;n!==r&&(Array.isArray(t)||(t=[t]),t.some(function(i){var s;if(typeof i!="string"){if(!i.contains(n))return!1;s=i}else s=n.closest&&n.closest(i);return s&&r!==s&&r.contains(s)?(e.delegateTarget=s,!0):!1})&&o.apply(n,arguments))}});var Ua=J((A2,Vh)=>{"use strict";var Hh=Si(),wy=Ti();Vh.exports=function(e,o,t,r){if(e){var n=arguments;return typeof o=="string"?(n=[].slice.call(arguments,2),o.split(/\s+/).forEach(function(i){Gh.apply(this,[e,i].concat(n))}),e):Gh.apply(this,n)}};var Ga=typeof jQuery>"u"?void 0:jQuery,Va=typeof document>"u"?void 0:document,xy=typeof window>"u"?void 0:window;function Gh(e,o,t,r){var n,i=o;Va&&(e instanceof Node||e===xy)?(Va&&o instanceof Event?i=o:(i=Va.createEvent("CustomEvent"),i.initCustomEvent(o,r,!0,t)),n=e.dispatchEvent):Ga&&e instanceof Ga?(i=Ga.Event(o,t),i.detail=t,n=r?targte.trigger:e.triggerHandler):n=e.dispatchEvent||e.emit||e.trigger||e.fire||e.raise;var s=[].slice.call(arguments,2);if(n&&Hh.freeze(e,"emit"+o))return n.apply(e,[i].concat(s)),Hh.unfreeze(e,"emit"+o),e;var a=i.split(".");i=a.shift();for(var l=wy.get(e,i,a),c=l.slice(),d=0;d<c.length;d++)c[d]&&c[d].apply(e,s);return e}});var Uh=J((I2,_i)=>{"use strict";_i.exports.on=Ha();_i.exports.off=xi();_i.exports.emit=Ua()});var Xh=J((R2,jh)=>{"use strict";function zh(e,o){return e.touches?arguments.length>1?za(e.touches,o).clientY:e.targetTouches[0].clientY:e.clientY}function Wh(e,o){return e.touches?arguments.length>o?za(e.touches,o).clientX:e.targetTouches[0].clientX:e.clientX}function Ei(e,o){return[Wh.apply(this,arguments),zh.apply(this,arguments)]}function za(e,o){for(var t=0;t<e.length;t++)if(e[t].identifier===o)return e[t]}Ei.x=Wh;Ei.y=zh;Ei.findTouch=za;jh.exports=Ei});var qh=J((D2,Kh)=>{"use strict";Kh.exports=function(o){return typeof o=="object"?o===null:typeof o!="function"}});var Qh=J((P2,Yh)=>{"use strict";var _y=qh();je.OTHERWISE="_";je.ENTER="enter";je.EXIT="exit";function je(e,o){if(e instanceof je)return e;if(!(this instanceof je))return new je(e);this.states=e||{},this.context=o||this,this.inited=!1}je.prototype.set=function(e){var o=this.state,t=this.states,r=je.ENTER,n=je.EXIT,i=je.OTHERWISE,s=t[o]!==void 0?o:i,a=t[s],l,c=n+s;if(this.inited){if(a&&!this[c]){if(this[c]=!0,l=a[n]&&a[n].call?a[n].call(this.context):a[1]&&a[1].call?a[1].call(this.context):a[n],l===!1)return this[c]=!1,!1;if(l!==void 0&&l!==e)return this.set(l),this[c]=!1,!1;if(this[c]=!1,this.state!==o)return}if(e===o)return!1}else this.inited=!0;this.state=e;var d=t.hasOwnProperty(e)?e:i,u=t[d],h,g=r+d;if(!this[g]){if(this[g]=!0,u?u.call?h=u.call(this.context):Array.isArray(u)?h=u[0]&&u[0].call?u[0].call(this.context,this):u[0]:u.hasOwnProperty(r)?h=u[r].call?u[r].call(this.context):u[r]:_y(u)&&(h=u):h=u,h===!1)return this.set(o),this[g]=!1,!1;if(h!==void 0&&h!==e)return this.set(h),this[g]=!1,!1;this[g]=!1}return this.context};je.prototype.get=function(){return this.state};Yh.exports=je});var Jh=J((O2,Zh)=>{"use strict";Zh.exports=Ey;var Wa=Qh();Wa.ENTER="before";Wa.EXIT="after";function Ey(e,o,t,r){r?e[o]=function(){return arguments.length?n.set(arguments[0]):n.get()}:Object.defineProperty(e,o,{set:function(i){return n.set(i)},get:function(){return n.get()}});var n=new Wa(t,e);return e}});var tf=J((B2,ef)=>{"use strict";ef.exports=function(o,t){t||(t=[0,""]),o=String(o);var r=parseFloat(o,10);return t[0]=r,t[1]=o.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}});var sf=J((N2,nf)=>{"use strict";var of=tf();nf.exports=Xa;var Pr=rf("in",document.body);function ja(e,o){var t=of(getComputedStyle(e).getPropertyValue(o));return t[0]*Xa(t[1],e)}function rf(e,o){var t=document.createElement("div");t.style.height="128"+e,o.appendChild(t);var r=ja(t,"height")/128;return o.removeChild(t),r}function Xa(e,o){if(!e)return null;switch(o=o||document.body,e=(e+""||"px").trim().toLowerCase(),(o===window||o===document)&&(o=document.body),e){case"%":return o.clientHeight/100;case"ch":case"ex":return rf(e,o);case"em":return ja(o,"font-size");case"rem":return ja(document.body,"font-size");case"vw":return window.innerWidth/100;case"vh":return window.innerHeight/100;case"vmin":return Math.min(window.innerWidth,window.innerHeight)/100;case"vmax":return Math.max(window.innerWidth,window.innerHeight)/100;case"in":return Pr;case"cm":return Pr/2.54;case"mm":return Pr/25.4;case"pt":return Pr/72;case"pc":return Pr/6;case"px":return 1}var t=of(e);if(!isNaN(t[0])&&t[1]){var r=Xa(t[1],o);return typeof r=="number"?t[0]*r:null}return null}});var pf=J((F2,uf)=>{"use strict";var df=Ar(),Ri=Dr();uf.exports=function(e){if(e===window)return df();if(!(e instanceof Element))throw Error("Argument is not an element");var o=window.getComputedStyle(e);return df(Ri(o.paddingLeft),Ri(o.paddingTop),Ri(o.paddingRight),Ri(o.paddingBottom))}});var gf=J(($2,ff)=>{"use strict";var hf=Ar(),Di=Dr();ff.exports=function(e){if(e===window)return hf();if(!(e instanceof Element))throw Error("Argument is not an element");var o=window.getComputedStyle(e);return hf(Di(o.borderLeftWidth),Di(o.borderTopWidth),Di(o.borderRightWidth),Di(o.borderBottomWidth))}});var vf=J((H2,bf)=>{"use strict";var Pi=Dr(),mf=Ar();bf.exports=function(e){if(e===window)return mf();if(!(e instanceof Element))throw Error("Argument is not an element");var o=window.getComputedStyle(e);return mf(Pi(o.marginLeft),Pi(o.marginTop),Pi(o.marginRight),Pi(o.marginBottom))}});var Yo=class{},hn=class{},ft=class e{constructor(o){this.normalizedNames=new Map,this.lazyUpdate=null,o?typeof o=="string"?this.lazyInit=()=>{this.headers=new Map,o.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let n=t.slice(0,r),i=n.toLowerCase(),s=t.slice(r+1).trim();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:typeof Headers<"u"&&o instanceof Headers?(this.headers=new Map,o.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(o).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(o){return this.init(),this.headers.has(o.toLowerCase())}get(o){this.init();let t=this.headers.get(o.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(o){return this.init(),this.headers.get(o.toLowerCase())||null}append(o,t){return this.clone({name:o,value:t,op:"a"})}set(o,t){return this.clone({name:o,value:t,op:"s"})}delete(o,t){return this.clone({name:o,value:t,op:"d"})}maybeSetNormalizedName(o,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,o)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(o=>this.applyUpdate(o)),this.lazyUpdate=null))}copyFrom(o){o.init(),Array.from(o.headers.keys()).forEach(t=>{this.headers.set(t,o.headers.get(t)),this.normalizedNames.set(t,o.normalizedNames.get(t))})}clone(o){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([o]),t}applyUpdate(o){let t=o.name.toLowerCase();switch(o.op){case"a":case"s":let r=o.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(o.name,t);let n=(o.op==="a"?this.headers.get(t):void 0)||[];n.push(...r),this.headers.set(t,n);break;case"d":let i=o.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>i.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}setHeaderEntries(o,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),n=o.toLowerCase();this.headers.set(n,r),this.maybeSetNormalizedName(o,n)}forEach(o){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>o(this.normalizedNames.get(t),this.headers.get(t)))}};var is=class{encodeKey(o){return Hl(o)}encodeValue(o){return Hl(o)}decodeKey(o){return decodeURIComponent(o)}decodeValue(o){return decodeURIComponent(o)}};function Wf(e,o){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(n=>{let i=n.indexOf("="),[s,a]=i==-1?[o.decodeKey(n),""]:[o.decodeKey(n.slice(0,i)),o.decodeValue(n.slice(i+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var jf=/%(\d[a-f0-9])/gi,Xf={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Hl(e){return encodeURIComponent(e).replace(jf,(o,t)=>Xf[t]??o)}function pn(e){return`${e}`}var At=class e{constructor(o={}){if(this.updates=null,this.cloneFrom=null,this.encoder=o.encoder||new is,o.fromString){if(o.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Wf(o.fromString,this.encoder)}else o.fromObject?(this.map=new Map,Object.keys(o.fromObject).forEach(t=>{let r=o.fromObject[t],n=Array.isArray(r)?r.map(pn):[pn(r)];this.map.set(t,n)})):this.map=null}has(o){return this.init(),this.map.has(o)}get(o){this.init();let t=this.map.get(o);return t?t[0]:null}getAll(o){return this.init(),this.map.get(o)||null}keys(){return this.init(),Array.from(this.map.keys())}append(o,t){return this.clone({param:o,value:t,op:"a"})}appendAll(o){let t=[];return Object.keys(o).forEach(r=>{let n=o[r];Array.isArray(n)?n.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:n,op:"a"})}),this.clone(t)}set(o,t){return this.clone({param:o,value:t,op:"s"})}delete(o,t){return this.clone({param:o,value:t,op:"d"})}toString(){return this.init(),this.keys().map(o=>{let t=this.encoder.encodeKey(o);return this.map.get(o).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(o=>o!=="").join("&")}clone(o){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(o),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(o=>this.map.set(o,this.cloneFrom.map.get(o))),this.updates.forEach(o=>{switch(o.op){case"a":case"s":let t=(o.op==="a"?this.map.get(o.param):void 0)||[];t.push(pn(o.value)),this.map.set(o.param,t);break;case"d":if(o.value!==void 0){let r=this.map.get(o.param)||[],n=r.indexOf(pn(o.value));n!==-1&&r.splice(n,1),r.length>0?this.map.set(o.param,r):this.map.delete(o.param)}else{this.map.delete(o.param);break}}}),this.cloneFrom=this.updates=null)}};var ss=class{constructor(){this.map=new Map}set(o,t){return this.map.set(o,t),this}get(o){return this.map.has(o)||this.map.set(o,o.defaultValue()),this.map.get(o)}delete(o){return this.map.delete(o),this}has(o){return this.map.has(o)}keys(){return this.map.keys()}};function Kf(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Gl(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Vl(e){return typeof Blob<"u"&&e instanceof Blob}function Ul(e){return typeof FormData<"u"&&e instanceof FormData}function qf(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var qo=class e{constructor(o,t,r,n){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=o.toUpperCase();let i;if(Kf(this.method)||n?(this.body=r!==void 0?r:null,i=n):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new ft,this.context??=new ss,!this.params)this.params=new At,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Gl(this.body)||Vl(this.body)||Ul(this.body)||qf(this.body)?this.body:this.body instanceof At?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ul(this.body)?null:Vl(this.body)?this.body.type||null:Gl(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof At?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(o={}){let t=o.method||this.method,r=o.url||this.url,n=o.responseType||this.responseType,i=o.transferCache??this.transferCache,s=o.body!==void 0?o.body:this.body,a=o.withCredentials??this.withCredentials,l=o.reportProgress??this.reportProgress,c=o.headers||this.headers,d=o.params||this.params,u=o.context??this.context;return o.setHeaders!==void 0&&(c=Object.keys(o.setHeaders).reduce((h,g)=>h.set(g,o.setHeaders[g]),c)),o.setParams&&(d=Object.keys(o.setParams).reduce((h,g)=>h.set(g,o.setParams[g]),d)),new e(t,r,s,{params:d,headers:c,context:u,reportProgress:l,responseType:n,withCredentials:a,transferCache:i})}},It=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(It||{}),Qo=class{constructor(o,t=200,r="OK"){this.headers=o.headers||new ft,this.status=o.status!==void 0?o.status:t,this.statusText=o.statusText||r,this.url=o.url||null,this.ok=this.status>=200&&this.status<300}},fn=class e extends Qo{constructor(o={}){super(o),this.type=It.ResponseHeader}clone(o={}){return new e({headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Zo=class e extends Qo{constructor(o={}){super(o),this.type=It.Response,this.body=o.body!==void 0?o.body:null}clone(o={}){return new e({body:o.body!==void 0?o.body:this.body,headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Mt=class extends Qo{constructor(o){super(o,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${o.url||"(unknown url)"}`:this.message=`Http failure response for ${o.url||"(unknown url)"}: ${o.status} ${o.statusText}`,this.error=o.error||null}},Xl=200,Yf=204;function ns(e,o){return{body:o,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Qf=(()=>{class e{constructor(t){this.handler=t}request(t,r,n={}){let i;if(t instanceof qo)i=t;else{let l;n.headers instanceof ft?l=n.headers:l=new ft(n.headers);let c;n.params&&(n.params instanceof At?c=n.params:c=new At({fromObject:n.params})),i=new qo(t,r,n.body!==void 0?n.body:null,{headers:l,context:n.context,params:c,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache})}let s=x(i).pipe($t(l=>this.handler.handle(l)));if(t instanceof qo||n.observe==="events")return s;let a=s.pipe(St(l=>l instanceof Zo));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(D(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(D(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(D(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(D(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new At().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,n={}){return this.request("PATCH",t,ns(n,r))}post(t,r,n={}){return this.request("POST",t,ns(n,r))}put(t,r,n={}){return this.request("PUT",t,ns(n,r))}static{this.\u0275fac=function(r){return new(r||e)(P(Yo))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Zf=/^\)\]\}',?\n/,Jf="X-Request-URL";function zl(e){if(e.url)return e.url;let o=Jf.toLocaleLowerCase();return e.headers.get(o)}var eg=(()=>{class e{constructor(){this.fetchImpl=p(as,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t)),this.ngZone=p(Ee)}handle(t){return new Fi(r=>{let n=new AbortController;return this.doRequest(t,n.signal,r).then(ls,i=>r.error(new Mt({error:i}))),()=>n.abort()})}doRequest(t,r,n){return Li(this,null,function*(){let i=this.createRequestInit(t),s;try{let g=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,f({signal:r},i)));tg(g),n.next({type:It.Sent}),s=yield g}catch(g){n.error(new Mt({error:g,status:g.status??0,statusText:g.statusText,url:t.urlWithParams,headers:g.headers}));return}let a=new ft(s.headers),l=s.statusText,c=zl(s)??t.urlWithParams,d=s.status,u=null;if(t.reportProgress&&n.next(new fn({headers:a,status:d,statusText:l,url:c})),s.body){let g=s.headers.get("content-length"),S=[],b=s.body.getReader(),w=0,Z,ie,H=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Li(this,null,function*(){for(;;){let{done:Le,value:ot}=yield b.read();if(Le)break;if(S.push(ot),w+=ot.length,t.reportProgress){ie=t.responseType==="text"?(ie??"")+(Z??=new TextDecoder).decode(ot,{stream:!0}):void 0;let Ft=()=>n.next({type:It.DownloadProgress,total:g?+g:void 0,loaded:w,partialText:ie});H?H.run(Ft):Ft()}}}));let ge=this.concatChunks(S,w);try{let Le=s.headers.get("Content-Type")??"";u=this.parseBody(t,ge,Le)}catch(Le){n.error(new Mt({error:Le,headers:new ft(s.headers),status:s.status,statusText:s.statusText,url:zl(s)??t.urlWithParams}));return}}d===0&&(d=u?Xl:0),d>=200&&d<300?(n.next(new Zo({body:u,headers:a,status:d,statusText:l,url:c})),n.complete()):n.error(new Mt({error:u,headers:a,status:d,statusText:l,url:c}))})}parseBody(t,r,n){switch(t.responseType){case"json":let i=new TextDecoder().decode(r).replace(Zf,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:n});case"arraybuffer":return r.buffer}}createRequestInit(t){let r={},n=t.withCredentials?"include":void 0;if(t.headers.forEach((i,s)=>r[i]=s.join(",")),t.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let i=t.detectContentTypeHeader();i!==null&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:n}}concatChunks(t,r){let n=new Uint8Array(r),i=0;for(let s of t)n.set(s,i),i+=s.length;return n}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),as=class{};function ls(){}function tg(e){e.then(ls,ls)}function og(e,o){return o(e)}function rg(e,o,t){return(r,n)=>Ke(t,()=>o(r,i=>e(i,n)))}var Kl=new $(""),ng=new $(""),ig=new $("",{providedIn:"root",factory:()=>!0});var Wl=(()=>{class e extends Yo{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=p(Kr),this.contributeToStability=p(ig)}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Kl),...this.injector.get(ng,[])]));this.chain=r.reduceRight((n,i)=>rg(n,i,this.injector),og)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe(oo(()=>this.pendingTasks.remove(r)))}else return this.chain(t,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||e)(P(hn),P(ro))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();var sg=/^\)\]\}',?\n/;function ag(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var jl=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new j(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?we(r.\u0275loadImpl()):x(null)).pipe(He(()=>new Fi(i=>{let s=r.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((b,w)=>s.setRequestHeader(b,w.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let b=t.detectContentTypeHeader();b!==null&&s.setRequestHeader("Content-Type",b)}if(t.responseType){let b=t.responseType.toLowerCase();s.responseType=b!=="json"?b:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let b=s.statusText||"OK",w=new ft(s.getAllResponseHeaders()),Z=ag(s)||t.url;return l=new fn({headers:w,status:s.status,statusText:b,url:Z}),l},d=()=>{let{headers:b,status:w,statusText:Z,url:ie}=c(),H=null;w!==Yf&&(H=typeof s.response>"u"?s.responseText:s.response),w===0&&(w=H?Xl:0);let ge=w>=200&&w<300;if(t.responseType==="json"&&typeof H=="string"){let Le=H;H=H.replace(sg,"");try{H=H!==""?JSON.parse(H):null}catch(ot){H=Le,ge&&(ge=!1,H={error:ot,text:H})}}ge?(i.next(new Zo({body:H,headers:b,status:w,statusText:Z,url:ie||void 0})),i.complete()):i.error(new Mt({error:H,headers:b,status:w,statusText:Z,url:ie||void 0}))},u=b=>{let{url:w}=c(),Z=new Mt({error:b,status:s.status||0,statusText:s.statusText||"Unknown Error",url:w||void 0});i.error(Z)},h=!1,g=b=>{h||(i.next(c()),h=!0);let w={type:It.DownloadProgress,loaded:b.loaded};b.lengthComputable&&(w.total=b.total),t.responseType==="text"&&s.responseText&&(w.partialText=s.responseText),i.next(w)},S=b=>{let w={type:It.UploadProgress,loaded:b.loaded};b.lengthComputable&&(w.total=b.total),i.next(w)};return s.addEventListener("load",d),s.addEventListener("error",u),s.addEventListener("timeout",u),s.addEventListener("abort",u),t.reportProgress&&(s.addEventListener("progress",g),a!==null&&s.upload&&s.upload.addEventListener("progress",S)),s.send(a),i.next({type:It.Sent}),()=>{s.removeEventListener("error",u),s.removeEventListener("abort",u),s.removeEventListener("load",d),s.removeEventListener("timeout",u),t.reportProgress&&(s.removeEventListener("progress",g),a!==null&&s.upload&&s.upload.removeEventListener("progress",S)),s.readyState!==s.DONE&&s.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(P(un))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),ql=new $(""),lg="XSRF-TOKEN",cg=new $("",{providedIn:"root",factory:()=>lg}),dg="X-XSRF-TOKEN",ug=new $("",{providedIn:"root",factory:()=>dg}),gn=class{},pg=(()=>{class e{constructor(t,r,n){this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=an(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(P(ne),P(xe),P(cg))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function hg(e,o){let t=e.url.toLowerCase();if(!p(ql)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return o(e);let r=p(gn).getToken(),n=p(ug);return r!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,r)})),o(e)}function Yl(...e){let o=[Qf,jl,Wl,{provide:Yo,useExisting:Wl},{provide:hn,useFactory:()=>p(eg,{optional:!0})??p(jl)},{provide:Kl,useValue:hg,multi:!0},{provide:ql,useValue:!0},{provide:gn,useClass:pg}];for(let t of e)o.push(...t.\u0275providers);return dt(o)}var ps=class extends Nl{constructor(){super(...arguments),this.supportsDOMEvents=!0}},hs=class e extends ps{static makeCurrent(){Bl(new e)}onAndCancel(o,t,r){return o.addEventListener(t,r),()=>{o.removeEventListener(t,r)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=mg();return t==null?null:bg(t)}resetBaseElement(){Jo=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return an(document.cookie,o)}},Jo=null;function mg(){return Jo=Jo||document.querySelector("base"),Jo?Jo.getAttribute("href"):null}function bg(e){return new URL(e,document.baseURI).pathname}var vg=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),fs=new $(""),ec=(()=>{class e{constructor(t,r){this._zone=r,this._eventNameToPlugin=new Map,t.forEach(n=>{n.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,n){return this._findPluginFor(r).addEventListener(t,r,n)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new j(5101,!1);return this._eventNameToPlugin.set(t,r),r}static{this.\u0275fac=function(r){return new(r||e)(P(fs),P(Ee))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),mn=class{constructor(o){this._doc=o}},ds="ng-app-id",tc=(()=>{class e{constructor(t,r,n,i={}){this.doc=t,this.appId=r,this.nonce=n,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=go(i),this.resetHostNodes()}addStyles(t){for(let r of t)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(t){for(let r of t)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(r=>r.remove()),t.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let r of this.getAllStyles())this.addStyleToHost(t,r)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let r of this.hostNodes)this.addStyleToHost(r,t)}onStyleRemoved(t){let r=this.styleRef;r.get(t)?.elements?.forEach(n=>n.remove()),r.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${ds}="${this.appId}"]`);if(t?.length){let r=new Map;return t.forEach(n=>{n.textContent!=null&&r.set(n.textContent,n)}),r}return null}changeUsageCount(t,r){let n=this.styleRef;if(n.has(t)){let i=n.get(t);return i.usage+=r,i.usage}return n.set(t,{usage:r,elements:[]}),r}getStyleElement(t,r){let n=this.styleNodesInDOM,i=n?.get(r);if(i?.parentNode===t)return n.delete(r),i.removeAttribute(ds),i;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=r,this.platformIsServer&&s.setAttribute(ds,this.appId),t.appendChild(s),s}}addStyleToHost(t,r){let n=this.getStyleElement(t,r),i=this.styleRef,s=i.get(r)?.elements;s?s.push(n):i.set(r,{elements:[n],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(r){return new(r||e)(P(ne),P(Xi),P(Ki,8),P(xe))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),us={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ms=/%COMP%/g,oc="%COMP%",yg=`_nghost-${oc}`,Sg=`_ngcontent-${oc}`,Cg=!0,Tg=new $("",{providedIn:"root",factory:()=>Cg});function wg(e){return Sg.replace(ms,e)}function xg(e){return yg.replace(ms,e)}function rc(e,o){return o.map(t=>t.replace(ms,e))}var bn=(()=>{class e{constructor(t,r,n,i,s,a,l,c=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=go(a),this.defaultRenderer=new er(t,s,l,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===jo.ShadowDom&&(r=W(f({},r),{encapsulation:jo.Emulated}));let n=this.getOrCreateRenderer(t,r);return n instanceof vn?n.applyToHost(t):n instanceof tr&&n.applyStyles(),n}getOrCreateRenderer(t,r){let n=this.rendererByCompId,i=n.get(r.id);if(!i){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.platformIsServer;switch(r.encapsulation){case jo.Emulated:i=new vn(l,c,r,this.appId,d,s,a,u);break;case jo.ShadowDom:return new gs(l,c,t,r,s,a,this.nonce,u);default:i=new tr(l,c,r,d,s,a,u);break}n.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(r){return new(r||e)(P(ec),P(tc),P(Xi),P(Tg),P(ne),P(xe),P(Ee),P(Ki))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),er=class{constructor(o,t,r,n){this.eventManager=o,this.doc=t,this.ngZone=r,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(o,t){return t?this.doc.createElementNS(us[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Ql(o)?o.content:o).appendChild(t)}insertBefore(o,t,r){o&&(Ql(o)?o.content:o).insertBefore(t,r)}removeChild(o,t){t.remove()}selectRootElement(o,t){let r=typeof o=="string"?this.doc.querySelector(o):o;if(!r)throw new j(-5104,!1);return t||(r.textContent=""),r}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,r,n){if(n){t=n+":"+t;let i=us[n];i?o.setAttributeNS(i,t,r):o.setAttribute(t,r)}else o.setAttribute(t,r)}removeAttribute(o,t,r){if(r){let n=us[r];n?o.removeAttributeNS(n,t):o.removeAttribute(`${r}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,r,n){n&(Ko.DashCase|Ko.Important)?o.style.setProperty(t,r,n&Ko.Important?"important":""):o.style[t]=r}removeStyle(o,t,r){r&Ko.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,r){o!=null&&(o[t]=r)}setValue(o,t){o.nodeValue=t}listen(o,t,r){if(typeof o=="string"&&(o=ho().getGlobalEventTarget(this.doc,o),!o))throw new Error(`Unsupported event target ${o} for event ${t}`);return this.eventManager.addEventListener(o,t,this.decoratePreventDefault(r))}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(t)):o(t))===!1&&t.preventDefault()}}};function Ql(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var gs=class extends er{constructor(o,t,r,n,i,s,a,l){super(o,i,s,l),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=rc(n.id,n.styles);for(let d of c){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=d,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,r){return super.insertBefore(this.nodeOrShadowRoot(o),t,r)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},tr=class extends er{constructor(o,t,r,n,i,s,a,l){super(o,i,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=n,this.styles=l?rc(l,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},vn=class extends tr{constructor(o,t,r,n,i,s,a,l){let c=n+"-"+r.id;super(o,t,r,i,s,a,l,c),this.contentAttr=wg(c),this.hostAttr=xg(c)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let r=super.createElement(o,t);return super.setAttribute(r,this.contentAttr,""),r}},_g=(()=>{class e extends mn{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,n){return t.addEventListener(r,n,!1),()=>this.removeEventListener(t,r,n)}removeEventListener(t,r,n){return t.removeEventListener(r,n)}static{this.\u0275fac=function(r){return new(r||e)(P(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Zl=["alt","control","meta","shift"],Eg={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kg={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Mg=(()=>{class e extends mn{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,n){let i=e.parseEventName(r),s=e.eventCallback(i.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ho().onAndCancel(t,i.domEventName,s))}static parseEventName(t){let r=t.toLowerCase().split("."),n=r.shift();if(r.length===0||!(n==="keydown"||n==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Zl.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=n,l.fullKey=s,l}static matchEventFullKeyCode(t,r){let n=Eg[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(n=t.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),Zl.forEach(s=>{if(s!==n){let a=kg[s];a(t)&&(i+=s+".")}}),i+=n,i===r)}static eventCallback(t,r,n){return i=>{e.matchEventFullKeyCode(i,t)&&n.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(r){return new(r||e)(P(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function nc(e,o){return Ol(f({rootComponent:e},Ag(o)))}function Ag(e){return{appProviders:[...Og,...e?.providers??[]],platformProviders:Pg}}function Ig(){hs.makeCurrent()}function Rg(){return new ji}function Dg(){return fl(document),document}var Pg=[{provide:xe,useValue:Fl},{provide:gl,useValue:Ig,multi:!0},{provide:ne,useFactory:Dg,deps:[]}];var Og=[{provide:hl,useValue:"root"},{provide:ji,useFactory:Rg,deps:[]},{provide:fs,useClass:_g,multi:!0,deps:[ne,Ee,xe]},{provide:fs,useClass:Mg,multi:!0,deps:[ne]},bn,tc,ec,{provide:Yr,useExisting:bn},{provide:un,useClass:vg,deps:[]},[]];var ic=(()=>{class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(r){return new(r||e)(P(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var bs=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:function(r){let n=null;return r?n=new(r||e):n=P(Bg),n},providedIn:"root"})}}return e})(),Bg=(()=>{class e extends bs{constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case Ht.NONE:return r;case Ht.HTML:return so(r,"HTML")?io(r):wl(this._doc,String(r)).toString();case Ht.STYLE:return so(r,"Style")?io(r):r;case Ht.SCRIPT:if(so(r,"Script"))return io(r);throw new j(5200,!1);case Ht.URL:return so(r,"URL")?io(r):Tl(String(r));case Ht.RESOURCE_URL:if(so(r,"ResourceURL"))return io(r);throw new j(5201,!1);default:throw new j(5202,!1)}}bypassSecurityTrustHtml(t){return bl(t)}bypassSecurityTrustStyle(t){return vl(t)}bypassSecurityTrustScript(t){return yl(t)}bypassSecurityTrustUrl(t){return Sl(t)}bypassSecurityTrustResourceUrl(t){return Cl(t)}static{this.\u0275fac=function(r){return new(r||e)(P(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var M="primary",vr=Symbol("RouteTitle"),Ts=class{constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t[0]:t}return null}getAll(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Co(e){return new Ts(e)}function Lg(e,o,t){let r=t.path.split("/");if(r.length>e.length||t.pathMatch==="full"&&(o.hasChildren()||r.length<e.length))return null;let n={};for(let i=0;i<r.length;i++){let s=r[i],a=e[i];if(s[0]===":")n[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:n}}function Fg(e,o){if(e.length!==o.length)return!1;for(let t=0;t<e.length;++t)if(!it(e[t],o[t]))return!1;return!0}function it(e,o){let t=e?ws(e):void 0,r=o?ws(o):void 0;if(!t||!r||t.length!=r.length)return!1;let n;for(let i=0;i<t.length;i++)if(n=t[i],!hc(e[n],o[n]))return!1;return!0}function ws(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function hc(e,o){if(Array.isArray(e)&&Array.isArray(o)){if(e.length!==o.length)return!1;let t=[...e].sort(),r=[...o].sort();return t.every((n,i)=>r[i]===n)}else return e===o}function fc(e){return e.length>0?e[e.length-1]:null}function Rt(e){return ol(e)?e:rn(e)?we(Promise.resolve(e)):x(e)}var $g={exact:mc,subset:bc},gc={exact:Hg,subset:Gg,ignored:()=>!0};function sc(e,o,t){return $g[t.paths](e.root,o.root,t.matrixParams)&&gc[t.queryParams](e.queryParams,o.queryParams)&&!(t.fragment==="exact"&&e.fragment!==o.fragment)}function Hg(e,o){return it(e,o)}function mc(e,o,t){if(!Ut(e.segments,o.segments)||!Cn(e.segments,o.segments,t)||e.numberOfChildren!==o.numberOfChildren)return!1;for(let r in o.children)if(!e.children[r]||!mc(e.children[r],o.children[r],t))return!1;return!0}function Gg(e,o){return Object.keys(o).length<=Object.keys(e).length&&Object.keys(o).every(t=>hc(e[t],o[t]))}function bc(e,o,t){return vc(e,o,o.segments,t)}function vc(e,o,t,r){if(e.segments.length>t.length){let n=e.segments.slice(0,t.length);return!(!Ut(n,t)||o.hasChildren()||!Cn(n,t,r))}else if(e.segments.length===t.length){if(!Ut(e.segments,t)||!Cn(e.segments,t,r))return!1;for(let n in o.children)if(!e.children[n]||!bc(e.children[n],o.children[n],r))return!1;return!0}else{let n=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!Ut(e.segments,n)||!Cn(e.segments,n,r)||!e.children[M]?!1:vc(e.children[M],o,i,r)}}function Cn(e,o,t){return o.every((r,n)=>gc[t](e[n].parameters,r.parameters))}var mt=class{constructor(o=new z([],{}),t={},r=null){this.root=o,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Co(this.queryParams),this._queryParamMap}toString(){return zg.serialize(this)}},z=class{constructor(o,t){this.segments=o,this.children=t,this.parent=null,Object.values(t).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Tn(this)}},Vt=class{constructor(o,t){this.path=o,this.parameters=t}get parameterMap(){return this._parameterMap??=Co(this.parameters),this._parameterMap}toString(){return Sc(this)}};function Vg(e,o){return Ut(e,o)&&e.every((t,r)=>it(t.parameters,o[r].parameters))}function Ut(e,o){return e.length!==o.length?!1:e.every((t,r)=>t.path===o[r].path)}function Ug(e,o){let t=[];return Object.entries(e.children).forEach(([r,n])=>{r===M&&(t=t.concat(o(n,r)))}),Object.entries(e.children).forEach(([r,n])=>{r!==M&&(t=t.concat(o(n,r)))}),t}var qs=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>new lr,providedIn:"root"})}}return e})(),lr=class{parse(o){let t=new _s(o);return new mt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(o){let t=`/${or(o.root,!0)}`,r=Xg(o.queryParams),n=typeof o.fragment=="string"?`#${Wg(o.fragment)}`:"";return`${t}${r}${n}`}},zg=new lr;function Tn(e){return e.segments.map(o=>Sc(o)).join("/")}function or(e,o){if(!e.hasChildren())return Tn(e);if(o){let t=e.children[M]?or(e.children[M],!1):"",r=[];return Object.entries(e.children).forEach(([n,i])=>{n!==M&&r.push(`${n}:${or(i,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}else{let t=Ug(e,(r,n)=>n===M?[or(e.children[M],!1)]:[`${n}:${or(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[M]!=null?`${Tn(e)}/${t[0]}`:`${Tn(e)}/(${t.join("//")})`}}function yc(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function yn(e){return yc(e).replace(/%3B/gi,";")}function Wg(e){return encodeURI(e)}function xs(e){return yc(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function wn(e){return decodeURIComponent(e)}function ac(e){return wn(e.replace(/\+/g,"%20"))}function Sc(e){return`${xs(e.path)}${jg(e.parameters)}`}function jg(e){return Object.entries(e).map(([o,t])=>`;${xs(o)}=${xs(t)}`).join("")}function Xg(e){let o=Object.entries(e).map(([t,r])=>Array.isArray(r)?r.map(n=>`${yn(t)}=${yn(n)}`).join("&"):`${yn(t)}=${yn(r)}`).filter(t=>t);return o.length?`?${o.join("&")}`:""}var Kg=/^[^\/()?;#]+/;function vs(e){let o=e.match(Kg);return o?o[0]:""}var qg=/^[^\/()?;=#]+/;function Yg(e){let o=e.match(qg);return o?o[0]:""}var Qg=/^[^=?&#]+/;function Zg(e){let o=e.match(Qg);return o?o[0]:""}var Jg=/^[^&#]+/;function e0(e){let o=e.match(Jg);return o?o[0]:""}var _s=class{constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new z([],{}):new z([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(o.length>0||Object.keys(t).length>0)&&(r[M]=new z(o,t)),r}parseSegment(){let o=vs(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new j(4009,!1);return this.capture(o),new Vt(wn(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let t=Yg(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let n=vs(this.remaining);n&&(r=n,this.capture(r))}o[wn(t)]=wn(r)}parseQueryParam(o){let t=Zg(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let s=e0(this.remaining);s&&(r=s,this.capture(r))}let n=ac(t),i=ac(r);if(o.hasOwnProperty(n)){let s=o[n];Array.isArray(s)||(s=[s],o[n]=s),s.push(i)}else o[n]=i}parseParens(o){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=vs(this.remaining),n=this.remaining[r.length];if(n!=="/"&&n!==")"&&n!==";")throw new j(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):o&&(i=M);let s=this.parseChildren();t[i]=Object.keys(s).length===1?s[M]:new z([],s),this.consumeOptional("//")}return t}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new j(4011,!1)}};function Cc(e){return e.segments.length>0?new z([],{[M]:e}):e}function Tc(e){let o={};for(let[r,n]of Object.entries(e.children)){let i=Tc(n);if(r===M&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))o[s]=a;else(i.segments.length>0||i.hasChildren())&&(o[r]=i)}let t=new z(e.segments,o);return t0(t)}function t0(e){if(e.numberOfChildren===1&&e.children[M]){let o=e.children[M];return new z(e.segments.concat(o.segments),o.children)}return e}function cr(e){return e instanceof mt}function o0(e,o,t=null,r=null){let n=wc(e);return xc(n,o,t,r)}function wc(e){let o;function t(i){let s={};for(let l of i.children){let c=t(l);s[l.outlet]=c}let a=new z(i.url,s);return i===e&&(o=a),a}let r=t(e.root),n=Cc(r);return o??n}function xc(e,o,t,r){let n=e;for(;n.parent;)n=n.parent;if(o.length===0)return ys(n,n,n,t,r);let i=r0(o);if(i.toRoot())return ys(n,n,new z([],{}),t,r);let s=n0(i,n,e),a=s.processChildren?ir(s.segmentGroup,s.index,i.commands):Ec(s.segmentGroup,s.index,i.commands);return ys(n,s.segmentGroup,a,t,r)}function xn(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function dr(e){return typeof e=="object"&&e!=null&&e.outlets}function ys(e,o,t,r,n){let i={};r&&Object.entries(r).forEach(([l,c])=>{i[l]=Array.isArray(c)?c.map(d=>`${d}`):`${c}`});let s;e===o?s=t:s=_c(e,o,t);let a=Cc(Tc(s));return new mt(a,i,n)}function _c(e,o,t){let r={};return Object.entries(e.children).forEach(([n,i])=>{i===o?r[n]=t:r[n]=_c(i,o,t)}),new z(e.segments,r)}var _n=class{constructor(o,t,r){if(this.isAbsolute=o,this.numberOfDoubleDots=t,this.commands=r,o&&r.length>0&&xn(r[0]))throw new j(4003,!1);let n=r.find(dr);if(n&&n!==fc(r))throw new j(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function r0(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new _n(!0,0,e);let o=0,t=!1,r=e.reduce((n,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...n,{outlets:a}]}if(i.segmentPath)return[...n,i.segmentPath]}return typeof i!="string"?[...n,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?o++:a!=""&&n.push(a))}),n):[...n,i]},[]);return new _n(t,o,r)}var vo=class{constructor(o,t,r){this.segmentGroup=o,this.processChildren=t,this.index=r}};function n0(e,o,t){if(e.isAbsolute)return new vo(o,!0,0);if(!t)return new vo(o,!1,NaN);if(t.parent===null)return new vo(t,!0,0);let r=xn(e.commands[0])?0:1,n=t.segments.length-1+r;return i0(t,n,e.numberOfDoubleDots)}function i0(e,o,t){let r=e,n=o,i=t;for(;i>n;){if(i-=n,r=r.parent,!r)throw new j(4005,!1);n=r.segments.length}return new vo(r,!1,n-i)}function s0(e){return dr(e[0])?e[0].outlets:{[M]:e}}function Ec(e,o,t){if(e??=new z([],{}),e.segments.length===0&&e.hasChildren())return ir(e,o,t);let r=a0(e,o,t),n=t.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new z(e.segments.slice(0,r.pathIndex),{});return i.children[M]=new z(e.segments.slice(r.pathIndex),e.children),ir(i,0,n)}else return r.match&&n.length===0?new z(e.segments,{}):r.match&&!e.hasChildren()?Es(e,o,t):r.match?ir(e,0,n):Es(e,o,t)}function ir(e,o,t){if(t.length===0)return new z(e.segments,{});{let r=s0(t),n={};if(Object.keys(r).some(i=>i!==M)&&e.children[M]&&e.numberOfChildren===1&&e.children[M].segments.length===0){let i=ir(e.children[M],o,t);return new z(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(n[i]=Ec(e.children[i],o,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(n[i]=s)}),new z(e.segments,n)}}function a0(e,o,t){let r=0,n=o,i={match:!1,pathIndex:0,commandIndex:0};for(;n<e.segments.length;){if(r>=t.length)return i;let s=e.segments[n],a=t[r];if(dr(a))break;let l=`${a}`,c=r<t.length-1?t[r+1]:null;if(n>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!cc(l,c,s))return i;r+=2}else{if(!cc(l,{},s))return i;r++}n++}return{match:!0,pathIndex:n,commandIndex:r}}function Es(e,o,t){let r=e.segments.slice(0,o),n=0;for(;n<t.length;){let i=t[n];if(dr(i)){let l=l0(i.outlets);return new z(r,l)}if(n===0&&xn(t[0])){let l=e.segments[o];r.push(new Vt(l.path,lc(t[0]))),n++;continue}let s=dr(i)?i.outlets[M]:`${i}`,a=n<t.length-1?t[n+1]:null;s&&a&&xn(a)?(r.push(new Vt(s,lc(a))),n+=2):(r.push(new Vt(s,{})),n++)}return new z(r,{})}function l0(e){let o={};return Object.entries(e).forEach(([t,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(o[t]=Es(new z([],{}),0,r))}),o}function lc(e){let o={};return Object.entries(e).forEach(([t,r])=>o[t]=`${r}`),o}function cc(e,o,t){return e==t.path&&it(o,t.parameters)}var sr="imperative",ye=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ye||{}),Ve=class{constructor(o,t){this.id=o,this.url=t}},ur=class extends Ve{constructor(o,t,r="imperative",n=null){super(o,t),this.type=ye.NavigationStart,this.navigationTrigger=r,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zt=class extends Ve{constructor(o,t,r){super(o,t),this.urlAfterRedirects=r,this.type=ye.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Oe=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Oe||{}),ks=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(ks||{}),gt=class extends Ve{constructor(o,t,r,n){super(o,t),this.reason=r,this.code=n,this.type=ye.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Wt=class extends Ve{constructor(o,t,r,n){super(o,t),this.reason=r,this.code=n,this.type=ye.NavigationSkipped}},pr=class extends Ve{constructor(o,t,r,n){super(o,t),this.error=r,this.target=n,this.type=ye.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},En=class extends Ve{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ms=class extends Ve{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},As=class extends Ve{constructor(o,t,r,n,i){super(o,t),this.urlAfterRedirects=r,this.state=n,this.shouldActivate=i,this.type=ye.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Is=class extends Ve{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rs=class extends Ve{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ds=class{constructor(o){this.route=o,this.type=ye.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ps=class{constructor(o){this.route=o,this.type=ye.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Os=class{constructor(o){this.snapshot=o,this.type=ye.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bs=class{constructor(o){this.snapshot=o,this.type=ye.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ns=class{constructor(o){this.snapshot=o,this.type=ye.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ls=class{constructor(o){this.snapshot=o,this.type=ye.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var hr=class{},To=class{constructor(o,t){this.url=o,this.navigationBehaviorOptions=t}};function c0(e,o){return e.providers&&!e._injector&&(e._injector=Al(e.providers,o,`Route: ${e.path}`)),e._injector??o}function Ze(e){return e.outlet||M}function d0(e,o){let t=e.filter(r=>Ze(r)===o);return t.push(...e.filter(r=>Ze(r)!==o)),t}function yr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let o=e.parent;o;o=o.parent){let t=o.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Fs=class{get injector(){return yr(this.route?.snapshot)??this.rootInjector}set injector(o){}constructor(o){this.rootInjector=o,this.outlet=null,this.route=null,this.children=new Pn(this.rootInjector),this.attachRef=null}},Pn=(()=>{class e{constructor(t){this.rootInjector=t,this.contexts=new Map}onChildOutletCreated(t,r){let n=this.getOrCreateContext(t);n.outlet=r,this.contexts.set(t,n)}onChildOutletDestroyed(t){let r=this.getContext(t);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let r=this.getContext(t);return r||(r=new Fs(this.rootInjector),this.contexts.set(t,r)),r}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(r){return new(r||e)(P(ro))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),kn=class{constructor(o){this._root=o}get root(){return this._root.value}parent(o){let t=this.pathFromRoot(o);return t.length>1?t[t.length-2]:null}children(o){let t=$s(o,this._root);return t?t.children.map(r=>r.value):[]}firstChild(o){let t=$s(o,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(o){let t=Hs(o,this._root);return t.length<2?[]:t[t.length-2].children.map(n=>n.value).filter(n=>n!==o)}pathFromRoot(o){return Hs(o,this._root).map(t=>t.value)}};function $s(e,o){if(e===o.value)return o;for(let t of o.children){let r=$s(e,t);if(r)return r}return null}function Hs(e,o){if(e===o.value)return[o];for(let t of o.children){let r=Hs(e,t);if(r.length)return r.unshift(o),r}return[]}var Pe=class{constructor(o,t){this.value=o,this.children=t}toString(){return`TreeNode(${this.value})`}};function bo(e){let o={};return e&&e.children.forEach(t=>o[t.value.outlet]=t),o}var Mn=class extends kn{constructor(o,t){super(o),this.snapshot=t,Ys(this,o)}toString(){return this.snapshot.toString()}};function kc(e){let o=u0(e),t=new Fe([new Vt("",{})]),r=new Fe({}),n=new Fe({}),i=new Fe({}),s=new Fe(""),a=new wo(t,r,i,s,n,M,e,o.root);return a.snapshot=o.root,new Mn(new Pe(a,[]),o)}function u0(e){let o={},t={},r={},n="",i=new yo([],o,r,n,t,M,e,null,{});return new In("",new Pe(i,[]))}var wo=class{constructor(o,t,r,n,i,s,a,l){this.urlSubject=o,this.paramsSubject=t,this.queryParamsSubject=r,this.fragmentSubject=n,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(D(c=>c[vr]))??x(void 0),this.url=o,this.params=t,this.queryParams=r,this.fragment=n,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(D(o=>Co(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(D(o=>Co(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function An(e,o,t="emptyOnly"){let r,{routeConfig:n}=e;return o!==null&&(t==="always"||n?.path===""||!o.component&&!o.routeConfig?.loadComponent)?r={params:f(f({},o.params),e.params),data:f(f({},o.data),e.data),resolve:f(f(f(f({},e.data),o.data),n?.data),e._resolvedData)}:r={params:f({},e.params),data:f({},e.data),resolve:f(f({},e.data),e._resolvedData??{})},n&&Ac(n)&&(r.resolve[vr]=n.title),r}var yo=class{get title(){return this.data?.[vr]}constructor(o,t,r,n,i,s,a,l,c){this.url=o,this.params=t,this.queryParams=r,this.fragment=n,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Co(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Co(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(r=>r.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${t}')`}},In=class extends kn{constructor(o,t){super(t),this.url=o,Ys(this,t)}toString(){return Mc(this._root)}};function Ys(e,o){o.value._routerState=e,o.children.forEach(t=>Ys(e,t))}function Mc(e){let o=e.children.length>0?` { ${e.children.map(Mc).join(", ")} } `:"";return`${e.value}${o}`}function Ss(e){if(e.snapshot){let o=e.snapshot,t=e._futureSnapshot;e.snapshot=t,it(o.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),o.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),it(o.params,t.params)||e.paramsSubject.next(t.params),Fg(o.url,t.url)||e.urlSubject.next(t.url),it(o.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Gs(e,o){let t=it(e.params,o.params)&&Vg(e.url,o.url),r=!e.parent!=!o.parent;return t&&!r&&(!e.parent||Gs(e.parent,o.parent))}function Ac(e){return typeof e.title=="string"||e.title===null}var p0=(()=>{class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=M,this.activateEvents=new be,this.deactivateEvents=new be,this.attachEvents=new be,this.detachEvents=new be,this.parentContexts=p(Pn),this.location=p(Qr),this.changeDetector=p(Gt),this.inputBinder=p(Qs,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:r,previousValue:n}=t.name;if(r)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new j(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new j(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new j(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,r){this.activated=t,this._activatedRoute=r,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,r){if(this.isActivated)throw new j(4013,!1);this._activatedRoute=t;let n=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Vs(t,a,n.injector);this.activated=n.createComponent(s,{index:n.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=ee({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Ie]})}}return e})(),Vs=class e{__ngOutletInjector(o){return new e(this.route,this.childContexts,o)}constructor(o,t,r){this.route=o,this.childContexts=t,this.parent=r}get(o,t){return o===wo?this.route:o===Pn?this.childContexts:this.parent.get(o,t)}},Qs=new $("");function h0(e,o,t){let r=fr(e,o._root,t?t._root:void 0);return new Mn(r,o)}function fr(e,o,t){if(t&&e.shouldReuseRoute(o.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=o.value;let n=f0(e,o,t);return new Pe(r,n)}else{if(e.shouldAttach(o.value)){let i=e.retrieve(o.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=o.value,s.children=o.children.map(a=>fr(e,a)),s}}let r=g0(o.value),n=o.children.map(i=>fr(e,i));return new Pe(r,n)}}function f0(e,o,t){return o.children.map(r=>{for(let n of t.children)if(e.shouldReuseRoute(r.value,n.value.snapshot))return fr(e,r,n);return fr(e,r)})}function g0(e){return new wo(new Fe(e.url),new Fe(e.params),new Fe(e.queryParams),new Fe(e.fragment),new Fe(e.data),e.outlet,e.component,e)}var gr=class{constructor(o,t){this.redirectTo=o,this.navigationBehaviorOptions=t}},Ic="ngNavigationCancelingError";function Rn(e,o){let{redirectTo:t,navigationBehaviorOptions:r}=cr(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,n=Rc(!1,Oe.Redirect);return n.url=t,n.navigationBehaviorOptions=r,n}function Rc(e,o){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Ic]=!0,t.cancellationCode=o,t}function m0(e){return Dc(e)&&cr(e.url)}function Dc(e){return!!e&&e[Ic]}var b0=(e,o,t,r)=>D(n=>(new Us(o,n.targetRouterState,n.currentRouterState,t,r).activate(e),n)),Us=class{constructor(o,t,r,n,i){this.routeReuseStrategy=o,this.futureState=t,this.currState=r,this.forwardEvent=n,this.inputBindingEnabled=i}activate(o){let t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,o),Ss(this.futureState.root),this.activateChildRoutes(t,r,o)}deactivateChildRoutes(o,t,r){let n=bo(t);o.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,n[s],r),delete n[s]}),Object.values(n).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(o,t,r){let n=o.value,i=t?t.value:null;if(n===i)if(n.component){let s=r.getContext(n.outlet);s&&this.deactivateChildRoutes(o,t,s.children)}else this.deactivateChildRoutes(o,t,r);else i&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(o,t){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,t):this.deactivateRouteAndOutlet(o,t)}detachAndStoreRouteSubtree(o,t){let r=t.getContext(o.value.outlet),n=r&&o.value.component?r.children:t,i=bo(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,n);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:s,route:o,contexts:a})}}deactivateRouteAndOutlet(o,t){let r=t.getContext(o.value.outlet),n=r&&o.value.component?r.children:t,i=bo(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,n);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(o,t,r){let n=bo(t);o.children.forEach(i=>{this.activateRoutes(i,n[i.value.outlet],r),this.forwardEvent(new Ls(i.value.snapshot))}),o.children.length&&this.forwardEvent(new Bs(o.value.snapshot))}activateRoutes(o,t,r){let n=o.value,i=t?t.value:null;if(Ss(n),n===i)if(n.component){let s=r.getOrCreateContext(n.outlet);this.activateChildRoutes(o,t,s.children)}else this.activateChildRoutes(o,t,r);else if(n.component){let s=r.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let a=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ss(a.route.value),this.activateChildRoutes(o,null,s.children)}else s.attachRef=null,s.route=n,s.outlet&&s.outlet.activateWith(n,s.injector),this.activateChildRoutes(o,null,s.children)}else this.activateChildRoutes(o,null,r)}},Dn=class{constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},So=class{constructor(o,t){this.component=o,this.route=t}};function v0(e,o,t){let r=e._root,n=o?o._root:null;return rr(r,n,t,[r.value])}function y0(e){let o=e.routeConfig?e.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:e,guards:o}}function _o(e,o){let t=Symbol(),r=o.get(e,t);return r===t?typeof e=="function"&&!ul(e)?e:o.get(e):r}function rr(e,o,t,r,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=bo(o);return e.children.forEach(s=>{S0(s,i[s.value.outlet],t,r.concat([s.value]),n),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>ar(a,t.getContext(s),n)),n}function S0(e,o,t,r,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=o?o.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=C0(s,i,i.routeConfig.runGuardsAndResolvers);l?n.canActivateChecks.push(new Dn(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?rr(e,o,a?a.children:null,r,n):rr(e,o,t,r,n),l&&a&&a.outlet&&a.outlet.isActivated&&n.canDeactivateChecks.push(new So(a.outlet.component,s))}else s&&ar(o,a,n),n.canActivateChecks.push(new Dn(r)),i.component?rr(e,null,a?a.children:null,r,n):rr(e,null,t,r,n);return n}function C0(e,o,t){if(typeof t=="function")return t(e,o);switch(t){case"pathParamsChange":return!Ut(e.url,o.url);case"pathParamsOrQueryParamsChange":return!Ut(e.url,o.url)||!it(e.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Gs(e,o)||!it(e.queryParams,o.queryParams);case"paramsChange":default:return!Gs(e,o)}}function ar(e,o,t){let r=bo(e),n=e.value;Object.entries(r).forEach(([i,s])=>{n.component?o?ar(s,o.children.getContext(i),t):ar(s,null,t):ar(s,o,t)}),n.component?o&&o.outlet&&o.outlet.isActivated?t.canDeactivateChecks.push(new So(o.outlet.component,n)):t.canDeactivateChecks.push(new So(null,n)):t.canDeactivateChecks.push(new So(null,n))}function Sr(e){return typeof e=="function"}function T0(e){return typeof e=="boolean"}function w0(e){return e&&Sr(e.canLoad)}function x0(e){return e&&Sr(e.canActivate)}function _0(e){return e&&Sr(e.canActivateChild)}function E0(e){return e&&Sr(e.canDeactivate)}function k0(e){return e&&Sr(e.canMatch)}function Pc(e){return e instanceof rl||e?.name==="EmptyError"}var Sn=Symbol("INITIAL_VALUE");function xo(){return He(e=>Gi(e.map(o=>o.pipe(to(1),cl(Sn)))).pipe(D(o=>{for(let t of o)if(t!==!0){if(t===Sn)return Sn;if(t===!1||M0(t))return t}return!0}),St(o=>o!==Sn),to(1)))}function M0(e){return cr(e)||e instanceof gr}function A0(e,o){return $e(t=>{let{targetSnapshot:r,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:s}}=t;return s.length===0&&i.length===0?x(W(f({},t),{guardsResult:!0})):I0(s,r,n,e).pipe($e(a=>a&&T0(a)?R0(r,i,e,o):x(a)),D(a=>W(f({},t),{guardsResult:a})))})}function I0(e,o,t,r){return we(e).pipe($e(n=>N0(n.component,n.route,t,o,r)),Ct(n=>n!==!0,!0))}function R0(e,o,t,r){return we(o).pipe($t(n=>nl(P0(n.route.parent,r),D0(n.route,r),B0(e,n.path,t),O0(e,n.route,t))),Ct(n=>n!==!0,!0))}function D0(e,o){return e!==null&&o&&o(new Ns(e)),x(!0)}function P0(e,o){return e!==null&&o&&o(new Os(e)),x(!0)}function O0(e,o,t){let r=o.routeConfig?o.routeConfig.canActivate:null;if(!r||r.length===0)return x(!0);let n=r.map(i=>Vi(()=>{let s=yr(o)??t,a=_o(i,s),l=x0(a)?a.canActivate(o,e):Ke(s,()=>a(o,e));return Rt(l).pipe(Ct())}));return x(n).pipe(xo())}function B0(e,o,t){let r=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(s=>y0(s)).filter(s=>s!==null).map(s=>Vi(()=>{let a=s.guards.map(l=>{let c=yr(s.node)??t,d=_o(l,c),u=_0(d)?d.canActivateChild(r,e):Ke(c,()=>d(r,e));return Rt(u).pipe(Ct())});return x(a).pipe(xo())}));return x(i).pipe(xo())}function N0(e,o,t,r,n){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return x(!0);let s=i.map(a=>{let l=yr(o)??n,c=_o(a,l),d=E0(c)?c.canDeactivate(e,o,t,r):Ke(l,()=>c(e,o,t,r));return Rt(d).pipe(Ct())});return x(s).pipe(xo())}function L0(e,o,t,r){let n=o.canLoad;if(n===void 0||n.length===0)return x(!0);let i=n.map(s=>{let a=_o(s,e),l=w0(a)?a.canLoad(o,t):Ke(e,()=>a(o,t));return Rt(l)});return x(i).pipe(xo(),Oc(r))}function Oc(e){return tl(me(o=>{if(typeof o!="boolean")throw Rn(e,o)}),D(o=>o===!0))}function F0(e,o,t,r){let n=o.canMatch;if(!n||n.length===0)return x(!0);let i=n.map(s=>{let a=_o(s,e),l=k0(a)?a.canMatch(o,t):Ke(e,()=>a(o,t));return Rt(l)});return x(i).pipe(xo(),Oc(r))}var mr=class{constructor(o){this.segmentGroup=o||null}},br=class extends Error{constructor(o){super(),this.urlTree=o}};function mo(e){return zo(new mr(e))}function $0(e){return zo(new j(4e3,!1))}function H0(e){return zo(Rc(!1,Oe.GuardRejected))}var zs=class{constructor(o,t){this.urlSerializer=o,this.urlTree=t}lineralizeSegments(o,t){let r=[],n=t.root;for(;;){if(r=r.concat(n.segments),n.numberOfChildren===0)return x(r);if(n.numberOfChildren>1||!n.children[M])return $0(`${o.redirectTo}`);n=n.children[M]}}applyRedirectCommands(o,t,r,n,i){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:d,url:u,outlet:h,params:g,data:S,title:b}=n,w=Ke(i,()=>a({params:g,data:S,queryParams:l,fragment:c,routeConfig:d,url:u,outlet:h,title:b}));if(w instanceof mt)throw new br(w);t=w}let s=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),o,r);if(t[0]==="/")throw new br(s);return s}applyRedirectCreateUrlTree(o,t,r,n){let i=this.createSegmentGroup(o,t.root,r,n);return new mt(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(o,t){let r={};return Object.entries(o).forEach(([n,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);r[n]=t[a]}else r[n]=i}),r}createSegmentGroup(o,t,r,n){let i=this.createSegments(o,t.segments,r,n),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(o,l,r,n)}),new z(i,s)}createSegments(o,t,r,n){return t.map(i=>i.path[0]===":"?this.findPosParam(o,i,n):this.findOrReturn(i,r))}findPosParam(o,t,r){let n=r[t.path.substring(1)];if(!n)throw new j(4001,!1);return n}findOrReturn(o,t){let r=0;for(let n of t){if(n.path===o.path)return t.splice(r),n;r++}return o}},Ws={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function G0(e,o,t,r,n){let i=Bc(e,o,t);return i.matched?(r=c0(o,r),F0(r,o,t,n).pipe(D(s=>s===!0?i:f({},Ws)))):x(i)}function Bc(e,o,t){if(o.path==="**")return V0(t);if(o.path==="")return o.pathMatch==="full"&&(e.hasChildren()||t.length>0)?f({},Ws):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let n=(o.matcher||Lg)(t,e,o);if(!n)return f({},Ws);let i={};Object.entries(n.posParams??{}).forEach(([a,l])=>{i[a]=l.path});let s=n.consumed.length>0?f(f({},i),n.consumed[n.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:n.consumed,remainingSegments:t.slice(n.consumed.length),parameters:s,positionalParamSegments:n.posParams??{}}}function V0(e){return{matched:!0,parameters:e.length>0?fc(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function dc(e,o,t,r){return t.length>0&&W0(e,t,r)?{segmentGroup:new z(o,z0(r,new z(t,e.children))),slicedSegments:[]}:t.length===0&&j0(e,t,r)?{segmentGroup:new z(e.segments,U0(e,t,r,e.children)),slicedSegments:t}:{segmentGroup:new z(e.segments,e.children),slicedSegments:t}}function U0(e,o,t,r){let n={};for(let i of t)if(On(e,o,i)&&!r[Ze(i)]){let s=new z([],{});n[Ze(i)]=s}return f(f({},r),n)}function z0(e,o){let t={};t[M]=o;for(let r of e)if(r.path===""&&Ze(r)!==M){let n=new z([],{});t[Ze(r)]=n}return t}function W0(e,o,t){return t.some(r=>On(e,o,r)&&Ze(r)!==M)}function j0(e,o,t){return t.some(r=>On(e,o,r))}function On(e,o,t){return(e.hasChildren()||o.length>0)&&t.pathMatch==="full"?!1:t.path===""}function X0(e,o,t){return o.length===0&&!e.children[t]}var js=class{};function K0(e,o,t,r,n,i,s="emptyOnly"){return new Xs(e,o,t,r,n,s,i).recognize()}var q0=31,Xs=class{constructor(o,t,r,n,i,s,a){this.injector=o,this.configLoader=t,this.rootComponentType=r,this.config=n,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new zs(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(o){return new j(4002,`'${o.segmentGroup}'`)}recognize(){let o=dc(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(D(({children:t,rootSnapshot:r})=>{let n=new Pe(r,t),i=new In("",n),s=o0(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(o){let t=new yo([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,M,t).pipe(D(r=>({children:r,rootSnapshot:t})),eo(r=>{if(r instanceof br)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof mr?this.noMatchError(r):r}))}processSegmentGroup(o,t,r,n,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(o,t,r,i):this.processSegment(o,t,r,r.segments,n,!0,i).pipe(D(s=>s instanceof Pe?[s]:[]))}processChildren(o,t,r,n){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return we(i).pipe($t(s=>{let a=r.children[s],l=d0(t,s);return this.processSegmentGroup(o,l,a,s,n)}),ll((s,a)=>(s.push(...a),s)),Ui(null),al(),$e(s=>{if(s===null)return mo(r);let a=Nc(s);return Y0(a),x(a)}))}processSegment(o,t,r,n,i,s,a){return we(t).pipe($t(l=>this.processSegmentAgainstRoute(l._injector??o,t,l,r,n,i,s,a).pipe(eo(c=>{if(c instanceof mr)return x(null);throw c}))),Ct(l=>!!l),eo(l=>{if(Pc(l))return X0(r,n,i)?x(new js):mo(r);throw l}))}processSegmentAgainstRoute(o,t,r,n,i,s,a,l){return Ze(r)!==s&&(s===M||!On(n,i,r))?mo(n):r.redirectTo===void 0?this.matchSegmentAgainstRoute(o,n,r,i,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(o,n,t,r,i,s,l):mo(n)}expandSegmentAgainstRouteUsingRedirect(o,t,r,n,i,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:h}=Bc(t,n,i);if(!l)return mo(t);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>q0&&(this.allowRedirects=!1));let g=new yo(i,c,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,uc(n),Ze(n),n.component??n._loadedComponent??null,n,pc(n)),S=An(g,a,this.paramsInheritanceStrategy);g.params=Object.freeze(S.params),g.data=Object.freeze(S.data);let b=this.applyRedirects.applyRedirectCommands(d,n.redirectTo,u,g,o);return this.applyRedirects.lineralizeSegments(n,b).pipe($e(w=>this.processSegment(o,r,t,w.concat(h),s,!1,a)))}matchSegmentAgainstRoute(o,t,r,n,i,s){let a=G0(t,r,n,o,this.urlSerializer);return r.path==="**"&&(t.children={}),a.pipe(He(l=>l.matched?(o=r._injector??o,this.getChildConfig(o,r,n).pipe(He(({routes:c})=>{let d=r._loadedInjector??o,{parameters:u,consumedSegments:h,remainingSegments:g}=l,S=new yo(h,u,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,uc(r),Ze(r),r.component??r._loadedComponent??null,r,pc(r)),b=An(S,s,this.paramsInheritanceStrategy);S.params=Object.freeze(b.params),S.data=Object.freeze(b.data);let{segmentGroup:w,slicedSegments:Z}=dc(t,h,g,c);if(Z.length===0&&w.hasChildren())return this.processChildren(d,c,w,S).pipe(D(H=>new Pe(S,H)));if(c.length===0&&Z.length===0)return x(new Pe(S,[]));let ie=Ze(r)===i;return this.processSegment(d,c,w,Z,ie?M:i,!0,S).pipe(D(H=>new Pe(S,H instanceof Pe?[H]:[])))}))):mo(t)))}getChildConfig(o,t,r){return t.children?x({routes:t.children,injector:o}):t.loadChildren?t._loadedRoutes!==void 0?x({routes:t._loadedRoutes,injector:t._loadedInjector}):L0(o,t,r,this.urlSerializer).pipe($e(n=>n?this.configLoader.loadChildren(o,t).pipe(me(i=>{t._loadedRoutes=i.routes,t._loadedInjector=i.injector})):H0(t))):x({routes:[],injector:o})}};function Y0(e){e.sort((o,t)=>o.value.outlet===M?-1:t.value.outlet===M?1:o.value.outlet.localeCompare(t.value.outlet))}function Q0(e){let o=e.value.routeConfig;return o&&o.path===""}function Nc(e){let o=[],t=new Set;for(let r of e){if(!Q0(r)){o.push(r);continue}let n=o.find(i=>r.value.routeConfig===i.value.routeConfig);n!==void 0?(n.children.push(...r.children),t.add(n)):o.push(r)}for(let r of t){let n=Nc(r.children);o.push(new Pe(r.value,n))}return o.filter(r=>!t.has(r))}function uc(e){return e.data||{}}function pc(e){return e.resolve||{}}function Z0(e,o,t,r,n,i){return $e(s=>K0(e,o,t,r,s.extractedUrl,n,i).pipe(D(({state:a,tree:l})=>W(f({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function J0(e,o){return $e(t=>{let{targetSnapshot:r,guards:{canActivateChecks:n}}=t;if(!n.length)return x(t);let i=new Set(n.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let c of Lc(l))s.add(c);let a=0;return we(s).pipe($t(l=>i.has(l)?em(l,r,e,o):(l.data=An(l,l.parent,e).resolve,x(void 0))),me(()=>a++),zi(1),$e(l=>a===s.size?x(t):yt))})}function Lc(e){let o=e.children.map(t=>Lc(t)).flat();return[e,...o]}function em(e,o,t,r){let n=e.routeConfig,i=e._resolve;return n?.title!==void 0&&!Ac(n)&&(i[vr]=n.title),tm(i,e,o,r).pipe(D(s=>(e._resolvedData=s,e.data=An(e,e.parent,t).resolve,null)))}function tm(e,o,t,r){let n=ws(e);if(n.length===0)return x({});let i={};return we(n).pipe($e(s=>om(e[s],o,t,r).pipe(Ct(),me(a=>{if(a instanceof gr)throw Rn(new lr,a);i[s]=a}))),zi(1),sl(i),eo(s=>Pc(s)?yt:zo(s)))}function om(e,o,t,r){let n=yr(o)??r,i=_o(e,n),s=i.resolve?i.resolve(o,t):Ke(n,()=>i(o,t));return Rt(s)}function Cs(e){return He(o=>{let t=e(o);return t?we(t).pipe(D(()=>o)):x(o)})}var Fc=(()=>{class e{buildTitle(t){let r,n=t.root;for(;n!==void 0;)r=this.getResolvedTitleForRoute(n)??r,n=n.children.find(i=>i.outlet===M);return r}getResolvedTitleForRoute(t){return t.data[vr]}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(rm),providedIn:"root"})}}return e})(),rm=(()=>{class e extends Fc{constructor(t){super(),this.title=t}updateTitle(t){let r=this.buildTitle(t);r!==void 0&&this.title.setTitle(r)}static{this.\u0275fac=function(r){return new(r||e)(P(ic))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Zs=new $("",{providedIn:"root",factory:()=>({})}),nm=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=I({type:e,selectors:[["ng-component"]],standalone:!0,features:[R],decls:1,vars:0,template:function(r,n){r&1&&k(0,"router-outlet")},dependencies:[p0],encapsulation:2})}}return e})();function Js(e){let o=e.children&&e.children.map(Js),t=o?W(f({},e),{children:o}):f({},e);return!t.component&&!t.loadComponent&&(o||t.loadChildren)&&t.outlet&&t.outlet!==M&&(t.component=nm),t}var ea=new $(""),im=(()=>{class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=p(es)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return x(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=Rt(t.loadComponent()).pipe(D($c),me(i=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=i}),oo(()=>{this.componentLoaders.delete(t)})),n=new Hi(r,()=>new Xe).pipe($i());return this.componentLoaders.set(t,n),n}loadChildren(t,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return x({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=sm(r,this.compiler,t,this.onLoadEndListener).pipe(oo(()=>{this.childrenLoaders.delete(r)})),s=new Hi(i,()=>new Xe).pipe($i());return this.childrenLoaders.set(r,s),s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function sm(e,o,t,r){return Rt(e.loadChildren()).pipe(D($c),$e(n=>n instanceof Ml||Array.isArray(n)?x(n):we(o.compileModuleAsync(n))),D(n=>{r&&r(e);let i,s,a=!1;return Array.isArray(n)?(s=n,a=!0):(i=n.create(t).injector,s=i.get(ea,[],{optional:!0,self:!0}).flat()),{routes:s.map(Js),injector:i}}))}function am(e){return e&&typeof e=="object"&&"default"in e}function $c(e){return am(e)?e.default:e}var ta=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(lm),providedIn:"root"})}}return e})(),lm=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,r){return t}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),cm=new $("");var dm=new $(""),um=(()=>{class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Xe,this.transitionAbortSubject=new Xe,this.configLoader=p(im),this.environmentInjector=p(ro),this.urlSerializer=p(qs),this.rootContexts=p(Pn),this.location=p(sn),this.inputBindingEnabled=p(Qs,{optional:!0})!==null,this.titleStrategy=p(Fc),this.options=p(Zs,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=p(ta),this.createViewTransition=p(cm,{optional:!0}),this.navigationErrorHandler=p(dm,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>x(void 0),this.rootComponentType=null;let t=n=>this.events.next(new Ds(n)),r=n=>this.events.next(new Ps(n));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let r=++this.navigationId;this.transitions?.next(W(f(f({},this.transitions.value),t),{id:r}))}setupNavigations(t,r,n){return this.transitions=new Fe({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:sr,restoredState:null,currentSnapshot:n.snapshot,targetSnapshot:null,currentRouterState:n,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(St(i=>i.id!==0),D(i=>W(f({},i),{extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),He(i=>{let s=!1,a=!1;return x(i).pipe(He(l=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Oe.SupersededByNewNavigation),yt;this.currentTransition=i,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?W(f({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&d!=="reload"){let u="";return this.events.next(new Wt(l.id,this.urlSerializer.serialize(l.rawUrl),u,ks.IgnoredSameUrlNavigation)),l.resolve(!1),yt}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return x(l).pipe(He(u=>{let h=this.transitions?.getValue();return this.events.next(new ur(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),h!==this.transitions?.getValue()?yt:Promise.resolve(u)}),Z0(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),me(u=>{i.targetSnapshot=u.targetSnapshot,i.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=W(f({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let h=new En(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(h)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:u,extractedUrl:h,source:g,restoredState:S,extras:b}=l,w=new ur(u,this.urlSerializer.serialize(h),g,S);this.events.next(w);let Z=kc(this.rootComponentType).snapshot;return this.currentTransition=i=W(f({},l),{targetSnapshot:Z,urlAfterRedirects:h,extras:W(f({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,x(i)}else{let u="";return this.events.next(new Wt(l.id,this.urlSerializer.serialize(l.extractedUrl),u,ks.IgnoredByUrlHandlingStrategy)),l.resolve(!1),yt}}),me(l=>{let c=new Ms(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),D(l=>(this.currentTransition=i=W(f({},l),{guards:v0(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),i)),A0(this.environmentInjector,l=>this.events.next(l)),me(l=>{if(i.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw Rn(this.urlSerializer,l.guardsResult);let c=new As(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),St(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Oe.GuardRejected),!1)),Cs(l=>{if(l.guards.canActivateChecks.length)return x(l).pipe(me(c=>{let d=new Is(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),He(c=>{let d=!1;return x(c).pipe(J0(this.paramsInheritanceStrategy,this.environmentInjector),me({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",Oe.NoDataFromResolver)}}))}),me(c=>{let d=new Rs(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),Cs(l=>{let c=d=>{let u=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(d.routeConfig).pipe(me(h=>{d.component=h}),D(()=>{})));for(let h of d.children)u.push(...c(h));return u};return Gi(c(l.targetSnapshot.root)).pipe(Ui(null),to(1))}),Cs(()=>this.afterPreactivation()),He(()=>{let{currentSnapshot:l,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return d?we(d).pipe(D(()=>i)):x(i)}),D(l=>{let c=h0(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=i=W(f({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,i}),me(()=>{this.events.next(new hr)}),b0(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),to(1),me({next:l=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new zt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{s=!0}}),dl(this.transitionAbortSubject.pipe(me(l=>{throw l}))),oo(()=>{!s&&!a&&this.cancelNavigationTransition(i,"",Oe.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),eo(l=>{if(a=!0,Dc(l))this.events.next(new gt(i.id,this.urlSerializer.serialize(i.extractedUrl),l.message,l.cancellationCode)),m0(l)?this.events.next(new To(l.url,l.navigationBehaviorOptions)):i.resolve(!1);else{let c=new pr(i.id,this.urlSerializer.serialize(i.extractedUrl),l,i.targetSnapshot??void 0);try{let d=Ke(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof gr){let{message:u,cancellationCode:h}=Rn(this.urlSerializer,d);this.events.next(new gt(i.id,this.urlSerializer.serialize(i.extractedUrl),u,h)),this.events.next(new To(d.redirectTo,d.navigationBehaviorOptions))}else{this.events.next(c);let u=t.errorHandler(l);i.resolve(!!u)}}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return yt}))}))}cancelNavigationTransition(t,r,n){let i=new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),r,n);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function pm(e){return e!==sr}var hm=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(fm),providedIn:"root"})}}return e})(),Ks=class{shouldDetach(o){return!1}store(o,t){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,t){return o.routeConfig===t.routeConfig}},fm=(()=>{class e extends Ks{static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})()}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Hc=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(gm),providedIn:"root"})}}return e})(),gm=(()=>{class e extends Hc{constructor(){super(...arguments),this.location=p(sn),this.urlSerializer=p(qs),this.options=p(Zs,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=p(ta),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new mt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=kc(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(r=>{r.type==="popstate"&&t(r.url,r.state)})}handleRouterEvent(t,r){if(t instanceof ur)this.stateMemento=this.createStateMemento();else if(t instanceof Wt)this.rawUrlTree=r.initialUrl;else if(t instanceof En){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let n=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??n,r)}}else t instanceof hr?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):t instanceof gt&&(t.code===Oe.GuardRejected||t.code===Oe.NoDataFromResolver)?this.restoreHistory(r):t instanceof pr?this.restoreHistory(r,!0):t instanceof zt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,r){let n=t instanceof mt?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(n)||r.extras.replaceUrl){let i=this.browserPageId,s=f(f({},r.extras.state),this.generateNgRouterState(r.id,i));this.location.replaceState(n,"",s)}else{let i=f(f({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(n,"",i)}}restoreHistory(t,r=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,i=this.currentPageId-n;i!==0?this.location.historyGo(i):this.currentUrlTree===t.finalUrl&&i===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,r){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:r}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})()}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),nr=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(nr||{});function mm(e,o){e.events.pipe(St(t=>t instanceof zt||t instanceof gt||t instanceof pr||t instanceof Wt),D(t=>t instanceof zt||t instanceof Wt?nr.COMPLETE:(t instanceof gt?t.code===Oe.Redirect||t.code===Oe.SupersededByNewNavigation:!1)?nr.REDIRECTING:nr.FAILED),St(t=>t!==nr.REDIRECTING),to(1)).subscribe(()=>{o()})}function bm(e){throw e}var vm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ym={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Gc=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=p(on),this.stateManager=p(Hc),this.options=p(Zs,{optional:!0})||{},this.pendingTasks=p(Kr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=p(um),this.urlSerializer=p(qs),this.location=p(sn),this.urlHandlingStrategy=p(ta),this._events=new Xe,this.errorHandler=this.options.errorHandler||bm,this.navigated=!1,this.routeReuseStrategy=p(hm),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=p(ea,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!p(Qs,{optional:!0}),this.eventsSubscription=new el,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(r=>{try{let n=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(n!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof gt&&r.code!==Oe.Redirect&&r.code!==Oe.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof zt)this.navigated=!0;else if(r instanceof To){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,n.currentRawUrl),l=f({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||pm(n.source)},s);this.scheduleNavigation(a,sr,null,l,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}Cm(r)&&this._events.next(r)}catch(n){this.navigationTransitions.transitionAbortSubject.next(n)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),sr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",r)},0)})}navigateToSyncWithBrowser(t,r,n){let i={replaceUrl:!0},s=n?.navigationId?n:null;if(n){let l=f({},n);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,r,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Js),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,r={}){let{relativeTo:n,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=f(f({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let h=n?n.snapshot:this.routerState.snapshot.root;u=wc(h)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return xc(u,t,d,c??null)}navigateByUrl(t,r={skipLocationChange:!1}){let n=cr(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(i,sr,null,r)}navigate(t,r={skipLocationChange:!1}){return Sm(t),this.navigateByUrl(this.createUrlTree(t,r),r)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,r){let n;if(r===!0?n=f({},vm):r===!1?n=f({},ym):n=r,cr(t))return sc(this.currentUrlTree,t,n);let i=this.parseUrl(t);return sc(this.currentUrlTree,i,n)}removeEmptyProps(t){return Object.entries(t).reduce((r,[n,i])=>(i!=null&&(r[n]=i),r),{})}scheduleNavigation(t,r,n,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((u,h)=>{a=u,l=h});let d=this.pendingTasks.add();return mm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(u=>Promise.reject(u))}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Sm(e){for(let o=0;o<e.length;o++)if(e[o]==null)throw new j(4008,!1)}function Cm(e){return!(e instanceof hr)&&!(e instanceof To)}var Tm=new $("");function Vc(e,...o){return dt([{provide:ea,multi:!0,useValue:e},[],{provide:wo,useFactory:wm,deps:[Gc]},{provide:Ji,multi:!0,useFactory:xm},o.map(t=>t.\u0275providers)])}function wm(e){return e.routerState.root}function xm(){let e=p(Xo);return o=>{let t=e.get(nn);if(o!==t.components[0])return;let r=e.get(Gc),n=e.get(_m);e.get(Em)===1&&r.initialNavigation(),e.get(km,null,Wi.Optional)?.setUpPreloading(),e.get(Tm,null,Wi.Optional)?.init(),r.resetRootComponentType(t.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var _m=new $("",{factory:()=>new Xe}),Em=new $("",{providedIn:"root",factory:()=>1});var km=new $("");var Uc=[];var Mm="@",Am=(()=>{class e{constructor(t,r,n,i,s){this.doc=t,this.delegate=r,this.zone=n,this.animationType=i,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=p(kl,{optional:!0}),this.loadingSchedulerFn=p(Im,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-27EO5TLY.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new j(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new oa(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let a=s.createRenderer(t,r);i.use(a),this.scheduler?.notify(10)}).catch(s=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){qi()}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),oa=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,r,n){this.delegate.insertBefore(o,t,r,n)}removeChild(o,t,r){this.delegate.removeChild(o,t,r)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,r,n){this.delegate.setAttribute(o,t,r,n)}removeAttribute(o,t,r){this.delegate.removeAttribute(o,t,r)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,r,n){this.delegate.setStyle(o,t,r,n)}removeStyle(o,t,r){this.delegate.removeStyle(o,t,r)}setProperty(o,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(o,t,r)),this.delegate.setProperty(o,t,r)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(o,t,r)),this.delegate.listen(o,t,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(Mm)}},Im=new $("");function ra(e="animations"){return Yi("NgAsyncAnimations"),dt([{provide:Yr,useFactory:(o,t,r)=>new Am(o,t,r,e),deps:[ne,bn,Ee]},{provide:ml,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Rm(e){let o=e,t=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return r===0&&t%10===1&&t%100!==11?1:r===0&&t%10===Math.floor(t%10)&&t%10>=2&&t%10<=4&&!(t%100>=12&&t%100<=14)?3:r===0&&t%10===0||r===0&&t%10===Math.floor(t%10)&&t%10>=5&&t%10<=9||r===0&&t%100===Math.floor(t%100)&&t%100>=11&&t%100<=14?4:5}var zc=["ru",[["AM","PM"],void 0,void 0],void 0,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],void 0,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y '\u0433'.","d MMMM y '\u0433'.","EEEE, d MMMM y '\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[void 0,"\u0440."],GEL:[void 0,"\u10DA"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",Rm];var Zc=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(r){return new(r||e)(G(ao),G(Tt))}}static{this.\u0275dir=ee({type:e})}}return e})(),Dm=(()=>{class e extends Zc{static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})()}static{this.\u0275dir=ee({type:e,features:[O]})}}return e})(),la=new $("");var Pm={provide:la,useExisting:Wo(()=>zn),multi:!0};function Om(){let e=ho()?ho().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Bm=new $(""),zn=(()=>{class e extends Zc{constructor(t,r,n){super(t,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Om())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(r){return new(r||e)(G(ao),G(Tt),G(Bm,8))}}static{this.\u0275dir=ee({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&q("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},features:[Y([Pm]),O]})}}return e})();var ca=new $(""),da=new $("");function Jc(e){return e!=null}function ed(e){return rn(e)?we(e):e}function td(e){let o={};return e.forEach(t=>{o=t!=null?f(f({},o),t):o}),Object.keys(o).length===0?null:o}function od(e,o){return o.map(t=>t(e))}function Nm(e){return!e.validate}function rd(e){return e.map(o=>Nm(o)?o:t=>o.validate(t))}function Lm(e){if(!e)return null;let o=e.filter(Jc);return o.length==0?null:function(t){return td(od(t,o))}}function nd(e){return e!=null?Lm(rd(e)):null}function Fm(e){if(!e)return null;let o=e.filter(Jc);return o.length==0?null:function(t){let r=od(t,o).map(ed);return il(r).pipe(D(td))}}function id(e){return e!=null?Fm(rd(e)):null}function Wc(e,o){return e===null?[o]:Array.isArray(e)?[...e,o]:[e,o]}function sd(e){return e._rawValidators}function ad(e){return e._rawAsyncValidators}function na(e){return e?Array.isArray(e)?e:[e]:[]}function Nn(e,o){return Array.isArray(e)?e.includes(o):e===o}function jc(e,o){let t=na(o);return na(e).forEach(n=>{Nn(t,n)||t.push(n)}),t}function Xc(e,o){return na(o).filter(t=>!Nn(e,t))}var Ln=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=nd(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=id(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},jt=class extends Ln{get formDirective(){return null}get path(){return null}},Xt=class extends Ln{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Fn=class{constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},$m={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},yS=W(f({},$m),{"[class.ng-submitted]":"isSubmitted"}),ld=(()=>{class e extends Fn{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(G(Xt,2))}}static{this.\u0275dir=ee({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&xt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[O]})}}return e})(),cd=(()=>{class e extends Fn{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(G(jt,10))}}static{this.\u0275dir=ee({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,n){r&2&&xt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[O]})}}return e})();var Cr="VALID",Bn="INVALID",Eo="PENDING",Tr="DISABLED",Dt=class{},$n=class extends Dt{constructor(o,t){super(),this.value=o,this.source=t}},wr=class extends Dt{constructor(o,t){super(),this.pristine=o,this.source=t}},xr=class extends Dt{constructor(o,t){super(),this.touched=o,this.source=t}},ko=class extends Dt{constructor(o,t){super(),this.status=o,this.source=t}},ia=class extends Dt{constructor(o){super(),this.source=o}},sa=class extends Dt{constructor(o){super(),this.source=o}};function dd(e){return(Wn(e)?e.validators:e)||null}function Hm(e){return Array.isArray(e)?nd(e):e||null}function ud(e,o){return(Wn(o)?o.asyncValidators:e)||null}function Gm(e){return Array.isArray(e)?id(e):e||null}function Wn(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function Vm(e,o,t){let r=e.controls;if(!(o?Object.keys(r):r).length)throw new j(1e3,"");if(!r[t])throw new j(1001,"")}function Um(e,o,t){e._forEachChild((r,n)=>{if(t[n]===void 0)throw new j(1002,"")})}var Hn=class{constructor(o,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=te(()=>this.statusReactive()),this.statusReactive=X(void 0),this._pristine=te(()=>this.pristineReactive()),this.pristineReactive=X(!0),this._touched=te(()=>this.touchedReactive()),this.touchedReactive=X(!1),this._events=new Xe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return U(this.statusReactive)}set status(o){U(()=>this.statusReactive.set(o))}get valid(){return this.status===Cr}get invalid(){return this.status===Bn}get pending(){return this.status==Eo}get disabled(){return this.status===Tr}get enabled(){return this.status!==Tr}get pristine(){return U(this.pristineReactive)}set pristine(o){U(()=>this.pristineReactive.set(o))}get dirty(){return!this.pristine}get touched(){return U(this.touchedReactive)}set touched(o){U(()=>this.touchedReactive.set(o))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(jc(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(jc(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Xc(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Xc(o,this._rawAsyncValidators))}hasValidator(o){return Nn(this._rawValidators,o)}hasAsyncValidator(o){return Nn(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let r=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(W(f({},o),{sourceControl:r})),t&&o.emitEvent!==!1&&this._events.next(new xr(!0,r))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:r})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,r),t&&o.emitEvent!==!1&&this._events.next(new xr(!1,r))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let r=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(W(f({},o),{sourceControl:r})),t&&o.emitEvent!==!1&&this._events.next(new wr(!1,r))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,r),t&&o.emitEvent!==!1&&this._events.next(new wr(!0,r))}markAsPending(o={}){this.status=Eo;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ko(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(W(f({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=Tr,this.errors=null,this._forEachChild(n=>{n.disable(W(f({},o),{onlySelf:!0}))}),this._updateValue();let r=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new $n(this.value,r)),this._events.next(new ko(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(f({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=Cr,this._forEachChild(r=>{r.enable(W(f({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(W(f({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(o,t){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Cr||this.status===Eo)&&this._runAsyncValidator(r,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new $n(this.value,t)),this._events.next(new ko(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(W(f({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Tr:Cr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=Eo,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let r=ed(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,n)=>r&&r._find(n),this)}getError(o,t){let r=t?this.get(t):this;return r&&r.errors?r.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,r){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||r)&&this._events.next(new ko(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,r)}_initObservables(){this.valueChanges=new be,this.statusChanges=new be}_calculateStatus(){return this._allControlsDisabled()?Tr:this.errors?Bn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Eo)?Eo:this._anyControlsHaveStatus(Bn)?Bn:Cr}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let r=!this._anyControlsDirty(),n=this.pristine!==r;this.pristine=r,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,t),n&&this._events.next(new wr(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new xr(this.touched,t)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,t)}_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Wn(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let t=this._parent&&this._parent.dirty;return!o&&!!t&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=Hm(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Gm(this._rawAsyncValidators)}},Gn=class extends Hn{constructor(o,t,r){super(dd(t),ud(r,t)),this.controls=o,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(o,t){return this.controls[o]?this.controls[o]:(this.controls[o]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(o,t,r={}){this.registerControl(o,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(o,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(o,t,r={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],t&&this.registerControl(o,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,t={}){Um(this,!0,o),Object.keys(o).forEach(r=>{Vm(this,!0,r),this.controls[r].setValue(o[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(o,t={}){o!=null&&(Object.keys(o).forEach(r=>{let n=this.controls[r];n&&n.patchValue(o[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(o={},t={}){this._forEachChild((r,n)=>{r.reset(o?o[n]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(o,t,r)=>(o[r]=t.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&o(r,t)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&o(r))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(t,r,n)=>((r.enabled||this.disabled)&&(t[n]=r.value),t))}_reduceChildren(o,t){let r=o;return this._forEachChild((n,i)=>{r=t(r,n,i)}),r}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var jn=new $("CallSetDisabledState",{providedIn:"root",factory:()=>Xn}),Xn="always";function pd(e,o){return[...o.path,e]}function aa(e,o,t=Xn){ua(e,o),o.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(e.disabled),Wm(e,o),Xm(e,o),jm(e,o),zm(e,o)}function Kc(e,o,t=!0){let r=()=>{};o.valueAccessor&&(o.valueAccessor.registerOnChange(r),o.valueAccessor.registerOnTouched(r)),Un(e,o),e&&(o._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Vn(e,o){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function zm(e,o){if(o.valueAccessor.setDisabledState){let t=r=>{o.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),o._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function ua(e,o){let t=sd(e);o.validator!==null?e.setValidators(Wc(t,o.validator)):typeof t=="function"&&e.setValidators([t]);let r=ad(e);o.asyncValidator!==null?e.setAsyncValidators(Wc(r,o.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let n=()=>e.updateValueAndValidity();Vn(o._rawValidators,n),Vn(o._rawAsyncValidators,n)}function Un(e,o){let t=!1;if(e!==null){if(o.validator!==null){let n=sd(e);if(Array.isArray(n)&&n.length>0){let i=n.filter(s=>s!==o.validator);i.length!==n.length&&(t=!0,e.setValidators(i))}}if(o.asyncValidator!==null){let n=ad(e);if(Array.isArray(n)&&n.length>0){let i=n.filter(s=>s!==o.asyncValidator);i.length!==n.length&&(t=!0,e.setAsyncValidators(i))}}}let r=()=>{};return Vn(o._rawValidators,r),Vn(o._rawAsyncValidators,r),t}function Wm(e,o){o.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&hd(e,o)})}function jm(e,o){o.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&hd(e,o),e.updateOn!=="submit"&&e.markAsTouched()})}function hd(e,o){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Xm(e,o){let t=(r,n)=>{o.valueAccessor.writeValue(r),n&&o.viewToModelUpdate(r)};e.registerOnChange(t),o._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Km(e,o){e==null,ua(e,o)}function qm(e,o){return Un(e,o)}function fd(e,o){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function Ym(e){return Object.getPrototypeOf(e.constructor)===Dm}function Qm(e,o){e._syncPendingControls(),o.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function gd(e,o){if(!o)return null;Array.isArray(o);let t,r,n;return o.forEach(i=>{i.constructor===zn?t=i:Ym(i)?r=i:n=i}),n||r||t||null}function Zm(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function qc(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function Yc(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Mo=class extends Hn{constructor(o=null,t,r){super(dd(t),ud(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Yc(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){qc(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){qc(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Yc(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Jm=e=>e instanceof Mo;var eb={provide:Xt,useExisting:Wo(()=>pa)},Qc=Promise.resolve(),pa=(()=>{class e extends Xt{constructor(t,r,n,i,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this.control=new Mo,this._registered=!1,this.name="",this.update=new be,this._parent=t,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=gd(this,i)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),fd(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){aa(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Qc.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,n=r!==0&&V(r);Qc.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?pd(t,this._parent):[t]}static{this.\u0275fac=function(r){return new(r||e)(G(jt,9),G(ca,10),G(da,10),G(la,10),G(Gt,8),G(jn,8))}}static{this.\u0275dir=ee({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Y([eb]),O,Ie]})}}return e})();var md=new $("");var tb={provide:jt,useExisting:Wo(()=>ha)},ha=(()=>{class e extends jt{get submitted(){return U(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,r,n){super(),this.callSetDisabledState=n,this._submitted=te(()=>this._submittedReactive()),this._submittedReactive=X(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new be,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Un(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return aa(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){Kc(t.control||null,t,!1),Zm(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this._submittedReactive.set(!0),Qm(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ia(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new sa(this.form))}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,n=this.form.get(t.path);r!==n&&(Kc(r||null,t),Jm(n)&&(aa(n,t,this.callSetDisabledState),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Km(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&qm(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ua(this.form,this),this._oldForm&&Un(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(r){return new(r||e)(G(ca,10),G(da,10),G(jn,8))}}static{this.\u0275dir=ee({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,n){r&1&&q("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Y([tb]),O,Ie]})}}return e})();var ob={provide:Xt,useExisting:Wo(()=>fa)},fa=(()=>{class e extends Xt{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,r,n,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.name=null,this.update=new be,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=gd(this,i)}ngOnChanges(t){this._added||this._setUpControl(),fd(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return pd(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(r){return new(r||e)(G(jt,13),G(ca,10),G(da,10),G(la,10),G(md,8))}}static{this.\u0275dir=ee({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[Y([ob]),O,Ie]})}}return e})();var bd=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=ue({})}}return e})();var vd=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:jn,useValue:t.callSetDisabledState??Xn}]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=ue({imports:[bd]})}}return e})(),yd=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:md,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:jn,useValue:t.callSetDisabledState??Xn}]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=ue({imports:[bd]})}}return e})();function Kt(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function Kn(e,o){if(e&&o){let t=r=>{Kt(e,r)||(e.classList?e.classList.add(r):e.className+=" "+r)};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Ao(e,o){if(e&&o){let t=r=>{e.classList?e.classList.remove(r):e.className=e.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Cd(){let e=window,o=document,t=o.documentElement,r=o.getElementsByTagName("body")[0],n=e.innerWidth||t.clientWidth||r.clientWidth,i=e.innerHeight||t.clientHeight||r.clientHeight;return{width:n,height:i}}function Td(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function wd(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function st(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return t}return 0}function qn(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function xd(e){let o=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?o=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?o=e.el.nativeElement:o=e.el)),qn(o)?o:void 0}function ga(e,o){let t=xd(e);if(t)t.appendChild(o);else throw new Error("Cannot append "+o+" to "+e)}function ma(e,o={}){if(qn(e)){let t=(r,n)=>{var i,s;let a=(i=e?.$attrs)!=null&&i[r]?[(s=e?.$attrs)==null?void 0:s[r]]:[];return[n].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?t(r,c):Object.entries(c).map(([h,g])=>r==="style"&&(g||g===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?h:void 0);l=u.length?l.concat(u.filter(h=>!!h)):l}}return l},a)};Object.entries(o).forEach(([r,n])=>{if(n!=null){let i=r.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),n):r==="p-bind"||r==="pBind"?ma(e,n):(n=r==="class"?[...new Set(t("class",n))].join(" ").trim():r==="style"?t("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=n),e.setAttribute(r,n))}})}}function _d(e,o){if(e){e.style.opacity="0";let t=+new Date,r="0",n=function(){r=`${+e.style.opacity+(new Date().getTime()-t)/o}`,e.style.opacity=r,t=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function Yn(e,o){return qn(e)?e.matches(o)?e:e.querySelector(o):null}function ba(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function Ed(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function at(e,o){if(e){let t=e.offsetHeight;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return t}return 0}function va(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function kd(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function Md(e,o){let t=xd(e);if(t)t.removeChild(o);else throw new Error("Cannot remove "+o+" from "+e)}function Ad(e,o="",t){qn(e)&&t!==null&&t!==void 0&&e.setAttribute(o,t)}function Id(){let e=new Map;return{on(o,t){let r=e.get(o);return r?r.push(t):r=[t],e.set(o,r),this},off(o,t){let r=e.get(o);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(o,t){let r=e.get(o);r&&r.slice().map(n=>{n(t)})},clear(){e.clear()}}}var rb=Object.defineProperty,Rd=Object.getOwnPropertySymbols,nb=Object.prototype.hasOwnProperty,ib=Object.prototype.propertyIsEnumerable,Dd=(e,o,t)=>o in e?rb(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,sb=(e,o)=>{for(var t in o||(o={}))nb.call(o,t)&&Dd(e,t,o[t]);if(Rd)for(var t of Rd(o))ib.call(o,t)&&Dd(e,t,o[t]);return e};function Me(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function ab(e){return!!(e&&e.constructor&&e.call&&e.apply)}function oe(e){return!Me(e)}function Je(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function Ue(e,...o){return ab(e)?e(...o):e}function Pt(e,o=!0){return typeof e=="string"&&(o||e!=="")}function Pd(e){return Pt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Qn(e,o="",t={}){let r=Pd(o).split("."),n=r.shift();return n?Je(e)?Qn(Ue(e[Object.keys(e).find(i=>Pd(i)===n)||""],t),r.join("."),t):void 0:Ue(e,t)}function Zn(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function Od(e){return oe(e)&&!isNaN(e)}function Be(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function _r(...e){let o=(t={},r={})=>{let n=sb({},t);return Object.keys(r).forEach(i=>{Je(r[i])&&i in t&&Je(t[i])?n[i]=o(t[i],r[i]):n[i]=r[i]}),n};return e.reduce((t,r,n)=>n===0?r:o(t,r),{})}function qt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Jn(e){return Pt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}function ya(e){return Pt(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}var ei={};function Yt(e="pui_id_"){return ei.hasOwnProperty(e)||(ei[e]=0),ei[e]++,`${e}${ei[e]}`}function lb(){let e=[],o=(s,a,l=999)=>{let c=n(s,a,l),d=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:d}),d},t=s=>{e=e.filter(a=>a.value!==s)},r=(s,a)=>n(s,a).value,n=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,a,l)=>{a&&(a.style.zIndex=String(o(s,!0,l)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:s=>r(s,!0)}}var MS=lb();var Se=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var ti=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(r){return new(r||e)(G(qr))};static \u0275dir=ee({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return e})(),ze=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=pe({type:e});static \u0275inj=ue({imports:[De]})}return e})();var cb=Object.defineProperty,db=Object.defineProperties,ub=Object.getOwnPropertyDescriptors,oi=Object.getOwnPropertySymbols,Hd=Object.prototype.hasOwnProperty,Gd=Object.prototype.propertyIsEnumerable,Bd=(e,o,t)=>o in e?cb(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,tt=(e,o)=>{for(var t in o||(o={}))Hd.call(o,t)&&Bd(e,t,o[t]);if(oi)for(var t of oi(o))Gd.call(o,t)&&Bd(e,t,o[t]);return e},Sa=(e,o)=>db(e,ub(o)),vt=(e,o)=>{var t={};for(var r in e)Hd.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&oi)for(var r of oi(e))o.indexOf(r)<0&&Gd.call(e,r)&&(t[r]=e[r]);return t};function N(...e){return _r(...e)}var pb=Id(),We=pb;function Nd(e,o){Zn(e)?e.push(...o||[]):Je(e)&&Object.assign(e,o)}function hb(e){return Je(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function fb(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ca(e="",o=""){return fb(`${Pt(e,!1)&&Pt(o,!1)?`${e}-`:e}${o}`)}function Vd(e="",o=""){return`--${Ca(e,o)}`}function gb(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function Ud(e,o="",t="",r=[],n){if(Pt(e)){let i=/{([^}]*)}/g,s=e.trim();if(gb(s))return;if(Be(s,i)){let a=s.replaceAll(i,d=>{let h=d.replace(/{|}/g,"").split(".").filter(g=>!r.some(S=>Be(g,S)));return`var(${Vd(t,Jn(h.join("-")))}${oe(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Be(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Od(e))return e}function mb(e,o,t){Pt(o,!1)&&e.push(`${o}:${t};`)}function Io(e,o){return e?`${e}{${o}}`:""}function Ld(e){return e.length===4?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:e}function Fd(e){var o=parseInt(e.substring(1),16),t=o>>16&255,r=o>>8&255,n=o&255;return{r:t,g:r,b:n}}function bb(e,o,t){return`#${e.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}`}var zd=(e,o,t)=>{e=Ld(e),o=Ld(o);var r=t/100,n=r*2-1,i=(n+1)/2,s=1-i,a=Fd(e),l=Fd(o),c=Math.round(a.r*i+l.r*s),d=Math.round(a.g*i+l.g*s),u=Math.round(a.b*i+l.b*s);return bb(c,d,u)},vb=(e,o)=>zd("#000000",e,o),yb=(e,o)=>zd("#ffffff",e,o),$d=[50,100,200,300,400,500,600,700,800,900,950],L=e=>{if(/{([^}]*)}/g.test(e)){let o=e.replace(/{|}/g,"");return $d.reduce((t,r)=>(t[r]=`{${o}.${r}}`,t),{})}return typeof e=="string"?$d.reduce((o,t,r)=>(o[t]=r<=5?yb(e,(5-r)*19):vb(e,(r-5)*15),o),{}):e};var Ro=(...e)=>Sb(Q.getTheme(),...e),Sb=(e={},o,t,r)=>{if(o){let{variable:n,options:i}=Q.defaults||{},{prefix:s,transform:a}=e?.options||i||{},c=Be(o,/{([^}]*)}/g)?o:`{${o}}`;return r==="value"||Me(r)&&a==="strict"?Q.getTokenValue(o):Ud(c,void 0,s,[n.excludedKeyRegex],t)}return""};function Cb(e,o={}){let t=Q.defaults.variable,{prefix:r=t.prefix,selector:n=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=o,s=(c,d="")=>Object.entries(c).reduce((u,[h,g])=>{let S=Be(h,i)?Ca(d):Ca(d,Jn(h)),b=hb(g);if(Je(b)){let{variables:w,tokens:Z}=s(b,S);Nd(u.tokens,Z),Nd(u.variables,w)}else u.tokens.push((r?S.replace(`${r}-`,""):S).replaceAll("-",".")),mb(u.variables,Vd(S),Ud(b,S,r,[i]));return u},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,r);return{value:a,tokens:l,declarations:a.join(""),css:Io(n,a.join(""))}}var et={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var r;return(r=o.map(n=>n.resolve(t)).find(n=>n.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(e,o){return Cb(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:r,defaults:n}){var i,s,a,l,c,d,u;let{preset:h,options:g}=o,S,b,w,Z,ie,H,ge;if(oe(h)&&g.transform!=="strict"){let{primitive:Le,semantic:ot,extend:Ft}=h,Go=ot||{},{colorScheme:Nr}=Go,Lr=vt(Go,["colorScheme"]),Fr=Ft||{},{colorScheme:$r}=Fr,Vo=vt(Fr,["colorScheme"]),Uo=Nr||{},{dark:Hr}=Uo,Gr=vt(Uo,["dark"]),Vr=$r||{},{dark:Ur}=Vr,zr=vt(Vr,["dark"]),Wr=oe(Le)?this._toVariables({primitive:Le},g):{},jr=oe(Lr)?this._toVariables({semantic:Lr},g):{},Xr=oe(Gr)?this._toVariables({light:Gr},g):{},Ya=oe(Hr)?this._toVariables({dark:Hr},g):{},Qa=oe(Vo)?this._toVariables({semantic:Vo},g):{},Za=oe(zr)?this._toVariables({light:zr},g):{},Ja=oe(Ur)?this._toVariables({dark:Ur},g):{},[Ef,kf]=[(i=Wr.declarations)!=null?i:"",Wr.tokens],[Mf,Af]=[(s=jr.declarations)!=null?s:"",jr.tokens||[]],[If,Rf]=[(a=Xr.declarations)!=null?a:"",Xr.tokens||[]],[Df,Pf]=[(l=Ya.declarations)!=null?l:"",Ya.tokens||[]],[Of,Bf]=[(c=Qa.declarations)!=null?c:"",Qa.tokens||[]],[Nf,Lf]=[(d=Za.declarations)!=null?d:"",Za.tokens||[]],[Ff,$f]=[(u=Ja.declarations)!=null?u:"",Ja.tokens||[]];S=this.transformCSS(e,Ef,"light","variable",g,r,n),b=kf;let Hf=this.transformCSS(e,`${Mf}${If}`,"light","variable",g,r,n),Gf=this.transformCSS(e,`${Df}`,"dark","variable",g,r,n);w=`${Hf}${Gf}`,Z=[...new Set([...Af,...Rf,...Pf])];let Vf=this.transformCSS(e,`${Of}${Nf}color-scheme:light`,"light","variable",g,r,n),Uf=this.transformCSS(e,`${Ff}color-scheme:dark`,"dark","variable",g,r,n);ie=`${Vf}${Uf}`,H=[...new Set([...Bf,...Lf,...$f])],ge=Ue(h.css,{dt:Ro})}return{primitive:{css:S,tokens:b},semantic:{css:w,tokens:Z},global:{css:ie,tokens:H},style:ge}},getPreset({name:e="",preset:o={},options:t,params:r,set:n,defaults:i,selector:s}){var a,l,c;let d,u,h;if(oe(o)&&t.transform!=="strict"){let g=e.replace("-directive",""),S=o,{colorScheme:b,extend:w,css:Z}=S,ie=vt(S,["colorScheme","extend","css"]),H=w||{},{colorScheme:ge}=H,Le=vt(H,["colorScheme"]),ot=b||{},{dark:Ft}=ot,Go=vt(ot,["dark"]),Nr=ge||{},{dark:Lr}=Nr,Fr=vt(Nr,["dark"]),$r=oe(ie)?this._toVariables({[g]:tt(tt({},ie),Le)},t):{},Vo=oe(Go)?this._toVariables({[g]:tt(tt({},Go),Fr)},t):{},Uo=oe(Ft)?this._toVariables({[g]:tt(tt({},Ft),Lr)},t):{},[Hr,Gr]=[(a=$r.declarations)!=null?a:"",$r.tokens||[]],[Vr,Ur]=[(l=Vo.declarations)!=null?l:"",Vo.tokens||[]],[zr,Wr]=[(c=Uo.declarations)!=null?c:"",Uo.tokens||[]],jr=this.transformCSS(g,`${Hr}${Vr}`,"light","variable",t,n,i,s),Xr=this.transformCSS(g,zr,"dark","variable",t,n,i,s);d=`${jr}${Xr}`,u=[...new Set([...Gr,...Ur,...Wr])],h=Ue(Z,{dt:Ro})}return{css:d,tokens:u,style:h}},getPresetC({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let{preset:s,options:a}=o,l=(i=s?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:r,defaults:n})},getPresetD({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let s=e.replace("-directive",""),{preset:a,options:l}=o,c=(i=a?.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:r,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,r){let{cssLayer:n}=o;return n?`@layer ${Ue(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){let s=this.getCommon({name:e,theme:o,params:t,set:n,defaults:i}),a=Object.entries(r).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(d?.css){let u=qt(d?.css),h=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){var s;let a={name:e,theme:o,params:t,set:n,defaults:i},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((d,[u,h])=>d.push(`${u}="${h}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${qt(l)}</style>`:""},createTokens(e={},o,t="",r="",n={}){return Object.entries(e).forEach(([i,s])=>{let a=Be(i,o.variable.excludedKeyRegex)?t:t?`${t}.${ya(i)}`:ya(i),l=r?`${r}.${i}`:i;Je(s)?this.createTokens(s,o,a,l,n):(n[a]||(n[a]={paths:[],computed(c,d={}){var u,h;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,d.binding):c&&c!=="none"?(h=this.paths.find(g=>g.scheme===c))==null?void 0:h.computed(c,d.binding):this.paths.map(g=>g.computed(g.scheme,d[g.scheme]))}}),n[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,d={}){let u=/{([^}]*)}/g,h=s;if(d.name=this.path,d.binding||(d.binding={}),Be(s,u)){let S=s.trim().replaceAll(u,Z=>{var ie;let H=Z.replace(/{|}/g,""),ge=(ie=n[H])==null?void 0:ie.computed(c,d);return Zn(ge)&&ge.length===2?`light-dark(${ge[0].value},${ge[1].value})`:ge?.value}),b=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,w=/var\([^)]+\)/g;h=Be(S.replace(w,"0"),b)?`calc(${S})`:S}return Me(d.binding)&&delete d.binding,{colorScheme:c,path:this.path,paths:d,value:h.includes("undefined")?void 0:h}}}))}),n},getTokenValue(e,o,t){var r;let i=(l=>l.split(".").filter(d=>!Be(d.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),s=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,a=[(r=e[i])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let d=c,{colorScheme:u}=d,h=vt(d,["colorScheme"]);return l[u]=h,l},void 0)},getSelectorRule(e,o,t,r){return t==="class"||t==="attr"?Io(oe(o)?`${e}${o},${e} ${o}`:e,r):Io(e,oe(o)?Io(o,r):r)},transformCSS(e,o,t,r,n={},i,s,a){if(oe(o)){let{cssLayer:l}=n;if(r!=="style"){let c=this.getColorSchemeOption(n,s);o=t==="dark"?c.reduce((d,{type:u,selector:h})=>(oe(h)&&(d+=h.includes("[CSS]")?h.replace("[CSS]",o):this.getSelectorRule(h,a,u,o)),d),""):Io(a??":root",o)}if(l){let c={name:"primeui",order:"primeui"};Je(l)&&(c.name=Ue(l.name,{name:e,type:r})),oe(c.name)&&(o=Io(`@layer ${c.name}`,o),i?.layerNames(c.name))}return o}return""}},Q={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=Sa(tt({},o),{options:tt(tt({},this.defaults.options),o.options)}),this._tokens=et.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),We.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Sa(tt({},this.theme),{preset:e}),this._tokens=et.createTokens(e,this.defaults),this.clearLoadedStyleNames(),We.emit("preset:change",e),We.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Sa(tt({},this.theme),{options:e}),this.clearLoadedStyleNames(),We.emit("options:change",e),We.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return et.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return et.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPresetD(t)},getCustomPreset(e="",o,t,r){let n={name:e,preset:o,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPreset(n)},getLayerOrderCSS(e=""){return et.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",r){return et.transformCSS(e,o,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return et.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return et.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),We.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&We.emit("theme:load"))}};var Tb=0,Wd=(()=>{class e{document=p(ne);use(t,r={}){let n=!1,i=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Tb}`,id:d=void 0,media:u=void 0,nonce:h=void 0,first:g=!1,props:S={}}=r;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!s.isConnected){i=t,ma(s,{type:"text/css",media:u,nonce:h});let b=this.document.head;g&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),Ad(s,"data-primeng-style-id",c)}return s.textContent!==i&&(s.textContent=i),{id:d,name:c,el:s,css:i}}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Do={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},wb=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,xb=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,re=(()=>{class e{name="base";useStyle=p(Wd);theme=wb;css=xb;classes={};inlineStyles={};load=(t,r={},n=i=>i)=>{let i=n(Ue(t,{dt:Ro}));return i?this.useStyle.use(qt(i),f({name:this.name},r)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},r="")=>this.load(this.theme,t,(n="")=>Q.transformCSS(t.name||this.name,`${n}${r}`));getCommonTheme=t=>Q.getCommon(this.name,t);getComponentTheme=t=>Q.getComponent(this.name,t);getDirectiveTheme=t=>Q.getDirective(this.name,t);getPresetTheme=(t,r,n)=>Q.getCustomPreset(this.name,t,r,n);getLayerOrderThemeCSS=()=>Q.getLayerOrderCSS(this.name);getStyleSheet=(t="",r={})=>{if(this.css){let n=Ue(this.css,{dt:Ro}),i=qt(`${n}${t}`),s=Object.entries(r).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${i}</style>`}return""};getCommonThemeStyleSheet=(t,r={})=>Q.getCommonStyleSheet(this.name,t,r);getThemeStyleSheet=(t,r={})=>{let n=[Q.getStyleSheet(this.name,t,r)];if(this.theme){let i=this.name==="base"?"global-style":`${this.name}-style`,s=Ue(this.theme,{dt:Ro}),a=qt(Q.transformCSS(i,s)),l=Object.entries(r).reduce((c,[d,u])=>c.push(`${d}="${u}"`)&&c,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${i}" ${l}>${a}</style>`)}return n.join("")};static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var _b=(()=>{class e{theme=X(void 0);isThemeChanged=!1;document=p(ne);baseStyle=p(re);constructor(){ae(()=>{We.on("theme:change",t=>{U(()=>{this.isThemeChanged=!0,this.theme.set(t)})})},{allowSignalWrites:!0}),ae(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){Q.clearLoadedStyleNames(),We.clear()}onThemeChange(t){Q.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Q.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(t?.css,f({name:"primitive-variables"},s)),this.baseStyle.load(r?.css,f({name:"semantic-variables"},s)),this.baseStyle.load(n?.css,f({name:"global-variables"},s)),this.baseStyle.loadTheme(f({name:"global-style"},s),i),Q.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:r}=t||{};r&&this.theme.set(r)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Er=(()=>{class e extends _b{ripple=X(!1);platformId=p(xe);inputStyle=X("outlined");inputVariant=X("outlined");overlayOptions={};csp=X({nonce:void 0});filterMatchModeOptions={text:[Se.STARTS_WITH,Se.CONTAINS,Se.NOT_CONTAINS,Se.ENDS_WITH,Se.EQUALS,Se.NOT_EQUALS],numeric:[Se.EQUALS,Se.NOT_EQUALS,Se.LESS_THAN,Se.LESS_THAN_OR_EQUAL_TO,Se.GREATER_THAN,Se.GREATER_THAN_OR_EQUAL_TO],date:[Se.DATE_IS,Se.DATE_IS_NOT,Se.DATE_BEFORE,Se.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Xe;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=f(f({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:r,ripple:n,inputStyle:i,theme:s,overlayOptions:a,translation:l}=t||{};r&&this.csp.set(r),n&&this.ripple.set(n),i&&this.inputStyle.set(i),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Eb=new $("PRIME_NG_CONFIG");function jd(...e){let o=e?.map(r=>({provide:Eb,useValue:r,multi:!1})),t={provide:Zi,useFactory:r=>()=>e?.forEach(n=>r.setConfig(n)),deps:[Er],multi:!0};return dt([...o,t])}var Xd={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${e("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Kd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
.p-autocomplete-dropdown:focus-visible {
    background: ${e("autocomplete.dropdown.hover.background")}
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${e("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}
`};var qd={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var Yd={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Qd={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var Zd={root:{borderRadius:"{content.border.radius}"}};var Jd={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var eu={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
.p-button:focus-visible {
    background: ${e("button.primary.active.background")};
    border-color: ${e("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${e("button.secondary.active.background")};
    border-color: ${e("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${e("button.success.active.background")};
    border-color: ${e("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${e("button.info.active.background")};
    border-color: ${e("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${e("button.warn.active.background")};
    border-color: ${e("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${e("button.help.active.background")};
    border-color: ${e("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${e("button.danger.active.background")};
    border-color: ${e("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${e("button.contrast.active.background")};
    border-color: ${e("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${e("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${e("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${e("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${e("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${e("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${e("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${e("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${e("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${e("button.outlined.plain.active.background")};
}
`};var tu={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var ou={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 84%);
}
`};var ru={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`};var nu={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${e("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`};var iu={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var su={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var au={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var lu={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var cu={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var du={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var uu={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var pu={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${e("datepicker.select.month.hover.background")};
    color: ${e("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${e("datepicker.select.year.hover.background")};
    color: ${e("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${e("datepicker.dropdown.hover.background")};
    border-color: ${e("datepicker.dropdown.hover.border.color")};
    color: ${e("datepicker.dropdown.hover.color")};
}
`};var hu={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var fu={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var gu={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var mu={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var bu={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var vu={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var yu={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var Su={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var Cu={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var Tu={icon:{color:"{form.field.icon.color}"}};var wu={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var xu={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var _u={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Eu={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var ku={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var Mu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var Au={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var Iu={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${e("inputtext.border.color")}
}
`};var Ru={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var Du={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-inputtext.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}
`};var Pu={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var Ou={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var Bu={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Nu={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var Lu={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Fu={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var $u={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var Hu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`};var Gu={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Vu={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var Uu={root:{outline:{width:"2px",color:"{content.background}"}}};var zu={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var Wu={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var ju={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${e("panelmenu.panel.border.color")}
    transition: margin ${e("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Xu={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var Ku={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var qu={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var Yu={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Qu={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}};var Zu={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
.p-radiobutton {
    border-radius: 50%
    transition: box-shadow ${e("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 84%);
}
`};var Ju={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
}
`};var ep={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var tp={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var op={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`};var rp={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var np={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var ip={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",contentBackground:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-slider-handle {
    transition: box-shadow ${e("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 84%);
}
`};var sp={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var ap={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var lp={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var cp={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var dp={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var up={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var pp={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${e("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${e("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var hp={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var fp={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var gp={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var mp={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}};var bp={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var vp={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var yp={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"0",info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var Sp={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedBackground:"transparent",checkedShadow:"none"},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var Cp={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`};var Tp={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}}};var wp={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var xp={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var _p={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}
`};var Ep={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var kp={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var F=W(f({},Qd),{components:{accordion:Xd,autocomplete:Kd,avatar:qd,badge:Yd,blockui:Zd,breadcrumb:Jd,button:eu,datepicker:pu,card:tu,carousel:ou,cascadeselect:ru,checkbox:nu,chip:iu,colorpicker:su,confirmdialog:au,confirmpopup:lu,contextmenu:cu,dataview:uu,datatable:du,dialog:hu,divider:fu,dock:gu,drawer:mu,editor:bu,fieldset:vu,fileupload:yu,iftalabel:wu,floatlabel:Su,galleria:Cu,iconfield:Tu,image:xu,imagecompare:_u,inlinemessage:Eu,inplace:ku,inputchips:Mu,inputgroup:Au,inputnumber:Iu,inputotp:Ru,inputtext:Du,knob:Pu,listbox:Ou,megamenu:Bu,menu:Nu,menubar:Lu,message:Fu,metergroup:$u,multiselect:Hu,orderlist:Gu,organizationchart:Vu,overlaybadge:Uu,popover:qu,paginator:zu,password:Xu,panel:Wu,panelmenu:ju,picklist:Ku,progressbar:Yu,progressspinner:Qu,radiobutton:Zu,rating:Ju,scrollpanel:tp,select:op,selectbutton:rp,skeleton:np,slider:ip,speeddial:sp,splitter:lp,splitbutton:ap,stepper:cp,steps:dp,tabmenu:up,tabs:pp,tabview:hp,textarea:mp,tieredmenu:bp,tag:fp,terminal:gp,timeline:vp,togglebutton:Sp,toggleswitch:Cp,tree:xp,treeselect:_p,treetable:Ep,toast:yp,toolbar:Tp,virtualscroller:kp,tooltip:wp,ripple:ep},css:({dt:e})=>`

    `});var Po=N(F,{semantic:{primary:L("{green}")}});Ll(zc);var Mp={providers:[Pl({eventCoalescing:!0}),Vc(Uc),ra(),pl(vd),ra(),Yl(),jd({theme:{preset:Po,options:{darkModeSelector:!1}}})]};var Ap=N(F,{semantic:{primary:L("{emerald}")}});var Ip=N(F,{semantic:{primary:L("{lime}")}});var Rp=N(F,{semantic:{primary:L("{orange}")}});var Dp=N(F,{semantic:{primary:L("{amber}")}});var Pp=N(F,{semantic:{primary:L("{yellow}")}});var Op=N(F,{semantic:{primary:L("{teal}")}});var Bp=N(F,{semantic:{primary:L("{cyan}")}});var Np=N(F,{semantic:{primary:L("{sky}")}});var Lp=N(F,{semantic:{primary:L("{blue}")}});var Fp=N(F,{semantic:{primary:L("{indigo}")}});var $p=N(F,{semantic:{primary:L("{violet}")}});var Hp=N(F,{semantic:{primary:L("{purple}")}});var Gp=N(F,{semantic:{primary:L("{fuchsia}")}});var Vp=N(F,{semantic:{primary:L("{pink}")}});var Up=N(F,{semantic:{primary:L("{rose}")}});var ri=[{name:"emerald",preset:Ap,options:{darkModeSelector:".dark"}},{name:"green",preset:Po,options:{darkModeSelector:".dark"}},{name:"lime",preset:Ip,options:{darkModeSelector:".dark"}},{name:"orange",preset:Rp,options:{darkModeSelector:".dark"}},{name:"amber",preset:Dp,options:{darkModeSelector:".dark"}},{name:"yellow",preset:Pp,options:{darkModeSelector:".dark"}},{name:"teal",preset:Op,options:{darkModeSelector:".dark"}},{name:"cyan",preset:Bp,options:{darkModeSelector:".dark"}},{name:"sky",preset:Np,options:{darkModeSelector:".dark"}},{name:"blue",preset:Lp,options:{darkModeSelector:".dark"}},{name:"indigo",preset:Fp,options:{darkModeSelector:".dark"}},{name:"violet",preset:$p,options:{darkModeSelector:".dark"}},{name:"purple",preset:Hp,options:{darkModeSelector:".dark"}},{name:"fuchsia",preset:Gp,options:{darkModeSelector:".dark"}},{name:"pink",preset:Vp,options:{darkModeSelector:".dark"}},{name:"rose",preset:Up,options:{darkModeSelector:".dark"}}];var fe=class e{primeng=p(Er);open=X(!1);selectedMenu=X(void 0);selectedLink=X(void 0);selectedEditingLink=X(void 0);links=X(void 0);selectedPreset=X({name:"green",preset:Po,options:{darkModeSelector:!1}});resize=X(void 0);onLinksChanged(){let o=this.links();o&&(U(()=>{let t=this.selectedLink();t&&this.selectedLink.set(o.find(r=>r.id===t.id))}),localStorage.setItem("links",JSON.stringify(o)))}readStorageLinks(){let o=localStorage.getItem("links");if(!o){this.links.set([]);return}let t=JSON.parse(o);this.links.set(t)}onSelectedPresetChanged(){let o=this.selectedPreset();U(()=>{localStorage.setItem("preset",o.name),this.primeng.theme.set(o)})}readStoragePreset(){let o=localStorage.getItem("preset");if(!o){localStorage.setItem("preset","green");return}if(this.selectedPreset().name===o)return;let r=ri.find(n=>n.name===o);r&&this.selectedPreset.set(r)}onOpenChanged(){let o=this.open();U(()=>{this.selectedMenu()&&!o&&(this.selectedMenu.set(void 0),this.selectedEditingLink.set(void 0))})}constructor(){ae(this.onLinksChanged.bind(this)),ae(this.onOpenChanged.bind(this)),ae(this.onSelectedPresetChanged.bind(this)),this.readStorageLinks(),this.readStoragePreset()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})};var zp=(()=>{class e extends re{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),de=(()=>{class e{document=p(ne);platformId=p(xe);el=p(Tt);injector=p(Xo);cd=p(Gt);renderer=p(ao);config=p(Er);baseComponentStyle=p(zp);baseStyle=p(re);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Yt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,r="",n={}){return Qn(t,r,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!go(this.platformId)){let{dt:r}=t;r&&r.currentValue&&(this._loadScopedThemeStyles(r.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(r.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{Do.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Do.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Do.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Do.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Q.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(r?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(f({name:"global-style"},this.styleOptions),i),Q.setLoadedStyleName("common")}if(!Q.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:r}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),r),Q.setLoadedStyleName(this.componentStyle?.name)}if(!Q.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,f({name:"layer-order",first:!0},this.styleOptions)),Q.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:r}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(r,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Do.clearLoadedStyleNames(),We.on("theme:change",t)}cx(t,r){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let r=this.componentStyle?.inlineStyles?.[t];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:f({},r)}get parent(){return this.parentInstance}static \u0275fac=function(r){return new(r||e)};static \u0275dir=ee({type:e,inputs:{dt:"dt"},standalone:!0,features:[Y([zp,re]),Ie]})}return e})();var Ta=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,r){t&&r&&(t.classList?t.classList.add(r):t.className+=" "+r)}static addMultipleClasses(t,r){if(t&&r)if(t.classList){let n=r.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=r.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,r){t&&r&&(t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,r){t&&r&&[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,r){return t&&r?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(r){return r!==t})}static find(t,r){return Array.from(t.querySelectorAll(r))}static findSingle(t,r){return this.isElement(t)?t.querySelector(r):null}static index(t){let r=t.parentNode.childNodes,n=0;for(var i=0;i<r.length;i++){if(r[i]==t)return n;r[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,r){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<n.length;s++){if(n[s]==t)return i;n[s].attributes&&n[s].attributes[r]&&n[s].nodeType==1&&i++}return-1}static appendOverlay(t,r,n="self"){n!=="self"&&t&&r&&this.appendChild(t,r)}static alignOverlay(t,r,n="self",i=!0){t&&r&&(i&&(t.style.minWidth=`${e.getOuterWidth(r)}px`),n==="self"?this.relativePosition(t,r):this.absolutePosition(t,r))}static relativePosition(t,r,n=!0){let i=ie=>{if(ie)return getComputedStyle(ie).getPropertyValue("position")==="relative"?ie:i(ie.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=r.offsetHeight,l=r.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),g=i(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},S,b;l.top+a+s.height>u.height?(S=l.top-g.top-s.height,t.style.transformOrigin="bottom",l.top+S<0&&(S=-1*l.top)):(S=a+l.top-g.top,t.style.transformOrigin="top");let w=l.left+s.width-u.width,Z=l.left-g.left;s.width>u.width?b=(l.left-g.left)*-1:w>0?b=Z-w:b=l.left-g.left,t.style.top=S+"px",t.style.left=b+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,r,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,a=i.width,l=r.offsetHeight,c=r.offsetWidth,d=r.getBoundingClientRect(),u=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),g=this.getViewport(),S,b;d.top+l+s>g.height?(S=d.top+u-s,t.style.transformOrigin="bottom",S<0&&(S=u)):(S=l+d.top+u,t.style.transformOrigin="top"),d.left+a>g.width?b=Math.max(0,d.left+h+c-a):b=d.left+h,t.style.top=S+"px",t.style.left=b+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,r=[]){return t.parentNode===null?r:this.getParents(t.parentNode,r.concat([t.parentNode]))}static getScrollableParents(t){let r=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let u=this.findSingle(a,d);u&&s(u)&&r.push(u)}}a.nodeType!==9&&s(a)&&r.push(a)}}return r}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementDimensions(t){let r={};return t.style.visibility="hidden",t.style.display="block",r.width=t.offsetWidth,r.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",r}static scrollInView(t,r){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=r.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,u=t.scrollTop,h=t.clientHeight,g=this.getOuterHeight(r);d<0?t.scrollTop=u+d:d+g>h&&(t.scrollTop=u+d-h+g)}static fadeIn(t,r){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/r,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,r){var n=1,i=50,s=r,a=i/s;let l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,r){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(t,r)}static getOuterWidth(t,r){let n=t.offsetWidth;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let r=getComputedStyle(t);return parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)}static getHorizontalMargin(t){let r=getComputedStyle(t);return parseFloat(r.marginLeft)+parseFloat(r.marginRight)}static innerWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static width(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static getInnerHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),r}static getOuterHeight(t,r){let n=t.offsetHeight;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),r}static getWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),r}static getViewport(){let t=window,r=document,n=r.documentElement,i=r.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||i.clientWidth,a=t.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:a}}static getOffset(t){var r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,r){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(r,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,r=t.indexOf("MSIE ");if(r>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,r){if(this.isElement(r))r.appendChild(t);else if(r&&r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(t);else throw"Cannot append "+r+" to "+t}static removeChild(t,r){if(this.isElement(r))r.removeChild(t);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+r}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let r=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);let n=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let r=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=r,r}static invokeElementMethod(t,r,n){t[r].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),r=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:r[1]||"",version:r[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,r){t&&document.activeElement!==t&&t.focus(r)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,r=""){let n=this.find(t,this.getFocusableSelectorString(r)),i=[];for(let s of n){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(t,r=""){let n=this.findSingle(t,this.getFocusableSelectorString(r));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,r=""){let n=this.getFocusableElements(t,r);return n.length>0?n[0]:null}static getLastFocusableElement(t,r){let n=this.getFocusableElements(t,r);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,r=!1){let n=e.getFocusableElements(t),i=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);r?s==-1||s===0?i=n.length-1:i=s-1:s!=-1&&s!==n.length-1&&(i=s+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,r){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return r?.nextElementSibling;case"@prev":return r?.previousElementSibling;case"@parent":return r?.parentElement;case"@grandparent":return r?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,r){if(t){let n=t.getAttribute(r);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,r={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,r),i.append(...n),i}}static setAttribute(t,r="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(r,n)}static setAttributes(t,r={}){if(this.isElement(t)){let n=(i,s)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?n(i,c):Object.entries(c).map(([h,g])=>i==="style"&&(g||g===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?h:void 0);l=u.length?l.concat(u.filter(h=>!!h)):l}}return l},a)};Object.entries(r).forEach(([i,s])=>{if(s!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):i==="pBind"?this.setAttributes(t,s):(s=i==="class"?[...new Set(n("class",s))].join(" ").trim():i==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,r=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`):!1}}return e})(),ni=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=Ta.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};function kb(){let e=[],o=(i,s)=>{let a=e.length>0?e[e.length-1]:{key:i,value:s},l=a.value+(a.key===i?0:s)+2;return e.push({key:i,value:l}),l},t=i=>{e=e.filter(s=>s.value!==i)},r=()=>e.length>0?e[e.length-1].value:0,n=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:n,set:(i,s,a)=>{s&&(s.style.zIndex=String(o(i,a)))},clear:i=>{i&&(t(n(i)),i.style.zIndex="")},getCurrent:()=>r()}}var ii=kb();var Mb=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,Ab={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Wp=(()=>{class e extends re{name="tooltip";theme=Mb;classes=Ab;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var jp=(()=>{class e extends de{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Yt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=p(Wp);interactionInProgress=!1;constructor(t,r){super(),this.zone=t,this.viewContainer=r}ngAfterViewInit(){super.ngAfterViewInit(),nt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let r=this.el.nativeElement.querySelector(".p-component");r||(r=this.getTarget(this.el.nativeElement)),r.addEventListener("focus",this.focusListener),r.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=f(f({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Kt(t.relatedTarget,"p-tooltip")||Kt(t.relatedTarget,"p-tooltip-text")||Kt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ga(this.container,this.el.nativeElement):ga(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",r=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),_d(this.container,250),this.getOption("tooltipZIndex")==="auto"?ii.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&ii.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof qr){let r=this.viewContainer.createEmbeddedView(t);r.detectChanges(),r.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),r={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[n,i]of r[t].entries())if(n===0)i.call(this);else if(this.isOutOfBounds())i.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),r=t.left+Td(),n=t.top+wd();return{left:r,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?Yn(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,r=st(t),n=(at(t)-at(this.container))/2;this.alignTooltip(r,n)}alignLeft(){this.preAlign("left");let t=st(this.container),r=(at(this.el.nativeElement)-at(this.container))/2;this.alignTooltip(-t,r)}alignTop(){this.preAlign("top");let t=(st(this.el.nativeElement)-st(this.container))/2,r=at(this.container);this.alignTooltip(t,-r)}alignBottom(){this.preAlign("bottom");let t=(st(this.el.nativeElement)-st(this.container))/2,r=at(this.el.nativeElement);this.alignTooltip(t,r)}alignTooltip(t,r){let n=this.getHostOffset(),i=n.left+t,s=n.top+r;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=f(f({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Kt(t,"p-inputwrapper")?Yn(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let r="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?r+" "+this.getOption("tooltipStyleClass"):r}isOutOfBounds(){let t=this.container.getBoundingClientRect(),r=t.top,n=t.left,i=st(this.container),s=at(this.container),a=Cd();return n+i>a.width||n<0||r<0||r+s>a.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ni(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let r=this.el.nativeElement.querySelector(".p-component");r||(r=this.getTarget(this.el.nativeElement)),r.removeEventListener("focus",this.focusListener),r.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Md(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&ii.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(r){return new(r||e)(G(Ee),G(Qr))};static \u0275dir=ee({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",V],showDelay:[2,"showDelay","showDelay",kt],hideDelay:[2,"hideDelay","hideDelay",kt],life:[2,"life","life",kt],positionTop:[2,"positionTop","positionTop",kt],positionLeft:[2,"positionLeft","positionLeft",kt],autoHide:[2,"autoHide","autoHide",V],fitContent:[2,"fitContent","fitContent",V],hideOnEscape:[2,"hideOnEscape","hideOnEscape",V],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},standalone:!0,features:[Y([Wp]),Re,O,Ie]})}return e})();var Ib=["componentRef"];function Rb(e,o){if(e&1&&k(0,"img",2),e&2){let t=_();y("src",t.icon,_l)("width",t._size==="m"?24:16)("height",t._size==="m"?24:16)}}function Db(e,o){if(e&1&&k(0,"img",3),e&2){let t=_();y("width",t._size==="m"?24:16)("height",t._size==="m"?24:16)}}var Oo=class e{link=Ge.required();selected=Ge(!1);size=Ge("m");hovered=X(!1);componentRef=wt("componentRef");get icon(){return this.link().iconSrc}get _size(){return this.size()}get label(){return this.link().label}onMouseEnter(){this.hovered()||this.hovered.set(!0)}onMouseLeave(){this.hovered()&&this.hovered.set(!1)}onHoveredChanged(){let o=this.hovered();U(()=>{if(this.selected())return;let r=this.componentRef();if(!r)return;let n=r.nativeElement;if(o){n.style.background="var(--p-primary-200)";return}n.style.background="var(--p-primary-100)"})}onSelectedChanged(){let o=this.selected();U(()=>{let t=this.componentRef();if(!t)return;let r=t.nativeElement;o?r.style.background="var(--p-primary-500)":r.matches(":hover")?r.style.background="var(--p-primary-200)":r.style.background="var(--p-primary-100)"})}constructor(){ae(this.onHoveredChanged.bind(this)),ae(this.onSelectedChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-button"]],viewQuery:function(t,r){t&1&&_t(r.componentRef,Ib,5),t&2&&ht()},inputs:{link:[1,"link"],selected:[1,"selected"],size:[1,"size"]},standalone:!0,features:[R],decls:4,vars:6,consts:[["componentRef",""],["tooltipPosition","right","showDelay","500",1,"container",3,"mouseenter","mouseleave","pTooltip"],[3,"src","width","height"],["src","image.svg",3,"width","height"]],template:function(t,r){if(t&1){let n=ve();C(0,"div",1,0),q("mouseenter",function(){return le(n),ce(r.onMouseEnter())})("mouseleave",function(){return le(n),ce(r.onMouseLeave())}),K(2,Rb,1,3,"img",2)(3,Db,1,2,"img",3),T()}t&2&&(rt("width",r._size==="m"?"38px":"24px")("height",r._size==="m"?"38px":"24px"),y("pTooltip",r.label),v(2),se(r.icon?2:3))},dependencies:[jp],styles:[".container[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}"]})};var Xp=[{id:"edit",iconSrc:"plus.svg",label:"",path:""},{id:"palette",iconSrc:"palette.svg",label:"",path:""}];var Pb=["componentRef"],Ob=(e,o)=>o.id;function Bb(e,o){if(e&1){let t=ve();C(0,"app-button",3),q("click",function(){let n=le(t).$implicit,i=_();return ce(i.onClick(n.id))}),T()}if(e&2){let t=o.$implicit,r=_();y("link",t)("selected",r.selectedMenu()===t.id)}}var si=class e{settings=p(fe);SettingsLinks=Xp;componentRef=wt("componentRef");selectedMenu=te(()=>{if(!this.settings.selectedEditingLink())return this.settings.selectedMenu()});onClick(o){if(this.settings.selectedEditingLink()){this.settings.selectedMenu.set(o),this.settings.selectedEditingLink.set(void 0);return}if(this.settings.selectedMenu()===o){this.settings.selectedMenu.set(void 0);return}this.settings.selectedMenu.set(o)}onSettingsOpen(){let o=this.settings.open();U(()=>{let t=this.componentRef()?.nativeElement;if(t){if(o){t.style.width=`${this.SettingsLinks.length*38}px`;return}t.style.width="0",this.settings.selectedMenu.set(void 0)}})}constructor(){ae(this.onSettingsOpen.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-settings-panel"]],viewQuery:function(t,r){t&1&&_t(r.componentRef,Pb,5),t&2&&ht()},standalone:!0,features:[R],decls:4,vars:0,consts:[["componentRef",""],[1,"container"],[3,"link","selected"],[3,"click","link","selected"]],template:function(t,r){t&1&&(C(0,"div",1,0),lo(2,Bb,1,2,"app-button",2,Ob),T()),t&2&&(v(2),co(r.SettingsLinks))},dependencies:[Oo],styles:["[_nghost-%COMP%]{position:absolute;left:calc(100% + 8px);z-index:10}.container[_ngcontent-%COMP%]{display:flex;background:var(--p-primary-100);transition:width .2s;border-radius:0 8px 0 0;width:0;overflow:hidden}"]})};var Nb=["componentRef"],ai=class e{settings=p(fe);componentRef=wt("componentRef");hovered=X(!1);selected=X(!1);onMouseEnter(){this.hovered()||this.hovered.set(!0)}onMouseLeave(){this.hovered()&&this.hovered.set(!1)}onClick(){this.selected.update(o=>!o)}onHoveredChanged(){let o=this.hovered();U(()=>{if(this.selected())return;let r=this.componentRef()?.nativeElement;if(r){if(o){r.style.background="var(--p-primary-200)";return}r.style.background="var(--p-primary-100)"}})}onSelectedChanged(){let o=this.selected();U(()=>{let t=this.componentRef()?.nativeElement;t&&(o?(t.style.width="70px",t.style.background="var(--p-primary-500)",this.settings.open.set(!0)):(t.style.width="38px",this.settings.open.set(!1),t.matches(":hover")?t.style.background="var(--p-primary-200)":t.style.background="var(--p-primary-100)"))})}onSettingsOpenChanged(){this.settings.open()||U(()=>this.selected.set(!1))}constructor(){ae(this.onHoveredChanged.bind(this)),ae(this.onSelectedChanged.bind(this)),ae(this.onSettingsOpenChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-settings-button"]],viewQuery:function(t,r){t&1&&_t(r.componentRef,Nb,5),t&2&&ht()},standalone:!0,features:[R],decls:4,vars:2,consts:[["componentRef",""],[1,"container",3,"mouseenter","mouseleave","click"],["src","gear.svg","width","24","height","24"]],template:function(t,r){if(t&1){let n=ve();k(0,"app-settings-panel"),C(1,"div",1,0),q("mouseenter",function(){return le(n),ce(r.onMouseEnter())})("mouseleave",function(){return le(n),ce(r.onMouseLeave())})("click",function(){return le(n),ce(r.onClick())}),k(3,"img",2),T()}t&2&&(v(3),rt("color","var(--p-text-muted-color)"))},dependencies:[si],styles:["[_nghost-%COMP%]{margin-top:auto;position:relative}.container[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background,width .2s;-webkit-user-select:none;user-select:none}"]})};var Lb=(e,o)=>o.id,Fb=e=>({id:e,iconSrc:"/edit.svg",label:"",path:""}),$b=()=>({id:"resizeButton",iconSrc:"reset-size.svg",label:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440",path:""});function Hb(e,o){if(e&1){let t=ve();C(0,"div",2)(1,"app-button",4),q("click",function(){let n=le(t).$implicit,i=_();return ce(i.onClickLink(n))}),T(),Qi(2),C(3,"div",5)(4,"app-button",6),q("click",function(){let n=le(t).$implicit,i=_();return ce(i.onClickEditingLink(n))}),T()()()}if(e&2){let t,r,n=o.$implicit,i=_();v(),y("link",n)("selected",((t=i.selectedLink())==null?null:t.id)===n.id&&!i.selectedEditingLink());let s=Et(4,Fb,n.id);v(3),y("link",s)("selected",((r=i.selectedEditingLink())==null?null:r.id)===n.id)}}function Gb(e,o){if(e&1){let t=ve();Qi(0),C(1,"app-button",7),q("click",function(){le(t);let n=_();return ce(n.onClickResizeButton())}),T()}if(e&2){let t=tn(1,$b);v(),y("link",t)}}var li=class e{settings=p(fe);links=te(()=>this.settings.links());selectedLink=te(()=>this.settings.selectedLink());selectedEditingLink=te(()=>this.settings.selectedEditingLink());isResized=te(()=>this.settings.selectedMenu()?!1:!!this.settings.resize());onClickLink(o){let t=this.settings.selectedLink();if(this.settings.selectedEditingLink()){this.settings.selectedLink.set(o),this.settings.selectedEditingLink.set(void 0),this.settings.open.set(!1);return}if(!t||t.id!==o.id){this.settings.selectedLink.set(o);return}this.settings.selectedLink.set(void 0)}onClickEditingLink(o){if(this.settings.selectedEditingLink()?.id===o.id){this.settings.selectedEditingLink.set(void 0),this.settings.selectedMenu.set(void 0);return}this.settings.selectedEditingLink.set(o),this.settings.selectedMenu.set("edit")}onClickResizeButton(){window.dispatchEvent(new Event("resetsize"))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-navbar"]],standalone:!0,features:[R],decls:6,vars:1,consts:[[1,"container"],[1,"container__content"],[1,"container__content-button"],["size","s",1,"resize-button",3,"link"],[3,"click","link","selected"],[1,"container__content-edit-button"],["size","s",3,"click","link","selected"],["size","s",1,"resize-button",3,"click","link"]],template:function(t,r){t&1&&(C(0,"div",0)(1,"div",1),lo(2,Hb,5,6,"div",2,Lb),T(),K(4,Gb,2,2,"app-button",3),k(5,"app-settings-button"),T()),t&2&&(v(2),co(r.links()),v(2),se(r.isResized()?4:-1))},dependencies:[ai,Oo],styles:["[_nghost-%COMP%]{height:100%;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.container__content[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;gap:8px;overflow:hidden}.container__content-button[_ngcontent-%COMP%]{position:relative}.container__content-edit-button[_ngcontent-%COMP%]{position:absolute;top:7px;left:46px}.resize-button[_ngcontent-%COMP%]{margin:0 auto 8px}"]})};var Ce=[];for(let e=0;e<256;++e)Ce.push((e+256).toString(16).slice(1));function Kp(e,o=0){return(Ce[e[o+0]]+Ce[e[o+1]]+Ce[e[o+2]]+Ce[e[o+3]]+"-"+Ce[e[o+4]]+Ce[e[o+5]]+"-"+Ce[e[o+6]]+Ce[e[o+7]]+"-"+Ce[e[o+8]]+Ce[e[o+9]]+"-"+Ce[e[o+10]]+Ce[e[o+11]]+Ce[e[o+12]]+Ce[e[o+13]]+Ce[e[o+14]]+Ce[e[o+15]]).toLowerCase()}var wa,Vb=new Uint8Array(16);function xa(){if(!wa){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");wa=crypto.getRandomValues.bind(crypto)}return wa(Vb)}var Ub=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_a={randomUUID:Ub};function zb(e,o,t){if(_a.randomUUID&&!o&&!e)return _a.randomUUID();e=e||{};let r=e.random??e.rng?.()??xa();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,o){if(t=t||0,t<0||t+16>o.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);for(let n=0;n<16;++n)o[t+n]=r[n];return o}return Kp(r)}var kr=zb;var Wb=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.color.1")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.1")};
    }
    40% {
        stroke: ${e("progressspinner.color.2")};
    }
    66% {
        stroke: ${e("progressspinner.color.3")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.4")};
    }
}
`,jb={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},qp=(()=>{class e extends re{name="progressspinner";theme=Wb;classes=jb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Yp=(()=>{class e extends de{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=p(qp);static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},standalone:!0,features:[Y([qp]),O,R],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(r,n){r&1&&(C(0,"div",0),no(),C(1,"svg",1),k(2,"circle",2),T()()),r&2&&(y("ngStyle",n.style)("ngClass",n.styleClass),he("aria-label",n.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),v(),rt("animation-duration",n.animationDuration),he("data-pc-section","root"),v(),he("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[De,fo,cn,ze],encapsulation:2,changeDetection:0})}return e})();var No={UKNOWN:"Unknown"},Ra={CHROME:"Chrome",FIREFOX:"Firefox",SAFARI:"Safari",OPERA:"Opera",IE:"IE",MS_EDGE:"MS-Edge",MS_EDGE_CHROMIUM:"MS-Edge-Chromium",FB_MESSANGER:"FB-Messanger",SAMSUNG:"Samsung",UCBROWSER:"UC-Browser",UNKNOWN:No.UKNOWN},ci={HTC:/HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\bEVO\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel/,NEXUS_PHONE:/Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6/,DELL:/Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b/,MOTOROLA:new RegExp(`Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|
      A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|
      MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|
      ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|
      WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|
      XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|
      XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052`),SAMSUNG:new RegExp(`\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|
      GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|
      GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|
      GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|
      GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|
      GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|
      GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|
      GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|
      GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|
      GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|
      GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|
      GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|
      GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|
      GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|
      GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|
      GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|
      GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|
      GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|
      SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|
      SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|
      SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|
      SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|
      SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|
      SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|
      SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|
      SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|
      SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|
      SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|
      SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|
      SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|
      SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|
      SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|
      SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|
      SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|
      SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|
      SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|
      SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|
      SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|
      SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|
      SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|
      SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|
      SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|
      SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|
      SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|
      SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|
      SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|
      SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|
      SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|
      SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|
      GT-N7105|SCH-I535|SM-N900A|SM-N900T|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|
      GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|
      GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|
      SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|
      SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|
      SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F`),LG:new RegExp(`\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|
      LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|
      C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|
      LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|
      VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|
      MS323|M257)`),SONY:/SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533/,ASUS:/Asus.*Galaxy|PadFone.*Mobile/,NOKIA_LUMIA:/Lumia [0-9]{3,4}/,MICROMAX:/Micromax.*\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\b/,PALM:/PalmSource|Palm/,VERTU:/Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature/,PANTECH:new RegExp(`PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|
        IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|
        IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|
        CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|
        P2000|P7040|P7000|C790`),FLY:/IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250/,WIKO:new RegExp(`KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|
        SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|
        CINK KING|CINK PEAX|CINK SLIM|SUBLIM`),I_MOBILE:/i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)/,SIMVALLEY:/\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\b/,WOLFGANG:/AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q/,ALCATEL:/Alcatel|Mobile; rv:49.0|Mobile; ALCATEL 4052R; rv:48.0/,NINTENDO:/Nintendo (3DS|Switch)/,AMOI:/Amoi/,INQ:/INQ/,VITA:/\bVita\b/,BLACKBERRY:/\bBlackBerry\b|\bBB10\b|rim[0-9]+/,FIREFOX_OS:/\bFirefox-OS\b/,IPHONE:/\biPhone\b/,iPod:/\biPod\b/,ANDROID:/\bAndroid\b/,WINDOWS_PHONE:/\bWindows-Phone\b/,GENERIC_PHONE:new RegExp(`Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|
        up.link|vodafone|\\bwap\\b|nokia|Nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser`)},Bo={iPad:/iPad|iPad.*Mobile/,NexusTablet:/Android.*Nexus[\s]+(7|9|10)/,GoogleTablet:/Android.*Pixel C/,SamsungTablet:new RegExp(`SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|
        GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|
        SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|
        GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|
        SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|
        GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|
        SHV-E230S|SHW-M180K|SHW-M180L|SM-T865|SM-T290|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|
        SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|
        GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T385M|SM-P585M|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|
        SM-P601|SM-P605|SM-P615|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|
        GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|
        SM-T510|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|
        SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T500|SM-T330|
        SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|
        SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|
        SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|
        SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|
        SM-T719|SM-T725|SM-T813|SM-T819|SM-T580|SM-T590|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|
        SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-P585Y|SM-X200|SM-T970`),Kindle:new RegExp(`Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|
        KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome        /[0-9.]+ (?!Mobile)`),SurfaceTablet:/Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)/,HPTablet:/HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10/,AsusTablet:new RegExp(`^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|
        TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|
        Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|
        ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|
        ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b`),BlackBerryTablet:/PlayBook|RIM Tablet/,HTCtablet:/HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410/,MotorolaTablet:/xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617/,NookTablet:/Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2/,AcerTablet:new RegExp(`Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|
        W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|
        \\bA3-A20\\b|\\bA3-A30`),ToshibaTablet:/Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO/,LGTablet:/\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\b/,FujitsuTablet:/Android.*\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\b/,PrestigioTablet:new RegExp(`PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|
        PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|
        PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|
        PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|
        PMT5887|PMT5001|PMT5002`),LenovoTablet:new RegExp(`Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|
        YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|
        B8000|B8080)(-|)(FL|F|HV|H|)|TB-X606F|TB-X103F|TB-X304F|TB-X304L|TB-X704F|TB-8703F|Tab2A7-10F|TB2-X30L|TB-8504F`),DellTablet:/Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7/,YarvikTablet:new RegExp(`Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|
        TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|
        TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|
        TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|
        TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b`),MedionTablet:/Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB/,ArnovaTablet:/97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2/,IntensoTablet:/INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004/,IRUTablet:/M702pro/,MegafonTablet:/MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b/,EbodaTablet:/E-Boda (Supreme|Impresspeed|Izzycomm|Essential)/,AllViewTablet:/Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)/,ArchosTablet:new RegExp(`\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10|
         Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b`),AinolTablet:/NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark/,NokiaLumiaTablet:/Lumia 2520/,SonyTablet:new RegExp(`Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|
        SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|
        EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|
        SGP612|SGP712`),PhilipsTablet:/\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\b/,CubeTablet:/Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT/,CobyTablet:new RegExp(`MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|
        MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010`),MIDTablet:new RegExp(`M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|
        MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|
        MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10`),MSITablet:new RegExp(`MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|
        Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b`),SMiTTablet:/Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)/,RockChipTablet:/Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A/,FlyTablet:/IQ310|Fly Vision/,bqTablet:new RegExp(`Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|
        Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus`),HuaweiTablet:new RegExp(`MediaPad|MediaPad 7 Youth|MediaPad T3 10|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|
        S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-W09|AGS-L09`),NecTablet:/\bN-06D|\bN-08D/,PantechTablet:/Pantech.*P4100/,BronchoTablet:/Broncho.*(N701|N708|N802|a710)/,VersusTablet:/TOUCHPAD.*[78910]|\bTOUCHTAB\b/,ZyncTablet:/z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900/,PositivoTablet:/TB07STA|TB10STA|TB07FTA|TB10FTA/,NabiTablet:/Android.*\bNabi/,KoboTablet:/Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build/,DanewTablet:/DSlide.*\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\b/,TexetTablet:new RegExp(`NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|
        TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|
        TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|
        TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|
        TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|
        TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|
        TB-436|TB-416|TB-146SE|TB-126SE`),PlaystationTablet:/Playstation.*(Portable|Vita)/,TrekstorTablet:/ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab/,PyleAudioTablet:/\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\b/,AdvanTablet:new RegExp(`Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|
        T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b`),DanyTechTablet:`Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|
        Genius TAB GII|Genius TAB GIII|Genius Tab S1`,GalapadTablet:/Android.*\bG1\b(?!\))/,MicromaxTablet:/Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b/,KarbonnTablet:/Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b/,AllFineTablet:/Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide/,PROSCANTablet:new RegExp(`\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|
        PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|
        PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|
        PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b`),YONESTablet:/BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026/,ChangJiaTablet:new RegExp(`TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|
        TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|
        TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|
        TPC10111|TPC10203|TPC10205|TPC10503`),GUTablet:/TX-A1301|TX-M9002|Q702|kf026/,PointOfViewTablet:new RegExp(`TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|
        TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|
        TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|
        TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10`),OvermaxTablet:new RegExp(`OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|
        MagicTab|Stream|TB-08|TB-09)|Qualcore 1027`),HCLTablet:/HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync/,DPSTablet:/DPS Dream 9|DPS Dual 7/,VistureTablet:/V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10/,CrestaTablet:/CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989/,MediatekTablet:/\bMT8125|MT8389|MT8135|MT8377\b/,ConcordeTablet:/Concorde([ ]+)?Tab|ConCorde ReadMan/,GoCleverTablet:new RegExp(`GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|
        TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|
        GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|
        TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|
        TAB R104|TAB R83.3|TAB A1042`),ModecomTablet:new RegExp(`FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|
        FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|
        FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003`),VoninoTablet:new RegExp(`\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|
        Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|
        Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b`),ECSTablet:/V07OT2|TM105A|S10OT1|TR10CS1/,StorexTablet:/eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab/,VodafoneTablet:/SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497/,EssentielBTablet:/Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2/,RossMoorTablet:/RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711/,iMobileTablet:/i-mobile i-note/,TolinoTablet:/tolino tab [0-9.]+|tolino shine/,AudioSonicTablet:/\bC-22Q|T7-QC|T-17B|T-17P\b/,AMPETablet:/Android.* A78 /,SkkTablet:/Android.* (SKYPAD|PHOENIX|CYCLOPS)/,TecnoTablet:/TECNO P9|TECNO DP8D/,JXDTablet:new RegExp(`Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|
        S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|
        P1000|P300|S18|S6600|S9100)\\b`),iJoyTablet:new RegExp(`Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|
        Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|
        Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|
        Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|
        Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)`),FX2Tablet:/FX2 PAD7|FX2 PAD10/,XoroTablet:new RegExp(`KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|
        PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|
        PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|
        TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151`),ViewsonicTablet:/ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a/,VerizonTablet:/QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1/,OdysTablet:/LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\bXELIO\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10/,CaptivaTablet:/CAPTIVA PAD/,IconbitTablet:new RegExp(`NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|
        NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S`),TeclastTablet:new RegExp(`T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|
        \\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|
        \\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|
        \\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|
        \\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|
        \\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|
        \\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|
        \\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|
        \\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi`),OndaTablet:new RegExp(`\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|
        V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|
        V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|
        Vi40)\\b[s]+|V10 \\b4G\\b`),JaytechTablet:/TPC-PA762/,BlaupunktTablet:/Endeavour 800NG|Endeavour 1010/,DigmaTablet:/\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\b/,EvolioTablet:/ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\bEvotab\b|\bNeura\b/,LavaTablet:/QPAD E704|\bIvoryS\b|E-TAB IVORY|\bE-TAB\b/,AocTablet:/MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712/,MpmanTablet:new RegExp(`MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|
        \\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|
        MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010`),CelkonTablet:/CT695|CT888|CT[\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\bCT-1\b/,WolderTablet:new RegExp(`miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|
        POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|
        FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b`),MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",MiTablet:/\bMI PAD\b|\bHM NOTE 1W\b/,NibiruTablet:/Nibiru M1|Nibiru Jupiter One/,NexoTablet:/NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI/,LeaderTablet:new RegExp(`TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|
        TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100`),UbislateTablet:/UbiSlate[\s]?7C/,PocketBookTablet:/Pocketbook/,KocasoTablet:/\b(TB-1207)\b/,HisenseTablet:/\b(F5281|E2371)\b/,Hudl:/Hudl HT7S3|Hudl 2/,TelstraTablet:/T-Hub2/,Honeywell:/RT10A/,GenericTablet:new RegExp(`Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|
        A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|
        Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107`)},Bt={BLACKBERRY:"Blackberry",FIREFOX_OS:"Firefox-OS",CHROME_BOOK:"Chrome-Book",WINDOWS_PHONE:"Windows-Phone",VITA:"Vita",PS4:"PS4",MAC:"Macintosh",CHROMECAST:"Chromecast",APPLE_TV:"Apple-TV",GOOGLE_TV:"Google-TV",ANDROID:"Android",Tesla:"Tesla",iPad:"iPad",IPHONE:"iPhone",iPod:"iPod",UNKNOWN:No.UKNOWN,HTC:"HTC",NEXUS_PHONE:"Nexus Phone",NexusTablet:"Nexus Tablet",DELL:"Dell",MOTOROLA:"Motorola",SAMSUNG:"Samsung",LG:"LG",SONY:"Sony",ASUS:"Asus",NOKIA_LUMIA:"Nokia Lumia",MICROMAX:"Micromax",PALM:"Palm",VERTU:"Vertu",PANTECH:"PANTECH",FLY:"Fly",WIKO:"WIKO",I_MOBILE:"i-mobile",SIMVALLEY:"Simvalley",WOLFGANG:"Wolfgang",ALCATEL:"Alcatel",HONEYWELL:"Honeywell",NINTENDO:"Nintendo",AMOI:"Amoi",INQ:"INQ",GENERIC_PHONE:"Generic Phone",MI_SE_9:"Mi SE 9"},Qp=[Bt.PS4,Bt.CHROME_BOOK,Bt.MAC,Bt.DELL,Bt.ASUS,Bt.UNKNOWN],Xb={WINDOWS:"Windows",MAC:"Mac",IOS:"iOS",ANDROID:"Android",LINUX:"Linux",UNIX:"Unix",FIREFOX_OS:"Firefox-OS",CHROME_OS:"Chrome-OS",WINDOWS_PHONE:"Windows-Phone",UNKNOWN:No.UKNOWN},Kb={WINDOWS_3_11:"windows-3-11",WINDOWS_95:"windows-95",WINDOWS_ME:"windows-me",WINDOWS_98:"windows-98",WINDOWS_CE:"windows-ce",WINDOWS_2000:"windows-2000",WINDOWS_XP:"windows-xp",WINDOWS_SERVER_2003:"windows-server-2003",WINDOWS_VISTA:"windows-vista",WINDOWS_7:"windows-7",WINDOWS_8_1:"windows-8-1",WINDOWS_8:"windows-8",WINDOWS_10:"windows-10",WINDOWS_PHONE_7_5:"windows-phone-7-5",WINDOWS_PHONE_8_1:"windows-phone-8-1",WINDOWS_PHONE_10:"windows-phone-10",WINDOWS_NT_4_0:"windows-nt-4-0",MACOSX_11_0:"mac-os-x-11-0",MACOSX_16:"mac-os-x-16",MACOSX_15:"mac-os-x-15",MACOSX_14:"mac-os-x-14",MACOSX_13:"mac-os-x-13",MACOSX_12:"mac-os-x-12",MACOSX_11:"mac-os-x-11",MACOSX_10:"mac-os-x-10",MACOSX_9:"mac-os-x-9",MACOSX_8:"mac-os-x-8",MACOSX_7:"mac-os-x-7",MACOSX_6:"mac-os-x-6",MACOSX_5:"mac-os-x-5",MACOSX_4:"mac-os-x-4",MACOSX_3:"mac-os-x-3",MACOSX_2:"mac-os-x-2",MACOSX:"mac-os-x",iOS:"iOS",ANDROID_9:"android-9",UNKNOWN:No.UKNOWN.toLowerCase()},Zp={WINDOWS:{and:[{or:[/\bWindows|(Win\d\d)\b/,/\bWin 9x\b/]},{not:/\bWindows Phone\b/}]},MAC:{and:[/\bMac OS\b/,{not:{or:[/\biPhone\b/,/\biPad\b/,/\biPod\b/,/\bWindows Phone\b/]}}]},IOS:{and:[{or:[/\biPad\b/,/\biPhone\b/,/\biPod\b/]},{not:/\bWindows Phone\b/}]},ANDROID:{and:[/\bAndroid\b/,{not:/\bWindows Phone\b/}]},LINUX:/\bLinux\b/,UNIX:/\bUNIX\b/,FIREFOX_OS:{and:[/\bFirefox\b/,/Mobile\b/]},CHROME_OS:/\bCrOS\b/,WINDOWS_PHONE:{or:[/\bIEMobile\b/,/\bWindows Phone\b/]},PS4:/\bMozilla\/5.0 \(PlayStation 4\b/,VITA:/\bMozilla\/5.0 \(Play(S|s)tation Vita\b/},qb={CHROME:{and:[{or:[/\bChrome\b/,/\bCriOS\b/,/\bHeadlessChrome\b/]},{not:{or:[/\bOPR\b/,/\bEdg(e|A|iOS)\b/,/\bEdg\/\b/,/\bSamsungBrowser\b/,/\bUCBrowser\b/]}}]},FIREFOX:{or:[/\bFirefox\b/,/\bFxiOS\b/]},SAFARI:{and:[/^((?!CriOS).)*\Safari\b.*$/,{not:{or:[/\bOPR\b/,/\bEdg(e|A|iOS)\b/,/\bEdg\/\b/,/\bWindows Phone\b/,/\bSamsungBrowser\b/,/\bUCBrowser\b/]}}]},OPERA:{or:[/Opera\b/,/\bOPR\b/]},IE:{or:[/\bMSIE\b/,/\bTrident\b/,/^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/]},MS_EDGE:{or:[/\bEdg(e|A|iOS)\b/]},MS_EDGE_CHROMIUM:/\bEdg\/\b/,PS4:/\bMozilla\/5.0 \(PlayStation 4\b/,VITA:/\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,FB_MESSANGER:/\bFBAN\/MessengerForiOS\b/,SAMSUNG:/\bSamsungBrowser\b/,UCBROWSER:/\bUCBrowser\b/},Yb=W(f(f(f({},ci),Bo),Zp),{FIREFOX_OS:{and:[/\bFirefox\b/,/\bMobile\b/]},CHROME_BOOK:/\bCrOS\b/,PS4:/\bMozilla\/5.0 \(PlayStation 4\b/,CHROMECAST:/\bCrKey\b/,APPLE_TV:/^iTunes-AppleTV\/4.1$/,GOOGLE_TV:/\bGoogleTV\b/,Tesla:/Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.{7})/,MI_SE_9:/\bXiaomi\b/,MAC:{and:[/\bMac OS\b/,{not:{or:[/\biPhone\b/,/\biPad\b/,/\biPod\b/,/\bWindows Phone\b/]}}]}}),ka={WINDOWS_3_11:/Win16/,WINDOWS_95:/(Windows 95|Win95|Windows_95)/,WINDOWS_ME:/(Win 9x 4.90|Windows ME)/,WINDOWS_98:/(Windows 98|Win98)/,WINDOWS_CE:/Windows CE/,WINDOWS_2000:/(Windows NT 5.0|Windows 2000)/,WINDOWS_XP:/(Windows NT 5.1|Windows XP)/,WINDOWS_SERVER_2003:/Windows NT 5.2/,WINDOWS_VISTA:/Windows NT 6.0/,WINDOWS_7:/(Windows 7|Windows NT 6.1)/,WINDOWS_8_1:/(Windows 8.1|Windows NT 6.3)/,WINDOWS_8:/(Windows 8|Windows NT 6.2)/,WINDOWS_10:/(Windows NT 10.0)/,WINDOWS_PHONE_7_5:/(Windows Phone OS 7.5)/,WINDOWS_PHONE_8_1:/(Windows Phone 8.1)/,WINDOWS_PHONE_10:/(Windows Phone 10)/,WINDOWS_NT_4_0:{and:[/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,{not:/Windows NT 10.0/}]},MACOSX:/(MAC OS X\s*[^ 0-9])/,MACOSX_3:/(Darwin 10.3|Mac OS X 10.3)/,MACOSX_4:/(Darwin 10.4|Mac OS X 10.4)/,MACOSX_5:/(Mac OS X 10.5)/,MACOSX_6:/(Mac OS X 10.6)/,MACOSX_7:/(Mac OS X 10.7)/,MACOSX_8:/(Mac OS X 10.8)/,MACOSX_9:/(Mac OS X 10.9)/,MACOSX_10:/(Mac OS X 10.10)/,MACOSX_11:/(Mac OS X 10.11)/,MACOSX_12:/(Mac OS X 10.12)/,MACOSX_13:/(Mac OS X 10.13)/,MACOSX_14:/(Mac OS X 10.14)/,MACOSX_15:/(Mac OS X 10.15)/,MACOSX_16:/(Mac OS X 10.16)/,MACOSX_11_0:{or:[/11_0 like Mac OS X/,/Mac OS X 11/]},iOS:/(iPhone OS\s*[0-9_]+)/,ANDROID_9:/(Android 9)/},Ma={CHROME:[/\bChrome\/([\d\.]+)\b/,/\bCriOS\/([\d\.]+)\b/,/\bHeadlessChrome\/([\d\.]+)\b/],FIREFOX:[/\bFirefox\/([\d\.]+)\b/,/\bFxiOS\/([\d\.]+)\b/],SAFARI:[/\bVersion\/([\d\.]+)\b/,/\bSafari\/([\d\.]+)\b/],OPERA:[/\bVersion\/([\d\.]+)\b/,/\bOPR\/([\d\.]+)\b/],IE:[/\bMSIE ([\d\.]+\w?)\b/,/\brv:([\d\.]+\w?)\b/],MS_EDGE:/\bEdg(?:e|A|iOS)\/([\d\.]+)\b/,MS_EDGE_CHROMIUM:/\bEdg\/([\d\.]+)\b/,SAMSUNG:/\bSamsungBrowser\/([\d\.]+)\b/,UCBROWSER:/\bUCBrowser\/([\d\.]+)\b/},Qb=Object.keys(ka).reduce((e,o)=>(e[o]=ka[o],e),{}),Jp=Object.keys(Ma).reduce((e,o)=>(e[Ra[o]]=Ma[o],e),{}),lt=Object.freeze({__proto__:null,BROWSERS:Ra,BROWSERS_RE:qb,BROWSER_VERSIONS_RE:Jp,BROWSER_VERSIONS_RE_MAP:Ma,DESKTOP_DEVICES:Qp,DEVICES:Bt,DEVICES_RE:Yb,GENERAL:No,MOBILES_RE:ci,OS:Xb,OS_RE:Zp,OS_VERSIONS:Kb,OS_VERSIONS_RE:Qb,OS_VERSIONS_RE_MAP:ka,TABLETS_RE:Bo}),Aa=class{constructor(){}test(o,t){return typeof t=="string"&&(t=new RegExp(t)),t instanceof RegExp?t.test(o):t&&Array.isArray(t.and)?t.and.every(r=>this.test(o,r)):t&&Array.isArray(t.or)?t.or.some(r=>this.test(o,r)):t&&t.not?!this.test(o,t.not):!1}exec(o,t){return typeof t=="string"&&(t=new RegExp(t)),t instanceof RegExp?t.exec(o):t&&Array.isArray(t)?t.reduce((r,n)=>r||this.exec(o,n),null):null}},Mr=function(e){return e.Mobile="mobile",e.Tablet="tablet",e.Desktop="desktop",e.Unknown="unknown",e}(Mr||{}),Ia=function(e){return e.Portrait="portrait",e.Landscape="landscape",e}(Ia||{}),Ea="iPad",di=(()=>{class e{constructor(t){this.platformId=t,this.ua="",this.userAgent="",this.os="",this.browser="",this.device="",this.os_version="",this.browser_version="",this.reTree=new Aa,this.deviceType="",this.orientation="",nt(this.platformId)&&typeof window<"u"&&(this.userAgent=window.navigator.userAgent),this.setDeviceInfo(this.userAgent)}setDeviceInfo(t=this.userAgent){t!==this.userAgent&&(this.userAgent=t);let r=[{const:"OS",prop:"os"},{const:"BROWSERS",prop:"browser"},{const:"DEVICES",prop:"device"},{const:"OS_VERSIONS",prop:"os_version"}];if(r.forEach(n=>{this[n.prop]=Object.keys(lt[n.const]).reduce((i,s)=>lt[n.const][s]==="device"&&nt(this.platformId)&&(this.reTree.test(this.userAgent,Bo[Ea])||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)?(i[lt[n.const][s]]=Ea,Object):(i[lt[n.const][s]]=this.reTree.test(t,lt[`${n.const}_RE`][s]),i),{})}),r.forEach(n=>{this[n.prop]=Object.keys(lt[n.const]).map(i=>lt[n.const][i]).reduce((i,s)=>n.prop==="device"&&i===lt[n.const].ANDROID?this[n.prop][s]?s:i:i===lt[n.const].UNKNOWN&&this[n.prop][s]?s:i,lt[n.const].UNKNOWN)}),this.browser_version="0",this.browser!==Ra.UNKNOWN){let n=Jp[this.browser],i=this.reTree.exec(t,n);i&&(this.browser_version=i[1])}typeof window<"u"&&window.matchMedia?this.orientation=window.matchMedia("(orientation: landscape)").matches?Ia.Landscape:Ia.Portrait:this.orientation=No.UKNOWN,this.deviceType=this.isTablet()?Mr.Tablet:this.isMobile(this.userAgent)?Mr.Mobile:this.isDesktop(this.userAgent)?Mr.Desktop:Mr.Unknown}getDeviceInfo(){return{userAgent:this.userAgent,os:this.os,browser:this.browser,device:this.device,os_version:this.os_version,browser_version:this.browser_version,deviceType:this.deviceType,orientation:this.orientation}}isMobile(t=this.userAgent){return this.isTablet(t)?!1:!!Object.keys(ci).find(n=>this.reTree.test(t,ci[n]))}isTablet(t=this.userAgent){return nt(this.platformId)&&(this.reTree.test(this.userAgent,Bo[Ea])||typeof navigator<"u"&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)?!0:!!Object.keys(Bo).find(n=>!!this.reTree.test(t,Bo[n]))}isDesktop(t=this.userAgent){return this.device===Bt.UNKNOWN&&(this.isMobile(t)||this.isTablet(t))?!1:Qp.indexOf(this.device)>-1}static{this.\u0275fac=function(r){return new(r||e)(P(xe))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Zb=()=>({width:"36px",height:"36px"});function Jb(e,o){if(e&1){let t=ve();C(0,"iframe",4),q("load",function(n){le(t);let i=_();return ce(i.onLoaded(n))}),T()}if(e&2){let t=_();y("src",t.src(),El)}}function ev(e,o){e&1&&k(0,"img",2)}function tv(e,o){e&1&&k(0,"p-progress-spinner",5),e&2&&Zr(tn(2,Zb))}var ui=class e{settings=p(fe);device=p(di);sanitizer=p(bs);loading=X(!1);isMobile=te(()=>this.device.isMobile());src=te(()=>{let o=this.settings.selectedLink()?.path;if(!o){U(()=>this.loading.set(!1));return}return o.indexOf("localhost")!==-1&&(o.at(-1)!=="/"&&(o=`${o}/`),o=`${o}?level=${kr()}`),U(()=>this.loading.set(!0)),this.sanitizer.bypassSecurityTrustResourceUrl(o)});onLoaded(o){!!o.target.src&&this.loading.set(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-iframe"]],standalone:!0,features:[R],decls:5,vars:4,consts:[[1,"container"],["width","100%","height","100%",1,"container__iframe",3,"src"],["src","resize.svg","width","16","height","16",1,"container__resize-icon"],["strokeWidth","5","fill","transparent","animationDuration",".5s",1,"container__loader",3,"style"],["width","100%","height","100%",1,"container__iframe",3,"load","src"],["strokeWidth","5","fill","transparent","animationDuration",".5s",1,"container__loader"]],template:function(t,r){t&1&&(C(0,"div",0),K(1,Jb,1,1,"iframe",1)(2,ev,1,0,"img",2)(3,tv,1,3,"p-progress-spinner",3),k(4,"div"),T()),t&2&&(v(),se(r.src()?1:r.isMobile()?-1:2),v(2),se(r.loading()?3:-1),v(),_e("container__loader-opacity "+r.loading()))},dependencies:[Yp],styles:["[_nghost-%COMP%]{flex:1;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;position:relative}.container__iframe[_ngcontent-%COMP%]{flex:1;background:#fff;border-radius:8px;border-width:0}.container__resize-icon[_ngcontent-%COMP%]{position:absolute;right:8px;bottom:8px}.container__loader[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 18px);top:calc(50% - 18px);z-index:2}.container__loader-opacity[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;background:var(--p-gray-400);border-radius:8px;opacity:0;z-index:-1;transition:opacity .3s}.container__loader-opacity.true[_ngcontent-%COMP%]{opacity:.5;z-index:1}"]})};var eh=(()=>{class e extends de{autofocus=!1;_autofocus=!1;focused=!1;platformId=p(xe);document=p(ne);host=p(Tt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){nt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=Ta.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275dir=ee({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",V],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[Re,O]})}return e})();var ov=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,rv={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":oe(e.value)&&String(e.value).length===1,"p-badge-dot":Me(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},th=(()=>{class e extends re{name="badge";theme=ov;classes=rv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Da=(()=>{class e extends de{styleClass=Ge();style=Ge();badgeSize=Ge();size=Ge();severity=Ge();value=Ge();badgeDisabled=Ge(!1,{transform:V});_componentStyle=p(th);containerClass=te(()=>{let t="p-badge p-component";return oe(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Me(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(r,n){r&2&&(Zr(n.style()),_e(n.containerClass()),rt("display",n.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[Y([th]),O,R],decls:1,vars:1,template:function(r,n){r&1&&ke(0),r&2&&po(n.value())},dependencies:[De,ze],encapsulation:2,changeDetection:0})}return e})(),oh=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=pe({type:e});static \u0275inj=ue({imports:[Da,ze,ze]})}return e})();var iv=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,sv=(()=>{class e extends re{name="baseicon";inlineStyles=iv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var av=["*"],pi=(()=>{class e extends de{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=Me(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",V],styleClass:"styleClass"},standalone:!0,features:[Y([sv]),Re,O,R],ngContentSelectors:av,decls:1,vars:0,template:function(r,n){r&1&&(ut(),pt(0))},encapsulation:2,changeDetection:0})}return e})();var rh=(()=>{class e extends pi{pathId;ngOnInit(){this.pathId="url(#"+Yt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["SpinnerIcon"]],standalone:!0,features:[O,R],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(r,n){r&1&&(no(),C(0,"svg",0)(1,"g"),k(2,"path",1),T(),C(3,"defs")(4,"clipPath",2),k(5,"rect",3),T()()()),r&2&&(_e(n.getClassNames()),he("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),v(),he("clip-path",n.pathId),v(3),y("id",n.pathId))},encapsulation:2})}return e})();var nh=(()=>{class e extends pi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["TimesIcon"]],standalone:!0,features:[O,R],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(r,n){r&1&&(no(),C(0,"svg",0),k(1,"path",1),T()),r&2&&(_e(n.getClassNames()),he("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var lv=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,cv={root:"p-ink"},ih=(()=>{class e extends re{name="ripple";theme=lv;classes=cv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var hi=(()=>{class e extends de{zone=p(Ee);_componentStyle=p(ih);animationListener;mouseDownListener;timeout;constructor(){super(),ae(()=>{nt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let r=this.getInk();if(!r||this.document.defaultView?.getComputedStyle(r,null).display==="none")return;if(Ao(r,"p-ink-active"),!ba(r)&&!va(r)){let a=Math.max(st(this.el.nativeElement),at(this.el.nativeElement));r.style.height=a+"px",r.style.width=a+"px"}let n=Ed(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-va(r)/2,s=t.pageY-n.top+this.document.body.scrollLeft-ba(r)/2;this.renderer.setStyle(r,"top",s+"px"),this.renderer.setStyle(r,"left",i+"px"),Kn(r,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Ao(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let r=0;r<t.length;r++)if(typeof t[r].className=="string"&&t[r].className.indexOf("p-ink")!==-1)return t[r];return null}resetInk(){let t=this.getInk();t&&Ao(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ao(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,kd(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=ee({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[Y([ih]),O]})}return e})();var dv=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,uv={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},sh=(()=>{class e extends re{name="button";theme=dv;classes=uv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var pv=["content"],hv=["loading"],fv=["icon"],gv=["*"],ah=e=>({class:e});function mv(e,o){e&1&&uo(0)}function bv(e,o){if(e&1&&k(0,"span",8),e&2){let t=_(3);y("ngClass",t.iconClass()),he("aria-hidden",!0)("data-pc-section","loadingicon")}}function vv(e,o){if(e&1&&k(0,"SpinnerIcon",9),e&2){let t=_(3);y("styleClass",t.spinnerIconClass())("spin",!0),he("aria-hidden",!0)("data-pc-section","loadingicon")}}function yv(e,o){if(e&1&&(Jr(0),K(1,bv,1,3,"span",6)(2,vv,1,4,"SpinnerIcon",7),en()),e&2){let t=_(2);v(),y("ngIf",t.loadingIcon),v(),y("ngIf",!t.loadingIcon)}}function Sv(e,o){}function Cv(e,o){if(e&1&&K(0,Sv,0,0,"ng-template",10),e&2){let t=_(2);y("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Tv(e,o){if(e&1&&(Jr(0),K(1,yv,3,2,"ng-container",2)(2,Cv,1,1,null,5),en()),e&2){let t=_();v(),y("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),v(),y("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Et(3,ah,t.iconClass()))}}function wv(e,o){if(e&1&&k(0,"span",8),e&2){let t=_(2);_e(t.icon),y("ngClass",t.iconClass()),he("data-pc-section","icon")}}function xv(e,o){}function _v(e,o){if(e&1&&K(0,xv,0,0,"ng-template",10),e&2){let t=_(2);y("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Ev(e,o){if(e&1&&(Jr(0),K(1,wv,1,4,"span",11)(2,_v,1,1,null,5),en()),e&2){let t=_();v(),y("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),v(),y("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Et(3,ah,t.iconClass()))}}function kv(e,o){if(e&1&&(C(0,"span",12),ke(1),T()),e&2){let t=_();he("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),v(),po(t.label)}}function Mv(e,o){if(e&1&&k(0,"p-badge",13),e&2){let t=_();y("value",t.badge)("severity",t.badgeSeverity)}}var lh=(()=>{class e extends de{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new be;onFocus=new be;onBlur=new be;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([r,n])=>this[`_${r}`]!==n&&(this[`_${r}`]=n))}get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return Me(this.fluid)?!!r:this.fluid}_componentStyle=p(sh);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:r}=t;if(r){let n=r.currentValue;for(let i in n)this[i]=n[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[r])=>t+` ${r}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-button"]],contentQueries:function(r,n,i){if(r&1&&(qe(i,pv,5),qe(i,hv,5),qe(i,fv,5),qe(i,ti,4)),r&2){let s;Ye(s=Qe())&&(n.contentTemplate=s.first),Ye(s=Qe())&&(n.loadingIconTemplate=s.first),Ye(s=Qe())&&(n.iconTemplate=s.first),Ye(s=Qe())&&(n.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",V],loading:[2,"loading","loading",V],loadingIcon:"loadingIcon",raised:[2,"raised","raised",V],rounded:[2,"rounded","rounded",V],text:[2,"text","text",V],plain:[2,"plain","plain",V],severity:"severity",outlined:[2,"outlined","outlined",V],link:[2,"link","link",V],tabindex:[2,"tabindex","tabindex",kt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",V],fluid:[2,"fluid","fluid",V],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[Y([sh]),Re,O,Ie,R],ngContentSelectors:gv,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(r,n){r&1&&(ut(),C(0,"button",0),q("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),pt(1),K(2,mv,1,0,"ng-container",1)(3,Tv,3,5,"ng-container",2)(4,Ev,3,5,"ng-container",2)(5,kv,2,3,"span",3)(6,Mv,1,2,"p-badge",4),T()),r&2&&(y("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),he("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),v(2),y("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),v(),y("ngIf",n.loading),v(),y("ngIf",!n.loading),v(),y("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),v(),y("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[De,fo,ln,dn,cn,hi,eh,rh,oh,Da,ze],encapsulation:2,changeDetection:0})}return e})();var Av=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,Iv={root:({instance:e,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},ch=(()=>{class e extends re{name="floatlabel";theme=Av;classes=Iv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Rv=["*"],dh=(()=>{class e extends de{_componentStyle=p(ch);variant="over";static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(r,n){r&2&&xt("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},standalone:!0,features:[Y([ch]),O,R],ngContentSelectors:Rv,decls:1,vars:0,template:function(r,n){r&1&&(ut(),pt(0))},dependencies:[De,ze],encapsulation:2,changeDetection:0})}return e})();var Dv=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Pv={root:({instance:e,props:o})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},uh=(()=>{class e extends re{name="inputtext";theme=Dv;classes=Pv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var ph=(()=>{class e extends de{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=p(uh);get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return Me(this.fluid)?!!r:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(r){return new(r||e)(G(pa,8))};static \u0275dir=ee({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(r,n){r&1&&q("input",function(s){return n.onInput(s)}),r&2&&xt("p-filled",n.filled)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",V],pSize:"pSize"},standalone:!0,features:[Y([uh]),Re,O]})}return e})();var Ov=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Bv={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},hh=(()=>{class e extends re{name="message";theme=Ov;classes=Bv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Nv=["container"],Lv=["icon"],Fv=["closeicon"],$v=["*"],Hv=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),Gv=e=>({value:"visible()",params:e}),Vv=e=>({closeCallback:e});function Uv(e,o){e&1&&uo(0)}function zv(e,o){if(e&1&&K(0,Uv,1,0,"ng-container",7),e&2){let t=_(2);y("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function Wv(e,o){if(e&1&&k(0,"i",3),e&2){let t=_(2);y("ngClass",t.icon)}}function jv(e,o){if(e&1&&k(0,"span",9),e&2){let t=_(3);y("ngClass",t.cx("text"))("innerHTML",t.text,xl)}}function Xv(e,o){if(e&1&&(C(0,"div"),K(1,jv,1,2,"span",8),T()),e&2){let t=_(2);v(),y("ngIf",!t.escape)}}function Kv(e,o){if(e&1&&(C(0,"span",5),ke(1),T()),e&2){let t=_(3);y("ngClass",t.cx("text")),v(),po(t.text)}}function qv(e,o){if(e&1&&K(0,Kv,2,2,"span",10),e&2){let t=_(2);y("ngIf",t.escape&&t.text)}}function Yv(e,o){e&1&&uo(0)}function Qv(e,o){if(e&1&&K(0,Yv,1,0,"ng-container",11),e&2){let t=_(2);y("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",Et(2,Vv,t.close.bind(t)))}}function Zv(e,o){if(e&1&&(C(0,"span",5),pt(1),T()),e&2){let t=_(2);y("ngClass",t.cx("text"))}}function Jv(e,o){if(e&1&&k(0,"i",13),e&2){let t=_(3);y("ngClass",t.closeIcon)}}function ey(e,o){e&1&&uo(0)}function ty(e,o){if(e&1&&K(0,ey,1,0,"ng-container",7),e&2){let t=_(3);y("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function oy(e,o){e&1&&k(0,"TimesIcon",14)}function ry(e,o){if(e&1){let t=ve();C(0,"button",12),q("click",function(n){le(t);let i=_(2);return ce(i.close(n))}),K(1,Jv,1,1,"i",13)(2,ty,1,1,"ng-container")(3,oy,1,0,"TimesIcon",14),T()}if(e&2){let t=_(2);v(),se(t.closeIcon?1:-1),v(),se(t.closeIconTemplate||t._closeIconTemplate?2:-1),v(),se(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function ny(e,o){if(e&1&&(C(0,"div",1)(1,"div",2),K(2,zv,1,1,"ng-container")(3,Wv,1,1,"i",3)(4,Xv,2,1,"div",4)(5,qv,1,1,"ng-template",null,0,Dl)(7,Qv,1,4,"ng-container")(8,Zv,2,1,"span",5)(9,ry,4,3,"button",6),T()()),e&2){let t=Il(6),r=_();y("ngClass",r.containerClass)("@messageAnimation",Et(13,Gv,Rl(10,Hv,r.showTransitionOptions,r.hideTransitionOptions))),he("aria-live","polite")("role","alert"),v(2),se(r.iconTemplate||r._iconTemplate?2:-1),v(),se(r.icon?3:-1),v(),y("ngIf",!r.escape)("ngIfElse",t),v(3),se(r.containerTemplate||r._containerTemplate?7:8),v(2),se(r.closable?9:-1)}}var fh=(()=>{class e extends de{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new be;get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",r=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${r}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=X(!0);_componentStyle=p(hh);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-message"]],contentQueries:function(r,n,i){if(r&1&&(qe(i,Nv,4),qe(i,Lv,4),qe(i,Fv,4),qe(i,ti,4)),r&2){let s;Ye(s=Qe())&&(n.containerTemplate=s.first),Ye(s=Qe())&&(n.iconTemplate=s.first),Ye(s=Qe())&&(n.closeIconTemplate=s.first),Ye(s=Qe())&&(n.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",V],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",V],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},standalone:!0,features:[Y([hh]),Re,O,R],ngContentSelectors:$v,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(r,n){r&1&&(ut(),K(0,ny,10,15,"div",1)),r&2&&se(n.visible()?0:-1)},dependencies:[De,fo,ln,dn,nh,hi,ze],encapsulation:2,data:{animation:[$l("messageAnimation",[rs(":enter",[os({opacity:0,transform:"translateY(-25%)"}),ts("{{showTransitionParams}}")]),rs(":leave",[ts("{{hideTransitionParams}}",os({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})();function iy(e,o){e&1&&(C(0,"p-message",4),ke(1," \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C "),T())}function sy(e,o){e&1&&(C(0,"p-message",4),ke(1," \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C "),T())}function ay(e,o){if(e&1){let t=ve();C(0,"p-button",16),q("click",function(){le(t);let n=_();return ce(n.onClickRemove())}),T()}}var fi=class e{settings=p(fe);controls=new Gn({label:new Mo(""),iconSrc:new Mo(""),path:new Mo("")});isEditing=te(()=>!!this.settings.selectedEditingLink());onClickSave(){let o=this.controls.controls.label,t=this.controls.controls.iconSrc,r=this.controls.controls.path;if(!o.value){o.setErrors({empty:!0}),o.markAsTouched();return}if(!r.value){r.setErrors({empty:!0}),r.markAsTouched();return}if(!this.isEditing()){this.onCreate(o.value,t.value,r.value);return}this.onUpdate(o.value,t.value,r.value)}onCreate(o,t,r){let n={id:kr(),label:o,iconSrc:t||void 0,path:r},i=structuredClone(this.settings.links());i||(i=[]),i.push(n),this.settings.links.set(i),this.settings.open.set(!1)}onUpdate(o,t,r){let n=this.settings.selectedEditingLink();if(!n)return;let i=this.settings.links();if(!i)return;let s=structuredClone(i).map(a=>a.id===n.id?{id:a.id,label:o,iconSrc:t||void 0,path:r}:a);this.settings.links.set(s),this.settings.selectedEditingLink.set(void 0),this.settings.open.set(!1)}onClickRemove(){let o=this.settings.selectedEditingLink();if(!o)return;let t=this.settings.links();if(!t)return;let r=structuredClone(t).filter(n=>n.id!==o.id);this.settings.links.set(r),this.settings.selectedEditingLink.set(void 0),this.settings.open.set(!1)}onSelectedEditingLinkChanged(){let o=this.settings.selectedEditingLink();U(()=>{if(!o){this.controls.setValue({label:"",iconSrc:"",path:""});return}this.controls.setValue({label:o.label,iconSrc:o.iconSrc||"",path:o.path})})}constructor(){ae(this.onSelectedEditingLinkChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-settings-menu-edit"]],standalone:!0,features:[R],decls:21,vars:11,consts:[[1,"container",3,"formGroup"],["variant","on",1,"flex","flex-col","gap-1"],["pInputText","","formControlName","label","id","settings-menu-edit-input-label",3,"fluid"],["for","settings-menu-edit-input-label"],["severity","error","size","small","variant","simple"],[1,"container__icon"],["variant","on",1,"container__icon-input"],["pInputText","","formControlName","iconSrc","id","settings-menu-edit-input-iconSrc",3,"fluid"],["for","settings-menu-edit-input-iconSrc"],[1,"container__path"],["variant","on"],["pInputText","","formControlName","path","id","settings-menu-edit-input-path",3,"fluid"],["for","settings-menu-edit-input-path"],[1,"container__buttons"],["label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","severity","danger","variant","outlined","size","small",1,"container__buttons-delete"],["label","\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C","variant","outlined","size","small",1,"container__buttons-save",3,"click"],["label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","severity","danger","variant","outlined","size","small",1,"container__buttons-delete",3,"click"]],template:function(t,r){t&1&&(C(0,"div",0)(1,"div")(2,"p-floatlabel",1),k(3,"input",2),C(4,"label",3),ke(5,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"),T()(),K(6,iy,2,0,"p-message",4),T(),C(7,"div",5)(8,"p-floatlabel",6),k(9,"input",7),C(10,"label",8),ke(11,"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0443"),T()()(),C(12,"div",9)(13,"p-floatlabel",10),k(14,"input",11),C(15,"label",12),ke(16,"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441"),T()(),K(17,sy,2,0,"p-message",4),T(),C(18,"div",13),K(19,ay,1,0,"p-button",14),C(20,"p-button",15),q("click",function(){return r.onClickSave()}),T()()()),t&2&&(y("formGroup",r.controls),v(3),_e(r.controls.controls.label.hasError("empty")?"ng-invalid ng-dirty":""),y("fluid",!0),v(3),se(r.controls.controls.label.hasError("empty")?6:-1),v(3),y("fluid",!0),v(5),_e(r.controls.controls.path.hasError("empty")?"ng-invalid ng-dirty":""),y("fluid",!0),v(3),se(r.controls.controls.path.hasError("empty")?17:-1),v(2),se(r.isEditing()?19:-1))},dependencies:[yd,zn,ld,cd,ha,fa,lh,dh,ph,fh],styles:["[_nghost-%COMP%]{flex:1;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden;padding:16px}.container__icon[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:16px;display:flex;gap:16px;align-items:center}.container__icon-input[_ngcontent-%COMP%]{flex:1}.container__path[_ngcontent-%COMP%]{margin-bottom:auto}.container__buttons[_ngcontent-%COMP%]{width:100%;display:flex}.container__buttons-save[_ngcontent-%COMP%]{margin-left:auto;width:max-content}"]})};var ly=(e,o)=>o.name;function cy(e,o){if(e&1){let t=ve();C(0,"div",5),q("click",function(){let n=le(t).$implicit,i=_();return ce(i.onClickPreset(n))}),T()}if(e&2){let t=o.$implicit,r=_();_e("preset "+(r.selectedPresetName()===t.name&&"selected")),rt("background","var(--p-"+t.name+"-600)")("outline-color","var(--p-"+t.name+"-600)")}}var gi=class e{settings=p(fe);Presets=ri;selectedPresetName=te(()=>this.settings.selectedPreset().name);onClickPreset(o){this.settings.selectedPreset().name!==o.name&&this.settings.selectedPreset.set(o)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-settings-menu-palette"]],standalone:!0,features:[R],decls:7,vars:0,consts:[[1,"container"],[1,"container__section"],[1,"container__section-title"],[1,"container__section-content"],[3,"class","background","outline-color"],[3,"click"]],template:function(t,r){t&1&&(C(0,"div",0)(1,"div",1)(2,"div",2),ke(3,"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0446\u0432\u0435\u0442"),T(),C(4,"div",3),lo(5,cy,1,6,"div",4,ly),T()()()),t&2&&(v(5),co(r.Presets))},styles:["[_nghost-%COMP%]{flex:1;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:16px;overflow:hidden;padding:16px}.container__section[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:16px}.container__section-title[_ngcontent-%COMP%]{font-size:.875rem;color:var(--p-zinc-800);font-weight:600;line-height:1}.container__section-content[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.preset[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;cursor:pointer}.preset.selected[_ngcontent-%COMP%]{outline-width:2px;outline-style:solid;outline-offset:1px}"]})};var Or=Ae(Fa(),1),E=Ae(Uh(),1),ct=Ae(Xh(),1),cf=Ae(Jh(),1),Br=Ae(sf(),1),Zt=window,Ne=document,af=Ne.documentElement,ki=0,Ka=class e{static cache=new WeakMap;css3=!0;axis=null;constructor(o,t){var r=e.cache.get(o);if(r)return r.state="reset",Object.assign(r,t),r.update(),r;this.id=Math.random().toString(36).substring(2,15),this._ns=".draggy_"+this.id,this.element=o,e.cache.set(o,this),(0,cf.default)(this,"state",e.state),this.currentHandles=[],Object.assign(this,t),this.handle===void 0&&(this.handle=this.element),this.droppable&&((0,E.on)(this,"dragstart",()=>{this.dropTargets=Ii(this.droppable)}),(0,E.on)(this,"drag",()=>{if(this.dropTargets){var n=(0,Or.default)(this.element);this.dropTargets.forEach(i=>{var s=(0,Or.default)(i);My(n,s,this.droppableTolerance)?(this.droppableClass&&i.classList.add(this.droppableClass),this.dropTarget||(this.dropTarget=i,(0,E.emit)(this,"dragover",i),(0,E.emit)(i,"dragover",this))):(this.dropTarget&&((0,E.emit)(this,"dragout",i),(0,E.emit)(i,"dragout",this),this.dropTarget=null),this.droppableClass&&i.classList.remove(this.droppableClass))})}}),(0,E.on)(this,"dragend",()=>{this.dropTarget&&((0,E.emit)(this.dropTarget,"drop",this),(0,E.emit)(this,"drop",this.dropTarget),this.dropTarget.classList.remove(this.droppableClass),this.dropTarget=null)})),this.update(),this.state="idle"}on(o,t){return(0,E.on)(this,o,t)}off(o,t){return(0,E.off)(this,o,t)}static state={_:{before:function(){this.element.classList.add("draggy-idle"),(0,E.emit)(this.element,"idle",null,!0),(0,E.emit)(this,"idle"),this.ctrlKey=!1,this.shiftKey=!1,this.metaKey=!1,this.altKey=!1,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,(0,E.on)(Ne,"mousedown"+this._ns+" touchstart"+this._ns,o=>{o.draggies&&(o.draggies.indexOf(this)<0||o.target.name===void 0&&(this.setTouch(o),this.update(o),this.state="threshold"))})},after:function(){this.element.classList.remove("draggy-idle"),(0,E.off)(Ne,this._ns),this.release&&(this._trackingInterval=setInterval(o=>{var t=Date.now(),r=t-this.timestamp,n=this.prevX-this.frame[0],i=this.prevY-this.frame[1];this.frame[0]=this.prevX,this.frame[1]=this.prevY;var s=Math.sqrt(n*n+i*i),a=Math.min(this.velocity*s/(1+r),this.maxSpeed);return this.speed=.8*a+.2*this.speed,this.angle=Math.atan2(i,n),(0,E.emit)(this,"track"),this},this.framerate))}},threshold:{before:function(){if(ky(this.threshold)){this.state="drag";return}this.element.classList.add("draggy-threshold"),(0,E.emit)(this,"threshold"),(0,E.emit)(this.element,"threshold"),(0,E.on)(Ne,"touchmove"+this._ns+" mousemove"+this._ns,o=>{o.preventDefault();var t=(0,ct.x)(o,this.touchIdx),r=(0,ct.y)(o,this.touchIdx),n=this.prevMouseX-t,i=this.prevMouseY-r;(n<this.threshold[0]||n>this.threshold[2]||i<this.threshold[1]||i>this.threshold[3])&&(this.update(o),this.state="drag")}),(0,E.on)(Ne,"mouseup"+this._ns+" touchend"+this._ns,o=>{o.preventDefault(),ki=0,this.touchIdx=null,this.state="idle"})},after:function(){this.element.classList.remove("draggy-threshold"),(0,E.off)(Ne,this._ns)}},drag:{before:function(){lf.disable(af),this.element.classList.add("draggy-drag"),(0,E.emit)(this,"dragstart"),(0,E.emit)(this.element,"dragstart",null,!0),(0,E.emit)(this,"drag"),(0,E.emit)(this.element,"drag",null,!0),(0,E.on)(Ne,"touchend"+this._ns+" mouseup"+this._ns+" mouseleave"+this._ns,o=>{o.preventDefault(),ki=0,this.touchIdx=null,this.speed>1?this.state="release":this.state="idle"}),(0,E.on)(Ne,"touchmove"+this._ns+" mousemove"+this._ns,o=>{this.drag(o)})},after:function(){lf.enable(af),this.element.classList.remove("draggy-drag"),(0,E.emit)(this,"dragend"),(0,E.emit)(this.element,"dragend",null,!0),(0,E.off)(Ne,this._ns),clearInterval(this._trackingInterval)}},release:{before:function(){this.element.classList.add("draggy-release"),clearTimeout(this._animateTimeout),this.element.style.transition=this.releaseDuration+"ms ease-out "+(this.css3?"transform":"position"),this._animateTimeout=setTimeout(()=>{this.state="idle"},this.releaseDuration),this.move(this.prevX+this.speed*Math.cos(this.angle),this.prevY+this.speed*Math.sin(this.angle)),this.speed=0,(0,E.emit)(this,"track")},after:function(){this.element.classList.remove("draggy-release"),this.element.style.transition=null}},reset:function(){return this.currentHandles.forEach(o=>{(0,E.off)(o,this._ns)}),clearTimeout(this._animateTimeout),(0,E.off)(Ne,this._ns),(0,E.off)(this.element,this._ns),"_"}};drag(o){o.preventDefault();var t=(0,ct.x)(o,this.touchIdx),r=(0,ct.y)(o,this.touchIdx),n=t-this.prevMouseX,i=r-this.prevMouseY,s=t,a=r;this._isFixed||(s+=Zt.pageXOffset,a+=Zt.pageYOffset),(o.ctrlKey||o.metaKey)&&(this.sniperOffsetX+=n*this.sniperSlowdown,this.sniperOffsetY+=i*this.sniperSlowdown),this.ctrlKey=o.ctrlKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.altKey=o.altKey;var l=s-this.initOffsetX-this.innerOffsetX-this.sniperOffsetX,c=a-this.initOffsetY-this.innerOffsetY-this.sniperOffsetY;this.move(l,c),this.prevMouseX=t,this.prevMouseY=r,(0,E.emit)(this,"drag"),(0,E.emit)(this.element,"drag",null,!0)}setTouch(o){if(!o.touches||this.touchIdx!==null)return this;this.touchIdx=ki,ki++}touchIdx=null;update(o){this._isFixed=Ry(this.element),this.css3||(this.element.style.position="absolute"),this.currentHandles.forEach(s=>{(0,E.off)(s,this._ns)});var t=Ii(this.cancel);this.currentHandles=Ii(this.handle),this.currentHandles.forEach(s=>{(0,E.on)(s,"mousedown"+this._ns+" touchstart"+this._ns,a=>{a.draggies||(a.draggies=[]),!a.draggies.some(l=>this.element.contains(l.element))&&(t.some(l=>l.contains(a.target))||a.draggies.push(this))})}),this.updateLimits(),this.innerOffsetX=this.pin[0],this.innerOffsetY=this.pin[1];var r=this.element.getBoundingClientRect();if(o)this.prevMouseX=(0,ct.x)(o,this.touchIdx),this.prevMouseY=(0,ct.y)(o,this.touchIdx),this.innerOffsetX=-r.left+(0,ct.x)(o,this.touchIdx),this.innerOffsetY=-r.top+(0,ct.y)(o,this.touchIdx);else{var n=(this.pin[0]+this.pin[2])*.5,i=(this.pin[1]+this.pin[3])*.5;this.prevMouseX=r.left+n,this.prevMouseY=r.top+i,this.innerOffsetX=n,this.innerOffsetY=i}this.speed=0,this.amplitude=0,this.angle=0,this.timestamp=+new Date,this.frame=[this.prevX,this.prevY],this.sniperOffsetX=0,this.sniperOffsetY=0}updateLimits(){var o=this.getCoords();this.prevX=o[0],this.prevY=o[1],this.initX=o[0],this.initY=o[1];var t=(0,Or.default)(this.element);this.initOffsetX=t.left-this.prevX,this.initOffsetY=t.top-this.prevY,this.offsets=t;var r=this.within;(this.within==="parent"||this.within===!0)&&(r=this.element.parentNode),r=r||Ne;var n=(0,Or.default)(r);r===Zt&&this._isFixed&&(n.top-=Zt.pageYOffset,n.left-=Zt.pageXOffset,n.bottom-=Zt.pageYOffset,n.right-=Zt.pageXOffset),this.withinOffsets=n,this.overflowX=this.pin.width-n.width,this.overflowY=this.pin.height-n.height,this.limits={left:n.left-this.initOffsetX-this.pin[0]-(this.overflowX<0?0:this.overflowX),top:n.top-this.initOffsetY-this.pin[1]-(this.overflowY<0?0:this.overflowY),right:this.overflowX>0?0:n.right-this.initOffsetX-this.pin[2],bottom:this.overflowY>0?0:n.bottom-this.initOffsetY-this.pin[3]}}updateInfo(o,t){this.deltaX=o-this.prevX,this.deltaY=t-this.prevY,this.prevX=o,this.prevY=t,this.movementX=o-this.initX,this.movementY=t-this.initY}getCoords(){return this.css3?Iy(this.element).slice(0,2)||[0,0]:[(0,Br.default)(this.element.style.left),(0,Br.default)(this.element.style.top)]}setCoords(o,t){this.css3?(o==null&&(o=this.prevX),t==null&&(t=this.prevY),o=Ai(o,this.precision),t=Ai(t,this.precision),this.element.style.transform=`translate3d(${o}px, ${t}px, 0)`,this.updateInfo(o,t)):(o==null&&(o=this.prevX),t==null&&(t=this.prevY),o=Ai(o,this.precision),t=Ai(t,this.precision),this.element.style.left=o,this.element.style.top=t,this.updateInfo(o,t))}within=Ne;handle;set pin(o){Array.isArray(o)?o.length===2?this._pin=[o[0],o[1],o[0],o[1]]:o.length===4&&(this._pin=o):typeof o=="number"?this._pin=[o,o,o,o]:this._pin=o,this._pin.width=this._pin[2]-this._pin[0],this._pin.height=this._pin[3]-this._pin[1]}get pin(){if(this._pin)return this._pin;var o=[0,0,this.offsets.width,this.offsets.height];return o.width=this.offsets.width,o.height=this.offsets.height,o}set threshold(o){typeof o=="number"?this._threshold=[-o*.5,-o*.5,o*.5,o*.5]:o.length===2?this._threshold=[-o[0]*.5,-o[1]*.5,o[0]*.5,o[1]*.5]:o.length===4?this._threshold=o:typeof o=="function"?this._threshold=o():this._threshold=[0,0,0,0]}get threshold(){return this._threshold||[0,0,0,0]}release=!1;releaseDuration=500;velocity=1e3;maxSpeed=250;framerate=50;precision=1;droppable=null;droppableTolerance=.5;droppableClass=null;sniper=!0;sniperSlowdown=.85;move(o,t){if(this.axis==="x"){o==null&&(o=this.prevX),t==null&&(t=this.prevY);var r=this.limits;if(this.repeat){var n=r.right-r.left,i=-this.initOffsetX+this.withinOffsets.left-this.pin[0]-Math.max(0,this.overflowX);o=$o(o-i,n)+i}else o=Mi(o,r.left,r.right);this.setCoords(o)}else if(this.axis==="y"){o==null&&(o=this.prevX),t==null&&(t=this.prevY);var r=this.limits;if(this.repeat){var s=r.bottom-r.top,a=-this.initOffsetY+this.withinOffsets.top-this.pin[1]-Math.max(0,this.overflowY);t=$o(t-a,s)+a}else t=Mi(t,r.top,r.bottom);this.setCoords(null,t)}else{o==null&&(o=this.prevX),t==null&&(t=this.prevY);var r=this.limits;if(this.repeat){var n=r.right-r.left,s=r.bottom-r.top,i=-this.initOffsetX+this.withinOffsets.left-this.pin[0]-Math.max(0,this.overflowX),a=-this.initOffsetY+this.withinOffsets.top-this.pin[1]-Math.max(0,this.overflowY);this.repeat==="x"?o=$o(o-i,n)+i:(this.repeat==="y"||(o=$o(o-i,n)+i),t=$o(t-a,s)+a)}o=Mi(o,r.left,r.right),t=Mi(t,r.top,r.bottom),this.setCoords(o,t)}}repeat=!1;destroy(){this.currentHandles.forEach(o=>{(0,E.off)(o,this._ns)}),this.state="destroy",clearTimeout(this._animateTimeout),(0,E.off)(Ne,this._ns),(0,E.off)(this.element,this._ns),this.element=null,this.within=null}};function ky(e){if(!e[0]&&!e[1]&&!e[2]&&!e[3])return!0}function Ii(e){return Array.isArray(e)?e.map(Ii).reduce(function(o,t){return o.concat(t)},[]):e instanceof HTMLElement?[e]:[].slice.call(document.querySelectorAll(e))}function My(e,o,t=0){let r=Math.max(0,Math.min(e.right,o.right)-Math.max(e.left,o.left)),n=Math.max(0,Math.min(e.bottom,o.bottom)-Math.max(e.top,o.top)),i=r*n,s=(e.right-e.left)*(e.bottom-e.top),a=(o.right-o.left)*(o.bottom-o.top),l=Math.min(s,a);return i>=t*l}function $o(e,o,t){if(t===void 0&&(t=o,o=0),o>t){var r=t;t=o,o=r}var n=t-o;return e=(e+o)%n-o,e<o&&(e+=n),e>t&&(e-=n),e}function Mi(e,o,t){return Math.max(o,Math.min(e,t))}function Ai(e,o){return o===0?e:o?(o=parseFloat(o),e=Math.round(e/o)*o,parseFloat(e.toFixed(Ay(o)))):Math.round(e)}function Ay(e){var o=e+"",t=o.indexOf(".")+1;return t?o.length-t:0}var lf={disable(e){e.style.userSelect="none",e.style.userDrag="none",e.style.touchCallout="none",e.setAttribute("unselectable","on"),e.addEventListener("selectstart",o=>o.preventDefault())},enable(e){e.style.userSelect=null,e.style.userDrag=null,e.style.touchCallout=null,e.removeAttribute("unselectable"),e.removeEventListener("selectstart",o=>o.preventDefault())}};function Iy(e){var o=e.style.transform,t=/translate(?:3d)?\s*\(([^\)]*)\)/.exec(o);if(!t)return[0,0];var r=t[1].split(/\s*,\s*/);return[(0,Br.default)(r[0]),(0,Br.default)(r[1])]}function Ry(e){var o=e;if(e===window)return!0;if(e===document)return!1;for(;o;){if(getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}var Ho=Ka;var Jt=Ae(Ua(),1),Sf=Ae(Ha(),1),Cf=Ae(xi(),1),Te=Ae(Na(),1),Tf=Ae(pf(),1),wf=Ae(gf(),1),xf=Ae(vf(),1),qa=Ae(Fa(),1),Dy=document,yf=Dy.documentElement;function Oi(e,o){var t=this;if(!(t instanceof Oi))return new Oi(e,o);t.element=e,Object.assign(t,o),t.draggable===!0?t.draggable=new Ho(t.element,{within:t.within,css3:t.css3}):t.draggable?(t.draggable=new Ho(t.element,t.draggable),t.draggable.css3=t.css3):t.draggable=new Ho(t.element,{handle:null}),t.createHandles(),t.resize&&t.on("resize",t.resize)}var Lt=Oi.prototype;Lt.css3=!0;Lt.draggable=!1;Lt.on=function(e,o){(0,Sf.default)(this,e,o)};Lt.off=function(e,o){(0,Cf.default)(this,e,o)};Lt.createHandles=function(){var e=this,o;if(Array.isArray(e.handles)){o={};for(var t=e.handles.length;t--;)o[e.handles[t]]=null}else if(typeof e.handles=="string"){o={};for(var r=e.handles.match(/([swne]+)/g),t=r.length;t--;)o[r[t]]=null}else if(typeof e.handles=="object"&&e.handles.constructor===Object)o=e.handles;else{var n=getComputedStyle(e.element).position,i=getComputedStyle(e.element).display;/inline/.test(i)||/static/.test(n)?(o={s:null,se:null,e:null},(0,Te.default)(e.element,"position","relative")):o={s:null,se:null,e:null,ne:null,n:null,nw:null,w:null,sw:null}}var s;for(var a in o)o[a]=e.createHandle(o[a],a);e.handles=o};Lt.createHandle=function(e,o){var t=this,r=t.element;e||(e=document.createElement("div"),e.classList.add("resizable-handle")),t.element.appendChild(e),e.direction=o;var n=t.within==="parent"?t.element.parentNode:t.within,i=new Ho(e,{within:n,threshold:t.threshold,axis:/^[ns]$/.test(o)?"y":/^[we]$/.test(o)?"x":"both"});return i.on("dragstart",function(s){t.m=(0,xf.default)(r),t.b=(0,wf.default)(r),t.p=(0,Tf.default)(r),t.draggable.update(s);var a=getComputedStyle(r);if(t.offsets=t.draggable.getCoords(),getComputedStyle(r).boxSizing==="border-box"&&(t.p.top=0,t.p.bottom=0,t.p.left=0,t.p.right=0,t.b.top=0,t.b.bottom=0,t.b.left=0,t.b.right=0),t.initSize=[r.offsetWidth-t.b.left-t.b.right-t.p.left-t.p.right,r.offsetHeight-t.b.top-t.b.bottom-t.p.top-t.p.bottom],t.initSizeFull=[r.offsetWidth,r.offsetHeight],t.prevCoords=[0,0],t.shiftOffset=[0,0],t.center=[t.offsets[0]+t.initSize[0]/2,t.offsets[1]+t.initSize[1]/2],t.within){var l=(0,qa.default)(n),c=(0,qa.default)(r);t.maxSize=[c.left-l.left+t.initSize[0],c.top-l.top+t.initSize[1],l.right-c.right+t.initSize[0],l.bottom-c.bottom+t.initSize[1]]}else t.maxSize=[9999,9999,9999,9999];(0,Te.default)(yf,{cursor:o+"-resize"});for(var d in t.handles)(0,Te.default)(t.handles[d],"cursor",null);(0,Jt.default)(t,"resizestart"),(0,Jt.default)(r,"resizestart")}),i.on("drag",function(){var s=i.getCoords(),a=[r.offsetWidth,r.offsetHeight];if(i.shiftKey){switch(o){case"se":case"s":case"e":break;case"nw":s[0]=-s[0],s[1]=-s[1];break;case"n":s[1]=-s[1];break;case"w":s[0]=-s[0];break;case"ne":s[1]=-s[1];break;case"sw":s[0]=-s[0];break}(0,Te.default)(r,{width:Math.min(t.initSize[0]+s[0]*2,t.maxSize[2]+s[0],t.maxSize[0]+s[0]),height:Math.min(t.initSize[1]+s[1]*2,t.maxSize[3]+s[1],t.maxSize[1]+s[1])});var l=a[0]-r.offsetWidth,c=a[1]-r.offsetHeight;t.draggable.updateLimits(),l&&t.draggable.move(t.center[0]-t.initSize[0]/2-s[0]),c&&t.draggable.move(null,t.center[1]-t.initSize[1]/2-s[1])}else switch(o){case"se":(0,Te.default)(r,{width:Math.min(t.initSize[0]+s[0],t.maxSize[2]),height:Math.min(t.initSize[1]+s[1],t.maxSize[3])});case"s":(0,Te.default)(r,{height:Math.min(t.initSize[1]+s[1],t.maxSize[3])});case"e":(0,Te.default)(r,{width:Math.min(t.initSize[0]+s[0],t.maxSize[2])});case"se":case"s":case"e":t.draggable.updateLimits(),t.draggable.move(t.center[0]-t.initSize[0]/2,t.center[1]-t.initSize[1]/2);break;case"nw":(0,Te.default)(r,{width:Nt(t.initSize[0]-s[0],0,t.maxSize[0]),height:Nt(t.initSize[1]-s[1],0,t.maxSize[1])});case"n":(0,Te.default)(r,{height:Nt(t.initSize[1]-s[1],0,t.maxSize[1])});case"w":(0,Te.default)(r,{width:Nt(t.initSize[0]-s[0],0,t.maxSize[0])});case"nw":case"n":case"w":t.draggable.updateLimits();var u=t.initSizeFull[0]-r.offsetWidth,d=t.initSizeFull[1]-r.offsetHeight;t.draggable.move(t.offsets[0]+u,t.offsets[1]+d);break;case"ne":(0,Te.default)(r,{width:Nt(t.initSize[0]+s[0],0,t.maxSize[2]),height:Nt(t.initSize[1]-s[1],0,t.maxSize[1])}),t.draggable.updateLimits();var d=t.initSizeFull[1]-r.offsetHeight;t.draggable.move(null,t.offsets[1]+d);break;case"sw":(0,Te.default)(r,{width:Nt(t.initSize[0]-s[0],0,t.maxSize[0]),height:Nt(t.initSize[1]+s[1],0,t.maxSize[3])}),t.draggable.updateLimits();var u=t.initSizeFull[0]-r.offsetWidth;t.draggable.move(t.offsets[0]+u);break}(0,Jt.default)(t,"resize"),(0,Jt.default)(r,"resize"),i.setCoords(0,0)}),i.on("dragend",function(){(0,Te.default)(yf,{cursor:null});for(var s in t.handles)(0,Te.default)(t.handles[s],"cursor",t.handles[s].direction+"-resize");(0,Jt.default)(t,"resizeend"),(0,Jt.default)(r,"resizeend")}),(0,Te.default)(e,Oy[o]),(0,Te.default)(e,"cursor",o+"-resize"),e.classList.add("resizable-handle-"+o),e};Lt.destroy=function(){for(var e in this.handles)this.element.removeChild(this.handles[e]),Ho.cache.get(this.handles[e]).destroy();this.element=null};var Py=10;Lt.threshold=Py;var Oy={e:{left:"auto",right:"-5px",position:"absolute",width:"10px",top:"0px",bottom:"0px"},w:{right:"auto",left:"-5px",position:"absolute",width:"10px",top:"0px",bottom:"0px"},s:{top:"auto",bottom:"-5px",position:"absolute",height:"10px",left:"0px",right:"0px"},n:{bottom:"auto",top:"-5px",position:"absolute",height:"10px",left:"0px",right:"0px"},nw:{position:"absolute",width:"10px",height:"10px","z-index":1,top:"-5px",left:"-5px",bottom:"auto",right:"auto"},ne:{position:"absolute",width:"10px",height:"10px","z-index":1,top:"-5px",right:"-5px",bottom:"auto",left:"auto"},sw:{position:"absolute",width:"10px",height:"10px","z-index":1,bottom:"-5px",left:"-5px",top:"auto",right:"auto"},se:{position:"absolute",width:"10px",height:"10px","z-index":1,bottom:"-5px",right:"-5px",top:"auto",left:"auto"}};function Nt(e,o,t){return Math.max(o,Math.min(e,t))}var _f=Oi;var By=["componentRef"];function Ny(e,o){e&1&&k(0,"app-settings-menu-edit")}function Ly(e,o){e&1&&k(0,"app-settings-menu-palette")}function Fy(e,o){e&1&&k(0,"app-iframe")}var Bi=class e{settings=p(fe);resizable;device=p(di);componentRef=wt("componentRef");selectedMenu=te(()=>this.settings.selectedMenu());onSettingsSelectedMenuChanged(){let o=this.settings.selectedMenu();U(()=>{let t=this.componentRef()?.nativeElement;if(!t)return;let r=t.parentElement;if(!r)return;let n=this.settings.resize();try{this.resizable.destroy()}catch{}let i=this.device.isMobile();switch(o){case"edit":{t.style.transition="width 300ms, height 300ms, margin-left 300ms, margin-top 300ms";let s=r.clientWidth*(i?1:.6),a=r.clientHeight*.4,l=i?330:400;s>900&&(s=900),a<l&&(a=l),t.style.marginLeft=`calc((${r.clientWidth}px - ${s}px) / 2)`,t.style.marginTop=`calc((${r.clientHeight}px - ${a}px) / 2)`,t.style.width=`${s}px`,t.style.height=`${a}px`;break}case"palette":{t.style.transition="width 300ms, height 300ms, margin-left 300ms, margin-top 300ms";let s=r.clientWidth*(i?1:.2),a=r.clientHeight*(i?.2:.1),l=i?170:300;s<330&&!i&&(s=330),a<l&&(a=l),t.style.marginLeft=`calc((${r.clientWidth}px - ${s}px) / 2)`,t.style.marginTop=`calc((${r.clientHeight}px - ${a}px) / 2)`,t.style.width=`${s}px`,t.style.height=`${a}px`;break}default:t.style.width=n?n.w:"100%",t.style.height=n?n.h:"100%",t.style.marginLeft="0px",t.style.marginTop="0px",setTimeout(()=>{t.style.transition="unset"},300),this.initResizable()}})}MOUSE_DOWN_SIZE=400;MOUSE_UP_SIZE=10;onAreaMouseDown(o){let t=o.target;t.style.minWidth=`${this.MOUSE_DOWN_SIZE}px`,t.style.minHeight=`${this.MOUSE_DOWN_SIZE}px`;let r=t.parentElement;if(r){if(r.style.transition="unset",t.classList.contains("resizable-handle-s")){t.style.inset=`auto 0px -${this.MOUSE_DOWN_SIZE/2}px`;return}if(t.classList.contains("resizable-handle-se")){t.style.inset=`auto -${this.MOUSE_DOWN_SIZE/2}px -${this.MOUSE_DOWN_SIZE/2}px auto`;return}t.style.inset=`0px -${this.MOUSE_DOWN_SIZE/2}px 0px auto`}}onAreaMouseUp(o){let t=o.target;t.style.minWidth=`${this.MOUSE_UP_SIZE}px`,t.style.minHeight=`${this.MOUSE_UP_SIZE}px`;let r=t.parentElement;if(r){if(r.style.transition="width 300ms, height 300ms",t.classList.contains("resizable-handle-s")){t.style.inset=`auto 0px -${this.MOUSE_UP_SIZE/2}px`;return}if(t.classList.contains("resizable-handle-se")){t.style.inset=`auto -${this.MOUSE_UP_SIZE/2}px -${this.MOUSE_UP_SIZE/2}px auto`;return}t.style.inset=`0px -${this.MOUSE_UP_SIZE/2}px 0px auto`}}initResizableAreas(){document.querySelectorAll(".resizable-handle").forEach(t=>{t.addEventListener("mousedown",this.onAreaMouseDown.bind(this)),t.addEventListener("mouseup",this.onAreaMouseUp.bind(this))})}initResizable(){if(this.device.isMobile())return;let o=this.componentRef()?.nativeElement;o&&(this.resizable=new _f(o,{within:document.querySelector(".parent"),handles:"s, se, e",threshold:10,draggable:!1}),this.resizable.on("resizeend",()=>{document.querySelectorAll(".resizable-handle").forEach(n=>{let i={target:n};this.onAreaMouseUp(i)});let r=this.componentRef()?.nativeElement;if(r){if(window.innerWidth-62===r.clientWidth&&window.innerHeight-16===r.clientHeight){this.settings.resize.set(void 0);return}this.settings.resize.set({w:`${r.clientWidth}px`,h:`${r.clientHeight}px`})}}),this.resizable.on("resizestart",()=>{let t=this.componentRef()?.nativeElement;t&&this.settings.resize.set({w:`${t.clientWidth}px`,h:`${t.clientHeight}px`})}),this.initResizableAreas())}ngAfterViewInit(){this.initResizable(),window.addEventListener("resetsize",()=>{let o=this.componentRef()?.nativeElement;o&&(o.style.transition="width 300ms, height 300ms",o.style.width="100%",o.style.height="100%",setTimeout(()=>{o.style.transition="width 300ms, height 300ms"},300),this.settings.resize.set(void 0))})}constructor(){ae(this.onSettingsSelectedMenuChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-content"]],viewQuery:function(t,r){t&1&&_t(r.componentRef,By,5),t&2&&ht()},standalone:!0,features:[R],decls:6,vars:1,consts:[["componentRef",""],[1,"parent"],[1,"container"]],template:function(t,r){if(t&1&&(k(0,"div",1),C(1,"div",2,0),K(3,Ny,1,0,"app-settings-menu-edit")(4,Ly,1,0,"app-settings-menu-palette")(5,Fy,1,0,"app-iframe"),T()),t&2){let n;v(3),se((n=r.selectedMenu())==="edit"?3:n==="palette"?4:5)}},dependencies:[fi,ui,gi],styles:["[_nghost-%COMP%]{flex:1;display:flex}.parent[_ngcontent-%COMP%]{position:absolute;width:calc(100% + 138px);height:calc(100% + 184px);left:54px;top:8px;z-index:-1}.container[_ngcontent-%COMP%]{background:#fff;border-radius:8px;display:flex;position:relative}"]})};var Ni=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-root"]],standalone:!0,features:[Y([fe]),R],decls:3,vars:0,consts:[[1,"container"]],template:function(t,r){t&1&&(C(0,"div",0),k(1,"app-navbar")(2,"app-content"),T())},dependencies:[li,Bi],styles:[".container[_ngcontent-%COMP%]{width:100dvw;height:100dvh;box-sizing:border-box;display:flex;padding:8px;gap:8px;background:var(--p-primary-100)}"]})};nc(Ni,Mp).catch(e=>console.error(e));
