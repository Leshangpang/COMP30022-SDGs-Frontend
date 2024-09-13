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
          >Submit</el-button
        >
      </div>
      <el-progress
        :show-text="false"
        :stroke-width="32"
        :percentage="((currentIndex + 1) / question.length) * 100"
        status="success" 
        class= "progress"></el-progress>
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
      <img />
      <div class="div-container">
            <img src="../assets/image/crown.png" alt="image description" class="rotated-image" />
        </div>
      <p>Your answer has been submitted</p>
      <h3>Thank you for taking Quiz</h3>
      
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
            text: "Question1",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "2",
            text: "Question2",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "3",
            text: "Question3",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "4",
            text: "Question4",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "5",
            text: "Question5",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "6",
            text: "Question6",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "7",
            text: "Question7",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "8",
            text: "Question8",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "9",
            text: "Question9",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
              },
            ],
          },
          {
            id: "10",
            text: "Question10",
            select: [
              {
                subId: "1",
                text: "choice1",
              },
              {
                subId: "2",
                text: "choice2",
              },
              {
                subId: "3",
                text: "choice3",
              },
              {
                subId: "4",
                text: "choice4",
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
        // todo
        this.$confirm("是否提交当前选项?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.isSubmit = true;
          this.$message({
            type: "success",
            message: "submit successful!!",
          });
        });
        this.isSubmit = false;
      },
    },
    computed: {
      getId: (state) => state.question[state.currentIndex].id ?? "",
    },
  };
  </script>
  
  <style scoped>
  .question-submit {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 100px;
    margin-left: 50px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
  
    p {
      margin: 0;
    }
  }
  .name {
    color: #000;
    margin: 20px 0;
    text-align: center;
  }
  .list {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(200px, 300px));
    justify-content: space-around;
    grid-row-gap: 50px;
    background-image: url('../assets/image/background_flash.jpg');
    background-size: cover; /* 使图片覆盖整个div */
  background-position: center; /* 居中显示图片 */
  background-repeat: no-repeat;
  }
  .list li {
    height: 150px;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: hwb(0 0% 46% / 0.773);
    color: #fff;
    transition: all 0.5s;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .list li.active {
    box-shadow: 0px 0px 0px 2.5px var(--whiteColor) inset,
      0px 0px 0px 3px var(--mainColor);
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
    width: 140px;
    height: 48px;
    border-radius: 8px;
    color: #fff;
    background-color: #3b764b;
    cursor: pointer;
    user-select: none;
    transition: all 0.4s;
    margin-bottom: 10px;
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
    width: 100%;
    height: 600px;
  }

  .div-container {
  width: 606px;
  height: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 15px;
}

.rotated-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 向左旋转90度 */
}

  </style>