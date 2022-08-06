import request from '@/utils/request'

import requestarr from '@/utils/piction'


export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}

export function getUserInfoApi(id) {
  return request({
    url: '/user-service/user/' + id, 
  })
}

// /**
//  * 
//  * @param {String} id 用户id
//  * @returns promise
//  */
// export function getUserDetail(id) {
//     return request({
//         url:'/api/user-service/user/' + id,
//     })
// }

export function logout() {
}


// 验证码
export const yanzm = (clientToken) => {
  return requestarr({
    url: `/api/user-service/user/imageCode/${clientToken}`
  })
}


// 工单列表
export function getGdApi() {
  return request({
    url: '/task-service/task/search',
  })
}