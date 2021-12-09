<template>
  <div class="announce">
      <div class="content">
        <div>公告栏</div>
        <br/>
        <p>本博客只完成前端的一些部分，暂时还没有于服务器交换数据</p>
        <p>源码放在<a href="https://github.com/langxinzhang">Github</a>上，通过本博客熟悉一下vue的使用</p>
      </div>
  </div>
</template>
<script>
export default {
    name:'Announce'
}
</script>

<style scoped>
.announce {
    height: 450px;
    border-radius: 7px;
    background: url('../../assets/call.jpg');
    background-size: cover;
}
.announce .content{
    padding: 20px;
}
.announce .content div{
    color: #333;
    font-size: 30px;
    font-weight:bold;
    text-align: center;
}
.announce .content p{
    padding-top: 10px;
    font-size: 20px;
    text-indent: 2em;
}
.announce .content a{
    text-decoration: none;
    color: #4169e1;
    font-weight: bold;
}
</style>