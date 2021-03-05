(this["webpackJsonptodo_list-app"]=this["webpackJsonptodo_list-app"]||[]).push([[0],{133:function(e,t,n){},155:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a,c=n(1),s=n.n(c),i=n(59),l=n.n(i),o=(n(155),n(4));!function(e){e.FirstPage="First Page",e.SignUp="Sign Up",e.SignIn="Sign In",e.DashBoard="Dashboard",e.List="List"}(a||(a={}));var r=n(270),d=n(283),u=n(281),j=n(62),b=n(34),m=n(266),h=n(279),O=n(278),p=n(2),x=function(e){var t=e.title;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(m.a,{color:"#3182ce",fontSize:"40px",id:t,mb:"20px",children:t})})},g=function(e){var t=Object(b.c)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],s=e.type,i=e.placeholder,l=e.handleBlur,r=e.func;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,Object(j.a)(Object(j.a)({className:"text-input"},a),{},{type:s,placeholder:i,onBlur:function(e){l(e),void 0!==r&&r(e.target.value)}})),c.touched&&c.error?Object(p.jsx)("div",{className:"error",children:c.error}):null]})},f=function(e){var t=Object(b.c)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],s=e.label,i=e.handleBlur;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,Object(j.a)(Object(j.a)({defaultChecked:!1,type:"checkbox"},a),{},{className:"checkbox",onBlur:function(e){i(e)},children:s})),c.touched&&c.error?Object(p.jsx)("div",{className:"error",children:c.error}):null]})},S=function(e){var t=e.title,n=e.onChange,c=[a.SignUp,a.SignIn];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{title:t}),Object(p.jsx)(r.a,{centerContent:!0,children:Object(p.jsx)(d.a,{spacing:8,children:c.map((function(e,t){return Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){return n(e)},children:e},t)}))})})]})},v=n(8),w=n(21),C=(n(133),n(102));n(259);C.a.initializeApp({apiKey:"AIzaSyBaUv1_rwA3oi6TG1dmbOiGis4yRjnLLc8",authDomain:"bizarro-todo-list.firebaseapp.com",projectId:"bizarro-todo-list",storageBucket:"bizarro-todo-list.appspot.com",messagingSenderId:"347684058314",appId:"1:347684058314:web:401ec1d43df553b2753033",measurementId:"G-JR40FJDVQT"});var y=C.a,B=function(e){var t=e.changePage,n=Object(c.useState)([]),s=Object(o.a)(n,2),i=s[0],l=s[1],d=y.firestore().collection("users").doc("users_document");console.log(d);return Object(c.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),l(t[0].email)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",passwordConfirm:"",acceptedTerms:!1},validationSchema:w.b({firstName:w.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),lastName:w.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),email:w.d().email("Invalid email address.").required("Please Enter a valid email address.").notOneOf(i,"This email is already in use."),password:w.d().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required("Please Enter your password."),passwordConfirm:w.d().when("password",(function(e,t){return e?t.required("Please confirm your password.").oneOf([w.c("password")],"You must use the same password you inserted before."):t})),acceptedTerms:w.a().oneOf([!0],"You must accept the terms and conditions.").required("Required")}),onSubmit:function(e,n){var c=n.setSubmitting,s=n.resetForm;setTimeout((function(){var n={fName:e.firstName,lName:e.lastName,pssw:e.password,lists:{},list:""};localStorage.setItem("email",e.email),d.set({email:[e.email].concat(Object(v.a)(i))}).then((function(){console.log("DONE EMAIL"),d.collection(e.email).doc("data").set(n).then((function(){console.log("DONE DATA")})),t(a.DashBoard)})).catch((function(e){return console.log("ERROR ".concat(e))})),console.log(e),console.log(typeof e),s(),c(!1)}),1500)},children:function(e){return Object(p.jsx)(b.a,{children:Object(p.jsxs)(r.a,{centerContent:!0,children:[Object(p.jsx)(x,{title:"Sign Up"}),Object(p.jsx)(g,{label:"First Name",name:"firstName",type:"text",placeholder:"First Name",handleBlur:e.handleBlur}),Object(p.jsx)(g,{label:"Last Name",name:"lastName",type:"text",placeholder:"Last Name",handleBlur:e.handleBlur}),Object(p.jsx)(g,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",handleBlur:e.handleBlur}),Object(p.jsx)(g,{label:"Password",name:"password",type:"password",placeholder:"password",handleBlur:e.handleBlur}),Object(p.jsx)(g,{label:"passwordConfirm",name:"passwordConfirm",type:"password",placeholder:"password confirmation",handleBlur:e.handleBlur}),Object(p.jsx)(f,{name:"acceptedTerms",label:"I accept the terms and conditions.",handleBlur:e.handleBlur}),Object(p.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Create Account"]})]})})}})})},F=function(e){var t=e.changePage,n=Object(c.useState)([]),s=Object(o.a)(n,2),i=s[0],l=s[1],d=y.firestore().collection("users").doc("users_document");console.log(d);Object(c.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),l(t[0].email)}))}),[]);var j=Object(c.useState)(""),m=Object(o.a)(j,2),h=m[0],O=m[1],f=Object(c.useState)(!1),S=Object(o.a)(f,2),v=S[0],C=S[1],B=function(e){y.firestore().collection("users").doc("users_document").collection(e).doc("data").get().then((function(e){e.exists?(C(!0),O(e.data().pssw)):C(!1)}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.b,{initialValues:{email:"",password:""},validationSchema:w.b({email:w.d().email("Invalid email address.").required("Please your email address.").oneOf(i,"Sorry, this email is not linked to any account."),password:w.d().when("email",(function(e,t){return e&&v?t.required("Please enter your password.").oneOf([h],"You must use the same password you inserted before."):t}))}),onSubmit:function(e,n){var c=n.setSubmitting,s=n.resetForm;setTimeout((function(){localStorage.setItem("email",e.email),t(a.DashBoard),console.log(e),console.log(typeof e),s(),c(!1)}),1500)},children:function(e){return Object(p.jsx)(b.a,{children:Object(p.jsxs)(r.a,{centerContent:!0,children:[Object(p.jsx)(x,{title:"Sign In"}),Object(p.jsx)(g,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",func:B,handleBlur:e.handleBlur}),Object(p.jsx)(g,{label:"Password",name:"password",type:"password",placeholder:"********",handleBlur:e.handleBlur}),Object(p.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Sign In"]})]})})}})})},I=n(271),k=n(272),N=n(273),E=function(e){var t=e.onChange,n=(e.state,e.type);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(I.a,{alignSelf:"center",m:"5px",children:[Object(p.jsx)(k.a,{pointerEvents:"none",children:Object(p.jsx)(N.a,{color:"gray.300"})}),Object(p.jsx)(h.a,{type:"text",id:n,placeholder:n,onChange:function(e){t(e.target.value)}})]})})},L=n(274),P={fName:"",lName:"",pssw:"",lists:{},list:""},T=function(e){var t=e.ref,n=e.setState,a=e.newState;n(a),t.set(a).then((function(){console.log("DONE DATA")}))},D=function(e){var t=e.title,n=e.onChange,s=localStorage.getItem("email"),i=y.firestore().collection("users").doc("users_document").collection(s).doc("data"),l=Object(c.useState)(P),j=Object(o.a)(l,2),b=j[0],h=j[1],O=Object(c.useState)(Object(p.jsx)(p.Fragment,{})),g=Object(o.a)(O,2),f=g[0],S=g[1],w=Object(c.useState)(""),C=Object(o.a)(w,2),B=C[0],F=C[1],I=Object(c.useState)("add"),k=Object(o.a)(I,2),N=k[0],D=k[1],z=Object(c.useState)([]),R=Object(o.a)(z,2),q=R[0],A=R[1];return Object(c.useEffect)((function(){i.onSnapshot((function(e){h(e.data()?e.data():P)}))}),[]),Object(c.useEffect)((function(){A(Object.keys(b.lists))}),[b]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{title:t}),Object(p.jsx)(m.a,{id:"box",mb:"10px",children:Object(p.jsxs)(d.a,{spacing:1,children:[f,Object(p.jsx)(u.a,{visibility:""===B?"collapse":"visible",colorScheme:"blue",onClick:function(){if(D("<<"),!(B in b.lists)){var e=b;e.list=B,e.lists[B]=[],T({ref:i,setState:h,newState:e}),setTimeout((function(){return n(a.List)}),500)}F(""),setTimeout((function(){return S(Object(p.jsx)(p.Fragment,{}))}),200)},children:N})]})}),Object(p.jsx)(r.a,{centerContent:!0,children:Object(p.jsx)(d.a,{spacing:8,children:Object(p.jsx)(r.a,{centerContent:!0,children:Object(p.jsx)(d.a,{spacing:8,children:Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){S(Object(p.jsx)(E,{onChange:F,type:"new list"})),D("add"),setTimeout((function(){return document.getElementById("new list").focus()}),100)},children:"New List"})})})})}),Object(p.jsx)(m.a,{id:"box",m:"20px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},onChange:function(){},children:q.map((function(e,t){return Object(p.jsx)("div",{style:{color:"#3182ce",fontSize:"20px",margin:"10px"},children:Object(p.jsxs)(d.a,{spacing:5,children:[Object(p.jsx)(L.a,{color:"gray.300",onClick:function(){var n=b;delete n.lists[e],T({ref:i,setState:h,newState:n});var a=Object(v.a)(q.slice(0,t)),c=Object(v.a)(q.slice(t+1,q.length));A(a.concat(c))}}),Object(p.jsx)(m.a,{onClick:function(){var t=b;t.list=e,T({ref:i,setState:h,newState:t}),setTimeout((function(){return n(a.List)}),50)},children:"".concat(e)})]})},t)}))})]})},z=n(275),R=n(284),q=function(e){e.title;var t=e.onChange,n=localStorage.getItem("email"),s=y.firestore().collection("users").doc("users_document").collection(n).doc("data"),i=Object(c.useState)(P),l=Object(o.a)(i,2),j=l[0],b=l[1],h=Object(c.useState)(P),g=Object(o.a)(h,2),f=g[0],S=g[1],w=Object(c.useState)(""),C=Object(o.a)(w,2),B=C[0],F=C[1],I=Object(c.useState)(Object(p.jsx)(p.Fragment,{})),k=Object(o.a)(I,2),N=k[0],D=k[1],q=Object(c.useState)(""),A=Object(o.a)(q,2),_=A[0],M=A[1],U=Object(c.useState)("add"),Y=Object(o.a)(U,2),J=Y[0],G=Y[1],V=Object(c.useState)("0"),$=Object(o.a)(V,2),X=$[0],Z=$[1],K=Object(c.useState)(!1),Q=Object(o.a)(K,2),W=Q[0],H=Q[1],ee=function(e){var t=document.getElementById("newItem");if(t){var n=[t.getBoundingClientRect().x,t.getBoundingClientRect().y],a=n[0],c=n[1],s=(e.clientX-a-100)*(e.clientX-a-100)+(e.clientY-c-10)*(e.clientY-c-10);H(s<35e3)}else H(!0)};return Object(c.useEffect)((function(){return s.onSnapshot((function(e){b(e.data()?e.data():P)})),s.get().then((function(e){e.exists&&S(e.data())})),window.addEventListener("mousemove",ee),function(){window.removeEventListener("mousemove",ee)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{ml:"70%",mt:"10px",children:Object(p.jsxs)(d.a,{spacing:3,children:[Object(p.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){D(Object(p.jsx)(E,{onChange:F,type:"to-do list"})),Z("2"),G("add"),setTimeout((function(){return document.getElementById("to-do list").focus()}),100)},children:"Rename"}),Object(p.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){var e=f;e.list="",T({ref:s,setState:b,newState:e}),t(a.DashBoard)},children:"Cancel"})]})}),Object(p.jsx)(x,{title:j.list}),Object(p.jsx)(m.a,{id:"box",mb:"10px",children:Object(p.jsxs)(d.a,{spacing:1,children:[N,Object(p.jsx)(u.a,{visibility:""===_&&""===B?"collapse":"visible",colorScheme:"blue",onClick:function(){if(G("<<"),"1"===X){var e=j;e.lists[e.list]=Object(v.a)(e.lists[e.list].concat(["".concat(_,"!***!false!***!")])),T({ref:s,setState:b,newState:e})}if("2"===X){var t=j;B in t.lists||(t.list=B,t.lists[B]=t.lists[f.list],delete t.lists[f.list],T({ref:s,setState:b,newState:t}))}M(""),F(""),D(Object(p.jsx)(p.Fragment,{})),Z("0")},children:J})]})}),Object(p.jsxs)(r.a,{centerContent:!0,children:[Object(p.jsx)(z.a,{m:5,mt:-3}),Object(p.jsx)(R.a,{in:W,id:"newItem",children:Object(p.jsxs)(d.a,{spacing:8,children:[Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){D(Object(p.jsx)(E,{onChange:M,type:"new item"})),Z("1"),G("add"),setTimeout((function(){return document.getElementById("new item").focus()}),100)},children:"New Item"}),Object(p.jsx)(u.a,{id:"save",colorScheme:"blue",onClick:function(){t(a.DashBoard)},children:"Save"})]})}),Object(p.jsx)(z.a,{m:5})]}),Object(p.jsx)(m.a,{id:"box",m:"20px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},children:void 0!==j.lists[j.list]?j.lists[j.list].map((function(e,t){return Object(p.jsx)("div",{draggable:"true",style:{color:"#3182ce",fontSize:"20px",margin:"10px"},children:Object(p.jsxs)(d.a,{spacing:5,children:[Object(p.jsx)(L.a,{color:"gray.400",onClick:function(){var e=Object(v.a)(j.lists[j.list].slice(0,t)),n=Object(v.a)(j.lists[j.list].slice(t+1,j.lists[j.list].length)),a=j;a.lists[a.list]=e.concat(n),T({ref:s,setState:b,newState:a})}}),Object(p.jsx)(O.a,{isChecked:"true"===e.split("!***!")[1],colorScheme:"blue",defaultIsChecked:"true"===e[1],style:{borderColor:"#3182ce"},onChange:function(){var e=Object(v.a)(j.lists[j.list]),n=e[t].split("!***!")[0],a=e[t].split("!***!")[2]?e[t].split("!***!")[2]:"";e[t]="true"===e[t].split("!***!")[1]?"".concat(n,"!***!false!***!").concat(a):"".concat(n,"!***!true!***!").concat(a);var c=j;c.lists[c.list]=e,T({ref:s,setState:b,newState:c})},children:"".concat(e.split("!***!")[0])}),Object(p.jsx)("a",{href:e.split("!***!")[2]?e.split("!***!")[2]:"",children:e.split("!***!")[2]?"(link)":null})]})},t)})):null}),Object(p.jsx)(r.a,{centerContent:!0,children:Object(p.jsx)(d.a,{spacing:8})})]})},A=function(e){var t=e.onClick,n=e.text,a=e.page,c=e.visibility;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(m.a,{ml:"90%",mt:"10px",children:Object(p.jsx)(u.a,{visibility:c,colorScheme:"blue",size:"xs",onClick:function(){"Log out"===n&&localStorage.setItem("email",""),t(a)},children:n})})})},_=function(e){var t=e.whichPage,n=Object(c.useState)(t),s=Object(o.a)(n,2),i=s[0],l=s[1],d=Object(p.jsx)(p.Fragment,{children:" "}),u=Object(p.jsx)(A,{onClick:l,visibility:"visible",text:"Back",page:a.FirstPage});return i===a.FirstPage?(u=Object(p.jsx)(A,{onClick:l,visibility:"hidden",text:"Back",page:a.FirstPage}),d=Object(p.jsx)(S,{title:"To-Do List",onChange:l})):i===a.SignUp?d=Object(p.jsx)(B,{changePage:l}):i===a.SignIn?d=Object(p.jsx)(F,{changePage:l}):i===a.DashBoard?(u=Object(p.jsx)(A,{onClick:l,visibility:"visible",text:"Log out",page:a.FirstPage}),d=Object(p.jsx)(D,{title:"Dashboard",onChange:l})):i===a.List&&(u=Object(p.jsx)(p.Fragment,{children:" "}),d=Object(p.jsx)(q,{title:"List",onChange:l})),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(r.a,{centerContent:!0,children:[u,d]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,285)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},U=n(280),Y=n(276),J=Object(Y.a)({styles:{global:{body:{bg:"black",opacity:.9,color:"white"}}},components:{Container:{baseStyle:{fontWeight:"bold"}},Input:{}}}),G=a.FirstPage;localStorage.getItem("email")?""!==localStorage.getItem("email")&&(G=a.DashBoard):localStorage.setItem("email",""),l.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(U.a,{theme:J,children:Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(_,{whichPage:G})})})}),document.getElementById("root")),M()}},[[258,1,2]]]);
//# sourceMappingURL=main.8db036ff.chunk.js.map