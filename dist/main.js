!function(){var t={9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070).f,u=r("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),u=function(t){return function(e,n,u){var c,a=r(e),s=i(a),f=o(u,s);if(t&&n!=n){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),u=n(5112)("toStringTag"),c=Object,a="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=c(t),u))?n:a?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),u=n(3070);t.exports=function(t,e,n){for(var c=o(e),a=u.f,s=i.f,f=0;f<c.length;f++){var l=c[f];r(t,l)||n&&r(n,l)||a(t,l,s(e,l))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,n){"use strict";var r=n(3383).IteratorPrototype,o=n(30),i=n(9114),u=n(8003),c=n(7497),a=function(){return this};t.exports=function(t,e,n,s){var f=e+" Iterator";return t.prototype=o(r,{next:i(+!s,n)}),u(t,f,!1,!0),c[f]=a,t}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),u=n(3072);t.exports=function(t,e,n,c){c||(c={});var a=c.enumerable,s=void 0!==c.name?c.name:e;if(r(n)&&i(n,s,c),c.global)a?t[e]=n:u(e,n);else{try{c.unsafe?t[e]&&(a=!0):delete t[e]}catch(t){}a?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},654:function(t,e,n){"use strict";var r=n(2109),o=n(6916),i=n(1913),u=n(6530),c=n(614),a=n(4994),s=n(9518),f=n(7674),l=n(8003),p=n(8880),v=n(8052),d=n(5112),g=n(7497),y=n(3383),x=u.PROPER,m=u.CONFIGURABLE,h=y.IteratorPrototype,b=y.BUGGY_SAFARI_ITERATORS,S=d("iterator"),w="keys",O="values",E="entries",I=function(){return this};t.exports=function(t,e,n,u,d,y,j){a(n,e,u);var T,L,P,C=function(t){if(t===d&&_)return _;if(!b&&t in M)return M[t];switch(t){case w:case O:case E:return function(){return new n(this,t)}}return function(){return new n(this)}},R=e+" Iterator",A=!1,M=t.prototype,k=M[S]||M["@@iterator"]||d&&M[d],_=!b&&k||C(d),B="Array"==e&&M.entries||k;if(B&&(T=s(B.call(new t)))!==Object.prototype&&T.next&&(i||s(T)===h||(f?f(T,h):c(T[S])||v(T,S,I)),l(T,R,!0,!0),i&&(g[R]=I)),x&&d==O&&k&&k.name!==O&&(!i&&m?p(M,"name",O):(A=!0,_=function(){return o(k,this)})),d)if(L={values:C(O),keys:y?_:C(w),entries:C(E)},j)for(P in L)(b||A||!(P in M))&&v(M,P,L[P]);else r({target:e,proto:!0,forced:b||A},L);return i&&!j||M[S]===_||v(M,S,_,{name:d}),g[e]=_,L}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),u=n(8113),c=i.process,a=i.Deno,s=c&&c.versions||a&&a.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),u=n(8052),c=n(3072),a=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,v,d=t.target,g=t.global,y=t.stat;if(n=g?r:y?r[d]||c(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(v=o(n,f))&&v.value:n[f],!s(g?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:function(t,e,n){"use strict";n(4916);var r=n(1702),o=n(8052),i=n(2261),u=n(7293),c=n(5112),a=n(8880),s=c("species"),f=RegExp.prototype;t.exports=function(t,e,n,l){var p=c(t),v=!u((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=v&&!u((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!d||n){var g=r(/./[p]),y=e(p,""[t],(function(t,e,n,o,u){var c=r(t),a=e.exec;return a===i||a===f.exec?v&&!u?{done:!0,value:g(e,n,o)}:{done:!0,value:c(n,e,o)}:{done:!1}}));o(String.prototype,t,y[0]),o(f,p,y[1])}l&&a(f[p],"sham",!0)}},2104:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?u.bind(i):function(){return u.apply(i,arguments)})},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,s=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:s}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.bind,u=o.call,c=r&&i.bind(u,u);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},647:function(t,e,n){var r=n(1702),o=n(7908),i=Math.floor,u=r("".charAt),c=r("".replace),a=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,l,p){var v=n+t.length,d=r.length,g=f;return void 0!==l&&(l=o(l),g=s),c(p,g,(function(o,c){var s;switch(u(c,0)){case"$":return"$";case"&":return t;case"`":return a(e,0,n);case"'":return a(e,v);case"<":s=l[a(c,1,-1)];break;default:var f=+c;if(0===f)return o;if(f>d){var p=i(f/10);return 0===p?o:p<=d?void 0===r[p-1]?u(c,1):r[p-1]+u(c,1):o}s=r[f-1]}return void 0===s?"":s}))}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),u=Object,c=r("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,u=n(8536),c=n(7854),a=n(1702),s=n(111),f=n(8880),l=n(2597),p=n(5465),v=n(6200),d=n(3501),g="Object already initialized",y=c.TypeError,x=c.WeakMap;if(u||p.state){var m=p.state||(p.state=new x),h=a(m.get),b=a(m.has),S=a(m.set);r=function(t,e){if(b(m,t))throw new y(g);return e.facade=t,S(m,t,e),e},o=function(t){return h(m,t)||{}},i=function(t){return b(m,t)}}else{var w=v("state");d[w]=!0,r=function(t,e){if(l(t,w))throw new y(g);return e.facade=t,f(t,w,e),e},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,u=function(t,e){var n=a[c(t)];return n==f||n!=s&&(o(e)?r(e):!!e)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),u=n(3307),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,c(t))}},3383:function(t,e,n){"use strict";var r,o,i,u=n(7293),c=n(614),a=n(30),s=n(9518),f=n(8052),l=n(5112),p=n(1913),v=l("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(r=o):d=!0),null==r||u((function(){var t={};return r[v].call(t)!==t}))?r={}:p&&(r=a(r)),c(r[v])||f(r,v,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},7497:function(t){t.exports={}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),o=n(614),i=n(2597),u=n(9781),c=n(6530).CONFIGURABLE,a=n(2788),s=n(9909),f=s.enforce,l=s.get,p=Object.defineProperty,v=u&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),d=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||c&&t.name!==e)&&(u?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&i(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?u&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=f(t);return i(r,"source")||(r.source=d.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return o(this)&&l(this).source||a(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},30:function(t,e,n){var r,o=n(9670),i=n(6048),u=n(748),c=n(3501),a=n(490),s=n(317),f=n(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;d="undefined"!=typeof document?document.domain&&r?v(r):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):v(r);for(var n=u.length;n--;)delete d.prototype[u[n]];return d()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[f]=t):n=d(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3353),i=n(3070),u=n(9670),c=n(5656),a=n(1956);e.f=r&&!o?Object.defineProperties:function(t,e){u(t);for(var n,r=c(e),o=a(e),s=o.length,f=0;s>f;)i.f(t,n=o[f++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),u=n(9670),c=n(4948),a=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=r?i?function(t,e,n){if(u(t),e=c(e),u(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=f(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(u(t),e=c(e),u(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),u=n(9114),c=n(5656),a=n(4948),s=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e),f)try{return l(t,e)}catch(t){}if(s(t,e))return u(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),o=n(614),i=n(7908),u=n(6200),c=n(8544),a=u("IE_PROTO"),s=Object,f=s.prototype;t.exports=c?s.getPrototypeOf:function(t){var e=i(t);if(r(e,a))return e[a];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof s?f:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),u=n(1318).indexOf,c=n(3501),a=r([].push);t.exports=function(t,e){var n,r=i(t),s=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&a(f,n);for(;e.length>s;)o(r,n=e[s++])&&(~u(f,n)||a(f,n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),u=TypeError;t.exports=function(t,e){var n,c;if("string"===e&&o(n=t.toString)&&!i(c=r(n,t)))return c;if(o(n=t.valueOf)&&!i(c=r(n,t)))return c;if("string"!==e&&o(n=t.toString)&&!i(c=r(n,t)))return c;throw u("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),u=n(5181),c=n(9670),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=u.f;return n?a(e,n(t)):e}},7651:function(t,e,n){var r=n(6916),o=n(9670),i=n(614),u=n(4326),c=n(2261),a=TypeError;t.exports=function(t,e){var n=t.exec;if(i(n)){var s=r(n,t,e);return null!==s&&o(s),s}if("RegExp"===u(t))return r(c,t,e);throw a("RegExp#exec called on incompatible receiver")}},2261:function(t,e,n){"use strict";var r,o,i=n(6916),u=n(1702),c=n(1340),a=n(7066),s=n(2999),f=n(2309),l=n(30),p=n(9909).get,v=n(9441),d=n(7168),g=f("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,x=y,m=u("".charAt),h=u("".indexOf),b=u("".replace),S=u("".slice),w=(o=/b*/g,i(y,r=/a/,"a"),i(y,o,"a"),0!==r.lastIndex||0!==o.lastIndex),O=s.BROKEN_CARET,E=void 0!==/()??/.exec("")[1];(w||E||O||v||d)&&(x=function(t){var e,n,r,o,u,s,f,v=this,d=p(v),I=c(t),j=d.raw;if(j)return j.lastIndex=v.lastIndex,e=i(x,j,I),v.lastIndex=j.lastIndex,e;var T=d.groups,L=O&&v.sticky,P=i(a,v),C=v.source,R=0,A=I;if(L&&(P=b(P,"y",""),-1===h(P,"g")&&(P+="g"),A=S(I,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==m(I,v.lastIndex-1))&&(C="(?: "+C+")",A=" "+A,R++),n=new RegExp("^(?:"+C+")",P)),E&&(n=new RegExp("^"+C+"$(?!\\s)",P)),w&&(r=v.lastIndex),o=i(y,L?n:v,A),L?o?(o.input=S(o.input,R),o[0]=S(o[0],R),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:w&&o&&(v.lastIndex=v.global?o.index+o[0].length:r),E&&o&&o.length>1&&i(g,o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&T)for(o.groups=s=l(null),u=0;u<T.length;u++)s[(f=T[u])[0]]=o[f[1]];return o}),t.exports=x},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},2999:function(t,e,n){var r=n(7293),o=n(7854).RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),u=i||r((function(){return!o("a","y").sticky})),c=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:u,UNSUPPORTED_Y:i}},9441:function(t,e,n){var r=n(7293),o=n(7854).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,n){var r=n(7293),o=n(7854).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4488:function(t){var e=TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},8003:function(t,e,n){var r=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.24.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:function(t,e,n){var r=n(1702),o=n(9303),i=n(1340),u=n(4488),c=r("".charAt),a=r("".charCodeAt),s=r("".slice),f=function(t){return function(e,n){var r,f,l=i(u(e)),p=o(n),v=l.length;return p<0||p>=v?t?"":void 0:(r=a(l,p))<55296||r>56319||p+1===v||(f=a(l,p+1))<56320||f>57343?t?c(l,p):r:t?s(l,p,p+2):f-56320+(r-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),u=n(8173),c=n(2140),a=n(5112),s=TypeError,f=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,a=u(t,f);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(648),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),u=n(9711),c=n(133),a=n(3307),s=o("wks"),f=r.Symbol,l=f&&f.for,p=a?f:f&&f.withoutSetter||u;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=a&&l?l(e):p(e)}return s[t]}},6699:function(t,e,n){"use strict";var r=n(2109),o=n(1318).includes,i=n(7293),u=n(1223);r({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},6992:function(t,e,n){"use strict";var r=n(5656),o=n(1223),i=n(7497),u=n(9909),c=n(3070).f,a=n(654),s=n(1913),f=n(9781),l="Array Iterator",p=u.set,v=u.getterFor(l);t.exports=a(Array,"Array",(function(t,e){p(this,{type:l,target:r(t),index:0,kind:e})}),(function(){var t=v(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var d=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&f&&"values"!==d.name)try{c(d,"name",{value:"values"})}catch(t){}},4916:function(t,e,n){"use strict";var r=n(2109),o=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:function(t,e,n){"use strict";var r=n(2104),o=n(6916),i=n(1702),u=n(7007),c=n(7293),a=n(9670),s=n(614),f=n(9303),l=n(7466),p=n(1340),v=n(4488),d=n(1530),g=n(8173),y=n(647),x=n(7651),m=n(5112)("replace"),h=Math.max,b=Math.min,S=i([].concat),w=i([].push),O=i("".indexOf),E=i("".slice),I="$0"==="a".replace(/./,"$0"),j=!!/./[m]&&""===/./[m]("a","$0");u("replace",(function(t,e,n){var i=j?"$":"$0";return[function(t,n){var r=v(this),i=null==t?void 0:g(t,m);return i?o(i,t,r,n):o(e,p(r),t,n)},function(t,o){var u=a(this),c=p(t);if("string"==typeof o&&-1===O(o,i)&&-1===O(o,"$<")){var v=n(e,u,c,o);if(v.done)return v.value}var g=s(o);g||(o=p(o));var m=u.global;if(m){var I=u.unicode;u.lastIndex=0}for(var j=[];;){var T=x(u,c);if(null===T)break;if(w(j,T),!m)break;""===p(T[0])&&(u.lastIndex=d(c,l(u.lastIndex),I))}for(var L,P="",C=0,R=0;R<j.length;R++){for(var A=p((T=j[R])[0]),M=h(b(f(T.index),c.length),0),k=[],_=1;_<T.length;_++)w(k,void 0===(L=T[_])?L:String(L));var B=T.groups;if(g){var F=S([A],k,M,c);void 0!==B&&w(F,B);var D=p(r(o,void 0,F))}else D=y(A,c,M,k,B,o);M>=C&&(P+=E(c,C,M)+D,C=M+A.length)}return P+E(c,C)}]}),!!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!I||j)},3948:function(t,e,n){var r=n(7854),o=n(8324),i=n(8509),u=n(6992),c=n(8880),a=n(5112),s=a("iterator"),f=a("toStringTag"),l=u.values,p=function(t,e){if(t){if(t[s]!==l)try{c(t,s,l)}catch(e){t[s]=l}if(t[f]||c(t,f,e),o[e])for(var n in u)if(t[n]!==u[n])try{c(t,n,u[n])}catch(e){t[n]=u[n]}}};for(var v in o)p(r[v]&&r[v].prototype,v);p(i,"DOMTokenList")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(3948);const t="public business need long number word about after much need open change also in one good real one not school set they state against person system interest general point".split(" "),e=t.length,r=document.getElementById("words"),o=document.getElementById("game"),i=document.getElementById("reset"),u=document.getElementById("cursor"),c=document.getElementById("info"),a=document.getElementById("dino-img"),s=document.getElementById("human"),f=document.getElementById("message");function l(t,e){t.className+=" "+e}function p(t,e){t.className=t.className.replace(e,"")}function v(){const n=Math.floor(Math.random()*e);return t[n]}n(5306),n(6699);let d,g=!1,y=0,x=80;function m(){for(g=!1,c.innerText=120,u.style.top="327px",u.style.left="274px",u.style="display:flex; justify-content:flex-start",r.style.marginTop="0px",a.style="display:flex; justify-content:flex-start",s.style="display:flex; justify-content:flex-start",f.innerText="Type to Stay Alive!",y=0,x=80,window.gameStart=null,window.timer=null,S(),document.querySelector("#game.over")&&p(o,"over"),p(o,"over");r.lastChild;)r.removeChild(r.lastChild);for(let e=0;e<200;e++)r.innerHTML+=(t=v(),'<div class="word"><span class="letter">'.concat(t.split("").join('</span><span class="letter">'),"</span></div>"));var t;l(document.querySelector(".word"),"current"),l(document.querySelector(".letter"),"current")}function h(){S(),clearInterval(window.timer),l(o,"over")}function b(){document.querySelector("#game.over")||(a.style.paddingLeft=y+"px",y+=8)}function S(){clearInterval(d)}window.timer=null,window.gameStart=null,!1===g&&o.addEventListener("keyup",(()=>{d||(b(),d=setInterval(b,1e3))})),o.addEventListener("keyup",(t=>{document.querySelector("#game.over")||(f.innerText="Run!"),g=!0;const e=t.key,n=document.querySelector(".word.current"),o=document.querySelector(".letter.current"),i=(null==o?void 0:o.innerHTML)||" ",u=1===e.length&&" "!==e,c=" "===e,a="Backspace"===e,v=o===n.firstChild;if(document.querySelector("#game.over"))return;if(!window.timer&&u&&(window.timer=setInterval((()=>{window.gameStart||(window.gameStart=(new Date).getTime());const t=(new Date).getTime()-window.gameStart,e=120-Math.round(t/1e3);e<=0?h():document.getElementById("info").innerHTML=e+""}),1e3)),u&&o&&(l(o,e===i?"correct":"incorrect"),p(o,"current"),o.nextSibling&&l(o.nextSibling,"current")),c&&(" "!==i&&[...document.querySelectorAll(".word.current .letter:not(.correct)")].forEach((t=>{l(t,"incorrect")})),p(n,"current"),l(n.nextSibling,"current"),o&&p(o,"current"),l(n.nextSibling.firstChild,"current")),a&&(o&&v&&(p(n,"current"),l(n.previousSibling,"current"),p(o,"current"),l(n.previousSibling.lastChild,"current"),p(n.previousSibling.lastChild,"incorrect"),p(n.previousSibling.lastChild,"correct")),o&&!v&&(p(o,"current"),l(o.previousSibling,"current"),p(o.previousSibling,"incorrect"),p(o.previousSibling,"correct")),o||(l(n.lastChild,"current"),p(n.lastChild,"incorrect"),p(n.lastChild,"correct"))),n.getBoundingClientRect().top>380){const t=parseInt(r.style.marginTop||"0px");r.style.marginTop=t-35+"px"}const d=document.querySelector(".letter.current"),m=document.querySelector(".word.current"),b=document.getElementById("cursor");d?(b.style.top=d.getBoundingClientRect().top+"px",b.style.left=d.getBoundingClientRect().left+"px"):b.style.left=m.getBoundingClientRect().right+"px",e==i&&(s.style.paddingLeft=x+"px",x+=2),x-y<=50&&(h(),f.innerText="You got Eaten!"),"900px"==s.style.paddingLeft&&(h(),f.innerText="You Win!")})),i.addEventListener("click",(()=>{clearInterval(d),d=void 0,h(),m()})),document.addEventListener("DOMContentLoaded",(()=>{m()}))}()}();
//# sourceMappingURL=main.js.map