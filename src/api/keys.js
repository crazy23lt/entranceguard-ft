import http from '@/utils/request'

export function doorKeys(data) {
    return http({
        url: 'uniapp/doorkey',
        method: 'get',
        data
    })
}