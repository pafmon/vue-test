(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],f=0,l=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._v(" Last message: "),n("pre",[e._v(e._s(e.message))]),e._v(" Cache: "),n("pre",[e._v(e._s(e.cache))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{on:{click:e.newMessage}},[e._v("new Message")])])},a=[],c=(n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),{data:function(){return{message:"n/a",cache:{}}},methods:{newMessage:function(){function e(e){return Math.round(Math.pow(36,e+1)-Math.random()*Math.pow(36,e)).toString(36).slice(1)}var t={},n=this;fetch("http://cache.governify.io/sprscrt/rs/vtc").then((function(e){return e.json()})).then((function(r){r&&(t=r);var o="k"+e(4);t[o]=n.message;var a=new URLSearchParams(t).toString();fetch("http://cache.governify.io/sprscrt/rs/store/vtc?"+a).then((function(){n.cache=t,n.$forceUpdate()}))}))}}}),s=c,u=n("2877"),i=Object(u["a"])(s,o,a,!1,null,null,null),p=i.exports;new r["a"]({render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.bf155f51.js.map