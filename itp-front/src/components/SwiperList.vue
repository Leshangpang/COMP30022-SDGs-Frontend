<template>
  <div class="swiper-list">
    <h3 class="title">Learning Module</h3>
    <div class="swiper-content">
      <swiper :options="swiperOption" class="swiper" id="mySwiper">
        <!--necessary component-->
        <!--each swiper item use the swiper-slide as tip-->
        <swiper-slide v-for="item in list" :key="item.indexOfModule" class="swiper_slide_item">
          <swiper-item :obj="item" :isLoggedIn="userLoggedIn"></swiper-item>
        </swiper-slide>

        <!--previous and next button-->
        <div class="swiper-prev" slot="button-prev">
          <i class="el-icon-back"></i>
        </div>
        <div class="swiper-next" slot="button-next">
          <i class="el-icon-right"></i>
        </div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>

  </div>
</template>
<script>
import SwiperItem from "./SwiperItem.vue";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: "SwiperList",
  components: {
    Swiper,
    SwiperSlide,
    SwiperItem,
  },
  created() {
    // todo swiper configeration
  },
  data() {
    return {
      userLoggedIn: true, // Change to `true` if user is logged in
      swiperOption: {
        //swipe direction
        direction: "horizontal",
        slidesPerView: "auto",
        slidesPerGroup: 5,
        slidesPerGroupAuto: true,
        //prev and back button
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        //view config
        speed: 1000, // speed of swipe
      },
      list: [
        {
          name: "No poverty",
          chartData: [],
          img: "https://www.monash.edu/msdi/assets/images/icons/E_SDG-goals_icons-individual-rgb-01.png",
          // intro: "No poverty",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished", link: "/learning" }
          ],
        },
        {
          name: "Zero Hunger",
          chartData: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVnlWRrUv2gCqi7gNG8QGN9SSe5LdX0Kv-Q&s",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished", link: "/learning" }
          ],
        },
        {
          name: "Good Health and Well Being",
          chartData: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnJfRu7E9X9N5Ejel_oHQKLezo3ZicGaQ1A&s",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished", link: "/learning" }
          ],
        },
        {
          name: "Quality Education",
          chartData: [],
          img: "https://www.monash.edu/__data/assets/image/0005/1442732/E_SDG-goals_icons-individual-rgb-04.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Gender Equality",
          chartData: [],
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sustainable_Development_Goal_05GenderEquality.svg/1200px-Sustainable_Development_Goal_05GenderEquality.svg.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Clean Water and Santation",
          chartData: [],
          img: "https://australia.iom.int/sites/g/files/tmzbdl1001/files/sdgs-icon/e_print_06.jpg",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Affordable and Clean Energy",
          chartData: [],
          img: "https://www.unsw.edu.au/content/unsw-sites/au/en/edi/sustainability-matters/sdg7/_jcr_content/root/responsivegrid-layout-fixed-width/responsivegrid-full-top/column_layout_copy_c/par_2_1_25/image.coreimg.82.1170.png/1692332065541/2023-08-edi-sustainability-goal-07.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Decent Work and Economic Growth",
          chartData: [],
          img: "https://www.monash.edu/__data/assets/image/0004/1442758/E_SDG-goals_icons-individual-rgb-08.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Industry, Innovation and Infrastructure",
          chartData: [],
          img: "https://hlw.org.au/images/icons/SDG-Goal-09.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning", link: "/learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Reduced Inequalities",
          chartData: [],
          img: "https://australia.iom.int/sites/g/files/tmzbdl1001/files/sdgs-icon/e_web_10.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Sustinable Cities and Communties",
          chartData: [],
          img: "https://d329ms1y997xa5.cloudfront.net/customers/766/images/E-WEB-Goal-11.png",
          // intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Respnsible Consumption and Production",
          chartData: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtYXe_zMhY0EGk2V80MrMOpvgiL-7IBUKPw&s",
          //intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Climate Action",
          chartData: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aZNSiYJ79Z7rAwgHc9Y5Y4V_0Vs2KAr3QA&s",
          //intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Life Below Water",
          chartData: [],
          img: "https://hlw.org.au/images/icons/SDG-Goal-14.png",
          //intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Life on Land",
          chartData: [],
          img: "https://hiroshimaforpeace.com/en/wp-content/uploads/sites/2/2020/04/E-WEB-Goal-15-1024x1024.png",
          //intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Peace, Justic and Strong Institutions",
          chartData: [],
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg/1200px-Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg.png",
          //intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
        {
          name: "Partnerships for the Goals",
          chartData: [],
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sustainable_Development_Goal_17Partnerships.svg/1200px-Sustainable_Development_Goal_17Partnerships.svg.png",
          //intro: "Quality education",
          data: [
            { value: 0, name: "Learning" },
            { value: 18, name: "not Finished" }
          ],
        },
      ].map((item, index) => ({ ...item, indexOfModule: index })),
    };
  },
  mounted() {
    this.updateModuleDataExample() ;
  },
  methods: {
    login() {
      this.userLoggedIn = true;
    },
    logout() {
      this.userLoggedIn = false;
    },
    async updateValue(moduleId) {
      try {
        // Send GET request using moduleId as a path argument
        const response = await axios.get(`https://ba8a701b-07d5-4191-8556-da47d8974118.mock.pstmn.io/process/${moduleId}`);
        if (response.data.code === 1) {
          // Extract data from the response
          const { cardsFinishedNum, quizPassed } = response.data.data;
          const percentage = (cardsFinishedNum + quizPassed) / 2
          // Find the item by indexOfModule (moduleId in your case)
          const item = this.list.find(i => i.indexOfModule === moduleId);
          if (item) {
            // Update the 'Learning' value based on cardsFinishedNum
            const learningData = item.data.find(d => d.name === "Learning");
            if (learningData) {
              learningData.value = percentage; // Update with cardsFinishedNum from response
            }
            // Update the 'not Finished' value
            const notFinishedData = item.data.find(d => d.name === "not Finished");
            if (notFinishedData) {
              notFinishedData.value = 100 - percentage; // Adjust based on cardsFinishedNum
            }
            // Optionally, you could store quizPassed or other data if needed
          }
        } else {
          console.error('Error in response:', response.data.msg);
        }
      } catch (error) {
        console.error('Error sending GET request:', error);
      }
    },
    async updateAllModules() {
      for (let module of this.list) {
        await this.updateValue(module.indexOfModule); // Assuming indexOfModule is used as moduleId
      }
    },

    setDataValue(moduleId, newData) {
      const item = this.list.find(i => i.indexOfModule === moduleId);
      if (item) {
        // Loop over the newData object and update the corresponding data items
        Object.keys(newData).forEach(key => {
          const dataItem = item.data.find(d => d.name === key);

          if (dataItem) {
            dataItem.value = newData[key];
          }
        });
      } else {
        console.error(`Module with id ${moduleId} not found`);
      }
    },

    updateModuleDataExample() {
      // Added "this" to access the method
      const moduleId = 4; // Index of module to update
      const storedProgress = localStorage.getItem('progressItems');
      // Ensure the console log is visible
      
      if (storedProgress) {
        const currentProgress = JSON.parse(storedProgress);
        
        // Make sure currentProgress is valid before using it
        if (currentProgress.length >= 3) {
          const finished = currentProgress[0].number / 25 + currentProgress[1].number / 25 + currentProgress[2].number / 10;
          const unfinished = 18 - finished;
          const newData = {
            "Learning": finished,       // New value for "Learning"
            "not Finished": unfinished  // New value for "not Finished"
          };
 

          this.setDataValue(moduleId, newData);
        } else {
          console.error('Insufficient data in currentProgress');
        }
      } else {
        console.error('No progressItems found in localStorage');
      }
    },

  }
};
</script>

<style scoped>
.swiper-list {
  padding: 30px 100px;
  background-color: rgb(241, 251, 253);
  overflow: hidden;
}

.title {
  text-align: center;
  color: hsla(192, 57%, 29%, 0.804);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bolder;
}

.swiper-content {
  position: relative;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  margin: 40px 0;
  padding: 40px 50px;
}

.swiper {
  width: 100%;
}

.swiper.swiper-container {
  position: static;
}

.swiper .swiper_slide_item {
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper :deep(.swiper-wrapper) {
  color: hsl(0, 0%, 0%);
}

.swiper .swiper-prev,
.swiper .swiper-next {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
  z-index: 9909;
  background-color: rgba(255, 255, 255, 0.8);
}

.swiper .swiper-prev {
  left: 20px;
}

.swiper .swiper-next {
  right: 20px;
}

.swiper .swiper-button-disabled {
  display: none;
}

.swiper-button-disabled {
  display: none;
}
</style>