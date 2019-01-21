import Vue from 'vue'
import App from './App'
import store from './store/index'
import MpvueRouterPatch from 'mpvue-router-patch' // 兼容vue-router写法

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'
// 引入store, 并绑定到Vue构造函数的原型上，这样在每个vue的组件都可以通过this.$store访问store对象
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
