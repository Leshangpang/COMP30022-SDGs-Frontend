import Vue from 'vue';
import ElementUI from 'element-ui';
import { mount } from '@vue/test-utils';
import CommunityChallengeQuestionDetail from '@/components/CommunityChallengeQuestionDetail.vue';

Vue.use(ElementUI);

describe('CommunityChallengeQuestionDetail.vue', () => {
  let wrapper;

  // Mock window.alert
  beforeAll(() => {
    window.alert = jest.fn();
  });

  beforeEach(() => {
    wrapper = mount(CommunityChallengeQuestionDetail, {
      mocks: {
        $route: {
          params: { id: 1 }
        }
      }
    });
  });

  afterEach(() => {
    // Clear mock call history
    window.alert.mockClear();
  });

  it('should load question details', async () => {
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // Wait for asynchronous update

    expect(wrapper.vm.questionDetail).toBe('What percentage of women globally experience physical or sexual violence in their lifetime?');
    expect(wrapper.vm.options).toEqual(['10%', '20%', '30%', '40%']);
  });

  it('should select the correct option', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // Wait for asynchronous update

    const optionButton = wrapper.findAll('.option-button').at(0);
    await optionButton.trigger('click');

    expect(wrapper.vm.selectedOption).toBe('10%');
  });

  it('should show the submitted answer', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // Wait for asynchronous update

    const optionButton = wrapper.findAll('.option-button').at(0);
    await optionButton.trigger('click');

    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');

    expect(window.alert).toHaveBeenCalledWith('You selected: 10%');
  });

  it('should prompt to select an option', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // Wait for asynchronous update

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
    await Vue.nextTick(); // Wait for asynchronous update

    expect(wrapper.find('.rating-text').text()).toBe('4 stars');
  });
});
