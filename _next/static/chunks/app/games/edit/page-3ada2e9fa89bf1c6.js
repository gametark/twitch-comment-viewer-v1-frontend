(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{84128:function(e,r,n){Promise.resolve().then(n.bind(n,79704))},79704:function(e,r,n){"use strict";n.d(r,{default:function(){return l}});var t=n(57437),s=n(2265),i=n(16463),a=n(67687),o=n(62022),u=n(53897);let c=()=>{let e=(0,i.useRouter)(),r=(0,s.useCallback)(()=>{e.push("/games")},[]),n=(0,i.useSearchParams)(),c=(0,o.Gq)(async()=>{let e=n.get("templateId");return"string"!=typeof e?null:await a.db.broadcastTemplates.get(Number(e))},[]),l=(0,s.useCallback)(r=>{let{id:n,...t}=r;null!=n&&(a.db.broadcastTemplates.update(n,t),e.push("/games"))},[]);return null===c?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{className:"fixed w-full h-full bg-base-100 z-10 flex justify-center items-center",children:(0,t.jsxs)("div",{className:" min-w-96 w-2/4 border rounded-box p-5 flex flex-col gap-10",children:[(0,t.jsx)("h1",{children:"編集"}),(0,t.jsx)(u.ZP,{value:c,onCancel:r,onCommit:l})]})})};function l(){return(0,t.jsx)(s.Suspense,{children:(0,t.jsx)(c,{})})}},31014:function(e,r,n){"use strict";n.d(r,{F:function(){return c}});var t=n(39343),s=function(e,r,n){if(e&&"reportValidity"in e){var s=(0,t.U2)(n,r);e.setCustomValidity(s&&s.message||""),e.reportValidity()}},i=function(e,r){var n=function(n){var t=r.fields[n];t&&t.ref&&"reportValidity"in t.ref?s(t.ref,n,e):t.refs&&t.refs.forEach(function(r){return s(r,n,e)})};for(var t in r.fields)n(t)},a=function(e,r){r.shouldUseNativeValidation&&i(e,r);var n={};for(var s in e){var a=(0,t.U2)(r.fields,s),u=Object.assign(e[s]||{},{ref:a&&a.ref});if(o(r.names||Object.keys(e),s)){var c=Object.assign({},(0,t.U2)(n,s));(0,t.t8)(c,"root",u),(0,t.t8)(n,s,c)}else(0,t.t8)(n,s,u)}return n},o=function(e,r){return e.some(function(e){return e.startsWith(r+".")})},u=function(e,r){for(var n={};e.length;){var s=e[0],i=s.code,a=s.message,o=s.path.join(".");if(!n[o]){if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[o]={message:u.message,type:u.code}}else n[o]={message:a,type:i}}if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),r){var c=n[o].types,l=c&&c[s.code];n[o]=(0,t.KN)(o,r,n,i,l?[].concat(l,s.message):s.message)}e.shift()}return n},c=function(e,r,n){return void 0===n&&(n={}),function(t,s,o){try{return Promise.resolve(function(s,a){try{var u=Promise.resolve(e["sync"===n.mode?"parse":"parseAsync"](t,r)).then(function(e){return o.shouldUseNativeValidation&&i({},o),{errors:{},values:n.raw?t:e}})}catch(e){return a(e)}return u&&u.then?u.then(void 0,a):u}(0,function(e){if(null!=e.errors)return{values:{},errors:a(u(e.errors,!o.shouldUseNativeValidation&&"all"===o.criteriaMode),o)};throw e}))}catch(e){return Promise.reject(e)}}}}},function(e){e.O(0,[214,803,701,279,945,30,285,564,971,23,744],function(){return e(e.s=84128)}),_N_E=e.O()}]);