<template>
    <footer class="footer">
      <div class="footer-content">
        <section class="logo-section">
          <h2 class="logo">LOGO+NAME</h2>
          <p class="description">Learning SDGS is a important things ablabala</p>
        </section>
        <nav class="quick-links">
          <h3 class="quick-link-title">Quick Link</h3>
          <ul class="link-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/course">Course</router-link></li>
            <li><router-link to="/quiz">Quiz</router-link></li>
            <li><router-link to="/bandges">Bandges</router-link></li>
            <li><router-link to="/certification">Certification</router-link></li>
            <li><router-link to="/contact">Contact us</router-link></li>
          </ul>
        </nav>
        <section class="cta-section">
          <h3 class="cta-title">Try It Today</h3>
          <p class="cta-description">Get started for free. Learn SDG From Now</p>
          <a href="#learn" class="cta-button">
            Learn today
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aefee752fe90545b9ff94706f325d7e9e62123d9e0c99d45c884fc7587d1f0d?placeholderIfAbsent=true&apiKey=38b752a830b24f12b6df8e337b555eb5" alt="" class="cta-icon" />
          </a>
        </section>
      </div>
      <div class="copyright">copyright @ SDGs Learning</div>
    </footer>
  </template>

<style scoped>
.footer {
  background-color: #073c7b;
  padding: 73px 0 0;
  font-family: Inter, sans-serif;
}

.footer-content {
  display: flex;
  max-width: 1182px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px 100px;
}

.logo-section {
  min-width: 240px;
  width: 499px;
}

.logo {
  font-size: 23px;
  color: #fff;
  font-weight: 700;
}

.description {
  color: #f7f7ee;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.32px;
  margin-top: 15px;
}

.quick-links {
  width: 134px;
}

.quick-link-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.36px;
  color: #fff;
  margin-bottom: 16px;
}

.link-list {
  list-style: none;
  padding: 0;
}

.link-list li {
  margin-bottom: 16px;
}

.link-list a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: -0.32px;
}

.cta-section {
  min-width: 240px;
  width: 259px;
}

.cta-title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
}

.cta-description {
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
  margin: 23px 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #4f9cf9;
  color: #fff;
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: -0.32px;
}

.cta-icon {
  width: 14px;
  height: 14px;
}

.copyright {
  background-color: #fbfdff;
  color: rgba(4, 2, 118, 0.92);
  text-align: center;
  padding: 19px;
  margin-top: 55px;
  font-size: 16px;
  letter-spacing: -0.32px;
  border-top: 1px solid #d9d1d1;
}

@media (max-width: 991px) {
  .footer-content {
    max-width: 100%;
    padding: 0 20px;
  }

  .logo-section,
  .cta-section {
    max-width: 100%;
  }

  .cta-button {
    padding: 20px;
  }

  .copyright {
    margin-top: 40px;
  }
}
</style>