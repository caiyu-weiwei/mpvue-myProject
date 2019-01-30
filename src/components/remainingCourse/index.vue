<template>
  <div class="remaining-course">
    <div class="remaining-wrapper">
      <div class="remaining-title">
        <span>剩余课时</span>
        <span>总剩余课时：600</span>
      </div>
      <div class="remaining-detail">
        <div class="remaining-item">
          <div class="remaining-line" v-if="courseType === '小班课'"></div>
          <div class="item-title">
            <i :class="isOne2One ? 'isOne2One' : ''"></i>
            <span>1对1课时</span>
          </div>
          <div class="item-content">
            <div>
              <p>普通课时</p>
              <p>240.33</p>
            </div>
            <div>
              <p>VIP课时</p>
              <p>0.00</p>
            </div>
            <div>
              <p>名师课时</p>
              <p>0.00</p>
            </div>
            <div>
              <p>特殊课时</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isOne2One: true,
        isXiaoBan: true
      }
    },
    props: {
      courseType: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
.remaining-course{
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 0;
}
.remaining-wrapper{
  width: 92%;
  margin: 0 auto;
}
.remaining-title{
  width: 100%;
}
.remaining-title > span:nth-child(1){
  display: inline-block;
  color: #333;
  font-size: 20px;
  margin-right: 10px;
}
.remaining-title > span:nth-child(2){
  display: inline-block;
  color: #999;
  font-size: 14px;
}
.remaining-detail{
  width: 100%;
  margin-top: 20px;
}
.item-title > i{
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 2px;
  /* background-color: #41CAFF; */
  margin-right: 6px;
}
.item-title > i.isOne2One{
  background-color: #41CAFF;
}
.item-title > i.isXiaoBan{
  background-color: #B7B9FF;
}
.item-title > span{
  display: inline-block;
  color: #666;
  font-size: 14px;
}
.item-content{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 16px;
}
.item-content > div{
  flex: 1;
}
.item-content > div > p{
  font-size: 14px;
  text-align: center;
  padding: 3px 0;
}
.item-content > div > p:nth-child(1){
  color: #999;
}
.item-content > div > p:nth-child(2){
  color: #666;
}
.remaining-line{
  border: .5px solid #EEE;
  margin: 20px 0;
}
</style>