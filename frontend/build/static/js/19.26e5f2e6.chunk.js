(this["webpackJsonpplant-shop"]=this["webpackJsonpplant-shop"]||[]).push([[19],{196:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(0),i=n(85),c=n(188),s=n(108),j=n(113),l=n(104),b=n(204),o=n(189),d=n(200),u=n(48),p=n(98),m=Object(p.a)((function(e){var t;return{appBar:{position:"relative"},layout:Object(u.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(u.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(u.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),O=n(52),x=n(19),h=n(82),g=n(110),f=n(193),y=n(1),v=function(e){var t=e.name,n=e.label,a=e.required,r=Object(h.d)().control;return Object(y.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(y.jsx)(h.a,{as:f.a,control:r,fullWidth:!0,name:t,require:a,label:n,render:function(e){var a=e.field;return Object(y.jsx)(f.a,Object(O.a)(Object(O.a)({},a),{},{fullWidth:!0,label:n,required:!0,name:t}))}})})},k=function(e){var t=e.next,n=e.setShippingData,a=Object(h.c)();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(i.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(y.jsx)(h.b,Object(O.a)(Object(O.a)({},a),{},{children:Object(y.jsxs)("form",{onSubmit:a.handleSubmit((function(e){return function(e){n(e),t(e)}(e)})),children:[Object(y.jsxs)(g.a,{container:!0,spacing:3,children:[Object(y.jsx)(v,{required:!0,name:"firstName",label:"First name",autoComplete:"given-name"}),Object(y.jsx)(v,{required:!0,name:"lastName",label:"Last name"}),Object(y.jsx)(v,{required:!0,name:"address",label:"Address"}),Object(y.jsx)(v,{required:!0,name:"email",label:"Email"}),Object(y.jsx)(v,{required:!0,name:"city",label:"City"}),Object(y.jsx)(v,{required:!0,name:"ZIP",label:"ZIP / Postal code"})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)(s.a,{component:x.b,to:"/cart",variant:"outlined",children:"Back To Cart"}),Object(y.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},C=n(79),S=n.n(C),w=n(80),q=n(143),T=n(144),B=n(185),N=n(186),P=n(187),E=function(e){var t=e.cartItems,n=e.subtotal;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(i.a,{variant:"h6",gutterBottom:!0,children:"Order Summery"}),Object(y.jsxs)(B.a,{disablePadding:!0,children:[t.map((function(e){return Object(y.jsxs)(N.a,{style:{padding:"10px 0"},children:[Object(y.jsx)(P.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(y.jsx)(i.a,{variant:"body2",children:e.price})]},e.name)})),Object(y.jsxs)(N.a,{style:{padding:"10px 0"},children:[Object(y.jsx)(P.a,{primary:"Total"}),Object(y.jsxs)(i.a,{variant:"subtitle1",style:{fontWeight:700},children:["$",n]})]})]})]})},F=n(18),I=Object(T.a)("pk_test_51IyHFXJFZWIdJdeu8kMlxSVR5C1emEwAUTQlnWzYHrTyamjmAs8HtXZ6BYq32JCOVwkiftjpqiTb43Rhkn8KwbhC00EZQ7Qgw8"),J=function(e){var t=e.backStep,n=e.nextStep,j=Object(r.useContext)(F.a),l=Object(a.a)(j,2),b=l[0],o=l[1],d=Object(r.useContext)(F.b),u=Object(a.a)(d,1)[0],p=function(){var e=Object(w.a)(S.a.mark((function e(t,a,r){var i,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r&&a){e.next=3;break}return e.abrupt("return");case 3:return i=a.getElement(q.CardElement),e.next=6,r.createPaymentMethod({type:"card",card:i});case 6:c=e.sent,s=c.error,c.paymentMethod,s?console.log(s):(n(),o({}));case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E,{cartItems:b,subtotal:u}),Object(y.jsx)(c.a,{}),Object(y.jsx)(i.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(y.jsx)(q.Elements,{stripe:I,children:Object(y.jsx)(q.ElementsConsumer,{children:function(e){var n=e.elements,a=e.stripe;return Object(y.jsxs)("form",{onSubmit:function(e){return p(e,n,a)},children:[Object(y.jsx)(q.CardElement,{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)(s.a,{onClick:t,variant:"outlined",children:"Back"}),Object(y.jsxs)(s.a,{type:"submit",variant:"contained",disabled:!a,color:"primary",children:["Pay $",u]})]})]})}})})]})},W=["Shipping address","Payment details"];t.default=function(){var e=m(),t=Object(r.useState)(0),n=Object(a.a)(t,2),u=n[0],p=n[1],O=Object(r.useState)({}),x=Object(a.a)(O,2),h=x[0],g=x[1];console.log(h);var f=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)(i.a,{variant:"h6",children:["Thank you for your purchase! ",h.firstName," ",h.lastName]}),Object(y.jsx)(c.a,{className:e.divider}),Object(y.jsxs)(i.a,{variant:"subtitle2",children:["Order ref: ",h.lastName,"1Ba34"]})]}),Object(y.jsx)("br",{}),Object(y.jsx)(s.a,{href:"/",variant:"outlined",type:"button",children:"Back To Home Page"})]})},v=function(){return 0===u?Object(y.jsx)(k,{next:C,setShippingData:g}):Object(y.jsx)(J,{shippingData:h,backStep:w,nextStep:S})},C=function(e){g(e),S()},S=function(){return p((function(e){return e+1}))},w=function(){return p((function(e){return e-1}))};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(j.a,{}),Object(y.jsx)("main",{className:e.layout,children:Object(y.jsxs)(l.a,{className:e.paper,children:[Object(y.jsx)(i.a,{variant:"h4",align:"center",children:"Checkout"}),Object(y.jsx)(b.a,{activeStep:u,className:e.stepper,children:W.map((function(e){return Object(y.jsx)(o.a,{children:Object(y.jsx)(d.a,{children:e})},e)}))}),u===W.length?Object(y.jsx)(f,{}):Object(y.jsx)(v,{})]})})]})}}}]);
//# sourceMappingURL=19.26e5f2e6.chunk.js.map