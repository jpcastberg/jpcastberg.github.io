(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(e,i,t){"use strict";t.r(i);t(114),t(192);var n=t(0),a=t.n(n),r=t(1),s=t.n(r),o=t(191),d=t(193),c=t(7),l=t(67),m=t.n(l),p=c.a.div.withConfig({displayName:"Project__ProjectArea",componentId:"sc-1wmwf32-0"})(['@media screen and (min-width:601px){display:grid;grid-template-columns:1fr 2fr;grid-template-rows:30px auto 35px;grid-template-areas:"img title" "img info" "links tech";justify-items:center;height:250px;}@media screen and (max-width:600px){display:flex;flex-direction:column;justify-content:space-around;align-items:center;min-height:70vh;}width:85%;border:thin solid #ffffff;border-radius:10px;padding:10px 15px;margin:10px auto;text-align:center;']),u=c.a.h3.withConfig({displayName:"Project__ProjectName",componentId:"sc-1wmwf32-1"})(["@media screen and (min-width:601px){grid-area:title;align-self:start;}"]),h=Object(c.a)(m.a).withConfig({displayName:"Project__ProjectImg",componentId:"sc-1wmwf32-2"})(["@media screen and (min-width:601px){grid-area:img;align-self:center;}"]),f=c.a.div.withConfig({displayName:"Project__Description",componentId:"sc-1wmwf32-3"})(["@media screen and (min-width:601px){grid-area:info;align-self:center;}width:95%;"]),g=c.a.div.withConfig({displayName:"Project__TechUsed",componentId:"sc-1wmwf32-4"})(['@media screen and (min-width:601px){grid-area:tech;align-self:end;}width:95%;&::before{content:"Tech Used: "}']),w=c.a.div.withConfig({displayName:"Project__ProjectLinks",componentId:"sc-1wmwf32-5"})(["@media screen and (min-width:601px){grid-area:links;align-self:end;}text-align:center;"]),y=function(e){var i=e.name,t=e.fixed,n=e.description,r=e.techUsed,s=e.links;return a.a.createElement(p,null,a.a.createElement(u,null,i),a.a.createElement(h,{fixed:t}),a.a.createElement(f,null,n),a.a.createElement(g,null,r.map(function(e,i){return a.a.createElement("span",{key:e},e+(i!==r.length-1?", ":""))})),a.a.createElement(w,null,s.map(function(e,i){var t=a.a.createElement("a",{key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.displayName);return i!==s.length-1?a.a.createElement("span",{key:e.url},t,a.a.createElement("span",null," | ")):t})))};y.propTypes={name:s.a.string.isRequired,fixed:s.a.shape({base64:s.a.string.isRequired,height:s.a.number.isRequired,src:s.a.string.isRequired,srcSet:s.a.string.isRequired,width:s.a.number.isRequired}).isRequired,description:s.a.string.isRequired,techUsed:s.a.arrayOf(s.a.string.isRequired).isRequired,links:s.a.arrayOf(s.a.objectOf(s.a.string.isRequired).isRequired).isRequired};var b=y,x=t(195);t.d(i,"query",function(){return v});var N=function(e){var i=e.data;return a.a.createElement(o.a,null,a.a.createElement(d.a,null,"Projects"),x.map(function(e){return a.a.createElement(b,{key:e.name,name:e.name,fixed:i[e.imgName].childImageSharp.fixed,description:e.description,techUsed:e.techUsed,links:e.links})}))};N.propTypes={data:s.a.objectOf(s.a.object.isRequired).isRequired};var v="3831507030";i.default=N},191:function(e,i,t){"use strict";var n=t(7).a.div.withConfig({displayName:"ContentWrapper",componentId:"y454gu-0"})(["width:90%;min-height:calc(100vh - 170px);padding-top:60px;padding-bottom:20px;margin:0px auto;"]);i.a=n},192:function(e,i,t){var n=t(15).f,a=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in a||t(13)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},193:function(e,i,t){"use strict";t.d(i,"a",function(){return a}),t.d(i,"b",function(){return r});var n=t(7),a=n.a.h1.withConfig({displayName:"Headings__Heading",componentId:"nq1y0s-0"})(["border-bottom:thin solid #ffffff;margin-bottom:calc(10px + 0.5vh);"]),r=n.a.h2.withConfig({displayName:"Headings__SubHeading",componentId:"nq1y0s-1"})(["border-bottom:thin solid #ffffff;margin-bottom:calc(10px + 0.5vh);"])},195:function(e){e.exports=[{name:"Safeway Coupon Clipper",description:"A convenient, automated way to clip all of your Safeway Just4U Coupons.",imgName:"safeway",techUsed:["Node","Puppeteer","launchd"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/safewayCouponClipper"}]},{name:"Personal Portfolio",description:"A custom website built to showcase my projects.",imgName:"portfolio",techUsed:["Gatsby","React","Styled Components","Graph QL","ESLint","Github Pages"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/portfolio"}]},{name:"Brand Media ID",description:"A blog/placeholder website built in Wordpress for a client.",imgName:"brand_media_id",techUsed:["Wordpress","HTML/CSS","Mailchimp API"],links:[{displayName:"Live",url:"http://brandmediaid.com/"}]},{name:"Towels Included",description:"An exercise in system design - A back-end for a home share service capable of handling 700 requests per second.",imgName:"towels_included",techUsed:["Node","Express","Nginx","Riak","loader.io","New Relic"],links:[{displayName:"Github",url:"https://github.com/hrsf-111-sdc-towels-included/reviews-module"}]},{name:"City Clothing Supply - Item Viewer",description:"A module built for a team utilizing service-oriented archetecture to create a dynamic, engaging shopping experience.",imgName:"city_clothing_supply",techUsed:["React","Express","MongoDB","Mongoose","Webpack","Jest","Enzyme"],links:[{displayName:"Github",url:"https://github.com/jpcastberg/itemView-module"},{displayName:"Live",url:"https://jpcastberg.github.io/itemView-module/"}]}]}}]);
//# sourceMappingURL=component---src-pages-projects-js-7e64b64f3c56339d587e.js.map