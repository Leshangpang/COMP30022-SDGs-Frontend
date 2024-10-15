<template>
  <div id="BadgesPage">
    <Header></Header>
    <BadgePageBanner></BadgePageBanner>
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
              <div class="badge-item" >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="1">
                <p>NO POVERTY<br><span>GOAL 1</span></p>
              </div>
              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="2">
                <p>ZERO HUNGER<br><span>GOAL 2</span></p>
              </div>
              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="3">
                <p>GOOD HEALTH AND WELL-BEING<br><span>GOAL 3</span></p>
              </div>

              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="4">
                <p>QUALITY EDUCATION<br><span>GOAL 4</span></p>
              </div>

              <!-- Bold text for completed - need dynamic changes in future-->
              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="goal5-badge" id="5">
                <p class="bold-goal">GENDER EQUALITY<br><span>GOAL 5</span></p>
              </div>
              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="6">
                <p>CLEAN WATER AND SANITASATION<br><span>GOAL 6</span></p>
              </div>
              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="7">
                <p>AFFORDABLE AND CLEAN ENERGY<br><span>GOAL 7</span></p>
              </div>

              <div class="badge-item"  >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="8">
                <p>DECENT WORK AND ECONOMIC GROWTH<br><span>GOAL 8</span></p>
              </div>

              <div class="badge-item" >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="9">
                <p>INDUSTRY, INNOVATION AND INFRASTRUCTURE<br><span>GOAL 9</span></p>
              </div>

              <!-- Second row: Goals 10-17 -->
              <div class="badge-item" >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="10">
                <p>REDUCED INEQUALITIES<br><span>GOAL 10</span></p>
              </div>

              <div class="badge-item" >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="11">
                <p>SUSTAINABLE CITIES AND COMMUNITIES<br><span>GOAL 11</span></p>
              </div>

              <div class="badge-item" >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="12">
                <p>RESPONSIBLE CONSUMPTION AND PRODUCTION<br><span>GOAL 12</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="13">
                <p>CLIMATE ACTION<br><span>GOAL 13</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="14">
                <p>LIFE BELOW WATER<br><span>GOAL 14</span></p>
              </div>

              <div class="badge-item">
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="15">
                <p>LIFE ON LAND<br><span>GOAL 15</span></p>
              </div>

              <div class="badge-item" >
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="16">
                <p>PEACE, JUSTICE AND STRONG INSTITUTIONS<br><span>GOAL 16</span></p>
              </div>
              <div class="badge-item">
                <img src="../assets/image/BadgePageLockIcon.png" alt="locked-badge" id="17">
                <p>PARTNERSHIP FOR THE GOALS<br><span>GOAL 17</span></p>
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
import Header from '../components/NavigationBar.vue';
import MainFooter from '@/components/MainFooter.vue';
import BadgePageBanner from '@/components/BadgePageBanner.vue';
import ProfileSidebar from '@/components/ProfileSidebar.vue';

import { EventBus } from '@/eventBus';

export default {
  name: 'BadgePage',
  components: {
    Header,
    BadgePageBanner,
    ProfileSidebar,
    MainFooter,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.fetchProcessData(); // Fetch data when component is mounted
  },
  methods: {
    fetchProcessData() {
      let storedProgressItems = localStorage.getItem('progressItems');
      if (storedProgressItems) {
        storedProgressItems = JSON.parse(storedProgressItems);
      };
      if (storedProgressItems[0].number === 100 && storedProgressItems[1].number === 100 && storedProgressItems[2].number === 100){
        this.getBadgeImage(5);
      }
    },
    getBadgeImage(goal) {
      const badgeImageId = `${goal}`; // Construct the ID
      const badgeImage = document.getElementById(badgeImageId);
      if (goal > 0) {
        badgeImage.src = require(`../assets/image/Badges/Goal${goal}.jpg`); // Set completed badge image
      } else {
        badgeImage.src = require('../assets/image/BadgePageLockIcon.png'); // Set locked badge image
      }
    }
  }
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
  justify-content: left;
  align-items: flex-start; /* Align items to the top */
  width: 100%;
}

.badge-list {
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
}

/* Individual badge items - Set to take up 1/6th of the row */
.badge-item {
  text-align: center;
  flex-basis: calc(100% / 6); /* 6 items per row */
  margin-bottom: 20px;
  margin-left: 20px;
  background-color: hsla(180, 78%, 73%, 0.219);
  min-height: 180px; /* Ensure consistent height for all badges */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align the content to the top */
  align-items: center;
  border: solid hsla(60, 73%, 84%, 0.319) 10px;
  box-shadow:0 0 10px #eeee6d61;
  border-radius: 30px;
}

.badge-item img {
  width: 92%;
  height: 65%;
  object-fit: cover;
  margin-top: 20px;
}

.badge-item p {
  margin-top: 10px;
  font-size: 10px;
  line-height: 1.2;
  min-height: 50px; /* Ensure consistent text box height */
  display: block;
  width: 90%;
  color: hsl(220, 88%, 64%), 88%, 64%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.badge-item span {
  font-size: 15px;
  color: hwb(237 32% 6% / 0.658);
  font-weight: bolder;
}

/* Bold text for completed/unlocked goals */
.bold-goal {
  font-weight: bold; /* Bold text */
}

</style>
