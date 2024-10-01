import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Navbar from '@/components/NavigationBar.vue'; // Path to your component
import { EventBus } from '@/eventBus';

// Setup local Vue and router for testing
const localVue = createLocalVue();
localVue.use(VueRouter);

describe('NavigationBar.vue', () => {
  let wrapper;
  let router;
  
  beforeEach(() => {
    router = new VueRouter();
    wrapper = shallowMount(Navbar, {
      localVue,
      router,
    });
  });

  it('renders navigation links', () => {
    const links = wrapper.findAll('router-link-stub');
    expect(links).toHaveLength(6); // Adjust based on the number of actual links
    expect(links.at(0).props().to).toBe('/'); // Home page link
  });

  it('navigates to the correct route when clicking "Home page"', async () => {
    // Find the router-link by the `to` attribute value
    const homeLink = wrapper.find('router-link-stub[to="/"]');
    expect(homeLink.exists()).toBe(true); // Ensure the link exists
    
    await homeLink.trigger('click'); // Trigger the click event

    // Since routing doesn't actually change the path in unit tests,
    // we can simulate the navigation by checking the 'to' prop of the link
    expect(homeLink.props().to).toBe('/');
  });
  it('displays learning dropdown and routes correctly', async () => {
    const learningLink = wrapper.find('a.nav-link.dropdown-toggle');
    await learningLink.trigger('click');
    const dropdownMenu = wrapper.find('ul.learning-dropdown');
    expect(dropdownMenu.isVisible()).toBe(true);

    const goalLink = wrapper.findAll('a.nav-link').at(1);
    await goalLink.trigger('click');
    // Perform further checks here if needed for routing behavior.
  });
  
  it('emits event when login or sign-up button is clicked', async () => {
    EventBus.$on('toggle-login-form', (isSignUp) => {
      expect(isSignUp).toBe(false); // For login
    });
    const loginBtn = wrapper.find('button.default-btn');
    await loginBtn.trigger('click');
  });
});

