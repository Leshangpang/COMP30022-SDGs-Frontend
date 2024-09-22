import { mount } from '@vue/test-utils';
import FillUploadQuestion from '@/components/FillUploadQuestion.vue';
import ElementUI from 'element-ui';
import Vue from 'vue';

Vue.use(ElementUI);

describe('QuestionHub.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FillUploadQuestion);
  });

  it('should render the form correctly', () => {
    expect(wrapper.find('.question-hub-form-title').text()).toBe('Create New Question');
    expect(wrapper.findAll('textarea').length).toBe(5); // 1 for question, 4 for choices
    expect(wrapper.findAll('.el-select').length).toBe(2); // 1 for SDGs Category, 1 for Correct Answer
  });

  it('should bind question and options data correctly', async () => {
    const questionInput = wrapper.find('.question-hub-custom-question-textarea .el-textarea__inner');
    await questionInput.setValue('What is the capital of France?');
    expect(wrapper.vm.question).toBe('What is the capital of France?');

    const optionAInput = wrapper.findAll('.el-textarea__inner').at(1);
    await optionAInput.setValue('Paris');
    expect(wrapper.vm.choiceA).toBe('Paris');
  });

  it('should clear the form when clearForm is called', async () => {
    // Set some data in the form
    await wrapper.setData({
      question: 'Sample question',
      choiceA: 'Option A',
      choiceB: 'Option B',
      choiceC: 'Option C',
      choiceD: 'Option D',
      selectedGoal: 'option1',
      correctAnswer: 'option1',
    });

    // Call clearForm
    await wrapper.vm.clearForm();

    // Verify form fields are cleared
    expect(wrapper.vm.question).toBe('');
    expect(wrapper.vm.choiceA).toBe('');
    expect(wrapper.vm.choiceB).toBe('');
    expect(wrapper.vm.choiceC).toBe('');
    expect(wrapper.vm.choiceD).toBe('');
    expect(wrapper.vm.selectedGoal).toBe('');
    expect(wrapper.vm.correctAnswer).toBe('');
  });

  it('should validate form and show error messages', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Call validateForm without filling the form
    await wrapper.vm.validateForm();

    // Verify alert is shown with correct error messages
    expect(window.alert).toHaveBeenCalledWith(
      'Question is required.\nSDGs Category is required.\nChoice A is required.\nChoice B is required.\nChoice C is required.\nChoice D is required.\nCorrect Answer is required.'
    );

    window.alert.mockRestore();
  });

  it('should submit form when valid', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Set valid data
    await wrapper.setData({
      question: 'Sample question',
      choiceA: 'Option A',
      choiceB: 'Option B',
      choiceC: 'Option C',
      choiceD: 'Option D',
      selectedGoal: 'option1',
      correctAnswer: 'option1',
    });

    // Call validateForm
    await wrapper.vm.validateForm();

    // Verify form is valid and alert shows form is being submitted
    expect(window.alert).toHaveBeenCalledWith('Form is valid! Submitting...');

    window.alert.mockRestore();
  });
});
