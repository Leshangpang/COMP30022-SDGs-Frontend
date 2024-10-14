import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import BadgesPage from '../views/BadgesPage.vue';
import CertificatePage from '../views/CertificatePage.vue';
import LearningPage from '../views/LearningPage.vue';
import CommunityPage from '../views/CommunityPage.vue';
import QuestionDetailPage from '../components/CommunityChallengeQuestionDetail.vue';
import AnswerQuestionPage from '../views/AnswerCommunityQuestionPage.vue';
import AnswerFlashCard from '../views/AnswerFlashCard.vue';
import TakeQuizPage from '../views/TakeQuizPage.vue';
import UploadQuestionPage from '../views/UploadQuestionPage.vue';
import SeeMyQuestion from '@/views/SeeMyQuestion.vue';
import { EventBus } from '@/eventBus';



Vue.use(Router)


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/learning', name: 'learn', component: LearningPage },
  { path: '/badges', name: 'Badges', component: BadgesPage, meta: { requiresAuth: true }, },
  { path: '/certificate', name: 'Certificate', component: CertificatePage, meta: { requiresAuth: true }, },
  { path: '/communitychallenge', name: 'CommunityChallenge', component: CommunityPage, meta: { requiresAuth: true }, },

  { path: '/answerquestion', name: 'AnswerQuestion', component: AnswerQuestionPage, children: [{ path: '/question/:id', name: 'QuestionDetailPage', component: QuestionDetailPage }], meta: { requiresAuth: true }, },
  { path: '/flashcard', name: 'FlashCard', component: AnswerFlashCard, meta: { requiresAuth: true }, },
  { path: '/quiz', name: 'Quiz', component: TakeQuizPage, meta: { requiresAuth: true }, },
  { path: '/uploadquestion', name: 'UploadQuestion', component: UploadQuestionPage, meta: { requiresAuth: true }, },
  { path: '/myquestion', name: 'MyQuestion', component: SeeMyQuestion, meta: { requiresAuth: true }, },
  {
    path: '/myquestion/:id',
    name: 'QuestionDetail',
    component: () => import('@/components/QuestionHubQuestionDetail.vue'),
    props: true,
    meta: { requiresAuth: true },
  }
  

]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check the login status

  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      // Emit the event to show login form
      EventBus.$emit('toggle-login-form', false);

      // Stop the navigation
      next(false); // Prevent the route from being accessed
    } else {
      // If logged in, proceed to the route
      next();
    }
  } else {
    // Proceed if no authentication is required
    next();
  }
});


export default router
