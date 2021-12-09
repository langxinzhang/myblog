<template>
  <div class="single">
      <div class="title">{{title}}</div>
      <div class="author">作者：{{userId}}</div>
      <div class="content">{{body}}</div>
  </div>
</template>

<script>
export default {
    name:'Single',
    data(){
        return {

        }
    },
    // 接收数据
    props:['userId','title','body'],
    // mounted(){
    //     window.scrollTo(0,0)
    // }
}
</script>

<style scoped>
.single .title{
    width: 20%;
    margin: 15px auto;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
.single .author{
    margin-bottom: 15px;
    font-size: 25px;
    color:#ff4500 ;
}
.single .content{
    font-size: 20px;
    /* 文本缩进 */
    text-indent: 2em;
    letter-spacing: 3px;
    line-height: 1.5;
}
</style>