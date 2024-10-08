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
    const discussionInput = wrapper.find('.el-textarea__inner'); // Correctly target the textarea inside el-input
    await discussionInput.setValue('This is a test comment.');    // Set value for textarea

    const discussionSubmitButton = wrapper.find('.discussion-submit-button');
    await discussionSubmitButton.trigger('click');               // Simulate the form submission

    expect(window.alert).toHaveBeenCalledWith('Your comment: This is a test comment.'); // Assert the alert message
  });

  // Test: Selecting the correct option
  it('should select the correct option', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'Test Question?',
      options: ['10%', '20%', '30%', '40%']
    });

    await wrapper.vm.fetchQuestionDetail();  // Call the mock function
    await wrapper.vm.$nextTick(); // Wait for asynchronous update

    const optionButton = wrapper.findAll('.option-button').at(0); // Find first option button
    await optionButton.trigger('click');

    expect(wrapper.vm.selectedOption).toBe('10%'); // Check if the selected option is correct
  });

  // Test: Showing the submitted answer
  it('should show the submitted answer', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'Test Question?',
      options: ['10%', '20%', '30%', '40%']
    });

    await wrapper.vm.fetchQuestionDetail();
    await wrapper.vm.$nextTick();

    const optionButton = wrapper.findAll('.option-button').at(0);
    await optionButton.trigger('click');

    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');

    expect(window.alert).toHaveBeenCalledWith('You selected: 10%');
  });

  // Test: Prompting to select an option
  it('should prompt to select an option', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'Test Question?',
      options: ['10%', '20%', '30%', '40%']
    });

    await wrapper.vm.fetchQuestionDetail();
    await wrapper.vm.$nextTick();

    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');

    expect(window.alert).toHaveBeenCalledWith('Please select an option.');
  });

  // Test: Displaying the rating and corresponding text
  it('should display the rating and corresponding text', async () => {
    wrapper.vm.value = 4;
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.rating-text').text()).toBe('4 stars');
  });
});
