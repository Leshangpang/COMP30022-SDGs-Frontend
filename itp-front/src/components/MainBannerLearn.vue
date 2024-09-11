<template>
  <div class="edu-banner-area banner01">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="edu-banner-content">
            <h1>
              Sustinable Development Goals: Gender<span class="shape01"> Equaility</span>
            </h1>
            <p>
              Achieve gender equality and empower all women and girls
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="edu-banner-image">
            <img src="../assets/image/Learnbg.jpg" alt="banner-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>

<style scoped>
.banner01 {
  background-image: url(../assets/image/1.png);
  height: auto;
  max-width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  padding-top: 120px;
}

.edu-banner-image {
  width: 100%;
  height: 100%; /* 确保容器高度为100% */
  overflow: visible; /* 保持左右和下方溢出部分可见 */
  clip-path: inset(0px -300px -100px -50px); /* 向上隐藏20px，你可以根据需求调整 */
  
}

.edu-banner-image img {
  width: 110%; /* 图片宽度设为100% */
  height: auto; /* 图片高度自适应 */
  object-fit: cover; /* 确保图片填充容器 */
  transform: scale(1.3); /* 将图片放大10%来填充留白 */
  margin-left: 50px;
}

.edu-banner-content h1 {
  font-size: 75px;
  margin-bottom: 18px;
  line-height: 105px;
}

.edu-banner-content p {
  font-size: 20px;
  color: var(--paragraphColor);
}

.edu-banner-content span {
  color: var(--secoundaryColor);
}

.shape01 {
  background-repeat: no-repeat;
  background-position: bottom;
  display: inline-block;
}

</style>
