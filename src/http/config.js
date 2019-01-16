/**
 * fly 配置文件
 */

/**
* 引入fly
*/

// import 配置文件
// import Vue from 'vue'
import config from '@/config'

// npm引入方式
var Fly = require('flyio/dist/npm/wx')

// 创建fly实例
var fly = new Fly()

/**
 * 配置请求基地址
 */

// 定义公共headers
// fly.config.headers = {xx: 5, bb: 6, dd: 7}

// 设置超时
fly.config.timeout = 20000

// 设置请求基地址
fly.config.baseURL = config.hostTest

// 添加请求拦截器
fly.interceptors.request.use(request => {
  // 给所有请求添加自定义头
  request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  console.log(request.body)
  // 终止请求
  // var err = new Error('')
  // err.request = request
  // return Promise.reject(new Error(''))
  // 可以显式返回config, 也可以不返回，没有返回值时拦截器中默认返回config
  return request
})

// 添加响应拦截器, 响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    // 只将请求响应结果返回
    return response
  },
  err => {
    // 发生网络错误后会走这里
    console.log(err)
    return Promise.resolve('发生网络错误...')
  }
)
// 将fly实例挂在vue原型上
// Vue.prototype.$http = fly
export default fly
