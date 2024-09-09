<template>
    <div id="BadgePage">
      <Header></Header>
      <main class="content">
        BadgePage
        <router-view></router-view>
      </main>
      <Footer class="footer"></Footer>
    </div>
  </template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';



export default {
  name: 'BadgePage',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
#BadgePage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
  
</style>
  