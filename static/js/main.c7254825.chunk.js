(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(13),a(1));a(3);function i(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand text-dark",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})))))}function s(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mb-3 my-3"},r.a.createElement("h1",{className:"text-center"},e.heading),r.a.createElement("textarea",{className:"form-control",onChange:function(e){console.log("Handle on change"),c(e.target.value)},id:"myBox",rows:"5"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-pink m-3",onClick:function(){c(l.toUpperCase())}},"Convert to uppercase"),r.a.createElement("button",{className:"btn btn-pink m-3",onClick:function(){c(l.toLowerCase())}},"Convert to lowercase"),r.a.createElement("button",{className:"btn btn-pink m-3",onClick:function(){c(""),document.getElementById("myBox").value=""}},"Clear Text"),r.a.createElement("p",{className:""},"Word Count : ",l.split(" ").filter(function(e){return""!==e}).length," & Characters : ",l.length),r.a.createElement("p",null,"Time in seconds : ",(.008*l.split(" ").length).toFixed(3))),r.a.createElement("div",{className:"form-control preview"},l)))}i.defaultProps={title:"Here"};var m=function(){var e=Object(n.useState)("pink"),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{title:"TextUtils",mode:a,toggleBtn:function(){l("pink"===a?"dark":"pink")}}),r.a.createElement(s,{heading:"Enter the text below to analyze"}))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),u()},3:function(e,t,a){},5:function(e,t,a){e.exports=a(16)}},[[5,3,2]]]);
//# sourceMappingURL=main.c7254825.chunk.js.map