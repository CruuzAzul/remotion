(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3394],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return l},withMDXComponents:function(){return s}});var o=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),s=function(e){return function(n){var t=l(n.components);return o.createElement(e,a({},n,{components:t}))}},l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(t),c=i,h=s["".concat(r,".").concat(c)]||s[c]||u[c]||a;return t?o.createElement(h,m(m({ref:n},d),{},{components:t})):o.createElement(h,m({ref:n},d))}));function x(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m.mdxType="string"==typeof e?e:i,r[1]=m;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},84043:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var o=t(22122),i=t(19756),a=(t(2784),t(3905)),r={id:"composition",title:"<Composition />"},m={unversionedId:"composition",id:"composition",isDocsHomePage:!1,title:"<Composition />",description:"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player.",source:"@site/docs/composition.md",sourceDirName:".",slug:"/composition",permalink:"/docs/composition",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/composition.md",version:"current",frontMatter:{id:"composition",title:"<Composition />"},sidebar:"someSidebar",previous:{title:"<Audio />",permalink:"/docs/audio"},next:{title:"<Sequence />",permalink:"/docs/sequence"}},p=[{value:"API",id:"api",children:[]},{value:"Example using <code>component</code>",id:"example-using-component",children:[]},{value:"Example using <code>lazyComponent</code>",id:"example-using-lazycomponent",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:p};function s(e){var n=e.components,t=(0,i.default)(e,["components"]);return(0,a.mdx)("wrapper",(0,o.default)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player."),(0,a.mdx)("h2",{id:"api"},"API"),(0,a.mdx)("p",null,"A ",(0,a.mdx)("inlineCode",{parentName:"p"},"<Composition />")," should be placed within a fragment of the root component (which is registered using ",(0,a.mdx)("a",{parentName:"p",href:"/docs/register-root"},(0,a.mdx)("inlineCode",{parentName:"a"},"registerRoot()")),")."),(0,a.mdx)("p",null,"The component takes the following props:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"id"),": ID of the composition, as shown in the sidebar and also a unique identifier of the composition that you need to specify if you want to render it. The ID can only contain letters, numbers and ",(0,a.mdx)("inlineCode",{parentName:"p"},"-"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"fps"),": At how many frames the composition should be rendered.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"durationInFrames"),": How many frames the composition should be long.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"height"),": Height of the composition in pixels.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"width"),": Width of the composition in pixels.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"component")," ",(0,a.mdx)("strong",{parentName:"p"},"or")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"lazyComponent"),": Pass the component in directly ",(0,a.mdx)("strong",{parentName:"p"},"or")," pass a function that returns a dynamic import. Passing neither or both of the props is an error."))),(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"If you use ",(0,a.mdx)("inlineCode",{parentName:"p"},"lazyComponent"),", Remotion will use React Suspense to load the component. Components will be compiled by Webpack as they are needed, which will reduce startup time of Remotion."))),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"If you use ",(0,a.mdx)("inlineCode",{parentName:"p"},"lazyComponent"),", you need to use a default export for your component. This is a restriction of React Suspense."))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"defaultProps")," ",(0,a.mdx)("em",{parentName:"li"},"optional"),": Give your component default props that will be shown in the preview. You can override these props during render using a CLI flag.")),(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Type your components using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"React.FC<{}>")," type and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"defaultProps")," prop will be typesafe."))),(0,a.mdx)("h2",{id:"example-using-component"},"Example using ",(0,a.mdx)("inlineCode",{parentName:"h2"},"component")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {MyComp} from './MyComp';\n\nexport const MyVideo = () => {\n  return (\n    <>\n      <Composition\n        id=\"my-comp\"\n        component={MyComp}\n        width={1080}\n        height={1080}\n        fps={30}\n        durationInFrames={3 * 30}\n      />\n    </>\n  );\n}\n")),(0,a.mdx)("h2",{id:"example-using-lazycomponent"},"Example using ",(0,a.mdx)("inlineCode",{parentName:"h2"},"lazyComponent")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"export const MyVideo = () => {\n  return (\n    <>\n      <Composition\n        id=\"my-comp\"\n        lazyComponent={() => import('./LazyComponent')}\n        width={1080}\n        height={1080}\n        fps={30}\n        durationInFrames={3 * 30}\n      />\n    </>\n  );\n}\n")),(0,a.mdx)("h2",{id:"see-also"},"See also"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/register-root"},"registerRoot()")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/the-fundamentals"},"The fundamentals")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/cli"},"CLI options"))))}s.isMDXComponent=!0}}]);