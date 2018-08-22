<template>
  <div id="bookshelf">
    <div class="title">
      {{name}}<span @click="modify">{{!this.imgShow?'编辑':"取消"}}</span>
    </div>
    <div class="content">
      <div>
        <template v-for = '(li,index) in bookList'>
          <div v-if="!(index == bookList.length-1 && imgShow)" v-on:click ="li.click(index)" v-bind:class="[{block_margin: li.margin}, block]">
            <div v-bind:class="{no_border:!li.authorFlag}">{{li.name}}</div>
            <div v-if="li.authorFlag">{{li.author}}</div>
            <img v-if="imgShow && li.checked" :src="checkList[index]?checkedImg:checkImg"/>
          </div>
        </template>
      </div>
    </div>
    <div v-if="imgShow" id="bottom_tab" @click = 'alert'>
      <span>私密阅读</span>
      <span>开始离线</span>
      <span>移动到</span>
      <span>移除书架</span>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="100%">
      <div><span>书名：</span><input type="text" v-model="bookName"/></div>
      <div><span>作者：</span><input type="text"v-model="bookAuthor"/></div>
      <div><span>内容：</span><input type="text"v-model="bookContent"/></div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="sure">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import checkImg from '../../assets/icon/gz_gx.svg';
  import checkedImg from '../../assets/icon/gz_xz.svg';
export default {
    data(){
      return {
        name:"书架",
        modifyText:"编辑",
        checkImg:checkImg,
        checkedImg:checkedImg,
        checkList:[0,0,0,0,0,  0,0,0,0,0,0],
        block:  'block',
        imgShow:false,
        modifyFlag:true,
        bookList:[
          {name:'边城',author:'沈从文',content:'边城详情',authorFlag:true,click:this.detail,checked:true},
          {name:'人间词话',author:'王国维',content:'人间词话详情',authorFlag:true,click:this.detail,checked:true},
          {name:'1988我想和这个世界谈谈',content:'1988我想和这个世界谈谈详情',author:'韩寒',authorFlag:true,click:this.detail,checked:true},
          {name:'告别与告白',author:'韩寒',content:'告别与告白详情',authorFlag:true,click:this.detail,checked:true},
          {name:'世界很大，幸好有你',author:'杨澜',content:'世界很大，幸好有你详情',authorFlag:true,click:this.detail,checked:true},
          {name:'三重门',author:'韩寒',content:'三重门详情',authorFlag:true,click:this.detail,checked:true},
          {name:'斗罗大陆',author:'唐家三少',content:'斗罗大陆详情',authorFlag:true,click:this.detail,checked:true},
          {name:'盗墓笔记',author:'南派三叔',content:'盗墓笔记详情',authorFlag:true,click:this.detail,checked:true},
          {name:'我当道士那些年',author:'仐三',content:'我当道士那些年详情',authorFlag:true,click:this.detail,checked:true},
          {name:'七龙珠',author:'鸟山鸣',content:'七龙珠详情',authorFlag:true,click:this.detail,checked:true},
          {name:'新增',author:'',authorFlag:false,click:this.add,checked:false}
        ],
        dialogVisible:false,
        bookName:'',
        bookAuthor:'',
        bookContent:''
      }
    },
    methods:{
      add () {
        this.dialogVisible = true;
      },
      close() {
        this.dialogVisible = false;
      },
      sure(){
        const obj = {
          name:this.bookName,
          author:this.bookAuthor,
          content:this.bookContent,
          authorFlag:true,
          click:this.detail,
          checked:true,
        }
        this.bookList.splice(this.bookList.length-1,0,obj);
        this.bookName = '';
        this.bookAuthor = '';
        this.bookContent = '';
        this.dialogVisible = false;
      },
      modify(){
        this.imgShow = !this.imgShow;
        this.modifyFlag = !this.modifyFlag;
      },
      detail (index) {
        if(this.modifyFlag){
          this.bookList.splice(this.bookList.length-1,1);
          sessionStorage.setItem('bookList',JSON.stringify(this.bookList));
          this.$router.push({path: '/detail',query :{name:this.bookList[index].name}})
        }else{
          this.$set(this.checkList, index, Number(!this.checkList[index]));
        }
      },
      alert(e){
        if(e.target.nodeName =='SPAN'){
          console.log(e.target.innerHTML);
          if(e.target.innerHTML ==='移除书架'){
            const _this = this;
            const $checkList = [];
            const $bookList = [];
             this.checkList.map(function (li,i) {
              if(li!==1){
                $checkList.push(li);
                $bookList.push(_this.bookList[i])
              }
            })
            this.checkList = $checkList;
            this.bookList = $bookList;
            this.imgShow = false;
          }
        }
      }
    }
  }

</script>

<style scoped>
  .title{
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .title div {
    text-align: center;
  }
  .title span {
    position: absolute;
    right: 15px;
  }
  .content{
    width: 100%;
    height: auto;
  }
  .content>div{
    width: 351px;
    position: absolute;
    left: 50%;
    margin-left: -183px;
  }
  .block{
    position: relative;
    float: left;
    width:100px;
    height: 121px;
    border:1px solid #eee;
    margin-bottom: 10px;
    cursor: pointer;
    text-align: center;
    margin-left: 15px;
  }
  .block_margin{
    margin: 0 15px 10px;
  }
  .block div:nth-of-type(1){
    width: 90px;
    height:80px;
    padding: 0 5px;
    padding-top: 20px;
    border-bottom:1px solid #eee;
  }
  .block .no_border{
    border:none !important;
  }
  .block div:nth-of-type(2){
    height: 20px;
    line-height: 20px;
  }
  .el-dialog__body>div{
    padding-left: 50px;
  }
  .el-dialog__body div:nth-of-type(1){
    margin-bottom: 10px;
  }
  .el-dialog__body div:nth-of-type(2){
    margin-bottom: 10px;
  }
  .el-dialog__body input{
    outline: none;
  }
  .block img{
    position: absolute;
    right: 5px;
    bottom:25px;
  }
  #bottom_tab {
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 1;
    bottom: 0;
    background: #f7f7f7;
    height: 50px;
    line-height: 50px;
  }
  #bottom_tab span{
    flex: 1;
    text-align: center;
  }
</style>
