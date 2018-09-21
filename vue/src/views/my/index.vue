<template>
    <div id="my">
      <div class="my_title">
        <img :src="photo" />
      </div>
      <span class="nick_name">一叶一天堂</span>
      <li v-for="(li,index) in list" @click="link(li.left)"><img :src="li.src"/><span>{{li.left}}</span><span><li class="right"></li></span></li>
    </div>
</template>

<script>
  import photo from '../../assets/myPhoto.jpg'
  import save from '../../assets/icon/save.png'
export default {
  data: function () {
    return {
      photo: photo,
      save:save,
      list:[
        {"left":"账户","right":"余额 ￥","src":save,name:"账户",content:"账户跳转"},
        {left:"消息",right:"",src:save,name:"消息",content:"消息跳转"},
        {left:"好友排名",right:"",src:save,name:"好友排名",content:"好友排名跳转"},
        {left:"我的想法",right:"",src:save,name:"我的想法",content:"我的想法跳转"},
        {left:"我的推荐",right:"",src:save,name:"我的推荐",content:"我的推荐跳转"},
        {left:"我的收藏",right:"",src:save,name:"我的收藏",content:"我的收藏跳转"},
        {left:"我的推荐",right:"",src:save,name:"我的推荐",content:"我的推荐跳转"},
        {left:"设置",right:"",src:save,name:"设置",content:"设置跳转"},
      ],
      money: "0.00",
    }
  },
  created(){
    let list = JSON.parse(sessionStorage.getItem('bookList'))?JSON.parse(sessionStorage.getItem('bookList')):[];
    this.list.forEach(function (li) {
      console.log(li)
      list.push(li);
    })
    sessionStorage.setItem('bookList',JSON.stringify(list));
  },
  methods:{
    link(text){
      console.log(text)
      this.$router.push({path: '/detail',query :{name:text}})
    }
  }
}
</script>

<style scoped>
  #my{
    overflow: hidden;
  }
  li{
    list-style: none;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
  }
  li img {
    float: left;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-right: 5px;
  }
  li span:nth-of-type(1){
    float: left;
  }
  li span:nth-of-type(2){
    float: right;
  }
  .my_title{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px auto 20px;
  }
  .my_title img{
    width: 100px;
    height: 100px;
  }
  .nick_name{
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
