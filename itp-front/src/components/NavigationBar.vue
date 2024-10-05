<template>
  <div :class="['edu-navbar-area navbar-area', { 'is-sticky': isSticky }]">
    <div class="edumim-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="navbar-toggler" @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }" v-on:click="button_active_state = !button_active_state">
            <i class="bx bx-menu"></i>
            <i class="bx bx-x"></i>
          </div>

          <div class="collapse navbar-collapse" :class="{ show: active }">
            <ul class="navbar-nav">
              <!-- Home Link -->
              <li class="nav-item">
                <router-link to="/" class="nav-link" exact exact-active-class="active">
                  Home page
                </router-link>
              </li>

              <!-- Learning Dropdown -->
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Learning
                  <i class="bx bx-chevron-down"></i> <!-- 添加向下箭头 -->
                </a>
                <ul class="dropdown-menu learning-dropdown">
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 1: No Poverty
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 2: Zero Hunger
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 3: Good Health and Well-being
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 4: Quality Education
                    </a>
                  </li>
                  <li class="nav-item">
                    <router-link to="/learning" class="nav-link" exact-active-class="active">
                      Goal 5: Gender Equality
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 6: Clean Water and Sanitation
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 7: Affordable and Clean Energy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 8: Decent Work and Economic Growth
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 9: Industry, Innovation, and Infrastructure
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 10: Reduced Inequality
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 11: Sustainable Cities and Communities
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 12: Responsible Consumption and Production
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 13: Climate Action
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 14: Life Below Water
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 15: Life on Land
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 16: Peace, Justice, and Strong Institutions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link" @click.prevent>
                      Goal 17: Partnerships for the Goals
                    </a>
                  </li>
                </ul>
              </li>

              <!-- Question Hub -->
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Question Hub
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/myquestion" class="nav-link" exact-active-class="active">
                      My Question
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/uploadquestion" class="nav-link" exact-active-class="active">
                      Upload Question
                    </router-link>
                  </li>
                </ul>
              </li>

              <!-- Profile Dropdown -->
              <li class="nav-item dropdown" :class="{ 'active': isProfileActive }">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Profile
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/badges" class="nav-link" exact-active-class="active">
                      Badges
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/certificate" class="nav-link" exact-active-class="active">
                      Certificate
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </nav>

        <div class="nav-btn">
          <!-- 判断是否登录 -->
          <template v-if="isLoggedIn">
            <div class="user-info-container">
              <span class="after-login-username">Hi, {{ username }}</span>
              <el-progress :percentage="50" class="nav-bar-progress"></el-progress>
            </div>
          </template>
          <template v-else>
            <button @click="showLoginForm(false)" class="default-btn">Log in</button>
            <span>
              <button @click="showLoginForm(true)" id="sign-up" class="default-btn">Sign up</button>
            </span>
          </template>
        </div>

      </div>
    </div>
  </div>
</template>




<script>
import { EventBus } from '@/eventBus';

export default {
  data() {
    return {
      isSticky: false,
      button_active_state: false,
      isLoggedIn: false, // 初始化为未登录状态, 可切换
      username: 'TestUser', // 存储用户名
    };
  },
  computed: {
    // Check if either 'Badges' or 'Certificate' routes are active
    isProfileActive() {
      return (
        this.$route.name === 'Badges' || this.$route.name === 'Certificate'
      );
    },
  },
  //生命周期钩子函数created()和destroyed()的使用，它们分别定义了组件在创建和销毁时的行为
  created() {
    // 模拟从后端获取登录状态和用户名
    this.checkLoginStatus();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isSticky = scrollTop > 50; // Adjust as needed
    },
    showLoginForm(isSignUp) {
      EventBus.$emit('toggle-login-form', isSignUp);
    },
    // 模拟登录状态检查
    checkLoginStatus() {
      // 假设已经登录，用户名为 "Alice"
      this.isLoggedIn = true; // 设置为已登录
      this.username = 'Alice'; // 从后端获取的用户名
    }
  },
};
</script>



<style scoped>
.user-info-container {
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  align-items: center; /* 水平方向居中对齐 */
}
.nav-bar-progress {
  width: 100%; /* 让进度条的宽度适应容器或调整为固定值 */
  min-width: 200px; /* 可根据需要设置最大宽度 */
}

.after-login-username {
  margin-bottom: 5px; 
  margin-right: 30px;
  font-weight: 460; /* 加粗字体 */
  font-size: 23px; /* 增大字体 */
}

.edu-navbar-area.is-sticky {
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(90deg, rgba(237, 252, 253) 0%, #FFFFFF 54%, #FFFFFF 56%);
  /* 滚动时保持不透明 */
}

#sign-up {
  margin-left: 20px;

}

.navbar-area {
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  padding-left: 50px;
  z-index: 99;
  position: absolute;
}

.navbar-area.is-sticky {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);

  -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}

.edumim-responsive-nav {
  display: none;
}

.edumim-nav .navbar {
  position: inherit;
  padding: 0;
}

.edumim-nav .navbar .navbar-brand {
  font-size: inherit;
  line-height: 1;
  padding: 0;
}

.edumim-nav .navbar ul {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.nav-btn {
  position: absolute;
  padding-left: 40px;
  margin-left: 870px;
}

.edumim-nav .container {
  display: flex;
  align-items: center;
  /* Center vertically */
  justify-content: space-between;
  /* Space between nav and nav-btn */
}

.edumim-nav .navbar .navbar-nav {
  margin: auto;
  margin-left: 30px;
}

.edumim-nav .navbar .navbar-nav .nav-item {
  position: relative;
  margin-left: 50px;
  margin-right: 50px;
}

.edumim-nav .navbar .navbar-nav .nav-item a {
  color: var(--paragraphColor);
  font-size: 18px;
  font-weight: 300;
  /* Normal weight */
  padding-left: 0;
  padding-right: 0;
  padding-top: 25px;
  padding-bottom: 25px;
}

/* Apply slight bold styling to active links */
.edumim-nav .navbar .navbar-nav .nav-item a:hover,
.edumim-nav .navbar .navbar-nav .nav-item a.router-link-active,
.edumim-nav .navbar .navbar-nav .nav-item.active a {
  color: var(--blackColor);
  font-weight: 500;
}

/* Profile dropdown should be bold when either badges or certificate is active */
.edumim-nav .navbar .navbar-nav .nav-item.active>a {
  font-weight: 500;
  /* Slightly bold */
}


.edumim-nav .navbar .navbar-nav .nav-item .dropdown-toggle {
  padding-right: 0px;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-toggle::after {
  display: none;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-toggle::before {

  position: absolute;
  right: -4px;
  top: 22px;
  font-weight: 300;
  font-size: 20px;
  font-family: 'boxicons';
}

.edumim-nav .navbar .navbar-nav .nav-item:last-child {
  margin-right: 0;
}

.edumim-nav .navbar .navbar-nav .nav-item:first-child {
  margin-left: 0;
}

.edumim-nav .navbar .navbar-nav .nav-item:hover a,
.edumim-nav .navbar .navbar-nav .nav-item.active a {
  color: var(--blackColor);
}

.learning-dropdown {
  max-height: 300px;

}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu {
  left: 100%;

  top: 60px;
  opacity: 0;
  z-index: 99;
  border: none;
  overflow: hidden;
  padding: 0;
  width: 180px;
  display: block;
  border-radius: 10px;
  position: absolute;
  visibility: hidden;
  -webkit-transform: translateX(-10%);
  transform: translateX(-50%);
  background: #ffffff;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  /* can scroll down */
}

.navbar .nav-item:hover .learning-dropdown {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li {
  margin: 0;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a {
  padding: 8px 20px;
  position: relative;
  display: block;
  color: var(--mainColor);
  font-size: 16px;
  font-weight: 300;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a i {
  margin: 0;
  position: absolute;
  top: 50%;
  font-size: 20px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 15px;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a.router-link-active {
  background-color: #ffffff;
  color: var(--whiteColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu {
  top: 0;
  opacity: 0;
  left: -250px;
  margin-top: 15px;
  visibility: hidden;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a {
  color: var(--blackColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a.router-link-active {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu {
  top: 0;
  opacity: 0;
  left: 250px;
  visibility: hidden;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: var(--blackColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-active {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  top: 0;
  opacity: 0;
  left: -250px;
  visibility: hidden;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: var(--blackColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-active {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  top: 0;
  opacity: 0;
  left: 250px;
  visibility: hidden;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: var(--blackColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-active {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  top: 0;
  opacity: 0;
  left: -250px;
  visibility: hidden;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: var(--blackColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-active {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  top: 0;
  opacity: 0;
  left: 250px;
  visibility: hidden;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: var(--blackColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:hover,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:focus,
.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li a.router-link-active {
  background-color: #ffffff;
  /* Keep background white */
  color: #d7787d;
  font-weight: 600;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li.active a {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li.active a {
  color: var(--mainColor);
}

.edumim-nav .navbar .navbar-nav .nav-item .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

.edumim-nav .navbar .navbar-nav .nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

.edu-navbar-area2 {
  top: 50px;
}

.edu-fixed-nav {
  position: initial;
}

/* Navbar toggler */
.navbar-toggler {
  border: none;
  padding: 0;
  font-size: 75px;
  border-radius: 0;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  position: absolute;
  top: 15px;
  right: 0;
}

.navbar-toggler i {
  font-size: 40px;
  color: var(--mainColor);
  line-height: 0;
}

.navbar-toggler i:nth-child(2) {
  display: none;
}

.navbar-toggler.active i:nth-child(1) {
  display: none;
}

.navbar-toggler.active i:nth-child(2) {
  display: block;
}
</style>