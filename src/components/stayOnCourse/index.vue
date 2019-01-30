<template>
  <div class="course-wrapper">
    <div class="course-box">
      <div class="course-type">
        <span>最近待上课程</span>
        <span v-if="courseData.course" @click="handleCheckMore('更多')">更多 ></span>
        <span v-if="!courseData.course" @click="handleCheckMore('学生课程日历')">学生课程日历 ></span>
      </div>
      <div v-if="courseData.course">
        <div class="course-content">
          <span>掌门少儿语文思维训练</span>
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
      </div>
      <div class="course-empty" v-else>
        <img :src="courseEmptyUrl" alt="">
        <div>暂无待上课程</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        courseStateUrl: '/static/images/tag_class_wait@2x.png',
        courseTypeUrl: '/static/images/tag_course_assessment @2x.png',
        courseEmptyUrl: '/static/images/img_emptystate@2x.png'
      }
    },
    props: {
      courseData: {
        type: Object,
        default: {}
      }
    },
    methods: {
      handleCheckMore (type) {
        this.$emit('handleCheckMore', type, 1)
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
.course-type{
  width: 100%;
}
.course-type > span:nth-child(1){
  display: inline-block;
  width: 65.5%;
  color: #333;
  font-size: 20px;
}
.course-type > span:nth-child(2){
  display: inline-block;
  width: 34.5%;
  color: #999;
  font-size: 14px;
  text-align: right;
}
.course-content{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.course-content > span{
  display: inline-block;
  color: #666;
  font-size: 14px;
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
}
.course-empty{
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.course-empty > img{
  width: 84px;
  height: 90px;
}
.course-empty > div{
  width: 100%;
  color: #999;
  font-size: 14px;
  text-align: center;
}
</style>