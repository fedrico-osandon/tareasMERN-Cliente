(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{43:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),o=a(16),s=a.n(o),i=(a(43),a(15)),l=a(5),u=a(13),b=a(2),j=a(6),p=Object(n.createContext)(),d=Object(n.createContext)(),m=function(e){var t=Object(n.useContext)(p),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useContext)(d),s=o.mensaje,l=o.autenticado,m=o.iniciarSesion;Object(n.useEffect)((function(){l&&e.history.push("/proyectos"),s&&c(s.msg,s.categoria)}),[s,l,e.history]);var O=Object(n.useState)({email:"",password:""}),f=Object(j.a)(O,2),h=f[0],x=f[1],y=h.email,v=h.password,g=function(e){x(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{className:"form-usuario",children:[a?Object(r.jsxs)("div",{className:"alerta ".concat(a.categoria),children:[" ",a.msg," "]}):null,Object(r.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(r.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()||c("Todos los campos son obligatorios","alerta-error"),m({email:y,password:v})},children:[Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:y,onChange:g})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:v,onChange:g})]}),Object(r.jsx)("div",{className:"campo-form",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesi\xf3n"})})]}),Object(r.jsx)(i.b,{to:"/nueva-cuenta",className:"enlace-cuenta",children:"Obtener Cuenta"})]})]})},O=function(e){var t=Object(n.useContext)(p),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useContext)(d),s=o.mensaje,l=o.autenticado,m=o.registrarUsuario;Object(n.useEffect)((function(){l&&e.history.push("/proyectos"),s&&c(s.msg,s.categoria)}),[s,l,e.history]);var O=Object(n.useState)({nombre:"",email:"",password:"",confirmar:""}),f=Object(j.a)(O,2),h=f[0],x=f[1],y=h.nombre,v=h.email,g=h.password,N=h.confirmar,R=function(e){x(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{className:"form-usuario",children:[a?Object(r.jsxs)("div",{className:"alerta ".concat(a.categoria),children:[" ",a.msg," "]}):null,Object(r.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(r.jsx)("h1",{children:"Obtener una cuenta"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()?g.length<6?c("El password debe ser de al menos 6 caracteres","alerta-error"):g===N?(m({nombre:y,email:v,password:g}),console.log("se realizo la tarea")):c("Los passwords no son iguales","alerta-error"):c("Todos los campos son obligatorios","alerta-error")},children:[Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(r.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tu Nombre",value:y,onChange:R})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:v,onChange:R})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:g,onChange:R})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"confirmar",children:"Confirmar Password"}),Object(r.jsx)("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Repite tu Password",value:N,onChange:R})]}),Object(r.jsx)("div",{className:"campo-form",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"})})]}),Object(r.jsx)(i.b,{to:"/",className:"enlace-cuenta",children:"Volver a Iniciar Sesi\xf3n"})]})]})},f=Object(n.createContext)(),h=function(){var e=Object(n.useContext)(f),t=e.formulario,a=e.errorformulario,c=e.mostrarFormulario,o=e.agregarProyecto,s=e.mostrarError,i=Object(n.useState)({nombre:""}),l=Object(j.a)(i,2),p=l[0],d=l[1],m=p.nombre;return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){c()},children:"Nuevo Proyecto"}),t?Object(r.jsxs)("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==m?(o(p),d({nombre:""})):s()},children:[Object(r.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Proyecto",name:"nombre",value:m,onChange:function(e){d(Object(b.a)(Object(b.a)({},p),{},Object(u.a)({},e.target.name,e.target.value)))}}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Proyecto"})]}):null,a?Object(r.jsx)("p",{className:"mensaje error",children:"El nombre del Proyecto es obligatorio"}):null]})},x=Object(n.createContext)(),y=function(e){var t=e.proyecto,a=Object(n.useContext)(f).proyectoActual,c=Object(n.useContext)(x).obtenerTareas;return Object(r.jsx)("li",{children:Object(r.jsxs)("button",{type:"button",className:"btn btn-blank",onClick:function(){return e=t._id,a(e),void c(e);var e},children:[t.nombre," "]})})},v=a(73),g=a(72),N=function(){var e=Object(n.useContext)(f),t=e.mensaje,a=e.proyectos,c=e.obtenerProyectos,o=Object(n.useContext)(p),s=o.alerta,i=o.mostrarAlerta;return Object(n.useEffect)((function(){t&&i(t.msg,t.categoria),c()}),[t]),0===a.length?Object(r.jsx)("p",{children:"No hay proyectos, comienza creando uno"}):Object(r.jsxs)("ul",{className:"listado-proyectos",children:[s?Object(r.jsx)("div",{className:"alerta ".concat(s.categoria," "),children:s.msg}):null,Object(r.jsx)(v.a,{children:a.map((function(e){return Object(r.jsx)(g.a,{timeout:200,classNames:"proyecto",children:Object(r.jsx)(y,{proyecto:e})},e._id)}))})]})},R=function(){return Object(r.jsxs)("aside",{children:[Object(r.jsxs)("h1",{children:["MERN",Object(r.jsx)("span",{children:"Tasks"})]}),Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"proyectos",children:[Object(r.jsx)("h2",{children:"Tus Proyectos"}),Object(r.jsx)(N,{})]})]})},T=function(){var e=Object(n.useContext)(d),t=e.usuario,a=e.usuarioAutenticado,c=e.cerrarSesion;return Object(n.useEffect)((function(){a()}),[]),Object(r.jsxs)("header",{className:"app-header",children:[t?Object(r.jsxs)("p",{className:"nombre-usuario",children:["Hola ",Object(r.jsxs)("span",{children:[t.nombre," "]})," "]}):null,Object(r.jsx)("nav",{className:"nav-principal",children:Object(r.jsx)("button",{className:"btn btn-blank-text cerrar-sesion",onClick:function(){return c()},children:"Cerrar Sesi\xf3n"})})]})},C=function(){var e=Object(n.useContext)(f).proyecto,t=Object(n.useContext)(x),a=t.tareaseleccionada,c=t.agregarTarea,o=t.errortarea,s=t.validarTarea,i=t.obtenerTareas,l=t.actualizarTarea,p=t.limpiarTarea;Object(n.useEffect)((function(){h(null!==a?a:{nombre:""})}),[a]);var d=Object(n.useState)({nombre:""}),m=Object(j.a)(d,2),O=m[0],h=m[1],y=O.nombre;if(!e)return null;var v=Object(j.a)(e,1)[0];return Object(r.jsxs)("div",{className:"formulario",children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()?(null===a?(O.proyecto=v._id,c(O)):(l(O),p()),console.log(v._id),i(v._id),h({nombre:""})):s()},children:[Object(r.jsx)("div",{className:"contenedor-input",children:Object(r.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Tarea...",name:"nombre",value:y,onChange:function(e){h(Object(b.a)(Object(b.a)({},O),{},Object(u.a)({},e.target.name,e.target.value)))}})}),Object(r.jsx)("div",{className:"contenedor-input",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-submit btn-block",value:a?"Editar Tarea":"Agregar Tarea"})})]}),o?Object(r.jsx)("p",{className:"mensaje error",children:"El nombre de la tarea es obligatorio"}):null]})},A=function(e){var t=e.tarea,a=Object(n.useContext)(f).proyecto,c=Object(n.useContext)(x),o=c.eliminarTarea,s=c.obtenerTareas,i=c.guardarTareaActual,l=c.actualizarTarea,u=Object(j.a)(a,1)[0],b=function(e){e.estado?e.estado=!1:e.estado=!0,l(e)};return Object(r.jsxs)("li",{className:"tarea sombra",children:[Object(r.jsxs)("p",{children:[t.nombre," "]}),Object(r.jsx)("div",{className:"estado",children:t.estado?Object(r.jsx)("button",{type:"button",className:"completo",onClick:function(){return b(t)},children:"Completo"}):Object(r.jsx)("button",{type:"button",className:"incompleto",onClick:function(){return b(t)},children:"Incompleto"})}),Object(r.jsxs)("div",{className:"acciones",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){i(e)}(t)},children:"Editar"}),Object(r.jsx)("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=t._id,o(e,u._id),void s(u._id);var e},children:"Eliminar"})]})]})},E=function(){var e=Object(n.useContext)(f),t=e.proyecto,a=e.eliminarProyecto,c=Object(n.useContext)(x).tareasproyecto;if(!t)return Object(r.jsx)("h2",{children:"Selecciona un proyecto"});var o=Object(j.a)(t,1)[0];return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("h2",{children:["Proyecto: ",o.nombre," "]}),Object(r.jsx)("ul",{className:"listado-tareas",children:0===c.length?Object(r.jsx)("li",{className:"tarea",children:Object(r.jsx)("p",{children:"No hay tareas"})}):Object(r.jsx)(v.a,{children:c.map((function(e){return Object(r.jsx)(g.a,{timeout:200,classNames:"tarea",children:Object(r.jsx)(A,{tarea:e})},e.id)}))})}),Object(r.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:function(){a(o._id)},children:"Eliminar Proyecto \xd7"})]})};var k=function(){var e=Object(n.useContext)(d).usuarioAutenticado;return Object(n.useEffect)((function(){e()}),[]),Object(r.jsxs)("div",{className:"contenedor-app",children:[Object(r.jsx)(R,{}),Object(r.jsxs)("div",{className:"seccion-principal",children:[Object(r.jsx)(T,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(C,{}),Object(r.jsx)("div",{className:"contenedor-tareas",children:Object(r.jsx)(E,{})})]})]})]})},w=a(4),_=a.n(w),S=a(11),P=a(20),I="FORMULARIO_PROYECTO",L="OBTENER_PROYECTOS",F="AGREGAR_PROYECTO",U="VALIDAR_FORMULARIO",G="PROYECTO_ACTUAL",M="ELIMINAR_PROYECTO",D="PROYECTO_ERROR",Y="TAREAS_PROYECTO",z="AGREGAR_TAREA",B="VALIDAR_TAREA",H="ELIMINAR_TAREA",V="TAREA_ACTUAL",J="ACTUALIZAR_TAREA",X="LIMPIAR_TAREA",Z="MOSTRAR_ALERTA",q="OCULTAR_ALERTA",K="REGISTRO_EXITOSO",Q="REGISTRO_ERROR",W="OBTENER_USUARIO",$="LOGIN_EXITOSO",ee="LOGIN_ERROR",te="CERRAR_SESION",ae=function(e,t){switch(t.type){case I:return Object(b.a)(Object(b.a)({},e),{},{formulario:!0});case L:return Object(b.a)(Object(b.a)({},e),{},{proyectos:t.payload});case F:return Object(b.a)(Object(b.a)({},e),{},{proyectos:[].concat(Object(P.a)(e.proyectos),[t.payload]),formulario:!1,errorformulario:!1});case U:return Object(b.a)(Object(b.a)({},e),{},{errorformulario:!0});case G:return Object(b.a)(Object(b.a)({},e),{},{proyecto:e.proyectos.filter((function(e){return e._id===t.payload}))});case M:return Object(b.a)(Object(b.a)({},e),{},{proyectos:e.proyectos.filter((function(e){return e._id!==t.payload})),proyecto:null});case D:return Object(b.a)(Object(b.a)({},e),{},{mensaje:t.payload});default:return e}},re=a(34),ne=a.n(re).a.create({baseURL:"https://enigmatic-plains-25449.herokuapp.com/"}),ce=function(e){var t=Object(n.useReducer)(ae,{proyectos:[],formulario:!1,errorformulario:!1,proyecto:null,mensaje:null}),a=Object(j.a)(t,2),c=a[0],o=a[1],s=function(){var e=Object(S.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("/api/proyectos");case 3:t=e.sent,o({type:L,payload:t.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/proyectos",t);case 3:a=e.sent,console.log(a),o({type:F,payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),o({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(S.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.delete("/api/proyectos/".concat(t));case 3:o({type:M,payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(f.Provider,{value:{proyectos:c.proyectos,formulario:c.formulario,errorformulario:c.errorformulario,proyecto:c.proyecto,mensaje:c.mensaje,mostrarFormulario:function(){o({type:I})},obtenerProyectos:s,agregarProyecto:i,mostrarError:function(){o({type:U})},proyectoActual:function(e){o({type:G,payload:e})},eliminarProyecto:l},children:e.children})},oe=function(e,t){switch(t.type){case Y:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:t.payload});case z:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:[t.payload].concat(Object(P.a)(e.tareasproyecto)),errortarea:!1});case B:return Object(b.a)(Object(b.a)({},e),{},{errortarea:!0});case H:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:e.tareasproyecto.filter((function(e){return e._id!==t.payload}))});case J:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:e.tareasproyecto.map((function(e){return e._id===t.payload._id?t.payload:e}))});case V:return Object(b.a)(Object(b.a)({},e),{},{tareaseleccionada:t.payload});case X:return Object(b.a)(Object(b.a)({},e),{},{tareaseleccionada:null});default:return e}},se=function(e){var t=Object(n.useReducer)(oe,{tareasproyecto:[],errortarea:!1,tareaseleccionada:null}),a=Object(j.a)(t,2),c=a[0],o=a[1],s=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,ne.get("/api/tareas",{params:{proyecto:t}});case 4:a=e.sent,console.log("resultado obtener tareas"),console.log(a),o({type:Y,payload:a.data.tareas}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.post("/api/tareas",t);case 2:a=e.sent,console.log(a);try{o({type:z,payload:t})}catch(r){console.log(r)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(S.a)(_.a.mark((function e(t,a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.delete("/api/tareas/".concat(t),{params:{proyecto:a}});case 3:o({type:H,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.put("/api/tareas/".concat(t._id),t);case 3:a=e.sent,console.log(a),o({type:J,payload:a.data.tarea}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(x.Provider,{value:{tareasproyecto:c.tareasproyecto,errortarea:c.errortarea,tareaseleccionada:c.tareaseleccionada,obtenerTareas:s,agregarTarea:i,validarTarea:function(){o({type:B})},eliminarTarea:l,guardarTareaActual:function(e){o({type:V,payload:e})},actualizarTarea:u,limpiarTarea:function(){o({type:X})}},children:e.children})},ie=function(e,t){switch(t.type){case Z:return{alerta:t.payload};case q:return{alerta:null};default:return e}},le=function(e){var t=Object(n.useReducer)(ie,{alerta:null}),a=Object(j.a)(t,2),c=a[0],o=a[1];return Object(r.jsx)(p.Provider,{value:{alerta:c.alerta,mostrarAlerta:function(e,t){o({type:Z,payload:{msg:e,categoria:t}}),setTimeout((function(){o({type:q})}),5e3)}},children:e.children})},ue=function(e,t){switch(t.type){case K:case $:return localStorage.setItem("token",t.payload.token),Object(b.a)(Object(b.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1});case W:return Object(b.a)(Object(b.a)({},e),{},{autenticado:!0,usuario:t.payload,cargando:!1});case te:case ee:case Q:return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{token:null,usuario:null,autenticado:null,mensaje:t.payload,cargando:!1});default:return e}},be=function(e){e?ne.defaults.headers.common["x-auth-token"]=e:delete ne.defaults.headers.common["x-auth-token"]},je=function(e){var t=e.children,a={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},c=Object(n.useReducer)(ue,a),o=Object(j.a)(c,2),s=o[0],i=o[1],l=function(){var e=Object(S.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/usuarios",t);case 3:a=e.sent,i({type:K,payload:a.data}),u(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},i({type:Q,payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(S.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&be(t),e.prev=2,e.next=5,ne.get("/api/auth");case 5:a=e.sent,i({type:W,payload:a.data.usuario}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.response),i({type:ee});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(S.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/auth",t);case 3:a=e.sent,i({type:$,payload:a.data}),u(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.msg),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},i({type:ee,payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(d.Provider,{value:{token:s.token,autenticado:s.autenticado,usuario:s.usuario,mensaje:s.mensaje,cargando:s.cargando,registrarUsuario:l,iniciarSesion:b,usuarioAutenticado:u,cerrarSesion:function(){i({type:te})}},children:t})},pe=a(35),de=function(e){var t=e.component,a=Object(pe.a)(e,["component"]);console.log(a);var c=Object(n.useContext)(d),o=c.autenticado,s=c.cargando,i=c.usuarioAutenticado;return Object(n.useEffect)((function(){i()}),[]),Object(r.jsx)(l.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return o||s?Object(r.jsx)(t,Object(b.a)({},e)):Object(r.jsx)(l.a,{to:"/"})}}))},me=localStorage.getItem("token");me&&be(me);var Oe=function(){return Object(r.jsx)(ce,{children:Object(r.jsx)(se,{children:Object(r.jsx)(le,{children:Object(r.jsx)(je,{children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",component:m}),Object(r.jsx)(l.b,{exact:!0,path:"/nueva-cuenta",component:O}),Object(r.jsx)(de,{exact:!0,path:"/proyectos",component:k})]})})})})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Oe,{})}),document.getElementById("root")),fe()}},[[71,1,2]]]);
//# sourceMappingURL=main.2ef418f0.chunk.js.map