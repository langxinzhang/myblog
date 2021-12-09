<template>
  <div class="blogleft">
    <Center/>
  </div>
</template>

<script>
import Center from './Center'
export default {
    name:'BlogLeft',
    components:{
      Center
    }
}
</script>

<style scoped>
.blogleft{
    width: 350px;
    height: 800px;
    /* border: 1px solid red; */
    float: left;
    border-radius: 8px;
    overflow: hidden;
}
</style>