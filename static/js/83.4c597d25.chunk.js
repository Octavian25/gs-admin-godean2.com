(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1233:function(t,e,a){"use strict";a.r(e);var n=a(19),o=a(20),i=a(22),s=a(21),c=a(0),l=a.n(c),d=a(41),r=a(27),u=a.n(r),h=a(11),m=a(36),f=a(13),p=a(37),b=Object(c.lazy)(function(){return Promise.all([a.e(19),a.e(139)]).then(a.bind(null,1212))}),g=function(t){Object(i.a)(c,t);var e=Object(s.a)(c);function c(t){var a;return Object(n.a)(this,c),(a=e.call(this,t)).state={date:""},a.getDate=function(){var t=(new Date).toDateString();a.setState({date:t})},a.state={isLoading:!1},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;Object(h.p)("url","http://147.139.193.169:4003/api/v1/"),localStorage.setItem("base_url",JSON.stringify(window.location.href)),Object(h.l)("islogin")===Object(h.i)()&&this.props.history.push("/dashboard"),window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",function(t){window.history.pushState(null,document.title,window.location.href)}),this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1),this.context.handleSetBodyWhiteBg(!0),this.getDate(),Object(f.d)("system/get").then(function(e){var a={alamat_toko:e.data[0].alamat_toko,nama_toko:e.data[0].nama_toko};Object(h.p)("data_toko",a),t.setState({alamat_toko:e.data[0].alamat_toko,nama_toko:e.data[0].nama_toko})}).catch(function(e){t.setState({alamat_toko:"",nama_toko:""})})}},{key:"componentWillUnmount",value:function(){this.context.handleSetPageSidebar(!0),this.context.handleSetPageHeader(!0),this.context.handleSetBodyWhiteBg(!1)}},{key:"onfiled",value:function(t){console.log(t),u.a.fire({title:"Oopss !!!",text:void 0===t.response?"Terjadi Kesalahan Saat Request Data":t.response.data,icon:"info"}),this.setState({isLoading:!1})}},{key:"onSubmit",value:function(t){var e=this,a={user_id:t.user_id,password:t.password};this.setState({isLoading:!0}),Object(f.j)("users/login",a).then(function(e){Object(h.m)("userdata",JSON.stringify(e.data)),Object(h.m)("token",e.data.token),Object(h.m)("islogin",Object(h.i)()),document.getElementById("logindata").value=t.user_id,Object(f.e)("para-system/type/module").then(function(t){Object(h.p)("module",t.data.filter(function(t){return"true"===t.value}))})}).then(function(){Object(f.d)("akses-user/id/"+t.user_id).then(function(t){localStorage.setItem("menu",JSON.stringify(t.data))}).catch(function(t){Object(m.e)("info",t.response.data)})}).then(function(){return e.props.history.push("/dashboard")}).catch(function(t){return e.onfiled(t)})}},{key:"TextFilenotapesanan",value:function(){var t=document.createElement("a"),e=new Blob([document.getElementById("logindata").value],{type:"text/plain;charset=utf-8"});t.href=URL.createObjectURL(e),t.download="timbangan.txt",document.body.appendChild(t),t.click()}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"login login-with-news-feed"},l.a.createElement("div",{className:"news-feed"},l.a.createElement("div",{className:"news-image",style:{backgroundImage:"url(".concat(a(939),")")}}),l.a.createElement("div",{className:"news-caption text-center"},l.a.createElement("textarea",{style:{display:"none"},id:"logindata",rows:"100",cols:"100"}),l.a.createElement("p",null,this.state.alamat_toko))),l.a.createElement("div",{className:"right-content"},l.a.createElement(b,{isLoading:this.state.isLoading,nama_toko:this.state.nama_toko,onSubmit:function(e){return t.onSubmit(e)}})))}}]),c}(l.a.Component);g.contextType=p.a,e.default=Object(d.f)(g)},939:function(t,e,a){t.exports=a.p+"static/media/backround-kresno.57bcbf16.png"}}]);
//# sourceMappingURL=83.4c597d25.chunk.js.map