import { reportPhones } from "@/api/urgent";
const state = {
    reportPhones: [],
};
const mutations = {
    SET_REPORTPHONE: (state, phone) => {
        state.reportPhones = phone
    }
};
const actions = {
    getReportPhone({ commit }) {
        return new Promise((resolve, reject) => {
            reportPhones().then(res => {
                const { lists } = res.data;
                commit("SET_REPORTPHONE", lists);
                resolve();
            }).catch(error => {
                reject(error);
            })
        });
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}