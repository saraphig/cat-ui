import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { SetRouterTransition } from '@/assets/js/middleware';
Vue.config.productionTip = false
SetRouterTransition(router);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
