<template>
  <div class="tip-container">
    <cover-view class="pop-up">
      <cover-view class="pop-up-container">
        <cover-view class="tip-content">系统拨打中…</cover-view>
        <cover-view class="tip-content">请注意接听系统来电</cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.pop-up{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}
.pop-up-container{
  width: 236px;
  height: 70px;
  background-color: rgba(0,0,0,0.60);
  border-radius: 6px;
  color: #333;
  font-size: 18px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}
.tip-content{
  width: 196px;
  height: 20px;
  color: #fff;
  font-size: 14px;
  text-align: center;
}
</style>