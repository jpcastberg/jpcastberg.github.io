(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(e,t,i){"use strict";i.r(t);i(114),i(193);var a=i(0),n=i.n(a),r=i(1),o=i.n(r),s=i(191),c=i(192),d=i(8),l=i(67),m=i.n(l),p=d.a.div.withConfig({displayName:"Project__ProjectArea",componentId:"sc-13m1ct8-0"})(['@media screen and (min-width:601px){display:grid;grid-template-columns:1fr 2fr;grid-template-rows:30px repeat(2,auto);grid-template-areas:"img title" "img info" "links .";justify-items:center;}@media screen and (max-width:600px){display:flex;flex-direction:column;justify-content:space-around;align-items:center;min-height:70vh;}width:85%;border:thin solid #ffffff;border-radius:10px;padding:25px;margin:10px auto;']),u=d.a.h3.withConfig({displayName:"Project__ProjectName",componentId:"sc-13m1ct8-1"})(["grid-area:title;text-align:center;"]),f=Object(d.a)(m.a).withConfig({displayName:"Project__ProjectImg",componentId:"sc-13m1ct8-2"})(["grid-area:img;"]),g=d.a.div.withConfig({displayName:"Project__ProjectInformation",componentId:"sc-13m1ct8-3"})(["grid-area:info;display:flex;flex-direction:column;justify-content:space-around;text-align:center;"]),h=d.a.div.withConfig({displayName:"Project__ProjectLinks",componentId:"sc-13m1ct8-4"})(["@media screen and (min-width:601px){margin-top:10px;}grid-area:links;text-align:center;"]),y=function(e){var t=e.name,i=e.fixed,a=e.description,r=e.techUsed,o=e.links;return n.a.createElement(p,null,n.a.createElement(u,null,t),n.a.createElement(f,{fixed:i}),n.a.createElement(g,null,n.a.createElement("p",null,a),n.a.createElement("br",null),n.a.createElement("p",null,"Tech Used: ",r.map(function(e,t){return n.a.createElement("span",{key:e},e+(t!==r.length-1?", ":""))}))),n.a.createElement(h,null,o.map(function(e,t){var i=n.a.createElement("a",{key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.displayName);return t!==o.length-1?n.a.createElement("span",{key:e.url},i,n.a.createElement("span",null," | ")):i})))};y.propTypes={name:o.a.string.isRequired,fixed:o.a.shape({base64:o.a.string.isRequired,height:o.a.number.isRequired,src:o.a.string.isRequired,srcSet:o.a.string.isRequired,width:o.a.number.isRequired}).isRequired,description:o.a.string.isRequired,techUsed:o.a.arrayOf(o.a.string.isRequired).isRequired,links:o.a.arrayOf(o.a.objectOf(o.a.string.isRequired).isRequired).isRequired};var b=y,w=i(195);i.d(t,"query",function(){return j});var x=function(e){var t=e.data;return n.a.createElement(s.a,null,n.a.createElement(c.a,null,"Projects"),w.map(function(e){return n.a.createElement(b,{key:e.name,name:e.name,fixed:t[e.imgName].childImageSharp.fixed,description:e.description,techUsed:e.techUsed,links:e.links})}))};x.propTypes={data:o.a.objectOf(o.a.object.isRequired).isRequired};var j="1767929948";t.default=x},191:function(e,t,i){"use strict";var a=i(8).a.div.withConfig({displayName:"ContentWrapper",componentId:"sc-1mt3lmx-0"})(["width:90%;min-height:calc(100vh - 150px);padding-top:60px;margin:0px auto;"]);t.a=a},192:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r});var a=i(8),n=a.a.h1.withConfig({displayName:"Headings__Heading",componentId:"nq1y0s-0"})(["border-bottom:thin solid #ffffff;margin-bottom:calc(10px + 0.5vh);"]),r=a.a.h2.withConfig({displayName:"Headings__SubHeading",componentId:"nq1y0s-1"})(["border-bottom:thin solid #ffffff;margin-bottom:calc(10px + 0.5vh);"])},193:function(e,t,i){var a=i(15).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||i(13)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},195:function(e){e.exports=[{name:"Safeway Coupon Clipper",description:"A convenient, automated way to clip all of your Safeway Just4U Coupons.",imgName:"safeway",techUsed:["Node","Puppeteer","launchd"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/safewayCouponClipper"}]},{name:"Personal Portfolio",description:"A custom website built to showcase my projects.",imgName:"portfolio",techUsed:["Gatsby","React","Styled Components","Graph QL","ESLint","Github Pages"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/portfolio"}]},{name:"Brand Media ID",description:"A blog/placeholder website built in Wordpress for a client.",imgName:"brand_media_id",techUsed:["Wordpress","HTML/CSS","Mailchimp API"],links:[{displayName:"Live",url:"http://brandmediaid.com/"}]},{name:"City Clothing Supply - Item Viewer",description:"A module built for a team utilizing service-oriented archetecture to create a dynamic, engaging shopping experience.",imgName:"city_clothing_supply",techUsed:["React","Express","MongoDB","Mongoose","Webpack","Jest","Enzyme"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/itemView-module"},{displayName:"Live",url:"https://jpcastberg.github.io/itemView-module/"}]}]}}]);
//# sourceMappingURL=component---src-pages-projects-js-d9a24f2568048623aca5.js.map