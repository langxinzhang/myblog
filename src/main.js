import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
//引入vuex
import store from './store/index'
import {Menu, MenuItem} from 'element-ui';
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
