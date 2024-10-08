import { createLocalVue, mount } from '@vue/test-utils';
import CommunityChallengeQuestionDetail from '@/components/CommunityChallengeQuestionDetail.vue';
import { Button, Input, Rate, Textarea } from 'element-ui'; // On-demand import of required Element UI components

// Create a scoped Vue instance to isolate tests
const localVue = createLocalVue();
localVue.component(Button.name, Button);
localVue.component(Input.name, Input);
localVue.component(Rate.name, Rate);
localVue.component(Textarea.name, Textarea);

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

  it('should load question details', async () => {
    // Mock fetchQuestionDetail to return test data
    wrapper.vm.fetchQuestionDetail = jest.fn().mockResolvedValue({
      questionDetail: 'What percentage of women globally experience physical or sexual violence in their lifetime?',
      options: ['10%', '20%', '30%', '40%']
    });

    await wrapper.vm.fetchQuestionDetail();  // Call the mock function
    await wrapper.vm.$nextTick(); // Wait for asynchronous update

    // Test expectations
    expect(wrapper.vm.questionDetail).toBe('What percentage of women globally experience physical or sexual violence in their lifetime?');
    expect(wrapper.vm.options).toEqual(['10%', '20%', '30%', '40%']);
  });

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

  it('should submit discussion content', async () => {
    const discussionInput = wrapper.find('.discussion-input .el-textarea__inner');
    await discussionInput.setValue('This is a test comment.');

    const discussionSubmitButton = wrapper.find('.discussion-submit-button');
    await discussionSubmitButton.trigger('click');

    expect(window.alert).toHaveBeenCalledWith('Your comment: This is a test comment.');
  });

  it('should display the rating and corresponding text', async () => {
    wrapper.vm.value = 4;
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.rating-text').text()).toBe('4 stars');
  });
});
