<template>
  <div id="BadgesPage">
    <Header></Header>
    
    <main class="content">
      <!-- add banner -->
      <ProfileBanner></ProfileBanner>
      <router-view></router-view>
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