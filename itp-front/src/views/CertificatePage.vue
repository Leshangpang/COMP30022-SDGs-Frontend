<template>
  <div id="CertificatePage">
    <Header></Header>
    
    <CertificateBanner></CertificateBanner>

    <main class="certificate-content">
      <section class="certificate">
        
      </section>
    </main>

    <MainFooter></MainFooter>
    <Footer class="footer"></Footer>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainFooter from '@/components/MainFooter.vue';
import CertificateBanner from '@/components/CertificateBanner.vue';



export default {
name: 'CertificatePage',
components: {
  Header,
  CertificateBanner,
  MainFooter,
}

}
</script>

<style>
#CertificatePage {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content {
  flex: 1; 
  padding: 20px;
}



</style>