<template>
  <div class="edu-banner-area banner">
    <div class="content">
      <div class="desc">
        <h3>Empower</h3>
        <h3>Your Future</h3>
        <p>Learn and Act for the</p>
        <p>Sustainable Development Goals</p>
      </div>
      <img src="../assets/image/banner-background.png" alt="banner-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>
<!-- <img src="../assets/image/banner-background.png" alt="banner-img" /> -->

<style scoped>
.banner {
  position: relative;
  background-image: url(../assets/image/1.png);
  height: auto;
  max-width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  padding-top: 120px;
}
.content {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: #eaf2fd;
  /* background: #ebf1fe url("../assets/image/banner-background.png") right top/50%
    auto no-repeat; */
  padding-bottom: 100px;
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
}
.desc h3 {
  color: #3659ad;
  font-size: 50px;
  margin: 0;
  line-height: 1.5;
}
.desc p {
  color: #60bcae;
  font-size: 30px;
  margin: 0;
  line-height: 1.5;
}
img {
  right: 0;
  width: 50%;
}
</style>
