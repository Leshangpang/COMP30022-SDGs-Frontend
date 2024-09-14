import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CoursePage from '../views/CoursePage.vue';
import BadgesPage from '../views/BadgesPage.vue';
import CertificatePage from '../views/CertificatePage.vue';
import LearningPage from '../views/LearningPage.vue';
import CommunityPage from '../views/CommunityPage.vue';
import QuestionDetailPage from '../components/QuestionDetail.vue';
import AnswerQuestionPage from '../views/AnswerQuestionPage.vue';
import AnswerFlashCard from '../views/AnswerFlashCard.vue';
import TakeQuizPage from '../views/TakeQuizPage.vue';
import UploadQuestionPage from '../views/UploadQuestionPage.vue';
import SeeMyQuestion from '@/views/SeeMyQuestion.vue';




Vue.use(Router)


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/course', name: 'Course', component: CoursePage },
  { path: '/learning', name: 'learn', component: LearningPage },
  { path: '/badges', name: 'Badges', component: BadgesPage },
  { path: '/certificate', name: 'Certificate', component: CertificatePage },
  { path: '/communitychallenge', name: 'CommunityChallenge', component: CommunityPage },

  { path: '/answerquestion', name: 'AnswerQuestion', component: AnswerQuestionPage, children: [{ path: '/question/:id', name: 'QuestionDetailPage', component: QuestionDetailPage }] },
  { path: '/flashcard', name: 'FlashCard', component: AnswerFlashCard },
  { path: '/quiz', name: 'Quiz', component: TakeQuizPage },
  { path: '/uploadquestion', name: 'UploadQuestion', component: UploadQuestionPage},
  { path: '/myquestion', name: 'MyQuestion', component: SeeMyQuestion}

]

const router = new Router({
  routes
})

export default router
