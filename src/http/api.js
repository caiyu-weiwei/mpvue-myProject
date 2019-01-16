import fly from './config'
import qs from 'qs'
import config from '@/config'
const hostTest = config.hostTest
// const appKey = config.appKey
// const appid = config.appid

/**
 * 用法
 * 在页面引入 post
 * import { post } from '@/http/api'
 * post(params).then(res => {console.log(res)})
 */

// 通用 post 请求
export const post = (params) => {
  return fly.post(`${hostTest}${params.url}`, qs.stringify(params.data))
}

// 通用get请求
export const get = (params) => {
  return fly.get(`${hostTest}${params.url}`, qs.stringify(params.data))
}

// 登录请求
export const login = (params) => {
  return fly.post(`${hostTest}login`, params)
}
