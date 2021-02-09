import { asyncRoutes, constantRoutes } from '@/router/modules/menu.js';
const filterRouter = function (route, rule) {
    let { auth, doorKeys } = rule;
    let res = route.filter(item => {
        let { meta } = item;
        let flag = true;
        meta.necessary.forEach(item_k => {
            if (item_k === "doorKeys" && doorKeys.length === 0) {
                flag = false;
            }
            if (item_k === "auth" && !auth) {
                flag = false;
            }
        })
        if (flag) {
            return item
        };
    })
    return res;
}
const compare = (a, b) => {
    let val1 = a.meta.order;
    let val2 = b.meta.order;
    return val1 - val2;
};
const state = {
    routes: [],
    addRoutes: []
}
const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes).sort(compare);
    }
}
const actions = {
    /**
     * 生成路由
     * @param {*} param0 
     * @param {Array} roles 
     */
    generateRoutes({ commit, rootGetters }) {
        let { auth, doorKeys } = rootGetters;
        return new Promise(resolve => {
            let accessedRoutes = filterRouter(asyncRoutes, { auth, doorKeys });
            commit('SET_ROUTES', accessedRoutes)
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}