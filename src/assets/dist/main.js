const f="modulepreload",h=function(r){return"/"+r},l={},E=function(a,i,v){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),o=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.all(i.map(t=>{if(t=h(t),t in l)return;l[t]=!0;const s=t.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${u}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":f,s||(n.as="script",n.crossOrigin=""),n.href=t,o&&n.setAttribute("nonce",o),document.head.appendChild(n),s)return new Promise((d,m)=>{n.addEventListener("load",d),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return c.then(()=>a()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})};document.addEventListener("DOMContentLoaded",()=>E(async()=>{const{autoInit:r}=await import("./vendor.js");return{autoInit:r}},[]).then(({autoInit:r})=>r()));