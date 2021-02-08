import { asyncRoutes, constantRoutes } from '@/router/modules/menu.js';
const filterRouter = function (route, rule) {
    route.forEach((item,index)=>{
        console.info(item);
    })
}
const state = {
    routes: [],
    addRoutes: []
}
const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}
const actions = {
    /**
     * 生成路由
     * @param {*} param0 
     * @param {Array} roles 
     */
    generateRoutes({ commit, rootGetters }) {
        return new Promise(resolve => {
            const { auth, doorKeys } = rootGetters;
            filterRouter(asyncRoutes, { auth, doorKeys });
            commit('SET_ROUTES', [])
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