(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Jon Snow",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553",clicked:!1},{id:2,name:"Daenerys Targaryen",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128",clicked:!1},{id:3,name:"Jaime Lannister",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Jaime.jpg/revision/latest/scale-to-width-down/593?cb=20170818052054",clicked:!1},{id:4,name:"Arya Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Arya_the_dragon_and_the_wolf_s7.jpg/revision/latest?cb=20170828062911",clicked:!1},{id:5,name:"Sansa Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest?cb=20170828072803",clicked:!1},{id:6,name:"Tyrion Lannister",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344",clicked:!1},{id:7,name:"Margaery Tyrell",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/b/b5/Margaery_Tyrell_S6.png/revision/latest?cb=20160729224605",clicked:!1},{id:8,name:"Night King",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/1/1f/Night_King_BTW.jpg/revision/latest?cb=20171013162809",clicked:!1},{id:9,name:"Khal Drogo",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/1/1f/Drogo_1x01b.jpg/revision/latest?cb=20110626031733",clicked:!1},{id:10,name:"Cersei Lannister",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest?cb=20170828071355",clicked:!1},{id:11,name:"Bran Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/d/d8/%22It%27s_Wasted_On_A_Cripple%22.png/revision/latest?cb=20171006183914",clicked:!1},{id:12,name:"Brienne of Tarth",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Brienne.PNG/revision/latest?cb=20170822095536",clicked:!1}]},,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),o=n.n(r),c=n(7),s=n(4),l=n(5),m=n(8),g=n(6),d=n(9);n(16);var u=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.chooseFriend(e.id)}})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null," ",e.name)))))};n(18);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};n(20);var f=function(e){return i.a.createElement("h1",{className:"title"},e.children,i.a.createElement("br",null))},k=n(1);var p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={friends:k,curScore:0,topScore:0,status:"",clickArray:[]},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(k);n.setState({friends:e}),n.render()},n.chooseFriend=function(e){console.log({id:e});var t=k.filter(function(t){return t.id===e});console.log({clickArray:t}),t?n.handleIncrement():n.setState({clickArray:[].concat(Object(c.a)(n.state.clickArray),[e])})},n.winGame=function(){n.setState({curScore:0,status:"You won! - Play Again"}),n.handleShuffle()},n.resetGame=function(){n.setState({curScore:0,status:"Wrong answer - Play Again"}),n.handleShuffle()},n.handleIncrement=function(){var e=n.state.curScore+1;n.setState({curScore:e}),e>=n.state.topScore&&(n.setState({topScore:e}),n.handleShuffle()),e>=12&&(n.setState({status:"You will sit on the IRON THRONE",topScore:12,clicked:!1}),13===e&&n.winGame())},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"jumbotron"},i.a.createElement(f,null," Game of Thrones Clicky Game",i.a.createElement("br",null),i.a.createElement("p",null,"Current Score:  ",this.state.curScore,"  |  Top Score: ",this.state.topScore),i.a.createElement("p",null,"  ",this.state.status," ")),"   ")),this.state.friends.map(function(t){return i.a.createElement(u,{chooseFriend:function(){return e.chooseFriend(t.id)},handleIncrement:e.handleIncrement,handleShuffle:e.handleShuffle,id:t.id,key:t.id,name:t.name,image:t.image,clicked:t.clicked})}))}}]),t}(a.Component);n(22);o.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.1bd58a85.chunk.js.map