(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5703],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return s},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var o=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){return function(n){var t=p(n.components);return o.createElement(e,i({},n,{components:t}))}},p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=p(t),s=a,f=u["".concat(r,".").concat(s)]||u[s]||c[s]||i;return t?o.createElement(f,d(d({ref:n},l),{},{components:t})):o.createElement(f,d({ref:n},l))}));function x(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=f;var d={};for(var m in n)hasOwnProperty.call(n,m)&&(d[m]=n[m]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48256:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var o=t(22122),a=t(19756),i=(t(2784),t(3905)),r={title:"Using audio",id:"using-audio"},d={unversionedId:"using-audio",id:"using-audio",isDocsHomePage:!1,title:"Using audio",description:"Import audio",source:"@site/docs/using-audio.md",sourceDirName:".",slug:"/using-audio",permalink:"/docs/using-audio",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/using-audio.md",version:"current",frontMatter:{title:"Using audio",id:"using-audio"},sidebar:"someSidebar",previous:{title:"Importing assets",permalink:"/docs/assets"},next:{title:"Using fonts",permalink:"/docs/fonts"}},m=[{value:"Import audio",id:"import-audio",children:[]},{value:"Cutting or trimming the audio",id:"cutting-or-trimming-the-audio",children:[]},{value:"Delaying audio",id:"delaying-audio",children:[]},{value:"Controlling volume",id:"controlling-volume",children:[]},{value:"<code>muted</code> property",id:"muted-property",children:[]},{value:"Use audio from <code>&lt;Video /&gt;</code> tags",id:"use-audio-from-video--tags",children:[]},{value:"Controlling playback speed",id:"controlling-playback-speed",children:[]},{value:"Audio visualization",id:"audio-visualization",children:[]},{value:"See also",id:"see-also",children:[]}],l={toc:m};function u(e){var n=e.components,t=(0,a.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,o.default)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"import-audio"},"Import audio"),(0,i.mdx)("p",null,"You can import an audio file using an ",(0,i.mdx)("inlineCode",{parentName:"p"},"import")," statement:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import audio from './audio.mp3'\n")),(0,i.mdx)("p",null,"You may add an ",(0,i.mdx)("a",{parentName:"p",href:"/docs/audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Audio/>"))," tag to your composition to add sound to it."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{8}","{8}":!0},"import {Audio} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyComposition: React.FC = () => {\n  return (\n    <div>\n      <h1>Hello World!</h1>\n      <Audio src={audio} />\n    </div>\n  )\n}\n")),(0,i.mdx)("p",null,"The audio will play from the start, at full volume and as long as the duration of the composition or the duration of the audio is long, whatever is shorter."),(0,i.mdx)("p",null,"You can also import remote audio by passing a URL (",(0,i.mdx)("inlineCode",{parentName:"p"},'src="https://example.com/audio.mp3"'),")."),(0,i.mdx)("p",null,"You can mix multiple tracks together by adding more audio tags."),(0,i.mdx)("h2",{id:"cutting-or-trimming-the-audio"},"Cutting or trimming the audio"),(0,i.mdx)("p",null,"You can use the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/sequence"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Sequence />"))," API to cut and trim audio.\nAs a convienience, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Audio />")," tag supports the ",(0,i.mdx)("inlineCode",{parentName:"p"},"startFrom")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"endAt")," props."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{10-11}","{10-11}":!0},"import {Audio} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyVideo = () => {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Audio\n        src={audio}\n        startFrom={59} // if your composition is 30fps, then it will start at 2s\n        endAt={120} // if your composition is 30fps, then it will end at 4s\n      />\n    </div>\n  )\n}\n")),(0,i.mdx)("h2",{id:"delaying-audio"},"Delaying audio"),(0,i.mdx)("p",null,"Use a ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Sequence>")," with a positive ",(0,i.mdx)("inlineCode",{parentName:"p"},"from")," attribute to delay the audio from playing.\nIn the following example, the audio will start playing (from the beginning) after 100 frames."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{8}","{8}":!0},"import {Audio, Sequence} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyVideo = () => {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Sequence from={100} durationInFrames={Infinity}>\n        <Audio src={audio}>\n      </Sequence>\n    </div>\n  )\n}\n")),(0,i.mdx)("h2",{id:"controlling-volume"},"Controlling volume"),(0,i.mdx)("p",null,"You can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"volume")," prop to control the volume.\n",(0,i.mdx)("strong",{parentName:"p"},"The simplest way is to pass a number between 0 and 1"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},"1")," is the maximum volume, values over 1 are allowed but will not increase the volume further. Volumes under 0 are not allowed."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{8}","{8}":!0},"import {Audio} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyVideo = () => {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Audio src={audio} volume={0.5}>\n    </div>\n  )\n}\n")),(0,i.mdx)("p",null,"You can also ",(0,i.mdx)("strong",{parentName:"p"},"change volume over time"),", in this example we are using the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/interpolate"},"interpolate()")," function. Note that because values below 0 are not allowed, we need to set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"extrapolateLeft: 'clamp'")," option to ensure no negative values."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{10}","{10}":!0},"import {Audio, interpolate, useCurrentFrame} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Audio src={audio} volume={interpolate(frame, [0, 30], [0,1], {extrapolateLeft: 'clamp'})}>\n    </div>\n  )\n}\n")),(0,i.mdx)("p",null,"You may also pass a ",(0,i.mdx)("strong",{parentName:"p"},"callback function")," that returns the volume based an arbitrary frame number. This has the benefit that Remotion is able to ",(0,i.mdx)("strong",{parentName:"p"},"draw a volume curve in the timeline"),"!"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{8}","{8}":!0},"import {Audio, interpolate} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyVideo = () => {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Audio src={audio} volume={f => interpolate(f, [0, 30], [0,1], {extrapolateLeft: 'clamp'})}>\n    </div>\n  )\n}\n")),(0,i.mdx)("p",null,"Note that if you pass in a callback function, the first frame on which audio is being played is always the frame ",(0,i.mdx)("inlineCode",{parentName:"p"},"0"),"."),(0,i.mdx)("h2",{id:"muted-property"},(0,i.mdx)("inlineCode",{parentName:"h2"},"muted")," property"),(0,i.mdx)("p",null,"You may pass in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"muted")," and it may change over time. When ",(0,i.mdx)("inlineCode",{parentName:"p"},"muted")," is true, audio will be omitted at that time. In the following example, we are muting the track between frame 40 and 60."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{10}","{10}":!0},"import {Audio, interpolate, useCurrentFrame} from 'remotion';\nimport audio from './audio.mp3'\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Audio src={audio} muted={frame >= 40 && frame <= 60}>\n    </div>\n  )\n}\n")),(0,i.mdx)("h2",{id:"use-audio-from-video--tags"},"Use audio from ",(0,i.mdx)("inlineCode",{parentName:"h2"},"<Video />")," tags"),(0,i.mdx)("p",null,"Audio from ",(0,i.mdx)("a",{parentName:"p",href:"/docs/video"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Video />"))," tags are also included in the output. You may also use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"volume")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"muted")," props in the same way."),(0,i.mdx)("h2",{id:"controlling-playback-speed"},"Controlling playback speed"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Available from v2.2")),(0,i.mdx)("p",null,"You can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"playbackRate")," prop to control the speed of the audio. ",(0,i.mdx)("inlineCode",{parentName:"p"},"1")," is the default and means regular speed, ",(0,i.mdx)("inlineCode",{parentName:"p"},"0.5")," slows down the audio so it's twice as long and ",(0,i.mdx)("inlineCode",{parentName:"p"},"2")," speeds up the audio so it's twice as fast."),(0,i.mdx)("p",null,"While Remotion doesn't limit the range of possible playback speeds, in development mode the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate"},(0,i.mdx)("inlineCode",{parentName:"a"},"HTMLMediaElement.playbackRate"))," API is used which throws errors on extreme values. At the time of writing, Google Chrome throws an exception if the playback rate is below ",(0,i.mdx)("inlineCode",{parentName:"p"},"0.0625")," or above ",(0,i.mdx)("inlineCode",{parentName:"p"},"16"),"."),(0,i.mdx)("h2",{id:"audio-visualization"},"Audio visualization"),(0,i.mdx)("p",null,"You can obtain audio data and create visualizations based on it. See the page ",(0,i.mdx)("a",{parentName:"p",href:"/docs/audio-visualization"},"Audio visualization")," for more info."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/assets"},"Importing assets")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Audio />"))," tag")))}u.isMDXComponent=!0}}]);