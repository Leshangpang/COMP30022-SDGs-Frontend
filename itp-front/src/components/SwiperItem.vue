<template>
  <div class="swiper-item">
    <div class="show-image">
      <img :src="obj.img" alt="" />
      <div ref="domRef" class="statistics-box"></div>
    </div>
    <h4 class="title" style="font-size: 18px;">{{ obj.name }}</h4>
    <p>{{ obj.intro }}</p>
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
</style>
