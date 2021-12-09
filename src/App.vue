<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <div >
      <Container> </Container>
    </div>
  </div>
</template>
<script>
// 引入组件
import Header from './components/Header'
import Nav from './components/Nav'
import Container from './components/Container'
export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Container
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  background-image: url('./assets/hai.jpg');
  background-attachment: fixed;
  background-size: cover;
}
</style>
