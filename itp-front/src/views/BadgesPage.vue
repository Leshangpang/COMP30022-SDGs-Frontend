<template>
  <div id="BadgesPage">
    <Header></Header>
    
    <ProfileBanner></ProfileBanner>

    <main class="badge-content">
      <section class="badge-section">
        


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