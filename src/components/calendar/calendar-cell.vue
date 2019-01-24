<template>
  <div class="calendar-wrapper" v-if="type === 'body'" @click="cellClick(text)">
    <div class="cell-wrapper" :class="isClick ? 'is-click' : ''">
      <div class="cell cell-body" :class="!isCurrentMonth ? 'notCurrentMonthColor' : isCurrentDate ? 'isCurrentDateColor' : ''">{{text}}</div>
      <calendar-point :isClick="isClick"></calendar-point>
    </div>
  </div>
  <div class="calendar-wrapper" v-else>
    <div class="cell-wrapper">
      <div class="cell cell-header">{{text}}</div>
    </div>
  </div>
</template>

<script>
  import calendarPoint from './calendar-point'
  export default {
    data () {
      return {}
    },
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
        if (!this.isCurrentMonth) return
        console.log('cellClick', text)
        this.$emit('cellClick', text)
      }
    }
  }
</script>

<style scoped>
.calendar-wrapper{
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cell-wrapper{
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
.cell{
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
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