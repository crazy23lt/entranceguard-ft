import { doorKeys } from "@/api/keys";
const state = {
    doorkeys: [1, 2],
    barHeight: 0
};
const mutations = {
    SET_DOORKEYS: (state, keys) => {
        state.doorKeys = keys;
    },
    SET_BARHEIGHT: (state, height) => {
        state.barHeight = height;
    }
};
const actions = {
    getDoorKeys({ commit, rootGetters }) {
        return new Promise((resolve, reject) => {
            doorKeys(rootGetters.token).then(res => {
                const { lists } = res.data;
                console.info(lists)
                commit('SET_DOORKEYS', lists);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
    getBarHeight({ commit }) {
        const { statusBarHeight } = uni.getSystemInfoSync();
        commit('SET_BARHEIGHT', statusBarHeight);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}