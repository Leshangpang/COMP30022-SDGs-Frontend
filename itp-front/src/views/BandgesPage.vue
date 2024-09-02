<template>
    <div id="BandgePage">
      <Header></Header>
      <main class="content">
        BandgePage
        <router-view></router-view>
      </main>
      <Footer class="footer"></Footer>
    </div>
  </template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';



export default {
  name: 'BandgePage',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
#BandgePage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
  
</style>
  