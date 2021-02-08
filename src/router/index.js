import Vue from 'vue'
import Router from 'uni-simple-router';
import modules from './modules'
import { getToken } from "@/utils/auth"
const whiteList = ["/login", "/"]; // no redirect whitelist
Vue.use(Router)
const router = new Router({
    h5: {
        vueRouterDev: true,  //完全使用vue-router开发 默认 false  
    },
    routes: [...modules]//路由表
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
    console.info(to.path)
    const hasToken = getToken()
    if (hasToken) {
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next({ name: "login" })
        }
    }
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;