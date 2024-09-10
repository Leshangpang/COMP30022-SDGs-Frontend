<template>
    <div id="AnswerQuestion">
      <Header></Header>
      <MainBanner></MainBanner>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        <div class="questions-detail">
          <!-- 嵌入 QuestionDetail 组件 -->
          <QuestionDetail :questionId="$route.params.id"></QuestionDetail>
        </div>
      </div>
  
      <MainFooter></MainFooter>
  
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  import MainBanner from '../components/MainBannerLearn.vue';
  import MainFooter from '../components/MainFooter.vue';
  import SideBar from '../components/SideBar.vue';
  import QuestionDetail from '../components/QuestionDetail.vue';
  import Header from '../components/Header.vue';
  
  export default {
    name: 'AnswerQuestion',
    components: {
      Header,
      MainBanner,
      MainFooter,
      SideBar,
      QuestionDetail
    }
  }
  </script>
  
  <style>
  #AnswerQuestion {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  
  .sidebar-container {
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  
  .sidebar {
    margin: 0;
    margin-left: 100px;
    flex: 1;
  }
  
  .questions-detail {
    flex: 2;
    margin-left: 170px;
  }
  </style>
  