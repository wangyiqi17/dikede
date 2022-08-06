import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getTokenTime } from '@/utils/auth'
import router from '@/router'


const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

// create an axios instance
// const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API,

//   timeout: 5000
// })

// request interceptor
// service.interceptors.request.use(
  // config => {
  //   // do something before request is sent

  //   if (store.getters.token) {
  //     // let each request carry token
  //     // ['X-Token'] is a custom headers key
  //     // please modify it according to the actual situation
  //     config.headers['X-Token'] = getToken()
  //   }
  //   return config
  // },
  // error => {
  //   // do something with request error
  //   console.log(error) // for debug
  //   return Promise.reject(error)
  // }
// )



function isTimeOut() {
  const currentTime = Date.now()
    const tokenTime = getTokenTime()
    const timeout = 2 *60 * 60 * 1000
    return currentTime - tokenTime > timeout
}

// 请求拦截器
request.interceptors.request.use(async(config) => {
  // 当前请求的配置
  if(store.state.user.token) {
    // 判断是否有token
    if(isTimeOut()) {
      // 判断token是否过期 过期则跳到登录页
      // console.log('跳到登录页');
      await store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('登录过期'))
    } else {
      // token没有过期再携带
    }
    config.headers.Authorization = store.state.user.token.token
  }
  return config
})

// response interceptor
// request.interceptors.response.use(
//   response => {
//     console.log(response);
//     const res = response.data

//     // if the custom code is not 20000, it is judged as an error.
//     if (res.code !== 20000) {
//       Message({
//         message: res.message || 'Error',
//         type: 'error',
//         duration: 5 * 1000
//       })

//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         // to re-login
//         MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//           confirmButtonText: 'Re-Login',
//           cancelButtonText: 'Cancel',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('user/resetToken').then(() => {
//             location.reload()
//           })
//         })
//       }
//       // return Promise.reject(new Error(res.message || 'Error'))
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default request
