<template>
  <div class="container-calendar">

    <div class="calendar-box">
      <calendar-table @getClickDate="getClickDate"></calendar-table>
    </div>

    <cover-view
      scroll-y
      style="height: 550px;"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
    >
      <div class="data-list">
        <div class="course-date">
          <span></span>
          <span>{{month + 1}}月{{day}}日</span>
        </div>
        <div class="course-message">
          <div class="course-detail">
            <course-detail></course-detail>
          </div>
          <div class="course-detail">
            <course-detail></course-detail>
          </div>
          <div class="course-detail">
            <course-detail></course-detail>
          </div>
        </div>
        <div class="empty-data">
          <img src="/static/images/img_emptystate@2x.png" alt="">
          <div class="hint">今天没有学生上课哦</div>
        </div>   
      </div>
    </cover-view>

  </div>
</template>

<script>
  import calendarTable from '@/components/calendar/calendar-table'
  import courseDetail from '@/components/courseDetail/index'
  export default {
    data () {
      return {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth(),
        day: new Date().getDate(),
        dataList: []
      }
    },
    components: {
      calendarTable,
      courseDetail
    },
    methods: {
      getClickDate (year, month, day) {
        this.year = year
        this.month = month
        this.day = day
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
.container-calendar{
  width: 100%;
  height: 100%;
  background-color: #F4F5F7;
}
.calendar-box{
  width: 100%;
}
.data-list{
  width: 100%;
  padding-bottom: 29px;
}
.data-list > div {
  margin: 0 auto;
  margin-top: 12px;
}
.course-date{
  width: 94.7%;
}
.course-date > span:nth-child(1){
  width: 2px;
  height: 14px;
  display: inline-block;
  background-color: #F54F50;
}
.course-date > span:nth-child(2){
  display: inline-block;
  color: #333;
  padding: 0 5px;
  font-size: 14px;
}
.course-message{
  width: 94.7%;
}
.course-detail{
  width: 100%;
  margin-bottom: 15px;
}
.empty-data{
  width: 100%;
  height: 336px;
  text-align: center;
}
.empty-data > img{
  width: 114px;
  height: 139px;
}
.empty-data > .hint{
  color: #999;
  font-size: 14px;
  text-align: center;
  margin-top: 14px;
}
</style>