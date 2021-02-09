import { login, loginOut, getInfo, getCode } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth"
const state = {
    token: getToken(),
    name: "",
    phone: "",
    auth: false,
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INFO: (state, info) => {
        state.name = info.name
        state.phone = info.phone
        state.auth = info.auth
    },
};
const actions = {
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        });
    },
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                const { name, phone, auth } = res.data;
                commit('SET_INFO', { name, phone, auth });
                resolve(res)
            }).catch(error => {
                reject(error);
            })
        })
    },
    logout({ commit, state, dispatch }) {
        console.info(arguments)
        return new Promise((resolve, reject) => {
            loginOut(state.token).then(() => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            }).catch(error => {
                reject(error);
            })
        });
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    },
    authCode({ commit }, phone) {
        return new Promise((resolve, reject) => {
            getCode(phone).then(response => {
                const { data } = response;
                resolve(data.code);
            }).catch(error => reject(error));
        });
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}