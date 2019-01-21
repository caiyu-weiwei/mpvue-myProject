<template>
  <div class="container-calendar">

    <div>
      <calendar-table type="header"></calendar-table>
    </div>

    <div></div>

  </div>
</template>

<script>
  // import calendar from '@/components/calendar'
  import calendarTable from '@/components/calendar/calendar-table'
  export default {
    data () {
      return {
      }
    },
    components: {
      // calendar,
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
  border-radius: 10px;
}
</style>