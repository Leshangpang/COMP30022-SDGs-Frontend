<template>
    <div id="LearningPage">
      <Header></Header>
      <Goal5LearningBanner></Goal5LearningBanner>
      <SideBar class="sidebar"></SideBar>
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import Header from '../components/Header.vue';
import Goal5LearningBanner from '../components/Goal5LearningBanner.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue'




export default {
  name: 'LearningPage',
  components: {
    Header,
    Goal5LearningBanner,
    MainFooter,
    SideBar,

  }

}
</script>

<style>
#LearningPage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.sidebar {
  margin-left: 100px; /* 调整这个值来设置距离页面左边的边距 */
  margin-top: 100px;
  margin-bottom: 100px
}
  
</style>
  