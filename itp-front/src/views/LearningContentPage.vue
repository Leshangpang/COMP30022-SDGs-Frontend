<template>
    <div id="CommunityChallenge">
      <Header></Header>
      <MainBanner></MainBanner>
      <div style="height: 20px;"></div>
      <div class="goal-banner">
        <div class="goal-image-container">
          <img src="../assets/image/goal5Icon.png" alt="Goal 5: Gender Equality" class="goal-image" />
        </div>
        <div class="goal-text-container">
          <h1 class="goal-title">Goal 5: Gender Equality</h1>
          <p class="goal-subtitle">Achieve gender equality and empower all women and girls</p>
        </div>
      </div>
      <ProgressBar class="progress-bar"></ProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>

        <div class="content-container" v-if="topicNum == 1">
            <div class="text-container">
                <h2>Overview</h2>
                <p>Gender bias is undermining our social fabric and devalues all of us. It is not just a human rights issue;
                     it is a tremendous waste of the world's human potential. By denying women equal rights, we deny half the 
                     population a chance to live life at its fullest. Political, economic and social equality for women will 
                     benefit all the world's citizens. Together we can eradicate prejudice and work for equal rights and 
                     respect for all.
                </p>
            </div>
            <div class="content-image-container">
                <h2>Current Progress</h2>
                <img src="../assets/image/SDG_report_2023_infographics_Goal 5.png" />
            </div>
            <div class="video-title">
                <h2>Understand the SDG Goal</h2>
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
        </div>

        <div class="content-container" v-if="topicNum == 2">
            <div class="text-container">
                <h2>The Targets</h2>
                <p>Everyone can help to make sure that we meet the Global Goals. Use these nine targets 
                    to create action for gender equality.
                </p>
            </div>

            <div class="text-container">
                <h4>5.1 END DISCRIMINATION AGAINST WOMEN AND GIRLS</h4>
                <p>End allforms of discrimination against all women and girls everywhere.</p>
                <div style="height: 15px;"></div>

                <h4>5.2 END ALL VIOLENCE AGAINST AND EXPLOITATION OF WOMEN AND GIRLS</h4>
                <p>Eliminate all forms of violence against all women and girls in the public and private 
                    spheres, including trafficking and sexual and other types of exploitation.
                </p>
                <div style="height: 15px;"></div>

                <h4>5.3 ELIMINATE FORCED MARRIAGES AND GENITAL MUTILATION</h4>
                <p>Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation.
                </p>
                <div style="height: 15px;"></div>

                <h4>5.4 VALUE UNPAID CARE AND PROMOTE SHARED DOMESTIC RESPONSIBILITIES</h4>
                <p>Recognize and value unpaid care and domestic work through the provision of public services, infrastructure 
                    and social protection policies and the promotion of shared responsibility within the household and the family 
                    as nationally appropriate.
                </p>
                <div style="height: 15px;"></div>

                <h4>5.5 ENSURE FULL PARTICIPATION IN LEADERSHIP AND DECISION-MAKING</h4>
                <p>Ensure women's full and effective participation and equal opportunities for leadership at all levels of 
                    decision-making in political, economic and public life.
                </p>
                <div style="height: 15px;"></div>
                
                <h4>5.6 UNIVERSAL ACCESS TO REPRODUCTIVE HEALTH AND RIGHTS</h4>
                <p>Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with 
                    the Programme of Action of the International Conference on Population and Development and the Beijing Platform 
                    for Action and the outcome documents of their review conferences.
                </p>
                <div style="height: 15px;"></div>

                <h4>5.7 EQUAL RIGHTS TO ECONOMIC RESOURCES, PROPERTY OWNERSHIP AND FINANCIAL SERVICES</h4>
                <p>Undertake reforms to give women equal rights to economic resources, as well as access to 
                    ownership and control over land and other forms of property, financial services, inheritance 
                    and natural resources, in accordance with national laws.
                </p>
                <div style="height: 15px;"></div>

                <h4>5.8 PROMOTE EMPOWERMENT OF WOMEN THROUGH TECHNOLOGY</h4>
                <p>Enhance the use of enabling technology, in particular information
                     and communications technology, to promote the empowerment of women.
                </p>
                <div style="height: 15px;"></div>

                <h4>5.9 ADOPT AND STRENGTHEN POLICIES AND ENFORCEABLE LEGISLATION FOR GENDER EQUALITY</h4>
                <p>Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality
                     and the empowerment of all women and girls at all levels
                </p>
                <div style="height: 15px;"></div>
            </div>
                
        </div>

        <div class="content-container" v-if="topicNum == 3">
            <div class="text-container">
                <h2>Things To Do</h2>
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
import ProgressBar from '../components/ProgressBar.vue';

export default {
  name: 'LearningContentPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    ProgressBar,
  },
  data() {
    return {
        topicNum: 3,
        videoUrl: "https://www.youtube.com/embed/-hc0kZh6CnM",
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
  margin-top: 50px;
  margin-bottom: 100px;
}
.sidebar {
  margin:0;
  margin-left: 100px;
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
  background-color: #DC462E;
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
  flex: 2; /* 控制右侧问题部分的宽度 */
  max-height: 800px; /* 控制右侧问题列表的最大高度 */
  overflow-y: auto; /* 让问题列表可垂直滚动 */
  padding-right: 10px; /* 防止滚动条遮挡内容 */
}

.video-container {
  max-width: 100%;
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
}

.text-container{
    padding-bottom: 40px;
}

.content-image-container{
    padding-bottom: 40px;
}

.video-title{
    padding-bottom: 20px;
}

h4{
    font-size: 18px;
}

</style>
  