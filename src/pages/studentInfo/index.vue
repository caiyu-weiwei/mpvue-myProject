<template>
  <div class="student-info">
    <div class="info-header">
      <student-info></student-info>
    </div>
    <scroll-view
      scroll-y
      style="height: 540px;"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
    >
      <div class="data-wrapper">
        <div class="data-box">
          <div class="stay-on-course">
            <stay-on-course @handleCheckMore="handleCheckMore"></stay-on-course>
          </div>
          <div>
            <history-course @handleHistoryCourse="handleHistoryCourse"></history-course>
          </div>
          <div>
            <remaining-course></remaining-course>
          </div>
          <div>
            <feedback-course @handleClickFeedback = "handleClickFeedback"></feedback-course>
          </div>
        </div>
      </div>
    </scroll-view>
    <div class="info-footer">
      <student-info-footer></student-info-footer>
    </div>
    <cover-view class="pop-up">
      <cover-view class="pop-up-container">
        <cover-view class="tip-subTitle">确认给“常晓雪”同学拨打电话吗？确认后请注意接通系统来电</cover-view>
        <cover-view class="btn-group">
          <cover-view class="btn-cancel" >取消</cover-view>
          <cover-view class="btn-comfirm" >确定</cover-view>
        </cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
  import studentInfo from '@/components/studentInfo/index'
  import stayOnCourse from '@/components/stayOnCourse/index'
  import historyCourse from '@/components/historyCourse/index'
  import remainingCourse from '@/components/remainingCourse/index'
  import feedbackCourse from '@/components/feedbackCourse/index'
  import studentInfoFooter from '@/components/studentInfoFooter/index'
  export default {
    data () {
      return {
        modelHidden: true
      }
    },
    components: {
      studentInfo,
      stayOnCourse,
      historyCourse,
      remainingCourse,
      feedbackCourse,
      studentInfoFooter
    },
    methods: {
      handleCheckMore (data) {
        console.log(data)
      },
      handleHistoryCourse (data) {
        console.log(data)
      },
      handleClickFeedback (data) {
        console.log(data)
      },
      upper (e) {
        console.log(e)
      },
      lower (e) {
        console.log(e)
      },
      scroll (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
.student-info{
  width: 100%;
}
.data-wrapper{
  width: 100%;
  background-color: #F4F5F7;
  padding: 15px 0;
}
.data-box{
  width: 94.6%;
  margin: 0 auto;
}
.data-box > div{
  margin-bottom: 15px;
}
.info-footer{
  width: 100%;
  height: 50px;
}
.pop-up{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}

.pop-up-container{
  width: 272px;
  height: 205px;
  background-color: #fff;
  border-radius: 10px;
  color: #333;
  font-size: 18px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}
.tip-subTitle {
  width: 212px;
  height: 78px;
  white-space: normal;
  line-height: 1.6;
  color: #333;
  font-size: 18px;
  text-align: center;
}
.btn-group{
  width: 89.4%;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  margin-top: 22px;
}
.btn-cancel,
.btn-comfirm{
  width: 108px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 24px;
  border: 1 solid #CCCCCC;
}
.btn-cancel{
  background-color: #CCC;
  color: #666;
  margin-right: 16px;
}
.btn-comfirm{
  background-color: #F54F50;
  color: #fff;
}
</style>