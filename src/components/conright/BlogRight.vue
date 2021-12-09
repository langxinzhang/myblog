<template>
  <div class="blogright">
    <Announce/>
    <Comment/>
  </div>
</template>

<script>
import Announce from './Announce'
import Comment from './Comment'
export default {
    name:'BlogRight',
    components:{Announce,Comment}
}
</script>

<style scoped>
.blogright{
    width: 300px;
    height: 800px;
    float: right;
    border-radius: 8px;
}
</style>