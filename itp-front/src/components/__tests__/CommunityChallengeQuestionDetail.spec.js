import { createLocalVue, mount } from '@vue/test-utils';
import CommunityChallengeQuestionDetail from '@/components/CommunityChallengeQuestionDetail.vue';
import { Button, Input, Rate } from 'element-ui'; // Correctly import Button, Input, and Rate from Element UI

// Create a scoped Vue instance to isolate tests
const localVue = createLocalVue();
localVue.use(Button);  // Register Button
localVue.use(Input);   // Register Input
localVue.use(Rate);    // Register Rate

describe('CommunityChallengeQuestionDetail.vue', () => {
  let wrapper;

  // Mock window.alert
  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => { }); // Mock window.alert
  });

  beforeEach(() => {
    wrapper = mount(CommunityChallengeQuestionDetail, {
      localVue, // Use the localVue instance with on-demand components registered
      mocks: {
        $route: {
          params: { id: 1 }
        }
      }
    });
  });

  afterEach(() => {
    // Clear mock call history after each test
    window.alert.mockClear();
  });

  // Test: Submitting discussion content
  it('should submit discussion content', async () => {
    // Set rating value to meet the 1-star rating requirement
    wrapper.setData({ value: 1 });

    // Find and set the discussion input value
    const discussionInput = wrapper.find('.el-textarea__inner'); // Correctly target the textarea inside el-input
    await discussionInput.setValue('This is a test comment.');

    // Find and click the submit button
    const discussionSubmitButton = wrapper.find('.discussion-submit-button');
    await discussionSubmitButton.trigger('click');               // Simulate the form submission

    // Assert the alert message
    expect(window.alert).toHaveBeenCalledWith('Your comment: This is a test comment.');
  });

  // Test: Selecting the correct option
  it('should select the correct option', async () => {
    // Mock fetchQuestionDetail to return test data
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'Test Question?',
      options: ['10%', '20%', '30%', '40%']
    });

    // Call the mock fetchQuestionDetail function and wait for the update
    await wrapper.vm.fetchQuestionDetail();
    await wrapper.vm.$nextTick(); // Wait for asynchronous update

    // Find the first option button and simulate a click
    const optionButton = wrapper.findAll('.option-button').at(0); // Find first option button
    await optionButton.trigger('click');

    // Check if the selected option is correct
    expect(wrapper.vm.selectedOption).toBe('10%');
  });

  // Test: Showing the submitted answer
  it('should show the submitted answer', async () => {
    // Mock fetchQuestionDetail to return test data
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'Test Question?',
      options: ['10%', '20%', '30%', '40%']
    });

    // Call the mock fetchQuestionDetail function and wait for the update
    await wrapper.vm.fetchQuestionDetail();
    await wrapper.vm.$nextTick();

    // Find the first option button and simulate a click
    const optionButton = wrapper.findAll('.option-button').at(0);
    await optionButton.trigger('click');

    // Find and click the submit button
    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');

    // Assert the alert message
    expect(window.alert).toHaveBeenCalledWith('You selected: 10%');
  });

  // Test: Prompting to select an option
  it('should prompt to select an option', async () => {
    // Mock fetchQuestionDetail to return test data
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'Test Question?',
      options: ['10%', '20%', '30%', '40%']
    });

    // Call the mock fetchQuestionDetail function and wait for the update
    await wrapper.vm.fetchQuestionDetail();
    await wrapper.vm.$nextTick();

    // Find and click the submit button without selecting an option
    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');

    // Assert the alert message
    expect(window.alert).toHaveBeenCalledWith('Please select an option.');
  });

  // Test: Displaying the rating and corresponding text
  it('should display the rating and corresponding text', async () => {
    // Set rating value and wait for the update
    wrapper.setData({ value: 4 });
    await wrapper.vm.$nextTick();

    // Assert the rating text is displayed correctly
    expect(wrapper.find('.rating-text').text()).toBe('4 stars');
  });
});
