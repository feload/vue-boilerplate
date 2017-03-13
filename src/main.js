import 'es6-promise/auto';
import './assets/semantic/semantic.min.css';
import './assets/semantic/semantic.min.js';
import './assets/styles/styles.scss';

import Vue from 'vue'

// Middleware
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(Vuex);
Vue.use(VueRouter);

// Directives
import './directives';

// Plugins
import plugins from './plugins/';
Vue.use(plugins);

// Store
import stores from './store/';
const store = new Vuex.Store(stores);

// Router
import routes from './routes';
const router = new VueRouter(routes);

// Pages
import App from './App'

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
