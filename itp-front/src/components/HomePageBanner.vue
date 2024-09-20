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
              <img src="../assets/image/homepage-banner-image.png" alt="banner-img" />
            </div>
          </div>
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
  background-image: url(../assets/image/HomePageBannerBackground.png);
  max-height: 800px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  padding-top: 120px;
}
edu-banner-content h1 {
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

.edu-banner-content .fl-default-btn {
  margin-top: 15px;
}

.edu-banner-content .fl-default-btn:hover {
  color: var(--blackColor);
  background-color: var(--whiteColor);
}

.edu-banner-image img {
  max-width: none;
}

.shape01 {
  background-image: url(../assets/image/svg/shape.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  display: inline-block;
}

.subscribe-inner-area form {
  position: relative;
  margin-top: 30px;
  background-color: var(--whiteColor);
  padding: 15px;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
          box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
}

.subscribe-inner-area form label {
  position: absolute;
  margin-bottom: 0;
  left: 15px;
  top: 22px;
  color: var(--mainColor);
  font-size: 25px;
}

.subscribe-inner-area form .input-newsletter {
  height: 50px;
  display: block;
  width: 100%;
  background-color: var(--whiteColor);
  color: var(--blackColor);
  border-radius: 5px;
  border: none;
  padding-left: 40px;
  font-size: 18px;
}

.subscribe-inner-area form .input-newsletter::-webkit-input-placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.subscribe-inner-area form .input-newsletter:-ms-input-placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.subscribe-inner-area form .input-newsletter::-ms-input-placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.subscribe-inner-area form .input-newsletter::placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.subscribe-inner-area form .input-newsletter:focus::-webkit-input-placeholder {
  color: transparent;
}

.subscribe-inner-area form .input-newsletter:focus:-ms-input-placeholder {
  color: transparent;
}

.subscribe-inner-area form .input-newsletter:focus::-ms-input-placeholder {
  color: transparent;
}

.subscribe-inner-area form .input-newsletter:focus::placeholder {
  color: transparent;
}

.subscribe-inner-area form .default-btn {
  position: absolute;
  right: 20px;
  top: 10px;
  background-color: var(--mainColor);
  color: var(--whiteColor);
}

.subscribe-inner-area form #validator-newsletter {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  color: var(--whiteColor);
}

.edu-content-2 span {
  color: var(--mainColor);
}

.edu-content-2 h1 {
  font-size: 72px;
}

.edu-content-2 p {
  position: relative;
  padding-left: 20px;
}

.edu-content-2 p::before {
  position: absolute;
  content: '';
  height: 70px;
  background-color: var(--mainColor);
  width: 2px;
  top: 0;
  left: 0;
}

.edu-banner-btns{
  margin-top: 60px;
}

.edu-banner-btns .default-btn{
  margin-bottom: 30px;
}

.edu-banner-btns .primery-black{
  margin-left: 20px;
}
  </style>