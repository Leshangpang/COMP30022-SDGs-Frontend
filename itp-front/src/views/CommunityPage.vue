<template>
    <div id="CommunityChallenge">
      <Header></Header>
      <Goal5LearningBanner></Goal5LearningBanner>
      <Goal5LogoBar></Goal5LogoBar>
      <LearningProgressBar class="learning-progress-bar"></learningProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        <div class="questions-container">
        <QuestionList :question="'What percentage of women globally experience physical or sexual violence in their lifetime?'" :initialRating="4" :questionId="1" class="question-list"></QuestionList>
        <QuestionList :question="'How would you rate this service?'" :questionId="2" class="question-list"></QuestionList>
        <QuestionList :question="'xxxx'" :questionId="3" class="question-list"></QuestionList>
        <QuestionList :question="'another question....'" class="question-list"></QuestionList>
        <QuestionList :question="'another question....'" class="question-list"></QuestionList>
        <QuestionList :question="'another question....？'" class="question-list"></QuestionList>
      </div>
      </div>
      
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import Goal5LearningBanner from '../components/Goal5LearningBanner.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/LearningSideBar.vue';
import QuestionList from '../components/CommunityQuestionList.vue'
import Header from '../components/NavigationBar.vue';
import LearningProgressBar from '../components/learningProgressBar.vue';
import Goal5LogoBar from '../components/Goal5LogoBar.vue';




export default {
  name: 'CommunityChallenge',
  components: {
    Header,
    Goal5LearningBanner,
    MainFooter,
    SideBar,
    QuestionList,
    LearningProgressBar,
    Goal5LogoBar,
  }

}
</script>

<style scoped>
#CommunityChallenge {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}



.sidebar-container {
  display: flex;
  margin-top: 40px;
  margin-bottom: 100px;
}
.sidebar {
  margin: 0;
  margin-left: 60px; /* Adjust this value to set the margin from the left side of the page */
  
  flex: 1; /* Sidebar takes up the left-side space */
}
.questions-container {
  display: flex;
  flex-direction: column; /* Arrange the questions vertically on the right side */
  margin-left: 70px;
  flex: 2; /* Control the width of the right-side questions section */
  max-height: 400px; /* Control the maximum height of the right-side question list */
  overflow-y: auto; /* Allow vertical scrolling of the question list */
  padding-right: 10px; /* Prevent the scrollbar from covering content */
}

.question-list {
  margin-bottom: 20px; /* Spacing between each question */
}

</style>
  