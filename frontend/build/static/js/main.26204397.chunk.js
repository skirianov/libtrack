(this.webpackJsonplibtrack=this.webpackJsonplibtrack||[]).push([[0],{121:function(e,t,a){},138:function(e,t,a){"use strict";(function(e){var n=a(2),r=a(49),c=(a(0),a(11)),o=a(4),i=a(226),s=a(230),u=a(228),l=a(111),d=a(145),b=a(146),j=a(139),p=a.n(j),h=a(140),O=a.n(h),m=a(14),f=a(46),x=a(43),g=Object(i.a)({list:{width:250},fullList:{width:"auto"}});t.a=function(){var t,a=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),i=g(),j=Object(c.c)((function(e){return e.drawer})),h=Object(c.b)(),v=Object(m.f)(),w=function(){window.localStorage.clear(),window.sessionStorage.clear(),h(Object(f.c)()),v.push("/")};return Object(n.jsx)("div",{children:Object(n.jsx)(s.a,{disableBackdropTransition:!a,disableDiscovery:a,open:j,onClose:function(){return h(Object(x.b)(!1))},onOpen:function(){return h(Object(x.b)(!0))},children:(t="left",Object(n.jsx)("div",{className:Object(o.a)(i.list,Object(r.a)({},i.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:function(){return h(Object(x.b)(!1))},onKeyDown:function(){return h(Object(x.b)(!1))},children:Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(l.a,{button:!0,onClick:function(){return console.log("pressed first")},children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(p.a,{})}),Object(n.jsx)(b.a,{primary:"User settings"})]}),Object(n.jsxs)(l.a,{button:!0,onClick:w,children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(b.a,{primary:"Log out"})]})]})}))})})}}).call(this,a(102))},221:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a(12),o=a.n(c),i=a(81),s=a(11),u=(a(121),a(14)),l=a(24),d=a(15),b=a(226),j=a(75),p=a(273),h=a(259),O=a(134),m=a.n(O)()({root:{display:"flex",justifyContent:"center"}}),f=function(e){var t=e.text,a=e.action,r=e.value,c=e.color,o=e.className,i=m();return Object(n.jsx)("div",{className:i.root,children:Object(n.jsx)(h.a,{variant:"contained",color:c,onClick:a,type:"submit",value:r,className:o,children:t})})},x=a(110),g=a(271),v=a(272),w=a(9),y=a.n(w),k=a(16),N=a(280),S=a(264),C=a(279),W=a(90),L=a.n(W),A=a(260),T=a(229),B=a(227),R=Object(b.a)({root:{position:"absolute",top:"42%",left:"47%"}}),D=function(e){var t=e.status,a=Object(r.useState)(!1),c=Object(d.a)(a,2),o=c[0],i=c[1],s=R();return Object(r.useEffect)((function(){i(t)}),[t]),o?Object(n.jsx)(T.a,{open:o,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:500},children:Object(n.jsx)("div",{className:s.root,children:Object(n.jsx)(A.a,{size:100,color:"primary"})})}):null},M=Object(b.a)({root:{textAlign:"center"}}),E=function(e){var t=e.message,a=M();return Object(n.jsx)("div",{className:a.root,children:""===t?null:Object(n.jsx)("p",{children:t})})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW":return t.payload;default:return e}},U=function(e){return{type:"SHOW",payload:e}},P=a(46),z=a(30),Q=a.n(z),G="https://blooming-brook-04733.herokuapp.com/api/users",_=function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.post(G,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.a.post("https://blooming-brook-04733.herokuapp.com/api/login",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","401");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J={registerNewUser:_,getAll:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get(G);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),loginUser:q},K=Object(b.a)({form:{height:"100%"},close:{width:"100%"},button:{width:"100%",height:56}}),F=function(e){var t=e.className,a=e.device,c=Object(r.useState)(""),o=Object(d.a)(c,2),i=o[0],l=o[1],b=Object(r.useState)(""),j=Object(d.a)(b,2),p=j[0],h=j[1],O=Object(r.useState)(!1),m=Object(d.a)(O,2),x=m[0],g=m[1],v=Object(r.useState)(!1),w=Object(d.a)(v,2),W=w[0],A=w[1],T=Object(r.useState)(""),B=Object(d.a)(T,2),R=B[0],M=B[1],I=K(),z=Object(s.b)(),Q=Object(u.f)(),G=function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),a={email:i,password:p},e.next=5,J.loginUser(a);case 5:"401"===(n=e.sent)?M("Wrong email or password. Please try again"):(M("Successfully logged in, redirecting..."),l(""),h(""),W?window.localStorage.setItem("userLoggedIn",JSON.stringify(n)):window.sessionStorage.setItem("sessionUser",JSON.stringify(n)),z(Object(P.b)(n)),z(U(!1)),Q.push("/main"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[a?Object(n.jsx)(f,{action:function(){z(U(!1))},text:Object(n.jsx)(L.a,{style:{fontSize:40}}),className:I.close}):null,Object(n.jsxs)("form",{className:t,onSubmit:G,children:[Object(n.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){var t=e.target;l(t.value)},className:I.text}),Object(n.jsx)(N.a,{variant:"outlined",margin:"normal",type:"password",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",onChange:function(e){var t=e.target;h(t.value)}}),Object(n.jsx)(S.a,{control:Object(n.jsx)(C.a,{value:"remember",color:"primary"}),label:"Remember me",onChange:function(){A(!W)},style:{margin:10}}),Object(n.jsx)(f,{text:"sign in",color:"primary",className:I.button})]}),x?Object(n.jsx)(D,{status:x}):null,Object(n.jsx)(E,{message:R})]})},H=Object(b.a)({close:{width:"100%"}}),X=function(e){var t=e.setStatus,a=e.device,c=e.className,o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],b=Object(r.useState)(""),j=Object(d.a)(b,2),p=j[0],h=j[1],O=Object(r.useState)(""),m=Object(d.a)(O,2),x=m[0],g=m[1],v=Object(r.useState)(""),w=Object(d.a)(v,2),S=(w[0],w[1],Object(r.useState)(!1)),C=Object(d.a)(S,2),W=C[0],A=(C[1],H()),T=Object(s.b)(),B=function(e){var t=e.target;g(t.value)},R=function(){var e=Object(k.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={username:u,email:p,password:x},e.next=4,J.registerNewUser(n);case 4:e.sent,t("registered");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[a?Object(n.jsx)(f,{action:function(){T(U(!1))},text:Object(n.jsx)(L.a,{style:{fontSize:40}}),className:A.close}):null,Object(n.jsxs)("form",{className:c,onSubmit:R,children:[Object(n.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"off",autoFocus:!0,onChange:function(e){var t=e.target;l(t.value)}}),Object(n.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",onChange:function(e){var t=e.target;h(t.value)}}),Object(n.jsx)(N.a,{variant:"outlined",margin:"normal",type:"password",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",onChange:B}),Object(n.jsx)(N.a,{variant:"outlined",margin:"normal",type:"password",required:!0,fullWidth:!0,id:"confirm-password",label:"Confirm password",name:"confirm-password",autoComplete:"off",onChange:B}),Object(n.jsx)(f,{text:"sign up"})]}),W?Object(n.jsx)(D,{status:W}):null]})},Y=function(){return Object(n.jsx)("p",{children:"You have successfully registered. Please login"})},V=a(267),Z=a(270),$=a(269),ee=a(268),te=(a(218),a(263)),ae=a(282),ne=a(278),re=a(266),ce=function(e){var t=e.status,a=e.className,r=e.setStatus;return Object(n.jsxs)(te.a,{variant:"outlined",className:a,children:[Object(n.jsx)(ae.a,{id:"status",children:"Status"}),Object(n.jsxs)(ne.a,{labelId:"status",id:"status-selector",value:t,onChange:function(e){return r(e.target.value)},label:"Status",children:[Object(n.jsx)(re.a,{value:"Not read",children:"Not read"}),Object(n.jsx)(re.a,{value:"Read",children:"Read"}),Object(n.jsx)(re.a,{value:"Reading",children:"Reading"})]})]})},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALL_BOOKS":return t.payload;default:return e}},ie=function(e){return{type:"ALL_BOOKS",payload:e}},se=null,ue={addBook:function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:se}},e.next=3,Q.a.post("https://blooming-brook-04733.herokuapp.com/api/books",t,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){se="bearer ".concat(e)}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK":return t.payload;case"CLEAR":return{};default:return e}},de=function(){var e=Object(r.useState)("Not read"),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(s.b)(),i=Object(s.c)((function(e){return e.book})),u=Object(s.c)((function(e){return e.books})),b="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",p=Object(l.useMediaQuery)({minDeviceWidth:1024}),O=(Object(l.useMediaQuery)({minWidth:600,maxWidth:1024}),Object(l.useMediaQuery)({maxWidth:600})),m=je(),f=pe(),x=be(),g=p?x:O?m:f,v=Object(s.c)((function(e){return e.user})),w=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue.setToken(v.token),t={title:i.title,author:i.authors[0],published:i.publishedDate,img:i.imageLinks?i.imageLinks.thumbnail:b,status:a},o(U(!1)),setTimeout((function(){return o({type:"CLEAR"})}),500),e.next=6,ue.addBook(t);case 6:n=e.sent,o(ie(u.concat(n.data))),o({type:"CLEAR"});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:g.root,children:i?Object(n.jsxs)(V.a,{className:g.card,children:[O?Object(n.jsx)(h.a,{size:"small",variant:"contained",onClick:function(){o(U(!1))},className:g.close,children:"X"}):null,Object(n.jsx)(ee.a,{component:"img",alt:i.title,className:g.img,src:i.imageLinks?i.imageLinks.thumbnail:b}),Object(n.jsxs)($.a,{className:g.info,children:[Object(n.jsxs)(j.a,{variant:"body1",color:"textPrimary",component:"p",children:[Object(n.jsx)("strong",{children:"Title: "}),i.title.length>50?"".concat(i.title.substring(0,40),"..."):i.title]}),Object(n.jsxs)(j.a,{variant:"body1",color:"textPrimary",component:"p",children:[Object(n.jsx)("strong",{children:"Author: "}),i.authors?i.authors[0].substring(0,30):"No Author"]}),Object(n.jsxs)(j.a,{variant:"body1",color:"textPrimary",component:"p",children:[Object(n.jsx)("strong",{children:"Published: "}),i.publishedDate?i.publishedDate:"No published date"]}),Object(n.jsx)(ce,{className:g.selection,setStatus:c,status:a})]}),Object(n.jsx)(Z.a,{className:g.action,children:Object(n.jsx)(h.a,{size:"large",color:"primary",variant:"contained",className:g.button,onClick:w,children:"Add to library"})})]}):null})},be=Object(b.a)({root:{height:"70vh"},card:{height:"100%",margin:"auto"},button:{width:"100%",padding:30,borderRadius:0},info:{marginTop:10},action:{padding:0},img:{width:"100%",height:"60%",verticalAlign:"middle"},selection:{width:"50%",marginTop:10}}),je=Object(b.a)({card:{height:"94vh"},button:{width:"100%",padding:20,borderRadius:0,position:"absolute",bottom:0},info:{marginTop:10},action:{padding:0},img:{width:"90%",height:"56%",margin:"auto"},selection:{width:"100%",marginTop:20},close:{position:"absolute",backgroundColor:"rgba(10,10,10,0.7)",border:"solid lightgrey 1px",top:10,right:10,width:20,height:60,fontSize:35,color:"white"}}),pe=Object(b.a)({}),he=function(e){var t=e.modalStatus,a=e.showModal,r=e.component,c=e.setStatus,o=e.className,i=function(){return"login"===r?Object(n.jsx)(F,{className:o,device:u}):"register"===r?Object(n.jsx)(X,{setStatus:c,device:u,className:o}):"registered"===r?Object(n.jsx)(Y,{}):"book-adding"===r?Object(n.jsx)(de,{}):null},s=(Object(l.useMediaQuery)({minDeviceWidth:1024}),Object(l.useMediaQuery)({minWidth:600,maxWidth:1024}),Object(l.useMediaQuery)({maxWidth:600})),u=s?"mobile":null;return Object(n.jsx)(g.a,{open:t,onClose:a,fullWidth:!!s,fullScreen:!!s,style:{backgroundColor:"transparent"},children:Object(n.jsx)(v.a,{style:{padding:0},children:Object(n.jsx)(x.a,{elevation:5,children:Object(n.jsx)(i,{})})})})},Oe=a.p+"static/media/reading-homepage.15a2ec4c.svg",me=function(e){var t=e.device,a=Object(r.useState)(""),c=Object(d.a)(a,2),o=c[0],i=c[1],u=xe(),l=ge(),b=fe(),h="desktop"===t?b:"tablet"===t?l:u,O=Object(s.b)(),m=Object(s.c)((function(e){return e.modal})),x=function(e){O(U(!m)),i(e.currentTarget.value)};return Object(n.jsx)("div",{className:h.root,children:Object(n.jsxs)(p.a,{maxWidth:"sm",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{gutterBottom:!0,className:h.header,children:"Welcome to libtrack"}),Object(n.jsxs)("div",{className:h.actions,children:[Object(n.jsx)(f,{text:"Log in",action:x,value:"login",className:h.button,color:"primary"}),Object(n.jsx)(f,{text:"sign up",action:x,value:"register",className:h.button,color:"default"})]}),Object(n.jsx)(he,{showModal:x,modalStatus:m,component:o,setStatus:i,className:h.modal})]}),Object(n.jsx)("img",{src:Oe,alt:"home page logo",className:h.logo})]})})},fe=Object(b.a)({header:{color:"#6c63ff",textAlign:"center",fontSize:"5em",fontWeight:500},logo:{margin:"auto",marginTop:"10%"},blurred:{filter:"blur(4px)"},normal:{filter:"blur(0)"},button:{width:"50%",marginTop:10}}),xe=Object(b.a)({root:{width:"100%"},header:{color:"#6c63ff",textAlign:"center",fontSize:"3em",marginTop:20},logo:{width:"100%",height:"auto",marginTop:"10%"},actions:{bottom:0,margin:"auto"},button:{width:"100%",height:50,marginTop:18},modal:{position:"absolute",top:"26%"}}),ge=Object(b.a)({}),ve=a(109),we=a(107),ye=a(274),ke="https://blooming-brook-04733.herokuapp.com/api/books",Ne=null,Se={updateBook:function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:Ne}},e.next=3,Q.a.put(ke,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBook:function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{headers:{Authorization:Ne}},e.next=3,Q.a.delete("".concat(ke,"/").concat(t.id));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){Ne="bearer ".concat(e)}},Ce=function(e){var t=e.book,a=Object(r.useState)(""),c=Object(d.a)(a,2),o=c[0],i=(c[1],Object(l.useMediaQuery)({minDeviceWidth:1024})),u=(Object(l.useMediaQuery)({minWidth:600,maxWidth:1024}),Object(l.useMediaQuery)({maxWidth:600})),b=Le(),p=Ae(),h=We(),O=i?h:u?b:p,m=Object(s.c)((function(e){return e.user})),x=Object(s.c)((function(e){return e.books})),g=Object(s.b)(),v=function(){var e=Object(k.a)(y.a.mark((function e(){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.setToken(m.token);case 2:return a=Object(we.a)(Object(we.a)({},t),{},{status:o}),e.next=5,Se.updateBook(a);case 5:n=e.sent,(r=Object(ve.a)(x)).forEach((function(e){return e.id===n.id&&(e=Object.assign(e,n)),e})),g(ie(r));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(k.a)(y.a.mark((function e(){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.setToken(m.token);case 2:return e.next=4,Se.deleteBook(t);case 4:a=Object(ve.a)(x),n=a.indexOf(t),a.slice(n,1),g(ie(a));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(V.a,{className:O.root,children:[Object(n.jsxs)(ye.a,{className:O.actionArea,children:[Object(n.jsx)("div",{className:O.imgContainer,children:Object(n.jsx)(ee.a,{className:O.media,image:t.img,title:t.title})}),Object(n.jsx)("div",{children:Object(n.jsxs)($.a,{className:O.info,children:[Object(n.jsx)(j.a,{gutterBottom:!0,variant:i?"h6":"subtitle1",component:"h6",style:{height:70,overflow:"anywhere"},children:t.title}),Object(n.jsxs)("div",{children:[Object(n.jsxs)(j.a,{variant:i?"body1":"body2",color:"textSecondary",component:"p",children:[Object(n.jsx)("strong",{children:"Author: "}),t.author]}),Object(n.jsxs)(j.a,{variant:i?"body1":"body2",color:"textSecondary",component:"p",children:[Object(n.jsx)("strong",{children:"Published: "}),t.published]}),Object(n.jsxs)(j.a,{variant:i?"body1":"body2",color:"textSecondary",component:"p",children:[Object(n.jsx)("strong",{children:"Status: "}),t.status]})]})]})})]}),Object(n.jsxs)(Z.a,{className:O.actions,children:[Object(n.jsx)(f,{size:"small",color:"primary",className:O.button,text:"Update",action:v}),Object(n.jsx)(f,{size:"small",color:"secondary",className:O.button,text:"Delete",action:w})]})]})},We=Object(b.a)({root:{width:345,margin:10},media:{height:160},button:{width:160,height:40},selection:{width:310,marginTop:20}}),Le=Object(b.a)({root:{width:"100%",boxShadow:"0px 0px 11px -1px rgba(117,117,117,0.8)",margin:10,display:"flex",flexDirection:"row",height:160},media:{height:"100%",width:100},imgContainer:{height:"100%",width:100,backgroundColor:"blue"},selection:{width:"100%",marginTop:10},actions:{display:"none"},actionArea:{display:"flex",justifyContent:"space-between"},info:{width:250,height:160,display:"flex",flexDirection:"column"}}),Ae=Object(b.a)({root:{backgroundColor:"blue"}}),Te=Object(b.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"center",flexGrow:3,marginTop:10}}),Be=function(e){var t=e.books,a=Te();return Object(n.jsx)("div",{className:a.root,children:t?t.map((function(e){return Object(n.jsx)(Ce,{book:e},e.id)})):null})},Re=a(49),De=a(276),Me=a(277),Ee=a(265),Ie=a(149),Ue=a(18),Pe=a(108),ze=a.n(Pe),Qe=a(141),Ge=a.n(Qe),_e=a(138),qe=a(43),Je=a(228),Ke=a(111),Fe=a(146),He=a(275),Xe=Object(b.a)((function(e){return{root:{position:"absolute",color:"black",width:"100%",backgroundColor:e.palette.background.paper,border:"1px solid ".concat(e.palette.primary),display:"block",zIndex:2},hidden:{display:"none"}}})),Ye=function(e){var t=e.showModal,a=e.books,r=Xe(),c=Object(s.b)();return Object(n.jsx)(Je.a,{component:"nav",className:a.length>0?r.root:r.hidden,"aria-label":"mailbox folders",children:a?a.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Ke.a,{button:!0,onClick:function(){t(),c(function(e){return{type:"ADD_BOOK",payload:e.volumeInfo}}(e))},children:Object(n.jsx)(Fe.a,{primary:e.volumeInfo.title})}),Object(n.jsx)(He.a,{})]},e.id)})):null})},Ve={getBooks:function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(t,"&langRestrict=en")).catch((function(e){console.log(e)}));case 2:if(!(a=e.sent)){e.next=5;break}return e.abrupt("return",a.data.items);case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ze=function(e){var t=e.showModal,a=e.device,c=Object(r.useState)([]),o=Object(d.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(!1),b=Object(d.a)(l,2),p=(b[0],b[1],et()),h=tt(),O=$e(),m="desktop"===a?O:"tablet"===a?h:p,f=Object(s.b)(),x=Object(s.c)((function(e){return e.user})),g=Object(s.c)((function(e){return e.drawer})),v=function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,n=a.value.split(" "),(r="".concat(n.join("+")))?Ve.getBooks(r).then((function(e){if(e&&""!==r){var t=e.map((function(e){return e}));u(t)}})).catch((function(e){u([])})):u([]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return"desktop"===a?Object(n.jsx)("div",{className:m.root,children:Object(n.jsx)(De.a,{position:"static",children:Object(n.jsxs)(Me.a,{children:[Object(n.jsx)(Ee.a,{edge:"start",className:m.menuButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(ze.a,{})}),Object(n.jsxs)(j.a,{className:m.title,variant:"h6",noWrap:!0,children:["Libtrack -"," ".concat(x.username)]}),Object(n.jsxs)("div",{className:m.search,children:[Object(n.jsx)("div",{className:m.searchIcon,children:Object(n.jsx)(Ge.a,{})}),Object(n.jsx)(Ie.a,{placeholder:"Search\u2026",classes:{root:m.inputRoot,input:m.inputInput},fullWidth:!0,inputProps:{"aria-label":"search"},onChange:v}),i?Object(n.jsx)(Ye,{showModal:t,books:i}):null]})]})})}):Object(n.jsx)("div",{className:m.root,children:Object(n.jsxs)(De.a,{position:"static",children:[Object(n.jsxs)(Me.a,{children:[Object(n.jsx)(Ee.a,{edge:"start",className:m.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return f(Object(qe.b)(!g))},children:Object(n.jsx)(ze.a,{})}),Object(n.jsxs)(j.a,{className:m.title,variant:"h6",noWrap:!0,children:["Libtrack -"," ".concat(x.username)]})]}),Object(n.jsx)(_e.a,{})]})})},$e=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:Object(Re.a)({marginRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{display:"none"}),title:Object(Re.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(Re.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ue.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ue.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"30%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}}})),et=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,display:"block"}}})),tt=Object(b.a)({}),at={getUserBooks:function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("https://blooming-brook-04733.herokuapp.com/api/books",{params:{user:t.id}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},nt=function(e){var t=e.device,a=Object(r.useState)(""),c=Object(d.a)(a,2),o=(c[0],c[1]),i=Object(r.useState)([]),u=Object(d.a)(i,2),l=u[0],b=u[1],j=Object(s.b)(),p=Object(s.c)((function(e){return e.modal})),h=Object(s.c)((function(e){return e.user})),O=function(e){j(U(!p))};return Object(r.useEffect)((function(){at.getUserBooks(h).then((function(e){j(ie(e)),b(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(Ze,{showModal:O,device:t}),Object(n.jsx)(he,{component:"book-adding",modalStatus:p,showModal:O,setStatus:o}),Object(n.jsx)(Be,{books:l})]})},rt=window.localStorage.getItem("userLoggedIn")||window.sessionStorage.getItem("sessionUser"),ct=function(){var e=JSON.parse(rt),t=Object(s.b)(),a=Object(l.useMediaQuery)({minDeviceWidth:1024}),r=Object(l.useMediaQuery)({minWidth:600,maxWidth:1024}),c=(Object(l.useMediaQuery)({maxWidth:600}),a?"desktop":r?"tablet":"mobile");return t(Object(P.b)(e)),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{path:"/main",children:Object(n.jsx)(nt,{device:c})}),Object(n.jsx)(u.a,{path:"/",exact:!0,children:rt?Object(n.jsx)(nt,{device:c}):Object(n.jsx)(me,{device:c})})]})},ot=a(60),it=a(142),st=Object(ot.combineReducers)({modal:I,user:P.a,book:le,books:oe,drawer:qe.a}),ut=Object(ot.createStore)(st,Object(it.composeWithDevTools)());o.a.render(Object(n.jsx)(s.a,{store:ut,children:Object(n.jsx)(i.a,{children:Object(n.jsx)(ct,{})})}),document.getElementById("root"))},43:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN":case"CLOSE":return t.payload;default:return e}};var n=function(e){return e?{type:"OPEN",payload:!0}:{type:"CLOSE",payload:!1}}},46:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r}));t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":case"LOGOUT_USER":return t.payload;default:return e}};var n=function(e){return{type:"LOGIN_USER",payload:e}},r=function(){return{type:"LOGOUT_USER",payload:{}}}}},[[221,1,2]]]);
//# sourceMappingURL=main.26204397.chunk.js.map