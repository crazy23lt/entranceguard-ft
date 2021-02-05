import Request from 'luch-request'
import { API_BASE_URL } from "../config";
import { getToken } from "@/utils/auth"
import store from "@/store";
const http = new Request();
// 请求基本配置
http.setConfig((config) => {
    config.baseURL = API_BASE_URL;
    config.timeout = 60000;
    return config;
});
// 请求之前拦截函数
http.interceptors.request.use(config => {
    if (!store.getters.token) {
        uni.navigateTo({
            url: '/login/index'
        });
    }
    config.headers['Bearer'] = getToken();
    return config;
});
// 请求之后拦截函数
http.interceptors.response.use(response => {
    // 请求成功
    return response.data;
}, response => {
    // 请求失败
    return Promise.reject(response);
});
export default http;