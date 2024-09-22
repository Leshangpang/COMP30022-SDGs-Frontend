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
          <!-- 显示字母 ABCD -->
           <!-- 显示字母 ABCD -->
          <!-- 使用 Element UI 按钮 -->
          <el-button type="primary" plain @click="selectOption(option)" class ="option-button">
            {{ getOptionLabel(index) }}. {{ option }}
          </el-button>
        </li>
      </ul>
      <el-button type="success" @click="submitAnswer" class="submit-button">Submit Answer</el-button>
    </div>
    <!-- 讨论区 -->
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
      questionId: this.$route.params.id, // 从路由获取 questionId
      questionDetail: '', // 通过 API 加载的问题详情
      options: [], // 问题选项
      selectedOption: '',// 记录选择的选项
      discussionContent: '', // 用户输入的讨论内容
      value: 0, // 评分初始值
    };
  },
  mounted() {
    this.fetchQuestionDetail();
  },
  methods: {
    fetchQuestionDetail() {
      // 模拟从数据库通过 API 调用获取问题详情
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

      // 根据 questionId 加载具体的问题详情
      const data = questionData[this.questionId];
      if (data) {
        this.questionDetail = data.detail;
        this.options = data.options;
      } else {
        this.questionDetail = 'Question not found.';
      }
    },
    getOptionLabel(index) {
      // 将索引转换成 ABCD 字母
      return String.fromCharCode(65 + index); // 65 是 'A' 的 Unicode 编码
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
        this.discussionContent = ''; // 清空输入框
      } else {
        alert('Please enter a comment.');
      }
    }
  },
  computed: {
    ratingText() {
      const stars = this.value; // 当前评分值
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
  max-width: 100%; /* 固定按钮宽度 */
  white-space: normal; /* 允许按钮内的文本换行 */
}
.option-button{
  width: 400px; /* 固定按钮宽度 */
  height: 100px; /* 固定按钮高度 */
  font-size: clamp(12px, 2vw, 18px); /* 动态调整字体大小，字体会根据按钮大小和视口宽度自动变化 */
  white-space: normal; /* 允许文本换行 */
  word-wrap: break-word; /* 如果单词过长，允许换行 */
  padding: 10px; /* 内边距 */
  line-height: 1.5; /* 设置行高，确保文本有足够的行间距 */
  display: flex; /* 使用 flex 布局 */
  justify-content: center; /* 水平居中文本 */
  align-items: center; /* 垂直居中文本 */
  text-align: center; /* 确保文本居中显示 */
  overflow-wrap: break-word; /* 长单词换行 */
}
.question-option {
  list-style-type: none;
  /* 去掉 ul 列表的 dot points */
  padding-left: 0;
  /* 去掉默认的 padding */
  display: flex;
  /* 使用 Flexbox */
  flex-wrap: wrap;
  /* 允许选项换行，以实现多列布局 */
  gap: 50px;
  /* 使用 gap 调整选项之间的间距 */
}

.option-item {
  width: calc(50% - 100px);
  /* 每个选项占据50%的宽度 */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中 */

  
}
.el-button span {
  white-space: normal !important; /* 确保按钮文本允许换行 */
  word-break: break-word !important; /* 长单词换行 */
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
  /* 设置灰色背景 */
  min-height: 100px !important;
}

.discussion-submit-container {
  display: flex;
  justify-content: space-between;

  /* 将按钮推到最右边 */
  margin-top: 20px;
}

.discussion-submit-button {
  margin-left: auto;
  /* 确保按钮在最右边 */
}

.discussion-rate {
  margin-top: 5px;
}

.rate-section{
  display: flex;
  margin-top: 30px;
}
.no-border-input .el-textarea__inner {
  border: none !important; /* 移除边框 */
  
  transition: box-shadow 0.3s ease !important; /* 增加过渡效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important; /* 添加阴影 */
}

.rating-star{
  display: flex;
  margin-top: 5px;
}
.rating-text{
  margin-left: 5px;
  color: rgb(93, 89, 89);

}

/* 可选：当输入框聚焦时增加阴影 */

</style>
