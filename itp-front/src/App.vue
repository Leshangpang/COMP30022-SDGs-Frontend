<template>
  <div id="app">
    <router-view></router-view><!-- Routing view, used to render the matched route components."-->
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
