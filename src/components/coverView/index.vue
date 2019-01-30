<template>
  <div>
    <cover-view class="pop-up" v-if="modelHidden">
      <cover-view class="pop-up-container">
        <cover-view class="tip-subTitle">确认给“常晓雪”同学拨打电话吗？确认后请注意接通系统来电</cover-view>
        <cover-view class="btn-group">
          <cover-view class="btn-cancel" @click="handleClickCancle" >取消</cover-view>
          <cover-view class="btn-comfirm" @click="handleClickComfirm">确定</cover-view>
        </cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      modelHidden: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClickCancle () {
        this.$emit('handleClickCancle')
      },
      handleClickComfirm () {
        this.$emit('handleClickComfirm')
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}

.pop-up-container{
  width: 272px;
  height: 205px;
  background-color: #fff;
  border-radius: 10px;
  color: #333;
  font-size: 18px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}
.tip-subTitle {
  width: 212px;
  height: 78px;
  white-space: normal;
  line-height: 1.6;
  color: #333;
  font-size: 18px;
  text-align: center;
}
.btn-group{
  width: 89.4%;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  margin-top: 22px;
}
.btn-cancel,
.btn-comfirm{
  width: 108px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 24px;
  border: 1 solid #CCCCCC;
}
.btn-cancel{
  background-color: #CCC;
  color: #666;
  margin-right: 16px;
}
.btn-comfirm{
  background-color: #F54F50;
  color: #fff;
}
</style>