(this["webpackJsonptodo_list-app"]=this["webpackJsonptodo_list-app"]||[]).push([[0],{141:function(e,t,n){},165:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n.n(c),r=n(39),s=n.n(r),o=(n(165),n(4));!function(e){e.FirstPage="First Page",e.SignUp="Sign Up",e.SignIn="Sign In",e.DashBoard="Dashboard",e.List="List",e.Dice="Dice"}(a||(a={}));var l=n(284),d=n(295),u=n(294),b=n(31),j=n(23),h=n(280),m=n(281),O=n(292),f=n(2),p=function(e){var t=e.title;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.a,{color:"#3182ce",fontSize:"40px",id:t,mb:"20px",children:t})})},x=function(e){var t=Object(j.c)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],i=e.type,r=e.placeholder,s=e.handleBlur,l=e.func;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,Object(b.a)(Object(b.a)({className:"text-input"},a),{},{type:i,placeholder:r,onBlur:function(e){s(e),void 0!==l&&l(e.target.value)}})),c.touched&&c.error?Object(f.jsx)("div",{className:"error",children:c.error}):null]})},g=function(e){var t=Object(j.c)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],i=e.label,r=e.handleBlur;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O.a,Object(b.a)(Object(b.a)({defaultChecked:!1,type:"checkbox"},a),{},{className:"checkbox",onBlur:function(e){r(e)},children:i})),c.touched&&c.error?Object(f.jsx)("div",{className:"error",children:c.error}):null]})},v=function(e){var t=e.title,n=e.onChange,c=[a.SignUp,a.SignIn];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{title:t}),Object(f.jsx)(l.a,{centerContent:!0,children:Object(f.jsx)(d.a,{spacing:8,children:c.map((function(e,t){return Object(f.jsx)(u.a,{colorScheme:"blue",onClick:function(){return n(e)},children:e},t)}))})})]})},y=n(10),S=n(19),w=(n(141),n(110));n(271);w.a.initializeApp({apiKey:"AIzaSyBaUv1_rwA3oi6TG1dmbOiGis4yRjnLLc8",authDomain:"bizarro-todo-list.firebaseapp.com",projectId:"bizarro-todo-list",storageBucket:"bizarro-todo-list.appspot.com",messagingSenderId:"347684058314",appId:"1:347684058314:web:401ec1d43df553b2753033",measurementId:"G-JR40FJDVQT"});var C=w.a,k=function(e){var t=e.changePage,n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],s=i[1],d=C.firestore().collection("users").doc("users_document");console.log(d);return Object(c.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),s(t[0].email)}))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",passwordConfirm:"",acceptedTerms:!1},validationSchema:S.b({firstName:S.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),lastName:S.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),email:S.d().email("Invalid email address.").required("Please Enter a valid email address.").notOneOf(r,"This email is already in use."),password:S.d().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required("Please Enter your password."),passwordConfirm:S.d().when("password",(function(e,t){return e?t.required("Please confirm your password.").oneOf([S.c("password")],"You must use the same password you inserted before."):t})),acceptedTerms:S.a().oneOf([!0],"You must accept the terms and conditions.").required("Required")}),onSubmit:function(e,n){var c=n.setSubmitting,i=n.resetForm;setTimeout((function(){var n={fName:e.firstName,lName:e.lastName,pssw:e.password,lists:{},list:""};localStorage.setItem("email",e.email),d.set({email:[e.email].concat(Object(y.a)(r))}).then((function(){console.log("DONE EMAIL"),d.collection(e.email).doc("data").set(n).then((function(){console.log("DONE DATA")})),t(a.DashBoard)})).catch((function(e){return console.log("ERROR ".concat(e))})),console.log(e),console.log(typeof e),i(),c(!1)}),1500)},children:function(e){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(l.a,{centerContent:!0,children:[Object(f.jsx)(p,{title:"Sign Up"}),Object(f.jsx)(x,{label:"First Name",name:"firstName",type:"text",placeholder:"First Name",handleBlur:e.handleBlur}),Object(f.jsx)(x,{label:"Last Name",name:"lastName",type:"text",placeholder:"Last Name",handleBlur:e.handleBlur}),Object(f.jsx)(x,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",handleBlur:e.handleBlur}),Object(f.jsx)(x,{label:"Password",name:"password",type:"password",placeholder:"password",handleBlur:e.handleBlur}),Object(f.jsx)(x,{label:"passwordConfirm",name:"passwordConfirm",type:"password",placeholder:"password confirmation",handleBlur:e.handleBlur}),Object(f.jsx)(g,{name:"acceptedTerms",label:"I accept the terms and conditions.",handleBlur:e.handleBlur}),Object(f.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Create Account"]})]})})}})})},B=function(e){var t=e.changePage,n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],s=i[1],d=C.firestore().collection("users").doc("users_document");Object(c.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),s(t[0].email)}))}),[]);var b=Object(c.useState)(""),h=Object(o.a)(b,2),m=h[0],O=h[1],g=Object(c.useState)(!1),v=Object(o.a)(g,2),y=v[0],w=v[1],k=function(e){C.firestore().collection("users").doc("users_document").collection(e).doc("data").get().then((function(e){e.exists?(w(!0),O(e.data().pssw)):w(!1)}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.b,{initialValues:{email:"",password:""},validationSchema:S.b({email:S.d().email("Invalid email address.").required("Please your email address.").oneOf(r,"Sorry, this email is not linked to any account."),password:S.d().when("email",(function(e,t){return e&&y?t.required("Please enter your password.").oneOf([m],"You must use the same password you inserted before."):t}))}),onSubmit:function(e,n){var c=n.setSubmitting,i=n.resetForm;setTimeout((function(){localStorage.setItem("email",e.email),t(a.DashBoard),i(),c(!1)}),1500)},children:function(e){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(l.a,{centerContent:!0,children:[Object(f.jsx)(p,{title:"Sign In"}),Object(f.jsx)(x,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",func:k,handleBlur:e.handleBlur}),Object(f.jsx)(x,{label:"Password",name:"password",type:"password",placeholder:"********",handleBlur:e.handleBlur}),Object(f.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Sign In"]})]})})}})})},I=n(296),F=n(285),N={fName:"",lName:"",pssw:"",lists:{},list:""},L=function(e){var t=e.ref,n=e.setState,a=e.newState;n(a),t.set(a).then((function(){}))},P=function(e){var t=e.title,n=e.changePage,i=localStorage.getItem("email"),r=C.firestore().collection("users").doc("users_document").collection(i).doc("data"),s=Object(c.useState)(N),b=Object(o.a)(s,2),m=b[0],O=b[1],g=Object(c.useState)([]),v=Object(o.a)(g,2),w=v[0],k=v[1],B=Object(c.useState)(!1),P=Object(o.a)(B,2),D=P[0],T=P[1];return Object(c.useEffect)((function(){r.onSnapshot((function(e){O(e.data()?e.data():N)}))}),[]),Object(c.useEffect)((function(){k(Object.keys(m.lists))}),[m]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{title:t}),Object(f.jsx)(h.a,{id:"box",mb:"10px",children:Object(f.jsx)(j.b,{initialValues:{newList:""},validationSchema:S.b({newList:S.d().required("You must give it a name.").notOneOf(Object.keys(m.lists),"This list already exists")}),onSubmit:function(e,t){var c=t.setSubmitting,i=t.resetForm;setTimeout((function(){var t=m;t.list=e.newList,t.lists[e.newList]=[],L({ref:r,setState:O,newState:t}),setTimeout((function(){return n(a.List)}),500),i(),c(!1)}),500)},children:function(e){return Object(f.jsx)(j.a,{children:Object(f.jsx)(l.a,{centerContent:!0,children:Object(f.jsxs)(d.b,{spacing:3,children:[Object(f.jsx)(I.a,{in:D,children:Object(f.jsxs)(d.a,{spacing:5,children:[Object(f.jsx)(d.b,{spacing:1,children:Object(f.jsx)(x,{label:"",name:"newList",type:"text",placeholder:"new list",handleBlur:e.handleBlur})}),Object(f.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"add"]})]})}),Object(f.jsx)(u.a,{colorScheme:"blue",onClick:function(){e.resetForm(),T(!D),setTimeout((function(){document.getElementsByName("newList")[0].focus()}),100)},children:D?"Cancel":"New List"})]})})})}})}),Object(f.jsx)(h.a,{id:"box",m:"20px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},onChange:function(){},children:w.sort().map((function(e,t){return Object(f.jsx)("div",{style:{color:"#3182ce",fontSize:"20px",margin:"10px"},children:Object(f.jsxs)(d.a,{spacing:5,children:[Object(f.jsx)(F.a,{color:"gray.300",onClick:function(){var n=m;delete n.lists[e],L({ref:r,setState:O,newState:n});var a=Object(y.a)(w.slice(0,t)),c=Object(y.a)(w.slice(t+1,w.length));k(a.concat(c))}}),Object(f.jsx)(h.a,{onClick:function(){var t=m;t.list=e,L({ref:r,setState:O,newState:t}),setTimeout((function(){return n(a.List)}),50)},children:"".concat(e)})]})},t)}))}),Object(f.jsx)(u.a,{colorScheme:"blue",onClick:function(){return n(a.Dice)},children:"Non-Transitive Dice"})]})},D=n(286),T=n(93),E=function(e){e.title;var t=e.changePage,n=localStorage.getItem("email"),i=C.firestore().collection("users").doc("users_document").collection(n).doc("data"),r=Object(c.useState)(N),s=Object(o.a)(r,2),m=s[0],g=s[1],v=Object(c.useState)(N),w=Object(o.a)(v,2),k=w[0],B=w[1],P=Object(c.useState)(""),E=Object(o.a)(P,2),R=(E[0],E[1],Object(c.useState)(Object(f.jsx)(f.Fragment,{}))),z=Object(o.a)(R,2),q=(z[0],z[1],Object(c.useState)("")),A=Object(o.a)(q,2),M=(A[0],A[1],Object(c.useState)("add")),U=Object(o.a)(M,2),_=(U[0],U[1],Object(c.useState)("0")),Y=Object(o.a)(_,2),J=Y[0],V=Y[1],G=Object(c.useState)(!0),$=Object(o.a)(G,2),W=$[0],X=$[1],Z=Object(c.useState)(!1),H=Object(o.a)(Z,2),K=H[0],Q=H[1],ee=function(){return Q(!K)},te=function(e){var t=document.getElementById("newItem");if(t&&window.innerWidth>500){var n=[t.getBoundingClientRect().x,t.getBoundingClientRect().y],a=n[0],c=n[1],i=(e.clientX-a-100)*(e.clientX-a-100)+(e.clientY-c-10)*(e.clientY-c-10);X(i<35e3)}else X(!0)};return Object(c.useEffect)((function(){return i.onSnapshot((function(e){g(e.data()?e.data():N)})),i.get().then((function(e){e.exists&&B(e.data())})),window.addEventListener("mousemove",te),function(){window.removeEventListener("mousemove",te)}}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.b,{initialValues:{newItem:""},validationSchema:S.b({newItem:S.d().required("You must give it a name.").notOneOf(Object.keys(m.lists),"This list already exists")}),onSubmit:function(e,t){var n=t.setSubmitting,a=t.resetForm;setTimeout((function(){if("1"===J){var t=m;t.lists[t.list]=Object(y.a)(t.lists[t.list].concat(["".concat(e.newItem,"!***!false!***!")])),L({ref:i,setState:g,newState:t})}if("2"===J){var c=m;c.list=e.newItem,c.lists[e.newItem]=c.lists[k.list],delete c.lists[k.list],L({ref:i,setState:g,newState:c});var r=k;r.list=e.newItem,B(r)}V("0"),a(),n(!1),ee()}),200)},children:function(e){return Object(f.jsxs)(j.a,{children:[Object(f.jsx)(I.a,{in:!K,children:Object(f.jsx)(h.a,{ml:"50%",mt:"10px",children:Object(f.jsxs)(d.a,{spacing:3,children:[Object(f.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){V("2"),e.resetForm(),ee(),setTimeout((function(){document.getElementsByName("newItem")[0].focus()}),100)},children:"Rename"}),Object(f.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){var e=k;e.list="",L({ref:i,setState:g,newState:e}),t(a.DashBoard)},children:"Cancel"})]})})}),Object(f.jsxs)(l.a,{centerContent:!0,children:[Object(f.jsx)(p,{title:m.list}),Object(f.jsxs)(d.b,{spacing:3,children:[Object(f.jsx)(I.a,{in:K,children:Object(f.jsxs)(d.a,{spacing:5,children:[Object(f.jsx)(d.b,{spacing:1,children:Object(f.jsx)(x,{label:"",name:"newItem",type:"text",placeholder:"new item",handleBlur:e.handleBlur})}),Object(f.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"1"===J?"add":"rename"]})]})}),Object(f.jsxs)(d.a,{spacing:8,children:[Object(f.jsx)(u.a,{colorScheme:"blue",onClick:function(){V("1"),e.resetForm(),ee(),setTimeout((function(){document.getElementsByName("newItem")[0].focus()}),100)},children:K?"Cancel":"New Item"}),Object(f.jsx)(D.a,{in:W,id:"newItem",children:Object(f.jsx)(u.a,{id:"save",colorScheme:"blue",onClick:function(){t(a.DashBoard)},children:"Save"})})]})]})]})]})}}),Object(f.jsx)(h.a,{id:"box",m:"20px",p:"30px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},children:Object(f.jsx)(T.a,{onDragEnd:function(e){if(e.destination){var t=m,n=t.lists[t.list].splice(e.source.index,1),a=Object(o.a)(n,1)[0];t.lists[t.list].splice(e.destination.index,0,a),L({ref:i,setState:g,newState:t})}},children:Object(f.jsx)(T.c,{droppableId:"characters",children:function(e){return Object(f.jsxs)(h.a,Object(b.a)(Object(b.a)({},e.droppableProps),{},{ref:e.innerRef,children:[void 0!==m.lists[m.list]?m.lists[m.list].map((function(e,t){return Object(f.jsx)(T.b,{draggableId:""+t,index:t,children:function(n){return Object(f.jsx)(h.a,Object(b.a)(Object(b.a)(Object(b.a)({style:{fontSize:"20px",margin:"10px"},ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(f.jsxs)(d.a,{spacing:5,children:[Object(f.jsx)(F.a,{color:"gray.400",onClick:function(){var e=Object(y.a)(m.lists[m.list].slice(0,t)),n=Object(y.a)(m.lists[m.list].slice(t+1,m.lists[m.list].length)),a=m;a.lists[a.list]=e.concat(n),L({ref:i,setState:g,newState:a})}}),Object(f.jsx)(O.a,{m:"5px",isChecked:"true"===e.split("!***!")[1],colorScheme:"blue",defaultIsChecked:"true"===e[1],style:{borderColor:"#3182ce",color:"#3182ce"},onChange:function(){var e=Object(y.a)(m.lists[m.list]),n=e[t].split("!***!")[0],a=e[t].split("!***!")[2]?e[t].split("!***!")[2]:"";e[t]="true"===e[t].split("!***!")[1]?"".concat(n,"!***!false!***!").concat(a):"".concat(n,"!***!true!***!").concat(a);var c=m;c.lists[c.list]=e,L({ref:i,setState:g,newState:c})},children:"".concat(e.split("!***!")[0])}),Object(f.jsx)("a",{href:e.split("!***!")[2]?e.split("!***!")[2]:"",children:e.split("!***!")[2]?"(link)":null})]})}))}},t)})):null,e.placeholder]}))}})})}),Object(f.jsx)(l.a,{centerContent:!0,children:Object(f.jsx)(d.a,{spacing:8})})]})},R=n(14),z=n(287),q=n(288),A=n(289),M=n(290),U={red:[4,4,4,4,4,9],blue:[2,2,2,7,7,7],olive:[0,5,5,5,5,5],yellow:[3,3,3,3,8,8],magenta:[1,1,6,6,6,6]},_={"one die":1,"two dice":2},Y=function(e){for(var t=new Array(Math.pow(6,e)),n=0;n<t.length;n++){t[n]=[];for(var a=0;a<t.length;a++)t[n].push(0)}return t},J=function(e){var t=e.title,n=Object(c.useState)(["red","red"]),a=Object(o.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(Y(_["one die"])),b=Object(o.a)(s,2),j=b[0],h=b[1],m=Object(c.useState)(_["one die"]),O=Object(o.a)(m,2),x=O[0],g=O[1],v=Object(c.useState)(!0),y=Object(o.a)(v,2),S=y[0],w=y[1],C=["F\xedsica","Mec\xe2nica","Din\xe2mica","For\xe7a","For\xe7a de Atrito"],k=function(){return w(!1)};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(l.a,{centerContent:!0,children:[Object(f.jsx)(p,{title:t}),Object(f.jsx)(z.a,{templateRows:"repeat(2, 1fr)",gap:1,mb:"20px",children:i.map((function(e,t){return 1===t&&i[1]===i[0]||S?Object(f.jsx)(f.Fragment,{}):Object(f.jsxs)(z.a,{templateColumns:"repeat(2, 1fr)",gap:6,children:[Object(f.jsx)(q.a,{visibility:S?"hidden":"visible",style:{color:"white",backgroundColor:"black",opacity:"70%"},children:"".concat(e[0].toUpperCase()+e.slice(1)," die: ")}),Object(f.jsx)(q.a,{visibility:S?"hidden":"visible",style:{color:"white",backgroundColor:"black",opacity:"70%"},children:"[".concat(U[e],"]")})]},t)}))}),Object(f.jsxs)(d.a,{spacing:4,mb:"20px",children:[Object(f.jsx)(A.a,{style:{fontSize:"8px"},placeholder:"",onChange:function(e){k();var t=parseInt(e.target.value);g(t),V(U[i[0]],U[i[1]],h,t)},children:Object.keys(_).map((function(e){return Object(f.jsx)("option",{style:{color:"white",backgroundColor:"black"},value:""+_[e],children:e.toUpperCase()},e)}))}),Object(f.jsx)(A.a,{placeholder:"",style:{color:"yellow"===i[0]?"black":"white",backgroundColor:i[0]},onChange:function(e){k(),r((function(t){return[e.target.value,t[1]]})),V(U[e.target.value],U[i[1]],h,x)},children:Object.keys(U).map((function(e){return Object(f.jsx)("option",{style:{color:"white",backgroundColor:"black"},value:e,children:e.toUpperCase()},e)}))}),Object(f.jsx)(A.a,{placeholder:"",style:{color:"yellow"===i[1]?"black":"white",backgroundColor:i[1]},onChange:function(e){k(),r((function(t){return[t[0],e.target.value]})),V(U[i[0]],U[e.target.value],h,x)},children:Object.keys(U).map((function(e){return Object(f.jsx)("option",{style:{color:"white",backgroundColor:"black"},value:e,children:e.toUpperCase()},e)}))})]}),Object(f.jsx)(q.a,{style:{color:"white",opacity:"60%",textAlign:"center"},mt:"5px",mb:"15px",children:"The probability of ".concat(x===_["one die"]?"one":"two"," ").concat(i[0],"\n       ").concat(x===_["one die"]?"die":"dice"," winning against \n       ").concat(x===_["one die"]?"one":"two"," ").concat(i[1]," \n       ").concat(x===_["one die"]?"die":"dice"," is ").concat(G(U[i[0]],U[i[1]],x))}),Object(f.jsx)(z.a,{templateColumns:"repeat(".concat(Math.pow(6,x),", 1fr)"),templateRows:"repeat(".concat(Math.pow(6,x),", 1fr)"),gap:x===_["one die"]?"5px":"1px",children:j.map((function(e){return Object(f.jsx)(f.Fragment,{children:e.map((function(e){return Object(f.jsx)(l.a,{m:"0",p:"0",visibility:S||i[0]===i[1]?"hidden":"visible",style:{height:x===_["one die"]?"30px":"5px",width:x===_["one die"]?"30px":"5px",backgroundColor:i[0]===i[1]?"white":1===e?i[0]:-1===e?i[1]:"white",opacity:"100%"}})}))})}))}),Object(f.jsx)(u.a,{width:"100%",mt:"20px",colorScheme:"blue",onClick:function(){return alert(JSON.stringify(C))},children:C.map((function(e,t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(q.a,{isTruncated:!(0===t||t===C.length-1),children:e}),!(t===C.length-1)&&Object(f.jsx)(M.a,{})]})}))})]})})},V=function(e,t,n,a){var c=Y(a),i=[],r=[];if(a===_["one die"]){var s,o=Object(R.a)(e);try{for(o.s();!(s=o.n()).done;){var l=s.value;i.push([l])}}catch(B){o.e(B)}finally{o.f()}var d,u=Object(R.a)(t);try{for(u.s();!(d=u.n()).done;){var b=d.value;r.push([b])}}catch(B){u.e(B)}finally{u.f()}}if(a===_["two dice"]){var j,h=Object(R.a)(e);try{for(h.s();!(j=h.n()).done;){var m,O=j.value,f=Object(R.a)(e);try{for(f.s();!(m=f.n()).done;){var p=m.value;i.push([O,p])}}catch(B){f.e(B)}finally{f.f()}}}catch(B){h.e(B)}finally{h.f()}var x,g=Object(R.a)(t);try{for(g.s();!(x=g.n()).done;){var v,y=x.value,S=Object(R.a)(t);try{for(S.s();!(v=S.n()).done;){var w=v.value;r.push([y,w])}}catch(B){S.e(B)}finally{S.f()}}}catch(B){g.e(B)}finally{g.f()}}for(var C in i)for(var k in r)i[C].reduce((function(e,t){return e+t}),0)>r[k].reduce((function(e,t){return e+t}),0)&&(c[C][k]=1),i[C].reduce((function(e,t){return e+t}),0)<r[k].reduce((function(e,t){return e+t}),0)&&(c[C][k]=-1);n(c)},G=function(e,t,n){var a=0,c=0,i=[],r=[];if(n===_["one die"]){var s,o=Object(R.a)(e);try{for(o.s();!(s=o.n()).done;){var l=s.value;i.push([l])}}catch(L){o.e(L)}finally{o.f()}var d,u=Object(R.a)(t);try{for(u.s();!(d=u.n()).done;){var b=d.value;r.push([b])}}catch(L){u.e(L)}finally{u.f()}}if(n===_["two dice"]){var j,h=Object(R.a)(e);try{for(h.s();!(j=h.n()).done;){var m,O=j.value,f=Object(R.a)(e);try{for(f.s();!(m=f.n()).done;){var p=m.value;i.push([O,p])}}catch(L){f.e(L)}finally{f.f()}}}catch(L){h.e(L)}finally{h.f()}var x,g=Object(R.a)(t);try{for(g.s();!(x=g.n()).done;){var v,y=x.value,S=Object(R.a)(t);try{for(S.s();!(v=S.n()).done;){var w=v.value;r.push([y,w])}}catch(L){S.e(L)}finally{S.f()}}}catch(L){g.e(L)}finally{g.f()}}for(var C=0,k=i;C<k.length;C++){var B,I=k[C],F=Object(R.a)(r);try{for(F.s();!(B=F.n()).done;){var N=B.value;I.reduce((function(e,t){return e+t}),0)>N.reduce((function(e,t){return e+t}),0)&&a++,I.reduce((function(e,t){return e+t}),0)<N.reduce((function(e,t){return e+t}),0)&&c++}}catch(L){F.e(L)}finally{F.f()}}return"".concat(a+c===0?0:Math.round(1e4*a/(a+c))/100,"%")},$=function(e){var t=e.onClick,n=e.text,a=e.page,c=e.visibility;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.a,{ml:"90%",mt:"10px",children:Object(f.jsx)(u.a,{visibility:c,colorScheme:"blue",size:"xs",onClick:function(){"Log out"===n&&localStorage.setItem("email",""),t(a)},children:n})})})},W=function(e){var t=e.whichPage,n=Object(c.useState)(t),i=Object(o.a)(n,2),r=i[0],s=i[1],d=Object(f.jsx)(f.Fragment,{children:" "}),u=Object(f.jsx)($,{onClick:s,visibility:"visible",text:"Back",page:a.FirstPage});return r===a.FirstPage?(u=Object(f.jsx)($,{onClick:s,visibility:"hidden",text:"Back",page:a.FirstPage}),d=Object(f.jsx)(v,{title:"To-Do List",onChange:s})):r===a.SignUp?d=Object(f.jsx)(k,{changePage:s}):r===a.SignIn?d=Object(f.jsx)(B,{changePage:s}):r===a.DashBoard?(u=Object(f.jsx)($,{onClick:s,visibility:"visible",text:"Log out",page:a.FirstPage}),d=Object(f.jsx)(P,{title:"Dashboard",changePage:s})):r===a.List?(u=Object(f.jsx)(f.Fragment,{children:" "}),d=Object(f.jsx)(E,{title:"List",changePage:s})):r===a.Dice&&(u=Object(f.jsx)($,{onClick:s,visibility:"visible",text:"back",page:a.DashBoard}),d=Object(f.jsx)(J,{title:"Non-Transitive Dice"})),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(l.a,{centerContent:!0,children:[u,d]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},Z=n(293),H=n(291),K=Object(H.a)({styles:{global:{body:{bg:"black",opacity:.9,color:"white"}}},components:{Container:{baseStyle:{fontWeight:"bold"}},Input:{}}}),Q=a.FirstPage;localStorage.getItem("email")?""!==localStorage.getItem("email")&&(Q=a.DashBoard):localStorage.setItem("email",""),s.a.render(Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(Z.a,{theme:K,children:Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(W,{whichPage:Q})})})}),document.getElementById("root")),X()}},[[270,1,2]]]);
//# sourceMappingURL=main.494d04fa.chunk.js.map