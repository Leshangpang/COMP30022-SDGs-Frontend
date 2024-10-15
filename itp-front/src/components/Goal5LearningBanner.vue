<template>
  <div class="edu-banner-area learningbanner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="edu-banner-content-learning">
            <h1>
              Sustainable 
              
            </h1>
            <h1>
              Development Goal: Gender<span class="shape01"> Equality</span>
            </h1>
            <p>
              Achieve gender equality and empower all women and girls
            </p >
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="edu-banner-image-learning">
            <img src="../assets/image/Goal5LearningBannerBackground.jpg" alt="banner-img" />
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
.learningbanner {
  background-image: url(../assets/image/BannerBackground.png);
  height: 100%;
  max-width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  padding-top: 120px;
}

.edu-banner-image-learning {
  width: 130%;
  max-height: 50%; /* Ensure the container height is 100% */
  overflow: visible; /* Keep the overflow on the sides and bottom visible */
  clip-path: inset(0px -300px -100px -50px); /* Hide 20px from the top, you can adjust as needed */
}

.edu-banner-image-learning img {
  width: 110%; /* Set the image width to 100% */
  height: auto; /* Make the image height adapt */
  object-fit: cover; /* Ensure the image covers the container */
  transform: scale(1.3); /* Scale the image up by 10% to fill any gaps */
  margin-left: 50px;
}

.edu-banner-content-learning{
  margin-right: 0px;
  margin-left: -7vw;

}

.edu-banner-content-learning h1 {
  font-size: 75px;
  margin-bottom: 18px;
  line-height: 105px;
  
}

.edu-banner-content-learning p {
  font-size: 20px;
  color: var(--paragraphColor);
}

.edu-banner-content-learning span {
  color: var(--secoundaryColor);
}

.shape01 {
  background-repeat: no-repeat;
  background-position: bottom;
  display: inline-block;
}

</style>
