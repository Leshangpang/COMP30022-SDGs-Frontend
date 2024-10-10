import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import SwiperList from '@/components/SwiperList.vue'; // Adjust the path to your component
import flushPromises from 'flush-promises'; // To wait for promises to resolve
import "swiper/css/swiper.css";


jest.mock('axios');
jest.mock('vue-awesome-swiper', () => ({
    Swiper: {
      render: () => {}, // Mock render function
    },
    SwiperSlide: {
      render: () => {}, // Mock render function
    },
  }));

  const mockSwiper = {
    template: '<div class="swiper"><slot /></div>',
  };
  const mockSwiperSlide = {
    template: '<div class="swiper-slide"><slot /></div>',
  };

describe('SwiperList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SwiperList, {
        stubs: {
            Swiper: mockSwiper,
            SwiperSlide: mockSwiperSlide,
        },
      data() {
        return {
          list: [
            {
              name: "No poverty",
              indexOfModule: 3, // Set the moduleId to 3 to match the response
              data: [
                { value: 50, name: "Learning", link: "/learning" },
                { value: 50, name: "not Finished", link: "/learning" },
              ],
            },
          ],
        };
      },
    });
  });

  it('updates Learning and not Finished values correctly after GET response', async () => {
    // Mock the axios GET response for /process/3
    axios.get.mockResolvedValue({
      data: {
        code: 1,
        msg: "success",
        data: {
          moduleId: 3,
          resourcesFinished: "1,4,5",
          cardsFinishedNum: 10,
          quizPassed: 5,
        },
      },
    });

    // Call the updateValue method with moduleId 3
    await wrapper.vm.updateValue(3);

    // Wait for promises to resolve
    await flushPromises();

    // Check if the Learning value was updated correctly
    const learningData = wrapper.vm.list[0].data.find(d => d.name === "Learning");
    expect(learningData.value).toBe(7.5); // Should be updated with cardsFinishedNum from response

    // Check if the not Finished value was updated correctly
    const notFinishedData = wrapper.vm.list[0].data.find(d => d.name === "not Finished");
    expect(notFinishedData.value).toBe(92.5); // 100 - cardsFinishedNum
  });
});
