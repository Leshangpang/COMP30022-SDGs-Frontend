<template>
  <div class="question-detail">
    <div class="question-section">
      <!----<h2>Question {{ questionId }}</h2> -->
      <p class = "question-in-answer-section">{{ questionDetail }}</p>
    </div>
    <div class="question-detail-options">
      <p>Select an option:</p>
      <ul class="question-option">
        <li v-for="(option, index) in options" :key="index" class="option-item">
          <!-- Show letter ABCD -->
          <!-- use Element UI button -->
          <el-button type="primary" plain @click="selectOption(option)" class ="option-button">
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
        <div class = "rate-section">
          <p> Rate the question: &nbsp;&nbsp;</p>
          <div class = "rating-star">
            <el-rate v-model="value"></el-rate>
            <span class = "rating-text">{{ ratingText }}</span>
          </div>
        </div>
        
        <el-button type="primary" @click="submitDiscussion" class="discussion-submit-button">
          Submit
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionId: this.$route.params.id, // get questionId from router
      questionDetail: '', // use api to load question
      options: [], // question options
      selectedOption: '',// record selected option
      discussionContent: '', // User input discussion content
      value: 0, // Initial score value
    };
  },
  mounted() {
    this.fetchQuestionDetail();
  },
  methods: {
    fetchQuestionDetail() {
      // Simulates getting problem details from the database via an API call
      const questionData = {
        1: {
          detail: 'What percentage of women globally experience physical or sexual violence in their lifetime?',
          options: ['10%', '20%', '30%', '40%']
        },
        2: {
          detail: 'Which of the following best describes "gender parity"?',
          options: ['Equal pay for equal work', 'Women’s participation in politics', 'Equal representation of women and men in a given area, such as education or employment', 'Laws protecting women from discrimination']
        }
      };

      // Load specific question details based on questionId
      const data = questionData[this.questionId];
      if (data) {
        this.questionDetail = data.detail;
        this.options = data.options;
      } else {
        this.questionDetail = 'Question not found.';
      }
    },
    getOptionLabel(index) {
      // Convert the index to ABCD letters
      return String.fromCharCode(65 + index); // 65 is the Unicode code point for 'A'
    },
    selectOption(option) {
      this.selectedOption = option;
    },
    submitAnswer() {
      if (this.selectedOption) {
        alert(`You selected: ${this.selectedOption}`);
      } else {
        alert('Please select an option.');
      }
    },
    submitDiscussion() {
      if (this.discussionContent.trim()) {
        alert(`Your comment: ${this.discussionContent}`);
        this.discussionContent = ''; // clear input box
      } else {
        alert('Please enter a comment.');
      }
    }
  },
  computed: {
    ratingText() {
      const stars = this.value; // Current rating value
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
