(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(5),r=c(6),l=c(8),o=c(7),i=c(1),d=c.n(i),b=(c(13),c(14),c(3)),u=c.n(b),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={select:""},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.select;return Object(j.jsxs)("main",{className:"section container",children:[""===t?Object(j.jsx)("h1",{className:"title",children:"No goods selected"}):Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t," ","is selected",Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.setState({select:""})},"aria-label":"remove button"})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){return Object(j.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":t===c}),children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",onClick:function(){e.setState({select:c})},className:u()("button",{"is-info":t===c}),children:e.state.select===c?"-":"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(d.a.Component);a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.83751f53.chunk.js.map