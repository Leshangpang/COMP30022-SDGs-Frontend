<template>
  <footer class="edu-footer-area">
    <div class="container">
      <div class="footer-top-area ptb-100">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <router-link to="/" class="logo">
                <img src="../assets/image/WebsiteLogo.jpg" alt="image" width="200px" />
              </router-link>
              <ul class="social-links">
                <li>
                  <!-- icons -->
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
          <!-- router link -->
          <div class="col-lg-2 col-md-6 col-sm-6" id = "links">
            <div class="single-footer-widget">
              <h3>Quick Links</h3>
              <ul class="links-list">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/learning">Learning</router-link></li>
                <li><router-link to="/myquestion">My Question</router-link></li>
                <li><router-link to="/badges">My Badges</router-link></li>
                <li><router-link to="/certificate">My Certificate</router-link></li>

              </ul>

            </div>
          </div>
          <div class = "col-lg-3 col-md-6 col-sm-6" id = "try">
            <div class="single-footer-widget">
              <h2>Try it today</h2>
              <div>
                <h4>Get Start For free.</h4>
                <h4>Learn SDGs from now</h4>
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
#try {
  margin-left: 100px;
}
#links {
  margin-left: 250px;
}
#try h2, #try h4 {
  color: white; 
}
.edu-footer-area {
  background-image: url(../assets/image/FooterBackground.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.edu-footer-area .pr-line {
  background-color: #252c3d;
}

.single-footer-widget {
  margin-bottom: 30px;
}

.single-footer-widget .logo {
  display: inline-block;
  margin-bottom: 25px;
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

.footer-bottom-area {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: var(--footerColor);
}

.footer-bottom-area p {
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
