"use strict";(globalThis.webpackChunkadminn=globalThis.webpackChunkadminn||[]).push([[768],{174:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var n=t(5014),l=t(9035),a=t(6370),r=t(5973),i=t(9210),o=t(3955),d=t(9022),c=t(6204),h=t(9003),x=t(982),m=t(3188);const{Header:j,Content:u,Footer:p,Sider:b}=n.Z,{SubMenu:Z}=l.Z;function g(e){const[s,t]=(0,c.useState)(!1);return(0,c.useEffect)((()=>(console.log("component mount"),()=>{console.log("component unmount")})),[]),(0,m.jsxs)(n.Z,{style:{minHeight:"100vh"},children:[(0,m.jsxs)(b,{collapsible:!0,collapsed:s,onCollapse:e=>{console.log(e),t(e)},collapsedWidth:48,children:[(0,m.jsx)("div",{className:"logo",style:{height:"48px",backgroundColor:"#d0d0d0"}}),(0,m.jsxs)(l.Z,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[(0,m.jsx)(l.Z.Item,{style:{marginTop:0},icon:(0,m.jsx)(r.Z,{}),children:"Option 1"},"1"),(0,m.jsx)(l.Z.Item,{icon:(0,m.jsx)(i.Z,{}),children:(0,m.jsx)(h.rU,{to:"/dashboard/user/create",children:" User create"})},"2"),(0,m.jsx)(l.Z.Item,{icon:(0,m.jsx)(i.Z,{}),children:(0,m.jsx)(h.rU,{to:"/dashboard/user/list",children:" User list"})},"3"),(0,m.jsxs)(Z,{icon:(0,m.jsx)(o.Z,{}),title:"Team",children:[(0,m.jsx)(l.Z.Item,{children:"Team 1"},"6"),(0,m.jsx)(l.Z.Item,{children:"Team 2"},"8")]},"sub2"),(0,m.jsx)(l.Z.Item,{icon:(0,m.jsx)(d.Z,{}),children:"Files"},"9")]})]}),(0,m.jsxs)(n.Z,{className:"site-layout",children:[(0,m.jsx)(j,{style:{height:"48px",backgroundColor:"#fff"}}),(0,m.jsx)(u,{style:{margin:"5px"},children:(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)("div",{className:"center-screen",children:(0,m.jsx)(a.Z,{size:"large"})}),children:(0,m.jsx)(x.j3,{})})})]})]})}},6605:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(9256),l=t(3045),a=t(982),r=t(3188);const i=()=>{const e=(0,a.s0)();return(0,r.jsx)(n.ZP,{status:"404",title:"404",subTitle:"404",extra:(0,r.jsx)(l.Z,{type:"primary",onClick:()=>e("/"),children:"404"})})}},3878:(e,s,t)=>{t.r(s),t.d(s,{App:()=>k,default:()=>v});var n=t(174),l=t(6605),a=t(6204),r=t(982),i=t(3188);const o=(0,a.lazy)((()=>Promise.resolve().then(t.bind(t,6605)))),d=(0,a.lazy)((()=>Promise.all([t.e(433),t.e(796),t.e(23)]).then(t.bind(t,9577)))),c=[{path:"/create",element:(0,i.jsx)(o,{})},{path:"/list",element:(0,i.jsx)(d,{})}],h=()=>(0,r.V$)(c);var x=t(9003),m=t(9256),j=t(3045),u=t(2103),p=t(2273);const b=e=>{const{isAuthenticated:s}=(0,u.v9)((e=>e.auth)),t=(0,r.s0)(),n=(0,r.TH)(),{t:l}=(0,p.$)();return s?e.element:(0,i.jsx)(m.ZP,{status:"403",title:"403",subTitle:"hello",extra:(0,i.jsx)(j.Z,{type:"primary",onClick:()=>t("/login"+("?from="+encodeURIComponent(n.pathname)),{replace:!0}),children:l("add")})})},Z=(0,a.lazy)((()=>Promise.all([t.e(433),t.e(776),t.e(578)]).then(t.bind(t,6977)))),g=(0,a.lazy)((()=>Promise.all([t.e(433),t.e(796),t.e(23)]).then(t.bind(t,9577)))),f=[{path:"/login",element:(0,i.jsx)(Z,{})},{path:"/user",element:(0,i.jsx)(b,{element:(0,i.jsx)(g,{}),titleId:"title.login"})},{path:"/dashboard",element:(0,i.jsx)(n.default,{}),children:[{path:"user/*",element:(0,i.jsx)(h,{})}]},{path:"/dashboardd/*",element:(0,i.jsx)(h,{})},{path:"/",element:(0,i.jsx)(x.rU,{to:"/dashboard",children:"Go to user"})},{path:"*",element:(0,i.jsx)(l.default,{})}],y=()=>(0,r.V$)(f);function k(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x.VK,{basename:"/testadmin",children:(0,i.jsx)(y,{})})})}const v=k}}]);
//# sourceMappingURL=App.19362b61.chunk.js.map