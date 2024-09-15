<template>
    <div id="CommunityChallenge">
      <Header></Header>
      <MainBanner></MainBanner>
      <div style="height: 20px;"></div>
      <div class="goal-banner">
        <div class="goal-image-container">
          <img src="../assets/image/goal5Icon.png" alt="Goal 5: Gender Equality" class="goal-image" />
        </div>
        <div class="goal-text-container">
          <h1 class="goal-title">Goal 5: Gender Equality</h1>
          <p class="goal-subtitle">Achieve gender equality and empower all women and girls</p>
        </div>
      </div>
      <ProgressBar class="progress-bar"></ProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        <div class="content-container">
            <div class="video-container">
                <iframe
                width="560"
                height="315"
                :src="videoUrl"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
            </div>
        </div>
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
import Header from '../components/Header.vue';
import ProgressBar from '../components/ProgressBar.vue';

export default {
  name: 'LearningContentPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    ProgressBar,
  },
  data() {
    return {
        videoUrl: "https://www.youtube.com/embed/-hc0kZh6CnM",
    }
  }

}
</script>

<style scoped>
#LearningContentPage {
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
  margin-top: 50px;
  margin-bottom: 100px;
}
.sidebar {
  margin:0;
  margin-left: 100px;
  flex: 1;
}

.goal-banner {
  display: flex;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}

.goal-image-container {
  flex-shrink: 0;
  margin-right: 20px;
}

.goal-image {
  width: 159px;
  height: auto;
}

.goal-text-container {
  background-color: #E1503A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 159px;
  padding: 20px;
  padding-right: 200px;
  margin: 0;
}

.goal-title {
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.goal-subtitle {
  margin: 0;
  font-size: 24px;
  font-weight: normal;
  color: white;
}

.content-container {
  display: flex;
  flex-direction: column; /* 让问题在右侧垂直排列 */
  margin-left: 70px;
  flex: 2; /* 控制右侧问题部分的宽度 */
  max-height: 400px; /* 控制右侧问题列表的最大高度 */
  overflow-y: auto; /* 让问题列表可垂直滚动 */
  padding-right: 10px; /* 防止滚动条遮挡内容 */
}

.video-container {
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
  