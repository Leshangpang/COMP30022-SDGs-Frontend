<template>
  <div class="swiper-item">
    <div class="show-image">
      <img 
        :src="obj.img" 
        alt=""
        @click="handleImageClick(obj.name)"
      />
      <div 
         v-if="isLoggedIn"
        ref="domRef" 
        class="statistics-box"  
        @click="navigateToLearning"
      ></div>
    </div>
    <!-- <h4 class="title" style="font-size: 18px;">{{ obj.name }}</h4> -->
    <!-- <button class="navi-to" @click="navigateToLearning">Go to Learning</button> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getOptions } from "../js/options.js";
import { nextTick } from "vue";

export default {
  name: "SwiperItem",
  props: {
    obj: {
      type:Object,
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  components: {},

  data() {
    return {
      myChart: "",
    };
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      nextTick(() => {
        if (!this.echarts) {
          this.myChart = echarts.init(this.$refs.domRef);
          this.myChart.setOption(
            getOptions(this.$props.obj.name, this.$props.obj.data)
          );
        } else {
          this.myChart.setOption(
            getOptions(this.$props.obj.name, this.$props.obj.data)
          );
        }
      });
    },
    handleImageClick(name) {
    // Check if the user is not logged in and the name is "Gender Equality"
    if (!this.isLoggedIn && name === "Gender Equality") {
      this.$router.push('/learning');
    }
  },
    navigateToLearning() {
      const learningItem = this.obj.data.find(item => item.name === 'Learning');
      if (learningItem && learningItem.link) {
        this.$router.push(learningItem.link);
      }
    },
  },
};
</script>

<style scoped>
.swiper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
}
.swiper-item .show-image {
  position: relative;
  width: 120px;
  height: 120px;
}
.show-image img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 999;
  background-color: #fff;
}
.show-image:hover .statistics-box {
  z-index: 9999;
  opacity: 1;
}
.show-image .statistics-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #fff;
  opacity: 0;
}
.swiper-item .title {
  margin: 8px 0;
}

.navi-to{
  margin-bottom: 10px; /* Ensure consistent spacing */
  margin-top: 20px;
  grid-template-columns: 20px;
  background-color: hsla(192, 65%, 46%, 0.413);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.navi-to:hover {
  background-color: #0056b3; 
}

.statistics-box {
  width: 100%;
  height: 100%; /* Ensure it has a height */
}

</style>