var en=function(o,e){return en=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},en(o,e)};function m(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");en(o,e);function t(){this.constructor=o}o.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var f=function(){return f=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)};function Mi(o,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function s(c){try{l(n.next(c))}catch(p){a(p)}}function u(c){try{l(n.throw(c))}catch(p){a(p)}}function l(c){c.done?r(c.value):i(c.value).then(s,u)}l((n=n.apply(o,e||[])).next())})}function wi(o,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(c){return u([l,c])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(t=0)),t;)try{if(n=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(o,t)}catch(c){l=[6,c],i=0}finally{n=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function b(o){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&o[e],n=0;if(t)return t.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&n>=o.length&&(o=void 0),{value:o&&o[n++],done:!o}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Te(o,e){var t=typeof Symbol=="function"&&o[Symbol.iterator];if(!t)return o;var n=t.call(o),i,r=[],a;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return r}function ln(o,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,r;n<i;n++)(r||!(n in e))&&(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return o.concat(r||Array.prototype.slice.call(e))}/**
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
 */var cn={AUTO_INIT_ATTR:"data-mdc-auto-init",AUTO_INIT_STATE_ATTR:"data-mdc-auto-init-state",INITIALIZED_STATE:"initialized"};/**
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
 */var An=cn.AUTO_INIT_ATTR,Cn=cn.AUTO_INIT_STATE_ATTR,vn=cn.INITIALIZED_STATE,ge={},Hi=console.warn.bind(console);function Pi(o,e,t){t===void 0&&(t=!1);var n;typeof CustomEvent=="function"?n=new CustomEvent(o,{bubbles:t,detail:e}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(o,t,!1,e)),document.dispatchEvent(n)}function x(o){var e,t;o===void 0&&(o=document);var n=[],i=[].slice.call(o.querySelectorAll("["+An+"]"));i=i.filter(function(p){return p.getAttribute(Cn)!==vn});try{for(var r=b(i),a=r.next();!a.done;a=r.next()){var s=a.value,u=s.getAttribute(An);if(!u)throw new Error("(mdc-auto-init) Constructor name must be given.");var l=ge[u];if(typeof l!="function")throw new Error("(mdc-auto-init) Could not find constructor in registry for "+u);var c=l.attachTo(s);Object.defineProperty(s,u,{configurable:!0,enumerable:!1,value:c,writable:!1}),n.push(c),s.setAttribute(Cn,vn)}}catch(p){e={error:p}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}return Pi("MDCAutoInit:End",{}),n}x.register=function(o,e,t){if(t===void 0&&(t=Hi),typeof e!="function")throw new Error("(mdc-auto-init) Invalid Constructor value: "+e+". Expected function.");var n=ge[o];n&&t("(mdc-auto-init) Overriding registration for "+o+" with "+e+". Was: "+n),ge[o]=e};x.deregister=function(o){delete ge[o]};x.deregisterAll=function(){var o,e;try{for(var t=b(Object.keys(ge)),n=t.next();!n.done;n=t.next()){var i=n.value;x.deregister(i)}}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=t.return)&&e.call(t)}finally{if(o)throw o.error}}};/**
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
 */var O=function(){function o(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(o,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),o.prototype.init=function(){},o.prototype.destroy=function(){},o}();/**
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
 */var _=function(){function o(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=e,this.initialize.apply(this,ln([],Te(n))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return o.attachTo=function(e){return new o(e,new O({}))},o.prototype.initialize=function(){},o.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},o.prototype.initialSyncWithDOM=function(){},o.prototype.destroy=function(){this.foundation.destroy()},o.prototype.listen=function(e,t,n){this.root.addEventListener(e,t,n)},o.prototype.unlisten=function(e,t,n){this.root.removeEventListener(e,t,n)},o.prototype.emit=function(e,t,n){n===void 0&&(n=!1);var i;typeof CustomEvent=="function"?i=new CustomEvent(e,{bubbles:n,detail:t}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,n,!1,t)),this.root.dispatchEvent(i)},o}();/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Be="mdc-dom-focus-sentinel",dn=function(){function o(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return o.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},o.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Be)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},o.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},o.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},o.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",r=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(Be)&&!i,a=!1;if(r){var s=getComputedStyle(n);a=s.display==="none"||s.visibility==="hidden"}return r&&!a})},o.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Be),e},o}();/**
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
 */function gt(o,e){if(o.closest)return o.closest(e);for(var t=o;t;){if(ct(t,e))return t;t=t.parentElement}return null}function ct(o,e){var t=o.matches||o.webkitMatchesSelector||o.msMatchesSelector;return t.call(o,e)}function Fi(o){var e=o;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var hn={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"},In={BANNER_ANIMATION_CLOSE_TIME_MS:250,BANNER_ANIMATION_OPEN_TIME_MS:300},re={CLOSED:"MDCBanner:closed",CLOSING:"MDCBanner:closing",OPENED:"MDCBanner:opened",OPENING:"MDCBanner:opening",ACTION_CLICKED:"MDCBanner:actionClicked"},$t={CONTENT:".mdc-banner__content",PRIMARY_ACTION:".mdc-banner__primary-action",SECONDARY_ACTION:".mdc-banner__secondary-action",TEXT:".mdc-banner__text"},xe;(function(o){o[o.PRIMARY=0]="PRIMARY",o[o.SECONDARY=1]="SECONDARY",o[o.UNSPECIFIED=2]="UNSPECIFIED"})(xe||(xe={}));var yn;(function(o){o[o.PRIMARY=0]="PRIMARY",o[o.SECONDARY=1]="SECONDARY",o[o.UNKNOWN=2]="UNKNOWN"})(yn||(yn={}));/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var ke=hn.OPENING,Sn=hn.OPEN,Ve=hn.CLOSING,Bi=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.isOpened=!1,n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getContentHeight:function(){return 0},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},notifyActionClicked:function(){},releaseFocus:function(){},removeClass:function(){},setStyleProperty:function(){},trapFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0},e.prototype.open=function(){var t=this;this.isOpened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Ve),this.adapter.addClass(ke);var n=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(function(){t.adapter.addClass(Sn),t.adapter.setStyleProperty("height",n+"px"),t.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.trapFocus(),t.adapter.notifyOpened()},In.BANNER_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;this.isOpened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Ve),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(Sn),this.adapter.removeClass(ke),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},In.BANNER_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpened},e.prototype.handlePrimaryActionClick=function(t){t===void 0&&(t=!1),t?this.adapter.notifyActionClicked(0):this.close(xe.PRIMARY)},e.prototype.handleSecondaryActionClick=function(t){t===void 0&&(t=!1),t?this.adapter.notifyActionClicked(1):this.close(xe.SECONDARY)},e.prototype.layout=function(){var t=this.adapter.getContentHeight();this.adapter.setStyleProperty("height",t+"px")},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(ke),this.adapter.removeClass(Ve)},e}(O);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var ki=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n=this;t===void 0&&(t=function(i,r){return new dn(i,r)}),this.contentEl=this.root.querySelector($t.CONTENT),this.textEl=this.root.querySelector($t.TEXT),this.primaryActionEl=this.root.querySelector($t.PRIMARY_ACTION),this.secondaryActionEl=this.root.querySelector($t.SECONDARY_ACTION),this.focusTrapFactory=t,this.handleContentClick=function(i){var r=i.target;gt(r,$t.PRIMARY_ACTION)?n.foundation.handlePrimaryActionClick():gt(r,$t.SECONDARY_ACTION)&&n.foundation.handleSecondaryActionClick()}},e.prototype.initialSyncWithDOM=function(){this.registerContentClickHandler(this.handleContentClick),this.focusTrap=this.focusTrapFactory(this.root,{initialFocusEl:this.primaryActionEl})},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.deregisterContentClickHandler(this.handleContentClick)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},getContentHeight:function(){return t.contentEl.offsetHeight},notifyClosed:function(i){t.emit(re.CLOSED,{reason:i})},notifyClosing:function(i){t.emit(re.CLOSING,{reason:i})},notifyOpened:function(){t.emit(re.OPENED,{})},notifyOpening:function(){t.emit(re.OPENING,{})},notifyActionClicked:function(i){t.emit(re.ACTION_CLICKED,{action:i})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeClass:function(i){t.root.classList.remove(i)},setStyleProperty:function(i,r){t.root.style.setProperty(i,r)},trapFocus:function(){t.focusTrap.trapFocus()}};return new Bi(n)},Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),e.prototype.getText=function(){return this.textEl.textContent||""},e.prototype.setText=function(t){this.textEl.textContent=t},e.prototype.getPrimaryActionText=function(){return this.primaryActionEl.textContent||""},e.prototype.setPrimaryActionText=function(t){this.primaryActionEl.textContent=t},e.prototype.getSecondaryActionText=function(){return this.secondaryActionEl?this.secondaryActionEl.textContent||"":null},e.prototype.setSecondaryActionText=function(t){this.secondaryActionEl&&(this.secondaryActionEl.textContent=t)},e.prototype.registerContentClickHandler=function(t){this.contentEl.addEventListener("click",t)},e.prototype.deregisterContentClickHandler=function(t){this.contentEl.removeEventListener("click",t)},e}(_);/**
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
 */var Rn={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},bn={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function hi(o){return!!o.document&&typeof o.document.createElement=="function"}function ie(o,e){if(hi(o)&&e in Rn){var t=o.document.createElement("div"),n=Rn[e],i=n.standard,r=n.prefixed,a=i in t.style;return a?i:r}return e}function On(o,e){if(hi(o)&&e in bn){var t=o.document.createElement("div"),n=bn[e],i=n.standard,r=n.prefixed,a=n.cssProperty,s=a in t.style;return s?i:r}return e}/**
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
 */function K(o){return o===void 0&&(o=window),Vi(o)?{passive:!0}:!1}function Vi(o){o===void 0&&(o=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};o.document.addEventListener("test",n,t),o.document.removeEventListener("test",n,t)}catch{e=!1}return e}/**
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
 */var Ui={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ki={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},_n={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},Ae;function Wi(o,e){e===void 0&&(e=!1);var t=o.CSS,n=Ae;if(typeof Ae=="boolean"&&!e)return Ae;var i=t&&typeof t.supports=="function";if(!i)return!1;var r=t.supports("--css-vars","yes"),a=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=r||a,e||(Ae=n),n}function Gi(o,e,t){if(!o)return{x:0,y:0};var n=e.x,i=e.y,r=n+t.left,a=i+t.top,s,u;if(o.type==="touchstart"){var l=o;s=l.changedTouches[0].pageX-r,u=l.changedTouches[0].pageY-a}else{var c=o;s=c.pageX-r,u=c.pageY-a}return{x:s,y:u}}/**
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
 */var Ln=["touchstart","pointerdown","mousedown","keydown"],Dn=["touchend","pointerup","mouseup","contextmenu"],Ce=[],At=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ui},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ki},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return _n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,r=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var r=b(Ln),a=r.next();!a.done;a=r.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=b(Dn),a=r.next();!a.done;a=r.next()){var s=a.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=b(Ln),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=b(Dn),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[r],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent,a=r&&t!==void 0&&r.type!==t.type;if(!a){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&Ce.length>0&&Ce.some(function(u){return n.adapter.containsEventTarget(u)});if(s){this.resetActivationState();return}t!==void 0&&(Ce.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Ce=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,a=e.cssClasses,s=a.FG_DEACTIVATION,u=a.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",p="";if(!this.adapter.isUnbounded()){var E=this.getFgTranslationCoordinates(),h=E.startPoint,T=E.endPoint;c=h.x+"px, "+h.y+"px",p=T.x+"px, "+T.y+"px"}this.adapter.updateCssVariable(i,c),this.adapter.updateCssVariable(r,p),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,r;i?r=Gi(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,r=i.hasDeactivationUXRun,a=i.isActivated,s=r||!a;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},_n.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=f({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var a=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(O);/**
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
 */var k=function(o){m(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.disabled=!1,t}return e.attachTo=function(t,n){n===void 0&&(n={isUnbounded:void 0});var i=new e(t);return n.isUnbounded!==void 0&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(n){return t.root.classList.add(n)},browserSupportsCssVars:function(){return Wi(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(n,i){return document.documentElement.removeEventListener(n,i,K())},deregisterInteractionHandler:function(n,i){return t.root.removeEventListener(n,i,K())},deregisterResizeHandler:function(n){return window.removeEventListener("resize",n)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return ct(t.root,":active")},isSurfaceDisabled:function(){return!!t.disabled},isUnbounded:function(){return!!t.unbounded},registerDocumentInteractionHandler:function(n,i){return document.documentElement.addEventListener(n,i,K())},registerInteractionHandler:function(n,i){return t.root.addEventListener(n,i,K())},registerResizeHandler:function(n){return window.addEventListener("resize",n)},removeClass:function(n){return t.root.classList.remove(n)},updateCssVariable:function(n,i){return t.root.style.setProperty(n,i)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(t){this.isUnbounded=!!t,this.setUnbounded()},enumerable:!1,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new At(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},e}(_);/**
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
 */var oe={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},ot={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},Nn={ANIM_END_LATCH_MS:250};/**
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
 */var ji=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.currentCheckState=ot.TRANSITION_STATE_INIT,n.currentAnimationClass="",n.animEndLatchTimer=0,n.enableAnimationEndHandler=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return oe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Nn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(oe.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(oe.DISABLED):this.adapter.removeClass(oe.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){t.adapter.removeClass(t.currentAnimationClass),t.enableAnimationEndHandler=!1},Nn.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var t=this.currentCheckState,n=this.determineCheckState();if(t!==n){this.updateAriaChecked();var i=ot.TRANSITION_STATE_UNCHECKED,r=oe.SELECTED;n===i?this.adapter.removeClass(r):this.adapter.addClass(r),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(t,n),this.currentCheckState=n,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var t=ot.TRANSITION_STATE_INDETERMINATE,n=ot.TRANSITION_STATE_CHECKED,i=ot.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?n:i},e.prototype.getTransitionAnimationClass=function(t,n){var i=ot.TRANSITION_STATE_INIT,r=ot.TRANSITION_STATE_CHECKED,a=ot.TRANSITION_STATE_UNCHECKED,s=e.cssClasses,u=s.ANIM_UNCHECKED_CHECKED,l=s.ANIM_UNCHECKED_INDETERMINATE,c=s.ANIM_CHECKED_UNCHECKED,p=s.ANIM_CHECKED_INDETERMINATE,E=s.ANIM_INDETERMINATE_CHECKED,h=s.ANIM_INDETERMINATE_UNCHECKED;switch(t){case i:return n===a?"":n===r?E:h;case a:return n===r?u:l;case r:return n===a?c:p;default:return n===r?E:h}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(ot.ARIA_CHECKED_ATTR,ot.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(ot.ARIA_CHECKED_ATTR)},e}(O);/**
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
 */var xn=["checked","indeterminate"],fi=function(o){m(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.getNativeControl().checked},set:function(t){this.getNativeControl().checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.getNativeControl().indeterminate},set:function(t){this.getNativeControl().indeterminate=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.getNativeControl().disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.getNativeControl().value},set:function(t){this.getNativeControl().value=t},enumerable:!1,configurable:!0}),e.prototype.initialize=function(){var t=ot.DATA_INDETERMINATE_ATTR;this.getNativeControl().indeterminate=this.getNativeControl().getAttribute(t)==="true",this.getNativeControl().removeAttribute(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange=function(){t.foundation.handleChange()},this.handleAnimationEnd=function(){t.foundation.handleAnimationEnd()},this.getNativeControl().addEventListener("change",this.handleChange),this.listen(On(window,"animationend"),this.handleAnimationEnd),this.installPropertyChangeHooks()},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.getNativeControl().removeEventListener("change",this.handleChange),this.unlisten(On(window,"animationend"),this.handleAnimationEnd),this.uninstallPropertyChangeHooks(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},forceLayout:function(){return t.root.offsetWidth},hasNativeControl:function(){return!!t.getNativeControl()},isAttachedToDOM:function(){return!!t.root.parentNode},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(i){t.root.classList.remove(i)},removeNativeControlAttr:function(i){t.getNativeControl().removeAttribute(i)},setNativeControlAttr:function(i,r){t.getNativeControl().setAttribute(i,r)},setNativeControlDisabled:function(i){t.getNativeControl().disabled=i}};return new ji(n)},e.prototype.createRipple=function(){var t=this,n=f(f({},k.createAdapter(this)),{deregisterInteractionHandler:function(i,r){t.getNativeControl().removeEventListener(i,r,K())},isSurfaceActive:function(){return ct(t.getNativeControl(),":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(i,r){t.getNativeControl().addEventListener(i,r,K())}});return new k(this.root,new At(n))},e.prototype.installPropertyChangeHooks=function(){var t,n,i=this,r=this.getNativeControl(),a=Object.getPrototypeOf(r),s=function(E){var h=Object.getOwnPropertyDescriptor(a,E);if(!Mn(h))return{value:void 0};var T=h.get,g={configurable:h.configurable,enumerable:h.enumerable,get:T,set:function(y){h.set.call(r,y),i.foundation.handleChange()}};Object.defineProperty(r,E,g)};try{for(var u=b(xn),l=u.next();!l.done;l=u.next()){var c=l.value,p=s(c);if(typeof p=="object")return p.value}}catch(E){t={error:E}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}},e.prototype.uninstallPropertyChangeHooks=function(){var t,n,i=this.getNativeControl(),r=Object.getPrototypeOf(i);try{for(var a=b(xn),s=a.next();!s.done;s=a.next()){var u=s.value,l=Object.getOwnPropertyDescriptor(r,u);if(!Mn(l))return;Object.defineProperty(i,u,l)}}catch(c){t={error:c}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}},e.prototype.getNativeControl=function(){var t=ot.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Checkbox component requires a "+t+" element");return n},e}(_);function Mn(o){return!!o&&typeof o.set=="function"}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Ft;(function(o){o[o.UNSPECIFIED=0]="UNSPECIFIED",o[o.CLICK=1]="CLICK",o[o.BACKSPACE_KEY=2]="BACKSPACE_KEY",o[o.DELETE_KEY=3]="DELETE_KEY",o[o.SPACEBAR_KEY=4]="SPACEBAR_KEY",o[o.ENTER_KEY=5]="ENTER_KEY"})(Ft||(Ft={}));var St={ARIA_HIDDEN:"aria-hidden",INTERACTION_EVENT:"MDCChipTrailingAction:interaction",NAVIGATION_EVENT:"MDCChipTrailingAction:navigation",TAB_INDEX:"tabindex"};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var v={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},nt=new Set;nt.add(v.BACKSPACE);nt.add(v.ENTER);nt.add(v.SPACEBAR);nt.add(v.PAGE_UP);nt.add(v.PAGE_DOWN);nt.add(v.END);nt.add(v.HOME);nt.add(v.ARROW_LEFT);nt.add(v.ARROW_UP);nt.add(v.ARROW_RIGHT);nt.add(v.ARROW_DOWN);nt.add(v.DELETE);nt.add(v.ESCAPE);nt.add(v.TAB);var at={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},it=new Map;it.set(at.BACKSPACE,v.BACKSPACE);it.set(at.ENTER,v.ENTER);it.set(at.SPACEBAR,v.SPACEBAR);it.set(at.PAGE_UP,v.PAGE_UP);it.set(at.PAGE_DOWN,v.PAGE_DOWN);it.set(at.END,v.END);it.set(at.HOME,v.HOME);it.set(at.ARROW_LEFT,v.ARROW_LEFT);it.set(at.ARROW_UP,v.ARROW_UP);it.set(at.ARROW_RIGHT,v.ARROW_RIGHT);it.set(at.ARROW_DOWN,v.ARROW_DOWN);it.set(at.DELETE,v.DELETE);it.set(at.ESCAPE,v.ESCAPE);it.set(at.TAB,v.TAB);var wt=new Set;wt.add(v.PAGE_UP);wt.add(v.PAGE_DOWN);wt.add(v.END);wt.add(v.HOME);wt.add(v.ARROW_LEFT);wt.add(v.ARROW_UP);wt.add(v.ARROW_RIGHT);wt.add(v.ARROW_DOWN);function W(o){var e=o.key;if(nt.has(e))return e;var t=it.get(o.keyCode);return t||v.UNKNOWN}function Xi(o){return wt.has(W(o))}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var qi=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return St},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{focus:function(){},getAttribute:function(){return null},setAttribute:function(){},notifyInteraction:function(){},notifyNavigation:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(t){t.stopPropagation(),this.adapter.notifyInteraction(Ft.CLICK)},e.prototype.handleKeydown=function(t){t.stopPropagation();var n=W(t);if(this.shouldNotifyInteractionFromKey(n)){var i=this.getTriggerFromKey(n);this.adapter.notifyInteraction(i);return}if(Xi(t)){this.adapter.notifyNavigation(n);return}},e.prototype.removeFocus=function(){this.adapter.setAttribute(St.TAB_INDEX,"-1")},e.prototype.focus=function(){this.adapter.setAttribute(St.TAB_INDEX,"0"),this.adapter.focus()},e.prototype.isNavigable=function(){return this.adapter.getAttribute(St.ARIA_HIDDEN)!=="true"},e.prototype.shouldNotifyInteractionFromKey=function(t){var n=t===v.ENTER||t===v.SPACEBAR,i=t===v.BACKSPACE||t===v.DELETE;return n||i},e.prototype.getTriggerFromKey=function(t){return t===v.SPACEBAR?Ft.SPACEBAR_KEY:t===v.ENTER?Ft.ENTER_KEY:t===v.DELETE?Ft.DELETE_KEY:t===v.BACKSPACE?Ft.BACKSPACE_KEY:Ft.UNSPECIFIED},e}(O);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var zi=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i,r){return new k(i,r)});var n=k.createAdapter(this);this.rippleSurface=t(this.root,new At(n))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(n){t.foundation.handleClick(n)},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={focus:function(){t.root.focus()},getAttribute:function(i){return t.root.getAttribute(i)},notifyInteraction:function(i){return t.emit(St.INTERACTION_EVENT,{trigger:i},!0)},notifyNavigation:function(i){t.emit(St.NAVIGATION_EVENT,{key:i},!0)},setAttribute:function(i,r){t.root.setAttribute(i,r)}};return new qi(n)},e.prototype.isNavigable=function(){return this.foundation.isNavigable()},e.prototype.focus=function(){this.foundation.focus()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e}(_);/**
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
 */var Rt;(function(o){o.LEFT="left",o.RIGHT="right"})(Rt||(Rt={}));var Mt;(function(o){o.PRIMARY="primary",o.TRAILING="trailing",o.NONE="none"})(Mt||(Mt={}));var A={ADDED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-added-announcement",ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",IE_ARROW_DOWN_KEY:"Down",IE_ARROW_LEFT_KEY:"Left",IE_ARROW_RIGHT_KEY:"Right",IE_ARROW_UP_KEY:"Up",IE_DELETE_KEY:"Del",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-removed-announcement",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip-trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},j={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",EDITABLE:"mdc-chip--editable",EDITING:"mdc-chip--editing",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",PRIMARY_ACTION_FOCUSED:"mdc-chip--primary-action-focused",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},dt=new Set;dt.add(A.ARROW_LEFT_KEY);dt.add(A.ARROW_RIGHT_KEY);dt.add(A.ARROW_DOWN_KEY);dt.add(A.ARROW_UP_KEY);dt.add(A.END_KEY);dt.add(A.HOME_KEY);dt.add(A.IE_ARROW_LEFT_KEY);dt.add(A.IE_ARROW_RIGHT_KEY);dt.add(A.IE_ARROW_DOWN_KEY);dt.add(A.IE_ARROW_UP_KEY);var kt=new Set;kt.add(A.ARROW_UP_KEY);kt.add(A.ARROW_DOWN_KEY);kt.add(A.HOME_KEY);kt.add(A.END_KEY);kt.add(A.IE_ARROW_UP_KEY);kt.add(A.IE_ARROW_DOWN_KEY);/**
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
 */var wn={bottom:0,height:0,left:0,right:0,top:0,width:0},Qt;(function(o){o[o.SHOULD_FOCUS=0]="SHOULD_FOCUS",o[o.SHOULD_NOT_FOCUS=1]="SHOULD_NOT_FOCUS"})(Qt||(Qt={}));var pi=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.shouldRemoveOnTrailingIconClick=!0,n.shouldFocusPrimaryActionOnClick=!0,n}return Object.defineProperty(e,"strings",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getAttribute:function(){return null},getCheckmarkBoundingClientRect:function(){return wn},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return wn},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},isRTL:function(){return!1},isTrailingActionNavigable:function(){return!1},notifyEditFinish:function(){},notifyEditStart:function(){},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},removeTrailingActionFocus:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(j.SELECTED)},e.prototype.isEditable=function(){return this.adapter.hasClass(j.EDITABLE)},e.prototype.isEditing=function(){return this.adapter.hasClass(j.EDITING)},e.prototype.setSelected=function(t){this.setSelectedImpl(t),this.notifySelection(t)},e.prototype.setSelectedFromChipSet=function(t,n){this.setSelectedImpl(t),n&&this.notifyIgnoredSelection(t)},e.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick},e.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick=t},e.prototype.setShouldFocusPrimaryActionOnClick=function(t){this.shouldFocusPrimaryActionOnClick=t},e.prototype.getDimensions=function(){var t=this,n=function(){return t.adapter.getRootBoundingClientRect()},i=function(){return t.adapter.getCheckmarkBoundingClientRect()};if(!this.adapter.hasLeadingIcon()){var r=i();if(r){var a=n();return{bottom:a.bottom,height:a.height,left:a.left,right:a.right,top:a.top,width:a.width+r.height}}}return n()},e.prototype.beginExit=function(){this.adapter.addClass(j.CHIP_EXIT)},e.prototype.handleClick=function(){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior())},e.prototype.handleDoubleClick=function(){this.isEditable()&&this.startEditing()},e.prototype.handleTransitionEnd=function(t){var n=this,i=this.adapter.eventTargetHasClass(t.target,j.CHIP_EXIT),r=t.propertyName==="width",a=t.propertyName==="opacity";if(i&&a){var s=this.adapter.getComputedStyleValue("width");requestAnimationFrame(function(){n.adapter.setStyleProperty("width",s),n.adapter.setStyleProperty("padding","0"),n.adapter.setStyleProperty("margin","0"),requestAnimationFrame(function(){n.adapter.setStyleProperty("width","0")})});return}if(i&&r){this.removeFocus();var u=this.adapter.getAttribute(A.REMOVED_ANNOUNCEMENT_ATTRIBUTE);this.adapter.notifyRemoval(u)}if(a){var l=this.adapter.eventTargetHasClass(t.target,j.LEADING_ICON)&&this.adapter.hasClass(j.SELECTED),c=this.adapter.eventTargetHasClass(t.target,j.CHECKMARK)&&!this.adapter.hasClass(j.SELECTED);if(l){this.adapter.addClassToLeadingIcon(j.HIDDEN_LEADING_ICON);return}if(c){this.adapter.removeClassFromLeadingIcon(j.HIDDEN_LEADING_ICON);return}}},e.prototype.handleFocusIn=function(t){this.eventFromPrimaryAction(t)&&this.adapter.addClass(j.PRIMARY_ACTION_FOCUSED)},e.prototype.handleFocusOut=function(t){this.eventFromPrimaryAction(t)&&(this.isEditing()&&this.finishEditing(),this.adapter.removeClass(j.PRIMARY_ACTION_FOCUSED))},e.prototype.handleTrailingActionInteraction=function(){this.adapter.notifyTrailingIconInteraction(),this.removeChip()},e.prototype.handleKeydown=function(t){if(this.isEditing()){this.shouldFinishEditing(t)&&(t.preventDefault(),this.finishEditing());return}if(this.isEditable()&&this.shouldStartEditing(t)&&(t.preventDefault(),this.startEditing()),this.shouldNotifyInteraction(t)){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior());return}if(this.isDeleteAction(t)){t.preventDefault(),this.removeChip();return}dt.has(t.key)&&(t.preventDefault(),this.focusNextAction(t.key,Mt.PRIMARY))},e.prototype.handleTrailingActionNavigation=function(t){this.focusNextAction(t.detail.key,Mt.TRAILING)},e.prototype.removeFocus=function(){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"-1"),this.adapter.removeTrailingActionFocus()},e.prototype.focusPrimaryAction=function(){this.setPrimaryActionFocusable(Qt.SHOULD_FOCUS)},e.prototype.focusTrailingAction=function(){var t=this.adapter.isTrailingActionNavigable();if(t){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"-1"),this.adapter.focusTrailingAction();return}this.focusPrimaryAction()},e.prototype.setPrimaryActionFocusable=function(t){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"0"),t===Qt.SHOULD_FOCUS&&this.adapter.focusPrimaryAction(),this.adapter.removeTrailingActionFocus()},e.prototype.getFocusBehavior=function(){return this.shouldFocusPrimaryActionOnClick?Qt.SHOULD_FOCUS:Qt.SHOULD_NOT_FOCUS},e.prototype.focusNextAction=function(t,n){var i=this.adapter.isTrailingActionNavigable(),r=this.getDirection(t);if(kt.has(t)||!i){this.adapter.notifyNavigation(t,n);return}if(n===Mt.PRIMARY&&r===Rt.RIGHT){this.focusTrailingAction();return}if(n===Mt.TRAILING&&r===Rt.LEFT){this.focusPrimaryAction();return}this.adapter.notifyNavigation(t,Mt.NONE)},e.prototype.getDirection=function(t){var n=this.adapter.isRTL(),i=t===A.ARROW_LEFT_KEY||t===A.IE_ARROW_LEFT_KEY,r=t===A.ARROW_RIGHT_KEY||t===A.IE_ARROW_RIGHT_KEY;return!n&&i||n&&r?Rt.LEFT:Rt.RIGHT},e.prototype.removeChip=function(){this.shouldRemoveOnTrailingIconClick&&this.beginExit()},e.prototype.shouldStartEditing=function(t){return this.eventFromPrimaryAction(t)&&t.key===A.ENTER_KEY},e.prototype.shouldFinishEditing=function(t){return t.key===A.ENTER_KEY},e.prototype.shouldNotifyInteraction=function(t){return t.key===A.ENTER_KEY||t.key===A.SPACEBAR_KEY},e.prototype.isDeleteAction=function(t){var n=this.adapter.hasClass(j.DELETABLE);return n&&(t.key===A.BACKSPACE_KEY||t.key===A.DELETE_KEY||t.key===A.IE_DELETE_KEY)},e.prototype.setSelectedImpl=function(t){t?(this.adapter.addClass(j.SELECTED),this.adapter.setPrimaryActionAttr(A.ARIA_CHECKED,"true")):(this.adapter.removeClass(j.SELECTED),this.adapter.setPrimaryActionAttr(A.ARIA_CHECKED,"false"))},e.prototype.notifySelection=function(t){this.adapter.notifySelection(t,!1)},e.prototype.notifyIgnoredSelection=function(t){this.adapter.notifySelection(t,!0)},e.prototype.eventFromPrimaryAction=function(t){return this.adapter.eventTargetHasClass(t.target,j.PRIMARY_ACTION)},e.prototype.startEditing=function(){this.adapter.addClass(j.EDITING),this.adapter.notifyEditStart()},e.prototype.finishEditing=function(){this.adapter.removeClass(j.EDITING),this.adapter.notifyEditFinish()},e}(O);/**
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
 */var Ei=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"selected",{get:function(){return this.foundation.isSelected()},set:function(t){this.foundation.setSelected(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation.setShouldRemoveOnTrailingIconClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"setShouldFocusPrimaryActionOnClick",{set:function(t){this.foundation.setShouldFocusPrimaryActionOnClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.root.id},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){var i=this;t===void 0&&(t=function(s,u){return new k(s,u)}),n===void 0&&(n=function(s){return new zi(s)}),this.leadingIcon=this.root.querySelector(A.LEADING_ICON_SELECTOR),this.checkmark=this.root.querySelector(A.CHECKMARK_SELECTOR),this.primaryAction=this.root.querySelector(A.PRIMARY_ACTION_SELECTOR);var r=this.root.querySelector(A.TRAILING_ACTION_SELECTOR);r&&(this.trailingAction=n(r));var a=f(f({},k.createAdapter(this)),{computeBoundingRect:function(){return i.foundation.getDimensions()}});this.rippleSurface=t(this.root,new At(a))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTrailingActionInteraction=function(){t.foundation.handleTrailingActionInteraction()},this.handleTrailingActionNavigation=function(n){t.foundation.handleTrailingActionNavigation(n)},this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.handleFocusIn=function(n){t.foundation.handleFocusIn(n)},this.handleFocusOut=function(n){t.foundation.handleFocusOut(n)},this.listen("transitionend",this.handleTransitionEnd),this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen("focusin",this.handleFocusIn),this.listen("focusout",this.handleFocusOut),this.trailingAction&&(this.listen(St.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.listen(St.NAVIGATION_EVENT,this.handleTrailingActionNavigation))},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("transitionend",this.handleTransitionEnd),this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.handleFocusIn),this.unlisten("focusout",this.handleFocusOut),this.trailingAction&&(this.unlisten(St.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.unlisten(St.NAVIGATION_EVENT,this.handleTrailingActionNavigation)),o.prototype.destroy.call(this)},e.prototype.beginExit=function(){this.foundation.beginExit()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},addClassToLeadingIcon:function(i){t.leadingIcon&&t.leadingIcon.classList.add(i)},eventTargetHasClass:function(i,r){return i?i.classList.contains(r):!1},focusPrimaryAction:function(){t.primaryAction&&t.primaryAction.focus()},focusTrailingAction:function(){t.trailingAction&&t.trailingAction.focus()},getAttribute:function(i){return t.root.getAttribute(i)},getCheckmarkBoundingClientRect:function(){return t.checkmark?t.checkmark.getBoundingClientRect():null},getComputedStyleValue:function(i){return window.getComputedStyle(t.root).getPropertyValue(i)},getRootBoundingClientRect:function(){return t.root.getBoundingClientRect()},hasClass:function(i){return t.root.classList.contains(i)},hasLeadingIcon:function(){return!!t.leadingIcon},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},isTrailingActionNavigable:function(){return t.trailingAction?t.trailingAction.isNavigable():!1},notifyInteraction:function(){return t.emit(A.INTERACTION_EVENT,{chipId:t.id},!0)},notifyNavigation:function(i,r){return t.emit(A.NAVIGATION_EVENT,{chipId:t.id,key:i,source:r},!0)},notifyRemoval:function(i){t.emit(A.REMOVAL_EVENT,{chipId:t.id,removedAnnouncement:i},!0)},notifySelection:function(i,r){return t.emit(A.SELECTION_EVENT,{chipId:t.id,selected:i,shouldIgnore:r},!0)},notifyTrailingIconInteraction:function(){return t.emit(A.TRAILING_ICON_INTERACTION_EVENT,{chipId:t.id},!0)},notifyEditStart:function(){},notifyEditFinish:function(){},removeClass:function(i){return t.root.classList.remove(i)},removeClassFromLeadingIcon:function(i){t.leadingIcon&&t.leadingIcon.classList.remove(i)},removeTrailingActionFocus:function(){t.trailingAction&&t.trailingAction.removeFocus()},setPrimaryActionAttr:function(i,r){t.primaryAction&&t.primaryAction.setAttribute(i,r)},setStyleProperty:function(i,r){return t.root.style.setProperty(i,r)}};return new pi(n)},e.prototype.setSelectedFromChipSet=function(t,n){this.foundation.setSelectedFromChipSet(t,n)},e.prototype.focusPrimaryAction=function(){this.foundation.focusPrimaryAction()},e.prototype.focusTrailingAction=function(){this.foundation.focusTrailingAction()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e.prototype.remove=function(){var t=this.root.parentNode;t!==null&&t.removeChild(this.root)},e}(_);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var nn;(function(o){o.POLITE="polite",o.ASSERTIVE="assertive"})(nn||(nn={}));var Yi="data-mdc-dom-announce";function $i(o,e){Qi.getInstance().say(o,e)}var Qi=function(){function o(){this.liveRegions=new Map}return o.getInstance=function(){return o.instance||(o.instance=new o),o.instance},o.prototype.say=function(e,t){var n,i,r=(n=t==null?void 0:t.priority)!==null&&n!==void 0?n:nn.POLITE,a=(i=t==null?void 0:t.ownerDocument)!==null&&i!==void 0?i:document,s=this.getLiveRegion(r,a);s.textContent="",setTimeout(function(){s.textContent=e,a.addEventListener("click",u)},1);function u(){s.textContent="",a.removeEventListener("click",u)}},o.prototype.getLiveRegion=function(e,t){var n=this.liveRegions.get(t);n||(n=new Map,this.liveRegions.set(t,n));var i=n.get(e);if(i&&t.body.contains(i))return i;var r=this.createLiveRegion(e,t);return n.set(e,r),r},o.prototype.createLiveRegion=function(e,t){var n=t.createElement("div");return n.style.position="absolute",n.style.top="-9999px",n.style.left="-9999px",n.style.height="1px",n.style.overflow="hidden",n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live",e),n.setAttribute(Yi,"true"),t.body.appendChild(n),n},o}();/**
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
 */var Zi={CHIP_SELECTOR:".mdc-chip"},ve={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var mi=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.selectedChipIds=[],n}return Object.defineProperty(e,"strings",{get:function(){return Zi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ve},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{announceMessage:function(){},focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedChipIds=function(){return this.selectedChipIds.slice()},e.prototype.select=function(t){this.selectImpl(t,!1)},e.prototype.handleChipInteraction=function(t){var n=t.chipId,i=this.adapter.getIndexOfChipById(n);this.removeFocusFromChipsExcept(i),(this.adapter.hasClass(ve.CHOICE)||this.adapter.hasClass(ve.FILTER))&&this.toggleSelect(n)},e.prototype.handleChipSelection=function(t){var n=t.chipId,i=t.selected,r=t.shouldIgnore;if(!r){var a=this.selectedChipIds.indexOf(n)>=0;i&&!a?this.select(n):!i&&a&&this.deselectImpl(n)}},e.prototype.handleChipRemoval=function(t){var n=t.chipId,i=t.removedAnnouncement;i&&this.adapter.announceMessage(i);var r=this.adapter.getIndexOfChipById(n);this.deselectAndNotifyClients(n),this.adapter.removeChipAtIndex(r);var a=this.adapter.getChipListCount()-1;if(!(a<0)){var s=Math.min(r,a);this.removeFocusFromChipsExcept(s),this.adapter.focusChipTrailingActionAtIndex(s)}},e.prototype.handleChipNavigation=function(t){var n=t.chipId,i=t.key,r=t.source,a=this.adapter.getChipListCount()-1,s=this.adapter.getIndexOfChipById(n);if(!(s===-1||!dt.has(i))){var u=this.adapter.isRTL(),l=i===A.ARROW_LEFT_KEY||i===A.IE_ARROW_LEFT_KEY,c=i===A.ARROW_RIGHT_KEY||i===A.IE_ARROW_RIGHT_KEY,p=i===A.ARROW_DOWN_KEY||i===A.IE_ARROW_DOWN_KEY,E=!u&&c||u&&l||p,h=i===A.HOME_KEY,T=i===A.END_KEY;E?s++:h?s=0:T?s=a:s--,!(s<0||s>a)&&(this.removeFocusFromChipsExcept(s),this.focusChipAction(s,i,r))}},e.prototype.focusChipAction=function(t,n,i){var r=kt.has(n);if(r&&i===Mt.PRIMARY)return this.adapter.focusChipPrimaryActionAtIndex(t);if(r&&i===Mt.TRAILING)return this.adapter.focusChipTrailingActionAtIndex(t);var a=this.getDirection(n);if(a===Rt.LEFT)return this.adapter.focusChipTrailingActionAtIndex(t);if(a===Rt.RIGHT)return this.adapter.focusChipPrimaryActionAtIndex(t)},e.prototype.getDirection=function(t){var n=this.adapter.isRTL(),i=t===A.ARROW_LEFT_KEY||t===A.IE_ARROW_LEFT_KEY,r=t===A.ARROW_RIGHT_KEY||t===A.IE_ARROW_RIGHT_KEY;return!n&&i||n&&r?Rt.LEFT:Rt.RIGHT},e.prototype.deselectImpl=function(t,n){n===void 0&&(n=!1);var i=this.selectedChipIds.indexOf(t);if(i>=0){this.selectedChipIds.splice(i,1);var r=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(r,!1,n)}},e.prototype.deselectAndNotifyClients=function(t){this.deselectImpl(t,!0)},e.prototype.toggleSelect=function(t){this.selectedChipIds.indexOf(t)>=0?this.deselectAndNotifyClients(t):this.selectAndNotifyClients(t)},e.prototype.removeFocusFromChipsExcept=function(t){for(var n=this.adapter.getChipListCount(),i=0;i<n;i++)i!==t&&this.adapter.removeFocusFromChipAtIndex(i)},e.prototype.selectAndNotifyClients=function(t){this.selectImpl(t,!0)},e.prototype.selectImpl=function(t,n){if(!(this.selectedChipIds.indexOf(t)>=0)){if(this.adapter.hasClass(ve.CHOICE)&&this.selectedChipIds.length>0){var i=this.selectedChipIds[0],r=this.adapter.getIndexOfChipById(i);this.selectedChipIds=[],this.adapter.selectChipAtIndex(r,!1,n)}this.selectedChipIds.push(t);var a=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(a,!0,n)}},e}(O);/**
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
 */var Pe=pi.strings,Hn=Pe.INTERACTION_EVENT,Pn=Pe.SELECTION_EVENT,Fn=Pe.REMOVAL_EVENT,Bn=Pe.NAVIGATION_EVENT,Ji=mi.strings.CHIP_SELECTOR,kn=0,tr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"chips",{get:function(){return this.chipsList.slice()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedChipIds",{get:function(){return this.foundation.getSelectedChipIds()},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new Ei(n)}),this.chipFactory=t,this.chipsList=this.instantiateChips(this.chipFactory)},e.prototype.initialSyncWithDOM=function(){var t,n,i=this;try{for(var r=b(this.chipsList),a=r.next();!a.done;a=r.next()){var s=a.value;s.id&&s.selected&&this.foundation.select(s.id)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.handleChipInteraction=function(u){return i.foundation.handleChipInteraction(u.detail)},this.handleChipSelection=function(u){return i.foundation.handleChipSelection(u.detail)},this.handleChipRemoval=function(u){return i.foundation.handleChipRemoval(u.detail)},this.handleChipNavigation=function(u){return i.foundation.handleChipNavigation(u.detail)},this.listen(Hn,this.handleChipInteraction),this.listen(Pn,this.handleChipSelection),this.listen(Fn,this.handleChipRemoval),this.listen(Bn,this.handleChipNavigation)},e.prototype.destroy=function(){var t,n;try{for(var i=b(this.chipsList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.unlisten(Hn,this.handleChipInteraction),this.unlisten(Pn,this.handleChipSelection),this.unlisten(Fn,this.handleChipRemoval),this.unlisten(Bn,this.handleChipNavigation),o.prototype.destroy.call(this)},e.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++kn,this.chipsList.push(this.chipFactory(t))},e.prototype.getDefaultFoundation=function(){var t=this,n={announceMessage:function(i){$i(i)},focusChipPrimaryActionAtIndex:function(i){t.chipsList[i].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(i){t.chipsList[i].focusTrailingAction()},getChipListCount:function(){return t.chips.length},getIndexOfChipById:function(i){return t.findChipIndex(i)},hasClass:function(i){return t.root.classList.contains(i)},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},removeChipAtIndex:function(i){i>=0&&i<t.chips.length&&(t.chipsList[i].destroy(),t.chipsList[i].remove(),t.chipsList.splice(i,1))},removeFocusFromChipAtIndex:function(i){t.chipsList[i].removeFocus()},selectChipAtIndex:function(i,r,a){i>=0&&i<t.chips.length&&t.chipsList[i].setSelectedFromChipSet(r,a)}};return new mi(n)},e.prototype.instantiateChips=function(t){var n=[].slice.call(this.root.querySelectorAll(Ji));return n.map(function(i){return i.id=i.id||"mdc-chip-"+ ++kn,t(i)})},e.prototype.findChipIndex=function(t){for(var n=0;n<this.chips.length;n++)if(this.chipsList[n].id===t)return n;return-1},e}(_);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Vt={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},Ht={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Vn=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Vt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.closed=this.adapter.hasClass(Vt.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(Vt.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(Ht.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(Ht.RADIUS))},e.prototype.setDeterminate=function(t){this.determinate=t,this.determinate?(this.adapter.removeClass(Vt.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(Vt.INDETERMINATE_CLASS),this.adapter.removeAttribute(Ht.ARIA_VALUENOW))},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){if(this.progress=t,this.determinate){var n=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(Ht.STROKE_DASHOFFSET,""+n),this.adapter.setAttribute(Ht.ARIA_VALUENOW,this.progress.toString())}},e.prototype.getProgress=function(){return this.progress},e.prototype.open=function(){this.closed=!1,this.adapter.removeClass(Vt.CLOSED_CLASS),this.adapter.removeAttribute(Ht.ARIA_HIDDEN)},e.prototype.close=function(){this.closed=!0,this.adapter.addClass(Vt.CLOSED_CLASS),this.adapter.setAttribute(Ht.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.closed},e}(O);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var er=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.initialize=function(){this.determinateCircle=this.root.querySelector(Vn.strings.DETERMINATE_CIRCLE_SELECTOR)},e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isClosed",{get:function(){return this.foundation.isClosed()},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},getDeterminateCircleAttribute:function(i){return t.determinateCircle.getAttribute(i)},hasClass:function(i){return t.root.classList.contains(i)},removeClass:function(i){t.root.classList.remove(i)},removeAttribute:function(i){t.root.removeAttribute(i)},setAttribute:function(i,r){t.root.setAttribute(i,r)},setDeterminateCircleAttribute:function(i,r){t.determinateCircle.setAttribute(i,r)}};return new Vn(n)},e}(_);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var st={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},ft={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},ae={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Ue=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(st.INDETERMINATE_CLASS),this.adapter.addClass(st.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,r;if(!t.determinate)try{for(var a=b(n),s=a.next();!s.done;s=a.next()){var u=s.value;u.contentRect&&t.calculateAndSetDimensions(u.contentRect.width)}}catch(l){i={error:l}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(st.INDETERMINATE_CLASS),this.adapter.setAttribute(ft.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(ft.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(ft.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(st.INDETERMINATE_CLASS),this.adapter.removeAttribute(ft.ARIA_VALUENOW),this.adapter.removeAttribute(ft.ARIA_VALUEMAX),this.adapter.removeAttribute(ft.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(ft.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(st.CLOSED_CLASS),this.adapter.removeClass(st.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(ft.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(st.CLOSED_CLASS),this.adapter.setAttribute(ft.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(st.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(st.CLOSED_CLASS)&&this.adapter.addClass(st.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(st.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(st.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?ie(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(ft.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*ae.PRIMARY_HALF,i=t*ae.PRIMARY_FULL,r=t*ae.SECONDARY_QUARTER,a=t*ae.SECONDARY_HALF,s=t*ae.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-s+"px"),this.restartAnimation()},e}(O);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Ti=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(t){this.foundation.setBuffer(t)},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var t=this;this.root.addEventListener("transitionend",function(){t.foundation.handleTransitionEnd()})},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},forceLayout:function(){t.root.getBoundingClientRect()},setBufferBarStyle:function(i,r){var a=t.root.querySelector(Ue.strings.BUFFER_BAR_SELECTOR);a&&a.style.setProperty(i,r)},setPrimaryBarStyle:function(i,r){var a=t.root.querySelector(Ue.strings.PRIMARY_BAR_SELECTOR);a&&a.style.setProperty(i,r)},hasClass:function(i){return t.root.classList.contains(i)},removeAttribute:function(i){t.root.removeAttribute(i)},removeClass:function(i){t.root.classList.remove(i)},setAttribute:function(i,r){t.root.setAttribute(i,r)},setStyle:function(i,r){t.root.style.setProperty(i,r)},attachResizeObserver:function(i){var r=window.ResizeObserver;if(r){var a=new r(i);return a.observe(t.root),a}return null},getWidth:function(){return t.root.offsetWidth}};return new Ue(n)},e}(_);/**
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
 */var B={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_CELL:"mdc-data-table__header-cell",HEADER_CELL_LABEL:"mdc-data-table__header-cell-label",HEADER_CELL_SORTED:"mdc-data-table__header-cell--sorted",HEADER_CELL_SORTED_DESCENDING:"mdc-data-table__header-cell--sorted-descending",HEADER_CELL_WITH_SORT:"mdc-data-table__header-cell--with-sort",HEADER_CELL_WRAPPER:"mdc-data-table__header-cell-wrapper",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",IN_PROGRESS:"mdc-data-table--in-progress",LINEAR_PROGRESS:"mdc-data-table__linear-progress",PAGINATION_ROWS_PER_PAGE_LABEL:"mdc-data-table__pagination-rows-per-page-label",PAGINATION_ROWS_PER_PAGE_SELECT:"mdc-data-table__pagination-rows-per-page-select",PROGRESS_INDICATOR:"mdc-data-table__progress-indicator",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected",SORT_ICON_BUTTON:"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"mdc-data-table__sort-status-label",TABLE_CONTAINER:"mdc-data-table__table-container"},Un={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort"},fe={COLUMN_ID:"data-column-id",ROW_ID:"data-row-id"},Q={CONTENT:"."+B.CONTENT,HEADER_CELL:"."+B.HEADER_CELL,HEADER_CELL_WITH_SORT:"."+B.HEADER_CELL_WITH_SORT,HEADER_ROW:"."+B.HEADER_ROW,HEADER_ROW_CHECKBOX:"."+B.HEADER_ROW_CHECKBOX,PROGRESS_INDICATOR:"."+B.PROGRESS_INDICATOR,ROW:"."+B.ROW,ROW_CHECKBOX:"."+B.ROW_CHECKBOX,ROW_SELECTED:"."+B.ROW_SELECTED,SORT_ICON_BUTTON:"."+B.SORT_ICON_BUTTON,SORT_STATUS_LABEL:"."+B.SORT_STATUS_LABEL},Kn={SORTED_IN_DESCENDING:"Sorted in descending order",SORTED_IN_ASCENDING:"Sorted in ascending order"},Ut={ARIA_SELECTED:Un.ARIA_SELECTED,ARIA_SORT:Un.ARIA_SORT,DATA_ROW_ID_ATTR:fe.ROW_ID,HEADER_ROW_CHECKBOX_SELECTOR:Q.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:Q.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:Q.ROW_SELECTED,ROW_SELECTOR:Q.ROW},tt;(function(o){o.ASCENDING="ascending",o.DESCENDING="descending",o.NONE="none",o.OTHER="other"})(tt||(tt={}));var se={ROW_CLICK:"MDCDataTable:rowClick",ROW_SELECTION_CHANGED:"MDCDataTable:rowSelectionChanged",SELECTED_ALL:"MDCDataTable:selectedAll",SORTED:"MDCDataTable:sorted",UNSELECTED_ALL:"MDCDataTable:unselectedAll"};/**
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
 */var nr=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableContainerHeight:function(){return 0},getTableHeaderHeight:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},notifyRowClick:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},e.prototype.layoutAsync=function(){return Mi(this,void 0,void 0,function(){return wi(this,function(t){switch(t.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState(),t.label=3;case 3:return[2]}})})},e.prototype.getRows=function(){return this.adapter.getRowElements()},e.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},e.prototype.setSelectedRowIds=function(t){for(var n=0;n<this.adapter.getRowCount();n++){var i=this.adapter.getRowIdAtIndex(n),r=!1;i&&t.indexOf(i)>=0&&(r=!0),this.adapter.setRowCheckboxCheckedAtIndex(n,r),this.selectRowAtIndex(n,r)}this.setHeaderRowCheckboxState()},e.prototype.getRowIds=function(){for(var t=[],n=0;n<this.adapter.getRowCount();n++)t.push(this.adapter.getRowIdAtIndex(n));return t},e.prototype.getSelectedRowIds=function(){for(var t=[],n=0;n<this.adapter.getRowCount();n++)this.adapter.isCheckboxAtRowIndexChecked(n)&&t.push(this.adapter.getRowIdAtIndex(n));return t},e.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter.isHeaderRowCheckboxChecked(),n=0;n<this.adapter.getRowCount();n++)this.adapter.setRowCheckboxCheckedAtIndex(n,t),this.selectRowAtIndex(n,t);t?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(t){var n=this.adapter.getRowIndexByChildElement(t.target);if(n!==-1){var i=this.adapter.isCheckboxAtRowIndexChecked(n);this.selectRowAtIndex(n,i),this.setHeaderRowCheckboxState();var r=this.adapter.getRowIdAtIndex(n);this.adapter.notifyRowSelectionChanged({rowId:r,rowIndex:n,selected:i})}},e.prototype.handleSortAction=function(t){for(var n=t.columnId,i=t.columnIndex,r=t.headerCell,a=0;a<this.adapter.getHeaderCellCount();a++)a!==i&&(this.adapter.removeClassNameByHeaderCellIndex(a,B.HEADER_CELL_SORTED),this.adapter.removeClassNameByHeaderCellIndex(a,B.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(a,Ut.ARIA_SORT,tt.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(a,tt.NONE));this.adapter.setClassNameByHeaderCellIndex(i,B.HEADER_CELL_SORTED);var s=this.adapter.getAttributeByHeaderCellIndex(i,Ut.ARIA_SORT),u=tt.NONE;s===tt.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(i,B.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(i,Ut.ARIA_SORT,tt.DESCENDING),u=tt.DESCENDING):s===tt.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(i,B.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(i,Ut.ARIA_SORT,tt.ASCENDING),u=tt.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(i,Ut.ARIA_SORT,tt.ASCENDING),u=tt.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(i,u),this.adapter.notifySortAction({columnId:n,columnIndex:i,headerCell:r,sortValue:u})},e.prototype.handleRowClick=function(t){var n=t.rowId,i=t.row;this.adapter.notifyRowClick({rowId:n,row:i})},e.prototype.showProgress=function(){var t=this.adapter.getTableHeaderHeight(),n=this.adapter.getTableContainerHeight()-t,i=t;this.adapter.setProgressIndicatorStyles({height:n+"px",top:i+"px"}),this.adapter.addClass(B.IN_PROGRESS)},e.prototype.hideProgress=function(){this.adapter.removeClass(B.IN_PROGRESS)},e.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===0?(this.adapter.setHeaderRowCheckboxChecked(!1),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex=function(t,n){n?(this.adapter.addClassAtRowIndex(t,B.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,Ut.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(t,B.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,Ut.ARIA_SELECTED,"false"))},e}(O);/**
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
 */var ir=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new fi(n)}),this.checkboxFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this;this.headerRow=this.root.querySelector("."+B.HEADER_ROW),this.handleHeaderRowCheckboxChange=function(){t.foundation.handleHeaderRowCheckboxChange()},this.headerRow.addEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener=function(n){t.handleHeaderRowClick(n)},this.headerRow.addEventListener("click",this.headerRowClickListener),this.content=this.root.querySelector("."+B.CONTENT),this.handleContentClick=function(n){var i=gt(n.target,Q.ROW);i&&t.foundation.handleRowClick({rowId:t.getRowIdByRowElement(i),row:i})},this.content.addEventListener("click",this.handleContentClick),this.handleRowCheckboxChange=function(n){t.foundation.handleRowCheckboxChange(n)},this.content.addEventListener("change",this.handleRowCheckboxChange),this.layout()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getHeaderCells=function(){return[].slice.call(this.root.querySelectorAll(Q.HEADER_CELL))},e.prototype.getRows=function(){return this.foundation.getRows()},e.prototype.getSelectedRowIds=function(){return this.foundation.getSelectedRowIds()},e.prototype.setSelectedRowIds=function(t){this.foundation.setSelectedRowIds(t)},e.prototype.showProgress=function(){this.getLinearProgress().open(),this.foundation.showProgress()},e.prototype.hideProgress=function(){this.foundation.hideProgress(),this.getLinearProgress().close()},e.prototype.destroy=function(){var t,n;if(this.handleHeaderRowCheckboxChange&&this.headerRow.removeEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener&&this.headerRow.removeEventListener("click",this.headerRowClickListener),this.handleRowCheckboxChange&&this.content.removeEventListener("change",this.handleRowCheckboxChange),this.headerRowCheckbox&&this.headerRowCheckbox.destroy(),this.rowCheckboxList)try{for(var i=b(this.rowCheckboxList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.handleContentClick&&this.content.removeEventListener("click",this.handleContentClick)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},getHeaderCellElements:function(){return t.getHeaderCells()},getHeaderCellCount:function(){return t.getHeaderCells().length},getAttributeByHeaderCellIndex:function(i,r){return t.getHeaderCells()[i].getAttribute(r)},setAttributeByHeaderCellIndex:function(i,r,a){t.getHeaderCells()[i].setAttribute(r,a)},setClassNameByHeaderCellIndex:function(i,r){t.getHeaderCells()[i].classList.add(r)},removeClassNameByHeaderCellIndex:function(i,r){t.getHeaderCells()[i].classList.remove(r)},notifySortAction:function(i){t.emit(se.SORTED,i,!0)},getTableContainerHeight:function(){var i=t.root.querySelector("."+B.TABLE_CONTAINER);if(!i)throw new Error("MDCDataTable: Table container element not found.");return i.getBoundingClientRect().height},getTableHeaderHeight:function(){var i=t.root.querySelector(Q.HEADER_ROW);if(!i)throw new Error("MDCDataTable: Table header element not found.");return i.getBoundingClientRect().height},setProgressIndicatorStyles:function(i){var r=t.root.querySelector(Q.PROGRESS_INDICATOR);if(!r)throw new Error("MDCDataTable: Progress indicator element not found.");r.style.setProperty("height",i.height),r.style.setProperty("top",i.top)},addClassAtRowIndex:function(i,r){t.getRows()[i].classList.add(r)},getRowCount:function(){return t.getRows().length},getRowElements:function(){return[].slice.call(t.root.querySelectorAll(Q.ROW))},getRowIdAtIndex:function(i){return t.getRows()[i].getAttribute(fe.ROW_ID)},getRowIndexByChildElement:function(i){return t.getRows().indexOf(gt(i,Q.ROW))},getSelectedRowCount:function(){return t.root.querySelectorAll(Q.ROW_SELECTED).length},isCheckboxAtRowIndexChecked:function(i){return t.rowCheckboxList[i].checked},isHeaderRowCheckboxChecked:function(){return t.headerRowCheckbox.checked},isRowsSelectable:function(){return!!t.root.querySelector(Q.ROW_CHECKBOX)||!!t.root.querySelector(Q.HEADER_ROW_CHECKBOX)},notifyRowSelectionChanged:function(i){t.emit(se.ROW_SELECTION_CHANGED,{row:t.getRowByIndex(i.rowIndex),rowId:t.getRowIdByIndex(i.rowIndex),rowIndex:i.rowIndex,selected:i.selected},!0)},notifySelectedAll:function(){t.emit(se.SELECTED_ALL,{},!0)},notifyUnselectedAll:function(){t.emit(se.UNSELECTED_ALL,{},!0)},notifyRowClick:function(i){t.emit(se.ROW_CLICK,i,!0)},registerHeaderRowCheckbox:function(){t.headerRowCheckbox&&t.headerRowCheckbox.destroy();var i=t.root.querySelector(Q.HEADER_ROW_CHECKBOX);t.headerRowCheckbox=t.checkboxFactory(i)},registerRowCheckboxes:function(){t.rowCheckboxList&&t.rowCheckboxList.forEach(function(i){i.destroy()}),t.rowCheckboxList=[],t.getRows().forEach(function(i){var r=t.checkboxFactory(i.querySelector(Q.ROW_CHECKBOX));t.rowCheckboxList.push(r)})},removeClassAtRowIndex:function(i,r){t.getRows()[i].classList.remove(r)},setAttributeAtRowIndex:function(i,r,a){t.getRows()[i].setAttribute(r,a)},setHeaderRowCheckboxChecked:function(i){t.headerRowCheckbox.checked=i},setHeaderRowCheckboxIndeterminate:function(i){t.headerRowCheckbox.indeterminate=i},setRowCheckboxCheckedAtIndex:function(i,r){t.rowCheckboxList[i].checked=r},setSortStatusLabelByHeaderCellIndex:function(i,r){var a=t.getHeaderCells()[i],s=a.querySelector(Q.SORT_STATUS_LABEL);s&&(s.textContent=t.getSortStatusMessageBySortValue(r))}};return new nr(n)},e.prototype.getRowByIndex=function(t){return this.getRows()[t]},e.prototype.getRowIdByIndex=function(t){return this.getRowByIndex(t).getAttribute(fe.ROW_ID)},e.prototype.handleHeaderRowClick=function(t){var n=gt(t.target,Q.HEADER_CELL_WITH_SORT);if(n){var i=n.getAttribute(fe.COLUMN_ID),r=this.getHeaderCells().indexOf(n);r!==-1&&this.foundation.handleSortAction({columnId:i,columnIndex:r,headerCell:n})}},e.prototype.getSortStatusMessageBySortValue=function(t){switch(t){case tt.ASCENDING:return Kn.SORTED_IN_ASCENDING;case tt.DESCENDING:return Kn.SORTED_IN_DESCENDING;default:return""}},e.prototype.getLinearProgressElement=function(){var t=this.root.querySelector("."+B.LINEAR_PROGRESS);if(!t)throw new Error("MDCDataTable: linear progress element is not found.");return t},e.prototype.getLinearProgress=function(){if(!this.linearProgress){var t=this.getLinearProgressElement();this.linearProgress=new Ti(t)}return this.linearProgress},e.prototype.getRowIdByRowElement=function(t){return t.getAttribute(fe.ROW_ID)},e}(_);/**
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
 */function rr(o,e,t){return e(o,{initialFocusEl:t})}function or(o){return o?o.scrollHeight>o.offsetHeight:!1}function ar(o){return o?o.scrollTop===0:!1}function sr(o){return o?Math.ceil(o.scrollHeight-o.scrollTop)===o.clientHeight:!1}function ur(o){var e=new Set;return[].forEach.call(o,function(t){return e.add(t.offsetTop)}),e.size>1}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var fn=function(){function o(){this.rafIDs=new Map}return o.prototype.request=function(e,t){var n=this;this.cancel(e);var i=requestAnimationFrame(function(r){n.rafIDs.delete(e),t(r)});this.rafIDs.set(e,i)},o.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},o.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,n){e.cancel(n)})},o.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,n){e.push(n)}),e},o}();/**
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
 */var M={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},ue={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Ke={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Me;(function(o){o.POLL_SCROLL_POS="poll_scroll_position",o.POLL_LAYOUT_CHANGE="poll_layout_change"})(Me||(Me={}));var gi=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=ue.CLOSE_ACTION,n.scrimClickAction=ue.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=ue.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new fn,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ke},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(M.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(M.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(M.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(M.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(M.OPEN),n.adapter.addBodyClass(M.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},Ke.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(M.CLOSING),this.adapter.removeClass(M.OPEN),this.adapter.removeBodyClass(M.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Ke.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(M.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(M.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(M.SURFACE_SCRIM_SHOWN),this.adapter.addClass(M.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(M.SURFACE_SCRIM_HIDING),this.adapter.removeClass(M.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(Me.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){var n=this.adapter.eventTargetMatches(t.target,ue.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(t);i&&this.close(i)}},e.prototype.handleKeydown=function(t){var n=t.key==="Enter"||t.keyCode===13;if(n){var i=this.adapter.getActionFromEvent(t);if(!i){var r=t.composedPath?t.composedPath()[0]:t.target,a=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;n&&a&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(Me.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(M.OPENING),this.adapter.removeClass(M.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(M.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(M.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(M.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(M.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(M.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(M.SCROLL_DIVIDER_HEADER):this.adapter.addClass(M.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(M.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(M.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(M.SCROLL_DIVIDER_FOOTER)},e}(O);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Z=gi.strings,lr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n,i;t===void 0&&(t=function(l,c){return new dn(l,c)});var r=this.root.querySelector(Z.CONTAINER_SELECTOR);if(!r)throw new Error("Dialog component requires a "+Z.CONTAINER_SELECTOR+" container element");this.container=r,this.content=this.root.querySelector(Z.CONTENT_SELECTOR),this.buttons=[].slice.call(this.root.querySelectorAll(Z.BUTTON_SELECTOR)),this.defaultButton=this.root.querySelector("["+Z.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory=t,this.buttonRipples=[];try{for(var a=b(this.buttons),s=a.next();!s.done;s=a.next()){var u=s.value;this.buttonRipples.push(new k(u))}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=rr(this.container,this.focusTrapFactory,this.getInitialFocusEl()||void 0),this.handleClick=this.foundation.handleClick.bind(this.foundation),this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleOpening=function(){document.addEventListener("keydown",t.handleDocumentKeydown)},this.handleClosing=function(){document.removeEventListener("keydown",t.handleDocumentKeydown)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen(Z.OPENING_EVENT,this.handleOpening),this.listen(Z.CLOSING_EVENT,this.handleClosing)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),this.unlisten(Z.OPENING_EVENT,this.handleOpening),this.unlisten(Z.CLOSING_EVENT,this.handleClosing),this.handleClosing(),this.buttonRipples.forEach(function(t){t.destroy()}),o.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addBodyClass:function(i){return document.body.classList.add(i)},addClass:function(i){return t.root.classList.add(i)},areButtonsStacked:function(){return ur(t.buttons)},clickDefaultButton:function(){t.defaultButton&&!t.defaultButton.disabled&&t.defaultButton.click()},eventTargetMatches:function(i,r){return i?ct(i,r):!1},getActionFromEvent:function(i){if(!i.target)return"";var r=gt(i.target,"["+Z.ACTION_ATTRIBUTE+"]");return r&&r.getAttribute(Z.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(i){return t.root.classList.contains(i)},isContentScrollable:function(){return or(t.content)},notifyClosed:function(i){return t.emit(Z.CLOSED_EVENT,i?{action:i}:{})},notifyClosing:function(i){return t.emit(Z.CLOSING_EVENT,i?{action:i}:{})},notifyOpened:function(){return t.emit(Z.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(Z.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(i){return document.body.classList.remove(i)},removeClass:function(i){return t.root.classList.remove(i)},reverseButtons:function(){t.buttons.reverse(),t.buttons.forEach(function(i){i.parentElement.appendChild(i)})},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.addEventListener(i,r)},deregisterContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.removeEventListener(i,r)},isScrollableContentAtTop:function(){return ar(t.content)},isScrollableContentAtBottom:function(){return sr(t.content)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new gi(n)},e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+Z.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(_);/**
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
 */function cr(o,e){return e(o,{skipInitialFocus:!0})}/**
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
 */var Pt,_t,I={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},dr=(Pt={},Pt[""+I.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Pt[""+I.LIST_ITEM_CLASS]="mdc-list-item",Pt[""+I.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Pt[""+I.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Pt[""+I.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Pt[""+I.ROOT]="mdc-list",Pt),jt=(_t={},_t[""+I.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",_t[""+I.LIST_ITEM_CLASS]="mdc-deprecated-list-item",_t[""+I.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",_t[""+I.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",_t[""+I.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",_t[""+I.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",_t[""+I.ROOT]="mdc-deprecated-list",_t),P={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+I.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+I.LIST_ITEM_CLASS+` a,
    .`+jt[I.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+jt[I.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+I.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+I.LIST_ITEM_CLASS+` a,
    .`+I.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+I.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+jt[I.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+jt[I.LIST_ITEM_CLASS]+` a,
    .`+jt[I.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+jt[I.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},U={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},hr="evolution";/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var fr=["input","button","textarea","select"],lt=function(o){var e=o.target;if(e){var t=(""+e.tagName).toLowerCase();fr.indexOf(t)===-1&&o.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */function pr(){var o={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return o}function Er(o,e){for(var t=new Map,n=0;n<o;n++){var i=e(n).trim();if(i){var r=i[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(a){a.sort(function(s,u){return s.index-u.index})}),t}function rn(o,e){var t=o.nextChar,n=o.focusItemAtIndex,i=o.sortedIndexByFirstChar,r=o.focusedItemIndex,a=o.skipFocus,s=o.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Ci(e)},U.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var u;return e.typeaheadBuffer.length===1?u=mr(i,r,s,e):u=Tr(i,s,e),u!==-1&&!a&&n(u),u}function mr(o,e,t,n){var i=n.typeaheadBuffer[0],r=o.get(i);if(!r)return-1;if(i===n.currentFirstChar&&r[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%r.length;var a=r[n.sortedIndexCursor].index;if(!t(a))return a}n.currentFirstChar=i;var s=-1,u;for(u=0;u<r.length;u++)if(!t(r[u].index)){s=u;break}for(;u<r.length;u++)if(r[u].index>e&&!t(r[u].index)){s=u;break}return s!==-1?(n.sortedIndexCursor=s,r[n.sortedIndexCursor].index):-1}function Tr(o,e,t){var n=t.typeaheadBuffer[0],i=o.get(n);if(!i)return-1;var r=i[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(t.sortedIndexCursor+1)%i.length,s=-1;a!==t.sortedIndexCursor;){var u=i[a],l=u.text.lastIndexOf(t.typeaheadBuffer,0)===0,c=!e(u.index);if(l&&c){s=a;break}a=(a+1)%i.length}return s!==-1?(t.sortedIndexCursor=s,i[t.sortedIndexCursor].index):-1}function Ai(o){return o.typeaheadBuffer.length>0}function Ci(o){o.typeaheadBuffer=""}function Wn(o,e){var t=o.event,n=o.isTargetListItem,i=o.focusedItemIndex,r=o.focusItemAtIndex,a=o.sortedIndexByFirstChar,s=o.isItemAtIndexDisabled,u=W(t)==="ArrowLeft",l=W(t)==="ArrowUp",c=W(t)==="ArrowRight",p=W(t)==="ArrowDown",E=W(t)==="Home",h=W(t)==="End",T=W(t)==="Enter",g=W(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||u||l||c||p||E||h||T)return-1;var y=!g&&t.key.length===1;if(y){lt(t);var S={focusItemAtIndex:r,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s};return rn(S,e)}if(!g)return-1;n&&lt(t);var N=n&&Ai(e);if(N){var S={focusItemAtIndex:r,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s};return rn(S,e)}return-1}/**
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
 */function gr(o){return o instanceof Array}var Ar=["Alt","Control","Meta","Shift"];function Gn(o){var e=new Set(o?Ar.filter(function(t){return o.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var on=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!0,n.selectedIndex=U.UNSET_INDEX,n.focusedItemIndex=U.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=pr(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return P},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==U.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,I.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=U.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var r=this.adapter.listItemAtIndexHasClass(i,I.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(i,I.LIST_ITEM_ACTIVATED_CLASS);if(r||a){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Ai(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,I.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,i){var r=this,a,s=W(t)==="ArrowLeft",u=W(t)==="ArrowUp",l=W(t)==="ArrowRight",c=W(t)==="ArrowDown",p=W(t)==="Home",E=W(t)==="End",h=W(t)==="Enter",T=W(t)==="Spacebar",g=this.isVertical&&c||!this.isVertical&&l,y=this.isVertical&&u||!this.isVertical&&s,S=t.key==="A"||t.key==="a",N=Gn(t);if(this.adapter.isRootFocused()){if((y||E)&&N([]))t.preventDefault(),this.focusLastElement();else if((g||p)&&N([]))t.preventDefault(),this.focusFirstElement();else if(y&&N(["Shift"])&&this.isCheckboxList){t.preventDefault();var V=this.focusLastElement();V!==-1&&this.setSelectedIndexOnAction(V,!1)}else if(g&&N(["Shift"])&&this.isCheckboxList){t.preventDefault();var V=this.focusFirstElement();V!==-1&&this.setSelectedIndexOnAction(V,!1)}if(this.hasTypeahead){var H={event:t,focusItemAtIndex:function(bt){r.focusItemAtIndex(bt)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(bt){return r.isIndexDisabled(bt)}};Wn(H,this.typeaheadState)}return}var w=this.adapter.getFocusedElementIndex();if(!(w===-1&&(w=i,w<0))){if(g&&N([]))lt(t),this.focusNextElement(w);else if(y&&N([]))lt(t),this.focusPrevElement(w);else if(g&&N(["Shift"])&&this.isCheckboxList){lt(t);var V=this.focusNextElement(w);V!==-1&&this.setSelectedIndexOnAction(V,!1)}else if(y&&N(["Shift"])&&this.isCheckboxList){lt(t);var V=this.focusPrevElement(w);V!==-1&&this.setSelectedIndexOnAction(V,!1)}else if(p&&N([]))lt(t),this.focusFirstElement();else if(E&&N([]))lt(t),this.focusLastElement();else if(p&&N(["Control","Shift"])&&this.isCheckboxList){if(lt(t),this.isIndexDisabled(w))return;this.focusFirstElement(),this.toggleCheckboxRange(0,w,w)}else if(E&&N(["Control","Shift"])&&this.isCheckboxList){if(lt(t),this.isIndexDisabled(w))return;this.focusLastElement(),this.toggleCheckboxRange(w,this.adapter.getListItemCount()-1,w)}else if(S&&N(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===U.UNSET_INDEX?[]:this.selectedIndex,!0);else if((h||T)&&N([])){if(n){var Ct=t.target;if(Ct&&Ct.tagName==="A"&&h||(lt(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(w,!1),this.adapter.notifyAction(w))}}else if((h||T)&&N(["Shift"])&&this.isCheckboxList){var Ct=t.target;if(Ct&&Ct.tagName==="A"&&h||(lt(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((a=this.lastSelectedIndex)!==null&&a!==void 0?a:w,w,w),this.adapter.notifyAction(w))}if(this.hasTypeahead){var H={event:t,focusItemAtIndex:function(Ot){r.focusItemAtIndex(Ot)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(Ot){return r.isIndexDisabled(Ot)}};Wn(H,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,i){var r,a=Gn(i);t!==U.UNSET_INDEX&&(this.isIndexDisabled(t)||(a([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&a(["Shift"])&&(this.toggleCheckboxRange((r=this.lastSelectedIndex)!==null&&r!==void 0?r:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,P.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,P.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var i=I.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=I.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==U.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==U.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===U.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,P.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?P.ARIA_CURRENT:P.ARIA_SELECTED;if(this.selectedIndex!==U.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==U.UNSET_INDEX){var r=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?P.ARIA_SELECTED:P.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==U.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var i=this.selectedIndex,r=n.isUserInteraction?new Set(i===U.UNSET_INDEX?[]:i):null,a=this.getSelectionAttribute(),s=[],u=0;u<this.adapter.getListItemCount();u++){var l=r==null?void 0:r.has(u),c=t.indexOf(u)>=0;c!==l&&s.push(u),this.adapter.setCheckedCheckboxOrRadioAtIndex(u,c),this.adapter.setAttributeForElementIndex(u,a,c?"true":"false")}this.selectedIndex=t,n.isUserInteraction&&s.length&&this.adapter.notifySelectionChange(s)},e.prototype.toggleCheckboxRange=function(t,n,i){this.lastSelectedIndex=i;for(var r=new Set(this.selectedIndex===U.UNSET_INDEX?[]:this.selectedIndex),a=!(r!=null&&r.has(i)),s=Te([t,n].sort(),2),u=s[0],l=s[1],c=this.getSelectionAttribute(),p=[],E=u;E<=l;E++)if(!this.isIndexDisabled(E)){var h=r.has(E);a!==h&&(p.push(E),this.adapter.setCheckedCheckboxOrRadioAtIndex(E,a),this.adapter.setAttributeForElementIndex(E,c,""+a),a?r.add(E):r.delete(E))}p.length&&(this.selectedIndex=ln([],Te(r)),this.adapter.notifySelectionChange(p))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===U.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==U.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==U.UNSET_INDEX?this.selectedIndex:gr(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,n){return Math.min(t,n)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t,n){var i=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(r){return i.isIndexInRange(r)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===U.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t),a;n?a=r:(a=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,a)),this.adapter.setAttributeForElementIndex(t,i,a?"true":"false");var s=this.selectedIndex===U.UNSET_INDEX?[]:this.selectedIndex.slice();a?s.push(t):s=s.filter(function(u){return u!==t}),this.selectedIndex=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.checkboxListToggleAll=function(t,n){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([],{isUserInteraction:n});else{for(var r=[],a=0;a<i;a++)(!this.isIndexDisabled(a)||t.indexOf(a)>-1)&&r.push(a);this.setCheckboxAtIndex(r,{isUserInteraction:n})}},e.prototype.typeaheadMatchItem=function(t,n,i){var r=this;i===void 0&&(i=!1);var a={focusItemAtIndex:function(s){r.focusItemAtIndex(s)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(s){return r.isIndexDisabled(s)}};return rn(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Er(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Ci(this.typeaheadState)},e}(O);/**
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
 */var pn=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"vertical",{set:function(t){this.foundation.setVerticalOrientation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[I.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{set:function(t){this.foundation.setWrapFocus(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.foundation.setHasTypeahead(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.foundation.setSingleSelection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabledItemsFocusable",{set:function(t){this.foundation.setDisabledItemsFocusable(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=hr in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=dr:ct(this.root,P.DEPRECATED_SELECTOR)?this.classNameMap=jt:this.classNameMap=Object.values(I).reduce(function(t,n){return t[n]=n,t},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},e.prototype.layout=function(){var t=this.root.getAttribute(P.ARIA_ORIENTATION);this.vertical=t!==P.ARIA_ORIENTATION_HORIZONTAL;var n="."+this.classNameMap[I.LIST_ITEM_CLASS]+":not([tabindex])",i=P.FOCUSABLE_CHILD_ELEMENTS,r=this.root.querySelectorAll(n);r.length&&Array.prototype.forEach.call(r,function(s){s.setAttribute("tabindex","-1")});var a=this.root.querySelectorAll(i);a.length&&Array.prototype.forEach.call(a,function(s){s.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},e.prototype.getPrimaryText=function(t){var n,i=t.querySelector("."+this.classNameMap[I.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||i)return(n=i==null?void 0:i.textContent)!==null&&n!==void 0?n:"";var r=t.querySelector("."+this.classNameMap[I.LIST_ITEM_TEXT_CLASS]);return r&&r.textContent||""},e.prototype.initializeListType=function(){var t=this;if(this.isInteractive=ct(this.root,P.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var n=Array.from(this.root.querySelectorAll(P.SELECTED_ITEM_SELECTOR),function(s){return t.listElements.indexOf(s)});ct(this.root,P.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=n:n.length>0&&(this.selectedIndex=n[0]);return}var i=this.root.querySelectorAll(P.ARIA_ROLE_CHECKBOX_SELECTOR),r=this.root.querySelector(P.ARIA_CHECKED_RADIO_SELECTOR);if(i.length){var a=this.root.querySelectorAll(P.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(a,function(s){return t.listElements.indexOf(s)})}else r&&(this.selectedIndex=this.listElements.indexOf(r))},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.typeaheadMatchItem=function(t,n){return this.foundation.typeaheadMatchItem(t,n,!0)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassForElementIndex:function(i,r){var a=t.listElements[i];a&&a.classList.add(t.classNameMap[r])},focusItemAtIndex:function(i){var r=t.listElements[i];r&&r.focus()},getAttributeForElementIndex:function(i,r){return t.listElements[i].getAttribute(r)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},getPrimaryTextAtIndex:function(i){return t.getPrimaryText(t.listElements[i])},hasCheckboxAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(P.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(P.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(i){var r=t.listElements[i],a=r.querySelector(P.CHECKBOX_SELECTOR);return a.checked},isFocusInsideList:function(){return t.root!==document.activeElement&&t.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root},listItemAtIndexHasClass:function(i,r){return t.listElements[i].classList.contains(t.classNameMap[r])},notifyAction:function(i){t.emit(P.ACTION_EVENT,{index:i},!0)},notifySelectionChange:function(i){t.emit(P.SELECTION_CHANGE_EVENT,{changedIndices:i},!0)},removeClassForElementIndex:function(i,r){var a=t.listElements[i];a&&a.classList.remove(t.classNameMap[r])},setAttributeForElementIndex:function(i,r,a){var s=t.listElements[i];s&&s.setAttribute(r,a)},setCheckedCheckboxOrRadioAtIndex:function(i,r){var a=t.listElements[i],s=a.querySelector(P.CHECKBOX_RADIO_SELECTOR);s.checked=r;var u=document.createEvent("Event");u.initEvent("change",!0,!0),s.dispatchEvent(u)},setTabIndexForListItemChildren:function(i,r){var a=t.listElements[i],s=P.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(a.querySelectorAll(s),function(u){u.setAttribute("tabindex",r)})}};return new on(n)},e.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[I.LIST_ITEM_CLASS]+'[tabindex="0"]')){var t=this.initialFocusIndex();t!==-1&&(this.listElements[t].tabIndex=0)}},e.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if(typeof this.selectedIndex=="number"&&this.selectedIndex!==U.UNSET_INDEX)return this.selectedIndex;var t=this.root.querySelector("."+this.classNameMap[I.LIST_ITEM_CLASS]+":not(."+this.classNameMap[I.LIST_ITEM_DISABLED_CLASS]+")");return t===null?-1:this.getListItemIndex(t)},e.prototype.getListItemIndex=function(t){var n=gt(t,"."+this.classNameMap[I.LIST_ITEM_CLASS]+", ."+this.classNameMap[I.ROOT]);return n&&ct(n,"."+this.classNameMap[I.LIST_ITEM_CLASS])?this.listElements.indexOf(n):-1},e.prototype.handleFocusInEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusIn(n)},e.prototype.handleFocusOutEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusOut(n)},e.prototype.handleKeydownEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target;this.foundation.handleKeydown(t,i.classList.contains(this.classNameMap[I.LIST_ITEM_CLASS]),n)},e.prototype.handleClickEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target,r=!ct(i,P.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(n,r,t)},e}(_);/**
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
 */var rt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Cr={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Fe=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"strings",{get:function(){return Cr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(rt.OPEN),this.adapter.addClass(rt.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(rt.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(rt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(rt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(rt.OPENING)||this.adapter.hasClass(rt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(rt.CLOSING)},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,r=i==="Escape"||n===27;r&&this.close()},e.prototype.handleTransitionEnd=function(t){var n=rt.OPENING,i=rt.CLOSING,r=rt.OPEN,a=rt.ANIMATE,s=rt.ROOT,u=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,s);u&&(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(n),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(O);/**
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
 */var vr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Fe);/**
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
 */var Ie=Fe.cssClasses,le=Fe.strings,Ir=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.innerList},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(r){return new dn(r)}),n===void 0&&(n=function(r){return new pn(r)});var i=this.root.querySelector(le.LIST_SELECTOR);i&&(this.innerList=n(i),this.innerList.wrapFocus=!0),this.focusTrapFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this,n=Ie.MODAL,i=le.SCRIM_SELECTOR;this.scrim=this.root.parentNode.querySelector(i),this.scrim&&this.root.classList.contains(n)&&(this.handleScrimClick=function(){return t.foundation.handleScrimClick()},this.scrim.addEventListener("click",this.handleScrimClick),this.focusTrap=cr(this.root,this.focusTrapFactory)),this.handleKeydown=function(r){t.foundation.handleKeydown(r)},this.handleTransitionEnd=function(r){t.foundation.handleTransitionEnd(r)},this.listen("keydown",this.handleKeydown),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("transitionend",this.handleTransitionEnd),this.innerList&&this.innerList.destroy();var t=Ie.MODAL;this.scrim&&this.handleScrimClick&&this.root.classList.contains(t)&&(this.scrim.removeEventListener("click",this.handleScrimClick),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(a){t.root.classList.add(a)},removeClass:function(a){t.root.classList.remove(a)},hasClass:function(a){return t.root.classList.contains(a)},elementHasClass:function(a,s){return a.classList.contains(s)},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){var a=t.previousFocus;a&&a.focus&&t.root.contains(document.activeElement)&&a.focus()},focusActiveNavigationItem:function(){var a=t.root.querySelector(le.LIST_ITEM_ACTIVATED_SELECTOR);a&&a.focus()},notifyClose:function(){t.emit(le.CLOSE_EVENT,{},!0)},notifyOpen:function(){t.emit(le.OPEN_EVENT,{},!0)},trapFocus:function(){t.focusTrap.trapFocus()},releaseFocus:function(){t.focusTrap.releaseFocus()}},i=Ie.DISMISSIBLE,r=Ie.MODAL;if(this.root.classList.contains(i))return new Fe(n);if(this.root.classList.contains(r))return new vr(n);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+i+" and "+r+".")},e}(_);/**
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
 */var yr={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var vi=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return yr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(O);/**
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
 */var En=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation.shake(t)},e.prototype.float=function(t){this.foundation.float(t)},e.prototype.setRequired=function(t){this.foundation.setRequired(t)},e.prototype.getWidth=function(){return this.foundation.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},getWidth:function(){return Fi(t.root)},registerInteractionHandler:function(i,r){return t.listen(i,r)},deregisterInteractionHandler:function(i,r){return t.unlisten(i,r)}};return new vi(n)},e}(_);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Sr={ROOT:"mdc-form-field"},Rr={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var jn=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.click=function(){n.handleClick()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Rr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){t.adapter.deactivateInputRipple()})},e}(O);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var br=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.labelEl=function(){var t=jn.strings.LABEL_SELECTOR;return this.root.querySelector(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={activateInputRipple:function(){t.input&&t.input.ripple&&t.input.ripple.activate()},deactivateInputRipple:function(){t.input&&t.input.ripple&&t.input.ripple.deactivate()},deregisterInteractionHandler:function(i,r){var a=t.labelEl();a&&a.removeEventListener(i,r)},registerInteractionHandler:function(i,r){var a=t.labelEl();a&&a.addEventListener(i,r)}};return new jn(n)},e}(_);/**
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
 */var ye={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Lt={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var Ii=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.hasToggledAriaLabel=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(Lt.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(Lt.DATA_ARIA_LABEL_OFF);if(t&&n){if(this.adapter.getAttr(Lt.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(Lt.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(ye.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(ye.ICON_BUTTON_ON):this.adapter.removeClass(ye.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=t?this.adapter.getAttr(Lt.DATA_ARIA_LABEL_ON):this.adapter.getAttr(Lt.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(Lt.ARIA_LABEL,n||"")}else this.adapter.setAttr(Lt.ARIA_PRESSED,""+t)},e}(O);/**
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
 */var Or=Ii.strings,_r=function(o){m(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.rippleComponent=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},hasClass:function(i){return t.root.classList.contains(i)},notifyChange:function(i){t.emit(Or.CHANGE_EVENT,i)},removeClass:function(i){return t.root.classList.remove(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)}};return new Ii(n)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"on",{get:function(){return this.foundation.isOn()},set:function(t){this.foundation.toggle(t)},enumerable:!1,configurable:!0}),e.prototype.createRipple=function(){var t=new k(this.root);return t.unbounded=!0,t},e}(_);/**
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
 */var Kt={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var Lr=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(i){n.handleTransitionEnd(i)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Kt.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Kt.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Kt.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(Kt.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(Kt.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Kt.LINE_RIPPLE_DEACTIVATING))},e}(O);/**
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
 */var mn=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},setStyle:function(i,r){return t.root.style.setProperty(i,r)},registerEventHandler:function(i,r){return t.listen(i,r)},deregisterEventHandler:function(i,r){return t.unlisten(i,r)}};return new Lr(n)},e}(_);/**
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
 */var pe={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},yt={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},ce={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},G;(function(o){o[o.BOTTOM=1]="BOTTOM",o[o.CENTER=2]="CENTER",o[o.RIGHT=4]="RIGHT",o[o.FLIP_RTL=8]="FLIP_RTL"})(G||(G={}));var ee;(function(o){o[o.TOP_LEFT=0]="TOP_LEFT",o[o.TOP_RIGHT=4]="TOP_RIGHT",o[o.BOTTOM_LEFT=1]="BOTTOM_LEFT",o[o.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",o[o.TOP_START=8]="TOP_START",o[o.TOP_END=12]="TOP_END",o[o.BOTTOM_START=9]="BOTTOM_START",o[o.BOTTOM_END=13]="BOTTOM_END"})(ee||(ee={}));/**
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
 */var Bt=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=ee.TOP_START,n.originCorner=ee.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return Object.defineProperty(e,"cssClasses",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^G.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},ce.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout(function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()},ce.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var n=t.target;this.adapter.isElementInContainer(n)||this.close()},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,r=i==="Escape"||n===27;r&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),r=this.hasBit(n,G.BOTTOM)?"bottom":"top",a=this.hasBit(n,G.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset(n),u=this.getVerticalOriginOffset(n),l=this.measurements,c=l.anchorSize,p=l.surfaceSize,E=(t={},t[a]=s,t[r]=u,t);c.width/p.width>ce.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(E),this.adapter.setTransformOrigin(a+" "+r),this.adapter.setPosition(E),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,G.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,n=this.measurements,i=n.viewportDistance,r=n.anchorSize,a=n.surfaceSize,s=e.numbers.MARGIN_TO_EDGE,u=this.hasBit(this.anchorCorner,G.BOTTOM),l,c;u?(l=i.top-s+this.anchorMargin.bottom,c=i.bottom-s-this.anchorMargin.bottom):(l=i.top-s+this.anchorMargin.top,c=i.bottom-s+r.height-this.anchorMargin.top);var p=c-a.height>0;!p&&l>c+this.openBottomBias&&(t=this.setBit(t,G.BOTTOM));var E=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,G.FLIP_RTL),T=this.hasBit(this.anchorCorner,G.RIGHT)||this.hasBit(t,G.RIGHT),g=!1;E&&h?g=!T:g=T;var y,S;g?(y=i.left+r.width+this.anchorMargin.right,S=i.right-this.anchorMargin.right):(y=i.left+this.anchorMargin.left,S=i.right+r.width-this.anchorMargin.left);var N=y-a.width>0,V=S-a.width>0,H=this.hasBit(t,G.FLIP_RTL)&&this.hasBit(t,G.RIGHT);return V&&H&&E||!N&&H?t=this.unsetBit(t,G.RIGHT):(N&&g&&E||N&&!g&&T||!V&&y>=S)&&(t=this.setBit(t,G.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,r=this.hasBit(t,G.BOTTOM),a=this.hasBit(this.anchorCorner,G.BOTTOM),s=e.numbers.MARGIN_TO_EDGE;return r?(i=n.top+this.anchorMargin.top-s,a||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-s,a&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,G.RIGHT),r=this.hasBit(this.anchorCorner,G.RIGHT);if(i){var a=r?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return r?n.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,G.BOTTOM),r=this.hasBit(this.anchorCorner,G.BOTTOM),a=0;return i?a=r?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=r?n.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(t){var n,i,r=this.measurements,a=r.windowScroll,s=r.viewportDistance,u=r.surfaceSize,l=r.viewportSize,c=Object.keys(t);try{for(var p=b(c),E=p.next();!E.done;E=p.next()){var h=E.value,T=t[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){t[h]=(l.width-u.width)/2;continue}T+=s[h],this.isFixedPosition||(h==="top"?T+=a.y:h==="bottom"?T-=a.y:h==="left"?T+=a.x:T-=a.x),t[h]=T}}catch(g){n={error:g}}finally{try{E&&!E.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,n=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,r=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(n||r)&&setTimeout(function(){t.adapter.restoreFocus()},ce.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,n){return!!(t&n)},e.prototype.setBit=function(t,n){return t|n},e.prototype.unsetBit=function(t,n){return t^n},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(O);/**
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
 */var yi=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this,n=this.root.parentElement;this.anchorElement=n&&n.classList.contains(pe.ANCHOR)?n:null,this.root.classList.contains(pe.FIXED)&&this.setFixedPosition(!0),this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleBodyClick=function(i){t.foundation.handleBodyClick(i)},this.registerBodyClickListener=function(){document.body.addEventListener("click",t.handleBodyClick,{capture:!0})},this.deregisterBodyClickListener=function(){document.body.removeEventListener("click",t.handleBodyClick,{capture:!0})},this.listen("keydown",this.handleKeydown),this.listen(yt.OPENED_EVENT,this.registerBodyClickListener),this.listen(yt.CLOSED_EVENT,this.deregisterBodyClickListener)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten(yt.OPENED_EVENT,this.registerBodyClickListener),this.unlisten(yt.CLOSED_EVENT,this.deregisterBodyClickListener),o.prototype.destroy.call(this)},e.prototype.isOpen=function(){return this.foundation.isOpen()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=!1),this.foundation.close(t)},Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.foundation.setQuickOpen(t)},enumerable:!1,configurable:!0}),e.prototype.setIsHoisted=function(t){this.foundation.setIsHoisted(t)},e.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},e.prototype.setFixedPosition=function(t){t?this.root.classList.add(pe.FIXED):this.root.classList.remove(pe.FIXED),this.foundation.setFixedPosition(t)},e.prototype.setAbsolutePosition=function(t,n){this.foundation.setAbsolutePosition(t,n),this.setIsHoisted(!0)},e.prototype.setAnchorCorner=function(t){this.foundation.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.foundation.setAnchorMargin(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){return t.emit(Bt.strings.CLOSED_EVENT,{})},notifyClosing:function(){t.emit(Bt.strings.CLOSING_EVENT,{})},notifyOpen:function(){return t.emit(Bt.strings.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(Bt.strings.OPENING_EVENT,{})},isElementInContainer:function(i){return t.root.contains(i)},isRtl:function(){return getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setTransformOrigin:function(i){var r=ie(window,"transform")+"-origin";t.root.style.setProperty(r,i)},isFocused:function(){return document.activeElement===t.root},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){t.root.contains(document.activeElement)&&t.previousFocus&&t.previousFocus.focus&&t.previousFocus.focus()},getInnerDimensions:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(i){var r=t.root;r.style.left="left"in i?i.left+"px":"",r.style.right="right"in i?i.right+"px":"",r.style.top="top"in i?i.top+"px":"",r.style.bottom="bottom"in i?i.bottom+"px":""},setMaxHeight:function(i){t.root.style.maxHeight=i}};return new Bt(n)},e}(_);/**
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
 */var ne={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Et={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Dr={FOCUS_ROOT_INDEX:-1},Zt;(function(o){o[o.NONE=0]="NONE",o[o.LIST_ROOT=1]="LIST_ROOT",o[o.FIRST_ITEM=2]="FIRST_ITEM",o[o.LAST_ITEM=3]="LAST_ITEM"})(Zt||(Zt={}));/**
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
 */var Nr=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.closeAnimationEndTimerId=0,n.defaultFocusState=Zt.LIST_ROOT,n.selectedIndex=-1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var n=t.key,i=t.keyCode,r=n==="Tab"||i===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var n=this,i=this.adapter.getElementIndex(t);if(!(i<0)){this.adapter.notifySelected({index:i});var r=this.adapter.getAttributeFromElementAtIndex(i,Et.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var a=n.adapter.getElementIndex(t);a>=0&&n.adapter.isSelectableItemAtIndex(a)&&n.setSelectedIndex(a)},Bt.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Zt.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Zt.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Zt.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,Et.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,ne.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,ne.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Et.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,n){this.validatedIndex(t),n?(this.adapter.removeClassFromElementAtIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Et.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Et.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var n=this.adapter.getMenuItemCount(),i=t>=0&&t<n;if(!i)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(O);/**
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
 */var Si=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new yi(i)}),n===void 0&&(n=function(i){return new pn(i)}),this.menuSurfaceFactory=t,this.listFactory=n},e.prototype.initialSyncWithDOM=function(){var t=this;this.menuSurface=this.menuSurfaceFactory(this.root);var n=this.root.querySelector(Et.LIST_SELECTOR);n?(this.list=this.listFactory(n),this.list.wrapFocus=!0):this.list=null,this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleItemAction=function(i){t.foundation.handleItemAction(t.items[i.detail.index])},this.handleMenuSurfaceOpened=function(){t.foundation.handleMenuSurfaceOpened()},this.menuSurface.listen(Bt.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.listen("keydown",this.handleKeydown),this.listen(on.strings.ACTION_EVENT,this.handleItemAction)},e.prototype.destroy=function(){this.list&&this.list.destroy(),this.menuSurface.destroy(),this.menuSurface.unlisten(Bt.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.unlisten("keydown",this.handleKeydown),this.unlisten(on.strings.ACTION_EVENT,this.handleItemAction),o.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"open",{get:function(){return this.menuSurface.isOpen()},set:function(t){t?this.menuSurface.open():this.menuSurface.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{get:function(){return this.list?this.list.wrapFocus:!1},set:function(t){this.list&&(this.list.wrapFocus=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.list&&(this.list.hasTypeahead=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.list?this.list.typeaheadInProgress:!1},enumerable:!1,configurable:!0}),e.prototype.typeaheadMatchItem=function(t,n){return this.list?this.list.typeaheadMatchItem(t,n):-1},e.prototype.layout=function(){this.list&&this.list.layout()},Object.defineProperty(e.prototype,"items",{get:function(){return this.list?this.list.listElements:[]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.list&&(this.list.singleSelection=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.list?this.list.selectedIndex:U.UNSET_INDEX},set:function(t){this.list&&(this.list.selectedIndex=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.menuSurface.quickOpen=t},enumerable:!1,configurable:!0}),e.prototype.setDefaultFocusState=function(t){this.foundation.setDefaultFocusState(t)},e.prototype.setAnchorCorner=function(t){this.menuSurface.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.menuSurface.setAnchorMargin(t)},e.prototype.setSelectedIndex=function(t){this.foundation.setSelectedIndex(t)},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.getOptionByIndex=function(t){var n=this.items;return t<n.length?this.items[t]:null},e.prototype.getPrimaryTextAtIndex=function(t){var n=this.getOptionByIndex(t);return n&&this.list&&this.list.getPrimaryText(n)||""},e.prototype.setFixedPosition=function(t){this.menuSurface.setFixedPosition(t)},e.prototype.setIsHoisted=function(t){this.menuSurface.setIsHoisted(t)},e.prototype.setAbsolutePosition=function(t,n){this.menuSurface.setAbsolutePosition(t,n)},e.prototype.setAnchorElement=function(t){this.menuSurface.anchorElement=t},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassToElementAtIndex:function(i,r){var a=t.items;a[i].classList.add(r)},removeClassFromElementAtIndex:function(i,r){var a=t.items;a[i].classList.remove(r)},addAttributeToElementAtIndex:function(i,r,a){var s=t.items;s[i].setAttribute(r,a)},removeAttributeFromElementAtIndex:function(i,r){var a=t.items;a[i].removeAttribute(r)},getAttributeFromElementAtIndex:function(i,r){var a=t.items;return a[i].getAttribute(r)},elementContainsClass:function(i,r){return i.classList.contains(r)},closeSurface:function(i){t.menuSurface.close(i)},getElementIndex:function(i){return t.items.indexOf(i)},notifySelected:function(i){t.emit(Et.SELECTED_EVENT,{index:i.index,item:t.items[i.index]})},getMenuItemCount:function(){return t.items.length},focusItemAtIndex:function(i){t.items[i].focus()},focusListRoot:function(){t.root.querySelector(Et.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(i){return!!gt(t.items[i],"."+ne.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(i){var r=gt(t.items[i],"."+ne.MENU_SELECTION_GROUP),a=r.querySelector("."+ne.MENU_SELECTED_LIST_ITEM);return a?t.items.indexOf(a):-1}};return new Nr(n)},e}(_);/**
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
 */var Ri={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Xn={NOTCH_ELEMENT_PADDING:8},an={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var xr=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Ri},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return an},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Xn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Xn.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(O);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Tn=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(Ri.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+vi.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(an.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root.classList.add(an.NO_LABEL)},e.prototype.notch=function(t){this.foundation.notch(t)},e.prototype.closeNotch=function(){this.foundation.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},setNotchWidthProperty:function(i){t.notchElement.style.setProperty("width",i+"px")},removeNotchWidthProperty:function(){t.notchElement.style.removeProperty("width")}};return new xr(n)},e}(_);/**
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
 */var Mr={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},wr={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var qn=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return wr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Mr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var n=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(O);/**
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
 */var Hr=function(o){m(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl.checked},set:function(t){this.nativeControl.checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl.disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl.value},set:function(t){this.nativeControl.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.rippleSurface.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},setNativeControlDisabled:function(i){return t.nativeControl.disabled=i}};return new qn(n)},e.prototype.createRipple=function(){var t=this,n=f(f({},k.createAdapter(this)),{registerInteractionHandler:function(i,r){t.nativeControl.addEventListener(i,r,K())},deregisterInteractionHandler:function(i,r){t.nativeControl.removeEventListener(i,r,K())},isSurfaceActive:function(){return!1},isUnbounded:function(){return!0}});return new k(this.root,new At(n))},Object.defineProperty(e.prototype,"nativeControl",{get:function(){var t=qn.strings.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Radio component requires a "+t+" element");return n},enumerable:!1,configurable:!0}),e}(_);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Pr={SEGMENT:".mdc-segmented-button__segment"},We={SELECTED:"selected",CHANGE:"change"},Fr={SINGLE_SELECT:"mdc-segmented-button--single-select"};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Br=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},getSegments:function(){return[]},selectSegment:function(){},unselectSegment:function(){},notifySelectedChange:function(){}}},enumerable:!1,configurable:!0}),e.prototype.selectSegment=function(t){this.adapter.selectSegment(t)},e.prototype.unselectSegment=function(t){this.adapter.unselectSegment(t)},e.prototype.getSelectedSegments=function(){return this.adapter.getSegments().filter(function(t){return t.selected})},e.prototype.isSegmentSelected=function(t){return this.adapter.getSegments().some(function(n){return(n.index===t||n.segmentId===t)&&n.selected})},e.prototype.isSingleSelect=function(){return this.adapter.hasClass(Fr.SINGLE_SELECT)},e.prototype.handleSelected=function(t){this.isSingleSelect()&&this.unselectPrevSelected(t.index),this.adapter.notifySelectedChange(t)},e.prototype.unselectPrevSelected=function(t){var n,i;try{for(var r=b(this.getSelectedSegments()),a=r.next();!a.done;a=r.next()){var s=a.value;s.index!==t&&this.unselectSegment(s.index)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e}(O);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var zn={TRUE:"true",FALSE:"false"},Ge={ARIA_CHECKED:"aria-checked",ARIA_PRESSED:"aria-pressed",DATA_SEGMENT_ID:"data-segment-id"},je={CLICK:"click",SELECTED:"selected"},Xe={SELECTED:"mdc-segmented-button__segment--selected"};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var kr={bottom:0,height:0,left:0,right:0,top:0,width:0},Vr=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{isSingleSelect:function(){return!1},getAttr:function(){return""},setAttr:function(){},addClass:function(){},removeClass:function(){},hasClass:function(){return!1},notifySelectedChange:function(){},getRootBoundingClientRect:function(){return kr}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(Xe.SELECTED)},e.prototype.setSelected=function(){this.adapter.addClass(Xe.SELECTED),this.setAriaAttr(zn.TRUE)},e.prototype.setUnselected=function(){this.adapter.removeClass(Xe.SELECTED),this.setAriaAttr(zn.FALSE)},e.prototype.getSegmentId=function(){var t;return(t=this.adapter.getAttr(Ge.DATA_SEGMENT_ID))!==null&&t!==void 0?t:void 0},e.prototype.handleClick=function(){this.adapter.isSingleSelect()?this.setSelected():this.toggleSelection(),this.adapter.notifySelectedChange(this.isSelected())},e.prototype.getDimensions=function(){return this.adapter.getRootBoundingClientRect()},e.prototype.toggleSelection=function(){this.isSelected()?this.setUnselected():this.setSelected()},e.prototype.setAriaAttr=function(t){this.adapter.isSingleSelect()?this.adapter.setAttr(Ge.ARIA_CHECKED,t):this.adapter.setAttr(Ge.ARIA_PRESSED,t)},e}(O);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Ur=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n=this;t===void 0&&(t=function(r,a){return new k(r,a)});var i=f(f({},k.createAdapter(this)),{computeBoundingRect:function(){return n.foundation.getDimensions()}});this.rippleComponent=t(this.root,new At(i))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen(je.CLICK,this.handleClick)},e.prototype.destroy=function(){this.ripple.destroy(),this.unlisten(je.CLICK,this.handleClick),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={isSingleSelect:function(){return t.isSingleSelect},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.root.setAttribute(i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},notifySelectedChange:function(i){t.emit(je.SELECTED,{index:t.index,selected:i,segmentId:t.getSegmentId()},!0)},getRootBoundingClientRect:function(){return t.root.getBoundingClientRect()}};return new Vr(n)},e.prototype.setIndex=function(t){this.index=t},e.prototype.setIsSingleSelect=function(t){this.isSingleSelect=t},e.prototype.isSelected=function(){return this.foundation.isSelected()},e.prototype.setSelected=function(){this.foundation.setSelected()},e.prototype.setUnselected=function(){this.foundation.setUnselected()},e.prototype.getSegmentId=function(){return this.foundation.getSegmentId()},e}(_);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Kr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"segments",{get:function(){return this.segmentsList.slice()},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new Ur(n)}),this.segmentFactory=t,this.segmentsList=this.instantiateSegments(this.segmentFactory)},e.prototype.instantiateSegments=function(t){var n=[].slice.call(this.root.querySelectorAll(Pr.SEGMENT));return n.map(function(i){return t(i)})},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleSelected=function(s){t.foundation.handleSelected(s.detail)},this.listen(We.SELECTED,this.handleSelected);for(var n=this.foundation.isSingleSelect(),i=0;i<this.segmentsList.length;i++){var r=this.segmentsList[i];r.setIndex(i),r.setIsSingleSelect(n)}var a=this.segmentsList.filter(function(s){return s.isSelected()});if(n&&a.length===0&&this.segmentsList.length>0)throw new Error("No segment selected in singleSelect mdc-segmented-button");if(n&&a.length>1)throw new Error("Multiple segments selected in singleSelect mdc-segmented-button")},e.prototype.destroy=function(){var t,n;try{for(var i=b(this.segmentsList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.unlisten(We.SELECTED,this.handleSelected),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(i){return t.root.classList.contains(i)},getSegments:function(){return t.mappedSegments()},selectSegment:function(i){var r=t.mappedSegments().find(function(a){return a.index===i||a.segmentId===i});r&&t.segmentsList[r.index].setSelected()},unselectSegment:function(i){var r=t.mappedSegments().find(function(a){return a.index===i||a.segmentId===i});r&&t.segmentsList[r.index].setUnselected()},notifySelectedChange:function(i){t.emit(We.CHANGE,i,!0)}};return new Br(n)},e.prototype.getSelectedSegments=function(){return this.foundation.getSelectedSegments()},e.prototype.selectSegment=function(t){this.foundation.selectSegment(t)},e.prototype.unselectSegment=function(t){this.foundation.unselectSegment(t)},e.prototype.isSegmentSelected=function(t){return this.foundation.isSegmentSelected(t)},e.prototype.mappedSegments=function(){return this.segmentsList.map(function(t,n){return{index:n,selected:t.isSelected(),segmentId:t.getSegmentId()}})},e}(_);/**
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
 */var F={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},$={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Wt={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
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
 */var Wr=function(o){m(e,o);function e(t,n){n===void 0&&(n={});var i=o.call(this,f(f({},e.defaultAdapter),t))||this;return i.disabled=!1,i.isMenuOpen=!1,i.useDefaultValidation=!0,i.customValidity=!0,i.lastSelectedIndex=Wt.UNSET_INDEX,i.clickDebounceTimeout=0,i.recentlyClicked=!1,i.leadingIcon=n.leadingIcon,i.helperText=n.helperText,i}return Object.defineProperty(e,"cssClasses",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1),!(t>=this.adapter.getMenuItemCount())&&(t===Wt.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),n&&this.adapter.closeMenu(),!i&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,n){n===void 0&&(n=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,n)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),n=this.adapter.getMenuItemValues();return t!==Wt.UNSET_INDEX?n[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(F.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(F.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(F.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,n=this.adapter.hasClass(F.FOCUSED),i=t||n,r=this.adapter.hasClass(F.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),n=t.indexOf(this.getValue());this.setSelectedIndex(n,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),n=t>=0?t:0;this.adapter.focusMenuItemAtIndex(n)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(F.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(F.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(F.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(F.FOCUSED))){var n=W(t)===v.ENTER,i=W(t)===v.SPACEBAR,r=W(t)===v.ARROW_UP,a=W(t)===v.ARROW_DOWN,s=t.ctrlKey||t.metaKey;if(!s&&(!i&&t.key&&t.key.length===1||i&&this.adapter.isTypeaheadInProgress())){var u=i?" ":t.key,l=this.adapter.typeaheadMatchItem(u,this.getSelectedIndex());l>=0&&this.setSelectedIndex(l),t.preventDefault();return}!n&&!i&&!r&&!a||(this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var n=this.adapter.hasClass(F.FOCUSED);if(t){var i=Wt.LABEL_SCALE,r=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(r)}else n||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(F.INVALID),this.adapter.removeMenuClass(F.MENU_INVALID)):(this.adapter.addClass(F.INVALID),this.adapter.addMenuClass(F.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(F.REQUIRED)&&!this.adapter.hasClass(F.DISABLED)?this.getSelectedIndex()!==Wt.UNSET_INDEX&&(this.getSelectedIndex()!==0||!!this.getValue()):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(F.REQUIRED):this.adapter.removeClass(F.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(ee.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(F.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(F.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(F.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(F.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var n=this.helperText.isVisible(),i=this.helperText.getId();n&&i?this.adapter.setSelectAnchorAttr($.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr($.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},Wt.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(O);/**
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
 */var Gt={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Dt={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
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
 */var Gr=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Gt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Dt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Dt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(Dt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Dt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.getIsValidation=function(){return this.adapter.hasClass(Dt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(Dt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(Dt.HELPER_TEXT_VALIDATION_MSG);if(n){var i=this.adapter.hasClass(Dt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),r=!t||i;if(r){this.showToScreenReader(),t?this.adapter.removeAttr(Gt.ROLE):this.adapter.setAttr(Gt.ROLE,"alert");return}this.adapter.removeAttr(Gt.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Gt.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(Gt.ARIA_HIDDEN,"true")},e}(O);/**
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
 */var jr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new Gr(n)},e}(_);/**
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
 */var Yn={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
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
 */var $n=["click","keydown"],Qn=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return Yn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=b($n),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.registerInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=b($n),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",Yn.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&this.adapter.notifyIconAction()},e}(O);/**
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
 */var Xr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){return t.listen(i,r)},deregisterInteractionHandler:function(i,r){return t.unlisten(i,r)},notifyIconAction:function(){return t.emit(Qn.strings.ICON_EVENT,{},!0)}};return new Qn(n)},e}(_);/**
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
 */var qr=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,a,s){if(t===void 0&&(t=function(h){return new En(h)}),n===void 0&&(n=function(h){return new mn(h)}),i===void 0&&(i=function(h){return new Tn(h)}),r===void 0&&(r=function(h){return new Si(h)}),a===void 0&&(a=function(h){return new Xr(h)}),s===void 0&&(s=function(h){return new jr(h)}),this.selectAnchor=this.root.querySelector($.SELECT_ANCHOR_SELECTOR),this.selectedText=this.root.querySelector($.SELECTED_TEXT_SELECTOR),this.hiddenInput=this.root.querySelector($.HIDDEN_INPUT_SELECTOR),!this.selectedText)throw new Error("MDCSelect: Missing required element: The following selector must be present: "+("'"+$.SELECTED_TEXT_SELECTOR+"'"));if(this.selectAnchor.hasAttribute($.ARIA_CONTROLS)){var u=document.getElementById(this.selectAnchor.getAttribute($.ARIA_CONTROLS));u&&(this.helperText=s(u))}this.menuSetup(r);var l=this.root.querySelector($.LABEL_SELECTOR);this.label=l?t(l):null;var c=this.root.querySelector($.LINE_RIPPLE_SELECTOR);this.lineRipple=c?n(c):null;var p=this.root.querySelector($.OUTLINE_SELECTOR);this.outline=p?i(p):null;var E=this.root.querySelector($.LEADING_ICON_SELECTOR);E&&(this.leadingIcon=a(E)),this.root.classList.contains(F.OUTLINED)||(this.ripple=this.createRipple())},e.prototype.initialSyncWithDOM=function(){var t=this;if(this.handleFocus=function(){t.foundation.handleFocus()},this.handleBlur=function(){t.foundation.handleBlur()},this.handleClick=function(n){t.selectAnchor.focus(),t.foundation.handleClick(t.getNormalizedXCoordinate(n))},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleMenuItemAction=function(n){t.foundation.handleMenuItemAction(n.detail.index)},this.handleMenuOpened=function(){t.foundation.handleMenuOpened()},this.handleMenuClosed=function(){t.foundation.handleMenuClosed()},this.handleMenuClosing=function(){t.foundation.handleMenuClosing()},this.selectAnchor.addEventListener("focus",this.handleFocus),this.selectAnchor.addEventListener("blur",this.handleBlur),this.selectAnchor.addEventListener("click",this.handleClick),this.selectAnchor.addEventListener("keydown",this.handleKeydown),this.menu.listen(yt.CLOSED_EVENT,this.handleMenuClosed),this.menu.listen(yt.CLOSING_EVENT,this.handleMenuClosing),this.menu.listen(yt.OPENED_EVENT,this.handleMenuOpened),this.menu.listen(Et.SELECTED_EVENT,this.handleMenuItemAction),this.hiddenInput){if(this.hiddenInput.value){this.foundation.setValue(this.hiddenInput.value,!0),this.foundation.layout();return}this.hiddenInput.value=this.value}},e.prototype.destroy=function(){this.selectAnchor.removeEventListener("focus",this.handleFocus),this.selectAnchor.removeEventListener("blur",this.handleBlur),this.selectAnchor.removeEventListener("keydown",this.handleKeydown),this.selectAnchor.removeEventListener("click",this.handleClick),this.menu.unlisten(yt.CLOSED_EVENT,this.handleMenuClosed),this.menu.unlisten(yt.OPENED_EVENT,this.handleMenuOpened),this.menu.unlisten(Et.SELECTED_EVENT,this.handleMenuItemAction),this.menu.destroy(),this.ripple&&this.ripple.destroy(),this.outline&&this.outline.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.helperText&&this.helperText.destroy(),o.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),e.prototype.setValue=function(t,n){n===void 0&&(n=!1),this.foundation.setValue(t,n)},Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t,!0)},enumerable:!1,configurable:!0}),e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n=!1),this.foundation.setSelectedIndex(t,!0,n)},Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.getDisabled()},set:function(t){this.foundation.setDisabled(t),this.hiddenInput&&(this.hiddenInput.disabled=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useDefaultValidation",{set:function(t){this.foundation.setUseDefaultValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.foundation.getRequired()},set:function(t){this.foundation.setRequired(t)},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.foundation.layout()},e.prototype.layoutOptions=function(){this.foundation.layoutOptions(),this.menu.layout(),this.menuItemValues=this.menu.items.map(function(t){return t.getAttribute($.VALUE_ATTR)||""}),this.hiddenInput&&(this.hiddenInput.value=this.value)},e.prototype.getDefaultFoundation=function(){var t=f(f(f(f({},this.getSelectAdapterMethods()),this.getCommonAdapterMethods()),this.getOutlineAdapterMethods()),this.getLabelAdapterMethods());return new Wr(t,this.getFoundationMap())},e.prototype.menuSetup=function(t){this.menuElement=this.root.querySelector($.MENU_SELECTOR),this.menu=t(this.menuElement),this.menu.hasTypeahead=!0,this.menu.singleSelection=!0,this.menuItemValues=this.menu.items.map(function(n){return n.getAttribute($.VALUE_ATTR)||""})},e.prototype.createRipple=function(){var t=this,n=f(f({},k.createAdapter({root:this.selectAnchor})),{registerInteractionHandler:function(i,r){t.selectAnchor.addEventListener(i,r)},deregisterInteractionHandler:function(i,r){t.selectAnchor.removeEventListener(i,r)}});return new k(this.selectAnchor,new At(n))},e.prototype.getSelectAdapterMethods=function(){var t=this;return{getMenuItemAttr:function(n,i){return n.getAttribute(i)},setSelectedText:function(n){t.selectedText.textContent=n},isSelectAnchorFocused:function(){return document.activeElement===t.selectAnchor},getSelectAnchorAttr:function(n){return t.selectAnchor.getAttribute(n)},setSelectAnchorAttr:function(n,i){t.selectAnchor.setAttribute(n,i)},removeSelectAnchorAttr:function(n){t.selectAnchor.removeAttribute(n)},addMenuClass:function(n){t.menuElement.classList.add(n)},removeMenuClass:function(n){t.menuElement.classList.remove(n)},openMenu:function(){t.menu.open=!0},closeMenu:function(){t.menu.open=!1},getAnchorElement:function(){return t.root.querySelector($.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(n){t.menu.setAnchorElement(n)},setMenuAnchorCorner:function(n){t.menu.setAnchorCorner(n)},setMenuWrapFocus:function(n){t.menu.wrapFocus=n},getSelectedIndex:function(){var n=t.menu.selectedIndex;return n instanceof Array?n[0]:n},setSelectedIndex:function(n){t.menu.selectedIndex=n},focusMenuItemAtIndex:function(n){t.menu.items[n].focus()},getMenuItemCount:function(){return t.menu.items.length},getMenuItemValues:function(){return t.menuItemValues},getMenuItemTextAtIndex:function(n){return t.menu.getPrimaryTextAtIndex(n)},isTypeaheadInProgress:function(){return t.menu.typeaheadInProgress},typeaheadMatchItem:function(n,i){return t.menu.typeaheadMatchItem(n,i)}}},e.prototype.getCommonAdapterMethods=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},setRippleCenter:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)},activateBottomLine:function(){t.lineRipple&&t.lineRipple.activate()},deactivateBottomLine:function(){t.lineRipple&&t.lineRipple.deactivate()},notifyChange:function(n){t.hiddenInput&&(t.hiddenInput.value=n);var i=t.selectedIndex;t.emit($.CHANGE_EVENT,{value:n,index:i},!0)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)},closeOutline:function(){t.outline&&t.outline.closeNotch()}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{hasLabel:function(){return!!t.label},floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getNormalizedXCoordinate=function(t){var n=t.target.getBoundingClientRect(),i=this.isTouchEvent(t)?t.touches[0].clientX:t.clientX;return i-n.left},e.prototype.isTouchEvent=function(t){return!!t.touches},e.prototype.getFoundationMap=function(){return{helperText:this.helperText?this.helperText.foundationForSelect:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForSelect:void 0}},e}(_);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var L={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_CONTAINER:"mdc-slider__value-indicator-container",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},qe={STEP_SIZE:1,MIN_RANGE:0,THUMB_UPDATE_MIN_PX:5},X={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step",DATA_MIN_RANGE:"data-min-range"},Zn={CHANGE:"MDCSlider:change",INPUT:"MDCSlider:input"},Y={VAR_VALUE_INDICATOR_CARET_LEFT:"--slider-value-indicator-caret-left",VAR_VALUE_INDICATOR_CARET_RIGHT:"--slider-value-indicator-caret-right",VAR_VALUE_INDICATOR_CARET_TRANSFORM:"--slider-value-indicator-caret-transform",VAR_VALUE_INDICATOR_CONTAINER_LEFT:"--slider-value-indicator-container-left",VAR_VALUE_INDICATOR_CONTAINER_RIGHT:"--slider-value-indicator-container-right",VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM:"--slider-value-indicator-container-transform"};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var qt;(function(o){o[o.ACTIVE=0]="ACTIVE",o[o.INACTIVE=1]="INACTIVE"})(qt||(qt={}));var d;(function(o){o[o.START=1]="START",o[o.END=2]="END"})(d||(d={}));/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var we;(function(o){o.SLIDER_UPDATE="slider_update"})(we||(we={}));var ze=typeof window<"u",zr=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.initialStylesRemoved=!1,n.isDisabled=!1,n.isDiscrete=!1,n.step=qe.STEP_SIZE,n.minRange=qe.MIN_RANGE,n.hasTickMarks=!1,n.isRange=!1,n.thumb=null,n.downEventClientX=null,n.startThumbKnobWidth=0,n.endThumbKnobWidth=0,n.animFrame=new fn,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(){return 0},getValueIndicatorContainerWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(L.DISABLED),this.isDiscrete=this.adapter.hasClass(L.DISCRETE),this.hasTickMarks=this.adapter.hasClass(L.TICK_MARKS),this.isRange=this.adapter.hasClass(L.RANGE);var n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(X.INPUT_MIN,this.isRange?d.START:d.END),X.INPUT_MIN),i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(X.INPUT_MAX,d.END),X.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(X.INPUT_VALUE,d.END),X.INPUT_VALUE),a=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(X.INPUT_VALUE,d.START),X.INPUT_VALUE):n,s=this.adapter.getInputAttribute(X.INPUT_STEP,d.END),u=s?this.convertAttributeValueToNumber(s,X.INPUT_STEP):this.step,l=this.adapter.getAttribute(X.DATA_MIN_RANGE),c=l?this.convertAttributeValueToNumber(l,X.DATA_MIN_RANGE):this.minRange;this.validateProperties({min:n,max:i,value:r,valueStart:a,step:u,minRange:c}),this.min=n,this.max=i,this.value=r,this.valueStart=a,this.step=u,this.minRange=c,this.numDecimalPlaces=Jn(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=a,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(d.START)},this.inputEndChangeListener=function(){t.handleInputChange(d.END)},this.inputStartFocusListener=function(){t.handleInputFocus(d.START)},this.inputEndFocusListener=function(){t.handleInputFocus(d.END)},this.inputStartBlurListener=function(){t.handleInputBlur(d.START)},this.inputEndBlurListener=function(){t.handleInputBlur(d.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart+this.minRange)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+") + min range ("+this.minRange+")"));this.updateValue(t,d.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value-this.minRange)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+") - min range ("+this.minRange+")"));this.updateValue(t,d.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Jn(t),this.updateUI()},e.prototype.setMinRange=function(t){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");if(t<0)throw new Error("`minRange` must be non-negative. "+("Current value: "+t));if(this.value-this.valueStart<t)throw new Error("start thumb value ("+this.valueStart+") and end thumb value "+("("+this.value+") must differ by at least "+t+"."));this.minRange=t},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.getMinRange=function(){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");return this.minRange},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(L.DISABLED),this.isRange&&this.adapter.setInputAttribute(X.INPUT_DISABLED,"",d.START),this.adapter.setInputAttribute(X.INPUT_DISABLED,"",d.END)):(this.adapter.removeClass(L.DISABLED),this.isRange&&this.adapter.removeInputAttribute(X.INPUT_DISABLED,d.START),this.adapter.removeInputAttribute(X.INPUT_DISABLED,d.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var n=t===void 0?{}:t,i=n.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(d.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(d.END)),i||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=n;var i=this.mapClientXOnSliderScale(n);this.thumb=this.getThumbFromDownEvent(n,i),this.thumb!==null&&(this.handleDragStart(t,i,this.thumb),this.updateValue(i,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,i=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(n),this.thumb!==null){var r=this.mapClientXOnSliderScale(n);i||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){var t,n;if(!(this.isDisabled||this.thumb===null)){!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t)&&this.handleInputBlur(this.thumb);var i=this.thumb===d.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,r=this.thumb===d.START?this.valueStart:this.value;i!==r&&this.adapter.emitChangeEvent(r,this.thumb),this.adapter.emitDragEndEvent(r,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(L.THUMB_WITH_INDICATOR,d.START),this.adapter.addThumbClass(L.THUMB_WITH_INDICATOR,d.END))},e.prototype.handleThumbMouseleave=function(){var t,n;!this.isDiscrete||!this.isRange||!(!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t))&&(this.adapter.isInputFocused(d.START)||this.adapter.isInputFocused(d.END))||this.thumb||(this.adapter.removeThumbClass(L.THUMB_WITH_INDICATOR,d.START),this.adapter.removeThumbClass(L.THUMB_WITH_INDICATOR,d.END))},e.prototype.handleMousedownOrTouchstart=function(t){var n=this,i=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(i,this.moveListener);var r=function(){n.handleUp(),n.adapter.deregisterBodyEventHandler(i,n.moveListener),n.adapter.deregisterEventHandler("mouseup",r),n.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},e.prototype.handlePointerdown=function(t){var n=t.button===0;n&&(t.pointerId!=null&&this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t))},e.prototype.handleInputChange=function(t){var n=Number(this.adapter.getInputValue(t));t===d.START?this.setValueStart(n):this.setValue(n),this.adapter.emitChangeEvent(t===d.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===d.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(L.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(L.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===d.START?d.END:d.START;this.adapter.addThumbClass(L.THUMB_WITH_INDICATOR,n)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(L.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(L.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===d.START?d.END:d.START;this.adapter.removeThumbClass(L.THUMB_WITH_INDICATOR,n)}},e.prototype.handleDragStart=function(t,n,i){var r,a;this.adapter.emitDragStartEvent(n,i),this.adapter.focusInput(i),!((a=(r=this.adapter).shouldHideFocusStylesForPointerEvents)===null||a===void 0)&&a.call(r)&&this.handleInputFocus(i),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,n){if(!this.isRange)return d.END;var i=this.adapter.getThumbBoundingClientRect(d.START),r=this.adapter.getThumbBoundingClientRect(d.END),a=t>=i.left&&t<=i.right,s=t>=r.left&&t<=r.right;return a&&s?null:a?d.START:s?d.END:n<this.valueStart?d.START:n>this.value?d.END:n-this.valueStart<=this.value-n?d.START:d.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var n=Math.abs(this.downEventClientX-t)<qe.THUMB_UPDATE_MIN_PX;if(n)return this.thumb;var i=t<this.downEventClientX;return i?this.adapter.isRTL()?d.END:d.START:this.adapter.isRTL()?d.START:d.END},e.prototype.updateUI=function(t){t?this.updateThumbAndInputAttributes(t):(this.updateThumbAndInputAttributes(d.START),this.updateThumbAndInputAttributes(d.END)),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(t){var n=this.isRange&&t===d.START?this.valueStart:this.value,i=String(n);this.adapter.setInputAttribute(X.INPUT_VALUE,i,t),this.isRange&&t===d.START?this.adapter.setInputAttribute(X.INPUT_MIN,String(n+this.minRange),d.END):this.isRange&&t===d.END&&this.adapter.setInputAttribute(X.INPUT_MAX,String(n-this.minRange),d.START),this.adapter.getInputValue(t)!==i&&this.adapter.setInputValue(i,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(X.ARIA_VALUETEXT,r(n,t),t)}},e.prototype.updateValueIndicatorUI=function(t){if(this.isDiscrete){var n=this.isRange&&t===d.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(n,t===d.START?d.START:d.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,d.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,n=(this.value-this.valueStart)/this.step+1,i=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(qt.INACTIVE),a=Array.from({length:n}).fill(qt.ACTIVE),s=Array.from({length:i}).fill(qt.INACTIVE);this.adapter.updateTickMarks(r.concat(a).concat(s))}},e.prototype.mapClientXOnSliderScale=function(t){var n=t-this.rect.left,i=n/this.rect.width;this.adapter.isRTL()&&(i=1-i);var r=this.min+i*(this.max-this.min);return r===this.max||r===this.min?r:Number(this.quantize(r).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var n=Math.round((t-this.min)/this.step);return this.min+n*this.step},e.prototype.updateValue=function(t,n,i){var r=i===void 0?{}:i,a=r.emitInputEvent;if(t=this.clampValue(t,n),this.isRange&&n===d.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(n),a&&this.adapter.emitInputEvent(n===d.START?this.valueStart:this.value,n)},e.prototype.clampValue=function(t,n){t=Math.min(Math.max(t,this.min),this.max);var i=this.isRange&&n===d.START&&t>this.value-this.minRange;if(i)return this.value-this.minRange;var r=this.isRange&&n===d.END&&t<this.valueStart+this.minRange;return r?this.valueStart+this.minRange:t},e.prototype.updateThumbAndTrackUI=function(t){var n=this,i=this,r=i.max,a=i.min,s=(this.value-this.valueStart)/(r-a),u=s*this.rect.width,l=this.adapter.isRTL(),c=ze?ie(window,"transform"):"transform";if(this.isRange){var p=this.adapter.isRTL()?(r-this.value)/(r-a)*this.rect.width:(this.valueStart-a)/(r-a)*this.rect.width,E=p+u;this.animFrame.request(we.SLIDER_UPDATE,function(){var h=!l&&t===d.START||l&&t!==d.START;h?(n.adapter.setTrackActiveStyleProperty("transform-origin","right"),n.adapter.setTrackActiveStyleProperty("left","auto"),n.adapter.setTrackActiveStyleProperty("right",n.rect.width-E+"px")):(n.adapter.setTrackActiveStyleProperty("transform-origin","left"),n.adapter.setTrackActiveStyleProperty("right","auto"),n.adapter.setTrackActiveStyleProperty("left",p+"px")),n.adapter.setTrackActiveStyleProperty(c,"scaleX("+s+")");var T=l?E:p,g=n.adapter.isRTL()?p:E;(t===d.START||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(c,"translateX("+T+"px)",d.START),n.alignValueIndicator(d.START,T)),(t===d.END||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(c,"translateX("+g+"px)",d.END),n.alignValueIndicator(d.END,g)),n.removeInitialStyles(l),n.updateOverlappingThumbsUI(T,g,t)})}else this.animFrame.request(we.SLIDER_UPDATE,function(){var h=l?n.rect.width-u:u;n.adapter.setThumbStyleProperty(c,"translateX("+h+"px)",d.END),n.alignValueIndicator(d.END,h),n.adapter.setTrackActiveStyleProperty(c,"scaleX("+s+")"),n.removeInitialStyles(l)})},e.prototype.alignValueIndicator=function(t,n){if(this.isDiscrete){var i=this.adapter.getThumbBoundingClientRect(t).width/2,r=this.adapter.getValueIndicatorContainerWidth(t),a=this.adapter.getBoundingClientRect().width;r/2>n+i?(this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_LEFT,i+"px",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"0",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):r/2>a-n+i?(this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_LEFT,"auto",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_RIGHT,i+"px",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(50%)",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"auto",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"0",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):(this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_LEFT,"50%",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"50%",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(Y.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"translateX(-50%)",t))}},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var n=t?"right":"left";this.adapter.removeThumbStyleProperty(n,d.END),this.isRange&&this.adapter.removeThumbStyleProperty(n,d.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(this.isDiscrete){var n=ze?ie(window,"transition"):"transition",i="none 0s ease 0s";this.adapter.setThumbStyleProperty(n,i,d.END),this.isRange&&this.adapter.setThumbStyleProperty(n,i,d.START),this.adapter.setTrackActiveStyleProperty(n,i),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(n,d.END),t.adapter.removeTrackActiveStyleProperty(n),t.isRange&&t.adapter.removeThumbStyleProperty(n,d.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,n,i){var r=!1;if(this.adapter.isRTL()){var a=t-this.startThumbKnobWidth/2,s=n+this.endThumbKnobWidth/2;r=s>=a}else{var u=t+this.startThumbKnobWidth/2,l=n-this.endThumbKnobWidth/2;r=u>=l}r?(this.adapter.addThumbClass(L.THUMB_TOP,i||d.END),this.adapter.removeThumbClass(L.THUMB_TOP,i===d.START?d.END:d.START)):(this.adapter.removeThumbClass(L.THUMB_TOP,d.START),this.adapter.removeThumbClass(L.THUMB_TOP,d.END))},e.prototype.convertAttributeValueToNumber=function(t,n){if(t===null)throw new Error("MDCSliderFoundation: `"+n+"` must be non-null.");var i=Number(t);if(isNaN(i))throw new Error("MDCSliderFoundation: `"+n+"` value is `"+t+"`, but must be a number.");return i},e.prototype.validateProperties=function(t){var n=t.min,i=t.max,r=t.value,a=t.valueStart,s=t.step,u=t.minRange;if(n>=i)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+n+", max: "+i+"]"));if(s<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+s));if(this.isRange){if(r<n||r>i||a<n||a>i)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+a+", end value: ")+(r+", min: "+n+", max: "+i+"]"));if(a>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+a+", end value: "+r+"]"));if(u<0)throw new Error("MDCSliderFoundation: minimum range must be non-negative. "+("Current min range: "+u));if(r-a<u)throw new Error("MDCSliderFoundation: start value and end value must differ by at least "+(u+". Current values: [start value: "+a+", ")+("end value: "+r+"]"));var l=(a-n)/s,c=(r-n)/s;if(!Number.isInteger(parseFloat(l.toFixed(6)))||!Number.isInteger(parseFloat(c.toFixed(6))))throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value ("+s+"). Current values: [start value: ")+(a+", end value: "+r+", min: "+n+"]"))}else{if(r<n||r>i)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current values: [value: "+r+", min: "+n+", max: "+i+"]"));var c=(r-n)/s;if(!Number.isInteger(parseFloat(c.toFixed(6))))throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value ("+s+"). Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(d.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(d.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(d.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(d.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(d.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(d.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(d.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(d.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(d.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(d.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(d.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(d.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(d.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(d.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(d.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(d.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(d.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(d.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(d.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(d.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=ze&&!!window.PointerEvent&&!Yr(),e}(O);function Yr(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Jn(o){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(o));if(!e)return 0;var t=e[1]||"",n=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(n))}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var $r=function(o){m(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.skipInitialUIUpdate=!1,t.valueToAriaValueTextFn=null,t}return e.attachTo=function(t,n){return n===void 0&&(n={}),new e(t,void 0,n)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(i){return t.root.classList.contains(i)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addThumbClass:function(i,r){t.getThumbEl(r).classList.add(i)},removeThumbClass:function(i,r){t.getThumbEl(r).classList.remove(i)},getAttribute:function(i){return t.root.getAttribute(i)},getInputValue:function(i){return t.getInput(i).value},setInputValue:function(i,r){t.getInput(r).value=i},getInputAttribute:function(i,r){return t.getInput(r).getAttribute(i)},setInputAttribute:function(i,r,a){t.getInput(a).setAttribute(i,r)},removeInputAttribute:function(i,r){t.getInput(r).removeAttribute(i)},focusInput:function(i){t.getInput(i).focus()},isInputFocused:function(i){return t.getInput(i)===document.activeElement},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(i){return t.getThumbEl(i).querySelector("."+L.THUMB_KNOB).getBoundingClientRect().width},getThumbBoundingClientRect:function(i){return t.getThumbEl(i).getBoundingClientRect()},getBoundingClientRect:function(){return t.root.getBoundingClientRect()},getValueIndicatorContainerWidth:function(i){return t.getThumbEl(i).querySelector("."+L.VALUE_INDICATOR_CONTAINER).getBoundingClientRect().width},isRTL:function(){return getComputedStyle(t.root).direction==="rtl"},setThumbStyleProperty:function(i,r,a){t.getThumbEl(a).style.setProperty(i,r)},removeThumbStyleProperty:function(i,r){t.getThumbEl(r).style.removeProperty(i)},setTrackActiveStyleProperty:function(i,r){t.trackActive.style.setProperty(i,r)},removeTrackActiveStyleProperty:function(i){t.trackActive.style.removeProperty(i)},setValueIndicatorText:function(i,r){var a=t.getThumbEl(r).querySelector("."+L.VALUE_INDICATOR_TEXT);a.textContent=String(i)},getValueToAriaValueTextFn:function(){return t.valueToAriaValueTextFn},updateTickMarks:function(i){var r=t.root.querySelector("."+L.TICK_MARKS_CONTAINER);if(!r){r=document.createElement("div"),r.classList.add(L.TICK_MARKS_CONTAINER);var a=t.root.querySelector("."+L.TRACK);a.appendChild(r)}if(i.length!==r.children.length){for(;r.firstChild;)r.removeChild(r.firstChild);t.addTickMarks(r,i)}else t.updateTickMarks(r,i)},setPointerCapture:function(i){t.root.setPointerCapture(i)},emitChangeEvent:function(i,r){t.emit(Zn.CHANGE,{value:i,thumb:r})},emitInputEvent:function(i,r){t.emit(Zn.INPUT,{value:i,thumb:r})},emitDragStartEvent:function(i,r){t.getRipple(r).activate()},emitDragEndEvent:function(i,r){t.getRipple(r).deactivate()},registerEventHandler:function(i,r){t.listen(i,r)},deregisterEventHandler:function(i,r){t.unlisten(i,r)},registerThumbEventHandler:function(i,r,a){t.getThumbEl(i).addEventListener(r,a)},deregisterThumbEventHandler:function(i,r,a){t.getThumbEl(i).removeEventListener(r,a)},registerInputEventHandler:function(i,r,a){t.getInput(i).addEventListener(r,a)},deregisterInputEventHandler:function(i,r,a){t.getInput(i).removeEventListener(r,a)},registerBodyEventHandler:function(i,r){document.body.addEventListener(i,r)},deregisterBodyEventHandler:function(i,r){document.body.removeEventListener(i,r)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new zr(n)},e.prototype.initialize=function(t){var n=t===void 0?{}:t,i=n.skipInitialUIUpdate;this.inputs=[].slice.call(this.root.querySelectorAll("."+L.INPUT)),this.thumbs=[].slice.call(this.root.querySelectorAll("."+L.THUMB)),this.trackActive=this.root.querySelector("."+L.TRACK_ACTIVE),this.ripples=this.createRipples(),i&&(this.skipInitialUIUpdate=!0)},e.prototype.initialSyncWithDOM=function(){this.foundation.layout({skipUpdateUI:this.skipInitialUIUpdate})},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getValueStart=function(){return this.foundation.getValueStart()},e.prototype.setValueStart=function(t){this.foundation.setValueStart(t)},e.prototype.getValue=function(){return this.foundation.getValue()},e.prototype.setValue=function(t){this.foundation.setValue(t)},e.prototype.getDisabled=function(){return this.foundation.getDisabled()},e.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},e.prototype.setValueToAriaValueTextFn=function(t){this.valueToAriaValueTextFn=t},e.prototype.getThumbEl=function(t){return t===d.END?this.thumbs[this.thumbs.length-1]:this.thumbs[0]},e.prototype.getInput=function(t){return t===d.END?this.inputs[this.inputs.length-1]:this.inputs[0]},e.prototype.getRipple=function(t){return t===d.END?this.ripples[this.ripples.length-1]:this.ripples[0]},e.prototype.addTickMarks=function(t,n){for(var i=document.createDocumentFragment(),r=0;r<n.length;r++){var a=document.createElement("div"),s=n[r]===qt.ACTIVE?L.TICK_MARK_ACTIVE:L.TICK_MARK_INACTIVE;a.classList.add(s),i.appendChild(a)}t.appendChild(i)},e.prototype.updateTickMarks=function(t,n){for(var i=Array.from(t.children),r=0;r<i.length;r++)n[r]===qt.ACTIVE?(i[r].classList.add(L.TICK_MARK_ACTIVE),i[r].classList.remove(L.TICK_MARK_INACTIVE)):(i[r].classList.add(L.TICK_MARK_INACTIVE),i[r].classList.remove(L.TICK_MARK_ACTIVE))},e.prototype.createRipples=function(){for(var t=[],n=[].slice.call(this.root.querySelectorAll("."+L.THUMB)),i=function(s){var u=n[s],l=r.inputs[s],c=f(f({},k.createAdapter(r)),{addClass:function(E){u.classList.add(E)},computeBoundingRect:function(){return u.getBoundingClientRect()},deregisterInteractionHandler:function(E,h){l.removeEventListener(E,h)},isSurfaceActive:function(){return ct(l,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(E,h){l.addEventListener(E,h,K())},removeClass:function(E){u.classList.remove(E)},updateCssVariable:function(E,h){u.style.setProperty(E,h)}}),p=new k(u,new At(c));p.unbounded=!0,t.push(p)},r=this,a=0;a<n.length;a++)i(a);return t},e}(_);/**
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
 */var xt={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},ht={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},vt={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var Qr=vt.ARIA_LIVE_DELAY_MS,ti=ht.ARIA_LIVE_LABEL_TEXT_ATTR;function Zr(o,e){e===void 0&&(e=o);var t=o.getAttribute("aria-live"),n=e.textContent.trim();if(!(!n||!t)){o.setAttribute("aria-live","off"),e.textContent="";var i=document.createElement("span");i.setAttribute("style","display: inline-block; width: 0; height: 1px;"),i.textContent=" ",e.appendChild(i),e.setAttribute(ti,n),setTimeout(function(){o.setAttribute("aria-live",t),e.removeAttribute(ti),e.textContent=n},Qr)}}/**
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
 */var ei=xt.OPENING,ni=xt.OPEN,ii=xt.CLOSING,Jr=ht.REASON_ACTION,Ye=ht.REASON_DISMISS,to=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.opened=!1,n.animationFrame=0,n.animationTimer=0,n.autoDismissTimer=0,n.autoDismissTimeoutMs=vt.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return xt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(ei),this.adapter.removeClass(ni),this.adapter.removeClass(ii)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(ii),this.adapter.addClass(ei),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(ni),t.animationTimer=setTimeout(function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),n!==vt.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(Ye)},n))},vt.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(xt.CLOSING),this.adapter.removeClass(xt.OPEN),this.adapter.removeClass(xt.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},vt.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var n=vt.MIN_AUTO_DISMISS_TIMEOUT_MS,i=vt.MAX_AUTO_DISMISS_TIMEOUT_MS,r=vt.INDETERMINATE;if(t===vt.INDETERMINATE||t<=i&&t>=n)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+n+"–"+i+`
        (or `+r+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.getCloseOnEscape()&&this.close(Ye)},e.prototype.handleActionButtonClick=function(t){this.close(Jr)},e.prototype.handleActionIconClick=function(t){this.close(Ye)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(xt.OPENING),this.adapter.removeClass(xt.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e}(O);/**
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
 */var eo=ht.SURFACE_SELECTOR,no=ht.LABEL_SELECTOR,ri=ht.ACTION_SELECTOR,io=ht.DISMISS_SELECTOR,ro=ht.OPENING_EVENT,oo=ht.OPENED_EVENT,ao=ht.CLOSING_EVENT,so=ht.CLOSED_EVENT,uo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(){return Zr}),this.announce=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(eo),this.labelEl=this.root.querySelector(no),this.actionEl=this.root.querySelector(ri),this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.handleSurfaceClick=function(n){var i=n.target;t.isActionButton(i)?t.foundation.handleActionButtonClick(n):t.isActionIcon(i)&&t.foundation.handleActionIconClick(n)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(i){return t.emit(so,i?{reason:i}:{})},notifyClosing:function(i){return t.emit(ao,i?{reason:i}:{})},notifyOpened:function(){return t.emit(oo,{})},notifyOpening:function(){return t.emit(ro,{})},removeClass:function(i){return t.root.classList.remove(i)}};return new to(n)},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:!1,configurable:!0}),e.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)},e.prototype.isActionButton=function(t){return!!gt(t,ri)},e.prototype.isActionIcon=function(t){return!!gt(t,io)},e}(_);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Xt;(function(o){o.PROCESSING="mdc-switch--processing",o.SELECTED="mdc-switch--selected",o.UNSELECTED="mdc-switch--unselected"})(Xt||(Xt={}));var He;(function(o){o.RIPPLE=".mdc-switch__ripple"})(He||(He={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function lo(o,e,t){var n=co(o,e),i=n.getObservers(e);return i.push(t),function(){i.splice(i.indexOf(t),1)}}var Le=new WeakMap;function co(o,e){var t=new Map;Le.has(o)||Le.set(o,{isEnabled:!0,getObservers:function(l){var c=t.get(l)||[];return t.has(l)||t.set(l,c),c},installedProperties:new Set});var n=Le.get(o);if(n.installedProperties.has(e))return n;var i=ho(o,e)||{configurable:!0,enumerable:!0,value:o[e],writable:!0},r=f({},i),a=i.get,s=i.set;if("value"in i){delete r.value,delete r.writable;var u=i.value;a=function(){return u},i.writable&&(s=function(l){u=l})}return a&&(r.get=function(){return a.call(this)}),s&&(r.set=function(l){var c,p,E=a?a.call(this):l;if(s.call(this,l),n.isEnabled&&(!a||l!==E))try{for(var h=b(n.getObservers(e)),T=h.next();!T.done;T=h.next()){var g=T.value;g(l,E)}}catch(y){c={error:y}}finally{try{T&&!T.done&&(p=h.return)&&p.call(h)}finally{if(c)throw c.error}}}),n.installedProperties.add(e),Object.defineProperty(o,e,r),n}function ho(o,e){for(var t=o,n;t&&(n=Object.getOwnPropertyDescriptor(t,e),!n);)t=Object.getPrototypeOf(t);return n}function fo(o,e){var t=Le.get(o);t&&(t.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var po=function(o){m(e,o);function e(t){var n=o.call(this,t)||this;return n.unobserves=new Set,n}return e.prototype.destroy=function(){o.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,n){var i,r,a=this,s=[];try{for(var u=b(Object.keys(n)),l=u.next();!l.done;l=u.next()){var c=l.value,p=n[c].bind(this);s.push(this.observeProperty(t,c,p))}}catch(h){i={error:h}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(i)throw i.error}}var E=function(){var h,T;try{for(var g=b(s),y=g.next();!y.done;y=g.next()){var S=y.value;S()}}catch(N){h={error:N}}finally{try{y&&!y.done&&(T=g.return)&&T.call(g)}finally{if(h)throw h.error}}a.unobserves.delete(E)};return this.unobserves.add(E),E},e.prototype.observeProperty=function(t,n,i){return lo(t,n,i)},e.prototype.setObserversEnabled=function(t,n){fo(t,n)},e.prototype.unobserve=function(){var t,n;try{for(var i=b(ln([],Te(this.unobserves))),r=i.next();!r.done;r=i.next()){var a=r.value;a()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(O);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Eo=function(o){m(e,o);function e(t){var n=o.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(po),mo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.init=function(){o.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Xt.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Xt.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Xt.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Xt.SELECTED),this.toggleClass(!this.adapter.state.selected,Xt.UNSELECTED)},e.prototype.toggleClass=function(t,n){t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(Eo);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var To=function(o){m(e,o);function e(t,n){var i=o.call(this,t,n)||this;return i.root=t,i}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.ripple=new k(this.root,this.createRippleFoundation())},e.prototype.initialSyncWithDOM=function(){var t=this.root.querySelector(He.RIPPLE);if(!t)throw new Error("Switch "+He.RIPPLE+" element is required.");this.rippleElement=t,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},e.prototype.getDefaultFoundation=function(){return new mo(this.createAdapter())},e.prototype.createAdapter=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},hasClass:function(n){return t.root.classList.contains(n)},isDisabled:function(){return t.root.disabled},removeClass:function(n){t.root.classList.remove(n)},setAriaChecked:function(n){return t.root.setAttribute("aria-checked",n)},setDisabled:function(n){t.root.disabled=n},state:this}},e.prototype.createRippleFoundation=function(){return new At(this.createRippleAdapter())},e.prototype.createRippleAdapter=function(){var t=this;return f(f({},k.createAdapter(this)),{computeBoundingRect:function(){return t.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},e}(_);/**
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
 */var bi={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},go={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var gn=function(){function o(e){this.adapter=e}return o}();/**
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
 */var Ao=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(gn);/**
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
 */var Co=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(gn);/**
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
 */var vo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(gn);/**
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
 */var $e=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return bi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return go},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=Te(i.split(","),6);r[0],r[1],r[2],r[3];var a=r[4];return r[5],parseFloat(a)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),a=r-n;return{finalScrollPosition:r,scrollDelta:a}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new Co(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),a=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),a===n?new vo(this.adapter):new Ao(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(O);/**
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
 */var Qe;function Io(o,e){if(e===void 0&&(e=!0),e&&typeof Qe<"u")return Qe;var t=o.createElement("div");t.classList.add(bi.SCROLL_TEST),o.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return o.body.removeChild(t),e&&(Qe=n),n}/**
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
 */var yo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector($e.strings.AREA_SELECTOR),this.content=this.root.querySelector($e.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.area.addEventListener("wheel",this.handleInteraction,K()),this.area.addEventListener("touchstart",this.handleInteraction,K()),this.area.addEventListener("pointerdown",this.handleInteraction,K()),this.area.addEventListener("mousedown",this.handleInteraction,K()),this.area.addEventListener("keydown",this.handleInteraction,K()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,K()),this.area.removeEventListener("touchstart",this.handleInteraction,K()),this.area.removeEventListener("pointerdown",this.handleInteraction,K()),this.area.removeEventListener("mousedown",this.handleInteraction,K()),this.area.removeEventListener("keydown",this.handleInteraction,K()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,n={eventTargetMatchesSelector:function(i,r){return ct(i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addScrollAreaClass:function(i){t.area.classList.add(i)},setScrollAreaStyleProperty:function(i,r){t.area.style.setProperty(i,r)},setScrollContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)},getScrollContentStyleValue:function(i){return window.getComputedStyle(t.content).getPropertyValue(i)},setScrollAreaScrollLeft:function(i){return t.area.scrollLeft=i},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return Io(document)}};return new $e(n)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(_);/**
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
 */var So={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Ro={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var mt=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return So},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ro},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(O);/**
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
 */var bo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(mt.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(mt.cssClasses.ACTIVE)},e}(mt);/**
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
 */var Oo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(mt.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(mt.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(mt.cssClasses.NO_TRANSITION),this.adapter.addClass(mt.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(mt.cssClasses.ACTIVE)},e}(mt);/**
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
 */var _o=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(mt.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)}};return this.root.classList.contains(mt.cssClasses.FADE)?new bo(n):new Oo(n)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(_);/**
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
 */var Se={ACTIVE:"mdc-tab--active"},de={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var Jt=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Se},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return de},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(Se.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(Se.ACTIVE),this.adapter.setAttr(de.ARIA_SELECTED,"true"),this.adapter.setAttr(de.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Se.ACTIVE),this.adapter.setAttr(de.ARIA_SELECTED,"false"),this.adapter.setAttr(de.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(O);/**
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
 */var Lo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(a,s){return new k(a,s)}),n===void 0&&(n=function(a){return new _o(a)}),this.id=this.root.id;var i=new At(k.createAdapter(this));this.ripple=t(this.root,i);var r=this.root.querySelector(Jt.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=n(r),this.content=this.root.querySelector(Jt.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={setAttr:function(i,r){return t.root.setAttribute(i,r)},addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},activateIndicator:function(i){t.tabIndicator.activate(i)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){return t.emit(Jt.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){return t.root.focus()}};return new Jt(n)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(_);/**
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
 */var q={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Tt={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var zt=new Set;zt.add(q.ARROW_LEFT_KEY);zt.add(q.ARROW_RIGHT_KEY);zt.add(q.END_KEY);zt.add(q.HOME_KEY);zt.add(q.ENTER_KEY);zt.add(q.SPACE_KEY);var Yt=new Map;Yt.set(Tt.ARROW_LEFT_KEYCODE,q.ARROW_LEFT_KEY);Yt.set(Tt.ARROW_RIGHT_KEYCODE,q.ARROW_RIGHT_KEY);Yt.set(Tt.END_KEYCODE,q.END_KEY);Yt.set(Tt.HOME_KEYCODE,q.HOME_KEY);Yt.set(Tt.ENTER_KEYCODE,q.ENTER_KEY);Yt.set(Tt.SPACE_KEYCODE,q.SPACE_KEY);var Oi=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Tt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(r);else{var i=this.determineTargetFromKey(r,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,a=n===q.END_KEY,s=n===q.ARROW_LEFT_KEY&&!i||n===q.ARROW_RIGHT_KEY&&i,u=n===q.ARROW_RIGHT_KEY&&!i||n===q.ARROW_LEFT_KEY&&i,l=t;return a?l=r:s?l-=1:u?l+=1:l=0,l<0?l=r:l>r&&(l=0),l},e.prototype.calculateScrollIncrement=function(t,n,i,r){var a=this.adapter.getTabDimensionsAtIndex(n),s=a.contentLeft-i-r,u=a.contentRight-i,l=u-Tt.EXTRA_SCROLL_AMOUNT,c=s+Tt.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(l,0):Math.max(c,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,a){var s=this.adapter.getTabDimensionsAtIndex(n),u=a-s.contentLeft-i,l=a-s.contentRight-i-r,c=l+Tt.EXTRA_SCROLL_AMOUNT,p=u-Tt.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(c,0):Math.min(p,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var a=n.rootLeft-i,s=n.rootRight-i-r,u=a+s,l=a<0||u<0,c=s>0||u>0;return l?t-1:c?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,a){var s=a-n.rootLeft-r-i,u=a-n.rootRight-i,l=s+u,c=s>0||l>0,p=u<0||l<0;return c?t+1:p?t-1:-1},e.prototype.getKeyFromEvent=function(t){return zt.has(t.key)?t.key:Yt.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===q.SPACE_KEY||t===q.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(a)){var s=this.calculateScrollIncrement(t,a,n,i);this.adapter.incrementScroll(s)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.adapter.getScrollContentWidth(),s=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,a);if(this.indexIsInRange(s)){var u=this.calculateScrollIncrementRTL(t,s,n,i,a);this.adapter.incrementScroll(u)}},e}(O);/**
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
 */var Ze=Oi.strings,Do=0,No=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var n,i;try{for(var r=b(this.tabList),a=r.next();!a.done;a=r.next()){var s=a.value;s.focusOnActivate=t}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new Lo(i)}),n===void 0&&(n=function(i){return new yo(i)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(n)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(i){t.foundation.handleTabInteraction(i)},this.handleKeyDown=function(i){t.foundation.handleKeyDown(i)},this.listen(Jt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var n=0;n<this.tabList.length;n++)if(this.tabList[n].active){this.scrollIntoView(n);break}},e.prototype.destroy=function(){var t,n;o.prototype.destroy.call(this),this.unlisten(Jt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var i=b(this.tabList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,n={scrollTo:function(i){t.tabScroller.scrollTo(i)},incrementScroll:function(i){t.tabScroller.incrementScroll(i)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(i){t.foundation.activateTab(i)},activateTabAtIndex:function(i,r){t.tabList[i].activate(r)},deactivateTabAtIndex:function(i){t.tabList[i].deactivate()},focusTabAtIndex:function(i){t.tabList[i].focus()},getTabIndicatorClientRectAtIndex:function(i){return t.tabList[i].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(i){return t.tabList[i].computeDimensions()},getPreviousActiveTabIndex:function(){for(var i=0;i<t.tabList.length;i++)if(t.tabList[i].active)return i;return-1},getFocusedTabIndex:function(){var i=t.getTabElements(),r=document.activeElement;return i.indexOf(r)},getIndexOfTabById:function(i){for(var r=0;r<t.tabList.length;r++)if(t.tabList[r].id===i)return r;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(i){return t.emit(Ze.TAB_ACTIVATED_EVENT,{index:i},!0)}};return new Oi(n)},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return[].slice.call(this.root.querySelectorAll(Ze.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map(function(n){return n.id=n.id||"mdc-tab-"+ ++Do,t(n)})},e.prototype.instantiatetabScroller=function(t){var n=this.root.querySelector(Ze.TAB_SCROLLER_SELECTOR);return n?t(n):null},e}(_);/**
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
 */var _i={ROOT:"mdc-text-field-character-counter"},xo={ROOT_SELECTOR:"."+_i.ROOT};/**
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
 */var Li=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return _i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return xo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n)},e}(O);/**
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
 */var Mo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={setContent:function(i){t.root.textContent=i}};return new Li(n)},e}(_);/**
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
 */var pt={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},De={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},oi={LABEL_SCALE:.75},wo=["pattern","min","max","required","step","minlength","maxlength"],Ho=["color","date","datetime-local","month","range","time","week"];/**
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
 */var ai=["mousedown","touchstart"],si=["click","keydown"],Po=function(o){m(e,o);function e(t,n){n===void 0&&(n={});var i=o.call(this,f(f({},e.defaultAdapter),t))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.valid=!0,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=n.helperText,i.characterCounter=n.characterCounter,i.leadingIcon=n.leadingIcon,i.trailingIcon=n.trailingIcon,i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(r){i.setTransformOrigin(r)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(r){i.handleValidationAttributeChange(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return De},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return oi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return Ho.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,i,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var a=b(ai),s=a.next();!s.done;s=a.next()){var u=s.value;this.adapter.registerInputInteractionHandler(u,this.setPointerXOffset)}}catch(p){t={error:p}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var l=b(si),c=l.next();!c.done;c=l.next()){var u=c.value;this.adapter.registerTextFieldInteractionHandler(u,this.textFieldInteractionHandler)}}catch(p){i={error:p}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,i,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var a=b(ai),s=a.next();!s.done;s=a.next()){var u=s.value;this.adapter.deregisterInputInteractionHandler(u,this.setPointerXOffset)}}catch(p){t={error:p}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var l=b(si),c=l.next();!c.done;c=l.next()){var u=c.value;this.adapter.deregisterTextFieldInteractionHandler(u,this.textFieldInteractionHandler)}}catch(p){i={error:p}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(i){return wo.indexOf(i)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*oi.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,i=n?n[0]:t,r=i.target.getBoundingClientRect(),a=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(a)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var i=this.helperText.isValidation();if(!i)return;var r=this.helperText.isVisible(),a=this.helperText.getId();r&&a?this.adapter.setInputAttr(pt.ARIA_DESCRIBEDBY,a):this.adapter.removeInputAttr(pt.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(O);/**
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
 */var It={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Nt={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+It.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Di=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return It},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Nt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(It.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(It.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(It.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(It.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(It.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(It.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Nt.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(It.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(It.HELPER_TEXT_VALIDATION_MSG),r=i&&!t;r?(this.showToScreenReader(),this.adapter.getAttr(Nt.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Nt.ROLE,"alert")):this.adapter.removeAttr(Nt.ROLE),!n&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Nt.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(Nt.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(Nt.ROLE,"alert")})},e}(O);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Fo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new Di(n)},e}(_);/**
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
 */var ui={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},Bo={ROOT:"mdc-text-field__icon"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var li=["click","keydown"],ci=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return ui},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Bo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=b(li),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.registerInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=b(li),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",ui.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(O);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var ko=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){return t.listen(i,r)},deregisterInteractionHandler:function(i,r){return t.unlisten(i,r)},notifyIconAction:function(){return t.emit(ci.strings.ICON_EVENT,{},!0)}};return new ci(n)},e}(_);/**
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
 */var Vo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,a,s,u){t===void 0&&(t=function(H,w){return new k(H,w)}),n===void 0&&(n=function(H){return new mn(H)}),i===void 0&&(i=function(H){return new Fo(H)}),r===void 0&&(r=function(H){return new Mo(H)}),a===void 0&&(a=function(H){return new ko(H)}),s===void 0&&(s=function(H){return new En(H)}),u===void 0&&(u=function(H){return new Tn(H)}),this.input=this.root.querySelector(pt.INPUT_SELECTOR);var l=this.root.querySelector(pt.LABEL_SELECTOR);this.label=l?s(l):null;var c=this.root.querySelector(pt.LINE_RIPPLE_SELECTOR);this.lineRipple=c?n(c):null;var p=this.root.querySelector(pt.OUTLINE_SELECTOR);this.outline=p?u(p):null;var E=Di.strings,h=this.root.nextElementSibling,T=h&&h.classList.contains(De.HELPER_LINE),g=T&&h&&h.querySelector(E.ROOT_SELECTOR);this.helperText=g?i(g):null;var y=Li.strings,S=this.root.querySelector(y.ROOT_SELECTOR);!S&&T&&h&&(S=h.querySelector(y.ROOT_SELECTOR)),this.characterCounter=S?r(S):null;var N=this.root.querySelector(pt.LEADING_ICON_SELECTOR);this.leadingIcon=N?a(N):null;var V=this.root.querySelector(pt.TRAILING_ICON_SELECTOR);this.trailingIcon=V?a(V):null,this.prefix=this.root.querySelector(pt.PREFIX_SELECTOR),this.suffix=this.root.querySelector(pt.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),o.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=f(f(f(f(f({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new Po(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},registerTextFieldInteractionHandler:function(n,i){t.listen(n,i)},deregisterTextFieldInteractionHandler:function(n,i){t.unlisten(n,i)},registerValidationAttributeChangeHandler:function(n){var i=function(s){return s.map(function(u){return u.attributeName}).filter(function(u){return u})},r=new MutationObserver(function(s){return n(i(s))}),a={attributes:!0};return r.observe(t.input,a),r},deregisterValidationAttributeChangeHandler:function(n){n.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(n,i){t.input.setAttribute(n,i)},removeInputAttr:function(n){t.input.removeAttribute(n)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(n,i){t.input.addEventListener(n,i,K())},deregisterInputInteractionHandler:function(n,i){t.input.removeEventListener(n,i,K())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return!!t.label},shakeLabel:function(n){t.label&&t.label.shake(n)},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var n=this,i=this.root.classList.contains(De.TEXTAREA),r=this.root.classList.contains(De.OUTLINED);if(i||r)return null;var a=f(f({},k.createAdapter(this)),{isSurfaceActive:function(){return ct(n.input,":active")},registerInteractionHandler:function(s,u){n.input.addEventListener(s,u,K())},deregisterInteractionHandler:function(s,u){n.input.removeEventListener(s,u,K())}});return t(this.root,new At(a))},e}(_);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var et;(function(o){o.RICH="mdc-tooltip--rich",o.SHOWN="mdc-tooltip--shown",o.SHOWING="mdc-tooltip--showing",o.SHOWING_TRANSITION="mdc-tooltip--showing-transition",o.HIDE="mdc-tooltip--hide",o.HIDE_TRANSITION="mdc-tooltip--hide-transition",o.MULTILINE_TOOLTIP="mdc-tooltip--multiline",o.SURFACE="mdc-tooltip__surface",o.SURFACE_ANIMATION="mdc-tooltip__surface-animation",o.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",o.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom"})(et||(et={}));var J={BOUNDED_ANCHOR_GAP:4,UNBOUNDED_ANCHOR_GAP:8,MIN_VIEWPORT_TOOLTIP_THRESHOLD:8,HIDE_DELAY_MS:600,SHOW_DELAY_MS:500,MIN_HEIGHT:24,MAX_WIDTH:200,CARET_INDENTATION:24,ANIMATION_SCALE:.8},Re={ARIA_EXPANDED:"aria-expanded",ARIA_HASPOPUP:"aria-haspopup",PERSISTENT:"data-mdc-tooltip-persistent",SCROLLABLE_ANCESTOR:"tooltip-scrollable-ancestor",HAS_CARET:"data-mdc-tooltip-has-caret"},Uo={HIDDEN:"MDCTooltip:hidden"},te;(function(o){o[o.DETECTED=0]="DETECTED",o[o.START=1]="START",o[o.CENTER=2]="CENTER",o[o.END=3]="END"})(te||(te={}));var me;(function(o){o[o.DETECTED=0]="DETECTED",o[o.ABOVE=1]="ABOVE",o[o.BELOW=2]="BELOW"})(me||(me={}));var sn;(function(o){o[o.BOUNDED=0]="BOUNDED",o[o.UNBOUNDED=1]="UNBOUNDED"})(sn||(sn={}));var C={LEFT:"left",RIGHT:"right",CENTER:"center",TOP:"top",BOTTOM:"bottom"},R;(function(o){o[o.DETECTED=0]="DETECTED",o[o.ABOVE_START=1]="ABOVE_START",o[o.ABOVE_CENTER=2]="ABOVE_CENTER",o[o.ABOVE_END=3]="ABOVE_END",o[o.TOP_SIDE_START=4]="TOP_SIDE_START",o[o.CENTER_SIDE_START=5]="CENTER_SIDE_START",o[o.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",o[o.TOP_SIDE_END=7]="TOP_SIDE_END",o[o.CENTER_SIDE_END=8]="CENTER_SIDE_END",o[o.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",o[o.BELOW_START=10]="BELOW_START",o[o.BELOW_CENTER=11]="BELOW_CENTER",o[o.BELOW_END=12]="BELOW_END"})(R||(R={}));var z;(function(o){o[o.ABOVE=1]="ABOVE",o[o.BELOW=2]="BELOW",o[o.SIDE_TOP=3]="SIDE_TOP",o[o.SIDE_CENTER=4]="SIDE_CENTER",o[o.SIDE_BOTTOM=5]="SIDE_BOTTOM"})(z||(z={}));var D;(function(o){o[o.START=1]="START",o[o.CENTER=2]="CENTER",o[o.END=3]="END",o[o.SIDE_START=4]="SIDE_START",o[o.SIDE_END=5]="SIDE_END"})(D||(D={}));/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Ko=et.RICH,Je=et.SHOWN,tn=et.SHOWING,be=et.SHOWING_TRANSITION,he=et.HIDE,Oe=et.HIDE_TRANSITION,Wo=et.MULTILINE_TOOLTIP,un;(function(o){o.POLL_ANCHOR="poll_anchor"})(un||(un={}));var di=typeof window<"u",Go=function(o){m(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.tooltipShown=!1,n.anchorGap=J.BOUNDED_ANCHOR_GAP,n.xTooltipPos=te.DETECTED,n.yTooltipPos=me.DETECTED,n.tooltipPositionWithCaret=R.DETECTED,n.minViewportTooltipThreshold=J.MIN_VIEWPORT_TOOLTIP_THRESHOLD,n.hideDelayMs=J.HIDE_DELAY_MS,n.showDelayMs=J.SHOW_DELAY_MS,n.anchorRect=null,n.parentRect=null,n.frameId=null,n.hideTimeout=null,n.showTimeout=null,n.addAncestorScrollEventListeners=new Array,n.removeAncestorScrollEventListeners=new Array,n.animFrame=new fn,n.anchorBlurHandler=function(i){n.handleAnchorBlur(i)},n.documentClickHandler=function(i){n.handleDocumentClick(i)},n.documentKeydownHandler=function(i){n.handleKeydown(i)},n.tooltipMouseEnterHandler=function(){n.handleTooltipMouseEnter()},n.tooltipMouseLeaveHandler=function(){n.handleTooltipMouseLeave()},n.richTooltipFocusOutHandler=function(i){n.handleRichTooltipFocusOut(i)},n.windowScrollHandler=function(){n.handleWindowScrollEvent()},n.windowResizeHandler=function(){n.handleWindowChangeEvent()},n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceAnimationStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){},getActiveElement:function(){return null}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.richTooltip=this.adapter.hasClass(Ko),this.persistentTooltip=this.adapter.getAttribute(Re.PERSISTENT)==="true",this.interactiveTooltip=!!this.adapter.getAnchorAttribute(Re.ARIA_EXPANDED)&&this.adapter.getAnchorAttribute(Re.ARIA_HASPOPUP)==="dialog",this.hasCaret=this.richTooltip&&this.adapter.getAttribute(Re.HAS_CARET)==="true"},e.prototype.isShown=function(){return this.tooltipShown},e.prototype.isRich=function(){return this.richTooltip},e.prototype.isPersistent=function(){return this.persistentTooltip},e.prototype.handleAnchorMouseEnter=function(){var t=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs))},e.prototype.handleAnchorTouchstart=function(){var t=this;this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.preventContextMenuOnLongTouch=function(t){t.preventDefault()},e.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.handleAnchorFocus=function(t){var n=this,i=t.relatedTarget,r=i instanceof HTMLElement&&this.adapter.tooltipContainsElement(i);r||(this.showTimeout=setTimeout(function(){n.show()},this.showDelayMs))},e.prototype.handleAnchorMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},e.prototype.handleDocumentClick=function(t){var n=t.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.target)||this.adapter.tooltipContainsElement(t.target));this.richTooltip&&this.persistentTooltip&&n||this.hide()},e.prototype.handleKeydown=function(t){var n=W(t);if(n===v.ESCAPE){var i=this.adapter.getActiveElement(),r=i instanceof HTMLElement&&this.adapter.tooltipContainsElement(i);r&&this.adapter.focusAnchorElement(),this.hide()}},e.prototype.handleAnchorBlur=function(t){if(this.richTooltip){var n=t.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(t.relatedTarget);if(n||t.relatedTarget===null&&this.interactiveTooltip)return}this.hide()},e.prototype.handleTooltipMouseEnter=function(){this.show()},e.prototype.handleTooltipMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleRichTooltipFocusOut=function(t){var n=t.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.relatedTarget)||this.adapter.tooltipContainsElement(t.relatedTarget));n||t.relatedTarget===null&&this.interactiveTooltip||this.hide()},e.prototype.handleWindowScrollEvent=function(){if(this.persistentTooltip){this.handleWindowChangeEvent();return}this.hide()},e.prototype.handleWindowChangeEvent=function(){var t=this;this.animFrame.request(un.POLL_ANCHOR,function(){t.repositionTooltipOnAnchorMove()})},e.prototype.show=function(){var t,n,i=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.adapter.removeAttribute("aria-hidden"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler)),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.removeClass(he),this.adapter.addClass(tn),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass(Wo),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var r=b(this.addAncestorScrollEventListeners),a=r.next();!a.done;a=r.next()){var s=a.value;s()}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.frameId=requestAnimationFrame(function(){i.clearAllAnimationClasses(),i.adapter.addClass(Je),i.adapter.addClass(be)})}},e.prototype.hide=function(){var t,n;if(this.clearHideTimeout(),this.clearShowTimeout(),!!this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.clearAllAnimationClasses(),this.adapter.addClass(he),this.adapter.addClass(Oe),this.adapter.removeClass(Je),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var i=b(this.removeAncestorScrollEventListeners),r=i.next();!r.done;r=i.next()){var a=r.value;a()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.handleTransitionEnd=function(){var t=this.adapter.hasClass(he);this.adapter.removeClass(tn),this.adapter.removeClass(be),this.adapter.removeClass(he),this.adapter.removeClass(Oe),t&&this.showTimeout===null&&this.adapter.notifyHidden()},e.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(be),this.adapter.removeClass(Oe)},e.prototype.setTooltipPosition=function(t){var n=t.xPos,i=t.yPos,r=t.withCaretPos;if(this.hasCaret&&r){this.tooltipPositionWithCaret=r;return}n&&(this.xTooltipPos=n),i&&(this.yTooltipPos=i)},e.prototype.setAnchorBoundaryType=function(t){t===sn.UNBOUNDED?this.anchorGap=J.UNBOUNDED_ANCHOR_GAP:this.anchorGap=J.BOUNDED_ANCHOR_GAP},e.prototype.setShowDelay=function(t){this.showDelayMs=t},e.prototype.setHideDelay=function(t){this.hideDelayMs=t},e.prototype.isTooltipMultiline=function(){var t=this.adapter.getTooltipSize();return t.height>J.MIN_HEIGHT&&t.width>=J.MAX_WIDTH},e.prototype.positionPlainTooltip=function(){var t=this.calculateTooltipStyles(this.anchorRect),n=t.top,i=t.yTransformOrigin,r=t.left,a=t.xTransformOrigin,s=di?ie(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(s+"-origin",a+" "+i),this.adapter.setStyleProperty("top",n+"px"),this.adapter.setStyleProperty("left",r+"px")},e.prototype.positionRichTooltip=function(){var t,n,i,r,a=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",a);var s=this.hasCaret?this.calculateTooltipWithCaretStyles(this.anchorRect):this.calculateTooltipStyles(this.anchorRect),u=s.top,l=s.yTransformOrigin,c=s.left,p=s.xTransformOrigin,E=di?ie(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(E+"-origin",p+" "+l);var h=c-((n=(t=this.parentRect)===null||t===void 0?void 0:t.left)!==null&&n!==void 0?n:0),T=u-((r=(i=this.parentRect)===null||i===void 0?void 0:i.top)!==null&&r!==void 0?r:0);this.adapter.setStyleProperty("top",T+"px"),this.adapter.setStyleProperty("left",h+"px")},e.prototype.calculateTooltipStyles=function(t){if(!t)return{top:0,left:0};var n=this.adapter.getTooltipSize(),i=this.calculateYTooltipDistance(t,n.height),r=this.calculateXTooltipDistance(t,n.width);return{top:i.distance,yTransformOrigin:i.yTransformOrigin,left:r.distance,xTransformOrigin:r.xTransformOrigin}},e.prototype.calculateXTooltipDistance=function(t,n){var i=!this.adapter.isRTL(),r,a,s,u,l;this.richTooltip?(r=i?t.left-n:t.right,a=i?t.right:t.left-n,u=i?C.RIGHT:C.LEFT,l=i?C.LEFT:C.RIGHT):(r=i?t.left:t.right-n,a=i?t.right-n:t.left,s=t.left+(t.width-n)/2,u=i?C.LEFT:C.RIGHT,l=i?C.RIGHT:C.LEFT);var c=this.richTooltip?this.determineValidPositionOptions(r,a):this.determineValidPositionOptions(s,r,a);if(this.xTooltipPos===te.START&&c.has(r))return{distance:r,xTransformOrigin:u};if(this.xTooltipPos===te.END&&c.has(a))return{distance:a,xTransformOrigin:l};if(this.xTooltipPos===te.CENTER&&c.has(s))return{distance:s,xTransformOrigin:C.CENTER};var p=this.richTooltip?[{distance:a,xTransformOrigin:l},{distance:r,xTransformOrigin:u}]:[{distance:s,xTransformOrigin:C.CENTER},{distance:r,xTransformOrigin:u},{distance:a,xTransformOrigin:l}],E=p.find(function(g){var y=g.distance;return c.has(y)});if(E)return E;if(t.left<0)return{distance:this.minViewportTooltipThreshold,xTransformOrigin:C.LEFT};var h=this.adapter.getViewportWidth(),T=h-(n+this.minViewportTooltipThreshold);return{distance:T,xTransformOrigin:C.RIGHT}},e.prototype.determineValidPositionOptions=function(){for(var t,n,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var a=new Set,s=new Set;try{for(var u=b(i),l=u.next();!l.done;l=u.next()){var c=l.value;this.positionHonorsViewportThreshold(c)?a.add(c):this.positionDoesntCollideWithViewport(c)&&s.add(c)}}catch(p){t={error:p}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return a.size?a:s},e.prototype.positionHonorsViewportThreshold=function(t){var n=this.adapter.getViewportWidth(),i=this.adapter.getTooltipSize().width;return t+i<=n-this.minViewportTooltipThreshold&&t>=this.minViewportTooltipThreshold},e.prototype.positionDoesntCollideWithViewport=function(t){var n=this.adapter.getViewportWidth(),i=this.adapter.getTooltipSize().width;return t+i<=n&&t>=0},e.prototype.calculateYTooltipDistance=function(t,n){var i=t.bottom+this.anchorGap,r=t.top-(this.anchorGap+n),a=this.determineValidYPositionOptions(r,i);return this.yTooltipPos===me.ABOVE&&a.has(r)?{distance:r,yTransformOrigin:C.BOTTOM}:this.yTooltipPos===me.BELOW&&a.has(i)?{distance:i,yTransformOrigin:C.TOP}:a.has(i)?{distance:i,yTransformOrigin:C.TOP}:a.has(r)?{distance:r,yTransformOrigin:C.BOTTOM}:{distance:i,yTransformOrigin:C.TOP}},e.prototype.determineValidYPositionOptions=function(t,n){var i=new Set,r=new Set;return this.yPositionHonorsViewportThreshold(t)?i.add(t):this.yPositionDoesntCollideWithViewport(t)&&r.add(t),this.yPositionHonorsViewportThreshold(n)?i.add(n):this.yPositionDoesntCollideWithViewport(n)&&r.add(n),i.size?i:r},e.prototype.yPositionHonorsViewportThreshold=function(t){var n=this.adapter.getViewportHeight(),i=this.adapter.getTooltipSize().height;return t+i+this.minViewportTooltipThreshold<=n&&t>=this.minViewportTooltipThreshold},e.prototype.yPositionDoesntCollideWithViewport=function(t){var n=this.adapter.getViewportHeight(),i=this.adapter.getTooltipSize().height;return t+i<=n&&t>=0},e.prototype.calculateTooltipWithCaretStyles=function(t){this.adapter.clearTooltipCaretStyles();var n=this.adapter.getTooltipCaretBoundingRect();if(!t||!n)return{position:R.DETECTED,top:0,left:0};var i=n.width/J.ANIMATION_SCALE,r=n.height/J.ANIMATION_SCALE/2,a=this.adapter.getTooltipSize(),s=this.calculateYWithCaretDistanceOptions(t,a.height,{caretWidth:i,caretHeight:r}),u=this.calculateXWithCaretDistanceOptions(t,a.width,{caretWidth:i,caretHeight:r}),l=this.validateTooltipWithCaretDistances(s,u);l.size<1&&(l=this.generateBackupPositionOption(t,a,{caretWidth:i,caretHeight:r}));var c=this.determineTooltipWithCaretDistance(l),p=c.position,E=c.xDistance,h=c.yDistance,T=this.setCaretPositionStyles(p,{caretWidth:i,caretHeight:r}),g=T.yTransformOrigin,y=T.xTransformOrigin;return{yTransformOrigin:g,xTransformOrigin:y,top:h,left:E}},e.prototype.calculateXWithCaretDistanceOptions=function(t,n,i){var r=i.caretWidth,a=i.caretHeight,s=!this.adapter.isRTL(),u=t.left+t.width/2,l=t.left-(n+this.anchorGap+a),c=t.right+this.anchorGap+a,p=s?l:c,E=s?c:l,h=u-(J.CARET_INDENTATION+r/2),T=u-(n-J.CARET_INDENTATION-r/2),g=s?h:T,y=s?T:h,S=u-n/2,N=new Map([[D.START,g],[D.CENTER,S],[D.END,y],[D.SIDE_END,E],[D.SIDE_START,p]]);return N},e.prototype.calculateYWithCaretDistanceOptions=function(t,n,i){var r=i.caretWidth,a=i.caretHeight,s=t.top+t.height/2,u=t.bottom+this.anchorGap+a,l=t.top-(this.anchorGap+n+a),c=s-(J.CARET_INDENTATION+r/2),p=s-n/2,E=s-(n-J.CARET_INDENTATION-r/2),h=new Map([[z.ABOVE,l],[z.BELOW,u],[z.SIDE_TOP,c],[z.SIDE_CENTER,p],[z.SIDE_BOTTOM,E]]);return h},e.prototype.repositionTooltipOnAnchorMove=function(){var t=this.adapter.getAnchorBoundingRect();!t||!this.anchorRect||(t.top!==this.anchorRect.top||t.left!==this.anchorRect.left||t.height!==this.anchorRect.height||t.width!==this.anchorRect.width)&&(this.anchorRect=t,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip())},e.prototype.validateTooltipWithCaretDistances=function(t,n){var i,r,a,s,u,l,c=new Map,p=new Map,E=new Map([[z.ABOVE,[D.START,D.CENTER,D.END]],[z.BELOW,[D.START,D.CENTER,D.END]],[z.SIDE_TOP,[D.SIDE_START,D.SIDE_END]],[z.SIDE_CENTER,[D.SIDE_START,D.SIDE_END]],[z.SIDE_BOTTOM,[D.SIDE_START,D.SIDE_END]]]);try{for(var h=b(E.keys()),T=h.next();!T.done;T=h.next()){var g=T.value,y=t.get(g);if(this.yPositionHonorsViewportThreshold(y))try{for(var S=(a=void 0,b(E.get(g))),N=S.next();!N.done;N=S.next()){var V=N.value,H=n.get(V);if(this.positionHonorsViewportThreshold(H)){var w=this.caretPositionOptionsMapping(V,g);c.set(w,{xDistance:H,yDistance:y})}}}catch(Ot){a={error:Ot}}finally{try{N&&!N.done&&(s=S.return)&&s.call(S)}finally{if(a)throw a.error}}if(this.yPositionDoesntCollideWithViewport(y))try{for(var Ct=(u=void 0,b(E.get(g))),bt=Ct.next();!bt.done;bt=Ct.next()){var V=bt.value,H=n.get(V);if(this.positionDoesntCollideWithViewport(H)){var w=this.caretPositionOptionsMapping(V,g);p.set(w,{xDistance:H,yDistance:y})}}}catch(Ot){u={error:Ot}}finally{try{bt&&!bt.done&&(l=Ct.return)&&l.call(Ct)}finally{if(u)throw u.error}}}}catch(Ot){i={error:Ot}}finally{try{T&&!T.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}return c.size?c:p},e.prototype.generateBackupPositionOption=function(t,n,i){var r=!this.adapter.isRTL(),a,s;if(t.left<0)a=this.minViewportTooltipThreshold+i.caretHeight,s=r?D.END:D.START;else{var u=this.adapter.getViewportWidth();a=u-(n.width+this.minViewportTooltipThreshold+i.caretHeight),s=r?D.START:D.END}var l,c;if(t.top<0)l=this.minViewportTooltipThreshold+i.caretHeight,c=z.BELOW;else{var p=this.adapter.getViewportHeight();l=p-(n.height+this.minViewportTooltipThreshold+i.caretHeight),c=z.ABOVE}var E=this.caretPositionOptionsMapping(s,c);return new Map([[E,{xDistance:a,yDistance:l}]])},e.prototype.determineTooltipWithCaretDistance=function(t){if(t.has(this.tooltipPositionWithCaret)){var n=t.get(this.tooltipPositionWithCaret);return{position:this.tooltipPositionWithCaret,xDistance:n.xDistance,yDistance:n.yDistance}}var i=[R.ABOVE_START,R.ABOVE_CENTER,R.ABOVE_END,R.TOP_SIDE_START,R.CENTER_SIDE_START,R.BOTTOM_SIDE_START,R.TOP_SIDE_END,R.CENTER_SIDE_END,R.BOTTOM_SIDE_END,R.BELOW_START,R.BELOW_CENTER,R.BELOW_END],r=i.find(function(s){return t.has(s)}),a=t.get(r);return{position:r,xDistance:a.xDistance,yDistance:a.yDistance}},e.prototype.caretPositionOptionsMapping=function(t,n){switch(n){case z.ABOVE:if(t===D.START)return R.ABOVE_START;if(t===D.CENTER)return R.ABOVE_CENTER;if(t===D.END)return R.ABOVE_END;break;case z.BELOW:if(t===D.START)return R.BELOW_START;if(t===D.CENTER)return R.BELOW_CENTER;if(t===D.END)return R.BELOW_END;break;case z.SIDE_TOP:if(t===D.SIDE_START)return R.TOP_SIDE_START;if(t===D.SIDE_END)return R.TOP_SIDE_END;break;case z.SIDE_CENTER:if(t===D.SIDE_START)return R.CENTER_SIDE_START;if(t===D.SIDE_END)return R.CENTER_SIDE_END;break;case z.SIDE_BOTTOM:if(t===D.SIDE_START)return R.BOTTOM_SIDE_START;if(t===D.SIDE_END)return R.BOTTOM_SIDE_END;break}throw new Error("MDCTooltipFoundation: Invalid caret position of "+t+", "+n)},e.prototype.setCaretPositionStyles=function(t,n){var i,r,a=this.calculateCaretPositionOnTooltip(t,n);if(!a)return{yTransformOrigin:0,xTransformOrigin:0};this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(a.yAlignment,a.yAxisPx),this.adapter.setTooltipCaretStyle(a.xAlignment,a.xAxisPx);var s=a.skew*(Math.PI/180),u=Math.cos(s);this.adapter.setTooltipCaretStyle("transform","rotate("+a.rotation+"deg) skewY("+a.skew+"deg) scaleX("+u+")"),this.adapter.setTooltipCaretStyle("transform-origin",a.xAlignment+" "+a.yAlignment);try{for(var l=b(a.caretCorners),c=l.next();!c.done;c=l.next()){var p=c.value;this.adapter.setTooltipCaretStyle(p,"0")}}catch(E){i={error:E}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}return{yTransformOrigin:a.yTransformOrigin,xTransformOrigin:a.xTransformOrigin}},e.prototype.calculateCaretPositionOnTooltip=function(t,n){var i=!this.adapter.isRTL(),r=this.adapter.getComputedStyleProperty("width"),a=this.adapter.getComputedStyleProperty("height");if(!(!r||!a||!n)){var s="calc(("+r+" - "+n.caretWidth+"px) / 2)",u="calc(("+a+" - "+n.caretWidth+"px) / 2)",l="0",c=J.CARET_INDENTATION+"px",p="calc("+r+" - "+c+")",E="calc("+a+" - "+c+")",h=35,T=Math.abs(90-h),g=["border-bottom-right-radius","border-top-left-radius"],y=["border-bottom-left-radius","border-top-right-radius"],S=20;switch(t){case R.BELOW_CENTER:return{yAlignment:C.TOP,xAlignment:C.LEFT,yAxisPx:l,xAxisPx:s,rotation:-1*h,skew:-1*S,xTransformOrigin:s,yTransformOrigin:l,caretCorners:g};case R.BELOW_END:return{yAlignment:C.TOP,xAlignment:i?C.RIGHT:C.LEFT,yAxisPx:l,xAxisPx:c,rotation:i?h:-1*h,skew:i?S:-1*S,xTransformOrigin:i?p:c,yTransformOrigin:l,caretCorners:i?y:g};case R.BELOW_START:return{yAlignment:C.TOP,xAlignment:i?C.LEFT:C.RIGHT,yAxisPx:l,xAxisPx:c,rotation:i?-1*h:h,skew:i?-1*S:S,xTransformOrigin:i?c:p,yTransformOrigin:l,caretCorners:i?g:y};case R.TOP_SIDE_END:return{yAlignment:C.TOP,xAlignment:i?C.LEFT:C.RIGHT,yAxisPx:c,xAxisPx:l,rotation:i?T:-1*T,skew:i?-1*S:S,xTransformOrigin:i?l:r,yTransformOrigin:c,caretCorners:i?g:y};case R.CENTER_SIDE_END:return{yAlignment:C.TOP,xAlignment:i?C.LEFT:C.RIGHT,yAxisPx:u,xAxisPx:l,rotation:i?T:-1*T,skew:i?-1*S:S,xTransformOrigin:i?l:r,yTransformOrigin:u,caretCorners:i?g:y};case R.BOTTOM_SIDE_END:return{yAlignment:C.BOTTOM,xAlignment:i?C.LEFT:C.RIGHT,yAxisPx:c,xAxisPx:l,rotation:i?-1*T:T,skew:i?S:-1*S,xTransformOrigin:i?l:r,yTransformOrigin:E,caretCorners:i?y:g};case R.TOP_SIDE_START:return{yAlignment:C.TOP,xAlignment:i?C.RIGHT:C.LEFT,yAxisPx:c,xAxisPx:l,rotation:i?-1*T:T,skew:i?S:-1*S,xTransformOrigin:i?r:l,yTransformOrigin:c,caretCorners:i?y:g};case R.CENTER_SIDE_START:return{yAlignment:C.TOP,xAlignment:i?C.RIGHT:C.LEFT,yAxisPx:u,xAxisPx:l,rotation:i?-1*T:T,skew:i?S:-1*S,xTransformOrigin:i?r:l,yTransformOrigin:u,caretCorners:i?y:g};case R.BOTTOM_SIDE_START:return{yAlignment:C.BOTTOM,xAlignment:i?C.RIGHT:C.LEFT,yAxisPx:c,xAxisPx:l,rotation:i?T:-1*T,skew:i?-1*S:S,xTransformOrigin:i?r:l,yTransformOrigin:E,caretCorners:i?g:y};case R.ABOVE_CENTER:return{yAlignment:C.BOTTOM,xAlignment:C.LEFT,yAxisPx:l,xAxisPx:s,rotation:h,skew:S,xTransformOrigin:s,yTransformOrigin:a,caretCorners:y};case R.ABOVE_END:return{yAlignment:C.BOTTOM,xAlignment:i?C.RIGHT:C.LEFT,yAxisPx:l,xAxisPx:c,rotation:i?-1*h:h,skew:i?-1*S:S,xTransformOrigin:i?p:c,yTransformOrigin:a,caretCorners:i?g:y};default:case R.ABOVE_START:return{yAlignment:C.BOTTOM,xAlignment:i?C.LEFT:C.RIGHT,yAxisPx:l,xAxisPx:c,rotation:i?h:-1*h,skew:i?S:-1*S,xTransformOrigin:i?c:p,yTransformOrigin:a,caretCorners:i?y:g}}}},e.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},e.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},e.prototype.attachScrollHandler=function(t){var n=this;this.addAncestorScrollEventListeners.push(function(){t("scroll",n.windowScrollHandler)})},e.prototype.removeScrollHandler=function(t){var n=this;this.removeAncestorScrollEventListeners.push(function(){t("scroll",n.windowScrollHandler)})},e.prototype.destroy=function(){var t,n;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(Je),this.adapter.removeClass(be),this.adapter.removeClass(tn),this.adapter.removeClass(he),this.adapter.removeClass(Oe),this.richTooltip&&this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var i=b(this.removeAncestorScrollEventListeners),r=i.next();!r.done;r=i.next()){var a=r.value;a()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.animFrame.cancelAll()},e}(O);/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var jo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){var t=this.root.getAttribute("id");if(!t)throw new Error("MDCTooltip: Tooltip component must have an id.");var n=document.querySelector('[data-tooltip-id="'+t+'"]')||document.querySelector('[aria-describedby="'+t+'"]');if(!n)throw new Error("MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id].");this.anchorElem=n},e.prototype.initialSyncWithDOM=function(){var t=this;this.isTooltipRich=this.foundation.isRich(),this.isTooltipPersistent=this.foundation.isPersistent(),this.handleMouseEnter=function(){t.foundation.handleAnchorMouseEnter()},this.handleFocus=function(n){t.foundation.handleAnchorFocus(n)},this.handleMouseLeave=function(){t.foundation.handleAnchorMouseLeave()},this.handleTransitionEnd=function(){t.foundation.handleTransitionEnd()},this.handleClick=function(){t.foundation.handleAnchorClick()},this.handleTouchstart=function(){t.foundation.handleAnchorTouchstart()},this.handleTouchend=function(){t.foundation.handleAnchorTouchend()},this.isTooltipRich&&this.isTooltipPersistent?this.anchorElem.addEventListener("click",this.handleClick):(this.anchorElem.addEventListener("mouseenter",this.handleMouseEnter),this.anchorElem.addEventListener("focus",this.handleFocus),this.anchorElem.addEventListener("mouseleave",this.handleMouseLeave),this.anchorElem.addEventListener("touchstart",this.handleTouchstart),this.anchorElem.addEventListener("touchend",this.handleTouchend)),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.anchorElem&&(this.isTooltipRich&&this.isTooltipPersistent?this.anchorElem.removeEventListener("click",this.handleClick):(this.anchorElem.removeEventListener("mouseenter",this.handleMouseEnter),this.anchorElem.removeEventListener("focus",this.handleFocus),this.anchorElem.removeEventListener("mouseleave",this.handleMouseLeave),this.anchorElem.removeEventListener("touchstart",this.handleTouchstart),this.anchorElem.removeEventListener("touchend",this.handleTouchend))),this.unlisten("transitionend",this.handleTransitionEnd),o.prototype.destroy.call(this)},e.prototype.setTooltipPosition=function(t){this.foundation.setTooltipPosition(t)},e.prototype.setAnchorBoundaryType=function(t){this.foundation.setAnchorBoundaryType(t)},e.prototype.setShowDelay=function(t){this.foundation.setShowDelay(t)},e.prototype.setHideDelay=function(t){this.foundation.setHideDelay(t)},e.prototype.hide=function(){this.foundation.hide()},e.prototype.isShown=function(){return this.foundation.isShown()},e.prototype.attachScrollHandler=function(t){this.foundation.attachScrollHandler(t)},e.prototype.removeScrollHandler=function(t){this.foundation.removeScrollHandler(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={getAttribute:function(i){return t.root.getAttribute(i)},setAttribute:function(i,r){t.root.setAttribute(i,r)},removeAttribute:function(i){t.root.removeAttribute(i)},addClass:function(i){t.root.classList.add(i)},hasClass:function(i){return t.root.classList.contains(i)},removeClass:function(i){t.root.classList.remove(i)},getComputedStyleProperty:function(i){return window.getComputedStyle(t.root).getPropertyValue(i)},setStyleProperty:function(i,r){t.root.style.setProperty(i,r)},setSurfaceAnimationStyleProperty:function(i,r){var a=t.root.querySelector("."+et.SURFACE_ANIMATION);a==null||a.style.setProperty(i,r)},getViewportWidth:function(){return window.innerWidth},getViewportHeight:function(){return window.innerHeight},getTooltipSize:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorBoundingRect:function(){return t.anchorElem?t.anchorElem.getBoundingClientRect():null},getParentBoundingRect:function(){var i,r;return(r=(i=t.root.parentElement)===null||i===void 0?void 0:i.getBoundingClientRect())!==null&&r!==void 0?r:null},getAnchorAttribute:function(i){return t.anchorElem?t.anchorElem.getAttribute(i):null},setAnchorAttribute:function(i,r){var a;(a=t.anchorElem)===null||a===void 0||a.setAttribute(i,r)},isRTL:function(){return getComputedStyle(t.root).direction==="rtl"},anchorContainsElement:function(i){var r;return!!(!((r=t.anchorElem)===null||r===void 0)&&r.contains(i))},tooltipContainsElement:function(i){return t.root.contains(i)},focusAnchorElement:function(){var i;(i=t.anchorElem)===null||i===void 0||i.focus()},registerEventHandler:function(i,r){t.root instanceof HTMLElement&&t.root.addEventListener(i,r)},deregisterEventHandler:function(i,r){t.root instanceof HTMLElement&&t.root.removeEventListener(i,r)},registerAnchorEventHandler:function(i,r){var a;(a=t.anchorElem)===null||a===void 0||a.addEventListener(i,r)},deregisterAnchorEventHandler:function(i,r){var a;(a=t.anchorElem)===null||a===void 0||a.removeEventListener(i,r)},registerDocumentEventHandler:function(i,r){document.body.addEventListener(i,r)},deregisterDocumentEventHandler:function(i,r){document.body.removeEventListener(i,r)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)},notifyHidden:function(){t.emit(Uo.HIDDEN,{})},getTooltipCaretBoundingRect:function(){var i=t.root.querySelector("."+et.TOOLTIP_CARET_TOP);return i?i.getBoundingClientRect():null},setTooltipCaretStyle:function(i,r){var a=t.root.querySelector("."+et.TOOLTIP_CARET_TOP),s=t.root.querySelector("."+et.TOOLTIP_CARET_BOTTOM);!a||!s||(a.style.setProperty(i,r),s.style.setProperty(i,r))},clearTooltipCaretStyles:function(){var i=t.root.querySelector("."+et.TOOLTIP_CARET_TOP),r=t.root.querySelector("."+et.TOOLTIP_CARET_BOTTOM);!i||!r||(i.removeAttribute("style"),r.removeAttribute("style"))},getActiveElement:function(){return document.activeElement}};return new Go(n)},e}(_);/**
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
 */var ut={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Ne={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Ee={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var Ni=function(o){m(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(O);/**
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
 */var _e=0,xi=function(o){m(e,o);function e(t){var n=o.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=_e,n.resizeDebounceId=_e,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){o.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=_e,t.throttledResizeHandler()},Ne.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=_e},Ne.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,r=n&&i;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Ne.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(Ni);/**
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
 */var Xo=function(o){m(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(ut.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(ut.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(xi);/**
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
 */var qo=function(o){m(e,o);function e(t){var n=o.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){o.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(ut.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(ut.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(ut.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(ut.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(Ni);/**
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
 */var zo=function(o){m(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i){return k.attachTo(i)}),this.navIcon=this.root.querySelector(Ee.NAVIGATION_ICON_SELECTOR);var n=[].slice.call(this.root.querySelectorAll(Ee.ACTION_ITEM_SELECTOR));this.navIcon&&n.push(this.navIcon),this.iconRipples=n.map(function(i){var r=t(i);return r.unbounded=!0,r}),this.scrollTarget=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.addEventListener("click",this.handleNavigationClick);var t=this.root.classList.contains(ut.FIXED_CLASS),n=this.root.classList.contains(ut.SHORT_CLASS);!n&&!t&&window.addEventListener("resize",this.handleWindowResize)},e.prototype.destroy=function(){var t,n;try{for(var i=b(this.iconRipples),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(l){t={error:l}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.removeEventListener("click",this.handleNavigationClick);var s=this.root.classList.contains(ut.FIXED_CLASS),u=this.root.classList.contains(ut.SHORT_CLASS);!u&&!s&&window.removeEventListener("resize",this.handleWindowResize),o.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.scrollTarget=t,this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(r){return t.root.classList.contains(r)},addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},setStyle:function(r,a){return t.root.style.setProperty(r,a)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){return t.emit(Ee.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var r=t.scrollTarget,a=t.scrollTarget;return r.pageYOffset!==void 0?r.pageYOffset:a.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(Ee.ACTION_ITEM_SELECTOR).length}},i;return this.root.classList.contains(ut.SHORT_CLASS)?i=new qo(n):this.root.classList.contains(ut.FIXED_CLASS)?i=new Xo(n):i=new xi(n),i},e}(_);/**
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
 */x.register("MDCBanner",ki);x.register("MDCCheckbox",fi);x.register("MDCChip",Ei);x.register("MDCChipSet",tr);x.register("MDCCircularProgress",er);x.register("MDCDataTable",ir);x.register("MDCDialog",lr);x.register("MDCDrawer",Ir);x.register("MDCFloatingLabel",En);x.register("MDCFormField",br);x.register("MDCIconButtonToggle",_r);x.register("MDCLineRipple",mn);x.register("MDCLinearProgress",Ti);x.register("MDCList",pn);x.register("MDCMenu",Si);x.register("MDCMenuSurface",yi);x.register("MDCNotchedOutline",Tn);x.register("MDCRadio",Hr);x.register("MDCRipple",k);x.register("MDCSegmentedButton",Kr);x.register("MDCSelect",qr);x.register("MDCSlider",$r);x.register("MDCSnackbar",uo);x.register("MDCSwitch",To);x.register("MDCTabBar",No);x.register("MDCTextField",Vo);x.register("MDCTooltip",jo);x.register("MDCTopAppBar",zo);export{x as autoInit};
