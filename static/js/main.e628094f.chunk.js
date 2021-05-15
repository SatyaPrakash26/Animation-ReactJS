(this.webpackJsonpanimations=this.webpackJsonpanimations||[]).push([[0],{29:function(e,i,t){},36:function(e,i,t){"use strict";t.r(i);var n=t(0),a=t.n(n),s=t(21),r=t.n(s),c=(t(29),t(23)),o=t(13),d=t(24),p=t(9),l=t(2),j=t(38),h=t(1),b=function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)("svg",{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:[Object(h.jsx)("path",{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),Object(h.jsx)("path",{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"})]})}),Object(h.jsx)(j.a.div,{className:"title",initial:{y:-250},animate:{y:-10},transition:{delay:.2,type:"spring",stiffness:120},children:Object(h.jsx)("h1",{children:"Pizza Joint"})})]})},x={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:5}}},v=function(){return Object(h.jsxs)(j.a.div,{className:"home container",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1.5},children:[Object(h.jsx)("h2",{children:"Welcome to Pizza Joint"}),Object(h.jsx)(p.b,{to:"/base",children:Object(h.jsx)(j.a.button,{variants:x,whileHover:"hover",children:"Create Your Pizza"})})]})},u={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}}},O={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},g={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}},f=function(e){var i=e.addBase,t=e.pizza;return Object(h.jsxs)(j.a.div,{className:"base container",variants:u,initial:"hidden",animate:"visible",children:[Object(h.jsx)("h3",{children:"Step 1: Choose Your Base"}),Object(h.jsx)("ul",{children:["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=t.base===e?"active":"";return Object(h.jsx)(j.a.li,{onClick:function(){return i(e)},whileHover:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300},children:Object(h.jsx)("span",{className:n,children:e})},e)}))}),t.base&&Object(h.jsx)(j.a.div,{className:"next",variants:O,children:Object(h.jsx)(p.b,{to:"/toppings",children:Object(h.jsx)(j.a.button,{variants:g,whileHover:"hover",children:"Next"})})})]})},y={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}}},m={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}},w=function(e){var i=e.addTopping,t=e.pizza;return Object(h.jsxs)(j.a.div,{className:"toppings container",variants:y,initial:"hidden",animate:"visible",children:[Object(h.jsx)("h3",{children:"Step 2: Choose Toppings"}),Object(h.jsx)("ul",{children:["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=t.toppings.includes(e)?"active":"";return Object(h.jsx)(j.a.li,{onClick:function(){return i(e)},whileHover:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300},children:Object(h.jsx)("span",{className:n,children:e})},e)}))}),Object(h.jsx)(p.b,{to:"/order",children:Object(h.jsx)(j.a.button,{variants:m,whileHover:"hover",children:"Order"})})]})},z={hidden:{opacity:0,x:"100vw",transition:{staggerChildren:.5}},visible:{opacity:1,x:0,transition:{type:"spring",mass:.4,damping:8,staggerChildren:.4,when:"beforeChildren"}}},C={hidden:{opacity:0},visible:{opacity:1}},N=function(e){var i=e.pizza;return Object(h.jsxs)(j.a.div,{className:"container order",variants:z,initial:"hidden",animate:"visible",children:[Object(h.jsx)("h2",{children:"Thank you for your order :)"}),Object(h.jsxs)(j.a.p,{variants:C,children:["You ordered a ",i.base," pizza with:"]}),Object(h.jsx)(j.a.div,{variants:C,children:i.toppings.map((function(e){return Object(h.jsx)("div",{children:e},e)}))})]})};var S=function(){var e=Object(n.useState)({base:"",toppings:[]}),i=Object(d.a)(e,2),t=i[0],a=i[1];return Object(h.jsxs)(p.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/base",children:Object(h.jsx)(f,{addBase:function(e){a(Object(o.a)(Object(o.a)({},t),{},{base:e}))},pizza:t})}),Object(h.jsx)(l.a,{path:"/toppings",children:Object(h.jsx)(w,{addTopping:function(e){var i;i=t.toppings.includes(e)?t.toppings.filter((function(i){return i!==e})):[].concat(Object(c.a)(t.toppings),[e]),a(Object(o.a)(Object(o.a)({},t),{},{toppings:i}))},pizza:t})}),Object(h.jsx)(l.a,{path:"/order",children:Object(h.jsx)(N,{pizza:t})}),Object(h.jsx)(l.a,{path:"/",children:Object(h.jsx)(v,{})})]})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(i){var t=i.getCLS,n=i.getFID,a=i.getFCP,s=i.getLCP,r=i.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.e628094f.chunk.js.map