import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from "vue-lazyload"

const loadimage = require("assets/img/loading.gif");

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
Vue.use(Toast)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: loadimage,
  attempt: 1
});

FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
