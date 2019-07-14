import {RECEIVE_USER_INFO, RESET_USER_INFO,USER_STATUS} from './mutation-types'
import {reqUserInfo,reqLogout} from '../api'
import router from '../router'

export default {
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  //路由守卫
  userLogin({commit},flag) {
    commit(USER_STATUS,flag)
  },

  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }else {
      console.log(result.msg)
      sessionStorage.removeItem("Flag")
      router.push('/login')
    }
  },

  // 异步登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
}
