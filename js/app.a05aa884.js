(function(){"use strict";var a={8913:function(a,e,t){var s=t(144),i=t(998),r=t(5716),n=t(6190),o=t(4324),l=t(3059),c=t(8718),d=t(7953),u=function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"app"}},[e(i.Z,[a.$route.meta.hideNav?a._e():e(r.Z,{attrs:{app:""}},[e("img",{staticClass:"imgunicor",attrs:{src:t(6393),alt:""}}),e(c.Z),e(d.qW,{staticStyle:{"font-weight":"bold"}},[a._v("DICCIONARIO ELECTRÓNICO")]),e("img",{staticClass:"imggicafs",attrs:{src:t(3062),alt:""}}),e(c.Z),e(n.Z,{attrs:{icon:"",to:"/configuracion"}},[e(o.Z,[a._v("mdi-account")])],1)],1),e(l.Z,{staticClass:"text-center"},[a.$route.meta.hideNav?a._e():e("nav",{staticClass:"nav-container"},[e("div",{class:{active:a.isActive("/palabras")}},[e("router-link",{staticClass:"nav-link",class:{active:a.isActive("/palabras")},attrs:{to:"/palabras"}},[e("span",{staticClass:"nav-link-text"},[e("h4",[a._v("Palabras")])])])],1),e("div",{class:{active:a.isActive("/refranes")}},[e("router-link",{staticClass:"nav-link",class:{active:a.isActive("/refranes")},attrs:{to:"/refranes"}},[e("span",{staticClass:"nav-link-text"},[e("h4",[a._v("Refranes")])])])],1),e("div",{class:{active:a.isActive("/frases")}},[e("router-link",{staticClass:"nav-link",class:{active:a.isActive("/frases")},attrs:{to:"/frases"}},[e("span",{staticClass:"nav-link-text"},[e("h4",[a._v("Frases proverbiales")])])])],1)]),e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")],1)],1)],1)],1)},m=[],f={methods:{isActive(a){return this.$route.path===a}}},p=f,g=t(1001),h=(0,g.Z)(p,u,m,!1,null,"b0dff256",null),v=h.exports,b=t(8345),_=t(707),C=t.n(_),x=(t(8556),t(7691),function(){var a=this,e=a._self._c;return e("div",{staticClass:"container"},[e("h1",[a._v("PALABRAS")]),e("div",{staticClass:"search-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.busqueda,expression:"busqueda"}],attrs:{type:"text",placeholder:"Buscar palabra"},domProps:{value:a.busqueda},on:{input:[function(e){e.target.composing||(a.busqueda=e.target.value)},a.realizarBusqueda]}})]),e("div",{staticClass:"word-container"},[e("ul",{staticClass:"word-list"},a._l(a.palabras,(function(t){return e("li",{key:t.palabra,staticClass:"word-item"},[e("div",{staticClass:"word-box"},[e("p",{staticClass:"word-text"},[a._v(a._s(t.palabra))]),e("div",{staticClass:"ver-mas-container"},[e("transition",{attrs:{name:"fade"}},[e("button",{staticClass:"ver-mas-btn",on:{click:function(e){return a.verMas(t)}}},[a._v(a._s(a.mostrarSignificado===t.significado?"Ver menos":"Ver más"))])])],1),e("transition",{attrs:{name:"fade"}},[a.mostrarSignificado===t.significado?e("div",{staticClass:"significado"},[e("p",{staticClass:"significado-text"},[a._v("Significado: "+a._s(t.significado))]),t.imagen?e("img",{staticClass:"imagen",attrs:{src:a.getImageUrl(t.imagen,t.formato),alt:t.palabra}}):a._e()]):a._e()])],1)])})),0)])])}),Z=[],w=t(6154),k={data(){return{palabras:[],mostrarSignificado:"",busqueda:"",palabrasOriginal:[]}},name:"PalabrasC",mounted(){this.obtenerPalabras()},methods:{obtenerPalabras(){w.Z.get("https://cuentaapi.pythonanywhere.com/apie/palabras").then((a=>{this.palabras=a.data,this.palabrasOriginal=[...a.data]})).catch((a=>{console.error(a)}))},verMas(a){this.mostrarSignificado===a.significado?this.mostrarSignificado="":this.mostrarSignificado=a.significado},getImageUrl(a,e){return`data:image/${e};base64,${a}`},realizarBusqueda(){this.busqueda?this.palabras=this.palabras.filter((a=>a.palabra.toLowerCase().includes(this.busqueda.toLowerCase()))):this.palabras=[...this.palabrasOriginal]},resetearBusqueda(){this.busqueda="",this.realizarBusqueda()}}},y=k,S=(0,g.Z)(y,x,Z,!1,null,"9289e2e4",null),j=S.exports,E=function(){var a=this,e=a._self._c;return e("div",{staticClass:"container"},[e("h1",[a._v("REFRANES")]),e("div",{staticClass:"search-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.busqueda,expression:"busqueda"}],attrs:{type:"text",placeholder:"Buscar refranes"},domProps:{value:a.busqueda},on:{input:[function(e){e.target.composing||(a.busqueda=e.target.value)},a.realizarBusqueda]}})]),e("div",{staticClass:"word-container"},[e("ul",{staticClass:"word-list"},a._l(a.refranes,(function(t){return e("li",{key:t.refran,staticClass:"word-item"},[e("div",{staticClass:"word-box"},[e("p",{staticClass:"word-text"},[a._v(a._s(t.refran))]),e("div",{staticClass:"ver-mas-container"},[e("transition",{attrs:{name:"fade"}},[e("button",{staticClass:"ver-mas-btn",on:{click:function(e){return a.verMas(t)}}},[a._v(a._s(a.mostrarSignificado===t.significado?"Ver menos":"Ver más"))])])],1),e("transition",{attrs:{name:"fade"}},[a.mostrarSignificado===t.significado?e("div",{staticClass:"significado"},[e("p",{staticClass:"significado-text"},[a._v("Significado: "+a._s(t.significado))]),t.imagen?e("img",{staticClass:"imagen",attrs:{src:a.getImageUrl(t.imagen,t.formato),alt:t.refran}}):a._e()]):a._e()])],1)])})),0)])])},O=[],q={data(){return{refranes:[],mostrarSignificado:"",busqueda:"",refranesOriginal:[]}},name:"refranesC",mounted(){this.obtenerrefranes()},methods:{obtenerrefranes(){w.Z.get("https://cuentaapi.pythonanywhere.com/apie/refranes").then((a=>{console.log(a.data),this.refranes=a.data,this.refranesOriginal=[...a.data]})).catch((a=>{console.error(a)}))},verMas(a){this.mostrarSignificado===a.significado?this.mostrarSignificado="":this.mostrarSignificado=a.significado},getImageUrl(a,e){return`data:image/${e};base64,${a}`},realizarBusqueda(){this.busqueda?this.refranes=this.refranes.filter((a=>a.refran.toLowerCase().includes(this.busqueda.toLowerCase()))):this.refranes=[...this.refranesOriginal]},resetearBusqueda(){this.busqueda="",this.realizarBusqueda()}}},I=q,$=(0,g.Z)(I,E,O,!1,null,"23937cb8",null),R=$.exports,M=function(){var a=this,e=a._self._c;return e("div",{staticClass:"container"},[e("h1",[a._v("FRASES PROVERBIALES")]),e("div",{staticClass:"search-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.busqueda,expression:"busqueda"}],attrs:{type:"text",placeholder:"Buscar informacion"},domProps:{value:a.busqueda},on:{input:[function(e){e.target.composing||(a.busqueda=e.target.value)},a.realizarBusqueda]}})]),e("div",{staticClass:"word-container"},[e("ul",{staticClass:"word-list"},a._l(a.frases,(function(t){return e("li",{key:t.frase,staticClass:"word-item"},[e("div",{staticClass:"word-box"},[e("p",{staticClass:"word-text"},[a._v(a._s(t.frase))]),e("div",{staticClass:"ver-mas-container"},[e("button",{staticClass:"ver-mas-btn",on:{click:function(e){return a.verMas(t)}}},[a._v(a._s(a.mostrarSignificado===t.significado?"Ver menos":"Ver más"))])]),a.mostrarSignificado===t.significado?e("div",{staticClass:"significado"},[e("p",{staticClass:"significado-text"},[a._v("Significado: "+a._s(t.significado))]),t.imagen?e("img",{staticClass:"imagen",attrs:{src:a.getImageUrl(t.imagen,t.formato),alt:t.frase}}):a._e()]):a._e()])])})),0)])])},P=[],D={data(){return{frases:[],mostrarSignificado:"",busqueda:"",frasesOriginal:""}},name:"frasesC",mounted(){this.obtenerFrases()},methods:{obtenerFrases(){w.Z.get("https://cuentaapi.pythonanywhere.com/apie/frases").then((a=>{this.frases=a.data,this.frasesOriginal=[...a.data]})).catch((a=>{console.error(a)}))},verMas(a){this.mostrarSignificado===a.significado?this.mostrarSignificado="":this.mostrarSignificado=a.significado},getImageUrl(a,e){return`data:image/${e};base64,${a}`},realizarBusqueda(){this.busqueda?this.frases=this.frases.filter((a=>a.frase.toLowerCase().includes(this.busqueda.toLowerCase()))):this.frases=[...this.frasesOriginal]},resetearBusqueda(){this.busqueda="",this.realizarBusqueda()}}},F=D,T=(0,g.Z)(F,M,P,!1,null,"96c82852",null),A=T.exports,N=t(5125),B=t(7808),U=function(){var a=this,e=a._self._c;return e("div",{staticClass:"container"},[e("h1",[a._v("Inicio de sesión")]),e(N.Z,{on:{submit:a.login}},[e(B.Z,{attrs:{label:"Nombre de usuario"},model:{value:a.username,callback:function(e){a.username=e},expression:"username"}}),e(B.Z,{attrs:{label:"Contraseña",type:"password"},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}}),e(n.Z,{attrs:{dark:"",type:"submit"}},[a._v("Iniciar sesión")])],1),e("br"),a.showError?e("div",{staticClass:"error-message"},[a._v(" Usuario o contraseña incorrectos ")]):a._e()],1)},L=[],z=(t(7658),{data(){return{username:"",password:"",showError:!1}},methods:{login(){"admin"===this.username&&"admin123"===this.password?this.$router.push("/Campos/ingresar-palabra"):(this.showError=!0,setTimeout((()=>{this.showError=!0}),2e3))}},name:"ConfigLogin"}),G=z,V=(0,g.Z)(G,U,L,!1,null,null,null),W=V.exports,H=function(){var a=this,e=a._self._c;return e("div",[e("nav",{staticClass:"campo-nav"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/",exact:"","exact-active-class":"active-link"}},[a._v("Inicio")])],1),e("li",[e("router-link",{attrs:{to:"/Campos/ingresar-palabra",exact:"","exact-active-class":"active-link"}},[a._v("Palabras")])],1),e("li",[e("router-link",{attrs:{to:"/Campos/ingresar-refranes",exact:"","exact-active-class":"active-link"}},[a._v("Refranes")])],1),e("li",[e("router-link",{attrs:{to:"/Campos/ingresar-frases",exact:"","exact-active-class":"active-link"}},[a._v("Frases proverbiales")])],1)])]),e("router-view")],1)},J=[],K={name:"CamposL"},Q=K,X=(0,g.Z)(Q,H,J,!1,null,"117d653c",null),Y=X.exports,aa=t(1625),ea=function(){var a=this,e=a._self._c;return e("div",{staticClass:"campos"},[e("h1",[a._v("Ingresar palabras")]),e("div",{staticClass:"form-container"},[e(B.Z,{staticClass:"text",attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.palabra),label:"Digite su palabra",required:""},model:{value:a.palabra,callback:function(e){a.palabra=e},expression:"palabra"}}),e(B.Z,{staticClass:"text",attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.significado),label:"Digite su significado",required:""},model:{value:a.significado,callback:function(e){a.significado=e},expression:"significado"}}),e(aa.Z,{attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.imagen),label:"Agregue una imagen",accept:"image/*",required:""},model:{value:a.imagen,callback:function(e){a.imagen=e},expression:"imagen"}}),e("div",{staticClass:"buttons"},[e(n.Z,{staticClass:"b1",attrs:{color:"green",dark:""},on:{click:a.GuardarDatos}},[a._v("Guardar")]),e(n.Z,{staticClass:"b2",attrs:{color:"primary"},on:{click:a.EditarPalabras}},[a._v("Editar")])],1),e("br"),e("br"),a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e()],1)])},ta=[],sa={data(){return{palabra:"",significado:"",imagen:null,mensaje:""}},name:"CampoL",methods:{GuardarDatos(){const a=new FormData;a.append("palabra",this.palabra),a.append("significado",this.significado),a.append("imagen",this.imagen),w.Z.post("https://cuentaapi.pythonanywhere.com/apie/guardarpalabras",a).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.palabra="",this.significado="",this.imagen=null})).catch((a=>{console.error(a)}))},EditarPalabras(){this.$router.push("/Campos/editar-palabra")},getErrorMessages(a){return a?[]:["Este campo es requerido"]}}},ia=sa,ra=(0,g.Z)(ia,ea,ta,!1,null,"53eb2252",null),na=ra.exports,oa=function(){var a=this,e=a._self._c;return e("div",{staticClass:"campos"},[e("h1",[a._v("Ingresar refranes")]),e("div",{staticClass:"form-container"},[e(B.Z,{staticClass:"text",attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.refran),label:"Digite su refran"},model:{value:a.refran,callback:function(e){a.refran=e},expression:"refran"}}),e(B.Z,{staticClass:"text",attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.significado),label:"Digite su significado"},model:{value:a.significado,callback:function(e){a.significado=e},expression:"significado"}}),e(aa.Z,{attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.imagen),label:"Agregue una imagen",accept:"image/*"},model:{value:a.imagen,callback:function(e){a.imagen=e},expression:"imagen"}}),e("div",{staticClass:"buttons"},[e(n.Z,{staticClass:"b1",attrs:{color:"green",dark:""},on:{click:a.GuardarDatos}},[a._v("Guardar")]),e(n.Z,{staticClass:"b2",attrs:{color:"primary"},on:{click:a.EditarRefranes}},[a._v("Editar")])],1),e("br"),e("br"),a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e()],1)])},la=[],ca={data(){return{refran:"",significado:"",imagen:null,mensaje:""}},name:"refraO",methods:{GuardarDatos(){const a=new FormData;a.append("refran",this.refran),a.append("significado",this.significado),a.append("imagen",this.imagen),w.Z.post("https://cuentaapi.pythonanywhere.com/apie/guardarrefran",a).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.refran="",this.significado="",this.imagen=null})).catch((a=>{console.error(a)}))},EditarRefranes(){this.$router.push("/Campos/editar-refranes")},getErrorMessages(a){return a?[]:["Este campo es requerido"]}}},da=ca,ua=(0,g.Z)(da,oa,la,!1,null,"5e8a56d5",null),ma=ua.exports,fa=function(){var a=this,e=a._self._c;return e("div",{staticClass:"campos"},[e("h1",[a._v("Ingresar Frases")]),e("div",{staticClass:"form-container"},[e(B.Z,{staticClass:"text",attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.frases),label:"Digite su frase"},model:{value:a.frases,callback:function(e){a.frases=e},expression:"frases"}}),e(B.Z,{staticClass:"text",attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.significado),label:"Digite su significado"},model:{value:a.significado,callback:function(e){a.significado=e},expression:"significado"}}),e(aa.Z,{attrs:{rules:[[a=>!!a||"Este campo es requerido"]],"error-messages":a.getErrorMessages(a.imagen),label:"Agregue una imagen",accept:"image/*"},model:{value:a.imagen,callback:function(e){a.imagen=e},expression:"imagen"}}),e("div",{staticClass:"buttons"},[e(n.Z,{staticClass:"b1",attrs:{color:"green",dark:""},on:{click:a.GuardarDatos}},[a._v("Guardar")]),e(n.Z,{staticClass:"b2",attrs:{color:"primary"},on:{click:a.EditarInfo}},[a._v("Editar")])],1),e("br"),e("br"),a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e()],1)])},pa=[],ga={data(){return{frases:"",significado:"",imagen:null,mensaje:""}},name:"CampoI",methods:{GuardarDatos(){const a=new FormData;a.append("frases",this.frases),a.append("significado",this.significado),a.append("imagen",this.imagen),w.Z.post("https://cuentaapi.pythonanywhere.com/apie/guardarfrase",a).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.frases="",this.significado="",this.imagen=null})).catch((a=>{console.error(a)}))},EditarInfo(){this.$router.push("/Campos/editar-frases")},getErrorMessages(a){return a?[]:["Este campo es requerido"]}}},ha=ga,va=(0,g.Z)(ha,fa,pa,!1,null,"3e17077a",null),ba=va.exports,_a=t(9582),Ca=t(456),xa=t(9930),Za=function(){var a=this,e=a._self._c;return e("div",[e("div",{staticClass:"title"},[e(n.Z,{attrs:{icon:""},on:{click:a.atras}},[e(o.Z,[a._v("mdi-arrow-left")])],1),e("h1",[a._v("Tabla de Palabras")])],1),e("div",{staticClass:"container"},[a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e(),e(Ca.Z,{staticClass:"tabla-palabras",attrs:{headers:a.headers,items:a.palabras,"item-key":"id"},scopedSlots:a._u([{key:"item",fn:function({item:t}){return[e("tr",[e("td",{staticClass:"text-left"},[a._v(a._s(t[0]))]),e("td",{staticClass:"text-left"},[a._v(a._s(t[1]))]),e("td",{staticClass:"text-left"},[e(n.Z,{on:{click:function(e){return a.openModalTwo(t[2])}}},[e(o.Z,[a._v("mdi-eye")])],1)],1),e("td",{staticClass:"text-left"},[e(o.Z,{on:{click:function(e){return a.openModal(t[0])}}},[a._v("mdi-image")])],1),e("td",{staticClass:"text-left"},[e(n.Z,{staticClass:"editar-button",on:{click:function(e){return a.editarPalabra(t[0])}}},[e(o.Z,[a._v("mdi-pencil")])],1)],1),e("td",{staticClass:"text-left"},[e(n.Z,{staticClass:"eliminar-button",on:{click:function(e){return a.eliminarPalabra(t[0])}}},[e(o.Z,[a._v("mdi-delete")])],1)],1)])]}}])})],1),e(xa.Z,{attrs:{"max-width":"500px"},model:{value:a.modalOpen,callback:function(e){a.modalOpen=e},expression:"modalOpen"}},[e(_a.Z,[e("img",{attrs:{src:a.selectedImage,width:"500px"}})])],1),e(xa.Z,{attrs:{"max-width":"500px"},model:{value:a.modalOpentwo,callback:function(e){a.modalOpentwo=e},expression:"modalOpentwo"}},[e(_a.Z,[e("div",{staticClass:"significado-td"},[e("h1",[a._v("Significado:")]),a._v(" "+a._s(a.selectedSignificado)+" ")]),e(n.Z,{staticClass:"modal-close-btn",attrs:{icon:""},on:{click:function(e){a.modalOpentwo=!1}}},[e(o.Z,[a._v("mdi-close")])],1)],1)],1)],1)},wa=[],ka={data(){return{palabras:[],headers:[{text:"ID",value:"id"},{text:"Palabra",value:"palabra"},{text:"Significado",value:"significado"},{text:"Imagen",value:"significado"},{text:"Editar",value:"edit"},{text:"Eliminar",value:"delete"}],modalOpen:!1,modalOpentwo:!1,selectedImage:"",selectedSignificado:"",mensaje:""}},mounted(){this.obtenerPalabras()},methods:{obtenerPalabras(){w.Z.get("https://cuentaapi.pythonanywhere.com/apie/showtable").then((a=>{this.palabras=a.data})).catch((a=>{console.error(a)}))},editarPalabra(a){this.$router.push(`editar-palabra/editar/${a}`)},eliminarPalabra(a){w.Z.delete(`https://cuentaapi.pythonanywhere.com/apie/palabras/${a}`).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.obtenerPalabras()})).catch((a=>{console.error(a)}))},openModal(a){w.Z.get(`hhttps://cuentaapi.pythonanywhere.com/apie/palabras/${a}/image`).then((a=>{this.selectedImage=this.getImageUrl(a.data.imagen_base64,a.data.formato_imagen),this.modalOpen=!0})).catch((a=>{console.error(a)}))},getImageUrl(a,e){return`data:image/${e};base64,${a}`},openModalTwo(a){this.selectedSignificado=a,this.modalOpentwo=!0},atras(){this.$router.push("/Campos/ingresar-palabra")}}},ya=ka,Sa=(0,g.Z)(ya,Za,wa,!1,null,"333120e7",null),ja=Sa.exports,Ea=function(){var a=this,e=a._self._c;return e("div",{staticClass:"campos"},[e("h1",[a._v("editar palabras")]),e("div",{staticClass:"form-container"},[e(B.Z,{staticClass:"text",attrs:{label:"Digite su palabra"},model:{value:a.nuevaPalabra,callback:function(e){a.nuevaPalabra=e},expression:"nuevaPalabra"}}),e(B.Z,{staticClass:"text",attrs:{label:"Digite su significado"},model:{value:a.nuevoSignificado,callback:function(e){a.nuevoSignificado=e},expression:"nuevoSignificado"}}),e(n.Z,{on:{click:a.editarPalabra}},[a._v("Editar información")]),e("br"),e("router-link",{attrs:{to:"/Campos/editar-palabra"}},[e(n.Z,[a._v("Regresar")])],1),e("br"),e("br"),a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e()],1)])},Oa=[],qa={data(){return{nuevaPalabra:"",nuevoSignificado:"",mensaje:""}},methods:{editarPalabra(){const a=this.$route.params.id,e={palabra:this.nuevaPalabra,significado:this.nuevoSignificado};w.Z.put(`https://cuentaapi.pythonanywhere.com/apie/palabras/${a}`,e).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.nuevaPalabra="",this.nuevoSignificado=""})).catch((a=>{console.error(a)}))}}},Ia=qa,$a=(0,g.Z)(Ia,Ea,Oa,!1,null,"05ce9193",null),Ra=$a.exports,Ma=function(){var a=this,e=a._self._c;return e("div",[e("div",{staticClass:"title"},[e(n.Z,{attrs:{icon:""},on:{click:a.atras}},[e(o.Z,[a._v("mdi-arrow-left")])],1),e("h1",[a._v("Tabla de refranes")])],1),e("div",{staticClass:"container"},[a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e(),e(Ca.Z,{staticClass:"tabla-palabras",attrs:{headers:a.headers,items:a.refranes,"item-key":"id"},scopedSlots:a._u([{key:"item",fn:function({item:t}){return[e("tr",[e("td",{staticClass:"text-left"},[a._v(a._s(t[0]))]),e("td",{staticClass:"text-left"},[a._v(a._s(t[1]))]),e("td",{staticClass:"text-left"},[e(n.Z,{on:{click:function(e){return a.openModalTwo(t[2])}}},[e(o.Z,[a._v("mdi-eye")])],1)],1),e("td",{staticClass:"text-left"},[e(o.Z,{on:{click:function(e){return a.openModal(t[0])}}},[a._v("mdi-image")])],1),e("td",{staticClass:"text-left"},[e(n.Z,{staticClass:"editar-button",on:{click:function(e){return a.editarRefran(t[0])}}},[e(o.Z,[a._v("mdi-pencil")])],1)],1),e("td",{staticClass:"text-left"},[e(n.Z,{staticClass:"eliminar-button",on:{click:function(e){return a.eliminarRefran(t[0])}}},[e(o.Z,[a._v("mdi-delete")])],1)],1)])]}}])})],1),e(xa.Z,{attrs:{"max-width":"500px"},model:{value:a.modalOpen,callback:function(e){a.modalOpen=e},expression:"modalOpen"}},[e(_a.Z,[e("img",{attrs:{src:a.selectedImage,width:"500px"}})])],1),e(xa.Z,{attrs:{"max-width":"500px"},model:{value:a.modalOpentwo,callback:function(e){a.modalOpentwo=e},expression:"modalOpentwo"}},[e(_a.Z,[e("div",{staticClass:"significado-td"},[e("h1",[a._v("Significado:")]),a._v(" "+a._s(a.selectedSignificado)+" ")]),e(n.Z,{staticClass:"modal-close-btn",attrs:{icon:""},on:{click:function(e){a.modalOpentwo=!1}}},[e(o.Z,[a._v("mdi-close")])],1)],1)],1)],1)},Pa=[],Da={data(){return{refranes:[],headers:[{text:"ID",value:"id"},{text:"Refranes",value:"refranes"},{text:"Significado",value:"significado"},{text:"Imagen",value:"significado"},{text:"Editar",value:"edit"},{text:"Eliminar",value:"delete"}],modalOpen:!1,modalOpentwo:!1,selectedImage:"",selectedSignificado:"",mensaje:""}},mounted(){this.obtenerrefranes()},methods:{obtenerrefranes(){w.Z.get("https://cuentaapi.pythonanywhere.com/apie/showtabler").then((a=>{this.refranes=a.data})).catch((a=>{console.error(a)}))},editarRefran(a){this.$router.push(`editar-refranes/editar/${a}`)},eliminarRefran(a){w.Z.delete(`https://cuentaapi.pythonanywhere.com/apie/refranes/${a}`).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.obtenerrefranes()})).catch((a=>{console.error(a)}))},openModal(a){w.Z.get(`https://cuentaapi.pythonanywhere.com/apie/refranes/${a}/image`).then((a=>{this.selectedImage=this.getImageUrl(a.data.imagen_base64,a.data.formato_imagen),this.modalOpen=!0})).catch((a=>{console.error(a)}))},getImageUrl(a,e){return`data:image/${e};base64,${a}`},openModalTwo(a){this.selectedSignificado=a,this.modalOpentwo=!0},atras(){this.$router.push("/Campos/ingresar-refranes")}}},Fa=Da,Ta=(0,g.Z)(Fa,Ma,Pa,!1,null,"4e9e58f5",null),Aa=Ta.exports,Na=function(){var a=this,e=a._self._c;return e("div",{staticClass:"campos"},[e("h1",[a._v("EDITAR REFRANES")]),e("div",{staticClass:"form-container"},[e(B.Z,{staticClass:"text",attrs:{label:"Digite su refran"},model:{value:a.nuevoRefran,callback:function(e){a.nuevoRefran=e},expression:"nuevoRefran"}}),e(B.Z,{staticClass:"text",attrs:{label:"Digite su significado"},model:{value:a.nuevoSignificado,callback:function(e){a.nuevoSignificado=e},expression:"nuevoSignificado"}}),e(n.Z,{on:{click:a.editarRefran}},[a._v("Editar información")]),e("br"),e("router-link",{attrs:{to:"/Campos/editar-refranes"}},[e(n.Z,[a._v("Regresar")])],1),e("br"),e("br"),a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e()],1)])},Ba=[],Ua={data(){return{nuevoRefran:"",nuevoSignificado:"",mensaje:""}},methods:{editarRefran(){const a=this.$route.params.id,e={oracion:this.nuevoRefran,significado:this.nuevoSignificado};w.Z.put(`https://cuentaapi.pythonanywhere.com/apie/refranes/${a}`,e).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.nuevoRefran="",this.nuevoSignificado=""})).catch((a=>{console.error(a)}))}}},La=Ua,za=(0,g.Z)(La,Na,Ba,!1,null,"aa53eed6",null),Ga=za.exports,Va=function(){var a=this,e=a._self._c;return e("div",[e("div",{staticClass:"title"},[e(n.Z,{attrs:{icon:""},on:{click:a.atras}},[e(o.Z,[a._v("mdi-arrow-left")])],1),e("h1",[a._v("Tabla de frases")])],1),e("div",{staticClass:"container"},[a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e(),e(Ca.Z,{staticClass:"tabla-palabras",attrs:{headers:a.headers,items:a.frases,"item-key":"id"},scopedSlots:a._u([{key:"item",fn:function({item:t}){return[e("tr",[e("td",{staticClass:"text-left"},[a._v(a._s(t[0]))]),e("td",{staticClass:"text-left"},[a._v(a._s(t[1]))]),e("td",{staticClass:"text-left"},[e(n.Z,{on:{click:function(e){return a.openModalTwo(t[2])}}},[e(o.Z,[a._v("mdi-eye")])],1)],1),e("td",{staticClass:"text-left"},[e(o.Z,{on:{click:function(e){return a.openModal(t[0])}}},[a._v("mdi-image")])],1),e("td",{staticClass:"text-left"},[e(n.Z,{staticClass:"editar-button",on:{click:function(e){return a.EditarFrase(t[0])}}},[e(o.Z,[a._v("mdi-pencil")])],1)],1),e("td",{staticClass:"text-left"},[e(n.Z,{staticClass:"eliminar-button",on:{click:function(e){return a.eliminarFrase(t[0])}}},[e(o.Z,[a._v("mdi-delete")])],1)],1)])]}}])})],1),e(xa.Z,{attrs:{"max-width":"500px"},model:{value:a.modalOpen,callback:function(e){a.modalOpen=e},expression:"modalOpen"}},[e(_a.Z,[e("img",{attrs:{src:a.selectedImage,width:"500px"}})])],1),e(xa.Z,{attrs:{"max-width":"500px"},model:{value:a.modalOpentwo,callback:function(e){a.modalOpentwo=e},expression:"modalOpentwo"}},[e(_a.Z,[e("div",{staticClass:"significado-td"},[e("h1",[a._v("Significado:")]),a._v(" "+a._s(a.selectedSignificado)+" ")]),e(n.Z,{staticClass:"modal-close-btn",attrs:{icon:""},on:{click:function(e){a.modalOpentwo=!1}}},[e(o.Z,[a._v("mdi-close")])],1)],1)],1)],1)},Wa=[],Ha={data(){return{frases:[],headers:[{text:"ID",value:"id"},{text:"Frases",value:"frases"},{text:"Significado",value:"significado"},{text:"Imagen",value:"significado"},{text:"Editar",value:"edit"},{text:"Eliminar",value:"delete"}],modalOpen:!1,modalOpentwo:!1,selectedImage:"",selectedSignificado:"",mensaje:""}},mounted(){this.obtenerfrases()},methods:{obtenerfrases(){w.Z.get("https://cuentaapi.pythonanywhere.com/apie/showtablef").then((a=>{console.log(a.data),this.frases=a.data})).catch((a=>{console.error(a)}))},EditarFrase(a){this.$router.push(`editar-frases/editar/${a}`)},eliminarFrase(a){w.Z.delete(`https://cuentaapi.pythonanywhere.com/apie/frases/${a}`).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.obtenerfrases()})).catch((a=>{console.error(a)}))},openModal(a){w.Z.get(`https://cuentaapi.pythonanywhere.com/apie/frases/${a}/image`).then((a=>{this.selectedImage=this.getImageUrl(a.data.imagen_base64,a.data.formato_imagen),this.modalOpen=!0})).catch((a=>{console.error(a)}))},getImageUrl(a,e){return`data:image/${e};base64,${a}`},openModalTwo(a){this.selectedSignificado=a,this.modalOpentwo=!0},atras(){this.$router.push("/Campos/ingresar-frases")}}},Ja=Ha,Ka=(0,g.Z)(Ja,Va,Wa,!1,null,"e548db90",null),Qa=Ka.exports,Xa=function(){var a=this,e=a._self._c;return e("div",{staticClass:"campos"},[e("h1",[a._v("EDITAR FRASES")]),e("div",{staticClass:"form-container"},[e(B.Z,{staticClass:"text",attrs:{label:"Digite su frase"},model:{value:a.nuevaFrase,callback:function(e){a.nuevaFrase=e},expression:"nuevaFrase"}}),e(B.Z,{staticClass:"text",attrs:{label:"Digite su significado"},model:{value:a.nuevoSignificado,callback:function(e){a.nuevoSignificado=e},expression:"nuevoSignificado"}}),e(n.Z,{on:{click:a.editarFrases}},[a._v("Editar información")]),e("br"),e("router-link",{attrs:{to:"/Campos/editar-frases"}},[e(n.Z,[a._v("Regresar")])],1),e("br"),e("br"),a.mensaje?e("div",{staticClass:"mensaje"},[a._v(a._s(a.mensaje))]):a._e()],1)])},Ya=[],ae={data(){return{nuevaFrase:"",nuevoSignificado:"",mensaje:""}},methods:{editarFrases(){const a=this.$route.params.id,e={frase:this.nuevaFrase,significado:this.nuevoSignificado};w.Z.put(`https://cuentaapi.pythonanywhere.com/apie/frases/${a}`,e).then((a=>{console.log(a.data),this.mensaje=a.data.message,setTimeout((()=>{this.mensaje=""}),3e3),this.nuevaFrase="",this.nuevoSignificado=""})).catch((a=>{console.error(a)}))}}},ee=ae,te=(0,g.Z)(ee,Xa,Ya,!1,null,"10ceb34a",null),se=te.exports;s["default"].use(b.Z),s["default"].use(C());const ie=new b.Z({mode:"history",routes:[{path:"/",beforeEnter:(a,e,t)=>t("/palabras")},{path:"/palabras",component:j},{path:"/refranes",component:R},{path:"/frases",component:A},{path:"/configuracion",component:W},{path:"/Campos",component:Y,meta:{hideNav:!0},children:[{path:"ingresar-palabra",component:na,meta:{hideNav:!0}},{path:"ingresar-refranes",component:ma,meta:{hideNav:!0}},{path:"ingresar-frases",component:ba,meta:{hideNav:!0}},{path:"editar-palabra",component:ja,meta:{hideNav:!0}},{path:"editar-palabra/editar/:id",component:Ra,meta:{hideNav:!0}},{path:"editar-refranes",component:Aa,meta:{hideNav:!0}},{path:"editar-refranes/editar/:id",component:Ga,meta:{hideNav:!0}},{path:"editar-frases",component:Qa,meta:{hideNav:!0}},{path:"editar-frases/editar/:id",component:se,meta:{hideNav:!0}}]}]}),re=new(C());new s["default"]({router:ie,vuetify:re,render:a=>a(v)}).$mount("#app")},6393:function(a,e,t){a.exports=t.p+"img/UNICOR.09f83ce5.png"},3062:function(a,e,t){a.exports=t.p+"img/lexicon.484c9f4b.png"}},e={};function t(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return a[s].call(r.exports,r,r.exports,t),r.exports}t.m=a,function(){var a=[];t.O=function(e,s,i,r){if(!s){var n=1/0;for(d=0;d<a.length;d++){s=a[d][0],i=a[d][1],r=a[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(a){return t.O[a](s[l])}))?s.splice(l--,1):(o=!1,r<n&&(n=r));if(o){a.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=a.length;d>0&&a[d-1][2]>r;d--)a[d]=a[d-1];a[d]=[s,i,r]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/diccionarioelectronico/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,s){var i,r,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==a[e]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(l)var d=l(t)}for(e&&e(s);c<n.length;c++)r=n[c],t.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return t.O(d)},s=self["webpackChunkdiccionariofront"]=self["webpackChunkdiccionariofront"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(8913)}));s=t.O(s)})();
//# sourceMappingURL=app.a05aa884.js.map