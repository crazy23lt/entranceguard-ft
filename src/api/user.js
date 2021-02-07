import http from '@/utils/request'

export function login(data) {
    return http.request({
        url: '/login',
        method: 'get',
        data
    })
}
export function getCode(data) {
    return http.request({
        url: "/getcode",
        method: "get",
        data
    });
}
export function loginOut(data) {
    return http.request({
        url: '/loginout',
        method: 'get',
        data
    })
}
export function getInfo(data) {
    return http.request({
        url: '/getinfo',
        method: 'get',
        data
    })
}