(this["webpackJsonpbuk-pago-react"]=this["webpackJsonpbuk-pago-react"]||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),c=n(15),o=n.n(c),s=(n(187),n(188),n(35)),l=n(19),d=n(154),u=n(259),j=n(260),b=n(126),p=n(261),h=n(67),g=Object(b.a)((function(e){return{root:{width:"100%",height:"100%"},appBar:{backgroundColor:"#58a0d1"},grid:{paddingLeft:"5%",width:"50%"},title:{fontSize:"18px",fontWeight:600},contentArea:{paddingTop:"5%",width:"100%",height:"100%",minHeight:"80%",minWidth:"100%",position:"sticky"},link:{textDecoration:"none"}}}));var x,O,m,f,y=function(e){var t=e.children,n=g();return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(u.a,{className:n.appBar,children:Object(a.jsx)(j.a,{className:n.toolBar,alignItems:"flex-end",position:"fixed",children:Object(a.jsxs)(p.a,{className:n.grid,container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",children:[Object(a.jsx)(s.b,{to:{pathname:"/buk-pago"},style:{textDecoration:"none"},children:Object(a.jsx)(h.a,{className:n.title,color:"secondary",size:"large",children:"\u5317\ud30c\uace0"})}),Object(a.jsx)(h.a,{className:n.title,color:"secondary",size:"large",children:"\ud30c\uc77c\ubc88\uc5ed"}),Object(a.jsx)(s.b,{to:{pathname:"/buk-pago/dictionary"},style:{textDecoration:"none"},children:Object(a.jsx)(h.a,{className:n.title,color:"secondary",size:"large",children:"\ubd81\ud55c\ub9d0 \uc0ac\uc804"})}),Object(a.jsx)(s.b,{to:{pathname:"/free-board"},style:{textDecoration:"none"},children:Object(a.jsx)(h.a,{className:n.title,color:"secondary",size:"large",children:"\uc790\uc720\uac8c\uc2dc\ud310"})}),Object(a.jsx)(s.b,{to:{pathname:"/buk-pago/train"},style:{textDecoration:"none"},children:Object(a.jsx)(h.a,{className:n.title,color:"secondary",size:"large",children:"\u5317\ud30c\uace0 Train"})})]})})}),Object(a.jsx)("div",{className:n.contentArea,children:t})]})},v=n(7),w=n(164),k=n(24),N=n.n(k),C=n(18),P=n.n(C),S=n(28),W=n(52),I=n(31),z=n(32),D=n(25),T=(n(93),n(10));function B(e,t){return L.apply(this,arguments)}function L(){return(L=Object(S.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("api/login",{email:t,password:n}).catch((function(e){return e})).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=(f=m=function(){function e(){Object(I.a)(this,e),Object(W.a)(this,"logins",O,this),this.context=Object(i.createContext)(this)}return Object(z.a)(e,[{key:"login",value:function(){var e=Object(S.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return e.instance||(this.instance=new e),e.instance}}]),e}(),m.instance=null,x=f,O=Object(D.a)(x.prototype,"logins",[T.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(D.a)(x.prototype,"login",[T.f],Object.getOwnPropertyDescriptor(x.prototype,"login"),x.prototype),x),H=R=R.getInstance(),_=Object(b.a)({root:{position:"relative",width:"480px",height:"620px",margin:"auto",backgroundColor:"rgba(0, 0, 0, 0.6)"},content:{width:"100%",height:"100%",backgroundColor:"white",position:"relative",boxSizing:"border-box",margin:"80px auto",padding:"20px"},loginContent:{width:"100%",margin:"0 auto",position:"relative",padding:"0 20px 32px",boxSizing:"border-box",display:"flex",justifyContent:"center",flexDirection:"column"},loginId:{width:"100%",height:"40px",marginTop:"30px",padding:"9px 12px",outline:"none",boxSizing:"border-box"},loginPassword:{width:"100%",height:"40px",marginTop:"15px",padding:"9px 12px",outline:"none",boxSizing:"border-box"},login:{display:"flex",justifyContent:"space-between",alignItems:"center"},autoLogin:{marginTop:"20px",fontSize:"12px",color:"#8d8d8d",lineHeight:3},loginBtn:{height:"40px",fontSize:"14px",padding:"13px 30px",cursor:"pointer",backgroundColor:"black",color:"white",lineHeight:"1px",marginTop:"20px",marginBottom:"12px",borderRadius:"3px",borderStyle:"none"}});function A(e){var t=Object(i.useState)(""),n=Object(v.a)(t,2),r=n[0],c=n[1],o=Object(i.useState)(""),l=Object(v.a)(o,2),d=l[0],u=l[1],j=Object(i.useState)(!0),b=Object(v.a)(j,2),p=(b[0],b[1],_()),g=Object(i.useContext)(H.context);return Object(a.jsx)("div",{className:p.root,children:Object(a.jsx)("div",{className:p.content,children:Object(a.jsxs)("div",{className:p.loginContent,children:[Object(a.jsx)(w.a,{className:p.loginId,id:"loginId",placeholder:"\uc544\uc774\ub514",onChange:function(e){c(e.target.value)},value:r}),Object(a.jsx)(w.a,{className:p.loginPassword,id:"loginPassword",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){u(e.target.value)},value:d}),Object(a.jsxs)("div",{className:p.login,children:[Object(a.jsxs)("label",{className:p.autoLogin,for:"stay",children:["",Object(a.jsx)("input",{type:"checkbox",id:"stay"}),"\ub85c\uadf8\uc778 \uc720\uc9c0\ud558\uae30"]}),Object(a.jsx)(s.b,{to:"/sign-in",children:Object(a.jsx)("div",{className:p.autoLogin,children:"\ud68c\uc6d0\uac00\uc785"})})]}),Object(a.jsxs)(h.a,{className:p.loginBtn,onClick:function(e){""!=r&&""!=d?g.login(r,d).then((function(e){alert("\ub85c\uadf8\uc778 \uc131\uacf5")})):alert("\ub85c\uadf8\uc778 \uc2e4\ud328")},children:["","\ub85c\uadf8\uc778",""]})]})})})}var F,E,M,G,J=n(220),K=n(224),q=n(272),Q=n(150),U=n.n(Q),V=n(106),X=n.n(V),Y=n(269),Z=n(267),$=n(268),ee=n(270),te=n(271),ne=n(279),ae=n(119);function ie(){return re.apply(this,arguments)}function re(){return(re=Object(S.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/post").catch((function(e){return[]})).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(S.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/post/",{title:t,content:n}).catch((function(e){console.warn(e)})).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(S.a)(P.a.mark((function e(t,n,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.put("/api/post/",{id:t,title:n,content:a}).catch((function(e){console.warn(e)})).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(S.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({methon:"Delete",url:"/api/post/",data:{id:t}}).catch((function(e){return console.warn(e)})).then((function(e){return e.status}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=(G=M=function(){function e(){Object(I.a)(this,e),Object(W.a)(this,"posts",E,this),this.context=Object(i.createContext)(this)}return Object(z.a)(e,[{key:"readPost",value:function(){return ie}},{key:"addPost",value:function(e,t){return function(e,t){return ce.apply(this,arguments)}(e,t).then((function(e){return e}))}},{key:"updatePost",value:function(e,t,n){return function(e,t,n){return oe.apply(this,arguments)}(e,t,n).then((function(e){return e}))}},{key:"deletePost",value:function(e){return function(e){return se.apply(this,arguments)}(e).then((function(e){return 200==e}))}}],[{key:"getInstance",value:function(){return e.instance||(this.instance=new e),e.instance}}]),e}(),M.instance=null,F=G,E=Object(D.a)(F.prototype,"posts",[T.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(D.a)(F.prototype,"readPost",[T.f],Object.getOwnPropertyDescriptor(F.prototype,"readPost"),F.prototype),Object(D.a)(F.prototype,"addPost",[T.f],Object.getOwnPropertyDescriptor(F.prototype,"addPost"),F.prototype),Object(D.a)(F.prototype,"updatePost",[T.f],Object.getOwnPropertyDescriptor(F.prototype,"updatePost"),F.prototype),Object(D.a)(F.prototype,"deletePost",[T.f],Object.getOwnPropertyDescriptor(F.prototype,"deletePost"),F.prototype),F),de=le=le.getInstance(),ue="CSS1Compat"===document.compatMode?document.documentElement:document.body,je=ue.clientHeight,be=ue.clientWidth;function pe(e,t){return be*e*t}var he=Object(b.a)({root:{width:"99%",height:"100%",display:"inline-block"},title:{paddingTop:"2%",textAlign:"center",fontWeight:600},search:{width:"15%"},table:{marginLeft:"auto",marginRight:"auto",height:.7*je,width:"70%"},fab:{marginRight:"15%",float:"right"}}),ge=[{id:"\ubc88\ud638",key:"post_number",align:"center",width:pe(.6,1/15)},{id:"\ub9d0\uba38\ub9ac",key:"category",align:"center",width:pe(.6,1/15)},{id:"\uc81c\ubaa9",key:"title",align:"center",width:pe(.6,.8)},{id:"\ub313\uae00\uc218",key:"comment",align:"center",width:pe(.6,1/15)},{id:"\uae00\uc4f4\uc774",key:"writer",align:"center",width:pe(.6,1/15)},{id:"\uc791\uc131\uc77c",key:"written_time",align:"center",width:pe(.6,1/15)},{id:"\uc870\ud68c",key:"view",align:"center",width:pe(.6,1/15)},{id:"\ucd94\ucc9c",key:"recommendation",align:"center",width:pe(.6,1/15)}];function xe(e,t,n,a,i,r,c,o){return{post_number:e,category:t,title:n,comment:a,writer:i,written_time:r,view:c,recommendation:o}}xe(8,"\uc9c8\ubb38","\ubc88\uc5ed\uad00\ub828 \uc9c8\ubb38\ud569\ub2c8\ub2e4",1,"\uae40\ubc15\uc0ac","21:00",10,0),xe(7,"\uc9c8\ubb38","\uc778\uc2dd\uc624\ub958 \uad00\ub828 \uc9c8\ubb38",2,"\uae40\ucca0\uc218","17:00",10,15),xe(6,"\uc815\ubcf4","\ubc88\uc5ed\uc728 \uc62c\ub9ac\ub294 3\uac00\uc9c0 \ubc29\ubc95",10,"\uae40\uc815\ubcf4","15:35",44,10),xe(5,"\uc9c8\ubb38","\ud30c\uc77c\ubc88\uc5ed\uc774 \uc548\ub418\uc694",1,"\ub098\ubc14\ubcf4","12:35",8,2),xe(4,"\uc9c8\ubb38","\uc624\ub298 \uc810\uc2ec \ucd94\ucc9c\ubc1b\uc544\uc694",5,"\uc810\uc2ec\ubc25","10:22",22,15),xe(3,"\uc815\ubcf4","\ubd81\ud55c\ub9d0 \uc0ac\uc804 \uc774\uc6a9\ubc29\ubc95",4,"\uae40\uc0ac\uc804","09:50",10,5),xe(2,"\uc9c8\ubb38","\ubc88\uc5ed\ud55c\uac70 \ubcf5\uc0ac\ud558\ub294 \ubc29\ubc95",1,"\ub098\uc9c8\ubb38","09:11",4,0),xe(1,"\uacf5\uc9c0","\uc774\uc6a9\uc548\ub0b4",15,"\uad00\ub9ac\uc790","08:33",120,20),xe(9,"image","World",15,"re2","21:00",10,15),xe(10,"image","World",15,"re2","21:00",10,15),xe(11,"image","World",15,"re2","21:00",10,15),xe(12,"image","World",15,"re2","21:00",10,15),xe(13,"image","World",15,"re2","21:00",10,15),xe(14,"image","World",15,"re2","21:00",10,15),xe(15,"image","World",15,"re2","21:00",10,15),xe(16,"image","World",15,"re2","21:00",10,15),xe(17,"image","World",15,"re2","21:00",10,15),xe(18,"image","World",15,"re2","21:00",10,15),xe(19,"image","World",15,"re2","21:00",10,15),xe(20,"image","World",15,"re2","21:00",10,15),xe(21,"image","World",15,"re2","21:00",10,15),xe(22,"image","World",15,"re2","21:00",10,15),xe(23,"image","World",15,"re2","21:00",10,15),xe(24,"image","World",15,"re2","21:00",10,15),xe(25,"image","World",15,"re2","21:00",10,15),xe(26,"image","World",15,"re2","21:00",10,15),xe(27,"image","World",15,"re2","21:00",10,15),xe(28,"image","World",15,"re2","21:00",10,15),xe(29,"image","World",15,"re2","21:00",10,15),xe(30,"image","World",15,"re2","21:00",10,15),xe(31,"image","World",15,"re2","21:00",10,15),xe(32,"image","World",15,"re2","21:00",10,15),xe(33,"image","World",15,"re2","21:00",10,15),xe(34,"image","World",15,"re2","21:00",10,15);function Oe(e){var t=function(){console.log("\uac80\uc0c9 \uc2dc\uc791!")},n=he(),r=Object(i.useState)(0),c=Object(v.a)(r,2),o=c[0],l=c[1],d=Object(i.useState)(8),u=Object(v.a)(d,2),j=u[0],b=u[1],p=Object(i.useState)(!1),g=Object(v.a)(p,2),x=g[0],O=g[1],m=Object(i.useContext)(de.context).readPost();m.tmp;return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsxs)("div",{className:n.title,children:[Object(a.jsx)(J.a,{className:n.title,variant:"h4",children:"\uc790\uc720\uac8c\uc2dc\ud310"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)(w.a,{className:n.search,id:"standard-search",tyep:"search",onKeyPress:function(e){"Enter"===e.key&&t()}}),Object(a.jsx)(X.a,{onClick:t})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:n.content,children:[Object(a.jsx)($.a,{className:n.table,children:Object(a.jsx)(Y.a,{children:Object(a.jsx)(ee.a,{children:Object(a.jsx)(te.a,{children:ge.map((function(e){return Object(a.jsx)(Z.a,{align:e.align,style:{width:e.width},children:e.id},e.key)}))})})})}),Object(a.jsx)(K.a,{rowsPerPageOptions:[10],component:"div",count:m.length,rowsPerPage:j,page:o,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){b(parseInt(+e.target.value)),l(0)}}),Object(a.jsx)(s.b,{to:"/write",children:Object(a.jsx)(q.a,{color:"primary","aria-label":"add",className:n.fab,children:Object(a.jsx)(U.a,{})})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(s.b,{to:"/sign-in",children:Object(a.jsx)(h.a,{children:"Hi!"})}),Object(a.jsx)(h.a,{onClick:function(){O(!0)},children:"Open Modal"}),Object(a.jsx)(ne.a,{open:x,onClose:function(){O(!1)},children:Object(a.jsx)(A,{})})]})]})}var me,fe,ye,ve,we=n(109),ke=n(277),Ne=n(68),Ce=n(151),Pe=n.n(Ce),Se=n(152),We=n.n(Se),Ie=n(281),ze=n(278);function De(e){return Te.apply(this,arguments)}function Te(){return(Te=Object(S.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/translator",{params:{northText:t}},{withCredentials:!0}).catch((function(e){return e})).then((function(e){if(null!=e.data)return e.data.result}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Be=(ve=ye=function(){function e(){Object(I.a)(this,e),Object(W.a)(this,"translates",fe,this),this.context=Object(i.createContext)(this)}return Object(z.a)(e,[{key:"translate",value:function(e){return De(e)}},{key:"translike",value:function(e,t,n){return De(e,t,n).then((function(e){return e}))}}],[{key:"getInstance",value:function(){return e.instance||(this.instance=new e),e.instance}}]),e}(),ye.instance=null,me=ve,fe=Object(D.a)(me.prototype,"translates",[T.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(D.a)(me.prototype,"translate",[T.f],Object.getOwnPropertyDescriptor(me.prototype,"translate"),me.prototype),Object(D.a)(me.prototype,"translike",[T.f],Object.getOwnPropertyDescriptor(me.prototype,"translike"),me.prototype),me),Le=Be=Be.getInstance(),Re=n(107),He=n.n(Re),_e=n(108),Ae=n.n(_e),Fe=n(273),Ee=Object(b.a)({root:{width:"99%",height:"100%",display:"inline-block"},title:{paddingTop:"2%",textAlign:"center",fontWeight:600},content:{paddingTop:"1%"},paper:{marginTop:"1%",width:"35%",height:"50%",position:"relative"},textField:{width:"100%"},button:{float:"right"},box:{},textLength:{position:"absolute",right:"2%",bottom:"10%"},clearButton:{position:"absolute",right:"0%",top:"0%"},bukPaper:{textAlign:"center",width:"10%",backgroundColor:"#ffd6d6"},namPaper:{textAlign:"center",width:"10%",backgroundColor:"#d6f8ff"},upDownBtn:{float:"left"}});function Me(e){var t=Ee(),n=Object(i.useState)(""),c=Object(v.a)(n,2),o=c[0],s=c[1],l=Object(i.useState)(0),d=Object(v.a)(l,2),u=d[0],j=d[1],b=Object(i.useState)(""),g=Object(v.a)(b,2),x=g[0],O=g[1],m=Object(i.useState)(!1),f=Object(v.a)(m,2),y=f[0],k=f[1],N=Object(i.useState)(""),C=Object(v.a)(N,2),P=C[0],S=C[1],W=Object(i.useState)("success"),I=Object(v.a)(W,2),z=I[0],D=I[1],T=Object(i.useState)(!1),B=Object(v.a)(T,2),L=B[0],R=B[1],H=r.a.useContext(Le.context),_=function(){k(!1)};return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)("div",{className:t.title,children:Object(a.jsx)(J.a,{className:t.title,variant:"h3",children:"\ubd81\ud55c\uc5b4 \ubc88\uc5ed"})}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:t.content,children:[Object(a.jsxs)(p.a,{className:t.grid,container:!0,direction:"row",justify:"space-evenly",alignItems:"center",children:[Object(a.jsx)(we.a,{className:t.bukPaper,children:Object(a.jsx)(J.a,{variant:"h5",children:"\ubd81\ud55c\uc5b4"})}),Object(a.jsx)(we.a,{className:t.namPaper,children:Object(a.jsx)(J.a,{variant:"h5",children:"\ub0a8\ud55c\uc5b4"})})]}),Object(a.jsxs)(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsxs)(we.a,{className:t.paper,children:[Object(a.jsx)(w.a,{className:t.textField,id:"outlined-multiline-static",multiline:!0,autoFocus:!0,rows:17,onChange:function(e){var t=e.target.value;R(!1),t.length<=3e3?(s(t),j(t.length)):(S("3000\uc790 \uc774\ud558\ub9cc \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."),D("warning"),k(!0))},value:o,variant:"outlined"}),Object(a.jsxs)(J.a,{className:t.textLength,children:[u," / ",3e3]}),Object(a.jsxs)(ke.a,{className:t.box,children:[Object(a.jsx)(h.a,{className:t.button,variant:"contained",disableRipple:!0,onClick:function(){H.translate(o).then((function(e){O(e),R(!0)})).catch((function(e){console.log(e)}))},color:"primary",children:"\ubc88\uc5ed\ud558\uae30"}),0==u?null:Object(a.jsx)(Ne.a,{className:t.clearButton,variant:"contained",onClick:function(){s(""),j(0),R(!1),O("")},children:Object(a.jsx)(Pe.a,{})})]})]}),Object(a.jsxs)(we.a,{className:t.paper,children:[Object(a.jsx)(w.a,{className:t.textField,id:"outlined-multiline-static",multiline:!0,rows:17,variant:"outlined",InputProps:{readOnly:!0},value:x}),Object(a.jsxs)(ke.a,{className:t.box,children:[0==L?null:Object(a.jsxs)(Fe.a,{color:"primary","aria-label":"outlined primary button group",children:[Object(a.jsx)(h.a,{className:t.upDownBtn,disableRipple:!0,color:"primary",onClick:function(){H.transLike(!0,o,x).then((function(e){S("\ud53c\ub4dc\ubc31 \uac10\uc0ac\ud569\ub2c8\ub2e4! :)"),D("success"),k(!0)})).catch((function(e){console.log(e)}))},children:Object(a.jsx)(He.a,{})}),Object(a.jsx)(h.a,{className:t.upDownBtn,disableRipple:!0,color:"primary",onClick:function(){H.transLike(!1,o,x).then((function(e){S("\ud53c\ub4dc\ubc31 \uac10\uc0ac\ud569\ub2c8\ub2e4! :)"),D("success"),k(!0)})).catch((function(e){console.log(e)}))},children:Object(a.jsx)(Ae.a,{})})]}),Object(a.jsx)(h.a,{className:t.button,variant:"contained",disableRipple:!0,color:"primary",onClick:function(){navigator.clipboard.writeText(x),S("\ubcf5\uc0ac\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),D("success"),k(!0)},children:Object(a.jsx)(We.a,{})})]})]})]}),Object(a.jsx)(Ie.a,{open:y,autoHideDuration:1100,onClose:_,content:P,severity:z,children:Object(a.jsx)(ze.a,{onClose:_,severity:z,children:P})})]})]})}var Ge,Je=n(66),Ke=Object(b.a)({root:{width:"99%",height:"100%",display:"inline-block"},paper:(Ge={marginTop:"5%",width:"77%",height:"80%",padding:"20px",paddingLeft:"30px"},Object(Je.a)(Ge,"marginTop","30px"),Object(Je.a)(Ge,"marginLeft","50px"),Ge),title_text:{marginLeft:"10%",width:"70%",border:"groove",borderBottom:"solid 1px #ababab",fontSize:"18px",fontWeight:"bold"},content_text:{marginLeft:"10%",width:"70%",resize:"none",border:"groove"},box:{width:"80%"},button:{float:"right"}});function qe(){var e=Ke(),t=Object(i.useState)(""),n=Object(v.a)(t,2),r=n[0],c=n[1],o=Object(i.useState)(""),s=Object(v.a)(o,2),l=s[0],d=s[1],u=Object(i.useContext)(de.context);return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(a.jsxs)(we.a,{className:e.paper,children:[Object(a.jsx)(w.a,{className:e.title_text,id:"title",rows:1,placeholder:"\uc81c\ubaa9",onChange:function(e){c(e.target.value)},value:r,variant:"outlined"}),Object(a.jsx)(w.a,{className:e.content_text,id:"content",multiline:!0,rows:30,placeholder:"\ub0b4\uc6a9",onChange:function(e){d(e.target.value)},value:l,variant:"outlined"}),Object(a.jsx)(ke.a,{className:e.box,children:Object(a.jsx)(h.a,{className:e.button,variant:"contained",color:"primary",onClick:function(e){return""===r?alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."):""===l?alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694."):void u.addPost(r,l).then((function(e){alert("\uc131\uacf5\uc801\uc73c\ub85c \uac8c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}))},children:"\ub4f1\ub85d"})})]})})})})}var Qe=n(76),Ue=n(153),Ve=n.n(Ue),Xe=Object(b.a)({root:{position:"relative",width:"480px",height:"620px",margin:"auto",backgroundColor:"rgba(0, 0, 0, 0.6)"},content:{width:"100%",height:"100%",backgroundColor:"white",position:"relative",boxSizing:"border-box",margin:"80px auto",padding:"20px"},registerContent:{width:"100%",margin:"0 auto",position:"relative",padding:"0 20px 32px",boxSizing:"border-box",display:"flex",justifyContent:"center",flexDirection:"column"},registerId:{width:"100%",height:"40px",marginTop:"30px",padding:"9px 12px",outline:"none",boxSizing:"border-box"},registerPassword:{width:"100%",height:"40px",marginTop:"15px",padding:"9px 12px",outline:"none",boxSizing:"border-box"},register:{display:"flex",justifyContent:"space-between",alignItems:"center"},autoRegister:{marginTop:"20px",fontSize:"12px",color:"#8d8d8d",lineHeight:3},registerBtn:{variant:"contained",color:"white",height:"40px",fontSize:"14px",padding:"13px 30px",cursor:"pointer",backgroundColor:"black",lineHeight:"1px",marginTop:"20px",marginBottom:"12px",borderRadius:"3px",borderStyle:"none"}});function Ye(e){var t=Object(i.useState)(""),n=Object(v.a)(t,2),r=n[0],c=n[1],o=Object(i.useState)(""),s=Object(v.a)(o,2),l=s[0],d=s[1],u=Object(i.useState)(""),j=Object(v.a)(u,2),b=j[0],p=j[1],g=Object(i.useState)(""),x=Object(v.a)(g,2),O=x[0],m=x[1],f=Object(i.useState)(!1),y=Object(v.a)(f,2),k=y[0],N=y[1],C=Xe();return Object(a.jsx)("div",{className:C.root,children:Object(a.jsx)("div",{className:C.content,children:Object(a.jsxs)("div",{className:C.registerContent,children:[Object(a.jsx)(w.a,{className:C.registerPassword,id:"registerNickname",placeholder:"\ubcc4\uba85",onChange:function(e){m(e.target.value)},value:O}),Object(a.jsx)(w.a,{className:C.registerId,id:"registerId",placeholder:"\uc544\uc774\ub514",onChange:function(e){c(e.target.value)},value:r}),Object(a.jsx)(w.a,{className:C.registerPassword,id:"registerPassword",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){d(e.target.value)},value:l}),Object(a.jsx)(w.a,{className:C.registerPassword,id:"checkPassword",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",onChange:function(e){p(e.target.value)},value:b}),Object(a.jsxs)(h.a,{className:C.registerBtn,onClick:function(){console.register({userId:r},{userPassword:l,userNickname:O})},children:["","\uac00\uc785\ud558\uae30",""]}),Object(a.jsx)(ne.a,{open:k,onClose:function(){N(!1)},children:Object(a.jsx)(Ye,{})})]})})})}var Ze,$e,et,tt,nt=n(26),at=function(){function e(t,n,a){Object(I.a)(this,e),this.north=t,this.south=n,this.mean=a}return Object(z.a)(e,[{key:"get_dic",value:function(){return{id:this.north,south:this.south,mean:this.mean}}}]),e}();function it(){return(it=Object(S.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/dictionary",{params:{query:t}},{withCredentials:!0}).catch((function(e){return console.warn(e),[]})).then((function(e){var t=[];if(null!=e.data){var n=e.data.result;return Object.keys(n).map((function(e,a){return t.push(new at(n[e].north,n[e].south,n[e].mean).get_dic())})),t}return[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var rt=(tt=et=function(){function e(){Object(I.a)(this,e),Object(W.a)(this,"dictionarys",$e,this),this.context=Object(i.createContext)(this)}return Object(z.a)(e,[{key:"getDictionary",value:function(e){var t=this;return function(e){return it.apply(this,arguments)}(e).then((function(e){t.dictionarys=Object(nt.a)(e)}))}}],[{key:"getInstance",value:function(){return e.instance||(this.instance=new e),e.instance}}]),e}(),et.instance=null,Ze=tt,$e=Object(D.a)(Ze.prototype,"dictionarys",[T.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(D.a)(Ze.prototype,"getDictionary",[T.f],Object.getOwnPropertyDescriptor(Ze.prototype,"getDictionary"),Ze.prototype),Ze),ct=rt=rt.getInstance(),ot="CSS1Compat"===document.compatMode?document.documentElement:document.body,st=ot.clientHeight,lt=ot.clientWidth;function dt(e,t){return lt*e*t}var ut=Object(b.a)({root:{width:"99%",height:"100%",display:"inline-block"},title:{paddingTop:"2%",textAlign:"center",fontWeight:600,paddingBottom:"1%"},table:{paddingTop:"1%",height:.6*st,width:"75%"},search:{width:"50%"}}),jt=[{field:"id",headerName:"\ubd81\ud55c\uc5b4",width:dt(.75,2/9)},{field:"south",headerName:"\ub0a8\ud55c\uc5b4",width:dt(.75,2/9)},{field:"mean",headerName:"\ub73b",width:dt(.75,.5)}];function bt(e){var t=ut(),n=Object(i.useState)(""),c=Object(v.a)(n,2),o=c[0],s=c[1],l=function(){d.getDictionary(o)},d=r.a.useContext(ct.context);return Object(i.useEffect)((function(){d.getDictionary()}),[]),Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsxs)("div",{className:t.title,children:[Object(a.jsx)(J.a,{className:t.title,variant:"h3",children:"\ubd81\ud55c\ub9d0 \uc0ac\uc804"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(w.a,{className:t.search,id:"standard-search",type:"search",onKeyPress:function(e){"Enter"===e.key&&l()},onChange:function(e){var t=e.target.value;s(t)}}),Object(a.jsx)(X.a,{onClick:l})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:t.content,children:Object(a.jsx)(p.a,{className:t.grid,container:!0,direction:"row",justify:"space-evenly",alignItems:"center",children:Object(a.jsx)("div",{className:t.table,children:Object(a.jsx)(ae.a,{columns:jt,rows:d.dictionarys,pageSize:8})})})})]})}var pt=n(274),ht=n(276),gt=n(275),xt=Object(b.a)({root:{width:"99%",height:"100%",display:"inline-block"},title:{paddingTop:"2%",textAlign:"center",fontWeight:600},content:{paddingTop:"5%"},mainContent:{width:"70%"},card:{width:"75%",height:"50%",marginLeft:"15%"},pass:{float:"right"},cardGrid:{width:"1000%"},ranking:{width:"20%"}});function Ot(e){var t=xt(),n=Object(i.useState)("\uc548\ub155\ud558\uc138\uc694 \uc800\ub294 \ubc14\ubcf4\uc785\ub2c8\ub2e4."),c=Object(v.a)(n,2),o=c[0],s=(c[1],Object(i.useState)("\uc548\ub155\ud558\uc138\uc694 \uc800\ub294 \ubc14\ubcf4\uc785\ub2c8\ub2e4.")),l=Object(v.a)(s,2),d=l[0];l[1],r.a.useContext(Le.context);return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)("div",{className:t.title,children:Object(a.jsx)(J.a,{className:t.title,variant:"h3",children:"\u5317\ud30c\uace0 \ud2b8\ub808\uc774\ub2dd"})}),Object(a.jsxs)("div",{className:t.content,children:[Object(a.jsx)("div",{className:t.mainContent,children:Object(a.jsxs)(pt.a,{className:t.card,children:[Object(a.jsxs)(gt.a,{children:[Object(a.jsx)(J.a,{variant:"h5",component:"h2",children:o}),Object(a.jsx)("br",{}),Object(a.jsx)(J.a,{variant:"h6",component:"h2",children:d})]}),Object(a.jsx)(ht.a,{children:Object(a.jsxs)(p.a,{className:t.cardGrid,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:4,children:[Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(h.a,{variant:"contained",disableRipple:!0,size:"large",children:Object(a.jsx)(Ae.a,{})})}),Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(h.a,{variant:"contained",disableRipple:!0,size:"large",children:Object(a.jsx)(He.a,{})})})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{className:t.pass,children:"\uac74\ub108\ub6f0\uae30 \u2192"})})]})}),Object(a.jsx)("div",{className:t.ranking,children:Object(a.jsx)(pt.a,{children:Object(a.jsx)(gt.a,{children:"\uc58d!"})})})]})]})}var mt=Object(b.a)((function(e){return{"@global":{"body, html":{padding:0,margin:0,minHeight:"100%",backgroundColor:"#f7fafa"}}}})),ft=Object(Qe.a)({palette:{primary:{main:"#58a0d1",dark:"#3d7092",light:"#79b3da",contrastText:"#fff"},secondary:{main:"#ffffff",contrastText:"#fff"}}}),yt=Object(d.a)((function(e){var t=mt();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(Ve.a,{theme:ft,children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(y,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/buk-pago",component:Me}),Object(a.jsx)(l.a,{exact:!0,path:"/free-board",component:Oe}),Object(a.jsx)(l.a,{exact:!0,path:"/buk-pago/dictionary",component:bt}),Object(a.jsx)(l.a,{exact:!0,path:"/buk-pago/train",component:Ot})]})}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/write",component:qe}),Object(a.jsx)(l.a,{path:"/sign-in",component:Ye})]})]})})})})),vt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,283)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(yt,{})}),document.getElementById("root")),vt()}},[[214,1,2]]]);
//# sourceMappingURL=main.cc65938b.chunk.js.map