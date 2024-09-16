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
        { question: "Why does the gender pay gap still exist? ", answer: "The gap exists due to discrimination, unequal opportunities, and differences in industries and roles dominated by men or women." },
        { question: " How does girls' education affect gender equality? ", answer: "Educated girls are empowered, which leads to better health, economic opportunities, and stronger communities, reducing gender inequality." },
        { question: "What helps reduce gender-based violence?", answer: "Legal reforms, awareness campaigns, and providing support services for survivors are key in reducing violence." },
        { question: "Why is female political representation important? ", answer: "More women in politics ensures diverse perspectives and leads to policies that support gender equality and social progress." },
      ],
      isRotate: false,
      activeIndex: 0,
      // url: "https://img0.baidu.com/it/u=2426072799,1960439289&fm=253&fmt=auto&app=120&f=JPEG?w=747&h=500",
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
  background-image: url('../assets/image/bg_flash_main.png');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  height: 475px; 
  width: 625px;
  margin-right: 30px;
  border-radius: 10%;
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
  height: 75%;
  background-color: #fff;
  backface-visibility: hidden;
  border: 5px solid #525cebc3; /* You can change #000 to any color you like */
  box-sizing: border-box;
  border-radius: 10%;
}
.content{
  margin-left: 20px;
  margin-right: 20px;
}
.question-card .font {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hwb(0 55% 44%);
  font-size: 22px;
}
.question-card .back {
  transform: rotateY(-180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hwb(0 55% 44%);
  font-size: 22px;
}

.btn{
  background-color: hsla(194, 83%, 75%, 0.704);
  border-color: rgba(135, 222, 150, 0.704);
  border:5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 28px;
  color: hwb(0 98% 2%);
  margin-bottom: 40px;
}

</style>

