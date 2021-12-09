<template>
  <div class="dayly">
     <div class="single" v-for="m in pagesmessage" :key="m.id">
      <div class="title">
        <span>博客标题{{m.title}}</span>
      </div>
      <div class="content">
        <!-- 跳转到详情路由，并将数据传过去 -->
        <router-link :to="{name:'single',params:{userId:m.userId,title:m.title,body:m.body}}" @click="read">博客内容{{m.body}}</router-link>
      </div>
    </div>
    <div class="bottom">
          <div @click="forward">上一页</div>
          <h4>第{{page}}页</h4>
          <div @click="next">下一页</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'Dayly',
  data(){
    return {
      pagesmessage:[],
      page:1
    }
  },
   computed:{
    ...mapState(['message'])
  },
  mounted() {
    this.jump(this.page)
  },
  methods: {
    goto(page){
      this.pagesmessage=this.message.slice((page-1)*8,page*8)
    },
    forward(){
            if(this.page>1){
                this.page--
                this.goto(this.page)
                window.scrollTo(0,0)
            }else {
                this.goto(this.page)
            }
        },
    next(){
        if(this.page<(this.message.length/8)){
        this.page++
        this.goto(this.page)
        window.scrollTo(0,0)
        }
    },
  },
 
  // watch:{
  //   message(){
  //     this.jump(this.page)
  //   }
  // }
}
</script>
<style scoped>
.dayly{
    /* width: 200px;
    height: 200px;
    background: blue; */
    padding: 20px;
}
.single{
  height: 250px;
  
  margin-bottom: 20px;
}
.single .title{
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}
.single .title span{
  font-size: 25px;
  color: #4169e1
}
.single .content a{
  display:-webkit-box;
  background: #40e0d0;
  border-radius: 8px;
  font-size: 18px;
  color:#333;
  text-decoration: none;
  /* 文字超出隐藏 */
   overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
.dayly .bottom{
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
}
.dayly .bottom div{
    padding: 10px 30px;
    margin: 0 10px;
    border: 1px solid #0000ff;
    font-size: 14px;
    color: #0000ff;
    border-radius: 5px;
}
.dayly .bottom div:hover{
    background:#1e90ff;
    color: #fff;
}
</style>