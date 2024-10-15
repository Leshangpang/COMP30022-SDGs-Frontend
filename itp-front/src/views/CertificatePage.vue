<template>
  <div id="CertificatePage">
    <Header></Header>

    <CertificatePageBanner></CertificatePageBanner>

    <!-- Main Content: Sidebar, Unlock Info, and Certificate -->
    <div class="content-container">
      <!-- Profile Sidebar -->
      <aside class="sidebar">
        <ProfileSidebar></ProfileSidebar>
      </aside>

      <!-- Unlock Info Section -->
      <section class="unlock-info">
        <p>
          Hi, {{ accountName }}, <br> 
          You have currently unlocked: {{ badgesUnlocked }}/17 badges. 
          Collect all 17 badges to unlock your certificate. 
          <br> View your progress 
          <router-link to="/badges">here</router-link>.
        </p>
      </section>

      <!-- Main Certificate Section -->
      <main class="certificate-content">
        <section class="certificate-container">
          <!-- The locked/unlocked certificate effect -->
          <div :class="['certificate-image', { 'unlocked': isUnlocked }]">
            <img src="../assets/image/CertificatePlaceholder.png" alt="Certificate" />
            <!-- Overlay to show a locked state -->
            <div v-if="!isUnlocked" class="overlay">
              <p>Certificate Locked</p>
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
import Header from '../components/NavigationBar.vue';
import MainFooter from '@/components/MainFooter.vue';
import CertificatePageBanner from '@/components/CertificatePageBanner.vue';
import ProfileSidebar from '@/components/ProfileSidebar.vue';

export default {
  name: 'CertificatePage',
  components: {
    Header,
    CertificatePageBanner,
    ProfileSidebar,
    MainFooter,
  },
  data() {
    return {
      isUnlocked: false, // Assuming locked by default
      badgesUnlocked: 1, // Can dynamically load this value
      accountName: 'AccountName', // Replace with the actual account name from data
    };
  },
};
</script>

<style scoped>
/* General Page Layout */
#CertificatePage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Flex container for sidebar, unlock info, and certificate */
.content-container {
  display: flex;
  align-items: flex-start; /* Align items at the top */
  justify-content: space-between;
  padding: 20px;
  flex: 1;
  width: 100%;
  margin-top: 0; /* Remove negative margins for better alignment */
  margin-right: -250px;
  margin-left: -50px;
  margin-bottom: 30px;
}

/* Adjustments for Sidebar */
.sidebar {
  margin-right: 20px; /* Add some margin to the right of the sidebar */
}

/* Unlock Info Section */
.unlock-info {
  flex-basis: 25%;
  background-color: #FFF3CF; /* Light blue background */
  padding: 20px;
  border-radius: 0; /* No rounded corners */
  font-size: 20px;
  line-height: 1.5;
  box-shadow: none; /* Remove any box shadow */
  text-align: left;
  margin-top: 0; /* Align with sidebar */
}

/* Set text for unlock info to black */
.unlock-info p {
  color: black;
}
/* Change the router link colour here to grey*/ 
.unlock-info a {
  color: #7b7b8a;
}

/* Main certificate section layout */
.certificate-content {
  flex-basis: 50%;
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
