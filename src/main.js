import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueRouter from 'vue-router'
// import VueAxios from 'vue-axios'

// import Users from './components/Users.vue';
// import CoronaInfo from './components/CoronaInfo.vue';

Vue.prototype.axios = axios
Vue.config.productionTip = false
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.use(VueRouter)

// const routes = [
//     { path: '/users', components: Users },
//     { path: '/', components: CoronaInfo }
// ];
// const router = new VueRouter({
//     routes
// });



new Vue({
    // router,
    render: h => h(App),
}).$mount('#app')