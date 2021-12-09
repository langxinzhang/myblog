<template>
  <div class="center">
      <div class="bgimg">
      </div>
      <div class="userhead">
          <div class="useravatar"></div>
      </div>
      <div class="username">
          <p>lxx</p>
      </div>
      <div class="userinfo">
       <div><p>文章</p><p>100</p></div>
       <div><p>浏览</p><p>2566</p></div>
       <div><p>评论</p><p>0</p></div> 
      </div>
      <div class="contacts">
          <a href="https://github.com/langxinzhang"><img src="../../assets/github.png" alt=""> <p> github</p></a>
          <a href="https://space.bilibili.com/472949773"><img src="../../assets/bilibili.jpg" alt=""><p>哔哩哔哩</p> </a>
          <a href="javascript:;" @click="qqnumber"><img src="../../assets/qq.png" alt=""><p>QQ</p></a>
      </div>
  </div>
</template>

<script>
export default {
    name:'Center',
    //头像等信息需要在vuex里请求回数据，然后再读取出来数据，替换掉静态数据
    methods: {
        qqnumber(){
            alert('1414469040')
        }
    },
}
</script>

<style scoped>
.center{
    background: #fff;
}
.bgimg{
    background: url('../../assets/single.jpg') no-repeat 1%;
    height: 150px;
}
.userhead{
     position: relative;
}
.userhead .useravatar{
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: url('../../assets/avatar.jpg');
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
}
.center .username{
    line-height: 30px;
    font-size: 28px;
    text-align: center;
    margin: 60px 0 50px 0; 
}
.userinfo{
    display: flex;
    padding: 0 30px;
    font-size: 20px;
    justify-content: space-between;
}
.userinfo div p{
    /* width: 100px; */
    /* height: 40px; */
    margin-top: 10px;
    text-align: center;
}
.center .contacts{
    display: flex;
    justify-content: space-between;
    padding: 10px 25px;
    text-align: center;
}
.center .contacts img{
    width: 70px;
    height: 70px;
}
.center .contacts a{
    text-decoration: none;
    font-size: 20px;
    color: #333;
}
</style>