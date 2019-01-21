<template>
  <div class="container-row">
    <calendar-cell v-for="(item, index) in cellData" :key="index" :type="type" :text="item.text" :isCurrentMonth="item.isCurrentMonth" :isCurrentDate="item.isCurrentDate" :isClick="item.isClick" @cellClick="cellClick"></calendar-cell>
  </div>
</template>

<script>
  import calendarCell from '@/components/calendar/calendar-cell'
  const calendarTitle = ['日', '一', '二', '三', '四', '五', '六']
  export default {
    data () {
      return {
      }
    },
    components: {
      calendarCell
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      rowData: {
        type: Array,
        default: []
      }
    },
    computed: {
      cellData () {
        console.log('type', this.type)
        let temp = []
        for (let i = 0; i < 7; i++) {
          temp.push({'text': '', 'isCurrentMonth': false, 'isCurrentDate': false, 'item': []})
        }
        for (let i = 0; i < 7; i++) {
          if (this.type === 'header') {
            temp[i]['text'] = calendarTitle[i]
          } else {
            temp[i]['text'] = this.rowData[i]['text']
            temp[i]['isCurrentMonth'] = this.rowData[i]['isCurrentMonth']
            temp[i]['isCurrentDate'] = this.rowData[i]['isCurrentDate']
            temp[i]['isClick'] = this.rowData[i]['isClick']
          }
        }
        console.log('temp', temp)
        return temp
      }
    },
    methods: {
      cellClick (data) {
        this.$emit('cellClick', data)
      }
    }
  }
</script>

<style scoped>
.container-row{
  width: 100%;
  height: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
}
</style>