(globalThis.webpackChunkadminn=globalThis.webpackChunkadminn||[]).push([[606],{5314:(e,n,s)=>{var t={"./en/common.json":[9384,122],"./en/errors.json":[4917,742],"./en/nono.json":[7435,903],"./vi/common.json":[4465,874],"./vi/errors.json":[8092,254],"./vi/nono.json":[8306,771]};function o(e){if(!s.o(t,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],o=n[0];return s.e(n[1]).then((()=>s.t(o,19)))}o.keys=()=>Object.keys(t),o.id=5314,e.exports=o},423:(e,n,s)=>{"use strict";s.r(n);var t=s(6204),o=s(2457),a=s(242),r=s(4265),i=s(1680),c=s(2530);const l={type:"backend",init:function(e,n,s){},read:function(e,n,t){s(5314)(`./${e}/${n}.json`).then((e=>{t(null,e)}))},save:function(e,n,s){},create:function(e,n,s,t){}};a.ZP.use(l).use(i.Z).use(r.Z).use(c.Db).init({fallbackLng:!1,debug:!1,defaultNS:"common",ns:["common"],backend:{loadPath:"/assets/locales/{{lng}}/{{ns}}.json"},react:{useSuspense:!1},load:"languageOnly",interpolation:{escapeValue:!1}});var u=s(2103),d=s(540),p=s(1335),h=s(2567);const y=e=>(0,p.UY)({auth:h.ZP,...e});const O=(0,d.xC)({reducer:y(),devTools:!1});O.asyncReducers={};const f=O;var g=s(6370),m=s(3188);const v=(0,t.lazy)((()=>Promise.all([s.e(755),s.e(768)]).then(s.bind(s,3878))));o.render((0,m.jsx)(u.zt,{store:f,children:(0,m.jsx)(t.Suspense,{fallback:(0,m.jsx)("div",{className:"center-screen",children:(0,m.jsx)(g.Z,{size:"large"})}),children:(0,m.jsx)(v,{})})}),document.getElementById("root"))},2567:(e,n,s)=>{"use strict";s.d(n,{ZP:()=>f,x4:()=>l});var t=s(540),o=s(1674);s.n(o)().create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"/testadmin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NX_PUBLIC_BASE_API_URL,headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0});var a=s(6412),r=s(7044);const i=new a.Z,c=(0,t.oM)({name:"auth",initialState:{user:null,isOtpVerify:!0,isRenderLogin:!0,numberOfVerifyOtpFail:0,isAuthenticated:!0},reducers:{setUser:(e,n)=>{e.user=n.payload},logoutSuccess:e=>{e.isRenderLogin=!0,e.isAuthenticated=!1,e.numberOfVerifyOtpFail=0},needVerifyOtp:(e,n)=>{e.isOtpVerify=n.payload},renderLogin:(e,n)=>{e.isRenderLogin=n.payload},authSuccess:(e,n)=>{e.isOtpVerify=!1,e.isRenderLogin=!1,e.isAuthenticated=!0,e.user=n.payload},verifyOtpFail:e=>{e.numberOfVerifyOtpFail+=1}}}),l=(0,t.hg)("login",(async(e,n)=>{let{email:s,password:t,setRenderLogin:o}=e,{dispatch:a}=n;try{return a(y({username:"hieu"})),!0}catch(r){console.log(r)}return!0})),{setUser:u,logoutSuccess:d,needVerifyOtp:p,renderLogin:h,authSuccess:y,verifyOtpFail:O}=((0,t.hg)("verifyOtp",(async(e,n)=>{let{email:s,otp:t}=e,{dispatch:o}=n;const a={status:"approved"};if("approved"!==a.status)o(O());else{const e=i.get("payloadClient"),n=JSON.parse(atob(e));o(y(n))}})),(0,t.hg)("logout",(async(e,n)=>{let{dispatch:s}=n;return r.Z.remove("payloadClient"),s(d()),!0})),c.actions),f=c.reducer}}]);
//# sourceMappingURL=mainapp.cd4eb061.chunk.js.map