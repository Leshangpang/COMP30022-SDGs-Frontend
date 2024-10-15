<template>
  <div id="app">
    <router-view></router-view> <!-- Routing view, used to render the matched route components. -->
    <UserLogin v-if="isLoginVisible" :isLogin="isLogin" @closeLogin="toggleLoginForm" />
  </div>
</template>

<script>
import UserLogin from './components/UserLogin.vue';
import { EventBus } from './eventBus';

export default {
  name: 'app',
  components: {
    UserLogin,
  },
  data() {
    return {
      isLoginVisible: false, // Controls whether the login form is shown
      isLogin: true, // Controls whether login or signup is active
    };
  },
  methods: {
    // Toggle login form visibility and set to login/signup mode
    toggleLoginForm(isSignUp = false) {
      this.isLoginVisible = !this.isLoginVisible;
      this.isLogin = !isSignUp;
    },

    // Handler for beforeunload event to clear login status
    handleBeforeUnload() {
      localStorage.setItem('isLoggedIn', 'false'); // Set isLoggedIn to false when the app is closed or refreshed
      localStorage.removeItem('progressItems');
      localStorage.removeItem('topicFinished');
    },
  },
  created() {
    // Listen for the 'toggle-login-form' event to show/hide the login form
    EventBus.$on('toggle-login-form', this.toggleLoginForm);

    // Add event listener for window unload/refresh to reset login status
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeDestroy() {
    // Clean up EventBus listener when the component is destroyed
    EventBus.$off('toggle-login-form', this.toggleLoginForm);

    // Clean up the beforeunload event listener
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    
  },
};
</script>

<style scoped>
/* Add any styles if needed */
</style>

