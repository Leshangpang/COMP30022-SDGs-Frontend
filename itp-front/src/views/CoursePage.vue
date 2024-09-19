<template>
    <div id="CoursePage">
      <Header></Header>
      <main class="content">
        <section class = "course-section">
            <h1 class="course-title">Our course</h1>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-indicator"></div>
                </div>
            </div>
            <div class="course-grid">
                <article class="course-item">
                    <div class="course-image red-bg"></div>
                    <h2 class="course-subtitle">SDGs Goal 5: Poverty</h2>
                </article>
                <aside class="course-sidebar">
                    <div class="sidebar-content"></div>
                </aside>
            </div>
        </section>
        <router-view></router-view>
      </main>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from '../components/WebHeader.vue';
import Footer from '../components/WebFooter.vue';



export default {
  name: 'CoursePage',
  components: {
    Header,
    Footer
  }

}
</script>

<style scoped>
#CoursePage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}


.course-section {
  display: flex;
  width: auto;
  max-width: 100%;
  flex-direction: column;
  margin: 0;
}

.course-title {
  color: #000;
  font: 400 40px Khmer MN, sans-serif;
  text-align: center;
}

.progress-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    width: 100%; /* 容器宽度为100% */
}

.progress-bar {
  border-radius: 11px;
  background-color: #fff;
  display: flex;
  margin-top: 5px;
  width: 413px;
  max-width: 100%;
  flex-direction: column;
  
  align-items: flex-start;
  border: 1px solid #000;
}
.progress-indicator {
  border-radius: 11px;
  background-color: #acaaea;
  display: flex;
  width: 118px;
  height: 21px;
  border: 1px solid #b5b7f5;
}

.course-grid {
  align-self: flex-start;
  margin-top: 36px;
  width: auto;
  max-width: 100%;
  display: flex;
  gap: 30px;
  padding-left: 100px;
  padding-bottom: 50px
}

.course-item {
  background-color: rgba(252, 213, 213, 0.51);
  display: flex;
  flex-grow: 1;
  padding-bottom: 51px;
  flex-direction: column;
  color: #000;
  width: 100%;
  font: 400 16px Khula, sans-serif;
  border: 1px solid #ebaaaa;
}
.course-image {
  background-color: #ef4747;
  display: flex;
  height: 276px;
  aspect-ratio: 1;
}

.course-subtitle {
  align-self: flex-start;
  margin: 13px 0 0 17px;
  font: inherit;
}

.course-sidebar {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}

.sidebar-content {
  background-color: #d9d9d9;
  display: flex;
  width: 286px;
  max-width: 100%;
  height: 204px;
  margin: 0 auto;
}

</style>
  