<template>
  <div id="BadgesPage">
    <Header></Header>
    
    <BadgeBanner></BadgeBanner>

    <div class="content-container">
      <!-- Profile Sidebar -->
      <aside class="sidebar">
        <ProfileSidebar></ProfileSidebar>
      </aside>

      <!-- Main Badge Content -->
      <main class="badge-content">
        <section class="badge-section">
          <div class="badge-container">
            <div class="badge-list">
              <!-- First row: Goals 1-9 -->
              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 1</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 2</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 3</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 4</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/Gender-equality-badge.png" alt="Gender-equality-badge">
                <p>Gender Equality<br><span>GOAL 5</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 6</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 7</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 8</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 9</span></p>
              </div>

              <!-- Second row: Goals 10-17 -->
              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 10</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 11</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 12</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 13</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 14</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 15</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 16</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/locked-badge.png" alt="locked-badge">
                <p>NO POVERTY<br><span>GOAL 17</span></p>
              </div>

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
import BadgeBanner from '@/components/BadgeBanner.vue';
import ProfileSidebar from '@/components/ProfileSidebar.vue';

export default {
  name: 'BadgePage',
  components: {
    Header,
    BadgeBanner,
    ProfileSidebar,
    MainFooter,
  },
}
</script>

<style scoped>
/* Ensure the page takes up the full height */
#BadgePage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
}

/* Flex container for sidebar and badge content */
.content-container {
  display: flex;
  flex: 1;
  padding: 20px;
  width: 100%;
  margin-top: -60px; /* Adjust based on your design */
  margin-right: -250px;
  margin-left: -50px;
  margin-bottom: 30px;
}

/* Sidebar styles */
.sidebar {
  flex-basis: 20%; /* Sidebar takes 20% of the width */
  padding-right: 20px;
}

/* Badge content styles */
.badge-content {
  flex-basis: 80%; /* Badge content takes the remaining width */
}

/* Badge section and list layout */
.badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.badge-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* Individual badge items - Set to take up 1/9th of the row */
.badge-item {
  text-align: center;
  flex-basis: calc(100% / 6); /* 9 items per row */
  margin-bottom: 20px;
}

.badge-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.badge-item p {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.2;
}

.badge-item span {
  font-size: 14px;
  color: gray;
}
</style>
