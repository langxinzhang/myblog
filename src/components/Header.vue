<template>
  <div class="header">
     <span>langxin-Blog</span>
     <div class="login">
         <a href="">登录</a>
         <a href="">注册</a>
     </div>
     <div class="input">
        <input placeholder="请输入内容"  v-model="input" />
        <button ><i class="el-icon-search"></i>搜素</button>
     </div>
     
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            input:''
        }
    }
}
</script>

<style scoped>
.header{
  background-image: url('../assets/zi.jpg');
  background-size: cover;
  width: 100%;
  height: 200px; 
  padding: 10px;
}
.header span{
    font-size: 50px;
    color: #00ffff;
    float: left;
}
.input{
    width: 400px;
    float: right;
    margin-top: 10px;
}
.input input{
    height: 30px;
    width: 250px;
    margin-right: 5px;
}
.input button{
     height: 32px;
}
.login{
    width: 150px;
    float: right;
    display: flex;
    justify-content:space-around;
    margin-top: 10px;
    margin-right: 60px;
}
.login a{
    text-decoration: none;
    color: #FF4500;
    display: block;
    background: #303A9B;
    text-align: center;
    line-height: 30px;
    width:60px;
    height: 30px;
    border-radius: 5px;

}
.login a:hover{
    color: #303A9B;
    background: #fff;
}
</style>