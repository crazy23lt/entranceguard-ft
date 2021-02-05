import { login, loginOut, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth"
const state = {
    token: getToken(),
    name: ""
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    }
};
const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
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
                const { name } = res;
                commit('SET_NAME', name)
                resolve(data)
            }).catch(error => {
                reject(error);
            })
        })
    },
    logout({ commit, state, dispatch }) {
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
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}