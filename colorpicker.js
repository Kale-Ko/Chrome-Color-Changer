!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).iro=e()}(this,(function(){"use strict";var t,e,n,r,i,o={},s=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function a(t,e){for(var n in e)t[n]=e[n];return t}function u(t){var e=t.parentNode;e&&e.removeChild(t)}function c(t,e,n){var r,i,o,s,l=arguments;if(e=a({},e),3<arguments.length)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);if(null!=n&&(e.children=n),null!=t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===e[i]&&(e[i]=t.defaultProps[i]);return s=e.key,null!=(o=e.ref)&&delete e.ref,null!=s&&delete e.key,h(t,e,s,o)}function h(e,n,r,i){var o={type:e,props:n,key:r,ref:i,n:null,i:null,e:0,o:null,l:null,c:null,constructor:void 0};return t.vnode&&t.vnode(o),o}function f(t){return t.children}function d(t,e){this.props=t,this.context=e}function p(t,e){if(null==e)return t.i?p(t.i,t.i.n.indexOf(t)+1):null;for(var n;e<t.n.length;e++)if(null!=(n=t.n[e])&&null!=n.o)return n.o;return"function"==typeof t.type?p(t):null}function g(t){var e,n;if(null!=(t=t.i)&&null!=t.c){for(t.o=t.c.base=null,e=0;e<t.n.length;e++)if(null!=(n=t.n[e])&&null!=n.o){t.o=t.c.base=n.o;break}return g(t)}}function v(i){(!i.f&&(i.f=!0)&&1===e.push(i)||r!==t.debounceRendering)&&(r=t.debounceRendering,(t.debounceRendering||n)(b))}function b(){var t,n,r,i,o,s,l,u;for(e.sort((function(t,e){return e.p.e-t.p.e}));t=e.pop();)t.f&&(i=r=void 0,s=(o=(n=t).p).o,l=n.w,u=n.u,n.u=!1,l&&(r=[],i=k(l,o,a({},o),n.m,void 0!==l.ownerSVGElement,null,r,u,null==s?p(o):s),j(r,o),i!=s&&g(o)))}function y(t,e,n,r,i,l,a,c,h){var f,d,g,v,b,y,x,w=n&&n.n||s,S=w.length;if(c==o&&(c=null!=l?l[0]:S?p(n,0):null),f=0,e.n=m(e.n,(function(n){if(null!=n){if(n.i=e,n.e=e.e+1,null===(g=w[f])||g&&n.key==g.key&&n.type===g.type)w[f]=void 0;else for(d=0;d<S;d++){if((g=w[d])&&n.key==g.key&&n.type===g.type){w[d]=void 0;break}g=null}if(v=k(t,n,g=g||o,r,i,l,a,null,c,h),(d=n.ref)&&g.ref!=d&&(x=x||[]).push(d,n.c||v,n),null!=v){if(null==y&&(y=v),null!=n.l)v=n.l,n.l=null;else if(l==g||v!=c||null==v.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(v);else{for(b=c,d=0;(b=b.nextSibling)&&d<S;d+=2)if(b==v)break t;t.insertBefore(v,c)}"option"==e.type&&(t.value="")}c=v.nextSibling,"function"==typeof e.type&&(e.l=v)}}return f++,n})),e.o=y,null!=l&&"function"!=typeof e.type)for(f=l.length;f--;)null!=l[f]&&u(l[f]);for(f=S;f--;)null!=w[f]&&M(w[f],w[f]);if(x)for(f=0;f<x.length;f++)E(x[f],x[++f],x[++f])}function m(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)m(t[r],e,n);else n.push(e?e(function(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return h(null,t,null,null);if(null==t.o&&null==t.c)return t;var e=h(t.type,t.props,t.key,null);return e.o=t.o,e}(t)):t);return n}function x(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===l.test(e)?n+"px":null==n?"":n}function w(t,e,n,r,i){var o,s,l,a,u;if("key"===(e=i?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(o=t.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof r&&(o.cssText="",r=null),r)for(s in r)n&&s in n||x(o,s,"");if(n)for(l in n)r&&n[l]===r[l]||x(o,l,n[l])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),e=((u=e.toLowerCase())in t?u:e).slice(2),n?(r||t.addEventListener(e,S,a),(t.t||(t.t={}))[e]=n):t.removeEventListener(e,S,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&!i&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n?t.removeAttribute(e):t.setAttribute(e,n))}function S(e){return this.t[e.type](t.event?t.event(e):e)}function k(e,n,r,i,l,u,c,h,p,g){var v,b,x,S,k,j,E,M,T,A,I=n.type;if(void 0!==n.constructor)return null;(v=t.e)&&v(n);try{t:if("function"==typeof I){if(M=n.props,T=(v=I.contextType)&&i[v.c],A=v?T?T.props.value:v.i:i,r.c?E=(b=n.c=r.c).i=b.k:("prototype"in I&&I.prototype.render?n.c=b=new I(M,A):(n.c=b=new d(M,A),b.constructor=I,b.render=C),T&&T.sub(b),b.props=M,b.state||(b.state={}),b.context=A,b.m=i,x=b.f=!0,b.M=[]),null==b.j&&(b.j=b.state),null!=I.getDerivedStateFromProps&&a(b.j==b.state?b.j=a({},b.j):b.j,I.getDerivedStateFromProps(M,b.j)),x)null==I.getDerivedStateFromProps&&null!=b.componentWillMount&&b.componentWillMount(),null!=b.componentDidMount&&c.push(b);else{if(null==I.getDerivedStateFromProps&&null==h&&null!=b.componentWillReceiveProps&&b.componentWillReceiveProps(M,A),!h&&null!=b.shouldComponentUpdate&&!1===b.shouldComponentUpdate(M,b.j,A)){for(b.props=M,b.state=b.j,b.f=!1,(b.p=n).o=null!=p?p!==r.o?p:r.o:null,n.n=r.n,v=0;v<n.n.length;v++)n.n[v]&&(n.n[v].i=n);break t}null!=b.componentWillUpdate&&b.componentWillUpdate(M,b.j,A)}for(S=b.props,k=b.state,b.context=A,b.props=M,b.state=b.j,(v=t.O)&&v(n),b.f=!1,b.p=n,b.w=e,v=b.render(b.props,b.state,b.context),n.n=m(null!=v&&v.type==f&&null==v.key?v.props.children:v),null!=b.getChildContext&&(i=a(a({},i),b.getChildContext())),x||null==b.getSnapshotBeforeUpdate||(j=b.getSnapshotBeforeUpdate(S,k)),y(e,n,r,i,l,u,c,p,g),b.base=n.o;v=b.M.pop();)b.j&&(b.state=b.j),v.call(b);x||null==S||null==b.componentDidUpdate||b.componentDidUpdate(S,k,j),E&&(b.k=b.i=null)}else n.o=function(t,e,n,r,i,l,a,u){var c,h,f,d,p=n.props,g=e.props;if(i="svg"===e.type||i,null==t&&null!=l)for(c=0;c<l.length;c++)if(null!=(h=l[c])&&(null===e.type?3===h.nodeType:h.localName===e.type)){t=h,l[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(g);t=i?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),l=null}return null===e.type?p!==g&&(null!=l&&(l[l.indexOf(t)]=null),t.data=g):e!==n&&(null!=l&&(l=s.slice.call(t.childNodes)),f=(p=n.props||o).dangerouslySetInnerHTML,d=g.dangerouslySetInnerHTML,u||(d||f)&&(d&&f&&d.I==f.I||(t.innerHTML=d&&d.I||"")),function(t,e,n,r,i){var o;for(o in n)o in e||w(t,o,null,n[o],r);for(o in e)i&&"function"!=typeof e[o]||"value"===o||"checked"===o||n[o]===e[o]||w(t,o,e[o],n[o],r)}(t,g,p,i,u),e.n=e.props.children,d||y(t,e,n,r,"foreignObject"!==e.type&&i,l,a,o,u),u||("value"in g&&void 0!==g.value&&g.value!==t.value&&(t.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==t.checked&&(t.checked=g.checked))),t}(r.o,n,r,i,l,u,c,g);(v=t.diffed)&&v(n)}catch(e){t.o(e,n,r)}return n.o}function j(e,n){for(var r;r=e.pop();)try{r.componentDidMount()}catch(e){t.o(e,r.p)}t.c&&t.c(n)}function E(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.o(e,r)}}function M(e,n,r){var i,o,s;if(t.unmount&&t.unmount(e),(i=e.ref)&&E(i,null,n),r||"function"==typeof e.type||(r=null!=(o=e.o)),e.o=e.l=null,null!=(i=e.c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.o(e,n)}i.base=i.w=null}if(i=e.n)for(s=0;s<i.length;s++)i[s]&&M(i[s],n,r);null!=o&&u(o)}function C(t,e,n){return this.constructor(t,n)}t={},d.prototype.setState=function(t,e){var n=this.j!==this.state&&this.j||(this.j=a({},this.state));"function"==typeof t&&!(t=t(n,this.props))||a(n,t),null!=t&&this.p&&(this.u=!1,e&&this.M.push(e),v(this))},d.prototype.forceUpdate=function(t){this.p&&(t&&this.M.push(t),this.u=!0,v(this))},d.prototype.render=f,e=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=t.debounceRendering,t.o=function(t,e,n){for(var r;e=e.i;)if((r=e.c)&&!r.i)try{if(r.constructor&&null!=r.constructor.getDerivedStateFromError)r.setState(r.constructor.getDerivedStateFromError(t));else{if(null==r.componentDidCatch)continue;r.componentDidCatch(t)}return v(r.k=r)}catch(e){t=e}throw t},i=o;var T="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",A="[\\s|\\(]+("+T+")[,|\\s]+("+T+")[,|\\s]+("+T+")\\s*\\)?",I="[\\s|\\(]+("+T+")[,|\\s]+("+T+")[,|\\s]+("+T+")[,|\\s]+("+T+")\\s*\\)?",O=new RegExp("rgb"+A),R=new RegExp("rgba"+I),P=new RegExp("hsl"+A),W=new RegExp("hsla"+I),D="^(?:#?|0x?)",N="([0-9a-fA-F]{1})",$="([0-9a-fA-F]{2})",H=new RegExp(D+N+N+N+"$"),L=new RegExp(D+N+N+N+N+"$"),U=new RegExp(D+$+$+$+"$"),B=new RegExp(D+$+$+$+$+"$"),F=Math.log,z=Math.round,_=Math.floor;function G(t,e,n){return Math.min(Math.max(t,e),n)}function V(t,e){var n=-1<t.indexOf("%"),r=parseFloat(t);return n?e/100*r:r}function q(t){return parseInt(t,16)}function K(t){return t.toString(16).padStart(2,"0")}var X,Y=function(t,e){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=e,this.initialValue=Object.assign({},this.$)},J={hsv:{configurable:!0},hsva:{configurable:!0},hue:{configurable:!0},saturation:{configurable:!0},value:{configurable:!0},alpha:{configurable:!0},kelvin:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0},rgb:{configurable:!0},rgba:{configurable:!0},hsl:{configurable:!0},hsla:{configurable:!0},rgbString:{configurable:!0},rgbaString:{configurable:!0},hexString:{configurable:!0},hex8String:{configurable:!0},hslString:{configurable:!0},hslaString:{configurable:!0}};function Q(t){var e=t.width,n=t.sliderSize,r=t.borderWidth,i=t.handleRadius,o=t.padding,s=t.sliderShape,l="horizontal"===t.layoutDirection;return n=n||2*o+2*i+2*r,"circle"===s?{handleStart:t.padding+t.handleRadius,handleRange:e-2*o-2*i-2*r,width:e,height:e,cx:e/2,cy:e/2,radius:e/2-r/2}:{handleStart:n/2,handleRange:e-n,radius:n/2,x:0,y:0,width:l?n:e,height:l?e:n}}function Z(t){var e=t.width/2;return{width:t.width,radius:e-t.borderWidth,cx:e,cy:e}}function tt(t,e,n){var r=t.wheelAngle,i=t.wheelDirection;return((e=!n&&"clockwise"===i||n&&"anticlockwise"===i?(n?180:360)-(r-e):r+e)%360+360)%360}function et(t,e,n){var r=Z(t),i=r.cx,o=r.cy,s=t.width/2-t.padding-t.handleRadius-t.borderWidth;e=i-e,n=o-n;var l=tt(t,Math.atan2(-n,-e)*(180/Math.PI)),a=Math.min(Math.sqrt(e*e+n*n),s);return{h:Math.round(l),s:Math.round(100/s*a)}}function nt(t){var e=t.width;return{width:e,height:e,radius:t.padding+t.handleRadius}}function rt(t,e,n){var r=nt(t),i=r.width,o=r.height,s=r.radius,l=(e-s)/(i-2*s)*100,a=(n-s)/(o-2*s)*100;return{s:Math.max(0,Math.min(l,100)),v:Math.max(0,Math.min(100-a,100))}}function it(t){X=X||document.getElementsByTagName("base");var e=window.navigator.userAgent,n=/^((?!chrome|android).)*safari/i.test(e),r=/iPhone|iPod|iPad/i.test(e),i=window.location;return(n||r)&&0<X.length?i.protocol+"//"+i.host+i.pathname+i.search+t:t}function ot(t,e,n,r){for(var i=0;i<r.length;i++){var o=r[i].x-e,s=r[i].y-n;if(Math.sqrt(o*o+s*s)<t.handleRadius)return i}return null}Y.prototype.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof Y?this.hsv=t.hsv:"object"==typeof t&&"r"in t&&"g"in t&&"b"in t?this.rgb=t:"object"==typeof t&&"h"in t&&"s"in t&&"v"in t?this.hsv=t:"object"==typeof t&&"h"in t&&"s"in t&&"l"in t&&(this.hsl=t)}},Y.prototype.setChannel=function(t,e,n){var r;this[t]=Object.assign({},this[t],((r={})[e]=n,r))},Y.prototype.reset=function(){this.hsva=this.initialValue},Y.prototype.clone=function(){return new Y(this)},Y.prototype.unbind=function(){this.onChange=void 0},Y.hsvToRgb=function(t){var e=t.h/60,n=t.s/100,r=t.v/100,i=_(e),o=e-i,s=r*(1-n),l=r*(1-o*n),a=r*(1-(1-o)*n),u=i%6,c=[a,r,r,l,s,s][u],h=[s,s,a,r,r,l][u];return{r:G(255*[r,l,s,s,a,r][u],0,255),g:G(255*c,0,255),b:G(255*h,0,255)}},Y.rgbToHsv=function(t){var e=t.r/255,n=t.g/255,r=t.b/255,i=Math.max(e,n,r),o=Math.min(e,n,r),s=i-o,l=0,a=i,u=0===i?0:s/i;switch(i){case o:l=0;break;case e:l=(n-r)/s+(n<r?6:0);break;case n:l=(r-e)/s+2;break;case r:l=(e-n)/s+4}return{h:60*l%360,s:G(100*u,0,100),v:G(100*a,0,100)}},Y.hsvToHsl=function(t){var e=t.s/100,n=t.v/100,r=(2-e)*n,i=r<=1?r:2-r,o=i<1e-9?0:e*n/i;return{h:t.h,s:G(100*o,0,100),l:G(50*r,0,100)}},Y.hslToHsv=function(t){var e=2*t.l,n=t.s*(e<=100?e:200-e)/100,r=e+n<1e-9?0:2*n/(e+n);return{h:t.h,s:G(100*r,0,100),v:G((e+n)/2,0,100)}},Y.kelvinToRgb=function(t){var e,n,r,i=t/100;return r=i<66?(e=255,n=-155.25485562709179-.44596950469579133*(n=i-2)+104.49216199393888*F(n),i<20?0:.8274096064007395*(r=i-10)-254.76935184120902+115.67994401066147*F(r)):(e=351.97690566805693+.114206453784165*(e=i-55)-40.25366309332127*F(e),n=325.4494125711974+.07943456536662342*(n=i-50)-28.0852963507957*F(n),255),{r:G(_(e),0,255),g:G(_(n),0,255),b:G(_(r),0,255)}},Y.rgbToKelvin=function(t){for(var e,n=t.r,r=t.b,i=1e3,o=4e4;.4<o-i;){var s=Y.kelvinToRgb(e=.5*(o+i));s.b/s.r>=r/n?o=e:i=e}return e},J.hsv.get=function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},J.hsv.set=function(t){var e=this.$;if(t=Object.assign({},e,t),this.onChange){var n={h:!1,v:!1,s:!1,a:!1};for(var r in e)n[r]=t[r]!=e[r];this.$=t,(n.h||n.s||n.v||n.a)&&this.onChange(this,n)}else this.$=t},J.hsva.get=function(){return Object.assign({},this.$)},J.hsva.set=function(t){this.hsv=t},J.hue.get=function(){return this.$.h},J.hue.set=function(t){this.hsv={h:t}},J.saturation.get=function(){return this.$.s},J.saturation.set=function(t){this.hsv={s:t}},J.value.get=function(){return this.$.v},J.value.set=function(t){this.hsv={v:t}},J.alpha.get=function(){return this.$.a},J.alpha.set=function(t){this.hsv=Object.assign({},this.hsv,{a:t})},J.kelvin.get=function(){return Y.rgbToKelvin(this.rgb)},J.kelvin.set=function(t){this.rgb=Y.kelvinToRgb(t)},J.red.get=function(){return this.rgb.r},J.red.set=function(t){this.rgb=Object.assign({},this.rgb,{r:t})},J.green.get=function(){return this.rgb.g},J.green.set=function(t){this.rgb=Object.assign({},this.rgb,{g:t})},J.blue.get=function(){return this.rgb.b},J.blue.set=function(t){this.rgb=Object.assign({},this.rgb,{b:t})},J.rgb.get=function(){var t=Y.hsvToRgb(this.$),e=t.r,n=t.g,r=t.b;return{r:z(e),g:z(n),b:z(r)}},J.rgb.set=function(t){this.hsv=Object.assign({},Y.rgbToHsv(t),{a:void 0===t.a?1:t.a})},J.rgba.get=function(){return Object.assign({},this.rgb,{a:this.alpha})},J.rgba.set=function(t){this.rgb=t},J.hsl.get=function(){var t=Y.hsvToHsl(this.$),e=t.h,n=t.s,r=t.l;return{h:z(e),s:z(n),l:z(r)}},J.hsl.set=function(t){this.hsv=Object.assign({},Y.hslToHsv(t),{a:void 0===t.a?1:t.a})},J.hsla.get=function(){return Object.assign({},this.hsl,{a:this.alpha})},J.hsla.set=function(t){this.hsl=t},J.rgbString.get=function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},J.rgbString.set=function(t){var e,n,r,i,o=1;if((e=O.exec(t))?(n=V(e[1],255),r=V(e[2],255),i=V(e[3],255)):(e=R.exec(t))&&(n=V(e[1],255),r=V(e[2],255),i=V(e[3],255),o=V(e[4],1)),!e)throw new Error("Invalid rgb string");this.rgb={r:n,g:r,b:i,a:o}},J.rgbaString.get=function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},J.rgbaString.set=function(t){this.rgbString=t},J.hexString.get=function(){var t=this.rgb;return"#"+K(t.r)+K(t.g)+K(t.b)},J.hexString.set=function(t){var e,n,r,i,o=255;if((e=H.exec(t))?(n=17*q(e[1]),r=17*q(e[2]),i=17*q(e[3])):(e=L.exec(t))?(n=17*q(e[1]),r=17*q(e[2]),i=17*q(e[3]),o=17*q(e[4])):(e=U.exec(t))?(n=q(e[1]),r=q(e[2]),i=q(e[3])):(e=B.exec(t))&&(n=q(e[1]),r=q(e[2]),i=q(e[3]),o=q(e[4])),!e)throw new Error("Invalid hex string");this.rgb={r:n,g:r,b:i,a:o/255}},J.hex8String.get=function(){var t=this.rgba;return"#"+K(t.r)+K(t.g)+K(t.b)+K(_(255*t.a))},J.hex8String.set=function(t){this.hexString=t},J.hslString.get=function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},J.hslString.set=function(t){var e,n,r,i,o=1;if((e=P.exec(t))?(n=V(e[1],360),r=V(e[2],100),i=V(e[3],100)):(e=W.exec(t))&&(n=V(e[1],360),r=V(e[2],100),i=V(e[3],100),o=V(e[4],1)),!e)throw new Error("Invalid hsl string");this.hsl={h:n,s:r,l:i,a:o}},J.hslaString.get=function(){var t=this.hsla;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},J.hslaString.set=function(t){this.hslString=t},Object.defineProperties(Y.prototype,J);var st=["mousemove","touchmove","mouseup","touchend"],lt=function(t){function e(e){t.call(this,e),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.render=function(t){var e=this.handleEvent.bind(this),n={onMouseDown:e,ontouchstart:e},r="horizontal"===t.layoutDirection,i=null===t.margin?t.sliderMargin:t.margin,o={overflow:"visible",display:r?"inline-block":"block"};return 0<t.index&&(o[r?"marginLeft":"marginTop"]=i),c(f,null,t.children(this.uid,n,o))},e.prototype.handleEvent=function(t){var e=this,n=this.props.onInput,r=this.base.getBoundingClientRect();t.preventDefault();var i=t.touches?t.changedTouches[0]:t,o=i.clientX-r.left,s=i.clientY-r.top;switch(t.type){case"mousedown":case"touchstart":st.forEach((function(t){document.addEventListener(t,e,{passive:!1})})),n(o,s,0);break;case"mousemove":case"touchmove":n(o,s,1);break;case"mouseup":case"touchend":n(o,s,2),st.forEach((function(t){document.removeEventListener(t,e)}))}},e}(d);function at(t){var e=t.r,n=t.url;return c("svg",{className:"IroHandle IroHandle--"+t.index+" "+(t.isActive?"IroHandle--isActive":""),x:t.x,y:t.y,style:{overflow:"visible"}},n&&c("use",Object.assign({xlinkHref:it(n)},t.props)),!n&&c("circle",{r:e,fill:"none","stroke-width":2,stroke:"#000"}),!n&&c("circle",{r:e-2,fill:t.fill,"stroke-width":2,stroke:"#fff"}))}function ut(t){var e=t.activeIndex,n=void 0!==e&&e<t.colors.length?t.colors[e]:t.color,r=Q(t),i=r.width,o=r.height,s=r.radius,l=function(t,e){var n=Q(t),r=n.width,i=n.height,o=n.handleRange,s=n.handleStart,l="horizontal"===t.layoutDirection,a=l?r/2:i/2,u=s+function(t,e){var n=e.hsva,r=e.rgb;switch(t.sliderType){case"red":return r.r/2.55;case"green":return r.g/2.55;case"blue":return r.b/2.55;case"alpha":return 100*n.a;case"kelvin":var i=t.minTemperature,o=t.maxTemperature-i,s=(e.kelvin-i)/o*100;return Math.max(0,Math.min(s,100));case"hue":return n.h/=3.6;case"saturation":return n.s;case"value":default:return n.v}}(t,e)/100*o;return l&&(u=-1*u+o+2*s),{x:l?a:u,y:l?u:a}}(t,n),a=function(t,e){var n=e.hsv,r=e.rgb;switch(t.sliderType){case"red":return[[0,"rgb(0,"+r.g+","+r.b+")"],[100,"rgb(255,"+r.g+","+r.b+")"]];case"green":return[[0,"rgb("+r.r+",0,"+r.b+")"],[100,"rgb("+r.r+",255,"+r.b+")"]];case"blue":return[[0,"rgb("+r.r+","+r.g+",0)"],[100,"rgb("+r.r+","+r.g+",255)"]];case"alpha":return[[0,"rgba("+r.r+","+r.g+","+r.b+",0)"],[100,"rgb("+r.r+","+r.g+","+r.b+")"]];case"kelvin":for(var i=[],o=t.minTemperature,s=t.maxTemperature,l=s-o,a=o,u=0;a<s;a+=l/8,u+=1){var c=Y.kelvinToRgb(a),h=c.r,f=c.g,d=c.b;i.push([12.5*u,"rgb("+h+","+f+","+d+")"])}return i;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=Y.hsvToHsl({h:n.h,s:0,v:n.v}),g=Y.hsvToHsl({h:n.h,s:100,v:n.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];case"value":default:var v=Y.hsvToHsl({h:n.h,s:n.s,v:100});return[[0,"#000"],[100,"hsl("+v.h+","+v.s+"%,"+v.l+"%)"]]}}(t,n),u="alpha"===t.sliderType;return c(lt,Object.assign({},t,{onInput:function(e,r,i){var o=function(t,e,n){var r,i=Q(t),o=i.handleRange,s=i.handleStart;r="horizontal"===t.layoutDirection?-1*n+o+s:e-s,r=Math.max(Math.min(r,o),0);var l=Math.round(100/o*r);switch(t.sliderType){case"kelvin":var a=t.minTemperature;return a+l/100*(t.maxTemperature-a);case"alpha":return l/100;case"hue":return 3.6*l;case"red":case"blue":case"green":return 2.55*l;default:return l}}(t,e,r);t.parent.inputActive=!0,n[t.sliderType]=o,t.onInput(i)}}),(function(e,r,h){return c("svg",Object.assign({},r,{className:"IroSlider",width:i,height:o,style:h}),c("defs",null,c("linearGradient",Object.assign({id:"g"+e},function(t){var e="horizontal"===t.layoutDirection;return{x1:"0%",y1:e?"100%":"0%",x2:e?"0%":"100%",y2:"0%"}}(t)),a.map((function(t){return c("stop",{offset:t[0]+"%","stop-color":t[1]})}))),u&&c("pattern",{id:"b"+e,width:"8",height:"8",patternUnits:"userSpaceOnUse"},c("rect",{x:"0",y:"0",width:"8",height:"8",fill:"#fff"}),c("rect",{x:"0",y:"0",width:"4",height:"4",fill:"#ccc"}),c("rect",{x:"4",y:"4",width:"4",height:"4",fill:"#ccc"})),u&&c("pattern",{id:"f"+e,width:"100%",height:"100%"},c("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+it("#b"+e)+")"}),c("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+it("#g"+e)+")"}))),c("rect",{className:"IroSliderBg",rx:s,ry:s,x:t.borderWidth/2,y:t.borderWidth/2,width:i-t.borderWidth,height:o-t.borderWidth,"stroke-width":t.borderWidth,stroke:t.borderColor,fill:"url("+it((u?"#f":"#g")+e)+")"}),c(at,{isActive:!0,index:n.index,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:l.x,y:l.y}))}))}at.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},ut.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});var ct=Array.apply(null,{length:360}).map((function(t,e){return e}));function ht(t){var e=Z(t),n=e.width,r=e.radius,i=e.cx,o=e.cy,s=t.colors,l=t.borderWidth,a=t.parent,u=t.color,h=u.hsv,f=s.map((function(e){return function(t,e){var n=e.hsv,r=Z(t),i=r.cx,o=r.cy,s=t.width/2-t.padding-t.handleRadius-t.borderWidth,l=(180+tt(t,n.h,!0))*(Math.PI/180),a=n.s/100*s,u="clockwise"===t.wheelDirection?-1:1;return{x:i+a*Math.cos(l)*u,y:o+a*Math.sin(l)*u}}(t,e)}));return c(lt,Object.assign({},t,{onInput:function(e,n,r){if(0===r){var i=ot(t,e,n,f);null!==i?a.setActiveColor(i):(a.inputActive=!0,u.hsv=et(t,e,n),t.onInput(r))}else 1===r&&(a.inputActive=!0,u.hsv=et(t,e,n));t.onInput(r)}}),(function(e,a,d){return c("svg",Object.assign({},a,{className:"IroWheel",width:n,height:n,style:d}),c("defs",null,c("radialGradient",{id:e},c("stop",{offset:"0%","stop-color":"#fff"}),c("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"}))),c("g",{className:"IroWheelHue","stroke-width":r,fill:"none"},ct.map((function(e){return c("path",{key:e,d:function(t,e,n,r,i){var o=i-r<=180?0:1;return r*=Math.PI/180,i*=Math.PI/180,"M "+(t+n*Math.cos(i))+" "+(e+n*Math.sin(i))+" A "+n+" "+n+" 0 "+o+" 0 "+(t+n*Math.cos(r))+" "+(e+n*Math.sin(r))}(i,o,r/2,e,e+1.5),stroke:"hsl("+tt(t,e)+", 100%, 50%)"})}))),c("circle",{className:"IroWheelSaturation",cx:i,cy:o,r:r,fill:"url("+it("#"+e)+")"}),t.wheelLightness&&c("circle",{className:"IroWheelLightness",cx:i,cy:o,r:r,fill:"#000",opacity:1-h.v/100}),c("circle",{className:"IroWheelBorder",cx:i,cy:o,r:r,fill:"none",stroke:t.borderColor,"stroke-width":l}),s.filter((function(t){return t!==u})).map((function(e){return c(at,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:f[e.index].x,y:f[e.index].y})})),c(at,{isActive:!0,index:u.index,fill:u.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:f[u.index].x,y:f[u.index].y}))}))}var ft=function(t){function e(e){var n=this;t.call(this,e),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=e.id,(0<e.colors.length?e.colors:[e.color]).forEach((function(t){return n.addColor(t)})),this.setActiveColor(0),this.state=Object.assign({},e,{color:this.color,colors:this.colors,layout:e.layout})}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.addColor=function(t,e){void 0===e&&(e=this.colors.length);var n=new Y(t,this.onColorChange.bind(this));this.colors.splice(e,0,n),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",n)},e.prototype.removeColor=function(t){var e=this.colors.splice(t,1)[0];e.unbind(),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),e.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",e)},e.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},e.prototype.setColors=function(t){var e=this;this.colors.forEach((function(t){return t.unbind()})),this.colors=[],t.forEach((function(t){return e.addColor(t)})),this.setActiveColor(0),this.emit("color:setAll",this.colors)},e.prototype.on=function(t,e){var n=this,r=this.events;(Array.isArray(t)?t:[t]).forEach((function(t){(r[t]||(r[t]=[])).push(e),n.deferredEvents[t]&&(n.deferredEvents[t].forEach((function(t){e.apply(null,t)})),n.deferredEvents[t]=[])}))},e.prototype.off=function(t,e){var n=this;(Array.isArray(t)?t:[t]).forEach((function(t){var r=n.events[t];r&&r.splice(r.indexOf(e),1)}))},e.prototype.emit=function(t){for(var e=this,n=[],r=arguments.length-1;0<r--;)n[r]=arguments[r+1];var i=this.activeEvents;i.hasOwnProperty(t)&&i[t]||(i[t]=!0,(this.events[t]||[]).forEach((function(t){return t.apply(e,n)})),i[t]=!1)},e.prototype.deferredEmit=function(t){for(var e,n=[],r=arguments.length-1;0<r--;)n[r]=arguments[r+1];var i=this.deferredEvents;(e=this).emit.apply(e,[t].concat(n)),(i[t]||(i[t]=[])).push(n)},e.prototype.setOptions=function(t){this.setState(Object.assign({},this.state,t))},e.prototype.resize=function(t){this.setOptions({width:t})},e.prototype.reset=function(){this.colors.forEach((function(t){return t.reset()})),this.setState({colors:this.colors})},e.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},e.prototype.onColorChange=function(t,e){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,e)),this.emit("color:change",t,e)},e.prototype.emitInputEvent=function(t){0===t?this.emit("input:start",this.color):1===t?this.emit("input:move",this.color):2===t&&this.emit("input:end",this.color)},e.prototype.render=function(t,e){var n=this,r=e.layout;return Array.isArray(r)||(r=[{component:ht},{component:ut}],e.transparency&&r.push({component:ut,options:{sliderType:"alpha"}})),c("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},r.map((function(t,r){var i=t.component,o=t.options;return c(i,Object.assign({},e,o,{ref:void 0,onInput:n.emitInputEvent.bind(n),parent:n,index:r}))})))},e}(d);ft.defaultProps=Object.assign({},{width:300,height:300,handleRadius:8,handleSvg:null,handleProps:{x:0,y:0},color:"#fff",colors:[],borderColor:"#fff",borderWidth:0,wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",layoutDirection:"vertical",sliderSize:null,sliderMargin:12,padding:6},{colors:[],display:"block",id:null,layout:"default",margin:null});var dt,pt,gt,vt,bt=(yt.prototype=(dt=ft).prototype,Object.assign(yt,dt),yt.A=dt,yt);function yt(e,n){var r,l=document.createElement("div");function a(){var t=e instanceof Element?e:document.querySelector(e);t.appendChild(r.base),r.onMount(t)}return function(e,n,r){var l,a,u;t.i&&t.i(e,n),a=(l=void 0===i)?null:n.n,e=c(f,null,[e]),u=[],k(n,n.n=e,a||o,o,void 0!==n.ownerSVGElement,a?null:s.slice.call(n.childNodes),u,!1,o,l),j(u,e)}(c(dt,Object.assign({},{ref:function(t){return r=t}},n)),l),"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a),r}return(gt=pt=pt||{}).version="5.2.3",gt.Color=Y,gt.ColorPicker=bt,(vt=gt.ui||(gt.ui={})).h=c,vt.ComponentBase=lt,vt.Handle=at,vt.Slider=ut,vt.Wheel=ht,vt.Box=function(t){var e=nt(t),n=e.width,r=e.height,i=e.radius,o=t.colors,s=t.parent,l=t.activeIndex,a=void 0!==l&&l<t.colors.length?t.colors[l]:t.color,u=function(t,e){return[[[0,"#fff"],[100,"hsl("+e.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}(0,a),h=o.map((function(e){return function(t,e){var n=nt(t),r=n.width,i=n.height,o=n.radius,s=e.hsv,l=o,a=r-2*o,u=i-2*o;return{x:l+s.s/100*a,y:l+(u-s.v/100*u)}}(t,e)}));return c(lt,Object.assign({},t,{onInput:function(e,n,r){if(0===r){var i=ot(t,e,n,h);null!==i?s.setActiveColor(i):(s.inputActive=!0,a.hsv=rt(t,e,n),t.onInput(r))}else 1===r&&(s.inputActive=!0,a.hsv=rt(t,e,n));t.onInput(r)}}),(function(e,s,l){return c("svg",Object.assign({},s,{className:"IroBox",width:n,height:r,style:l}),c("defs",null,c("linearGradient",{id:"s"+e,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},u[0].map((function(t){return c("stop",{offset:t[0]+"%","stop-color":t[1]})}))),c("linearGradient",{id:"l"+e,x1:"0%",y1:"0%",x2:"0%",y2:"100%"},u[1].map((function(t){return c("stop",{offset:t[0]+"%","stop-color":t[1]})}))),c("pattern",{id:"f"+e,width:"100%",height:"100%"},c("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+it("#s"+e)+")"}),c("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+it("#l"+e)+")"}))),c("rect",{rx:i,ry:i,x:t.borderWidth/2,y:t.borderWidth/2,width:n-t.borderWidth,height:r-t.borderWidth,"stroke-width":t.borderWidth,stroke:t.borderColor,fill:"url("+it("#f"+e)+")"}),o.filter((function(t){return t!==a})).map((function(e){return c(at,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:h[e.index].x,y:h[e.index].y})})),c(at,{isActive:!0,index:a.index,fill:a.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:h[a.index].x,y:h[a.index].y}))}))},pt}));