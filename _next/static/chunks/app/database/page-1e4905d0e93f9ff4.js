(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{3201:function(e,t,l){Promise.resolve().then(l.bind(l,1433))},7244:function(e,t,l){"use strict";l.d(t,{i:function(){return g}});var a=l(3827),r=l(4090),s=l(3167),n=l(9539),i=l.n(n),c=l(7861),u=l(625),d=l(8346);let o=e=>(0,a.jsx)(u.Z,{language:"javascript",style:d.Z,children:e.code});var f=l(5835),x=l(9517),h=l.n(x);let m="クリップボードにコピーしました。";function p(e){let[t,l]=(0,r.useState)(e.target);return(0,r.useEffect)(()=>{t===m&&setTimeout(()=>{l(e.target)},1e3)},[t,e.target]),(0,a.jsx)("div",{className:"tooltip tooltip-bottom","data-tip":t,children:(0,a.jsx)("button",{className:"btn whitespace-nowrap",onClick:()=>{l(m),h()(e.target)},children:e.text})})}var j=l(8246);let b=e=>(0,a.jsx)("td",{children:e.children}),g=e=>{let t=(0,j.useModalContext)(),l=e=>{if(null===e)return"null";switch(typeof e){case"object":if(e instanceof Date)return i()(e).format("YY/MM/DD");if(!("type"in e))return(0,a.jsx)("button",{className:"btn",onClick:()=>{t.open((0,a.jsx)(o,{code:JSON.stringify(e,null,2)}))},children:"JSON"});if("date"===e.type)return i()(e.value).format(e.format);return e.value;case"string":if(c.s7.test(e.trim()))return(0,a.jsx)(p,{text:"URL Data",target:e});if(e.length>=50)return(0,a.jsx)(p,{text:"長文テキスト",target:e});return e;case"undefined":return"undefined";case"function":return"NaN";case"boolean":return e?"true":"false";case"symbol":return"symbol";default:return e}},n=(0,r.useMemo)(()=>"simple"===e.type?{headers:e.head,records:e.target.map(e=>e.map(l))}:"object"===e.type?{headers:e.keyMap.map(e=>{let t=e.displayName||e.keyName;return"symbol"==typeof t?"symbol":t}),records:e.target.map(t=>e.keyMap.map(e=>{let a=t[e.keyName];return null==a?null:l(a)}))}:null,[e]),u=(0,f.l)([e]);if(null!=n)return(0,a.jsx)("div",{className:(0,s.Z)("w-full px-2 perfect-scrollbar z-0",{border:e.bordered}),ref:u.ref,children:(0,a.jsxs)("table",{className:"table table-pin-rows",children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:n.headers.map((e,t)=>(0,a.jsx)("th",{children:(0,a.jsx)("div",{className:"flex justify-between items-center",children:e})},t))})}),(0,a.jsx)("tbody",{children:n.records.map((e,t)=>(0,a.jsx)("tr",{children:e.map((e,t)=>(0,a.jsx)(b,{children:e},t))},t))})]})})}},1433:function(e,t,l){"use strict";l.r(t),l.d(t,{DatabaseViewer:function(){return u}});var a=l(3827),r=l(4090),s=l(8151),n=l(7244);function i(e){let t=(0,s.X1)(e.data,{pageNo:0,pageSize:10});return(0,a.jsx)("div",{className:"w-full flex flex-col gap-10 h-full",children:null==t.value?null:null==t.value.target[0]?(0,a.jsx)("p",{className:"",children:"データが存在しません"}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-10 h-96 grow",children:[(0,a.jsx)(n.i,{type:"object",keyMap:Object.keys(t.value.target[0]).filter(e=>"rowdata"!==e&&"rowData"!==e).map(e=>({keyName:e})),target:t.value.target,bordered:!0}),(0,a.jsxs)("div",{className:"flex justify-between w-full h-fit",children:[(0,a.jsx)("button",{className:"btn btn-wide",disabled:!t.value.hasPrev,onClick:t.prev,children:"prev"}),(0,a.jsxs)("div",{children:[t.value.page,"/",t.value.maxPage]}),(0,a.jsx)("button",{className:"btn btn-wide",disabled:!t.value.hasNext,onClick:t.next,children:"next"})]})]})})})}let c=["users","games","broadcastTemplates","actions","followers","channelHistories","listenerHistories"];function u(){let[e,t]=(0,r.useState)(c[0]);return(0,a.jsxs)("div",{className:"flex w-full h-full grow gap-4 p-4",children:[(0,a.jsx)("ul",{className:"flex flex-col w-2/12 gap-5 h-full menu select-none",children:c.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"link w-full",onClick:()=>t(e),children:e})},e))}),(0,a.jsx)("div",{className:"flex w-10/12 grow grow h-full",children:(0,a.jsx)(i,{data:s.db[e]})})]})}}},function(e){e.O(0,[64,251,934,86,246,971,69,744],function(){return e(e.s=3201)}),_N_E=e.O()}]);