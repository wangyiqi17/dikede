import request from '@/utils/request'

import requestarr from '@/utils/piction'


export function login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}



// 验证码
export const yanzm = (clientToken) => {
  return requestarr({
    url: `/api/user-service/user/imageCode/${clientToken}`
  })
}
