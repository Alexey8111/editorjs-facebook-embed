!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.YoutubeEmbed=t():e.YoutubeEmbed=t()}(self,(function(){return(()=>{var e={150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".block-wrapper {\n    padding: 20px 0;\n}\n\n.block-wrapper  input {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #e4e4e4;\n    border-radius: 3px;\n    outline: none;\n    font-size: 14px;\n}\n\n.video-wrapper {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 */\n    height: 0;\n}\n\n.video-wrapper iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0px;\n}\n\ninput.invalid {\n    border: 1px solid #eb5959cc;\n}",""]);const o=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},296:e=>{function t(e,t,n){var r,i,o,a,c;function s(){var u=Date.now()-a;u<t&&u>=0?r=setTimeout(s,t-u):(r=null,n||(c=e.apply(o,i),o=i=null))}null==t&&(t=100);var u=function(){o=this,i=arguments,a=Date.now();var u=n&&!r;return r||(r=setTimeout(s,t)),u&&(c=e.apply(o,i),o=i=null),c};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(c=e.apply(o,i),o=i=null,clearTimeout(r),r=null)},u}t.debounce=t,e.exports=t},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var c=e[i],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function v(e,t){var n,r,i;if(t.singleton){var o=h++;n=f||(f=s(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=s}}}},884:e=>{e.exports='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="39" height="39" rx="4.5" fill="#fff" stroke="#BDBDBD"></rect><circle cx="20.5" cy="20.5" r="10.938" fill="url(#a)"></circle><path d="m24.573 23.845.486-3.087h-3.04v-2.002c0-.845.425-1.67 1.786-1.67h1.383V14.46s-1.255-.209-2.453-.209c-2.505 0-4.14 1.479-4.14 4.155v2.353h-2.782v3.087h2.782v7.463a11.309 11.309 0 0 0 3.425 0v-7.463h2.553Z" fill="#fff"></path><defs><linearGradient id="a" x1="20.5" y1="9.563" x2="20.5" y2="31.373" gradientUnits="userSpaceOnUse"><stop stop-color="#18ACFE"></stop><stop offset="1" stop-color="#0163E0"></stop></linearGradient></defs></svg>'}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>l});var e=n(379),t=n.n(e),i=n(150);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=n(884),a=n.n(o),c=n(296);function s(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n=t.data,r=t.api,i=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.data=n,this.readOnly=i,this.element=null,this.wrapper=null,this.source=null,this.embed=null,this.caption="",this.isEdited=!1}var t,n,r,i,o;return t=e,n=[{key:"CSS",get:function(){return{caption:"embed-tool__caption"}}},{key:"render",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("input");return n.value=this.data&&this.data.url?this.data.url:"",this.source=n.value,n.placeholder="Вставьте сюда url с Facebook ...",t.classList.add("block-wrapper"),t.appendChild(n),this._createIframe(n.value),n.addEventListener("change",(function(t){e.isEdited=!0,e.source=n.value,e._createIframe(n.value)})),this.embedIsReady(t).then((function(){})),this.wrapper=t,t}},{key:"_createIframe",value:function(e){var t=e;if(null!=t){this.wrapper.innerHTML=null;var n=document.createElement("div");n.classList.add("video-wrapper");var r=document.createElement("iframe");this.embed="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/".concat(t),r.setAttribute("src",this.embed),r.setAttribute("allowfullscreen",!0),n.appendChild(r);var i=document.createElement("div");i.classList.add("cdx-input",this.CSS.caption),i.contentEditable=!0,i.dataset.placeholder="Введите описание",this.wrapper.appendChild(n),this.wrapper.appendChild(i)}else this.isEdited&&this.wrapper.querySelector("input").classList.add("invalid")}},{key:"save",value:function(e){var t=e.querySelector(".".concat(this.CSS.caption));return{service:"facebook",embed:this.embed,source:this.source,caption:t?t.innerHTML:""}}},{key:"embedIsReady",value:(i=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=4,new Promise((function(e,r){(n=new MutationObserver((0,c.debounce)(e,450))).observe(t,{childList:!0,subtree:!0})}));case 4:n.disconnect();case 5:case"end":return e.stop()}}),e)})),o=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=i.apply(e,t);function a(e){s(o,n,r,a,c,"next",e)}function c(e){s(o,n,r,a,c,"throw",e)}a(void 0)}))},function(e){return o.apply(this,arguments)})}],r=[{key:"toolbox",get:function(){return{title:"Facebook",icon:a()}}},{key:"isReadOnlySupported",get:function(){return!0}}],n&&u(t.prototype,n),r&&u(t,r),e}()})(),r})()}));