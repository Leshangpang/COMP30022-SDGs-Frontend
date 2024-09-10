<template>
  <div class="login-overlay">
    <div class="login-popup auth-container">
      <button class="close-button" @click="closeForm">X</button>
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

          <div class="input-group">
            <label for="username" class="visually-hidden"></label>
            <input type="text" id="username" class="auth-input" placeholder="username" />
          </div>

          <div class="input-group" v-if="!isLogin">
            <label for="email" class="visually-hidden"></label>
            <input type="text" id="email" class="auth-input" placeholder="email" />
          </div>
  

          <div class="input-group">
            <label for="password" class="visually-hidden"></label>
            <input type="password" id="password" class="auth-input" placeholder="password" />
          </div>
  
          <!-- Confirm Password only for Sign Up -->
          <div class="input-group" v-if="!isLogin">
            <label for="confirm-password" class="visually-hidden"></label>
            <input type="password" id="confirm-password" class="auth-input" placeholder="confirm password" />
          </div>
  
          <button type="submit" class="login-button" @click="handleSubmit">
            {{ isLogin ? 'Login' : 'Create' }}
          </button>
          <p>
          </p>

          <button v-if="isLogin" class="forgot-password">forgot password?</button>


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
          <p>
          </p>
          <p v-if="!isLogin" class="switch-login">
            <button class="forgot-password" @click="isLogin = true">already has an account? </button>
          </p>
        </footer>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true,
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
      },
      closeForm() {
        this.$emit('closeLogin');
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.auth-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.auth-header h2 {
  margin: 0 15px;
  cursor: pointer;
  font-size: 18px;
  color: #666;
}

.auth-header h2.active {
  font-weight: bold;
  color: black;
}

.auth-option {
  position: relative;
}

.auth-option::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background-color: black;
  display: none;
}

.auth-option.active::after {
  display: block;
}

.input-group {
  margin-bottom: 15px;
}

.auth-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #fff4c7;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #f7d978;
}

.forgot-password {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
}

.forgot-password:hover {
  text-decoration: underline;
}

.auth-methods {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.auth-methods button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 0.3s ease;
}

.auth-methods button:hover {
  transform: scale(1.1);
}

.auth-methods img {
  width: 30px;
  height: 30px;
}

.google-auth img {
  border-radius: 50%;
  background-color: #fff;
}

.facebook-auth img {
  border-radius: 50%;
  background-color: #3b5998;
}

/* General styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

header {
  margin-bottom: 50px;
}

header h1 {
  font-size: 24px;
  color: #888;
  text-align: center;
}

header img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  position: relative;
}

  </style>
  