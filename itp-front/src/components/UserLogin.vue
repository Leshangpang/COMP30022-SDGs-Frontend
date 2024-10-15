<template>
  <div class="login-overlay">
    <div class="login-popup auth-container">
      <i class="el-icon-close close-button" @click="closeForm"></i>
      <form class="login-form" @submit.prevent="handleSubmit">
        <header class="auth-header">
          <h2 :class="{ 'auth-option': true, 'active': localIsLogin }" @click="setLoginState(true)">
            Log in
          </h2>
          <div class="divider"></div>
          <h2 :class="{ 'auth-option': true, 'active': !localIsLogin }" @click="setLoginState(false)">
            Sign up
          </h2>
        </header>
        <main>
          <div class="input-group">
            <label for="username" class="visually-hidden"></label>
            <input type="text" id="username" class="auth-input" placeholder="username" v-model="username" />
          </div>

          <div class="input-group" v-if="!localIsLogin">
            <label for="email" class="visually-hidden"></label>
            <input type="text" id="email" class="auth-input" placeholder="email" v-model="email" />
          </div>

          <div class="input-group">
            <label for="password" class="visually-hidden"></label>
            <input type="password" id="password" class="auth-input" placeholder="password" v-model="password" />
          </div>

          <!-- Confirm Password only for Sign Up -->
          <div class="input-group" v-if="!localIsLogin">
            <label for="confirm-password" class="visually-hidden"></label>
            <input type="password" id="confirm-password" class="auth-input" placeholder="confirm password"
              v-model="confirmPassword" />
          </div>

          <div class="input-group">
            <img src="../assets/image/SignInCloudfarePlaceholder.png" />
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
import { EventBus } from '@/eventBus';

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
      username: '',  // Added data property for username
      password: '',  // Added data property for password
      confirmPassword: '',  // Added data property for confirm password
      email: '', // Added email for sign up
      error: null,
      loading: false,
    };
  },
  methods: {
    setLoginState(state) {
      this.localIsLogin = state;
      this.$emit('update:isLogin', state); // Emit an event to the parent
    },
    handleSubmit() {
      if (!this.localIsLogin) {  // Only validate if signing up
        if (this.isSignUpValid()) {
          this.submitSignUpForm();
        }
      } else {
        // Handle login logic
        if (this.isLoginValid()) {
          this.submitLoginForm();
        }
      }
    },

    isSignUpValid() {
      if (this.username.trim() === '' || this.password.trim() === '') {
        alert('Username and password cannot be empty.');
        return false;
      }
      const hasCharacter = /[a-zA-Z]/.test(this.password);
      const isLongEnough = this.password.length >= 6;

      if (!hasCharacter || !isLongEnough) {
        alert('Password must contain at least one character and be at least 6 characters long.');
        return false;
      }

      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }

      return true;
    },

    isLoginValid() {
      if (this.username.trim() === '' || this.password.trim() === '') {
        alert('Username and password cannot be empty.');
        return false;
      }

      return true;
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

    submitLoginForm() {
      const loginData = {
        name: this.username,  // replace with actual username field
        password: this.password  // replace with actual password field
      };

      fetch('https://e5981544-da30-461b-8164-403f6c1442a2.mock.pstmn.io/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.code === 1) {
            // Login successful, handle the success scenario
            alert('Login successful: ' + data.msg);
            console.log('Token:', data.data);  // This is your token
            // You can save the token to localStorage or Vuex for further use
            localStorage.setItem('isLoggedIn', 'true');
            EventBus.$emit('loginStatusChanged', true);
            this.fetchData();
            this.closeForm(); 
          } else {
            // Handle login failure
            alert('Login failed: ' + data.msg);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },

    submitSignUpForm() {
      const signUpData = {
        name: this.username,  // replace with actual username field
        password: this.password  // replace with actual password field
      };

      fetch('https://e5981544-da30-461b-8164-403f6c1442a2.mock.pstmn.io/signup', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.code === 1) {
            // Sign-up successful, handle the success scenario
            alert('Sign-up successful: ' + data.msg);
            localStorage.setItem('isLoggedIn', 'true');
            EventBus.$emit('loginStatusChanged', true);
            this.fetchData();
            this.closeForm(); 
          } else {
            // Handle sign-up failure
            alert('Sign-up failed: ' + data.msg);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch('https://ba8a701b-07d5-4191-8556-da47d8974118.mock.pstmn.io/process/5', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.code == 1) {
          
          // Update the progressItems based on the received data
          const totalTopics = 4;
          const totalFlashcards = 4;
          const totalQuizzes = 10;

          // Calculate the number of topics finished from resourcesFinished
          const topicsFinished = result.data.resourcesFinished.split(',').length;
          const progressItems = [
            { number: (topicsFinished / totalTopics) * 100, label: "topic" },   // Use length of resourcesFinished for topics
            { number: (result.data.cardsFinishedNum / totalFlashcards) * 100, label: "flashcard" },
            { number: (result.data.quizPassed / totalQuizzes) * 100, label: "quiz" },
          ];

          localStorage.setItem('progressItems', JSON.stringify(progressItems));
          localStorage.setItem('topicFinished', JSON.stringify(result.data.resourcesFinished.split(',')));
          

        } else {
          throw new Error('Failed to fetch data: ' + result.msg);
        }
      } catch (error) {
        this.error = null;
      } finally {
        this.loading = false;
      }
    },

  },
};
</script>


<style scoped>
/* Your existing styles */
.auth-container {
  max-width: 600px;
  padding: 100px;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.auth-header h2 {
  flex: 1;
  margin: 0 30px;
  cursor: pointer;
  font-size: 24px;
  color: #999;
  font-weight: 500;
}

.auth-header h2.active {
  color: black;
  border-bottom: none;
}

.divider {
  height: 30px;
  width: 1px;
  background-color: #ccc;
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
  display: none;
}

.input-group {
  margin-bottom: 15px;
}

.auth-input {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: none;
}

.login-button {
  width: 100%;
  padding: 15px;
  background-color: #fff4c7;
  border: none;
  border-radius: 5px;
  font-size: 18px;
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
  z-index: 100000;
}

.login-popup {
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  position: relative;
}
</style>