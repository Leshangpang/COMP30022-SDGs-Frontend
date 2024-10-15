<template>
  <div id="HomePage">
    <Header></Header>
    <MainBanner></MainBanner>
    <swiper-list></swiper-list>
    <div class="hometitle" style="background-color:  #f0ffffb3;;">
      What is Sustainable Development Goals (SDGs)?
    </div>
    <div class="pic">
      <img src="../assets/image/HomeEducation.png" alt="education img">
      <div class="text">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7dzFbP2AgFo?si=bp-4xFxVXj-0V2Tv"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div class="hometitle">
      History of the Sustainable Development Goals (SDGs)
    </div>
    <div class="history">
      <div class="text">
        <div class="eachPoint">2030 Agenda (2015): UN adopted 17 SDGs to address global challenges like poverty,
          inequality, and climate change.</div>
        <div class="eachPoint">Earth Summit (1992): 178 countries launched a global plan for sustainable development.
        </div>
        <div class="eachPoint">MDGs (2000): The Millennium Summit created 8 goals to reduce extreme poverty by 2015.
        </div>
        <div class="eachPoint">Johannesburg Declaration (2002): Reaffirmed global commitments to sustainable
          development.</div>
        <div class="eachPoint">Rio+20 (2012): Started SDG development and established the High-level Political Forum.
        </div>
        <div class="eachPoint">SDG Working Group (2013): A 30-member group drafted the SDGs.</div>
        <div class="eachPoint">HLPF: The UN’s annual forum for SDG review and follow-up.</div>
        <div class="eachPoint">UN DSDG: Supports SDG efforts in areas like water, energy, and climate.</div>
      </div>
      <img src="../assets/image/HomeHistory.png" alt="education img">
    </div>
    <div class="hometitle" style="background-color: #f0ffffb3;">
      Why learn the Sustainable Development Goals (SDGs)?
    </div>
    <HomePageQnA></HomePageQnA>
    <div class="hometitle">
      Register and improve your learning experience through more features!
    </div>
    <div class="thirdpart">
      <img src="../assets/image/SDGS-2.png" alt="education img">
      <div class="goal">
        <div class="content">Learning List - Select the learning that you want and build your own learning list!</div>
        <div class="content">Recommadations - Take self-assessments and get your customized learning recommendations!
        </div>
        <div class="content">Certificates - Get your SDG certification based on assessments!</div>
        <el-button class="btn" @click="showLoginForm(true)">
          Register now ^_^
        </el-button>
      </div>
    </div>
    <MainFooter></MainFooter>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/NavigationBar.vue";
import MainBanner from "../components/HomePageBanner.vue";
import SwiperList from "../components/SwiperList.vue";
import HomePageQnA from "../components/HomePageQnA.vue";
import MainFooter from "../components/MainFooter.vue";
import { EventBus } from '@/eventBus';

export default {
  name: "HomePage",
  components: {
    Header,
    MainBanner,
    MainFooter,
    SwiperList,
    HomePageQnA,
  },
  data() {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    };
  },
  mounted() {
    EventBus.$on('loginStatusChanged', (status) => {
      this.isLoggedIn = status;
    });
  },
  beforeDestroy() {
    EventBus.$off('loginStatusChanged'); // Clean up event listener
  },
  methods: {
    showLoginForm(isSignUp) {
      this.isSignUp = isSignUp;
      EventBus.$emit('toggle-login-form', this.isSignUp);
    },
  },
};
</script>

<style>
#HomePage {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
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

.edumim-nav .navbar {
  position: inherit;
  padding: 0;
}

.pic {
  width: 100%;
  height: 700px;
  background-color: #f0ffffb3;
  display: flex;
  justify-content: space-between;
  /* Space between image and text */
  align-items: center;
}

.pic img {
  height: 65%;
  /* Make image height match the container height */
  width: 700px;
  /* Maintain aspect ratio of the image */
}

.pic .text {
  width: 100%;
  height: 80%;
  background-color: rgba(130, 201, 137, 0.461);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  border: solid 10px hwb(113 60% 9% / 0.702);
  border-radius: 50px;
}

.pic iframe {
  width: 100%;
  /* Make the iframe take full width of the .text */
  height: 100%;
  /* Ensure the height is constrained by .text */
  border-radius: 50px;
}

.hometitle {
  color: #376dd1b7;
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  background-color: hsla(166, 64%, 88%, 0.571);
  padding-left: 100px;
  padding-top: 100px;
}

.history {
  width: 100%;
  height: 700px;
  background-color: hsla(166, 64%, 88%, 0.571);
  display: flex;
  justify-content: space-between;
  /* Space between image and text */
  align-items: center;
}

.history img {
  height: 70%;
  /* Make image height match the container height */
  width: auto;
  /* Maintain aspect ratio of the image */
}

.history .text {
  width: 100%;
  height: 90%;
  background-color: hsla(194, 56%, 62%, 0.474);
  margin-right: 60px;
  border: solid 10px rgba(77, 184, 251, 0.702);
  border-radius: 50px;
  margin-left: 100px;
  padding: 20px;
}

.history .text .eachPoint {
  padding: 5px;
  color: #fff;
  font-size: 1.57vw;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.thirdpart .goal {
  height: 80%;
  width: 100%;
  background-color: hwb(200 50% 0% / 0.474);
  margin: 80px;
  padding: 15px;
  border-radius: 15%;
  border: solid 10px hsla(68, 100%, 50%, 0.826);
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.thirdpart .goal .content {
  height: 100px;
  margin: 30px;
  text-align: left;
  border-radius: 30px;
  background-color: #80d7ffeb;
  padding: 10px;
  color: hsl(220, 89%, 48%), 89%, 48%;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 800;
}

.thirdpart {
  width: 100%;
  height: 700px;
  background-color: hsla(166, 64%, 88%, 0.571);
  display: flex;
  justify-content: space-between;
  /* Space between image and text */
  align-items: center;
}

.thirdpart img {
  height: 80%;
  /* Make image height match the container height */
  width: auto;
}

.thirdpart .btn {
  align-items: center;
  justify-content: center;
  background-color: #6ddab7;
  height: 50px;
  width: 200px;
  color: #fff;
  font-weight: bolder;
  border: solid 5px hsla(60, 92%, 77%, 0.638);
}

.hometitle .subtitle {
  color: #6ddab7;
  font-size: 30px;
  font-weight: 1000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>