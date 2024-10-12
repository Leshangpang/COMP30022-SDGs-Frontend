<template>
  <div id="CommunityChallenge">
    <Header></Header>
    <Goal5LearningBanner></Goal5LearningBanner>
    <Goal5LogoBar></Goal5LogoBar>
    <LearningProgressBar class="learning-progress-bar"></LearningProgressBar>
    <div class="sidebar-container">
      <SideBar class="sidebar"></SideBar>
      <div class="questions-container">
        <!-- 使用 v-for 渲染从后端获取的问题列表 -->
        <QuestionList 
          v-for="question in questions" 
          :key="question.questionId" 
          :question="question.question" 
          :initialRating="question.averageRating || 0" 
          :questionId="question.questionId" 
          class="question-list" 
        />
      </div>
    </div>
    <MainFooter></MainFooter>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import axios from 'axios'; // 引入 axios
import Goal5LearningBanner from '../components/Goal5LearningBanner.vue';
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/LearningSideBar.vue';
import QuestionList from '../components/CommunityQuestionList.vue';
import Header from '../components/NavigationBar.vue';
import LearningProgressBar from '../components/learningProgressBar.vue';
import Goal5LogoBar from '../components/Goal5LogoBar.vue';

export default {
  name: 'CommunityChallenge',
  components: {
    Header,
    Goal5LearningBanner,
    MainFooter,
    SideBar,
    QuestionList,
    LearningProgressBar,
    Goal5LogoBar,
  },
  data() {
    return {
      questions: []  // 用于存储从 Mock Server 获取的问题列表
    };
  },
  mounted() {
    this.fetchQuestions(); // 页面加载时获取问题列表
  },
  methods: {
    async fetchQuestions() {
      try {
        const moduleId = 5;  // 假设你要获取 moduleId 为 3 的问题
        const mockServerUrl = 'https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community';  // Postman Mock Server 的 URL

        // 发送 GET 请求获取问题列表
        const response = await axios.get(`${mockServerUrl}?moduleId=${moduleId}`);
        
        if (response.data.code === 1) {
          // 将问题列表存储在组件的 data 中
          this.questions = response.data.data;
        } else {
          alert('Failed to fetch questions.');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
        alert('An error occurred while fetching questions.');
      }
    }
  }
};
</script>

<style scoped>
#CommunityChallenge {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.sidebar-container {
  display: flex;
  margin-top: 40px;
  margin-bottom: 100px;
}

.sidebar {
  margin: 0;
  margin-left: 60px;
  flex: 1;
}

.questions-container {
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  flex: 2;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
}

.question-list {
  margin-bottom: 20px;
}
</style>
