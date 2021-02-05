import http from '@/utils/request'

export function login(data) {
    return http({
        url: '/uniapp/login',
        method: 'get',
        data
    })
}
export function loginOut(data) {
    return http({
        url: '/uniapp/loginout',
        method: 'get',
        data
    })
}
export function getInfo(data) {
    return http({
        url: '/uniapp/getinfo',
        method: 'get',
        data
    })
}