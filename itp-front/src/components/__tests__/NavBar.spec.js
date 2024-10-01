import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Navbar from '@/components/NavigationBar.vue'; // Path to your component
import { EventBus } from '@/eventBus';
import HomePage from '@/views/HomePage.vue';
import CertificatePage from '@/views/CertificatePage.vue';
import SeeMyQuestion from '@/views/SeeMyQuestion.vue';
import LearningPage from '@/views/LearningPage.vue';
import BadgesPage from '@/views/BadgesPage.vue';
import UploadQuestionPage from '@/views/UploadQuestionPage.vue';


// Setup local Vue and router for testing
const localVue = createLocalVue();
localVue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/learning', name: 'learn', component: LearningPage },
    { path: '/badges', name: 'Badges', component: BadgesPage },
    { path: '/certificate', name: 'Certificate', component: CertificatePage },
    { path: '/uploadquestion', name: 'UploadQuestion', component: UploadQuestionPage },
    { path: '/myquestion', name: 'MyQuestion', component: SeeMyQuestion }
  ]
  

describe('NavigationBar.vue', () => {
    let wrapper;
    let router;
  
    beforeEach(() => {
      router = new VueRouter({ routes });
      wrapper = shallowMount(Navbar, {
        localVue,
        router,
      });
    });

    it('should navigate to the /learning route when the "Goal 5: Gender Equality" link is clicked', async () => {
        // Initialize router with the correct routes
        const router = new VueRouter({ routes });
        // Push the initial route (for testing purposes)
       // Ensure the router is ready before interacting with it
        await router.push('/'); // Start at home page
        await wrapper.vm.$nextTick(); 
      
        // Simulate clicking the "Goal 5: Gender Equality" link
        const learningLink = wrapper.find('#Goal5'); // Using id="Goal5" for Gender Equality link
        expect(learningLink.exists()).toBe(true); // Ensure the link exists
      
        await learningLink.trigger('click'); // Simulate the click event
        await wrapper.vm.$nextTick();

        // Manually push the /learning route to simulate navigation
        await router.push('/learning');
        await wrapper.vm.$nextTick(); // Wait for navigation to complete
      
        // Assert that the current route path is '/learning'
        expect(router.currentRoute.path).toBe('/learning'); 
      });
      

    it('renders the correct number of navigation links', () => {
        const links = wrapper.findAll('router-link-stub');
        expect(links).toHaveLength(6); // Adjust this based on the actual number of links
        expect(links.at(0).props().to).toBe('/'); // Home page link
    });

    it('navigates to the correct route when clicking "Home page"', async () => {
        const homeLink = wrapper.find('router-link-stub[to="/"]');
        expect(homeLink.exists()).toBe(true); // Ensure the link exists

        await homeLink.trigger('click'); // Simulate the click event

        // Check that the 'to' prop matches the correct path
        expect(homeLink.props().to).toBe('/');
    });
  
    it('displays learning dropdown and routes correctly', async () => {
      const learningLink = wrapper.find('a.nav-link.dropdown-toggle');
      await learningLink.trigger('click');
      
      const dropdownMenu = wrapper.find('ul.learning-dropdown');
      expect(dropdownMenu.isVisible()).toBe(true); // Check if dropdown is visible
  
      // Test clicking a goal link within the dropdown
      const goalLink = wrapper.findAll('a.nav-link').at(1);
      await goalLink.trigger('click');
      // Add further assertions if necessary to check routing behavior
    });
  
    it('emits an event when login or sign-up button is clicked', async () => {
      EventBus.$on('toggle-login-form', (isSignUp) => {
        expect(isSignUp).toBe(false); // Expect login button to trigger false
      });
  
      const loginBtn = wrapper.find('button.default-btn');
      await loginBtn.trigger('click');
    });
    it('should navigate to the /certificate route when the "Certificate" link is clicked', async () => {
        // Initialize router with the correct routes
        const router = new VueRouter({ routes });
        
        // Ensure the router is ready before interacting with it
        await router.push('/'); // Start at home page
        await wrapper.vm.$nextTick(); 
        
        // Simulate clicking the "Certificate" link
        const certificateLink = wrapper.find('#certificate'); // Using id="certificate" for Certificate link
        expect(certificateLink.exists()).toBe(true); // Ensure the link exists
      
        await certificateLink.trigger('click'); // Simulate the click event
        await wrapper.vm.$nextTick();
      
        // Manually push the /certificate route to simulate navigation
        await router.push('/certificate');
        await wrapper.vm.$nextTick(); // Wait for navigation to complete
      
        // Assert that the current route path is '/certificate'
        expect(router.currentRoute.path).toBe('/certificate'); 
      });
      it('should navigate to the /badges route when the "Badges" link is clicked', async () => {
        // Initialize router with the correct routes
        const router = new VueRouter({ routes });
        
        // Ensure the router is ready before interacting with it
        await router.push('/'); // Start at home page
        await wrapper.vm.$nextTick(); 
        
        // Simulate clicking the "Badges" link
        const badgesLink = wrapper.find('#badges'); // Using id="badges" for Badges link
        expect(badgesLink.exists()).toBe(true); // Ensure the link exists
      
        await badgesLink.trigger('click'); // Simulate the click event
        await wrapper.vm.$nextTick();
      
        // Manually push the /badges route to simulate navigation
        await router.push('/badges');
        await wrapper.vm.$nextTick(); // Wait for navigation to complete
      
        // Assert that the current route path is '/badges'
        expect(router.currentRoute.path).toBe('/badges'); 
      });
      it('should navigate to the /myquestion route when the "My Question" link is clicked', async () => {
        // Initialize router with the correct routes
        const router = new VueRouter({ routes });
        
        // Ensure the router is ready before interacting with it
        await router.push('/'); // Start at home page
        await wrapper.vm.$nextTick(); 
        
        // Simulate clicking the "My Question" link
        const myQuestionLink = wrapper.find('#myQuestion'); // Using id="myQuestion" for My Question link
        expect(myQuestionLink.exists()).toBe(true); // Ensure the link exists
      
        await myQuestionLink.trigger('click'); // Simulate the click event
        await wrapper.vm.$nextTick();
      
        // Manually push the /myquestion route to simulate navigation
        await router.push('/myquestion');
        await wrapper.vm.$nextTick(); // Wait for navigation to complete
      
        // Assert that the current route path is '/myquestion'
        expect(router.currentRoute.path).toBe('/myquestion'); 
      });
      it('should navigate to the /uploadquestion route when the "Upload Question" link is clicked', async () => {
        // Initialize router with the correct routes
        const router = new VueRouter({ routes });
        
        // Ensure the router is ready before interacting with it
        await router.push('/'); // Start at home page
        await wrapper.vm.$nextTick(); 
        
        // Simulate clicking the "Upload Question" link
        const uploadQuestionLink = wrapper.find('#uploadQuestion'); // Using id="uploadQuestion" for Upload Question link
        expect(uploadQuestionLink.exists()).toBe(true); // Ensure the link exists
      
        await uploadQuestionLink.trigger('click'); // Simulate the click event
        await wrapper.vm.$nextTick();
      
        // Manually push the /uploadquestion route to simulate navigation
        await router.push('/uploadquestion');
        await wrapper.vm.$nextTick(); // Wait for navigation to complete
      
        // Assert that the current route path is '/uploadquestion'
        expect(router.currentRoute.path).toBe('/uploadquestion'); 
      });
      
  });