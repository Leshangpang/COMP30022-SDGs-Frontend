import { mount } from '@vue/test-utils';
import QuestionDetail from '@/components/QuestionDetail.vue';
import ElementUI from 'element-ui';
import Vue from 'vue';
Vue.use(ElementUI);

describe('QuestionDetail.vue', () => {
  let wrapper;

  // Mock window.alert
  beforeAll(() => {
    window.alert = jest.fn();
  });

  beforeEach(() => {
    wrapper = mount(QuestionDetail, {
      mocks: {
        $route: {
          params: { id: 1 }
        }
      }
    });
  });

  afterEach(() => {
    // 清除 mock 的调用记录
    window.alert.mockClear();
  });

  it('应该加载问题详情', async () => {
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // 等待异步更新

    expect(wrapper.vm.questionDetail).toBe('What percentage of women globally experience physical or sexual violence in their lifetime?');
    expect(wrapper.vm.options).toEqual(['10%', '20%', '30%', '40%']);
  });

  it('应该正确选择选项', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // 等待异步更新

    const optionButton = wrapper.findAll('.option-button').at(0);
    await optionButton.trigger('click');

    expect(wrapper.vm.selectedOption).toBe('10%');
  });

  it('应该显示提交的答案', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // 等待异步更新

    const optionButton = wrapper.findAll('.option-button').at(0);
    await optionButton.trigger('click');

    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');
    
    expect(window.alert).toHaveBeenCalledWith('You selected: 10%');
  });

  it('应该提示选择选项', async () => {
    wrapper.vm.questionId = 1;
    wrapper.vm.fetchQuestionDetail();
    await Vue.nextTick(); // 等待异步更新

    const submitButton = wrapper.find('.submit-button');
    await submitButton.trigger('click');
    
    expect(window.alert).toHaveBeenCalledWith('Please select an option.');
  });

  it('应该提交讨论内容', async () => {
    const discussionInput = wrapper.find('.discussion-input .el-textarea__inner');
    await discussionInput.setValue('This is a test comment.');

    const discussionSubmitButton = wrapper.find('.discussion-submit-button');
    await discussionSubmitButton.trigger('click');
    
    expect(window.alert).toHaveBeenCalledWith('Your comment: This is a test comment.');
  });

  it('应该显示评分和相应的文本', async () => {
    wrapper.vm.value = 4;
    await Vue.nextTick(); // 等待异步更新

    expect(wrapper.find('.rating-text').text()).toBe('4 stars');
  });
});
