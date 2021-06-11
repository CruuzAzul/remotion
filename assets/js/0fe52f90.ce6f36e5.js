(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6958],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){return function(n){var t=m(n.components);return o.createElement(e,i({},n,{components:t}))}},m=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,g=c["".concat(a,".").concat(d)]||c[d]||p[d]||i;return t?o.createElement(g,u(u({ref:n},s),{},{components:t})):o.createElement(g,u({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23128:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var o=t(22122),r=t(19756),i=(t(2784),t(3905)),a={slug:"1-1",title:"Remotion 1.1",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},u={permalink:"/blog/1-1",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-02-11-remotion1-1.md",source:"@site/blog/2021-02-11-remotion1-1.md",title:"Remotion 1.1",description:"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[],readingTime:1.96,truncated:!1,prevItem:{title:"Remotion 1.2",permalink:"/blog/1-2"},nextItem:{title:"Introducing Remotion",permalink:"/blog/introducing-remotion"}},l=[{value:"Customizing Webpack configuration",id:"customizing-webpack-configuration",children:[]},{value:"New <code>&lt;Img /&gt;</code> and <code>&lt;IFrame /&gt;</code> components",id:"new-img--and-iframe--components",children:[{value:"Bonus: ESLint rule",id:"bonus-eslint-rule",children:[]}]},{value:"Upgrading is easy",id:"upgrading-is-easy",children:[]}],s={toc:l};function c(e){var n=e.components,t=(0,r.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,o.default)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!"),(0,i.mdx)("p",null,"Now it's time to iterate and make Remotion better. This release contains two new features: Customizing the Webpack configuration and new ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Img>")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"</IFrame>")," components!"),(0,i.mdx)("h2",{id:"customizing-webpack-configuration"},"Customizing Webpack configuration"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/docs/webpack"},"See docs"))),(0,i.mdx)("p",null,"People had wild ideas on what to do with Remotion like importing MDX files or using React Native components. Now it is possible!"),(0,i.mdx)("p",null,"When providing the possibility on how to configure Remotion, it was of big importance to provide both a high degree of flexibility and a good developer experience. This is how you update the webpack config:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),(0,i.mdx)("p",null,"There is a new Remotion config file, that you can write in Typescript. Updating the Webpack config uses the ",(0,i.mdx)("strong",{parentName:"p"},"reducer pattern"),": You get the default configuration and it is your responsibility to return an updated Webpack config. You get type checking, auto completion and the flexibility to either only update a single property or pass in a completely new configuration. No black magic here - since this is just a pure function, the outcome will be very predictable."),(0,i.mdx)("h2",{id:"new-img--and-iframe--components"},"New ",(0,i.mdx)("inlineCode",{parentName:"h2"},"<Img />")," and ",(0,i.mdx)("inlineCode",{parentName:"h2"},"<IFrame />")," components"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/docs/use-img-and-iframe"},"See docs"))),(0,i.mdx)("p",null,"The purpose of these new components is to help with something that is easy to overlook in Remotion: Images or Iframes are being rendered, but Remotion does not wait until the loading of these network resources are complete. The result: Flicker in the end result! The correct thing is ",(0,i.mdx)("a",{parentName:"p",href:"/docs/data-fetching#telling-remotion-to-wait-until-the-data-is-loaded"},"to wait using the ",(0,i.mdx)("inlineCode",{parentName:"a"},"delayRender")," API"),", but this is not very obvious. Now Remotion comes with built-in components that will wait until assets are loaded."),(0,i.mdx)("h3",{id:"bonus-eslint-rule"},"Bonus: ESLint rule"),(0,i.mdx)("p",null,(0,i.mdx)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1629785/107443059-62829e00-6b38-11eb-9d0e-fb12b68fa2a9.png",alt:"ESLint rule 'warn-native-media-tag'"})),(0,i.mdx)("p",null,"To prevent shooting yourself into your foot, Remotion now comes with an ESLint rule that warns if you use the native ",(0,i.mdx)("inlineCode",{parentName:"p"},"<img>"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"<iframe>"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"<video>")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"<audio>")," tags. These tags work better when you use the Remotion-wrapped versions instead."),(0,i.mdx)("h2",{id:"upgrading-is-easy"},"Upgrading is easy"),(0,i.mdx)("p",null,"Simply type"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-console"},"npm run upgrade\n")),(0,i.mdx)("p",null,"in your project and you'll get all the newest Remotion packages! Maybe you also noticed that there is a banner in the editor that notifies you when an upgrade is available."))}c.isMDXComponent=!0}}]);