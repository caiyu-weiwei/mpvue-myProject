/**
 * 提示与加载工具类
 */
export default class Tips {
  constructor () {
    this.isLoading = false
  }
  /**
   * 弹出框提示
   */
  static success (title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      })
    }, 300)
    if (duration) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }
  /**
   * 弹出确认框
   */
  static confirm (text, payload = {}, title = '提示') {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          } else if (res.cancel) {
            reject(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    })
  }
}
