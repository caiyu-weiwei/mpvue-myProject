<template>
  <div class="student-calendar">
    <div class="calendar-box">
      <calendar-table @getClickDate="getClickDate"></calendar-table>
    </div>
  </div>
</template>

<script>
  import calendarTable from '@/components/calendar/calendar-table'
  export default {
    data () {
      return {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth(),
        day: new Date().getDate()
      }
    },
    components: {
      calendarTable
    },
    mounted () {
      wx.setNavigationBarTitle({
        title: '动态标题'
      })
    },
    methods: {
      getClickDate (year, month, day) {
        this.year = year
        this.month = month
        this.day = day
      }
    }
  }
</script>

<style scoped>
.student-calendar{
  width: 100%;
  height: 100%;
  background-color: #F4F5F7;
}
.calendar-box{
  width: 100%;
}
</style>