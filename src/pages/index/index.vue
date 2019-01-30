<template>
  <div class="container-login">
    <div class="login-wrapper">
      <div class="login">账户登录</div>
      <form class="form-container">
        <div :class="computedClassStr" class="form-item">
          <input type="text" class="form-control" placeholder-style="color:#CCC; fontSize: 18px" v-model="login.account" placeholder="请输入你的登录账号" @input="handleInput('account')" @blur="handleBlur('account')" @focus="handleFocus('account')"/>
          <!-- <i v-if="isAccount" class="icon-clear" @click="handleClear('account')">×</i> -->
        </div>
        <div :class="computedClassStr1" class="form-item">
          <input type="password" class="form-control" placeholder-style="color:#CCC; fontSize: 18px" v-model="login.pwd" placeholder="请输入登录密码" @input="handleInput('pwd')" @blur="handleBlur('pwd')" @focus="handleFocus('pwd')"/>
          <!-- <i v-if="isPwd" class="icon-clear" @click="handleClear('pwd')">×</i> -->
          <!-- <img class="icon-eye" :src="iconEye" alt=""> -->
        </div>
        <div class="tip">如果忘记密码，请联系主管或相关技术人员</div>
        <button
          class="login-btn"
          :size="warnSize"
          type="warn"
          :disabled="disabled"
          @click="bindViewTap"
        >
          登录
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '@/http/api'
import { mapState, mapMutations } from 'vuex'
import { SET_OPEN_ID } from '@/store/mutation-types'
export default {
  data () {
    return {
      login: {
        account: '',
        pwd: ''
      },
      disabled: true,
      warnSize: 'default',
      isAccount: false,
      isPwd: false,
      iconEye: ''
    }
  },
  computed: {
    ...mapState(['openId']),
    computedClassStr () {
      console.log('!!this.login.account', !!this.login.account)
      return this.login.account && this.isAccount ? 'borderRed' : 'borderDef'
    },
    computedClassStr1 () {
      console.log('!!this.login.account', !!this.login.account)
      return this.login.pwd && this.isPwd ? 'borderRed' : 'borderDef'
    }
  },

  methods: {
    ...mapMutations({
      setOpenId: SET_OPEN_ID
    }),
    handleInput (str) {
      if (str === 'account') {
        this.isAccount = true
        this.isPwd = false
      }
      if (str === 'pwd') {
        this.isPwd = true
        this.isAccount = false
      }
      this.disabled = !this.login.account || !this.login.pwd
    },
    handleFocus (str) {
      if (str === 'account' && this.login.account) {
        this.isAccount = true
      }
      if (str === 'pwd' && this.login.pwd) {
        this.isPwd = true
      }
    },
    handleBlur (str) {
      console.log('str', str)
      if (str === 'account') {
        this.isAccount = false
      }
      if (str === 'pwd') {
        this.isPwd = false
      }
    },
    handleClear (str) {
      console.log('handleClear', str)
      if (str === 'account') this.login.account = ''
      if (str === 'pwd') this.login.pwd = ''
    },
    handleLogin () {
      login(this.login)
        .then(res => {
          const { data, code } = res.data
          console.log('res', res)
          if (code === '0') {
            console.log('data', data)
            this.setOpenId(data.token)
            if (data.token) {
              console.log('data.token', data.token)
              // const url = '../courseCalendar/main'
              // wx.navigateTo({url})
              this.$router.push({
                path: '/pages/courseCalendar/main'
              })
            }
          }
        })
    },
    bindViewTap () {
      console.log('login.......')
      this.$router.push({
        path: '/pages/courseCalendar/main'
      })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.container-login{
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:200rpx 0;
  box-sizing:border-box;
}

.login{
  color: #333333;
  font-size: 28px;
  text-align: center;
}

.form-item{
  width: 84%;
  height: 30px;
  margin: 0 auto;
  margin-top: 30px;
}

.form-control {
  display: inline-block;
  font-size: 18px;
  color: #000;
}

.icon-clear{
  width: 15px;
  height: 15px;
  display: inline-block;
  line-height: 10px;;
  border: 1px solid #999;
  border-radius: 50%;
  color: #fff;
  background-color: #999;
  margin-left: 50px;
  /* float: right; */
}

.borderDef{
  border-bottom: 1px solid #EEE;
}

.borderRed{
  border-bottom: 1px solid #F54F50 ;
}

.icon-eye{
  width: 18px;
  height: 9px;
  margin-left: 20px;
  float: right;
}

.tip{
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.login-btn{
  width: 84%;
}
</style>
