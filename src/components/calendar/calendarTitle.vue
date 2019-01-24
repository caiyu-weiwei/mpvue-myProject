<template>
  <div class="header-box">
    <div class="year">{{year}}</div>
    <div class="month">
      <div class="left" @click="handleChangeDate('left')">
        <img src="/static/images/icon_arrow_left@2x.png" alt="">
      </div>
      <span>{{month}}月</span>
      <div class="right" @click="handleChangeDate('right')">
        <img src="/static/images/icon_arrow_right@2x.png" alt="">
      </div>
    </div>
    <div class="current">
      <div>今</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        year: 0,
        month: 0
      }
    },
    computed: {
      // fullMonth () {
      //   return Number(this.month) + 1
      // }
    },
    created () {
      this.initDate()
    },
    methods: {
      initDate () {
        this.year = (new Date()).getFullYear()
        this.month = (new Date()).getMonth() + 1
      },
      handleChangeDate (type) {
        let year = this.year
        let month = this.month
        if (type === 'left') {
          this.year = month - 1 < 1 ? year - 1 : year
          this.month = month - 1 < 1 ? 12 : month - 1
        }
        if (type === 'right') {
          this.year = month + 1 > 12 ? year + 1 : year
          this.month = month + 1 > 12 ? 1 : month + 1
        }
        this.$emit('handleChangeDate', this.year, this.month)
        console.log('handleChangeDate')
      }
    }
  }
</script>

<style scoped>
.header-box{
  width: 100%;
  height: 66px;
  background-color: #FF4A4A;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.header-box > div{
  color: #fff;
}
.year{
  width: 30%;
  text-align: center;
}
.month{
  width: 40%;
  text-align: center;
}
.month > span{
  width: 45px;
  display: inline-block;
  color: #fff;
  text-align: center;
}
.month > div{
  width: 24px;
  height: 24px;
  display: inline-block;
}
.month > div.left{
  text-align: right;
}
.month > div.right{
  text-align: left;
}
.month > div > img{
  width: 6px;
  height: 12px;
}
.header-box > div.current{
  width: 30%;
}
.header-box > div.current > div{
  width: 22px;
  height: 22px;
  background-color: #fff;
  color: #F54F50;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>