(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5845],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var o=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},d=Object.keys(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=o.createContext({}),u=function(e){return function(t){var n=s(t.components);return o.createElement(e,d({},t,{components:n}))}},s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},x=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,d=e.originalType,r=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,x=u["".concat(r,".").concat(c)]||u[c]||p[c]||d;return n?o.createElement(x,i(i({ref:t},m),{},{components:n})):o.createElement(x,i({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var d=n.length,r=new Array(d);r[0]=x;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var m=2;m<d;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}x.displayName="MDXCreateElement"},22047:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return a},default:function(){return u}});var o=n(22122),l=n(19756),d=(n(2784),n(3905)),r={id:"encoding",title:"Encoding Guide"},i={unversionedId:"encoding",id:"encoding",isDocsHomePage:!1,title:"Encoding Guide",description:"Backed by FFMPEG, Remotion allows you to configure a variety of encoding settings. The goal of this page is to help you navigate through the settings and to help you choose the right one.",source:"@site/docs/encoding.md",sourceDirName:".",slug:"/encoding",permalink:"/docs/encoding",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/encoding.md",version:"current",frontMatter:{id:"encoding",title:"Encoding Guide"},sidebar:"someSidebar",previous:{title:"Data fetching",permalink:"/docs/data-fetching"},next:{title:"Transparent videos",permalink:"/docs/transparent-videos"}},a=[{value:"Choosing a codec",id:"choosing-a-codec",children:[]},{value:"Controlling quality using the CRF setting",id:"controlling-quality-using-the-crf-setting",children:[]},{value:"Controlling quality using ProRes profile",id:"controlling-quality-using-prores-profile",children:[]},{value:"Audio-only export",id:"audio-only-export",children:[]},{value:"What other settings do you need?",id:"what-other-settings-do-you-need",children:[]},{value:"See also",id:"see-also",children:[]}],m={toc:a};function u(e){var t=e.components,n=(0,l.default)(e,["components"]);return(0,d.mdx)("wrapper",(0,o.default)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"Backed by ",(0,d.mdx)("a",{parentName:"p",href:"https://ffmpeg.org/"},"FFMPEG"),", Remotion allows you to configure a variety of encoding settings. The goal of this page is to help you navigate through the settings and to help you choose the right one."),(0,d.mdx)("h2",{id:"choosing-a-codec"},"Choosing a codec"),(0,d.mdx)("p",null,"Remotion supports 5 video codecs: ",(0,d.mdx)("inlineCode",{parentName:"p"},"h264")," (",(0,d.mdx)("em",{parentName:"p"},"default"),"), ",(0,d.mdx)("inlineCode",{parentName:"p"},"h265"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"vp8"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"vp9"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"prores"),". The first two produce an output that will be an MP4, the last two are for generating WebM videos. While H264 will work well in most cases, sometimes it's worth going for a different codec. Refer to the table below to see the advantages and drawbacks of each codec."),(0,d.mdx)("table",null,(0,d.mdx)("tr",null,(0,d.mdx)("th",null,"Codec"),(0,d.mdx)("th",null,"File extension"),(0,d.mdx)("th",null,"File size"),(0,d.mdx)("th",null,"Rendering time"),(0,d.mdx)("th",null,"Browser compatibility")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"H.264 ",(0,d.mdx)("sub",null,"also known as MPEG-4")),(0,d.mdx)("td",null,".mp4"),(0,d.mdx)("td",{style:{color:"red"}},"Large"),(0,d.mdx)("td",{style:{color:"green",fontWeight:"bold"}},"Very fast"),(0,d.mdx)("td",null,(0,d.mdx)("a",{href:"https://caniuse.com/mpeg4",style:{color:"green",fontWeight:"bold"}},"Very good"))),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"H.265 ",(0,d.mdx)("sub",null,"also known as HEVC")),(0,d.mdx)("td",null,".mp4 or .hevc"),(0,d.mdx)("td",{style:{color:"darkorange"}},"Medium"),(0,d.mdx)("td",{style:{color:"green"}},"Fast"),(0,d.mdx)("td",null,(0,d.mdx)("a",{href:"https://caniuse.com/hevc",style:{color:"red",fontWeight:"bold"}},"Very poor"))),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"VP8"),(0,d.mdx)("td",null,".webm"),(0,d.mdx)("td",{style:{color:"green"}},"Small"),(0,d.mdx)("td",{style:{color:"red"}},"Slow"),(0,d.mdx)("td",null,(0,d.mdx)("a",{href:"https://caniuse.com/webm",style:{color:"darkorange"}},"Okay"))),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"VP9"),(0,d.mdx)("td",null,".webm"),(0,d.mdx)("td",{style:{color:"green",fontWeight:"bold"}},"Very small"),(0,d.mdx)("td",{style:{color:"red",fontWeight:"bold"}},"Very slow"),(0,d.mdx)("td",null,(0,d.mdx)("a",{href:"https://caniuse.com/webm",style:{color:"darkorange"}},"Okay"))),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"ProRes"),(0,d.mdx)("td",null,".mov"),(0,d.mdx)("td",{style:{color:"red"}},"Large"),(0,d.mdx)("td",{style:{color:"green"}},"Fast"),(0,d.mdx)("td",{style:{color:"red",fontWeight:"bold"}},"None"))),(0,d.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,d.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,d.mdx)("h5",{parentName:"div"},(0,d.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,d.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,d.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,d.mdx)("div",{parentName:"div",className:"admonition-content"},(0,d.mdx)("p",{parentName:"div"},"Click on a browser compatibility link to see exactly which browsers are supported on caniuse.com."))),(0,d.mdx)("p",null,"You can set a config using ",(0,d.mdx)("a",{parentName:"p",href:"/docs/config#setcodec"},(0,d.mdx)("inlineCode",{parentName:"a"},"Config.Output.setCodec()")," in the config file")," or the ",(0,d.mdx)("a",{parentName:"p",href:"/docs/cli"},(0,d.mdx)("inlineCode",{parentName:"a"},"--codec"))," CLI flag."),(0,d.mdx)("h2",{id:"controlling-quality-using-the-crf-setting"},"Controlling quality using the CRF setting"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Applies only to ",(0,d.mdx)("inlineCode",{parentName:"em"},"h264"),", ",(0,d.mdx)("inlineCode",{parentName:"em"},"h265"),", ",(0,d.mdx)("inlineCode",{parentName:"em"},"vp8")," and ",(0,d.mdx)("inlineCode",{parentName:"em"},"vp9"),".")),(0,d.mdx)("p",null,"No matter which codec you end up using, there's always a tradeoff between file size and video quality. You can control it by setting the so called CRF (Constant Rate Factor). The ",(0,d.mdx)("strong",{parentName:"p"},"lower the number, the better the quality"),", the higher the number, the smaller the file is \u2013 of course at the cost of quality."),(0,d.mdx)("p",null,"Be cautious: Every codec has it's own range of acceptable values and a different default. So while ",(0,d.mdx)("inlineCode",{parentName:"p"},"23")," will look very good on a H264 video, it will look terrible on a WebM video. Use this chart to determine which CRF value to use:"),(0,d.mdx)("details",{style:{fontSize:"0.9em"}},(0,d.mdx)("summary",null,"Changelog"),(0,d.mdx)("ul",null,(0,d.mdx)("li",null,"Since version 2.1.3, Remotion doesn't allow the CRF to be set to ",(0,d.mdx)("code",null,"0")," anymore because of the issues it causes on macOS/iOS and possible other scenarios. Set the CRF to 1 or higher."))),(0,d.mdx)("div",{style:{height:10}}),(0,d.mdx)("table",null,(0,d.mdx)("tr",null,(0,d.mdx)("th",null,"Codec"),(0,d.mdx)("th",null,"Minimum - Best quality"),(0,d.mdx)("th",null,"Maximum - Best compression"),(0,d.mdx)("th",null,"Default")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"H264"),(0,d.mdx)("td",null,"1"),(0,d.mdx)("td",null,"51"),(0,d.mdx)("td",null,"18")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"H265"),(0,d.mdx)("td",null,"0"),(0,d.mdx)("td",null,"51"),(0,d.mdx)("td",null,"23")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"VP8"),(0,d.mdx)("td",null,"4"),(0,d.mdx)("td",null,"63"),(0,d.mdx)("td",null,"9")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,"VP9"),(0,d.mdx)("td",null,"0"),(0,d.mdx)("td",null,"63"),(0,d.mdx)("td",null,"28"))),(0,d.mdx)("p",null,"You can ",(0,d.mdx)("a",{parentName:"p",href:"config#setcrf"},"set a CRF in the config file using the ",(0,d.mdx)("inlineCode",{parentName:"a"},"Config.Output.setCrf()"))," function or use the ",(0,d.mdx)("a",{parentName:"p",href:"/docs/cli#flags"},(0,d.mdx)("inlineCode",{parentName:"a"},"--crf"))," command line flag."),(0,d.mdx)("h2",{id:"controlling-quality-using-prores-profile"},"Controlling quality using ProRes profile"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Applies only to ",(0,d.mdx)("inlineCode",{parentName:"em"},"prores")," codec"),"."),(0,d.mdx)("p",null,"For ProRes, there is no CRF option, but there are profiles which you can set using the ",(0,d.mdx)("a",{parentName:"p",href:"/docs/cli#--prores-profile"},(0,d.mdx)("inlineCode",{parentName:"a"},"--prores-profile")," flag")," or the ",(0,d.mdx)("a",{parentName:"p",href:"/docs/config#setproresprofile"},(0,d.mdx)("inlineCode",{parentName:"a"},"setProResProfile"))," config file option."),(0,d.mdx)("table",null,(0,d.mdx)("tr",null,(0,d.mdx)("th",null,"Value"),(0,d.mdx)("th",null,"FFMPEG setting"),(0,d.mdx)("th",null,"Bitrate"),(0,d.mdx)("th",null,(0,d.mdx)("a",{href:"/docs/transparent-videos"},"Supports alpha channel"))),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,(0,d.mdx)("code",null,'"proxy"')),(0,d.mdx)("td",null,"0"),(0,d.mdx)("td",null,"~45Mbps"),(0,d.mdx)("td",null,"No")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,(0,d.mdx)("code",null,'"light"')),(0,d.mdx)("td",null,"1"),(0,d.mdx)("td",null,"~102Mbps"),(0,d.mdx)("td",null,"No")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,(0,d.mdx)("code",null,'"standard"')," (default)"),(0,d.mdx)("td",null,"2"),(0,d.mdx)("td",null,"~147Mbps"),(0,d.mdx)("td",null,"No")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,(0,d.mdx)("code",null,'"hq"')),(0,d.mdx)("td",null,"3"),(0,d.mdx)("td",null,"~220Mbps"),(0,d.mdx)("td",null,"No")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,(0,d.mdx)("code",null,'"4444"')),(0,d.mdx)("td",null,"4"),(0,d.mdx)("td",null,"~330Mbps"),(0,d.mdx)("td",null,"Yes")),(0,d.mdx)("tr",null,(0,d.mdx)("td",null,(0,d.mdx)("code",null,'"4444-xq"')),(0,d.mdx)("td",null,"4"),(0,d.mdx)("td",null,"~500Mbps"),(0,d.mdx)("td",null,"Yes"))),(0,d.mdx)("p",null,"Higher bitrate means higher quality and higher file size."),(0,d.mdx)("h2",{id:"audio-only-export"},"Audio-only export"),(0,d.mdx)("p",null,"You can pass ",(0,d.mdx)("inlineCode",{parentName:"p"},"mp3"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"wav")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"aac")," as a codec. If you do it, an audio file will be output in the corresponding format. Quality settings will be ignored."),(0,d.mdx)("h2",{id:"what-other-settings-do-you-need"},"What other settings do you need?"),(0,d.mdx)("p",null,"Which of the dozens of options that FFMPEG supports would you like to see exposed in Remotion? Let us know by opening an ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/issues"},"issue on our issue tracker!")),(0,d.mdx)("h2",{id:"see-also"},"See also"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/cli"},"CLI Options")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/config"},"Configuration file"))))}u.isMDXComponent=!0}}]);