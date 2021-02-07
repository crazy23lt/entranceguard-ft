import { doorKeys } from "@/api/keys";
const state = {
    doorKeys: [],
    safeArea: {}
};
const mutations = {
    SET_DOORKEYS: (state, keys) => {
        state.doorKeys = keys;
    },
    SET_SAFEAREA: (state, safeArea) => {
        state.safeArea = safeArea;
    }
};
const actions = {
    getDoorKeys({ commit, rootGetters }) {
        return new Promise((resolve, reject) => {
            doorKeys(rootGetters.token).then(res => {
                const { lists } = res.data;
                commit('SET_DOORKEYS', lists);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
    getSafeArea({ commit }) {
        const { safeArea } = uni.getSystemInfoSync();
        console.info(uni.getSystemInfoSync());
        commit('SET_SAFEAREA', safeArea);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}