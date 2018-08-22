<template>
    <div id="idea">
      <div id="title">想法 <img src=""/> </div>
      <div id="content">
        <div id="content_top">
          <div class="content_top_block" v-for="item of showTopList">
            <div class="block_left">
              <p>{{item.title}}</p>
              <p>{{item.text}}</p>
            </div>
            <img :src="item.img"/>
          </div>
        </div>
        <div id="content_center"></div>
        <div id="content_bottom"></div>
        <div id="content_footer"></div>
      </div>
    </div>
</template>

<script>
  import icon1 from '../../assets/icon/icon01.jpg';
  import icon2 from '../../assets/icon/icon02.jpg';
  import icon3 from '../../assets/icon/icon03.jpg';
  import icon4 from '../../assets/icon/icon04.jpg';
  import icon5 from '../../assets/icon/icon05.jpg';
  import icon6 from '../../assets/icon/icon06.jpg';
  import icon7 from '../../assets/icon/icon07.jpg';
  import icon8 from '../../assets/icon/icon08.jpg';
  import icon9 from '../../assets/icon/icon09.jpg';
  import icon10 from '../../assets/icon/icon10.jpg';
  import icon11 from '../../assets/icon/icon11.jpg';
  import icon12 from '../../assets/icon/icon12.jpg';
    export default {
        data(){
          return {
            name:'我是想法',
            topList:[
              {title:'书单来了|5本书教你快速提高自己的格调',text:'大家都在读',img:icon1},
              {title:'敢问，这是何物啊？',text:'兴趣相同的人在读',img:icon2},
              {title:'生而为王',text:'近期更新',img:icon3},
              {title:'年少看不起刘姥姥，看懂已是中年人',text:'兴趣相同的人在读',img:icon3},
              {title:'别和爱的人吵架，却和陌生人说心里话',text:'近期更新',img:icon4},
              {title:'坐腿杀对男人的诱惑力有多大？',text:'近期更新',img:icon5},
              {title:'谁拨开了我的果实',text:'大家都在读',img:icon6},
              {title:'什么才是真正的战略？',text:'今日更新',img:icon7},
              {title:'什么是人的精神？',text:'大家都在读',img:icon8},
              {title:'为什么厉害的人都知道那么多？',text:'大家都在读',img:icon9},
              {title:'一张七国集团首脑的图片，告诉你真相？',text:'大家都在读',img:icon10},
              {title:'提高你生活质量的10件小事？',text:'大家都在读',img:icon11},
              {title:'女人的格局，决定婚姻的格局...',text:'大家都在读',img:icon12}
              ],
            showTopList:[]
          }
        },
      mounted(){
        this.showTopList = [];
        for (let i = 0;this.showTopList.length<3;i++){
          const num = parseInt(Math.random()*10);
          if(this.showTopList.indexOf(this.topList[num])===-1){
            this.showTopList.push(this.topList[num]);
          }
        }
      }
    }
</script>

<style scoped>
  #title{
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }
  .content_top_block{
    clear: both;
    width: 320px;
    height: 100px;
    margin: 0 auto;
  }
  .content_top_block img{
    float: right;
    width: 100px;
  }
  .content_top_block .block_left{
    float: left;
  }
  .block_left p:nth-of-type(1){
    width: 204px;
  }
  .block_left p:nth-of-type(2){
    color:#ccc;
  }
  #content_top{
    border-bottom: 10px solid #eee;
  }
</style>
