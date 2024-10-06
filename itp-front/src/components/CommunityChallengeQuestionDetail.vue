<template>
  <div class="question-detail">
    <div class="question-section">
      <p class="question-in-answer-section">{{ questionDetail }}</p>
    </div>
    <div class="question-detail-options">
      <p>Select an option:</p>
      <ul class="question-option">
        <li v-for="(option, index) in options" :key="index" class="option-item">
          <el-button type="primary" plain @click="selectOption(option)" class="option-button">
            {{ getOptionLabel(index) }}. {{ option }}
          </el-button>
        </li>
      </ul>
      <el-button type="success" @click="submitAnswer" class="submit-button">Submit Answer</el-button>
    </div>
    <!-- discussion area -->
    <div class="discussion-section">
      <h3>Discussion</h3>
      <el-input type="textarea" class="discussion-input no-border-input" v-model="discussionContent"
        placeholder="Write your Thoughts..." rows="3"></el-input>
      <div class="discussion-submit-container">
        <div class="rate-section">
          <p>Rate the question: &nbsp;&nbsp;</p>
          <div class="rating-star">
            <el-rate v-model="value"></el-rate>
            <span class="rating-text">{{ ratingText }}</span>
          </div>
        </div>
        
        <el-button type="primary" @click="submitRating" class="discussion-submit-button">
          Submit
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // 引入 axios

export default {
  data() {
    return {
      questionId: this.$route.params.id, // 从路由中获取 questionId
      questionDetail: '', // 问题详情
      options: [], // 问题选项
      selectedOption: '', // 记录用户选择的选项
      correctAnswer: null,  // 正确答案的索引
      discussionContent: '', // 讨论内容
      value: 0, // 评分值
    };
  },
  mounted() {
    this.fetchQuestionDetail(); // 页面加载时获取问题详情
  },
  methods: {
    async fetchQuestionDetail() {
      try {
        const apiUrl = `https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community/${this.questionId}`;  // 根据 questionId 获取问题详情的 API

        // 发送 GET 请求获取问题详情
        const response = await axios.get(apiUrl);

        if (response.data.code === 1) {
          // 设置问题详情和选项
          const questionData = response.data.data;
          this.questionDetail = questionData.question;
          this.options = questionData.choice.split(',,,'); // 选项通过三逗号分隔
          this.correctAnswer = questionData.answer;  // 保存正确答案的索引
        } else {
          this.questionDetail = 'Failed to fetch question details.';
        }
      } catch (error) {
        console.error('Error fetching question details:', error);
        this.questionDetail = 'An error occurred while fetching the question details.';
      }
    },
    getOptionLabel(index) {
      // 根据索引值返回 ABCD 选项标签
      return String.fromCharCode(65 + index); // 65 是 'A' 的 Unicode 码点
    },
    selectOption(option) {
      this.selectedOption = option;
    },
    submitAnswer() {
      if (this.selectedOption) {
        // 获取用户选择的选项索引
        const selectedOptionIndex = this.options.indexOf(this.selectedOption) + 1; 
        if (selectedOptionIndex === this.correctAnswer) {
          alert('Correct answer!');
        } else {
          alert('Wrong answer. Try again.');
        }
      } else {
        alert('Please select an option.');
      }
    },
    async submitRating() {
      try {
        //const apiUrl = `https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community/rate`;
        // 发送评分请求
        const response = await axios.post('https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community/rate?questionId=2&personalRating=4.0');

        if (response.data.code === 1) {
          alert('Rating submitted successfully!');
        } else {
          alert('Failed to submit rating.');
        }
      } catch (error) {
        if (error.response) {
    // 服务器响应了错误信息
    console.error('Server error response:', error.response.data);
  } else if (error.request) {
    // 请求已发出，但没有收到响应
    console.error('No response received:', error.request);
  } else {
    // 其他类型的错误
    console.error('Error:', error.message);
  }
  alert('An error occurred while submitting the rating.');
      }
    },
    submitDiscussion() {
      if (this.discussionContent.trim()) {
        alert(`Your comment: ${this.discussionContent}`);
        this.discussionContent = ''; // 清空输入框
      } else {
        alert('Please enter a comment.');
      }
    }
  },
  computed: {
    ratingText() {
      const stars = this.value; // 当前评分
      return stars === 1 ? `${stars} star` : `${stars} stars`;
    }
  }
}
</script>

<style>
.question-in-answer-section {
  color:rgb(93, 89, 89);
  font-size: larger;
  margin-top: 0px;
}
.question-detail {
  
  padding-top:0px;
}

.question-detail-options {
  margin-top: 20px;
}
.el-button {
  max-width: 100%; /* Fix the button width */
  white-space: normal; /* Allow text within the button to wrap */
}
.option-button{
  width: 400px; /* Fix the button width */
  height: 100px; /* Fix the button height */
  font-size: clamp(12px, 2vw, 18px); /* Dynamically adjust the font size, it will automatically change based on the button size and viewport width */
  white-space: normal; /* Allow text to wrap */
  word-wrap: break-word; /* Allow text to wrap if the word is too long */
  padding: 10px; /* Padding inside the button */
  line-height: 1.5; /* Set line height to ensure adequate spacing between lines of text */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Horizontally center the text */
  align-items: center; /* Vertically center the text */
  text-align: center; /* Ensure text is centered */
  overflow-wrap: break-word; /* Allow long words to wrap */
}

.question-option {
  list-style-type: none;
  /* Remove the dot points from the ul list */
  padding-left: 0;
  /* Remove the default padding */
  display: flex;
  /* Use Flexbox */
  flex-wrap: wrap;
  /* Allow options to wrap for multi-column layout */
  gap: 50px;
  /* Use gap to adjust the spacing between options */
}


.option-item {
  width: calc(50% - 100px);
  /* Each option takes up 50% of the width */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center; /* Horizontally center the content */
}
.el-button span {
  white-space: normal !important; /* Ensure button text allows wrapping */
  word-break: break-word !important; /* Wrap long words */
}


.discussion-submit-button {
  margin-top: 20px !important;
}

.option-label {
  font-weight: bold;
  margin-right: 10px;
}

/* 讨论区样式 */
.discussion-section {
  max-width: 70%;
  margin-top: 70px;


}

.discussion-section h3 {
  margin-bottom: 30px;
}

.discussion-input .el-textarea__inner {
  background-color: #F1F1F1 !important;
  /* grey background */
  min-height: 100px !important;
}

.discussion-submit-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.discussion-submit-button {
  margin-left: auto;
}

.discussion-rate {
  margin-top: 5px;
}

.rate-section{
  display: flex;
  margin-top: 30px;
}
.no-border-input .el-textarea__inner {
  border: none !important; /* Remove border */
  
  transition: box-shadow 0.3s ease !important; /* Add transition effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important; /* Add shadow */
}
.rating-star{
  display: flex;
  margin-top: 5px;
}
.rating-text{
  margin-left: 5px;
  color: rgb(93, 89, 89);
}
</style>
