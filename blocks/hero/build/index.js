(window.webpackJsonp_tk_blocks=window.webpackJsonp_tk_blocks||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var r,l,i=t[0],u=t[1],s=t[2],a=0,f=[];a<i.length;a++)l=i[a],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);f.length;)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp_tk_blocks=window.webpackJsonp_tk_blocks||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=u;c.push([5,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),c=(n(4),n(1)),l=n(2);Object(o.registerBlockType)("tk-blocks/hero",{edit:({attributes:e,setAttributes:t,isSelected:n})=>{const o=useBlockProps(),{title:c}=e;return Object(r.createElement)("div",o,Object(r.createElement)("button",{onClick:()=>t({title:!c})},"Toggle setting"))},save:function(){return Object(r.createElement)("div",l.useBlockProps.save(),Object(c.__)(Object(r.createElement)("div",{class:"row p-4"},Object(r.createElement)("div",{class:"col-lg-6"},Object(r.createElement)("h1",null),Object(r.createElement)("h3",null,"Subtitle")))))}})}]);