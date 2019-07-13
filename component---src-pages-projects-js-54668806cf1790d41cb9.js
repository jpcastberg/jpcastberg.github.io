(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(e,t,a){"use strict";a.r(t);a(185),a(186);var i=a(0),r=a.n(i),n=a(1),s=a.n(n),o=a(188),d=a(189),l=a(26),c=a(187),u=a.n(c),f=l.a.div.withConfig({displayName:"Project__ProjectArea",componentId:"sc-13m1ct8-0"})(['@media screen and (min-width:601px){display:grid;grid-template-columns:1fr 2fr;grid-template-rows:30px repeat(2,auto);grid-template-areas:"img title" "img info" "links .";justify-items:center;}@media screen and (max-width:600px){display:flex;flex-direction:column;justify-content:space-around;align-items:center;min-height:70vh;}width:85%;border:thin solid white;border-radius:10px;padding:10px;margin:10px auto;']),p=l.a.h3.withConfig({displayName:"Project__ProjectName",componentId:"sc-13m1ct8-1"})(["grid-area:title;text-align:center;"]),m=Object(l.a)(u.a).withConfig({displayName:"Project__ProjectImg",componentId:"sc-13m1ct8-2"})(["grid-area:img;"]),g=l.a.div.withConfig({displayName:"Project__ProjectInformation",componentId:"sc-13m1ct8-3"})(["grid-area:info;display:flex;flex-direction:column;justify-content:space-around;text-align:center;"]),h=l.a.div.withConfig({displayName:"Project__ProjectLinks",componentId:"sc-13m1ct8-4"})(["@media screen and (min-width:601px){margin-top:10px;}grid-area:links;text-align:center;"]),b=function(e){var t=e.name,a=e.fixed,i=e.description,n=e.techUsed,s=e.links;return r.a.createElement(f,null,r.a.createElement(p,null,t),r.a.createElement(m,{fixed:a}),r.a.createElement(g,null,r.a.createElement("p",null,i),r.a.createElement("br",null),r.a.createElement("p",null,"Tech Used: ",n.map(function(e,t){return r.a.createElement("span",{key:e},e+(t!==n.length-1?", ":""))}))),r.a.createElement(h,null,s.map(function(e,t){var a=r.a.createElement("a",{key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.displayName);return t!==s.length-1?r.a.createElement("span",{key:e.url},a,r.a.createElement("span",null," | ")):a})))};b.propTypes={name:s.a.string.isRequired,fixed:s.a.shape({base64:s.a.string.isRequired,height:s.a.number.isRequired,src:s.a.string.isRequired,srcSet:s.a.string.isRequired,width:s.a.number.isRequired}).isRequired,description:s.a.string.isRequired,techUsed:s.a.arrayOf(s.a.string.isRequired).isRequired,links:s.a.arrayOf(s.a.objectOf(s.a.string.isRequired).isRequired).isRequired};var y=b,v=a(192);a.d(t,"query",function(){return w});var S=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(d.a,null,"Projects"),v.map(function(e){return r.a.createElement(y,{key:e.name,name:e.name,fixed:t[e.imgName].childImageSharp.fixed,description:e.description,techUsed:e.techUsed,links:e.links})}))};S.propTypes={data:s.a.objectOf(s.a.object.isRequired).isRequired};var w="1767929948";t.default=S},185:function(e,t,a){"use strict";a(190)("fixed",function(e){return function(){return e(this,"tt","","")}})},186:function(e,t,a){var i=a(13).f,r=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in r||a(11)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},187:function(e,t,a){"use strict";var i=a(12);t.__esModule=!0,t.default=void 0;var r,n=i(a(6)),s=i(a(45)),o=i(a(109)),d=i(a(110)),l=i(a(0)),c=i(a(1)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})})}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=l.default.createElement(j,(0,d.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),n):n},j=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var i=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,I=e.loading,L=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:N?1:0,transition:C?"opacity "+b+"ms":"none"},o),O="boolean"==typeof h?"lightgray":h,P={transitionDelay:b+"ms"},q=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&P,o,f),V={title:t,alt:this.state.isVisible?"":a,style:q,className:p};if(m){var _=m,z=_[0];return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),O&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),z.base64&&l.default.createElement(R,{src:z.base64,spreadProps:V,imageVariants:_,generateSources:E}),z.tracedSVG&&l.default.createElement(R,{src:z.tracedSVG,spreadProps:V,imageVariants:_,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(_),l.default.createElement(j,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:I},z,{imageVariants:_}))}}))}if(g){var T=g,U=T[0],G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},O&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:O,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},C&&P)}),U.base64&&l.default.createElement(R,{src:U.base64,spreadProps:V,imageVariants:T,generateSources:E}),U.tracedSVG&&l.default.createElement(R,{src:U.tracedSVG,spreadProps:V,imageVariants:T,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(T),l.default.createElement(j,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:I},U,{imageVariants:T}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:C,sizes:k,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([k,c.default.arrayOf(k)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var O=N;t.default=O},188:function(e,t,a){"use strict";var i=a(26).a.div.withConfig({displayName:"ContentWrapper",componentId:"sc-1mt3lmx-0"})(["position:relative;top:50px;width:90%;margin:0px auto;"]);t.a=i},189:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var i=a(26),r=i.a.h1.withConfig({displayName:"Headings__Heading",componentId:"nq1y0s-0"})(["border-bottom:thin solid white;margin-bottom:calc(10px + 0.5vh);"]),n=i.a.h2.withConfig({displayName:"Headings__SubHeading",componentId:"nq1y0s-1"})(["border-bottom:thin solid white;margin-bottom:calc(10px + 0.5vh);"])},190:function(e,t,a){var i=a(10),r=a(14),n=a(27),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},192:function(e){e.exports=[{name:"Safeway Coupon Clipper",description:"A convenient, automated way to clip all of your Safeway Just4U Coupons.",imgName:"safeway",techUsed:["Node.js","Puppeteer","launchd"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/safewayCouponClipper"}]},{name:"Personal Portfolio",description:"A custom website built to showcase my projects.",imgName:"portfolio",techUsed:["Gatsby.js","React.js","Styled Components","Graph QL","ESLint","Github Pages"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/portfolio"}]},{name:"Brand Media ID",description:"A blog/placeholder website built in Wordpress for a client.",imgName:"brand_media_id",techUsed:["Wordpress","HTML/CSS","Mailchimp API"],links:[{displayName:"Live",url:"http://brandmediaid.com/"}]},{name:"City Clothing Supply - Item Viewer",description:"A module built for a team utilizing service-oriented archetecture to create a dynamic, engaging shopping experience.",imgName:"city_clothing_supply",techUsed:["React","Express","MongoDB","Mongoose","Webpack","Jest","Enzyme"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/itemView-module"},{displayName:"Live",url:"https://jpcastberg.github.io/itemView-module/"}]}]}}]);
//# sourceMappingURL=component---src-pages-projects-js-54668806cf1790d41cb9.js.map