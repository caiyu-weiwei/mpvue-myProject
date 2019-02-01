<template>
  <div class="current-course-container">
    <div class="current-course-wrapper">
      <div class="current-course">
        <history-course-sub @handleCallTeacher="handleCallTeacher"></history-course-sub>
      </div>
      <div class="current-course">
        <history-course-sub></history-course-sub>
      </div>
      <div class="current-course">
        <history-course-sub></history-course-sub>
      </div>
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
  import historyCourseSub from '@/components/historyCourseSub/index'
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
      historyCourseSub,
      coverView,
      systemTip
    },
    methods: {
      handleClickComfirm () {
        this.modelHidden = false
        this.isPopUp = true
        this.setTimeoutClosePop()
      },
      handleClickCancle () {
        this.modelHidden = false
      },
      handleCallTeacher (data) {
        console.log(data)
        this.modelHidden = true
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
.current-course-container{
  width: 100%;
  background-color: #F4F5F7;
  padding: 15px 0;
}
.current-course-wrapper{
  width: 94.6%;
  margin: 0 auto;
}
.current-course{
  width: 100%;
  margin-bottom: 15px;
}
</style>