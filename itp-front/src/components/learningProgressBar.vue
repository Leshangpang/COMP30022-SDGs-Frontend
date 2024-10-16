<template>
  <div class="progress-bar">
    <div class="progress-item" v-for="(item, index) in progressItems" :key="index">
      <div class="progress-number">{{ item.number }}%</div>
      <div class="progress-label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/eventBus';

export default {
  name: "ProgressBar",
  data() {
    return {
      isloggedIn: false,
      progressData: null,
      error: null,
      loading: false,
      progressItems: [
        { number: 0, label: "topic" },     // topics finished, calculated from resourcesFinished
        { number: 0, label: "flashcard" }, // cardsFinishedNum
        { number: 0, label: "quiz" },      // quizPassed
      ],
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch('https://ba8a701b-07d5-4191-8556-da47d8974118.mock.pstmn.io/process/5', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.code === 1) {
          this.progressData = result.data;

          // Update the progressItems based on the received data
          const totalTopics = 4;
          const totalFlashcards = 4;
          const totalQuizzes = 10;

          // Calculate the number of topics finished from resourcesFinished
          const topicsFinished = this.progressData.resourcesFinished.split(',').length;

          this.progressItems = [
            { number: (topicsFinished / totalTopics) * 100, label: "topic" },   // Use length of resourcesFinished for topics
            { number: (this.progressData.cardsFinishedNum / totalFlashcards) * 100, label: "flashcard" },
            { number: (this.progressData.quizPassed / totalQuizzes) * 100, label: "quiz" },
          ];

          localStorage.setItem('progressItems', JSON.stringify(this.progressItems));
          localStorage.setItem('topicFinished', JSON.stringify(this.progressData.resourcesFinished.split(',')));

        } else {
          throw new Error('Failed to fetch data: ' + result.msg);
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    loadProgressFromStorage() {
      const storedProgress = localStorage.getItem('progressItems');
      if (storedProgress) {
        this.progressItems = JSON.parse(storedProgress);
      }
      if (this.progressItems[0].number === 100 && this.progressItems[1].number === 100 && this.progressItems[2].number === 100){
        localStorage.setItem('totalProgress', 6);
        EventBus.$emit('totalProgressUpdate');
      }
    }
  },
  mounted() {
    this.loadProgressFromStorage();
    EventBus.$on('progressItemsUpdated', this.loadProgressFromStorage);
    EventBus.$on('loginStatusChanged', (status) => {
      if (status === true){
        this.fetchData();
      }else {
        localStorage.setItem('progressItem', [
          { number: 0, label: "topic" },     // topics finished, calculated from resourcesFinished
          { number: 0, label: "flashcard" }, // cardsFinishedNum
          { number: 0, label: "quiz" },      // quizPassed
        ],);
        localStorage.setItem('topicFinished', '');

        this.progressItems = [
          { number: 0, label: "topic" },
          { number: 0, label: "flashcard" },
          { number: 0, label: "quiz" },
        ];

      }
    });
  },
  beforeDestroy() {
    // Clean up the event listener when the component is destroyed
    EventBus.$off('progressItemsUpdated', this.loadProgressFromStorage);
  },
};
</script>


<style scoped>
.progress-bar {
  display: flex;
  flex-direction: row; /* Ensure items are placed horizontally */
  justify-content: space-around; /* Evenly space items */
  align-items: center; /* Center items vertically */
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 15px;

  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 20px auto;
  padding: 10px 0;
}

.progress-item {
  text-align: center;
  flex: 1;
}

.progress-number {
  font-size: 24px;
  color: #6ec8c4;
}

.progress-label {
  font-size: 14px;
  color: #333;
}

.progress-item:not(:last-child) {
  border-right: 1px solid #e5e5e5;
}
</style>