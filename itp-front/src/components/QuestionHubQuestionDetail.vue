<template>
    <div id="SeeMyQuestionPage">
      <!-- Navigation bar -->
      <Header class="upload-question-header"></Header>
  
      <!-- Main content -->
      <div class="main-content">
        <!-- Banner -->
        <BannerForUploadQuestion 
          :backgroundImage="require('@/assets/image/MyQuestionBannerBackground.png')" 
          title="Question Detail" 
          subtitle="See the details and comments for this question"></BannerForUploadQuestion>
  
        <!-- Back button -->
        <div class="back-button-container">
          <div class="back-button" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to My Questions</span>
          </div>
        </div>
  
        <!-- Question details and comments -->
        <div class="question-detail-container">
          <div class="question-detail">
            <h3 class="specific-question">Question: </h3>
            <h3 class="specific-question">{{ questionTitle }}</h3>
            <div class="comments-section">
              <h4>Discussion: </h4>
              <ul>
                <li v-for="comment in comments" :key="comment.id" class="comment-item">
                  <div class="comment-content">{{ comment.content }}</div>
                  <div class="comment-rating">
                    <el-rate v-model="comment.rating" disabled></el-rate> <!-- Display rating -->
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
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
            { id: 1, content: 'This is indeed a global issue that requires the joint efforts of governments around the world.', rating: 4 },
            { id: 2, content: 'Education is an important tool in preventing gender-based violence.', rating: 5 }
          ],
          1: [
            { id: 3, content: 'Water scarcity and management are key issues.', rating: 3 }
          ],
          2: [
            { id: 4, content: 'The lack of investment in energy infrastructure is the biggest challenge.', rating: 4 }
          ]
        };
        this.comments = commentsByQuestionId[this.id] || [];
      },
      goBack() {
        this.$router.push('/myquestion'); // Navigate back to My Questions page
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
  