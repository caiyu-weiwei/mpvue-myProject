<template>
  <div class="student-message">
    <div class="message">
      <div class="student-img">
        <img :src="studentHeaderUrl" alt="">
      </div>
      <div class="student-info">
        <div class="student-name">
          <span>常晓雪</span>
          <img :src="phoneUrl" alt="">
        </div>
        <div class="student-course">
          <span>年级：小三</span>
          <span>|</span>
          <span>江苏省 无锡市 滨湖区</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        studentHeaderUrl: '/static/images/default_header.png',
        phoneUrl: '/static/images/icon_telephone@2x.png'
      }
    }
  }
</script>

<style scoped>
.student-message{
  width: 100%;
  height: 70px;
  background-color: #fff;
}
.message{
  width: 100%;
  height: 100%;
  margin-left: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: center; */
  align-items: center;
}
.student-img{
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.student-img > img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.student-name{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.student-name > span{
  display: inline-block;
  color: #333;
  font-size: 20px;
  margin-right: 10px;
}
.student-name > img{
  width: 29px;
  height: 29px;
}
.student-course > span{
  display: inline-block;
  color: #999;
  font-size: 14px;
}
.student-course > span:nth-child(2){
  margin: 0 10px;
}
</style>