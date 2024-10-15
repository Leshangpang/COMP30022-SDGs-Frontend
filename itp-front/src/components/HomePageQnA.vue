<template>
  <div class="ask-question">
    <div class="side-left">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="Global Awareness" name="1">
          <div class="sub-item">Recognizes interconnected global challenges (e.g., poverty, climate change).</div>
          <div class="sub-item">Fosters a sense of global responsibility.</div>
        </el-collapse-item>
        <el-collapse-item
          title="Critical Thinking"
          name="2"
        >
          <div class="sub-item">Encourages analysis of complex issues.</div>
          <div class="sub-item">Develops skills to evaluate solutions and understand consequences.</div>
        </el-collapse-item>
        <el-collapse-item
          title="Empowerment and Agency"
          name="3"
        >
          <div class="sub-item">Equips individuals to advocate for change in their communities.</div>
          <div class="sub-item">Instills confidence to participate in local and global initiatives.</div>
        </el-collapse-item>
        <el-collapse-item
          title="Interdisciplinary Approach"
          name="4"
        >
          <div class="sub-item">Integrates knowledge from various fields (e.g., science, economics, social justice)</div>
          <div class="sub-item">Promotes collaboration to tackle multifaceted problems effectively.</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="show-image">
      <img :src="imgUrl1" alt="" />
      <img :src="imgUrl2" alt="" />
      <img :src="imgUrl3" alt="" />
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
      "https://www.aihr.com/wp-content/uploads/learning-vs-training-cover.png",
      imgUrl2:
      "https://cdn.theeducationhub.org.nz/wp-content/uploads/2021/01/1.-What-teachers-should-know-scaled.jpeg",
      imgUrl3:
      "https://www.talentlms.com/blog/wp-content/uploads/2017/04/TLMS_20230529_1200x628.png"
    };
  },
};
</script>

<style scoped>
.ask-question {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color:  #f0ffffb3;;
  padding-left: 7%;
  padding-bottom: 100px;
  padding-top: 50px;
}
.side-left {
  flex: 1;
  max-width: 40%;
}
.side-left p {
  font-size: 40px;
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
  row-gap: 30px;
  margin-top: 20px;
}
.el-collapse {
  border: none;
  border-radius: 15%;
  border: rgb(255, 244, 43) solid 10px;
  justify-content: center;
  background-color: #6dcbc8;
  height: 400px;
  padding: 40px;
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
  border-radius: 10px;
  overflow: hidden;
  background-color: #6dcbc8;
}

.show-image {
  display: grid;
  grid-template-columns: repeat(3, 170px);
  grid-column-gap: 20px;
  align-items: center;
  margin-right: 10%;
}
.show-image img {
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 0 0 15px hwb(167 46% 16% / 0.7);
}
.show-image img:nth-child(2) {
  height: 400px;
}

.sub-item{
 margin-left: 20px;
 font-size: 15px;
} 

</style>