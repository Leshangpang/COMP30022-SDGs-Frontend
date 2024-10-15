<template>
  <div class="banner01">
    <div class="homecontainer">
      <div class="content-home">
        <h1>
          Embark on Your SDGs Journey: 
        </h1>
        <h1>
          Learn, Act, and Achieve for a Sustainable Future!
        </h1>
        <p class = "banner01-subtitle">An Interactive Platform for Students to Explore, Master, and Collaborate on the 17 Sustainable Development Goals.</p>
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
height: 90vh;
max-width: 100%;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding-top: 100px;
}

.content-home{
margin-left: 40px;
margin-top: 4vw;

}
.banner01-subtitle{
  margin-left: 5vw;
  font-size: 1.1vw;
  font-style: italic;
}

.content-home h1 {
font-size: 3.2vw;
line-height: 120px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: rgb(90, 196, 220);
font-weight: bolder;
margin-left: 5vw;
margin-top: 0;
text-align: left;
text-shadow: 
    5px 5px 0 #FCE6A9, 
    -5px 5px 0 #FCE6A9, 
    5px -5px 0 #FCE6A9, 
    -5px -5px 0 #FCE6A9;
}

.homecontainer{
display: flex;
/* Align items to the left and right */
width: 100%;
height: 100%;
}

.edu-banner-image img {
max-width: none;
width: 51vw;
margin-top: 0.3vw;
padding-left: 0vw;
padding-top: 0vw;
padding-right: 8vw;

}

</style>