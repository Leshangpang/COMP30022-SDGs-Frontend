<template>
  <div id="app">
    <router-view></router-view><!-- 路由视图，用于渲染匹配的路由组件 -->
    <UserLogin v-if="isLoginVisible" :isLogin="isLogin" @closeLogin="toggleLoginForm" />
  </div>
</template>

<script>
  
import UserLogin from './components/UserLogin.vue';
import { EventBus } from './eventBus';

export default {
  name: 'app',
  components: {
    UserLogin
  },
  data() {
    return {
      isLoginVisible: false,
      isLogin: true,
    };
  },
  methods: {
    toggleLoginForm(isSignUp = false) {
      console.log('Toggling login form visibility');
      this.isLoginVisible = !this.isLoginVisible;
      this.isLogin = !isSignUp;
    }
  },
  created() {
    EventBus.$on('toggle-login-form', this.toggleLoginForm);
  },
  beforeDestroy() {
    EventBus.$off('toggle-login-form', this.toggleLoginForm);
  }
  
}
</script>

<style>




</style>
