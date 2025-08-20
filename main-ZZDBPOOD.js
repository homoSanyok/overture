import{$ as lt,$a as y,$b as tn,A as Zt,Aa as sl,Ab as Hi,B as Pt,Ba as al,Bb as K,C as Pi,Ca as ll,Cb as I,D as Qt,Da as cl,Db as Kr,E as qa,Ea as dl,Eb as _t,F as Jt,Fa as Lt,Fb as vl,G as yt,Ga as ul,Gb as yl,H as Li,Ha as pl,Hb as Zr,I as Ya,Ia as fl,Ib as Qr,J as Xa,Ja as Ho,Jb as Wi,K as Ka,Ka as v,Kb as Gi,L as Ve,La as z,Lb as Jr,M as Za,Ma as Ui,Mb as qi,N as me,Na as Hr,Nb as Cl,O as W,Oa as hl,Ob as Bt,P as zo,Pa as Wr,Pb as wl,Q as m,Qa as no,Qb as U,R as ue,Ra as Gr,Rb as St,S as Qa,Sa as ji,Sb as re,T as L,Ta as G,Tb as j,U as Bi,Ua as wt,Ub as ae,V as B,Va as O,Vb as co,W as p,Wa as Ie,Wb as xl,X as Uo,Xa as gl,Xb as kl,Y as M,Ya as ml,Yb as ne,Z as pe,Za as q,Zb as en,_ as ee,_a as fe,_b as _l,a as g,aa as Ja,ab as rt,ac as uo,b as Y,ba as el,bb as xt,bc as on,ca as eo,cb as qr,cc as rn,d as J,da as Ye,db as _e,dc as nn,e as Te,ea as De,eb as se,ec as Ae,f as Mi,fa as le,fb as io,fc as Sl,g as za,ga as ce,gb as so,gc as po,h as Ua,ha as to,hb as w,hc as fo,i as Ii,ia as D,ib as x,ic as sn,j as Ai,ja as jo,jb as R,k as Oi,ka as jr,kb as Yr,l as qe,la as be,lb as Xr,lc as El,m as Be,ma as Se,mb as ao,mc as Yi,n as bt,na as Ni,nb as ve,o as ke,oa as ze,ob as X,oc as Xi,p as _,pa as Ct,pb as S,pc as Ki,q as Vo,qa as tl,qb as ct,r as ja,ra as Vi,rb as dt,s as Ha,sa as ol,sb as Xe,t as A,ta as Me,tb as Ke,u as $i,ua as rl,ub as Ze,v as Ne,va as zi,vb as kt,w as Wa,wa as oo,wb as ut,x as Fi,xa as ro,xb as bl,y as Ga,ya as nl,yb as Ee,z as vt,za as il,zb as lo}from"./chunk-ZM5KY2BP.js";var _r=J((VD,Jp)=>{"use strict";Jp.exports=function e(o,t,r,n){if(!(this instanceof e))return new e(o,t,r,n);this.left=o||0,this.top=t||0,this.right=r||0,this.bottom=n||0,this.width=Math.abs(this.right-this.left),this.height=Math.abs(this.bottom-this.top)}});var ef=J(Ca=>{"use strict";Ca.x=function(){return window.innerHeight>document.documentElement.clientHeight};Ca.y=function(){return window.innerWidth>document.documentElement.clientWidth}});var of=J((UD,tf)=>{"use strict";var Sr=document.createElement("div"),Er=Sr.style;Er.width="100px";Er.height="100px";Er.overflow="scroll";Er.position="absolute";Er.top="-9999px";document.documentElement.appendChild(Sr);tf.exports=Sr.offsetWidth-Sr.clientWidth;document.documentElement.removeChild(Sr)});var nf=J((jD,rf)=>{"use strict";rf.exports=function(e){var o=e;if(e===window)return!0;if(e===document)return!1;for(;o;){if(getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}});var af=J((HD,sf)=>{"use strict";sf.exports=document.createElement("div")});var cf=J((WD,xa)=>{"use strict";var wa=getComputedStyle(document.documentElement,"");wa?(Oo=(Array.prototype.slice.call(wa).join("").match(/-(moz|webkit|ms)-/)||wa.OLink===""&&["","o"])[1],lf="WebKit|Moz|MS|O".match(new RegExp("("+Oo+")","i"))[1],xa.exports={dom:lf,lowercase:Oo,css:"-"+Oo+"-",js:Oo[0].toUpperCase()+Oo.substr(1)}):xa.exports={dom:"",lowercase:"",css:"",js:""};var Oo,lf});var ka=J((GD,ff)=>{"use strict";var df=af().style,uf=cf().lowercase;ff.exports=function(e,o){if(!(!e||!o)){var t,r;if(typeof o=="string"){if(t=o,arguments.length<3)return e.style[pf(t)];r=arguments[2]||"",o={},o[t]=r}for(t in o)typeof o[t]=="number"&&/left|right|bottom|top|width|height/i.test(t)&&(o[t]+="px"),r=o[t]||"",e.style[pf(t)]=r}};function pf(e){var o=e[0].toUpperCase()+e.slice(1);return df[e]!==void 0?e:df[uf+o]!==void 0?uf+o:""}});var Rr=J((qD,hf)=>{"use strict";hf.exports=function(e){return e+="",parseFloat(e.slice(0,-2))||0}});var mf=J((YD,gf)=>{"use strict";var jv=ka(),Hv=Rr();gf.exports=function(e){var o=jv(e,"transform"),t=/translate(?:3d)?\s*\(([^\)]*)\)/.exec(o);if(!t)return[0,0];var r=t[1].split(/\s*,\s*/);return r.map(function(n){return Hv(n)})}});var Sa=J((KD,vf)=>{"use strict";var Yt=window,ci=document,_a=_r(),di=ef(),ui=of(),Wv=nf(),XD=mf();vf.exports=bf;function bf(e){if(!e)throw Error("Bad argument");var o,t;if(e===Yt)return t=_a(Yt.pageXOffset,Yt.pageYOffset),t.width=Yt.innerWidth-(di.y()?ui:0),t.height=Yt.innerHeight-(di.x()?ui:0),t.right=t.left+t.width,t.bottom=t.top+t.height,t;if(e===ci){var r=bf(ci.documentElement);return r.bottom=Math.max(window.innerHeight,r.bottom),r.right=Math.max(window.innerWidth,r.right),r.height=Math.max(window.innerHeight,r.height),r.width=Math.max(window.innerHeight,r.width),di.y(ci.documentElement)&&(r.right-=ui),di.x(ci.documentElement)&&(r.bottom-=ui),r}try{o=e.getBoundingClientRect()}catch{o=_a(e.clientLeft,e.clientTop)}var n=Wv(e),i=n?0:Yt.pageXOffset,s=n?0:Yt.pageYOffset;return t=_a(o.left+i,o.top+s,o.left+i+e.offsetWidth,o.top+s+e.offsetHeight),t}});var fi=J((ZD,yf)=>{"use strict";yf.exports={freeze:Gv,unfreeze:qv,isFrozen:Yv};var pi=new WeakMap;function Gv(e,o){var t=pi.get(e);return t&&t[o]?!1:(t||(t={},pi.set(e,t)),t[o]=!0,!0)}function qv(e,o){var t=pi.get(e);return!t||!t[o]?!1:(t[o]=null,!0)}function Yv(e,o){var t=pi.get(e);return t&&t[o]}});var gi=J((QD,Cf)=>{"use strict";var hi=new WeakMap;function Xv(e,o,t){var r=hi.get(e),n;if(!o){if(n=r||{},t&&t.length){var i={};for(var o in n)i[o]=n[o].filter(function(l){return Ea(l,t)});n=i}return n}return!r||!r[o]?[]:(n=r[o],t&&t.length&&(n=n.filter(function(s){return Ea(s,t)})),n)}function Kv(e,o,t,r){var n=hi.get(e);if(!n||!n[o])return!1;var i=n[o];if(r&&r.length&&!Ea(t,r))return!1;for(var s=0;s<i.length;s++)if(i[s]===t){i.splice(s,1);break}}function Zv(e,o,t,r){if(t){var n=hi.get(e);n||(n={},hi.set(e,n)),(n[o]=n[o]||[]).push(t),r&&r.length&&(t._ns=r)}}function Ea(e,o){if(!e._ns)return!1;for(var t=o.length;t--;)if(e._ns.indexOf(o[t])>=0)return!0}Cf.exports={get:Xv,remove:Kv,add:Zv}});var bi=J((JD,xf)=>{"use strict";xf.exports=$o;var wf=fi(),mi=gi();function $o(e,o,t){if(!e)return e;var r,n;if(t===void 0){var i=[].slice.call(arguments,1),s=e.removeAll||e.removeAllListeners;if(s&&s.apply(e,i),!o){r=mi.get(e);for(o in r)$o(e,o);return e}if(typeof o=="function"){t=o,o=null,r=mi.get(e);for(o in r)r[o].indexOf(t)>=0&&$o(e,o,t);return e}return o=""+o,o.split(/\s+/).forEach(function(c){var d=c.split(".");if(c=d.shift(),r=mi.get(e,c,d),c){var u={};u[c]=r,r=u}for(var f in r)[].slice.call(r[f]).forEach(function(h){$o(e,f,h)})}),e}Array.isArray(o)||(o=(o+"").split(/\s+/));var l=e.removeEventListener||e.removeListener||e.detachEvent||e.off;if(o.forEach(function(c){var d=c.split(".");if(c=d.shift(),l)if(wf.freeze(e,"off"+c))l.call(e,c,t),wf.unfreeze(e,"off"+c);else return e;mi.remove(e,c,t,d)}),t.__wrapFn){var a=t.__wrapFn;t.__wrapFn=null,$o(e,o,a)}if(t.__origFn){var a=t.__origFn;t.__origFn=null,$o(e,o,a)}return e}});var Ra=J((eM,_f)=>{"use strict";var kf=fi(),Qv=gi(),Jv=bi();_f.exports=ey;function ey(e,o,t,r={}){if(!e)return e;if(typeof e=="string"||r.target){for(;t.__wrapFn;)t=t.__wrapFn;var n=e;e=r.target||document,t.__wrapFn=ty.bind({target:e,selector:n,cb:t}),t.__wrapFn.__origFn=t,t=t.__wrapFn}Array.isArray(o)||(o=(o+"").split(/\s+/));var i=e.addEventListener||e.addListener||e.attachEvent||e.on;return o.forEach(function(s){var l=s.split(".");if(s=l.shift(),i)if(kf.freeze(e,"on"+s))i.call(e,s,t),kf.unfreeze(e,"on"+s);else return e;Qv.add(e,s,t,l)}),function(){Jv(e,o,t)}}function ty(e){var o=this.cb,t=this.selector,r=this.target,n=e.target;n!==r&&(Array.isArray(t)||(t=[t]),t.some(function(i){var s;if(typeof i!="string"){if(!i.contains(n))return!1;s=i}else s=n.closest&&n.closest(i);return s&&r!==s&&r.contains(s)?(e.delegateTarget=s,!0):!1})&&o.apply(n,arguments))}});var Ma=J((tM,Rf)=>{"use strict";var Sf=fi(),oy=gi();Rf.exports=function(e,o,t,r){if(e){var n=arguments;return typeof o=="string"?(n=[].slice.call(arguments,2),o.split(/\s+/).forEach(function(i){Ef.apply(this,[e,i].concat(n))}),e):Ef.apply(this,n)}};var Ta=typeof jQuery>"u"?void 0:jQuery,Da=typeof document>"u"?void 0:document,ry=typeof window>"u"?void 0:window;function Ef(e,o,t,r){var n,i=o;Da&&(e instanceof Node||e===ry)?(Da&&o instanceof Event?i=o:(i=Da.createEvent("CustomEvent"),i.initCustomEvent(o,r,!0,t)),n=e.dispatchEvent):Ta&&e instanceof Ta?(i=Ta.Event(o,t),i.detail=t,n=r?targte.trigger:e.triggerHandler):n=e.dispatchEvent||e.emit||e.trigger||e.fire||e.raise;var s=[].slice.call(arguments,2);if(n&&Sf.freeze(e,"emit"+o))return n.apply(e,[i].concat(s)),Sf.unfreeze(e,"emit"+o),e;var l=i.split(".");i=l.shift();for(var a=oy.get(e,i,l),c=a.slice(),d=0;d<c.length;d++)c[d]&&c[d].apply(e,s);return e}});var Tf=J((oM,vi)=>{"use strict";vi.exports.on=Ra();vi.exports.off=bi();vi.exports.emit=Ma()});var Af=J((rM,If)=>{"use strict";function Df(e,o){return e.touches?arguments.length>1?Ia(e.touches,o).clientY:e.targetTouches[0].clientY:e.clientY}function Mf(e,o){return e.touches?arguments.length>o?Ia(e.touches,o).clientX:e.targetTouches[0].clientX:e.clientX}function yi(e,o){return[Mf.apply(this,arguments),Df.apply(this,arguments)]}function Ia(e,o){for(var t=0;t<e.length;t++)if(e[t].identifier===o)return e[t]}yi.x=Mf;yi.y=Df;yi.findTouch=Ia;If.exports=yi});var $f=J((nM,Of)=>{"use strict";Of.exports=function(o){return typeof o=="object"?o===null:typeof o!="function"}});var Pf=J((iM,Ff)=>{"use strict";var ny=$f();Ge.OTHERWISE="_";Ge.ENTER="enter";Ge.EXIT="exit";function Ge(e,o){if(e instanceof Ge)return e;if(!(this instanceof Ge))return new Ge(e);this.states=e||{},this.context=o||this,this.inited=!1}Ge.prototype.set=function(e){var o=this.state,t=this.states,r=Ge.ENTER,n=Ge.EXIT,i=Ge.OTHERWISE,s=t[o]!==void 0?o:i,l=t[s],a,c=n+s;if(this.inited){if(l&&!this[c]){if(this[c]=!0,a=l[n]&&l[n].call?l[n].call(this.context):l[1]&&l[1].call?l[1].call(this.context):l[n],a===!1)return this[c]=!1,!1;if(a!==void 0&&a!==e)return this.set(a),this[c]=!1,!1;if(this[c]=!1,this.state!==o)return}if(e===o)return!1}else this.inited=!0;this.state=e;var d=t.hasOwnProperty(e)?e:i,u=t[d],f,h=r+d;if(!this[h]){if(this[h]=!0,u?u.call?f=u.call(this.context):Array.isArray(u)?f=u[0]&&u[0].call?u[0].call(this.context,this):u[0]:u.hasOwnProperty(r)?f=u[r].call?u[r].call(this.context):u[r]:ny(u)&&(f=u):f=u,f===!1)return this.set(o),this[h]=!1,!1;if(f!==void 0&&f!==e)return this.set(f),this[h]=!1,!1;this[h]=!1}return this.context};Ge.prototype.get=function(){return this.state};Ff.exports=Ge});var Bf=J((sM,Lf)=>{"use strict";Lf.exports=iy;var Aa=Pf();Aa.ENTER="before";Aa.EXIT="after";function iy(e,o,t,r){r?e[o]=function(){return arguments.length?n.set(arguments[0]):n.get()}:Object.defineProperty(e,o,{set:function(i){return n.set(i)},get:function(){return n.get()}});var n=new Aa(t,e);return e}});var Vf=J((aM,Nf)=>{"use strict";Nf.exports=function(o,t){t||(t=[0,""]),o=String(o);var r=parseFloat(o,10);return t[0]=r,t[1]=o.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}});var Hf=J((lM,jf)=>{"use strict";var zf=Vf();jf.exports=$a;var Tr=Uf("in",document.body);function Oa(e,o){var t=zf(getComputedStyle(e).getPropertyValue(o));return t[0]*$a(t[1],e)}function Uf(e,o){var t=document.createElement("div");t.style.height="128"+e,o.appendChild(t);var r=Oa(t,"height")/128;return o.removeChild(t),r}function $a(e,o){if(!e)return null;switch(o=o||document.body,e=(e+""||"px").trim().toLowerCase(),(o===window||o===document)&&(o=document.body),e){case"%":return o.clientHeight/100;case"ch":case"ex":return Uf(e,o);case"em":return Oa(o,"font-size");case"rem":return Oa(document.body,"font-size");case"vw":return window.innerWidth/100;case"vh":return window.innerHeight/100;case"vmin":return Math.min(window.innerWidth,window.innerHeight)/100;case"vmax":return Math.max(window.innerWidth,window.innerHeight)/100;case"in":return Tr;case"cm":return Tr/2.54;case"mm":return Tr/25.4;case"pt":return Tr/72;case"pc":return Tr/6;case"px":return 1}var t=zf(e);if(!isNaN(t[0])&&t[1]){var r=$a(t[1],o);return typeof r=="number"?t[0]*r:null}return null}});var Kf=J((dM,Xf)=>{"use strict";var Yf=_r(),_i=Rr();Xf.exports=function(e){if(e===window)return Yf();if(!(e instanceof Element))throw Error("Argument is not an element");var o=window.getComputedStyle(e);return Yf(_i(o.paddingLeft),_i(o.paddingTop),_i(o.paddingRight),_i(o.paddingBottom))}});var Jf=J((uM,Qf)=>{"use strict";var Zf=_r(),Si=Rr();Qf.exports=function(e){if(e===window)return Zf();if(!(e instanceof Element))throw Error("Argument is not an element");var o=window.getComputedStyle(e);return Zf(Si(o.borderLeftWidth),Si(o.borderTopWidth),Si(o.borderRightWidth),Si(o.borderBottomWidth))}});var oh=J((pM,th)=>{"use strict";var Ei=Rr(),eh=_r();th.exports=function(e){if(e===window)return eh();if(!(e instanceof Element))throw Error("Argument is not an element");var o=window.getComputedStyle(e);return eh(Ei(o.marginLeft),Ei(o.marginTop),Ei(o.marginRight),Ei(o.marginBottom))}});var Go=class{},ln=class{},pt=class e{constructor(o){this.normalizedNames=new Map,this.lazyUpdate=null,o?typeof o=="string"?this.lazyInit=()=>{this.headers=new Map,o.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let n=t.slice(0,r),i=n.toLowerCase(),s=t.slice(r+1).trim();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:typeof Headers<"u"&&o instanceof Headers?(this.headers=new Map,o.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(o).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(o){return this.init(),this.headers.has(o.toLowerCase())}get(o){this.init();let t=this.headers.get(o.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(o){return this.init(),this.headers.get(o.toLowerCase())||null}append(o,t){return this.clone({name:o,value:t,op:"a"})}set(o,t){return this.clone({name:o,value:t,op:"s"})}delete(o,t){return this.clone({name:o,value:t,op:"d"})}maybeSetNormalizedName(o,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,o)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(o=>this.applyUpdate(o)),this.lazyUpdate=null))}copyFrom(o){o.init(),Array.from(o.headers.keys()).forEach(t=>{this.headers.set(t,o.headers.get(t)),this.normalizedNames.set(t,o.normalizedNames.get(t))})}clone(o){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([o]),t}applyUpdate(o){let t=o.name.toLowerCase();switch(o.op){case"a":case"s":let r=o.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(o.name,t);let n=(o.op==="a"?this.headers.get(t):void 0)||[];n.push(...r),this.headers.set(t,n);break;case"d":let i=o.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(l=>i.indexOf(l)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}setHeaderEntries(o,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),n=o.toLowerCase();this.headers.set(n,r),this.maybeSetNormalizedName(o,n)}forEach(o){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>o(this.normalizedNames.get(t),this.headers.get(t)))}};var Qi=class{encodeKey(o){return Rl(o)}encodeValue(o){return Rl(o)}decodeKey(o){return decodeURIComponent(o)}decodeValue(o){return decodeURIComponent(o)}};function Dh(e,o){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(n=>{let i=n.indexOf("="),[s,l]=i==-1?[o.decodeKey(n),""]:[o.decodeKey(n.slice(0,i)),o.decodeValue(n.slice(i+1))],a=t.get(s)||[];a.push(l),t.set(s,a)}),t}var Mh=/%(\d[a-f0-9])/gi,Ih={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Rl(e){return encodeURIComponent(e).replace(Mh,(o,t)=>Ih[t]??o)}function an(e){return`${e}`}var Rt=class e{constructor(o={}){if(this.updates=null,this.cloneFrom=null,this.encoder=o.encoder||new Qi,o.fromString){if(o.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Dh(o.fromString,this.encoder)}else o.fromObject?(this.map=new Map,Object.keys(o.fromObject).forEach(t=>{let r=o.fromObject[t],n=Array.isArray(r)?r.map(an):[an(r)];this.map.set(t,n)})):this.map=null}has(o){return this.init(),this.map.has(o)}get(o){this.init();let t=this.map.get(o);return t?t[0]:null}getAll(o){return this.init(),this.map.get(o)||null}keys(){return this.init(),Array.from(this.map.keys())}append(o,t){return this.clone({param:o,value:t,op:"a"})}appendAll(o){let t=[];return Object.keys(o).forEach(r=>{let n=o[r];Array.isArray(n)?n.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:n,op:"a"})}),this.clone(t)}set(o,t){return this.clone({param:o,value:t,op:"s"})}delete(o,t){return this.clone({param:o,value:t,op:"d"})}toString(){return this.init(),this.keys().map(o=>{let t=this.encoder.encodeKey(o);return this.map.get(o).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(o=>o!=="").join("&")}clone(o){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(o),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(o=>this.map.set(o,this.cloneFrom.map.get(o))),this.updates.forEach(o=>{switch(o.op){case"a":case"s":let t=(o.op==="a"?this.map.get(o.param):void 0)||[];t.push(an(o.value)),this.map.set(o.param,t);break;case"d":if(o.value!==void 0){let r=this.map.get(o.param)||[],n=r.indexOf(an(o.value));n!==-1&&r.splice(n,1),r.length>0?this.map.set(o.param,r):this.map.delete(o.param)}else{this.map.delete(o.param);break}}}),this.cloneFrom=this.updates=null)}};var Ji=class{constructor(){this.map=new Map}set(o,t){return this.map.set(o,t),this}get(o){return this.map.has(o)||this.map.set(o,o.defaultValue()),this.map.get(o)}delete(o){return this.map.delete(o),this}has(o){return this.map.has(o)}keys(){return this.map.keys()}};function Ah(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Tl(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Dl(e){return typeof Blob<"u"&&e instanceof Blob}function Ml(e){return typeof FormData<"u"&&e instanceof FormData}function Oh(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Wo=class e{constructor(o,t,r,n){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=o.toUpperCase();let i;if(Ah(this.method)||n?(this.body=r!==void 0?r:null,i=n):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new pt,this.context??=new Ji,!this.params)this.params=new Rt,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let l=t.indexOf("?"),a=l===-1?"?":l<t.length-1?"&":"";this.urlWithParams=t+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Tl(this.body)||Dl(this.body)||Ml(this.body)||Oh(this.body)?this.body:this.body instanceof Rt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ml(this.body)?null:Dl(this.body)?this.body.type||null:Tl(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Rt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(o={}){let t=o.method||this.method,r=o.url||this.url,n=o.responseType||this.responseType,i=o.transferCache??this.transferCache,s=o.body!==void 0?o.body:this.body,l=o.withCredentials??this.withCredentials,a=o.reportProgress??this.reportProgress,c=o.headers||this.headers,d=o.params||this.params,u=o.context??this.context;return o.setHeaders!==void 0&&(c=Object.keys(o.setHeaders).reduce((f,h)=>f.set(h,o.setHeaders[h]),c)),o.setParams&&(d=Object.keys(o.setParams).reduce((f,h)=>f.set(h,o.setParams[h]),d)),new e(t,r,s,{params:d,headers:c,context:u,reportProgress:a,responseType:n,withCredentials:l,transferCache:i})}},Tt=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Tt||{}),qo=class{constructor(o,t=200,r="OK"){this.headers=o.headers||new pt,this.status=o.status!==void 0?o.status:t,this.statusText=o.statusText||r,this.url=o.url||null,this.ok=this.status>=200&&this.status<300}},cn=class e extends qo{constructor(o={}){super(o),this.type=Tt.ResponseHeader}clone(o={}){return new e({headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Yo=class e extends qo{constructor(o={}){super(o),this.type=Tt.Response,this.body=o.body!==void 0?o.body:null}clone(o={}){return new e({body:o.body!==void 0?o.body:this.body,headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Et=class extends qo{constructor(o){super(o,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${o.url||"(unknown url)"}`:this.message=`Http failure response for ${o.url||"(unknown url)"}: ${o.status} ${o.statusText}`,this.error=o.error||null}},$l=200,$h=204;function Zi(e,o){return{body:o,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Fh=(()=>{class e{constructor(t){this.handler=t}request(t,r,n={}){let i;if(t instanceof Wo)i=t;else{let a;n.headers instanceof pt?a=n.headers:a=new pt(n.headers);let c;n.params&&(n.params instanceof Rt?c=n.params:c=new Rt({fromObject:n.params})),i=new Wo(t,r,n.body!==void 0?n.body:null,{headers:a,context:n.context,params:c,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache})}let s=_(i).pipe(Pt(a=>this.handler.handle(a)));if(t instanceof Wo||n.observe==="events")return s;let l=s.pipe(vt(a=>a instanceof Yo));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return l.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return l.pipe(A(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return l.pipe(A(a=>a.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new Rt().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,n={}){return this.request("PATCH",t,Zi(n,r))}post(t,r,n={}){return this.request("POST",t,Zi(n,r))}put(t,r,n={}){return this.request("PUT",t,Zi(n,r))}static{this.\u0275fac=function(r){return new(r||e)(B(Go))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Ph=/^\)\]\}',?\n/,Lh="X-Request-URL";function Il(e){if(e.url)return e.url;let o=Lh.toLocaleLowerCase();return e.headers.get(o)}var Bh=(()=>{class e{constructor(){this.fetchImpl=p(es,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t)),this.ngZone=p(Se)}handle(t){return new Ii(r=>{let n=new AbortController;return this.doRequest(t,n.signal,r).then(ts,i=>r.error(new Et({error:i}))),()=>n.abort()})}doRequest(t,r,n){return Mi(this,null,function*(){let i=this.createRequestInit(t),s;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,g({signal:r},i)));Nh(h),n.next({type:Tt.Sent}),s=yield h}catch(h){n.error(new Et({error:h,status:h.status??0,statusText:h.statusText,url:t.urlWithParams,headers:h.headers}));return}let l=new pt(s.headers),a=s.statusText,c=Il(s)??t.urlWithParams,d=s.status,u=null;if(t.reportProgress&&n.next(new cn({headers:l,status:d,statusText:a,url:c})),s.body){let h=s.headers.get("content-length"),C=[],b=s.body.getReader(),k=0,Q,ie,V=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Mi(this,null,function*(){for(;;){let{done:Le,value:ot}=yield b.read();if(Le)break;if(C.push(ot),k+=ot.length,t.reportProgress){ie=t.responseType==="text"?(ie??"")+(Q??=new TextDecoder).decode(ot,{stream:!0}):void 0;let Ft=()=>n.next({type:Tt.DownloadProgress,total:h?+h:void 0,loaded:k,partialText:ie});V?V.run(Ft):Ft()}}}));let ge=this.concatChunks(C,k);try{let Le=s.headers.get("Content-Type")??"";u=this.parseBody(t,ge,Le)}catch(Le){n.error(new Et({error:Le,headers:new pt(s.headers),status:s.status,statusText:s.statusText,url:Il(s)??t.urlWithParams}));return}}d===0&&(d=u?$l:0),d>=200&&d<300?(n.next(new Yo({body:u,headers:l,status:d,statusText:a,url:c})),n.complete()):n.error(new Et({error:u,headers:l,status:d,statusText:a,url:c}))})}parseBody(t,r,n){switch(t.responseType){case"json":let i=new TextDecoder().decode(r).replace(Ph,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:n});case"arraybuffer":return r.buffer}}createRequestInit(t){let r={},n=t.withCredentials?"include":void 0;if(t.headers.forEach((i,s)=>r[i]=s.join(",")),t.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let i=t.detectContentTypeHeader();i!==null&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:n}}concatChunks(t,r){let n=new Uint8Array(r),i=0;for(let s of t)n.set(s,i),i+=s.length;return n}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),es=class{};function ts(){}function Nh(e){e.then(ts,ts)}function Vh(e,o){return o(e)}function zh(e,o,t){return(r,n)=>Ye(t,()=>o(r,i=>e(i,n)))}var Fl=new L(""),Uh=new L(""),jh=new L("",{providedIn:"root",factory:()=>!0});var Al=(()=>{class e extends Go{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=p(jr),this.contributeToStability=p(jh)}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Fl),...this.injector.get(Uh,[])]));this.chain=r.reduceRight((n,i)=>zh(n,i,this.injector),Vh)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe(Jt(()=>this.pendingTasks.remove(r)))}else return this.chain(t,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||e)(B(ln),B(eo))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();var Hh=/^\)\]\}',?\n/;function Wh(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Ol=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new W(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?ke(r.\u0275loadImpl()):_(null)).pipe(Ve(()=>new Ii(i=>{let s=r.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((b,k)=>s.setRequestHeader(b,k.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let b=t.detectContentTypeHeader();b!==null&&s.setRequestHeader("Content-Type",b)}if(t.responseType){let b=t.responseType.toLowerCase();s.responseType=b!=="json"?b:"text"}let l=t.serializeBody(),a=null,c=()=>{if(a!==null)return a;let b=s.statusText||"OK",k=new pt(s.getAllResponseHeaders()),Q=Wh(s)||t.url;return a=new cn({headers:k,status:s.status,statusText:b,url:Q}),a},d=()=>{let{headers:b,status:k,statusText:Q,url:ie}=c(),V=null;k!==$h&&(V=typeof s.response>"u"?s.responseText:s.response),k===0&&(k=V?$l:0);let ge=k>=200&&k<300;if(t.responseType==="json"&&typeof V=="string"){let Le=V;V=V.replace(Hh,"");try{V=V!==""?JSON.parse(V):null}catch(ot){V=Le,ge&&(ge=!1,V={error:ot,text:V})}}ge?(i.next(new Yo({body:V,headers:b,status:k,statusText:Q,url:ie||void 0})),i.complete()):i.error(new Et({error:V,headers:b,status:k,statusText:Q,url:ie||void 0}))},u=b=>{let{url:k}=c(),Q=new Et({error:b,status:s.status||0,statusText:s.statusText||"Unknown Error",url:k||void 0});i.error(Q)},f=!1,h=b=>{f||(i.next(c()),f=!0);let k={type:Tt.DownloadProgress,loaded:b.loaded};b.lengthComputable&&(k.total=b.total),t.responseType==="text"&&s.responseText&&(k.partialText=s.responseText),i.next(k)},C=b=>{let k={type:Tt.UploadProgress,loaded:b.loaded};b.lengthComputable&&(k.total=b.total),i.next(k)};return s.addEventListener("load",d),s.addEventListener("error",u),s.addEventListener("timeout",u),s.addEventListener("abort",u),t.reportProgress&&(s.addEventListener("progress",h),l!==null&&s.upload&&s.upload.addEventListener("progress",C)),s.send(l),i.next({type:Tt.Sent}),()=>{s.removeEventListener("error",u),s.removeEventListener("abort",u),s.removeEventListener("load",d),s.removeEventListener("timeout",u),t.reportProgress&&(s.removeEventListener("progress",h),l!==null&&s.upload&&s.upload.removeEventListener("progress",C)),s.readyState!==s.DONE&&s.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(B(sn))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Pl=new L(""),Gh="XSRF-TOKEN",qh=new L("",{providedIn:"root",factory:()=>Gh}),Yh="X-XSRF-TOKEN",Xh=new L("",{providedIn:"root",factory:()=>Yh}),dn=class{},Kh=(()=>{class e{constructor(t,r,n){this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=tn(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(B(ne),B(Me),B(qh))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function Zh(e,o){let t=e.url.toLowerCase();if(!p(Pl)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return o(e);let r=p(dn).getToken(),n=p(Xh);return r!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,r)})),o(e)}function Ll(...e){let o=[Fh,Ol,Al,{provide:Go,useExisting:Al},{provide:ln,useFactory:()=>p(Bh,{optional:!0})??p(Ol)},{provide:Fl,useValue:Zh,multi:!0},{provide:Pl,useValue:!0},{provide:dn,useClass:Kh}];for(let t of e)o.push(...t.\u0275providers);return lt(o)}var is=class extends kl{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ss=class e extends is{static makeCurrent(){xl(new e)}onAndCancel(o,t,r){return o.addEventListener(t,r),()=>{o.removeEventListener(t,r)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=eg();return t==null?null:tg(t)}resetBaseElement(){Xo=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return tn(document.cookie,o)}},Xo=null;function eg(){return Xo=Xo||document.querySelector("base"),Xo?Xo.getAttribute("href"):null}function tg(e){return new URL(e,document.baseURI).pathname}var og=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),as=new L(""),zl=(()=>{class e{constructor(t,r){this._zone=r,this._eventNameToPlugin=new Map,t.forEach(n=>{n.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,n){return this._findPluginFor(r).addEventListener(t,r,n)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new W(5101,!1);return this._eventNameToPlugin.set(t,r),r}static{this.\u0275fac=function(r){return new(r||e)(B(as),B(Se))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),un=class{constructor(o){this._doc=o}},rs="ng-app-id",Ul=(()=>{class e{constructor(t,r,n,i={}){this.doc=t,this.appId=r,this.nonce=n,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=fo(i),this.resetHostNodes()}addStyles(t){for(let r of t)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(t){for(let r of t)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(r=>r.remove()),t.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let r of this.getAllStyles())this.addStyleToHost(t,r)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let r of this.hostNodes)this.addStyleToHost(r,t)}onStyleRemoved(t){let r=this.styleRef;r.get(t)?.elements?.forEach(n=>n.remove()),r.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${rs}="${this.appId}"]`);if(t?.length){let r=new Map;return t.forEach(n=>{n.textContent!=null&&r.set(n.textContent,n)}),r}return null}changeUsageCount(t,r){let n=this.styleRef;if(n.has(t)){let i=n.get(t);return i.usage+=r,i.usage}return n.set(t,{usage:r,elements:[]}),r}getStyleElement(t,r){let n=this.styleNodesInDOM,i=n?.get(r);if(i?.parentNode===t)return n.delete(r),i.removeAttribute(rs),i;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=r,this.platformIsServer&&s.setAttribute(rs,this.appId),t.appendChild(s),s}}addStyleToHost(t,r){let n=this.getStyleElement(t,r),i=this.styleRef,s=i.get(r)?.elements;s?s.push(n):i.set(r,{elements:[n],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(r){return new(r||e)(B(ne),B(Vi),B(zi,8),B(Me))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),ns={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},cs=/%COMP%/g,jl="%COMP%",rg=`_nghost-${jl}`,ng=`_ngcontent-${jl}`,ig=!0,sg=new L("",{providedIn:"root",factory:()=>ig});function ag(e){return ng.replace(cs,e)}function lg(e){return rg.replace(cs,e)}function Hl(e,o){return o.map(t=>t.replace(cs,e))}var pn=(()=>{class e{constructor(t,r,n,i,s,l,a,c=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=l,this.ngZone=a,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=fo(l),this.defaultRenderer=new Ko(t,s,a,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Uo.ShadowDom&&(r=Y(g({},r),{encapsulation:Uo.Emulated}));let n=this.getOrCreateRenderer(t,r);return n instanceof fn?n.applyToHost(t):n instanceof Zo&&n.applyStyles(),n}getOrCreateRenderer(t,r){let n=this.rendererByCompId,i=n.get(r.id);if(!i){let s=this.doc,l=this.ngZone,a=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.platformIsServer;switch(r.encapsulation){case Uo.Emulated:i=new fn(a,c,r,this.appId,d,s,l,u);break;case Uo.ShadowDom:return new ls(a,c,t,r,s,l,this.nonce,u);default:i=new Zo(a,c,r,d,s,l,u);break}n.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(r){return new(r||e)(B(zl),B(Ul),B(Vi),B(sg),B(ne),B(Me),B(Se),B(zi))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Ko=class{constructor(o,t,r,n){this.eventManager=o,this.doc=t,this.ngZone=r,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(o,t){return t?this.doc.createElementNS(ns[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Bl(o)?o.content:o).appendChild(t)}insertBefore(o,t,r){o&&(Bl(o)?o.content:o).insertBefore(t,r)}removeChild(o,t){t.remove()}selectRootElement(o,t){let r=typeof o=="string"?this.doc.querySelector(o):o;if(!r)throw new W(-5104,!1);return t||(r.textContent=""),r}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,r,n){if(n){t=n+":"+t;let i=ns[n];i?o.setAttributeNS(i,t,r):o.setAttribute(t,r)}else o.setAttribute(t,r)}removeAttribute(o,t,r){if(r){let n=ns[r];n?o.removeAttributeNS(n,t):o.removeAttribute(`${r}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,r,n){n&(Ho.DashCase|Ho.Important)?o.style.setProperty(t,r,n&Ho.Important?"important":""):o.style[t]=r}removeStyle(o,t,r){r&Ho.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,r){o!=null&&(o[t]=r)}setValue(o,t){o.nodeValue=t}listen(o,t,r){if(typeof o=="string"&&(o=co().getGlobalEventTarget(this.doc,o),!o))throw new Error(`Unsupported event target ${o} for event ${t}`);return this.eventManager.addEventListener(o,t,this.decoratePreventDefault(r))}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(t)):o(t))===!1&&t.preventDefault()}}};function Bl(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var ls=class extends Ko{constructor(o,t,r,n,i,s,l,a){super(o,i,s,a),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Hl(n.id,n.styles);for(let d of c){let u=document.createElement("style");l&&u.setAttribute("nonce",l),u.textContent=d,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,r){return super.insertBefore(this.nodeOrShadowRoot(o),t,r)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Zo=class extends Ko{constructor(o,t,r,n,i,s,l,a){super(o,i,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=n,this.styles=a?Hl(a,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},fn=class extends Zo{constructor(o,t,r,n,i,s,l,a){let c=n+"-"+r.id;super(o,t,r,i,s,l,a,c),this.contentAttr=ag(c),this.hostAttr=lg(c)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let r=super.createElement(o,t);return super.setAttribute(r,this.contentAttr,""),r}},cg=(()=>{class e extends un{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,n){return t.addEventListener(r,n,!1),()=>this.removeEventListener(t,r,n)}removeEventListener(t,r,n){return t.removeEventListener(r,n)}static{this.\u0275fac=function(r){return new(r||e)(B(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Nl=["alt","control","meta","shift"],dg={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ug={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},pg=(()=>{class e extends un{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,n){let i=e.parseEventName(r),s=e.eventCallback(i.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>co().onAndCancel(t,i.domEventName,s))}static parseEventName(t){let r=t.toLowerCase().split("."),n=r.shift();if(r.length===0||!(n==="keydown"||n==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",l=r.indexOf("code");if(l>-1&&(r.splice(l,1),s="code."),Nl.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=i,r.length!=0||i.length===0)return null;let a={};return a.domEventName=n,a.fullKey=s,a}static matchEventFullKeyCode(t,r){let n=dg[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(n=t.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),Nl.forEach(s=>{if(s!==n){let l=ug[s];l(t)&&(i+=s+".")}}),i+=n,i===r)}static eventCallback(t,r,n){return i=>{e.matchEventFullKeyCode(i,t)&&n.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(r){return new(r||e)(B(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function Wl(e,o){return wl(g({rootComponent:e},fg(o)))}function fg(e){return{appProviders:[...vg,...e?.providers??[]],platformProviders:bg}}function hg(){ss.makeCurrent()}function gg(){return new Ni}function mg(){return tl(document),document}var bg=[{provide:Me,useValue:Sl},{provide:ol,useValue:hg,multi:!0},{provide:ne,useFactory:mg,deps:[]}];var vg=[{provide:el,useValue:"root"},{provide:Ni,useFactory:gg,deps:[]},{provide:as,useClass:cg,multi:!0,deps:[ne,Se,Me]},{provide:as,useClass:pg,multi:!0,deps:[ne]},pn,Ul,zl,{provide:Wr,useExisting:pn},{provide:sn,useClass:og,deps:[]},[]];var Gl=(()=>{class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(r){return new(r||e)(B(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var ds=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:function(r){let n=null;return r?n=new(r||e):n=B(yg),n},providedIn:"root"})}}return e})(),yg=(()=>{class e extends ds{constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case Lt.NONE:return r;case Lt.HTML:return ro(r,"HTML")?oo(r):dl(this._doc,String(r)).toString();case Lt.STYLE:return ro(r,"Style")?oo(r):r;case Lt.SCRIPT:if(ro(r,"Script"))return oo(r);throw new W(5200,!1);case Lt.URL:return ro(r,"URL")?oo(r):cl(String(r));case Lt.RESOURCE_URL:if(ro(r,"ResourceURL"))return oo(r);throw new W(5201,!1);default:throw new W(5202,!1)}}bypassSecurityTrustHtml(t){return nl(t)}bypassSecurityTrustStyle(t){return il(t)}bypassSecurityTrustScript(t){return sl(t)}bypassSecurityTrustUrl(t){return al(t)}bypassSecurityTrustResourceUrl(t){return ll(t)}static{this.\u0275fac=function(r){return new(r||e)(B(ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var T="primary",hr=Symbol("RouteTitle"),gs=class{constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t[0]:t}return null}getAll(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function yo(e){return new gs(e)}function wg(e,o,t){let r=t.path.split("/");if(r.length>e.length||t.pathMatch==="full"&&(o.hasChildren()||r.length<e.length))return null;let n={};for(let i=0;i<r.length;i++){let s=r[i],l=e[i];if(s[0]===":")n[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:e.slice(0,r.length),posParams:n}}function xg(e,o){if(e.length!==o.length)return!1;for(let t=0;t<e.length;++t)if(!nt(e[t],o[t]))return!1;return!0}function nt(e,o){let t=e?ms(e):void 0,r=o?ms(o):void 0;if(!t||!r||t.length!=r.length)return!1;let n;for(let i=0;i<t.length;i++)if(n=t[i],!ec(e[n],o[n]))return!1;return!0}function ms(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ec(e,o){if(Array.isArray(e)&&Array.isArray(o)){if(e.length!==o.length)return!1;let t=[...e].sort(),r=[...o].sort();return t.every((n,i)=>r[i]===n)}else return e===o}function tc(e){return e.length>0?e[e.length-1]:null}function Dt(e){return ja(e)?e:Qr(e)?ke(Promise.resolve(e)):_(e)}var kg={exact:rc,subset:nc},oc={exact:_g,subset:Sg,ignored:()=>!0};function ql(e,o,t){return kg[t.paths](e.root,o.root,t.matrixParams)&&oc[t.queryParams](e.queryParams,o.queryParams)&&!(t.fragment==="exact"&&e.fragment!==o.fragment)}function _g(e,o){return nt(e,o)}function rc(e,o,t){if(!Vt(e.segments,o.segments)||!mn(e.segments,o.segments,t)||e.numberOfChildren!==o.numberOfChildren)return!1;for(let r in o.children)if(!e.children[r]||!rc(e.children[r],o.children[r],t))return!1;return!0}function Sg(e,o){return Object.keys(o).length<=Object.keys(e).length&&Object.keys(o).every(t=>ec(e[t],o[t]))}function nc(e,o,t){return ic(e,o,o.segments,t)}function ic(e,o,t,r){if(e.segments.length>t.length){let n=e.segments.slice(0,t.length);return!(!Vt(n,t)||o.hasChildren()||!mn(n,t,r))}else if(e.segments.length===t.length){if(!Vt(e.segments,t)||!mn(e.segments,t,r))return!1;for(let n in o.children)if(!e.children[n]||!nc(e.children[n],o.children[n],r))return!1;return!0}else{let n=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!Vt(e.segments,n)||!mn(e.segments,n,r)||!e.children[T]?!1:ic(e.children[T],o,i,r)}}function mn(e,o,t){return o.every((r,n)=>oc[t](e[n].parameters,r.parameters))}var ht=class{constructor(o=new H([],{}),t={},r=null){this.root=o,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap??=yo(this.queryParams),this._queryParamMap}toString(){return Tg.serialize(this)}},H=class{constructor(o,t){this.segments=o,this.children=t,this.parent=null,Object.values(t).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bn(this)}},Nt=class{constructor(o,t){this.path=o,this.parameters=t}get parameterMap(){return this._parameterMap??=yo(this.parameters),this._parameterMap}toString(){return ac(this)}};function Eg(e,o){return Vt(e,o)&&e.every((t,r)=>nt(t.parameters,o[r].parameters))}function Vt(e,o){return e.length!==o.length?!1:e.every((t,r)=>t.path===o[r].path)}function Rg(e,o){let t=[];return Object.entries(e.children).forEach(([r,n])=>{r===T&&(t=t.concat(o(n,r)))}),Object.entries(e.children).forEach(([r,n])=>{r!==T&&(t=t.concat(o(n,r)))}),t}var Us=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>new nr,providedIn:"root"})}}return e})(),nr=class{parse(o){let t=new vs(o);return new ht(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(o){let t=`/${Qo(o.root,!0)}`,r=Ig(o.queryParams),n=typeof o.fragment=="string"?`#${Dg(o.fragment)}`:"";return`${t}${r}${n}`}},Tg=new nr;function bn(e){return e.segments.map(o=>ac(o)).join("/")}function Qo(e,o){if(!e.hasChildren())return bn(e);if(o){let t=e.children[T]?Qo(e.children[T],!1):"",r=[];return Object.entries(e.children).forEach(([n,i])=>{n!==T&&r.push(`${n}:${Qo(i,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}else{let t=Rg(e,(r,n)=>n===T?[Qo(e.children[T],!1)]:[`${n}:${Qo(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[T]!=null?`${bn(e)}/${t[0]}`:`${bn(e)}/(${t.join("//")})`}}function sc(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hn(e){return sc(e).replace(/%3B/gi,";")}function Dg(e){return encodeURI(e)}function bs(e){return sc(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function vn(e){return decodeURIComponent(e)}function Yl(e){return vn(e.replace(/\+/g,"%20"))}function ac(e){return`${bs(e.path)}${Mg(e.parameters)}`}function Mg(e){return Object.entries(e).map(([o,t])=>`;${bs(o)}=${bs(t)}`).join("")}function Ig(e){let o=Object.entries(e).map(([t,r])=>Array.isArray(r)?r.map(n=>`${hn(t)}=${hn(n)}`).join("&"):`${hn(t)}=${hn(r)}`).filter(t=>t);return o.length?`?${o.join("&")}`:""}var Ag=/^[^\/()?;#]+/;function us(e){let o=e.match(Ag);return o?o[0]:""}var Og=/^[^\/()?;=#]+/;function $g(e){let o=e.match(Og);return o?o[0]:""}var Fg=/^[^=?&#]+/;function Pg(e){let o=e.match(Fg);return o?o[0]:""}var Lg=/^[^&#]+/;function Bg(e){let o=e.match(Lg);return o?o[0]:""}var vs=class{constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new H([],{}):new H([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(o.length>0||Object.keys(t).length>0)&&(r[T]=new H(o,t)),r}parseSegment(){let o=us(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new W(4009,!1);return this.capture(o),new Nt(vn(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let t=$g(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let n=us(this.remaining);n&&(r=n,this.capture(r))}o[vn(t)]=vn(r)}parseQueryParam(o){let t=Pg(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let s=Bg(this.remaining);s&&(r=s,this.capture(r))}let n=Yl(t),i=Yl(r);if(o.hasOwnProperty(n)){let s=o[n];Array.isArray(s)||(s=[s],o[n]=s),s.push(i)}else o[n]=i}parseParens(o){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=us(this.remaining),n=this.remaining[r.length];if(n!=="/"&&n!==")"&&n!==";")throw new W(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):o&&(i=T);let s=this.parseChildren();t[i]=Object.keys(s).length===1?s[T]:new H([],s),this.consumeOptional("//")}return t}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new W(4011,!1)}};function lc(e){return e.segments.length>0?new H([],{[T]:e}):e}function cc(e){let o={};for(let[r,n]of Object.entries(e.children)){let i=cc(n);if(r===T&&i.segments.length===0&&i.hasChildren())for(let[s,l]of Object.entries(i.children))o[s]=l;else(i.segments.length>0||i.hasChildren())&&(o[r]=i)}let t=new H(e.segments,o);return Ng(t)}function Ng(e){if(e.numberOfChildren===1&&e.children[T]){let o=e.children[T];return new H(e.segments.concat(o.segments),o.children)}return e}function ir(e){return e instanceof ht}function Vg(e,o,t=null,r=null){let n=dc(e);return uc(n,o,t,r)}function dc(e){let o;function t(i){let s={};for(let a of i.children){let c=t(a);s[a.outlet]=c}let l=new H(i.url,s);return i===e&&(o=l),l}let r=t(e.root),n=lc(r);return o??n}function uc(e,o,t,r){let n=e;for(;n.parent;)n=n.parent;if(o.length===0)return ps(n,n,n,t,r);let i=zg(o);if(i.toRoot())return ps(n,n,new H([],{}),t,r);let s=Ug(i,n,e),l=s.processChildren?tr(s.segmentGroup,s.index,i.commands):fc(s.segmentGroup,s.index,i.commands);return ps(n,s.segmentGroup,l,t,r)}function yn(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function sr(e){return typeof e=="object"&&e!=null&&e.outlets}function ps(e,o,t,r,n){let i={};r&&Object.entries(r).forEach(([a,c])=>{i[a]=Array.isArray(c)?c.map(d=>`${d}`):`${c}`});let s;e===o?s=t:s=pc(e,o,t);let l=lc(cc(s));return new ht(l,i,n)}function pc(e,o,t){let r={};return Object.entries(e.children).forEach(([n,i])=>{i===o?r[n]=t:r[n]=pc(i,o,t)}),new H(e.segments,r)}var Cn=class{constructor(o,t,r){if(this.isAbsolute=o,this.numberOfDoubleDots=t,this.commands=r,o&&r.length>0&&yn(r[0]))throw new W(4003,!1);let n=r.find(sr);if(n&&n!==tc(r))throw new W(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zg(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Cn(!0,0,e);let o=0,t=!1,r=e.reduce((n,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let l={};return Object.entries(i.outlets).forEach(([a,c])=>{l[a]=typeof c=="string"?c.split("/"):c}),[...n,{outlets:l}]}if(i.segmentPath)return[...n,i.segmentPath]}return typeof i!="string"?[...n,i]:s===0?(i.split("/").forEach((l,a)=>{a==0&&l==="."||(a==0&&l===""?t=!0:l===".."?o++:l!=""&&n.push(l))}),n):[...n,i]},[]);return new Cn(t,o,r)}var mo=class{constructor(o,t,r){this.segmentGroup=o,this.processChildren=t,this.index=r}};function Ug(e,o,t){if(e.isAbsolute)return new mo(o,!0,0);if(!t)return new mo(o,!1,NaN);if(t.parent===null)return new mo(t,!0,0);let r=yn(e.commands[0])?0:1,n=t.segments.length-1+r;return jg(t,n,e.numberOfDoubleDots)}function jg(e,o,t){let r=e,n=o,i=t;for(;i>n;){if(i-=n,r=r.parent,!r)throw new W(4005,!1);n=r.segments.length}return new mo(r,!1,n-i)}function Hg(e){return sr(e[0])?e[0].outlets:{[T]:e}}function fc(e,o,t){if(e??=new H([],{}),e.segments.length===0&&e.hasChildren())return tr(e,o,t);let r=Wg(e,o,t),n=t.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new H(e.segments.slice(0,r.pathIndex),{});return i.children[T]=new H(e.segments.slice(r.pathIndex),e.children),tr(i,0,n)}else return r.match&&n.length===0?new H(e.segments,{}):r.match&&!e.hasChildren()?ys(e,o,t):r.match?tr(e,0,n):ys(e,o,t)}function tr(e,o,t){if(t.length===0)return new H(e.segments,{});{let r=Hg(t),n={};if(Object.keys(r).some(i=>i!==T)&&e.children[T]&&e.numberOfChildren===1&&e.children[T].segments.length===0){let i=tr(e.children[T],o,t);return new H(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(n[i]=fc(e.children[i],o,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(n[i]=s)}),new H(e.segments,n)}}function Wg(e,o,t){let r=0,n=o,i={match:!1,pathIndex:0,commandIndex:0};for(;n<e.segments.length;){if(r>=t.length)return i;let s=e.segments[n],l=t[r];if(sr(l))break;let a=`${l}`,c=r<t.length-1?t[r+1]:null;if(n>0&&a===void 0)break;if(a&&c&&typeof c=="object"&&c.outlets===void 0){if(!Kl(a,c,s))return i;r+=2}else{if(!Kl(a,{},s))return i;r++}n++}return{match:!0,pathIndex:n,commandIndex:r}}function ys(e,o,t){let r=e.segments.slice(0,o),n=0;for(;n<t.length;){let i=t[n];if(sr(i)){let a=Gg(i.outlets);return new H(r,a)}if(n===0&&yn(t[0])){let a=e.segments[o];r.push(new Nt(a.path,Xl(t[0]))),n++;continue}let s=sr(i)?i.outlets[T]:`${i}`,l=n<t.length-1?t[n+1]:null;s&&l&&yn(l)?(r.push(new Nt(s,Xl(l))),n+=2):(r.push(new Nt(s,{})),n++)}return new H(r,{})}function Gg(e){let o={};return Object.entries(e).forEach(([t,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(o[t]=ys(new H([],{}),0,r))}),o}function Xl(e){let o={};return Object.entries(e).forEach(([t,r])=>o[t]=`${r}`),o}function Kl(e,o,t){return e==t.path&&nt(o,t.parameters)}var or="imperative",ye=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ye||{}),Ue=class{constructor(o,t){this.id=o,this.url=t}},ar=class extends Ue{constructor(o,t,r="imperative",n=null){super(o,t),this.type=ye.NavigationStart,this.navigationTrigger=r,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zt=class extends Ue{constructor(o,t,r){super(o,t),this.urlAfterRedirects=r,this.type=ye.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},$e=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}($e||{}),Cs=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Cs||{}),ft=class extends Ue{constructor(o,t,r,n){super(o,t),this.reason=r,this.code=n,this.type=ye.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ut=class extends Ue{constructor(o,t,r,n){super(o,t),this.reason=r,this.code=n,this.type=ye.NavigationSkipped}},lr=class extends Ue{constructor(o,t,r,n){super(o,t),this.error=r,this.target=n,this.type=ye.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},wn=class extends Ue{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ws=class extends Ue{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xs=class extends Ue{constructor(o,t,r,n,i){super(o,t),this.urlAfterRedirects=r,this.state=n,this.shouldActivate=i,this.type=ye.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ks=class extends Ue{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_s=class extends Ue{constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n,this.type=ye.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ss=class{constructor(o){this.route=o,this.type=ye.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Es=class{constructor(o){this.route=o,this.type=ye.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Rs=class{constructor(o){this.snapshot=o,this.type=ye.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ts=class{constructor(o){this.snapshot=o,this.type=ye.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ds=class{constructor(o){this.snapshot=o,this.type=ye.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ms=class{constructor(o){this.snapshot=o,this.type=ye.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var cr=class{},Co=class{constructor(o,t){this.url=o,this.navigationBehaviorOptions=t}};function qg(e,o){return e.providers&&!e._injector&&(e._injector=ml(e.providers,o,`Route: ${e.path}`)),e._injector??o}function Qe(e){return e.outlet||T}function Yg(e,o){let t=e.filter(r=>Qe(r)===o);return t.push(...e.filter(r=>Qe(r)!==o)),t}function gr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let o=e.parent;o;o=o.parent){let t=o.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Is=class{get injector(){return gr(this.route?.snapshot)??this.rootInjector}set injector(o){}constructor(o){this.rootInjector=o,this.outlet=null,this.route=null,this.children=new Tn(this.rootInjector),this.attachRef=null}},Tn=(()=>{class e{constructor(t){this.rootInjector=t,this.contexts=new Map}onChildOutletCreated(t,r){let n=this.getOrCreateContext(t);n.outlet=r,this.contexts.set(t,n)}onChildOutletDestroyed(t){let r=this.getContext(t);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let r=this.getContext(t);return r||(r=new Is(this.rootInjector),this.contexts.set(t,r)),r}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(r){return new(r||e)(B(eo))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),xn=class{constructor(o){this._root=o}get root(){return this._root.value}parent(o){let t=this.pathFromRoot(o);return t.length>1?t[t.length-2]:null}children(o){let t=As(o,this._root);return t?t.children.map(r=>r.value):[]}firstChild(o){let t=As(o,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(o){let t=Os(o,this._root);return t.length<2?[]:t[t.length-2].children.map(n=>n.value).filter(n=>n!==o)}pathFromRoot(o){return Os(o,this._root).map(t=>t.value)}};function As(e,o){if(e===o.value)return o;for(let t of o.children){let r=As(e,t);if(r)return r}return null}function Os(e,o){if(e===o.value)return[o];for(let t of o.children){let r=Os(e,t);if(r.length)return r.unshift(o),r}return[]}var Oe=class{constructor(o,t){this.value=o,this.children=t}toString(){return`TreeNode(${this.value})`}};function go(e){let o={};return e&&e.children.forEach(t=>o[t.value.outlet]=t),o}var kn=class extends xn{constructor(o,t){super(o),this.snapshot=t,js(this,o)}toString(){return this.snapshot.toString()}};function hc(e){let o=Xg(e),t=new Be([new Nt("",{})]),r=new Be({}),n=new Be({}),i=new Be({}),s=new Be(""),l=new wo(t,r,i,s,n,T,e,o.root);return l.snapshot=o.root,new kn(new Oe(l,[]),o)}function Xg(e){let o={},t={},r={},n="",i=new bo([],o,r,n,t,T,e,null,{});return new Sn("",new Oe(i,[]))}var wo=class{constructor(o,t,r,n,i,s,l,a){this.urlSubject=o,this.paramsSubject=t,this.queryParamsSubject=r,this.fragmentSubject=n,this.dataSubject=i,this.outlet=s,this.component=l,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(A(c=>c[hr]))??_(void 0),this.url=o,this.params=t,this.queryParams=r,this.fragment=n,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(o=>yo(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(o=>yo(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function _n(e,o,t="emptyOnly"){let r,{routeConfig:n}=e;return o!==null&&(t==="always"||n?.path===""||!o.component&&!o.routeConfig?.loadComponent)?r={params:g(g({},o.params),e.params),data:g(g({},o.data),e.data),resolve:g(g(g(g({},e.data),o.data),n?.data),e._resolvedData)}:r={params:g({},e.params),data:g({},e.data),resolve:g(g({},e.data),e._resolvedData??{})},n&&mc(n)&&(r.resolve[hr]=n.title),r}var bo=class{get title(){return this.data?.[hr]}constructor(o,t,r,n,i,s,l,a,c){this.url=o,this.params=t,this.queryParams=r,this.fragment=n,this.data=i,this.outlet=s,this.component=l,this.routeConfig=a,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=yo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=yo(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(r=>r.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${t}')`}},Sn=class extends xn{constructor(o,t){super(t),this.url=o,js(this,t)}toString(){return gc(this._root)}};function js(e,o){o.value._routerState=e,o.children.forEach(t=>js(e,t))}function gc(e){let o=e.children.length>0?` { ${e.children.map(gc).join(", ")} } `:"";return`${e.value}${o}`}function fs(e){if(e.snapshot){let o=e.snapshot,t=e._futureSnapshot;e.snapshot=t,nt(o.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),o.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),nt(o.params,t.params)||e.paramsSubject.next(t.params),xg(o.url,t.url)||e.urlSubject.next(t.url),nt(o.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function $s(e,o){let t=nt(e.params,o.params)&&Eg(e.url,o.url),r=!e.parent!=!o.parent;return t&&!r&&(!e.parent||$s(e.parent,o.parent))}function mc(e){return typeof e.title=="string"||e.title===null}var Kg=(()=>{class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=T,this.activateEvents=new be,this.deactivateEvents=new be,this.attachEvents=new be,this.detachEvents=new be,this.parentContexts=p(Tn),this.location=p(Gr),this.changeDetector=p(Bt),this.inputBinder=p(Hs,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:r,previousValue:n}=t.name;if(r)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new W(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new W(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new W(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,r){this.activated=t,this._activatedRoute=r,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,r){if(this.isActivated)throw new W(4013,!1);this._activatedRoute=t;let n=this.location,s=t.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,a=new Fs(t,l,n.injector);this.activated=n.createComponent(s,{index:n.length,injector:a,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=ee({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[De]})}}return e})(),Fs=class e{__ngOutletInjector(o){return new e(this.route,this.childContexts,o)}constructor(o,t,r){this.route=o,this.childContexts=t,this.parent=r}get(o,t){return o===wo?this.route:o===Tn?this.childContexts:this.parent.get(o,t)}},Hs=new L("");function Zg(e,o,t){let r=dr(e,o._root,t?t._root:void 0);return new kn(r,o)}function dr(e,o,t){if(t&&e.shouldReuseRoute(o.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=o.value;let n=Qg(e,o,t);return new Oe(r,n)}else{if(e.shouldAttach(o.value)){let i=e.retrieve(o.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=o.value,s.children=o.children.map(l=>dr(e,l)),s}}let r=Jg(o.value),n=o.children.map(i=>dr(e,i));return new Oe(r,n)}}function Qg(e,o,t){return o.children.map(r=>{for(let n of t.children)if(e.shouldReuseRoute(r.value,n.value.snapshot))return dr(e,r,n);return dr(e,r)})}function Jg(e){return new wo(new Be(e.url),new Be(e.params),new Be(e.queryParams),new Be(e.fragment),new Be(e.data),e.outlet,e.component,e)}var ur=class{constructor(o,t){this.redirectTo=o,this.navigationBehaviorOptions=t}},bc="ngNavigationCancelingError";function En(e,o){let{redirectTo:t,navigationBehaviorOptions:r}=ir(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,n=vc(!1,$e.Redirect);return n.url=t,n.navigationBehaviorOptions=r,n}function vc(e,o){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[bc]=!0,t.cancellationCode=o,t}function em(e){return yc(e)&&ir(e.url)}function yc(e){return!!e&&e[bc]}var tm=(e,o,t,r)=>A(n=>(new Ps(o,n.targetRouterState,n.currentRouterState,t,r).activate(e),n)),Ps=class{constructor(o,t,r,n,i){this.routeReuseStrategy=o,this.futureState=t,this.currState=r,this.forwardEvent=n,this.inputBindingEnabled=i}activate(o){let t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,o),fs(this.futureState.root),this.activateChildRoutes(t,r,o)}deactivateChildRoutes(o,t,r){let n=go(t);o.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,n[s],r),delete n[s]}),Object.values(n).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(o,t,r){let n=o.value,i=t?t.value:null;if(n===i)if(n.component){let s=r.getContext(n.outlet);s&&this.deactivateChildRoutes(o,t,s.children)}else this.deactivateChildRoutes(o,t,r);else i&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(o,t){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,t):this.deactivateRouteAndOutlet(o,t)}detachAndStoreRouteSubtree(o,t){let r=t.getContext(o.value.outlet),n=r&&o.value.component?r.children:t,i=go(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,n);if(r&&r.outlet){let s=r.outlet.detach(),l=r.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:s,route:o,contexts:l})}}deactivateRouteAndOutlet(o,t){let r=t.getContext(o.value.outlet),n=r&&o.value.component?r.children:t,i=go(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,n);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(o,t,r){let n=go(t);o.children.forEach(i=>{this.activateRoutes(i,n[i.value.outlet],r),this.forwardEvent(new Ms(i.value.snapshot))}),o.children.length&&this.forwardEvent(new Ts(o.value.snapshot))}activateRoutes(o,t,r){let n=o.value,i=t?t.value:null;if(fs(n),n===i)if(n.component){let s=r.getOrCreateContext(n.outlet);this.activateChildRoutes(o,t,s.children)}else this.activateChildRoutes(o,t,r);else if(n.component){let s=r.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let l=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),fs(l.route.value),this.activateChildRoutes(o,null,s.children)}else s.attachRef=null,s.route=n,s.outlet&&s.outlet.activateWith(n,s.injector),this.activateChildRoutes(o,null,s.children)}else this.activateChildRoutes(o,null,r)}},Rn=class{constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},vo=class{constructor(o,t){this.component=o,this.route=t}};function om(e,o,t){let r=e._root,n=o?o._root:null;return Jo(r,n,t,[r.value])}function rm(e){let o=e.routeConfig?e.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:e,guards:o}}function ko(e,o){let t=Symbol(),r=o.get(e,t);return r===t?typeof e=="function"&&!Qa(e)?e:o.get(e):r}function Jo(e,o,t,r,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=go(o);return e.children.forEach(s=>{nm(s,i[s.value.outlet],t,r.concat([s.value]),n),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,l])=>rr(l,t.getContext(s),n)),n}function nm(e,o,t,r,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=o?o.value:null,l=t?t.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let a=im(s,i,i.routeConfig.runGuardsAndResolvers);a?n.canActivateChecks.push(new Rn(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Jo(e,o,l?l.children:null,r,n):Jo(e,o,t,r,n),a&&l&&l.outlet&&l.outlet.isActivated&&n.canDeactivateChecks.push(new vo(l.outlet.component,s))}else s&&rr(o,l,n),n.canActivateChecks.push(new Rn(r)),i.component?Jo(e,null,l?l.children:null,r,n):Jo(e,null,t,r,n);return n}function im(e,o,t){if(typeof t=="function")return t(e,o);switch(t){case"pathParamsChange":return!Vt(e.url,o.url);case"pathParamsOrQueryParamsChange":return!Vt(e.url,o.url)||!nt(e.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!$s(e,o)||!nt(e.queryParams,o.queryParams);case"paramsChange":default:return!$s(e,o)}}function rr(e,o,t){let r=go(e),n=e.value;Object.entries(r).forEach(([i,s])=>{n.component?o?rr(s,o.children.getContext(i),t):rr(s,null,t):rr(s,o,t)}),n.component?o&&o.outlet&&o.outlet.isActivated?t.canDeactivateChecks.push(new vo(o.outlet.component,n)):t.canDeactivateChecks.push(new vo(null,n)):t.canDeactivateChecks.push(new vo(null,n))}function mr(e){return typeof e=="function"}function sm(e){return typeof e=="boolean"}function am(e){return e&&mr(e.canLoad)}function lm(e){return e&&mr(e.canActivate)}function cm(e){return e&&mr(e.canActivateChild)}function dm(e){return e&&mr(e.canDeactivate)}function um(e){return e&&mr(e.canMatch)}function Cc(e){return e instanceof Ha||e?.name==="EmptyError"}var gn=Symbol("INITIAL_VALUE");function xo(){return Ve(e=>$i(e.map(o=>o.pipe(Qt(1),Ka(gn)))).pipe(A(o=>{for(let t of o)if(t!==!0){if(t===gn)return gn;if(t===!1||pm(t))return t}return!0}),vt(o=>o!==gn),Qt(1)))}function pm(e){return ir(e)||e instanceof ur}function fm(e,o){return Ne(t=>{let{targetSnapshot:r,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:s}}=t;return s.length===0&&i.length===0?_(Y(g({},t),{guardsResult:!0})):hm(s,r,n,e).pipe(Ne(l=>l&&sm(l)?gm(r,i,e,o):_(l)),A(l=>Y(g({},t),{guardsResult:l})))})}function hm(e,o,t,r){return ke(e).pipe(Ne(n=>Cm(n.component,n.route,t,o,r)),yt(n=>n!==!0,!0))}function gm(e,o,t,r){return ke(o).pipe(Pt(n=>Wa(bm(n.route.parent,r),mm(n.route,r),ym(e,n.path,t),vm(e,n.route,t))),yt(n=>n!==!0,!0))}function mm(e,o){return e!==null&&o&&o(new Ds(e)),_(!0)}function bm(e,o){return e!==null&&o&&o(new Rs(e)),_(!0)}function vm(e,o,t){let r=o.routeConfig?o.routeConfig.canActivate:null;if(!r||r.length===0)return _(!0);let n=r.map(i=>Fi(()=>{let s=gr(o)??t,l=ko(i,s),a=lm(l)?l.canActivate(o,e):Ye(s,()=>l(o,e));return Dt(a).pipe(yt())}));return _(n).pipe(xo())}function ym(e,o,t){let r=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(s=>rm(s)).filter(s=>s!==null).map(s=>Fi(()=>{let l=s.guards.map(a=>{let c=gr(s.node)??t,d=ko(a,c),u=cm(d)?d.canActivateChild(r,e):Ye(c,()=>d(r,e));return Dt(u).pipe(yt())});return _(l).pipe(xo())}));return _(i).pipe(xo())}function Cm(e,o,t,r,n){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return _(!0);let s=i.map(l=>{let a=gr(o)??n,c=ko(l,a),d=dm(c)?c.canDeactivate(e,o,t,r):Ye(a,()=>c(e,o,t,r));return Dt(d).pipe(yt())});return _(s).pipe(xo())}function wm(e,o,t,r){let n=o.canLoad;if(n===void 0||n.length===0)return _(!0);let i=n.map(s=>{let l=ko(s,e),a=am(l)?l.canLoad(o,t):Ye(e,()=>l(o,t));return Dt(a)});return _(i).pipe(xo(),wc(r))}function wc(e){return Ua(me(o=>{if(typeof o!="boolean")throw En(e,o)}),A(o=>o===!0))}function xm(e,o,t,r){let n=o.canMatch;if(!n||n.length===0)return _(!0);let i=n.map(s=>{let l=ko(s,e),a=um(l)?l.canMatch(o,t):Ye(e,()=>l(o,t));return Dt(a)});return _(i).pipe(xo(),wc(r))}var pr=class{constructor(o){this.segmentGroup=o||null}},fr=class extends Error{constructor(o){super(),this.urlTree=o}};function ho(e){return Vo(new pr(e))}function km(e){return Vo(new W(4e3,!1))}function _m(e){return Vo(vc(!1,$e.GuardRejected))}var Ls=class{constructor(o,t){this.urlSerializer=o,this.urlTree=t}lineralizeSegments(o,t){let r=[],n=t.root;for(;;){if(r=r.concat(n.segments),n.numberOfChildren===0)return _(r);if(n.numberOfChildren>1||!n.children[T])return km(`${o.redirectTo}`);n=n.children[T]}}applyRedirectCommands(o,t,r,n,i){if(typeof t!="string"){let l=t,{queryParams:a,fragment:c,routeConfig:d,url:u,outlet:f,params:h,data:C,title:b}=n,k=Ye(i,()=>l({params:h,data:C,queryParams:a,fragment:c,routeConfig:d,url:u,outlet:f,title:b}));if(k instanceof ht)throw new fr(k);t=k}let s=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),o,r);if(t[0]==="/")throw new fr(s);return s}applyRedirectCreateUrlTree(o,t,r,n){let i=this.createSegmentGroup(o,t.root,r,n);return new ht(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(o,t){let r={};return Object.entries(o).forEach(([n,i])=>{if(typeof i=="string"&&i[0]===":"){let l=i.substring(1);r[n]=t[l]}else r[n]=i}),r}createSegmentGroup(o,t,r,n){let i=this.createSegments(o,t.segments,r,n),s={};return Object.entries(t.children).forEach(([l,a])=>{s[l]=this.createSegmentGroup(o,a,r,n)}),new H(i,s)}createSegments(o,t,r,n){return t.map(i=>i.path[0]===":"?this.findPosParam(o,i,n):this.findOrReturn(i,r))}findPosParam(o,t,r){let n=r[t.path.substring(1)];if(!n)throw new W(4001,!1);return n}findOrReturn(o,t){let r=0;for(let n of t){if(n.path===o.path)return t.splice(r),n;r++}return o}},Bs={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Sm(e,o,t,r,n){let i=xc(e,o,t);return i.matched?(r=qg(o,r),xm(r,o,t,n).pipe(A(s=>s===!0?i:g({},Bs)))):_(i)}function xc(e,o,t){if(o.path==="**")return Em(t);if(o.path==="")return o.pathMatch==="full"&&(e.hasChildren()||t.length>0)?g({},Bs):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let n=(o.matcher||wg)(t,e,o);if(!n)return g({},Bs);let i={};Object.entries(n.posParams??{}).forEach(([l,a])=>{i[l]=a.path});let s=n.consumed.length>0?g(g({},i),n.consumed[n.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:n.consumed,remainingSegments:t.slice(n.consumed.length),parameters:s,positionalParamSegments:n.posParams??{}}}function Em(e){return{matched:!0,parameters:e.length>0?tc(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Zl(e,o,t,r){return t.length>0&&Dm(e,t,r)?{segmentGroup:new H(o,Tm(r,new H(t,e.children))),slicedSegments:[]}:t.length===0&&Mm(e,t,r)?{segmentGroup:new H(e.segments,Rm(e,t,r,e.children)),slicedSegments:t}:{segmentGroup:new H(e.segments,e.children),slicedSegments:t}}function Rm(e,o,t,r){let n={};for(let i of t)if(Dn(e,o,i)&&!r[Qe(i)]){let s=new H([],{});n[Qe(i)]=s}return g(g({},r),n)}function Tm(e,o){let t={};t[T]=o;for(let r of e)if(r.path===""&&Qe(r)!==T){let n=new H([],{});t[Qe(r)]=n}return t}function Dm(e,o,t){return t.some(r=>Dn(e,o,r)&&Qe(r)!==T)}function Mm(e,o,t){return t.some(r=>Dn(e,o,r))}function Dn(e,o,t){return(e.hasChildren()||o.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Im(e,o,t){return o.length===0&&!e.children[t]}var Ns=class{};function Am(e,o,t,r,n,i,s="emptyOnly"){return new Vs(e,o,t,r,n,s,i).recognize()}var Om=31,Vs=class{constructor(o,t,r,n,i,s,l){this.injector=o,this.configLoader=t,this.rootComponentType=r,this.config=n,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=l,this.applyRedirects=new Ls(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(o){return new W(4002,`'${o.segmentGroup}'`)}recognize(){let o=Zl(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(A(({children:t,rootSnapshot:r})=>{let n=new Oe(r,t),i=new Sn("",n),s=Vg(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(o){let t=new bo([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),T,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,T,t).pipe(A(r=>({children:r,rootSnapshot:t})),Zt(r=>{if(r instanceof fr)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof pr?this.noMatchError(r):r}))}processSegmentGroup(o,t,r,n,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(o,t,r,i):this.processSegment(o,t,r,r.segments,n,!0,i).pipe(A(s=>s instanceof Oe?[s]:[]))}processChildren(o,t,r,n){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return ke(i).pipe(Pt(s=>{let l=r.children[s],a=Yg(t,s);return this.processSegmentGroup(o,a,l,s,n)}),Xa((s,l)=>(s.push(...l),s)),Pi(null),Ya(),Ne(s=>{if(s===null)return ho(r);let l=kc(s);return $m(l),_(l)}))}processSegment(o,t,r,n,i,s,l){return ke(t).pipe(Pt(a=>this.processSegmentAgainstRoute(a._injector??o,t,a,r,n,i,s,l).pipe(Zt(c=>{if(c instanceof pr)return _(null);throw c}))),yt(a=>!!a),Zt(a=>{if(Cc(a))return Im(r,n,i)?_(new Ns):ho(r);throw a}))}processSegmentAgainstRoute(o,t,r,n,i,s,l,a){return Qe(r)!==s&&(s===T||!Dn(n,i,r))?ho(n):r.redirectTo===void 0?this.matchSegmentAgainstRoute(o,n,r,i,s,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(o,n,t,r,i,s,a):ho(n)}expandSegmentAgainstRouteUsingRedirect(o,t,r,n,i,s,l){let{matched:a,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:f}=xc(t,n,i);if(!a)return ho(t);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Om&&(this.allowRedirects=!1));let h=new bo(i,c,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Ql(n),Qe(n),n.component??n._loadedComponent??null,n,Jl(n)),C=_n(h,l,this.paramsInheritanceStrategy);h.params=Object.freeze(C.params),h.data=Object.freeze(C.data);let b=this.applyRedirects.applyRedirectCommands(d,n.redirectTo,u,h,o);return this.applyRedirects.lineralizeSegments(n,b).pipe(Ne(k=>this.processSegment(o,r,t,k.concat(f),s,!1,l)))}matchSegmentAgainstRoute(o,t,r,n,i,s){let l=Sm(t,r,n,o,this.urlSerializer);return r.path==="**"&&(t.children={}),l.pipe(Ve(a=>a.matched?(o=r._injector??o,this.getChildConfig(o,r,n).pipe(Ve(({routes:c})=>{let d=r._loadedInjector??o,{parameters:u,consumedSegments:f,remainingSegments:h}=a,C=new bo(f,u,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Ql(r),Qe(r),r.component??r._loadedComponent??null,r,Jl(r)),b=_n(C,s,this.paramsInheritanceStrategy);C.params=Object.freeze(b.params),C.data=Object.freeze(b.data);let{segmentGroup:k,slicedSegments:Q}=Zl(t,f,h,c);if(Q.length===0&&k.hasChildren())return this.processChildren(d,c,k,C).pipe(A(V=>new Oe(C,V)));if(c.length===0&&Q.length===0)return _(new Oe(C,[]));let ie=Qe(r)===i;return this.processSegment(d,c,k,Q,ie?T:i,!0,C).pipe(A(V=>new Oe(C,V instanceof Oe?[V]:[])))}))):ho(t)))}getChildConfig(o,t,r){return t.children?_({routes:t.children,injector:o}):t.loadChildren?t._loadedRoutes!==void 0?_({routes:t._loadedRoutes,injector:t._loadedInjector}):wm(o,t,r,this.urlSerializer).pipe(Ne(n=>n?this.configLoader.loadChildren(o,t).pipe(me(i=>{t._loadedRoutes=i.routes,t._loadedInjector=i.injector})):_m(t))):_({routes:[],injector:o})}};function $m(e){e.sort((o,t)=>o.value.outlet===T?-1:t.value.outlet===T?1:o.value.outlet.localeCompare(t.value.outlet))}function Fm(e){let o=e.value.routeConfig;return o&&o.path===""}function kc(e){let o=[],t=new Set;for(let r of e){if(!Fm(r)){o.push(r);continue}let n=o.find(i=>r.value.routeConfig===i.value.routeConfig);n!==void 0?(n.children.push(...r.children),t.add(n)):o.push(r)}for(let r of t){let n=kc(r.children);o.push(new Oe(r.value,n))}return o.filter(r=>!t.has(r))}function Ql(e){return e.data||{}}function Jl(e){return e.resolve||{}}function Pm(e,o,t,r,n,i){return Ne(s=>Am(e,o,t,r,s.extractedUrl,n,i).pipe(A(({state:l,tree:a})=>Y(g({},s),{targetSnapshot:l,urlAfterRedirects:a}))))}function Lm(e,o){return Ne(t=>{let{targetSnapshot:r,guards:{canActivateChecks:n}}=t;if(!n.length)return _(t);let i=new Set(n.map(a=>a.route)),s=new Set;for(let a of i)if(!s.has(a))for(let c of _c(a))s.add(c);let l=0;return ke(s).pipe(Pt(a=>i.has(a)?Bm(a,r,e,o):(a.data=_n(a,a.parent,e).resolve,_(void 0))),me(()=>l++),Li(1),Ne(a=>l===s.size?_(t):bt))})}function _c(e){let o=e.children.map(t=>_c(t)).flat();return[e,...o]}function Bm(e,o,t,r){let n=e.routeConfig,i=e._resolve;return n?.title!==void 0&&!mc(n)&&(i[hr]=n.title),Nm(i,e,o,r).pipe(A(s=>(e._resolvedData=s,e.data=_n(e,e.parent,t).resolve,null)))}function Nm(e,o,t,r){let n=ms(e);if(n.length===0)return _({});let i={};return ke(n).pipe(Ne(s=>Vm(e[s],o,t,r).pipe(yt(),me(l=>{if(l instanceof ur)throw En(new nr,l);i[s]=l}))),Li(1),qa(i),Zt(s=>Cc(s)?bt:Vo(s)))}function Vm(e,o,t,r){let n=gr(o)??r,i=ko(e,n),s=i.resolve?i.resolve(o,t):Ye(n,()=>i(o,t));return Dt(s)}function hs(e){return Ve(o=>{let t=e(o);return t?ke(t).pipe(A(()=>o)):_(o)})}var Sc=(()=>{class e{buildTitle(t){let r,n=t.root;for(;n!==void 0;)r=this.getResolvedTitleForRoute(n)??r,n=n.children.find(i=>i.outlet===T);return r}getResolvedTitleForRoute(t){return t.data[hr]}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(zm),providedIn:"root"})}}return e})(),zm=(()=>{class e extends Sc{constructor(t){super(),this.title=t}updateTitle(t){let r=this.buildTitle(t);r!==void 0&&this.title.setTitle(r)}static{this.\u0275fac=function(r){return new(r||e)(B(Gl))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ws=new L("",{providedIn:"root",factory:()=>({})}),Um=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=M({type:e,selectors:[["ng-component"]],standalone:!0,features:[I],decls:1,vars:0,template:function(r,n){r&1&&R(0,"router-outlet")},dependencies:[Kg],encapsulation:2})}}return e})();function Gs(e){let o=e.children&&e.children.map(Gs),t=o?Y(g({},e),{children:o}):g({},e);return!t.component&&!t.loadComponent&&(o||t.loadChildren)&&t.outlet&&t.outlet!==T&&(t.component=Um),t}var qs=new L(""),jm=(()=>{class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=p(qi)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return _(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=Dt(t.loadComponent()).pipe(A(Ec),me(i=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=i}),Jt(()=>{this.componentLoaders.delete(t)})),n=new Oi(r,()=>new qe).pipe(Ai());return this.componentLoaders.set(t,n),n}loadChildren(t,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return _({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=Hm(r,this.compiler,t,this.onLoadEndListener).pipe(Jt(()=>{this.childrenLoaders.delete(r)})),s=new Oi(i,()=>new qe).pipe(Ai());return this.childrenLoaders.set(r,s),s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Hm(e,o,t,r){return Dt(e.loadChildren()).pipe(A(Ec),Ne(n=>n instanceof gl||Array.isArray(n)?_(n):ke(o.compileModuleAsync(n))),A(n=>{r&&r(e);let i,s,l=!1;return Array.isArray(n)?(s=n,l=!0):(i=n.create(t).injector,s=i.get(qs,[],{optional:!0,self:!0}).flat()),{routes:s.map(Gs),injector:i}}))}function Wm(e){return e&&typeof e=="object"&&"default"in e}function Ec(e){return Wm(e)?e.default:e}var Ys=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(Gm),providedIn:"root"})}}return e})(),Gm=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,r){return t}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),qm=new L("");var Ym=new L(""),Xm=(()=>{class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new qe,this.transitionAbortSubject=new qe,this.configLoader=p(jm),this.environmentInjector=p(eo),this.urlSerializer=p(Us),this.rootContexts=p(Tn),this.location=p(en),this.inputBindingEnabled=p(Hs,{optional:!0})!==null,this.titleStrategy=p(Sc),this.options=p(Ws,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=p(Ys),this.createViewTransition=p(qm,{optional:!0}),this.navigationErrorHandler=p(Ym,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>_(void 0),this.rootComponentType=null;let t=n=>this.events.next(new Ss(n)),r=n=>this.events.next(new Es(n));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let r=++this.navigationId;this.transitions?.next(Y(g(g({},this.transitions.value),t),{id:r}))}setupNavigations(t,r,n){return this.transitions=new Be({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:or,restoredState:null,currentSnapshot:n.snapshot,targetSnapshot:null,currentRouterState:n,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(vt(i=>i.id!==0),A(i=>Y(g({},i),{extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),Ve(i=>{let s=!1,l=!1;return _(i).pipe(Ve(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",$e.SupersededByNewNavigation),bt;this.currentTransition=i,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?Y(g({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&d!=="reload"){let u="";return this.events.next(new Ut(a.id,this.urlSerializer.serialize(a.rawUrl),u,Cs.IgnoredSameUrlNavigation)),a.resolve(!1),bt}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return _(a).pipe(Ve(u=>{let f=this.transitions?.getValue();return this.events.next(new ar(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),f!==this.transitions?.getValue()?bt:Promise.resolve(u)}),Pm(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),me(u=>{i.targetSnapshot=u.targetSnapshot,i.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=Y(g({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let f=new wn(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:u,extractedUrl:f,source:h,restoredState:C,extras:b}=a,k=new ar(u,this.urlSerializer.serialize(f),h,C);this.events.next(k);let Q=hc(this.rootComponentType).snapshot;return this.currentTransition=i=Y(g({},a),{targetSnapshot:Q,urlAfterRedirects:f,extras:Y(g({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,_(i)}else{let u="";return this.events.next(new Ut(a.id,this.urlSerializer.serialize(a.extractedUrl),u,Cs.IgnoredByUrlHandlingStrategy)),a.resolve(!1),bt}}),me(a=>{let c=new ws(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),A(a=>(this.currentTransition=i=Y(g({},a),{guards:om(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i)),fm(this.environmentInjector,a=>this.events.next(a)),me(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw En(this.urlSerializer,a.guardsResult);let c=new xs(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(c)}),vt(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",$e.GuardRejected),!1)),hs(a=>{if(a.guards.canActivateChecks.length)return _(a).pipe(me(c=>{let d=new ks(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),Ve(c=>{let d=!1;return _(c).pipe(Lm(this.paramsInheritanceStrategy,this.environmentInjector),me({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",$e.NoDataFromResolver)}}))}),me(c=>{let d=new _s(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),hs(a=>{let c=d=>{let u=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(d.routeConfig).pipe(me(f=>{d.component=f}),A(()=>{})));for(let f of d.children)u.push(...c(f));return u};return $i(c(a.targetSnapshot.root)).pipe(Pi(null),Qt(1))}),hs(()=>this.afterPreactivation()),Ve(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return d?ke(d).pipe(A(()=>i)):_(i)}),A(a=>{let c=Zg(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=i=Y(g({},a),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,i}),me(()=>{this.events.next(new cr)}),tm(this.rootContexts,t.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),Qt(1),me({next:a=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new zt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{s=!0}}),Za(this.transitionAbortSubject.pipe(me(a=>{throw a}))),Jt(()=>{!s&&!l&&this.cancelNavigationTransition(i,"",$e.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Zt(a=>{if(l=!0,yc(a))this.events.next(new ft(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),em(a)?this.events.next(new Co(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new lr(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let d=Ye(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof ur){let{message:u,cancellationCode:f}=En(this.urlSerializer,d);this.events.next(new ft(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Co(d.redirectTo,d.navigationBehaviorOptions))}else{this.events.next(c);let u=t.errorHandler(a);i.resolve(!!u)}}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return bt}))}))}cancelNavigationTransition(t,r,n){let i=new ft(t.id,this.urlSerializer.serialize(t.extractedUrl),r,n);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Km(e){return e!==or}var Zm=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(Qm),providedIn:"root"})}}return e})(),zs=class{shouldDetach(o){return!1}store(o,t){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,t){return o.routeConfig===t.routeConfig}},Qm=(()=>{class e extends zs{static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})()}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Rc=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:()=>p(Jm),providedIn:"root"})}}return e})(),Jm=(()=>{class e extends Rc{constructor(){super(...arguments),this.location=p(en),this.urlSerializer=p(Us),this.options=p(Ws,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=p(Ys),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new ht,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=hc(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(r=>{r.type==="popstate"&&t(r.url,r.state)})}handleRouterEvent(t,r){if(t instanceof ar)this.stateMemento=this.createStateMemento();else if(t instanceof Ut)this.rawUrlTree=r.initialUrl;else if(t instanceof wn){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let n=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??n,r)}}else t instanceof cr?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):t instanceof ft&&(t.code===$e.GuardRejected||t.code===$e.NoDataFromResolver)?this.restoreHistory(r):t instanceof lr?this.restoreHistory(r,!0):t instanceof zt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,r){let n=t instanceof ht?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(n)||r.extras.replaceUrl){let i=this.browserPageId,s=g(g({},r.extras.state),this.generateNgRouterState(r.id,i));this.location.replaceState(n,"",s)}else{let i=g(g({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(n,"",i)}}restoreHistory(t,r=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,i=this.currentPageId-n;i!==0?this.location.historyGo(i):this.currentUrlTree===t.finalUrl&&i===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,r){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:r}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})()}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),er=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(er||{});function e0(e,o){e.events.pipe(vt(t=>t instanceof zt||t instanceof ft||t instanceof lr||t instanceof Ut),A(t=>t instanceof zt||t instanceof Ut?er.COMPLETE:(t instanceof ft?t.code===$e.Redirect||t.code===$e.SupersededByNewNavigation:!1)?er.REDIRECTING:er.FAILED),vt(t=>t!==er.REDIRECTING),Qt(1)).subscribe(()=>{o()})}function t0(e){throw e}var o0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},r0={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Tc=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=p(Zr),this.stateManager=p(Rc),this.options=p(Ws,{optional:!0})||{},this.pendingTasks=p(jr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=p(Xm),this.urlSerializer=p(Us),this.location=p(en),this.urlHandlingStrategy=p(Ys),this._events=new qe,this.errorHandler=this.options.errorHandler||t0,this.navigated=!1,this.routeReuseStrategy=p(Zm),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=p(qs,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!p(Hs,{optional:!0}),this.eventsSubscription=new za,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(r=>{try{let n=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(n!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof ft&&r.code!==$e.Redirect&&r.code!==$e.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof zt)this.navigated=!0;else if(r instanceof Co){let s=r.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(r.url,n.currentRawUrl),a=g({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Km(n.source)},s);this.scheduleNavigation(l,or,null,a,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}i0(r)&&this._events.next(r)}catch(n){this.navigationTransitions.transitionAbortSubject.next(n)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),or,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",r)},0)})}navigateToSyncWithBrowser(t,r,n){let i={replaceUrl:!0},s=n?.navigationId?n:null;if(n){let a=g({},n);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(i.state=a)}let l=this.parseUrl(t);this.scheduleNavigation(l,r,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Gs),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,r={}){let{relativeTo:n,queryParams:i,fragment:s,queryParamsHandling:l,preserveFragment:a}=r,c=a?this.currentUrlTree.fragment:s,d=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let f=n?n.snapshot:this.routerState.snapshot.root;u=dc(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return uc(u,t,d,c??null)}navigateByUrl(t,r={skipLocationChange:!1}){let n=ir(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(i,or,null,r)}navigate(t,r={skipLocationChange:!1}){return n0(t),this.navigateByUrl(this.createUrlTree(t,r),r)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,r){let n;if(r===!0?n=g({},o0):r===!1?n=g({},r0):n=r,ir(t))return ql(this.currentUrlTree,t,n);let i=this.parseUrl(t);return ql(this.currentUrlTree,i,n)}removeEmptyProps(t){return Object.entries(t).reduce((r,[n,i])=>(i!=null&&(r[n]=i),r),{})}scheduleNavigation(t,r,n,i,s){if(this.disposed)return Promise.resolve(!1);let l,a,c;s?(l=s.resolve,a=s.reject,c=s.promise):c=new Promise((u,f)=>{l=u,a=f});let d=this.pendingTasks.add();return e0(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:l,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(u=>Promise.reject(u))}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function n0(e){for(let o=0;o<e.length;o++)if(e[o]==null)throw new W(4008,!1)}function i0(e){return!(e instanceof cr)&&!(e instanceof Co)}var s0=new L("");function Dc(e,...o){return lt([{provide:qs,multi:!0,useValue:e},[],{provide:wo,useFactory:a0,deps:[Tc]},{provide:Gi,multi:!0,useFactory:l0},o.map(t=>t.\u0275providers)])}function a0(e){return e.routerState.root}function l0(){let e=p(jo);return o=>{let t=e.get(Jr);if(o!==t.components[0])return;let r=e.get(Tc),n=e.get(c0);e.get(d0)===1&&r.initialNavigation(),e.get(u0,null,Bi.Optional)?.setUpPreloading(),e.get(s0,null,Bi.Optional)?.init(),r.resetRootComponentType(t.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var c0=new L("",{factory:()=>new qe}),d0=new L("",{providedIn:"root",factory:()=>1});var u0=new L("");var Mc=[];var p0="@",f0=(()=>{class e{constructor(t,r,n,i,s){this.doc=t,this.delegate=r,this.zone=n,this.animationType=i,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=p(hl,{optional:!0}),this.loadingSchedulerFn=p(h0,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-27EO5TLY.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new W(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new Xs(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let l=s.createRenderer(t,r);i.use(l),this.scheduler?.notify(10)}).catch(s=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){Ui()}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Xs=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,r,n){this.delegate.insertBefore(o,t,r,n)}removeChild(o,t,r){this.delegate.removeChild(o,t,r)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,r,n){this.delegate.setAttribute(o,t,r,n)}removeAttribute(o,t,r){this.delegate.removeAttribute(o,t,r)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,r,n){this.delegate.setStyle(o,t,r,n)}removeStyle(o,t,r){this.delegate.removeStyle(o,t,r)}setProperty(o,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(o,t,r)),this.delegate.setProperty(o,t,r)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(o,t,r)),this.delegate.listen(o,t,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(p0)}},h0=new L("");function Ks(e="animations"){return ji("NgAsyncAnimations"),lt([{provide:Wr,useFactory:(o,t,r)=>new f0(o,t,r,e),deps:[ne,pn,Se]},{provide:rl,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}function g0(e){let o=e,t=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return r===0&&t%10===1&&t%100!==11?1:r===0&&t%10===Math.floor(t%10)&&t%10>=2&&t%10<=4&&!(t%100>=12&&t%100<=14)?3:r===0&&t%10===0||r===0&&t%10===Math.floor(t%10)&&t%10>=5&&t%10<=9||r===0&&t%100===Math.floor(t%100)&&t%100>=11&&t%100<=14?4:5}var Ic=["ru",[["AM","PM"],void 0,void 0],void 0,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],void 0,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y '\u0433'.","d MMMM y '\u0433'.","EEEE, d MMMM y '\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[void 0,"\u0440."],GEL:[void 0,"\u10DA"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",g0];var Nc=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(r){return new(r||e)(z(no),z(Ct))}}static{this.\u0275dir=ee({type:e})}}return e})(),m0=(()=>{class e extends Nc{static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})()}static{this.\u0275dir=ee({type:e,features:[O]})}}return e})(),ta=new L("");var b0={provide:ta,useExisting:zo(()=>Nn),multi:!0};function v0(){let e=co()?co().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var y0=new L(""),Nn=(()=>{class e extends Nc{constructor(t,r,n){super(t,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!v0())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(r){return new(r||e)(z(no),z(Ct),z(y0,8))}}static{this.\u0275dir=ee({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&X("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},features:[K([b0]),O]})}}return e})();var oa=new L(""),ra=new L("");function Vc(e){return e!=null}function zc(e){return Qr(e)?ke(e):e}function Uc(e){let o={};return e.forEach(t=>{o=t!=null?g(g({},o),t):o}),Object.keys(o).length===0?null:o}function jc(e,o){return o.map(t=>t(e))}function C0(e){return!e.validate}function Hc(e){return e.map(o=>C0(o)?o:t=>o.validate(t))}function w0(e){if(!e)return null;let o=e.filter(Vc);return o.length==0?null:function(t){return Uc(jc(t,o))}}function Wc(e){return e!=null?w0(Hc(e)):null}function x0(e){if(!e)return null;let o=e.filter(Vc);return o.length==0?null:function(t){let r=jc(t,o).map(zc);return Ga(r).pipe(A(Uc))}}function Gc(e){return e!=null?x0(Hc(e)):null}function Ac(e,o){return e===null?[o]:Array.isArray(e)?[...e,o]:[e,o]}function qc(e){return e._rawValidators}function Yc(e){return e._rawAsyncValidators}function Zs(e){return e?Array.isArray(e)?e:[e]:[]}function In(e,o){return Array.isArray(e)?e.includes(o):e===o}function Oc(e,o){let t=Zs(o);return Zs(e).forEach(n=>{In(t,n)||t.push(n)}),t}function $c(e,o){return Zs(o).filter(t=>!In(e,t))}var An=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Wc(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Gc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},jt=class extends An{get formDirective(){return null}get path(){return null}},Ht=class extends An{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},On=class{constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},k0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},QC=Y(g({},k0),{"[class.ng-submitted]":"isSubmitted"}),Xc=(()=>{class e extends On{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(z(Ht,2))}}static{this.\u0275dir=ee({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&xt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[O]})}}return e})(),Kc=(()=>{class e extends On{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(z(jt,10))}}static{this.\u0275dir=ee({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,n){r&2&&xt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[O]})}}return e})();var br="VALID",Mn="INVALID",_o="PENDING",vr="DISABLED",Mt=class{},$n=class extends Mt{constructor(o,t){super(),this.value=o,this.source=t}},yr=class extends Mt{constructor(o,t){super(),this.pristine=o,this.source=t}},Cr=class extends Mt{constructor(o,t){super(),this.touched=o,this.source=t}},So=class extends Mt{constructor(o,t){super(),this.status=o,this.source=t}},Qs=class extends Mt{constructor(o){super(),this.source=o}},Js=class extends Mt{constructor(o){super(),this.source=o}};function Zc(e){return(Vn(e)?e.validators:e)||null}function _0(e){return Array.isArray(e)?Wc(e):e||null}function Qc(e,o){return(Vn(o)?o.asyncValidators:e)||null}function S0(e){return Array.isArray(e)?Gc(e):e||null}function Vn(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function E0(e,o,t){let r=e.controls;if(!(o?Object.keys(r):r).length)throw new W(1e3,"");if(!r[t])throw new W(1001,"")}function R0(e,o,t){e._forEachChild((r,n)=>{if(t[n]===void 0)throw new W(1002,"")})}var Fn=class{constructor(o,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=re(()=>this.statusReactive()),this.statusReactive=G(void 0),this._pristine=re(()=>this.pristineReactive()),this.pristineReactive=G(!0),this._touched=re(()=>this.touchedReactive()),this.touchedReactive=G(!1),this._events=new qe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return j(this.statusReactive)}set status(o){j(()=>this.statusReactive.set(o))}get valid(){return this.status===br}get invalid(){return this.status===Mn}get pending(){return this.status==_o}get disabled(){return this.status===vr}get enabled(){return this.status!==vr}get pristine(){return j(this.pristineReactive)}set pristine(o){j(()=>this.pristineReactive.set(o))}get dirty(){return!this.pristine}get touched(){return j(this.touchedReactive)}set touched(o){j(()=>this.touchedReactive.set(o))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Oc(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Oc(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators($c(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators($c(o,this._rawAsyncValidators))}hasValidator(o){return In(this._rawValidators,o)}hasAsyncValidator(o){return In(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let r=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(Y(g({},o),{sourceControl:r})),t&&o.emitEvent!==!1&&this._events.next(new Cr(!0,r))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:r})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,r),t&&o.emitEvent!==!1&&this._events.next(new Cr(!1,r))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let r=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(Y(g({},o),{sourceControl:r})),t&&o.emitEvent!==!1&&this._events.next(new yr(!1,r))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,r),t&&o.emitEvent!==!1&&this._events.next(new yr(!0,r))}markAsPending(o={}){this.status=_o;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new So(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(Y(g({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=vr,this.errors=null,this._forEachChild(n=>{n.disable(Y(g({},o),{onlySelf:!0}))}),this._updateValue();let r=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new $n(this.value,r)),this._events.next(new So(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(g({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=br,this._forEachChild(r=>{r.enable(Y(g({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(Y(g({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(o,t){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===br||this.status===_o)&&this._runAsyncValidator(r,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new $n(this.value,t)),this._events.next(new So(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(Y(g({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vr:br}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=_o,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let r=zc(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,n)=>r&&r._find(n),this)}getError(o,t){let r=t?this.get(t):this;return r&&r.errors?r.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,r){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||r)&&this._events.next(new So(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,r)}_initObservables(){this.valueChanges=new be,this.statusChanges=new be}_calculateStatus(){return this._allControlsDisabled()?vr:this.errors?Mn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_o)?_o:this._anyControlsHaveStatus(Mn)?Mn:br}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let r=!this._anyControlsDirty(),n=this.pristine!==r;this.pristine=r,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,t),n&&this._events.next(new yr(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new Cr(this.touched,t)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,t)}_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Vn(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let t=this._parent&&this._parent.dirty;return!o&&!!t&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=_0(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=S0(this._rawAsyncValidators)}},Pn=class extends Fn{constructor(o,t,r){super(Zc(t),Qc(r,t)),this.controls=o,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(o,t){return this.controls[o]?this.controls[o]:(this.controls[o]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(o,t,r={}){this.registerControl(o,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(o,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(o,t,r={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],t&&this.registerControl(o,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,t={}){R0(this,!0,o),Object.keys(o).forEach(r=>{E0(this,!0,r),this.controls[r].setValue(o[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(o,t={}){o!=null&&(Object.keys(o).forEach(r=>{let n=this.controls[r];n&&n.patchValue(o[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(o={},t={}){this._forEachChild((r,n)=>{r.reset(o?o[n]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(o,t,r)=>(o[r]=t.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&o(r,t)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&o(r))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(t,r,n)=>((r.enabled||this.disabled)&&(t[n]=r.value),t))}_reduceChildren(o,t){let r=o;return this._forEachChild((n,i)=>{r=t(r,n,i)}),r}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var zn=new L("CallSetDisabledState",{providedIn:"root",factory:()=>Un}),Un="always";function Jc(e,o){return[...o.path,e]}function ea(e,o,t=Un){na(e,o),o.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(e.disabled),D0(e,o),I0(e,o),M0(e,o),T0(e,o)}function Fc(e,o,t=!0){let r=()=>{};o.valueAccessor&&(o.valueAccessor.registerOnChange(r),o.valueAccessor.registerOnTouched(r)),Bn(e,o),e&&(o._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Ln(e,o){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function T0(e,o){if(o.valueAccessor.setDisabledState){let t=r=>{o.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),o._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function na(e,o){let t=qc(e);o.validator!==null?e.setValidators(Ac(t,o.validator)):typeof t=="function"&&e.setValidators([t]);let r=Yc(e);o.asyncValidator!==null?e.setAsyncValidators(Ac(r,o.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let n=()=>e.updateValueAndValidity();Ln(o._rawValidators,n),Ln(o._rawAsyncValidators,n)}function Bn(e,o){let t=!1;if(e!==null){if(o.validator!==null){let n=qc(e);if(Array.isArray(n)&&n.length>0){let i=n.filter(s=>s!==o.validator);i.length!==n.length&&(t=!0,e.setValidators(i))}}if(o.asyncValidator!==null){let n=Yc(e);if(Array.isArray(n)&&n.length>0){let i=n.filter(s=>s!==o.asyncValidator);i.length!==n.length&&(t=!0,e.setAsyncValidators(i))}}}let r=()=>{};return Ln(o._rawValidators,r),Ln(o._rawAsyncValidators,r),t}function D0(e,o){o.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&ed(e,o)})}function M0(e,o){o.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&ed(e,o),e.updateOn!=="submit"&&e.markAsTouched()})}function ed(e,o){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function I0(e,o){let t=(r,n)=>{o.valueAccessor.writeValue(r),n&&o.viewToModelUpdate(r)};e.registerOnChange(t),o._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function A0(e,o){e==null,na(e,o)}function O0(e,o){return Bn(e,o)}function td(e,o){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function $0(e){return Object.getPrototypeOf(e.constructor)===m0}function F0(e,o){e._syncPendingControls(),o.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function od(e,o){if(!o)return null;Array.isArray(o);let t,r,n;return o.forEach(i=>{i.constructor===Nn?t=i:$0(i)?r=i:n=i}),n||r||t||null}function P0(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function Pc(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function Lc(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Eo=class extends Fn{constructor(o=null,t,r){super(Zc(t),Qc(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Vn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Lc(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Pc(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Pc(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Lc(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var L0=e=>e instanceof Eo;var B0={provide:Ht,useExisting:zo(()=>ia)},Bc=Promise.resolve(),ia=(()=>{class e extends Ht{constructor(t,r,n,i,s,l){super(),this._changeDetectorRef=s,this.callSetDisabledState=l,this.control=new Eo,this._registered=!1,this.name="",this.update=new be,this._parent=t,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=od(this,i)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),td(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ea(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Bc.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,n=r!==0&&U(r);Bc.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Jc(t,this._parent):[t]}static{this.\u0275fac=function(r){return new(r||e)(z(jt,9),z(oa,10),z(ra,10),z(ta,10),z(Bt,8),z(zn,8))}}static{this.\u0275dir=ee({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[K([B0]),O,De]})}}return e})();var rd=new L("");var N0={provide:jt,useExisting:zo(()=>sa)},sa=(()=>{class e extends jt{get submitted(){return j(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,r,n){super(),this.callSetDisabledState=n,this._submitted=re(()=>this._submittedReactive()),this._submittedReactive=G(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new be,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Bn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return ea(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){Fc(t.control||null,t,!1),P0(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this._submittedReactive.set(!0),F0(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Qs(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new Js(this.form))}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,n=this.form.get(t.path);r!==n&&(Fc(r||null,t),L0(n)&&(ea(n,t,this.callSetDisabledState),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);A0(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&O0(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){na(this.form,this),this._oldForm&&Bn(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(r){return new(r||e)(z(oa,10),z(ra,10),z(zn,8))}}static{this.\u0275dir=ee({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,n){r&1&&X("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[K([N0]),O,De]})}}return e})();var V0={provide:Ht,useExisting:zo(()=>aa)},aa=(()=>{class e extends Ht{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,r,n,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.name=null,this.update=new be,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=od(this,i)}ngOnChanges(t){this._added||this._setUpControl(),td(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Jc(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(r){return new(r||e)(z(jt,13),z(oa,10),z(ra,10),z(ta,10),z(rd,8))}}static{this.\u0275dir=ee({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[K([V0]),O,De]})}}return e})();var nd=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=ue({})}}return e})();var id=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:zn,useValue:t.callSetDisabledState??Un}]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=ue({imports:[nd]})}}return e})(),sd=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:rd,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:zn,useValue:t.callSetDisabledState??Un}]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=ue({imports:[nd]})}}return e})();function Wt(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function jn(e,o){if(e&&o){let t=r=>{Wt(e,r)||(e.classList?e.classList.add(r):e.className+=" "+r)};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Ro(e,o){if(e&&o){let t=r=>{e.classList?e.classList.remove(r):e.className=e.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function ld(){let e=window,o=document,t=o.documentElement,r=o.getElementsByTagName("body")[0],n=e.innerWidth||t.clientWidth||r.clientWidth,i=e.innerHeight||t.clientHeight||r.clientHeight;return{width:n,height:i}}function cd(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function dd(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function it(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return t}return 0}function Hn(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function ud(e){let o=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?o=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?o=e.el.nativeElement:o=e.el)),Hn(o)?o:void 0}function la(e,o){let t=ud(e);if(t)t.appendChild(o);else throw new Error("Cannot append "+o+" to "+e)}function ca(e,o={}){if(Hn(e)){let t=(r,n)=>{var i,s;let l=(i=e?.$attrs)!=null&&i[r]?[(s=e?.$attrs)==null?void 0:s[r]]:[];return[n].flat().reduce((a,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")a.push(c);else if(d==="object"){let u=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=u.length?a.concat(u.filter(f=>!!f)):a}}return a},l)};Object.entries(o).forEach(([r,n])=>{if(n!=null){let i=r.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),n):r==="p-bind"||r==="pBind"?ca(e,n):(n=r==="class"?[...new Set(t("class",n))].join(" ").trim():r==="style"?t("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=n),e.setAttribute(r,n))}})}}function pd(e,o){if(e){e.style.opacity="0";let t=+new Date,r="0",n=function(){r=`${+e.style.opacity+(new Date().getTime()-t)/o}`,e.style.opacity=r,t=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function Wn(e,o){return Hn(e)?e.matches(o)?e:e.querySelector(o):null}function da(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function fd(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function st(e,o){if(e){let t=e.offsetHeight;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return t}return 0}function ua(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function hd(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function gd(e,o){let t=ud(e);if(t)t.removeChild(o);else throw new Error("Cannot remove "+o+" from "+e)}function md(e,o="",t){Hn(e)&&t!==null&&t!==void 0&&e.setAttribute(o,t)}function bd(){let e=new Map;return{on(o,t){let r=e.get(o);return r?r.push(t):r=[t],e.set(o,r),this},off(o,t){let r=e.get(o);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(o,t){let r=e.get(o);r&&r.slice().map(n=>{n(t)})},clear(){e.clear()}}}var z0=Object.defineProperty,vd=Object.getOwnPropertySymbols,U0=Object.prototype.hasOwnProperty,j0=Object.prototype.propertyIsEnumerable,yd=(e,o,t)=>o in e?z0(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,H0=(e,o)=>{for(var t in o||(o={}))U0.call(o,t)&&yd(e,t,o[t]);if(vd)for(var t of vd(o))j0.call(o,t)&&yd(e,t,o[t]);return e};function Re(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function W0(e){return!!(e&&e.constructor&&e.call&&e.apply)}function te(e){return!Re(e)}function Je(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function je(e,...o){return W0(e)?e(...o):e}function It(e,o=!0){return typeof e=="string"&&(o||e!=="")}function Cd(e){return It(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Gn(e,o="",t={}){let r=Cd(o).split("."),n=r.shift();return n?Je(e)?Gn(je(e[Object.keys(e).find(i=>Cd(i)===n)||""],t),r.join("."),t):void 0:je(e,t)}function qn(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function wd(e){return te(e)&&!isNaN(e)}function Fe(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function wr(...e){let o=(t={},r={})=>{let n=H0({},t);return Object.keys(r).forEach(i=>{Je(r[i])&&i in t&&Je(t[i])?n[i]=o(t[i],r[i]):n[i]=r[i]}),n};return e.reduce((t,r,n)=>n===0?r:o(t,r),{})}function Gt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Yn(e){return It(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}function pa(e){return It(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}var Xn={};function qt(e="pui_id_"){return Xn.hasOwnProperty(e)||(Xn[e]=0),Xn[e]++,`${e}${Xn[e]}`}function G0(){let e=[],o=(s,l,a=999)=>{let c=n(s,l,a),d=c.value+(c.key===s?0:a)+1;return e.push({key:s,value:d}),d},t=s=>{e=e.filter(l=>l.value!==s)},r=(s,l)=>n(s,l).value,n=(s,l,a=0)=>[...e].reverse().find(c=>l?!0:c.key===s)||{key:s,value:a},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,l,a)=>{l&&(l.style.zIndex=String(o(s,!0,a)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:s=>r(s,!0)}}var aw=G0();var Ce=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var Kn=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(r){return new(r||e)(z(Hr))};static \u0275dir=ee({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return e})(),He=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=pe({type:e});static \u0275inj=ue({imports:[Ae]})}return e})();var q0=Object.defineProperty,Y0=Object.defineProperties,X0=Object.getOwnPropertyDescriptors,Zn=Object.getOwnPropertySymbols,Rd=Object.prototype.hasOwnProperty,Td=Object.prototype.propertyIsEnumerable,xd=(e,o,t)=>o in e?q0(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,tt=(e,o)=>{for(var t in o||(o={}))Rd.call(o,t)&&xd(e,t,o[t]);if(Zn)for(var t of Zn(o))Td.call(o,t)&&xd(e,t,o[t]);return e},fa=(e,o)=>Y0(e,X0(o)),mt=(e,o)=>{var t={};for(var r in e)Rd.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Zn)for(var r of Zn(e))o.indexOf(r)<0&&Td.call(e,r)&&(t[r]=e[r]);return t};function $(...e){return wr(...e)}var K0=bd(),We=K0;function kd(e,o){qn(e)?e.push(...o||[]):Je(e)&&Object.assign(e,o)}function Z0(e){return Je(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Q0(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ha(e="",o=""){return Q0(`${It(e,!1)&&It(o,!1)?`${e}-`:e}${o}`)}function Dd(e="",o=""){return`--${ha(e,o)}`}function J0(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function Md(e,o="",t="",r=[],n){if(It(e)){let i=/{([^}]*)}/g,s=e.trim();if(J0(s))return;if(Fe(s,i)){let l=s.replaceAll(i,d=>{let f=d.replace(/{|}/g,"").split(".").filter(h=>!r.some(C=>Fe(h,C)));return`var(${Dd(t,Yn(f.join("-")))}${te(n)?`, ${n}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Fe(l.replace(c,"0"),a)?`calc(${l})`:l}return s}else if(wd(e))return e}function eb(e,o,t){It(o,!1)&&e.push(`${o}:${t};`)}function To(e,o){return e?`${e}{${o}}`:""}function _d(e){return e.length===4?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:e}function Sd(e){var o=parseInt(e.substring(1),16),t=o>>16&255,r=o>>8&255,n=o&255;return{r:t,g:r,b:n}}function tb(e,o,t){return`#${e.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}`}var Id=(e,o,t)=>{e=_d(e),o=_d(o);var r=t/100,n=r*2-1,i=(n+1)/2,s=1-i,l=Sd(e),a=Sd(o),c=Math.round(l.r*i+a.r*s),d=Math.round(l.g*i+a.g*s),u=Math.round(l.b*i+a.b*s);return tb(c,d,u)},ob=(e,o)=>Id("#000000",e,o),rb=(e,o)=>Id("#ffffff",e,o),Ed=[50,100,200,300,400,500,600,700,800,900,950],F=e=>{if(/{([^}]*)}/g.test(e)){let o=e.replace(/{|}/g,"");return Ed.reduce((t,r)=>(t[r]=`{${o}.${r}}`,t),{})}return typeof e=="string"?Ed.reduce((o,t,r)=>(o[t]=r<=5?rb(e,(5-r)*19):ob(e,(r-5)*15),o),{}):e};var Do=(...e)=>nb(Z.getTheme(),...e),nb=(e={},o,t,r)=>{if(o){let{variable:n,options:i}=Z.defaults||{},{prefix:s,transform:l}=e?.options||i||{},c=Fe(o,/{([^}]*)}/g)?o:`{${o}}`;return r==="value"||Re(r)&&l==="strict"?Z.getTokenValue(o):Md(c,void 0,s,[n.excludedKeyRegex],t)}return""};function ib(e,o={}){let t=Z.defaults.variable,{prefix:r=t.prefix,selector:n=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=o,s=(c,d="")=>Object.entries(c).reduce((u,[f,h])=>{let C=Fe(f,i)?ha(d):ha(d,Yn(f)),b=Z0(h);if(Je(b)){let{variables:k,tokens:Q}=s(b,C);kd(u.tokens,Q),kd(u.variables,k)}else u.tokens.push((r?C.replace(`${r}-`,""):C).replaceAll("-",".")),eb(u.variables,Dd(C),Md(b,C,r,[i]));return u},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(e,r);return{value:l,tokens:a,declarations:l.join(""),css:To(n,l.join(""))}}var et={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var r;return(r=o.map(n=>n.resolve(t)).find(n=>n.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(e,o){return ib(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:r,defaults:n}){var i,s,l,a,c,d,u;let{preset:f,options:h}=o,C,b,k,Q,ie,V,ge;if(te(f)&&h.transform!=="strict"){let{primitive:Le,semantic:ot,extend:Ft}=f,Lo=ot||{},{colorScheme:Ir}=Lo,Ar=mt(Lo,["colorScheme"]),Or=Ft||{},{colorScheme:$r}=Or,Bo=mt(Or,["colorScheme"]),No=Ir||{},{dark:Fr}=No,Pr=mt(No,["dark"]),Lr=$r||{},{dark:Br}=Lr,Nr=mt(Lr,["dark"]),Vr=te(Le)?this._toVariables({primitive:Le},h):{},zr=te(Ar)?this._toVariables({semantic:Ar},h):{},Ur=te(Pr)?this._toVariables({light:Pr},h):{},La=te(Fr)?this._toVariables({dark:Fr},h):{},Ba=te(Bo)?this._toVariables({semantic:Bo},h):{},Na=te(Nr)?this._toVariables({light:Nr},h):{},Va=te(Br)?this._toVariables({dark:Br},h):{},[dh,uh]=[(i=Vr.declarations)!=null?i:"",Vr.tokens],[ph,fh]=[(s=zr.declarations)!=null?s:"",zr.tokens||[]],[hh,gh]=[(l=Ur.declarations)!=null?l:"",Ur.tokens||[]],[mh,bh]=[(a=La.declarations)!=null?a:"",La.tokens||[]],[vh,yh]=[(c=Ba.declarations)!=null?c:"",Ba.tokens||[]],[Ch,wh]=[(d=Na.declarations)!=null?d:"",Na.tokens||[]],[xh,kh]=[(u=Va.declarations)!=null?u:"",Va.tokens||[]];C=this.transformCSS(e,dh,"light","variable",h,r,n),b=uh;let _h=this.transformCSS(e,`${ph}${hh}`,"light","variable",h,r,n),Sh=this.transformCSS(e,`${mh}`,"dark","variable",h,r,n);k=`${_h}${Sh}`,Q=[...new Set([...fh,...gh,...bh])];let Eh=this.transformCSS(e,`${vh}${Ch}color-scheme:light`,"light","variable",h,r,n),Rh=this.transformCSS(e,`${xh}color-scheme:dark`,"dark","variable",h,r,n);ie=`${Eh}${Rh}`,V=[...new Set([...yh,...wh,...kh])],ge=je(f.css,{dt:Do})}return{primitive:{css:C,tokens:b},semantic:{css:k,tokens:Q},global:{css:ie,tokens:V},style:ge}},getPreset({name:e="",preset:o={},options:t,params:r,set:n,defaults:i,selector:s}){var l,a,c;let d,u,f;if(te(o)&&t.transform!=="strict"){let h=e.replace("-directive",""),C=o,{colorScheme:b,extend:k,css:Q}=C,ie=mt(C,["colorScheme","extend","css"]),V=k||{},{colorScheme:ge}=V,Le=mt(V,["colorScheme"]),ot=b||{},{dark:Ft}=ot,Lo=mt(ot,["dark"]),Ir=ge||{},{dark:Ar}=Ir,Or=mt(Ir,["dark"]),$r=te(ie)?this._toVariables({[h]:tt(tt({},ie),Le)},t):{},Bo=te(Lo)?this._toVariables({[h]:tt(tt({},Lo),Or)},t):{},No=te(Ft)?this._toVariables({[h]:tt(tt({},Ft),Ar)},t):{},[Fr,Pr]=[(l=$r.declarations)!=null?l:"",$r.tokens||[]],[Lr,Br]=[(a=Bo.declarations)!=null?a:"",Bo.tokens||[]],[Nr,Vr]=[(c=No.declarations)!=null?c:"",No.tokens||[]],zr=this.transformCSS(h,`${Fr}${Lr}`,"light","variable",t,n,i,s),Ur=this.transformCSS(h,Nr,"dark","variable",t,n,i,s);d=`${zr}${Ur}`,u=[...new Set([...Pr,...Br,...Vr])],f=je(Q,{dt:Do})}return{css:d,tokens:u,style:f}},getPresetC({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let{preset:s,options:l}=o,a=(i=s?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:a,options:l,params:t,set:r,defaults:n})},getPresetD({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let s=e.replace("-directive",""),{preset:l,options:a}=o,c=(i=l?.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:c,options:a,params:t,set:r,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,r){let{cssLayer:n}=o;return n?`@layer ${je(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){let s=this.getCommon({name:e,theme:o,params:t,set:n,defaults:i}),l=Object.entries(r).reduce((a,[c,d])=>a.push(`${c}="${d}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,d])=>{if(d?.css){let u=Gt(d?.css),f=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${f}" ${l}>${u}</style>`)}return a},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){var s;let l={name:e,theme:o,params:t,set:n,defaults:i},a=(s=e.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(r).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Gt(a)}</style>`:""},createTokens(e={},o,t="",r="",n={}){return Object.entries(e).forEach(([i,s])=>{let l=Fe(i,o.variable.excludedKeyRegex)?t:t?`${t}.${pa(i)}`:pa(i),a=r?`${r}.${i}`:i;Je(s)?this.createTokens(s,o,l,a,n):(n[l]||(n[l]={paths:[],computed(c,d={}){var u,f;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,d.binding):c&&c!=="none"?(f=this.paths.find(h=>h.scheme===c))==null?void 0:f.computed(c,d.binding):this.paths.map(h=>h.computed(h.scheme,d[h.scheme]))}}),n[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,d={}){let u=/{([^}]*)}/g,f=s;if(d.name=this.path,d.binding||(d.binding={}),Fe(s,u)){let C=s.trim().replaceAll(u,Q=>{var ie;let V=Q.replace(/{|}/g,""),ge=(ie=n[V])==null?void 0:ie.computed(c,d);return qn(ge)&&ge.length===2?`light-dark(${ge[0].value},${ge[1].value})`:ge?.value}),b=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,k=/var\([^)]+\)/g;f=Fe(C.replace(k,"0"),b)?`calc(${C})`:C}return Re(d.binding)&&delete d.binding,{colorScheme:c,path:this.path,paths:d,value:f.includes("undefined")?void 0:f}}}))}),n},getTokenValue(e,o,t){var r;let i=(a=>a.split(".").filter(d=>!Fe(d.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),s=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,l=[(r=e[i])==null?void 0:r.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let d=c,{colorScheme:u}=d,f=mt(d,["colorScheme"]);return a[u]=f,a},void 0)},getSelectorRule(e,o,t,r){return t==="class"||t==="attr"?To(te(o)?`${e}${o},${e} ${o}`:e,r):To(e,te(o)?To(o,r):r)},transformCSS(e,o,t,r,n={},i,s,l){if(te(o)){let{cssLayer:a}=n;if(r!=="style"){let c=this.getColorSchemeOption(n,s);o=t==="dark"?c.reduce((d,{type:u,selector:f})=>(te(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",o):this.getSelectorRule(f,l,u,o)),d),""):To(l??":root",o)}if(a){let c={name:"primeui",order:"primeui"};Je(a)&&(c.name=je(a.name,{name:e,type:r})),te(c.name)&&(o=To(`@layer ${c.name}`,o),i?.layerNames(c.name))}return o}return""}},Z={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=fa(tt({},o),{options:tt(tt({},this.defaults.options),o.options)}),this._tokens=et.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),We.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=fa(tt({},this.theme),{preset:e}),this._tokens=et.createTokens(e,this.defaults),this.clearLoadedStyleNames(),We.emit("preset:change",e),We.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=fa(tt({},this.theme),{options:e}),this.clearLoadedStyleNames(),We.emit("options:change",e),We.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return et.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return et.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPresetD(t)},getCustomPreset(e="",o,t,r){let n={name:e,preset:o,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPreset(n)},getLayerOrderCSS(e=""){return et.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",r){return et.transformCSS(e,o,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return et.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return et.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),We.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&We.emit("theme:load"))}};var sb=0,Ad=(()=>{class e{document=p(ne);use(t,r={}){let n=!1,i=t,s=null,{immediate:l=!0,manual:a=!1,name:c=`style_${++sb}`,id:d=void 0,media:u=void 0,nonce:f=void 0,first:h=!1,props:C={}}=r;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!s.isConnected){i=t,ca(s,{type:"text/css",media:u,nonce:f});let b=this.document.head;h&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),md(s,"data-primeng-style-id",c)}return s.textContent!==i&&(s.textContent=i),{id:d,name:c,el:s,css:i}}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Mo={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},ab=({dt:e})=>`
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
`,lb=({dt:e})=>`
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
`,oe=(()=>{class e{name="base";useStyle=p(Ad);theme=ab;css=lb;classes={};inlineStyles={};load=(t,r={},n=i=>i)=>{let i=n(je(t,{dt:Do}));return i?this.useStyle.use(Gt(i),g({name:this.name},r)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},r="")=>this.load(this.theme,t,(n="")=>Z.transformCSS(t.name||this.name,`${n}${r}`));getCommonTheme=t=>Z.getCommon(this.name,t);getComponentTheme=t=>Z.getComponent(this.name,t);getDirectiveTheme=t=>Z.getDirective(this.name,t);getPresetTheme=(t,r,n)=>Z.getCustomPreset(this.name,t,r,n);getLayerOrderThemeCSS=()=>Z.getLayerOrderCSS(this.name);getStyleSheet=(t="",r={})=>{if(this.css){let n=je(this.css,{dt:Do}),i=Gt(`${n}${t}`),s=Object.entries(r).reduce((l,[a,c])=>l.push(`${a}="${c}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${i}</style>`}return""};getCommonThemeStyleSheet=(t,r={})=>Z.getCommonStyleSheet(this.name,t,r);getThemeStyleSheet=(t,r={})=>{let n=[Z.getStyleSheet(this.name,t,r)];if(this.theme){let i=this.name==="base"?"global-style":`${this.name}-style`,s=je(this.theme,{dt:Do}),l=Gt(Z.transformCSS(i,s)),a=Object.entries(r).reduce((c,[d,u])=>c.push(`${d}="${u}"`)&&c,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${i}" ${a}>${l}</style>`)}return n.join("")};static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var cb=(()=>{class e{theme=G(void 0);isThemeChanged=!1;document=p(ne);baseStyle=p(oe);constructor(){ae(()=>{We.on("theme:change",t=>{j(()=>{this.isThemeChanged=!0,this.theme.set(t)})})},{allowSignalWrites:!0}),ae(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){Z.clearLoadedStyleNames(),We.clear()}onThemeChange(t){Z.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Z.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(t?.css,g({name:"primitive-variables"},s)),this.baseStyle.load(r?.css,g({name:"semantic-variables"},s)),this.baseStyle.load(n?.css,g({name:"global-variables"},s)),this.baseStyle.loadTheme(g({name:"global-style"},s),i),Z.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:r}=t||{};r&&this.theme.set(r)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),xr=(()=>{class e extends cb{ripple=G(!1);platformId=p(Me);inputStyle=G("outlined");inputVariant=G("outlined");overlayOptions={};csp=G({nonce:void 0});filterMatchModeOptions={text:[Ce.STARTS_WITH,Ce.CONTAINS,Ce.NOT_CONTAINS,Ce.ENDS_WITH,Ce.EQUALS,Ce.NOT_EQUALS],numeric:[Ce.EQUALS,Ce.NOT_EQUALS,Ce.LESS_THAN,Ce.LESS_THAN_OR_EQUAL_TO,Ce.GREATER_THAN,Ce.GREATER_THAN_OR_EQUAL_TO],date:[Ce.DATE_IS,Ce.DATE_IS_NOT,Ce.DATE_BEFORE,Ce.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new qe;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=g(g({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:r,ripple:n,inputStyle:i,theme:s,overlayOptions:l,translation:a}=t||{};r&&this.csp.set(r),n&&this.ripple.set(n),i&&this.inputStyle.set(i),l&&(this.overlayOptions=l),a&&this.setTranslation(a),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),db=new L("PRIME_NG_CONFIG");function Od(...e){let o=e?.map(r=>({provide:db,useValue:r,multi:!1})),t={provide:Wi,useFactory:r=>()=>e?.forEach(n=>r.setConfig(n)),deps:[xr],multi:!0};return lt([...o,t])}var $d={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
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
`};var Fd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
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
`};var Pd={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var Ld={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Bd={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var Nd={root:{borderRadius:"{content.border.radius}"}};var Vd={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var zd={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
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
`};var Ud={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var jd={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
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
`};var Hd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
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
`};var Wd={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
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
`};var Gd={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var qd={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var Yd={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var Xd={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var Kd={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Zd={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var Qd={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var Jd={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
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
`};var eu={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var tu={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var ou={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var ru={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var nu={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var iu={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var su={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var au={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var lu={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var cu={icon:{color:"{form.field.icon.color}"}};var du={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var uu={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var pu={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var fu={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var hu={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var gu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var mu={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var bu={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
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
`};var vu={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var yu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
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
`};var Cu={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var wu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var xu={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var ku={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var _u={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Su={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var Eu={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var Ru={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
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
`};var Tu={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Du={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var Mu={root:{outline:{width:"2px",color:"{content.background}"}}};var Iu={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var Au={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var Ou={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
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
`};var $u={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var Fu={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Pu={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var Lu={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Bu={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}};var Nu={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
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
`};var Vu={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
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
`};var zu={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var Uu={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var ju={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
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
`};var Hu={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var Wu={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Gu={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",contentBackground:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
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
`};var qu={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var Yu={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var Xu={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Ku={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Zu={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var Qu={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var Ju={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


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
`};var ep={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var tp={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var op={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var rp={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}};var np={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var ip={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var sp={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"0",info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var ap={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedBackground:"transparent",checkedShadow:"none"},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var lp={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
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
`};var cp={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}}};var dp={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var up={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var pp={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
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
`};var fp={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var hp={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var P=Y(g({},Bd),{components:{accordion:$d,autocomplete:Fd,avatar:Pd,badge:Ld,blockui:Nd,breadcrumb:Vd,button:zd,datepicker:Jd,card:Ud,carousel:jd,cascadeselect:Hd,checkbox:Wd,chip:Gd,colorpicker:qd,confirmdialog:Yd,confirmpopup:Xd,contextmenu:Kd,dataview:Qd,datatable:Zd,dialog:eu,divider:tu,dock:ou,drawer:ru,editor:nu,fieldset:iu,fileupload:su,iftalabel:du,floatlabel:au,galleria:lu,iconfield:cu,image:uu,imagecompare:pu,inlinemessage:fu,inplace:hu,inputchips:gu,inputgroup:mu,inputnumber:bu,inputotp:vu,inputtext:yu,knob:Cu,listbox:wu,megamenu:xu,menu:ku,menubar:_u,message:Su,metergroup:Eu,multiselect:Ru,orderlist:Tu,organizationchart:Du,overlaybadge:Mu,popover:Pu,paginator:Iu,password:$u,panel:Au,panelmenu:Ou,picklist:Fu,progressbar:Lu,progressspinner:Bu,radiobutton:Nu,rating:Vu,scrollpanel:Uu,select:ju,selectbutton:Hu,skeleton:Wu,slider:Gu,speeddial:qu,splitter:Xu,splitbutton:Yu,stepper:Ku,steps:Zu,tabmenu:Qu,tabs:Ju,tabview:ep,textarea:rp,tieredmenu:np,tag:tp,terminal:op,timeline:ip,togglebutton:ap,toggleswitch:lp,tree:up,treeselect:pp,treetable:fp,toast:sp,toolbar:cp,virtualscroller:hp,tooltip:dp,ripple:zu},css:({dt:e})=>`

    `});var Io=$(P,{semantic:{primary:F("{green}")}});_l(Ic);var gp={providers:[Cl({eventCoalescing:!0}),Dc(Mc),Ks(),Ja(id),Ks(),Ll(),Od({theme:{preset:Io,options:{darkModeSelector:!1}}})]};var mp=$(P,{semantic:{primary:F("{emerald}")}});var bp=$(P,{semantic:{primary:F("{lime}")}});var vp=$(P,{semantic:{primary:F("{orange}")}});var yp=$(P,{semantic:{primary:F("{amber}")}});var Cp=$(P,{semantic:{primary:F("{yellow}")}});var wp=$(P,{semantic:{primary:F("{teal}")}});var xp=$(P,{semantic:{primary:F("{cyan}")}});var kp=$(P,{semantic:{primary:F("{sky}")}});var _p=$(P,{semantic:{primary:F("{blue}")}});var Sp=$(P,{semantic:{primary:F("{indigo}")}});var Ep=$(P,{semantic:{primary:F("{violet}")}});var Rp=$(P,{semantic:{primary:F("{purple}")}});var Tp=$(P,{semantic:{primary:F("{fuchsia}")}});var Dp=$(P,{semantic:{primary:F("{pink}")}});var Mp=$(P,{semantic:{primary:F("{rose}")}});var Qn=[{name:"emerald",preset:mp,options:{darkModeSelector:".dark"}},{name:"green",preset:Io,options:{darkModeSelector:".dark"}},{name:"lime",preset:bp,options:{darkModeSelector:".dark"}},{name:"orange",preset:vp,options:{darkModeSelector:".dark"}},{name:"amber",preset:yp,options:{darkModeSelector:".dark"}},{name:"yellow",preset:Cp,options:{darkModeSelector:".dark"}},{name:"teal",preset:wp,options:{darkModeSelector:".dark"}},{name:"cyan",preset:xp,options:{darkModeSelector:".dark"}},{name:"sky",preset:kp,options:{darkModeSelector:".dark"}},{name:"blue",preset:_p,options:{darkModeSelector:".dark"}},{name:"indigo",preset:Sp,options:{darkModeSelector:".dark"}},{name:"violet",preset:Ep,options:{darkModeSelector:".dark"}},{name:"purple",preset:Rp,options:{darkModeSelector:".dark"}},{name:"fuchsia",preset:Tp,options:{darkModeSelector:".dark"}},{name:"pink",preset:Dp,options:{darkModeSelector:".dark"}},{name:"rose",preset:Mp,options:{darkModeSelector:".dark"}}];var he=class e{primeng=p(xr);open=G(!1);selectedMenu=G(void 0);selectedLink=G(void 0);selectedEditingLink=G(void 0);links=G(void 0);selectedPreset=G({name:"green",preset:Io,options:{darkModeSelector:!1}});resize=G(void 0);onLinksChanged(){let o=this.links();o&&(j(()=>{let t=this.selectedLink();t&&this.selectedLink.set(o.find(r=>r.id===t.id))}),localStorage.setItem("links",JSON.stringify(o)))}readStorageLinks(){let o=localStorage.getItem("links");if(!o){this.links.set([]);return}let t=JSON.parse(o);this.links.set(t)}onSelectedPresetChanged(){let o=this.selectedPreset();j(()=>{localStorage.setItem("preset",o.name),this.primeng.theme.set(o)})}readStoragePreset(){let o=localStorage.getItem("preset");if(!o){localStorage.setItem("preset","green");return}if(this.selectedPreset().name===o)return;let r=Qn.find(n=>n.name===o);r&&this.selectedPreset.set(r)}onOpenChanged(){let o=this.open();j(()=>{this.selectedMenu()&&!o&&(this.selectedMenu.set(void 0),this.selectedEditingLink.set(void 0))})}constructor(){ae(this.onLinksChanged.bind(this)),ae(this.onOpenChanged.bind(this)),ae(this.onSelectedPresetChanged.bind(this)),this.readStorageLinks(),this.readStoragePreset()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})};var Ip=(()=>{class e extends oe{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),de=(()=>{class e{document=p(ne);platformId=p(Me);el=p(Ct);injector=p(jo);cd=p(Bt);renderer=p(no);config=p(xr);baseComponentStyle=p(Ip);baseStyle=p(oe);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=qt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,r="",n={}){return Gn(t,r,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!fo(this.platformId)){let{dt:r}=t;r&&r.currentValue&&(this._loadScopedThemeStyles(r.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(r.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{Mo.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Mo.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Mo.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Mo.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Z.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,g({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(r?.css,g({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,g({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(g({name:"global-style"},this.styleOptions),i),Z.setLoadedStyleName("common")}if(!Z.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:r}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,g({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(g({name:`${this.componentStyle?.name}-style`},this.styleOptions),r),Z.setLoadedStyleName(this.componentStyle?.name)}if(!Z.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,g({name:"layer-order",first:!0},this.styleOptions)),Z.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:r}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(r,g({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Mo.clearLoadedStyleNames(),We.on("theme:change",t)}cx(t,r){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let r=this.componentStyle?.inlineStyles?.[t];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:g({},r)}get parent(){return this.parentInstance}static \u0275fac=function(r){return new(r||e)};static \u0275dir=ee({type:e,inputs:{dt:"dt"},standalone:!0,features:[K([Ip,oe]),De]})}return e})();var ga=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,r){t&&r&&(t.classList?t.classList.add(r):t.className+=" "+r)}static addMultipleClasses(t,r){if(t&&r)if(t.classList){let n=r.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=r.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,r){t&&r&&(t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,r){t&&r&&[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,r){return t&&r?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(r){return r!==t})}static find(t,r){return Array.from(t.querySelectorAll(r))}static findSingle(t,r){return this.isElement(t)?t.querySelector(r):null}static index(t){let r=t.parentNode.childNodes,n=0;for(var i=0;i<r.length;i++){if(r[i]==t)return n;r[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,r){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<n.length;s++){if(n[s]==t)return i;n[s].attributes&&n[s].attributes[r]&&n[s].nodeType==1&&i++}return-1}static appendOverlay(t,r,n="self"){n!=="self"&&t&&r&&this.appendChild(t,r)}static alignOverlay(t,r,n="self",i=!0){t&&r&&(i&&(t.style.minWidth=`${e.getOuterWidth(r)}px`),n==="self"?this.relativePosition(t,r):this.absolutePosition(t,r))}static relativePosition(t,r,n=!0){let i=ie=>{if(ie)return getComputedStyle(ie).getPropertyValue("position")==="relative"?ie:i(ie.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=r.offsetHeight,a=r.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),h=i(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},C,b;a.top+l+s.height>u.height?(C=a.top-h.top-s.height,t.style.transformOrigin="bottom",a.top+C<0&&(C=-1*a.top)):(C=l+a.top-h.top,t.style.transformOrigin="top");let k=a.left+s.width-u.width,Q=a.left-h.left;s.width>u.width?b=(a.left-h.left)*-1:k>0?b=Q-k:b=a.left-h.left,t.style.top=C+"px",t.style.left=b+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,r,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,l=i.width,a=r.offsetHeight,c=r.offsetWidth,d=r.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),h=this.getViewport(),C,b;d.top+a+s>h.height?(C=d.top+u-s,t.style.transformOrigin="bottom",C<0&&(C=u)):(C=a+d.top+u,t.style.transformOrigin="top"),d.left+l>h.width?b=Math.max(0,d.left+f+c-l):b=d.left+f,t.style.top=C+"px",t.style.left=b+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,r=[]){return t.parentNode===null?r:this.getParents(t.parentNode,r.concat([t.parentNode]))}static getScrollableParents(t){let r=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return i.test(a.getPropertyValue("overflow"))||i.test(a.getPropertyValue("overflowX"))||i.test(a.getPropertyValue("overflowY"))};for(let l of n){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let d of c){let u=this.findSingle(l,d);u&&s(u)&&r.push(u)}}l.nodeType!==9&&s(l)&&r.push(l)}}return r}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementDimensions(t){let r={};return t.style.visibility="hidden",t.style.display="block",r.width=t.offsetWidth,r.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",r}static scrollInView(t,r){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=t.getBoundingClientRect(),d=r.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-i-l,u=t.scrollTop,f=t.clientHeight,h=this.getOuterHeight(r);d<0?t.scrollTop=u+d:d+h>f&&(t.scrollTop=u+d-f+h)}static fadeIn(t,r){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/r,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,r){var n=1,i=50,s=r,l=i/s;let a=setInterval(()=>{n=n-l,n<=0&&(n=0,clearInterval(a)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,r){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(t,r)}static getOuterWidth(t,r){let n=t.offsetWidth;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let r=getComputedStyle(t);return parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)}static getHorizontalMargin(t){let r=getComputedStyle(t);return parseFloat(r.marginLeft)+parseFloat(r.marginRight)}static innerWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static width(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static getInnerHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),r}static getOuterHeight(t,r){let n=t.offsetHeight;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),r}static getWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),r}static getViewport(){let t=window,r=document,n=r.documentElement,i=r.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||i.clientWidth,l=t.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:l}}static getOffset(t){var r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,r){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(r,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,r=t.indexOf("MSIE ");if(r>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,r){if(this.isElement(r))r.appendChild(t);else if(r&&r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(t);else throw"Cannot append "+r+" to "+t}static removeChild(t,r){if(this.isElement(r))r.removeChild(t);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+r}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let r=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);let n=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let r=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=r,r}static invokeElementMethod(t,r,n){t[r].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),r=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:r[1]||"",version:r[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,r){t&&document.activeElement!==t&&t.focus(r)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,r=""){let n=this.find(t,this.getFocusableSelectorString(r)),i=[];for(let s of n){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(t,r=""){let n=this.findSingle(t,this.getFocusableSelectorString(r));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,r=""){let n=this.getFocusableElements(t,r);return n.length>0?n[0]:null}static getLastFocusableElement(t,r){let n=this.getFocusableElements(t,r);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,r=!1){let n=e.getFocusableElements(t),i=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);r?s==-1||s===0?i=n.length-1:i=s-1:s!=-1&&s!==n.length-1&&(i=s+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,r){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return r?.nextElementSibling;case"@prev":return r?.previousElementSibling;case"@parent":return r?.parentElement;case"@grandparent":return r?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,r){if(t){let n=t.getAttribute(r);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,r={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,r),i.append(...n),i}}static setAttribute(t,r="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(r,n)}static setAttributes(t,r={}){if(this.isElement(t)){let n=(i,s)=>{let l=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")a.push(c);else if(d==="object"){let u=Array.isArray(c)?n(i,c):Object.entries(c).map(([f,h])=>i==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=u.length?a.concat(u.filter(f=>!!f)):a}}return a},l)};Object.entries(r).forEach(([i,s])=>{if(s!=null){let l=i.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),s):i==="pBind"?this.setAttributes(t,s):(s=i==="class"?[...new Set(n("class",s))].join(" ").trim():i==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,r=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`):!1}}return e})(),Jn=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=ga.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};function ub(){let e=[],o=(i,s)=>{let l=e.length>0?e[e.length-1]:{key:i,value:s},a=l.value+(l.key===i?0:s)+2;return e.push({key:i,value:a}),a},t=i=>{e=e.filter(s=>s.value!==i)},r=()=>e.length>0?e[e.length-1].value:0,n=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:n,set:(i,s,l)=>{s&&(s.style.zIndex=String(o(i,l)))},clear:i=>{i&&(t(n(i)),i.style.zIndex="")},getCurrent:()=>r()}}var ei=ub();var pb=({dt:e})=>`
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
`,fb={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ap=(()=>{class e extends oe{name="tooltip";theme=pb;classes=fb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Op=(()=>{class e extends de{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:qt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=p(Ap);interactionInProgress=!1;constructor(t,r){super(),this.zone=t,this.viewContainer=r}ngAfterViewInit(){super.ngAfterViewInit(),po(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let r=this.el.nativeElement.querySelector(".p-component");r||(r=this.getTarget(this.el.nativeElement)),r.addEventListener("focus",this.focusListener),r.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=g(g({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Wt(t.relatedTarget,"p-tooltip")||Wt(t.relatedTarget,"p-tooltip-text")||Wt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?la(this.container,this.el.nativeElement):la(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",r=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),pd(this.container,250),this.getOption("tooltipZIndex")==="auto"?ei.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&ei.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof Hr){let r=this.viewContainer.createEmbeddedView(t);r.detectChanges(),r.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),r={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[n,i]of r[t].entries())if(n===0)i.call(this);else if(this.isOutOfBounds())i.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),r=t.left+cd(),n=t.top+dd();return{left:r,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?Wn(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,r=it(t),n=(st(t)-st(this.container))/2;this.alignTooltip(r,n)}alignLeft(){this.preAlign("left");let t=it(this.container),r=(st(this.el.nativeElement)-st(this.container))/2;this.alignTooltip(-t,r)}alignTop(){this.preAlign("top");let t=(it(this.el.nativeElement)-it(this.container))/2,r=st(this.container);this.alignTooltip(t,-r)}alignBottom(){this.preAlign("bottom");let t=(it(this.el.nativeElement)-it(this.container))/2,r=st(this.el.nativeElement);this.alignTooltip(t,r)}alignTooltip(t,r){let n=this.getHostOffset(),i=n.left+t,s=n.top+r;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=g(g({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Wt(t,"p-inputwrapper")?Wn(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let r="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?r+" "+this.getOption("tooltipStyleClass"):r}isOutOfBounds(){let t=this.container.getBoundingClientRect(),r=t.top,n=t.left,i=it(this.container),s=st(this.container),l=ld();return n+i>l.width||n<0||r<0||r+s>l.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Jn(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let r=this.el.nativeElement.querySelector(".p-component");r||(r=this.getTarget(this.el.nativeElement)),r.removeEventListener("focus",this.focusListener),r.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):gd(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&ei.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(r){return new(r||e)(z(Se),z(Gr))};static \u0275dir=ee({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",U],showDelay:[2,"showDelay","showDelay",St],hideDelay:[2,"hideDelay","hideDelay",St],life:[2,"life","life",St],positionTop:[2,"positionTop","positionTop",St],positionLeft:[2,"positionLeft","positionLeft",St],autoHide:[2,"autoHide","autoHide",U],fitContent:[2,"fitContent","fitContent",U],hideOnEscape:[2,"hideOnEscape","hideOnEscape",U],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},standalone:!0,features:[K([Ap]),Ie,O,De]})}return e})();var hb=["componentRef"];function gb(e,o){if(e&1&&R(0,"img",2),e&2){let t=S();y("src",t.icon,pl)("width",t._size==="m"?24:16)("height",t._size==="m"?24:16)}}function mb(e,o){if(e&1&&R(0,"img",3),e&2){let t=S();y("width",t._size==="m"?24:16)("height",t._size==="m"?24:16)}}var Ao=class e{link=ze.required();selected=ze(!1);size=ze("m");hovered=G(!1);componentRef=wt("componentRef");get icon(){return this.link().iconSrc}get _size(){return this.size()}get label(){return this.link().label}onMouseEnter(){this.hovered()||this.hovered.set(!0)}onMouseLeave(){this.hovered()&&this.hovered.set(!1)}onHoveredChanged(){let o=this.hovered();j(()=>{if(this.selected())return;let r=this.componentRef();if(!r)return;let n=r.nativeElement;if(o){n.style.background="var(--p-primary-200)";return}n.style.background="var(--p-primary-100)"})}onSelectedChanged(){let o=this.selected();j(()=>{let t=this.componentRef();if(!t)return;let r=t.nativeElement;o?r.style.background="var(--p-primary-500)":r.matches(":hover")?r.style.background="var(--p-primary-200)":r.style.background="var(--p-primary-100)"})}constructor(){ae(this.onHoveredChanged.bind(this)),ae(this.onSelectedChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-button"]],viewQuery:function(t,r){t&1&&kt(r.componentRef,hb,5),t&2&&ut()},inputs:{link:[1,"link"],selected:[1,"selected"],size:[1,"size"]},standalone:!0,features:[I],decls:4,vars:6,consts:[["componentRef",""],["tooltipPosition","right","showDelay","500",1,"container",3,"mouseenter","mouseleave","pTooltip"],[3,"src","width","height"],["src","image.svg",3,"width","height"]],template:function(t,r){if(t&1){let n=ve();w(0,"div",1,0),X("mouseenter",function(){return le(n),ce(r.onMouseEnter())})("mouseleave",function(){return le(n),ce(r.onMouseLeave())}),q(2,gb,1,3,"img",2)(3,mb,1,2,"img",3),x()}t&2&&(rt("width",r._size==="m"?"38px":"24px")("height",r._size==="m"?"38px":"24px"),y("pTooltip",r.label),v(2),se(r.icon?2:3))},dependencies:[Op],styles:[".container[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}"]})};var $p=[{id:"edit",iconSrc:"plus.svg",label:"",path:""},{id:"palette",iconSrc:"palette.svg",label:"",path:""}];var bb=["componentRef"],vb=(e,o)=>o.id;function yb(e,o){if(e&1){let t=ve();w(0,"app-button",3),X("click",function(){let n=le(t).$implicit,i=S();return ce(i.onClick(n.id))}),x()}if(e&2){let t=o.$implicit,r=S();y("link",t)("selected",r.selectedMenu()===t.id)}}var ti=class e{settings=p(he);SettingsLinks=$p;componentRef=wt("componentRef");selectedMenu=re(()=>{if(!this.settings.selectedEditingLink())return this.settings.selectedMenu()});onClick(o){if(this.settings.selectedEditingLink()){this.settings.selectedMenu.set(o),this.settings.selectedEditingLink.set(void 0);return}if(this.settings.selectedMenu()===o){this.settings.selectedMenu.set(void 0);return}this.settings.selectedMenu.set(o)}onSettingsOpen(){let o=this.settings.open();j(()=>{let t=this.componentRef()?.nativeElement;if(t){if(o){t.style.width=`${this.SettingsLinks.length*38}px`;return}t.style.width="0",this.settings.selectedMenu.set(void 0)}})}constructor(){ae(this.onSettingsOpen.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-settings-panel"]],viewQuery:function(t,r){t&1&&kt(r.componentRef,bb,5),t&2&&ut()},standalone:!0,features:[I],decls:4,vars:0,consts:[["componentRef",""],[1,"container"],[3,"link","selected"],[3,"click","link","selected"]],template:function(t,r){t&1&&(w(0,"div",1,0),io(2,yb,1,2,"app-button",2,vb),x()),t&2&&(v(2),so(r.SettingsLinks))},dependencies:[Ao],styles:["[_nghost-%COMP%]{position:absolute;left:calc(100% + 8px);z-index:10}.container[_ngcontent-%COMP%]{display:flex;background:var(--p-primary-100);transition:width .2s;border-radius:0 8px 0 0;width:0;overflow:hidden}"]})};var Cb=["componentRef"],oi=class e{settings=p(he);componentRef=wt("componentRef");hovered=G(!1);selected=G(!1);onMouseEnter(){this.hovered()||this.hovered.set(!0)}onMouseLeave(){this.hovered()&&this.hovered.set(!1)}onClick(){this.selected.update(o=>!o)}onHoveredChanged(){let o=this.hovered();j(()=>{if(this.selected())return;let r=this.componentRef()?.nativeElement;if(r){if(o){r.style.background="var(--p-primary-200)";return}r.style.background="var(--p-primary-100)"}})}onSelectedChanged(){let o=this.selected();j(()=>{let t=this.componentRef()?.nativeElement;t&&(o?(t.style.width="70px",t.style.background="var(--p-primary-500)",this.settings.open.set(!0)):(t.style.width="38px",this.settings.open.set(!1),t.matches(":hover")?t.style.background="var(--p-primary-200)":t.style.background="var(--p-primary-100)"))})}onSettingsOpenChanged(){this.settings.open()||j(()=>this.selected.set(!1))}constructor(){ae(this.onHoveredChanged.bind(this)),ae(this.onSelectedChanged.bind(this)),ae(this.onSettingsOpenChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-settings-button"]],viewQuery:function(t,r){t&1&&kt(r.componentRef,Cb,5),t&2&&ut()},standalone:!0,features:[I],decls:4,vars:2,consts:[["componentRef",""],[1,"container",3,"mouseenter","mouseleave","click"],["src","gear.svg","width","24","height","24"]],template:function(t,r){if(t&1){let n=ve();R(0,"app-settings-panel"),w(1,"div",1,0),X("mouseenter",function(){return le(n),ce(r.onMouseEnter())})("mouseleave",function(){return le(n),ce(r.onMouseLeave())})("click",function(){return le(n),ce(r.onClick())}),R(3,"img",2),x()}t&2&&(v(3),rt("color","var(--p-text-muted-color)"))},dependencies:[ti],styles:["[_nghost-%COMP%]{margin-top:auto;position:relative}.container[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background,width .2s;-webkit-user-select:none;user-select:none}"]})};var wb=(e,o)=>o.id,xb=e=>({id:e,iconSrc:"/edit.svg",label:"",path:""}),kb=()=>({id:"resizeButton",iconSrc:"reset-size.svg",label:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440",path:""});function _b(e,o){if(e&1){let t=ve();w(0,"div",2)(1,"app-button",4),X("click",function(){let n=le(t).$implicit,i=S();return ce(i.onClickLink(n))}),x(),Hi(2),w(3,"div",5)(4,"app-button",6),X("click",function(){let n=le(t).$implicit,i=S();return ce(i.onClickEditingLink(n))}),x()()()}if(e&2){let t,r,n=o.$implicit,i=S();v(),y("link",n)("selected",((t=i.selectedLink())==null?null:t.id)===n.id&&!i.selectedEditingLink());let s=_t(4,xb,n.id);v(3),y("link",s)("selected",((r=i.selectedEditingLink())==null?null:r.id)===n.id)}}function Sb(e,o){if(e&1){let t=ve();Hi(0),w(1,"app-button",7),X("click",function(){le(t);let n=S();return ce(n.onClickResizeButton())}),x()}if(e&2){let t=Kr(1,kb);v(),y("link",t)}}var ri=class e{settings=p(he);links=re(()=>this.settings.links());selectedLink=re(()=>this.settings.selectedLink());selectedEditingLink=re(()=>this.settings.selectedEditingLink());isResized=re(()=>this.settings.selectedMenu()?!1:!!this.settings.resize());onClickLink(o){let t=this.settings.selectedLink();if(this.settings.selectedEditingLink()){this.settings.selectedLink.set(o),this.settings.selectedEditingLink.set(void 0),this.settings.open.set(!1);return}if(!t||t.id!==o.id){this.settings.selectedLink.set(o);return}this.settings.selectedLink.set(void 0)}onClickEditingLink(o){if(this.settings.selectedEditingLink()?.id===o.id){this.settings.selectedEditingLink.set(void 0),this.settings.selectedMenu.set(void 0);return}this.settings.selectedEditingLink.set(o),this.settings.selectedMenu.set("edit")}onClickResizeButton(){window.dispatchEvent(new Event("resetsize"))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-navbar"]],standalone:!0,features:[I],decls:6,vars:1,consts:[[1,"container"],[1,"container__content"],[1,"container__content-button"],["size","s",1,"resize-button",3,"link"],[3,"click","link","selected"],[1,"container__content-edit-button"],["size","s",3,"click","link","selected"],["size","s",1,"resize-button",3,"click","link"]],template:function(t,r){t&1&&(w(0,"div",0)(1,"div",1),io(2,_b,5,6,"div",2,wb),x(),q(4,Sb,2,2,"app-button",3),R(5,"app-settings-button"),x()),t&2&&(v(2),so(r.links()),v(2),se(r.isResized()?4:-1))},dependencies:[oi,Ao],styles:["[_nghost-%COMP%]{height:100%;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.container__content[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;gap:8px;overflow:hidden}.container__content-button[_ngcontent-%COMP%]{position:relative}.container__content-edit-button[_ngcontent-%COMP%]{position:absolute;top:7px;left:46px}.resize-button[_ngcontent-%COMP%]{margin:0 auto 8px}"]})};var we=[];for(let e=0;e<256;++e)we.push((e+256).toString(16).slice(1));function Fp(e,o=0){return(we[e[o+0]]+we[e[o+1]]+we[e[o+2]]+we[e[o+3]]+"-"+we[e[o+4]]+we[e[o+5]]+"-"+we[e[o+6]]+we[e[o+7]]+"-"+we[e[o+8]]+we[e[o+9]]+"-"+we[e[o+10]]+we[e[o+11]]+we[e[o+12]]+we[e[o+13]]+we[e[o+14]]+we[e[o+15]]).toLowerCase()}var ma,Eb=new Uint8Array(16);function ba(){if(!ma){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ma=crypto.getRandomValues.bind(crypto)}return ma(Eb)}var Rb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),va={randomUUID:Rb};function Tb(e,o,t){if(va.randomUUID&&!o&&!e)return va.randomUUID();e=e||{};let r=e.random??e.rng?.()??ba();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,o){if(t=t||0,t<0||t+16>o.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);for(let n=0;n<16;++n)o[t+n]=r[n];return o}return Fp(r)}var kr=Tb;var Db=({dt:e})=>`
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
`,Mb={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Pp=(()=>{class e extends oe{name="progressspinner";theme=Db;classes=Mb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Lp=(()=>{class e extends de{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=p(Pp);static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},standalone:!0,features:[K([Pp]),O,I],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(r,n){r&1&&(w(0,"div",0),to(),w(1,"svg",1),R(2,"circle",2),x()()),r&2&&(y("ngStyle",n.style)("ngClass",n.styleClass),fe("aria-label",n.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),v(),rt("animation-duration",n.animationDuration),fe("data-pc-section","root"),v(),fe("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[Ae,uo,rn,He],encapsulation:2,changeDetection:0})}return e})();var Ib=()=>({width:"36px",height:"36px"});function Ab(e,o){if(e&1){let t=ve();w(0,"iframe",4),X("load",function(n){le(t);let i=S();return ce(i.onLoaded(n))}),x()}if(e&2){let t=S();y("src",t.src(),fl)}}function Ob(e,o){e&1&&R(0,"img",2)}function $b(e,o){e&1&&R(0,"p-progress-spinner",5),e&2&&qr(Kr(2,Ib))}var ni=class e{settings=p(he);sanitizer=p(ds);loading=G(!1);src=re(()=>{let o=this.settings.selectedLink()?.path;if(!o){j(()=>this.loading.set(!1));return}return o.indexOf("localhost")!==-1&&(o.at(-1)!=="/"&&(o=`${o}/`),o=`${o}?level=${kr()}`),j(()=>this.loading.set(!0)),this.sanitizer.bypassSecurityTrustResourceUrl(o)});onLoaded(o){!!o.target.src&&this.loading.set(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-iframe"]],standalone:!0,features:[I],decls:5,vars:4,consts:[[1,"container"],["width","100%","height","100%",1,"container__iframe",3,"src"],["src","resize.svg","width","16","height","16",1,"container__resize-icon"],["strokeWidth","5","fill","transparent","animationDuration",".5s",1,"container__loader",3,"style"],["width","100%","height","100%",1,"container__iframe",3,"load","src"],["strokeWidth","5","fill","transparent","animationDuration",".5s",1,"container__loader"]],template:function(t,r){t&1&&(w(0,"div",0),q(1,Ab,1,1,"iframe",1)(2,Ob,1,0,"img",2)(3,$b,1,3,"p-progress-spinner",3),R(4,"div"),x()),t&2&&(v(),se(r.src()?1:2),v(2),se(r.loading()?3:-1),v(),_e("container__loader-opacity "+r.loading()))},dependencies:[Lp],styles:["[_nghost-%COMP%]{flex:1;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;position:relative}.container__iframe[_ngcontent-%COMP%]{flex:1;background:#fff;border-radius:8px;border-width:0}.container__resize-icon[_ngcontent-%COMP%]{position:absolute;right:8px;bottom:8px}.container__loader[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 18px);top:calc(50% - 18px);z-index:2}.container__loader-opacity[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;background:var(--p-gray-400);border-radius:8px;opacity:0;z-index:-1;transition:opacity .3s}.container__loader-opacity.true[_ngcontent-%COMP%]{opacity:.5;z-index:1}"]})};var Bp=(()=>{class e extends de{autofocus=!1;_autofocus=!1;focused=!1;platformId=p(Me);document=p(ne);host=p(Ct);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){po(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=ga.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275dir=ee({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",U],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[Ie,O]})}return e})();var Fb=({dt:e})=>`
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
`,Pb={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":te(e.value)&&String(e.value).length===1,"p-badge-dot":Re(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Np=(()=>{class e extends oe{name="badge";theme=Fb;classes=Pb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var ya=(()=>{class e extends de{styleClass=ze();style=ze();badgeSize=ze();size=ze();severity=ze();value=ze();badgeDisabled=ze(!1,{transform:U});_componentStyle=p(Np);containerClass=re(()=>{let t="p-badge p-component";return te(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Re(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(r,n){r&2&&(qr(n.style()),_e(n.containerClass()),rt("display",n.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[K([Np]),O,I],decls:1,vars:1,template:function(r,n){r&1&&Ee(0),r&2&&lo(n.value())},dependencies:[Ae,He],encapsulation:2,changeDetection:0})}return e})(),Vp=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=pe({type:e});static \u0275inj=ue({imports:[ya,He,He]})}return e})();var Bb=`
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
`,Nb=(()=>{class e extends oe{name="baseicon";inlineStyles=Bb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Vb=["*"],ii=(()=>{class e extends de{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=Re(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",U],styleClass:"styleClass"},standalone:!0,features:[K([Nb]),Ie,O,I],ngContentSelectors:Vb,decls:1,vars:0,template:function(r,n){r&1&&(ct(),dt(0))},encapsulation:2,changeDetection:0})}return e})();var zp=(()=>{class e extends ii{pathId;ngOnInit(){this.pathId="url(#"+qt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["SpinnerIcon"]],standalone:!0,features:[O,I],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(r,n){r&1&&(to(),w(0,"svg",0)(1,"g"),R(2,"path",1),x(),w(3,"defs")(4,"clipPath",2),R(5,"rect",3),x()()()),r&2&&(_e(n.getClassNames()),fe("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),v(),fe("clip-path",n.pathId),v(3),y("id",n.pathId))},encapsulation:2})}return e})();var Up=(()=>{class e extends ii{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["TimesIcon"]],standalone:!0,features:[O,I],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(r,n){r&1&&(to(),w(0,"svg",0),R(1,"path",1),x()),r&2&&(_e(n.getClassNames()),fe("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var zb=({dt:e})=>`
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
`,Ub={root:"p-ink"},jp=(()=>{class e extends oe{name="ripple";theme=zb;classes=Ub;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var si=(()=>{class e extends de{zone=p(Se);_componentStyle=p(jp);animationListener;mouseDownListener;timeout;constructor(){super(),ae(()=>{po(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let r=this.getInk();if(!r||this.document.defaultView?.getComputedStyle(r,null).display==="none")return;if(Ro(r,"p-ink-active"),!da(r)&&!ua(r)){let l=Math.max(it(this.el.nativeElement),st(this.el.nativeElement));r.style.height=l+"px",r.style.width=l+"px"}let n=fd(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-ua(r)/2,s=t.pageY-n.top+this.document.body.scrollLeft-da(r)/2;this.renderer.setStyle(r,"top",s+"px"),this.renderer.setStyle(r,"left",i+"px"),jn(r,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Ro(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let r=0;r<t.length;r++)if(typeof t[r].className=="string"&&t[r].className.indexOf("p-ink")!==-1)return t[r];return null}resetInk(){let t=this.getInk();t&&Ro(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ro(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,hd(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=ee({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[K([jp]),O]})}return e})();var jb=({dt:e})=>`
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
`,Hb={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Hp=(()=>{class e extends oe{name="button";theme=jb;classes=Hb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Wb=["content"],Gb=["loading"],qb=["icon"],Yb=["*"],Wp=e=>({class:e});function Xb(e,o){e&1&&ao(0)}function Kb(e,o){if(e&1&&R(0,"span",8),e&2){let t=S(3);y("ngClass",t.iconClass()),fe("aria-hidden",!0)("data-pc-section","loadingicon")}}function Zb(e,o){if(e&1&&R(0,"SpinnerIcon",9),e&2){let t=S(3);y("styleClass",t.spinnerIconClass())("spin",!0),fe("aria-hidden",!0)("data-pc-section","loadingicon")}}function Qb(e,o){if(e&1&&(Yr(0),q(1,Kb,1,3,"span",6)(2,Zb,1,4,"SpinnerIcon",7),Xr()),e&2){let t=S(2);v(),y("ngIf",t.loadingIcon),v(),y("ngIf",!t.loadingIcon)}}function Jb(e,o){}function ev(e,o){if(e&1&&q(0,Jb,0,0,"ng-template",10),e&2){let t=S(2);y("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function tv(e,o){if(e&1&&(Yr(0),q(1,Qb,3,2,"ng-container",2)(2,ev,1,1,null,5),Xr()),e&2){let t=S();v(),y("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),v(),y("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",_t(3,Wp,t.iconClass()))}}function ov(e,o){if(e&1&&R(0,"span",8),e&2){let t=S(2);_e(t.icon),y("ngClass",t.iconClass()),fe("data-pc-section","icon")}}function rv(e,o){}function nv(e,o){if(e&1&&q(0,rv,0,0,"ng-template",10),e&2){let t=S(2);y("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function iv(e,o){if(e&1&&(Yr(0),q(1,ov,1,4,"span",11)(2,nv,1,1,null,5),Xr()),e&2){let t=S();v(),y("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),v(),y("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",_t(3,Wp,t.iconClass()))}}function sv(e,o){if(e&1&&(w(0,"span",12),Ee(1),x()),e&2){let t=S();fe("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),v(),lo(t.label)}}function av(e,o){if(e&1&&R(0,"p-badge",13),e&2){let t=S();y("value",t.badge)("severity",t.badgeSeverity)}}var Gp=(()=>{class e extends de{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new be;onFocus=new be;onBlur=new be;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([r,n])=>this[`_${r}`]!==n&&(this[`_${r}`]=n))}get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return Re(this.fluid)?!!r:this.fluid}_componentStyle=p(Hp);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:r}=t;if(r){let n=r.currentValue;for(let i in n)this[i]=n[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[r])=>t+` ${r}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-button"]],contentQueries:function(r,n,i){if(r&1&&(Xe(i,Wb,5),Xe(i,Gb,5),Xe(i,qb,5),Xe(i,Kn,4)),r&2){let s;Ke(s=Ze())&&(n.contentTemplate=s.first),Ke(s=Ze())&&(n.loadingIconTemplate=s.first),Ke(s=Ze())&&(n.iconTemplate=s.first),Ke(s=Ze())&&(n.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",U],loading:[2,"loading","loading",U],loadingIcon:"loadingIcon",raised:[2,"raised","raised",U],rounded:[2,"rounded","rounded",U],text:[2,"text","text",U],plain:[2,"plain","plain",U],severity:"severity",outlined:[2,"outlined","outlined",U],link:[2,"link","link",U],tabindex:[2,"tabindex","tabindex",St],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",U],fluid:[2,"fluid","fluid",U],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[K([Hp]),Ie,O,De,I],ngContentSelectors:Yb,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(r,n){r&1&&(ct(),w(0,"button",0),X("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),dt(1),q(2,Xb,1,0,"ng-container",1)(3,tv,3,5,"ng-container",2)(4,iv,3,5,"ng-container",2)(5,sv,2,3,"span",3)(6,av,1,2,"p-badge",4),x()),r&2&&(y("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),fe("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),v(2),y("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),v(),y("ngIf",n.loading),v(),y("ngIf",!n.loading),v(),y("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),v(),y("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[Ae,uo,on,nn,rn,si,Bp,zp,Vp,ya,He],encapsulation:2,changeDetection:0})}return e})();var lv=({dt:e})=>`
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
`,cv={root:({instance:e,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},qp=(()=>{class e extends oe{name="floatlabel";theme=lv;classes=cv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var dv=["*"],Yp=(()=>{class e extends de{_componentStyle=p(qp);variant="over";static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(r,n){r&2&&xt("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},standalone:!0,features:[K([qp]),O,I],ngContentSelectors:dv,decls:1,vars:0,template:function(r,n){r&1&&(ct(),dt(0))},dependencies:[Ae,He],encapsulation:2,changeDetection:0})}return e})();var uv=({dt:e})=>`
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
`,pv={root:({instance:e,props:o})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},Xp=(()=>{class e extends oe{name="inputtext";theme=uv;classes=pv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Kp=(()=>{class e extends de{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=p(Xp);get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return Re(this.fluid)?!!r:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(r){return new(r||e)(z(ia,8))};static \u0275dir=ee({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(r,n){r&1&&X("input",function(s){return n.onInput(s)}),r&2&&xt("p-filled",n.filled)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",U],pSize:"pSize"},standalone:!0,features:[K([Xp]),Ie,O]})}return e})();var fv=({dt:e})=>`
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
}`,hv={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Zp=(()=>{class e extends oe{name="message";theme=fv;classes=hv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var gv=["container"],mv=["icon"],bv=["closeicon"],vv=["*"],yv=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),Cv=e=>({value:"visible()",params:e}),wv=e=>({closeCallback:e});function xv(e,o){e&1&&ao(0)}function kv(e,o){if(e&1&&q(0,xv,1,0,"ng-container",7),e&2){let t=S(2);y("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function _v(e,o){if(e&1&&R(0,"i",3),e&2){let t=S(2);y("ngClass",t.icon)}}function Sv(e,o){if(e&1&&R(0,"span",9),e&2){let t=S(3);y("ngClass",t.cx("text"))("innerHTML",t.text,ul)}}function Ev(e,o){if(e&1&&(w(0,"div"),q(1,Sv,1,2,"span",8),x()),e&2){let t=S(2);v(),y("ngIf",!t.escape)}}function Rv(e,o){if(e&1&&(w(0,"span",5),Ee(1),x()),e&2){let t=S(3);y("ngClass",t.cx("text")),v(),lo(t.text)}}function Tv(e,o){if(e&1&&q(0,Rv,2,2,"span",10),e&2){let t=S(2);y("ngIf",t.escape&&t.text)}}function Dv(e,o){e&1&&ao(0)}function Mv(e,o){if(e&1&&q(0,Dv,1,0,"ng-container",11),e&2){let t=S(2);y("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",_t(2,wv,t.close.bind(t)))}}function Iv(e,o){if(e&1&&(w(0,"span",5),dt(1),x()),e&2){let t=S(2);y("ngClass",t.cx("text"))}}function Av(e,o){if(e&1&&R(0,"i",13),e&2){let t=S(3);y("ngClass",t.closeIcon)}}function Ov(e,o){e&1&&ao(0)}function $v(e,o){if(e&1&&q(0,Ov,1,0,"ng-container",7),e&2){let t=S(3);y("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function Fv(e,o){e&1&&R(0,"TimesIcon",14)}function Pv(e,o){if(e&1){let t=ve();w(0,"button",12),X("click",function(n){le(t);let i=S(2);return ce(i.close(n))}),q(1,Av,1,1,"i",13)(2,$v,1,1,"ng-container")(3,Fv,1,0,"TimesIcon",14),x()}if(e&2){let t=S(2);v(),se(t.closeIcon?1:-1),v(),se(t.closeIconTemplate||t._closeIconTemplate?2:-1),v(),se(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function Lv(e,o){if(e&1&&(w(0,"div",1)(1,"div",2),q(2,kv,1,1,"ng-container")(3,_v,1,1,"i",3)(4,Ev,2,1,"div",4)(5,Tv,1,1,"ng-template",null,0,yl)(7,Mv,1,4,"ng-container")(8,Iv,2,1,"span",5)(9,Pv,4,3,"button",6),x()()),e&2){let t=bl(6),r=S();y("ngClass",r.containerClass)("@messageAnimation",_t(13,Cv,vl(10,yv,r.showTransitionOptions,r.hideTransitionOptions))),fe("aria-live","polite")("role","alert"),v(2),se(r.iconTemplate||r._iconTemplate?2:-1),v(),se(r.icon?3:-1),v(),y("ngIf",!r.escape)("ngIfElse",t),v(3),se(r.containerTemplate||r._containerTemplate?7:8),v(2),se(r.closable?9:-1)}}var Qp=(()=>{class e extends de{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new be;get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",r=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${r}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=G(!0);_componentStyle=p(Zp);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-message"]],contentQueries:function(r,n,i){if(r&1&&(Xe(i,gv,4),Xe(i,mv,4),Xe(i,bv,4),Xe(i,Kn,4)),r&2){let s;Ke(s=Ze())&&(n.containerTemplate=s.first),Ke(s=Ze())&&(n.iconTemplate=s.first),Ke(s=Ze())&&(n.closeIconTemplate=s.first),Ke(s=Ze())&&(n.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",U],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",U],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},standalone:!0,features:[K([Zp]),Ie,O,I],ngContentSelectors:vv,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(r,n){r&1&&(ct(),q(0,Lv,10,15,"div",1)),r&2&&se(n.visible()?0:-1)},dependencies:[Ae,uo,on,nn,Up,si,He],encapsulation:2,data:{animation:[El("messageAnimation",[Ki(":enter",[Xi({opacity:0,transform:"translateY(-25%)"}),Yi("{{showTransitionParams}}")]),Ki(":leave",[Yi("{{hideTransitionParams}}",Xi({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})();function Bv(e,o){e&1&&(w(0,"p-message",4),Ee(1," \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C "),x())}function Nv(e,o){e&1&&(w(0,"p-message",4),Ee(1," \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C "),x())}function Vv(e,o){if(e&1){let t=ve();w(0,"p-button",16),X("click",function(){le(t);let n=S();return ce(n.onClickRemove())}),x()}}var ai=class e{settings=p(he);controls=new Pn({label:new Eo(""),iconSrc:new Eo(""),path:new Eo("")});isEditing=re(()=>!!this.settings.selectedEditingLink());onClickSave(){let o=this.controls.controls.label,t=this.controls.controls.iconSrc,r=this.controls.controls.path;if(!o.value){o.setErrors({empty:!0}),o.markAsTouched();return}if(!r.value){r.setErrors({empty:!0}),r.markAsTouched();return}if(!this.isEditing()){this.onCreate(o.value,t.value,r.value);return}this.onUpdate(o.value,t.value,r.value)}onCreate(o,t,r){let n={id:kr(),label:o,iconSrc:t||void 0,path:r},i=structuredClone(this.settings.links());i||(i=[]),i.push(n),this.settings.links.set(i),this.settings.open.set(!1)}onUpdate(o,t,r){let n=this.settings.selectedEditingLink();if(!n)return;let i=this.settings.links();if(!i)return;let s=structuredClone(i).map(l=>l.id===n.id?{id:l.id,label:o,iconSrc:t||void 0,path:r}:l);this.settings.links.set(s),this.settings.selectedEditingLink.set(void 0),this.settings.open.set(!1)}onClickRemove(){let o=this.settings.selectedEditingLink();if(!o)return;let t=this.settings.links();if(!t)return;let r=structuredClone(t).filter(n=>n.id!==o.id);this.settings.links.set(r),this.settings.selectedEditingLink.set(void 0),this.settings.open.set(!1)}onSelectedEditingLinkChanged(){let o=this.settings.selectedEditingLink();j(()=>{if(!o){this.controls.setValue({label:"",iconSrc:"",path:""});return}this.controls.setValue({label:o.label,iconSrc:o.iconSrc||"",path:o.path})})}constructor(){ae(this.onSelectedEditingLinkChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-settings-menu-edit"]],standalone:!0,features:[I],decls:21,vars:11,consts:[[1,"container",3,"formGroup"],["variant","on",1,"flex","flex-col","gap-1"],["pInputText","","formControlName","label","id","settings-menu-edit-input-label",3,"fluid"],["for","settings-menu-edit-input-label"],["severity","error","size","small","variant","simple"],[1,"container__icon"],["variant","on",1,"container__icon-input"],["pInputText","","formControlName","iconSrc","id","settings-menu-edit-input-iconSrc",3,"fluid"],["for","settings-menu-edit-input-iconSrc"],[1,"container__path"],["variant","on"],["pInputText","","formControlName","path","id","settings-menu-edit-input-path",3,"fluid"],["for","settings-menu-edit-input-path"],[1,"container__buttons"],["label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","severity","danger","variant","outlined","size","small",1,"container__buttons-delete"],["label","\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C","variant","outlined","size","small",1,"container__buttons-save",3,"click"],["label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","severity","danger","variant","outlined","size","small",1,"container__buttons-delete",3,"click"]],template:function(t,r){t&1&&(w(0,"div",0)(1,"div")(2,"p-floatlabel",1),R(3,"input",2),w(4,"label",3),Ee(5,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"),x()(),q(6,Bv,2,0,"p-message",4),x(),w(7,"div",5)(8,"p-floatlabel",6),R(9,"input",7),w(10,"label",8),Ee(11,"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0443"),x()()(),w(12,"div",9)(13,"p-floatlabel",10),R(14,"input",11),w(15,"label",12),Ee(16,"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441"),x()(),q(17,Nv,2,0,"p-message",4),x(),w(18,"div",13),q(19,Vv,1,0,"p-button",14),w(20,"p-button",15),X("click",function(){return r.onClickSave()}),x()()()),t&2&&(y("formGroup",r.controls),v(3),_e(r.controls.controls.label.hasError("empty")?"ng-invalid ng-dirty":""),y("fluid",!0),v(3),se(r.controls.controls.label.hasError("empty")?6:-1),v(3),y("fluid",!0),v(5),_e(r.controls.controls.path.hasError("empty")?"ng-invalid ng-dirty":""),y("fluid",!0),v(3),se(r.controls.controls.path.hasError("empty")?17:-1),v(2),se(r.isEditing()?19:-1))},dependencies:[sd,Nn,Xc,Kc,sa,aa,Gp,Yp,Kp,Qp],styles:["[_nghost-%COMP%]{flex:1;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden;padding:16px}.container__icon[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:16px;display:flex;gap:16px;align-items:center}.container__icon-input[_ngcontent-%COMP%]{flex:1}.container__path[_ngcontent-%COMP%]{margin-bottom:auto}.container__buttons[_ngcontent-%COMP%]{width:100%;display:flex}.container__buttons-save[_ngcontent-%COMP%]{margin-left:auto;width:max-content}"]})};var zv=(e,o)=>o.name;function Uv(e,o){if(e&1){let t=ve();w(0,"div",5),X("click",function(){let n=le(t).$implicit,i=S();return ce(i.onClickPreset(n))}),x()}if(e&2){let t=o.$implicit,r=S();_e("preset "+(r.selectedPresetName()===t.name&&"selected")),rt("background","var(--p-"+t.name+"-600)")("outline-color","var(--p-"+t.name+"-600)")}}var li=class e{settings=p(he);Presets=Qn;selectedPresetName=re(()=>this.settings.selectedPreset().name);onClickPreset(o){this.settings.selectedPreset().name!==o.name&&this.settings.selectedPreset.set(o)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-settings-menu-palette"]],standalone:!0,features:[I],decls:7,vars:0,consts:[[1,"container"],[1,"container__section"],[1,"container__section-title"],[1,"container__section-content"],[3,"class","background","outline-color"],[3,"click"]],template:function(t,r){t&1&&(w(0,"div",0)(1,"div",1)(2,"div",2),Ee(3,"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0446\u0432\u0435\u0442"),x(),w(4,"div",3),io(5,Uv,1,6,"div",4,zv),x()()()),t&2&&(v(5),so(r.Presets))},styles:["[_nghost-%COMP%]{flex:1;display:flex}.container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:16px;overflow:hidden;padding:16px}.container__section[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:16px}.container__section-title[_ngcontent-%COMP%]{font-size:.875rem;color:var(--p-zinc-800);font-weight:600;line-height:1}.container__section-content[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.preset[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;cursor:pointer}.preset.selected[_ngcontent-%COMP%]{outline-width:2px;outline-style:solid;outline-offset:1px}"]})};var Dr=Te(Sa(),1),E=Te(Tf(),1),at=Te(Af(),1),qf=Te(Bf(),1),Mr=Te(Hf(),1),Xt=window,Pe=document,Wf=Pe.documentElement,Ci=0,Fa=class e{static cache=new WeakMap;css3=!0;axis=null;constructor(o,t){var r=e.cache.get(o);if(r)return r.state="reset",Object.assign(r,t),r.update(),r;this.id=Math.random().toString(36).substring(2,15),this._ns=".draggy_"+this.id,this.element=o,e.cache.set(o,this),(0,qf.default)(this,"state",e.state),this.currentHandles=[],Object.assign(this,t),this.handle===void 0&&(this.handle=this.element),this.droppable&&((0,E.on)(this,"dragstart",()=>{this.dropTargets=ki(this.droppable)}),(0,E.on)(this,"drag",()=>{if(this.dropTargets){var n=(0,Dr.default)(this.element);this.dropTargets.forEach(i=>{var s=(0,Dr.default)(i);ay(n,s,this.droppableTolerance)?(this.droppableClass&&i.classList.add(this.droppableClass),this.dropTarget||(this.dropTarget=i,(0,E.emit)(this,"dragover",i),(0,E.emit)(i,"dragover",this))):(this.dropTarget&&((0,E.emit)(this,"dragout",i),(0,E.emit)(i,"dragout",this),this.dropTarget=null),this.droppableClass&&i.classList.remove(this.droppableClass))})}}),(0,E.on)(this,"dragend",()=>{this.dropTarget&&((0,E.emit)(this.dropTarget,"drop",this),(0,E.emit)(this,"drop",this.dropTarget),this.dropTarget.classList.remove(this.droppableClass),this.dropTarget=null)})),this.update(),this.state="idle"}on(o,t){return(0,E.on)(this,o,t)}off(o,t){return(0,E.off)(this,o,t)}static state={_:{before:function(){this.element.classList.add("draggy-idle"),(0,E.emit)(this.element,"idle",null,!0),(0,E.emit)(this,"idle"),this.ctrlKey=!1,this.shiftKey=!1,this.metaKey=!1,this.altKey=!1,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,(0,E.on)(Pe,"mousedown"+this._ns+" touchstart"+this._ns,o=>{o.draggies&&(o.draggies.indexOf(this)<0||o.target.name===void 0&&(this.setTouch(o),this.update(o),this.state="threshold"))})},after:function(){this.element.classList.remove("draggy-idle"),(0,E.off)(Pe,this._ns),this.release&&(this._trackingInterval=setInterval(o=>{var t=Date.now(),r=t-this.timestamp,n=this.prevX-this.frame[0],i=this.prevY-this.frame[1];this.frame[0]=this.prevX,this.frame[1]=this.prevY;var s=Math.sqrt(n*n+i*i),l=Math.min(this.velocity*s/(1+r),this.maxSpeed);return this.speed=.8*l+.2*this.speed,this.angle=Math.atan2(i,n),(0,E.emit)(this,"track"),this},this.framerate))}},threshold:{before:function(){if(sy(this.threshold)){this.state="drag";return}this.element.classList.add("draggy-threshold"),(0,E.emit)(this,"threshold"),(0,E.emit)(this.element,"threshold"),(0,E.on)(Pe,"touchmove"+this._ns+" mousemove"+this._ns,o=>{o.preventDefault();var t=(0,at.x)(o,this.touchIdx),r=(0,at.y)(o,this.touchIdx),n=this.prevMouseX-t,i=this.prevMouseY-r;(n<this.threshold[0]||n>this.threshold[2]||i<this.threshold[1]||i>this.threshold[3])&&(this.update(o),this.state="drag")}),(0,E.on)(Pe,"mouseup"+this._ns+" touchend"+this._ns,o=>{o.preventDefault(),Ci=0,this.touchIdx=null,this.state="idle"})},after:function(){this.element.classList.remove("draggy-threshold"),(0,E.off)(Pe,this._ns)}},drag:{before:function(){Gf.disable(Wf),this.element.classList.add("draggy-drag"),(0,E.emit)(this,"dragstart"),(0,E.emit)(this.element,"dragstart",null,!0),(0,E.emit)(this,"drag"),(0,E.emit)(this.element,"drag",null,!0),(0,E.on)(Pe,"touchend"+this._ns+" mouseup"+this._ns+" mouseleave"+this._ns,o=>{o.preventDefault(),Ci=0,this.touchIdx=null,this.speed>1?this.state="release":this.state="idle"}),(0,E.on)(Pe,"touchmove"+this._ns+" mousemove"+this._ns,o=>{this.drag(o)})},after:function(){Gf.enable(Wf),this.element.classList.remove("draggy-drag"),(0,E.emit)(this,"dragend"),(0,E.emit)(this.element,"dragend",null,!0),(0,E.off)(Pe,this._ns),clearInterval(this._trackingInterval)}},release:{before:function(){this.element.classList.add("draggy-release"),clearTimeout(this._animateTimeout),this.element.style.transition=this.releaseDuration+"ms ease-out "+(this.css3?"transform":"position"),this._animateTimeout=setTimeout(()=>{this.state="idle"},this.releaseDuration),this.move(this.prevX+this.speed*Math.cos(this.angle),this.prevY+this.speed*Math.sin(this.angle)),this.speed=0,(0,E.emit)(this,"track")},after:function(){this.element.classList.remove("draggy-release"),this.element.style.transition=null}},reset:function(){return this.currentHandles.forEach(o=>{(0,E.off)(o,this._ns)}),clearTimeout(this._animateTimeout),(0,E.off)(Pe,this._ns),(0,E.off)(this.element,this._ns),"_"}};drag(o){o.preventDefault();var t=(0,at.x)(o,this.touchIdx),r=(0,at.y)(o,this.touchIdx),n=t-this.prevMouseX,i=r-this.prevMouseY,s=t,l=r;this._isFixed||(s+=Xt.pageXOffset,l+=Xt.pageYOffset),(o.ctrlKey||o.metaKey)&&(this.sniperOffsetX+=n*this.sniperSlowdown,this.sniperOffsetY+=i*this.sniperSlowdown),this.ctrlKey=o.ctrlKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.altKey=o.altKey;var a=s-this.initOffsetX-this.innerOffsetX-this.sniperOffsetX,c=l-this.initOffsetY-this.innerOffsetY-this.sniperOffsetY;this.move(a,c),this.prevMouseX=t,this.prevMouseY=r,(0,E.emit)(this,"drag"),(0,E.emit)(this.element,"drag",null,!0)}setTouch(o){if(!o.touches||this.touchIdx!==null)return this;this.touchIdx=Ci,Ci++}touchIdx=null;update(o){this._isFixed=dy(this.element),this.css3||(this.element.style.position="absolute"),this.currentHandles.forEach(s=>{(0,E.off)(s,this._ns)});var t=ki(this.cancel);this.currentHandles=ki(this.handle),this.currentHandles.forEach(s=>{(0,E.on)(s,"mousedown"+this._ns+" touchstart"+this._ns,l=>{l.draggies||(l.draggies=[]),!l.draggies.some(a=>this.element.contains(a.element))&&(t.some(a=>a.contains(l.target))||l.draggies.push(this))})}),this.updateLimits(),this.innerOffsetX=this.pin[0],this.innerOffsetY=this.pin[1];var r=this.element.getBoundingClientRect();if(o)this.prevMouseX=(0,at.x)(o,this.touchIdx),this.prevMouseY=(0,at.y)(o,this.touchIdx),this.innerOffsetX=-r.left+(0,at.x)(o,this.touchIdx),this.innerOffsetY=-r.top+(0,at.y)(o,this.touchIdx);else{var n=(this.pin[0]+this.pin[2])*.5,i=(this.pin[1]+this.pin[3])*.5;this.prevMouseX=r.left+n,this.prevMouseY=r.top+i,this.innerOffsetX=n,this.innerOffsetY=i}this.speed=0,this.amplitude=0,this.angle=0,this.timestamp=+new Date,this.frame=[this.prevX,this.prevY],this.sniperOffsetX=0,this.sniperOffsetY=0}updateLimits(){var o=this.getCoords();this.prevX=o[0],this.prevY=o[1],this.initX=o[0],this.initY=o[1];var t=(0,Dr.default)(this.element);this.initOffsetX=t.left-this.prevX,this.initOffsetY=t.top-this.prevY,this.offsets=t;var r=this.within;(this.within==="parent"||this.within===!0)&&(r=this.element.parentNode),r=r||Pe;var n=(0,Dr.default)(r);r===Xt&&this._isFixed&&(n.top-=Xt.pageYOffset,n.left-=Xt.pageXOffset,n.bottom-=Xt.pageYOffset,n.right-=Xt.pageXOffset),this.withinOffsets=n,this.overflowX=this.pin.width-n.width,this.overflowY=this.pin.height-n.height,this.limits={left:n.left-this.initOffsetX-this.pin[0]-(this.overflowX<0?0:this.overflowX),top:n.top-this.initOffsetY-this.pin[1]-(this.overflowY<0?0:this.overflowY),right:this.overflowX>0?0:n.right-this.initOffsetX-this.pin[2],bottom:this.overflowY>0?0:n.bottom-this.initOffsetY-this.pin[3]}}updateInfo(o,t){this.deltaX=o-this.prevX,this.deltaY=t-this.prevY,this.prevX=o,this.prevY=t,this.movementX=o-this.initX,this.movementY=t-this.initY}getCoords(){return this.css3?cy(this.element).slice(0,2)||[0,0]:[(0,Mr.default)(this.element.style.left),(0,Mr.default)(this.element.style.top)]}setCoords(o,t){this.css3?(o==null&&(o=this.prevX),t==null&&(t=this.prevY),o=xi(o,this.precision),t=xi(t,this.precision),this.element.style.transform=`translate3d(${o}px, ${t}px, 0)`,this.updateInfo(o,t)):(o==null&&(o=this.prevX),t==null&&(t=this.prevY),o=xi(o,this.precision),t=xi(t,this.precision),this.element.style.left=o,this.element.style.top=t,this.updateInfo(o,t))}within=Pe;handle;set pin(o){Array.isArray(o)?o.length===2?this._pin=[o[0],o[1],o[0],o[1]]:o.length===4&&(this._pin=o):typeof o=="number"?this._pin=[o,o,o,o]:this._pin=o,this._pin.width=this._pin[2]-this._pin[0],this._pin.height=this._pin[3]-this._pin[1]}get pin(){if(this._pin)return this._pin;var o=[0,0,this.offsets.width,this.offsets.height];return o.width=this.offsets.width,o.height=this.offsets.height,o}set threshold(o){typeof o=="number"?this._threshold=[-o*.5,-o*.5,o*.5,o*.5]:o.length===2?this._threshold=[-o[0]*.5,-o[1]*.5,o[0]*.5,o[1]*.5]:o.length===4?this._threshold=o:typeof o=="function"?this._threshold=o():this._threshold=[0,0,0,0]}get threshold(){return this._threshold||[0,0,0,0]}release=!1;releaseDuration=500;velocity=1e3;maxSpeed=250;framerate=50;precision=1;droppable=null;droppableTolerance=.5;droppableClass=null;sniper=!0;sniperSlowdown=.85;move(o,t){if(this.axis==="x"){o==null&&(o=this.prevX),t==null&&(t=this.prevY);var r=this.limits;if(this.repeat){var n=r.right-r.left,i=-this.initOffsetX+this.withinOffsets.left-this.pin[0]-Math.max(0,this.overflowX);o=Fo(o-i,n)+i}else o=wi(o,r.left,r.right);this.setCoords(o)}else if(this.axis==="y"){o==null&&(o=this.prevX),t==null&&(t=this.prevY);var r=this.limits;if(this.repeat){var s=r.bottom-r.top,l=-this.initOffsetY+this.withinOffsets.top-this.pin[1]-Math.max(0,this.overflowY);t=Fo(t-l,s)+l}else t=wi(t,r.top,r.bottom);this.setCoords(null,t)}else{o==null&&(o=this.prevX),t==null&&(t=this.prevY);var r=this.limits;if(this.repeat){var n=r.right-r.left,s=r.bottom-r.top,i=-this.initOffsetX+this.withinOffsets.left-this.pin[0]-Math.max(0,this.overflowX),l=-this.initOffsetY+this.withinOffsets.top-this.pin[1]-Math.max(0,this.overflowY);this.repeat==="x"?o=Fo(o-i,n)+i:(this.repeat==="y"||(o=Fo(o-i,n)+i),t=Fo(t-l,s)+l)}o=wi(o,r.left,r.right),t=wi(t,r.top,r.bottom),this.setCoords(o,t)}}repeat=!1;destroy(){this.currentHandles.forEach(o=>{(0,E.off)(o,this._ns)}),this.state="destroy",clearTimeout(this._animateTimeout),(0,E.off)(Pe,this._ns),(0,E.off)(this.element,this._ns),this.element=null,this.within=null}};function sy(e){if(!e[0]&&!e[1]&&!e[2]&&!e[3])return!0}function ki(e){return Array.isArray(e)?e.map(ki).reduce(function(o,t){return o.concat(t)},[]):e instanceof HTMLElement?[e]:[].slice.call(document.querySelectorAll(e))}function ay(e,o,t=0){let r=Math.max(0,Math.min(e.right,o.right)-Math.max(e.left,o.left)),n=Math.max(0,Math.min(e.bottom,o.bottom)-Math.max(e.top,o.top)),i=r*n,s=(e.right-e.left)*(e.bottom-e.top),l=(o.right-o.left)*(o.bottom-o.top),a=Math.min(s,l);return i>=t*a}function Fo(e,o,t){if(t===void 0&&(t=o,o=0),o>t){var r=t;t=o,o=r}var n=t-o;return e=(e+o)%n-o,e<o&&(e+=n),e>t&&(e-=n),e}function wi(e,o,t){return Math.max(o,Math.min(e,t))}function xi(e,o){return o===0?e:o?(o=parseFloat(o),e=Math.round(e/o)*o,parseFloat(e.toFixed(ly(o)))):Math.round(e)}function ly(e){var o=e+"",t=o.indexOf(".")+1;return t?o.length-t:0}var Gf={disable(e){e.style.userSelect="none",e.style.userDrag="none",e.style.touchCallout="none",e.setAttribute("unselectable","on"),e.addEventListener("selectstart",o=>o.preventDefault())},enable(e){e.style.userSelect=null,e.style.userDrag=null,e.style.touchCallout=null,e.removeAttribute("unselectable"),e.removeEventListener("selectstart",o=>o.preventDefault())}};function cy(e){var o=e.style.transform,t=/translate(?:3d)?\s*\(([^\)]*)\)/.exec(o);if(!t)return[0,0];var r=t[1].split(/\s*,\s*/);return[(0,Mr.default)(r[0]),(0,Mr.default)(r[1])]}function dy(e){var o=e;if(e===window)return!0;if(e===document)return!1;for(;o;){if(getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}var Po=Fa;var Kt=Te(Ma(),1),nh=Te(Ra(),1),ih=Te(bi(),1),xe=Te(ka(),1),sh=Te(Kf(),1),ah=Te(Jf(),1),lh=Te(oh(),1),Pa=Te(Sa(),1),uy=document,rh=uy.documentElement;function Ri(e,o){var t=this;if(!(t instanceof Ri))return new Ri(e,o);t.element=e,Object.assign(t,o),t.draggable===!0?t.draggable=new Po(t.element,{within:t.within,css3:t.css3}):t.draggable?(t.draggable=new Po(t.element,t.draggable),t.draggable.css3=t.css3):t.draggable=new Po(t.element,{handle:null}),t.createHandles(),t.resize&&t.on("resize",t.resize)}var $t=Ri.prototype;$t.css3=!0;$t.draggable=!1;$t.on=function(e,o){(0,nh.default)(this,e,o)};$t.off=function(e,o){(0,ih.default)(this,e,o)};$t.createHandles=function(){var e=this,o;if(Array.isArray(e.handles)){o={};for(var t=e.handles.length;t--;)o[e.handles[t]]=null}else if(typeof e.handles=="string"){o={};for(var r=e.handles.match(/([swne]+)/g),t=r.length;t--;)o[r[t]]=null}else if(typeof e.handles=="object"&&e.handles.constructor===Object)o=e.handles;else{var n=getComputedStyle(e.element).position,i=getComputedStyle(e.element).display;/inline/.test(i)||/static/.test(n)?(o={s:null,se:null,e:null},(0,xe.default)(e.element,"position","relative")):o={s:null,se:null,e:null,ne:null,n:null,nw:null,w:null,sw:null}}var s;for(var l in o)o[l]=e.createHandle(o[l],l);e.handles=o};$t.createHandle=function(e,o){var t=this,r=t.element;e||(e=document.createElement("div"),e.classList.add("resizable-handle")),t.element.appendChild(e),e.direction=o;var n=t.within==="parent"?t.element.parentNode:t.within,i=new Po(e,{within:n,threshold:t.threshold,axis:/^[ns]$/.test(o)?"y":/^[we]$/.test(o)?"x":"both"});return i.on("dragstart",function(s){t.m=(0,lh.default)(r),t.b=(0,ah.default)(r),t.p=(0,sh.default)(r),t.draggable.update(s);var l=getComputedStyle(r);if(t.offsets=t.draggable.getCoords(),getComputedStyle(r).boxSizing==="border-box"&&(t.p.top=0,t.p.bottom=0,t.p.left=0,t.p.right=0,t.b.top=0,t.b.bottom=0,t.b.left=0,t.b.right=0),t.initSize=[r.offsetWidth-t.b.left-t.b.right-t.p.left-t.p.right,r.offsetHeight-t.b.top-t.b.bottom-t.p.top-t.p.bottom],t.initSizeFull=[r.offsetWidth,r.offsetHeight],t.prevCoords=[0,0],t.shiftOffset=[0,0],t.center=[t.offsets[0]+t.initSize[0]/2,t.offsets[1]+t.initSize[1]/2],t.within){var a=(0,Pa.default)(n),c=(0,Pa.default)(r);t.maxSize=[c.left-a.left+t.initSize[0],c.top-a.top+t.initSize[1],a.right-c.right+t.initSize[0],a.bottom-c.bottom+t.initSize[1]]}else t.maxSize=[9999,9999,9999,9999];(0,xe.default)(rh,{cursor:o+"-resize"});for(var d in t.handles)(0,xe.default)(t.handles[d],"cursor",null);(0,Kt.default)(t,"resizestart"),(0,Kt.default)(r,"resizestart")}),i.on("drag",function(){var s=i.getCoords(),l=[r.offsetWidth,r.offsetHeight];if(i.shiftKey){switch(o){case"se":case"s":case"e":break;case"nw":s[0]=-s[0],s[1]=-s[1];break;case"n":s[1]=-s[1];break;case"w":s[0]=-s[0];break;case"ne":s[1]=-s[1];break;case"sw":s[0]=-s[0];break}(0,xe.default)(r,{width:Math.min(t.initSize[0]+s[0]*2,t.maxSize[2]+s[0],t.maxSize[0]+s[0]),height:Math.min(t.initSize[1]+s[1]*2,t.maxSize[3]+s[1],t.maxSize[1]+s[1])});var a=l[0]-r.offsetWidth,c=l[1]-r.offsetHeight;t.draggable.updateLimits(),a&&t.draggable.move(t.center[0]-t.initSize[0]/2-s[0]),c&&t.draggable.move(null,t.center[1]-t.initSize[1]/2-s[1])}else switch(o){case"se":(0,xe.default)(r,{width:Math.min(t.initSize[0]+s[0],t.maxSize[2]),height:Math.min(t.initSize[1]+s[1],t.maxSize[3])});case"s":(0,xe.default)(r,{height:Math.min(t.initSize[1]+s[1],t.maxSize[3])});case"e":(0,xe.default)(r,{width:Math.min(t.initSize[0]+s[0],t.maxSize[2])});case"se":case"s":case"e":t.draggable.updateLimits(),t.draggable.move(t.center[0]-t.initSize[0]/2,t.center[1]-t.initSize[1]/2);break;case"nw":(0,xe.default)(r,{width:Ot(t.initSize[0]-s[0],0,t.maxSize[0]),height:Ot(t.initSize[1]-s[1],0,t.maxSize[1])});case"n":(0,xe.default)(r,{height:Ot(t.initSize[1]-s[1],0,t.maxSize[1])});case"w":(0,xe.default)(r,{width:Ot(t.initSize[0]-s[0],0,t.maxSize[0])});case"nw":case"n":case"w":t.draggable.updateLimits();var u=t.initSizeFull[0]-r.offsetWidth,d=t.initSizeFull[1]-r.offsetHeight;t.draggable.move(t.offsets[0]+u,t.offsets[1]+d);break;case"ne":(0,xe.default)(r,{width:Ot(t.initSize[0]+s[0],0,t.maxSize[2]),height:Ot(t.initSize[1]-s[1],0,t.maxSize[1])}),t.draggable.updateLimits();var d=t.initSizeFull[1]-r.offsetHeight;t.draggable.move(null,t.offsets[1]+d);break;case"sw":(0,xe.default)(r,{width:Ot(t.initSize[0]-s[0],0,t.maxSize[0]),height:Ot(t.initSize[1]+s[1],0,t.maxSize[3])}),t.draggable.updateLimits();var u=t.initSizeFull[0]-r.offsetWidth;t.draggable.move(t.offsets[0]+u);break}(0,Kt.default)(t,"resize"),(0,Kt.default)(r,"resize"),i.setCoords(0,0)}),i.on("dragend",function(){(0,xe.default)(rh,{cursor:null});for(var s in t.handles)(0,xe.default)(t.handles[s],"cursor",t.handles[s].direction+"-resize");(0,Kt.default)(t,"resizeend"),(0,Kt.default)(r,"resizeend")}),(0,xe.default)(e,fy[o]),(0,xe.default)(e,"cursor",o+"-resize"),e.classList.add("resizable-handle-"+o),e};$t.destroy=function(){for(var e in this.handles)this.element.removeChild(this.handles[e]),Po.cache.get(this.handles[e]).destroy();this.element=null};var py=10;$t.threshold=py;var fy={e:{left:"auto",right:"-5px",position:"absolute",width:"10px",top:"0px",bottom:"0px"},w:{right:"auto",left:"-5px",position:"absolute",width:"10px",top:"0px",bottom:"0px"},s:{top:"auto",bottom:"-5px",position:"absolute",height:"10px",left:"0px",right:"0px"},n:{bottom:"auto",top:"-5px",position:"absolute",height:"10px",left:"0px",right:"0px"},nw:{position:"absolute",width:"10px",height:"10px","z-index":1,top:"-5px",left:"-5px",bottom:"auto",right:"auto"},ne:{position:"absolute",width:"10px",height:"10px","z-index":1,top:"-5px",right:"-5px",bottom:"auto",left:"auto"},sw:{position:"absolute",width:"10px",height:"10px","z-index":1,bottom:"-5px",left:"-5px",top:"auto",right:"auto"},se:{position:"absolute",width:"10px",height:"10px","z-index":1,bottom:"-5px",right:"-5px",top:"auto",left:"auto"}};function Ot(e,o,t){return Math.max(o,Math.min(e,t))}var ch=Ri;var hy=["componentRef"];function gy(e,o){e&1&&R(0,"app-settings-menu-edit")}function my(e,o){e&1&&R(0,"app-settings-menu-palette")}function by(e,o){e&1&&R(0,"app-iframe")}var Ti=class e{settings=p(he);resizable;componentRef=wt("componentRef");selectedMenu=re(()=>this.settings.selectedMenu());onSettingsSelectedMenuChanged(){let o=this.settings.selectedMenu();j(()=>{let t=this.componentRef()?.nativeElement;if(!t)return;let r=t.parentElement;if(!r)return;let n=this.settings.resize();try{this.resizable.destroy()}catch{}switch(o){case"edit":{t.style.transition="width 300ms, height 300ms, margin-left 300ms, margin-top 300ms";let i=r.clientWidth*.6,s=r.clientHeight*.4;i>900&&(i=900),s<400&&(s=400),t.style.marginLeft=`calc((${r.clientWidth}px - ${i}px) / 2)`,t.style.marginTop=`calc((${r.clientHeight}px - ${s}px) / 2)`,t.style.width=`${i}px`,t.style.height=`${s}px`;break}case"palette":{t.style.transition="width 300ms, height 300ms, margin-left 300ms, margin-top 300ms";let i=r.clientWidth*.2,s=r.clientHeight*.1;i<330&&(i=330),s<300&&(s=300),t.style.marginLeft=`calc((${r.clientWidth}px - ${i}px) / 2)`,t.style.marginTop=`calc((${r.clientHeight}px - ${s}px) / 2)`,t.style.width=`${i}px`,t.style.height=`${s}px`;break}default:t.style.width=n?n.w:"100%",t.style.height=n?n.h:"100%",t.style.marginLeft="0px",t.style.marginTop="0px",setTimeout(()=>{t.style.transition="unset"},300),this.initResizable()}})}MOUSE_DOWN_SIZE=400;MOUSE_UP_SIZE=10;onAreaMouseDown(o){let t=o.target;t.style.minWidth=`${this.MOUSE_DOWN_SIZE}px`,t.style.minHeight=`${this.MOUSE_DOWN_SIZE}px`;let r=t.parentElement;if(r){if(r.style.transition="unset",t.classList.contains("resizable-handle-s")){t.style.inset=`auto 0px -${this.MOUSE_DOWN_SIZE/2}px`;return}if(t.classList.contains("resizable-handle-se")){t.style.inset=`auto -${this.MOUSE_DOWN_SIZE/2}px -${this.MOUSE_DOWN_SIZE/2}px auto`;return}t.style.inset=`0px -${this.MOUSE_DOWN_SIZE/2}px 0px auto`}}onAreaMouseUp(o){let t=o.target;t.style.minWidth=`${this.MOUSE_UP_SIZE}px`,t.style.minHeight=`${this.MOUSE_UP_SIZE}px`;let r=t.parentElement;if(r){if(r.style.transition="width 300ms, height 300ms",t.classList.contains("resizable-handle-s")){t.style.inset=`auto 0px -${this.MOUSE_UP_SIZE/2}px`;return}if(t.classList.contains("resizable-handle-se")){t.style.inset=`auto -${this.MOUSE_UP_SIZE/2}px -${this.MOUSE_UP_SIZE/2}px auto`;return}t.style.inset=`0px -${this.MOUSE_UP_SIZE/2}px 0px auto`}}initResizableAreas(){document.querySelectorAll(".resizable-handle").forEach(t=>{t.addEventListener("mousedown",this.onAreaMouseDown.bind(this)),t.addEventListener("mouseup",this.onAreaMouseUp.bind(this))})}initResizable(){let o=this.componentRef()?.nativeElement;o&&(this.resizable=new ch(o,{within:document.querySelector(".parent"),handles:"s, se, e",threshold:10,draggable:!1}),this.resizable.on("resizeend",()=>{document.querySelectorAll(".resizable-handle").forEach(n=>{let i={target:n};this.onAreaMouseUp(i)});let r=this.componentRef()?.nativeElement;if(r){if(window.innerWidth-62===r.clientWidth&&window.innerHeight-16===r.clientHeight){this.settings.resize.set(void 0);return}this.settings.resize.set({w:`${r.clientWidth}px`,h:`${r.clientHeight}px`})}}),this.resizable.on("resizestart",()=>{let t=this.componentRef()?.nativeElement;t&&this.settings.resize.set({w:`${t.clientWidth}px`,h:`${t.clientHeight}px`})}),this.initResizableAreas())}ngAfterViewInit(){this.initResizable(),window.addEventListener("resetsize",()=>{let o=this.componentRef()?.nativeElement;o&&(o.style.transition="width 300ms, height 300ms",o.style.width="100%",o.style.height="100%",setTimeout(()=>{o.style.transition="width 300ms, height 300ms"},300),this.settings.resize.set(void 0))})}constructor(){ae(this.onSettingsSelectedMenuChanged.bind(this))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-content"]],viewQuery:function(t,r){t&1&&kt(r.componentRef,hy,5),t&2&&ut()},standalone:!0,features:[I],decls:6,vars:1,consts:[["componentRef",""],[1,"parent"],[1,"container"]],template:function(t,r){if(t&1&&(R(0,"div",1),w(1,"div",2,0),q(3,gy,1,0,"app-settings-menu-edit")(4,my,1,0,"app-settings-menu-palette")(5,by,1,0,"app-iframe"),x()),t&2){let n;v(3),se((n=r.selectedMenu())==="edit"?3:n==="palette"?4:5)}},dependencies:[ai,ni,li],styles:["[_nghost-%COMP%]{flex:1;display:flex}.parent[_ngcontent-%COMP%]{position:absolute;width:calc(100% + 138px);height:calc(100% + 184px);left:54px;top:8px;z-index:-1}.container[_ngcontent-%COMP%]{background:#fff;border-radius:8px;display:flex;position:relative}"]})};var Di=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[K([he]),I],decls:3,vars:0,consts:[[1,"container"]],template:function(t,r){t&1&&(w(0,"div",0),R(1,"app-navbar")(2,"app-content"),x())},dependencies:[ri,Ti],styles:[".container[_ngcontent-%COMP%]{width:100vw;height:100vh;box-sizing:border-box;display:flex;padding:8px;gap:8px;background:var(--p-primary-100)}"]})};Wl(Di,gp).catch(e=>console.error(e));
