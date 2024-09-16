<template>
    <div class="ask-question">
      <div class="side-left">
        <p>Frequently Asked Question</p>
        <h4>
          Why
          <span>Learn SDGs</span>
        </h4>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="why are the SDGs important?" name="1">
            <div>why are the SDGs important?</div>
          </el-collapse-item>
          <el-collapse-item
            title="How do the SDGs relate to everyday life?"
            name="2"
          >
            <div>why are the SDGs important?</div>
          </el-collapse-item>
          <el-collapse-item
            title="How do the SDGs relate to everyday life?"
            name="3"
          >
            <div>How do the SDGs relate to everyday life?</div>
          </el-collapse-item>
          <el-collapse-item
            title="How do the SDGs relate to everyday life?"
            name="4"
          >
            <div>How do the SDGs relate to everyday life?</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="show-image">
        <img :src="imgUrl1" alt="" />
        <img :src="imgUrl2" alt="" />
        <img :src="imgUrl1" alt="" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AskMenu",
    components: {},
    data() {
      return {
        imgUrl1:
        "https://digitalpromise.org/wp-content/uploads/2022/05/DigiLrnPlybk-06.png",
        imgUrl2:
        "https://www.yourmembership.com/wp-content/uploads/2023/02/YM-BLG2302-3-easy-ways-to-support-professional-growth-for-your-associations-members-NP.png"
      };
    },
  };
  </script>
  
  <style scoped>
  .ask-question {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #f5f5f5;
    padding: 50px 100px;
  }
  .side-left {
    flex: 1;
    max-width: 400px;
  }
  .side-left p {
    font-size: 20px;
    color: hsl(171, 44%, 29%);
  }
  .side-left h4 {
    word-spacing: 6px;
    color: #6dcbc8;
  }
  .side-left span {
    color: #cb8083;
  }
  .side-left .el-collapse {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 20px;
  }
  .el-collapse {
    border: none;
    :deep(.el-collapse-item__content) {
      padding: 12px;
    }
  }
  .side-left :deep(.el-collapse-item__header) {
    height: 36px;
    line-height: 36px;
    padding-left: 12px;
    border: none;
  }
  .el-collapse .el-collapse-item {
    border-radius: 6px;
    overflow: hidden;
  }
  
  .show-image {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-column-gap: 20px;
    align-items: center;
  }
  .show-image img {
    height: 350px;
    border-radius: 4px;
    overflow: hidden;
    object-fit: cover;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  }
  .show-image img:nth-child(2) {
    height: 280px;
  }
  </style>