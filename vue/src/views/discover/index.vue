<template>
  <div id="discover">
    <div id="title">发现<span @click="link">书城</span></div>
    <div class="content" @touchstart = 'start' @touchmove = 'move' @touchend="end">
      <div class="box" v-bind:style="{left:'-'+left+'px'}">
        <div class="block" v-for="(li,num) of blockList">
          <div class="title">猜你喜欢</div>
          <div v-for="(item,index) of li" class="div">
            <img :src="item.img"/>
            <div @click="detail(item.name)">
              <p>{{item.name}}</p>
              <p>{{item.anthor}}</p>
              <p>您有{{item.friendsNum}}个好友正在阅读</p>
            </div>
          </div>
          <div class="change" @click="change(num)">换一批</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import wxhzgsjhhtt from '../../assets/icon/1988.jpg';
  import bc from '../../assets/icon/bc.jpg';
  import dldl from '../../assets/icon/dldl.jpg';
  import dmbj from '../../assets/icon/dmbj.jpg';
  import gbygb from '../../assets/icon/gbygb.jpg';
  import qlz from '../../assets/icon/qlz.jpg';
  import rjch from '../../assets/icon/rjch.jpg';
  import scm from '../../assets/icon/scm.jpg';
  import sjhdxhyn from '../../assets/icon/sjhdxhyn.jpg';
  import wddsnxn from '../../assets/icon/wddsnxn.jpg';
  export default {
    data(){
      return {
        name:'我是发现',
        bookList:[
          {name:'斗罗大陆',anthor:'唐家三少',content:'斗罗大陆详情',friendsNum:2,img:dldl},
          {name:'盗墓笔记',anthor:'南派三叔',content:'盗墓笔记详情',friendsNum:6,img:dmbj},
          {name:'边城',anthor:'沈从文',content:'边城详情',friendsNum:7,img:bc},
          {name:'1988我想和这个世界谈谈',anthor:'韩寒',content:'1988我想和这个世界谈谈详情',friendsNum:1,img:wxhzgsjhhtt},
          {name:'告别与告白',anthor:'韩寒',content:'告别与告白详情',friendsNum:4,img:gbygb},
          {name:'世界很大，幸好有你',anthor:'杨澜',content:'世界很大，幸好有你详情',friendsNum:8,img:sjhdxhyn},
          {name:'三重门',anthor:'韩寒',content:'三重门详情',friendsNum:9,img:scm},
          {name:'我当道士那些年',anthor:'仐三',content:'我当道士那些年详情',friendsNum:0,img:wddsnxn},
          {name:'七龙珠',anthor:'鸟山鸣',content:'七龙珠详情',friendsNum:3,img:qlz},
          {name:'人间词话',anthor:'王国维',content:'人间词话详情',friendsNum:5,img:rjch},
        ],
        blockList:[],
        showList:[],
        startX:'',
        endX:'',
        left:0,
        nowIndex:0
      }
    },
    mounted(){
      sessionStorage.setItem('bookList',JSON.stringify(this.bookList));
      for(let i = 0;i<10;i++){
        this.showList = [];
        for (let i = 0;this.showList.length<3;i++){
          const num = parseInt(Math.random()*10);
          if(this.showList.indexOf(this.bookList[num])===-1){
            this.showList.push(this.bookList[num])
          }
        }
        this.blockList.push(this.showList);
      }
    },
    methods:{
      change(num){
        this.showList = [];
        for (let i = 0;this.showList.length<3;i++){
          const num = parseInt(Math.random()*10);
          if(this.showList.indexOf(this.bookList[num])===-1){
            this.showList.push(this.bookList[num])
          }
        }
        this.blockList.splice(num,1,this.showList);
      },
      detail(name){
        this.$router.push({path: '/detail',query :{name:name}})
      },
      start(e){
        this.startX = e.touches[0].pageX;
      },
      move(e){
        e.preventDefault();
        this.endX = e.touches[0].pageX;
      },
      end(e){
        if(this.endX){
          e.preventDefault();
          const x = this.endX-this.startX;
          this.startX = '';
          this.endX = '';
          if(x>0){
            if(this.nowIndex===1){
              this.left -= 292;
            }else if(this.nowIndex===9){
              this.left -= 300;
            }else{
              if(this.nowIndex !==0){
                this.left -= 315;
              }
            }
            if(this.nowIndex !==0){
              this.nowIndex--;
            }
          }else{
            if(this.nowIndex===0){
              this.left += 292;
            }else if(this.nowIndex===8){
              this.left += 300;
            }else{
              if(this.nowIndex !==9){
                this.left += 315;
              }
            }
            if(this.nowIndex !==9){
              this.nowIndex++;
            }
          }
        }
      },
      link(){
        alert('书城')
      }
    }
  }
</script>

<style scoped>
  #discover{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
  }
  #title{
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: absolute;
    font-size: 14px;
    text-align: center;
  }
  #title span{
    position: absolute;
    right: 10px;
    color:#5889f6;
  }
  .content,.box{
    height: 100%;
  }
  .content{
    overflow:hidden;
    position: relative;
  }
  .content::-webkit-scrollbar {display:none}
  .box{
    width: 885%;
    position: absolute;
    transition: all 0.3s ease-in 0s;
  }

  .block{
    float: left;
    width: 300px;
    height: 75%;
    margin: 2% auto 0;
    background: #fff;
    overflow: hidden;
    margin-left: 15px;
  }
  .title,.change{
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
  .div{
    width: 240px;
    height: 100px;
    margin: 20px auto 0;
    background: #f7f7f7;
    padding: 5px 10px;
  }
  .div img{
    float: left;
    width:80px;
    height:100px;
  }
  .div p{
    font-size: 12px;
    color:#111;
  }
  .div div{
    float: left;
    margin-left: 10px;
  }
  .change{
    color:#5889f6;
    margin-top: 30px;
  }
</style>
