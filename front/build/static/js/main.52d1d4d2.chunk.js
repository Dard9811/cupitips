(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),l=a.n(i),o=a(37),s=a(8),c=a(2),m=a(3),u=a(5),p=a(4),h=a(6),d=(a(25),a(26),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).clicked=function(){a.props.history.push("/cupitip/"+a.props.tip._id)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tipInList container-flex disable-select",onClick:this.clicked.bind(this)},r.a.createElement("div",{className:"row tipTitle"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("div",{className:"numeroNivel mx-auto"},r.a.createElement("div",{className:"txtNumeroNivel"},"N"+this.props.tip.nivel))),r.a.createElement("div",{className:"col-sm-10 text-left my-auto txtNombre"},r.a.createElement("div",{className:"row"},this.props.tip.nombre))),r.a.createElement("div",{className:"row container-fluid tags"},r.a.createElement("label",{className:"tema col-sm-7"},r.a.createElement("strong",null,"Tema:")," ",this.props.tip.tema),r.a.createElement("label",{className:"likes col-sm-2"},this.props.tip.likes," ",r.a.createElement("i",{class:"fas fa-star"})," ")))}}]),t}(n.Component)),v=Object(o.d)(d),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.showFilter()}},{key:"renderCols",value:function(e,t){for(var a="col-sm-"+12/e.length+" text-center",n=[],i=0;i<e.length;i++)n.push(r.a.createElement("div",{className:a,key:"col"+i},t(e[i])));return n}},{key:"renderElems",value:function(e){return e.map((function(e){return r.a.createElement(v,{key:"TipInList"+e._id,tip:e})}))}},{key:"render",value:function(){var e=window.innerWidth,t=1;e>=768&&t++,e>=1200&&t++;for(var a=[],n=0;n<t;n++)a.push([]);for(var i=0;i<this.props.tips.length;i++)a[i%t].push(this.props.tips[i]);return r.a.createElement("div",{className:"container-fluid",id:"tipList"},r.a.createElement("div",{className:"row"},this.renderCols(a,this.renderElems)))}}]),t}(n.Component),b=Object(o.d)(f),E=(a(32),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).clickAuth=function(){a.props.history.push("/Auth")},a.clickOut=function(){a.props.handleAuthentication(!1,void 0)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderFiltrar",value:function(e){if(e)return r.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"collapse","data-target":"#collapseFilters","aria-expanded":"false","aria-controls":"collapseFilters"},"Filtrar")}},{key:"renderNivel",value:function(e){var t=this;if(!0===e.estado){return r.a.createElement("div",{key:"NivButt"+e.nombre,className:"btn btnnivel btn-primary",onClick:function(){for(var a=t.props.filtros,n=0;n<a.nivel.length;n++)a.nivel[n].nombre===e.nombre&&(a.nivel[n].estado=!1);t.props.actualizarFiltros(a)}},"Nivel ",e.nombre)}return r.a.createElement("div",{key:"NivButtF"+e.nombre,className:"btn btnnivel btn-outline-primary",onClick:function(){for(var a=t.props.filtros,n=0;n<a.nivel.length;n++)a.nivel[n].nombre===e.nombre&&(a.nivel[n].estado=!0);t.props.actualizarFiltros(a)}},"Nivel ",e.nombre)}},{key:"renderNiveles",value:function(e){var t=this;if(void 0!==e)return e.map((function(e){return t.renderNivel(e)}))}},{key:"actualizarNombre",value:function(e){var t=this.props.filtros;t.nombre=e.target.value,this.props.actualizarFiltros(t)}},{key:"actualizarTema",value:function(e){var t=this.props.filtros;t.tema=e.target.value,this.props.actualizarFiltros(t)}},{key:"renderNombre",value:function(){var e="";return void 0!==this.props.filtros.nombre&&(e=this.props.filtros.nombre),r.a.createElement("div",{className:"nombreRw row"},r.a.createElement("div",{className:"col-sm-2 text-center my-auto nombreStr"},"Name:"),r.a.createElement("div",{className:"col-sm-10 text-left"},r.a.createElement("input",{type:"text",value:e,onChange:this.actualizarNombre.bind(this)})))}},{key:"renderTema",value:function(){var e="";return void 0!==this.props.filtros.tema&&(e=this.props.filtros.tema),r.a.createElement("div",{className:"nombreRw row"},r.a.createElement("div",{className:"col-sm-2 text-center my-auto nombreStr"},"Tema:"),r.a.createElement("div",{className:"col-sm-10 text-left"},r.a.createElement("input",{type:"text",value:e,onChange:this.actualizarTema.bind(this)})))}},{key:"renderFilters",value:function(e){if(e){var t=[],a=[];if(void 0!==this.props.filtros.nivel)for(var n=0;n<this.props.filtros.nivel.length;n++)n%2===0?t.push(this.props.filtros.nivel[n]):a.push(this.props.filtros.nivel[n]);return r.a.createElement("div",{className:"collapse",id:"collapseFilters"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 text-center"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-4 mx-auto"},this.renderNiveles(t)),r.a.createElement("div",{className:"col-sm-4 mx-auto"},this.renderNiveles(a)))),r.a.createElement("div",{className:"col-sm-6 text-center"},this.renderNombre()," ",this.renderTema()),r.a.createElement("div",{className:"col-sm-3 text-center"})))}}},{key:"renderLoginButton",value:function(e){return e?r.a.createElement("button",{type:"button",onClick:this.clickOut,className:"btn btn-primary"},this.props.username+"|Salir"):r.a.createElement("button",{type:"button",onClick:this.clickAuth,className:"btn btn-primary"},"Ingresar")}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"topnav",id:"navBar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 text-right"},r.a.createElement("a",{href:"/",className:"text-right"},r.a.createElement("img",{className:"logo",src:"/images/logo_disc.png",alt:"disc"}))),r.a.createElement("div",{className:"col-sm-4 text-center my-auto",id:"colCenter"},this.renderFiltrar(this.props.show)),r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-3 text-center my-auto"},this.renderLoginButton(this.props.autenticado))),this.renderFilters(this.props.show))))}}]),t}(n.Component)),N=Object(o.d)(E),y=a(10),k=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).click=function(){a.props.history.push("/")},a.findTip=function(e){for(var t=a.props.tips,n=0;n<t.length;n++)if(t[n]._id===e)return t[n]},a.clickBack=function(){a.props.history.push("/")},a.sendComment=function(){var e={};e._id=a.props.match.params.id,e.comentario=a.comentario.current.value,console.log(JSON.stringify(e)),fetch("comment",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.result.n>0?alert("Tu comentario ha sido enviado correctamente."):alert("Ha ocurrido un error y tu comentario no pudo ser enviado.")}))},a.props.hideFilter(),a.comentario=r.a.createRef(),a.sendComment=a.sendComment.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.findTip(this.props.match.params.id);return null!=e?r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:this.clickBack},"Back"),r.a.createElement("h2",null," ",e.nombre," "),r.a.createElement("h3",null," Nivel: ",e.nivel),r.a.createElement("h5",null,"Tema: ",e.tema),r.a.createElement("h6",null,"Descripcion: ",e.descripcion),r.a.createElement("h1",null,"Codigo de Ejemplo"),r.a.createElement("h2",null,"Codigo correcto"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.codigo_bien}}),r.a.createElement("h2",null,"Codigo correcto"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.codigo_mal}}),r.a.createElement("h1",null,"Correcci\xf3n, comentario o sugerencia:"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Comentario",ref:this.comentario})),r.a.createElement("button",{className:"btn btn-primary",onClick:this.sendComment},"Enviar")):r.a.createElement("div",null)}}]),t}(n.Component)),g=Object(o.d)(k),O=(a(34),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).clickBack=function(){a.props.history.push("/")},a.clickLogin=function(){var e={};e.username=a.usuario.current.value,console.log(e),fetch("auth",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.length>0?(a.props.handleAuthentication(!0,e[0].username),a.clickBack()):alert("Usuario no registrado")}))},a.props.hideFilter(),a.usuario=r.a.createRef(),a.clickLogin=a.clickLogin.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("Auth")}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("b",null,"Username")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Usuario",ref:this.usuario})),r.a.createElement("div",{className:"btn btn-primary",onClick:this.clickLogin},"Login"),r.a.createElement("div",{className:"btn btn-primary",onClick:this.clickBack},"Cancelar"))}}]),t}(n.Component)),j=Object(o.d)(O),F=(a(35),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).actualizarFiltros=function(e){for(var t=[],n=!0,r=0;r<e.nivel.length;r++)!0===e.nivel[r].estado&&(n=!1);for(var i=0;i<a.state.tips.length;i++){for(var l=!0,o=0;o<e.nivel.length;o++)n||e.nivel[o].nombre!==a.state.tips[i].nivel||(l=e.nivel[o].estado);""!==e.nombre&&-1===a.state.tips[i].nombre.indexOf(e.nombre)&&(l=!1),""!==e.tema&&-1===a.state.tips[i].tema.indexOf(e.tema)&&(l=!1),a.state.tips[i].likes<e.likes&&(l=!1),l&&t.push(a.state.tips[i])}a.setState({filtros:e,tipsFiltrados:t})},a.hideFilter=function(){a.setState({showFilters:!1})},a.showFilter=function(){a.setState({showFilters:!0})},a.handleAuthentication=function(e,t){a.setState({autenticado:e}),a.setState({username:t})},a.state={tips:[],filtros:[],tipsFiltrados:[],showFilters:!1,autenticado:!1,username:void 0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/tips").then((function(e){return e.json()})).then((function(t){for(var a={nivel:[],nombre:"",likes:0,tema:""},n=0;n<t.length;n++){for(var r=!1,i=0;i<a.nivel.length;i++)a.nivel[i].nombre===t[n].nivel&&(r=!0);r||a.nivel.push({nombre:t[n].nivel,estado:!1})}e.setState({tips:t,filtros:a,tipsFiltrados:t})}))}},{key:"renderNavBar",value:function(){return r.a.createElement(N,{show:this.state.showFilters,filtros:this.state.filtros,actualizarFiltros:this.actualizarFiltros,hideFilter:this.hideFilter,autenticado:this.state.autenticado,username:this.state.username,handleAuthentication:this.handleAuthentication})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderNavBar(),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(b,{tips:e.state.tipsFiltrados,showFilter:e.showFilter})}}),r.a.createElement(o.a,{path:"/Auth",render:function(t){return r.a.createElement(j,{hideFilter:e.hideFilter,handleAuthentication:e.handleAuthentication})}}),r.a.createElement(o.a,{path:"/cupitip/:id",render:function(t){return r.a.createElement(g,{tips:e.state.tips,hideFilter:e.hideFilter})}})))}}]),t}(r.a.Component)),w=Object(s.a)();l.a.render(r.a.createElement(o.b,{history:w},r.a.createElement(F,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.52d1d4d2.chunk.js.map