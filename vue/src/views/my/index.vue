<template>
    <div>
      <li><span>姓名:</span><span>{{name}}</span></li>
      <li><span>年龄:</span><span>{{age}}</span></li>
      <li><span>身高:</span><span>{{height}}</span></li>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '李志成',
      age: '26',
      height: '173'
    }
  }
}
</script>

<style scoped>
  li{
    list-style: none;
  }
</style>
