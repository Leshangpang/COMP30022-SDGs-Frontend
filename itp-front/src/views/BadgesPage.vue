<template>
  <div id="BadgesPage">
    <Header></Header>
    
    <ProfileBanner></ProfileBanner>

    <main class="badge-content">
      <section class="badge-section">
        <div class="badge-header">
          <h1>Here are Your Badges</h1>
          <p>Let's Get More!!!</p>
        </div>

        <div class="badge-container">
          <div class="badge-list">

            <div class="badge-item">
              <img src="../assets/image/locked-badge.png" alt="locked-badge">
              <p>NO POVERTY<br><span>GOAL 1</span></p>
            </div>

            <div class="badge-item">
              <img src="../assets/image/Gender-equality-badge.png" alt="Gender-equality-badge">
              <p>Gender Equality<br><span>GOAL 5</span></p>
            </div>
            
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
import ProfileBanner from '@/components/ProfileBanner.vue';



export default {
name: 'BadgePage',
components: {
  Header,
  ProfileBanner,
  MainFooter,
}

}
</script>

<style>
#BadgePage {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content {
  flex: 1; 
  padding: 20px;
}



</style>