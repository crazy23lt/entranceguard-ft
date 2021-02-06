import http from '@/utils/request'

export function doorKeys(data) {
    return http.request({
        url: '/doorkey',
        method: 'get',
        data
    })
}