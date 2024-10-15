<template>
  <ul class="learning-modules">
    <div class="choose-section">
      <el-dropdown @command="handleDropdownCommand">
        <li @click="$emit('update', 1)" :class="{ active: active === 1 }" class="choose el-dropdown-link">
          <router-link to="" data-text="Learning">
            Learning
            
          </router-link>
          <i class="bx bx-chevron-down menu-arrow"></i>
          <!-- <span><i class="el-icon-arrow-down el-icon--right"></i></span> -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">Overview</el-dropdown-item>
            <el-dropdown-item command="2">Targets</el-dropdown-item>
            <el-dropdown-item command="3">Actions</el-dropdown-item>
            <el-dropdown-item command="4">Events and News</el-dropdown-item>
            <!-- <el-dropdown-item disabled>dd</el-dropdown-item> -->
            <!-- <el-dropdown-item divided command="4">Divided Item</el-dropdown-item> -->
          </el-dropdown-menu>
        </li>
      </el-dropdown>
    </div>

    <div class="choose-section">
      <li @click="$emit('update', 2)" :class="{ active: active === 2 }" class="choose">
        <router-link v-if="isLoggedIn" to="flashcard" data-text="FlashCard">FlashCard</router-link>
        <a v-else @click="showLoginForm(false)">FlashCard</a>
      </li>
    </div>
    <div class="choose-section">
      <li @click="$emit('update', 3)" :class="{ active: active === 3 }" class="choose">
        <router-link v-if="isLoggedIn" to="quiz" data-text="Quiz">Quiz</router-link>
        <a v-else @click="showLoginForm(false)">Quiz</a>
      </li>
    </div>
    <div class="choose-section">
      <li @click="$emit('update', 4)" :class="{ active: active === 4 }" class="choose">
        <router-link v-if="isLoggedIn" to="/communitychallenge" data-text="Community Chanllenge">Community
          Challenge</router-link>
        <a v-else @click="showLoginForm(false)">Community Challenge</a>
      </li>
    </div>
  </ul>
</template>

<script>
import { EventBus } from '@/eventBus';

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
    return {
      isLoggedIn: true, // initialise to not logged
    };
  },
  created() {
    // this.checkLoginStatus();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    navigateToLearning() {
      this.$router.push({ name: "/learning" });
    },
    handleDropdownCommand(command) {
      const routes = {
        "1": { path: "/learning", query: { topic: "overview" } },
        "2": { path: "/learning", query: { topic: "targets" } },
        "3": { path: "/learning", query: { topic: "actions" } },
        "4": { path: "/learning", query: { topic: "events and news" } },
      };
      const targetRoute = routes[command];

      if (this.$route.path !== targetRoute.path || this.$route.query.topic !== targetRoute.query.topic) {
        this.$router.push(targetRoute);
      }
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isSticky = scrollTop > 50; // Adjust as needed
    },
    showLoginForm(isSignUp) {
      this.isSignUp = isSignUp;
      EventBus.$emit('toggle-login-form', this.isSignUp);
    },
    checkLoginStatus() {
      // 假设已经登录，用户名为 "Alice"
      this.isLoggedIn = true; // 设置为已登录
      this.username = 'Alice'; // 从后端获取的用户名
    },
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

.choose-section {
  display: flex;
  width: 100%;
  max-width: 207px;
  gap: 22px;
  margin-bottom: 20px;

}

.choose {
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #8a8686;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-arrow {
  font-size: 24px;   /* 增大箭头的字体大小，使其变大 */
}



.choose a {
  color: inherit;
  /* Inherit the color from the parent element */
  text-decoration: none;
  /* Remove the underline */
  display: block;
  /* Make the link fill the entire li area */
  padding: 10px;
  /* Add padding to increase the clickable area */
  transition: color 0.3s ease;
  font-size: 23px;
}

.choose:hover a {
  color: black;
  /* Change the link text color to black when hovered */
}
</style>