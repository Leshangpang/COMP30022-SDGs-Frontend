<template>
  <div class="banner01">
    <div class="container">
      <div class="content-home">
        <h1>
          Sustainable Development Goals
        </h1>
      </div>
      <div class="edu-banner-image">
          <img src="../assets/image/SDG.png" alt="banner-img" />
      </div>
    </div>
  </div>
</template>

<script>

export default({
  name: "MainBanner",
});
</script>

<style scouped>
.banner01{
background-image: url(../assets/image/BannerBackground.png);
height: 800px;
max-width: 100%;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding-top: 100px;
}
.content-home{
margin-left: 20px;
margin-right: 40px;
}

.content-home h1 {
font-size: 75px;
line-height: 100px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #0d87a6e9;
font-weight: bolder;
}

.container{
display: flex;
justify-content: space-between; /* Align items to the left and right */
align-items: center;
width: 100%;
height: 100%;
}

.edu-banner-image img {
max-width: none;
width: 800px;
margin-right: 20px;
padding-right: 95px;
margin-bottom: 40px;
}

</style>