<template>
    <div class="user-questions">
        <!-- Top column headings -->
        <div class="question-header">
            <span class="header-title">Question</span>
            <div class="header-right">
                <span>Category</span>
                <span>Average Score</span>
            </div>
        </div>
        <!-- Question List -->
        <div v-for="(question, index) in questions" :key="index" class="question-card">
            <div class="question-left">
                <h3 class="exact-question" @click="goToDetail(question.questionId)">{{ question.question }}</h3>
            </div>
            <div class="question-right">
                <span>{{ getGoalLabel(question.moduleId) }}</span>
                <span>{{ question.averageRating || 'N/A' }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            questions: []  // 将问题数据存储到这里
        };
    },
    mounted() {
        this.fetchQuestions();  // 页面加载时获取问题列表
    },
    methods: {
        async fetchQuestions() {
            try {
                // 假设你的 Postman Mock Server 的 URL 是这个
                const apiUrl = 'https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io/community';
                const response = await axios.get(apiUrl);

                if (response.data.code === 1) {
                    // 将从后端获取的问题列表存储到 data 中
                    this.questions = response.data.data;
                } else {
                    alert('Failed to fetch questions.');
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
                alert('An error occurred while fetching the questions.');
            }
        },
        goToDetail(questionId) {
            // 使用问题 ID 作为参数跳转到详细页面
            this.$router.push({ name: 'QuestionDetail', params: { id: questionId } });
        },
        getGoalLabel(moduleId) {
            const goalMapping = {
                1: 'Goal 1: No Poverty',
                2: 'Goal 2: Zero Hunger',
                3: 'Goal 3: Good Health and Well-being',
                4: 'Goal 4: Quality Education',
                5: 'Goal 5: Gender Equality',
                6: 'Goal 6: Clean Water and Sanitation',
                7: 'Goal 7: Affordable and Clean Energy',
                8: 'Goal 8: Decent Work and Economic Growth',
                9: 'Goal 9: Industry, Innovation and Infrastructure',
                10: 'Goal 10: Reduced Inequality',
                11: 'Goal 11: Sustainable Cities and Communities',
                12: 'Goal 12: Responsible Consumption and Production',
                13: 'Goal 13: Climate Action',
                14: 'Goal 14: Life Below Water',
                15: 'Goal 15: Life on Land',
                16: 'Goal 16: Peace, Justice and Strong Institutions',
                17: 'Goal 17: Partnerships for the Goals'
            };

            return goalMapping[moduleId] || 'Unknown Goal';
        }
    }
};
</script>

<style scoped>
.user-questions {
    width: 1300px;
    /* Set the maximum width */
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    /* Center the display */
    padding: 20px;
    /* Add some padding to the content */
}


.question-header {
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 8px;
    margin-bottom: 20px;
}

.header-title {
    flex: 1;
}

.header-right {
    display: flex;
    justify-content: space-between;
    width: 50%;
    /* Ensure the right side's width aligns with question-right */
}


.header-right span {
    flex: 1;
    text-align: center;
}

.question-card {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    /* Spacing */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    /* Align left and right */
}

.question-left {
    flex: 1;
    /* Left content takes up the remaining space */
    margin-right: 20px;
}

.question-right {
    display: flex;
    justify-content: space-between;
    width: 50%;
    /* Same width as header-right */
}

.question-right span {
    flex: 1;
    text-align: center;
}

.question-card h3 {
    margin-bottom: 10px;
}

.exact-question {
    font-size: medium;
}
</style>