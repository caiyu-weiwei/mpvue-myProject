<template>
  <div class="calendar-wrapper" :class="isClick ? 'is-click' : ''" v-if="type === 'body'" @click="cellClick(text)">
    <div class="cell cell-body" :class="!isCurrentMonth ? 'notCurrentMonthColor' : isCurrentDate ? 'isCurrentDateColor' : ''">{{text}}</div>
    <calendar-point :isClick="isClick"></calendar-point>
  </div>
  <div class="calendar-wrapper" v-else>
    <div class="cell cell-header">{{text}}</div>
  </div>
</template>

<script>
  import calendarPoint from './calendar-point'
  export default {
    data () {},
    components: {
      calendarPoint
    },
    props: {
      type: {
        type: String,
        default: 'body'
      },
      text: {
        type: String,
        default: ''
      },
      isCurrentMonth: {
        type: Boolean,
        defalt: false
      },
      isCurrentDate: {
        type: Boolean,
        defalt: false
      },
      isClick: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      cellClick (text) {
        console.log('cellClick', text)
        this.$emit('cellClick', text)
      }
    }
  }
</script>

<style scoped>
.calendar-wrapper{
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.cell{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
}
.cell-header{
  color: #CCC;
}
.cell-body{
  color: #333;
}
.notCurrentMonthColor{
  color: #CCC;
}
.isCurrentDateColor{
  color: #F54F50;
}
.is-click{
  background-color: #F54F50;
  color: #fff;
  border-radius: 50%;
}
.is-click > .cell-body{
  color: #fff;
}
</style>