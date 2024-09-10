import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueAwesomeSwiper from "vue-awesome-swiper";

import 'swiper/swiper-bundle.css';

// global css for whole page
import './assets/css/Global.css'

import BootstrapVue from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
