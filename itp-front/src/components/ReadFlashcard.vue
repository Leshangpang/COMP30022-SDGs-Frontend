<template>
  <div class="flash-card">
    <el-carousel trigger="click" @change="changeIndex" :autoplay="false" arrow="always">
      <el-carousel-item v-for="(item, index) in questionList" :key="index">
        <div
          class="question-card"
          :class="{ rotate: index === activeIndex && isRotate }"
        >
          <div class="font">{{ item.question }}</div>
          <div class="back">{{ item.answer }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-button  type="primary" @click="toggleFlash" round class="btn">Click to flash</el-button>
  </div>
</template>

<script>
export default {
  name: "FlashCard",
  components: {},
  data() {
    return {
      questionList: [
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question3", answer: "Answer3" },
        { question: "Question4", answer: "Answer4" },
      ],
      isRotate: false,
      activeIndex: 0,
      url: "https://img0.baidu.com/it/u=2426072799,1960439289&fm=253&fmt=auto&app=120&f=JPEG?w=747&h=500",
    };
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      this.isRotate = false;
    },
    toggleFlash() {
      // Toggle the isRotate property to switch between question and answer
      this.isRotate = !this.isRotate;
    },
  },
};
</script>

<style scoped>
.flash-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  background-color: #fff;
  background-image: url('../assets/image/Goal5 flash_card_bg.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  height: 450px; 
  width: 50%;
  margin-right: 30px;
}


.el-carousel {
  height: 100%;
  width: 100%;
}
:deep(.el-carousel__container) {
  height: 100%;
}
.question-card {
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}
.question-card.rotate {
  transition: all 0.8s;
  transform: rotateY(180deg);
}
.question-card .font,
.question-card .back {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #52c0e824;
  backface-visibility: hidden;
}
.question-card .font {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
}
.question-card .back {
  transform: rotateY(-180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
}

.btn{
  background-color: hsla(194, 83%, 75%, 0.704);
  border-color: rgba(135, 222, 150, 0.704);
  border:5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 28px;
  color: hwb(0 98% 2%);
  margin-bottom: 30px;
}

</style>

