import{r as i}from"./index.DhYZZe0J.js";var p={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i,m=Symbol.for("react.element"),f=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,d=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(o,e,s){var r,t={},n=null,c=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)_.call(e,r)&&!y.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:m,type:o,key:n,ref:c,props:t,_owner:d.current}}a.Fragment=f;a.jsx=u;a.jsxs=u;p.exports=a;var l=p.exports;const b=({initValue:o=27,children:e})=>{const[s,r]=i.useState(o),t=n=>{console.log(s),r(c=>c+n)};return l.jsxs("section",{className:"mt-3",children:[e,l.jsxs("div",{className:"mt-3",children:["Counter: ",s]}),l.jsxs("div",{className:"flex gap-3 mt-3",children:[l.jsx("button",{className:"bg-blue-700 text-gray-100 px-7 py-1",onClick:()=>t(-1),children:"-1"}),l.jsx("button",{className:"bg-blue-700 text-gray-100 px-7 py-1",onClick:()=>t(1),children:"+1"})]})]})};export{b as IslandReact};
