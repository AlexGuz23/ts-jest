"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3627],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={id:"react-native",title:"Using with React Native"},i=void 0,s={unversionedId:"guides/react-native",id:"version-26.5/guides/react-native",title:"Using with React Native",description:"To use ts-jest with React Native + TypeScript and Babel 7, you'll first need to follow this tutorial.",source:"@site/versioned_docs/version-26.5/guides/react-native.md",sourceDirName:"guides",slug:"/guides/react-native",permalink:"/ts-jest/docs/26.5/guides/react-native",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/react-native.md",tags:[],version:"26.5",lastUpdatedBy:"jackwolfskin0302",lastUpdatedAt:1667047648,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{id:"react-native",title:"Using with React Native"},sidebar:"version-26.5-docs",previous:{title:"Mock ES6 class",permalink:"/ts-jest/docs/26.5/guides/mock-es6-class"},next:{title:"Test helpers",permalink:"/ts-jest/docs/26.5/guides/test-helpers"}},l={},c=[{value:"Babel config",id:"babel-config",level:3},{value:"TypeScript Configuration",id:"typescript-configuration",level:3},{value:"Jest config",id:"jest-config",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," with React Native + TypeScript and Babel 7, you'll first need to follow ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native"},"this tutorial"),"."),(0,o.kt)("p",null,"After that, some little modifications will be required as follows:"),(0,o.kt)("h3",{id:"babel-config"},"Babel config"),(0,o.kt)("p",null,"If you didn't yet, move any Babel config from ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js"),". It should at least contain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// babel.config.js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n")),(0,o.kt)("h3",{id:"typescript-configuration"},"TypeScript Configuration"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," at the root of your project with the following content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.spec.json\n{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n')),(0,o.kt)("h3",{id:"jest-config"},"Jest config"),(0,o.kt)("p",null,"In the same way that you moved Babel config, move Jest config from ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," key of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js"),". It should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  preset: 'react-native',\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.spec.json',\n    },\n  },\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n")))}u.isMDXComponent=!0}}]);