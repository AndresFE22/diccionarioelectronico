
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/dist/vuetify.css';
import palabras from './components/palabras';
import refranes from './components/refranes';
import frases from './components/frases';
import configuracion from './components/configuracion'
import campos from './components/campos'
import ingresarPalabra from './components/componentesCampos/ingresarPalabras'
import ingresarRefranes from './components/componentesCampos/ingresarRefranes'
import ingresarFrases from './components/componentesCampos/ingresarFrases'
import editarPalabras from './components/componentesCampos/editarComponentes/editarPalabras'
import cambiarPalabras from './components/componentesCampos/editarComponentes/editarPalabras/cambiarPalabras'
import editarRefranes from './components/componentesCampos/editarComponentes/editarRefranes'
import cambiarRefranes from './components/componentesCampos/editarComponentes/editarRefranes/cambiarRefranes'
import editarFrases from './components/componentesCampos/editarComponentes/editarFrases'
import cambiarFrases from './components/componentesCampos/editarComponentes/editarFrases/cambiarFrases'
import '@mdi/font/css/materialdesignicons.css';


Vue.use(VueRouter);
Vue.use(Vuetify);


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', beforeEnter: (to, from, next) => next('/palabras') },
    { path: '/palabras', component: palabras },
    { path: '/refranes', component: refranes },
    { path: '/frases', component: frases },
    {path: '/configuracion', component: configuracion },
    {path: '/Campos', component: campos,  meta: { hideNav: true },
    children: [
      {
        path: 'ingresar-palabra',
        component: ingresarPalabra,
        meta: { hideNav: true }
      },
      {
        path: 'ingresar-refranes',
        component: ingresarRefranes,
        meta: { hideNav: true }
      },
      {
        path: 'ingresar-frases',
        component: ingresarFrases,
        meta: { hideNav: true }
      },

      {
        path: 'editar-palabra',
        component: editarPalabras,
        meta: { hideNav: true }
      },

      {
        path: 'editar-palabra/editar/:id',
        component: cambiarPalabras,
        meta: { hideNav: true }
      },

      {
        path: 'editar-refranes',
        component: editarRefranes,
        meta: { hideNav: true }
      },

      {
        path: 'editar-refranes/editar/:id',
        component: cambiarRefranes,
        meta: { hideNav: true }
      },

      {
        path: 'editar-frases',
        component: editarFrases,
        meta: { hideNav: true }
      },

      {
        path: 'editar-frases/editar/:id',
        component: cambiarFrases,
        meta: { hideNav: true }
      },


      



    ]
  },
    // Agrega más rutas para cada vista adicional que desees tener
  ],
});



const vuetify = new Vuetify();

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');

