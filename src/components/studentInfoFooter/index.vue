<template>
  <div class="info-footer">
    <div class="footer-item">
      <img :src="formalCourseUrl" alt="">
      <span>开正式课</span>
    </div>
    <div class="footer-item">
      <img :src="assessmentCourseUrl" alt="">
      <span>预约测评课</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formalCourseUrl: '/static/images/icon_course@2x.png',
        assessmentCourseUrl: '/static/images/icon_test@2x.png'
      }
    }
  }
</script>

<style scoped>
.info-footer{
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.info-footer > div{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.info-footer > div:nth-child(1){
  border-right: 1px solid #EEE;
}
.info-footer > div > img{
  width: 20px;
  height: 17px;
}
.info-footer > div > span{
  display: inline-block;
  color: #666;
  font-size: 16px;
  padding-left: 10px;
}
</style>