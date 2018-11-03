import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter);

//indiquer à Vue Router les différents paths de notre app
const router = new VueRouter({
  mode: 'history', //pour utiliser le browser router mode
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
