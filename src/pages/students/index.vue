<template>
  <div class="student-container">
    <div class="search-bar">
      <search-bar></search-bar>
    </div>
  </div>
</template>

<script>
  import searchBar from '@/components/searchBar/index'
  export default {
    data () {
      return {}
    },
    components: {
      searchBar
    }
  }
</script>

<style scoped>
.student-container{
  width: 92%;
  height: 110px;
  margin: 0 auto;
  background-color: #F4F5F7;
  padding: 14px 0;
}
.search-bar{
  width: 100%;
}
</style>