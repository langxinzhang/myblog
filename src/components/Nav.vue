<template>
<div class="nav">
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  id="fenbu">
  <el-menu-item index="1" @click="nearly">最近</el-menu-item>
  <el-menu-item index="2" @click="dayly">博客日志</el-menu-item>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4">个人日常</el-menu-item>
  <el-menu-item index="5" @click="addblog">写博客</el-menu-item>
</el-menu>
</div>

</template>

<script>
export default {
    name:'Nav',
    data(){
        return {
            activeIndex:'1'
        }
    },
    methods:{
        nearly(){
            this.$router.push({
                name:'nearly'

            })
        },
        dayly(){
            this.$router.push({
                name:'all'
            })
        },
        addblog(){
            this.$router.push({
                name:'addblog'
            })
        }
    },
    mounted() {
    // this.$store.dispatch('requestData')
  },
}
</script>

<style scoped>
.nav{
    width: 98%;
    height: 60px;
    /* background: #ccc; */
    margin: auto;
    /* display: flex; */
    /* justify-content: space-evenly; */
    position: sticky;
    top: 0;
    border-radius: 5px;
    overflow: hidden;
}
#fenbu{
    display: flex;
    justify-content: space-around;
}

</style>