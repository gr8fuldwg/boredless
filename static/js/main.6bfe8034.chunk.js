(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(62)},29:function(e,t,a){},41:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(5),r=a.n(o),c=(a(27),a(29),a(16)),i=a(17),s=a(20),m=a(18),d=a(21),h=a(2),u=a(6),b=a.n(u),f=(a(41),a(19)),p=a.n(f),v=document.getElementById("root");b.a.setAppElement(v);var O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={modalOpen:!1,activity:"",error:null},a.handleModalOpen=a.handleModalOpen.bind(Object(h.a)(Object(h.a)(a))),a.handleModalClose=a.handleModalClose.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleModalOpen",value:function(){var e=this;p.a.get("https://boredapi.com/activity").then(function(t){var a=t.data.activity;e.setState({modalOpen:!0,activity:a,error:null})}).catch(function(t){e.setState({error:t})})}},{key:"handleModalClose",value:function(){this.setState({modalOpen:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"vh-100  bg-green flex-column flex justify-center items-center"},this.state.error&&l.a.createElement("div",{className:"red bg-black f4 mb4 h3 w5"},"Error: ",this.state.error.message," "),l.a.createElement("button",{className:"f1 b--none outline-transparent br-100 h5 w5 dim ph3 pv2 mb2 dib white bg-black",onClick:this.handleModalOpen},"Bored?"),l.a.createElement(b.a,{closeTimeoutMS:150,isOpen:this.state.modalOpen},l.a.createElement("div",{className:"flex flex-column h-100"},l.a.createElement("header",{className:"flex justify-end"},l.a.createElement("button",{className:"f1 ph3 pv2 mb2 dib white bg-black b--none",onClick:this.handleModalClose},"X")),l.a.createElement("main",{className:"flex-grow-1 flex flex-column justify-center items-center"},l.a.createElement("h1",null,"Here is something you can do..."),l.a.createElement("p",null,this.state.activity)),l.a.createElement("footer",null,l.a.createElement("h2",null,"Nothin to see here.")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.6bfe8034.chunk.js.map