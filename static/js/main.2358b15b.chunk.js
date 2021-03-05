(this["webpackJsonptodo_list-app"]=this["webpackJsonptodo_list-app"]||[]).push([[0],{127:function(e,t,n){},149:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var c,a=n(1),s=n.n(a),i=n(53),o=n.n(i),l=(n(149),n(4));!function(e){e.FirstPage="First Page",e.SignUp="Sign Up",e.SignIn="Sign In",e.DashBoard="Dashboard",e.List="List"}(c||(c={}));var r=n(265),d=n(275),u=n(274),j=n(56),b=n(31),h=n(261),m=n(272),O=n(271),g=n(3),p=function(e){var t=e.title;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(h.a,{color:"#3182ce",fontSize:"40px",id:t,mb:"20px",children:t})})},x=function(e){var t=Object(b.c)(e),n=Object(l.a)(t,2),c=n[0],a=n[1],s=e.type,i=e.placeholder,o=e.handleBlur,r=e.func;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({className:"text-input"},c),{},{type:s,placeholder:i,onBlur:function(e){o(e),void 0!==r&&r(e.target.value)}})),a.touched&&a.error?Object(g.jsx)("div",{className:"error",children:a.error}):null]})},f=function(e){var t=Object(b.c)(e),n=Object(l.a)(t,2),c=n[0],a=n[1],s=e.label,i=e.handleBlur;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,Object(j.a)(Object(j.a)({defaultChecked:!1,type:"checkbox"},c),{},{className:"checkbox",onBlur:function(e){i(e)},children:s})),a.touched&&a.error?Object(g.jsx)("div",{className:"error",children:a.error}):null]})},S=function(e){var t=e.title,n=e.onChange,a=[c.SignUp,c.SignIn];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{title:t}),Object(g.jsx)(r.a,{centerContent:!0,children:Object(g.jsx)(d.a,{spacing:8,children:a.map((function(e,t){return Object(g.jsx)(u.a,{colorScheme:"blue",onClick:function(){return n(e)},children:e},t)}))})})]})},v=n(8),C=n(20),y=(n(127),n(97));n(253);y.a.initializeApp({apiKey:"AIzaSyBaUv1_rwA3oi6TG1dmbOiGis4yRjnLLc8",authDomain:"bizarro-todo-list.firebaseapp.com",projectId:"bizarro-todo-list",storageBucket:"bizarro-todo-list.appspot.com",messagingSenderId:"347684058314",appId:"1:347684058314:web:401ec1d43df553b2753033",measurementId:"G-JR40FJDVQT"});var w=y.a,N=function(e){var t=e.changePage,n=Object(a.useState)([]),s=Object(l.a)(n,2),i=s[0],o=s[1],d=w.firestore().collection("users").doc("users_document");console.log(d);return Object(a.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),o(t[0].email)}))}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(b.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",passwordConfirm:"",acceptedTerms:!1},validationSchema:C.b({firstName:C.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),lastName:C.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),email:C.d().email("Invalid email address.").required("Please Enter a valid email address.").notOneOf(i,"This email is already in use."),password:C.d().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required("Please Enter your password."),passwordConfirm:C.d().when("password",(function(e,t){return e?t.required("Please confirm your password.").oneOf([C.c("password")],"You must use the same password you inserted before."):t})),acceptedTerms:C.a().oneOf([!0],"You must accept the terms and conditions.").required("Required")}),onSubmit:function(e,n){var a=n.setSubmitting,s=n.resetForm;setTimeout((function(){var n={fName:e.firstName,lName:e.lastName,pssw:e.password,lists:{},list:""};localStorage.setItem("email",e.email),d.set({email:[e.email].concat(Object(v.a)(i))}).then((function(){console.log("DONE EMAIL"),d.collection(e.email).doc("data").set(n).then((function(){console.log("DONE DATA")})),t(c.DashBoard)})).catch((function(e){return console.log("ERROR ".concat(e))})),console.log(e),console.log(typeof e),s(),a(!1)}),1500)},children:function(e){return Object(g.jsx)(b.a,{children:Object(g.jsxs)(r.a,{centerContent:!0,children:[Object(g.jsx)(p,{title:"Sign Up"}),Object(g.jsx)(x,{label:"First Name",name:"firstName",type:"text",placeholder:"First Name",handleBlur:e.handleBlur}),Object(g.jsx)(x,{label:"Last Name",name:"lastName",type:"text",placeholder:"Last Name",handleBlur:e.handleBlur}),Object(g.jsx)(x,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",handleBlur:e.handleBlur}),Object(g.jsx)(x,{label:"Password",name:"password",type:"password",placeholder:"password",handleBlur:e.handleBlur}),Object(g.jsx)(x,{label:"passwordConfirm",name:"passwordConfirm",type:"password",placeholder:"password confirmation",handleBlur:e.handleBlur}),Object(g.jsx)(f,{name:"acceptedTerms",label:"I accept the terms and conditions.",handleBlur:e.handleBlur}),Object(g.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Create Account"]})]})})}})})},B=function(e){var t=e.changePage,n=Object(a.useState)([]),s=Object(l.a)(n,2),i=s[0],o=s[1],d=w.firestore().collection("users").doc("users_document");console.log(d);Object(a.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),o(t[0].email)}))}),[]);var j=Object(a.useState)(""),h=Object(l.a)(j,2),m=h[0],O=h[1],f=Object(a.useState)(!1),S=Object(l.a)(f,2),v=S[0],y=S[1],N=function(e){w.firestore().collection("users").doc("users_document").collection(e).doc("data").get().then((function(e){e.exists?(y(!0),O(e.data().pssw)):y(!1)}))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(b.b,{initialValues:{email:"",password:""},validationSchema:C.b({email:C.d().email("Invalid email address.").required("Please your email address.").oneOf(i,"Sorry, this email is not linked to any account."),password:C.d().when("email",(function(e,t){return e&&v?t.required("Please enter your password.").oneOf([m],"You must use the same password you inserted before."):t}))}),onSubmit:function(e,n){var a=n.setSubmitting,s=n.resetForm;setTimeout((function(){localStorage.setItem("email",e.email),t(c.DashBoard),console.log(e),console.log(typeof e),s(),a(!1)}),1500)},children:function(e){return Object(g.jsx)(b.a,{children:Object(g.jsxs)(r.a,{centerContent:!0,children:[Object(g.jsx)(p,{title:"Sign In"}),Object(g.jsx)(x,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",func:N,handleBlur:e.handleBlur}),Object(g.jsx)(x,{label:"Password",name:"password",type:"password",placeholder:"********",handleBlur:e.handleBlur}),Object(g.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Sign In"]})]})})}})})},F=n(266),D=n(267),k=n(268),I=function(e){var t=e.onChange,n=(e.state,e.type);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(F.a,{alignSelf:"center",m:"5px",children:[Object(g.jsx)(D.a,{pointerEvents:"none",children:Object(g.jsx)(k.a,{color:"gray.300"})}),Object(g.jsx)(m.a,{type:"text",id:n,placeholder:n,onChange:function(e){t(e.target.value)}})]})})},E=n(269),T=function(e){var t=e.title,n=e.onChange,s=localStorage.getItem("email"),i=w.firestore().collection("users").doc("users_document").collection(s).doc("data"),o={fName:"",lName:"",pssw:"",lists:{},list:""},j=Object(a.useState)(o),b=Object(l.a)(j,2),m=b[0],O=b[1],x=Object(a.useState)(Object(g.jsx)(g.Fragment,{})),f=Object(l.a)(x,2),S=f[0],C=f[1],y=Object(a.useState)(""),N=Object(l.a)(y,2),B=N[0],F=N[1],D=Object(a.useState)("add"),k=Object(l.a)(D,2),T=k[0],A=k[1],P=Object(a.useState)([]),L=Object(l.a)(P,2),z=L[0],q=L[1];return Object(a.useEffect)((function(){i.onSnapshot((function(e){O(e.data()?e.data():o)}))}),[]),Object(a.useEffect)((function(){q(Object.keys(m.lists))}),[m]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{title:t}),Object(g.jsx)(h.a,{id:"box",mb:"10px",children:Object(g.jsxs)(d.a,{spacing:1,children:[S,Object(g.jsx)(u.a,{visibility:""===B?"collapse":"visible",colorScheme:"blue",onClick:function(){if(A("<<"),!(B in m.lists)){var e=m;e.list=B,e.lists[B]=[],O(e),i.set(e).then((function(){console.log("DONE DATA")})),setTimeout((function(){return n(c.List)}),500)}F(""),setTimeout((function(){return C(Object(g.jsx)(g.Fragment,{}))}),200)},children:T})]})}),Object(g.jsx)(r.a,{centerContent:!0,children:Object(g.jsx)(d.a,{spacing:8,children:Object(g.jsx)(r.a,{centerContent:!0,children:Object(g.jsx)(d.a,{spacing:8,children:Object(g.jsx)(u.a,{colorScheme:"blue",onClick:function(){C(Object(g.jsx)(I,{onChange:F,type:"new list"})),A("add"),setTimeout((function(){return document.getElementById("new list").focus()}),100)},children:"New List"})})})})}),Object(g.jsx)(h.a,{id:"box",m:"20px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},onChange:function(){},children:z.map((function(e,t){return Object(g.jsx)("div",{style:{color:"#3182ce",fontSize:"20px",margin:"10px"},children:Object(g.jsxs)(d.a,{spacing:5,children:[Object(g.jsx)(E.a,{color:"gray.300",onClick:function(){var n=m;delete n.lists[e],O(n),i.set(n).then((function(){console.log("DONE DATA")}));var c=Object(v.a)(z.slice(0,t)),a=Object(v.a)(z.slice(t+1,z.length));q(c.concat(a))}}),Object(g.jsx)(h.a,{onClick:function(){var t=m;t.list=e,O(t),i.set(t).then((function(){console.log("DONE DATA")})),setTimeout((function(){return n(c.List)}),50)},children:"".concat(e)})]})},t)}))})]})},A=function(e){e.title;var t=e.onChange,n=localStorage.getItem("email"),s=w.firestore().collection("users").doc("users_document").collection(n).doc("data"),i={fName:"",lName:"",pssw:"",lists:{},list:""},o=Object(a.useState)(i),j=Object(l.a)(o,2),b=j[0],m=j[1],x=Object(a.useState)(i),f=Object(l.a)(x,2),S=f[0],C=f[1],y=Object(a.useState)(""),N=Object(l.a)(y,2),B=N[0],F=N[1],D=Object(a.useState)(Object(g.jsx)(g.Fragment,{})),k=Object(l.a)(D,2),T=k[0],A=k[1],P=Object(a.useState)(""),L=Object(l.a)(P,2),z=L[0],q=L[1],R=Object(a.useState)("add"),_=Object(l.a)(R,2),M=_[0],U=_[1],J=Object(a.useState)("0"),G=Object(l.a)(J,2),V=G[0],Y=G[1];return Object(a.useEffect)((function(){s.onSnapshot((function(e){m(e.data()?e.data():i)})),s.get().then((function(e){e.exists&&C(e.data())}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a,{ml:"70%",mt:"10px",children:Object(g.jsxs)(d.a,{spacing:3,children:[Object(g.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){A(Object(g.jsx)(I,{onChange:F,type:"to-do list"})),Y("2"),U("add"),setTimeout((function(){return document.getElementById("to-do list").focus()}),100)},children:"Rename"}),Object(g.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){var e=S;e.list="",m(e),s.set(e).then((function(){console.log("DONE DATA")})),t(c.DashBoard)},children:"Cancel"})]})}),Object(g.jsx)(p,{title:b.list}),Object(g.jsx)(h.a,{id:"box",mb:"10px",children:Object(g.jsxs)(d.a,{spacing:1,children:[T,Object(g.jsx)(u.a,{visibility:""===z&&""===B?"collapse":"visible",colorScheme:"blue",onClick:function(){if(U("<<"),"1"===V){var e=b;e.lists[e.list]=Object(v.a)(e.lists[e.list].concat(["".concat(z,"!***!false")])),m(e),s.set(e).then((function(){console.log("DONE DATA")}))}if("2"===V){var t=b;B in t.lists||(t.list=B,t.lists[B]=t.lists[S.list],delete t.lists[S.list],m(t),s.set(t).then((function(){console.log("DONE DATA")})))}q(""),F(""),A(Object(g.jsx)(g.Fragment,{})),Y("0")},children:M})]})}),Object(g.jsx)(r.a,{centerContent:!0,children:Object(g.jsxs)(d.a,{spacing:8,children:[Object(g.jsx)(u.a,{colorScheme:"blue",onClick:function(){A(Object(g.jsx)(I,{onChange:q,type:"new item"})),Y("1"),U("add"),setTimeout((function(){return document.getElementById("new item").focus()}),100)},children:"New Item"}),Object(g.jsx)(u.a,{colorScheme:"blue",onClick:function(){t(c.DashBoard)},children:"Save"})]})}),Object(g.jsx)(h.a,{id:"box",m:"20px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},children:void 0!==b.lists[b.list]?b.lists[b.list].map((function(e,t){return Object(g.jsx)("div",{draggable:"true",style:{color:"#3182ce",fontSize:"20px",margin:"10px"},children:Object(g.jsxs)(d.a,{spacing:5,children:[Object(g.jsx)(E.a,{color:"gray.400",onClick:function(){var e=Object(v.a)(b.lists[b.list].slice(0,t)),n=Object(v.a)(b.lists[b.list].slice(t+1,b.lists[b.list].length)),c=b;c.lists[c.list]=e.concat(n),m(c),s.set(c).then((function(){console.log("DONE DATA")}))}}),Object(g.jsx)(O.a,{isChecked:"true"===e.split("!***!")[1],colorScheme:"blue",defaultIsChecked:"true"===e[1],style:{borderColor:"#3182ce"},onChange:function(){var e=Object(v.a)(b.lists[b.list]),n=e[t].split("!***!")[0];e[t]="true"===e[t].split("!***!")[1]?"".concat(n,"!***!false"):"".concat(n,"!***!true");var c=b;c.lists[c.list]=e,m(c),s.set(c).then((function(){console.log("DONE DATA")}))},children:"".concat(e.split("!***!")[0])})]})},t)})):null}),Object(g.jsx)(r.a,{centerContent:!0,children:Object(g.jsx)(d.a,{spacing:8})})]})},P=function(e){var t=e.onClick,n=e.text,c=e.page,a=e.visibility;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(h.a,{ml:"90%",mt:"10px",children:Object(g.jsx)(u.a,{visibility:a,colorScheme:"blue",size:"xs",onClick:function(){"Log out"===n&&localStorage.setItem("email",""),t(c)},children:n})})})},L=function(e){var t=e.whichPage,n=Object(a.useState)(t),s=Object(l.a)(n,2),i=s[0],o=s[1],d=Object(g.jsx)(g.Fragment,{children:" "}),u=Object(g.jsx)(P,{onClick:o,visibility:"visible",text:"Back",page:c.FirstPage});return i===c.FirstPage?(u=Object(g.jsx)(P,{onClick:o,visibility:"hidden",text:"Back",page:c.FirstPage}),d=Object(g.jsx)(S,{title:"To-Do List",onChange:o})):i===c.SignUp?d=Object(g.jsx)(N,{changePage:o}):i===c.SignIn?d=Object(g.jsx)(B,{changePage:o}):i===c.DashBoard?(u=Object(g.jsx)(P,{onClick:o,visibility:"visible",text:"Log out",page:c.FirstPage}),d=Object(g.jsx)(T,{title:"Dashboard",onChange:o})):i===c.List&&(u=Object(g.jsx)(g.Fragment,{children:" "}),d=Object(g.jsx)(A,{title:"List",onChange:o})),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(r.a,{centerContent:!0,children:[u,d]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},q=n(273),R=n(270),_=Object(R.a)({styles:{global:{body:{bg:"black",opacity:.9,color:"white"}}},components:{Container:{baseStyle:{fontWeight:"bold"}},Input:{}}}),M=c.FirstPage;localStorage.getItem("email")?""!==localStorage.getItem("email")&&(M=c.DashBoard):localStorage.setItem("email",""),o.a.render(Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(q.a,{theme:_,children:Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(L,{whichPage:M})})})}),document.getElementById("root")),z()}},[[252,1,2]]]);
//# sourceMappingURL=main.2358b15b.chunk.js.map