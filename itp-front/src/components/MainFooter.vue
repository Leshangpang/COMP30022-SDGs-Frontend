<template>
    <footer class="edu-footer-area">
      <div class="container">
        <div class="footer-top-area ptb-100">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <router-link to="/" class="logo">
                  <img src="../assets/image/logo-1.png" alt="image"  width="100px"/>
                </router-link>
                <ul class="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="single-footer-widget pl-5">
                <h3>Links</h3>
                <ul class="links-list">
                  <li><router-link to="/services-details">Home</router-link></li>
                  <li>
                    <router-link to="/services-details">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/services-details">Courses</router-link>
                  </li>
                  <li>
                    <router-link to="/services-details">Contact Us</router-link>
                  </li>
                  <li><router-link to="/services-details">Certification</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Legal</h3>
                <ul class="links-list">
                  <li><router-link to="/">Legal</router-link></li>
                  <li><router-link to="/about">Tearms of Use</router-link></li>
                  <li>
                    <router-link to="/portfolio">Tearm & Condition</router-link>
                  </li>
                  <li><router-link to="/contact">Privacy Policy</router-link></li>
                  <li><router-link to="/contact">Help service</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <div class="footer-newsletter-info">
                  <img src="../assets/image/log-2.png" alt="image"  width="200px"/>
                  <form class="newsletter-form" data-toggle="validator">
                    <label><i class="bx bx-envelope-open"></i></label>
                    <input
                      type="text"
                      class="input-newsletter"
                      placeholder="Enter your email address"
                      name="EMAIL"
                      required
                      autocomplete="off"
                    />
                    <button type="submit" class="default-btn">
                      <i class="bx bx-paper-plane"></i> Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pr-line"></div>
        <div class="footer-bottom-area">
          <p>
            © Copyright {{ currentYear }} |
            <a href="#" target="_blank"></a> | All Rights Reserved
            is Proudly
          </p>
        </div>
      </div>
    </footer>
  </template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
}
</script>

<style scouped>

.edu-footer-area{
  background-image: url(../assets/image/footer-bg-1.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.edu-footer-area .pr-line{
  background-color: #252c3d;
}

.single-footer-widget {
  margin-bottom: 30px;
}

.single-footer-widget .logo {
  display: inline-block;
  margin-bottom: 25px;
}

.single-footer-widget p {
  color: var(--paragraphColor);
  font-size: 18px;
}

.single-footer-widget .social-links {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
  margin-top: 20px;
}

.single-footer-widget .social-links li {
  display: inline-block;
  margin-right: 8px;
}

.single-footer-widget .social-links li a {
  display: block;
  background-color: #1f2638;
  width: 45px;
  height: 45px;
  text-align: center;
  color: var(--whiteColor);
  font-size: 25px;
  border-radius: 2px;
  position: relative;
}

.single-footer-widget .social-links li a i {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.single-footer-widget .social-links li a:hover {
  background-color: var(--mainColor);
  color: var(--whiteColor);
}

.single-footer-widget .social-links li:last-child {
  margin-right: 0;
}

.single-footer-widget h3 {
  color: var(--whiteColor);
  font-size: 22px;
  margin-bottom: 20px;
  padding-bottom: 7px;
}

.single-footer-widget .links-list {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.single-footer-widget .links-list li {
  margin-bottom: 12px;
}

.single-footer-widget .links-list li a {
  display: inline-block;
  color: var(--paragraphColor);
  font-size: 18px;
}

.single-footer-widget .links-list li a:hover {
  color: var(--mainColor);
}

.footer-newsletter-info p span{
  color: var(--mainColor);
  text-decoration: underline;
}

.footer-newsletter-info form {
  margin-top: 30px;
  position: relative;
}

.footer-newsletter-info form label {
  position: absolute;
  margin-bottom: 0;
  left: 15px;
  top: 8px;
  color: var(--paragraphColor);
  font-size: 25px;
}

.footer-newsletter-info form .input-newsletter {
  height: 50px;
  display: block;
  width: 100%;
  background-color: var(--whiteColor);
  color: var(--blackColor);
  border-radius: 5px;
  border: none;
  padding-left: 55px;
  margin-bottom: 15px;
}

.footer-newsletter-info form .input-newsletter::-webkit-input-placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.footer-newsletter-info form .input-newsletter:-ms-input-placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.footer-newsletter-info form .input-newsletter::-ms-input-placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.footer-newsletter-info form .input-newsletter::placeholder {
  color: #999999;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.footer-newsletter-info form .input-newsletter:focus::-webkit-input-placeholder {
  color: transparent;
}

.footer-newsletter-info form .input-newsletter:focus:-ms-input-placeholder {
  color: transparent;
}

.footer-newsletter-info form .input-newsletter:focus::-ms-input-placeholder {
  color: transparent;
}


.footer-newsletter-info form .input-newsletter:focus::placeholder {
  color: transparent;
}

.footer-newsletter-info form .default-btn {
  background-color: var(--mainColor);
  color: var(--whiteColor);
  width: 100%;
}

.footer-newsletter-info form .default-btn:hover {
  background-color: var(--mainColor);
  color: var(--whiteColor);
}

.footer-newsletter-info form #validator-newsletter {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  color: var(--whiteColor);
}

.footer-bottom-area {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: var(--footerColor);
}

.footer-bottom-area p{
  font-size: 15px;
}

.footer-bottom-area p a {
  color: var(--whiteColor);
  font-weight: 600;
}

.footer-bottom-area p a:hover {
  color: var(--mainColor);
}

</style>

