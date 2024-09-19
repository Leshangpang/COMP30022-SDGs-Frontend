<template>
  <div class="login-overlay">
    <div class="login-popup auth-container">
      <i class="el-icon-close close-button" @click="closeForm"></i>
      <form class="login-form" @submit.prevent="handleSubmit">
        <header class="auth-header">
          <h2 
            :class="{'auth-option': true, 'active': localIsLogin}" 
            @click="setLoginState(true)"
          >
            Log in
          </h2>
          <div class="divider"></div>
          <h2 
            :class="{'auth-option': true, 'active': !localIsLogin}" 
            @click="setLoginState(false)"
          >
            Sign up
          </h2>
        </header>
        <main>
          <div class="input-group">
            <label for="username" class="visually-hidden"></label>
            <input type="text" id="username" class="auth-input" placeholder="username" />
          </div>

          <div class="input-group" v-if="!localIsLogin">
            <label for="email" class="visually-hidden"></label>
            <input type="text" id="email" class="auth-input" placeholder="email" />
          </div>

          <div class="input-group">
            <label for="password" class="visually-hidden"></label>
            <input type="password" id="password" class="auth-input" placeholder="password" />
          </div>
  
          <!-- Confirm Password only for Sign Up -->
          <div class="input-group" v-if="!localIsLogin">
            <label for="confirm-password" class="visually-hidden"></label>
            <input type="password" id="confirm-password" class="auth-input" placeholder="confirm password" />
          </div>
  
          <div class="input-group">
            <img src="../assets/image/cloudflare.png"/>
          </div>

          <button type="submit" class="login-button">
            {{ localIsLogin ? 'Log in' : 'Sign up' }}
          </button>
          <p></p>
          <button v-if="localIsLogin" class="forgot-password">forgot password?</button>
        </main>
        <footer>
          <div class="auth-methods">
            <button @click="signInWithGoogle" class="google-auth">
              <img src="../assets/image/svg/google.svg" alt="Google" />
            </button>
            <button @click="signInWithFacebook" class="facebook-auth">
              <img src="../assets/image/svg/facebook.svg" alt="Facebook" />
            </button>
          </div>
          <p></p>
          <p v-if="!localIsLogin" class="switch-login">
            <button class="forgot-password" @click="setLoginState(true)">already have an account?</button>
          </p>
        </footer>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'UserLogin', // Update the component name to multi-word
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      localIsLogin: this.isLogin, // Use local data to manage state
    };
  },
  methods: {
    setLoginState(state) {
      this.localIsLogin = state;
      this.$emit('update:isLogin', state); // Emit an event to the parent
    },
    handleSubmit() {
      // Handle form submission
    },
    signInWithGoogle() {
      // Handle Google sign-in
    },
    signInWithFacebook() {
      // Handle Facebook sign-in
    },
    closeForm() {
      this.$emit('closeLogin');
    },
  },
};
</script>
  
<style scoped>
/* Your existing styles */
</style>
