// src/components/__tests__/UserLogin.spec.js
import { mount } from '@vue/test-utils';
import UserLogin from '@/components/UserLogin.vue';

describe('UserLogin.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UserLogin, {
      propsData: {
        isLogin: true,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders login form by default', () => {
    expect(wrapper.find('.auth-header .active').text()).toBe('Log in');
    expect(wrapper.findAll('input').length).toBe(2); // username and password
  });

  it('renders signup form when switched to sign up', async () => {
    await wrapper.vm.setLoginState(false);
    expect(wrapper.find('.auth-header .active').text()).toBe('Sign up');
    expect(wrapper.findAll('input').length).toBe(4); // username, email, password, confirm password
  });

  it('emits "update:isLogin" event when switching forms', async () => {
    await wrapper.vm.setLoginState(false);
    expect(wrapper.emitted()['update:isLogin']).toBeTruthy();
    expect(wrapper.emitted()['update:isLogin'][0]).toEqual([false]);
  });

  it('emits "closeLogin" event when close button is clicked', async () => {
    await wrapper.find('.close-button').trigger('click');
    expect(wrapper.emitted()['closeLogin']).toBeTruthy();
  });

  it('calls handleSubmit method on form submit', async () => {
    const handleSubmitSpy = jest.spyOn(wrapper.vm, 'handleSubmit');
    await wrapper.find('form').trigger('submit.prevent');
    expect(handleSubmitSpy).toHaveBeenCalled();
  });

  
});
