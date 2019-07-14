import {RECEIVE_USER_INFO, RESET_USER_INFO,USER_STATUS} from './mutation-types'

export default {
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [USER_STATUS] (state, flag) {
    state.isLogin = flag
  }
}
