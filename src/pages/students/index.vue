<template>
  <div class="student-container">
    <div class="student-box">
      <div class="search-bar">
        <search-bar @handleSearch = handleSearch></search-bar>
      </div>
      <scroll-view
        scroll-y
        style="height: 572px;"
        @scrolltoupper="upper"
        @scrolltolower="lower"
        @scroll="scroll"
        >
        <div class="message-wrapper" v-if="dataList.length">
          <div class="message-capital">
            B
          </div>
          <div class="message-item" @click="handleClickItem">
            <student-message></student-message>
          </div>
          <div class="message-item">
            <student-message></student-message>
          </div>
          <div class="message-item">
            <student-message></student-message>
          </div>
          <div class="message-item">
            <student-message></student-message>
          </div>
          <div class="message-item">
            <student-message></student-message>
          </div>
          <div class="message-item">
            <student-message></student-message>
          </div>
          <div class="message-item">
            <student-message></student-message>
          </div>
          <div class="lower" v-if="isLower">
            到底啦~
          </div>
        </div>
        <div class="data-empty" v-else>
          <img :src="imgEmptyUrl" alt="">
          <div>
            未查询到该学生信息
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import searchBar from '@/components/searchBar/index'
  import studentMessage from '@/components/studentMessage/index'
  export default {
    data () {
      return {
        dataList: [{}],
        imgEmptyUrl: '/static/images/img_emptystate@2x.png',
        toView: 'red',
        scrollTop: 100,
        isLower: false
      }
    },
    components: {
      searchBar,
      studentMessage
    },
    methods: {
      handleSearch (searchKey) {
        console.log('parent searchKey', searchKey)
      },
      handleClickItem () {
        this.$router.push({
          path: '/pages/studentInfo/main',
          query: {
            id: 1
          }
        })
      },
      upper (e) {
        console.log('upper', e)
      },
      lower (e) {
        console.log('lower', e)
        this.isLower = true
      },
      scroll (e) {
        console.log('scroll', e)
      }
    }
  }
</script>

<style scoped>
.student-container{
  width: 100%;
  height: 566px;
  background-color: #F4F5F7;
  padding: 14px 0;
  box-sizing: border-box;
}
.student-box{
  width: 92%;
  margin: 0 auto;
}
.search-bar{
  width: 100%;
}
.message-wrapper{
  width: 100%;
  height: 520px;
  z-index: -1;
}
.message-capital{
  width: 100%;
  color: #999;
  font-size: 14px;
  margin-top: 15px;
}
.message-item{
  margin-top: 14px;
}
.data-empty{
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.data-empty > div{
  width: 100%;
  color: #999;
  font-size: 14px;
  text-align: center;
  margin-top: 14px;
}
.data-empty > img{
  width: 114px;
  height: 139px;
}
.lower{
  width: 100%;
  color: #999;
  font-size: 12px;
  text-align: center;
  margin: 14px 0;
}
</style>