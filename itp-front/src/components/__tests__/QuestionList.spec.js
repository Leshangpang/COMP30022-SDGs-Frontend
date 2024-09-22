import { mount } from '@vue/test-utils';
import QuestionList from '@/components/QuestionList.vue';
import ElementUI from 'element-ui';
import Vue from 'vue';

Vue.use(ElementUI);

describe('QuestionComponent.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(QuestionList, {
      propsData: {
        question: 'What is the capital of France?',
        initialRating: 4,
        questionId: 1
      },
      mocks: {
        $router: {
          push: jest.fn() // Mock the $router.push method
        }
      }
    });
  });

  it('应该显示问题标题', () => {
    const questionTitle = wrapper.find('.question-title');
    expect(questionTitle.text()).toBe('What is the capital of France?');
  });

  it('应该根据传入的评分显示评分', () => {
    const ratingValue = wrapper.vm.value;
    expect(ratingValue).toBe(4); // Check if initialRating is passed correctly
  });

  it('应该在点击时导航到问题详情页', async () => {
    // 模拟点击整个问题卡片
    await wrapper.trigger('click');

    // 断言 $router.push 被正确调用并且参数是 questionId 为 1 的页面
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'AnswerQuestion', params: { id: 1 } });
  });

  it('评分组件应该显示禁用状态并且有初始评分', () => {
    const rateComponent = wrapper.findComponent({ name: 'ElRate' });
    expect(rateComponent.props('disabled')).toBe(true); // 断言评分组件是禁用状态
    expect(rateComponent.props('value')).toBe(4); // 检查评分是否是 4
  });
});
