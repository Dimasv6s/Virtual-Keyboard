(()=>{"use strict";var e,n,a,t,r,i,c,d={912:(e,n,a)=>{function t(e){return'\n    <div class="row">\n      <div class="key backquote" data-index="Backquote"><span>'.concat(e[0],'</span></div>\n      <div class="key" data-index="Digit1"><span>').concat(e[1],'</span></div>\n      <div class="key" data-index="Digit2"><span>').concat(e[2],'</span></div>\n      <div class="key" data-index="Digit3"><span>').concat(e[3],'</span></div>\n      <div class="key" data-index="Digit4"><span>').concat(e[4],'</span></div>\n      <div class="key" data-index="Digit5"><span>').concat(e[5],'</span></div>\n      <div class="key" data-index="Digit6"><span>').concat(e[6],'</span></div>\n      <div class="key" data-index="Digit7"><span>').concat(e[7],'</span></div>\n      <div class="key" data-index="Digit8"><span>').concat(e[8],'</span></div>\n      <div class="key" data-index="Digit9"><span>').concat(e[9],'</span></div>\n      <div class="key" data-index="Digit0"><span>').concat(e[10],'</span></div>\n      <div class="key" data-index="Minus"><span>').concat(e[11],'</span></div>\n      <div class="key" data-index="Equal"><span>').concat(e[12],'</span></div>\n      <div class="key backspace" data-index="Backspace"><span>').concat(e[13],'</span></div>\n      <div class="key delete" data-index="Delete"><span>').concat(e[14],'</span></div>\n    </div>\n    <div class="row">\n      <div class="key tab" data-index="Tab"><span>').concat(e[15],'</span></div>\n      <div class="key" data-index="KeyQ"><span>').concat(e[16],'</span></div>\n      <div class="key" data-index="KeyW"><span>').concat(e[17],'</span></div>\n      <div class="key" data-index="KeyE"><span>').concat(e[18],'</span></div>\n      <div class="key" data-index="KeyR"><span>').concat(e[19],'</span></div>\n      <div class="key" data-index="KeyT"><span>').concat(e[20],'</span></div>\n      <div class="key" data-index="KeyY"><span>').concat(e[21],'</span></div>\n      <div class="key" data-index="KeyU"><span>').concat(e[22],'</span></div>\n      <div class="key" data-index="KeyI"><span>').concat(e[23],'</span></div>\n      <div class="key" data-index="KeyO"><span>').concat(e[24],'</span></div>\n      <div class="key" data-index="KeyP"><span>').concat(e[25],'</span></div>\n      <div class="key" data-index="BracketLeft"><span>').concat(e[26],'</span></div>\n      <div class="key" data-index="BracketRight"><span>').concat(e[27],'</span></div>\n      <div class="key backslash" data-index="Backslash"><span>').concat(e[28],'</span></div>\n    </div>\n    <div class="row">\n      <div id="caps" class="key caps-lock" data-index="CapsLock"><span>').concat(e[29],'</span></div>\n      <div class="key" data-index="KeyA"><span>').concat(e[30],'</span></div>\n      <div class="key" data-index="KeyS"><span>').concat(e[31],'</span></div>\n      <div class="key" data-index="KeyD"><span>').concat(e[32],'</span></div>\n      <div class="key" data-index="KeyF"><span>').concat(e[33],'</span></div>\n      <div class="key" data-index="KeyG"><span>').concat(e[34],'</span></div>\n      <div class="key" data-index="KeyH"><span>').concat(e[35],'</span></div>\n      <div class="key" data-index="KeyJ"><span>').concat(e[36],'</span></div>\n      <div class="key" data-index="KeyK"><span>').concat(e[37],'</span></div>\n      <div class="key" data-index="KeyL"><span>').concat(e[38],'</span></div>\n      <div class="key" data-index="Semicolon"><span>').concat(e[39],'</span></div>\n      <div class="key" data-index="Quote"><span>').concat(e[40],'</span></div>\n      <div class="key enter" data-index="Enter"><span>').concat(e[41],'</span></div>\n    </div>\n    <div class="row">\n      <div class="key shift-left" data-index="ShiftLeft"><span>').concat(e[42],'</span></div>\n      <div class="key" data-index="KeyZ"><span>').concat(e[43],'</span></div>\n      <div class="key" data-index="KeyX"><span>').concat(e[44],'</span></div>\n      <div class="key" data-index="KeyC"><span>').concat(e[45],'</span></div>\n      <div class="key" data-index="KeyV"><span>').concat(e[46],'</span></div>\n      <div class="key" data-index="KeyB"><span>').concat(e[47],'</span></div>\n      <div class="key" data-index="KeyN"><span>').concat(e[48],'</span></div>\n      <div class="key" data-index="KeyM"><span>').concat(e[49],'</span></div>\n      <div class="key" data-index="Comma"><span>').concat(e[50],'</span></div>\n      <div class="key" data-index="Period"><span>').concat(e[51],'</span></div>\n      <div class="key" data-index="Slash"><span>').concat(e[52],'</span></div>\n      <div class="key up" data-index="ArrowUp"><span>').concat(e[53],'</span></div>\n      <div class="key shift-right" data-index="ShiftRight"><span>').concat(e[54],'</span></div>\n    </div>\n    <div class="row">\n      <div class="key ctrl-left" data-index="ControlLeft"><span>').concat(e[55],'</span></div>\n      <div class="key win" data-index="MetaLeft"><span>').concat(e[56],'</span></div>\n      <div class="key alt-left" data-index="AltLeft"><span>').concat(e[57],'</span></div>\n      <div class="key space" data-index="Space"><span>').concat(e[58],'</span></div>\n      <div class="key alt-right" data-index="AltRight"><span>').concat(e[59],'</span></div>\n      <div class="key left" data-index="ArrowLeft"><span>').concat(e[60],'</span></div>\n      <div class="key down" data-index="ArrowDown"><span>').concat(e[61],'</span></div>\n      <div class="key right" data-index="ArrowRight"><span>').concat(e[62],'</span></div>\n      <div class="key ctrl-right" data-index="ControlRight"><span>').concat(e[63],"</span></div>\n    </div>\n  ")}a(387);const r={lang:"en",normal:"` 1 2 3 4 5 6 7 8 9 0 - = backspace del tab q w e r t y u i o p [ ] \\ caps a s d f g h j k l ; , enter shift z x c v b n m , . / 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl",shift:'~ ! @ # $ % ^ & * ( ) _ + backspace del tab Q W E R T Y U I O P { } | caps A S D F G H J K L : " enter shift Z X C V B N M < > ? 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl',caps:"` 1 2 3 4 5 6 7 8 9 0 - = backspace del tab Q W E R T Y U I O P [ ] \\ caps A S D F G H J K L ; , enter shift Z X C V B N M , . / 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl",capsOnShift:'~ ! @ # $ % ^ & * ( ) _ + backspace del tab q w e r t y u i o p { } | caps a s d f g h j k l : " enter shift z x c v b n m < > ? 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl'},i={lang:"ru",normal:"ё 1 2 3 4 5 6 7 8 9 0 - = backspace del tab й ц у к е н г ш щ з х ъ \\ caps ф ы в а п р о л д ж э enter shift я ч с м и т ь б ю . 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl",shift:'Ё ! " № ; % : ? * ( ) _ + backspace del tab Й Ц У К Е Н Г Ш Щ З Х Ъ / caps Ф Ы В А П Р О Л Д Ж Э enter shift Я Ч С М И Т Ь Б Ю , 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl',caps:"Ё 1 2 3 4 5 6 7 8 9 0 - = backspace del tab Й Ц У К Е Н Г Ш Щ З Х Ъ \\ caps Ф Ы В А П Р О Л Д Ж Э enter shift Я Ч С М И Т Ь Б Ю . 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl",capsOnShift:'ё ! " № ; % : ? * ( ) _ + backspace del tab й ц у к е н г ш щ з х ъ / caps ф ы в а п р о л д ж э enter shift я ч с м и т ь б ю , 🡅 shift ctrl win alt space alt 🡄 🡇 🡆 ctrl'};var c=document.createElement("div");c.classList.add("wrapper");var d=document.createElement("textarea");d.classList.add("textarea");var s=document.createElement("div");s.classList.add("keyboard"),s.innerHTML=t(r.normal.split(" "));var o=document.createElement("p");o.innerHTML="Виртуальная клавиатура создана на ОС Windows. Переключение языка ctrl+alt.",c.append(d,s,o);var l=null,p=!1,u="en";function f(e){return e!==document.body&&(e.dataset.index?e.dataset.index:f(e.parentNode))}function v(){return"en"===u?r:i}document.body.append(c),document.body.addEventListener("keydown",(function(e){"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(s.innerHTML=t(p?v().capsOnShift.split(" "):v().shift.split(" "))),"CapsLock"===e.code&&(p?(s.innerHTML=t(v().normal.split(" ")),p=!1):(s.innerHTML=t(v().caps.split(" ")),p=!0))})),document.body.addEventListener("keyup",(function(e){"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(s.innerHTML=t(p?v().caps.split(" "):v().normal.split(" "))),"AltLeft"===e.code&&e.ctrlKey&&(s.innerHTML=t(("en"==(u="en"===u?"ru":"en")?r:i).normal.split(" ")))})),document.body.addEventListener("mousedown",(function(e){var n=f(e.target);l=n,"ShiftLeft"!==n&&"ShiftRight"!==n||(s.innerHTML=t(v().shift.split(" ")))})),document.body.addEventListener("mouseup",(function(){"ShiftLeft"!==l&&"ShiftRight"!==l||(s.innerHTML=t(v().normal.split(" "))),l=null}))},783:(e,n,a)=>{var t=a(618),r=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function d(){}function s(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(l(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var a=e.cloneNode();a.isLoaded=!1,a.addEventListener("load",(function(){a.isLoaded||(a.isLoaded=!0,e.parentNode.removeChild(e))})),a.addEventListener("error",(function(){a.isLoaded||(a.isLoaded=!0,e.parentNode.removeChild(e))})),a.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(a,e.nextSibling):e.parentNode.appendChild(a)}}function o(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&s(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),d;var a,p,u=function(e){var n=r[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var a=document.getElementsByTagName("script"),i=a[a.length-1];i&&(n=i.src)}r[e]=n}return function(e){if(!n)return null;var a=n.split(/([^\\/]+)\.js$/),r=a&&a[1];return r&&e?e.split(",").map((function(e){var a=new RegExp("".concat(r,"\\.js$"),"g");return t(n.replace(a,"".concat(e.replace(/{fileName}/g,r),".css")))})):[n.replace(".js",".css")]}}(e);return a=function(){var e=u(n.filename),a=function(e){if(!e)return!1;var n=document.querySelectorAll("link"),a=!1;return c.call(n,(function(n){if(n.href){var r=function(e,n){var a;return e=t(e),n.some((function(t){e.indexOf(n)>-1&&(a=t)})),a}(n.href,e);l(r)&&!0!==n.visited&&r&&(s(n,r),a=!0)}})),a}(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void o();a?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),o())},50,p=0,function(){var e=this,n=arguments,t=function(){return a.apply(e,n)};clearTimeout(p),p=setTimeout(t,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",a=e.replace(new RegExp(n,"i"),"").split("/"),t=a[0].toLowerCase().replace(/\.$/,"");return a[0]="",n+t+a.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},387:(e,n,a)=>{var t=a(783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},s={};function o(e){var n=s[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var a=s[e]={id:e,exports:{}};try{var t={id:e,module:a,factory:d[e],require:o};o.i.forEach((function(e){e(t)})),a=t.module,t.factory.call(a.exports,a,a.exports,t.require)}catch(e){throw a.error=e,e}return a.exports}o.m=d,o.c=s,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.miniCssF=e=>{},o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"d07933f52095fcc73ba3",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},n="virtual-keyboard:",o.l=(a,t,r,i)=>{if(e[a])e[a].push(t);else{var c,d;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==n+r){c=p;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+r),c.src=a),e[a]=[t];var u=(n,t)=>{c.onerror=c.onload=null,clearTimeout(f);var r=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(t))),n)return n(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),d&&document.head.appendChild(c)}},(()=>{var e,n,a,t={},r=o.c,i=[],c=[],d="idle",s=0,l=[];function p(e){d=e;for(var n=[],a=0;a<c.length;a++)n[a]=c[a].call(null,e);return Promise.all(n)}function u(){0==--s&&p("ready").then((function(){if(0===s){var e=l;l=[];for(var n=0;n<e.length;n++)e[n]()}}))}function f(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return p("check").then(o.hmrM).then((function(a){return a?p("prepare").then((function(){var t=[];return n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,r){return o.hmrC[r](a.c,a.r,a.m,e,n,t),e}),[])).then((function(){return n=function(){return e?h(e):p("ready").then((function(){return t}))},0===s?n():new Promise((function(e){l.push((function(){e(n())}))}));var n}))})):p(y()?"ready":"idle").then((function(){return null}))}))}function v(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):h(e)}function h(e){e=e||{},y();var t=n.map((function(n){return n(e)}));n=void 0;var r=t.map((function(e){return e.error})).filter(Boolean);if(r.length>0)return p("abort").then((function(){throw r[0]}));var i=p("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,d=p("apply"),s=function(e){c||(c=e)},o=[];return t.forEach((function(e){if(e.apply){var n=e.apply(s);if(n)for(var a=0;a<n.length;a++)o.push(n[a])}})),Promise.all([i,d]).then((function(){return c?p("fail").then((function(){throw c})):a?h(e).then((function(e){return o.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):p("idle").then((function(){return o}))}))}function y(){if(a)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){a.forEach((function(a){o.hmrI[e](a,n)}))})),a=void 0,!0}o.hmrD=t,o.i.push((function(l){var h,y,m,k,g=l.module,x=function(n,a){var t=r[a];if(!t)return n;var c=function(c){if(t.hot.active){if(r[c]){var d=r[c].parents;-1===d.indexOf(a)&&d.push(a)}else i=[a],e=c;-1===t.children.indexOf(c)&&t.children.push(c)}else console.warn("[HMR] unexpected require("+c+") from disposed module "+a),i=[];return n(c)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(a){n[e]=a}}};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&"e"!==l&&Object.defineProperty(c,l,o(l));return c.e=function(e){return function(e){switch(d){case"ready":p("prepare");case"prepare":return s++,e.then(u,u),e;default:return e}}(n.e(e))},c}(l.require,l.id);g.hot=(h=l.id,y=g,k={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:m=e!==h,_requireSelf:function(){i=y.parents.slice(),e=m?void 0:h,o(h)},active:!0,accept:function(e,n,a){if(void 0===e)k._selfAccepted=!0;else if("function"==typeof e)k._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)k._acceptedDependencies[e[t]]=n||function(){},k._acceptedErrorHandlers[e[t]]=a;else k._acceptedDependencies[e]=n||function(){},k._acceptedErrorHandlers[e]=a},decline:function(e){if(void 0===e)k._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)k._declinedDependencies[e[n]]=!0;else k._declinedDependencies[e]=!0},dispose:function(e){k._disposeHandlers.push(e)},addDisposeHandler:function(e){k._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=k._disposeHandlers.indexOf(e);n>=0&&k._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](h,n)})),p("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](h,n)}));break;case"prepare":case"check":case"dispose":case"apply":(a=a||[]).push(h)}},check:f,apply:v,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var n=c.indexOf(e);n>=0&&c.splice(n,1)},data:t[h]},e=void 0,k),g.parents=i,g.children=[],i=[],l.require=x})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),a=(e,n,a,t)=>{var r=document.createElement("link");return r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=i=>{if(r.onerror=r.onload=null,"load"===i.type)a();else{var c=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=c,s.request=d,r.parentNode.removeChild(r),t(s)}},r.href=n,document.head.appendChild(r),r},t=(e,n)=>{for(var a=document.getElementsByTagName("link"),t=0;t<a.length;t++){var r=(c=a[t]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(r===e||r===n))return c}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var c;if((r=(c=i[t]).getAttribute("data-href"))===e||r===n)return c}},r=[],i=[],c=e=>({dispose:()=>{for(var e=0;e<r.length;e++){var n=r[e];n.parentNode&&n.parentNode.removeChild(n)}r.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),o.hmrC.miniCss=(e,n,d,s,l,p)=>{l.push(c),e.forEach((e=>{var n=o.miniCssF(e),c=o.p+n,d=t(n,c);d&&s.push(new Promise(((n,t)=>{var s=a(e,c,(()=>{s.as="style",s.rel="preload",n()}),t);r.push(d),i.push(s)})))}))},(()=>{var e,n,a,t,r,i=o.hmrS_jsonp=o.hmrS_jsonp||{179:0},c={};function d(n,a){return e=a,new Promise(((e,a)=>{c[n]=e;var t=o.p+o.hu(n),r=new Error;o.l(t,(e=>{if(c[n]){c[n]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;r.message="Loading hot update chunk "+n+" failed.\n("+t+": "+i+")",r.name="ChunkLoadError",r.type=t,r.request=i,a(r)}}))}))}function s(e){function c(e){for(var n=[e],a={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var r=t.pop(),i=r.id,c=r.chain,s=o.c[i];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<s.parents.length;l++){var p=s.parents[l],u=o.c[p];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([p]),moduleId:i,parentId:p};-1===n.indexOf(p)&&(u.hot._acceptedDependencies[i]?(a[p]||(a[p]=[]),d(a[p],[i])):(delete a[p],n.push(p),t.push({chain:c.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:a}}function d(e,n){for(var a=0;a<n.length;a++){var t=n[a];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,n=void 0;var s={},l=[],p={},u=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in a)if(o.o(a,f)){var v,h=a[f],y=!1,m=!1,k=!1,g="";switch((v=h?c(f):{type:"disposed",moduleId:f}).chain&&(g="\nUpdate propagation: "+v.chain.join(" -> ")),v.type){case"self-declined":e.onDeclined&&e.onDeclined(v),e.ignoreDeclined||(y=new Error("Aborted because of self decline: "+v.moduleId+g));break;case"declined":e.onDeclined&&e.onDeclined(v),e.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+v.moduleId+" in "+v.parentId+g));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(v),e.ignoreUnaccepted||(y=new Error("Aborted because "+f+" is not accepted"+g));break;case"accepted":e.onAccepted&&e.onAccepted(v),m=!0;break;case"disposed":e.onDisposed&&e.onDisposed(v),k=!0;break;default:throw new Error("Unexception type "+v.type)}if(y)return{error:y};if(m)for(f in p[f]=h,d(l,v.outdatedModules),v.outdatedDependencies)o.o(v.outdatedDependencies,f)&&(s[f]||(s[f]=[]),d(s[f],v.outdatedDependencies[f]));k&&(d(l,[v.moduleId]),p[f]=u)}a=void 0;for(var x,b=[],w=0;w<l.length;w++){var E=l[w],D=o.c[E];D&&(D.hot._selfAccepted||D.hot._main)&&p[E]!==u&&!D.hot._selfInvalidated&&b.push({module:E,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var n,a=l.slice();a.length>0;){var r=a.pop(),c=o.c[r];if(c){var d={},p=c.hot._disposeHandlers;for(w=0;w<p.length;w++)p[w].call(null,d);for(o.hmrD[r]=d,c.hot.active=!1,delete o.c[r],delete s[r],w=0;w<c.children.length;w++){var u=o.c[c.children[w]];u&&(e=u.parents.indexOf(r))>=0&&u.parents.splice(e,1)}}}for(var f in s)if(o.o(s,f)&&(c=o.c[f]))for(x=s[f],w=0;w<x.length;w++)n=x[w],(e=c.children.indexOf(n))>=0&&c.children.splice(e,1)},apply:function(n){for(var a in p)o.o(p,a)&&(o.m[a]=p[a]);for(var t=0;t<r.length;t++)r[t](o);for(var i in s)if(o.o(s,i)){var c=o.c[i];if(c){x=s[i];for(var d=[],u=[],f=[],v=0;v<x.length;v++){var h=x[v],y=c.hot._acceptedDependencies[h],m=c.hot._acceptedErrorHandlers[h];if(y){if(-1!==d.indexOf(y))continue;d.push(y),u.push(m),f.push(h)}}for(var k=0;k<d.length;k++)try{d[k].call(null,x)}catch(a){if("function"==typeof u[k])try{u[k](a,{moduleId:i,dependencyId:f[k]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[k],error:t,originalError:a}),e.ignoreErrored||(n(t),n(a))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[k],error:a}),e.ignoreErrored||n(a)}}}for(var g=0;g<b.length;g++){var w=b[g],E=w.module;try{w.require(E)}catch(a){if("function"==typeof w.errorHandler)try{w.errorHandler(a,{moduleId:E,module:o.c[E]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:E,error:t,originalError:a}),e.ignoreErrored||(n(t),n(a))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:E,error:a}),e.ignoreErrored||n(a)}}return l}}}self.webpackHotUpdatevirtual_keyboard=(n,t,i)=>{for(var d in t)o.o(t,d)&&(a[d]=t[d],e&&e.push(d));i&&r.push(i),c[n]&&(c[n](),c[n]=void 0)},o.hmrI.jsonp=function(e,n){a||(a={},r=[],t=[],n.push(s)),o.o(a,e)||(a[e]=o.m[e])},o.hmrC.jsonp=function(e,c,l,p,u,f){u.push(s),n={},t=c,a=l.reduce((function(e,n){return e[n]=!1,e}),{}),r=[],e.forEach((function(e){o.o(i,e)&&void 0!==i[e]?(p.push(d(e,f)),n[e]=!0):n[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,a){n&&o.o(n,e)&&!n[e]&&(a.push(d(e)),n[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(912)})();