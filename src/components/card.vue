<template>
  <div class="calendar-wrapper" >
    
    <div class="cell cell-body">{{type}}{{text}}</div>
    <point></point>
    <slot></slot>
  </div>
  <!-- <div class="calendar-wrapper" v-else>
    <div class="cell cell-header">{{text}}</div>
    <point></point>
  </div> -->
</template>

<script>
  import point from './calendar/point'
  export default {
    data () {},
    components: {
      point
    },
    props: {
      type: {
        type: String,
        default: 'body'
      },
      text: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes () {}
    }
  }
</script>

<style scoped>
.calendar-wrapper{
  width: 40px;
  height: 40px;
}
.cell{
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.cell-header{
  color: #CCC;
  background-color: #ddd;
}
.cell-body{
  color: #333;
  background-color: #fff;
}
</style>