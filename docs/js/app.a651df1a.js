(function(){"use strict";var t={2158:function(t,e,n){var o=n(9242),i=n(3396);const r=t=>((0,i.dD)("data-v-d6a073d8"),t=t(),(0,i.Cn)(),t),u={id:"canvas",class:"relative w-96 mx-auto h-96 border-blue-400 border mt-5"},c=r((()=>(0,i._)("div",{class:"AD-item absolute",style:{width:"160px",height:"100px"}},[(0,i._)("div",{class:"relative h-full w-full"},[(0,i._)("div",{class:"resizer absolute -right-4 -bottom-4 w-3 h-3"})])],-1))),s=[c];function d(t,e,n,o,r,c){return(0,i.wg)(),(0,i.iD)("div",u,s)}var l=n(4870),a=(n(1703),(t=".AD-item")=>{const e=document.querySelector(t),n=document.querySelector("#canvas");if(!e||!n)throw new Error("MOVE ITEM ERROR");const o=n.getBoundingClientRect();let i=0,r=0,u=0,c=0;function s(t){u=t.clientX,c=t.clientY,document.addEventListener("mouseup",l),document.addEventListener("mousemove",d)}function d(t){const n=e.getBoundingClientRect();function s(){r=c-t.clientY;const i=e.offsetTop-r<=0,u=n.height+n.y>=o.y+o.height;i?e.style.top="0px":u&&r<0?e.style.top=o.height-n.height+"px":(e.style.top=e.offsetTop-r+"px",c=t.clientY)}function d(){i=u-t.clientX;const r=e.offsetLeft-i<=0,c=n.width+n.x>=o.x+o.width;r?e.style.left="0px":c&&i<0?e.style.left=o.width-n.width+"px":(e.style.left=e.offsetLeft-i+"px",u=t.clientX)}d(),s()}function l(){document.removeEventListener("onmouseup",l),document.removeEventListener("mousemove",d)}e.addEventListener("mousedown",s)}),f=(t=".AD-item")=>{const e=document.querySelector(t),n=document.querySelector("#canvas"),o=e.querySelector(".resizer");if(!e||!n||!o)throw new Error("RESIZER INIT ERROR!");let i,r,u,c;function s(t){t.stopPropagation(),i=t.clientX,r=t.clientY;const n=e.getBoundingClientRect();u=n.width,c=n.height,document.addEventListener("mousemove",d),document.addEventListener("mouseup",l)}function d(t){t.stopPropagation();const o=n.getBoundingClientRect();let s=u+t.clientX-i;s>o.width&&(s=o.width);let d=c+t.clientY-r;d>o.height&&(d=o.height),e.style.width=s+"px",e.style.height=d+"px"}function l(t){t.stopPropagation(),document.removeEventListener("mousemove",d,!1),document.removeEventListener("mouseup",l,!1)}o.addEventListener("mousedown",s)},v={setup(){const t=(0,l.qj)([1,2,3]),e=(0,l.iH)([]);return(0,i.Xn)((()=>{e.value=[]})),(0,i.Y3)((()=>{a(),f()})),{list:t,divs:e}}},h=n(89);const p=(0,h.Z)(v,[["render",d],["__scopeId","data-v-d6a073d8"]]);var m=p;(0,o.ri)(m).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var u=1/0;for(l=0;l<t.length;l++){o=t[l][0],i=t[l][1],r=t[l][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||u>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(c=!1,r<u&&(u=r));if(c){t.splice(l--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,u=o[0],c=o[1],s=o[2],d=0;if(u.some((function(e){return 0!==t[e]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var l=s(n)}for(e&&e(o);d<u.length;d++)r=u[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},o=self["webpackChunkdraw_ad"]=self["webpackChunkdraw_ad"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2158)}));o=n.O(o)})();