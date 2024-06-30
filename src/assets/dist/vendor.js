import{_ as D,a as T,b as f,M as _,c as mt,d as b,e as K,f as q,m as It,g as Ot,h as Si,i as Oi,j as _e,k as ii,l as Ri,n as _i}from"./main.js";/**
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
 */var rn={AUTO_INIT_ATTR:"data-mdc-auto-init",AUTO_INIT_STATE_ATTR:"data-mdc-auto-init-state",INITIALIZED_STATE:"initialized"};/**
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
 */var fn=rn.AUTO_INIT_ATTR,pn=rn.AUTO_INIT_STATE_ATTR,En=rn.INITIALIZED_STATE,Te={},bi=console.warn.bind(console);function Li(o,e,t){t===void 0&&(t=!1);var n;typeof CustomEvent=="function"?n=new CustomEvent(o,{bubbles:t,detail:e}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(o,t,!1,e)),document.dispatchEvent(n)}function x(o){var e,t;o===void 0&&(o=document);var n=[],i=[].slice.call(o.querySelectorAll("["+fn+"]"));i=i.filter(function(E){return E.getAttribute(pn)!==En});try{for(var r=D(i),a=r.next();!a.done;a=r.next()){var s=a.value,u=s.getAttribute(fn);if(!u)throw new Error("(mdc-auto-init) Constructor name must be given.");var l=Te[u];if(typeof l!="function")throw new Error("(mdc-auto-init) Could not find constructor in registry for "+u);var c=l.attachTo(s);Object.defineProperty(s,u,{configurable:!0,enumerable:!1,value:c,writable:!1}),n.push(c),s.setAttribute(pn,En)}}catch(E){e={error:E}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}return Li("MDCAutoInit:End",{}),n}x.register=function(o,e,t){if(t===void 0&&(t=bi),typeof e!="function")throw new Error("(mdc-auto-init) Invalid Constructor value: "+e+". Expected function.");var n=Te[o];n&&t("(mdc-auto-init) Overriding registration for "+o+" with "+e+". Was: "+n),Te[o]=e};x.deregister=function(o){delete Te[o]};x.deregisterAll=function(){var o,e;try{for(var t=D(Object.keys(Te)),n=t.next();!n.done;n=t.next()){var i=n.value;x.deregister(i)}}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=t.return)&&e.call(t)}finally{if(o)throw o.error}}};/**
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
 */var we="mdc-dom-focus-sentinel",on=function(){function o(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return o.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},o.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+we)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},o.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},o.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},o.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",r=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(we)&&!i,a=!1;if(r){var s=getComputedStyle(n);a=s.display==="none"||s.visibility==="hidden"}return r&&!a})},o.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(we),e},o}();/**
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
 */var an={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"},Tn={BANNER_ANIMATION_CLOSE_TIME_MS:250,BANNER_ANIMATION_OPEN_TIME_MS:300},ie={CLOSED:"MDCBanner:closed",CLOSING:"MDCBanner:closing",OPENED:"MDCBanner:opened",OPENING:"MDCBanner:opening",ACTION_CLICKED:"MDCBanner:actionClicked"},zt={CONTENT:".mdc-banner__content",PRIMARY_ACTION:".mdc-banner__primary-action",SECONDARY_ACTION:".mdc-banner__secondary-action",TEXT:".mdc-banner__text"},be;(function(o){o[o.PRIMARY=0]="PRIMARY",o[o.SECONDARY=1]="SECONDARY",o[o.UNSPECIFIED=2]="UNSPECIFIED"})(be||(be={}));var mn;(function(o){o[o.PRIMARY=0]="PRIMARY",o[o.SECONDARY=1]="SECONDARY",o[o.UNKNOWN=2]="UNKNOWN"})(mn||(mn={}));/**
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
 */var Pe=an.OPENING,Cn=an.OPEN,He=an.CLOSING,Di=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.isOpened=!1,n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getContentHeight:function(){return 0},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},notifyActionClicked:function(){},releaseFocus:function(){},removeClass:function(){},setStyleProperty:function(){},trapFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0},e.prototype.open=function(){var t=this;this.isOpened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(He),this.adapter.addClass(Pe);var n=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(function(){t.adapter.addClass(Cn),t.adapter.setStyleProperty("height",n+"px"),t.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.trapFocus(),t.adapter.notifyOpened()},Tn.BANNER_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;this.isOpened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(He),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(Cn),this.adapter.removeClass(Pe),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Tn.BANNER_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpened},e.prototype.handlePrimaryActionClick=function(t){t===void 0&&(t=!1),t?this.adapter.notifyActionClicked(0):this.close(be.PRIMARY)},e.prototype.handleSecondaryActionClick=function(t){t===void 0&&(t=!1),t?this.adapter.notifyActionClicked(1):this.close(be.SECONDARY)},e.prototype.layout=function(){var t=this.adapter.getContentHeight();this.adapter.setStyleProperty("height",t+"px")},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Pe),this.adapter.removeClass(He)},e}(_);/**
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
 */var Ni=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n=this;t===void 0&&(t=function(i,r){return new on(i,r)}),this.contentEl=this.root.querySelector(zt.CONTENT),this.textEl=this.root.querySelector(zt.TEXT),this.primaryActionEl=this.root.querySelector(zt.PRIMARY_ACTION),this.secondaryActionEl=this.root.querySelector(zt.SECONDARY_ACTION),this.focusTrapFactory=t,this.handleContentClick=function(i){var r=i.target;mt(r,zt.PRIMARY_ACTION)?n.foundation.handlePrimaryActionClick():mt(r,zt.SECONDARY_ACTION)&&n.foundation.handleSecondaryActionClick()}},e.prototype.initialSyncWithDOM=function(){this.registerContentClickHandler(this.handleContentClick),this.focusTrap=this.focusTrapFactory(this.root,{initialFocusEl:this.primaryActionEl})},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.deregisterContentClickHandler(this.handleContentClick)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},getContentHeight:function(){return t.contentEl.offsetHeight},notifyClosed:function(i){t.emit(ie.CLOSED,{reason:i})},notifyClosing:function(i){t.emit(ie.CLOSING,{reason:i})},notifyOpened:function(){t.emit(ie.OPENED,{})},notifyOpening:function(){t.emit(ie.OPENING,{})},notifyActionClicked:function(i){t.emit(ie.ACTION_CLICKED,{action:i})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeClass:function(i){t.root.classList.remove(i)},setStyleProperty:function(i,r){t.root.style.setProperty(i,r)},trapFocus:function(){t.focusTrap.trapFocus()}};return new Di(n)},Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),e.prototype.getText=function(){return this.textEl.textContent||""},e.prototype.setText=function(t){this.textEl.textContent=t},e.prototype.getPrimaryActionText=function(){return this.primaryActionEl.textContent||""},e.prototype.setPrimaryActionText=function(t){this.primaryActionEl.textContent=t},e.prototype.getSecondaryActionText=function(){return this.secondaryActionEl?this.secondaryActionEl.textContent||"":null},e.prototype.setSecondaryActionText=function(t){this.secondaryActionEl&&(this.secondaryActionEl.textContent=t)},e.prototype.registerContentClickHandler=function(t){this.contentEl.addEventListener("click",t)},e.prototype.deregisterContentClickHandler=function(t){this.contentEl.removeEventListener("click",t)},e}(b);/**
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
 */var An={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},gn={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function ri(o){return!!o.document&&typeof o.document.createElement=="function"}function ne(o,e){if(ri(o)&&e in An){var t=o.document.createElement("div"),n=An[e],i=n.standard,r=n.prefixed,a=i in t.style;return a?i:r}return e}function In(o,e){if(ri(o)&&e in gn){var t=o.document.createElement("div"),n=gn[e],i=n.standard,r=n.prefixed,a=n.cssProperty,s=a in t.style;return s?i:r}return e}/**
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
 */var re={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},ot={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},vn={ANIM_END_LATCH_MS:250};/**
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
 */var xi=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.currentCheckState=ot.TRANSITION_STATE_INIT,n.currentAnimationClass="",n.animEndLatchTimer=0,n.enableAnimationEndHandler=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return re},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return vn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(re.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(re.DISABLED):this.adapter.removeClass(re.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){t.adapter.removeClass(t.currentAnimationClass),t.enableAnimationEndHandler=!1},vn.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var t=this.currentCheckState,n=this.determineCheckState();if(t!==n){this.updateAriaChecked();var i=ot.TRANSITION_STATE_UNCHECKED,r=re.SELECTED;n===i?this.adapter.removeClass(r):this.adapter.addClass(r),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(t,n),this.currentCheckState=n,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var t=ot.TRANSITION_STATE_INDETERMINATE,n=ot.TRANSITION_STATE_CHECKED,i=ot.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?n:i},e.prototype.getTransitionAnimationClass=function(t,n){var i=ot.TRANSITION_STATE_INIT,r=ot.TRANSITION_STATE_CHECKED,a=ot.TRANSITION_STATE_UNCHECKED,s=e.cssClasses,u=s.ANIM_UNCHECKED_CHECKED,l=s.ANIM_UNCHECKED_INDETERMINATE,c=s.ANIM_CHECKED_UNCHECKED,E=s.ANIM_CHECKED_INDETERMINATE,p=s.ANIM_INDETERMINATE_CHECKED,h=s.ANIM_INDETERMINATE_UNCHECKED;switch(t){case i:return n===a?"":n===r?p:h;case a:return n===r?u:l;case r:return n===a?c:E;default:return n===r?p:h}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(ot.ARIA_CHECKED_ATTR,ot.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(ot.ARIA_CHECKED_ATTR)},e}(_);/**
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
 */var yn=["checked","indeterminate"],oi=function(o){T(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.getNativeControl().checked},set:function(t){this.getNativeControl().checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.getNativeControl().indeterminate},set:function(t){this.getNativeControl().indeterminate=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.getNativeControl().disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.getNativeControl().value},set:function(t){this.getNativeControl().value=t},enumerable:!1,configurable:!0}),e.prototype.initialize=function(){var t=ot.DATA_INDETERMINATE_ATTR;this.getNativeControl().indeterminate=this.getNativeControl().getAttribute(t)==="true",this.getNativeControl().removeAttribute(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange=function(){t.foundation.handleChange()},this.handleAnimationEnd=function(){t.foundation.handleAnimationEnd()},this.getNativeControl().addEventListener("change",this.handleChange),this.listen(In(window,"animationend"),this.handleAnimationEnd),this.installPropertyChangeHooks()},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.getNativeControl().removeEventListener("change",this.handleChange),this.unlisten(In(window,"animationend"),this.handleAnimationEnd),this.uninstallPropertyChangeHooks(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},forceLayout:function(){return t.root.offsetWidth},hasNativeControl:function(){return!!t.getNativeControl()},isAttachedToDOM:function(){return!!t.root.parentNode},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(i){t.root.classList.remove(i)},removeNativeControlAttr:function(i){t.getNativeControl().removeAttribute(i)},setNativeControlAttr:function(i,r){t.getNativeControl().setAttribute(i,r)},setNativeControlDisabled:function(i){t.getNativeControl().disabled=i}};return new xi(n)},e.prototype.createRipple=function(){var t=this,n=f(f({},K.createAdapter(this)),{deregisterInteractionHandler:function(i,r){t.getNativeControl().removeEventListener(i,r,q())},isSurfaceActive:function(){return It(t.getNativeControl(),":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(i,r){t.getNativeControl().addEventListener(i,r,q())}});return new K(this.root,new Ot(n))},e.prototype.installPropertyChangeHooks=function(){var t,n,i=this,r=this.getNativeControl(),a=Object.getPrototypeOf(r),s=function(p){var h=Object.getOwnPropertyDescriptor(a,p);if(!Sn(h))return{value:void 0};var m=h.get,C={configurable:h.configurable,enumerable:h.enumerable,get:m,set:function(y){h.set.call(r,y),i.foundation.handleChange()}};Object.defineProperty(r,p,C)};try{for(var u=D(yn),l=u.next();!l.done;l=u.next()){var c=l.value,E=s(c);if(typeof E=="object")return E.value}}catch(p){t={error:p}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}},e.prototype.uninstallPropertyChangeHooks=function(){var t,n,i=this.getNativeControl(),r=Object.getPrototypeOf(i);try{for(var a=D(yn),s=a.next();!s.done;s=a.next()){var u=s.value,l=Object.getOwnPropertyDescriptor(r,u);if(!Sn(l))return;Object.defineProperty(i,u,l)}}catch(c){t={error:c}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}},e.prototype.getNativeControl=function(){var t=ot.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Checkbox component requires a "+t+" element");return n},e}(b);function Sn(o){return!!o&&typeof o.set=="function"}/**
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
 */var Ht;(function(o){o[o.UNSPECIFIED=0]="UNSPECIFIED",o[o.CLICK=1]="CLICK",o[o.BACKSPACE_KEY=2]="BACKSPACE_KEY",o[o.DELETE_KEY=3]="DELETE_KEY",o[o.SPACEBAR_KEY=4]="SPACEBAR_KEY",o[o.ENTER_KEY=5]="ENTER_KEY"})(Ht||(Ht={}));var yt={ARIA_HIDDEN:"aria-hidden",INTERACTION_EVENT:"MDCChipTrailingAction:interaction",NAVIGATION_EVENT:"MDCChipTrailingAction:navigation",TAB_INDEX:"tabindex"};/**
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
 */var I={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},nt=new Set;nt.add(I.BACKSPACE);nt.add(I.ENTER);nt.add(I.SPACEBAR);nt.add(I.PAGE_UP);nt.add(I.PAGE_DOWN);nt.add(I.END);nt.add(I.HOME);nt.add(I.ARROW_LEFT);nt.add(I.ARROW_UP);nt.add(I.ARROW_RIGHT);nt.add(I.ARROW_DOWN);nt.add(I.DELETE);nt.add(I.ESCAPE);nt.add(I.TAB);var at={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},it=new Map;it.set(at.BACKSPACE,I.BACKSPACE);it.set(at.ENTER,I.ENTER);it.set(at.SPACEBAR,I.SPACEBAR);it.set(at.PAGE_UP,I.PAGE_UP);it.set(at.PAGE_DOWN,I.PAGE_DOWN);it.set(at.END,I.END);it.set(at.HOME,I.HOME);it.set(at.ARROW_LEFT,I.ARROW_LEFT);it.set(at.ARROW_UP,I.ARROW_UP);it.set(at.ARROW_RIGHT,I.ARROW_RIGHT);it.set(at.ARROW_DOWN,I.ARROW_DOWN);it.set(at.DELETE,I.DELETE);it.set(at.ESCAPE,I.ESCAPE);it.set(at.TAB,I.TAB);var Mt=new Set;Mt.add(I.PAGE_UP);Mt.add(I.PAGE_DOWN);Mt.add(I.END);Mt.add(I.HOME);Mt.add(I.ARROW_LEFT);Mt.add(I.ARROW_UP);Mt.add(I.ARROW_RIGHT);Mt.add(I.ARROW_DOWN);function U(o){var e=o.key;if(nt.has(e))return e;var t=it.get(o.keyCode);return t||I.UNKNOWN}function Mi(o){return Mt.has(U(o))}/**
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
 */var wi=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{focus:function(){},getAttribute:function(){return null},setAttribute:function(){},notifyInteraction:function(){},notifyNavigation:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(t){t.stopPropagation(),this.adapter.notifyInteraction(Ht.CLICK)},e.prototype.handleKeydown=function(t){t.stopPropagation();var n=U(t);if(this.shouldNotifyInteractionFromKey(n)){var i=this.getTriggerFromKey(n);this.adapter.notifyInteraction(i);return}if(Mi(t)){this.adapter.notifyNavigation(n);return}},e.prototype.removeFocus=function(){this.adapter.setAttribute(yt.TAB_INDEX,"-1")},e.prototype.focus=function(){this.adapter.setAttribute(yt.TAB_INDEX,"0"),this.adapter.focus()},e.prototype.isNavigable=function(){return this.adapter.getAttribute(yt.ARIA_HIDDEN)!=="true"},e.prototype.shouldNotifyInteractionFromKey=function(t){var n=t===I.ENTER||t===I.SPACEBAR,i=t===I.BACKSPACE||t===I.DELETE;return n||i},e.prototype.getTriggerFromKey=function(t){return t===I.SPACEBAR?Ht.SPACEBAR_KEY:t===I.ENTER?Ht.ENTER_KEY:t===I.DELETE?Ht.DELETE_KEY:t===I.BACKSPACE?Ht.BACKSPACE_KEY:Ht.UNSPECIFIED},e}(_);/**
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
 */var Pi=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i,r){return new K(i,r)});var n=K.createAdapter(this);this.rippleSurface=t(this.root,new Ot(n))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(n){t.foundation.handleClick(n)},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={focus:function(){t.root.focus()},getAttribute:function(i){return t.root.getAttribute(i)},notifyInteraction:function(i){return t.emit(yt.INTERACTION_EVENT,{trigger:i},!0)},notifyNavigation:function(i){t.emit(yt.NAVIGATION_EVENT,{key:i},!0)},setAttribute:function(i,r){t.root.setAttribute(i,r)}};return new wi(n)},e.prototype.isNavigable=function(){return this.foundation.isNavigable()},e.prototype.focus=function(){this.foundation.focus()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e}(b);/**
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
 */var St;(function(o){o.LEFT="left",o.RIGHT="right"})(St||(St={}));var xt;(function(o){o.PRIMARY="primary",o.TRAILING="trailing",o.NONE="none"})(xt||(xt={}));var A={ADDED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-added-announcement",ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",IE_ARROW_DOWN_KEY:"Down",IE_ARROW_LEFT_KEY:"Left",IE_ARROW_RIGHT_KEY:"Right",IE_ARROW_UP_KEY:"Up",IE_DELETE_KEY:"Del",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-removed-announcement",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip-trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},G={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",EDITABLE:"mdc-chip--editable",EDITING:"mdc-chip--editing",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",PRIMARY_ACTION_FOCUSED:"mdc-chip--primary-action-focused",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},ct=new Set;ct.add(A.ARROW_LEFT_KEY);ct.add(A.ARROW_RIGHT_KEY);ct.add(A.ARROW_DOWN_KEY);ct.add(A.ARROW_UP_KEY);ct.add(A.END_KEY);ct.add(A.HOME_KEY);ct.add(A.IE_ARROW_LEFT_KEY);ct.add(A.IE_ARROW_RIGHT_KEY);ct.add(A.IE_ARROW_DOWN_KEY);ct.add(A.IE_ARROW_UP_KEY);var Bt=new Set;Bt.add(A.ARROW_UP_KEY);Bt.add(A.ARROW_DOWN_KEY);Bt.add(A.HOME_KEY);Bt.add(A.END_KEY);Bt.add(A.IE_ARROW_UP_KEY);Bt.add(A.IE_ARROW_DOWN_KEY);/**
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
 */var On={bottom:0,height:0,left:0,right:0,top:0,width:0},$t;(function(o){o[o.SHOULD_FOCUS=0]="SHOULD_FOCUS",o[o.SHOULD_NOT_FOCUS=1]="SHOULD_NOT_FOCUS"})($t||($t={}));var ai=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.shouldRemoveOnTrailingIconClick=!0,n.shouldFocusPrimaryActionOnClick=!0,n}return Object.defineProperty(e,"strings",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getAttribute:function(){return null},getCheckmarkBoundingClientRect:function(){return On},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return On},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},isRTL:function(){return!1},isTrailingActionNavigable:function(){return!1},notifyEditFinish:function(){},notifyEditStart:function(){},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},removeTrailingActionFocus:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(G.SELECTED)},e.prototype.isEditable=function(){return this.adapter.hasClass(G.EDITABLE)},e.prototype.isEditing=function(){return this.adapter.hasClass(G.EDITING)},e.prototype.setSelected=function(t){this.setSelectedImpl(t),this.notifySelection(t)},e.prototype.setSelectedFromChipSet=function(t,n){this.setSelectedImpl(t),n&&this.notifyIgnoredSelection(t)},e.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick},e.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick=t},e.prototype.setShouldFocusPrimaryActionOnClick=function(t){this.shouldFocusPrimaryActionOnClick=t},e.prototype.getDimensions=function(){var t=this,n=function(){return t.adapter.getRootBoundingClientRect()},i=function(){return t.adapter.getCheckmarkBoundingClientRect()};if(!this.adapter.hasLeadingIcon()){var r=i();if(r){var a=n();return{bottom:a.bottom,height:a.height,left:a.left,right:a.right,top:a.top,width:a.width+r.height}}}return n()},e.prototype.beginExit=function(){this.adapter.addClass(G.CHIP_EXIT)},e.prototype.handleClick=function(){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior())},e.prototype.handleDoubleClick=function(){this.isEditable()&&this.startEditing()},e.prototype.handleTransitionEnd=function(t){var n=this,i=this.adapter.eventTargetHasClass(t.target,G.CHIP_EXIT),r=t.propertyName==="width",a=t.propertyName==="opacity";if(i&&a){var s=this.adapter.getComputedStyleValue("width");requestAnimationFrame(function(){n.adapter.setStyleProperty("width",s),n.adapter.setStyleProperty("padding","0"),n.adapter.setStyleProperty("margin","0"),requestAnimationFrame(function(){n.adapter.setStyleProperty("width","0")})});return}if(i&&r){this.removeFocus();var u=this.adapter.getAttribute(A.REMOVED_ANNOUNCEMENT_ATTRIBUTE);this.adapter.notifyRemoval(u)}if(a){var l=this.adapter.eventTargetHasClass(t.target,G.LEADING_ICON)&&this.adapter.hasClass(G.SELECTED),c=this.adapter.eventTargetHasClass(t.target,G.CHECKMARK)&&!this.adapter.hasClass(G.SELECTED);if(l){this.adapter.addClassToLeadingIcon(G.HIDDEN_LEADING_ICON);return}if(c){this.adapter.removeClassFromLeadingIcon(G.HIDDEN_LEADING_ICON);return}}},e.prototype.handleFocusIn=function(t){this.eventFromPrimaryAction(t)&&this.adapter.addClass(G.PRIMARY_ACTION_FOCUSED)},e.prototype.handleFocusOut=function(t){this.eventFromPrimaryAction(t)&&(this.isEditing()&&this.finishEditing(),this.adapter.removeClass(G.PRIMARY_ACTION_FOCUSED))},e.prototype.handleTrailingActionInteraction=function(){this.adapter.notifyTrailingIconInteraction(),this.removeChip()},e.prototype.handleKeydown=function(t){if(this.isEditing()){this.shouldFinishEditing(t)&&(t.preventDefault(),this.finishEditing());return}if(this.isEditable()&&this.shouldStartEditing(t)&&(t.preventDefault(),this.startEditing()),this.shouldNotifyInteraction(t)){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior());return}if(this.isDeleteAction(t)){t.preventDefault(),this.removeChip();return}ct.has(t.key)&&(t.preventDefault(),this.focusNextAction(t.key,xt.PRIMARY))},e.prototype.handleTrailingActionNavigation=function(t){this.focusNextAction(t.detail.key,xt.TRAILING)},e.prototype.removeFocus=function(){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"-1"),this.adapter.removeTrailingActionFocus()},e.prototype.focusPrimaryAction=function(){this.setPrimaryActionFocusable($t.SHOULD_FOCUS)},e.prototype.focusTrailingAction=function(){var t=this.adapter.isTrailingActionNavigable();if(t){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"-1"),this.adapter.focusTrailingAction();return}this.focusPrimaryAction()},e.prototype.setPrimaryActionFocusable=function(t){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"0"),t===$t.SHOULD_FOCUS&&this.adapter.focusPrimaryAction(),this.adapter.removeTrailingActionFocus()},e.prototype.getFocusBehavior=function(){return this.shouldFocusPrimaryActionOnClick?$t.SHOULD_FOCUS:$t.SHOULD_NOT_FOCUS},e.prototype.focusNextAction=function(t,n){var i=this.adapter.isTrailingActionNavigable(),r=this.getDirection(t);if(Bt.has(t)||!i){this.adapter.notifyNavigation(t,n);return}if(n===xt.PRIMARY&&r===St.RIGHT){this.focusTrailingAction();return}if(n===xt.TRAILING&&r===St.LEFT){this.focusPrimaryAction();return}this.adapter.notifyNavigation(t,xt.NONE)},e.prototype.getDirection=function(t){var n=this.adapter.isRTL(),i=t===A.ARROW_LEFT_KEY||t===A.IE_ARROW_LEFT_KEY,r=t===A.ARROW_RIGHT_KEY||t===A.IE_ARROW_RIGHT_KEY;return!n&&i||n&&r?St.LEFT:St.RIGHT},e.prototype.removeChip=function(){this.shouldRemoveOnTrailingIconClick&&this.beginExit()},e.prototype.shouldStartEditing=function(t){return this.eventFromPrimaryAction(t)&&t.key===A.ENTER_KEY},e.prototype.shouldFinishEditing=function(t){return t.key===A.ENTER_KEY},e.prototype.shouldNotifyInteraction=function(t){return t.key===A.ENTER_KEY||t.key===A.SPACEBAR_KEY},e.prototype.isDeleteAction=function(t){var n=this.adapter.hasClass(G.DELETABLE);return n&&(t.key===A.BACKSPACE_KEY||t.key===A.DELETE_KEY||t.key===A.IE_DELETE_KEY)},e.prototype.setSelectedImpl=function(t){t?(this.adapter.addClass(G.SELECTED),this.adapter.setPrimaryActionAttr(A.ARIA_CHECKED,"true")):(this.adapter.removeClass(G.SELECTED),this.adapter.setPrimaryActionAttr(A.ARIA_CHECKED,"false"))},e.prototype.notifySelection=function(t){this.adapter.notifySelection(t,!1)},e.prototype.notifyIgnoredSelection=function(t){this.adapter.notifySelection(t,!0)},e.prototype.eventFromPrimaryAction=function(t){return this.adapter.eventTargetHasClass(t.target,G.PRIMARY_ACTION)},e.prototype.startEditing=function(){this.adapter.addClass(G.EDITING),this.adapter.notifyEditStart()},e.prototype.finishEditing=function(){this.adapter.removeClass(G.EDITING),this.adapter.notifyEditFinish()},e}(_);/**
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
 */var si=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"selected",{get:function(){return this.foundation.isSelected()},set:function(t){this.foundation.setSelected(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation.setShouldRemoveOnTrailingIconClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"setShouldFocusPrimaryActionOnClick",{set:function(t){this.foundation.setShouldFocusPrimaryActionOnClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.root.id},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){var i=this;t===void 0&&(t=function(s,u){return new K(s,u)}),n===void 0&&(n=function(s){return new Pi(s)}),this.leadingIcon=this.root.querySelector(A.LEADING_ICON_SELECTOR),this.checkmark=this.root.querySelector(A.CHECKMARK_SELECTOR),this.primaryAction=this.root.querySelector(A.PRIMARY_ACTION_SELECTOR);var r=this.root.querySelector(A.TRAILING_ACTION_SELECTOR);r&&(this.trailingAction=n(r));var a=f(f({},K.createAdapter(this)),{computeBoundingRect:function(){return i.foundation.getDimensions()}});this.rippleSurface=t(this.root,new Ot(a))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTrailingActionInteraction=function(){t.foundation.handleTrailingActionInteraction()},this.handleTrailingActionNavigation=function(n){t.foundation.handleTrailingActionNavigation(n)},this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.handleFocusIn=function(n){t.foundation.handleFocusIn(n)},this.handleFocusOut=function(n){t.foundation.handleFocusOut(n)},this.listen("transitionend",this.handleTransitionEnd),this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen("focusin",this.handleFocusIn),this.listen("focusout",this.handleFocusOut),this.trailingAction&&(this.listen(yt.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.listen(yt.NAVIGATION_EVENT,this.handleTrailingActionNavigation))},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("transitionend",this.handleTransitionEnd),this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.handleFocusIn),this.unlisten("focusout",this.handleFocusOut),this.trailingAction&&(this.unlisten(yt.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.unlisten(yt.NAVIGATION_EVENT,this.handleTrailingActionNavigation)),o.prototype.destroy.call(this)},e.prototype.beginExit=function(){this.foundation.beginExit()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},addClassToLeadingIcon:function(i){t.leadingIcon&&t.leadingIcon.classList.add(i)},eventTargetHasClass:function(i,r){return i?i.classList.contains(r):!1},focusPrimaryAction:function(){t.primaryAction&&t.primaryAction.focus()},focusTrailingAction:function(){t.trailingAction&&t.trailingAction.focus()},getAttribute:function(i){return t.root.getAttribute(i)},getCheckmarkBoundingClientRect:function(){return t.checkmark?t.checkmark.getBoundingClientRect():null},getComputedStyleValue:function(i){return window.getComputedStyle(t.root).getPropertyValue(i)},getRootBoundingClientRect:function(){return t.root.getBoundingClientRect()},hasClass:function(i){return t.root.classList.contains(i)},hasLeadingIcon:function(){return!!t.leadingIcon},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},isTrailingActionNavigable:function(){return t.trailingAction?t.trailingAction.isNavigable():!1},notifyInteraction:function(){return t.emit(A.INTERACTION_EVENT,{chipId:t.id},!0)},notifyNavigation:function(i,r){return t.emit(A.NAVIGATION_EVENT,{chipId:t.id,key:i,source:r},!0)},notifyRemoval:function(i){t.emit(A.REMOVAL_EVENT,{chipId:t.id,removedAnnouncement:i},!0)},notifySelection:function(i,r){return t.emit(A.SELECTION_EVENT,{chipId:t.id,selected:i,shouldIgnore:r},!0)},notifyTrailingIconInteraction:function(){return t.emit(A.TRAILING_ICON_INTERACTION_EVENT,{chipId:t.id},!0)},notifyEditStart:function(){},notifyEditFinish:function(){},removeClass:function(i){return t.root.classList.remove(i)},removeClassFromLeadingIcon:function(i){t.leadingIcon&&t.leadingIcon.classList.remove(i)},removeTrailingActionFocus:function(){t.trailingAction&&t.trailingAction.removeFocus()},setPrimaryActionAttr:function(i,r){t.primaryAction&&t.primaryAction.setAttribute(i,r)},setStyleProperty:function(i,r){return t.root.style.setProperty(i,r)}};return new ai(n)},e.prototype.setSelectedFromChipSet=function(t,n){this.foundation.setSelectedFromChipSet(t,n)},e.prototype.focusPrimaryAction=function(){this.foundation.focusPrimaryAction()},e.prototype.focusTrailingAction=function(){this.foundation.focusTrailingAction()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e.prototype.remove=function(){var t=this.root.parentNode;t!==null&&t.removeChild(this.root)},e}(b);/**
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
 */var Qe;(function(o){o.POLITE="polite",o.ASSERTIVE="assertive"})(Qe||(Qe={}));var Hi="data-mdc-dom-announce";function Fi(o,e){Bi.getInstance().say(o,e)}var Bi=function(){function o(){this.liveRegions=new Map}return o.getInstance=function(){return o.instance||(o.instance=new o),o.instance},o.prototype.say=function(e,t){var n,i,r=(n=t==null?void 0:t.priority)!==null&&n!==void 0?n:Qe.POLITE,a=(i=t==null?void 0:t.ownerDocument)!==null&&i!==void 0?i:document,s=this.getLiveRegion(r,a);s.textContent="",setTimeout(function(){s.textContent=e,a.addEventListener("click",u)},1);function u(){s.textContent="",a.removeEventListener("click",u)}},o.prototype.getLiveRegion=function(e,t){var n=this.liveRegions.get(t);n||(n=new Map,this.liveRegions.set(t,n));var i=n.get(e);if(i&&t.body.contains(i))return i;var r=this.createLiveRegion(e,t);return n.set(e,r),r},o.prototype.createLiveRegion=function(e,t){var n=t.createElement("div");return n.style.position="absolute",n.style.top="-9999px",n.style.left="-9999px",n.style.height="1px",n.style.overflow="hidden",n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live",e),n.setAttribute(Hi,"true"),t.body.appendChild(n),n},o}();/**
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
 */var ki={CHIP_SELECTOR:".mdc-chip"},me={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"};/**
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
 */var ui=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.selectedChipIds=[],n}return Object.defineProperty(e,"strings",{get:function(){return ki},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{announceMessage:function(){},focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedChipIds=function(){return this.selectedChipIds.slice()},e.prototype.select=function(t){this.selectImpl(t,!1)},e.prototype.handleChipInteraction=function(t){var n=t.chipId,i=this.adapter.getIndexOfChipById(n);this.removeFocusFromChipsExcept(i),(this.adapter.hasClass(me.CHOICE)||this.adapter.hasClass(me.FILTER))&&this.toggleSelect(n)},e.prototype.handleChipSelection=function(t){var n=t.chipId,i=t.selected,r=t.shouldIgnore;if(!r){var a=this.selectedChipIds.indexOf(n)>=0;i&&!a?this.select(n):!i&&a&&this.deselectImpl(n)}},e.prototype.handleChipRemoval=function(t){var n=t.chipId,i=t.removedAnnouncement;i&&this.adapter.announceMessage(i);var r=this.adapter.getIndexOfChipById(n);this.deselectAndNotifyClients(n),this.adapter.removeChipAtIndex(r);var a=this.adapter.getChipListCount()-1;if(!(a<0)){var s=Math.min(r,a);this.removeFocusFromChipsExcept(s),this.adapter.focusChipTrailingActionAtIndex(s)}},e.prototype.handleChipNavigation=function(t){var n=t.chipId,i=t.key,r=t.source,a=this.adapter.getChipListCount()-1,s=this.adapter.getIndexOfChipById(n);if(!(s===-1||!ct.has(i))){var u=this.adapter.isRTL(),l=i===A.ARROW_LEFT_KEY||i===A.IE_ARROW_LEFT_KEY,c=i===A.ARROW_RIGHT_KEY||i===A.IE_ARROW_RIGHT_KEY,E=i===A.ARROW_DOWN_KEY||i===A.IE_ARROW_DOWN_KEY,p=!u&&c||u&&l||E,h=i===A.HOME_KEY,m=i===A.END_KEY;p?s++:h?s=0:m?s=a:s--,!(s<0||s>a)&&(this.removeFocusFromChipsExcept(s),this.focusChipAction(s,i,r))}},e.prototype.focusChipAction=function(t,n,i){var r=Bt.has(n);if(r&&i===xt.PRIMARY)return this.adapter.focusChipPrimaryActionAtIndex(t);if(r&&i===xt.TRAILING)return this.adapter.focusChipTrailingActionAtIndex(t);var a=this.getDirection(n);if(a===St.LEFT)return this.adapter.focusChipTrailingActionAtIndex(t);if(a===St.RIGHT)return this.adapter.focusChipPrimaryActionAtIndex(t)},e.prototype.getDirection=function(t){var n=this.adapter.isRTL(),i=t===A.ARROW_LEFT_KEY||t===A.IE_ARROW_LEFT_KEY,r=t===A.ARROW_RIGHT_KEY||t===A.IE_ARROW_RIGHT_KEY;return!n&&i||n&&r?St.LEFT:St.RIGHT},e.prototype.deselectImpl=function(t,n){n===void 0&&(n=!1);var i=this.selectedChipIds.indexOf(t);if(i>=0){this.selectedChipIds.splice(i,1);var r=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(r,!1,n)}},e.prototype.deselectAndNotifyClients=function(t){this.deselectImpl(t,!0)},e.prototype.toggleSelect=function(t){this.selectedChipIds.indexOf(t)>=0?this.deselectAndNotifyClients(t):this.selectAndNotifyClients(t)},e.prototype.removeFocusFromChipsExcept=function(t){for(var n=this.adapter.getChipListCount(),i=0;i<n;i++)i!==t&&this.adapter.removeFocusFromChipAtIndex(i)},e.prototype.selectAndNotifyClients=function(t){this.selectImpl(t,!0)},e.prototype.selectImpl=function(t,n){if(!(this.selectedChipIds.indexOf(t)>=0)){if(this.adapter.hasClass(me.CHOICE)&&this.selectedChipIds.length>0){var i=this.selectedChipIds[0],r=this.adapter.getIndexOfChipById(i);this.selectedChipIds=[],this.adapter.selectChipAtIndex(r,!1,n)}this.selectedChipIds.push(t);var a=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(a,!0,n)}},e}(_);/**
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
 */var xe=ai.strings,Rn=xe.INTERACTION_EVENT,_n=xe.SELECTION_EVENT,bn=xe.REMOVAL_EVENT,Ln=xe.NAVIGATION_EVENT,Vi=ui.strings.CHIP_SELECTOR,Dn=0,Ui=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"chips",{get:function(){return this.chipsList.slice()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedChipIds",{get:function(){return this.foundation.getSelectedChipIds()},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new si(n)}),this.chipFactory=t,this.chipsList=this.instantiateChips(this.chipFactory)},e.prototype.initialSyncWithDOM=function(){var t,n,i=this;try{for(var r=D(this.chipsList),a=r.next();!a.done;a=r.next()){var s=a.value;s.id&&s.selected&&this.foundation.select(s.id)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.handleChipInteraction=function(u){return i.foundation.handleChipInteraction(u.detail)},this.handleChipSelection=function(u){return i.foundation.handleChipSelection(u.detail)},this.handleChipRemoval=function(u){return i.foundation.handleChipRemoval(u.detail)},this.handleChipNavigation=function(u){return i.foundation.handleChipNavigation(u.detail)},this.listen(Rn,this.handleChipInteraction),this.listen(_n,this.handleChipSelection),this.listen(bn,this.handleChipRemoval),this.listen(Ln,this.handleChipNavigation)},e.prototype.destroy=function(){var t,n;try{for(var i=D(this.chipsList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.unlisten(Rn,this.handleChipInteraction),this.unlisten(_n,this.handleChipSelection),this.unlisten(bn,this.handleChipRemoval),this.unlisten(Ln,this.handleChipNavigation),o.prototype.destroy.call(this)},e.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++Dn,this.chipsList.push(this.chipFactory(t))},e.prototype.getDefaultFoundation=function(){var t=this,n={announceMessage:function(i){Fi(i)},focusChipPrimaryActionAtIndex:function(i){t.chipsList[i].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(i){t.chipsList[i].focusTrailingAction()},getChipListCount:function(){return t.chips.length},getIndexOfChipById:function(i){return t.findChipIndex(i)},hasClass:function(i){return t.root.classList.contains(i)},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},removeChipAtIndex:function(i){i>=0&&i<t.chips.length&&(t.chipsList[i].destroy(),t.chipsList[i].remove(),t.chipsList.splice(i,1))},removeFocusFromChipAtIndex:function(i){t.chipsList[i].removeFocus()},selectChipAtIndex:function(i,r,a){i>=0&&i<t.chips.length&&t.chipsList[i].setSelectedFromChipSet(r,a)}};return new ui(n)},e.prototype.instantiateChips=function(t){var n=[].slice.call(this.root.querySelectorAll(Vi));return n.map(function(i){return i.id=i.id||"mdc-chip-"+ ++Dn,t(i)})},e.prototype.findChipIndex=function(t){for(var n=0;n<this.chips.length;n++)if(this.chipsList[n].id===t)return n;return-1},e}(b);/**
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
 */var kt={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},wt={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};/**
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
 */var Nn=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.closed=this.adapter.hasClass(kt.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(kt.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(wt.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(wt.RADIUS))},e.prototype.setDeterminate=function(t){this.determinate=t,this.determinate?(this.adapter.removeClass(kt.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(kt.INDETERMINATE_CLASS),this.adapter.removeAttribute(wt.ARIA_VALUENOW))},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){if(this.progress=t,this.determinate){var n=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(wt.STROKE_DASHOFFSET,""+n),this.adapter.setAttribute(wt.ARIA_VALUENOW,this.progress.toString())}},e.prototype.getProgress=function(){return this.progress},e.prototype.open=function(){this.closed=!1,this.adapter.removeClass(kt.CLOSED_CLASS),this.adapter.removeAttribute(wt.ARIA_HIDDEN)},e.prototype.close=function(){this.closed=!0,this.adapter.addClass(kt.CLOSED_CLASS),this.adapter.setAttribute(wt.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.closed},e}(_);/**
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
 */var Ki=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.initialize=function(){this.determinateCircle=this.root.querySelector(Nn.strings.DETERMINATE_CIRCLE_SELECTOR)},e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isClosed",{get:function(){return this.foundation.isClosed()},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},getDeterminateCircleAttribute:function(i){return t.determinateCircle.getAttribute(i)},hasClass:function(i){return t.root.classList.contains(i)},removeClass:function(i){t.root.classList.remove(i)},removeAttribute:function(i){t.root.removeAttribute(i)},setAttribute:function(i,r){t.root.setAttribute(i,r)},setDeterminateCircleAttribute:function(i,r){t.determinateCircle.setAttribute(i,r)}};return new Nn(n)},e}(b);/**
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
 */var st={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},ht={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},oe={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
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
 */var Fe=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(st.INDETERMINATE_CLASS),this.adapter.addClass(st.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,r;if(!t.determinate)try{for(var a=D(n),s=a.next();!s.done;s=a.next()){var u=s.value;u.contentRect&&t.calculateAndSetDimensions(u.contentRect.width)}}catch(l){i={error:l}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(st.INDETERMINATE_CLASS),this.adapter.setAttribute(ht.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(ht.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(ht.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(st.INDETERMINATE_CLASS),this.adapter.removeAttribute(ht.ARIA_VALUENOW),this.adapter.removeAttribute(ht.ARIA_VALUEMAX),this.adapter.removeAttribute(ht.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(ht.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(st.CLOSED_CLASS),this.adapter.removeClass(st.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(ht.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(st.CLOSED_CLASS),this.adapter.setAttribute(ht.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(st.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(st.CLOSED_CLASS)&&this.adapter.addClass(st.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(st.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(st.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?ne(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(ht.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*oe.PRIMARY_HALF,i=t*oe.PRIMARY_FULL,r=t*oe.SECONDARY_QUARTER,a=t*oe.SECONDARY_HALF,s=t*oe.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-s+"px"),this.restartAnimation()},e}(_);/**
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
 */var li=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(t){this.foundation.setBuffer(t)},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var t=this;this.root.addEventListener("transitionend",function(){t.foundation.handleTransitionEnd()})},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},forceLayout:function(){t.root.getBoundingClientRect()},setBufferBarStyle:function(i,r){var a=t.root.querySelector(Fe.strings.BUFFER_BAR_SELECTOR);a&&a.style.setProperty(i,r)},setPrimaryBarStyle:function(i,r){var a=t.root.querySelector(Fe.strings.PRIMARY_BAR_SELECTOR);a&&a.style.setProperty(i,r)},hasClass:function(i){return t.root.classList.contains(i)},removeAttribute:function(i){t.root.removeAttribute(i)},removeClass:function(i){t.root.classList.remove(i)},setAttribute:function(i,r){t.root.setAttribute(i,r)},setStyle:function(i,r){t.root.style.setProperty(i,r)},attachResizeObserver:function(i){var r=window.ResizeObserver;if(r){var a=new r(i);return a.observe(t.root),a}return null},getWidth:function(){return t.root.offsetWidth}};return new Fe(n)},e}(b);/**
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
 */var B={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_CELL:"mdc-data-table__header-cell",HEADER_CELL_LABEL:"mdc-data-table__header-cell-label",HEADER_CELL_SORTED:"mdc-data-table__header-cell--sorted",HEADER_CELL_SORTED_DESCENDING:"mdc-data-table__header-cell--sorted-descending",HEADER_CELL_WITH_SORT:"mdc-data-table__header-cell--with-sort",HEADER_CELL_WRAPPER:"mdc-data-table__header-cell-wrapper",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",IN_PROGRESS:"mdc-data-table--in-progress",LINEAR_PROGRESS:"mdc-data-table__linear-progress",PAGINATION_ROWS_PER_PAGE_LABEL:"mdc-data-table__pagination-rows-per-page-label",PAGINATION_ROWS_PER_PAGE_SELECT:"mdc-data-table__pagination-rows-per-page-select",PROGRESS_INDICATOR:"mdc-data-table__progress-indicator",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected",SORT_ICON_BUTTON:"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"mdc-data-table__sort-status-label",TABLE_CONTAINER:"mdc-data-table__table-container"},xn={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort"},he={COLUMN_ID:"data-column-id",ROW_ID:"data-row-id"},Q={CONTENT:"."+B.CONTENT,HEADER_CELL:"."+B.HEADER_CELL,HEADER_CELL_WITH_SORT:"."+B.HEADER_CELL_WITH_SORT,HEADER_ROW:"."+B.HEADER_ROW,HEADER_ROW_CHECKBOX:"."+B.HEADER_ROW_CHECKBOX,PROGRESS_INDICATOR:"."+B.PROGRESS_INDICATOR,ROW:"."+B.ROW,ROW_CHECKBOX:"."+B.ROW_CHECKBOX,ROW_SELECTED:"."+B.ROW_SELECTED,SORT_ICON_BUTTON:"."+B.SORT_ICON_BUTTON,SORT_STATUS_LABEL:"."+B.SORT_STATUS_LABEL},Mn={SORTED_IN_DESCENDING:"Sorted in descending order",SORTED_IN_ASCENDING:"Sorted in ascending order"},Vt={ARIA_SELECTED:xn.ARIA_SELECTED,ARIA_SORT:xn.ARIA_SORT,DATA_ROW_ID_ATTR:he.ROW_ID,HEADER_ROW_CHECKBOX_SELECTOR:Q.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:Q.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:Q.ROW_SELECTED,ROW_SELECTOR:Q.ROW},tt;(function(o){o.ASCENDING="ascending",o.DESCENDING="descending",o.NONE="none",o.OTHER="other"})(tt||(tt={}));var ae={ROW_CLICK:"MDCDataTable:rowClick",ROW_SELECTION_CHANGED:"MDCDataTable:rowSelectionChanged",SELECTED_ALL:"MDCDataTable:selectedAll",SORTED:"MDCDataTable:sorted",UNSELECTED_ALL:"MDCDataTable:unselectedAll"};/**
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
 */var Wi=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableContainerHeight:function(){return 0},getTableHeaderHeight:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},notifyRowClick:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},e.prototype.layoutAsync=function(){return Si(this,void 0,void 0,function(){return Oi(this,function(t){switch(t.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState(),t.label=3;case 3:return[2]}})})},e.prototype.getRows=function(){return this.adapter.getRowElements()},e.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},e.prototype.setSelectedRowIds=function(t){for(var n=0;n<this.adapter.getRowCount();n++){var i=this.adapter.getRowIdAtIndex(n),r=!1;i&&t.indexOf(i)>=0&&(r=!0),this.adapter.setRowCheckboxCheckedAtIndex(n,r),this.selectRowAtIndex(n,r)}this.setHeaderRowCheckboxState()},e.prototype.getRowIds=function(){for(var t=[],n=0;n<this.adapter.getRowCount();n++)t.push(this.adapter.getRowIdAtIndex(n));return t},e.prototype.getSelectedRowIds=function(){for(var t=[],n=0;n<this.adapter.getRowCount();n++)this.adapter.isCheckboxAtRowIndexChecked(n)&&t.push(this.adapter.getRowIdAtIndex(n));return t},e.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter.isHeaderRowCheckboxChecked(),n=0;n<this.adapter.getRowCount();n++)this.adapter.setRowCheckboxCheckedAtIndex(n,t),this.selectRowAtIndex(n,t);t?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(t){var n=this.adapter.getRowIndexByChildElement(t.target);if(n!==-1){var i=this.adapter.isCheckboxAtRowIndexChecked(n);this.selectRowAtIndex(n,i),this.setHeaderRowCheckboxState();var r=this.adapter.getRowIdAtIndex(n);this.adapter.notifyRowSelectionChanged({rowId:r,rowIndex:n,selected:i})}},e.prototype.handleSortAction=function(t){for(var n=t.columnId,i=t.columnIndex,r=t.headerCell,a=0;a<this.adapter.getHeaderCellCount();a++)a!==i&&(this.adapter.removeClassNameByHeaderCellIndex(a,B.HEADER_CELL_SORTED),this.adapter.removeClassNameByHeaderCellIndex(a,B.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(a,Vt.ARIA_SORT,tt.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(a,tt.NONE));this.adapter.setClassNameByHeaderCellIndex(i,B.HEADER_CELL_SORTED);var s=this.adapter.getAttributeByHeaderCellIndex(i,Vt.ARIA_SORT),u=tt.NONE;s===tt.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(i,B.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(i,Vt.ARIA_SORT,tt.DESCENDING),u=tt.DESCENDING):s===tt.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(i,B.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(i,Vt.ARIA_SORT,tt.ASCENDING),u=tt.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(i,Vt.ARIA_SORT,tt.ASCENDING),u=tt.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(i,u),this.adapter.notifySortAction({columnId:n,columnIndex:i,headerCell:r,sortValue:u})},e.prototype.handleRowClick=function(t){var n=t.rowId,i=t.row;this.adapter.notifyRowClick({rowId:n,row:i})},e.prototype.showProgress=function(){var t=this.adapter.getTableHeaderHeight(),n=this.adapter.getTableContainerHeight()-t,i=t;this.adapter.setProgressIndicatorStyles({height:n+"px",top:i+"px"}),this.adapter.addClass(B.IN_PROGRESS)},e.prototype.hideProgress=function(){this.adapter.removeClass(B.IN_PROGRESS)},e.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===0?(this.adapter.setHeaderRowCheckboxChecked(!1),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex=function(t,n){n?(this.adapter.addClassAtRowIndex(t,B.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,Vt.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(t,B.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,Vt.ARIA_SELECTED,"false"))},e}(_);/**
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
 */var Gi=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new oi(n)}),this.checkboxFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this;this.headerRow=this.root.querySelector("."+B.HEADER_ROW),this.handleHeaderRowCheckboxChange=function(){t.foundation.handleHeaderRowCheckboxChange()},this.headerRow.addEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener=function(n){t.handleHeaderRowClick(n)},this.headerRow.addEventListener("click",this.headerRowClickListener),this.content=this.root.querySelector("."+B.CONTENT),this.handleContentClick=function(n){var i=mt(n.target,Q.ROW);i&&t.foundation.handleRowClick({rowId:t.getRowIdByRowElement(i),row:i})},this.content.addEventListener("click",this.handleContentClick),this.handleRowCheckboxChange=function(n){t.foundation.handleRowCheckboxChange(n)},this.content.addEventListener("change",this.handleRowCheckboxChange),this.layout()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getHeaderCells=function(){return[].slice.call(this.root.querySelectorAll(Q.HEADER_CELL))},e.prototype.getRows=function(){return this.foundation.getRows()},e.prototype.getSelectedRowIds=function(){return this.foundation.getSelectedRowIds()},e.prototype.setSelectedRowIds=function(t){this.foundation.setSelectedRowIds(t)},e.prototype.showProgress=function(){this.getLinearProgress().open(),this.foundation.showProgress()},e.prototype.hideProgress=function(){this.foundation.hideProgress(),this.getLinearProgress().close()},e.prototype.destroy=function(){var t,n;if(this.handleHeaderRowCheckboxChange&&this.headerRow.removeEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener&&this.headerRow.removeEventListener("click",this.headerRowClickListener),this.handleRowCheckboxChange&&this.content.removeEventListener("change",this.handleRowCheckboxChange),this.headerRowCheckbox&&this.headerRowCheckbox.destroy(),this.rowCheckboxList)try{for(var i=D(this.rowCheckboxList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.handleContentClick&&this.content.removeEventListener("click",this.handleContentClick)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},getHeaderCellElements:function(){return t.getHeaderCells()},getHeaderCellCount:function(){return t.getHeaderCells().length},getAttributeByHeaderCellIndex:function(i,r){return t.getHeaderCells()[i].getAttribute(r)},setAttributeByHeaderCellIndex:function(i,r,a){t.getHeaderCells()[i].setAttribute(r,a)},setClassNameByHeaderCellIndex:function(i,r){t.getHeaderCells()[i].classList.add(r)},removeClassNameByHeaderCellIndex:function(i,r){t.getHeaderCells()[i].classList.remove(r)},notifySortAction:function(i){t.emit(ae.SORTED,i,!0)},getTableContainerHeight:function(){var i=t.root.querySelector("."+B.TABLE_CONTAINER);if(!i)throw new Error("MDCDataTable: Table container element not found.");return i.getBoundingClientRect().height},getTableHeaderHeight:function(){var i=t.root.querySelector(Q.HEADER_ROW);if(!i)throw new Error("MDCDataTable: Table header element not found.");return i.getBoundingClientRect().height},setProgressIndicatorStyles:function(i){var r=t.root.querySelector(Q.PROGRESS_INDICATOR);if(!r)throw new Error("MDCDataTable: Progress indicator element not found.");r.style.setProperty("height",i.height),r.style.setProperty("top",i.top)},addClassAtRowIndex:function(i,r){t.getRows()[i].classList.add(r)},getRowCount:function(){return t.getRows().length},getRowElements:function(){return[].slice.call(t.root.querySelectorAll(Q.ROW))},getRowIdAtIndex:function(i){return t.getRows()[i].getAttribute(he.ROW_ID)},getRowIndexByChildElement:function(i){return t.getRows().indexOf(mt(i,Q.ROW))},getSelectedRowCount:function(){return t.root.querySelectorAll(Q.ROW_SELECTED).length},isCheckboxAtRowIndexChecked:function(i){return t.rowCheckboxList[i].checked},isHeaderRowCheckboxChecked:function(){return t.headerRowCheckbox.checked},isRowsSelectable:function(){return!!t.root.querySelector(Q.ROW_CHECKBOX)||!!t.root.querySelector(Q.HEADER_ROW_CHECKBOX)},notifyRowSelectionChanged:function(i){t.emit(ae.ROW_SELECTION_CHANGED,{row:t.getRowByIndex(i.rowIndex),rowId:t.getRowIdByIndex(i.rowIndex),rowIndex:i.rowIndex,selected:i.selected},!0)},notifySelectedAll:function(){t.emit(ae.SELECTED_ALL,{},!0)},notifyUnselectedAll:function(){t.emit(ae.UNSELECTED_ALL,{},!0)},notifyRowClick:function(i){t.emit(ae.ROW_CLICK,i,!0)},registerHeaderRowCheckbox:function(){t.headerRowCheckbox&&t.headerRowCheckbox.destroy();var i=t.root.querySelector(Q.HEADER_ROW_CHECKBOX);t.headerRowCheckbox=t.checkboxFactory(i)},registerRowCheckboxes:function(){t.rowCheckboxList&&t.rowCheckboxList.forEach(function(i){i.destroy()}),t.rowCheckboxList=[],t.getRows().forEach(function(i){var r=t.checkboxFactory(i.querySelector(Q.ROW_CHECKBOX));t.rowCheckboxList.push(r)})},removeClassAtRowIndex:function(i,r){t.getRows()[i].classList.remove(r)},setAttributeAtRowIndex:function(i,r,a){t.getRows()[i].setAttribute(r,a)},setHeaderRowCheckboxChecked:function(i){t.headerRowCheckbox.checked=i},setHeaderRowCheckboxIndeterminate:function(i){t.headerRowCheckbox.indeterminate=i},setRowCheckboxCheckedAtIndex:function(i,r){t.rowCheckboxList[i].checked=r},setSortStatusLabelByHeaderCellIndex:function(i,r){var a=t.getHeaderCells()[i],s=a.querySelector(Q.SORT_STATUS_LABEL);s&&(s.textContent=t.getSortStatusMessageBySortValue(r))}};return new Wi(n)},e.prototype.getRowByIndex=function(t){return this.getRows()[t]},e.prototype.getRowIdByIndex=function(t){return this.getRowByIndex(t).getAttribute(he.ROW_ID)},e.prototype.handleHeaderRowClick=function(t){var n=mt(t.target,Q.HEADER_CELL_WITH_SORT);if(n){var i=n.getAttribute(he.COLUMN_ID),r=this.getHeaderCells().indexOf(n);r!==-1&&this.foundation.handleSortAction({columnId:i,columnIndex:r,headerCell:n})}},e.prototype.getSortStatusMessageBySortValue=function(t){switch(t){case tt.ASCENDING:return Mn.SORTED_IN_ASCENDING;case tt.DESCENDING:return Mn.SORTED_IN_DESCENDING;default:return""}},e.prototype.getLinearProgressElement=function(){var t=this.root.querySelector("."+B.LINEAR_PROGRESS);if(!t)throw new Error("MDCDataTable: linear progress element is not found.");return t},e.prototype.getLinearProgress=function(){if(!this.linearProgress){var t=this.getLinearProgressElement();this.linearProgress=new li(t)}return this.linearProgress},e.prototype.getRowIdByRowElement=function(t){return t.getAttribute(he.ROW_ID)},e}(b);/**
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
 */function ji(o,e,t){return e(o,{initialFocusEl:t})}function Xi(o){return o?o.scrollHeight>o.offsetHeight:!1}function Yi(o){return o?o.scrollTop===0:!1}function qi(o){return o?Math.ceil(o.scrollHeight-o.scrollTop)===o.clientHeight:!1}function zi(o){var e=new Set;return[].forEach.call(o,function(t){return e.add(t.offsetTop)}),e.size>1}/**
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
 */var sn=function(){function o(){this.rafIDs=new Map}return o.prototype.request=function(e,t){var n=this;this.cancel(e);var i=requestAnimationFrame(function(r){n.rafIDs.delete(e),t(r)});this.rafIDs.set(e,i)},o.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},o.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,n){e.cancel(n)})},o.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,n){e.push(n)}),e},o}();/**
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
 */var M={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},se={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Be={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
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
 */var Le;(function(o){o.POLL_SCROLL_POS="poll_scroll_position",o.POLL_LAYOUT_CHANGE="poll_layout_change"})(Le||(Le={}));var ci=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=se.CLOSE_ACTION,n.scrimClickAction=se.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=se.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new sn,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return se},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(M.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(M.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(M.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(M.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(M.OPEN),n.adapter.addBodyClass(M.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},Be.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(M.CLOSING),this.adapter.removeClass(M.OPEN),this.adapter.removeBodyClass(M.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Be.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(M.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(M.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(M.SURFACE_SCRIM_SHOWN),this.adapter.addClass(M.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(M.SURFACE_SCRIM_HIDING),this.adapter.removeClass(M.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(Le.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){var n=this.adapter.eventTargetMatches(t.target,se.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(t);i&&this.close(i)}},e.prototype.handleKeydown=function(t){var n=t.key==="Enter"||t.keyCode===13;if(n){var i=this.adapter.getActionFromEvent(t);if(!i){var r=t.composedPath?t.composedPath()[0]:t.target,a=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;n&&a&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(Le.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(M.OPENING),this.adapter.removeClass(M.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(M.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(M.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(M.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(M.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(M.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(M.SCROLL_DIVIDER_HEADER):this.adapter.addClass(M.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(M.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(M.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(M.SCROLL_DIVIDER_FOOTER)},e}(_);/**
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
 */var Z=ci.strings,$i=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n,i;t===void 0&&(t=function(l,c){return new on(l,c)});var r=this.root.querySelector(Z.CONTAINER_SELECTOR);if(!r)throw new Error("Dialog component requires a "+Z.CONTAINER_SELECTOR+" container element");this.container=r,this.content=this.root.querySelector(Z.CONTENT_SELECTOR),this.buttons=[].slice.call(this.root.querySelectorAll(Z.BUTTON_SELECTOR)),this.defaultButton=this.root.querySelector("["+Z.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory=t,this.buttonRipples=[];try{for(var a=D(this.buttons),s=a.next();!s.done;s=a.next()){var u=s.value;this.buttonRipples.push(new K(u))}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=ji(this.container,this.focusTrapFactory,this.getInitialFocusEl()||void 0),this.handleClick=this.foundation.handleClick.bind(this.foundation),this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleOpening=function(){document.addEventListener("keydown",t.handleDocumentKeydown)},this.handleClosing=function(){document.removeEventListener("keydown",t.handleDocumentKeydown)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen(Z.OPENING_EVENT,this.handleOpening),this.listen(Z.CLOSING_EVENT,this.handleClosing)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),this.unlisten(Z.OPENING_EVENT,this.handleOpening),this.unlisten(Z.CLOSING_EVENT,this.handleClosing),this.handleClosing(),this.buttonRipples.forEach(function(t){t.destroy()}),o.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addBodyClass:function(i){return document.body.classList.add(i)},addClass:function(i){return t.root.classList.add(i)},areButtonsStacked:function(){return zi(t.buttons)},clickDefaultButton:function(){t.defaultButton&&!t.defaultButton.disabled&&t.defaultButton.click()},eventTargetMatches:function(i,r){return i?It(i,r):!1},getActionFromEvent:function(i){if(!i.target)return"";var r=mt(i.target,"["+Z.ACTION_ATTRIBUTE+"]");return r&&r.getAttribute(Z.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(i){return t.root.classList.contains(i)},isContentScrollable:function(){return Xi(t.content)},notifyClosed:function(i){return t.emit(Z.CLOSED_EVENT,i?{action:i}:{})},notifyClosing:function(i){return t.emit(Z.CLOSING_EVENT,i?{action:i}:{})},notifyOpened:function(){return t.emit(Z.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(Z.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(i){return document.body.classList.remove(i)},removeClass:function(i){return t.root.classList.remove(i)},reverseButtons:function(){t.buttons.reverse(),t.buttons.forEach(function(i){i.parentElement.appendChild(i)})},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.addEventListener(i,r)},deregisterContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.removeEventListener(i,r)},isScrollableContentAtTop:function(){return Yi(t.content)},isScrollableContentAtBottom:function(){return qi(t.content)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new ci(n)},e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+Z.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(b);/**
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
 */function Qi(o,e){return e(o,{skipInitialFocus:!0})}/**
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
 */var Pt,bt,v={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},Zi=(Pt={},Pt[""+v.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Pt[""+v.LIST_ITEM_CLASS]="mdc-list-item",Pt[""+v.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Pt[""+v.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Pt[""+v.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Pt[""+v.ROOT]="mdc-list",Pt),Gt=(bt={},bt[""+v.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",bt[""+v.LIST_ITEM_CLASS]="mdc-deprecated-list-item",bt[""+v.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",bt[""+v.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",bt[""+v.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",bt[""+v.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",bt[""+v.ROOT]="mdc-deprecated-list",bt),H={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+v.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+v.LIST_ITEM_CLASS+` a,
    .`+Gt[v.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Gt[v.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+v.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+v.LIST_ITEM_CLASS+` a,
    .`+v.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+v.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Gt[v.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Gt[v.LIST_ITEM_CLASS]+` a,
    .`+Gt[v.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Gt[v.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},V={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},Ji="evolution";/**
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
 */var tr=["input","button","textarea","select"],lt=function(o){var e=o.target;if(e){var t=(""+e.tagName).toLowerCase();tr.indexOf(t)===-1&&o.preventDefault()}};/**
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
 */function er(){var o={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return o}function nr(o,e){for(var t=new Map,n=0;n<o;n++){var i=e(n).trim();if(i){var r=i[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(a){a.sort(function(s,u){return s.index-u.index})}),t}function Ze(o,e){var t=o.nextChar,n=o.focusItemAtIndex,i=o.sortedIndexByFirstChar,r=o.focusedItemIndex,a=o.skipFocus,s=o.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){hi(e)},V.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var u;return e.typeaheadBuffer.length===1?u=ir(i,r,s,e):u=rr(i,s,e),u!==-1&&!a&&n(u),u}function ir(o,e,t,n){var i=n.typeaheadBuffer[0],r=o.get(i);if(!r)return-1;if(i===n.currentFirstChar&&r[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%r.length;var a=r[n.sortedIndexCursor].index;if(!t(a))return a}n.currentFirstChar=i;var s=-1,u;for(u=0;u<r.length;u++)if(!t(r[u].index)){s=u;break}for(;u<r.length;u++)if(r[u].index>e&&!t(r[u].index)){s=u;break}return s!==-1?(n.sortedIndexCursor=s,r[n.sortedIndexCursor].index):-1}function rr(o,e,t){var n=t.typeaheadBuffer[0],i=o.get(n);if(!i)return-1;var r=i[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(t.sortedIndexCursor+1)%i.length,s=-1;a!==t.sortedIndexCursor;){var u=i[a],l=u.text.lastIndexOf(t.typeaheadBuffer,0)===0,c=!e(u.index);if(l&&c){s=a;break}a=(a+1)%i.length}return s!==-1?(t.sortedIndexCursor=s,i[t.sortedIndexCursor].index):-1}function di(o){return o.typeaheadBuffer.length>0}function hi(o){o.typeaheadBuffer=""}function wn(o,e){var t=o.event,n=o.isTargetListItem,i=o.focusedItemIndex,r=o.focusItemAtIndex,a=o.sortedIndexByFirstChar,s=o.isItemAtIndexDisabled,u=U(t)==="ArrowLeft",l=U(t)==="ArrowUp",c=U(t)==="ArrowRight",E=U(t)==="ArrowDown",p=U(t)==="Home",h=U(t)==="End",m=U(t)==="Enter",C=U(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||u||l||c||E||p||h||m)return-1;var y=!C&&t.key.length===1;if(y){lt(t);var S={focusItemAtIndex:r,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s};return Ze(S,e)}if(!C)return-1;n&&lt(t);var N=n&&di(e);if(N){var S={focusItemAtIndex:r,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s};return Ze(S,e)}return-1}/**
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
 */function or(o){return o instanceof Array}var ar=["Alt","Control","Meta","Shift"];function Pn(o){var e=new Set(o?ar.filter(function(t){return o.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var Je=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!0,n.selectedIndex=V.UNSET_INDEX,n.focusedItemIndex=V.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=er(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return v},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==V.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,v.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=V.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var r=this.adapter.listItemAtIndexHasClass(i,v.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(i,v.LIST_ITEM_ACTIVATED_CLASS);if(r||a){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&di(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,v.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,i){var r=this,a,s=U(t)==="ArrowLeft",u=U(t)==="ArrowUp",l=U(t)==="ArrowRight",c=U(t)==="ArrowDown",E=U(t)==="Home",p=U(t)==="End",h=U(t)==="Enter",m=U(t)==="Spacebar",C=this.isVertical&&c||!this.isVertical&&l,y=this.isVertical&&u||!this.isVertical&&s,S=t.key==="A"||t.key==="a",N=Pn(t);if(this.adapter.isRootFocused()){if((y||p)&&N([]))t.preventDefault(),this.focusLastElement();else if((C||E)&&N([]))t.preventDefault(),this.focusFirstElement();else if(y&&N(["Shift"])&&this.isCheckboxList){t.preventDefault();var k=this.focusLastElement();k!==-1&&this.setSelectedIndexOnAction(k,!1)}else if(C&&N(["Shift"])&&this.isCheckboxList){t.preventDefault();var k=this.focusFirstElement();k!==-1&&this.setSelectedIndexOnAction(k,!1)}if(this.hasTypeahead){var P={event:t,focusItemAtIndex:function(Rt){r.focusItemAtIndex(Rt)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(Rt){return r.isIndexDisabled(Rt)}};wn(P,this.typeaheadState)}return}var w=this.adapter.getFocusedElementIndex();if(!(w===-1&&(w=i,w<0))){if(C&&N([]))lt(t),this.focusNextElement(w);else if(y&&N([]))lt(t),this.focusPrevElement(w);else if(C&&N(["Shift"])&&this.isCheckboxList){lt(t);var k=this.focusNextElement(w);k!==-1&&this.setSelectedIndexOnAction(k,!1)}else if(y&&N(["Shift"])&&this.isCheckboxList){lt(t);var k=this.focusPrevElement(w);k!==-1&&this.setSelectedIndexOnAction(k,!1)}else if(E&&N([]))lt(t),this.focusFirstElement();else if(p&&N([]))lt(t),this.focusLastElement();else if(E&&N(["Control","Shift"])&&this.isCheckboxList){if(lt(t),this.isIndexDisabled(w))return;this.focusFirstElement(),this.toggleCheckboxRange(0,w,w)}else if(p&&N(["Control","Shift"])&&this.isCheckboxList){if(lt(t),this.isIndexDisabled(w))return;this.focusLastElement(),this.toggleCheckboxRange(w,this.adapter.getListItemCount()-1,w)}else if(S&&N(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex,!0);else if((h||m)&&N([])){if(n){var Ct=t.target;if(Ct&&Ct.tagName==="A"&&h||(lt(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(w,!1),this.adapter.notifyAction(w))}}else if((h||m)&&N(["Shift"])&&this.isCheckboxList){var Ct=t.target;if(Ct&&Ct.tagName==="A"&&h||(lt(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((a=this.lastSelectedIndex)!==null&&a!==void 0?a:w,w,w),this.adapter.notifyAction(w))}if(this.hasTypeahead){var P={event:t,focusItemAtIndex:function(_t){r.focusItemAtIndex(_t)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(_t){return r.isIndexDisabled(_t)}};wn(P,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,i){var r,a=Pn(i);t!==V.UNSET_INDEX&&(this.isIndexDisabled(t)||(a([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&a(["Shift"])&&(this.toggleCheckboxRange((r=this.lastSelectedIndex)!==null&&r!==void 0?r:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,v.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,H.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,v.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,H.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var i=v.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=v.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==V.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==V.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===V.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,H.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?H.ARIA_CURRENT:H.ARIA_SELECTED;if(this.selectedIndex!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==V.UNSET_INDEX){var r=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?H.ARIA_SELECTED:H.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var i=this.selectedIndex,r=n.isUserInteraction?new Set(i===V.UNSET_INDEX?[]:i):null,a=this.getSelectionAttribute(),s=[],u=0;u<this.adapter.getListItemCount();u++){var l=r==null?void 0:r.has(u),c=t.indexOf(u)>=0;c!==l&&s.push(u),this.adapter.setCheckedCheckboxOrRadioAtIndex(u,c),this.adapter.setAttributeForElementIndex(u,a,c?"true":"false")}this.selectedIndex=t,n.isUserInteraction&&s.length&&this.adapter.notifySelectionChange(s)},e.prototype.toggleCheckboxRange=function(t,n,i){this.lastSelectedIndex=i;for(var r=new Set(this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex),a=!(r!=null&&r.has(i)),s=_e([t,n].sort(),2),u=s[0],l=s[1],c=this.getSelectionAttribute(),E=[],p=u;p<=l;p++)if(!this.isIndexDisabled(p)){var h=r.has(p);a!==h&&(E.push(p),this.adapter.setCheckedCheckboxOrRadioAtIndex(p,a),this.adapter.setAttributeForElementIndex(p,c,""+a),a?r.add(p):r.delete(p))}E.length&&(this.selectedIndex=ii([],_e(r)),this.adapter.notifySelectionChange(E))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===V.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==V.UNSET_INDEX?this.selectedIndex:or(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,n){return Math.min(t,n)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t,n){var i=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(r){return i.isIndexInRange(r)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===V.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t),a;n?a=r:(a=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,a)),this.adapter.setAttributeForElementIndex(t,i,a?"true":"false");var s=this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex.slice();a?s.push(t):s=s.filter(function(u){return u!==t}),this.selectedIndex=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.checkboxListToggleAll=function(t,n){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([],{isUserInteraction:n});else{for(var r=[],a=0;a<i;a++)(!this.isIndexDisabled(a)||t.indexOf(a)>-1)&&r.push(a);this.setCheckboxAtIndex(r,{isUserInteraction:n})}},e.prototype.typeaheadMatchItem=function(t,n,i){var r=this;i===void 0&&(i=!1);var a={focusItemAtIndex:function(s){r.focusItemAtIndex(s)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(s){return r.isIndexDisabled(s)}};return Ze(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return nr(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){hi(this.typeaheadState)},e}(_);/**
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
 */var un=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"vertical",{set:function(t){this.foundation.setVerticalOrientation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[v.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{set:function(t){this.foundation.setWrapFocus(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.foundation.setHasTypeahead(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.foundation.setSingleSelection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabledItemsFocusable",{set:function(t){this.foundation.setDisabledItemsFocusable(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=Ji in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=Zi:It(this.root,H.DEPRECATED_SELECTOR)?this.classNameMap=Gt:this.classNameMap=Object.values(v).reduce(function(t,n){return t[n]=n,t},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},e.prototype.layout=function(){var t=this.root.getAttribute(H.ARIA_ORIENTATION);this.vertical=t!==H.ARIA_ORIENTATION_HORIZONTAL;var n="."+this.classNameMap[v.LIST_ITEM_CLASS]+":not([tabindex])",i=H.FOCUSABLE_CHILD_ELEMENTS,r=this.root.querySelectorAll(n);r.length&&Array.prototype.forEach.call(r,function(s){s.setAttribute("tabindex","-1")});var a=this.root.querySelectorAll(i);a.length&&Array.prototype.forEach.call(a,function(s){s.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},e.prototype.getPrimaryText=function(t){var n,i=t.querySelector("."+this.classNameMap[v.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||i)return(n=i==null?void 0:i.textContent)!==null&&n!==void 0?n:"";var r=t.querySelector("."+this.classNameMap[v.LIST_ITEM_TEXT_CLASS]);return r&&r.textContent||""},e.prototype.initializeListType=function(){var t=this;if(this.isInteractive=It(this.root,H.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var n=Array.from(this.root.querySelectorAll(H.SELECTED_ITEM_SELECTOR),function(s){return t.listElements.indexOf(s)});It(this.root,H.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=n:n.length>0&&(this.selectedIndex=n[0]);return}var i=this.root.querySelectorAll(H.ARIA_ROLE_CHECKBOX_SELECTOR),r=this.root.querySelector(H.ARIA_CHECKED_RADIO_SELECTOR);if(i.length){var a=this.root.querySelectorAll(H.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(a,function(s){return t.listElements.indexOf(s)})}else r&&(this.selectedIndex=this.listElements.indexOf(r))},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.typeaheadMatchItem=function(t,n){return this.foundation.typeaheadMatchItem(t,n,!0)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassForElementIndex:function(i,r){var a=t.listElements[i];a&&a.classList.add(t.classNameMap[r])},focusItemAtIndex:function(i){var r=t.listElements[i];r&&r.focus()},getAttributeForElementIndex:function(i,r){return t.listElements[i].getAttribute(r)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},getPrimaryTextAtIndex:function(i){return t.getPrimaryText(t.listElements[i])},hasCheckboxAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(H.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(H.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(i){var r=t.listElements[i],a=r.querySelector(H.CHECKBOX_SELECTOR);return a.checked},isFocusInsideList:function(){return t.root!==document.activeElement&&t.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root},listItemAtIndexHasClass:function(i,r){return t.listElements[i].classList.contains(t.classNameMap[r])},notifyAction:function(i){t.emit(H.ACTION_EVENT,{index:i},!0)},notifySelectionChange:function(i){t.emit(H.SELECTION_CHANGE_EVENT,{changedIndices:i},!0)},removeClassForElementIndex:function(i,r){var a=t.listElements[i];a&&a.classList.remove(t.classNameMap[r])},setAttributeForElementIndex:function(i,r,a){var s=t.listElements[i];s&&s.setAttribute(r,a)},setCheckedCheckboxOrRadioAtIndex:function(i,r){var a=t.listElements[i],s=a.querySelector(H.CHECKBOX_RADIO_SELECTOR);s.checked=r;var u=document.createEvent("Event");u.initEvent("change",!0,!0),s.dispatchEvent(u)},setTabIndexForListItemChildren:function(i,r){var a=t.listElements[i],s=H.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(a.querySelectorAll(s),function(u){u.setAttribute("tabindex",r)})}};return new Je(n)},e.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[v.LIST_ITEM_CLASS]+'[tabindex="0"]')){var t=this.initialFocusIndex();t!==-1&&(this.listElements[t].tabIndex=0)}},e.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if(typeof this.selectedIndex=="number"&&this.selectedIndex!==V.UNSET_INDEX)return this.selectedIndex;var t=this.root.querySelector("."+this.classNameMap[v.LIST_ITEM_CLASS]+":not(."+this.classNameMap[v.LIST_ITEM_DISABLED_CLASS]+")");return t===null?-1:this.getListItemIndex(t)},e.prototype.getListItemIndex=function(t){var n=mt(t,"."+this.classNameMap[v.LIST_ITEM_CLASS]+", ."+this.classNameMap[v.ROOT]);return n&&It(n,"."+this.classNameMap[v.LIST_ITEM_CLASS])?this.listElements.indexOf(n):-1},e.prototype.handleFocusInEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusIn(n)},e.prototype.handleFocusOutEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusOut(n)},e.prototype.handleKeydownEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target;this.foundation.handleKeydown(t,i.classList.contains(this.classNameMap[v.LIST_ITEM_CLASS]),n)},e.prototype.handleClickEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target,r=!It(i,H.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(n,r,t)},e}(b);/**
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
 */var rt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},sr={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Me=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"strings",{get:function(){return sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(rt.OPEN),this.adapter.addClass(rt.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(rt.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(rt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(rt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(rt.OPENING)||this.adapter.hasClass(rt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(rt.CLOSING)},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,r=i==="Escape"||n===27;r&&this.close()},e.prototype.handleTransitionEnd=function(t){var n=rt.OPENING,i=rt.CLOSING,r=rt.OPEN,a=rt.ANIMATE,s=rt.ROOT,u=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,s);u&&(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(n),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(_);/**
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
 */var ur=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Me);/**
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
 */var Ce=Me.cssClasses,ue=Me.strings,lr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.innerList},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(r){return new on(r)}),n===void 0&&(n=function(r){return new un(r)});var i=this.root.querySelector(ue.LIST_SELECTOR);i&&(this.innerList=n(i),this.innerList.wrapFocus=!0),this.focusTrapFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this,n=Ce.MODAL,i=ue.SCRIM_SELECTOR;this.scrim=this.root.parentNode.querySelector(i),this.scrim&&this.root.classList.contains(n)&&(this.handleScrimClick=function(){return t.foundation.handleScrimClick()},this.scrim.addEventListener("click",this.handleScrimClick),this.focusTrap=Qi(this.root,this.focusTrapFactory)),this.handleKeydown=function(r){t.foundation.handleKeydown(r)},this.handleTransitionEnd=function(r){t.foundation.handleTransitionEnd(r)},this.listen("keydown",this.handleKeydown),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("transitionend",this.handleTransitionEnd),this.innerList&&this.innerList.destroy();var t=Ce.MODAL;this.scrim&&this.handleScrimClick&&this.root.classList.contains(t)&&(this.scrim.removeEventListener("click",this.handleScrimClick),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(a){t.root.classList.add(a)},removeClass:function(a){t.root.classList.remove(a)},hasClass:function(a){return t.root.classList.contains(a)},elementHasClass:function(a,s){return a.classList.contains(s)},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){var a=t.previousFocus;a&&a.focus&&t.root.contains(document.activeElement)&&a.focus()},focusActiveNavigationItem:function(){var a=t.root.querySelector(ue.LIST_ITEM_ACTIVATED_SELECTOR);a&&a.focus()},notifyClose:function(){t.emit(ue.CLOSE_EVENT,{},!0)},notifyOpen:function(){t.emit(ue.OPEN_EVENT,{},!0)},trapFocus:function(){t.focusTrap.trapFocus()},releaseFocus:function(){t.focusTrap.releaseFocus()}},i=Ce.DISMISSIBLE,r=Ce.MODAL;if(this.root.classList.contains(i))return new Me(n);if(this.root.classList.contains(r))return new ur(n);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+i+" and "+r+".")},e}(b);/**
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
 */var cr={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var fi=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return cr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(_);/**
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
 */var ln=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation.shake(t)},e.prototype.float=function(t){this.foundation.float(t)},e.prototype.setRequired=function(t){this.foundation.setRequired(t)},e.prototype.getWidth=function(){return this.foundation.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},getWidth:function(){return Ri(t.root)},registerInteractionHandler:function(i,r){return t.listen(i,r)},deregisterInteractionHandler:function(i,r){return t.unlisten(i,r)}};return new fi(n)},e}(b);/**
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
 */var dr={ROOT:"mdc-form-field"},hr={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var Hn=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.click=function(){n.handleClick()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return hr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){t.adapter.deactivateInputRipple()})},e}(_);/**
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
 */var fr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.labelEl=function(){var t=Hn.strings.LABEL_SELECTOR;return this.root.querySelector(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={activateInputRipple:function(){t.input&&t.input.ripple&&t.input.ripple.activate()},deactivateInputRipple:function(){t.input&&t.input.ripple&&t.input.ripple.deactivate()},deregisterInteractionHandler:function(i,r){var a=t.labelEl();a&&a.removeEventListener(i,r)},registerInteractionHandler:function(i,r){var a=t.labelEl();a&&a.addEventListener(i,r)}};return new Hn(n)},e}(b);/**
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
 */var Ut={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var pr=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(i){n.handleTransitionEnd(i)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Ut.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Ut.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Ut.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(Ut.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(Ut.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Ut.LINE_RIPPLE_DEACTIVATING))},e}(_);/**
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
 */var cn=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},setStyle:function(i,r){return t.root.style.setProperty(i,r)},registerEventHandler:function(i,r){return t.listen(i,r)},deregisterEventHandler:function(i,r){return t.unlisten(i,r)}};return new pr(n)},e}(b);/**
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
 */var fe={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},vt={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},le={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},W;(function(o){o[o.BOTTOM=1]="BOTTOM",o[o.CENTER=2]="CENTER",o[o.RIGHT=4]="RIGHT",o[o.FLIP_RTL=8]="FLIP_RTL"})(W||(W={}));var te;(function(o){o[o.TOP_LEFT=0]="TOP_LEFT",o[o.TOP_RIGHT=4]="TOP_RIGHT",o[o.BOTTOM_LEFT=1]="BOTTOM_LEFT",o[o.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",o[o.TOP_START=8]="TOP_START",o[o.TOP_END=12]="TOP_END",o[o.BOTTOM_START=9]="BOTTOM_START",o[o.BOTTOM_END=13]="BOTTOM_END"})(te||(te={}));/**
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
 */var Ft=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=te.TOP_START,n.originCorner=te.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return Object.defineProperty(e,"cssClasses",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^W.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},le.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout(function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()},le.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var n=t.target;this.adapter.isElementInContainer(n)||this.close()},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,r=i==="Escape"||n===27;r&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),r=this.hasBit(n,W.BOTTOM)?"bottom":"top",a=this.hasBit(n,W.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset(n),u=this.getVerticalOriginOffset(n),l=this.measurements,c=l.anchorSize,E=l.surfaceSize,p=(t={},t[a]=s,t[r]=u,t);c.width/E.width>le.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(p),this.adapter.setTransformOrigin(a+" "+r),this.adapter.setPosition(p),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,W.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,n=this.measurements,i=n.viewportDistance,r=n.anchorSize,a=n.surfaceSize,s=e.numbers.MARGIN_TO_EDGE,u=this.hasBit(this.anchorCorner,W.BOTTOM),l,c;u?(l=i.top-s+this.anchorMargin.bottom,c=i.bottom-s-this.anchorMargin.bottom):(l=i.top-s+this.anchorMargin.top,c=i.bottom-s+r.height-this.anchorMargin.top);var E=c-a.height>0;!E&&l>c+this.openBottomBias&&(t=this.setBit(t,W.BOTTOM));var p=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,W.FLIP_RTL),m=this.hasBit(this.anchorCorner,W.RIGHT)||this.hasBit(t,W.RIGHT),C=!1;p&&h?C=!m:C=m;var y,S;C?(y=i.left+r.width+this.anchorMargin.right,S=i.right-this.anchorMargin.right):(y=i.left+this.anchorMargin.left,S=i.right+r.width-this.anchorMargin.left);var N=y-a.width>0,k=S-a.width>0,P=this.hasBit(t,W.FLIP_RTL)&&this.hasBit(t,W.RIGHT);return k&&P&&p||!N&&P?t=this.unsetBit(t,W.RIGHT):(N&&C&&p||N&&!C&&m||!k&&y>=S)&&(t=this.setBit(t,W.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,r=this.hasBit(t,W.BOTTOM),a=this.hasBit(this.anchorCorner,W.BOTTOM),s=e.numbers.MARGIN_TO_EDGE;return r?(i=n.top+this.anchorMargin.top-s,a||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-s,a&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,W.RIGHT),r=this.hasBit(this.anchorCorner,W.RIGHT);if(i){var a=r?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return r?n.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,W.BOTTOM),r=this.hasBit(this.anchorCorner,W.BOTTOM),a=0;return i?a=r?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=r?n.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(t){var n,i,r=this.measurements,a=r.windowScroll,s=r.viewportDistance,u=r.surfaceSize,l=r.viewportSize,c=Object.keys(t);try{for(var E=D(c),p=E.next();!p.done;p=E.next()){var h=p.value,m=t[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){t[h]=(l.width-u.width)/2;continue}m+=s[h],this.isFixedPosition||(h==="top"?m+=a.y:h==="bottom"?m-=a.y:h==="left"?m+=a.x:m-=a.x),t[h]=m}}catch(C){n={error:C}}finally{try{p&&!p.done&&(i=E.return)&&i.call(E)}finally{if(n)throw n.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,n=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,r=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(n||r)&&setTimeout(function(){t.adapter.restoreFocus()},le.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,n){return!!(t&n)},e.prototype.setBit=function(t,n){return t|n},e.prototype.unsetBit=function(t,n){return t^n},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(_);/**
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
 */var pi=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this,n=this.root.parentElement;this.anchorElement=n&&n.classList.contains(fe.ANCHOR)?n:null,this.root.classList.contains(fe.FIXED)&&this.setFixedPosition(!0),this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleBodyClick=function(i){t.foundation.handleBodyClick(i)},this.registerBodyClickListener=function(){document.body.addEventListener("click",t.handleBodyClick,{capture:!0})},this.deregisterBodyClickListener=function(){document.body.removeEventListener("click",t.handleBodyClick,{capture:!0})},this.listen("keydown",this.handleKeydown),this.listen(vt.OPENED_EVENT,this.registerBodyClickListener),this.listen(vt.CLOSED_EVENT,this.deregisterBodyClickListener)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten(vt.OPENED_EVENT,this.registerBodyClickListener),this.unlisten(vt.CLOSED_EVENT,this.deregisterBodyClickListener),o.prototype.destroy.call(this)},e.prototype.isOpen=function(){return this.foundation.isOpen()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=!1),this.foundation.close(t)},Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.foundation.setQuickOpen(t)},enumerable:!1,configurable:!0}),e.prototype.setIsHoisted=function(t){this.foundation.setIsHoisted(t)},e.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},e.prototype.setFixedPosition=function(t){t?this.root.classList.add(fe.FIXED):this.root.classList.remove(fe.FIXED),this.foundation.setFixedPosition(t)},e.prototype.setAbsolutePosition=function(t,n){this.foundation.setAbsolutePosition(t,n),this.setIsHoisted(!0)},e.prototype.setAnchorCorner=function(t){this.foundation.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.foundation.setAnchorMargin(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){return t.emit(Ft.strings.CLOSED_EVENT,{})},notifyClosing:function(){t.emit(Ft.strings.CLOSING_EVENT,{})},notifyOpen:function(){return t.emit(Ft.strings.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(Ft.strings.OPENING_EVENT,{})},isElementInContainer:function(i){return t.root.contains(i)},isRtl:function(){return getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setTransformOrigin:function(i){var r=ne(window,"transform")+"-origin";t.root.style.setProperty(r,i)},isFocused:function(){return document.activeElement===t.root},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){t.root.contains(document.activeElement)&&t.previousFocus&&t.previousFocus.focus&&t.previousFocus.focus()},getInnerDimensions:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(i){var r=t.root;r.style.left="left"in i?i.left+"px":"",r.style.right="right"in i?i.right+"px":"",r.style.top="top"in i?i.top+"px":"",r.style.bottom="bottom"in i?i.bottom+"px":""},setMaxHeight:function(i){t.root.style.maxHeight=i}};return new Ft(n)},e}(b);/**
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
 */var ee={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},pt={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Er={FOCUS_ROOT_INDEX:-1},Qt;(function(o){o[o.NONE=0]="NONE",o[o.LIST_ROOT=1]="LIST_ROOT",o[o.FIRST_ITEM=2]="FIRST_ITEM",o[o.LAST_ITEM=3]="LAST_ITEM"})(Qt||(Qt={}));/**
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
 */var Tr=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.closeAnimationEndTimerId=0,n.defaultFocusState=Qt.LIST_ROOT,n.selectedIndex=-1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var n=t.key,i=t.keyCode,r=n==="Tab"||i===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var n=this,i=this.adapter.getElementIndex(t);if(!(i<0)){this.adapter.notifySelected({index:i});var r=this.adapter.getAttributeFromElementAtIndex(i,pt.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var a=n.adapter.getElementIndex(t);a>=0&&n.adapter.isSelectableItemAtIndex(a)&&n.setSelectedIndex(a)},Ft.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Qt.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Qt.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Qt.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,pt.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,ee.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,ee.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,pt.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,n){this.validatedIndex(t),n?(this.adapter.removeClassFromElementAtIndex(t,v.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,pt.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,v.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,pt.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var n=this.adapter.getMenuItemCount(),i=t>=0&&t<n;if(!i)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(_);/**
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
 */var Ei=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new pi(i)}),n===void 0&&(n=function(i){return new un(i)}),this.menuSurfaceFactory=t,this.listFactory=n},e.prototype.initialSyncWithDOM=function(){var t=this;this.menuSurface=this.menuSurfaceFactory(this.root);var n=this.root.querySelector(pt.LIST_SELECTOR);n?(this.list=this.listFactory(n),this.list.wrapFocus=!0):this.list=null,this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleItemAction=function(i){t.foundation.handleItemAction(t.items[i.detail.index])},this.handleMenuSurfaceOpened=function(){t.foundation.handleMenuSurfaceOpened()},this.menuSurface.listen(Ft.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.listen("keydown",this.handleKeydown),this.listen(Je.strings.ACTION_EVENT,this.handleItemAction)},e.prototype.destroy=function(){this.list&&this.list.destroy(),this.menuSurface.destroy(),this.menuSurface.unlisten(Ft.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.unlisten("keydown",this.handleKeydown),this.unlisten(Je.strings.ACTION_EVENT,this.handleItemAction),o.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"open",{get:function(){return this.menuSurface.isOpen()},set:function(t){t?this.menuSurface.open():this.menuSurface.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{get:function(){return this.list?this.list.wrapFocus:!1},set:function(t){this.list&&(this.list.wrapFocus=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.list&&(this.list.hasTypeahead=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.list?this.list.typeaheadInProgress:!1},enumerable:!1,configurable:!0}),e.prototype.typeaheadMatchItem=function(t,n){return this.list?this.list.typeaheadMatchItem(t,n):-1},e.prototype.layout=function(){this.list&&this.list.layout()},Object.defineProperty(e.prototype,"items",{get:function(){return this.list?this.list.listElements:[]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.list&&(this.list.singleSelection=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.list?this.list.selectedIndex:V.UNSET_INDEX},set:function(t){this.list&&(this.list.selectedIndex=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.menuSurface.quickOpen=t},enumerable:!1,configurable:!0}),e.prototype.setDefaultFocusState=function(t){this.foundation.setDefaultFocusState(t)},e.prototype.setAnchorCorner=function(t){this.menuSurface.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.menuSurface.setAnchorMargin(t)},e.prototype.setSelectedIndex=function(t){this.foundation.setSelectedIndex(t)},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.getOptionByIndex=function(t){var n=this.items;return t<n.length?this.items[t]:null},e.prototype.getPrimaryTextAtIndex=function(t){var n=this.getOptionByIndex(t);return n&&this.list&&this.list.getPrimaryText(n)||""},e.prototype.setFixedPosition=function(t){this.menuSurface.setFixedPosition(t)},e.prototype.setIsHoisted=function(t){this.menuSurface.setIsHoisted(t)},e.prototype.setAbsolutePosition=function(t,n){this.menuSurface.setAbsolutePosition(t,n)},e.prototype.setAnchorElement=function(t){this.menuSurface.anchorElement=t},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassToElementAtIndex:function(i,r){var a=t.items;a[i].classList.add(r)},removeClassFromElementAtIndex:function(i,r){var a=t.items;a[i].classList.remove(r)},addAttributeToElementAtIndex:function(i,r,a){var s=t.items;s[i].setAttribute(r,a)},removeAttributeFromElementAtIndex:function(i,r){var a=t.items;a[i].removeAttribute(r)},getAttributeFromElementAtIndex:function(i,r){var a=t.items;return a[i].getAttribute(r)},elementContainsClass:function(i,r){return i.classList.contains(r)},closeSurface:function(i){t.menuSurface.close(i)},getElementIndex:function(i){return t.items.indexOf(i)},notifySelected:function(i){t.emit(pt.SELECTED_EVENT,{index:i.index,item:t.items[i.index]})},getMenuItemCount:function(){return t.items.length},focusItemAtIndex:function(i){t.items[i].focus()},focusListRoot:function(){t.root.querySelector(pt.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(i){return!!mt(t.items[i],"."+ee.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(i){var r=mt(t.items[i],"."+ee.MENU_SELECTION_GROUP),a=r.querySelector("."+ee.MENU_SELECTED_LIST_ITEM);return a?t.items.indexOf(a):-1}};return new Tr(n)},e}(b);/**
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
 */var Ti={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Fn={NOTCH_ELEMENT_PADDING:8},tn={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var mr=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Ti},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return tn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Fn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Fn.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(_);/**
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
 */var dn=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(Ti.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+fi.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(tn.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root.classList.add(tn.NO_LABEL)},e.prototype.notch=function(t){this.foundation.notch(t)},e.prototype.closeNotch=function(){this.foundation.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},setNotchWidthProperty:function(i){t.notchElement.style.setProperty("width",i+"px")},removeNotchWidthProperty:function(){t.notchElement.style.removeProperty("width")}};return new mr(n)},e}(b);/**
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
 */var Cr={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Ar={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var Bn=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ar},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Cr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var n=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(_);/**
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
 */var gr=function(o){T(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl.checked},set:function(t){this.nativeControl.checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl.disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl.value},set:function(t){this.nativeControl.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.rippleSurface.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},setNativeControlDisabled:function(i){return t.nativeControl.disabled=i}};return new Bn(n)},e.prototype.createRipple=function(){var t=this,n=f(f({},K.createAdapter(this)),{registerInteractionHandler:function(i,r){t.nativeControl.addEventListener(i,r,q())},deregisterInteractionHandler:function(i,r){t.nativeControl.removeEventListener(i,r,q())},isSurfaceActive:function(){return!1},isUnbounded:function(){return!0}});return new K(this.root,new Ot(n))},Object.defineProperty(e.prototype,"nativeControl",{get:function(){var t=Bn.strings.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Radio component requires a "+t+" element");return n},enumerable:!1,configurable:!0}),e}(b);/**
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
 */var Ir={SEGMENT:".mdc-segmented-button__segment"},ke={SELECTED:"selected",CHANGE:"change"},vr={SINGLE_SELECT:"mdc-segmented-button--single-select"};/**
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
 */var yr=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},getSegments:function(){return[]},selectSegment:function(){},unselectSegment:function(){},notifySelectedChange:function(){}}},enumerable:!1,configurable:!0}),e.prototype.selectSegment=function(t){this.adapter.selectSegment(t)},e.prototype.unselectSegment=function(t){this.adapter.unselectSegment(t)},e.prototype.getSelectedSegments=function(){return this.adapter.getSegments().filter(function(t){return t.selected})},e.prototype.isSegmentSelected=function(t){return this.adapter.getSegments().some(function(n){return(n.index===t||n.segmentId===t)&&n.selected})},e.prototype.isSingleSelect=function(){return this.adapter.hasClass(vr.SINGLE_SELECT)},e.prototype.handleSelected=function(t){this.isSingleSelect()&&this.unselectPrevSelected(t.index),this.adapter.notifySelectedChange(t)},e.prototype.unselectPrevSelected=function(t){var n,i;try{for(var r=D(this.getSelectedSegments()),a=r.next();!a.done;a=r.next()){var s=a.value;s.index!==t&&this.unselectSegment(s.index)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e}(_);/**
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
 */var kn={TRUE:"true",FALSE:"false"},Ve={ARIA_CHECKED:"aria-checked",ARIA_PRESSED:"aria-pressed",DATA_SEGMENT_ID:"data-segment-id"},Ue={CLICK:"click",SELECTED:"selected"},Ke={SELECTED:"mdc-segmented-button__segment--selected"};/**
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
 */var Sr={bottom:0,height:0,left:0,right:0,top:0,width:0},Or=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{isSingleSelect:function(){return!1},getAttr:function(){return""},setAttr:function(){},addClass:function(){},removeClass:function(){},hasClass:function(){return!1},notifySelectedChange:function(){},getRootBoundingClientRect:function(){return Sr}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(Ke.SELECTED)},e.prototype.setSelected=function(){this.adapter.addClass(Ke.SELECTED),this.setAriaAttr(kn.TRUE)},e.prototype.setUnselected=function(){this.adapter.removeClass(Ke.SELECTED),this.setAriaAttr(kn.FALSE)},e.prototype.getSegmentId=function(){var t;return(t=this.adapter.getAttr(Ve.DATA_SEGMENT_ID))!==null&&t!==void 0?t:void 0},e.prototype.handleClick=function(){this.adapter.isSingleSelect()?this.setSelected():this.toggleSelection(),this.adapter.notifySelectedChange(this.isSelected())},e.prototype.getDimensions=function(){return this.adapter.getRootBoundingClientRect()},e.prototype.toggleSelection=function(){this.isSelected()?this.setUnselected():this.setSelected()},e.prototype.setAriaAttr=function(t){this.adapter.isSingleSelect()?this.adapter.setAttr(Ve.ARIA_CHECKED,t):this.adapter.setAttr(Ve.ARIA_PRESSED,t)},e}(_);/**
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
 */var Rr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n=this;t===void 0&&(t=function(r,a){return new K(r,a)});var i=f(f({},K.createAdapter(this)),{computeBoundingRect:function(){return n.foundation.getDimensions()}});this.rippleComponent=t(this.root,new Ot(i))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen(Ue.CLICK,this.handleClick)},e.prototype.destroy=function(){this.ripple.destroy(),this.unlisten(Ue.CLICK,this.handleClick),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={isSingleSelect:function(){return t.isSingleSelect},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.root.setAttribute(i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},notifySelectedChange:function(i){t.emit(Ue.SELECTED,{index:t.index,selected:i,segmentId:t.getSegmentId()},!0)},getRootBoundingClientRect:function(){return t.root.getBoundingClientRect()}};return new Or(n)},e.prototype.setIndex=function(t){this.index=t},e.prototype.setIsSingleSelect=function(t){this.isSingleSelect=t},e.prototype.isSelected=function(){return this.foundation.isSelected()},e.prototype.setSelected=function(){this.foundation.setSelected()},e.prototype.setUnselected=function(){this.foundation.setUnselected()},e.prototype.getSegmentId=function(){return this.foundation.getSegmentId()},e}(b);/**
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
 */var _r=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"segments",{get:function(){return this.segmentsList.slice()},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new Rr(n)}),this.segmentFactory=t,this.segmentsList=this.instantiateSegments(this.segmentFactory)},e.prototype.instantiateSegments=function(t){var n=[].slice.call(this.root.querySelectorAll(Ir.SEGMENT));return n.map(function(i){return t(i)})},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleSelected=function(s){t.foundation.handleSelected(s.detail)},this.listen(ke.SELECTED,this.handleSelected);for(var n=this.foundation.isSingleSelect(),i=0;i<this.segmentsList.length;i++){var r=this.segmentsList[i];r.setIndex(i),r.setIsSingleSelect(n)}var a=this.segmentsList.filter(function(s){return s.isSelected()});if(n&&a.length===0&&this.segmentsList.length>0)throw new Error("No segment selected in singleSelect mdc-segmented-button");if(n&&a.length>1)throw new Error("Multiple segments selected in singleSelect mdc-segmented-button")},e.prototype.destroy=function(){var t,n;try{for(var i=D(this.segmentsList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.unlisten(ke.SELECTED,this.handleSelected),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(i){return t.root.classList.contains(i)},getSegments:function(){return t.mappedSegments()},selectSegment:function(i){var r=t.mappedSegments().find(function(a){return a.index===i||a.segmentId===i});r&&t.segmentsList[r.index].setSelected()},unselectSegment:function(i){var r=t.mappedSegments().find(function(a){return a.index===i||a.segmentId===i});r&&t.segmentsList[r.index].setUnselected()},notifySelectedChange:function(i){t.emit(ke.CHANGE,i,!0)}};return new yr(n)},e.prototype.getSelectedSegments=function(){return this.foundation.getSelectedSegments()},e.prototype.selectSegment=function(t){this.foundation.selectSegment(t)},e.prototype.unselectSegment=function(t){this.foundation.unselectSegment(t)},e.prototype.isSegmentSelected=function(t){return this.foundation.isSegmentSelected(t)},e.prototype.mappedSegments=function(){return this.segmentsList.map(function(t,n){return{index:n,selected:t.isSelected(),segmentId:t.getSegmentId()}})},e}(b);/**
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
 */var F={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},$={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Kt={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
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
 */var br=function(o){T(e,o);function e(t,n){n===void 0&&(n={});var i=o.call(this,f(f({},e.defaultAdapter),t))||this;return i.disabled=!1,i.isMenuOpen=!1,i.useDefaultValidation=!0,i.customValidity=!0,i.lastSelectedIndex=Kt.UNSET_INDEX,i.clickDebounceTimeout=0,i.recentlyClicked=!1,i.leadingIcon=n.leadingIcon,i.helperText=n.helperText,i}return Object.defineProperty(e,"cssClasses",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1),!(t>=this.adapter.getMenuItemCount())&&(t===Kt.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),n&&this.adapter.closeMenu(),!i&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,n){n===void 0&&(n=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,n)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),n=this.adapter.getMenuItemValues();return t!==Kt.UNSET_INDEX?n[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(F.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(F.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(F.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,n=this.adapter.hasClass(F.FOCUSED),i=t||n,r=this.adapter.hasClass(F.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),n=t.indexOf(this.getValue());this.setSelectedIndex(n,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),n=t>=0?t:0;this.adapter.focusMenuItemAtIndex(n)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(F.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(F.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(F.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(F.FOCUSED))){var n=U(t)===I.ENTER,i=U(t)===I.SPACEBAR,r=U(t)===I.ARROW_UP,a=U(t)===I.ARROW_DOWN,s=t.ctrlKey||t.metaKey;if(!s&&(!i&&t.key&&t.key.length===1||i&&this.adapter.isTypeaheadInProgress())){var u=i?" ":t.key,l=this.adapter.typeaheadMatchItem(u,this.getSelectedIndex());l>=0&&this.setSelectedIndex(l),t.preventDefault();return}!n&&!i&&!r&&!a||(this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var n=this.adapter.hasClass(F.FOCUSED);if(t){var i=Kt.LABEL_SCALE,r=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(r)}else n||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(F.INVALID),this.adapter.removeMenuClass(F.MENU_INVALID)):(this.adapter.addClass(F.INVALID),this.adapter.addMenuClass(F.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(F.REQUIRED)&&!this.adapter.hasClass(F.DISABLED)?this.getSelectedIndex()!==Kt.UNSET_INDEX&&(this.getSelectedIndex()!==0||!!this.getValue()):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(F.REQUIRED):this.adapter.removeClass(F.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(te.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(F.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(F.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(F.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(F.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var n=this.helperText.isVisible(),i=this.helperText.getId();n&&i?this.adapter.setSelectAnchorAttr($.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr($.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},Kt.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(_);/**
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
 */var Wt={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Lt={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
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
 */var Lr=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Wt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Lt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Lt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(Lt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Lt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.getIsValidation=function(){return this.adapter.hasClass(Lt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(Lt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(Lt.HELPER_TEXT_VALIDATION_MSG);if(n){var i=this.adapter.hasClass(Lt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),r=!t||i;if(r){this.showToScreenReader(),t?this.adapter.removeAttr(Wt.ROLE):this.adapter.setAttr(Wt.ROLE,"alert");return}this.adapter.removeAttr(Wt.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Wt.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(Wt.ARIA_HIDDEN,"true")},e}(_);/**
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
 */var Dr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new Lr(n)},e}(b);/**
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
 */var Vn={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
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
 */var Un=["click","keydown"],Kn=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return Vn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=D(Un),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.registerInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=D(Un),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",Vn.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&this.adapter.notifyIconAction()},e}(_);/**
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
 */var Nr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){return t.listen(i,r)},deregisterInteractionHandler:function(i,r){return t.unlisten(i,r)},notifyIconAction:function(){return t.emit(Kn.strings.ICON_EVENT,{},!0)}};return new Kn(n)},e}(b);/**
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
 */var xr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,a,s){if(t===void 0&&(t=function(h){return new ln(h)}),n===void 0&&(n=function(h){return new cn(h)}),i===void 0&&(i=function(h){return new dn(h)}),r===void 0&&(r=function(h){return new Ei(h)}),a===void 0&&(a=function(h){return new Nr(h)}),s===void 0&&(s=function(h){return new Dr(h)}),this.selectAnchor=this.root.querySelector($.SELECT_ANCHOR_SELECTOR),this.selectedText=this.root.querySelector($.SELECTED_TEXT_SELECTOR),this.hiddenInput=this.root.querySelector($.HIDDEN_INPUT_SELECTOR),!this.selectedText)throw new Error("MDCSelect: Missing required element: The following selector must be present: "+("'"+$.SELECTED_TEXT_SELECTOR+"'"));if(this.selectAnchor.hasAttribute($.ARIA_CONTROLS)){var u=document.getElementById(this.selectAnchor.getAttribute($.ARIA_CONTROLS));u&&(this.helperText=s(u))}this.menuSetup(r);var l=this.root.querySelector($.LABEL_SELECTOR);this.label=l?t(l):null;var c=this.root.querySelector($.LINE_RIPPLE_SELECTOR);this.lineRipple=c?n(c):null;var E=this.root.querySelector($.OUTLINE_SELECTOR);this.outline=E?i(E):null;var p=this.root.querySelector($.LEADING_ICON_SELECTOR);p&&(this.leadingIcon=a(p)),this.root.classList.contains(F.OUTLINED)||(this.ripple=this.createRipple())},e.prototype.initialSyncWithDOM=function(){var t=this;if(this.handleFocus=function(){t.foundation.handleFocus()},this.handleBlur=function(){t.foundation.handleBlur()},this.handleClick=function(n){t.selectAnchor.focus(),t.foundation.handleClick(t.getNormalizedXCoordinate(n))},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleMenuItemAction=function(n){t.foundation.handleMenuItemAction(n.detail.index)},this.handleMenuOpened=function(){t.foundation.handleMenuOpened()},this.handleMenuClosed=function(){t.foundation.handleMenuClosed()},this.handleMenuClosing=function(){t.foundation.handleMenuClosing()},this.selectAnchor.addEventListener("focus",this.handleFocus),this.selectAnchor.addEventListener("blur",this.handleBlur),this.selectAnchor.addEventListener("click",this.handleClick),this.selectAnchor.addEventListener("keydown",this.handleKeydown),this.menu.listen(vt.CLOSED_EVENT,this.handleMenuClosed),this.menu.listen(vt.CLOSING_EVENT,this.handleMenuClosing),this.menu.listen(vt.OPENED_EVENT,this.handleMenuOpened),this.menu.listen(pt.SELECTED_EVENT,this.handleMenuItemAction),this.hiddenInput){if(this.hiddenInput.value){this.foundation.setValue(this.hiddenInput.value,!0),this.foundation.layout();return}this.hiddenInput.value=this.value}},e.prototype.destroy=function(){this.selectAnchor.removeEventListener("focus",this.handleFocus),this.selectAnchor.removeEventListener("blur",this.handleBlur),this.selectAnchor.removeEventListener("keydown",this.handleKeydown),this.selectAnchor.removeEventListener("click",this.handleClick),this.menu.unlisten(vt.CLOSED_EVENT,this.handleMenuClosed),this.menu.unlisten(vt.OPENED_EVENT,this.handleMenuOpened),this.menu.unlisten(pt.SELECTED_EVENT,this.handleMenuItemAction),this.menu.destroy(),this.ripple&&this.ripple.destroy(),this.outline&&this.outline.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.helperText&&this.helperText.destroy(),o.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),e.prototype.setValue=function(t,n){n===void 0&&(n=!1),this.foundation.setValue(t,n)},Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t,!0)},enumerable:!1,configurable:!0}),e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n=!1),this.foundation.setSelectedIndex(t,!0,n)},Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.getDisabled()},set:function(t){this.foundation.setDisabled(t),this.hiddenInput&&(this.hiddenInput.disabled=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useDefaultValidation",{set:function(t){this.foundation.setUseDefaultValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.foundation.getRequired()},set:function(t){this.foundation.setRequired(t)},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.foundation.layout()},e.prototype.layoutOptions=function(){this.foundation.layoutOptions(),this.menu.layout(),this.menuItemValues=this.menu.items.map(function(t){return t.getAttribute($.VALUE_ATTR)||""}),this.hiddenInput&&(this.hiddenInput.value=this.value)},e.prototype.getDefaultFoundation=function(){var t=f(f(f(f({},this.getSelectAdapterMethods()),this.getCommonAdapterMethods()),this.getOutlineAdapterMethods()),this.getLabelAdapterMethods());return new br(t,this.getFoundationMap())},e.prototype.menuSetup=function(t){this.menuElement=this.root.querySelector($.MENU_SELECTOR),this.menu=t(this.menuElement),this.menu.hasTypeahead=!0,this.menu.singleSelection=!0,this.menuItemValues=this.menu.items.map(function(n){return n.getAttribute($.VALUE_ATTR)||""})},e.prototype.createRipple=function(){var t=this,n=f(f({},K.createAdapter({root:this.selectAnchor})),{registerInteractionHandler:function(i,r){t.selectAnchor.addEventListener(i,r)},deregisterInteractionHandler:function(i,r){t.selectAnchor.removeEventListener(i,r)}});return new K(this.selectAnchor,new Ot(n))},e.prototype.getSelectAdapterMethods=function(){var t=this;return{getMenuItemAttr:function(n,i){return n.getAttribute(i)},setSelectedText:function(n){t.selectedText.textContent=n},isSelectAnchorFocused:function(){return document.activeElement===t.selectAnchor},getSelectAnchorAttr:function(n){return t.selectAnchor.getAttribute(n)},setSelectAnchorAttr:function(n,i){t.selectAnchor.setAttribute(n,i)},removeSelectAnchorAttr:function(n){t.selectAnchor.removeAttribute(n)},addMenuClass:function(n){t.menuElement.classList.add(n)},removeMenuClass:function(n){t.menuElement.classList.remove(n)},openMenu:function(){t.menu.open=!0},closeMenu:function(){t.menu.open=!1},getAnchorElement:function(){return t.root.querySelector($.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(n){t.menu.setAnchorElement(n)},setMenuAnchorCorner:function(n){t.menu.setAnchorCorner(n)},setMenuWrapFocus:function(n){t.menu.wrapFocus=n},getSelectedIndex:function(){var n=t.menu.selectedIndex;return n instanceof Array?n[0]:n},setSelectedIndex:function(n){t.menu.selectedIndex=n},focusMenuItemAtIndex:function(n){t.menu.items[n].focus()},getMenuItemCount:function(){return t.menu.items.length},getMenuItemValues:function(){return t.menuItemValues},getMenuItemTextAtIndex:function(n){return t.menu.getPrimaryTextAtIndex(n)},isTypeaheadInProgress:function(){return t.menu.typeaheadInProgress},typeaheadMatchItem:function(n,i){return t.menu.typeaheadMatchItem(n,i)}}},e.prototype.getCommonAdapterMethods=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},setRippleCenter:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)},activateBottomLine:function(){t.lineRipple&&t.lineRipple.activate()},deactivateBottomLine:function(){t.lineRipple&&t.lineRipple.deactivate()},notifyChange:function(n){t.hiddenInput&&(t.hiddenInput.value=n);var i=t.selectedIndex;t.emit($.CHANGE_EVENT,{value:n,index:i},!0)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)},closeOutline:function(){t.outline&&t.outline.closeNotch()}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{hasLabel:function(){return!!t.label},floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getNormalizedXCoordinate=function(t){var n=t.target.getBoundingClientRect(),i=this.isTouchEvent(t)?t.touches[0].clientX:t.clientX;return i-n.left},e.prototype.isTouchEvent=function(t){return!!t.touches},e.prototype.getFoundationMap=function(){return{helperText:this.helperText?this.helperText.foundationForSelect:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForSelect:void 0}},e}(b);/**
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
 */var R={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_CONTAINER:"mdc-slider__value-indicator-container",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},We={STEP_SIZE:1,MIN_RANGE:0,THUMB_UPDATE_MIN_PX:5},j={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step",DATA_MIN_RANGE:"data-min-range"},Wn={CHANGE:"MDCSlider:change",INPUT:"MDCSlider:input"},z={VAR_VALUE_INDICATOR_CARET_LEFT:"--slider-value-indicator-caret-left",VAR_VALUE_INDICATOR_CARET_RIGHT:"--slider-value-indicator-caret-right",VAR_VALUE_INDICATOR_CARET_TRANSFORM:"--slider-value-indicator-caret-transform",VAR_VALUE_INDICATOR_CONTAINER_LEFT:"--slider-value-indicator-container-left",VAR_VALUE_INDICATOR_CONTAINER_RIGHT:"--slider-value-indicator-container-right",VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM:"--slider-value-indicator-container-transform"};/**
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
 */var Xt;(function(o){o[o.ACTIVE=0]="ACTIVE",o[o.INACTIVE=1]="INACTIVE"})(Xt||(Xt={}));var d;(function(o){o[o.START=1]="START",o[o.END=2]="END"})(d||(d={}));/**
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
 */var De;(function(o){o.SLIDER_UPDATE="slider_update"})(De||(De={}));var Ge=typeof window<"u",Mr=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.initialStylesRemoved=!1,n.isDisabled=!1,n.isDiscrete=!1,n.step=We.STEP_SIZE,n.minRange=We.MIN_RANGE,n.hasTickMarks=!1,n.isRange=!1,n.thumb=null,n.downEventClientX=null,n.startThumbKnobWidth=0,n.endThumbKnobWidth=0,n.animFrame=new sn,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(){return 0},getValueIndicatorContainerWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(R.DISABLED),this.isDiscrete=this.adapter.hasClass(R.DISCRETE),this.hasTickMarks=this.adapter.hasClass(R.TICK_MARKS),this.isRange=this.adapter.hasClass(R.RANGE);var n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(j.INPUT_MIN,this.isRange?d.START:d.END),j.INPUT_MIN),i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(j.INPUT_MAX,d.END),j.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(j.INPUT_VALUE,d.END),j.INPUT_VALUE),a=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(j.INPUT_VALUE,d.START),j.INPUT_VALUE):n,s=this.adapter.getInputAttribute(j.INPUT_STEP,d.END),u=s?this.convertAttributeValueToNumber(s,j.INPUT_STEP):this.step,l=this.adapter.getAttribute(j.DATA_MIN_RANGE),c=l?this.convertAttributeValueToNumber(l,j.DATA_MIN_RANGE):this.minRange;this.validateProperties({min:n,max:i,value:r,valueStart:a,step:u,minRange:c}),this.min=n,this.max=i,this.value=r,this.valueStart=a,this.step=u,this.minRange=c,this.numDecimalPlaces=Gn(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=a,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(d.START)},this.inputEndChangeListener=function(){t.handleInputChange(d.END)},this.inputStartFocusListener=function(){t.handleInputFocus(d.START)},this.inputEndFocusListener=function(){t.handleInputFocus(d.END)},this.inputStartBlurListener=function(){t.handleInputBlur(d.START)},this.inputEndBlurListener=function(){t.handleInputBlur(d.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart+this.minRange)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+") + min range ("+this.minRange+")"));this.updateValue(t,d.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value-this.minRange)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+") - min range ("+this.minRange+")"));this.updateValue(t,d.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Gn(t),this.updateUI()},e.prototype.setMinRange=function(t){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");if(t<0)throw new Error("`minRange` must be non-negative. "+("Current value: "+t));if(this.value-this.valueStart<t)throw new Error("start thumb value ("+this.valueStart+") and end thumb value "+("("+this.value+") must differ by at least "+t+"."));this.minRange=t},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.getMinRange=function(){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");return this.minRange},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(R.DISABLED),this.isRange&&this.adapter.setInputAttribute(j.INPUT_DISABLED,"",d.START),this.adapter.setInputAttribute(j.INPUT_DISABLED,"",d.END)):(this.adapter.removeClass(R.DISABLED),this.isRange&&this.adapter.removeInputAttribute(j.INPUT_DISABLED,d.START),this.adapter.removeInputAttribute(j.INPUT_DISABLED,d.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var n=t===void 0?{}:t,i=n.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(d.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(d.END)),i||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=n;var i=this.mapClientXOnSliderScale(n);this.thumb=this.getThumbFromDownEvent(n,i),this.thumb!==null&&(this.handleDragStart(t,i,this.thumb),this.updateValue(i,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,i=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(n),this.thumb!==null){var r=this.mapClientXOnSliderScale(n);i||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){var t,n;if(!(this.isDisabled||this.thumb===null)){!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t)&&this.handleInputBlur(this.thumb);var i=this.thumb===d.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,r=this.thumb===d.START?this.valueStart:this.value;i!==r&&this.adapter.emitChangeEvent(r,this.thumb),this.adapter.emitDragEndEvent(r,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(R.THUMB_WITH_INDICATOR,d.START),this.adapter.addThumbClass(R.THUMB_WITH_INDICATOR,d.END))},e.prototype.handleThumbMouseleave=function(){var t,n;!this.isDiscrete||!this.isRange||!(!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t))&&(this.adapter.isInputFocused(d.START)||this.adapter.isInputFocused(d.END))||this.thumb||(this.adapter.removeThumbClass(R.THUMB_WITH_INDICATOR,d.START),this.adapter.removeThumbClass(R.THUMB_WITH_INDICATOR,d.END))},e.prototype.handleMousedownOrTouchstart=function(t){var n=this,i=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(i,this.moveListener);var r=function(){n.handleUp(),n.adapter.deregisterBodyEventHandler(i,n.moveListener),n.adapter.deregisterEventHandler("mouseup",r),n.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},e.prototype.handlePointerdown=function(t){var n=t.button===0;n&&(t.pointerId!=null&&this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t))},e.prototype.handleInputChange=function(t){var n=Number(this.adapter.getInputValue(t));t===d.START?this.setValueStart(n):this.setValue(n),this.adapter.emitChangeEvent(t===d.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===d.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(R.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(R.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===d.START?d.END:d.START;this.adapter.addThumbClass(R.THUMB_WITH_INDICATOR,n)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(R.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(R.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===d.START?d.END:d.START;this.adapter.removeThumbClass(R.THUMB_WITH_INDICATOR,n)}},e.prototype.handleDragStart=function(t,n,i){var r,a;this.adapter.emitDragStartEvent(n,i),this.adapter.focusInput(i),!((a=(r=this.adapter).shouldHideFocusStylesForPointerEvents)===null||a===void 0)&&a.call(r)&&this.handleInputFocus(i),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,n){if(!this.isRange)return d.END;var i=this.adapter.getThumbBoundingClientRect(d.START),r=this.adapter.getThumbBoundingClientRect(d.END),a=t>=i.left&&t<=i.right,s=t>=r.left&&t<=r.right;return a&&s?null:a?d.START:s?d.END:n<this.valueStart?d.START:n>this.value?d.END:n-this.valueStart<=this.value-n?d.START:d.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var n=Math.abs(this.downEventClientX-t)<We.THUMB_UPDATE_MIN_PX;if(n)return this.thumb;var i=t<this.downEventClientX;return i?this.adapter.isRTL()?d.END:d.START:this.adapter.isRTL()?d.START:d.END},e.prototype.updateUI=function(t){t?this.updateThumbAndInputAttributes(t):(this.updateThumbAndInputAttributes(d.START),this.updateThumbAndInputAttributes(d.END)),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(t){var n=this.isRange&&t===d.START?this.valueStart:this.value,i=String(n);this.adapter.setInputAttribute(j.INPUT_VALUE,i,t),this.isRange&&t===d.START?this.adapter.setInputAttribute(j.INPUT_MIN,String(n+this.minRange),d.END):this.isRange&&t===d.END&&this.adapter.setInputAttribute(j.INPUT_MAX,String(n-this.minRange),d.START),this.adapter.getInputValue(t)!==i&&this.adapter.setInputValue(i,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(j.ARIA_VALUETEXT,r(n,t),t)}},e.prototype.updateValueIndicatorUI=function(t){if(this.isDiscrete){var n=this.isRange&&t===d.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(n,t===d.START?d.START:d.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,d.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,n=(this.value-this.valueStart)/this.step+1,i=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(Xt.INACTIVE),a=Array.from({length:n}).fill(Xt.ACTIVE),s=Array.from({length:i}).fill(Xt.INACTIVE);this.adapter.updateTickMarks(r.concat(a).concat(s))}},e.prototype.mapClientXOnSliderScale=function(t){var n=t-this.rect.left,i=n/this.rect.width;this.adapter.isRTL()&&(i=1-i);var r=this.min+i*(this.max-this.min);return r===this.max||r===this.min?r:Number(this.quantize(r).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var n=Math.round((t-this.min)/this.step);return this.min+n*this.step},e.prototype.updateValue=function(t,n,i){var r=i===void 0?{}:i,a=r.emitInputEvent;if(t=this.clampValue(t,n),this.isRange&&n===d.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(n),a&&this.adapter.emitInputEvent(n===d.START?this.valueStart:this.value,n)},e.prototype.clampValue=function(t,n){t=Math.min(Math.max(t,this.min),this.max);var i=this.isRange&&n===d.START&&t>this.value-this.minRange;if(i)return this.value-this.minRange;var r=this.isRange&&n===d.END&&t<this.valueStart+this.minRange;return r?this.valueStart+this.minRange:t},e.prototype.updateThumbAndTrackUI=function(t){var n=this,i=this,r=i.max,a=i.min,s=(this.value-this.valueStart)/(r-a),u=s*this.rect.width,l=this.adapter.isRTL(),c=Ge?ne(window,"transform"):"transform";if(this.isRange){var E=this.adapter.isRTL()?(r-this.value)/(r-a)*this.rect.width:(this.valueStart-a)/(r-a)*this.rect.width,p=E+u;this.animFrame.request(De.SLIDER_UPDATE,function(){var h=!l&&t===d.START||l&&t!==d.START;h?(n.adapter.setTrackActiveStyleProperty("transform-origin","right"),n.adapter.setTrackActiveStyleProperty("left","auto"),n.adapter.setTrackActiveStyleProperty("right",n.rect.width-p+"px")):(n.adapter.setTrackActiveStyleProperty("transform-origin","left"),n.adapter.setTrackActiveStyleProperty("right","auto"),n.adapter.setTrackActiveStyleProperty("left",E+"px")),n.adapter.setTrackActiveStyleProperty(c,"scaleX("+s+")");var m=l?p:E,C=n.adapter.isRTL()?E:p;(t===d.START||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(c,"translateX("+m+"px)",d.START),n.alignValueIndicator(d.START,m)),(t===d.END||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(c,"translateX("+C+"px)",d.END),n.alignValueIndicator(d.END,C)),n.removeInitialStyles(l),n.updateOverlappingThumbsUI(m,C,t)})}else this.animFrame.request(De.SLIDER_UPDATE,function(){var h=l?n.rect.width-u:u;n.adapter.setThumbStyleProperty(c,"translateX("+h+"px)",d.END),n.alignValueIndicator(d.END,h),n.adapter.setTrackActiveStyleProperty(c,"scaleX("+s+")"),n.removeInitialStyles(l)})},e.prototype.alignValueIndicator=function(t,n){if(this.isDiscrete){var i=this.adapter.getThumbBoundingClientRect(t).width/2,r=this.adapter.getValueIndicatorContainerWidth(t),a=this.adapter.getBoundingClientRect().width;r/2>n+i?(this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_LEFT,i+"px",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"0",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):r/2>a-n+i?(this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_LEFT,"auto",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_RIGHT,i+"px",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(50%)",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"auto",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"0",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):(this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_LEFT,"50%",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"50%",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(z.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"translateX(-50%)",t))}},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var n=t?"right":"left";this.adapter.removeThumbStyleProperty(n,d.END),this.isRange&&this.adapter.removeThumbStyleProperty(n,d.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(this.isDiscrete){var n=Ge?ne(window,"transition"):"transition",i="none 0s ease 0s";this.adapter.setThumbStyleProperty(n,i,d.END),this.isRange&&this.adapter.setThumbStyleProperty(n,i,d.START),this.adapter.setTrackActiveStyleProperty(n,i),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(n,d.END),t.adapter.removeTrackActiveStyleProperty(n),t.isRange&&t.adapter.removeThumbStyleProperty(n,d.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,n,i){var r=!1;if(this.adapter.isRTL()){var a=t-this.startThumbKnobWidth/2,s=n+this.endThumbKnobWidth/2;r=s>=a}else{var u=t+this.startThumbKnobWidth/2,l=n-this.endThumbKnobWidth/2;r=u>=l}r?(this.adapter.addThumbClass(R.THUMB_TOP,i||d.END),this.adapter.removeThumbClass(R.THUMB_TOP,i===d.START?d.END:d.START)):(this.adapter.removeThumbClass(R.THUMB_TOP,d.START),this.adapter.removeThumbClass(R.THUMB_TOP,d.END))},e.prototype.convertAttributeValueToNumber=function(t,n){if(t===null)throw new Error("MDCSliderFoundation: `"+n+"` must be non-null.");var i=Number(t);if(isNaN(i))throw new Error("MDCSliderFoundation: `"+n+"` value is `"+t+"`, but must be a number.");return i},e.prototype.validateProperties=function(t){var n=t.min,i=t.max,r=t.value,a=t.valueStart,s=t.step,u=t.minRange;if(n>=i)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+n+", max: "+i+"]"));if(s<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+s));if(this.isRange){if(r<n||r>i||a<n||a>i)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+a+", end value: ")+(r+", min: "+n+", max: "+i+"]"));if(a>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+a+", end value: "+r+"]"));if(u<0)throw new Error("MDCSliderFoundation: minimum range must be non-negative. "+("Current min range: "+u));if(r-a<u)throw new Error("MDCSliderFoundation: start value and end value must differ by at least "+(u+". Current values: [start value: "+a+", ")+("end value: "+r+"]"));var l=(a-n)/s,c=(r-n)/s;if(!Number.isInteger(parseFloat(l.toFixed(6)))||!Number.isInteger(parseFloat(c.toFixed(6))))throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value ("+s+"). Current values: [start value: ")+(a+", end value: "+r+", min: "+n+"]"))}else{if(r<n||r>i)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current values: [value: "+r+", min: "+n+", max: "+i+"]"));var c=(r-n)/s;if(!Number.isInteger(parseFloat(c.toFixed(6))))throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value ("+s+"). Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(d.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(d.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(d.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(d.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(d.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(d.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(d.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(d.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(d.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(d.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(d.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(d.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(d.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(d.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(d.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(d.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(d.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(d.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(d.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(d.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=Ge&&!!window.PointerEvent&&!wr(),e}(_);function wr(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Gn(o){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(o));if(!e)return 0;var t=e[1]||"",n=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(n))}/**
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
 */var Pr=function(o){T(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.skipInitialUIUpdate=!1,t.valueToAriaValueTextFn=null,t}return e.attachTo=function(t,n){return n===void 0&&(n={}),new e(t,void 0,n)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(i){return t.root.classList.contains(i)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addThumbClass:function(i,r){t.getThumbEl(r).classList.add(i)},removeThumbClass:function(i,r){t.getThumbEl(r).classList.remove(i)},getAttribute:function(i){return t.root.getAttribute(i)},getInputValue:function(i){return t.getInput(i).value},setInputValue:function(i,r){t.getInput(r).value=i},getInputAttribute:function(i,r){return t.getInput(r).getAttribute(i)},setInputAttribute:function(i,r,a){t.getInput(a).setAttribute(i,r)},removeInputAttribute:function(i,r){t.getInput(r).removeAttribute(i)},focusInput:function(i){t.getInput(i).focus()},isInputFocused:function(i){return t.getInput(i)===document.activeElement},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(i){return t.getThumbEl(i).querySelector("."+R.THUMB_KNOB).getBoundingClientRect().width},getThumbBoundingClientRect:function(i){return t.getThumbEl(i).getBoundingClientRect()},getBoundingClientRect:function(){return t.root.getBoundingClientRect()},getValueIndicatorContainerWidth:function(i){return t.getThumbEl(i).querySelector("."+R.VALUE_INDICATOR_CONTAINER).getBoundingClientRect().width},isRTL:function(){return getComputedStyle(t.root).direction==="rtl"},setThumbStyleProperty:function(i,r,a){t.getThumbEl(a).style.setProperty(i,r)},removeThumbStyleProperty:function(i,r){t.getThumbEl(r).style.removeProperty(i)},setTrackActiveStyleProperty:function(i,r){t.trackActive.style.setProperty(i,r)},removeTrackActiveStyleProperty:function(i){t.trackActive.style.removeProperty(i)},setValueIndicatorText:function(i,r){var a=t.getThumbEl(r).querySelector("."+R.VALUE_INDICATOR_TEXT);a.textContent=String(i)},getValueToAriaValueTextFn:function(){return t.valueToAriaValueTextFn},updateTickMarks:function(i){var r=t.root.querySelector("."+R.TICK_MARKS_CONTAINER);if(!r){r=document.createElement("div"),r.classList.add(R.TICK_MARKS_CONTAINER);var a=t.root.querySelector("."+R.TRACK);a.appendChild(r)}if(i.length!==r.children.length){for(;r.firstChild;)r.removeChild(r.firstChild);t.addTickMarks(r,i)}else t.updateTickMarks(r,i)},setPointerCapture:function(i){t.root.setPointerCapture(i)},emitChangeEvent:function(i,r){t.emit(Wn.CHANGE,{value:i,thumb:r})},emitInputEvent:function(i,r){t.emit(Wn.INPUT,{value:i,thumb:r})},emitDragStartEvent:function(i,r){t.getRipple(r).activate()},emitDragEndEvent:function(i,r){t.getRipple(r).deactivate()},registerEventHandler:function(i,r){t.listen(i,r)},deregisterEventHandler:function(i,r){t.unlisten(i,r)},registerThumbEventHandler:function(i,r,a){t.getThumbEl(i).addEventListener(r,a)},deregisterThumbEventHandler:function(i,r,a){t.getThumbEl(i).removeEventListener(r,a)},registerInputEventHandler:function(i,r,a){t.getInput(i).addEventListener(r,a)},deregisterInputEventHandler:function(i,r,a){t.getInput(i).removeEventListener(r,a)},registerBodyEventHandler:function(i,r){document.body.addEventListener(i,r)},deregisterBodyEventHandler:function(i,r){document.body.removeEventListener(i,r)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new Mr(n)},e.prototype.initialize=function(t){var n=t===void 0?{}:t,i=n.skipInitialUIUpdate;this.inputs=[].slice.call(this.root.querySelectorAll("."+R.INPUT)),this.thumbs=[].slice.call(this.root.querySelectorAll("."+R.THUMB)),this.trackActive=this.root.querySelector("."+R.TRACK_ACTIVE),this.ripples=this.createRipples(),i&&(this.skipInitialUIUpdate=!0)},e.prototype.initialSyncWithDOM=function(){this.foundation.layout({skipUpdateUI:this.skipInitialUIUpdate})},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getValueStart=function(){return this.foundation.getValueStart()},e.prototype.setValueStart=function(t){this.foundation.setValueStart(t)},e.prototype.getValue=function(){return this.foundation.getValue()},e.prototype.setValue=function(t){this.foundation.setValue(t)},e.prototype.getDisabled=function(){return this.foundation.getDisabled()},e.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},e.prototype.setValueToAriaValueTextFn=function(t){this.valueToAriaValueTextFn=t},e.prototype.getThumbEl=function(t){return t===d.END?this.thumbs[this.thumbs.length-1]:this.thumbs[0]},e.prototype.getInput=function(t){return t===d.END?this.inputs[this.inputs.length-1]:this.inputs[0]},e.prototype.getRipple=function(t){return t===d.END?this.ripples[this.ripples.length-1]:this.ripples[0]},e.prototype.addTickMarks=function(t,n){for(var i=document.createDocumentFragment(),r=0;r<n.length;r++){var a=document.createElement("div"),s=n[r]===Xt.ACTIVE?R.TICK_MARK_ACTIVE:R.TICK_MARK_INACTIVE;a.classList.add(s),i.appendChild(a)}t.appendChild(i)},e.prototype.updateTickMarks=function(t,n){for(var i=Array.from(t.children),r=0;r<i.length;r++)n[r]===Xt.ACTIVE?(i[r].classList.add(R.TICK_MARK_ACTIVE),i[r].classList.remove(R.TICK_MARK_INACTIVE)):(i[r].classList.add(R.TICK_MARK_INACTIVE),i[r].classList.remove(R.TICK_MARK_ACTIVE))},e.prototype.createRipples=function(){for(var t=[],n=[].slice.call(this.root.querySelectorAll("."+R.THUMB)),i=function(s){var u=n[s],l=r.inputs[s],c=f(f({},K.createAdapter(r)),{addClass:function(p){u.classList.add(p)},computeBoundingRect:function(){return u.getBoundingClientRect()},deregisterInteractionHandler:function(p,h){l.removeEventListener(p,h)},isSurfaceActive:function(){return It(l,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(p,h){l.addEventListener(p,h,q())},removeClass:function(p){u.classList.remove(p)},updateCssVariable:function(p,h){u.style.setProperty(p,h)}}),E=new K(u,new Ot(c));E.unbounded=!0,t.push(E)},r=this,a=0;a<n.length;a++)i(a);return t},e}(b);/**
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
 */var Nt={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},dt={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},At={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var Hr=At.ARIA_LIVE_DELAY_MS,jn=dt.ARIA_LIVE_LABEL_TEXT_ATTR;function Fr(o,e){e===void 0&&(e=o);var t=o.getAttribute("aria-live"),n=e.textContent.trim();if(!(!n||!t)){o.setAttribute("aria-live","off"),e.textContent="";var i=document.createElement("span");i.setAttribute("style","display: inline-block; width: 0; height: 1px;"),i.textContent=" ",e.appendChild(i),e.setAttribute(jn,n),setTimeout(function(){o.setAttribute("aria-live",t),e.removeAttribute(jn),e.textContent=n},Hr)}}/**
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
 */var Xn=Nt.OPENING,Yn=Nt.OPEN,qn=Nt.CLOSING,Br=dt.REASON_ACTION,je=dt.REASON_DISMISS,kr=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.opened=!1,n.animationFrame=0,n.animationTimer=0,n.autoDismissTimer=0,n.autoDismissTimeoutMs=At.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Xn),this.adapter.removeClass(Yn),this.adapter.removeClass(qn)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(qn),this.adapter.addClass(Xn),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(Yn),t.animationTimer=setTimeout(function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),n!==At.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(je)},n))},At.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Nt.CLOSING),this.adapter.removeClass(Nt.OPEN),this.adapter.removeClass(Nt.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},At.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var n=At.MIN_AUTO_DISMISS_TIMEOUT_MS,i=At.MAX_AUTO_DISMISS_TIMEOUT_MS,r=At.INDETERMINATE;if(t===At.INDETERMINATE||t<=i&&t>=n)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+n+"–"+i+`
        (or `+r+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.getCloseOnEscape()&&this.close(je)},e.prototype.handleActionButtonClick=function(t){this.close(Br)},e.prototype.handleActionIconClick=function(t){this.close(je)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Nt.OPENING),this.adapter.removeClass(Nt.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e}(_);/**
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
 */var Vr=dt.SURFACE_SELECTOR,Ur=dt.LABEL_SELECTOR,zn=dt.ACTION_SELECTOR,Kr=dt.DISMISS_SELECTOR,Wr=dt.OPENING_EVENT,Gr=dt.OPENED_EVENT,jr=dt.CLOSING_EVENT,Xr=dt.CLOSED_EVENT,Yr=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(){return Fr}),this.announce=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(Vr),this.labelEl=this.root.querySelector(Ur),this.actionEl=this.root.querySelector(zn),this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.handleSurfaceClick=function(n){var i=n.target;t.isActionButton(i)?t.foundation.handleActionButtonClick(n):t.isActionIcon(i)&&t.foundation.handleActionIconClick(n)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(i){return t.emit(Xr,i?{reason:i}:{})},notifyClosing:function(i){return t.emit(jr,i?{reason:i}:{})},notifyOpened:function(){return t.emit(Gr,{})},notifyOpening:function(){return t.emit(Wr,{})},removeClass:function(i){return t.root.classList.remove(i)}};return new kr(n)},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:!1,configurable:!0}),e.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)},e.prototype.isActionButton=function(t){return!!mt(t,zn)},e.prototype.isActionIcon=function(t){return!!mt(t,Kr)},e}(b);/**
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
 */var jt;(function(o){o.PROCESSING="mdc-switch--processing",o.SELECTED="mdc-switch--selected",o.UNSELECTED="mdc-switch--unselected"})(jt||(jt={}));var Ne;(function(o){o.RIPPLE=".mdc-switch__ripple"})(Ne||(Ne={}));/**
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
 */function qr(o,e,t){var n=zr(o,e),i=n.getObservers(e);return i.push(t),function(){i.splice(i.indexOf(t),1)}}var Se=new WeakMap;function zr(o,e){var t=new Map;Se.has(o)||Se.set(o,{isEnabled:!0,getObservers:function(l){var c=t.get(l)||[];return t.has(l)||t.set(l,c),c},installedProperties:new Set});var n=Se.get(o);if(n.installedProperties.has(e))return n;var i=$r(o,e)||{configurable:!0,enumerable:!0,value:o[e],writable:!0},r=f({},i),a=i.get,s=i.set;if("value"in i){delete r.value,delete r.writable;var u=i.value;a=function(){return u},i.writable&&(s=function(l){u=l})}return a&&(r.get=function(){return a.call(this)}),s&&(r.set=function(l){var c,E,p=a?a.call(this):l;if(s.call(this,l),n.isEnabled&&(!a||l!==p))try{for(var h=D(n.getObservers(e)),m=h.next();!m.done;m=h.next()){var C=m.value;C(l,p)}}catch(y){c={error:y}}finally{try{m&&!m.done&&(E=h.return)&&E.call(h)}finally{if(c)throw c.error}}}),n.installedProperties.add(e),Object.defineProperty(o,e,r),n}function $r(o,e){for(var t=o,n;t&&(n=Object.getOwnPropertyDescriptor(t,e),!n);)t=Object.getPrototypeOf(t);return n}function Qr(o,e){var t=Se.get(o);t&&(t.isEnabled=e)}/**
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
 */var Zr=function(o){T(e,o);function e(t){var n=o.call(this,t)||this;return n.unobserves=new Set,n}return e.prototype.destroy=function(){o.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,n){var i,r,a=this,s=[];try{for(var u=D(Object.keys(n)),l=u.next();!l.done;l=u.next()){var c=l.value,E=n[c].bind(this);s.push(this.observeProperty(t,c,E))}}catch(h){i={error:h}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(i)throw i.error}}var p=function(){var h,m;try{for(var C=D(s),y=C.next();!y.done;y=C.next()){var S=y.value;S()}}catch(N){h={error:N}}finally{try{y&&!y.done&&(m=C.return)&&m.call(C)}finally{if(h)throw h.error}}a.unobserves.delete(p)};return this.unobserves.add(p),p},e.prototype.observeProperty=function(t,n,i){return qr(t,n,i)},e.prototype.setObserversEnabled=function(t,n){Qr(t,n)},e.prototype.unobserve=function(){var t,n;try{for(var i=D(ii([],_e(this.unobserves))),r=i.next();!r.done;r=i.next()){var a=r.value;a()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(_);/**
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
 */var Jr=function(o){T(e,o);function e(t){var n=o.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(Zr),to=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.init=function(){o.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(jt.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(jt.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,jt.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,jt.SELECTED),this.toggleClass(!this.adapter.state.selected,jt.UNSELECTED)},e.prototype.toggleClass=function(t,n){t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(Jr);/**
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
 */var eo=function(o){T(e,o);function e(t,n){var i=o.call(this,t,n)||this;return i.root=t,i}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.ripple=new K(this.root,this.createRippleFoundation())},e.prototype.initialSyncWithDOM=function(){var t=this.root.querySelector(Ne.RIPPLE);if(!t)throw new Error("Switch "+Ne.RIPPLE+" element is required.");this.rippleElement=t,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},e.prototype.getDefaultFoundation=function(){return new to(this.createAdapter())},e.prototype.createAdapter=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},hasClass:function(n){return t.root.classList.contains(n)},isDisabled:function(){return t.root.disabled},removeClass:function(n){t.root.classList.remove(n)},setAriaChecked:function(n){return t.root.setAttribute("aria-checked",n)},setDisabled:function(n){t.root.disabled=n},state:this}},e.prototype.createRippleFoundation=function(){return new Ot(this.createRippleAdapter())},e.prototype.createRippleAdapter=function(){var t=this;return f(f({},K.createAdapter(this)),{computeBoundingRect:function(){return t.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},e}(b);/**
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
 */var mi={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},no={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var hn=function(){function o(e){this.adapter=e}return o}();/**
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
 */var io=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(hn);/**
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
 */var ro=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(hn);/**
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
 */var oo=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(hn);/**
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
 */var Xe=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return no},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=_e(i.split(","),6);r[0],r[1],r[2],r[3];var a=r[4];return r[5],parseFloat(a)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),a=r-n;return{finalScrollPosition:r,scrollDelta:a}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new ro(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),a=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),a===n?new oo(this.adapter):new io(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(_);/**
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
 */var Ye;function ao(o,e){if(e===void 0&&(e=!0),e&&typeof Ye<"u")return Ye;var t=o.createElement("div");t.classList.add(mi.SCROLL_TEST),o.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return o.body.removeChild(t),e&&(Ye=n),n}/**
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
 */var so=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(Xe.strings.AREA_SELECTOR),this.content=this.root.querySelector(Xe.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.area.addEventListener("wheel",this.handleInteraction,q()),this.area.addEventListener("touchstart",this.handleInteraction,q()),this.area.addEventListener("pointerdown",this.handleInteraction,q()),this.area.addEventListener("mousedown",this.handleInteraction,q()),this.area.addEventListener("keydown",this.handleInteraction,q()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,q()),this.area.removeEventListener("touchstart",this.handleInteraction,q()),this.area.removeEventListener("pointerdown",this.handleInteraction,q()),this.area.removeEventListener("mousedown",this.handleInteraction,q()),this.area.removeEventListener("keydown",this.handleInteraction,q()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,n={eventTargetMatchesSelector:function(i,r){return It(i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addScrollAreaClass:function(i){t.area.classList.add(i)},setScrollAreaStyleProperty:function(i,r){t.area.style.setProperty(i,r)},setScrollContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)},getScrollContentStyleValue:function(i){return window.getComputedStyle(t.content).getPropertyValue(i)},setScrollAreaScrollLeft:function(i){return t.area.scrollLeft=i},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return ao(document)}};return new Xe(n)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(b);/**
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
 */var uo={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},lo={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var Et=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return uo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return lo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(_);/**
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
 */var co=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(Et.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(Et.cssClasses.ACTIVE)},e}(Et);/**
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
 */var ho=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(Et.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(Et.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(Et.cssClasses.NO_TRANSITION),this.adapter.addClass(Et.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(Et.cssClasses.ACTIVE)},e}(Et);/**
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
 */var fo=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(Et.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)}};return this.root.classList.contains(Et.cssClasses.FADE)?new co(n):new ho(n)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(b);/**
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
 */var Ae={ACTIVE:"mdc-tab--active"},ce={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var Zt=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(Ae.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(Ae.ACTIVE),this.adapter.setAttr(ce.ARIA_SELECTED,"true"),this.adapter.setAttr(ce.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Ae.ACTIVE),this.adapter.setAttr(ce.ARIA_SELECTED,"false"),this.adapter.setAttr(ce.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(_);/**
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
 */var po=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(a,s){return new K(a,s)}),n===void 0&&(n=function(a){return new fo(a)}),this.id=this.root.id;var i=new Ot(K.createAdapter(this));this.ripple=t(this.root,i);var r=this.root.querySelector(Zt.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=n(r),this.content=this.root.querySelector(Zt.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={setAttr:function(i,r){return t.root.setAttribute(i,r)},addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},activateIndicator:function(i){t.tabIndicator.activate(i)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){return t.emit(Zt.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){return t.root.focus()}};return new Zt(n)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(b);/**
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
 */var X={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Tt={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var Yt=new Set;Yt.add(X.ARROW_LEFT_KEY);Yt.add(X.ARROW_RIGHT_KEY);Yt.add(X.END_KEY);Yt.add(X.HOME_KEY);Yt.add(X.ENTER_KEY);Yt.add(X.SPACE_KEY);var qt=new Map;qt.set(Tt.ARROW_LEFT_KEYCODE,X.ARROW_LEFT_KEY);qt.set(Tt.ARROW_RIGHT_KEYCODE,X.ARROW_RIGHT_KEY);qt.set(Tt.END_KEYCODE,X.END_KEY);qt.set(Tt.HOME_KEYCODE,X.HOME_KEY);qt.set(Tt.ENTER_KEYCODE,X.ENTER_KEY);qt.set(Tt.SPACE_KEYCODE,X.SPACE_KEY);var Ci=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return X},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Tt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(r);else{var i=this.determineTargetFromKey(r,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,a=n===X.END_KEY,s=n===X.ARROW_LEFT_KEY&&!i||n===X.ARROW_RIGHT_KEY&&i,u=n===X.ARROW_RIGHT_KEY&&!i||n===X.ARROW_LEFT_KEY&&i,l=t;return a?l=r:s?l-=1:u?l+=1:l=0,l<0?l=r:l>r&&(l=0),l},e.prototype.calculateScrollIncrement=function(t,n,i,r){var a=this.adapter.getTabDimensionsAtIndex(n),s=a.contentLeft-i-r,u=a.contentRight-i,l=u-Tt.EXTRA_SCROLL_AMOUNT,c=s+Tt.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(l,0):Math.max(c,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,a){var s=this.adapter.getTabDimensionsAtIndex(n),u=a-s.contentLeft-i,l=a-s.contentRight-i-r,c=l+Tt.EXTRA_SCROLL_AMOUNT,E=u-Tt.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(c,0):Math.min(E,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var a=n.rootLeft-i,s=n.rootRight-i-r,u=a+s,l=a<0||u<0,c=s>0||u>0;return l?t-1:c?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,a){var s=a-n.rootLeft-r-i,u=a-n.rootRight-i,l=s+u,c=s>0||l>0,E=u<0||l<0;return c?t+1:E?t-1:-1},e.prototype.getKeyFromEvent=function(t){return Yt.has(t.key)?t.key:qt.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===X.SPACE_KEY||t===X.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(a)){var s=this.calculateScrollIncrement(t,a,n,i);this.adapter.incrementScroll(s)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.adapter.getScrollContentWidth(),s=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,a);if(this.indexIsInRange(s)){var u=this.calculateScrollIncrementRTL(t,s,n,i,a);this.adapter.incrementScroll(u)}},e}(_);/**
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
 */var qe=Ci.strings,Eo=0,To=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var n,i;try{for(var r=D(this.tabList),a=r.next();!a.done;a=r.next()){var s=a.value;s.focusOnActivate=t}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new po(i)}),n===void 0&&(n=function(i){return new so(i)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(n)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(i){t.foundation.handleTabInteraction(i)},this.handleKeyDown=function(i){t.foundation.handleKeyDown(i)},this.listen(Zt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var n=0;n<this.tabList.length;n++)if(this.tabList[n].active){this.scrollIntoView(n);break}},e.prototype.destroy=function(){var t,n;o.prototype.destroy.call(this),this.unlisten(Zt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var i=D(this.tabList),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,n={scrollTo:function(i){t.tabScroller.scrollTo(i)},incrementScroll:function(i){t.tabScroller.incrementScroll(i)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(i){t.foundation.activateTab(i)},activateTabAtIndex:function(i,r){t.tabList[i].activate(r)},deactivateTabAtIndex:function(i){t.tabList[i].deactivate()},focusTabAtIndex:function(i){t.tabList[i].focus()},getTabIndicatorClientRectAtIndex:function(i){return t.tabList[i].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(i){return t.tabList[i].computeDimensions()},getPreviousActiveTabIndex:function(){for(var i=0;i<t.tabList.length;i++)if(t.tabList[i].active)return i;return-1},getFocusedTabIndex:function(){var i=t.getTabElements(),r=document.activeElement;return i.indexOf(r)},getIndexOfTabById:function(i){for(var r=0;r<t.tabList.length;r++)if(t.tabList[r].id===i)return r;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(i){return t.emit(qe.TAB_ACTIVATED_EVENT,{index:i},!0)}};return new Ci(n)},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return[].slice.call(this.root.querySelectorAll(qe.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map(function(n){return n.id=n.id||"mdc-tab-"+ ++Eo,t(n)})},e.prototype.instantiatetabScroller=function(t){var n=this.root.querySelector(qe.TAB_SCROLLER_SELECTOR);return n?t(n):null},e}(b);/**
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
 */var Ai={ROOT:"mdc-text-field-character-counter"},mo={ROOT_SELECTOR:"."+Ai.ROOT};/**
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
 */var gi=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ai},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return mo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n)},e}(_);/**
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
 */var Co=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={setContent:function(i){t.root.textContent=i}};return new gi(n)},e}(b);/**
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
 */var ft={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},Oe={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},$n={LABEL_SCALE:.75},Ao=["pattern","min","max","required","step","minlength","maxlength"],go=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Qn=["mousedown","touchstart"],Zn=["click","keydown"],Io=function(o){T(e,o);function e(t,n){n===void 0&&(n={});var i=o.call(this,f(f({},e.defaultAdapter),t))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.valid=!0,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=n.helperText,i.characterCounter=n.characterCounter,i.leadingIcon=n.leadingIcon,i.trailingIcon=n.trailingIcon,i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(r){i.setTransformOrigin(r)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(r){i.handleValidationAttributeChange(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Oe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return $n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return go.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,i,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var a=D(Qn),s=a.next();!s.done;s=a.next()){var u=s.value;this.adapter.registerInputInteractionHandler(u,this.setPointerXOffset)}}catch(E){t={error:E}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var l=D(Zn),c=l.next();!c.done;c=l.next()){var u=c.value;this.adapter.registerTextFieldInteractionHandler(u,this.textFieldInteractionHandler)}}catch(E){i={error:E}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,i,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var a=D(Qn),s=a.next();!s.done;s=a.next()){var u=s.value;this.adapter.deregisterInputInteractionHandler(u,this.setPointerXOffset)}}catch(E){t={error:E}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var l=D(Zn),c=l.next();!c.done;c=l.next()){var u=c.value;this.adapter.deregisterTextFieldInteractionHandler(u,this.textFieldInteractionHandler)}}catch(E){i={error:E}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(i){return Ao.indexOf(i)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*$n.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,i=n?n[0]:t,r=i.target.getBoundingClientRect(),a=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(a)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var i=this.helperText.isValidation();if(!i)return;var r=this.helperText.isVisible(),a=this.helperText.getId();r&&a?this.adapter.setInputAttr(ft.ARIA_DESCRIBEDBY,a):this.adapter.removeInputAttr(ft.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(_);/**
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
 */var gt={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Dt={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+gt.ROOT};/**
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
 */var Ii=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Dt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(gt.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(gt.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(gt.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(gt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(gt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(gt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Dt.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(gt.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(gt.HELPER_TEXT_VALIDATION_MSG),r=i&&!t;r?(this.showToScreenReader(),this.adapter.getAttr(Dt.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Dt.ROLE,"alert")):this.adapter.removeAttr(Dt.ROLE),!n&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Dt.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(Dt.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(Dt.ROLE,"alert")})},e}(_);/**
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
 */var vo=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new Ii(n)},e}(b);/**
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
 */var Jn={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},yo={ROOT:"mdc-text-field__icon"};/**
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
 */var ti=["click","keydown"],ei=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return Jn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return yo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=D(ti),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.registerInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=D(ti),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.interactionHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",Jn.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(_);/**
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
 */var So=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){return t.root.setAttribute(i,r)},removeAttr:function(i){return t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){return t.listen(i,r)},deregisterInteractionHandler:function(i,r){return t.unlisten(i,r)},notifyIconAction:function(){return t.emit(ei.strings.ICON_EVENT,{},!0)}};return new ei(n)},e}(b);/**
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
 */var Oo=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,a,s,u){t===void 0&&(t=function(P,w){return new K(P,w)}),n===void 0&&(n=function(P){return new cn(P)}),i===void 0&&(i=function(P){return new vo(P)}),r===void 0&&(r=function(P){return new Co(P)}),a===void 0&&(a=function(P){return new So(P)}),s===void 0&&(s=function(P){return new ln(P)}),u===void 0&&(u=function(P){return new dn(P)}),this.input=this.root.querySelector(ft.INPUT_SELECTOR);var l=this.root.querySelector(ft.LABEL_SELECTOR);this.label=l?s(l):null;var c=this.root.querySelector(ft.LINE_RIPPLE_SELECTOR);this.lineRipple=c?n(c):null;var E=this.root.querySelector(ft.OUTLINE_SELECTOR);this.outline=E?u(E):null;var p=Ii.strings,h=this.root.nextElementSibling,m=h&&h.classList.contains(Oe.HELPER_LINE),C=m&&h&&h.querySelector(p.ROOT_SELECTOR);this.helperText=C?i(C):null;var y=gi.strings,S=this.root.querySelector(y.ROOT_SELECTOR);!S&&m&&h&&(S=h.querySelector(y.ROOT_SELECTOR)),this.characterCounter=S?r(S):null;var N=this.root.querySelector(ft.LEADING_ICON_SELECTOR);this.leadingIcon=N?a(N):null;var k=this.root.querySelector(ft.TRAILING_ICON_SELECTOR);this.trailingIcon=k?a(k):null,this.prefix=this.root.querySelector(ft.PREFIX_SELECTOR),this.suffix=this.root.querySelector(ft.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),o.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=f(f(f(f(f({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new Io(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},registerTextFieldInteractionHandler:function(n,i){t.listen(n,i)},deregisterTextFieldInteractionHandler:function(n,i){t.unlisten(n,i)},registerValidationAttributeChangeHandler:function(n){var i=function(s){return s.map(function(u){return u.attributeName}).filter(function(u){return u})},r=new MutationObserver(function(s){return n(i(s))}),a={attributes:!0};return r.observe(t.input,a),r},deregisterValidationAttributeChangeHandler:function(n){n.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(n,i){t.input.setAttribute(n,i)},removeInputAttr:function(n){t.input.removeAttribute(n)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(n,i){t.input.addEventListener(n,i,q())},deregisterInputInteractionHandler:function(n,i){t.input.removeEventListener(n,i,q())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return!!t.label},shakeLabel:function(n){t.label&&t.label.shake(n)},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var n=this,i=this.root.classList.contains(Oe.TEXTAREA),r=this.root.classList.contains(Oe.OUTLINED);if(i||r)return null;var a=f(f({},K.createAdapter(this)),{isSurfaceActive:function(){return It(n.input,":active")},registerInteractionHandler:function(s,u){n.input.addEventListener(s,u,q())},deregisterInteractionHandler:function(s,u){n.input.removeEventListener(s,u,q())}});return t(this.root,new Ot(a))},e}(b);/**
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
 */var et;(function(o){o.RICH="mdc-tooltip--rich",o.SHOWN="mdc-tooltip--shown",o.SHOWING="mdc-tooltip--showing",o.SHOWING_TRANSITION="mdc-tooltip--showing-transition",o.HIDE="mdc-tooltip--hide",o.HIDE_TRANSITION="mdc-tooltip--hide-transition",o.MULTILINE_TOOLTIP="mdc-tooltip--multiline",o.SURFACE="mdc-tooltip__surface",o.SURFACE_ANIMATION="mdc-tooltip__surface-animation",o.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",o.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom"})(et||(et={}));var J={BOUNDED_ANCHOR_GAP:4,UNBOUNDED_ANCHOR_GAP:8,MIN_VIEWPORT_TOOLTIP_THRESHOLD:8,HIDE_DELAY_MS:600,SHOW_DELAY_MS:500,MIN_HEIGHT:24,MAX_WIDTH:200,CARET_INDENTATION:24,ANIMATION_SCALE:.8},ge={ARIA_EXPANDED:"aria-expanded",ARIA_HASPOPUP:"aria-haspopup",PERSISTENT:"data-mdc-tooltip-persistent",SCROLLABLE_ANCESTOR:"tooltip-scrollable-ancestor",HAS_CARET:"data-mdc-tooltip-has-caret"},Ro={HIDDEN:"MDCTooltip:hidden"},Jt;(function(o){o[o.DETECTED=0]="DETECTED",o[o.START=1]="START",o[o.CENTER=2]="CENTER",o[o.END=3]="END"})(Jt||(Jt={}));var Ee;(function(o){o[o.DETECTED=0]="DETECTED",o[o.ABOVE=1]="ABOVE",o[o.BELOW=2]="BELOW"})(Ee||(Ee={}));var en;(function(o){o[o.BOUNDED=0]="BOUNDED",o[o.UNBOUNDED=1]="UNBOUNDED"})(en||(en={}));var g={LEFT:"left",RIGHT:"right",CENTER:"center",TOP:"top",BOTTOM:"bottom"},O;(function(o){o[o.DETECTED=0]="DETECTED",o[o.ABOVE_START=1]="ABOVE_START",o[o.ABOVE_CENTER=2]="ABOVE_CENTER",o[o.ABOVE_END=3]="ABOVE_END",o[o.TOP_SIDE_START=4]="TOP_SIDE_START",o[o.CENTER_SIDE_START=5]="CENTER_SIDE_START",o[o.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",o[o.TOP_SIDE_END=7]="TOP_SIDE_END",o[o.CENTER_SIDE_END=8]="CENTER_SIDE_END",o[o.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",o[o.BELOW_START=10]="BELOW_START",o[o.BELOW_CENTER=11]="BELOW_CENTER",o[o.BELOW_END=12]="BELOW_END"})(O||(O={}));var Y;(function(o){o[o.ABOVE=1]="ABOVE",o[o.BELOW=2]="BELOW",o[o.SIDE_TOP=3]="SIDE_TOP",o[o.SIDE_CENTER=4]="SIDE_CENTER",o[o.SIDE_BOTTOM=5]="SIDE_BOTTOM"})(Y||(Y={}));var L;(function(o){o[o.START=1]="START",o[o.CENTER=2]="CENTER",o[o.END=3]="END",o[o.SIDE_START=4]="SIDE_START",o[o.SIDE_END=5]="SIDE_END"})(L||(L={}));/**
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
 */var _o=et.RICH,ze=et.SHOWN,$e=et.SHOWING,Ie=et.SHOWING_TRANSITION,de=et.HIDE,ve=et.HIDE_TRANSITION,bo=et.MULTILINE_TOOLTIP,nn;(function(o){o.POLL_ANCHOR="poll_anchor"})(nn||(nn={}));var ni=typeof window<"u",Lo=function(o){T(e,o);function e(t){var n=o.call(this,f(f({},e.defaultAdapter),t))||this;return n.tooltipShown=!1,n.anchorGap=J.BOUNDED_ANCHOR_GAP,n.xTooltipPos=Jt.DETECTED,n.yTooltipPos=Ee.DETECTED,n.tooltipPositionWithCaret=O.DETECTED,n.minViewportTooltipThreshold=J.MIN_VIEWPORT_TOOLTIP_THRESHOLD,n.hideDelayMs=J.HIDE_DELAY_MS,n.showDelayMs=J.SHOW_DELAY_MS,n.anchorRect=null,n.parentRect=null,n.frameId=null,n.hideTimeout=null,n.showTimeout=null,n.addAncestorScrollEventListeners=new Array,n.removeAncestorScrollEventListeners=new Array,n.animFrame=new sn,n.anchorBlurHandler=function(i){n.handleAnchorBlur(i)},n.documentClickHandler=function(i){n.handleDocumentClick(i)},n.documentKeydownHandler=function(i){n.handleKeydown(i)},n.tooltipMouseEnterHandler=function(){n.handleTooltipMouseEnter()},n.tooltipMouseLeaveHandler=function(){n.handleTooltipMouseLeave()},n.richTooltipFocusOutHandler=function(i){n.handleRichTooltipFocusOut(i)},n.windowScrollHandler=function(){n.handleWindowScrollEvent()},n.windowResizeHandler=function(){n.handleWindowChangeEvent()},n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceAnimationStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){},getActiveElement:function(){return null}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.richTooltip=this.adapter.hasClass(_o),this.persistentTooltip=this.adapter.getAttribute(ge.PERSISTENT)==="true",this.interactiveTooltip=!!this.adapter.getAnchorAttribute(ge.ARIA_EXPANDED)&&this.adapter.getAnchorAttribute(ge.ARIA_HASPOPUP)==="dialog",this.hasCaret=this.richTooltip&&this.adapter.getAttribute(ge.HAS_CARET)==="true"},e.prototype.isShown=function(){return this.tooltipShown},e.prototype.isRich=function(){return this.richTooltip},e.prototype.isPersistent=function(){return this.persistentTooltip},e.prototype.handleAnchorMouseEnter=function(){var t=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs))},e.prototype.handleAnchorTouchstart=function(){var t=this;this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.preventContextMenuOnLongTouch=function(t){t.preventDefault()},e.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.handleAnchorFocus=function(t){var n=this,i=t.relatedTarget,r=i instanceof HTMLElement&&this.adapter.tooltipContainsElement(i);r||(this.showTimeout=setTimeout(function(){n.show()},this.showDelayMs))},e.prototype.handleAnchorMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},e.prototype.handleDocumentClick=function(t){var n=t.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.target)||this.adapter.tooltipContainsElement(t.target));this.richTooltip&&this.persistentTooltip&&n||this.hide()},e.prototype.handleKeydown=function(t){var n=U(t);if(n===I.ESCAPE){var i=this.adapter.getActiveElement(),r=i instanceof HTMLElement&&this.adapter.tooltipContainsElement(i);r&&this.adapter.focusAnchorElement(),this.hide()}},e.prototype.handleAnchorBlur=function(t){if(this.richTooltip){var n=t.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(t.relatedTarget);if(n||t.relatedTarget===null&&this.interactiveTooltip)return}this.hide()},e.prototype.handleTooltipMouseEnter=function(){this.show()},e.prototype.handleTooltipMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleRichTooltipFocusOut=function(t){var n=t.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.relatedTarget)||this.adapter.tooltipContainsElement(t.relatedTarget));n||t.relatedTarget===null&&this.interactiveTooltip||this.hide()},e.prototype.handleWindowScrollEvent=function(){if(this.persistentTooltip){this.handleWindowChangeEvent();return}this.hide()},e.prototype.handleWindowChangeEvent=function(){var t=this;this.animFrame.request(nn.POLL_ANCHOR,function(){t.repositionTooltipOnAnchorMove()})},e.prototype.show=function(){var t,n,i=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.adapter.removeAttribute("aria-hidden"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler)),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.removeClass(de),this.adapter.addClass($e),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass(bo),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var r=D(this.addAncestorScrollEventListeners),a=r.next();!a.done;a=r.next()){var s=a.value;s()}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.frameId=requestAnimationFrame(function(){i.clearAllAnimationClasses(),i.adapter.addClass(ze),i.adapter.addClass(Ie)})}},e.prototype.hide=function(){var t,n;if(this.clearHideTimeout(),this.clearShowTimeout(),!!this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.clearAllAnimationClasses(),this.adapter.addClass(de),this.adapter.addClass(ve),this.adapter.removeClass(ze),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var i=D(this.removeAncestorScrollEventListeners),r=i.next();!r.done;r=i.next()){var a=r.value;a()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.handleTransitionEnd=function(){var t=this.adapter.hasClass(de);this.adapter.removeClass($e),this.adapter.removeClass(Ie),this.adapter.removeClass(de),this.adapter.removeClass(ve),t&&this.showTimeout===null&&this.adapter.notifyHidden()},e.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(Ie),this.adapter.removeClass(ve)},e.prototype.setTooltipPosition=function(t){var n=t.xPos,i=t.yPos,r=t.withCaretPos;if(this.hasCaret&&r){this.tooltipPositionWithCaret=r;return}n&&(this.xTooltipPos=n),i&&(this.yTooltipPos=i)},e.prototype.setAnchorBoundaryType=function(t){t===en.UNBOUNDED?this.anchorGap=J.UNBOUNDED_ANCHOR_GAP:this.anchorGap=J.BOUNDED_ANCHOR_GAP},e.prototype.setShowDelay=function(t){this.showDelayMs=t},e.prototype.setHideDelay=function(t){this.hideDelayMs=t},e.prototype.isTooltipMultiline=function(){var t=this.adapter.getTooltipSize();return t.height>J.MIN_HEIGHT&&t.width>=J.MAX_WIDTH},e.prototype.positionPlainTooltip=function(){var t=this.calculateTooltipStyles(this.anchorRect),n=t.top,i=t.yTransformOrigin,r=t.left,a=t.xTransformOrigin,s=ni?ne(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(s+"-origin",a+" "+i),this.adapter.setStyleProperty("top",n+"px"),this.adapter.setStyleProperty("left",r+"px")},e.prototype.positionRichTooltip=function(){var t,n,i,r,a=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",a);var s=this.hasCaret?this.calculateTooltipWithCaretStyles(this.anchorRect):this.calculateTooltipStyles(this.anchorRect),u=s.top,l=s.yTransformOrigin,c=s.left,E=s.xTransformOrigin,p=ni?ne(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(p+"-origin",E+" "+l);var h=c-((n=(t=this.parentRect)===null||t===void 0?void 0:t.left)!==null&&n!==void 0?n:0),m=u-((r=(i=this.parentRect)===null||i===void 0?void 0:i.top)!==null&&r!==void 0?r:0);this.adapter.setStyleProperty("top",m+"px"),this.adapter.setStyleProperty("left",h+"px")},e.prototype.calculateTooltipStyles=function(t){if(!t)return{top:0,left:0};var n=this.adapter.getTooltipSize(),i=this.calculateYTooltipDistance(t,n.height),r=this.calculateXTooltipDistance(t,n.width);return{top:i.distance,yTransformOrigin:i.yTransformOrigin,left:r.distance,xTransformOrigin:r.xTransformOrigin}},e.prototype.calculateXTooltipDistance=function(t,n){var i=!this.adapter.isRTL(),r,a,s,u,l;this.richTooltip?(r=i?t.left-n:t.right,a=i?t.right:t.left-n,u=i?g.RIGHT:g.LEFT,l=i?g.LEFT:g.RIGHT):(r=i?t.left:t.right-n,a=i?t.right-n:t.left,s=t.left+(t.width-n)/2,u=i?g.LEFT:g.RIGHT,l=i?g.RIGHT:g.LEFT);var c=this.richTooltip?this.determineValidPositionOptions(r,a):this.determineValidPositionOptions(s,r,a);if(this.xTooltipPos===Jt.START&&c.has(r))return{distance:r,xTransformOrigin:u};if(this.xTooltipPos===Jt.END&&c.has(a))return{distance:a,xTransformOrigin:l};if(this.xTooltipPos===Jt.CENTER&&c.has(s))return{distance:s,xTransformOrigin:g.CENTER};var E=this.richTooltip?[{distance:a,xTransformOrigin:l},{distance:r,xTransformOrigin:u}]:[{distance:s,xTransformOrigin:g.CENTER},{distance:r,xTransformOrigin:u},{distance:a,xTransformOrigin:l}],p=E.find(function(C){var y=C.distance;return c.has(y)});if(p)return p;if(t.left<0)return{distance:this.minViewportTooltipThreshold,xTransformOrigin:g.LEFT};var h=this.adapter.getViewportWidth(),m=h-(n+this.minViewportTooltipThreshold);return{distance:m,xTransformOrigin:g.RIGHT}},e.prototype.determineValidPositionOptions=function(){for(var t,n,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var a=new Set,s=new Set;try{for(var u=D(i),l=u.next();!l.done;l=u.next()){var c=l.value;this.positionHonorsViewportThreshold(c)?a.add(c):this.positionDoesntCollideWithViewport(c)&&s.add(c)}}catch(E){t={error:E}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return a.size?a:s},e.prototype.positionHonorsViewportThreshold=function(t){var n=this.adapter.getViewportWidth(),i=this.adapter.getTooltipSize().width;return t+i<=n-this.minViewportTooltipThreshold&&t>=this.minViewportTooltipThreshold},e.prototype.positionDoesntCollideWithViewport=function(t){var n=this.adapter.getViewportWidth(),i=this.adapter.getTooltipSize().width;return t+i<=n&&t>=0},e.prototype.calculateYTooltipDistance=function(t,n){var i=t.bottom+this.anchorGap,r=t.top-(this.anchorGap+n),a=this.determineValidYPositionOptions(r,i);return this.yTooltipPos===Ee.ABOVE&&a.has(r)?{distance:r,yTransformOrigin:g.BOTTOM}:this.yTooltipPos===Ee.BELOW&&a.has(i)?{distance:i,yTransformOrigin:g.TOP}:a.has(i)?{distance:i,yTransformOrigin:g.TOP}:a.has(r)?{distance:r,yTransformOrigin:g.BOTTOM}:{distance:i,yTransformOrigin:g.TOP}},e.prototype.determineValidYPositionOptions=function(t,n){var i=new Set,r=new Set;return this.yPositionHonorsViewportThreshold(t)?i.add(t):this.yPositionDoesntCollideWithViewport(t)&&r.add(t),this.yPositionHonorsViewportThreshold(n)?i.add(n):this.yPositionDoesntCollideWithViewport(n)&&r.add(n),i.size?i:r},e.prototype.yPositionHonorsViewportThreshold=function(t){var n=this.adapter.getViewportHeight(),i=this.adapter.getTooltipSize().height;return t+i+this.minViewportTooltipThreshold<=n&&t>=this.minViewportTooltipThreshold},e.prototype.yPositionDoesntCollideWithViewport=function(t){var n=this.adapter.getViewportHeight(),i=this.adapter.getTooltipSize().height;return t+i<=n&&t>=0},e.prototype.calculateTooltipWithCaretStyles=function(t){this.adapter.clearTooltipCaretStyles();var n=this.adapter.getTooltipCaretBoundingRect();if(!t||!n)return{position:O.DETECTED,top:0,left:0};var i=n.width/J.ANIMATION_SCALE,r=n.height/J.ANIMATION_SCALE/2,a=this.adapter.getTooltipSize(),s=this.calculateYWithCaretDistanceOptions(t,a.height,{caretWidth:i,caretHeight:r}),u=this.calculateXWithCaretDistanceOptions(t,a.width,{caretWidth:i,caretHeight:r}),l=this.validateTooltipWithCaretDistances(s,u);l.size<1&&(l=this.generateBackupPositionOption(t,a,{caretWidth:i,caretHeight:r}));var c=this.determineTooltipWithCaretDistance(l),E=c.position,p=c.xDistance,h=c.yDistance,m=this.setCaretPositionStyles(E,{caretWidth:i,caretHeight:r}),C=m.yTransformOrigin,y=m.xTransformOrigin;return{yTransformOrigin:C,xTransformOrigin:y,top:h,left:p}},e.prototype.calculateXWithCaretDistanceOptions=function(t,n,i){var r=i.caretWidth,a=i.caretHeight,s=!this.adapter.isRTL(),u=t.left+t.width/2,l=t.left-(n+this.anchorGap+a),c=t.right+this.anchorGap+a,E=s?l:c,p=s?c:l,h=u-(J.CARET_INDENTATION+r/2),m=u-(n-J.CARET_INDENTATION-r/2),C=s?h:m,y=s?m:h,S=u-n/2,N=new Map([[L.START,C],[L.CENTER,S],[L.END,y],[L.SIDE_END,p],[L.SIDE_START,E]]);return N},e.prototype.calculateYWithCaretDistanceOptions=function(t,n,i){var r=i.caretWidth,a=i.caretHeight,s=t.top+t.height/2,u=t.bottom+this.anchorGap+a,l=t.top-(this.anchorGap+n+a),c=s-(J.CARET_INDENTATION+r/2),E=s-n/2,p=s-(n-J.CARET_INDENTATION-r/2),h=new Map([[Y.ABOVE,l],[Y.BELOW,u],[Y.SIDE_TOP,c],[Y.SIDE_CENTER,E],[Y.SIDE_BOTTOM,p]]);return h},e.prototype.repositionTooltipOnAnchorMove=function(){var t=this.adapter.getAnchorBoundingRect();!t||!this.anchorRect||(t.top!==this.anchorRect.top||t.left!==this.anchorRect.left||t.height!==this.anchorRect.height||t.width!==this.anchorRect.width)&&(this.anchorRect=t,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip())},e.prototype.validateTooltipWithCaretDistances=function(t,n){var i,r,a,s,u,l,c=new Map,E=new Map,p=new Map([[Y.ABOVE,[L.START,L.CENTER,L.END]],[Y.BELOW,[L.START,L.CENTER,L.END]],[Y.SIDE_TOP,[L.SIDE_START,L.SIDE_END]],[Y.SIDE_CENTER,[L.SIDE_START,L.SIDE_END]],[Y.SIDE_BOTTOM,[L.SIDE_START,L.SIDE_END]]]);try{for(var h=D(p.keys()),m=h.next();!m.done;m=h.next()){var C=m.value,y=t.get(C);if(this.yPositionHonorsViewportThreshold(y))try{for(var S=(a=void 0,D(p.get(C))),N=S.next();!N.done;N=S.next()){var k=N.value,P=n.get(k);if(this.positionHonorsViewportThreshold(P)){var w=this.caretPositionOptionsMapping(k,C);c.set(w,{xDistance:P,yDistance:y})}}}catch(_t){a={error:_t}}finally{try{N&&!N.done&&(s=S.return)&&s.call(S)}finally{if(a)throw a.error}}if(this.yPositionDoesntCollideWithViewport(y))try{for(var Ct=(u=void 0,D(p.get(C))),Rt=Ct.next();!Rt.done;Rt=Ct.next()){var k=Rt.value,P=n.get(k);if(this.positionDoesntCollideWithViewport(P)){var w=this.caretPositionOptionsMapping(k,C);E.set(w,{xDistance:P,yDistance:y})}}}catch(_t){u={error:_t}}finally{try{Rt&&!Rt.done&&(l=Ct.return)&&l.call(Ct)}finally{if(u)throw u.error}}}}catch(_t){i={error:_t}}finally{try{m&&!m.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}return c.size?c:E},e.prototype.generateBackupPositionOption=function(t,n,i){var r=!this.adapter.isRTL(),a,s;if(t.left<0)a=this.minViewportTooltipThreshold+i.caretHeight,s=r?L.END:L.START;else{var u=this.adapter.getViewportWidth();a=u-(n.width+this.minViewportTooltipThreshold+i.caretHeight),s=r?L.START:L.END}var l,c;if(t.top<0)l=this.minViewportTooltipThreshold+i.caretHeight,c=Y.BELOW;else{var E=this.adapter.getViewportHeight();l=E-(n.height+this.minViewportTooltipThreshold+i.caretHeight),c=Y.ABOVE}var p=this.caretPositionOptionsMapping(s,c);return new Map([[p,{xDistance:a,yDistance:l}]])},e.prototype.determineTooltipWithCaretDistance=function(t){if(t.has(this.tooltipPositionWithCaret)){var n=t.get(this.tooltipPositionWithCaret);return{position:this.tooltipPositionWithCaret,xDistance:n.xDistance,yDistance:n.yDistance}}var i=[O.ABOVE_START,O.ABOVE_CENTER,O.ABOVE_END,O.TOP_SIDE_START,O.CENTER_SIDE_START,O.BOTTOM_SIDE_START,O.TOP_SIDE_END,O.CENTER_SIDE_END,O.BOTTOM_SIDE_END,O.BELOW_START,O.BELOW_CENTER,O.BELOW_END],r=i.find(function(s){return t.has(s)}),a=t.get(r);return{position:r,xDistance:a.xDistance,yDistance:a.yDistance}},e.prototype.caretPositionOptionsMapping=function(t,n){switch(n){case Y.ABOVE:if(t===L.START)return O.ABOVE_START;if(t===L.CENTER)return O.ABOVE_CENTER;if(t===L.END)return O.ABOVE_END;break;case Y.BELOW:if(t===L.START)return O.BELOW_START;if(t===L.CENTER)return O.BELOW_CENTER;if(t===L.END)return O.BELOW_END;break;case Y.SIDE_TOP:if(t===L.SIDE_START)return O.TOP_SIDE_START;if(t===L.SIDE_END)return O.TOP_SIDE_END;break;case Y.SIDE_CENTER:if(t===L.SIDE_START)return O.CENTER_SIDE_START;if(t===L.SIDE_END)return O.CENTER_SIDE_END;break;case Y.SIDE_BOTTOM:if(t===L.SIDE_START)return O.BOTTOM_SIDE_START;if(t===L.SIDE_END)return O.BOTTOM_SIDE_END;break}throw new Error("MDCTooltipFoundation: Invalid caret position of "+t+", "+n)},e.prototype.setCaretPositionStyles=function(t,n){var i,r,a=this.calculateCaretPositionOnTooltip(t,n);if(!a)return{yTransformOrigin:0,xTransformOrigin:0};this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(a.yAlignment,a.yAxisPx),this.adapter.setTooltipCaretStyle(a.xAlignment,a.xAxisPx);var s=a.skew*(Math.PI/180),u=Math.cos(s);this.adapter.setTooltipCaretStyle("transform","rotate("+a.rotation+"deg) skewY("+a.skew+"deg) scaleX("+u+")"),this.adapter.setTooltipCaretStyle("transform-origin",a.xAlignment+" "+a.yAlignment);try{for(var l=D(a.caretCorners),c=l.next();!c.done;c=l.next()){var E=c.value;this.adapter.setTooltipCaretStyle(E,"0")}}catch(p){i={error:p}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}return{yTransformOrigin:a.yTransformOrigin,xTransformOrigin:a.xTransformOrigin}},e.prototype.calculateCaretPositionOnTooltip=function(t,n){var i=!this.adapter.isRTL(),r=this.adapter.getComputedStyleProperty("width"),a=this.adapter.getComputedStyleProperty("height");if(!(!r||!a||!n)){var s="calc(("+r+" - "+n.caretWidth+"px) / 2)",u="calc(("+a+" - "+n.caretWidth+"px) / 2)",l="0",c=J.CARET_INDENTATION+"px",E="calc("+r+" - "+c+")",p="calc("+a+" - "+c+")",h=35,m=Math.abs(90-h),C=["border-bottom-right-radius","border-top-left-radius"],y=["border-bottom-left-radius","border-top-right-radius"],S=20;switch(t){case O.BELOW_CENTER:return{yAlignment:g.TOP,xAlignment:g.LEFT,yAxisPx:l,xAxisPx:s,rotation:-1*h,skew:-1*S,xTransformOrigin:s,yTransformOrigin:l,caretCorners:C};case O.BELOW_END:return{yAlignment:g.TOP,xAlignment:i?g.RIGHT:g.LEFT,yAxisPx:l,xAxisPx:c,rotation:i?h:-1*h,skew:i?S:-1*S,xTransformOrigin:i?E:c,yTransformOrigin:l,caretCorners:i?y:C};case O.BELOW_START:return{yAlignment:g.TOP,xAlignment:i?g.LEFT:g.RIGHT,yAxisPx:l,xAxisPx:c,rotation:i?-1*h:h,skew:i?-1*S:S,xTransformOrigin:i?c:E,yTransformOrigin:l,caretCorners:i?C:y};case O.TOP_SIDE_END:return{yAlignment:g.TOP,xAlignment:i?g.LEFT:g.RIGHT,yAxisPx:c,xAxisPx:l,rotation:i?m:-1*m,skew:i?-1*S:S,xTransformOrigin:i?l:r,yTransformOrigin:c,caretCorners:i?C:y};case O.CENTER_SIDE_END:return{yAlignment:g.TOP,xAlignment:i?g.LEFT:g.RIGHT,yAxisPx:u,xAxisPx:l,rotation:i?m:-1*m,skew:i?-1*S:S,xTransformOrigin:i?l:r,yTransformOrigin:u,caretCorners:i?C:y};case O.BOTTOM_SIDE_END:return{yAlignment:g.BOTTOM,xAlignment:i?g.LEFT:g.RIGHT,yAxisPx:c,xAxisPx:l,rotation:i?-1*m:m,skew:i?S:-1*S,xTransformOrigin:i?l:r,yTransformOrigin:p,caretCorners:i?y:C};case O.TOP_SIDE_START:return{yAlignment:g.TOP,xAlignment:i?g.RIGHT:g.LEFT,yAxisPx:c,xAxisPx:l,rotation:i?-1*m:m,skew:i?S:-1*S,xTransformOrigin:i?r:l,yTransformOrigin:c,caretCorners:i?y:C};case O.CENTER_SIDE_START:return{yAlignment:g.TOP,xAlignment:i?g.RIGHT:g.LEFT,yAxisPx:u,xAxisPx:l,rotation:i?-1*m:m,skew:i?S:-1*S,xTransformOrigin:i?r:l,yTransformOrigin:u,caretCorners:i?y:C};case O.BOTTOM_SIDE_START:return{yAlignment:g.BOTTOM,xAlignment:i?g.RIGHT:g.LEFT,yAxisPx:c,xAxisPx:l,rotation:i?m:-1*m,skew:i?-1*S:S,xTransformOrigin:i?r:l,yTransformOrigin:p,caretCorners:i?C:y};case O.ABOVE_CENTER:return{yAlignment:g.BOTTOM,xAlignment:g.LEFT,yAxisPx:l,xAxisPx:s,rotation:h,skew:S,xTransformOrigin:s,yTransformOrigin:a,caretCorners:y};case O.ABOVE_END:return{yAlignment:g.BOTTOM,xAlignment:i?g.RIGHT:g.LEFT,yAxisPx:l,xAxisPx:c,rotation:i?-1*h:h,skew:i?-1*S:S,xTransformOrigin:i?E:c,yTransformOrigin:a,caretCorners:i?C:y};default:case O.ABOVE_START:return{yAlignment:g.BOTTOM,xAlignment:i?g.LEFT:g.RIGHT,yAxisPx:l,xAxisPx:c,rotation:i?h:-1*h,skew:i?S:-1*S,xTransformOrigin:i?c:E,yTransformOrigin:a,caretCorners:i?y:C}}}},e.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},e.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},e.prototype.attachScrollHandler=function(t){var n=this;this.addAncestorScrollEventListeners.push(function(){t("scroll",n.windowScrollHandler)})},e.prototype.removeScrollHandler=function(t){var n=this;this.removeAncestorScrollEventListeners.push(function(){t("scroll",n.windowScrollHandler)})},e.prototype.destroy=function(){var t,n;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(ze),this.adapter.removeClass(Ie),this.adapter.removeClass($e),this.adapter.removeClass(de),this.adapter.removeClass(ve),this.richTooltip&&this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var i=D(this.removeAncestorScrollEventListeners),r=i.next();!r.done;r=i.next()){var a=r.value;a()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.animFrame.cancelAll()},e}(_);/**
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
 */var Do=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){var t=this.root.getAttribute("id");if(!t)throw new Error("MDCTooltip: Tooltip component must have an id.");var n=document.querySelector('[data-tooltip-id="'+t+'"]')||document.querySelector('[aria-describedby="'+t+'"]');if(!n)throw new Error("MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id].");this.anchorElem=n},e.prototype.initialSyncWithDOM=function(){var t=this;this.isTooltipRich=this.foundation.isRich(),this.isTooltipPersistent=this.foundation.isPersistent(),this.handleMouseEnter=function(){t.foundation.handleAnchorMouseEnter()},this.handleFocus=function(n){t.foundation.handleAnchorFocus(n)},this.handleMouseLeave=function(){t.foundation.handleAnchorMouseLeave()},this.handleTransitionEnd=function(){t.foundation.handleTransitionEnd()},this.handleClick=function(){t.foundation.handleAnchorClick()},this.handleTouchstart=function(){t.foundation.handleAnchorTouchstart()},this.handleTouchend=function(){t.foundation.handleAnchorTouchend()},this.isTooltipRich&&this.isTooltipPersistent?this.anchorElem.addEventListener("click",this.handleClick):(this.anchorElem.addEventListener("mouseenter",this.handleMouseEnter),this.anchorElem.addEventListener("focus",this.handleFocus),this.anchorElem.addEventListener("mouseleave",this.handleMouseLeave),this.anchorElem.addEventListener("touchstart",this.handleTouchstart),this.anchorElem.addEventListener("touchend",this.handleTouchend)),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.anchorElem&&(this.isTooltipRich&&this.isTooltipPersistent?this.anchorElem.removeEventListener("click",this.handleClick):(this.anchorElem.removeEventListener("mouseenter",this.handleMouseEnter),this.anchorElem.removeEventListener("focus",this.handleFocus),this.anchorElem.removeEventListener("mouseleave",this.handleMouseLeave),this.anchorElem.removeEventListener("touchstart",this.handleTouchstart),this.anchorElem.removeEventListener("touchend",this.handleTouchend))),this.unlisten("transitionend",this.handleTransitionEnd),o.prototype.destroy.call(this)},e.prototype.setTooltipPosition=function(t){this.foundation.setTooltipPosition(t)},e.prototype.setAnchorBoundaryType=function(t){this.foundation.setAnchorBoundaryType(t)},e.prototype.setShowDelay=function(t){this.foundation.setShowDelay(t)},e.prototype.setHideDelay=function(t){this.foundation.setHideDelay(t)},e.prototype.hide=function(){this.foundation.hide()},e.prototype.isShown=function(){return this.foundation.isShown()},e.prototype.attachScrollHandler=function(t){this.foundation.attachScrollHandler(t)},e.prototype.removeScrollHandler=function(t){this.foundation.removeScrollHandler(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={getAttribute:function(i){return t.root.getAttribute(i)},setAttribute:function(i,r){t.root.setAttribute(i,r)},removeAttribute:function(i){t.root.removeAttribute(i)},addClass:function(i){t.root.classList.add(i)},hasClass:function(i){return t.root.classList.contains(i)},removeClass:function(i){t.root.classList.remove(i)},getComputedStyleProperty:function(i){return window.getComputedStyle(t.root).getPropertyValue(i)},setStyleProperty:function(i,r){t.root.style.setProperty(i,r)},setSurfaceAnimationStyleProperty:function(i,r){var a=t.root.querySelector("."+et.SURFACE_ANIMATION);a==null||a.style.setProperty(i,r)},getViewportWidth:function(){return window.innerWidth},getViewportHeight:function(){return window.innerHeight},getTooltipSize:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorBoundingRect:function(){return t.anchorElem?t.anchorElem.getBoundingClientRect():null},getParentBoundingRect:function(){var i,r;return(r=(i=t.root.parentElement)===null||i===void 0?void 0:i.getBoundingClientRect())!==null&&r!==void 0?r:null},getAnchorAttribute:function(i){return t.anchorElem?t.anchorElem.getAttribute(i):null},setAnchorAttribute:function(i,r){var a;(a=t.anchorElem)===null||a===void 0||a.setAttribute(i,r)},isRTL:function(){return getComputedStyle(t.root).direction==="rtl"},anchorContainsElement:function(i){var r;return!!(!((r=t.anchorElem)===null||r===void 0)&&r.contains(i))},tooltipContainsElement:function(i){return t.root.contains(i)},focusAnchorElement:function(){var i;(i=t.anchorElem)===null||i===void 0||i.focus()},registerEventHandler:function(i,r){t.root instanceof HTMLElement&&t.root.addEventListener(i,r)},deregisterEventHandler:function(i,r){t.root instanceof HTMLElement&&t.root.removeEventListener(i,r)},registerAnchorEventHandler:function(i,r){var a;(a=t.anchorElem)===null||a===void 0||a.addEventListener(i,r)},deregisterAnchorEventHandler:function(i,r){var a;(a=t.anchorElem)===null||a===void 0||a.removeEventListener(i,r)},registerDocumentEventHandler:function(i,r){document.body.addEventListener(i,r)},deregisterDocumentEventHandler:function(i,r){document.body.removeEventListener(i,r)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)},notifyHidden:function(){t.emit(Ro.HIDDEN,{})},getTooltipCaretBoundingRect:function(){var i=t.root.querySelector("."+et.TOOLTIP_CARET_TOP);return i?i.getBoundingClientRect():null},setTooltipCaretStyle:function(i,r){var a=t.root.querySelector("."+et.TOOLTIP_CARET_TOP),s=t.root.querySelector("."+et.TOOLTIP_CARET_BOTTOM);!a||!s||(a.style.setProperty(i,r),s.style.setProperty(i,r))},clearTooltipCaretStyles:function(){var i=t.root.querySelector("."+et.TOOLTIP_CARET_TOP),r=t.root.querySelector("."+et.TOOLTIP_CARET_BOTTOM);!i||!r||(i.removeAttribute("style"),r.removeAttribute("style"))},getActiveElement:function(){return document.activeElement}};return new Lo(n)},e}(b);/**
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
 */var ut={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Re={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},pe={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var vi=function(o){T(e,o);function e(t){return o.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Re},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(_);/**
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
 */var ye=0,yi=function(o){T(e,o);function e(t){var n=o.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=ye,n.resizeDebounceId=ye,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){o.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=ye,t.throttledResizeHandler()},Re.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=ye},Re.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,r=n&&i;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Re.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(vi);/**
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
 */var No=function(o){T(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(ut.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(ut.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(yi);/**
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
 */var xo=function(o){T(e,o);function e(t){var n=o.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){o.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(ut.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(ut.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(ut.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(ut.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(vi);/**
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
 */var Mo=function(o){T(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i){return K.attachTo(i)}),this.navIcon=this.root.querySelector(pe.NAVIGATION_ICON_SELECTOR);var n=[].slice.call(this.root.querySelectorAll(pe.ACTION_ITEM_SELECTOR));this.navIcon&&n.push(this.navIcon),this.iconRipples=n.map(function(i){var r=t(i);return r.unbounded=!0,r}),this.scrollTarget=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.addEventListener("click",this.handleNavigationClick);var t=this.root.classList.contains(ut.FIXED_CLASS),n=this.root.classList.contains(ut.SHORT_CLASS);!n&&!t&&window.addEventListener("resize",this.handleWindowResize)},e.prototype.destroy=function(){var t,n;try{for(var i=D(this.iconRipples),r=i.next();!r.done;r=i.next()){var a=r.value;a.destroy()}}catch(l){t={error:l}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.removeEventListener("click",this.handleNavigationClick);var s=this.root.classList.contains(ut.FIXED_CLASS),u=this.root.classList.contains(ut.SHORT_CLASS);!u&&!s&&window.removeEventListener("resize",this.handleWindowResize),o.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.scrollTarget=t,this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(r){return t.root.classList.contains(r)},addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},setStyle:function(r,a){return t.root.style.setProperty(r,a)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){return t.emit(pe.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var r=t.scrollTarget,a=t.scrollTarget;return r.pageYOffset!==void 0?r.pageYOffset:a.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(pe.ACTION_ITEM_SELECTOR).length}},i;return this.root.classList.contains(ut.SHORT_CLASS)?i=new xo(n):this.root.classList.contains(ut.FIXED_CLASS)?i=new No(n):i=new yi(n),i},e}(b);/**
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
 */x.register("MDCBanner",Ni);x.register("MDCCheckbox",oi);x.register("MDCChip",si);x.register("MDCChipSet",Ui);x.register("MDCCircularProgress",Ki);x.register("MDCDataTable",Gi);x.register("MDCDialog",$i);x.register("MDCDrawer",lr);x.register("MDCFloatingLabel",ln);x.register("MDCFormField",fr);x.register("MDCIconButtonToggle",_i);x.register("MDCLineRipple",cn);x.register("MDCLinearProgress",li);x.register("MDCList",un);x.register("MDCMenu",Ei);x.register("MDCMenuSurface",pi);x.register("MDCNotchedOutline",dn);x.register("MDCRadio",gr);x.register("MDCRipple",K);x.register("MDCSegmentedButton",_r);x.register("MDCSelect",xr);x.register("MDCSlider",Pr);x.register("MDCSnackbar",Yr);x.register("MDCSwitch",eo);x.register("MDCTabBar",To);x.register("MDCTextField",Oo);x.register("MDCTooltip",Do);x.register("MDCTopAppBar",Mo);export{x as autoInit};
