(window.webpackJsonpmarkliang=window.webpackJsonpmarkliang||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(76),r=n.n(o),l=(n(87),n(2)),c=n(3),s=n(5),m=n(4),d=n(6),h=n(74),u=n(36),p={pages:["home","about","projects","writing","talks","travel"],contents:{home:{h1:"Hello,<br/>I'm Mark Liang.<br/>\u2014",h3:"I\u2019m a Product/UX Designer with over 5 years of experience in design and prototyping, passionate about crafting user experiences and bringing ideas to life with codes.",h5:["currently<br/>\u2014","location<br/>\u2014","contact<br/>\u2014"],h4:["Senior Product/UX Designer<br/>at <a href='https://www.mozilla.org' target='_blank' rel='noopener noreferrer' class='fw7 dark-gray'>Mozilla Taiwan</a>","Taipei City, Taiwan","<span class='user-select'>youwenmarkliang@gmail.com</span>"]},about:{h1:"About<br/>\u2014",h3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."},projects:{h1:"Projects<br/>\u2014",h3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."},writing:{h1:"Writing<br/>\u2014",h3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."},talks:{h1:"Talks<br/>\u2014",h3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."},travel:{h1:"Travel<br/>\u2014",h3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."}}},x=n(77),k=n.n(x),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"render",value:function(){for(var e=p.contents.home,t=this.state.width<=959,n={fontSize:t?"30px":"48px",lineHeight:t?"40px":"60px",color:"#010101",fontWeight:700},i={fontSize:t?"18px":"30px",lineHeight:t?"30px":"48px",color:"#484848",fontWeight:500,marginBottom:0},o={fontSize:"14px",lineHeight:"18px",color:"#7BACCB",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px"},r={fontSize:t?"16px":"18px",lineHeight:t?"24px":"27px",color:"#222222",fontWeight:500},l=[],c=0;c<3;c++){var s=a.a.createElement("div",{className:"fl w-100 w-third-l pa2",key:c},a.a.createElement("h5",{className:"mv2",style:o,dangerouslySetInnerHTML:{__html:e.h5[c]}}),a.a.createElement("h4",{className:"mv2",style:r,dangerouslySetInnerHTML:{__html:e.h4[c]}}));l.push(s)}var m=t?"mb50":"mb100",d=t?{top:"50px",clipPath:"circle(150px at center 100px)"}:{top:"50px"};return a.a.createElement("section",{id:"home",className:"page"},a.a.createElement("div",{className:"box center"},a.a.createElement("div",{className:"flex flex-row-l flex-column ph4-l ph3 "+m},a.a.createElement("div",{className:"w-two-thirds-l w-100 ph2 o2 relative"},a.a.createElement("h1",{style:n,dangerouslySetInnerHTML:{__html:e.h1}}),a.a.createElement("h3",{style:i,dangerouslySetInnerHTML:{__html:e.h3}})),a.a.createElement("div",{className:"w-third-l w-100 ph2 o1 relative"},a.a.createElement("div",{className:"bg-blue o-20 w-100 br-100 circle center"}),a.a.createElement("img",{className:"absolute left-0 right-0 center",src:k.a,width:"200",alt:"Mark Liang",style:d}))),a.a.createElement("div",{className:"cf ph4-l ph3 "+m},l)))}}]),t}(i.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"render",value:function(){var e=p.contents.about,t=this.state.width<=959,n={fontSize:t?"30px":"48px",lineHeight:t?"40px":"60px",color:"#010101",fontWeight:700},i={fontSize:t?"18px":"24px",lineHeight:t?"30px":"36px",color:"#484848",fontWeight:500},o=t?"mb40":"mb50";return a.a.createElement("section",{id:"about",className:"page"},a.a.createElement("div",{className:"box center"},a.a.createElement("div",{className:"flex flex-row-l flex-column ph4-l ph3 "+o},a.a.createElement("div",{className:"w-two-thirds-l w-100 ph2 o2"},a.a.createElement("h1",{style:n,dangerouslySetInnerHTML:{__html:e.h1}}),a.a.createElement("h3",{style:i,dangerouslySetInnerHTML:{__html:e.h3}})),a.a.createElement("div",{className:"w-third-l w-100 ph2 o1"},a.a.createElement("div",{className:"bg-blue o-20 w-100 br-100 circle center"})))))}}]),t}(i.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"render",value:function(){var e=p.contents.writing,t=this.state.width<=959,n={fontSize:t?"30px":"48px",lineHeight:t?"40px":"60px",color:"#010101",fontWeight:700},i={fontSize:t?"18px":"24px",lineHeight:t?"30px":"36px",color:"#484848",fontWeight:500},o=t?"mb40":"mb50";return a.a.createElement("section",{id:"about"},a.a.createElement("div",{className:"box center"},a.a.createElement("div",{className:"flex flex-row-l flex-column ph4-l ph3 "+o},a.a.createElement("div",{className:"w-two-thirds-l w-100 ph2 o2"},a.a.createElement("h1",{style:n,dangerouslySetInnerHTML:{__html:e.h1}}),a.a.createElement("h3",{style:i,dangerouslySetInnerHTML:{__html:e.h3}})),a.a.createElement("div",{className:"w-third-l w-100 ph2 o1"},a.a.createElement("div",{className:"bg-blue o-20 w-100 br-100 circle center"})))))}}]),t}(i.Component),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"render",value:function(){var e=p.contents.talks,t=this.state.width<=959,n={fontSize:t?"30px":"48px",lineHeight:t?"40px":"60px",color:"#010101",fontWeight:700},i={fontSize:t?"18px":"24px",lineHeight:t?"30px":"36px",color:"#484848",fontWeight:500},o=t?"mb40":"mb50";return a.a.createElement("section",{id:"about"},a.a.createElement("div",{className:"box center"},a.a.createElement("div",{className:"flex flex-row-l flex-column ph4-l ph3 "+o},a.a.createElement("div",{className:"w-two-thirds-l w-100 ph2 o2"},a.a.createElement("h1",{style:n,dangerouslySetInnerHTML:{__html:e.h1}}),a.a.createElement("h3",{style:i,dangerouslySetInnerHTML:{__html:e.h3}})),a.a.createElement("div",{className:"w-third-l w-100 ph2 o1"},a.a.createElement("div",{className:"bg-blue o-20 w-100 br-100 circle center"})))))}}]),t}(i.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"render",value:function(){var e=p.contents.travel,t=this.state.width<=959,n={fontSize:t?"30px":"48px",lineHeight:t?"40px":"60px",color:"#010101",fontWeight:700},i={fontSize:t?"18px":"24px",lineHeight:t?"30px":"36px",color:"#484848",fontWeight:500},o=t?"mb40":"mb50";return a.a.createElement("section",{id:"about"},a.a.createElement("div",{className:"box center"},a.a.createElement("div",{className:"flex flex-row-l flex-column ph4-l ph3 "+o},a.a.createElement("div",{className:"w-two-thirds-l w-100 ph2 o2"},a.a.createElement("h1",{style:n,dangerouslySetInnerHTML:{__html:e.h1}}),a.a.createElement("h3",{style:i,dangerouslySetInnerHTML:{__html:e.h3}})),a.a.createElement("div",{className:"w-third-l w-100 ph2 o1"},a.a.createElement("div",{className:"bg-blue o-20 w-100 br-100 circle center"})))))}}]),t}(i.Component),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"render",value:function(){var e=p.contents.projects,t=this.state.width<=959,n={fontSize:t?"30px":"48px",lineHeight:t?"40px":"60px",color:"#010101",fontWeight:700},i={fontSize:t?"18px":"24px",lineHeight:t?"30px":"36px",color:"#484848",fontWeight:500},o=t?"mb40":"mb50";return a.a.createElement("section",{id:"about"},a.a.createElement("div",{className:"box center"},a.a.createElement("div",{className:"flex flex-row-l flex-column ph4-l ph3 "+o},a.a.createElement("div",{className:"w-two-thirds-l w-100 ph2 o2"},a.a.createElement("h1",{style:n,dangerouslySetInnerHTML:{__html:e.h1}}),a.a.createElement("h3",{style:i,dangerouslySetInnerHTML:{__html:e.h3}})),a.a.createElement("div",{className:"w-third-l w-100 ph2 o1"},a.a.createElement("div",{className:"bg-blue o-20 w-100 br-100 circle center"})))))}}]),t}(i.Component),g=n(42),S=n(11),M=n.n(S),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={mobile:M()(window).width()<=959},n.checkMobile=n.checkMobile.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile,!1)}},{key:"checkMobile",value:function(){M()(window).width()<=959?this.setState({mobile:!0}):this.setState({mobile:!1})}},{key:"render",value:function(){return a.a.createElement("section",null,a.a.createElement("p",null,"This is a pages"))}}]),t}(i.Component),O=n(27),N=n(60),D=n.n(N),L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkMobile=function(){n.setState({width:window.innerWidth})},n.checkCurrent=function(){var e=p.pages.indexOf(n.props.active.split("/")[1])+1;0===e&&(e=1),M()("nav li.active").removeClass("active"),M()("nav li:nth-child("+e+")").addClass("active")},n.state={width:window.innerWidth,open:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkMobile),this.checkMobile(),this.checkCurrent()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkMobile)}},{key:"componentDidUpdate",value:function(){this.checkCurrent()}},{key:"closePanel",value:function(){this.setState({open:!1}),M()("body").removeClass("overflow-y-hidden"),M()(".panel").removeClass("set")}},{key:"openPanel",value:function(){this.setState({open:!0}),M()("body").addClass("overflow-y-hidden"),M()(".panel").addClass("set")}},{key:"render",value:function(){var e=this.state.width<=959,t=e?a.a.createElement("div",{className:"pa3 dark-gray pointer"},a.a.createElement("i",{className:"material-icons md-24",onClick:this.openPanel.bind(this)},"menu")):a.a.createElement("ul",{className:"ttu ls2 f12"},a.a.createElement(z,null)),n=a.a.createElement(W,{closePanel:this.closePanel.bind(this),display:this.state.open,mobile:e});return a.a.createElement("nav",{className:"center flex items-center",style:{maxWidth:960}},a.a.createElement(O.a,{to:"/"},a.a.createElement("div",{id:"logo"},a.a.createElement("img",{src:D.a,width:"40",alt:"Mark Liang"}))),t,n)}}]),t}(i.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={display:this.props.mobile?"block":"none",opacity:this.props.display?1:0,pointerEvents:this.props.display?"auto":"none",transition:"opacity .2s linear",zIndex:100};return a.a.createElement("div",{className:"panel bg-blue absolute w-100 vh-100 top-0",style:e},a.a.createElement("div",{style:{height:"64px"},className:"flex items-center"},a.a.createElement("div",{className:"pa3 white pointer absolute right-0 dib"},a.a.createElement("i",{className:"material-icons md-24",onClick:this.props.closePanel},"close"))),a.a.createElement("div",{className:"mv4 center tc"},a.a.createElement("img",{src:D.a,width:"30",alt:"Mark Liang"}),a.a.createElement("ul",{className:"ttu ls2 f14",onClick:this.props.closePanel},a.a.createElement(z,null))))}}]),t}(i.Component);function z(e){for(var t=[],n=0;n<p.pages.length;n++){var i=null;i=0===n?a.a.createElement("li",null,a.a.createElement(O.a,{to:"/"},p.pages[n])):a.a.createElement("li",null,a.a.createElement(O.a,{to:"/"+p.pages[n]},p.pages[n])),t.push(i)}return t}var B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("footer",{style:{height:"64px",background:"#E1EDF4",textAlign:"center"}},a.a.createElement("p",{style:{fontSize:"12px",lineHeight:"64px",color:"#30638D",margin:0,fontWeight:700}},"\xa9 2019  |  Design & Develop by Mark Liang"))}}]),t}(i.Component),H=n(78),_=n.n(H),A=n(79),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.body.classList.add("overflow-y-hidden"),document.getElementById("loading").classList.remove("fade"),setTimeout(function(){document.getElementById("loading").classList.add("fade"),document.body.classList.remove("overflow-y-hidden")},2e3)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e={loop:!1,autoplay:!0,animationData:A,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return a.a.createElement("main",null,a.a.createElement("div",{id:"loading",className:"flex items-center justify-center"},a.a.createElement(_.a,{options:e,height:120,width:120})),a.a.createElement(L,{active:window.location.pathname}),a.a.createElement(h.a,null,a.a.createElement(u.a,{exact:!0,path:"/",component:b}),a.a.createElement(u.a,{path:"/"+p.pages[1],component:v}),a.a.createElement(u.a,{path:"/"+p.pages[2],component:E}),a.a.createElement(u.a,{path:"/"+p.pages[2]+"/:id",component:j}),a.a.createElement(u.a,{path:"/"+p.pages[3],component:f}),a.a.createElement(u.a,{path:"/"+p.pages[4],component:w}),a.a.createElement(u.a,{path:"/"+p.pages[5],component:y})),a.a.createElement(B,null))}}]),t}(i.Component),T=n(80);r.a.render(a.a.createElement(T.BrowserRouter,null,a.a.createElement(C,null)),document.getElementById("root"))},60:function(e,t,n){e.exports=n.p+"static/media/logo.37f2e4a9.svg"},77:function(e,t,n){e.exports=n.p+"static/media/illustration1.5c3cfd8c.svg"},79:function(e){e.exports=JSON.parse('{"v":"5.5.2","fr":60,"ip":0,"op":150,"w":456,"h":456,"nm":"Comp 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Layer 3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306,396,0],"ix":2},"a":{"a":0,"k":[75.25,71.014,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[7.751,144.013],[7.751,6.279],[7.688,9.634],[155.75,158.513]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ef":[{"ty":22,"nm":"Stroke","np":13,"mn":"ADBE Stroke","ix":1,"en":1,"ef":[{"ty":10,"nm":"Path","mn":"ADBE Stroke-0001","ix":1,"v":{"a":0,"k":1,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Stroke-0010","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Stroke Sequentially","mn":"ADBE Stroke-0011","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":2,"nm":"Color","mn":"ADBE Stroke-0002","ix":4,"v":{"a":0,"k":[1,0,0,1],"ix":4}},{"ty":0,"nm":"Brush Size","mn":"ADBE Stroke-0003","ix":5,"v":{"a":0,"k":9,"ix":5}},{"ty":0,"nm":"Brush Hardness","mn":"ADBE Stroke-0004","ix":6,"v":{"a":0,"k":0.95,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Stroke-0005","ix":7,"v":{"a":0,"k":1,"ix":7}},{"ty":0,"nm":"Start","mn":"ADBE Stroke-0008","ix":8,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":152.152,"s":[0]},{"t":180.1796875,"s":[100]}],"ix":8}},{"ty":0,"nm":"End","mn":"ADBE Stroke-0009","ix":9,"v":{"a":1,"k":[{"i":{"x":[0.172],"y":[1]},"o":{"x":[0.03],"y":[0]},"t":30.029,"s":[0]},{"t":100.234375,"s":[100]}],"ix":9}},{"ty":7,"nm":"Spacing","mn":"ADBE Stroke-0006","ix":10,"v":{"a":0,"k":15,"ix":10}},{"ty":7,"nm":"Paint Style","mn":"ADBE Stroke-0007","ix":11,"v":{"a":0,"k":3,"ix":11}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.474,0],[0,-3.617],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[-1.222,-1.222],[-3.085,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-64.757,-68.995],[-68.956,-70.763],[-75,-64.751],[-75,70.763],[-59,54.764],[-59,-40.609],[52.373,70.763],[75,70.763]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.484022671569,0.636371507832,0.729563455021,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,71.014],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[],"o":[],"v":[],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.484022671569,0.636371507832,0.729563455021,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,0.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1801.8018018018,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 1","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306,384.819,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[95.303,95.303,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[166.156,166.156],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1.078,2.078],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1801.8018018018,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 1 Outlines","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.127,"y":1},"o":{"x":0.057,"y":1},"t":0,"s":[152,548.995,0],"to":[25.667,-25.667,0],"ti":[0,-0.001,0]},{"i":{"x":0.473,"y":0},"o":{"x":0,"y":0},"t":152.195,"s":[306,394.995,0],"to":[0,0,0],"ti":[35.889,-35.89,0]},{"i":{"x":1,"y":1},"o":{"x":0.331,"y":0.249},"t":170.17,"s":[237.095,463.902,0],"to":[-34.868,34.869,0],"ti":[12.648,-12.649,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":178.975,"s":[152,549,0],"to":[0,0,0],"ti":[0,0,0]},{"t":238.23828125,"s":[152,549,0]}],"ix":2},"a":{"a":0,"k":[75.25,72.019,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-5.345]],"o":[[0,0],[0,0],[0,0],[3.779,-3.78],[0,0]],"v":[[75,71.769],[-75,71.769],[0,-3.231],[64.758,-67.989],[75,-63.746]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.075079637415,0.091803689096,0.154072346407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,72.019],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1801.8018018018,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"logo","refId":"comp_0","sr":0.666666,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[228,228,0],"ix":2},"a":{"a":0,"k":[306,396,0],"ix":1},"s":{"a":0,"k":[178,178,100],"ix":6}},"ao":0,"w":612,"h":792,"ip":0,"op":161.494666666667,"st":0,"bm":0}],"markers":[]}')},82:function(e,t,n){e.exports=n(148)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.0ee61e9d.chunk.js.map