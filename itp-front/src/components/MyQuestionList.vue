<template>
    <div class="user-questions">
        
        <!-- 顶部的列标题 -->
        <div class="question-header">
            <span class="header-title">Question</span>
            <div class="header-right">
                <span>Category</span>
                <span>Upload Time</span>
                <span>Views</span>
                <span>Average Score</span>
            </div>
        </div>
        <!-- 问题列表 -->
        <div v-for="(question, index) in questions" :key="index" class="question-card">
            <div class="question-left">
                <h3 class="exact-question">{{ question.question }}</h3>
            </div>
            <div class="question-right">
                <span>{{ question.category }}</span>
                <span>{{ formatDate(question.uploadTime) }}</span>
                <span>{{ question.views }}</span>
                <span>{{ question.averageScore }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    question: 'What is Vue.js?',
                    category: 'JavaScript Framework',
                    uploadTime: '2023-09-15T10:30:00',
                    views: 150,
                    averageScore: 4.5
                },
                {
                    question: 'Explain event handling in Vue.js.',
                    category: 'JavaScript Framework',
                    uploadTime: '2023-09-16T12:45:00',
                    views: 200,
                    averageScore: 4.8
                },
                {
                    question: 'What is the purpose of Vuex?',
                    category: 'State Management',
                    uploadTime: '2023-09-17T14:20:00',
                    views: 180,
                    averageScore: 4.7
                }
            ]
        };
    },
    methods: {
    formatDate(dateString) {
        const date = new Date(dateString); // 将字符串转换为 Date 对象
        const day = String(date.getDate()).padStart(2, '0'); // 获取日，确保两位数
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月，确保两位数
        const year = date.getFullYear(); // 获取年
        return `${day}/${month}/${year}`; // 返回 DD/MM/YYYY 格式
    }
}
};
</script>

<style scoped>
.user-questions {
    width: 1300px;
    /* 设置最大宽度 */
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    /* 居中显示 */
    padding: 20px;
    /* 为内容添加一些内边距 */
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
    /* 确保右边的宽度与 question-right 对齐 */
}

.header-right span {
    flex: 1;
    text-align: center;
}

.question-card {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    /* 间隙 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    /* 左右对齐 */
}

.question-left {
    flex: 1;
    /* 左边内容占据剩余空间 */
    margin-right: 20px;
}

.question-right {
    display: flex;
    justify-content: space-between;
    width: 50%;
    /* 与 header-right 相同的宽度 */
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