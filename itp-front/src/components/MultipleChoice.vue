<template>
  <div class="question-submit" v-if="!isSubmit">
    <div class="head">
      <p>QUESTION {{ currentIndex + 1 }}/{{ question.length }}</p>
      <el-button
        v-if="Object.keys(selectMap).length === question.length" 
        type="success"
        size="small"
        @click="submitHandle"
        plain
        style="background-color: #0084ff; color: #fff;"
        class="submit"
        >Submit</el-button
      >
    </div>
    <el-progress
      :show-text="false"
      :stroke-width="18"
      :percentage="((currentIndex + 1) / question.length) * 100"
      style="margin-left: 20px;"
    ></el-progress>
    <p class="name">{{ question[currentIndex].text }}</p>
    <ul class="list">
      <li
        @click="selectHandle(item.subId)"
        v-for="(item, index) in question[currentIndex].select"
        :key="index"
        :class="{ active: currentSub === item.subId }"
      >
        {{ item.text }}
      </li>
    </ul>
    <div class="operate">
      <div v-if="currentIndex !== 0" @click="preHandle" class="pre">
        Prev Question
      </div>
      <div
        v-if="currentIndex !== question.length - 1"
        @click="nextHandle"
        class="next"
        :class="{ empty: !currentSub }"
      >
        Next Question
      </div>
    </div>
  </div>
  <div class="submit-result" v-else>
    <div class="div-container">
            <img src="../assets/image/Goal5_DoneQuiz.jpg" alt="image description" class="rotated-image" style="width: 664px;" />
    </div> 
    <p>Your answer has been submitted</p>
    <h3>Thank you for taking the Quiz</h3>
  </div>
</template>

<script>
export default {
  name: "QuestionSubmit",
  components: {},

  data() {
    return {
      currentIndex: 0,
      currentSub: "",
      question: [
        {
          id: "1",
          text: "What is gender equality?",
          select: [
            {
              subId: "1",
              text: "A) Equal pay for all genders",
            },
            {
              subId: "2",
              text: "B) Equal rights and opportunities for all genders",
            },
            {
              subId: "3",
              text: "C) Only women’s rights",
            },
            {
              subId: "4",
              text: "D) Only men’s rights",
            },
          ],
        },
        {
          id: "2",
          text: "Which SDG focuses on gender equality?",
          select: [
            {
              subId: "1",
              text: "A) Goal 1",
            },
            {
              subId: "2",
              text: "B) Goal 4",
            },
            {
              subId: "3",
              text: "C) Goal 5",
            },
            {
              subId: "4",
              text: "D) Goal 10",
            },
          ],
        },
        {
          id: "3",
          text: "What is one of the main barriers to achieving gender equality?",
          select: [
            {
              subId: "1",
              text: "A) Access to education",
            },
            {
              subId: "2",
              text: "B) Gender stereotypes",
            },
            {
              subId: "3",
              text: "C) Economic growth",
            },
            {
              subId: "4",
              text: "D) Environmental changes",
            },
          ],},
          {id: "4",
          text: "Which of the following is an example of gender inequality?",
          select: [
            {
              subId: "1",
              text: "A) Equal voting rights",
            },
            {
              subId: "2",
              text: "B) Unequal access to healthcare",
            },
            {
              subId: "3",
              text: "C) Equal education for boys and girls",
            },
            {
              subId: "4",
              text: "D) Equal job opportunities",
            },
          ],},
          {id: "5",
          text: "Which sector is often most affected by gender inequality?",
          select: [
            {
              subId: "1",
              text: "A) Education",
            },
            {
              subId: "2",
              text: "B) Healthcare",
            },
            {
              subId: "3",
              text: "C) Politics",
            },
            {
              subId: "4",
              text: "D) All of the above",
            },
          ],},
          {id: "6",
          text: "Why is gender equality important?",
          select: [
            {
              subId: "1",
              text: "A) It improves economic development",
            },
            {
              subId: "2",
              text: "B) It promotes peace and justice",
            },
            {
              subId: "3",
              text: "C) It supports sustainable development",
            },
            {
              subId: "4",
              text: "D) All of the above",
            },
          ],},
          {id: "7",
          text: "What is one key indicator of gender inequality?",
          select: [
            {
              subId: "1",
              text: "A) Equal education opportunities",
            },
            {
              subId: "2",
              text: "B) Gender pay gap",
            },
            {
              subId: "3",
              text: "C) Increased life expectancy",
            },
            {
              subId: "4",
              text: "D) Equal political representation",
            },
          ],},
          {id: "8",
          text: "Which group is most often affected by gender inequality in education?",
          select: [
            {
              subId: "1",
              text: "A) Boys",
            },
            {
              subId: "2",
              text: "B) Girls",
            },
            {
              subId: "3",
              text: "C) Adults",
            },
            {
              subId: "4",
              text: "D) All of the above",
            },
          ],},
          {id: "9",
          text: "What is one goal of promoting gender equality?",
          select: [
            {
              subId: "1",
              text: "A) Ensuring more jobs for men",
            },
            {
              subId: "2",
              text: "B) Achieving equal rights and opportunities for all",
            },
            {
              subId: "3",
              text: "C) Decreasing women’s participation in politics",
            },
            {
              subId: "4",
              text: "D) Limiting education access for men",
            },
          ],},
          {id: "10",
          text: "Which policy can help reduce gender inequality?",
          select: [
            {
              subId: "1",
              text: "A) Gender-based violence",
            },
            {
              subId: "2",
              text: "B) Unequal pay policies",
            },
            {
              subId: "3",
              text: "C) Access to reproductive health services",
            },
            {
              subId: "4",
              text: "D) Job discrimination",
            },
          ],
        },
      ],
      selectMap: {},
      isSubmit: false,
    };
  },
  methods: {
    selectHandle(subId) {
      this.selectMap[this.getId] = subId;
      this.currentSub = subId;
    },
    preHandle() {
      if (this.currentIndex !== 0) {
        this.currentIndex--;
        this.currentSub = this.selectMap?.[this.getId] ?? "";
      }
    },
    nextHandle() {
      if (this.currentSub === "") return;
      if (this.currentIndex !== this.question.length - 1) {
        this.currentIndex++;
        this.currentSub = this.selectMap?.[this.getId] ?? "";
      }
    },
    submitHandle() {
      if (Object.keys(this.selectMap).length !== this.question.length) {
      console.log("Not all questions answered");
      return; // 如果还有未回答的问题，不允许提交
      }
      // todo
      this.$confirm("Comfirm to submit the Answer", {
        confirmButtonText: "Continue",
        cancelButtonText: "Cancel",
        type: "warning",
      }).then(() => {
        this.isSubmit = true;
        this.$message({
          type: "success",
          message: "Submit Successful!",
        });
      });
      this.isSubmit = false;
    },
  },
  computed: {
    getId() {
    return this.question[this.currentIndex].id ?? "";
  }
  },
};
</script>

<style scoped>
.question-submit {
  display: flex;
  flex-direction: column;
  width: 700px;
  margin-left: 30px;
  margin-right: 30px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-left: 30px;
  p {
    margin: 0;
  }
}
.name {
  color: hsla(0, 0%, 0%, 0.65);
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
}
.list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(200px, 300px));
  justify-content: space-around;
  grid-row-gap: 30px;
  grid-column-gap:40px;
  padding: 10px;
}
.list li {
  height: 140px;
  background-color: #ccc;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: hsl(206, 73%, 64%);
  color: #fff;
  transition: all 0.5s;
  cursor: pointer;
  font-size: 17px;
  padding: 5px;
}
.list li.active {
  box-shadow: 0px 0px 0px 3px var(--whiteColor) inset,
    0px 0px 0px 5px var(--mainColor);
}
.operate {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin-top: 30px;
}
.operate .pre,
.operate .next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 58px;
  border-radius: 8px;
  color: #fff;
  background-color: rgb(53, 102, 167);
  cursor: pointer;
  user-select: none;
  transition: all 0.4s;
  margin-bottom: 40px;
}
.operate .empty {
  opacity: 0.7;
  cursor: not-allowed;
}
.el-progress {
  width: 100%;
}
.submit-result {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.div-container {
  width: 750px;
  height:400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
  margin-top: 15px;
  margin-left: 50px;
}
.rotated-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>