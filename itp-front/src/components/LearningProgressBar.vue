<template>
    <div class="progress-bar">
      <div class="progress-item" v-for="(item, index) in progressItems" :key="index">
        <div class="progress-number">{{ item.number }}%</div>
        <div class="progress-label">{{ item.label }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      progressItems: [
        { number: 25, label: "topic" },
        { number: 10, label: "flashcard" },
        { number: 100, label: "quiz" },
      ],
    };
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


  
  
  
  
  