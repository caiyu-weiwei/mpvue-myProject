import * as types from './mutation-types'
const mutations = {
  [types.SET_OPEN_ID] (state, param) {
    state.openId = param
  }
}
export default mutations
