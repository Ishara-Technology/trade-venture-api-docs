(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{4851:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/reset-password",function(){return t(3705)}])},1057:function(e,s,t){"use strict";var n=t(1527);t(959);let r={logo:(0,n.jsx)("span",{children:"Trade Vencher API docs"}),project:{link:"https://github.com/shahjalal-bu"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/shahjalal-bu",footer:{text:"All Rights Reserved @ Ishara.tech"}};s.Z=r},3705:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l.Z}});var n=t(1527),r=t(7265),i=t(4603),a=t(1057);t(6971);var d=t(313);t(8090);var l=t(5228);function o(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",span:"span",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Forget Password API"}),"\n",(0,n.jsx)(s.p,{children:"This API endpoint allows users to initiate the password reset process by requesting a password reset link."}),"\n",(0,n.jsx)(s.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"POST"})," ",(0,n.jsx)(s.code,{children:"/api/users/forgot-password"})]}),"\n",(0,n.jsx)(s.h2,{id:"payload-structure",children:"Payload Structure"}),"\n",(0,n.jsx)(s.p,{children:"Below is the structure of the JSON payload required for initiating the password reset process:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Field"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"email"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"The email address of the user requesting the reset."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"example-request-payload",children:"Example Request Payload"}),"\n",(0,n.jsx)(s.pre,{"data-language":"json","data-theme":"default",filename:"forgot-password.json",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"email"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"john.doe@example.com"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"response-structure",children:"Response Structure"}),"\n",(0,n.jsx)(s.p,{children:"The following table outlines the structure of the response after a successful password reset request:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Field"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"message"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"A confirmation message indicating the email was sent."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"example-response",children:"Example Response"}),"\n",(0,n.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"If the email exists in our system, a password reset link has been sent."'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"argument-types",children:"Argument Types"}),"\n",(0,n.jsx)(s.p,{children:"Here is a table summarizing the argument types for better clarity:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Argument"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"email"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The email address of the user."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The email address provided must be associated with an existing account."}),"\n",(0,n.jsx)(s.li,{children:"For security reasons, the response message does not indicate whether the email exists in the system."}),"\n"]})]})}e=t.hmd(e),(0,r.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)},nextraLayout:i.ZP,hot:e.hot,pageOpts:{filePath:"pages/auth/reset-password.mdx",route:"/auth/reset-password",frontMatter:{},pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"auth",route:"/auth",children:[{kind:"MdxPage",name:"create-user",route:"/auth/create-user"},{kind:"MdxPage",name:"index",route:"/auth"},{kind:"MdxPage",name:"reset-password",route:"/auth/reset-password"},{kind:"MdxPage",name:"sign-in",route:"/auth/sign-in"},{kind:"Meta",data:{index:"Auth Introduction","create-user":"Create User","reset-password":"Reset Password","sign-in":"Sign-In User"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{index:"Introduction Api Docs",auth:"Auth Module",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://github.com/shahjalal-bu",newWindow:!0}}}],headings:[{depth:1,value:"Forget Password API",id:"forget-password-api"},{depth:2,value:"Endpoint",id:"endpoint"},{depth:2,value:"Payload Structure",id:"payload-structure"},{depth:2,value:"Example Request Payload",id:"example-request-payload"},{depth:2,value:"Response Structure",id:"response-structure"},{depth:2,value:"Example Response",id:"example-response"},{depth:2,value:"Argument Types",id:"argument-types"},{depth:2,value:"Notes",id:"notes"}],timestamp:1731770454e3,flexsearch:{codeblocks:!0},title:"Forget Password API"},themeConfig:a.Z,pageNextRoute:"/auth/reset-password",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[774,589,888,179],function(){return e(e.s=4851)}),_N_E=e.O()}]);