<template>
    <div id="UploadQuestionPage">
        <Header class="upload-question-header"></Header>
        <div class="main-content">
            <BannerForUploadQuestion :backgroundImage="require('@/assets/image/UploadQuestion.png')" 
                title="" subtitle=""></BannerForUploadQuestion>
            <FillUploadQuestion class="fill-upload-question"></FillUploadQuestion>
            <main class="content">
                <router-view></router-view>
            </main>
            <MainFooter></MainFooter>
        </div>
    </div>
</template>

<script>
import Header from "../components/NavigationBar.vue";
import MainFooter from "../components/MainFooter.vue";
import BannerForUploadQuestion from "../components/BannerForUploadQuestion.vue";
import FillUploadQuestion from "@/components/FillUploadQuestion.vue";


export default {
    name: "UploadQuestionPage",
    components: {
        Header,
        MainFooter,
        BannerForUploadQuestion,
        FillUploadQuestion
    },
};
</script>

<style>
#UploadQuestionPage {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
}

.upload-question-header {
    background-color: white;
    /* Set your desired non-transparent background color */
    width: 100%;
    position: relative;
    /* Changed from 'fixed' or any other positioning if necessary */
    z-index: 2;
    /* Ensure it stays above other content if needed */
}

.main-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 120px;
}

.navbar-area.is-sticky {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    position: relative;
    /* Changed to 'relative' from 'fixed' to keep it within the flow */
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}

.edumim-nav .navbar {
    position: inherit;
    padding: 0;
}

.fill-upload-question {
    margin-top: 70px;
    /* 设置上间距 */
    margin-bottom: 200px;
    /* 设置下间距 */
}
</style>