<template>
  <div class="student-message">
    <div class="message">
      <div class="student-img">
        <img :src="studentHeaderUrl" alt="">
      </div>
      <div class="student-info">
        <div class="student-name">边靖</div>
        <div class="student-course">
          <span>年级：小三</span>
          <span>|</span>
          <span>总剩余课时：600</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        studentHeaderUrl: '/static/images/default_header.png'
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
  width: 96%;
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
  color: #333;
  font-size: 16px;
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