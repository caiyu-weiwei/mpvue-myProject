<template>
  <div class="search-box">
    <div class="search">
      <img :src="searchUrl" alt="" @click="handleSearch">
      <input v-model="searchKey" type="text" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
  
  export default {
    data () {
      return {
        searchUrl: '/static/images/search_icon@2x.png',
        searchKey: ''
      }
    },
    props: {
      placeholder: {
        type: String,
        default: '请输入学生姓名/手机号查询'
      }
    },
    methods: {
      handleSearch () {
        console.log('handleSearch', this.searchKey)
        this.$emit('handleSearch', this.searchKey)
      }
    }
  }
</script>

<style scoped>
.search-box{
  width: 345px;
  height: 32px;
  border-radius: 61px;
  background-color: #fff;
}
.search{
  width: 93%;
  height: 32px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.search > img {
  width: 5%;
  height: 50%;
  margin-right: 3%;
}
.search > input{
  width: 92%;
  display: inline-block;
} 
</style>