import { mount } from '@vue/test-utils';
import CommunityQuestionList from '@/components/CommunityQuestionList.vue';
import ElementUI from 'element-ui';
import Vue from 'vue';

Vue.use(ElementUI);

describe('CommunityQuestionList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CommunityQuestionList, {
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

  it('should display the question title', () => {
    const questionTitle = wrapper.find('.question-title');
    expect(questionTitle.text()).toBe('What is the capital of France?');
  });

  it('should display the correct rating based on the passed prop', () => {
    const ratingValue = wrapper.vm.value;
    expect(ratingValue).toBe(4); // Check if initialRating is passed correctly
  });

  it('should navigate to the question detail page when clicked', async () => {
    // Simulate clicking on the entire question card
    await wrapper.trigger('click');

    // Assert that $router.push is called with the correct parameters for questionId 1
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'AnswerQuestion', params: { id: 1 } });
  });

  it('should display the rating component as disabled and with the correct initial rating', () => {
    const rateComponent = wrapper.findComponent({ name: 'ElRate' });
    expect(rateComponent.props('disabled')).toBe(true); // Assert that the rating component is disabled
    expect(rateComponent.props('value')).toBe(4); // Check if the rating is 4
  });
});
