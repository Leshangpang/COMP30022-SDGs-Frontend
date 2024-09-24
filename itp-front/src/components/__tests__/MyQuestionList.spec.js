import { mount } from '@vue/test-utils';
import MyQuestionList from '@/components/MyQuestionList.vue';

describe('MyQuestionList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MyQuestionList);
  });

  it('renders the correct number of questions', () => {
    const questionCards = wrapper.findAll('.question-card');
    expect(questionCards.length).toBe(3); // There are 3 questions in the sample data
  });

  it('displays the correct question title for each question', () => {
    const questionTitles = wrapper.findAll('.exact-question');
    expect(questionTitles.at(0).text()).toBe(
      'What measures can be implemented to effectively prevent and address gender-based violence, including domestic violence and sexual harassment?'
    );
    expect(questionTitles.at(1).text()).toBe(
      'What are the main challenges preventing universal access to clean and safe drinking water in different regions of the world?'
    );
    expect(questionTitles.at(2).text()).toBe(
      'What are the main barriers preventing universal access to affordable and reliable energy, especially in developing regions?'
    );
  });

  it('formats the upload time correctly', () => {
    const uploadTimes = wrapper.findAll('.question-right span');
    expect(uploadTimes.at(1).text()).toBe('15/09/2023'); // First question's upload time
    expect(uploadTimes.at(5).text()).toBe('16/09/2023'); // Second question's upload time
    expect(uploadTimes.at(9).text()).toBe('17/09/2023'); // Third question's upload time
  });

  it('displays the correct category for each question', () => {
    const categories = wrapper.findAll('.question-right span');
    expect(categories.at(0).text()).toBe('Goal 5');
    expect(categories.at(4).text()).toBe('Goal 6');
    expect(categories.at(8).text()).toBe('Goal 7');
  });

  it('displays the correct view count and average score for each question', () => {
    const viewCounts = wrapper.findAll('.question-right span');
    const averageScores = wrapper.findAll('.question-right span');

    expect(viewCounts.at(2).text()).toBe('150'); // First question's views
    expect(viewCounts.at(6).text()).toBe('200'); // Second question's views
    expect(viewCounts.at(10).text()).toBe('180'); // Third question's views

    expect(averageScores.at(3).text()).toBe('4.5'); // First question's average score
    expect(averageScores.at(7).text()).toBe('4.8'); // Second question's average score
    expect(averageScores.at(11).text()).toBe('4.7'); // Third question's average score
  });
});
