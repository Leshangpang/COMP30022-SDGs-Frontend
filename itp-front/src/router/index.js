import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CoursePage from '../views/CoursePage.vue';
import BadgesPage from '../views/BadgesPage.vue';
import CertificatePage from '../views/CertificatePage.vue';
import LearningPage from '../views/LearningPage.vue';
import CommunityPage from '../views/CommunityPage.vue';




Vue.use(Router)


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/course', name: 'Course', component: CoursePage },
  { path: '/learning', name: 'learn', component: LearningPage },
  { path: '/badges', name: 'Badges', component: BadgesPage },
  { path: '/certificate', name: 'Certificate', component: CertificatePage },
  { path: '/communitychallenge', name: 'CommunityChallenge', component: CommunityPage }


]

const router = new Router({
  routes
})

export default router
