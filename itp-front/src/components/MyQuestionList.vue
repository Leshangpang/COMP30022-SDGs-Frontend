<template>
    <div class="user-questions">

        <!-- Top column headings -->
        <div class="question-header">
            <span class="header-title">Question</span>
            <div class="header-right">
                <span>Category</span>
                <span>Upload Time</span>
                <span>Views</span>
                <span>Average Score</span>
            </div>
        </div>
        <!-- Question List -->
        <div v-for="(question, index) in questions" :key="index" class="question-card">
            <div class="question-left">
                <h3 class="exact-question" @click="goToDetail(index)">{{ question.question }}</h3>
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
                    question: 'What measures can be implemented to effectively prevent and address gender-based violence, including domestic violence and sexual harassment?',
                    category: 'Goal 5',
                    uploadTime: '2023-09-15T10:30:00',
                    views: 150,
                    averageScore: 4.5
                },
                {
                    question: 'What are the main challenges preventing universal access to clean and safe drinking water in different regions of the world?',
                    category: 'Goal 6',
                    uploadTime: '2023-09-16T12:45:00',
                    views: 200,
                    averageScore: 4.8
                },
                {
                    question: 'What are the main barriers preventing universal access to affordable and reliable energy, especially in developing regions?',
                    category: 'Goal 7',
                    uploadTime: '2023-09-17T14:20:00',
                    views: 180,
                    averageScore: 4.7
                }
            ]
        };
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString); // Convert the string to a Date object
            const day = String(date.getDate()).padStart(2, '0'); // Get the day, ensure it's two digits
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month, ensure it's two digits
            const year = date.getFullYear(); // Get the year
            return `${day}/${month}/${year}`; // Return the date in DD/MM/YYYY format

        },
        goToDetail(index) {
            this.$router.push({ name: 'QuestionDetail', params: { id: index } });
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