(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-793abd95","chunk-55d286b8"],{"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,a="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,s,l){var d=n+t.length,f=c.length,p=u;return void 0!==s&&(s=r(s),p=o),a.call(l,p,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":o=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>f){var l=i(u/10);return 0===l?r:l<=f?void 0===c[l-1]?a.charAt(1):c[l-1]+a.charAt(1):r}o=c[u-1]}return void 0===o?"":o}))}},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),o=n("1d80"),u=n("4840"),c=n("8aa5"),s=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);var u,c,s,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(u=d.call(g,r)){if(c=g.lastIndex,c>h&&(l.push(r.slice(h,u.index)),u.length>1&&u.index<r.length&&p.apply(l,u.slice(1)),s=u[0].length,h=c,l.length>=a))break;g.lastIndex===u.index&&g.lastIndex++}return h===r.length?!s&&g.test("")||l.push(""):l.push(r.slice(h)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var d=a(t),f=String(this),p=u(d,RegExp),b=d.unicode,E=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),x=new p(g?d:"^(?:"+d.source+")",E),m=void 0===i?v:i>>>0;if(0===m)return[];if(0===f.length)return null===l(x,f)?[f]:[];var y=0,O=0,P=[];while(O<f.length){x.lastIndex=g?O:0;var R,w=l(x,g?f:f.slice(O));if(null===w||(R=h(s(x.lastIndex+(g?0:O)),f.length))===y)O=c(f,O,b);else{if(P.push(f.slice(y,O)),P.length===m)return P;for(var S=1;S<=w.length-1;S++)if(P.push(w[S]),P.length===m)return P;O=y=R}}return P.push(f.slice(y)),P}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),o=n("9112");for(var u in i){var c=r[u],s=c&&c.prototype;if(s&&s.forEach!==a)try{o(s,"forEach",a)}catch(l){s.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=i("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("50c4"),o=n("a691"),u=n("1d80"),c=n("8aa5"),s=n("0cb2"),l=n("14c3"),d=Math.max,f=Math.min,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,r){var i=u(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!h&&v||"string"===typeof r&&-1===r.indexOf(g)){var u=n(e,t,this,r);if(u.done)return u.value}var b=i(t),E=String(this),x="function"===typeof r;x||(r=String(r));var m=b.global;if(m){var y=b.unicode;b.lastIndex=0}var O=[];while(1){var P=l(b,E);if(null===P)break;if(O.push(P),!m)break;var R=String(P[0]);""===R&&(b.lastIndex=c(E,a(b.lastIndex),y))}for(var w="",S=0,I=0;I<O.length;I++){P=O[I];for(var _=String(P[0]),A=d(f(o(P.index),E.length),0),C=[],j=1;j<P.length;j++)C.push(p(P[j]));var $=P.groups;if(x){var T=[_].concat(C,A,E);void 0!==$&&T.push($);var k=String(r.apply(void 0,T))}else k=s(_,E,A,C,$,r);A>=S&&(w+=E.slice(S,A)+k,S=A+_.length)}return w+E.slice(S)}]}))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5ccd":function(t,e,n){t.exports=n.p+"img/audio.058779f0.svg"},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),o="find",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),r({target:"Array",proto:!0,forced:u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8fb3":function(t,e,n){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,u=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||s;d&&(u=function(t){var e,n,i,u,d=this,f=s&&d.sticky,p=r.call(d),h=d.source,v=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=d.lastIndex),i=a.call(f?n:d,g),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),t.exports=u},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b2ea:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?r("button",{staticClass:"audio__btn",on:{click:t.play}},[r("img",{attrs:{src:n("5ccd")}})]):r("button",{staticClass:"audio__btn",on:{click:t.pause}},[r("img",{attrs:{src:n("f034")}})]):r("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[r("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],a=n("8fb3"),o={name:"Audio",mixins:[a["a"]]},u=o,c=n("2877"),s=Object(c["a"])(u,r,i,!1,null,null,null);e["default"]=s.exports},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),a=n("df75"),o=n("d039"),u=o((function(){a(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(t){return a(i(t))}})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),o=n("9263"),u=n("9112"),c=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=a(t),v=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!g||"replace"===t&&(!s||!l||f)||"split"===t&&!p){var b=/./[h],E=n(h,""[t],(function(t,e,n,r,i){return e.exec===o?v&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=E[0],m=E[1];r(String.prototype,t,x),r(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}d&&u(RegExp.prototype[h],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),o=a("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),a=n("56ef"),o=n("fc6a"),u=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=u.f,s=a(r),l={},d=0;while(s.length>d)n=i(r,e=s[d++]),void 0!==n&&c(l,e,n);return l}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),a=n("fc6a"),o=n("06cf").f,u=n("83ab"),c=i((function(){o(1)})),s=!u||c;r({target:"Object",stat:!0,forced:s,sham:!u},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},f034:function(t,e,n){t.exports=n.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-793abd95.579ed14a.js.map