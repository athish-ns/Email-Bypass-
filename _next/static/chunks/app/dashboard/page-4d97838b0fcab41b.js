(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{3265:function(e,s,t){Promise.resolve().then(t.bind(t,6265))},6265:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Dashboard}});var a=t(7437),i=t(1154),o=t(4187),l=t(8893),n=t(3398),r=t(3042),d=t(5029),u=t(3588),c=t(2164),m=t(155);let p=(0,m.Z)("/api/v1/outlook"),getEmails=async e=>{let s=await p.get("/",{params:e,timeout:18e4});return s.data},bypassOutlookAuth=async e=>{let s=await p.post("/bypass",{loginDetails:e},{timeout:18e4,headers:{"Content-Type":"application/json"}}),{success:t,message:a}=s.data;if(!t)throw Error(a);return s.data},getOutlookEmail=async e=>{let{loginDetails:s,emailId:t}=e,a=await p.get("/".concat(encodeURIComponent(t)),{params:{loginDetails:s},timeout:18e4});return a.data},deleteOutlookEmail=async e=>{let{loginDetails:s,emailId:t}=e,a=await p.delete("/".concat(encodeURIComponent(t)),{params:{loginDetails:s},timeout:18e4});return a.data},blockSender=async e=>{let{loginDetails:s,email:t,name:a,emailId:i}=e,o=await p.post("/block-sender",{email:t,name:a,emailId:i},{params:{loginDetails:s},timeout:18e4});return o.data};var g=t(4660);t(7960);let h=(0,g.Ue)(e=>({bypassDetails:{isLoggedIn:!1},setBypassDetails:s=>e(e=>({...e,bypassDetails:s}))}));var y=t(9412);function Dropdown(e){let{label:s,options:t,...i}=e;return(0,a.jsx)(y.P,{variant:"filled",size:"xl",label:s,data:t,defaultValue:t[0],...i})}var v=t(7328),x=t(8006),w=t.n(x),BypassLoginForm_LoginDetailsInput=function(e){return(0,a.jsx)(v.o,{variant:"filled",size:"xl",autoComplete:"nope",label:"Login Details",placeholder:"someone@outlook.com:mypassword",className:w().input,...e})},f=t(3841),b=t.n(f);let j=["Bypass 1"];function BypassLoginForm(){let e=h(e=>e.bypassDetails.isLoggedIn),s=h(e=>e.bypassDetails),t=h(e=>e.setBypassDetails),m=(0,r.c)({initialValues:{loginDetails:s.isLoggedIn?s.loginDetails:"",bypass:s.isLoggedIn?s.bypass:"Bypass 1"},validate:{loginDetails:e=>0===e.trim().length?"Login details is required":e.split(":").length<2?"Should be in format email:password":null}}),{mutate:p,isPending:g}=(0,u.D)({mutationFn:bypassOutlookAuth,mutationKey:["bypassOutlookAuth"],onSuccess:()=>{t({isLoggedIn:!0,...m.values}),d.N9.show({title:"Connected successfully",message:"Bypassed successfull",color:"green"})},onError:e=>{if((0,c.IZ)(e)){var s,t,a;if((null===(s=e.response)||void 0===s?void 0:s.status)===400){m.setFieldError("loginDetails",null===(a=e.response)||void 0===a?void 0:a.data.message);return}d.N9.show({title:"Error",message:null===(t=e.response)||void 0===t?void 0:t.data.message,color:"red"});return}d.N9.show({title:"Error",message:e.message,color:"red"})}});return(0,a.jsxs)(i.x,{pos:"relative",children:[(0,a.jsx)(o.f,{visible:g,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),(0,a.jsxs)("form",{className:b().container,onSubmit:m.onSubmit(e=>{p(e.loginDetails)}),children:[(0,a.jsxs)(l.Z,{className:b().inputGroup,children:[(0,a.jsx)(BypassLoginForm_LoginDetailsInput,{readOnly:e,...m.getInputProps("loginDetails")}),(0,a.jsx)(Dropdown,{label:"Bypass",options:j,readOnly:e,...m.getInputProps("bypass")})]}),(0,a.jsx)(l.Z,{className:b().actionButton,children:(0,a.jsx)(n.z,{size:"xl",variant:"light",fullWidth:!0,onClick:s=>{e&&(s.preventDefault(),t({isLoggedIn:!1}),m.reset())},type:"submit",children:e?"Change account":"Bypass"})})]})]})}var _=t(2265),D=t(7185),L=t(911),I=t(7108),k=t(8544),E=t(5596),B=t(7192),N=t(8038),P=t(8105),S=t(6855),C=t(4426),F=t(4659);let M=(0,g.Ue)(e=>({mails:[],mailPreviews:[],totalMails:0,setPreviews:s=>e(e=>({...e,mailPreviews:s})),setMails:s=>e(e=>({...e,mails:s})),setTotalMails:s=>e(e=>({...e,totalMails:s}))}));var z=t(7663),Z=t(2444),O=t(1522),T=t(1950),A=t(1394),V=t(4548),q=t.n(V),K=t(6537),U=t.n(K);function MailViewerTable(e){let{page:s,setPage:t,search:n}=e,r=h(e=>e.bypassDetails),m=M(e=>e.mailPreviews),p=M(e=>e.totalMails),g=M(e=>e.setPreviews),y=M(e=>e.setTotalMails),[v,x]=(0,_.useState)(),w=(0,N.NL)(),[f,{open:b,close:j}]=(0,Z.q)(),{data:D,isFetching:L,isLoading:k,error:E}=(0,z.a)({queryKey:["mailPreviews",s,r.isLoggedIn,n],queryFn:()=>r.isLoggedIn?getEmails({page:s,limit:30,loginDetails:r.loginDetails,search:n}):{emails:[],totalEmails:0},refetchOnWindowFocus:!1,retry:!1});(0,_.useEffect)(()=>{D&&(g(D.emails),y(D.totalEmails))},[D,g,y]),(0,_.useEffect)(()=>{if(E&&(0,c.IZ)(E)){var e;d.N9.show({title:"Error",message:null===(e=E.response)||void 0===e?void 0:e.data.message,color:"red"})}},[E]);let{data:{data:B}={},isFetching:V,isLoading:K}=(0,z.a)({queryKey:["email",f,v],queryFn:()=>f&&v&&r.isLoggedIn?getOutlookEmail({loginDetails:r.loginDetails,emailId:v.id}):{data:{html:"",text:""}},refetchOnWindowFocus:!1,staleTime:18e4,retry:!1}),{mutate:U}=(0,u.D)({mutationKey:["deleteEmail"],mutationFn:e=>r.isLoggedIn?deleteOutlookEmail({loginDetails:r.loginDetails,emailId:e}):Promise.resolve(),onSuccess:()=>{w.invalidateQueries({queryKey:["mailPreviews",s,r.isLoggedIn,n]}),d.N9.show({title:"Success",message:"Email deleted",color:"green"})},onError:e=>{if((0,c.IZ)(e)){var s,t;d.N9.show({title:"Error",message:null!==(t=null===(s=e.response)||void 0===s?void 0:s.data.message)&&void 0!==t?t:"Something went wrong",color:"red"})}}}),{mutate:Q}=(0,u.D)({mutationKey:["blockSender"],mutationFn:e=>{let{email:s,name:t,emailId:a}=e;return r.isLoggedIn?blockSender({loginDetails:r.loginDetails,email:s,name:t,emailId:a}):Promise.resolve()},onSuccess:()=>{w.invalidateQueries({queryKey:["mailPreviews",s,r.isLoggedIn,n]}),d.N9.show({title:"Success",message:"Blocked sender",color:"green"})},onError:e=>{if((0,c.IZ)(e)){var s,t;d.N9.show({title:"Error",message:null!==(t=null===(s=e.response)||void 0===s?void 0:s.data.message)&&void 0!==t?t:"Something went wrong",color:"red"})}}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P.wQ,{fetching:L||k,loaderType:"oval",loaderColor:"blue",loaderBackgroundBlur:2,height:500,withTableBorder:!0,withColumnBorders:!0,pinLastColumn:!0,records:m,columns:[{title:"From",accessor:"from.text",width:(0,I.h)("300px")},{accessor:"subject",width:(0,I.h)("500px")},{accessor:"date",width:(0,I.h)("160px"),render:e=>q()(e.date).isSame(q()(),"day")?q()(e.date).fromNow():q()(e.date).format("YYYY-MM-DD hh:mm A")},{accessor:"actions",title:"Actions",textAlign:"center",render:e=>(0,a.jsxs)(l.Z,{gap:4,justify:"right",wrap:"nowrap",children:[(0,a.jsx)(S.A,{size:"sm",variant:"subtle",color:"grey",onClick:s=>{s.stopPropagation(),Q({email:e.from.emailAddress,name:e.from.name,emailId:e.id})},children:(0,a.jsx)(C.u,{label:"Block sender",position:"left",children:(0,a.jsx)(O.Z,{size:16})})}),(0,a.jsx)(S.A,{size:"sm",variant:"subtle",color:"blue",onClick:s=>{s.stopPropagation(),x(e),b()},children:(0,a.jsx)(C.u,{label:"View Email",position:"top",children:(0,a.jsx)(T.Z,{size:16})})}),(0,a.jsx)(S.A,{size:"sm",variant:"subtle",color:"red",onClick:s=>{s.stopPropagation(),U(e.id)},children:(0,a.jsx)(C.u,{label:"Delete Email",position:"top",children:(0,a.jsx)(A.Z,{size:16})})})]})}],totalRecords:p,recordsPerPage:30,page:s,onPageChange:e=>t(e)}),(0,a.jsx)(F.u,{opened:f,onClose:()=>{x(void 0),j()},title:"Email",size:"80%",children:(0,a.jsxs)(i.x,{pos:"relative",size:"xl",children:[(0,a.jsx)(o.f,{visible:V||K,zIndex:1e3,overlayProps:{radius:"sm"}}),(null==B?void 0:B.html)?(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==B?void 0:B.html}}):(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==B?void 0:B.text}})]})})]})}q().extend(U());var Q=t(6889),R=t.n(Q);function MailViewer(){let[e,s]=(0,_.useState)(1),t=h(e=>e.bypassDetails),[i,o]=(0,_.useState)(""),[n]=(0,k.c)(i,200),r=(0,N.NL)(),d=(0,_.useCallback)(()=>{r.invalidateQueries({queryKey:["mailPreviews",e,t.isLoggedIn,n]})},[t.isLoggedIn,e,r,n]);return t.isLoggedIn?(0,a.jsxs)(D.W,{size:"lg",className:R().container,children:[(0,a.jsxs)(l.Z,{grow:!0,children:[(0,a.jsxs)(l.Z,{className:R().header,children:[(0,a.jsx)(L.D,{order:3,className:R().title,children:"Mail Viewer"}),(0,a.jsx)(E.Z,{className:R().reload,onClick:()=>{d()}})]}),(0,a.jsx)(v.o,{value:i,onChange:e=>{o(e.currentTarget.value)},placeholder:"Search",leftSection:(0,a.jsx)(B.Z,{style:{width:(0,I.h)(16),height:(0,I.h)(16)},stroke:1.5})})]}),(0,a.jsx)(MailViewerTable,{page:e,setPage:s,search:n})]}):null}function Dashboard(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(BypassLoginForm,{}),(0,a.jsx)(MailViewer,{})]})}},155:function(e,s,t){"use strict";t.d(s,{n:function(){return l}});var a=t(2173);let i="https://api.ezobypass.com";if(!i)throw Error("No Api apiBaseUrl");let o=Number("10000")||5e3,l=i;a.default.defaults.headers.post["Content-Type"]="application/json",s.Z=e=>{let s=a.default.create({baseURL:"".concat(i,"/").concat(e.replace(/^\//,"")),timeout:o,headers:{"Content-Type":"application/json"}});return s.interceptors.request.use(async e=>{let s=sessionStorage.getItem("accessToken");return s&&e.headers.set("Authorization",s.replace(/(^")|("$)/g,"")),e},e=>Promise.reject(e)),s}},3841:function(e){e.exports={container:"BypassLoginForm_container__geGVx",inputGroup:"BypassLoginForm_inputGroup__tkRd1",actionButton:"BypassLoginForm_actionButton__l0xo6",inputButton:"BypassLoginForm_inputButton__X4Q5H"}},8006:function(e){e.exports={input:"LoginDetailsInput_input__tSw8v"}},6889:function(e){e.exports={container:"MailViewer_container__qApOM",header:"MailViewer_header__i_Kb7",reload:"MailViewer_reload__ee_0Y"}}},function(e){e.O(0,[27,873,245,715,416,971,472,744],function(){return e(e.s=3265)}),_N_E=e.O()}]);