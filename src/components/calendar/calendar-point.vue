<template>
  <div class="ball-wrapper">
    <div class="ball" :class="isClick ? 'is-click' : ''"></div>
  </div>
</template>

<script>
  export default {
    props: {
      isClick: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
.ball-wrapper{
  width: 50px;
  height: 5px;
}
.ball{
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #F54F50;
  margin: 0 auto;
}
.is-click{
  background-color: #fff;
}
</style>