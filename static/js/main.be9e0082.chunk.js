(this.webpackJsonpsideroomrecordings=this.webpackJsonpsideroomrecordings||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/RecordingGif.ecf3b3d2.gif"},22:function(e,t,a){e.exports=a.p+"static/media/Studio.4f7561e7.gif"},35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/cursor.cb9702b5.cur"},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),o=a.n(r),i=(a(40),a(7),a(9));var c,s,m,d,u=function(){var e={color:"white"};return l.a.createElement("nav",{className:"puttoback"},l.a.createElement("ul",{className:"nav-links"},l.a.createElement(i.b,{style:e,to:"/Basic-Website-To-React"},l.a.createElement("li",null,"Home")),l.a.createElement(i.b,{style:e,to:"/about"},l.a.createElement("li",null,"About")),l.a.createElement(i.b,{style:e,to:"/projects"},l.a.createElement("li",null,"Projects"))))};function g(e,t){for(c=document.getElementsByClassName("showMore"),s=0;s<c.length;s++)c[s].style.display="block";for(c=document.getElementsByClassName("button_slide"),s=0;s<c.length;s++)c[s].style.display="none"}function p(e,t){for(m=document.getElementsByClassName("dot"),d=0;d<m.length;d++)m[d].style.cssText="  justify-content: center;animation-name:stretch; animation-duration: 0.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;";for(m=document.getElementsByClassName("addInfo"),d=0;d<m.length;d++)m[d].style.cssText="display:flex;animation-name:fadein;animation-duration: 0.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;"}var h,E,w,y=a(11),v=a(12),f=a(14),b=a(13),N=a(33),k=a.n(N),C=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).Sketch=function(e){var t,a,n,l,r,o=3,i=[],c=[],s=[],m=0,d=!1,u=!1,g=!1,p=!1,h=0;e.random_boolean;e.centerCanvas=function(){(e.windowWidth-e.width)/2,(e.windowHeight-e.height)/2,l.position(0,120)},e.setup=function(){r=e.color(255,204,0),l=e.createCanvas(e.windowWidth-20,e.windowHeight),e.centerCanvas(),o=e.random(1,5),t=e.random(1,5),a=t,1==(n=e.int(e.random(1,5)))&&(d=!0),2==n&&(u=!0),3==n&&(g=!0),4==n&&(p=!0),e.createCanvas(e.windowWidth-20,e.windowHeight),e.width/2,e.height/2;for(var c=0;c<100;c++)i[c]=new E(e.random(e.int(e.width)),e.random(e.int(e.height)),o,o,t,a,Math.random()>=.5,Math.random()>=.5,0)},e.draw=function(){i.forEach((function(t){e.noStroke(),t.display()}))},e.mouseClicked=function(){1==(h+=1)?r=e.color(20,159,157):2==h?r=e.color(238,243,220):3==h&&(r=e.color(233,94,87),h=0)},e.windowResized=function(){e.resizeCanvas(e.windowWidth-20,e.windowHeight),e.centerCanvas()};var E=function a(n,l,o,i,h,E,w,v,f){var b=this;Object(y.a)(this,a),this.display=function(){if(b.y<=2&&(b.y=3,b.directionup=!1),b.y>=e.height&&(b.directionup=!0,b.y=e.height-1),b.x<=2&&(b.directionleft=!1,b.x=3),b.x>=e.width&&(b.directionleft=!0,b.x=e.width-1),b.directionup?b.y=b.y-b.wiggleamount-t/2:b.y=b.y+b.wiggleamount+t/2,b.directionleft?b.x=b.x-t+b.wiggleamount/2:b.x=b.x+t-b.wiggleamount/2,d&&(1==b.wiggletoggle&&(b.wiggleamount=b.wiggleamount-1),2==b.wiggletoggle&&(b.wiggleamount=b.wiggleamount-1),3==b.wiggletoggle&&(b.wiggleamount=b.wiggleamount-1),4==b.wiggletoggle&&(b.wiggleamount=b.wiggleamount+1),5==b.wiggletoggle&&(b.wiggleamount=b.wiggleamount+1),6==b.wiggletoggle&&(b.wiggleamount=b.wiggleamount+1,b.wiggletoggle=0)),1==u&&(3==b.wiggletoggle&&(b.wiggleamount=-1*b.wiggleamount),6==b.wiggletoggle&&(b.wiggleamount=-1*b.wiggleamount,b.wiggletoggle=0)),1==p&&(0==b.wiggletoggle&&(b.wiggleamount=8),2==b.wiggletoggle&&(b.wiggleamount=0),12==b.wiggletoggle&&(b.wiggleamount=-8),14==b.wiggletoggle&&(b.wiggleamount=0),24==b.wiggletoggle&&(b.wiggleamount=8,b.wiggletoggle=0)),1==g&&(1==b.wiggletoggle&&(b.wiggleamount=8),2==b.wiggletoggle&&(b.wiggleamount=0),8==b.wiggletoggle&&(b.wiggletoggle=0)),b.wiggletoggle==b.wiggletoggle){c[m]=b.x,s[m]=b.y,m++,e.fill(r),1==m&&(m=0);for(var a=0;a<c.length;a++)e.ellipse(c[a],s[a],4,4)}b.wiggletoggle++},this.x=n,this.y=l,this.directionup=w,this.directionleft=v,this.wiggleamount=o,this.wiggleamount1=h,this.wiggletoggle=f}},n.myRef=l.a.createRef(),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.myP5=new k.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return l.a.createElement("div",{ref:this.myRef})}}]),a}(l.a.Component),B="rgb(230,76,67)",x="rgb(235,109,127)",P="rgb(234,176,0)",R="rgb(1,143,152)";function S(e,t,a,n){for(h=B,B=x,x=P,P=R,R=h,E=document.getElementsByClassName("color1"),w=0;w<E.length;w++)E[w].style.backgroundColor=B;for(E=document.getElementsByClassName("color2"),w=0;w<E.length;w++)E[w].style.color=x;for(E=document.getElementsByClassName("color3"),w=0;w<E.length;w++)E[w].style.color=P;for(E=document.getElementsByClassName("color4"),w=0;w<E.length;w++)E[w].style.backgroundColor=R}a(21),a(22),a(45);var I=a(34),T=a.n(I);l.a.Component;var H=function(){return l.a.createElement("div",{onClick:S,style:{cursor:"/cursor.cur"}},l.a.createElement("div",{className:"wrapper color1 color2"},l.a.createElement(C,null),l.a.createElement("div",{className:"page1",id:"page1"},l.a.createElement("h1",{className:"title color3",id:"title"},"SIDE ROOM",l.a.createElement("br",null),"RECORDINGS"),l.a.createElement("h1",{className:"title1",id:"side"},"SIDE ROOM",l.a.createElement("br",null),"RECORDINGS ")),l.a.createElement("div",{className:"borders color1"}),l.a.createElement("div",{className:"page2",id:"page2 color1"},l.a.createElement("div",{className:"playContainer"},l.a.createElement("img",{className:"gifRecording",src:a(21)}),l.a.createElement("div",{className:"PlayBox"},l.a.createElement("div",{className:"playButton color4"},l.a.createElement("p",{className:"play"},"PLAY"))))),l.a.createElement("div",{className:"borders color1"}),l.a.createElement("div",{className:"page3 color1",id:"page3"},l.a.createElement("div",{className:"aboutGifContainer"},l.a.createElement("img",{className:"aboutGif",src:a(22)})),l.a.createElement("div",{className:"aboutpcontainer"},l.a.createElement("div",{className:"aboutP"},l.a.createElement("h4",null,"Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath, Somerset, England, near its counter-part Bristol."),l.a.createElement("h4",{className:"showMore"},"Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat"),l.a.createElement("h4",{className:"showMore"}," The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have"),l.a.createElement("a",{className:"showMore",href:"About",target:"_self"},"The full Story")),l.a.createElement("div",{className:"button_slide slide_left",onClick:g},"Find Out More"))),l.a.createElement("div",{className:"borders color1"}),l.a.createElement("div",{className:"page4 color1",id:"page4"},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"videoContainer"},l.a.createElement("div",{className:"innerVideoContainer v1"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/dT3501_Zhes",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin")),l.a.createElement("div",{className:"vBorders "})),l.a.createElement("div",{className:"innerVideoContainer v2"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/yI2oS2hoL0k",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead")),l.a.createElement("div",{className:"vBorders "}))),l.a.createElement("div",{className:"videoContainer"},l.a.createElement("div",{className:"innerVideoContainer v3"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/-bh_AOQgQ3Q",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish")),l.a.createElement("div",{className:"vBorders "})),l.a.createElement("div",{className:"innerVideoContainer v4"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/Ew0vDD4kesA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper")),l.a.createElement("div",{className:"vBorders "}))),l.a.createElement("a",{id:"MPLink",href:"Projects",target:"_self"},"More Projects")),l.a.createElement("div",{className:"borders"}),l.a.createElement("div",{className:"page5 color1",id:"page5"},l.a.createElement("h2",null,"Packages"),l.a.createElement("div",{className:"dotcontainer"},l.a.createElement("div",{className:"dotInnerContainer"},l.a.createElement("div",{className:"dot color4",onClick:p},l.a.createElement("h4",null,"\xa350")," ",l.a.createElement("h4",null,"1 x Track"),l.a.createElement("h4",null,"Solo"),l.a.createElement("p",{className:"addInfo"},"One track any instrument within a 15mile radius of bath")),l.a.createElement("div",{className:"dot color4",onClick:p},l.a.createElement("h4",null,"\xa370")," ",l.a.createElement("h4",null,"1 x Track")," ",l.a.createElement("h4",null,"Duo "),l.a.createElement("p",{className:"addInfo"},"Two track any instrument within a 15mile radius of bath"))),l.a.createElement("div",{className:"dotInnerContainer"},l.a.createElement("div",{className:"dot color4",onClick:p},l.a.createElement("h4",null,"\xa3100")," ",l.a.createElement("h4",null,"1 x Song ")," ",l.a.createElement("h4",null,"Full"),l.a.createElement("p",{className:"addInfo"},"One Song any number of instrument within a 15mile radius of bath")),l.a.createElement("div",{className:"dot color4",onClick:p},l.a.createElement("h4",null,"\xa3300")," ",l.a.createElement("h4",null,"1 x Album")," ",l.a.createElement("h4",null,"Info"),l.a.createElement("p",{className:"addInfo"},"Ten Songs any number of instrument within a 15mile radius of bath")))),l.a.createElement("div",{className:"border5"})),l.a.createElement("div",{className:"page6 color1 color2"},l.a.createElement("div",{className:"container color4 color2"},l.a.createElement("form",{action:"/action_page.php"},l.a.createElement("h3",null,"Quick Contact"),l.a.createElement("p",null,"Contact us today, and get reply with in 24 hours!"),l.a.createElement("input",{type:"text",placeholder:"Your name.."}),l.a.createElement("input",{type:"text",placeholder:"Your Number.."}),l.a.createElement("input",{type:"text",placeholder:"Your Email.."}),l.a.createElement("textarea",{id:"subject",placeholder:"Write something.."}),l.a.createElement("input",{type:"submit",value:"Submit"}))))))};var V=function(){return l.a.createElement("div",{class:"aboutPage"},l.a.createElement("h1",null,"About In Full"),l.a.createElement("p",{className:"aboutPageP"},"Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath, Somerset, England, near its counter-part Bristol.",l.a.createElement("br",null),"Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat",l.a.createElement("br",null),"The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have",l.a.createElement("br",null),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ..."),l.a.createElement("p",{className:"aboutPageP"},"Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath, Somerset, England, near its counter-part Bristol.",l.a.createElement("br",null),"Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat",l.a.createElement("br",null),"The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have",l.a.createElement("br",null),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ..."))};var M=function(){return l.a.createElement("div",{className:"projectsDiv"},l.a.createElement("div",{className:"page4 color1",id:"page4"},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"videoContainer"},l.a.createElement("div",{className:"innerVideoContainer v1"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/dT3501_Zhes",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin"),l.a.createElement("p",null,"PortErin")),l.a.createElement("div",{className:"vBorders "})),l.a.createElement("div",{className:"innerVideoContainer v2"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/yI2oS2hoL0k",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead"),l.a.createElement("p",null,"RadioHead")),l.a.createElement("div",{className:"vBorders "}))),l.a.createElement("div",{className:"videoContainer"},l.a.createElement("div",{className:"innerVideoContainer v3"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/-bh_AOQgQ3Q",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish"),l.a.createElement("p",null,"The Brackish")),l.a.createElement("div",{className:"vBorders "})),l.a.createElement("div",{className:"innerVideoContainer v4"},l.a.createElement("iframe",{className:"PVideo ",title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/Ew0vDD4kesA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("div",{className:"VtextContainer"},l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper"),l.a.createElement("p",null,"Nick Harper")),l.a.createElement("div",{className:"vBorders "}))),l.a.createElement("p",null,"More Information Here"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))},L=a(1);var O=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App color1 color3",id:"app"},l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),l.a.createElement(u,null),l.a.createElement(L.c,null,l.a.createElement(L.a,{path:"/Basic-Website-To-React",exact:!0,component:H}),l.a.createElement(L.a,{path:"/About",exact:!0,component:V}),l.a.createElement(L.a,{path:"/Projects",exact:!0,component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.be9e0082.chunk.js.map