<template>
  <div class="student-info">
    <div class="info-header">
      <student-info @handleClickPhone="handleClickPhone"></student-info>
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
            <history-course @handleHistoryCourse="handleHistoryCourse" @handleCallTeacher="handleCallTeacher"></history-course>
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

    <div>
      <cover-view :modelHidden="modelHidden" @handleClickCancle="handleClickCancle" @handleClickComfirm="handleClickComfirm"></cover-view>
    </div>
    <div>
      <system-tip v-if="isPopUp"></system-tip>
    </div>
  </div>
</template>

<script>
  import studentInfo from '@/components/studentInfo/index'
  import stayOnCourse from '@/components/stayOnCourse/index'
  import historyCourse from '@/components/historyCourse/index'
  import remainingCourse from '@/components/remainingCourse/index'
  import feedbackCourse from '@/components/feedbackCourse/index'
  import studentInfoFooter from '@/components/studentInfoFooter/index'
  import coverView from '@/components/coverView/index'
  import systemTip from '@/components/systemTip/index'
  export default {
    data () {
      return {
        modelHidden: false,
        isPopUp: false
      }
    },
    components: {
      studentInfo,
      stayOnCourse,
      historyCourse,
      remainingCourse,
      feedbackCourse,
      studentInfoFooter,
      coverView,
      systemTip
    },
    methods: {
      handleClickPhone (data) {
        console.log(data)
        this.modelHidden = true
      },
      handleClickComfirm () {
        this.modelHidden = false
        this.isPopUp = true
        this.setTimeoutClosePop()
      },
      handleClickCancle () {
        this.modelHidden = false
      },
      handleCheckMore (data) {
        console.log(data)
        this.$router.push({
          path: '/pages/studentCourseCalendar/main',
          query: {id: 1}
        })
      },
      handleHistoryCourse (data) {
        console.log(data)
        this.$router.push({
          path: '/pages/currentHistoryCourse/main',
          query: {id: 1}
        })
      },
      handleCallTeacher (data) {
        console.log(data)
        this.modelHidden = true
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
      },
      setTimeoutClosePop () {
        setTimeout(() => {
          this.isPopUp = false
        }, 3000)
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
</style>