<template>
    <div id="SeeMyQuestionPage">
      <!-- 导航栏 -->
      <Header class="upload-question-header"></Header>
      
      <!-- 主要内容部分 -->
      <div class="main-content">
        <!-- Banner -->
        <BannerForUploadQuestion 
          :backgroundImage="require('@/assets/image/MyQuestionBannerBackground.png')" 
          title="Question Detail" 
          subtitle="See the details and comments for this question"></BannerForUploadQuestion>
        
        <!-- 问题详情和评论 -->
        <div class="question-detail">
          <h1>{{ questionTitle }}</h1>
          <div class="comments-section">
            <h3>评论区</h3>
            <ul>
              <li v-for="comment in comments" :key="comment.id">{{ comment.content }}</li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <!-- 页脚 -->
      <MainFooter></MainFooter>
    </div>
  </template>
  
  <script>
  import Header from "../components/NavigationBar.vue";
  import BannerForUploadQuestion from "../components/UploadQuestionBanner.vue";
  import MainFooter from "../components/MainFooter.vue";
  
  export default {
    props: ['id'], 
    data() {
      return {
        questionTitle: '',
        comments: []
      };
    },
    created() {
      this.fetchQuestionDetails();
      this.fetchComments();
    },
    components: {
      Header,
      BannerForUploadQuestion,
      MainFooter
    },
    methods: {
      fetchQuestionDetails() {
        const questions = [
          { question: 'What measures can be implemented to effectively prevent and address gender-based violence, including domestic violence and sexual harassment?', id: 0 },
          { question: 'What are the main challenges preventing universal access to clean and safe drinking water in different regions of the world?', id: 1 },
          { question: 'What are the main barriers preventing universal access to affordable and reliable energy, especially in developing regions?', id: 2 }
        ];
        this.questionTitle = questions[this.id].question;
      },
      fetchComments() {
        const commentsByQuestionId = {
          0: [
            { id: 1, content: '这确实是个全球性问题，需要各国政府的共同努力。' },
            { id: 2, content: '教育是防止性别暴力的重要手段。' }
          ],
          1: [
            { id: 3, content: '水资源短缺与管理是关键问题。' }
          ],
          2: [
            { id: 4, content: '能源基础设施的投资不足是最大的挑战。' }
          ]
        };
        this.comments = commentsByQuestionId[this.id] || [];
      }
    }
  };
  </script>
  
  <style scoped>
.question-detail {
  padding: 20px;
}

.comments-section {
  margin-top: 20px;
}

.comments-section ul {
  list-style-type: none;
  padding: 0;
}

.comments-section li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
  </style>
  