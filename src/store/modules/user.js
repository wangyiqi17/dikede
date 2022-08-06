
import { login,getUserInfoApi,getGdApi, logout } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: {},
    GdInfo: {}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setGdInfo(state, payload) {
      state.GdInfo = payload
    }
  },
  actions: {
     async getToken(context, payload) {
      // console.log(payload);
      const res = await login(payload)
      console.log(res)
      context.commit('setToken', res.data)
      // context.commit("setUserInfo",res.data)
      // setTokenTime()
    },
    async getUserInfo(context, id) {
      const userInfo = await getUserInfoApi(id)
      console.log(userInfo)

      context.commit('setUserInfo', userInfo.data)
    },
    async getGd(context, taskId) {
      const GdInfo = await getGdApi(taskId)
      console.log(GdInfo)
      // context.commit('setGdInfo', res)
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
    }
  }
}