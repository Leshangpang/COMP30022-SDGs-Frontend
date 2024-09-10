<template>
    <div class="auth-container">
      <form class="login-form">
        <header class="auth-header">
          <h2 
            :class="{'auth-option': true, 'active': isLogin}" 
            @click="isLogin = true"
          >
            Login
          </h2>
          <h2 
            :class="{'auth-option': true, 'active': !isLogin}" 
            @click="isLogin = false"
          >
            Sign Up
          </h2>
        </header>
        <main>
          <!-- Username field is shown for both Login and Sign Up -->
          <div class="input-group">
            <label for="username" class="visually-hidden">Username</label>
            <input type="text" id="username" class="auth-input" placeholder="username" />
          </div>
  
          <!-- Password field -->
          <div class="input-group">
            <label for="password" class="visually-hidden">Password</label>
            <input type="password" id="password" class="auth-input" placeholder="password" />
          </div>
  
          <!-- Confirm Password only for Sign Up -->
          <div class="input-group" v-if="!isLogin">
            <label for="confirm-password" class="visually-hidden">Confirm Password</label>
            <input type="password" id="confirm-password" class="auth-input" placeholder="confirm password" />
          </div>
  
          <button type="submit" class="login-button" @click="handleSubmit">
            {{ isLogin ? 'Login' : 'Sign Up' }}
          </button>
  
          <!-- Forgot Password link only for Login -->
          <a href="#" v-if="isLogin" class="forgot-password">forgot password?</a>
        </main>
        <footer>
          <div class="auth-methods">
            <button @click="signInWithGoogle" class="google-auth">
              <img src="google-icon.png" alt="Google" />
            </button>
            <button @click="signInWithFacebook" class="facebook-auth">
              <img src="facebook-icon.png" alt="Facebook" />
            </button>
          </div>
        </footer>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true,  // This controls whether it's in Login or Sign Up mode
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission
      },
      signInWithGoogle() {
        // Handle Google sign-in
      },
      signInWithFacebook() {
        // Handle Facebook sign-in
      }
    },
  };
  </script>
  
  <style scoped>
  </style>
  