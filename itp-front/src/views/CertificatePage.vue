<template>
  <div id="CertificatePage">
    <Header></Header>

    <CertificateBanner></CertificateBanner>

    <!-- Main Content: Sidebar and Certificate -->
    <div class="content-container">
      <!-- Profile Sidebar -->
      <aside class="sidebar">
        <ProfileSidebar></ProfileSidebar>
      </aside>

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
            </div>
          </div>
        </section>
      </main>
    </div>

    <MainFooter></MainFooter>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainFooter from '@/components/MainFooter.vue';
import CertificateBanner from '@/components/CertificateBanner.vue';
import ProfileSidebar from '@/components/ProfileSidebar.vue';

export default {
  name: 'CertificatePage',
  components: {
    Header,
    CertificateBanner,
    ProfileSidebar,
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
/* General Page Layout */
#CertificatePage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Flex container for sidebar and certificate */
.content-container {
  display: flex;
  align-items: flex-start; /* Align the sidebar and certificate top-aligned */
  justify-content: space-between;
  padding: 20px;
  flex: 1;
  margin-top: -60px; /* Adjust based on your design */
  margin-right: -250px;
  margin-left: -50px;
  margin-bottom: 30px;
}

/* Main certificate section layout */
.certificate-content {
  flex-basis: 75%; /* Certificate takes up the remaining 75% */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}

/* Right-align certificate */
.certificate-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Make the certificate image bigger */
.certificate-image {
  position: relative;
  width: 700px; /* Adjust width */
  height: 500px; /* Adjust height */
  overflow: hidden;
  transition: filter 0.5s ease, opacity 0.5s ease;
}


/* Image styling */
.certificate-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
