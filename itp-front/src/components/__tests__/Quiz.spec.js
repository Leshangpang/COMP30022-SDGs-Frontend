import { mount } from '@vue/test-utils';
import Vue from 'vue';
import MultipleChoice from '@/components/MultipleChoice.vue'; // Adjust the path as needed
import {Button, Progress, Loading } from 'element-ui';

Vue.use(Button)
Vue.use(Progress)
Vue.use(Loading)

describe("MultipleChoice.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(MultipleChoice, {
        data() {
          return {
            selectMap: { 
                "1": "1",
                "2": "2",
                "3": "1",
                "4": "1",
                "5": "2",
                "6": "3",
                "7": "1",
                "8": "2",
                "9": "1",
                "10": "2"
            },  // simulate response the quiz
            isSubmit: false,
            currentIndex: 0,
          };
        },
        mocks: {
            $confirm: jest.fn(() => Promise.resolve()),
            $message: jest.fn()
        }
      });
    });

  it("renders the first question correctly", () => {
    // ensure the css of first question is correct
    const questionText = wrapper.find(".name").text();
    expect(questionText).toBe("What is gender equality?");
  });

  it("renders the correct number of options", () => {
    // ensure the number of option is correct
    const options = wrapper.findAll(".list li");
    expect(options.length).toBe(4);
  });

  it("handles next question click", async () => {
    // simulate chosen a choice
    await wrapper.find(".list li").trigger("click"); 
    
    // click the 'next' button
    await wrapper.find(".next").trigger("click");
    
    // ensure the question is changed
    const questionText = wrapper.find(".name").text();
    expect(questionText).toBe("Which SDG focuses on gender equality?");
  });
  

  it("disables next button if no option is selected", () => {
    // check when user not select, if the next button can not be used
    const nextButton = wrapper.find(".next");
    expect(nextButton.classes()).toContain("empty");
  });

  it("enables next button after selecting an option", async () => {
    //check when user selected, if the next button can be used
    await wrapper.find(".list li").trigger("click");
    const nextButton = wrapper.find(".next");
    expect(nextButton.classes()).not.toContain("empty");
  });
  it('allows submission when all questions are answered', async () => {
    // simulate answer all question
    wrapper.setData({
      selectMap: {
        "1": "1",
        "2": "2",
        "3": "1",
        "4": "2",
        "5": "3",
        "6": "4",
        "7": "2",
        "8": "1",
        "9": "2",
        "10": "3",
      },
    });

    await wrapper.vm.$nextTick(); // ensure the Vue update DOM

  const submitButton = wrapper.find('.submit');
  expect(submitButton.exists()).toBe(true); // ensure the submitButton exist

  // simulate using $confirm to return  Promise
  jest.spyOn(wrapper.vm, '$confirm').mockImplementation(() => Promise.resolve());

  await submitButton.trigger('click'); // click submitbutton
  await wrapper.vm.$nextTick(); // wait for state changing

  expect(wrapper.vm.isSubmit).toBe(true); // ensure it is submitted
  expect(wrapper.find('.submit-result').exists()).toBe(true); // check the page is updated when the quiz is submitted
  });
  
});
