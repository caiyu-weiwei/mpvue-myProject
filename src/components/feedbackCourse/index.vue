<template>
  <div class="feedback-course">
    <div class="feedback-wrapper">
      <span>待课程反馈</span>
      <span>总3节课程待反馈</span>
      <span @click="handleClickFeedback">></span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleClickFeedback () {
        this.$emit('handleClickFeedback', 1)
      }
    }
  }
</script>

<style scoped>
.feedback-course{
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 19px 0;
  margin: 0 auto;
}
.feedback-wrapper{
  width: 92%;
  margin: 0 auto;
}
.feedback-wrapper > span{
  display: inline-block;
  width: 33%;
}
.feedback-wrapper > span:nth-child(1){
  color: #333;
  font-size: 20px;
}
.feedback-wrapper > span:nth-child(2){
  color: #999;
  font-size: 14px;
}
.feedback-wrapper > span:nth-child(3){
  color: #BABABA;
  font-size: 20px;
  text-align: right;
}
</style>