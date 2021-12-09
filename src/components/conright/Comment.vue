<template>
  <div class="comment">
      <div class="each">
          <div class="message">
               <img :src="bgurl" alt=""><span>{{personname}}</span>&nbsp;&nbsp;<span>{{eachtime}}</span>
          </div>
          <p>{{mainbody}}</p>
      </div>
      <div class="each">
          <div class="message">
               <img :src="bgurl" alt=""><span>{{personname}}</span>&nbsp;&nbsp;<span>{{eachtime}}</span>
          </div>
          <p>{{mainbody}}</p>
      </div>
      <div class="each">
          <div class="message">
               <img :src="bgurl" alt=""><span>{{personname}}</span>&nbsp;&nbsp;<span>{{eachtime}}</span>
          </div>
          <p>{{mainbody}}</p>
      </div>
      <div class="each">
          <div class="message">
               <img :src="bgurl" alt=""><span>{{personname}}</span>&nbsp;&nbsp;<span>{{eachtime}}</span>
          </div>
          <p>{{mainbody}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'Comment',
    data() {
        return {
            bgurl:require('../../assets/avatar.jpg'),
            personname:'lxx',
            eachtime:'2021-12-07',
            mainbody:'评论内容;hhh,有意思'
        }
    },
}
</script>

<style scoped>
.comment{
    padding: 10px;
    margin-top: 20px;
    border-radius: 8px;
    background: #fff;
}
.comment .each img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.comment .each .message{
    display: flex;
    
}
.comment .each  .message span{
    display: block;
    margin-left: 10px;
    line-height: 50px;
}
.comment .each  p{
    margin: 10px 10px;
}
</style>