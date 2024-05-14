(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{28137:function(e,l,s){Promise.resolve().then(s.bind(s,17755))},8913:function(e,l,s){"use strict";s.d(l,{R:function(){return i}});var t=s(57437),n=s(2265),r=s(97383);let a=e=>(0,t.jsxs)("div",{className:"flex flex-col gap-10 px-8 py-4 select-none",children:[(0,t.jsx)("p",{className:"text-large text-center",children:e.title}),(0,t.jsxs)("div",{className:"flex gap-2 justify-center",children:[(0,t.jsx)("button",{className:"btn btn-success",onClick:e.onSuccess,children:e.successText||"はい"}),(0,t.jsx)("button",{className:"btn btn-ghost",onClick:e.onFail,children:e.failText||"いいえ"})]})]}),i=()=>{let e=(0,r.v)();return{open:(0,n.useCallback)(l=>{let{onSuccess:s,onFail:n,...r}=l;e.open((0,t.jsx)(a,{...r,onFail:()=>{e.close(),null!=n&&n()},onSuccess:()=>{e.close(),null!=s&&s()}}))},[]),close:(0,n.useCallback)(()=>{e.close()},[])}}},72037:function(e,l,s){"use strict";s.d(l,{k:function(){return n}});var t=s(57437);let n=e=>(0,t.jsxs)("div",{className:"stat",children:[null==e.icon?null:(0,t.jsx)("div",{className:"stat-figure",children:e.icon}),null==e.title?null:(0,t.jsx)("div",{className:"stat-title",children:e.title}),null==e.value?null:(0,t.jsx)("div",{className:"stat-value",children:(0,t.jsx)("span",{className:"",children:e.value})}),null==e.caption?null:(0,t.jsx)("div",{className:"stat-desc",children:e.caption})]})},17755:function(e,l,s){"use strict";s.d(l,{BroadcastContent:function(){return eu}});var t=s(57437),n=s(2265),r=s(22646),a=s(97383),i=s(91279),c=s(67687),d=s(23332),o=s(44839);let u=e=>{let{type:l,color:s,image:n,imageNode:r,message:a,header:i,footer:c,onClickAvater:d}=e;return(0,t.jsxs)("div",{className:(0,o.Z)("chat",l),children:[null==(n||r)?null:(0,t.jsx)("div",{className:"chat-image avatar cursor-pointer",onClick:d,children:(0,t.jsx)("div",{className:"w-10 rounded-full border-2",children:r||(0,t.jsx)("img",{...n})})}),null==i?null:(0,t.jsx)("div",{className:"chat-header",children:i}),(0,t.jsx)("p",{className:(0,o.Z)("chat-bubble",s),children:a}),null==c?null:(0,t.jsx)("div",{className:"chat-footer",children:c})]})},{replace:x}="",m=/[&<>'"]/g,h={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},j=e=>h[e],f=e=>x.call(e,m,j);var p=s(51416),v=s(82876),N=s(12853),b=s(53731),g=s(59151),w=s(14878),y=s(62022),k=s(11581);let C=(0,n.createContext)(null),I=()=>(0,n.useContext)(C),P=(0,N.kQ)(I,["displayName","login"],{children:"........."}),_=(0,N.kQ)(I,["id"],{children:"........."}),R=((0,N.kQ)(I,["description"],{children:"........."}),(0,N.kQ)(I,["metaComment"],{children:"........."}),(0,N.RY)(I,["createdAt"],{children:"...."}),(0,N.RY)(I,["updateAt"],{children:"...."}),(0,N.uB)(I,{src:["profileImageUrl"],alt:["login"]},b.Y_.PROFILE_404,{className:"inline-block aspect-square select-none"})),Y=((0,N.uB)(I,{src:["offlineImageUrl"],alt:["login"]},b.Y_.NONE,{className:"inline-block aspect-square select-none"}),{Provider:e=>{let l=(0,w.S)(),s=(0,i.yR)(async()=>{if(null!=e.id)return await l.fetchById(e.id)},[e.id]);return(0,t.jsx)(C.Provider,{value:s,children:e.children})},Id:_,useUser:I,useUpdateUser:()=>{let e=I();return(0,g._o)(null==e?void 0:e.id)},Name:P,ProfileImage:R,EditableMetaComment:e=>{let l=I(),s=(0,n.useRef)(null),[r,a]=(0,n.useState)(""),i=(0,g._o)(null==l?void 0:l.id);(0,n.useEffect)(()=>{null!=l&&null!=s.current&&(a(l.metaComment||""),s.current.value=l.metaComment||"")},[null==l?void 0:l.id]);let c=(0,n.useCallback)(l=>{a(l.currentTarget.value),i({metaComment:l.currentTarget.value}),e.onChange&&e.onChange(l)},[]);return(0,t.jsx)("textarea",{className:"textarea textarea-bordered leading-4",placeholder:"Bio",rows:6,...e,onChange:c,defaultValue:r,ref:s})},FollowerCount:()=>{let e=I(),l=(0,y.Gq)(async()=>{if((null==e?void 0:e.id)!=null)return(await (0,v.ZY)({broadcaster_id:e.id})).total||0},[null==e?void 0:e.id]);return(0,t.jsx)("span",{children:null!=l?l:"..."})},TwitchLink:e=>{let l=I();if(null!=l)return(0,t.jsxs)("a",{className:"link link-info flex gap-1 py-2 items-center",...e,target:"__blank",href:"https://www.twitch.tv/".concat(l.login),children:["Twitch ",k.U.EXTERNAL]})}}),E=(0,n.createContext)(void 0),B=()=>(0,n.useContext)(E),S=(0,N.RY)(B,["timestamp"]),U=((0,N.kQ)(B,["bits"]),(0,n.createContext)(void 0)),D=()=>(0,n.useContext)(U),M=((0,N.kQ)(D,["userInput"]),(0,N.kQ)(D,["userTitle"])),T=(0,n.createContext)(void 0),A=()=>(0,n.useContext)(T),q=e=>{let{children:l,data:s,...n}=e;return(0,t.jsx)("ul",{...n,children:null==s?void 0:s.map(e=>(0,t.jsx)(E.Provider,{value:e,children:l},e.id))})},Z=e=>(0,t.jsx)("li",{...e}),F=e=>{let l=B();return(0,t.jsx)(Y.Provider,{id:null==l?void 0:l.userId,children:e.children})},L=e=>{let l=B();return(null==l?void 0:l.messageType)==="reward"?(0,t.jsx)(U.Provider,{value:l,children:e.children}):null},O=e=>{let l=B();return(null==l?void 0:l.messageType)==="chat"?(0,t.jsx)(T.Provider,{value:l,children:e.children}):null},Q=e=>{let l=A();return(0,t.jsx)("span",{...e,children:null==l?void 0:l.fragments.map((e,l)=>{switch(e.type){case"emote":return(0,t.jsx)("img",{src:(0,v.jp)(e.emote.id),alt:e.text,className:"inline mx-1"},l);case"text":return(0,t.jsx)("span",{className:"break-all",dangerouslySetInnerHTML:{__html:(0,p.G9)(f(e.text))}},l);case"mention":return(0,t.jsx)("a",{className:"link link-info",target:"__blank",href:(0,v.yd)(e.mention.user_login).CHANNEL,children:e.text},l)}})})},z=()=>{let e=es();return(0,t.jsxs)(Z,{className:"w-full px-2",children:[(0,t.jsx)(O,{children:(0,t.jsx)(u,{type:"chat-end",imageNode:(0,t.jsx)(Y.ProfileImage,{onClick:()=>e(),tabIndex:0}),header:(0,t.jsx)(Y.Name,{className:"inline-block mb-1",onClick:()=>e(),tabIndex:0}),message:(0,t.jsx)(Q,{}),footer:(0,t.jsx)(S,{className:"inline-block mt-1",format:"hh:mm:ss"})})}),(0,t.jsx)(L,{children:(0,t.jsxs)("div",{className:"flex items-center gap-2 justify-center",children:[(0,t.jsx)(Y.ProfileImage,{className:"rounded-full w-10 border-2 overflow-hidden cursor-pointer",tabIndex:0,onClick:()=>e()}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(Y.Name,{className:"font-bold cursor-pointer",tabIndex:0,onClick:()=>e()}),(0,t.jsx)("span",{children:"が"}),(0,t.jsx)(M,{className:"font-bold"}),(0,t.jsx)("span",{children:"と交換しました。"})]})]})})]})},G=()=>(0,t.jsxs)(Z,{className:"w-full border-b-2 last:border-0 pb-2",children:[(0,t.jsx)(O,{children:(0,t.jsx)(Q,{})}),(0,t.jsx)(L,{children:(0,t.jsx)(M,{className:"font-bold"})})]}),H=()=>(0,t.jsxs)(Z,{className:"w-full border-b-2 px-2 last:border-0 pb-2 flex items-center gap-3",children:[(0,t.jsx)(Y.Name,{className:" inline-block text-xs font-bold min-w-32"}),(0,t.jsxs)("span",{className:"inline-block grow",children:[(0,t.jsx)(O,{children:(0,t.jsx)(Q,{})}),(0,t.jsx)(L,{children:(0,t.jsxs)("span",{className:"inline-flex gap-2 items-center",children:[(0,t.jsx)("span",{className:" inline-block text-sm font-bold",children:"リワード交換"}),(0,t.jsx)(M,{className:" text-info font-black"})]})})]}),(0,t.jsx)(S,{format:"hh:mm:ss",className:"text-xs opacity-70"})]}),X=e=>{let l=(0,i.yR)(async()=>await J(e.query).reverse().sortBy("timestamp"),[e.query]),s=(0,r.l)([l]),a=(0,n.useMemo)(()=>{switch(e.type){case"viewewr":break;case"flat":return(0,t.jsx)(G,{});case"mini":return(0,t.jsx)(H,{})}return(0,t.jsx)(z,{})},[e.type]);return(0,t.jsx)("div",{className:"h-full perfect-scrollbar",ref:s.ref,children:(0,t.jsx)(q,{data:l||[],className:"flex flex-col gap-2 py-8",children:(0,t.jsx)(F,{children:a})})})},$=e=>{var l,s,n,a;let i=(0,c.X1)(J({type:"userId",userId:e.userId}),{pageNo:0,pageSize:20},[e.userId]),d=(0,r.l)([e.userId]);return(0,t.jsxs)("div",{className:"h-full flex flex-col",children:[(0,t.jsx)("div",{ref:d.ref,className:"perfect-scrollbar",children:(0,t.jsx)(q,{data:(null===(l=i.value)||void 0===l?void 0:l.target)||[],className:"flex flex-col gap-2 py-6 px-2",children:(0,t.jsx)(G,{})})}),(0,t.jsxs)("div",{className:"flex justify-between border-t-2 items-center select-none",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("button",{className:"btn btn-ghost btn-xs",onClick:i.prev,disabled:!(null===(s=i.value)||void 0===s?void 0:s.hasPrev),children:"prev"}),(0,t.jsx)("p",{children:"\xa0"}),(0,t.jsx)("button",{className:"btn btn-ghost btn-xs",onClick:i.next,disabled:!(null===(n=i.value)||void 0===n?void 0:n.hasNext),children:"next"})]}),(0,t.jsxs)("div",{className:"px-2 py-1 text-right",children:["総コメント数:",null===(a=i.value)||void 0===a?void 0:a.count]})]})]})},J=e=>{switch(e.type){case"timestamp":{let l={from:Number(e.from||(0,d.B)(new Date).subtract(10,"day").toDate()),to:Number(e.to||(0,d.B)(new Date).add(10,"day").toDate())},s={where:"timestamp",from:l.from,to:l.to},t=c.db.actions.where(s.where).between(s.from,s.to);if(null==e.limit)return t;return t.limit(e.limit)}case"userId":{let l=c.db.actions.where("userId").equals(e.userId).reverse();if(null==e.limit)return l;return l.limit(e.limit)}default:throw Error("")}};var K=s(91825);let V=(0,n.createContext)(void 0),W=()=>(0,n.useContext)(V),ee=e=>{let{value:l,children:s}=e;return(0,t.jsx)(V.Provider,{value:l,children:s})},el={RecordProvider:e=>{let{children:l,...s}=e,n=(0,i.yR)(async()=>{let e=await c.db.getMe();return null==e?[]:(await c.db.followers.where("channelId").equals(e.id).sortBy("followedAt")).reverse().filter(K.h.notDeleted).filter(e=>null==e.deletedAt)},[]);return(0,t.jsx)("tbody",{...s,children:null==n?void 0:n.map(e=>(0,t.jsx)(ee,{value:e,children:l},e.id))})},Provider:e=>{let{id:l,children:s}=e,n=(0,i.yR)(async()=>await c.db.followers.where("userId").equals(l).first(),[l]);return(0,t.jsx)(V.Provider,{value:n,children:s})},FollowedAt:(0,N.RY)(W,["followedAt"]),UserProvider:e=>{let l=W();return(0,t.jsx)(e.Povider,{id:null==l?void 0:l.userId,children:e.children})},Badge:e=>{let l=W();switch(e.type||"tag"){case"tag":if(null==l)return(0,t.jsx)("span",{className:"badge badge-info badge-sm opacity-30 select-none",children:"フォロワー"});return(0,t.jsx)("span",{className:"badge badge-info badge-sm select-none",children:"フォロワー"});case"icon":if(null==l)return(0,t.jsx)("span",{className:"opacity-0 select-none",children:"♡"});return(0,t.jsx)("span",{className:" text-accent select-none",children:"♥"})}}},es=()=>{let e=(0,a.v)(),l=Y.useUser();return(0,n.useCallback)(s=>{let n=s||(null==l?void 0:l.id);null!=n&&e.open((0,t.jsx)(et,{userId:n}))},[l])},et=e=>(0,t.jsx)(Y.Provider,{id:e.userId,children:(0,t.jsx)(el.Provider,{id:e.userId,children:(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsxs)("div",{className:"flex gap-6 content-stretch bg-cover",children:[(0,t.jsx)("div",{className:"chat-image avatar dropdown dropdown-end select-none",children:(0,t.jsx)("div",{className:"w-40 rounded-full border",children:(0,t.jsx)(Y.ProfileImage,{})})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("p",{children:["名前: ",(0,t.jsx)(Y.Name,{})]}),(0,t.jsxs)("p",{children:["ID: ",(0,t.jsx)(Y.Id,{})]}),(0,t.jsxs)("p",{children:["フォロワー数: ",(0,t.jsx)(Y.FollowerCount,{})]}),(0,t.jsxs)("p",{children:["フォロー開始日: ",(0,t.jsx)(el.FollowedAt,{format:"YYYY/MM/DD"})]}),(0,t.jsx)("div",{className:"mt-auto select-none",children:(0,t.jsx)(el.FollowedAt,{})})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:(0,t.jsx)(Y.TwitchLink,{})})}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("p",{className:"font-black",children:"BIO"}),(0,t.jsx)(Y.EditableMetaComment,{})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("p",{className:"font-black",children:"コメント一覧"}),(0,t.jsx)("div",{className:"h-56 border rounded-md",children:(0,t.jsx)($,{userId:e.userId})})]})]})})}),en=()=>{let e=es();return(0,t.jsxs)("tr",{className:"h-16 cursor-pointer select-none",onClick:()=>e(),tabIndex:0,children:[(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"flex justify-center items-center",children:(0,t.jsx)(Y.ProfileImage,{className:"rounded-full overflow-hidden w-10 border-2"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(Y.Name,{})}),(0,t.jsx)("td",{children:(0,t.jsx)(el.FollowedAt,{format:"YYYY/MM/DD hh:mm:ss",className:"whitespace-nowrap"})})]})},er=()=>{let e=(0,r.l)([]);return(0,t.jsx)("div",{className:" perfect-scrollbar",ref:e.ref,children:(0,t.jsxs)("table",{className:" table table-pin-rows z-0 table-xs",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"w-16 text-center",children:"画像"}),(0,t.jsx)("th",{className:"",children:"名前"}),(0,t.jsx)("th",{className:"w-36 text-center",children:"フォロー日"})]})}),(0,t.jsx)(el.RecordProvider,{children:(0,t.jsx)(el.UserProvider,{Povider:Y.Provider,children:(0,t.jsx)(en,{})})})]})})};var ea=s(72037);let ei=()=>{let e=(0,i.yR)(()=>c.db.getLive(),[]);return(0,t.jsx)(ea.k,{icon:k.U.EYE,value:"".concat((null==e?void 0:e.viewCount)||0,"人"),title:"ライブ視聴者数"})};var ec=s(8913);let ed=()=>{let e=es(),l=Y.useUpdateUser(),s=(0,ec.R)(),r=(0,n.useCallback)(()=>{s.open({title:"スパムとして認識させますか？",onSuccess:()=>{l({isSpam:!0})}})},[]);return(0,t.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[(0,t.jsx)("span",{className:" inline-block w-full whitespace-nowrap text-xs",children:(0,t.jsx)(Y.Name,{className:" cursor-pointer",onClick:()=>e()})}),(0,t.jsx)(el.Badge,{type:"icon"}),(0,t.jsx)("span",{className:"cursor-pointer",onClick:r,children:(0,t.jsx)(k.U.CROSS.SIZE,{size:16})})]})},eo=e=>{let l=(0,i.yR)(async()=>{let e=await c.db.getChatters(),l=await c.db.getMe();if(null!=l&&null!=e)return e.users.filter(e=>e!==l.id)},[]),s=(0,r.l)([l]);switch(e.type){case"number":return(0,t.jsx)("div",{children:(null==l?void 0:l.length)||0});case"stat":return(0,t.jsx)(ea.k,{title:(0,t.jsx)("div",{className:"flex gap-2",children:"チャットユーザー数"}),value:"".concat((null==l?void 0:l.length)||0,"人"),icon:k.U.COMMENT});case"list":return(0,t.jsx)("div",{className:(0,o.Z)("px-1 py-2 perfect-scrollbar"),ref:s.ref,children:(0,t.jsx)("ul",{className:"flex flex-col gap-1",children:null==l?void 0:l.map(e=>(0,t.jsx)(el.Provider,{id:e,children:(0,t.jsx)(Y.Provider,{id:e,children:(0,t.jsx)(ed,{})})},e))})})}},eu=()=>{let[e,l]=(0,n.useState)("viewewr");return(0,t.jsxs)("div",{className:"flex flex-col gap-2 h-full py-2",children:[(0,t.jsx)("div",{className:"h-fit px-2",children:(0,t.jsxs)("div",{className:"flex stats shadow mt-2",children:[(0,t.jsx)(eo,{type:"stat"}),(0,t.jsx)(ei,{})]})}),(0,t.jsx)("div",{className:"h-96 grow px-2",children:(0,t.jsxs)("div",{className:"flex w-full h-full gap-2",children:[(0,t.jsxs)("div",{className:"flex flex-col w-44",children:[(0,t.jsx)("p",{className:"whitespace-nowrap px-4 py-2 font-black text-xs bg-base-300 text-base-content dasy-rounded",children:"チャットユーザ一覧"}),(0,t.jsx)(eo,{type:"list"})]}),(0,t.jsxs)("div",{className:"flex flex-col w-5/12",children:[(0,t.jsx)("p",{className:"whitespace-nowrap px-4 py-2 font-black text-xs bg-base-300 text-base-content dasy-rounded",children:"フォロワ一覧"}),(0,t.jsx)(er,{})]}),(0,t.jsxs)("div",{className:"flex flex-col w-5/12 grow",children:[(0,t.jsxs)("div",{className:"whitespace-nowrap px-4 py-2 font-black text-xs bg-base-300 text-base-content dasy-rounded flex gap-5 items-center justify-between",children:["コメント一覧",(0,t.jsxs)("div",{className:"flex gap-2 items-center select-none",children:[(0,t.jsx)("span",{children:"表示タイプ"}),(0,t.jsxs)("select",{value:e,className:" cursor-pointer select select-xs select-bordered",onChange:e=>l(e.currentTarget.value),children:[(0,t.jsx)("option",{value:"viewewr",children:"Line風"}),(0,t.jsx)("option",{value:"mini",children:"小さめ"}),(0,t.jsx)("option",{value:"flat",children:"最小限"})]})]})]}),(0,t.jsx)(X,{type:e,query:{type:"timestamp",limit:500}})]})]})})]})}},12853:function(e,l,s){"use strict";s.d(l,{RY:function(){return i},kQ:function(){return a},uB:function(){return c}});var t=s(57437);s(2265);var n=s(44839),r=s(23332);let a=(e,l,s)=>n=>{let r=e();if(null==r)return(0,t.jsx)("span",{...s,...n});let a=l.map(e=>r[e]).find(e=>null!=e);switch(typeof a){case"bigint":case"boolean":case"number":case"string":return(0,t.jsx)("span",{...s,...n,children:a.toString()});default:throw Error("")}},i=(e,l,s)=>n=>{let a=e();if(null==a)return(0,t.jsx)("time",{...s,...n});let i=l.map(e=>a[e]).find(e=>null!=e);switch(typeof i){case"number":case"string":case"object":if(!(i instanceof Date)&&!r.B.isDayjs(i))return;return(0,t.jsx)("time",{...s,...n,children:(0,r.B)(i).format(n.format||"YYYY/MM/DD hh:mm:ss")});default:throw Error("")}},c=(e,l,s,r)=>a=>{let i=e();if(null==i)return(0,t.jsx)("img",{...r,...a,className:(0,n.Z)(null==r?void 0:r.className,a.className),src:s.src,alt:s.alt});let c=l.src.map(e=>i[e]).find(e=>null!=e),d=l.alt.map(e=>i[e]).find(e=>null!=e);return"string"==typeof c&&"string"==typeof d?(0,t.jsx)("img",{...r,...a,className:(0,n.Z)(null==r?void 0:r.className,a.className),src:c,alt:d}):(0,t.jsx)("img",{...r,...a,className:(0,n.Z)(null==r?void 0:r.className,a.className),src:s.src,alt:s.alt})}},14878:function(e,l,s){"use strict";s.d(l,{S:function(){return r},UserContextProvider:function(){return a}});var t=s(59151);let n=(0,s(39813).a)({fetcher:t.Rf,idKey:"id"}),r=n.useContext,a=n.Provider},51416:function(e,l,s){"use strict";s.d(l,{CB:function(){return a},G9:function(){return n},Pb:function(){return r}});let t=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,n=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{start:'<a class="link link-info" href="$&" target="__blank">',end:"</a>"};return e.replace(t,"".concat(l.start,"$&").concat(l.end))},r=e=>{try{return JSON.parse(e),!0}catch(e){return!1}},a=e=>{try{return new URL(e),!0}catch(e){return!1}}}},function(e){e.O(0,[772,22,425,299,478,971,23,744],function(){return e(e.s=28137)}),_N_E=e.O()}]);