<template>
  <div id="LearningPage">
    <Header></Header>
    <MainBanner></MainBanner>
    <div class="content">
      <div class="title">
        <div class="name">
          <h2>5</h2>
          <div>
            <div>GENDER</div>
            <div>EQUALITY</div>
          </div>
        </div>
      </div>
      <div class="desc">
        <h2>Goal 5: Gender Equality</h2>
        <h4>Achieve gender equality and empower all women and girls</h4>
      </div>
    </div>

    <div class="aside-menu">
      <SideBar
      @update="(val) => (step = val)"
        :active="step"
      ></SideBar>
<component class="operate-content" :is="getCom" />
    </div>
    <MainFooter></MainFooter>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue'
import FlashCard from "../components/FlashCard.vue";
import CommunityChallenge from './CommunityPage.vue';


export default {
  name: 'LearningPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
  },
  data() {
    return {
      step: 1,
      comMap: {
        //1: Learning,
        2: FlashCard,
        //3: QuestionSubmit,
        4: CommunityChallenge,
      },
    };
  },
  computed: {
    getCom: (state) => state.comMap[state.step],
  },
  methods: {
    handleUpdate(val) {
      this.step = val;
      // 如果点击了 Community Challenge (step === 4)，跳转到 CommunityPage
      if (val === 4) {
        this.$router.push("/communitychallenge");
      }
    },
  },
}
</script>

<style scoped>
#LearningPage {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.content {
  display: flex;
  column-gap: 10px;
  padding: 0 100px;
  margin-top: 20px;
  color: #fff;
}
.content .name {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  column-gap: 10px;
  line-height: 1;
  padding: 10px;
}
.name h2 {
  margin: 0;
  line-height: 1;
  font-size: 32px;
}
.content .title {
  width: 150px;
  height: 150px;
  background-color: #d15a43;
}
.content .desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d15a43;
  padding-left: 20px;
  flex: 1;
}
.aside-menu {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-between;
  padding: 20px 100px;
  column-gap: 40px;
}
.operate-content {
  -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD - Firefox 19- */
  width: 20%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
</style>