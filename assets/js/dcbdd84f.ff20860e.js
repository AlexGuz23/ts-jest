"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6591],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const i={id:"debugging",title:"Debugging ts-jest"},a=void 0,s={unversionedId:"debugging",id:"version-26.5/debugging",title:"Debugging ts-jest",description:"You can activate the debug logger by setting the environment variable TSJESTLOG before running tests.",source:"@site/versioned_docs/version-26.5/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/ts-jest/docs/26.5/debugging",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/debugging.md",tags:[],version:"26.5",lastUpdatedBy:"jackwolfskin0302",lastUpdatedAt:1667047648,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{id:"debugging",title:"Debugging ts-jest"},sidebar:"version-26.5-docs",previous:{title:"Migration from <=23.10",permalink:"/ts-jest/docs/26.5/migration"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can activate the debug logger by setting the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TS_JEST_LOG")," before running tests.\nThe output of the logger will be in ",(0,o.kt)("strong",{parentName:"p"},"ts-jest.log")," in current working directory."),(0,o.kt)("p",null,"The debug logger contains some useful information about how internal ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," works, including which files are processed,\nwhich Jest config or TypeScript config is used etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux/MacOS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export TS_JEST_LOG=ts-jest.log\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set TS_JEST_LOG=ts-jest.log\n")))}p.isMDXComponent=!0}}]);