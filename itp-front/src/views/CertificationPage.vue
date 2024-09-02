<template>
    <div id="CertificationPage">
      <Header></Header>
      <main class="content">
        CertificationPage
        <router-view></router-view>
      </main>
      <Footer class="footer"></Footer>
    </div>
  </template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';



export default {
  name: 'CertificationPage',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
#CertificationPage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
  
</style>
  