<template>
  <div>{{text}}</div>
</template>

<script>
  export default {
    data(){
      return {
        bookList:JSON.parse(sessionStorage.getItem('bookList')),
        text:'111'
      }
    },
    mounted(){
      const name = this.$route.query.name;
      const _this = this;
      this.bookList.map(function (li) {
        if(li.name == name){
          _this.text = li.content
        }
      })
    }
  }
</script>

<style scoped>

</style>
