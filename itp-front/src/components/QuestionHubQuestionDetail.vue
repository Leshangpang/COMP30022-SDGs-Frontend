<template>
  <div id="QuestionDetailPage">
    <Header class="upload-question-header"></Header>

    <div class="main-content">
      <BannerForUploadQuestion 
        :backgroundImage="require('@/assets/image/MyQuestionBannerBackground.png')" 
        title="Question Detail" 
        subtitle="See the details and comments for this question" />

      <div class="back-button-container">
        <div class="back-button" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Questions</span>
        </div>
      </div>

      <div class="question-detail-container">
        <div class="question-detail">
          <h3 class="specific-question">Question: {{ questionTitle }}</h3>
          <div class="comments-section">
            <h4>Discussion: </h4>
            <ul>
              <li v-for="comment in comments" :key="comment.id" class="comment-item">
                <div class="comment-content">{{ comment.comment }}</div>
                <div class="comment-rating">
                  <el-rate v-model="comment.personalRating" disabled></el-rate> <!-- Display rating -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <MainFooter></MainFooter>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "../components/NavigationBar.vue";
import BannerForUploadQuestion from "../components/UploadQuestionBanner.vue";
import MainFooter from "../components/MainFooter.vue";

export default {
  data() {
    return {
      questionTitle: '',  // 存储问题标题
      comments: []  // 存储评论
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
    // 获取问题详情
    async fetchQuestionDetails() {
      try {
        const response = await axios.get(`https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community/${this.$route.params.id}`);
        if (response.data.code === 1) {
          this.questionTitle = response.data.data.question;
        } else {
          alert('Failed to fetch question details.');
        }
      } catch (error) {
        console.error('Error fetching question details:', error);
      }
    },
    // 获取问题的评论
    async fetchComments() {
      try {
        const response = await axios.get(`https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community/comment?questionId=${this.$route.params.id}`);
        if (response.data.code === 1) {
          this.comments = response.data.data;
        } else {
          alert('Failed to fetch comments.');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
    goBack() {
      this.$router.push('/myquestion'); // Navigate back to the questions page
    }
  }
};
</script>

  
  <style scoped>
  .main-content {
    display: flex;
    flex-direction: column;
  }
  
  .back-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .back-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    color: #949696;
    transition: color 0.3s ease;
    width: 80%; /* Same width as .question-detail */
    padding: 10px 0;
    box-sizing: border-box;
  }
  
  .back-button:hover {
    color: #000000;
  }
  
  .back-button svg {
    margin-right: 8px; /* Spacing between icon and text */
    fill: none;
    stroke: currentColor; /* Inherit current text color */
  }
  
  .question-detail-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    margin-top: 20px;
    margin-bottom: 60px;
  }
  
  .question-detail {
    width: 80%; /* Control width of question details and comments */
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .comments-section {
    margin-top: 40px;
    padding: 20px; /* Add padding inside for spacing */
    border: 1px solid #ddd; /* Light gray border */
    border-radius: 8px; /* Match border-radius with .question-detail */
    background-color: #f8f8f8; /* Light background color for comments section */
  }
  
  .comments-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .comments-section li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .comment-rating {
    margin-left: 20px; /* Space between comment content and rating */
  }
  
  .specific-question {
    margin-left: 10px;
  }
  </style>
  