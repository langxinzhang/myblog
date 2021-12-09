<template>
  <div class="Container">
    <BlogLeft/>
    <BlogRight/>
    <div class="middle">
      <!-- 路由放的位置 -->
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BlogLeft from './conleft/BlogLeft'
import BlogRight from './conright/BlogRight'
export default {
    name:'BLogLeft',
    components:{BlogLeft,BlogRight}
}
</script>

<style scoped>
.Container{
    width: 96%;
    margin: 15px auto;
    overflow: hidden;
}
.middle{
  margin-left: 370px;
  margin-right: 320px;
  border-radius: 10px;
  background: #fff;
}
</style>