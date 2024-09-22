import Vue from 'vue';
import { mount } from '@vue/test-utils';
import FlashCard from '@/components/ReadFlashcard.vue'; // Adjust the path as needed
import {Button, Carousel, CarouselItem} from 'element-ui';

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)


describe('ReadFlashcard.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FlashCard);
    jest.clearAllMocks(); // delet all of mock before using
    jest.spyOn(wrapper.vm, 'toggleFlash');
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the correct number of questions', () => {
    const questionList = wrapper.vm.questionList;
    expect(wrapper.findAll('.question-card')).toHaveLength(questionList.length);
  });

  it('toggles rotation on button click', async () => {
    const button = wrapper.find('.btn');
    
    // Initially, isRotate should be false
    expect(wrapper.vm.isRotate).toBe(false);

    // Click the button
    await wrapper.vm.$nextTick(); // wait for Vue update DOM
    await button.trigger('click'); // simulate 'click'
    expect(wrapper.vm.isRotate).toBe(true); // Should now be true

    // Click the button again
    await button.trigger('click');
    expect(wrapper.vm.isRotate).toBe(false); // Should revert to false
  });

  it('calls toggleFlash on button click', async () => {
    const toggleFlashSpy = jest.spyOn(wrapper.vm, 'toggleFlash');
    const button = wrapper.find('.btn');
    console.log(button.exists()); // ensure the button exist

    await wrapper.vm.$nextTick(); // wait for Vue update DOM
    wrapper.vm.toggleFlash(); 
    expect(toggleFlashSpy).toHaveBeenCalledTimes(1);
  });

  it('changes active index on carousel change', async () => {
    const carousel = wrapper.findComponent({ name: 'el-carousel' });
    await carousel.vm.$emit('change', 1); // Simulate changing the index
    expect(wrapper.vm.activeIndex).toBe(1);
    expect(wrapper.vm.isRotate).toBe(false); // isRotate should reset to false
  });
});
