const M="modulepreload",x=function(a){return"/assets/material-blade/"+a},R={},I=function(n,t,e){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(t.map(u=>{if(u=x(u),u in R)return;R[u]=!0;const d=u.endsWith(".css"),s=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${s}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":M,d||(c.as="script",c.crossOrigin=""),c.href=u,o&&c.setAttribute("nonce",o),document.head.appendChild(c),d)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}return r.then(()=>n()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var C=function(a,n){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},C(a,n)};function b(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");C(a,n);function t(){this.constructor=a}a.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var p=function(){return p=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},p.apply(this,arguments)};function $(a,n,t,e){function r(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function u(c){try{s(e.next(c))}catch(f){o(f)}}function d(c){try{s(e.throw(c))}catch(f){o(f)}}function s(c){c.done?i(c.value):r(c.value).then(u,d)}s((e=e.apply(a,n||[])).next())})}function Z(a,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,r,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(s){return function(c){return d([s,c])}}function d(s){if(e)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(t=0)),t;)try{if(e=1,r&&(i=s[0]&2?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,r=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1],i=s;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(s);break}i[2]&&t.ops.pop(),t.trys.pop();continue}s=n.call(a,t)}catch(c){s=[6,c],r=0}finally{e=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function v(a){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&a[n],e=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&e>=a.length&&(a=void 0),{value:a&&a[e++],done:!a}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function G(a,n){var t=typeof Symbol=="function"&&a[Symbol.iterator];if(!t)return a;var e=t.call(a),r,i=[],o;try{for(;(n===void 0||n-- >0)&&!(r=e.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(t=e.return)&&t.call(e)}finally{if(o)throw o.error}}return i}function E(a,n,t){if(t||arguments.length===2)for(var e=0,r=n.length,i;e<r;e++)(i||!(e in n))&&(i||(i=Array.prototype.slice.call(n,0,e)),i[e]=n[e]);return a.concat(i||Array.prototype.slice.call(n))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w=function(){function a(n){n===void 0&&(n={}),this.adapter=n}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var H=function(){function a(n,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];this.root=n,this.initialize.apply(this,E([],G(e))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return a.attachTo=function(n){return new a(n,new w({}))},a.prototype.initialize=function(){},a.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},a.prototype.initialSyncWithDOM=function(){},a.prototype.destroy=function(){this.foundation.destroy()},a.prototype.listen=function(n,t,e){this.root.addEventListener(n,t,e)},a.prototype.unlisten=function(n,t,e){this.root.removeEventListener(n,t,e)},a.prototype.emit=function(n,t,e){e===void 0&&(e=!1);var r;typeof CustomEvent=="function"?r=new CustomEvent(n,{bubbles:e,detail:t}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(n,e,!1,t)),this.root.dispatchEvent(r)},a}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function m(a){return a===void 0&&(a=window),k(a)?{passive:!0}:!1}function k(a){a===void 0&&(a=window);var n=!1;try{var t={get passive(){return n=!0,!1}},e=function(){};a.document.addEventListener("test",e,t),a.document.removeEventListener("test",e,t)}catch{n=!1}return n}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function J(a,n){if(a.closest)return a.closest(n);for(var t=a;t;){if(O(t,n))return t;t=t.parentElement}return null}function O(a,n){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,n)}function K(a){var n=a;if(n.offsetParent!==null)return n.scrollWidth;var t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var e=t.scrollWidth;return document.documentElement.removeChild(t),e}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var z={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},P={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},F={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},y;function j(a,n){n===void 0&&(n=!1);var t=a.CSS,e=y;if(typeof y=="boolean"&&!n)return y;var r=t&&typeof t.supports=="function";if(!r)return!1;var i=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return e=i||o,n||(y=e),e}function T(a,n,t){if(!a)return{x:0,y:0};var e=n.x,r=n.y,i=e+t.left,o=r+t.top,u,d;if(a.type==="touchstart"){var s=a;u=s.changedTouches[0].pageX-i,d=s.changedTouches[0].pageY-o}else{var c=a;u=c.pageX-i,d=c.pageY-o}return{x:u,y:d}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var L=["touchstart","pointerdown","mousedown","keydown"],_=["touchend","pointerup","mouseup","contextmenu"],g=[],q=function(a){b(n,a);function n(t){var e=a.call(this,p(p({},n.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(r){e.activateImpl(r)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return Object.defineProperty(n,"cssClasses",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return P},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var r=n.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(i),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},n.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION));var e=n.cssClasses,r=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(i),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},n.prototype.activate=function(t){this.activateImpl(t)},n.prototype.deactivate=function(){this.deactivateImpl()},n.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},n.prototype.setUnbounded=function(t){var e=n.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},n.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(n.cssClasses.BG_FOCUSED)})},n.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(n.cssClasses.BG_FOCUSED)})},n.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},n.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},n.prototype.registerRootHandlers=function(t){var e,r;if(t){try{for(var i=v(L),o=i.next();!o.done;o=i.next()){var u=o.value;this.adapter.registerInteractionHandler(u,this.activateHandler)}}catch(d){e={error:d}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},n.prototype.registerDeactivationHandlers=function(t){var e,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var i=v(_),o=i.next();!o.done;o=i.next()){var u=o.value;this.adapter.registerDocumentInteractionHandler(u,this.deactivateHandler)}}catch(d){e={error:d}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}},n.prototype.deregisterRootHandlers=function(){var t,e;try{for(var r=v(L),i=r.next();!i.done;i=r.next()){var o=i.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(u){t={error:u}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},n.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=v(_),i=r.next();!i.done;i=r.next()){var o=i.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(u){t={error:u}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},n.prototype.removeCssVars=function(){var t=this,e=n.strings,r=Object.keys(e);r.forEach(function(i){i.indexOf("VAR_")===0&&t.adapter.updateCssVariable(e[i],null)})},n.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var i=this.previousActivationEvent,o=i&&t!==void 0&&i.type!==t.type;if(!o){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var u=t!==void 0&&g.length>0&&g.some(function(d){return e.adapter.containsEventTarget(d)});if(u){this.resetActivationState();return}t!==void 0&&(g.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){g=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=e.checkElementMadeActive(t),r.wasElementMadeActive&&e.animateActivation()),r.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},n.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},n.prototype.animateActivation=function(){var t=this,e=n.strings,r=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,o=n.cssClasses,u=o.FG_DEACTIVATION,d=o.FG_ACTIVATION,s=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",f="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),S=h.startPoint,D=h.endPoint;c=S.x+"px, "+S.y+"px",f=D.x+"px, "+D.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(i,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(u),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},s)},n.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,e=t.activationEvent,r=t.wasActivatedByPointer,i;r?i=T(e,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):i={x:this.frame.width/2,y:this.frame.height/2},i={x:i.x-this.initialSize/2,y:i.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:i,endPoint:o}},n.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=n.cssClasses.FG_DEACTIVATION,r=this.activationState,i=r.hasDeactivationUXRun,o=r.isActivated,u=i||!o;u&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},F.FG_DEACTIVATION_MS))},n.prototype.rmBoundedActivationClasses=function(){var t=n.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},n.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},n.numbers.TAP_DELAY_MS)},n.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var r=p({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},n.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,r=t.wasElementMadeActive;(e||r)&&this.runDeactivationUXLogicIfReady()},n.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+n.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?e:r();var i=Math.floor(e*n.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!==0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},n.prototype.updateLayoutCssVars=function(){var t=n.strings,e=t.VAR_FG_SIZE,r=t.VAR_LEFT,i=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(i,this.unboundedCoords.top+"px"))},n}(w);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U=function(a){b(n,a);function n(){var t=a!==null&&a.apply(this,arguments)||this;return t.disabled=!1,t}return n.attachTo=function(t,e){e===void 0&&(e={isUnbounded:void 0});var r=new n(t);return e.isUnbounded!==void 0&&(r.unbounded=e.isUnbounded),r},n.createAdapter=function(t){return{addClass:function(e){return t.root.classList.add(e)},browserSupportsCssVars:function(){return j(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(e,r){return document.documentElement.removeEventListener(e,r,m())},deregisterInteractionHandler:function(e,r){return t.root.removeEventListener(e,r,m())},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return O(t.root,":active")},isSurfaceDisabled:function(){return!!t.disabled},isUnbounded:function(){return!!t.unbounded},registerDocumentInteractionHandler:function(e,r){return document.documentElement.addEventListener(e,r,m())},registerInteractionHandler:function(e,r){return t.root.addEventListener(e,r,m())},registerResizeHandler:function(e){return window.addEventListener("resize",e)},removeClass:function(e){return t.root.classList.remove(e)},updateCssVariable:function(e,r){return t.root.style.setProperty(e,r)}}},Object.defineProperty(n.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(t){this.isUnbounded=!!t,this.setUnbounded()},enumerable:!1,configurable:!0}),n.prototype.activate=function(){this.foundation.activate()},n.prototype.deactivate=function(){this.foundation.deactivate()},n.prototype.layout=function(){this.foundation.layout()},n.prototype.getDefaultFoundation=function(){return new q(n.createAdapter(this))},n.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},n.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},n}(H);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},l={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var B=function(a){b(n,a);function n(t){var e=a.call(this,p(p({},n.defaultAdapter),t))||this;return e.hasToggledAriaLabel=!1,e}return Object.defineProperty(n,"cssClasses",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t=this.adapter.getAttr(l.DATA_ARIA_LABEL_ON),e=this.adapter.getAttr(l.DATA_ARIA_LABEL_OFF);if(t&&e){if(this.adapter.getAttr(l.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(l.ARIA_PRESSED,String(this.isOn()))},n.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},n.prototype.isOn=function(){return this.adapter.hasClass(A.ICON_BUTTON_ON)},n.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(A.ICON_BUTTON_ON):this.adapter.removeClass(A.ICON_BUTTON_ON),this.hasToggledAriaLabel){var e=t?this.adapter.getAttr(l.DATA_ARIA_LABEL_ON):this.adapter.getAttr(l.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(l.ARIA_LABEL,e||"")}else this.adapter.setAttr(l.ARIA_PRESSED,""+t)},n}(w);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var W=B.strings,X=function(a){b(n,a);function n(){var t=a!==null&&a.apply(this,arguments)||this;return t.rippleComponent=t.createRipple(),t}return n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},n.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),a.prototype.destroy.call(this)},n.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(r){return t.root.classList.add(r)},hasClass:function(r){return t.root.classList.contains(r)},notifyChange:function(r){t.emit(W.CHANGE_EVENT,r)},removeClass:function(r){return t.root.classList.remove(r)},getAttr:function(r){return t.root.getAttribute(r)},setAttr:function(r,i){return t.root.setAttribute(r,i)}};return new B(e)},Object.defineProperty(n.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"on",{get:function(){return this.foundation.isOn()},set:function(t){this.foundation.toggle(t)},enumerable:!1,configurable:!0}),n.prototype.createRipple=function(){var t=new U(this.root);return t.unbounded=!0,t},n}(H);document.addEventListener("DOMContentLoaded",()=>{I(async()=>{const{autoInit:a}=await import("./vendor.js");return{autoInit:a}},[]).then(({autoInit:a})=>a()),V()});function V(){document.querySelectorAll(".mdc-icon-button").forEach(a=>{if(a.querySelector(".mdc-icon-button__icon--on")){new X(a);return}if(a.querySelector(".mdc-icon-button__ripple")){const n=new U(a);n.unbounded=!0}})}export{w as M,v as _,b as a,p as b,J as c,H as d,U as e,m as f,q as g,$ as h,Z as i,G as j,E as k,K as l,O as m,X as n};
