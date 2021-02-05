import { doorKeys } from "@/api/keys";
const state = {
    doorkeys: [],
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
                const { lists } = res;
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