<template>
  <div id="BadgesPage">
    <Header></Header>
    
    <BadgeBanner></BadgeBanner>

    <main class="badge-content">
      <section class="badge-section">
        <!-- 
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

        -->



      </section>
    </main>

    <MainFooter></MainFooter>
    <Footer class="footer"></Footer>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainFooter from '@/components/MainFooter.vue';
import BadgeBanner from '@/components/BadgeBanner.vue';



export default {
name: 'BadgePage',
components: {
  Header,
  BadgeBanner,
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