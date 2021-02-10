(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(110));const a={id:"useCheckbox",title:"useCheckbox"},i={unversionedId:"useCheckbox",id:"useCheckbox",isDocsHomePage:!1,title:"useCheckbox",description:"Provides the behavior and accessibility implementation for a checkbox component. Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",source:"@site/docs/useCheckbox.md",slug:"/useCheckbox",permalink:"/react-native-aria/docs/useCheckbox",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useCheckbox.md",version:"current",sidebar:"someSidebar",previous:{title:"Challenges",permalink:"/react-native-aria/docs/challenges"},next:{title:"useCheckboxGroup",permalink:"/react-native-aria/docs/useCheckboxGroup"}},c=[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"API",id:"api",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Internationalization",id:"internationalization",children:[{value:"RTL",id:"rtl",children:[]}]}],l={toc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides the behavior and accessibility implementation for a checkbox component. Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected."),Object(o.b)("h3",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @react-native-aria/checkbox\n")),Object(o.b)("h3",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"import { useCheckbox } from '@react-native-aria/checkbox'\n")),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"useCheckbox(props: AriaCheckboxProps, state: ToggleState, inputRef: RefObject): CheckboxAria\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("iframe",{src:"https://snack.expo.io/embedded/@nishanbende/usecheckbox?preview=true&platform=web&theme=dark",height:"600",width:"100%"}),Object(o.b)("h2",{id:"internationalization"},"Internationalization"),Object(o.b)("h3",{id:"rtl"},"RTL"),Object(o.b)("p",null,"In right-to-left languages, the checkbox should be mirrored. The checkbox should be placed on the right\nside of the label. Ensure that your CSS accounts for this."))}s.isMDXComponent=!0}}]);