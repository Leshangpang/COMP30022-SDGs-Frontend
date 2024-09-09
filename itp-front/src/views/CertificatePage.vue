<template>
  <div id="CertificatePage">
    <Header></Header>
    
    <CertificateBanner></CertificateBanner>

    <!-- Main Certificate Section -->
    <main class="certificate-content">
      <section class="certificate">
        <!-- The locked/unlocked certificate effect -->
        <div :class="['certificate-image', { 'unlocked': isUnlocked }]">
          <img src="../assets/image/certificate-placeholder.png" alt="Certificate" />
          <!-- Overlay to show a locked state -->
          <div v-if="!isUnlocked" class="overlay">
            <p>Certificate Locked</p>
            <p>Collect all 17 SDG Badges to Unlock</p>
            <!-- <button @click="unlockCertificate">Unlock</button>-->
          </div>
        </div>
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