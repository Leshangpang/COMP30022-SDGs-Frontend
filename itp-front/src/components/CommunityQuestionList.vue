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
            required: true, // Ensure incoming questions
        },
        initialRating: {
            type: Number,
            default: 0, // Default rating
        },
        questionId: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            value: this.initialRating // Pass in the initial score from the parent component or database
        };
    },
    methods: {
        goToAnswerQuestion() {
            // Use programmatic navigation to jump to the issue details page and pass the issue ID
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