"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1884],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const i={title:"Compiler option"},a=void 0,p={unversionedId:"getting-started/options/compiler",id:"version-26.5/getting-started/options/compiler",title:"Compiler option",description:"The compiler option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler.",source:"@site/versioned_docs/version-26.5/getting-started/options/compiler.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/compiler",permalink:"/ts-jest/docs/26.5/getting-started/options/compiler",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/options/compiler.md",tags:[],version:"26.5",lastUpdatedBy:"jackwolfskin0302",lastUpdatedAt:1667047648,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Compiler option"}},l={},s=[{value:"Example",id:"example",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"compiler")," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."),(0,o.kt)("p",null,"The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript"),", which will load the original ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typescript"},"TypeScript compiler module"),".\nThe loaded version will depend on the one installed in your project."),(0,o.kt)("p",null,"If you use a custom compiler, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ttypescript"),", make sure its API is the same as the original TypeScript, at least for what ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," is using."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      compiler: 'ttypescript',\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "compiler": "ttypescript"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);