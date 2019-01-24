<template>
  <div class="container-calendar">

    <div class="calendar-box">
      <!-- <div class="calendar">
        <calendar-title></calendar-title>
      </div> -->
      <div class="calendar-body">
        <calendar-table></calendar-table>
        
      </div>
    </div>

    <div class="data-list"></div>

    <div></div>

  </div>
</template>

<script>
  import calendarTitle from '@/components/calendar/calendarTitle'
  import calendarTable from '@/components/calendar/calendar-table'
  export default {
    data () {
      return {
      }
    },
    components: {
      calendarTitle,
      calendarTable
    },
    methods: {
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
  height: 50px;
}
</style>