(this["webpackJsonptodo_list-app"]=this["webpackJsonptodo_list-app"]||[]).push([[0],{141:function(e,t,n){},165:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n.n(c),r=n(39),s=n.n(r),o=(n(165),n(4));!function(e){e.FirstPage="First Page",e.SignUp="Sign Up",e.SignIn="Sign In",e.DashBoard="Dashboard",e.List="List",e.Dice="Dice"}(a||(a={}));var l=n(284),d=n(295),u=n(294),b=n(31),j=n(23),h=n(280),m=n(281),O=n(292),p=n(2),f=function(e){var t=e.title;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(h.a,{color:"#3182ce",fontSize:"40px",id:t,mb:"20px",children:t})})},x=function(e){var t=Object(j.c)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],i=e.type,r=e.placeholder,s=e.handleBlur,l=e.func;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,Object(b.a)(Object(b.a)({className:"text-input"},a),{},{type:i,placeholder:r,onBlur:function(e){s(e),void 0!==l&&l(e.target.value)}})),c.touched&&c.error?Object(p.jsx)("div",{className:"error",children:c.error}):null]})},g=function(e){var t=Object(j.c)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],i=e.label,r=e.handleBlur;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,Object(b.a)(Object(b.a)({defaultChecked:!1,type:"checkbox"},a),{},{className:"checkbox",onBlur:function(e){r(e)},children:i})),c.touched&&c.error?Object(p.jsx)("div",{className:"error",children:c.error}):null]})},v=function(e){var t=e.title,n=e.onChange,c=[a.SignUp,a.SignIn];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{title:t}),Object(p.jsx)(l.a,{centerContent:!0,children:Object(p.jsx)(d.a,{spacing:8,children:c.map((function(e,t){return Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){return n(e)},children:e},t)}))})})]})},y=n(10),w=n(19),S=(n(141),n(110));n(271);S.a.initializeApp({apiKey:"AIzaSyBaUv1_rwA3oi6TG1dmbOiGis4yRjnLLc8",authDomain:"bizarro-todo-list.firebaseapp.com",projectId:"bizarro-todo-list",storageBucket:"bizarro-todo-list.appspot.com",messagingSenderId:"347684058314",appId:"1:347684058314:web:401ec1d43df553b2753033",measurementId:"G-JR40FJDVQT"});var C=S.a,k=function(e){var t=e.changePage,n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],s=i[1],d=C.firestore().collection("users").doc("users_document");console.log(d);return Object(c.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),s(t[0].email)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",passwordConfirm:"",acceptedTerms:!1},validationSchema:w.b({firstName:w.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),lastName:w.d().min(3,"Must be at least 3 characters long.").max(15,"Must be 15 characters or less.").required("Required"),email:w.d().email("Invalid email address.").required("Please Enter a valid email address.").notOneOf(r,"This email is already in use."),password:w.d().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required("Please Enter your password."),passwordConfirm:w.d().when("password",(function(e,t){return e?t.required("Please confirm your password.").oneOf([w.c("password")],"You must use the same password you inserted before."):t})),acceptedTerms:w.a().oneOf([!0],"You must accept the terms and conditions.").required("Required")}),onSubmit:function(e,n){var c=n.setSubmitting,i=n.resetForm;setTimeout((function(){var n={fName:e.firstName,lName:e.lastName,pssw:e.password,lists:{},list:""};localStorage.setItem("email",e.email),d.set({email:[e.email].concat(Object(y.a)(r))}).then((function(){console.log("DONE EMAIL"),d.collection(e.email).doc("data").set(n).then((function(){console.log("DONE DATA")})),t(a.DashBoard)})).catch((function(e){return console.log("ERROR ".concat(e))})),console.log(e),console.log(typeof e),i(),c(!1)}),1500)},children:function(e){return Object(p.jsx)(j.a,{children:Object(p.jsxs)(l.a,{centerContent:!0,children:[Object(p.jsx)(f,{title:"Sign Up"}),Object(p.jsx)(x,{label:"First Name",name:"firstName",type:"text",placeholder:"First Name",handleBlur:e.handleBlur}),Object(p.jsx)(x,{label:"Last Name",name:"lastName",type:"text",placeholder:"Last Name",handleBlur:e.handleBlur}),Object(p.jsx)(x,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",handleBlur:e.handleBlur}),Object(p.jsx)(x,{label:"Password",name:"password",type:"password",placeholder:"password",handleBlur:e.handleBlur}),Object(p.jsx)(x,{label:"passwordConfirm",name:"passwordConfirm",type:"password",placeholder:"password confirmation",handleBlur:e.handleBlur}),Object(p.jsx)(g,{name:"acceptedTerms",label:"I accept the terms and conditions.",handleBlur:e.handleBlur}),Object(p.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Create Account"]})]})})}})})},I=function(e){var t=e.changePage,n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],s=i[1],d=C.firestore().collection("users").doc("users_document");Object(c.useEffect)((function(){d.onSnapshot((function(e){var t=[];t.push(e.data()?e.data():""),s(t[0].email)}))}),[]);var b=Object(c.useState)(""),h=Object(o.a)(b,2),m=h[0],O=h[1],g=Object(c.useState)(!1),v=Object(o.a)(g,2),y=v[0],S=v[1],k=function(e){C.firestore().collection("users").doc("users_document").collection(e).doc("data").get().then((function(e){e.exists?(S(!0),O(e.data().pssw)):S(!1)}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.b,{initialValues:{email:"",password:""},validationSchema:w.b({email:w.d().email("Invalid email address.").required("Please your email address.").oneOf(r,"Sorry, this email is not linked to any account."),password:w.d().when("email",(function(e,t){return e&&y?t.required("Please enter your password.").oneOf([m],"You must use the same password you inserted before."):t}))}),onSubmit:function(e,n){var c=n.setSubmitting,i=n.resetForm;setTimeout((function(){localStorage.setItem("email",e.email),t(a.DashBoard),i(),c(!1)}),1500)},children:function(e){return Object(p.jsx)(j.a,{children:Object(p.jsxs)(l.a,{centerContent:!0,children:[Object(p.jsx)(f,{title:"Sign In"}),Object(p.jsx)(x,{label:"E-mail",name:"email",type:"text",placeholder:"example@email.com",func:k,handleBlur:e.handleBlur}),Object(p.jsx)(x,{label:"Password",name:"password",type:"password",placeholder:"********",handleBlur:e.handleBlur}),Object(p.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"Sign In"]})]})})}})})},B=n(296),F=n(285),N={fName:"",lName:"",pssw:"",lists:{},list:""},L=function(e){var t=e.ref,n=e.setState,a=e.newState;n(a),t.set(a).then((function(){}))},P=function(e){var t=e.title,n=e.changePage,i=localStorage.getItem("email"),r=C.firestore().collection("users").doc("users_document").collection(i).doc("data"),s=Object(c.useState)(N),b=Object(o.a)(s,2),m=b[0],O=b[1],g=Object(c.useState)(null),v=Object(o.a)(g,2),S=(v[0],v[1],Object(c.useState)([])),k=Object(o.a)(S,2),I=k[0],P=k[1],D=Object(c.useState)(!1),T=Object(o.a)(D,2),E=T[0],R=T[1];return Object(c.useEffect)((function(){r.onSnapshot((function(e){O(e.data()?e.data():N)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{title:t}),Object(p.jsx)(h.a,{id:"box",mb:"10px",children:Object(p.jsx)(j.b,{initialValues:{newList:""},validationSchema:w.b({newList:w.d().required("You must give it a name.").notOneOf(Object.keys(m.lists),"This list already exists")}),onSubmit:function(e,t){var c=t.setSubmitting,i=t.resetForm;setTimeout((function(){var t=m,s=e.newList.charAt(0).toUpperCase()+e.newList.slice(1);t.list=s,t.lists[s]=[],L({ref:r,setState:O,newState:t}),setTimeout((function(){return n(a.List)}),500),i(),c(!1)}),500)},children:function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(l.a,{centerContent:!0,children:Object(p.jsxs)(d.b,{spacing:3,children:[Object(p.jsx)(B.a,{in:E,children:Object(p.jsxs)(d.a,{spacing:3,children:[Object(p.jsx)(d.b,{spacing:1,children:Object(p.jsx)(x,{label:"",name:"newList",type:"text",placeholder:"new list",handleBlur:e.handleBlur})}),Object(p.jsxs)(d.b,{spacing:1,children:[Object(p.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"add"]}),Object(p.jsx)(h.a,{mb:e.errors.newList?"20px":"0px",height:e.errors.newList?"0px":"2px"})]})]})}),Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){e.resetForm(),R(!E),setTimeout((function(){document.getElementsByName("newList")[0].focus()}),100)},children:E?"Cancel":"New List"})]})})})}})}),Object(p.jsx)(h.a,{id:"box",m:"20px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},onChange:function(){},children:Object.keys(m.lists).sort().map((function(e,t){return Object(p.jsx)("div",{style:{color:"#3182ce",fontSize:"20px",margin:"10px"},children:Object(p.jsxs)(d.a,{spacing:5,children:[Object(p.jsx)(F.a,{color:"gray.300",onClick:function(){var t=JSON.parse(JSON.stringify(m));P((function(e){return e!==[]?[].concat(Object(y.a)(e),[t]):[t]})),console.log([I,t]);var n=m;delete n.lists[e],L({ref:r,setState:O,newState:n})}}),Object(p.jsx)(h.a,{onClick:function(){var t=m;t.list=e,L({ref:r,setState:O,newState:t}),setTimeout((function(){return n(a.List)}),50)},children:"".concat(e)})]})},t)}))}),Object(p.jsxs)(d.a,{spacing:3,children:[I.length>0&&Object(p.jsx)(u.a,{m:"10px",colorScheme:"blue",onClick:function(){var e=I[I.length-1];L({ref:r,setState:O,newState:e}),P(I.slice(0,I.length-1)),console.log(e)},children:"Undo"}),Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){return n(a.Dice)},children:"Non-Transitive Dice"})]})]})},D=n(286),T=n(93),E=function(e){e.title;var t=e.changePage,n=localStorage.getItem("email"),i=C.firestore().collection("users").doc("users_document").collection(n).doc("data"),r=Object(c.useState)(N),s=Object(o.a)(r,2),m=s[0],g=s[1],v=Object(c.useState)(N),S=Object(o.a)(v,2),k=S[0],I=S[1],P=Object(c.useState)("0"),E=Object(o.a)(P,2),R=E[0],z=E[1],q=Object(c.useState)(!0),A=Object(o.a)(q,2),U=A[0],M=A[1],_=Object(c.useState)(!1),J=Object(o.a)(_,2),Y=J[0],V=J[1],G=function(){return V(!Y)},$=function(e){var t=document.getElementById("newItem");if(t&&window.innerWidth>500){var n=[t.getBoundingClientRect().x,t.getBoundingClientRect().y],a=n[0],c=n[1],i=(e.clientX-a-100)*(e.clientX-a-100)+(e.clientY-c-10)*(e.clientY-c-10);M(i<35e3)}else M(!0)};return Object(c.useEffect)((function(){return i.onSnapshot((function(e){g(e.data()?e.data():N)})),i.get().then((function(e){e.exists&&I(e.data())})),window.addEventListener("mousemove",$),function(){window.removeEventListener("mousemove",$)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.b,{initialValues:{newItem:""},validationSchema:w.b({newItem:w.d().required("You must give it a name.").notOneOf(Object.keys(m.lists),"This list already exists")}),onSubmit:function(e,t){var n=t.setSubmitting,a=t.resetForm;setTimeout((function(){if("1"===R){var t=m;t.lists[t.list]=Object(y.a)(t.lists[t.list].concat(["".concat(e.newItem,"!***!false!***!")])),L({ref:i,setState:g,newState:t})}if("2"===R){var c=m;c.list=e.newItem,c.lists[e.newItem]=c.lists[k.list],delete c.lists[k.list],L({ref:i,setState:g,newState:c});var r=k;r.list=e.newItem,I(r)}z("0"),a(),n(!1),G()}),200)},children:function(e){return Object(p.jsxs)(j.a,{children:[Object(p.jsx)(B.a,{in:!Y,children:Object(p.jsx)(h.a,{ml:"50%",mt:"10px",children:Object(p.jsxs)(d.a,{spacing:3,children:[Object(p.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){z("2"),e.resetForm(),G(),setTimeout((function(){document.getElementsByName("newItem")[0].focus()}),100)},children:"Rename"}),Object(p.jsx)(u.a,{colorScheme:"blue",size:"xs",onClick:function(){var e=k;e.list="",L({ref:i,setState:g,newState:e}),t(a.DashBoard)},children:"Cancel"})]})})}),Object(p.jsxs)(l.a,{centerContent:!0,children:[Object(p.jsx)(f,{title:m.list}),Object(p.jsxs)(d.b,{spacing:3,children:[Object(p.jsx)(B.a,{in:Y,children:Object(p.jsxs)(d.a,{spacing:5,children:[Object(p.jsx)(d.b,{spacing:1,children:Object(p.jsx)(x,{label:"",name:"newItem",type:"text",placeholder:"new item",handleBlur:e.handleBlur})}),Object(p.jsxs)(d.b,{spacing:1,children:[Object(p.jsxs)(u.a,{type:"submit",colorScheme:"blue",className:"button",children:[" ",e.isSubmitting?"Loading...":"1"===R?"add":"rename"]}),Object(p.jsx)(h.a,{mb:e.errors.newItem?"20px":"0px",height:e.errors.newItem?"0px":"2px"})]})]})}),Object(p.jsxs)(d.a,{spacing:8,children:[Object(p.jsx)(u.a,{colorScheme:"blue",onClick:function(){z("1"),e.resetForm(),G(),setTimeout((function(){document.getElementsByName("newItem")[0].focus()}),100)},children:Y?"Cancel":"New Item"}),Object(p.jsx)(D.a,{in:U,id:"newItem",children:Object(p.jsx)(u.a,{id:"save",colorScheme:"blue",onClick:function(){t(a.DashBoard)},children:"Save"})})]})]})]})]})}}),Object(p.jsx)(h.a,{id:"box",m:"20px",p:"30px",style:{width:"80%",backgroundColor:"#dcecf7",borderRadius:"20px"},children:Object(p.jsx)(T.a,{onDragEnd:function(e){if(e.destination){var t=m,n=t.lists[t.list].splice(e.source.index,1),a=Object(o.a)(n,1)[0];t.lists[t.list].splice(e.destination.index,0,a),L({ref:i,setState:g,newState:t})}},children:Object(p.jsx)(T.c,{droppableId:"characters",children:function(e){return Object(p.jsxs)(h.a,Object(b.a)(Object(b.a)({},e.droppableProps),{},{ref:e.innerRef,children:[void 0!==m.lists[m.list]?m.lists[m.list].map((function(e,t){return Object(p.jsx)(T.b,{draggableId:""+t,index:t,children:function(n){return Object(p.jsx)(h.a,Object(b.a)(Object(b.a)(Object(b.a)({style:{fontSize:"20px",margin:"10px"},ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(p.jsxs)(d.a,{spacing:5,children:[Object(p.jsx)(F.a,{color:"gray.400",onClick:function(){var e=Object(y.a)(m.lists[m.list].slice(0,t)),n=Object(y.a)(m.lists[m.list].slice(t+1,m.lists[m.list].length)),a=m;a.lists[a.list]=e.concat(n),L({ref:i,setState:g,newState:a})}}),Object(p.jsx)(O.a,{m:"5px",isChecked:"true"===e.split("!***!")[1],colorScheme:"blue",defaultIsChecked:"true"===e[1],style:{borderColor:"#3182ce",color:"#3182ce"},onChange:function(){var e=Object(y.a)(m.lists[m.list]),n=e[t].split("!***!")[0],a=e[t].split("!***!")[2]?e[t].split("!***!")[2]:"";e[t]="true"===e[t].split("!***!")[1]?"".concat(n,"!***!false!***!").concat(a):"".concat(n,"!***!true!***!").concat(a);var c=m;c.lists[c.list]=e,L({ref:i,setState:g,newState:c})},children:"".concat(e.split("!***!")[0])}),Object(p.jsx)("a",{href:e.split("!***!")[2]?e.split("!***!")[2]:"",children:e.split("!***!")[2]?"(link)":null})]})}))}},t)})):null,e.placeholder]}))}})})}),Object(p.jsx)(l.a,{centerContent:!0,children:Object(p.jsx)(d.a,{spacing:8})})]})},R=n(14),z=n(287),q=n(288),A=n(289),U=n(290),M={red:[4,4,4,4,4,9],blue:[2,2,2,7,7,7],olive:[0,5,5,5,5,5],yellow:[3,3,3,3,8,8],magenta:[1,1,6,6,6,6]},_={"one die":1,"two dice":2},J=function(e){for(var t=new Array(Math.pow(6,e)),n=0;n<t.length;n++){t[n]=[];for(var a=0;a<t.length;a++)t[n].push(0)}return t},Y=function(e){var t=e.title,n=Object(c.useState)(["red","red"]),a=Object(o.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(J(_["one die"])),b=Object(o.a)(s,2),j=b[0],h=b[1],m=Object(c.useState)(_["one die"]),O=Object(o.a)(m,2),x=O[0],g=O[1],v=Object(c.useState)(!0),y=Object(o.a)(v,2),w=y[0],S=y[1],C=["F\xedsica","Mec\xe2nica","Din\xe2mica","For\xe7a","For\xe7a de Atrito"],k=function(){return S(!1)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.a,{centerContent:!0,children:[Object(p.jsx)(f,{title:t}),Object(p.jsx)(z.a,{templateRows:"repeat(2, 1fr)",gap:1,mb:"20px",children:i.map((function(e,t){return 1===t&&i[1]===i[0]||w?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)(z.a,{templateColumns:"repeat(2, 1fr)",gap:6,children:[Object(p.jsx)(q.a,{visibility:w?"hidden":"visible",style:{color:"white",backgroundColor:"black",opacity:"70%"},children:"".concat(e[0].toUpperCase()+e.slice(1)," die: ")}),Object(p.jsx)(q.a,{visibility:w?"hidden":"visible",style:{color:"white",backgroundColor:"black",opacity:"70%"},children:"[".concat(M[e],"]")})]},t)}))}),Object(p.jsxs)(d.a,{spacing:4,mb:"20px",children:[Object(p.jsx)(A.a,{style:{fontSize:"8px"},placeholder:"",onChange:function(e){k();var t=parseInt(e.target.value);g(t),V(M[i[0]],M[i[1]],h,t)},children:Object.keys(_).map((function(e){return Object(p.jsx)("option",{style:{color:"white",backgroundColor:"black"},value:""+_[e],children:e.toUpperCase()},e)}))}),Object(p.jsx)(A.a,{placeholder:"",style:{color:"yellow"===i[0]?"black":"white",backgroundColor:i[0]},onChange:function(e){k(),r((function(t){return[e.target.value,t[1]]})),V(M[e.target.value],M[i[1]],h,x)},children:Object.keys(M).map((function(e){return Object(p.jsx)("option",{style:{color:"white",backgroundColor:"black"},value:e,children:e.toUpperCase()},e)}))}),Object(p.jsx)(A.a,{placeholder:"",style:{color:"yellow"===i[1]?"black":"white",backgroundColor:i[1]},onChange:function(e){k(),r((function(t){return[t[0],e.target.value]})),V(M[i[0]],M[e.target.value],h,x)},children:Object.keys(M).map((function(e){return Object(p.jsx)("option",{style:{color:"white",backgroundColor:"black"},value:e,children:e.toUpperCase()},e)}))})]}),Object(p.jsx)(q.a,{style:{color:"white",opacity:"60%",textAlign:"center"},mt:"5px",mb:"15px",children:"The probability of ".concat(x===_["one die"]?"one":"two"," ").concat(i[0],"\n       ").concat(x===_["one die"]?"die":"dice"," winning against \n       ").concat(x===_["one die"]?"one":"two"," ").concat(i[1]," \n       ").concat(x===_["one die"]?"die":"dice"," is ").concat(G(M[i[0]],M[i[1]],x))}),Object(p.jsx)(z.a,{templateColumns:"repeat(".concat(Math.pow(6,x),", 1fr)"),templateRows:"repeat(".concat(Math.pow(6,x),", 1fr)"),gap:x===_["one die"]?"5px":"1px",children:j.map((function(e){return Object(p.jsx)(p.Fragment,{children:e.map((function(e){return Object(p.jsx)(l.a,{m:"0",p:"0",visibility:w||i[0]===i[1]?"hidden":"visible",style:{height:x===_["one die"]?"30px":"5px",width:x===_["one die"]?"30px":"5px",backgroundColor:i[0]===i[1]?"white":1===e?i[0]:-1===e?i[1]:"white",opacity:"100%"}})}))})}))}),Object(p.jsx)(u.a,{width:"100%",mt:"20px",colorScheme:"blue",onClick:function(){return alert(JSON.stringify(C))},children:C.map((function(e,t){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(q.a,{isTruncated:!(0===t||t===C.length-1),children:e}),!(t===C.length-1)&&Object(p.jsx)(U.a,{})]})}))})]})})},V=function(e,t,n,a){var c=J(a),i=[],r=[];if(a===_["one die"]){var s,o=Object(R.a)(e);try{for(o.s();!(s=o.n()).done;){var l=s.value;i.push([l])}}catch(I){o.e(I)}finally{o.f()}var d,u=Object(R.a)(t);try{for(u.s();!(d=u.n()).done;){var b=d.value;r.push([b])}}catch(I){u.e(I)}finally{u.f()}}if(a===_["two dice"]){var j,h=Object(R.a)(e);try{for(h.s();!(j=h.n()).done;){var m,O=j.value,p=Object(R.a)(e);try{for(p.s();!(m=p.n()).done;){var f=m.value;i.push([O,f])}}catch(I){p.e(I)}finally{p.f()}}}catch(I){h.e(I)}finally{h.f()}var x,g=Object(R.a)(t);try{for(g.s();!(x=g.n()).done;){var v,y=x.value,w=Object(R.a)(t);try{for(w.s();!(v=w.n()).done;){var S=v.value;r.push([y,S])}}catch(I){w.e(I)}finally{w.f()}}}catch(I){g.e(I)}finally{g.f()}}for(var C in i)for(var k in r)i[C].reduce((function(e,t){return e+t}),0)>r[k].reduce((function(e,t){return e+t}),0)&&(c[C][k]=1),i[C].reduce((function(e,t){return e+t}),0)<r[k].reduce((function(e,t){return e+t}),0)&&(c[C][k]=-1);n(c)},G=function(e,t,n){var a=0,c=0,i=[],r=[];if(n===_["one die"]){var s,o=Object(R.a)(e);try{for(o.s();!(s=o.n()).done;){var l=s.value;i.push([l])}}catch(L){o.e(L)}finally{o.f()}var d,u=Object(R.a)(t);try{for(u.s();!(d=u.n()).done;){var b=d.value;r.push([b])}}catch(L){u.e(L)}finally{u.f()}}if(n===_["two dice"]){var j,h=Object(R.a)(e);try{for(h.s();!(j=h.n()).done;){var m,O=j.value,p=Object(R.a)(e);try{for(p.s();!(m=p.n()).done;){var f=m.value;i.push([O,f])}}catch(L){p.e(L)}finally{p.f()}}}catch(L){h.e(L)}finally{h.f()}var x,g=Object(R.a)(t);try{for(g.s();!(x=g.n()).done;){var v,y=x.value,w=Object(R.a)(t);try{for(w.s();!(v=w.n()).done;){var S=v.value;r.push([y,S])}}catch(L){w.e(L)}finally{w.f()}}}catch(L){g.e(L)}finally{g.f()}}for(var C=0,k=i;C<k.length;C++){var I,B=k[C],F=Object(R.a)(r);try{for(F.s();!(I=F.n()).done;){var N=I.value;B.reduce((function(e,t){return e+t}),0)>N.reduce((function(e,t){return e+t}),0)&&a++,B.reduce((function(e,t){return e+t}),0)<N.reduce((function(e,t){return e+t}),0)&&c++}}catch(L){F.e(L)}finally{F.f()}}return"".concat(a+c===0?0:Math.round(1e4*a/(a+c))/100,"%")},$=function(e){var t=e.onClick,n=e.text,a=e.page,c=e.visibility;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(h.a,{ml:"90%",mt:"10px",children:Object(p.jsx)(u.a,{visibility:c,colorScheme:"blue",size:"xs",onClick:function(){"Log out"===n&&localStorage.setItem("email",""),t(a)},children:n})})})},W=function(e){var t=e.whichPage,n=Object(c.useState)(t),i=Object(o.a)(n,2),r=i[0],s=i[1],d=Object(p.jsx)(p.Fragment,{children:" "}),u=Object(p.jsx)($,{onClick:s,visibility:"visible",text:"Back",page:a.FirstPage});return r===a.FirstPage?(u=Object(p.jsx)($,{onClick:s,visibility:"hidden",text:"Back",page:a.FirstPage}),d=Object(p.jsx)(v,{title:"To-Do List",onChange:s})):r===a.SignUp?d=Object(p.jsx)(k,{changePage:s}):r===a.SignIn?d=Object(p.jsx)(I,{changePage:s}):r===a.DashBoard?(u=Object(p.jsx)($,{onClick:s,visibility:"visible",text:"Log out",page:a.FirstPage}),d=Object(p.jsx)(P,{title:"Dashboard",changePage:s})):r===a.List?(u=Object(p.jsx)(p.Fragment,{children:" "}),d=Object(p.jsx)(E,{title:"List",changePage:s})):r===a.Dice&&(u=Object(p.jsx)($,{onClick:s,visibility:"visible",text:"back",page:a.DashBoard}),d=Object(p.jsx)(Y,{title:"Non-Transitive Dice"})),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.a,{centerContent:!0,children:[u,d]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},Z=n(293),H=n(291),K=Object(H.a)({styles:{global:{body:{bg:"black",opacity:.9,color:"white"}}},components:{Container:{baseStyle:{fontWeight:"bold"}},Input:{}}}),Q=a.FirstPage;localStorage.getItem("email")?""!==localStorage.getItem("email")&&(Q=a.DashBoard):localStorage.setItem("email",""),s.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(Z.a,{theme:K,children:Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(W,{whichPage:Q})})})}),document.getElementById("root")),X()}},[[270,1,2]]]);
//# sourceMappingURL=main.e1d56213.chunk.js.map