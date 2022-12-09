"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[160],{8160:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(2791),a=t(9434),o=t(6907),s=t(3634),c=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},i=function(e){return e.contacts.error},u=function(e){return e.filters.name},d=t(8699),m=t(9894),h=t(9126),b=t(6737),f="Phonebook_phonebookWrapp__JR92B",p="Phonebook_phonebookForm__CaULo",_="Phonebook_label__Qzztg",x="Phonebook_buttonInput__JXZaU",j=t(184);function v(){var e=(0,a.I0)(),n=(0,a.v9)(c);return(0,j.jsx)("div",{className:f,children:(0,j.jsxs)("form",{className:p,onSubmit:function(t){t.preventDefault();var r=t.currentTarget,a=r.elements.name.value,o=r.elements.number.value;0===n.filter((function(e){return e.name.toLowerCase()===a.toLowerCase()})).length?e((0,s.uK)({name:a,phone:o})):alert("".concat(a," is already in contacts.")),r.reset()},children:[(0,j.jsxs)("label",{className:_,children:["Name:",(0,j.jsxs)(b.BZ,{mb:5,mt:2,borderColor:"gray.500",children:[(0,j.jsx)(b.Z8,{pointerEvents:"none",children:(0,j.jsx)(m.JO,{as:h.HHm,color:"gray.500",size:"sm"})}),(0,j.jsx)(b.II,{type:"tel",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,w:350,borderColor:"gray.500",bg:"white"})]})]}),(0,j.jsxs)("label",{className:_,children:["Number:",(0,j.jsxs)(b.BZ,{mb:7,mt:2,borderColor:"gray.500",children:[(0,j.jsx)(b.Z8,{pointerEvents:"none",children:(0,j.jsx)(d.qW,{color:"gray.500",size:"sm"})}),(0,j.jsx)(b.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,borderColor:"gray.500",bg:"white"})]})]}),(0,j.jsx)("div",{children:(0,j.jsx)("input",{className:x,type:"submit",value:"Add contact"})})]})})}var g=t(6895),C={findContactWrapp:"FilterBlock_findContactWrapp__wsh1H",label:"FilterBlock_label__oX+HZ"};function y(){var e=(0,a.I0)(),n=(0,a.v9)(u);return(0,j.jsx)("div",{className:C.findContactWrapp,children:(0,j.jsxs)("label",{className:C.label,children:["Find contacts by name",(0,j.jsxs)(b.BZ,{mb:5,mt:2,borderColor:"gray.500",width:350,children:[(0,j.jsx)(b.Z8,{pointerEvents:"none",children:(0,j.jsx)(d.W1,{color:"gray.500",size:"sm"})}),(0,j.jsx)(b.II,{className:C.input,type:"text",name:"filter",value:n,onChange:function(n){return e((0,g.u)(n.currentTarget.value))},borderColor:"gray.500",bg:"white"})]})]})})}var k=t(4190),N="Contacts_contactsBlock__ODN-X",w="Contacts_listOfContacts__QIYfA",I="Contacts_contactItem__qm4r1",Z="Contacts_button__vUlqW";function z(){var e,n=(0,a.I0)(),t=(0,a.v9)(l),o=(0,a.v9)(i),m=null!==(e=(0,a.v9)(c))&&void 0!==e?e:[],h=function(e,n){if(!n)return e;var t=null===n||void 0===n?void 0:n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(m,(0,a.v9)(u));console.log("contacts",h),(0,r.useEffect)((function(){n((0,s.yF)())}),[n]);return(0,j.jsxs)("div",{className:N,children:[(0,j.jsx)(k.xu,{h:"7",children:t&&!o&&(0,j.jsx)("b",{children:"Request in progress..."})}),(0,j.jsx)("ul",{className:w,children:m.length>0&&h.map((function(e){return(0,j.jsxs)("li",{className:I,children:[e.name,": ",e.number,(0,j.jsxs)("button",{className:Z,type:"button",onClick:function(){return function(e){return n((0,s.GK)(e.id))}(e)},children:["Delete ",(0,j.jsx)(d.pJ,{})]})]},e.id)}))})]})}function B(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,j.jsxs)("div",{children:[(0,j.jsx)(o.ql,{children:(0,j.jsx)("title",{children:"Your contacts"})}),(0,j.jsx)(v,{}),(0,j.jsx)(y,{}),(0,j.jsx)(z,{})]})}}}]);
//# sourceMappingURL=160.d3a5cf5c.chunk.js.map