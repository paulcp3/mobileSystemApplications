// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ToastPlugin } from 'vux'
import { ConfirmPlugin } from 'vux'

import './assets/less/element-font-awesome.less'
import './assets/css/css.less'

Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
    /* 自动设置调试模式 */
window.DEBUG = window.location.hostname === 'localhost'

if (window.DEBUG) {
    //TODO 放置调试环境变量
    //Cookie.set('token', 'ysKOBZ1aJySHcUrxg9SUXO+G9/h1SemBAaCntWCTMcLoZXwSocurvBDtjWSAtf2d0/eILrpPh/YEmeqAw0kLDRV3b87G8fZnmrVG5iiZQEXupTUWl11cLwEHJpXcYpA0iKPE/gMubRSzYjPRnkZ3qTEqMKlwWdn5MUEnlEyNtU8/XyBmk5kz4/MeWN0yhwYWKBRROUIyzVLzHLHcgnGQ8NU=')
    console.info("You are running in DEBUG mode")
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})