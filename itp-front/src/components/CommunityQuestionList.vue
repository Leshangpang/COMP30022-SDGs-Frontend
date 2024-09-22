<template>
    <section class="question-container" @click="goToAnswerQuestion">
        <p class="question-title">{{ question }}</p>
        <div class="rating-box">
            <span class="rating-label">Rating:</span>
            <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" class = "list-rate">
            </el-rate>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        question: {
            type: String,
            required: true, // 确保传入问题
        },
        initialRating: {
            type: Number,
            default: 0, // 默认评分
        },
        questionId: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            value: this.initialRating // 从父组件或数据库传入初始评分
        };
    },
    methods: {
        goToAnswerQuestion() {
            // 使用编程式导航跳转到问题详情页，并传递问题 ID
            this.$router.push({ name: 'AnswerQuestion', params: { id: this.questionId } });
        }
    }
}
</script>

<style scoped>
.question-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    border-radius: 9px;
    color: #808589;
    font: 600 20px Inter, sans-serif;
    margin-top: 4px;
    max-width: 1030px;
    padding: 20px;
    min-height: 120px !important;
    border: 1px solid #ddd;
}

.question-title {
    margin: 0;
    flex: 1;
}

.rating-box {
    display: flex;
    align-items: center;
}

.rating-label {
    margin-right: 10px;
}

.rating-select {
    padding: 5px;
    font-size: 16px;
}
.list-rate {
    margin-left: 10px;
}
</style>