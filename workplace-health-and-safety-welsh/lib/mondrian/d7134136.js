"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[705],{4705:(e,n,t)=>{t.r(n),t.d(n,{derived:()=>i,get:()=>r.get_store_value,readable:()=>s,readonly:()=>c,writable:()=>u});var r=t(7112);const o=[];function s(e,n){return{subscribe:u(e,n).subscribe}}function u(e,n=r.noop){let t;const s=new Set;function u(n){if((0,r.safe_not_equal)(e,n)&&(e=n,t)){const n=!o.length;for(const n of s)n[1](),o.push(n,e);if(n){for(let e=0;e<o.length;e+=2)o[e][0](o[e+1]);o.length=0}}}function i(n){u(n(e))}return{set:u,update:i,subscribe:function(o,c=r.noop){const a=[o,c];return s.add(a),1===s.size&&(t=n(u,i)||r.noop),o(e),()=>{s.delete(a),0===s.size&&t&&(t(),t=null)}}}}function i(e,n,t){const o=!Array.isArray(e),u=o?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=n.length<2;return s(t,((e,t)=>{let s=!1;const c=[];let a=0,l=r.noop;const f=()=>{if(a)return;l();const s=n(o?c[0]:c,e,t);i?e(s):l=(0,r.is_function)(s)?s:r.noop},b=u.map(((e,n)=>(0,r.subscribe)(e,(e=>{c[n]=e,a&=~(1<<n),s&&f()}),(()=>{a|=1<<n}))));return s=!0,f(),function(){(0,r.run_all)(b),l(),s=!1}}))}function c(e){return{subscribe:e.subscribe.bind(e)}}}}]);
//# sourceMappingURL=d7134136.js.map