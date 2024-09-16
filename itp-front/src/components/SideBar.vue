<template>
  <ul class="learning-modules">
      <div class ="choose-section">
        <el-dropdown @command="handleDropdownCommand">
          <li 
          @click="$emit('update', 1)"
          :class="{ active: active === 1 }"
          class="choose el-dropdown-link">
          <router-link to="learningContent" data-text="LearningContent" >Learning</router-link>
          <!-- <span><i class="el-icon-arrow-down el-icon--right"></i></span> -->
          <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">Topic 1: Overview</el-dropdown-item>
        <el-dropdown-item command="2">Topic 2: Targets</el-dropdown-item>
        <el-dropdown-item command="3">Topic 3: Actions</el-dropdown-item>
        <!-- <el-dropdown-item disabled>dd</el-dropdown-item> -->
        <!-- <el-dropdown-item divided command="4">Divided Item</el-dropdown-item> -->
      </el-dropdown-menu>
          </li>
        </el-dropdown>
      </div>

      <div class ="choose-section">
          <li 
          @click="$emit('update', 2)"
          :class="{ active: active === 2 }"
          class="choose">
          <router-link to="flashcard" data-text="FlashCard">FlashCard</router-link></li>
      </div>
      <div class ="choose-section">
          <li 
          @click="$emit('update', 3)"
          :class="{ active: active === 3 }"
          class="choose">
          <router-link to="quiz" data-text="Quiz">Quiz</router-link></li>
      </div>
      <div class ="choose-section">
          <li 
          @click="$emit('update', 4)"
          :class="{ active: active === 4 }"
          class="choose">
          <router-link to="/communitychallenge" data-text="Community Chanllenge">Community Chanllenge</router-link></li>
      </div>
  </ul>
</template>

<script>
export default {
name: "SideBar",
props: {
  active: {
    type: Number,
    default: 1,
  },
},
emits: ["update"],
components: {},
data() {
  return {};
},
};
</script>

<style scoped>
.learning-modules {
height: 400px;
  border-radius: 15px;
  background-color: rgba(197, 246, 250, 0.26);
  display: flex;
  max-width: 200px;
  flex-direction: column;
  align-items: flex-start;
  color: #8a8686;
  justify-content: center;
  list-style-type: none;
  padding: 69px 24px 69px 30px;
  font: 400 36px Inter, sans-serif;
  border: 2px solid #c5f6fa;
  
 
}
.choose-section{
display: flex;
width: 100%;
max-width: 207px;
gap: 22px;
margin-bottom: 20px;

}
.choose {
color: #8a8686;
transition: background-color 0.3s ease, color 0.3s ease;
}



.choose a {
color: inherit; /* 继承父元素的颜色 */
text-decoration: none; /* 移除下划线 */
display: block; /* 使链接填充整个 li 区域 */
padding: 10px; /* 添加内边距，增加可点击区域 */
transition: color 0.3s ease;
font-size: 23px;
}

.choose:hover a {
color: black; /* 悬停时链接文本变为白色 */
}

</style>