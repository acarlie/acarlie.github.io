(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],[,function(e,a,t){e.exports={container:"App_container__19kyE",container__dark:"App_container__dark__2hvdN",container__dark_gradient:"App_container__dark_gradient__39LRm",container__light:"App_container__light__1xBWj",row:"App_row__3t_p1",row__100:"App_row__100__29cfl",row__inner:"App_row__inner__4mEll",row__inner_divided:"App_row__inner_divided__2xxRo",row__stacked:"App_row__stacked__2ll_F",row__center:"App_row__center__5KqNn",col__center:"App_col__center__1krkb",col:"App_col__hjVuq",col__dk:"App_col__dk__2EOrP",splash:"App_splash__1Vxrf",splash_nav:"App_splash_nav__zaQpP",footer:"App_footer__3hZpG",col__1:"App_col__1__3qWPG",col__2:"App_col__2__C2dpv",col__3:"App_col__3__2EV0n",col__4:"App_col__4__3JPLk",col__5:"App_col__5__1MmEc",col__6:"App_col__6__YN26A"}},function(e,a,t){e.exports={svg:"Logo_svg__tGJ-r",stroke:"Logo_stroke__Kry66",draw:"Logo_draw__2WU04"}},function(e,a,t){e.exports={item:"PortfolioItem_item__gS5xS",inner:"PortfolioItem_inner__1PmMq",even:"PortfolioItem_even__17cWC",odd:"PortfolioItem_odd__24N1Y",img_cont:"PortfolioItem_img_cont__1zA1R",info:"PortfolioItem_info__2609E",img:"PortfolioItem_img__3xi0i"}},function(e,a,t){e.exports={list:"SocialLinks_list__1u86w",item:"SocialLinks_item__2MZko"}},function(e,a,t){e.exports={link:"Link_link__28y7d",inner:"Link_inner__2yezk"}},function(e,a,t){e.exports={link:"InPageLink_link__3ByEE",arrow:"InPageLink_arrow__1WMrk",up:"InPageLink_up__OiJ0E"}},function(e,a,t){e.exports={link:"SocialLink_link__2axjJ",span:"SocialLink_span__3zTgg"}},function(e,a,t){e.exports={container:"Headshot_container__1M29e",image:"Headshot_image__1jK2V"}},,,,,,function(e,a,t){e.exports={wrapper:"Portfolio_wrapper__2l7Wo"}},function(e,a,t){e.exports=t.p+"static/media/profile_square.d5a59ed9.png"},function(e,a,t){e.exports=t.p+"static/media/AmeliaCarlie_Resume.34d2f4d0.pdf"},function(e,a,t){e.exports=t.p+"static/media/AmeliaCarlie_DesignPortfolio.6c48556c.pdf"},,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(10),l=t.n(s),i=t(11),o=t(12),c=t(18),m=t(13),_=t(19),p=t(7),d=t.n(p),h=t(4),g=t.n(h);function u(e){return n.a.createElement("a",{className:d.a.link,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.ariaLabel},n.a.createElement("span",{className:"fab fa-"+e.icon+" "+d.a.span}))}var E=function(){return n.a.createElement("ul",{className:g.a.list},n.a.createElement("li",{className:g.a.item},n.a.createElement(u,{url:"https://www.linkedin.com/in/acarlie",icon:"linkedin-in",ariaLabel:"View Linked In profile for Amelia Carlie, opens in new tab"})),n.a.createElement("li",{className:g.a.item},n.a.createElement(u,{url:"https://github.com/acarlie",icon:"github",ariaLabel:"View GitHub profile for Amelia Carlie, opens in new tab"})),n.a.createElement("li",{className:g.a.item},n.a.createElement(u,{url:"https://codepen.io/acarlie/",icon:"codepen",ariaLabel:"View CodePen profile for Amelia Carlie, opens in new tab"})))},N=t(14),k=t.n(N),f=t(3),v=t.n(f),w=t(5),b=t.n(w);var y=function(e){var a=e.blank,t=e.href;return n.a.createElement(n.a.Fragment,null,a&&n.a.createElement("a",{className:b.a.link,href:t,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:b.a.inner},e.children,n.a.createElement("span",{className:"sr_only"},", opens in new tab"))),!a&&n.a.createElement("a",{className:b.a.link,href:t},n.a.createElement("span",{className:b.a.inner},e.children)))};function M(e){var a=e.odd?v.a.odd:v.a.even,t=e.url.indexOf("codepen")>-1;return n.a.createElement("li",{className:v.a.item},n.a.createElement("div",{className:v.a.inner+" "+a},n.a.createElement("div",{className:v.a.img_cont},n.a.createElement("img",{className:v.a.img,src:"/assets/images/sm/"+e.img,alt:e.desc})),n.a.createElement("div",{className:v.a.info},e.even,n.a.createElement("h3",{className:"heading__6 heading__uppercase_sm"},e.title),n.a.createElement("div",{className:"text__small"},e.desc),n.a.createElement("ul",{className:"list__links text__small"},e.url&&!t&&n.a.createElement("li",{className:"list_item__link"},n.a.createElement(y,{href:e.url,blank:!0},"View the deployment ",n.a.createElement("span",{className:"sr_only"},"of ",e.title),"  \u27f6 ")),e.url&&t&&n.a.createElement("li",{className:"list_item__link"},n.a.createElement(y,{href:e.url,blank:!0},"View ",n.a.createElement("span",{className:"sr_only"},e.title)," on CodePen \u27f6  ")),e.repo&&n.a.createElement("li",{className:"list_item__link"},n.a.createElement(y,{href:e.repo,blank:!0},"View the repo ",n.a.createElement("span",{className:"sr_only"},"for ",e.title)," \u27f6  "))))))}var A=function(e){return n.a.createElement("div",{className:k.a.wrapper},n.a.createElement("ul",{id:"portfolio"},e.items&&e.items.map((function(e,a){return n.a.createElement(M,{key:a,odd:a%2,title:e.title,img:e.img,url:e.url,repo:e.repo,desc:e.desc})}))))},S=t(6),j=t.n(S);var x=function(e){var a=e.href,t=e.ariaLabel,r=e.up;return n.a.createElement("a",{className:j.a.link,href:a,"aria-label":t},n.a.createElement("svg",{className:j.a.arrow,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 37.742 56.307"},n.a.createElement("g",{className:r?j.a.up:j.a.down},n.a.createElement("path",{d:"M18.864 1.5v52.189"}),n.a.createElement("path",{d:"M2.121 37.436l16.75 16.75 16.75-16.75"}))))},I=t(2),L=t.n(I);var C=function(e){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:L.a.svg,viewBox:"0 0 841.04 80.75"},n.a.createElement("path",{className:L.a.stroke,d:"M319.53 6.23v71.64"}),n.a.createElement("path",{className:L.a.stroke,d:"M144.22 16.16v61.35"}),n.a.createElement("path",{className:L.a.stroke,d:"M82.18 77.51V5.87l31.34 36.18 30.7-36.18"}),n.a.createElement("path",{className:L.a.stroke,d:"M223.31 6.24h-62.04v71.27h61.99"}),n.a.createElement("path",{className:L.a.stroke,d:"M171.56 41.87h42.34"}),n.a.createElement("path",{className:L.a.stroke,d:"M240.46 6.23v71.64"}),n.a.createElement("path",{className:L.a.stroke,d:"M250.74 77.87h51.76"}),n.a.createElement("path",{className:L.a.stroke,d:"M2.69 77.33L33.71 6.05l31.02 71.28"}),n.a.createElement("path",{className:L.a.stroke,d:"M18.28 41.69h20.5"}),n.a.createElement("path",{className:L.a.stroke,d:"M336.67 77.33l31.02-71.28 31.02 71.28"}),n.a.createElement("path",{className:L.a.stroke,d:"M383.12 41.69h-20.5"}),n.a.createElement("path",{className:L.a.stroke,d:"M838.35 6.24h-62.04v71.27h61.99"}),n.a.createElement("path",{className:L.a.stroke,d:"M786.6 41.87h42.34"}),n.a.createElement("path",{className:L.a.stroke,d:"M680.21 6.23v71.64"}),n.a.createElement("path",{className:L.a.stroke,d:"M690.49 77.87h51.76"}),n.a.createElement("path",{className:L.a.stroke,d:"M504.63 6.23h-26.22a35.82 35.82 0 000 71.64h26.22"}),n.a.createElement("path",{className:L.a.stroke,d:"M759.28 6.23v71.64"}),n.a.createElement("path",{className:L.a.stroke,d:"M521.93 77.33l31.02-71.28 31.03 71.28"}),n.a.createElement("path",{className:L.a.stroke,d:"M537.52 41.69h20.5"}),n.a.createElement("path",{className:L.a.stroke,d:"M630.65 41.69l32.39 35.82"}),n.a.createElement("path",{className:L.a.stroke,d:"M601 77.51V5.87h29.65a17.91 17.91 0 010 35.82h-19.4"}))},B=t(8),P=t.n(B),T=t(15),G=t.n(T);var J=function(e){return n.a.createElement("div",{className:P.a.container},n.a.createElement("img",{className:P.a.image,src:G.a,alt:"Headshot photograph"}))},Q=t(1),D=t.n(Q),R=[{title:"All Things {Front-End}",img:"all-things-front-end-sm.jpg",desc:"'All Things {Front-End}' is an article scraper where users can add notes and save articles. Created with Node.js, MongoDB, Express, Handlebars, Sass, BEM, Gulp, Cheerio, and Axios.",tags:["MongoDB","Node","Sass","Express","Sass","UI/UX","Mobile-First"],url:"https://all-things-fe.herokuapp.com/",repo:"https://github.com/acarlie/all_things_front-end"},{title:"Remember It",img:"remember-it-sm.jpg",desc:"'Remember It' is a memory game created with React.",tags:["React"],url:"http://acarlie.com/remember_it/",repo:"https://github.com/acarlie/remember_it"},{title:"Giphy Search",img:"giphy-2-sm.jpg",desc:"'Giphy Search' was created using Giphy's API. Users can favorite gifs and copy gif embed links. Designed mobile first.",tags:["jQuery","AJAX","Mobile-First","UI/UX"],url:"https://acarlie.com/Giphy_Search/",repo:"https://github.com/acarlie/Giphy_Search"},{title:"Angular To Do App",img:"angular-to-do-sm.jpg",desc:"To do list application created with Angular, SCSS, and BEM. Tasks are saved in local storage.",tags:["Angular","Sass","BEM"],url:"http://acarlie.com/angular_to_do/",repo:"https://github.com/acarlie/angular_to_do"},{title:"Movie Comparison App",img:"movie-comp-sm.jpg",desc:"Movie comparison app created with AJAX, jQuery, Chart.js, and Materialize. Designed mobile first.",tags:["jQuery","UI/UX","Materialize","AJAX","Mobile-First"],url:"https://acarlie.com/movie_comparison_app/",repo:"https://github.com/acarlie/movie_comparison_app"},{title:"Bamazon",img:"bamazon.gif",desc:"Node.js and MySQL inventory management app with customer, manager, and supervisor views.",tags:["Node","MySQL"],url:"",repo:"https://github.com/acarlie/bamazon"},{title:"Responsive Nav with jQuery Scroll-spy",img:"scrollspy-nav-sm.jpg",desc:"Mobile responsive nav with scroll-spy.",tags:["CSS, jQuery"],url:"https://codepen.io/acarlie/pen/JjPKmmV",repo:""},{title:"Burger App",img:"burger-app-sm.jpg",desc:"CRUD app created with Node.js, Express, Handlebars, MySQL, jQuery, and Bootstrap.",tags:["jQuery","Bootstrap","MySQL","Node","Express","Handlebars"],url:"https://blooming-falls-67802.herokuapp.com/",repo:"https://github.com/acarlie/burger"},{title:"Google Books Search",img:"google-books-sm.jpg",desc:"'Google Books Search' searches the Google Books API for books and allows users to save books. 'Google Books Search' is a full-stack MERN (Mongo, Express, React, Node) app using the Antd React component library.",tags:["MERN","Node","MongoDB","React","Express"],url:"https://books-search-mern.herokuapp.com/",repo:"https://github.com/acarlie/google_books_search"},{title:"Color Me ____.",img:"color-me-4-sm.jpg",desc:"'Color Me ___' is a word guessing game created with Vanilla JS.",tags:["Vanilla JS","UI/UX"],url:"https://acarlie.com/Color_Me",repo:"https://github.com/acarlie/Color_Me"},{title:"Vanilla JS Typewriter",img:"typewriter-sm.jpg",desc:"Vanilla JS typerwiter created using setInterval, clearInterval, setTimeout, and ES6 classes.",tags:["Vanilla JS"],url:"https://codepen.io/acarlie/pen/KOqmPN",repo:""},{title:"Women of Scifi and Fantasy Trivia",img:"trivia-game-sm.jpg",desc:"Timed trivia game created with jQuery and JavaScript.",tags:["jQuery"],url:"https://acarlie.com/Trivia_Game/",repo:"https://github.com/acarlie/Trivia_Game"},{title:"Liri Node App",img:"liri_spotify-this-sm.png",desc:"Node CLI App for searching OMDB, Spotify, and Bands in Town. Created with ES6, Node, Axios, Inquirer.js, and Moment.js.",tags:["ES6","Node"],url:"",repo:"https://github.com/acarlie/liri_node_app"},{title:"Humun",img:"humun-sm.jpg",desc:"Humun is an app that empowers you to contribute in the most effective ways to the causes you care about, and makes it easier than ever to maintain and enhance your positive impact over time.",tags:["React","UI/UX","MERN"],url:"https://humun-app.herokuapp.com/",repo:"https://github.com/acarlie/humun"},{title:"Train Scheduler",img:"train-schedule-sm.jpg",desc:"Train scheduling app created using jQuery, Firebase, and Materialize.",tags:["jQuery","Firebase","Materialize"],url:"https://acarlie.com/Train_Scheduler/",repo:"https://github.com/acarlie/Train_Scheduler"},{title:"A Stranger Game",img:"a-stranger-game-2-sm.jpg",desc:"Player vs algorithm game created using jQuery and JavaScript.",tags:["jQuery"],url:"https://acarlie.com/Stranger_Things_Game/",repo:"https://github.com/acarlie/Stranger_Things_Game"},{title:"CLI Word Guessing Game",img:"example.gif",desc:"Node.js word guessing game using JavaScript constructors.",tags:["Node"],url:"",repo:"https://github.com/acarlie/Constructor_Word_Guess"}],V=t(16),U=t.n(V),W=t(17),F=t.n(W),z=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={loaded:!1,loader:""},t}return Object(_.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("main",null,n.a.createElement("section",{className:D.a.container+" "+D.a.container__dark,id:"home"},n.a.createElement("div",{className:D.a.splash+" "+D.a.row+" "+D.a.row__100+" "+D.a.row__center},n.a.createElement("div",{className:D.a.col},n.a.createElement(C,null),n.a.createElement("h1",{className:D.a.row__stacked+" heading__5 heading__uppercase"},n.a.createElement("span",{className:"sr_only"},"Amelia Carlie"),"Frontend Developer")),n.a.createElement("div",{className:D.a.splash_nav},n.a.createElement(x,{href:"#about",ariaLabel:"About me",down:!0})))),n.a.createElement("section",{className:D.a.container+" "+D.a.container__light,id:"about"},n.a.createElement("h2",{className:"sr_only"},"About"),n.a.createElement("div",{className:D.a.row+" "+D.a.row__100},n.a.createElement("div",{className:D.a.col+" "+D.a.col__3+" "+D.a.col__center+" "+D.a.col__dk},n.a.createElement(J,null)),n.a.createElement("div",{className:D.a.col+" "+D.a.col__3+" "+D.a.col__center},n.a.createElement("div",null,n.a.createElement("div",{className:D.a.row__inner_divided},n.a.createElement("p",{className:" text__large"},"I am a frontend developer passionate about UI/UX. With 5 years experience in the graphic design field, I am now applying my knowledge of color theory and composition to my development projects."),n.a.createElement("div",{className:D.a.row__stacked},n.a.createElement("ul",{className:"list__links"},n.a.createElement("li",{className:"list_item__link"},n.a.createElement(y,{href:U.a,blank:!0},"Download my resume \u2192")),n.a.createElement("li",{className:"list_item__link"},n.a.createElement(y,{href:F.a,blank:!0},"Download my design portfolio \u2192"))))),n.a.createElement("div",{className:D.a.row__inner_divided},n.a.createElement("ul",{className:"text__small"},n.a.createElement("li",{className:"list_item"},n.a.createElement("h3",{className:"heading__6 heading__uppercase_sm"},"Frontend"),"JavaScript, React, Angular, TypeScript, HTML5, CSS3, Sass, Web Accessibility"),n.a.createElement("li",{className:"list_item"},n.a.createElement("h3",{className:"heading__6 heading__uppercase_sm"},"Backend"),"Node.js, Express, MySQL, MongoDB"),n.a.createElement("li",{className:"list_item"},n.a.createElement("h3",{className:"heading__6 heading__uppercase_sm"},"Design Tools"),"PhotoShop, Illustrator, InDesign, Adobe XD, Figma"),n.a.createElement("li",{className:"list_item"},n.a.createElement("h3",{className:"heading__6 heading__uppercase_sm"},"Design"),"Color Theory, Illustration, Typography, Branding, Composition"))))))),n.a.createElement("section",{className:D.a.container+" "+D.a.container__dark,id:"work"},n.a.createElement("h2",{className:"sr_only"},"Work"),n.a.createElement("div",{className:D.a.row},n.a.createElement(A,{items:R})))),n.a.createElement("footer",{className:D.a.footer},n.a.createElement("h2",{className:"heading__5 heading__uppercase"},"Connect with me"),n.a.createElement(E,null),n.a.createElement(x,{href:"#home",ariaLabel:"Back to top",up:!0})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.5e55939b.chunk.js.map