<template>
  <div>
    <calendar-row type="header"></calendar-row>
    <calendar-row v-for="(item, index) in rowData" :key="index" :rowData = "item" type="body" @cellClick="cellClick"></calendar-row>
  </div>
</template>

<script>
  import calendarRow from '@/components/calendar/calendar-row'
  export default {
    data () {
      return {
        clickCalendar: 0
      }
    },
    props: {
      year: {
        type: Number,
        default: 0
      },
      month: {
        type: Number,
        default: 0
      }
    },
    components: {
      calendarRow
    },
    computed: {
      rowData () {
        let temp = []
        let year = this.year
        let month = this.month
        if (!year) year = (new Date()).getFullYear()
        // if (!year) year = 2018
        if (!month) month = (new Date()).getMonth()
        // if (!month) month = 11
        let firstDayisWhat = (new Date(year, month, 1)).getDay()// 第一天星期几0-6（星期日到星期
        let lastDay = (new Date(year, month + 1, 0)).getDate()// 每月最后一天也即每月多少天
        let secondRowFirstDayisWhat = 8 - firstDayisWhat// 日期第二行第一天对应的日期
        let rows = Math.ceil((lastDay - secondRowFirstDayisWhat) / 7) + 1 // 日历总行数
        for (let i = 1; i < rows + 1; i++) {
          temp.push(this.getEachRowDateList(i))
        }
        return temp
      }
    },
    methods: {
      getEachRowDateList (rowIndex = 1, year = (new Date()).getFullYear(), month = (new Date()).getMonth()) {
        let dateList = []
        let firstDay = (new Date(year, month, 1)).getDate()// 每月第一天
        let lastDay = (new Date(year, month + 1, 0)).getDate()// 每月最后一天也即每月多少天
        let firstDayisWhat = (new Date(year, month, 1)).getDay()// 第一天星期几0-6（星期日到星期
        let previousMonth = month === 0 ? 12 : month - 1// 上一个月
        let previousMonthYear = month === 0 ? year - 1 : year// 上一个月对应的年份
        let previousMonthLastDay = (new Date(previousMonthYear, previousMonth + 1, 0)).getDate()// 前月最后一天也即前月多少天
        let secondRowFirstDayisWhat = 8 - firstDayisWhat// 日期第二行第一天对应的日期
        let rows = Math.ceil((lastDay - secondRowFirstDayisWhat) / 7) + 1 // 日历总行数
        let currentDate = new Date().getDate() // 当前天日期
        if (rowIndex === 1) {
          for (let i = 0; i < firstDayisWhat; i++) {
            let item = previousMonthLastDay - firstDayisWhat + i + 1
            dateList.push({'text': item, 'isCurrentMonth': false, 'isCurrentDate': false, 'isClick': false})
          }
          for (let i = 1; i < 8 - firstDayisWhat; i++) {
            let isCurrentDate = false
            let isClick = false
            if (i === currentDate) {
              i = '今'
              isCurrentDate = true
            }
            if (i === this.clickCalendar) isClick = true
            dateList.push({'text': i, 'isCurrentMonth': true, 'isCurrentDate': isCurrentDate, 'isClick': isClick})
          }
        }
        if (rowIndex === rows) {
          for (let i = secondRowFirstDayisWhat + (rows - 2) * 7; i < lastDay + 1; i++) {
            let isCurrentDate = false
            let isClick = false
            if (i === currentDate) {
              i = '今'
              isCurrentDate = true
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
            if (item === currentDate) {
              item = '今'
              isCurrentDate = true
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
      }
    }
  }
</script>

<style scoped>

</style>