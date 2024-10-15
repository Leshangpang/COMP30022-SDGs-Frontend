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
        { question: "How does girls' education affect gender equality? ", answer: "Educated girls are empowered, which leads to better health, economic opportunities, and stronger communities, reducing gender inequality." },
        { question: "What helps reduce gender-based violence?", answer: "Legal reforms, awareness campaigns, and providing support services for survivors are key in reducing violence." },
        { question: "Why is female political representation important? ", answer: "More women in politics ensures diverse perspectives and leads to policies that support gender equality and social progress." },
      ],
      isRotate: false,
      activeIndex: 0,
      maxIndex: 0, // To store the maximum active index
      // url: "https://img0.baidu.com/it/u=2426072799,1960439289&fm=253&fmt=auto&app=120&f=JPEG?w=747&h=500",
    };
  },
  mounted() {
      // Add the event listener for visibility change
      document.addEventListener("visibilitychange", this.handleVisibilityChange);
      console.log('iiiii')
  },
  beforeDestroy() {
      // Remove the event listener when the component is destroyed
      document.removeEventListener("visibilitychange", this.handleVisibilityChange);
      console.log('uuuuu')
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      this.isRotate = false;
      if (index > this.maxIndex) {
        this.maxIndex = index;
        this.fetchProcessData()
        console.log(this.maxIndex)
      }
    },
    toggleFlash() {
      // Toggle the isRotate property to switch between question and answer
      this.isRotate = !this.isRotate;
    },
    fetchProcessData() {
      const moduleId=2;
      // Fetch the latest data from the API
      this.$axios.get(`https://ba8a701b-07d5-4191-8556-da47d8974118.mock.pstmn.io/process/${moduleId}`)
        .then((response) => {
          if (response.data.code === 1) {
            // Store the fetched process data
            this.processData = response.data.data;
            // Update quizPassed based on the user's score
            this.processData.cardsFinishedNum = this.maxIndex; // Example passing condition
            // Send the updated process data to the server
            if(this.maxIndex==3){
              this.processData.cardsFinishedNum = 10;
            }
            console.log("here means get data")
            console.log(this.processData.quizPassed)
            this.updateProcess();
          } else {
            this.$message({
              type: "error",
              message: "Failed to fetch process data!",
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching process data:", error);
        });
    },
    updateProcess() {
          // Send the updated process data back to the server
          this.$axios.post("https://ba8a701b-07d5-4191-8556-da47d8974118.mock.pstmn.io/process", this.processData)
            .then((response) => {
              if (response.data.code === 1) {
                this.$message({
                  type: "success",
                  message: "Process update successful!",
              });
              } else {
                this.$message({
                  type: "error",
                  message: "Failed to update process!",
                });
              }
            })
            .catch((error) => {
              console.error("API error:", error);
              this.$message({
                type: "error",
                message: "Process update failed!",
              });
            });
      },
      handleVisibilityChange() {
        if (document.visibilityState === "visible") {
          // User has returned to the page, fetch the latest data
          console.log('xxxxxxx');
          this.fetchProcessData();
        }
      },
  },
};
</script>

<style scoped>
.flash-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 40px;
  background-color: #fff;
  background-image: url('../assets/image/Goal5FlashcardBackground.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  height: 450px; 
  width: 625px;
  margin-right: 50px;
  margin-left: 50px;
  border-radius: 10%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  height: 85%;
  background-color: #fff;
  backface-visibility: hidden;
  border: 5px solid #525cebc3; /* You can change #000 to any color you like */
  box-sizing: border-box;
  border-radius: 10%;
}

.question-card .font {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: hsl(0, 4%, 33%);
  font-size: 28px;
  padding: 10px;
}

.question-card .back {
  transform: rotateY(-180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 4%, 33%);
  font-size: 24px;
  padding: 10px;
}

.btn{
  background-color: #fff;
  border-color: rgba(135, 222, 150, 0.704);
  border:5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 28px;
  color: #514f4f;
  margin-bottom: 40px;
}

</style>








