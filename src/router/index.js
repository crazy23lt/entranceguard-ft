import Vue from 'vue'
import Router from 'uni-simple-router';
import modules from './modules'
import { getToken } from "@/utils/auth"
const whiteList = ["/pages/home/index", "/pages/registered/index", "/pages/login/app/index", "/pages/login/wx/index"]; // no redirect whitelist
Vue.use(Router)
const router = new Router({
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