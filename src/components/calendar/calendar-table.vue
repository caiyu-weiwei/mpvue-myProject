<template>
  <div class="calendar">
    <div class="calendar-header">
      <calendar-title @handleChangeDate="handleChangeDate"></calendar-title>
    </div>
    <div class="calendar-body">
      <calendar-row type="header"></calendar-row>
      <calendar-row v-for="(item, index) in rowData" :key="index" :rowData = "item" type="body" @cellClick="cellClick"></calendar-row>
    </div>
    <div class="calendar-footer">
      <img v-show="isDownArrow" src="/static/images/calendar_icon_down.png" alt="" @click="handleChangeCalendar('down')">
      <img v-show="!isDownArrow" src="/static/images/calendar_icon_up.png" alt="" @click="handleChangeCalendar('up')">
    </div>
  </div>
</template>

<script>
  import calendarTitle from '@/components/calendar/calendarTitle'
  import calendarRow from '@/components/calendar/calendar-row'
  export default {
    data () {
      return {
        clickCalendar: 0,
        year: 0,
        month: 0,
        isDownArrow: true,
        currentDateRowIndex: 0
      }
    },
    props: {
    },
    components: {
      calendarTitle,
      calendarRow
    },
    computed: {
      rowData () {
        let temp = []
        let year = this.year
        let month = this.month
        console.log('computed month', month)
        let firstDayisWhat = (new Date(year, month, 1)).getDay()// 第一天星期几0-6（星期日到星期
        let lastDay = (new Date(year, month + 1, 0)).getDate()// 每月最后一天也即每月多少天
        let secondRowFirstDayisWhat = 8 - firstDayisWhat// 日期第二行第一天对应的日期
        let rows = Math.ceil((lastDay - secondRowFirstDayisWhat + 1) / 7) + 1 // 日历总行数
        console.log('compuyed rows', rows)
        for (let i = 1; i < rows + 1; i++) {
          temp.push(this.getEachRowDateList(i, rows, year, month))
        }
        if (this.isDownArrow) {
          let currentDateRow = temp[this.currentDateRowIndex - 1]
          temp = []
          temp.push(currentDateRow)
        }
        return temp
      }
    },
    created () {
      this.initDate()
    },
    methods: {
      initDate () {
        this.year = (new Date()).getFullYear()
        this.month = (new Date()).getMonth()
      },
      getEachRowDateList (rowIndex = 1, rows, year = (new Date()).getFullYear(), month = (new Date()).getMonth()) {
        let dateList = []
        let firstDay = (new Date(year, month, 1)).getDate()// 每月第一天
        let lastDay = (new Date(year, month + 1, 0)).getDate()// 每月最后一天也即每月多少天
        let firstDayisWhat = (new Date(year, month, 1)).getDay()// 第一天星期几0-6（星期日到星期
        let previousMonth = month === 0 ? 12 : month - 1// 上一个月
        let previousMonthYear = month === 0 ? year - 1 : year// 上一个月对应的年份
        let previousMonthLastDay = (new Date(previousMonthYear, previousMonth + 1, 0)).getDate()// 前月最后一天也即前月多少天
        let secondRowFirstDayisWhat = 8 - firstDayisWhat// 日期第二行第一天对应的日期
        // let rows = Math.ceil((lastDay - secondRowFirstDayisWhat + 1) / 7) + 1 // 日历总行数
        let currentDate = new Date().getDate() // 当前天日期
        let currentMonth = (new Date()).getMonth()
        if (rowIndex === 1) {
          for (let i = 0; i < firstDayisWhat; i++) {
            let item = previousMonthLastDay - firstDayisWhat + i + 1
            dateList.push({'text': item, 'isCurrentMonth': false, 'isCurrentDate': false, 'isClick': false})
          }
          for (let i = 1; i < 8 - firstDayisWhat; i++) {
            let isCurrentDate = false
            let isClick = false
            if (i === currentDate && month === currentMonth) {
              i = '今'
              isCurrentDate = true
              this.currentDateRowIndex = rowIndex
            }
            if (i === this.clickCalendar) isClick = true
            dateList.push({'text': i, 'isCurrentMonth': true, 'isCurrentDate': isCurrentDate, 'isClick': isClick})
          }
        }
        if (rowIndex === rows) {
          for (let i = secondRowFirstDayisWhat + (rows - 2) * 7; i < lastDay + 1; i++) {
            let isCurrentDate = false
            let isClick = false
            if (i === currentDate && month === currentMonth) {
              i = '今'
              isCurrentDate = true
              this.currentDateRowIndex = rowIndex
            }
            if (i === this.clickCalendar) isClick = true
            dateList.push({'text': i, 'isCurrentMonth': true, 'isCurrentDate': isCurrentDate, 'isClick': isClick})
          }
          for (let i = 1; i < 7 * rows + secondRowFirstDayisWhat - lastDay - 7; i++) {
            dateList.push({'text': i, 'isCurrentMonth': false, 'isCurrentDate': false})
          }
        }
        if (rowIndex !== 1 && rowIndex !== rows) {
          for (let i = secondRowFirstDayisWhat + (rowIndex - 2) * 7, leng = 0; leng < 7; leng++) {
            let item = i + leng
            let isCurrentDate = false
            let isClick = false
            if (item === currentDate && month === currentMonth) {
              item = '今'
              isCurrentDate = true
              this.currentDateRowIndex = rowIndex
            }
            if (item === this.clickCalendar) isClick = true
            dateList.push({'text': item, 'isCurrentMonth': true, 'isCurrentDate': isCurrentDate, 'isClick': isClick})
          }
        }
        console.log('year', year)
        console.log('month', month)
        console.log('rowIndex', rowIndex)
        console.log('dateList', dateList)
        console.log('firstDay', firstDay)
        console.log('lastDay', lastDay)
        console.log('firstDayisWhat', firstDayisWhat)
        console.log('previousMonth', previousMonth)
        console.log('previousMonthYear', previousMonthYear)
        console.log('previousMonthLastDay', previousMonthLastDay)
        console.log('secondRowFirstDayisWhat', secondRowFirstDayisWhat)
        console.log('rows', rows)
        return dateList
      },
      cellClick (data) {
        console.log('parentdata', data)
        this.clickCalendar = data
      },
      handleChangeDate (year, month) {
        this.year = year
        this.month = month - 1
        console.log('this.currentDateRowIndex', this.currentDateRowIndex)
      },
      handleChangeCalendar (type) {
        console.log(type)
        if (type === 'down') this.isDownArrow = false
        if (type === 'up') this.isDownArrow = true
      }
    }
  }
</script>

<style scoped>
.calendar{
  width: 100%;
}
.calendar-body{
  border-radius: 10px;
  margin-top: -10px;
  margin-left: .5px;
  background-color: #fff;
}
.calendar-footer{
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.calendar-footer > img {
  width: 20px;
  height: 20px;
}
</style>