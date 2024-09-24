<template>
    <div id="CommunityChallenge">
      <Header></Header>
      <MainBanner></MainBanner>
      <div style="height: 20px;"></div>
      <EachGoalBar></EachGoalBar>
      <LearningProgressBar class="progress-bar"></LearningProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>

        <div class="content-container" v-if="topicNum == 1">
            <div class="image-text-container">
              <img class="background-image" src="../assets/image/genderEquality_banner.png" />
              <div class="text-overlay">
                <p class="quote-text">"How important it is for us to recognize and celebrate our heroes and she-roes!"</p>
                <p class="author-text">- Maya Angelou</p>
              </div>
            </div>
            <div class="text-container">
                <h2>Overview</h2>
                <p>Gender bias is undermining our social fabric and devalues all of us. It is not just a human rights issue;
                     it is a tremendous waste of the world's human potential. By denying women equal rights, we deny half the 
                     population a chance to live life at its fullest. Political, economic and social equality for women will 
                     benefit all the world's citizens. Together we can eradicate prejudice and work for equal rights and 
                     respect for all.
                </p>
            </div>

            <div class="video-container">
                <h2>Understand the SDG Goal</h2>
                <iframe
                width="560"
                height="315"
                :src="videoUrl"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
            </div>

            <div class="text-container">
                <h2>Current Progress</h2>
                <p>International commitments to advance gender equality have brought about improvements in some areas: child 
                  marriage and female genital mutilation (FGM) have declined in recent years, and women's representation in 
                  the political arena is higher than ever before. But the promise of a world in which every woman and girl 
                  enjoys full gender equality, and where all legal, social and economic barriers to their empowerment have been 
                  removed, remains unfulfilled. In fact, that goal is probably even more distant than before, since women and 
                  girls are being hit hard by the COVID-19 pandemic.
                </p>

                <div class="stats-container">
                  <div class="stat-item">
                    <img src="../assets/image/statImage1.png" alt="Legal Reforms">
                    <div class="stat-text">
                      <h3>286</h3>
                      <p>At the current rate of progress, it will take another 286 years to reform legal frameworks to promote, enforce and monitor gender equality in public life</p>
                    </div>
                  </div>
                  <div class="stat-item">
                    <img src="../assets/image/statImage2.png" alt="Violence Against Women">
                    <div class="stat-text">
                      <h3>1 in 10</h3>
                      <p>Of women and girls aged 15-49, more than 1 in 10 (12.5%) were subjected to sexual and/or physical violence by an intimate partner in the last year</p>
                    </div>
                  </div>
                  <div class="stat-item">
                    <img src="../assets/image/statImage3.png" alt="Child Marriage">
                    <div class="stat-text">
                      <h3>17x</h3>
                      <p>To end child marriage by 2030, progress must be 17 times faster than it was over the last decade</p>
                    </div>
                  </div>
                </div>

                <div class="main-preview-container">
                  <div class="image-preview-container">
                    <a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2023/09/Goal-5_Fast-Facts.pdf" target="_blank" class="download-link">
                      <img src="../assets/image/preview1.png" class="preview-image" />
                      <h2 class="image-title">Fast Facts: Gender Equality</h2>
                    </a>
                  </div>
                  <div class="image-preview-container">
                    <a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2023/08/2309739_E_SDG_2023_infographics-5-5.pdf" target="_blank" class="download-link">
                      <img src="../assets/image/preview2.png" class="preview-image" />
                      <h2 class="image-title">Infographic: Gender Equality</h2>
                    </a>
                  </div>
                </div>


            </div>

        </div>

        <div class="content-container" v-if="topicNum == 2">
          <img class="target-banner-image" src="../assets/image/targetBannerImage.webp" />

            <div class="text-container">
                <h2>The Targets</h2>
                <p>Everyone can help to make sure that we meet the Global Goals. Use these nine targets 
                    to create action for gender equality.
                </p>
            </div>

            <div class="targets-container">
              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.1.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.1 END DISCRIMINATION AGAINST WOMEN AND GIRLS</h4>
                  <p>End allforms of discrimination against all women and girls everywhere.</p>
                </div>
                <div style="height: 15px;"></div>

              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.2.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.2 END ALL VIOLENCE AGAINST AND EXPLOITATION OF WOMEN AND GIRLS</h4>
                  <p>Eliminate all forms of violence against all women and girls in the public and private 
                      spheres, including trafficking and sexual and other types of exploitation.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.3.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.3 ELIMINATE FORCED MARRIAGES AND GENITAL MUTILATION</h4>
                  <p>Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.4.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.4 VALUE UNPAID CARE AND PROMOTE SHARED DOMESTIC RESPONSIBILITIES</h4>
                  <p>Recognize and value unpaid care and domestic work through the provision of public services, infrastructure 
                      and social protection policies and the promotion of shared responsibility within the household and the family 
                      as nationally appropriate.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.5.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.5 ENSURE FULL PARTICIPATION IN LEADERSHIP AND DECISION-MAKING</h4>
                  <p>Ensure women's full and effective participation and equal opportunities for leadership at all levels of 
                      decision-making in political, economic and public life.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>
                
              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.6.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.6 UNIVERSAL ACCESS TO REPRODUCTIVE HEALTH AND RIGHTS</h4>
                  <p>Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with 
                      the Programme of Action of the International Conference on Population and Development and the Beijing Platform 
                      for Action and the outcome documents of their review conferences.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.7.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.7 EQUAL RIGHTS TO ECONOMIC RESOURCES, PROPERTY OWNERSHIP AND FINANCIAL SERVICES</h4>
                  <p>Undertake reforms to give women equal rights to economic resources, as well as access to 
                      ownership and control over land and other forms of property, financial services, inheritance 
                      and natural resources, in accordance with national laws.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.8.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.8 PROMOTE EMPOWERMENT OF WOMEN THROUGH TECHNOLOGY</h4>
                  <p>Enhance the use of enabling technology, in particular information
                      and communications technology, to promote the empowerment of women.
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

              <div class="target-item">
                <img src="../assets/image/svg/goal5TargetIcon/target5.9.svg" class="target-icon" alt="Target Icon" />
                <div class="text-container">
                  <h4>5.9 ADOPT AND STRENGTHEN POLICIES AND ENFORCEABLE LEGISLATION FOR GENDER EQUALITY</h4>
                  <p>Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality
                      and the empowerment of all women and girls at all levels
                  </p>
                </div>
                <div style="height: 15px;"></div>
              </div>

            </div>
                
        </div>

        <div class="content-container" v-if="topicNum == 3">
          <img class="background-image" src="../assets/image/actionBannerImage.jpg" />

            <div class="text-container">
                <h2>Things To Do</h2>
                <p>Regardless of where you live in, gender equality is a fundamental human right. Advancing gender equality is critical
                  to all areas of a healthy society, from reducing poverty to promoting the health, education, protection and the well-being
                  of girls and boys.
                </p>
                <p>
                  If you are a girl, you can stay in school, help empower your female classmates to do the same and fight for your right to 
                  access sexual and reproductive health services. If you are a woman, you can address unconscious biases and implicit associations
                  that form an unintended and often an invisible barrier to equal opportunity.
                </p>
                <p>
                  If you are a man or a boy, you can work alongside women and girls to achieve gender equality and embrace healthy, respectful relationships.
                </p>
                <p>
                  You can fund education campaigns to curb cultural practices like female genital mutilation and change harmful laws that limit the
                   rights of women and girls and prevent them from achieving their full potential.
                </p>
            </div>

            <img class="target-seperete-image" src="../assets/image/actionImage.jpg" />

            <div class="grid-container">
                <div class="grid-container">
                    <div v-for="(item, index) in tips" :key="index" class="grid-item">
                        <img src="../assets/image/lightBulb.png" class="bulb-icon" />
                        <p class="tip-text">{{ item }}</p>
                    </div>
                </div>
            </div>
            
            <div class="foot-images">
                <div>
                    <img src="../assets/image/bear.png"/>
                </div>
                <div class="take-action-image">
                    <img src="../assets/image/takeAction.png"/>
                </div>
                <div>
                    <img src="../assets/image/bear.png"/>
                </div>
            </div>


        </div>

        <div class="content-container" v-if="topicNum == 4">
          <div class="text-container">
                <h2>Events and News</h2>
            </div>

          <div class="content-grid">
            <div v-for="(item, index) in contentItems" :key="index" class="grid-item">
              <a :href="item.link" target="_blank">
              <img :src="item.imageSrc" :alt="item.alt" class="content-image" />
              <p class="content-title">{{ item.title }}</p>
             </a>
            </div>
          </div>
        </div>

      </div>
      
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue';
import Header from '../components/Header.vue';
import LearningProgressBar from '../components/LearningProgressBar.vue';
import EachGoalBar from '../components/EachGoalBar.vue';

export default {
  name: 'LearningContentPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    LearningProgressBar,
    EachGoalBar,
  },
  data() {
    return {
        topicNum: 1,
        videoUrl: "https://www.youtube.com/embed/-hc0kZh6CnM",
        tips: [
        "Women earn 10 to 30 per cent less than men for the same work. Pay inequality persists everywhere. Voice your support for equal pay for equal work.",
        "Find a Goal 5 charity you want to support. Any donation, big or small, can make a difference!",
        "Be aware of gender stereotypes. Recognize them, avoid them and educate others about them.",
        "Stand up against harassment. Whenever you see or become aware of harassment, whether in the workplace, streets, home or the online space, raise your voice against it.",
        "Find female mentors/leaders. Ensure that some of your role models or mentors are women. There’s a lot you can learn from women in positions of authority.",
        "Share the workload at home. Sharing domestic responsibilities ensures the work burden doesn’t fall only on one person and instills the value of gender equality and essential life skills in children.",
        "Stay informed. Follow your local news and stay in touch with the Global Goals online or on social media at @TheGlobalGoals."
      ],
      contentItems: [
        {
          imageSrc: require("../assets/image/eventImage1.webp"),
          alt: "Sustainable Development Goal Five",
          title: "Explainer: Sustainable Development Goal Five",
          link: "https://unwomen.org.au/spotlight-on-sustainable-development-goal-5/"
        },
        {
          imageSrc: require("../assets/image/eventImage2.jpeg"),
          alt: "Close Gender Data Gaps",
          title: "It will take 22 years to close the SDG gender data gaps",
          link: "https://www.unwomen.org/en/news-stories/feature-story/2022/09/it-will-take-22-years-to-close-sdg-gender-data-gaps"
        },
        {
          imageSrc: require("../assets/image/eventImage3.png"),
          alt: "SDG Indicator Dashboard",
          title: "SDG Indicator Dashboard",
          link: "https://data.unwomen.org/data-portal/sdg?annex=Gender%20Equality&finic%5B%5D=SG_LGL_GENEQVAW&fiac%5BVC_VAW_MARR%5D%5B%5D=15%2B&fiac%5BSH_STA_FGMS%5D%5B%5D=15-49&fiac%5BSL_DOM_TSPD%5D%5B%5D=ALLAGE&filc%5BSL_DOM_TSPD%5D%5B%5D=ALLAREA&fiac%5BSL_DOM_TSPDCW%5D%5B%5D=ALLAGE&filc%5BSL_DOM_TSPDCW%5D%5B%5D=ALLAREA&fiac%5BSL_DOM_TSPDDC%5D%5B%5D=ALLAGE&filc%5BSL_DOM_TSPDDC%5D%5B%5D=ALLAREA&fyr%5B%5D=Latest%20available&fsr=countries&tab=map"
        },
        {
          imageSrc: require("../assets/image/eventImage4.jpeg"),
          alt: "Women and Girls at the Centre",
          title: "Our ability to fulfill the SDG’s promises depends on our decision to put women and girls at the center",
          link: "https://www.unwomen.org/en/news-stories/speech/2022/07/speech-our-ability-to-fulfil-the-sdgs-promises-depends-on-our-decision-to-put-women-and-girls-at-the-centre"
        },
        {
          imageSrc: require("../assets/image/eventImage5.jpg"),
          alt: "Track Gender Equality",
          title: "Are we on track to achieve gender equality by 2030?",
          link: "https://data.unwomen.org/features/are-we-track-achieve-gender-equality-2030"
        },
        {
          imageSrc: require("../assets/image/eventImage5.png"),
          alt: "Expert Group Meeting on SDG 5 (Gender equality) and its interlinkages with other SDGs",
          title: "Expert Group Meeting on SDG 5 (Gender equality) and its interlinkages with other SDGs",
          link: "https://sdgs.un.org/events/expert-group-meeting-sdg-5-gender-equality-and-its-interlinkages-other-sdgs-46166#background"
        },
      ]
    }
  },
  created() {
    this.updateTopicFromRoute();
  },
  watch: {
    // Watch for route changes
    $route(to, from) {
      this.updateTopicFromRoute();
    }
  },
  methods: {
    updateTopicFromRoute() {
      const topic = this.$route.query.topic;
      if (topic === 'overview') {
        this.topicNum = 1;
      } else if (topic === 'targets') {
        this.topicNum = 2;
      } else if (topic === 'actions') {
        this.topicNum = 3;
      } else if (topic == 'events and news') {
        this.topicNum = 4;
      }
    },
    navigateToImagePage() {
      this.$router.push({ name: "Preview1" });
    }
  }

}
</script>

<style scoped>
#LearningContentPage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.progress-bar{
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 20px auto;
  padding: 10px 0;
}

.sidebar-container {
  display: flex;
  margin-top: 60px;
  margin-bottom: 100px;
}
.sidebar {
  margin:0;
  margin-left: 60px;
  flex: 1;
}

.goal-banner {
  display: flex;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}

.goal-image-container {
  flex-shrink: 0;
  margin-right: 20px;
}

.goal-image {
  width: 159px;
  height: auto;
}

.goal-text-container {
  background-color: hwb(10 14% 13%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 159px;
  padding: 20px;
  padding-right: 200px;
  margin: 0;
}

.goal-title {
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.goal-subtitle {
  margin: 0;
  font-size: 24px;
  font-weight: normal;
  color: white;
}

.content-container {
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  flex: 2;
  max-height: 800px;
  overflow-y: auto;
  padding-right: 20px;
}

.image-text-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.background-image {
  width: 80%;
  height: 40%;
  object-fit: cover;
  padding-bottom: 40px;
  padding-right: 40px;
}

.target-seperete-image{
  width: 100%;
  height: auto;
  object-fit: cover;
  padding-bottom: 40px;
  padding-right: 40px;
}

.text-overlay {
  position: absolute;
  top: 20%;
  left: 10%;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  max-width: 40%;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.quote-text {
  font-size: 24px;
  font-style: italic;
  line-height: 1.4;
}

.author-text {
  font-size: 18px;
  margin-top: 20px;
  text-align: right;
}

.video-container {
  max-width: 90%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
}

.text-container{
    padding-bottom: 40px;
    padding-right: 40px;
}

.targets-container {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
}

.target-item {
    display: flex;
    align-items: flex-start;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), /* Bottom shadow */
                0px -4px 8px rgba(0, 0, 0, 0.05), /* Top shadow */
                4px 0px 8px rgba(0, 0, 0, 0.05), /* Right shadow */
                4px 0px 8px rgba(0, 0, 0, 0.05); /* Left shadow */
    margin-bottom: 20px;
    padding-top: 20px;
}

.target-icon {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    margin-left: 20px;
}


.video-title{
    padding-bottom: 20px;
}

h4{
    font-size: 18px;
}

.grid-container {
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Space between grid items */
  padding-bottom: 20px;
  padding-right: 20px;
}

.grid-item {
  display: flex;
  align-items: flex-start;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.bulb-icon {
  width: 50px; /* Adjust size as needed */
  height: auto;
  margin-right: 15px; /* Space between image and text */
}

.tip-text {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.foot-images{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.take-action-image{
    text-align: center;
}

.take-action-image img{
    width: 60%;
    height: 90%;
    object-fit: fill;
}

.main-preview-container{
    padding-top: 40px;
    display: flex;
}

.image-preview-container {
  position: relative;
  cursor: pointer;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  padding-right: 20px;
}

.image-preview-container:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}

.preview-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.image-title {
  margin-top: 20px;
  font-size: 24px;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #f8f9fa;
  padding-bottom: 40px;
}

.stat-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 200px; /* Set a fixed width for consistency */
}

.stat-item img {
  margin-bottom: 20px; /* Add some space below the image */
}

.stat-text h3 {
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
}

.stat-text p {
  font-size: 16px;
  color: #666;
  padding: 0 10px;
}


.target-banner-image{
  width: 200%;
  height: 40%;
  object-fit: cover;
  padding-bottom: 40px;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  padding-top: 0px;
  padding-left: 0px;
}

.grid-item {
  text-align: center;
}

.content-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.content-image:hover {
  transform: scale(1.05);
}

.content-title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #007BFF;
  text-decoration: none;
}

.content-title:hover {
  text-decoration: underline;
}
</style>
  