(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{792:function(a,e,t){"use strict";var n=t(42),r=t(103),o=t.n(r),l=t(160),s=t(19),i=t(20),c=t(22),d=t(21),m=t(0),u=t.n(m),p=t(218),g=t.n(p),b=t(58),h=t(311),k=t(312),_=t(214),f=t(9),E=t(78),v=t(11),B=t(36),N=t(13),O=t(217),y=t.n(O),j=t(210),I=t.n(j),C=Object(_.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),S=function(a){Object(c.a)(t,a);var e=Object(d.a)(t);function t(a){var r;return Object(s.a)(this,t),(r=e.call(this,a)).tgl_awalChange=function(a){r.setState({tgl_awal:a})},r.tgl_akhirChange=function(a){r.setState({tgl_akhir:a})},r.getValue=function(){var a=Object(l.a)(o.a.mark(function a(e){var t,l;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.target.files[0],a.next=3,Object(v.b)(t);case 3:l=a.sent,r.props.dispatch(Object(n.t)(l)),r.props.change("foto",l);case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),r.state={visible:!0,ModalWebCam:!1,isLoadingBaki:!1,isLoadingJenis:!1,tgl_awal:new Date,tgl_akhir:new Date,databaki:[],DataGroup:[],DataJenis:[],loadimage:y.a},r}return Object(i.a)(t,[{key:"showModalWebcam",value:function(){this.props.dispatch(Object(n.t)(!1)),this.props.dispatch(Object(f.nc)()),this.setState({ModalWebCam:!0})}},{key:"handleTakePhoto",value:function(a){this.props.dispatch(Object(n.t)(a)),this.props.change("foto",a)}},{key:"componentDidMount",value:function(){var a=this;Object(N.d)("group/get/all").then(function(e){a.setState({DataGroup:e.data})}).catch(function(a){console.log(a)})}},{key:"getJenis",value:function(a){var e=this;this.setState({isLoadingJenis:!0}),Object(N.d)("jenis/get/by-kode-kategori/"+a).then(function(a){e.setState({DataJenis:a.data})}).then(function(a){e.setState({isLoadingJenis:!1})}).catch(function(a){Object(B.b)(a.data),console.log(a)})}},{key:"getBaki",value:function(a){var e=this;this.setState({isLoadingBaki:!0}),Object(N.d)("baki/get/by-kode-baki/"+a).then(function(a){e.setState({databaki:""===a.data?[]:[a.data]})}).then(function(a){e.setState({isLoadingBaki:!1})}).catch(function(a){Object(B.b)(a.data),console.log(a)})}},{key:"loadcamera",value:function(){var a=this;return u.a.createElement(g.a,{onTakePhoto:function(e){a.handleTakePhoto(e)}})}},{key:"render",value:function(){var a=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-8"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(h.a,{readOnly:!0,name:"foto",type:"hidden",component:E.b}),u.a.createElement(h.a,{readOnly:!0,name:"kode_barcode",component:E.e,label:"Kode Barcode",placeholder:"Masukan Kode Barcode"})),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(h.a,{name:"nama_barang",component:E.e,label:"Nama Barang",placeholder:"Masukan Nama Barang"}))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-8"},u.a.createElement(h.a,{name:"nama_atribut",component:E.e,label:"Nama Atribut",placeholder:"Masukan Nama Atribut"})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(h.a,Object.assign({name:"harga_atribut",component:E.e,label:"Harga Atribut"},C,{placeholder:"Masukan Harga Atribut"})))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(h.a,{name:"kadar",component:E.e,label:"Kadar",placeholder:"Masukan Kadar"})),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(h.a,{name:"kadar_cetak",component:E.e,label:"Kadar Cetak",placeholder:"Masukan Kadar Cetak"})),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(h.a,{name:"kode_intern",component:E.e,label:"Kode Intern",placeholder:"Masukan Kode Intern"})),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null," \xa0 "),!0===this.props.isLoading?u.a.createElement(v.d,{className:"btn btn-block btn-primary",text:"Sedang Menyimpan Data"}):u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"submit",className:"btn btn-block btn-primary"},"Simpan Barang")))))),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4"},!0===this.state.ModalWebCam&&!1===this.props.setCamera?u.a.createElement("div",{className:"container"},this.loadcamera()):u.a.createElement(u.a.Fragment,null,u.a.createElement("img",{src:void 0===this.props.foto?!1===this.props.setCamera?y.a:this.props.setCamera:this.props.setCamera?this.props.setCamera:this.props.foto,alt:"img",height:"245px",width:"355px"})))),u.a.createElement("div",{className:"row mt-2"},u.a.createElement("div",{className:"col-lg-12 mb-8"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-8"},u.a.createElement("div",{className:"input-group"},u.a.createElement("div",{className:"custom-file"},u.a.createElement("input",{type:"file",name:"photo",autoComplete:"off",className:"custom-file-input",id:"exampleInputFile",onChange:function(e){return a.getValue(e)}}),u.a.createElement("label",{className:"custom-file-label",htmlFor:"exampleInputFile"},"Pilih gambar")))),u.a.createElement("div",{className:"col-4"},u.a.createElement("button",{className:"btn btn-block btn-primary",type:"button",onClick:function(){return a.showModalWebcam()}}," ","WebCam"," "))))))),this.props.isLoading?u.a.createElement(I.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}]),t}(m.Component);S=Object(k.a)({form:"HeadEditDataBarang",enableReinitialize:!0})(S);var w=Object(b.b)(function(a){return{initialValues:{foto:a.databarang.showEditBarang.foto,kode_barcode:a.databarang.showEditBarang.kode_barcode,nama_barang:a.databarang.showEditBarang.nama_barang,nama_atribut:a.databarang.showEditBarang.nama_atribut,harga_atribut:a.databarang.showEditBarang.harga_atribut,kode_intern:a.databarang.showEditBarang.kode_intern,kadar:a.databarang.showEditBarang.kadar,kadar_cetak:a.databarang.showEditBarang.kadar_cetak},foto:a.databarang.showEditBarang.foto,setCamera:a.databarang.setCamera,hideModal:a.datamaster.modalDialog}})(S),x=t(12),D=t(793),A=t(159),F=t(794),M=Object(x.w)({prefix:"Rp. ",locale:"id-ID"}),L=function(a){Object(c.a)(t,a);var e=Object(d.a)(t);function t(a){var r;return Object(s.a)(this,t),(r=e.call(this,a)).tgl_awalChange=function(a){r.setState({tgl_awal:a})},r.tgl_akhirChange=function(a){r.setState({tgl_akhir:a})},r.getValue=function(){var a=Object(l.a)(o.a.mark(function a(e){var t,l;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,document.getElementById("kode_intern").focus(),t=e.target.files[0],a.next=5,Object(v.o)(t);case 5:l=a.sent,r.props.dispatch(Object(n.t)(l)),r.props.change("foto",l),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}},a,null,[[0,10]])}));return function(e){return a.apply(this,arguments)}}(),r.state={visible:!0,isBaki:!0,jml:1,disabled:!1,ModalWebCam:!1,module_berlian:!1,module_semi_grosir:!1,loadimage:x.H,isLoadingBaki:!1,isLoadingJenis:!1,kategori_harga:"",tgl_awal:new Date,tgl_akhir:new Date,databaki:[],DataGroup:[],DataJenis:[]},r}return Object(i.a)(t,[{key:"showModalWebcam",value:function(){this.props.dispatch(Object(n.t)(!1)),this.props.dispatch(Object(x.T)()),this.setState({ModalWebCam:!0})}},{key:"handleTakePhoto",value:function(){var a=Object(l.a)(o.a.mark(function a(e){var t,r;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,document.getElementById("kode_intern").focus(),t=Object(v.c)(e),a.next=5,Object(v.o)(t);case 5:r=a.sent,this.props.dispatch(Object(n.t)(r)),this.props.change("foto",r),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}},a,this,[[0,10]])}));return function(e){return a.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var a=Object(l.a)(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:this.setState({isBaki:!1}),localStorage.removeItem("estimasi_harga_tambah");case 2:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var a=this,e=Object(v.g)("module")||[],t=e.findIndex(function(a){return"BERLIAN_MODULE"===a.key});-1===e.findIndex(function(a){return"SEMI_GROSIR_MODULE"===a.key})?this.setState({module_semi_grosir:!1}):this.setState({module_semi_grosir:!0}),-1===t?this.setState({module_berlian:!1}):this.setState({module_berlian:!0});var r=Object(v.g)("data_group");if(!1===r.is_berlian||void 0===r.is_berlian?this.setState({module_berlian:!1}):this.setState({module_berlian:!0}),this.hitungOngkosBerlian(),Object(N.e)("para-system/key/kategori_harga").then(function(e){"harga_100%"===e.data.value?a.setState({kategori_harga:!0}):a.setState({kategori_harga:!1}),a.props.change("kadar",a.state.kategori_harga?"MODAL_BERLIAN"===a.props.DataBarang.modal_berlian?a.props.DataBarang.kadar:0:100),a.props.change("kadar_modal",a.state.kategori_harga?"MODAL_BERLIAN"===a.props.DataBarang.modal_berlian?a.props.DataBarang.kadar_modal:0:100)}).catch(function(a){console.log(a)}),F.io.connect("http://147.139.193.169:4003/api/v1/".replace("/api/v1/","")).on("timbangan",function(e){Object(v.j)().user_id===e.user_id&&a.props.change("berat_asli",e.value)}),"MODAL_BERLIAN"===this.props.DataBarang.modal_berlian&&(setTimeout(function(){document.getElementById("ongkos_berlian").focus()},100),this.hitungOngkosBerlian(),this.props.change("total_harga",this.props.total_harga)),"MODAL_BERLIAN"!==this.props.DataBarang.modal_berlian){localStorage.removeItem("estimasi_harga_tambah"),this.props.dispatch(Object(n.t)(!1)),this.props.change("foto",""),Object(N.e)("para-system/key/PEMBULATAN").then(function(a){Object(v.p)("pembulatan",a.data.value)}).catch(function(a){Object(v.p)("pembulatan",500)});var o=this.props.DataBarang.kode_lokasi_toko.split("~");this.props.change("kode_kategori",this.props.DataBarang.kode_kategori),this.props.change("kode_jenis",this.props.DataBarang.kode_jenis),this.props.change("kode_lokasi_toko",o[0]),this.props.change("kode_gudang",o[1]),this.props.change("kode_intern",this.props.DataBarang.kode_intern),this.props.change("kode_barcode",this.props.DataBarang.kode_barcode),this.props.change("nama_barang",this.props.DataBarang.nama_barang),this.props.change("ongkos",this.props.DataBarang.ongkos),this.props.change("kadar",this.state.kategori_harga?this.props.DataBarang.kadar:100),this.props.change("kadar_cetak",this.props.DataBarang.kadar_cetak),this.props.change("kadar_modal",this.props.DataBarang.kadar_modal),this.props.change("nama_atribut",this.props.DataBarang.nama_atribut),this.props.change("berat_atribut",this.props.DataBarang.berat_atribut),this.props.change("berat_bandrol",this.props.DataBarang.berat_bandrol),this.props.change("harga_atribut",this.props.DataBarang.harga_atribut),this.props.change("foto",this.props.DataBarang.foto),this.props.change("berat_stock",Object(v.g)("saldo_supplier")),this.props.change("tag_id",this.props.DataBarang.tag_id||"-"),setTimeout(function(){Object(x.A)("parabandrol/get/all").then(function(e){0!==e.data.length?a.props.change("berat_bandrol",e.data[0].berat_bandrol):a.props.change("berat_bandrol",0)}),document.getElementById("kode_intern").focus()},100)}}},{key:"getJenis",value:function(a){var e=this;this.setState({isLoadingJenis:!0}),Object(x.A)("jenis/get/by-kode-kategori/"+a).then(function(a){e.setState({DataJenis:a.data})}).then(function(a){e.setState({isLoadingJenis:!1})}).catch(function(a){Object(x.t)("info",a.data),console.log(a)})}},{key:"getBaki",value:function(a){var e=this;this.setState({isLoadingBaki:!0}),Object(x.A)("baki/get/by-kode-baki/"+a).then(function(a){e.setState({databaki:""===a.data?[]:[a.data]})}).then(function(a){e.setState({isLoadingBaki:!1})}).catch(function(a){Object(x.t)("info",a.data),console.log(a)})}},{key:"loadcamera",value:function(){var a=this;return x.n.createElement(x.a,{onTakePhoto:function(e){a.handleTakePhoto(e)}})}},{key:"cekTotal",value:function(){var a=this;if(this.props.change("harga_jual",this.props.harga_jual),this.hitungOngkosBerlian(),"PESANAN"===this.props.status){var e={kode_group:this.props.kode_group,berat:parseFloat(document.getElementById("berat").value||0),kadar:parseInt(document.getElementById("kadar").value||0)};Object(N.k)("tambah-barang/calculate",e).then(function(e){0===(Object(v.g)("estimasi_harga_tambah")||[]).length&&(Object(v.p)("estimasi_harga_tambah",e.data.harga_jual+a.props.harga_atribut+a.props.ongkos),a.props.change("harga_estimasi",Object(v.g)("estimasi_harga_tambah"))),a.props.change("harga_total",e.data.harga_jual+a.props.harga_atribut+a.props.ongkos),a.props.change("harga_total_tmp",e.data.harga_jual)})}}},{key:"hitungCalculate",value:function(){"PESANAN"===this.props.status&&this.props.change("harga_total",this.props.harga_total)}},{key:"cekBerat",value:function(a){if(Object(v.g)("saldo_supplier")){var e=Object(v.g)("saldo_supplier");if(parseFloat(a.target.value||0)>parseFloat(e))return Object(x.t)("info","Berat Yang Diinputkan Melebihi Berat Stock"),this.setState({disabled:!0}),!1;this.setState({disabled:!1})}}},{key:"hitungOngkosBerlian",value:function(){this.props.change("total_harga",this.props.total_harga)}},{key:"render",value:function(){var a=this;return x.n.createElement(x.n.Fragment,null,x.n.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-lg-12 text-center"},!0===this.state.ModalWebCam&&!1===this.props.setCamera?x.n.createElement("div",{className:"container"},this.loadcamera()):x.n.createElement(x.n.Fragment,null,x.n.createElement("img",{src:void 0===this.props.foto?!1===this.props.setCamera?x.H:this.props.setCamera:this.props.setCamera?this.props.setCamera:this.props.foto,alt:"img",height:"245px",width:"355px"})))),x.n.createElement("br",null),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-2"}," "),x.n.createElement("div",{className:"col-5"},x.n.createElement("div",{className:"input-group"},x.n.createElement("div",{className:"custom-file"},x.n.createElement("input",{tabIndex:"1",type:"file",name:"photo",autoComplete:"off",className:"custom-file-input",id:"exampleInputFile",onChange:function(e){return a.getValue(e)}}),x.n.createElement("label",{className:"custom-file-label",htmlFor:"exampleInputFile"},"Pilih gambar")))),x.n.createElement("div",{className:"col-3"},x.n.createElement("button",{tabIndex:"2",className:"btn btn-block btn-primary",type:"button",onClick:function(){return a.showModalWebcam()}}," ","WebCam"," ")),x.n.createElement("hr",null)),x.n.createElement("hr",null),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-lg-4"},x.n.createElement(x.c,{readOnly:!0,id:"kode_kategori",name:"kode_kategori",component:x.p,label:"Kategori",placeholder:"Masukan Kategori",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-lg-4"},x.n.createElement(x.c,{readOnly:!0,name:"kode_jenis",component:x.p,label:"Jenis",placeholder:"Masukan Jenis",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-lg-4"},x.n.createElement(x.c,{readOnly:!0,name:"kode_lokasi_toko",component:x.p,label:"Kode Lokasi Toko",placeholder:"Masukan Lokasi",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}}))),x.n.createElement("hr",null),x.n.createElement("div",{className:"row"},x.n.createElement(x.c,{readOnly:!0,id:"ongkos",name:"ongkos",type:"hidden",component:x.e}),x.n.createElement(x.c,{readOnly:!0,name:"harga_total_tmp",type:"hidden",component:x.e}),x.n.createElement(x.c,{readOnly:!0,name:"status_pesanan",type:"hidden",component:x.e}),x.n.createElement(x.c,{readOnly:!0,name:"kode_gudang",type:"hidden",component:x.e}),x.n.createElement(x.c,{readOnly:!0,name:"foto",type:"hidden",component:x.e}),x.n.createElement(x.c,{readOnly:!0,name:"kode_barcode",type:"hidden",component:x.e}),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,{id:"kode_intern",tabIndex:"3",onFocus:function(e){return a.cekTotal()},name:"kode_intern",component:x.p,label:"Kode Intern",placeholder:"Masukan Kode Intern",onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-lg-6"}),x.n.createElement("div",{className:"PESANAN"===this.props.status?"col-6":"col-6 d-none"},x.n.createElement(x.c,{id:"no_pesanan",tabIndex:"3",name:"no_pesanan",component:x.p,readOnly:!0,label:"No Pesanan",placeholder:"Masukan No Pesanan",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-12"},x.n.createElement(x.c,{tabIndex:"4",name:"nama_barang",component:x.p,label:"Nama Barang",placeholder:"Masukan Nama Barang",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-lg-6"},"PESANAN"===this.props.status?x.n.createElement(x.n.Fragment,null,x.n.createElement(x.c,{tabIndex:"5",type:"text",name:"berat_awal",component:x.p,label:"Berat Awal",normalize:x.d,readOnly:!0,placeholder:"Masukan Berat Awal",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()},onBlur:function(e){return a.props.change("berat",e.target.value)}})):x.n.createElement(x.n.Fragment,null,x.n.createElement(x.c,{tabIndex:"5",type:"text",id:"berat_asli",name:"berat_asli",component:x.p,onChange:function(e){return a.cekBerat(e)},label:"Berat Asli",normalize:x.d,placeholder:"Masukan Berat Asli",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()},onBlur:function(e){return a.props.change("berat",e.target.value)}}))),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{id:"berat",tabIndex:"6",type:"text",name:"berat",component:x.p,label:"PESANAN"===this.props.status?"Berat Jadi":"Berat",normalize:x.d,placeholder:"PESANAN"===this.props.status?"Masukan Berat Jadi":"Masukan Berat",onChange:function(e){return a.cekBerat(e)},onFocus:function(e){return a.cekTotal()},onClick:function(a){return a.target.select()},onBlur:function(){return a.cekTotal()}})),x.n.createElement("div",{className:this.state.kategori_harga?"col-lg-6":"col-lg-6 d-none"},x.n.createElement(x.c,{id:"kadar",tabIndex:"7",type:"text",name:"kadar",component:x.p,label:"Kadar",normalize:x.j,placeholder:"Masukan Kadar",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()},onBlur:function(){return a.cekTotal()},onChange:this.cekTotal()})),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{tabIndex:"8",type:"text",name:"kadar_cetak",component:x.p,label:"Kadar Cetak",normalize:A.b,placeholder:"Masukan Kadar Cetak",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:!1===this.state.kategori_harga?"d-none":"col-lg-6 d-block"},x.n.createElement(x.c,{tabIndex:"9",type:"text",name:"kadar_modal",normalize:A.b,component:x.p,label:"Kadar Modal",placeholder:"Masukan Kadar Modal",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),this.state.module_semi_grosir&&x.n.createElement(x.n.Fragment,null,x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{tabIndex:"10",type:"text",name:"berat_stock",readOnly:!0,normalize:x.d,component:x.p,label:"Berat Stock",placeholder:"Masukan Berat Stock",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}}))),this.state.module_berlian&&x.n.createElement("div",{className:!0===this.state.module_semi_grosir?"col-lg-12":"col-lg-6"},x.n.createElement(x.c,Object.assign({type:"text",name:"harga_jual",readOnly:!0},M,{component:x.p,label:"Harga Jual",placeholder:"Masukan Harga Jual"})))),x.n.createElement("hr",null),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-12"},x.n.createElement(x.c,{id:"nama_atribut",tabIndex:"10",type:"text",name:"nama_atribut",component:x.p,label:"Nama Atribut",placeholder:"Masukan Nama Atribut",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{tabIndex:"11",type:"text",name:"berat_atribut",component:x.p,label:"Berat Atribut",normalize:x.d,placeholder:"Masukan Berat Atribut",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,Object.assign({tabIndex:"12",id:"harga_atribut",name:"harga_atribut",component:x.p},M,{label:"Harga Atribut",placeholder:"Masukan Harga Atribut",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()},onChange:this.hitungCalculate()}))),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{tabIndex:"13",type:"text",name:"berat_plastik",component:x.p,label:"Berat Plastik",normalize:x.d,placeholder:"Masukan Berat Plastik",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),"PESANAN"===this.props.status?x.n.createElement(x.n.Fragment,null,x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,Object.assign({tabIndex:"13",type:"text",name:"harga_estimasi",component:x.p,label:"Harga Estimasi"},M,{placeholder:"Harga Estimasi",readOnly:!0}))),x.n.createElement("div",{className:"col-6"}),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,Object.assign({tabIndex:"13",type:"text",name:"harga_total",component:x.p,label:"Harga Total"},M,{placeholder:"Harga Total",readOnly:!0})))):null),x.n.createElement("hr",null),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-lg-6 d-none"},x.n.createElement(x.c,{tabIndex:"13",name:"tag_id",component:x.e,type:"hidden",label:"Tag Id",placeholder:"Masukan Tag Id"})),x.n.createElement("div",{className:"col-lg-6 d-none"},x.n.createElement(x.c,{tabIndex:"14",type:"text",name:"berat_bandrol",component:x.p,label:"Berat Bandrol",normalize:x.d,placeholder:"Masukan Berat Bandrol",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}}))),this.state.module_berlian&&x.n.createElement(x.n.Fragment,null,x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{tabIndex:"15",type:"text",name:"no_seri",component:x.p,label:"No Seri",placeholder:"Masukan No Seri",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()},onBlur:function(){document.getElementById("ongkos_berlian").focus()}})),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,Object.assign({tabIndex:"16",type:"text",id:"ongkos_berlian",name:"ongkos_berlian",component:x.p,label:"Ongkos Berlian",readOnly:!(parseInt(Object(v.g)("total_rp")||0)>0)},M,{placeholder:"Masukan Ongkos Berlian",onFocus:function(e){return a.hitungOngkosBerlian()},onClick:function(e){return a.hitungOngkosBerlian()},onChange:function(e){return a.hitungOngkosBerlian()},onBlur:function(e){return a.hitungOngkosBerlian()}}))),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,{onFocus:function(e){return a.hitungOngkosBerlian()},onClick:function(e){return a.hitungOngkosBerlian()},onChange:this.hitungOngkosBerlian(),onBlur:function(e){return a.hitungOngkosBerlian()},tabIndex:"17",type:"text",name:"profit",component:x.p,label:"Profit",normalize:x.j,placeholder:"Masukan Profit"})),x.n.createElement("div",{className:"col-lg-6"},x.n.createElement(x.c,Object.assign({tabIndex:"18",type:"text",name:"total_harga",component:x.p,label:"Total Harga"},M,{readOnly:!0,placeholder:"Masukan Total Harga",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})))),x.n.createElement("hr",null)),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-6"},this.state.module_berlian&&x.n.createElement(x.n.Fragment,null,x.n.createElement("button",{onClick:function(){return a.props.modalBerlian(a.props.databarangs)},type:"button",className:"btn btn-primary"},"Data Berlian"))),x.n.createElement("div",{className:"col-lg-6 text-right"},x.n.createElement("button",{onClick:function(){return a.props.dispatch(Object(x.G)())},type:"button",className:"btn btn-secondary"},"Batal"),"\xa0",x.n.createElement("button",{tabIndex:"15",disabled:this.props.isLoading||this.state.disabled,type:"submit",className:"btn btn-success"},this.props.isLoading?x.n.createElement(x.n.Fragment,null,x.n.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan"))),this.props.isLoading?x.n.createElement(I.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}]),t}(x.b);L=Object(x.Q)({form:"FormTambahBarang",enableReinitialize:!0,validate:D.a})(L);var K=Object(x.y)("FormTambahBarang"),T=Object(x.u)(function(a){var e=K(a,"harga_atribut","harga_total_tmp","ongkos","kadar","berat","berat_asli","ongkos_berlian","profit","nama_barang","kode_intern","kadar_cetak","kadar_modal","nama_atribut","berat_atribut","berat_plastik","berat_bandrol","tag_id","no_seri","berat_stock","foto"),t=e.harga_atribut,n=e.no_seri,r=e.berat_stock,o=e.nama_barang,l=e.kadar_cetak,s=e.kadar_modal,i=e.kode_intern,c=e.nama_atribut,d=e.berat_atribut,m=e.berat_bandrol,u=e.berat_plastik,p=e.tag_id,g=e.berat_asli,b=e.harga_total_tmp,h=e.ongkos,k=e.kadar,_=e.berat,f=e.ongkos_berlian,E=e.profit,B=e.foto,N=a.databarang.showEditBarang.kode_lokasi_toko.split("~"),O=Object(v.g)("data_group").harga,y=String(k/100*_*O),j=parseInt(y.split(".")[0]),I=j%Number(Object(v.g)("pembulatan")),C=0!==I?j-I+Number(Object(v.g)("pembulatan")):j,S=parseInt(f||0)+parseInt(C||0)+Number(Object(v.g)("total_rp")||0),w=parseInt(S||0)+parseInt(S||0)*parseFloat(E||0)/100,x=parseInt(b)+parseInt(t||0)+parseInt(h||0)||0,D=Object(v.g)("kode_lokasi_toko"),A=Object(v.g)("kode_jenis"),F=Object(v.g)("kode_group");return{databarangs:{modal_berlian:"MODAL_BERLIAN",kode_barcode:"-",nama_barang:o,nama_atribut:c||"-",harga_atribut:t||0,kode_intern:i,kadar:parseInt(k)||0,no_seri:n||"-",ongkos_berlian:parseInt(f)||0,profit:parseInt(E)||0,kadar_cetak:l||0,kadar_modal:parseInt(s)||0,kode_kategori:F,kode_jenis:A,kode_lokasi_toko:D,berat:parseFloat(_)||0,berat_stock:parseFloat(r)||0,berat_asli:parseFloat(g),berat_atribut:parseFloat(d)||0,berat_plastik:parseFloat(u)||0,tag_id:p||"-",berat_bandrol:parseFloat(m)||0,total_harga:parseFloat(w)||0,harga_jual:parseFloat(C)||0,foto:B},DataBarang:a.databarang.showEditBarang,status:a.databarang.showEditBarang.status,getDataTimbangan:a.utility.getTimbangan,kode_group:a.databarang.showEditBarang.kode_kategori,harga_total:x,ongkos:a.databarang.showEditBarang.ongkos||0,harga_jual:C||0,total_harga:parseFloat(w),initialValues:{kode_kategori:a.databarang.showEditBarang.kode_kategori,ongkos_berlian:a.databarang.showEditBarang.ongkos_berlian,kode_jenis:a.databarang.showEditBarang.kode_jenis,kode_lokasi_toko:N[0],kode_gudang:N[1],berat_asli:a.databarang.showEditBarang.berat_asli,harga_jual:a.databarang.showEditBarang.harga_jual||0,kode_intern:a.databarang.showEditBarang.kode_intern,kode_barcode:a.databarang.showEditBarang.kode_barcode,nama_barang:a.databarang.showEditBarang.nama_barang,total_harga:a.databarang.showEditBarang.total_harga,ongkos:a.databarang.showEditBarang.ongkos||0,berat_stock:a.databarang.showEditBarang.berat_stock||0,kadar:a.databarang.showEditBarang.kadar,no_seri:a.databarang.showEditBarang.no_seri,profit:a.databarang.showEditBarang.profit,kadar_cetak:a.databarang.showEditBarang.kadar_cetak,kadar_modal:a.databarang.showEditBarang.kadar_modal,nama_atribut:a.databarang.showEditBarang.nama_atribut,berat_atribut:a.databarang.showEditBarang.berat_atribut,harga_atribut:a.databarang.showEditBarang.harga_atribut,tag_id:a.databarang.showEditBarang.tag_id||"-",berat:(a.databarang.showEditBarang.status,a.databarang.showEditBarang.berat),berat_awal:"PESANAN"===a.databarang.showEditBarang.status?a.databarang.showEditBarang.berat:"-",berat_bandrol:a.databarang.showEditBarang.berat_bandrol,berat_plastik:a.databarang.showEditBarang.berat_plastik,foto:a.databarang.showEditBarang.foto,status_pesanan:a.databarang.showEditBarang.status,no_pesanan:void 0===a.databarang.showEditBarang.no_pesanan?"":a.databarang.showEditBarang.no_pesanan.trim()},harga_atribut:a.databarang.showEditBarang.harga_atribut,foto:a.databarang.showEditBarang.foto,setCamera:a.databarang.setCamera,hideModal:a.datamaster.modalDialog}})(L),P=t(64),H=t(211),J=function(a){Object(c.a)(t,a);var e=Object(d.a)(t);function t(a){var n;return Object(s.a)(this,t),(n=e.call(this,a)).state={berhasil:!1,columns:[{dataField:"jenis_batu",text:"Jenis Batu"},{dataField:"jumlah",text:"Jumlah"},{dataField:"karat_batu",text:"Karat Batu"},{dataField:"shape",text:"Shape"},{dataField:"color",text:"Color"},{dataField:"clarity",text:"Clarity"},{dataField:"size",text:"Size"},{dataField:"polish",text:"Polish"},{dataField:"symmetry",text:"Symmetry"},{dataField:"fluorescence",text:"Fluorescence"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return u.a.createElement("div",{className:"row text-center"},u.a.createElement("div",{className:"col-12"},u.a.createElement("button",{type:"button",onClick:function(){return n.hapusData(t)},className:"btn btn-primary mr-3"},u.a.createElement("i",{className:"fa fa-trash"}))))}}]},n}return Object(i.a)(t,[{key:"hapusData",value:function(a){var e=JSON.parse(localStorage.getItem("data_batu"));e.splice(a,1),localStorage.setItem("data_batu",JSON.stringify(e)),this.setState({berhasil:!0})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.ac)()),this.props.dispatch(Object(f.Jb)()),this.props.dispatch(Object(f.Xb)()),this.props.dispatch(Object(f.Ub)()),this.props.dispatch(Object(f.Eb)()),this.props.dispatch(Object(f.Yb)()),this.props.dispatch(Object(f.Ib)()),this.props.dispatch(Object(f.Kb)())}},{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"jenis_batu",component:E.f,options:this.props.getJenisBatu.map(function(a){return{name:a.jenis_batu,value:a.jenis_batu}}),label:"Jenis Batu",placeholder:"SILAHKAN PILIH JENIS BATU"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"jumlah",component:E.e,label:"Jumlah",placeholder:"MASUKAN JUMLAH",normalize:A.c})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"karat_batu",component:E.e,label:"Karat Batu",placeholder:"MASUKAN KARAT BATU",normalize:A.a})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"size",component:E.e,label:"Size",placeholder:"MASUKAN SIZE"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"cute_grade",component:E.f,options:this.props.getDataCutgrad.map(function(a){return{value:a.kode_cutgrade,name:a.kode_cutgrade}}),label:"Cut Grade",placeholder:"SILAHKAN PILIH CUT GRADE"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"shape",component:E.f,options:this.props.getDataShape.map(function(a){return{value:a.kode_shape,name:a.kode_shape}}),label:"Shape",placeholder:"SILAHKAN PILIH SHAPE"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"polish",component:E.f,options:this.props.getDataPolish.map(function(a){return{value:a.kode_polish,name:a.kode_polish}}),label:"Polish",placeholder:"SILAHKAN PILIH POLISH"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"color",component:E.f,options:this.props.getBatuColor.map(function(a){return{value:a.kode_color,name:a.kode_color}}),label:"Color",placeholder:"SILAHKAN PILIH COLOR"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"symmetry",component:E.f,options:this.props.getDataSymetry.map(function(a){return{value:a.kode_symmetry,name:a.kode_symmetry}}),label:"Symmetry",placeholder:"SILAHKAN PILIH SYMMETRY"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"clarity",component:E.f,options:this.props.getDataClarity.map(function(a){return{value:a.kode_clarity,name:a.kode_clarity}}),label:"Clarity",placeholder:"SILAHKAN PILIH CLARITY"})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"fluorescence",component:E.f,options:this.props.getDataFluorencence.map(function(a){return{value:a.kode_fluorescence,name:a.kode_fluorescence}}),label:"Flourescence",placeholder:"SILAHKAN PILIH FLOURESCENCE"})),u.a.createElement("div",{className:"col-3"},u.a.createElement("button",{disabled:this.props.isLoading,type:"submit",className:"btn btn-primary btn-block mt-4"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Tambah Data"):"Tambah Data")),u.a.createElement("div",{className:"col-12"},u.a.createElement(H.a,{keyField:"kode_barcode",data:Object(v.g)("data_batu"),columns:this.state.columns,empty:!0,exportCsv:!1}))))}}]),t}(m.Component);J=Object(k.a)({form:"HeadFormBerlian",enableReinitialize:!0})(J);var R=Object(b.b)(function(a){return{getJenisBatu:a.datamaster.getJenisBatu,getDataCutgrad:a.datamaster.getDataCutgrad,getDataShape:a.datamaster.getDataShape,getDataPolish:a.datamaster.getDataPolish,getDataFluorencence:a.datamaster.getDataFluorencence,getDataSymetry:a.datamaster.getDataSymetry,getDataClarity:a.datamaster.getDataClarity,getBatuColor:a.datamaster.getBatuColor}})(J),z=Object(_.createNumberMask)({prefix:"Rp. ",locale:"id-ID"}),U=function(a){Object(c.a)(t,a);var e=Object(d.a)(t);function t(a){var n;return Object(s.a)(this,t),(n=e.call(this,a)).state={isLoading:!1,disabled:!0},n}return Object(i.a)(t,[{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0}),setTimeout(function(){var t=JSON.parse(localStorage.getItem("data_batu"))||[];-1===t.findIndex(function(a){return""===a.kode_barcode})&&(t.push(a),Object(v.p)("data_batu",t),e.props.dispatch(Object(P.d)("HeadFormBerlian"))),e.setState({isLoading:!1})},1e3)}},{key:"componentDidMount",value:function(){this.props.change("total_usd",Object(v.g)("total_usd")),this.props.change("total_rp",Object(v.g)("total_rp"));var a=Object(v.g)("total_rp")||0;parseInt(a)>0?this.setState({disabled:!1}):this.setState({disabled:!0})}},{key:"getRp",value:function(a){var e=this;Object(N.e)("para-system/key/CURRENCY_DOLLAR_RUPIAH").then(function(t){var n=parseInt(a||0)*parseInt(t.data.value||0);Object(v.p)("total_usd",parseInt(a||0)),Object(v.p)("total_rp",parseInt(n||0)),e.props.change("total_rp",n),parseInt(n)>0?e.setState({disabled:!1}):e.setState({disabled:!0})}).catch(function(a){})}},{key:"render",value:function(){var a=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(R,{isLoading:this.state.isLoading,onSubmit:function(e){return a.handleSubmit(e)}}),u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-6"}),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,{name:"total_usd",component:E.e,label:"Total Usd",onChange:function(e){return a.getRp(e.target.value)},placeholder:"Masukan Total Usd",onFocus:function(a){return a.target.select()},onClick:function(a){return a.target.select()}})),u.a.createElement("div",{className:"col-3"},u.a.createElement(h.a,Object.assign({name:"total_rp",component:E.e,label:"Total Rp"},z,{readOnly:!0,placeholder:"Masukan Total Rp"}))),u.a.createElement("div",{className:"col-6"}),u.a.createElement("div",{className:"col-6 text-right"},u.a.createElement("button",{disabled:this.state.disabled,type:"button",onClick:function(){a.props.dispatch(Object(n.v)(a.props.databarang)),a.props.dispatch(Object(n.b)("FormTambahBarang"))},className:"btn btn-secondary mt-4"}," ","Kembali"," "),"\xa0"))))}}]),t}(m.Component);U=Object(k.a)({form:"ModalBerlian",enableReinitialize:!0})(U);var W=Object(b.b)(function(a){return{hideModal:a.datamaster.modalDialog,databarang:a.databarang.showEditBarang}})(U);t.d(e,"d",function(){return W}),t.d(e,"f",function(){return n.t}),t.d(e,"b",function(){return f.L}),t.d(e,"e",function(){return f.Nb}),t.d(e,"g",function(){return n.v}),t.d(e,"c",function(){return w}),t.d(e,"a",function(){return T})},793:function(a,e,t){"use strict";e.a=function(a){var e={};return a.kode_kategori||(e.kode_kategori="Kategori Tidak Boleh Kosong"),a.kode_jenis||(e.kode_jenis="Jenis Tidak Boleh Kosong"),a.kode_lokasi_toko||(e.kode_lokasi_toko="Kode Lokasi Tidak Boleh Kosong"),a.nama_barang||(e.nama_barang="Nama Barang Tidak Boleh Kosong"),a.berat||(e.berat="Berat Tidak Boleh Kosong"),a.berat_asli||(e.berat_asli="Berat Asli Tidak Boleh Kosong"),a.kadar||(e.kadar="Kadar Tidak Boleh Kosong"),a.kadar_cetak||(e.kadar_cetak="Kadar Cetak Tidak Boleh Kosong"),a.kadar_modal||(e.kadar_modal="Kadar Modal Tidak Boleh Kosong"),e}}}]);
//# sourceMappingURL=2.994b9da1.chunk.js.map