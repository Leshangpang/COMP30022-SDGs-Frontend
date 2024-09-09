import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CoursePage from '../views/CoursePage.vue';
import BandgesPage from '../views/BandgesPage.vue';
import CertificationPage from '../views/CertificationPage.vue';
import LearningPage from '../views/LearningPage.vue';
import CommunityPage from '../views/CommunityPage.vue';
import QuestionDetailPage from '../components/QuestionDetail.vue';
import AnswerQuestionPage from '../views/AnswerQuestionPage.vue';




Vue.use(Router)


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/course', name: 'Course', component: CoursePage },
  { path: '/learning', name: 'learn', component: LearningPage },
  { path: '/bandges', name: 'Bandges', component: BandgesPage },
  { path: '/certification', name: 'Certification', component: CertificationPage },
  { path: '/communitychallenge', name: 'CommunityChallenge', component: CommunityPage },
  { path: '/answerquestion', name: 'AnswerQuestion', component: AnswerQuestionPage, children: [{ path: '/question/:id', name: 'QuestionDetailPage', component: QuestionDetailPage }] }


]

const router = new Router({
  routes
})

export default router
