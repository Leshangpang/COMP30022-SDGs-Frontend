<template>
  <div id="CertificatePage">
    <Header></Header>
    
    <CertificateBanner></CertificateBanner>

    <!-- Main Certificate Section -->
    <main class="certificate-content">
      <section class="certificate-container">
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
  },
  data() {
    return {
      isUnlocked: false,
    };
  },
};


</script>

<style>
#CertificatePage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main certificate section layout */
.certificate-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  height: 100%;
}

/* Right-align certificate */
.certificate-container {
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Move certificate to the right */
  align-items: center;
  margin-top: -60px;
  margin-bottom: 30px;
  margin-right: 20px;
  height: 100%;
}

/* Make the certificate image bigger */
.certificate-image {
  position: relative;
  width: 700px; /* Increased width for larger size */
  height: 500px; /* Increased height for larger size */
  overflow: hidden;
  transition: filter 0.5s ease, opacity 0.5s ease;
}

/* Image styling */
.certificate-image img {
  width: 100%; /* Ensure image scales to the container size */
  height: 100%; /* Ensure image scales to the container size */
  object-fit: cover; /* Ensures the image covers the entire area without distortion */
  filter: grayscale(100%) blur(3px); /* Locked state */
  opacity: 0.5;
  transition: filter 0.5s ease, opacity 0.5s ease;
}

/* When unlocked, remove the effects */
.certificate-image.unlocked img {
  filter: none;
  opacity: 1;
}

/* Locked overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(189, 183, 183, 0.446); /* Semi-transparent overlay */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  z-index: 1;
}
</style>