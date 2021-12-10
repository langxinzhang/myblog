<template>
  <div class="nearly">
    <!-- <div class="single" v-for="(m,index) in nearmessage" :key="index" >
    </div> -->
    <div class="single" v-for="m in nearmessage" :key="m.id">
      <div class="title">
        <span>博客标题{{m.title}}</span>
      </div>
      <div class="content">
        <!-- 跳转到详情路由，并将数据传过去 -->
        <router-link :to="{name:'single',params:{userId:m.userId,title:m.title,body:m.body}}" @click="read">{{m.body}}</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'Nearly',
  data(){
    return {
        nearmessage:[]//存放前几条数据
    }
  },
  methods: {
    read(){
      // window.scrollTo(0,0)跳转返回顶部未解决
    }
  },
  computed:{
    //数据里有用户id：userid,唯一标识id，标题：title 内容：body
    ...mapState(['message'])
  },
  watch:{
    message(newvalue){
      return this.nearmessage=newvalue.slice(0,8)
    }
  }
}
</script>

<style scoped>
.nearly{
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
  text-indent: 2em;
  /* 文字超出隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
</style>