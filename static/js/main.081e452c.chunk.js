(this["webpackJsonpunsplash-image-search"]=this["webpackJsonpunsplash-image-search"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=a(7),o=a.n(i),u=a(2),l=a(3),m=a(5),h=a(4),p=a(6),b=(a(25),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={term:"",howManyImages:10},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term,a.state.howManyImages)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:" search-bar"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form search-bar__form"},r.a.createElement("div",null,r.a.createElement("label",{className:"search-bar__label"},"Image Search"),r.a.createElement("input",{type:"text",className:"search-bar__text-input",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),r.a.createElement("button",{className:" search-bar__button"},"Search"),r.a.createElement("div",{className:"search-bar__options"},"Number of images to display:","  ",r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"10",name:"option",onChange:function(t){return e.setState({howManyImages:10})},checked:10===this.state.howManyImages}),"10"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"20",name:"option",onChange:function(t){return e.setState({howManyImages:20})},checked:20===this.state.howManyImages}),"20"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"30",name:"option",onChange:function(t){return e.setState({howManyImages:30})},checked:30===this.state.howManyImages}),"30")))))}}]),t}(r.a.Component)),g=a(18),f=a.n(g).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 58cc3ddd673058e2896440dc2b55c5f193b0b84989aa0808489b9c0ea97337a7"}}),d=(a(44),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),t}(r.a.Component)),v=function(e){var t=e.images.map((function(e){return r.a.createElement(d,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(e,t){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(f.get("/search/photos",{params:{query:e,per_page:t}}));case 2:n=r.sent,a.setState({images:n.data.results}),console.log(a.state.images.length);case 5:case"end":return r.stop()}}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container app-component",style:{marginTop:"10px"}},r.a.createElement(b,{onSubmit:this.onSearchSubmit}),r.a.createElement(v,{images:this.state.images}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.081e452c.chunk.js.map