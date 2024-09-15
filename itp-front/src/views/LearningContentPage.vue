<template>
    <div id="CommunityChallenge">
      <Header></Header>
      <MainBanner></MainBanner>
      <div style="height: 20px;"></div>
      <ProgressBar class="progress-bar"></ProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        
      </div>
      
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue';
import QuestionList from '../components/QuestionList.vue'
import Header from '../components/Header.vue';
import ProgressBar from '../components/ProgressBar.vue';





export default {
  name: 'CommunityChallenge',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    ProgressBar,
    QuestionList,
  }

}
</script>

<style scoped>
#CommunityChallenge {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.progress-bar{
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 20px auto;
  padding: 10px 0;
}

.sidebar-container {
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
}
.sidebar {
  margin:0;
  margin-left: 100px;
  flex: 1;
}

</style>
  