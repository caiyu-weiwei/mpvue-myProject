<template>
  <div class="course-wrapper">
    <div class="course-box">
      <div class="course-state">
        <img :src="courseStateUrl" alt="">
      </div>
      <div class="course-content">
        <span>刘大陆同学的 [数理逻辑训练 ]</span>
        <img :src="courseTypeUrl" alt="">
      </div>
      <div class="course-time">
        <span>上课时间：</span>
        <span>2108.07.22</span>
        <span>12:30-14:00</span>
      </div>
      <div class="course-teacher">
        <span>上课老师：</span>
        <span>陈晓晨老师</span>
      </div>
      <div class="operation-btn">
        <span>取消换课</span>
        <span>修改时间</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        courseStateUrl: '/static/images/tag_class_wait@2x.png',
        courseTypeUrl: '/static/images/tag_course_assessment @2x.png'
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
}
.course-box{
  width: 92%;
  height: 100%;
  margin: 0 auto;
}
.course-box > div:not(:nth-child(1)){
  margin-top: 14px;
}
.course-state{
  width: 100%;
  text-align: right;
}
.course-state > img{
  width: 50px;
  height: 22px;
}
.course-content{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.course-content > span{
  display: inline-block;
  color: #333;
  font-size: 18px;
}
.course-content > img{
  width: 45px;
  height: 25px;
  margin-left: 5px;
}
.course-time > span,
.course-teacher > span{
  display: inline-block;
  color: #999;
  font-size: 14px;
  /* margin-right: 5px; */
}
.operation-btn{
  widows: 100%;
  margin-top: 32.5px;
  text-align: right;
}
.operation-btn > span{
  width: 100px;
  height: 35px;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  border: .5px solid #DDD;
  border-radius: 17.5px;
  font-size: 14px;
  color: #666;
  background-color: #fff;
}
.operation-btn > span:nth-child(1){
  margin-right: 10px;
}
</style>