<template>
  <div class="course-wrapper">
    <div class="course-box">
      <div class="course-type">
        <span>最近历史课程</span>
        <span @click="handleCheckMore">更多 ></span>
      </div>
      <div class="course-teacher">
        <span>上课科目：</span>
        <span>数理逻辑</span>
      </div>
      <div class="course-teacher">
        <span>上课老师：</span>
        <span>陈晓晨老师</span>
        <img :src="phoneUrl" alt="" @click="handleCallTeacher">
      </div>
      <div class="course-time">
        <span>上课时间：</span>
        <span>2018.07.22</span>
        <span>12:30-14:00</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        phoneUrl: '/static/images/icon_telephone@2x.png'
      }
    },
    methods: {
      handleCheckMore () {
        this.$emit('handleHistoryCourse', 1)
      },
      handleCallTeacher () {
        this.$emit('handleCallTeacher', 'call teacher')
      }
    }
  }
</script>

<style scoped>
.course-wrapper{
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding-bottom: 30px;
  padding-top: 20px;
  box-shadow: 1px 1px 6px 0
}
.course-box{
  width: 92%;
  height: 100%;
  margin: 0 auto;
}
.course-box > div:not(:nth-child(1)){
  margin-top: 14px;
}
.course-type > span:nth-child(1){
  display: inline-block;
  width: 75.5%;
  color: #333;
  font-size: 20px;
}
.course-type > span:nth-child(2){
  display: inline-block;
  width: 24.5%;
  color: #999;
  font-size: 14px;
  text-align: right;
}
.course-teacher{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.course-time > span,
.course-teacher > span{
  display: inline-block;
  color: #999;
  font-size: 14px;
}
.course-teacher > img{
  width: 18px;
  height: 18px;
  margin-left: 15px;
}
</style>