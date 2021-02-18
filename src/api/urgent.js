import http from '@/utils/request'

export function reportPhones(data) {
    return http.request({
        url: '/getrepotphone',
        method: 'get',
        data
    })
}