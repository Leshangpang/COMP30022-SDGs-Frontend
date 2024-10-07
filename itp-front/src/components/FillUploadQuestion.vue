<template>
    <div class="question-hub-outer-container">
        <div class="question-hub-center-container">
            <h3 class="question-hub-form-title">Create New Question</h3>
            <div class="question-hub-form-container">
                <div class="question-hub-form-group">
                    <h5 class="question-hub-question-heading">Question: </h5>
                    <el-input class="question-hub-custom-question-textarea" type="textarea" :rows="5"
                        placeholder="Type Your Question Here" style="width: 100%;" v-model="question" maxlength="150"
                        show-word-limit>
                    </el-input>
                </div>
                <div class="question-hub-form-group">
                    <h5 class="question-hub-question-heading">Select SDGs Category: </h5>
                    <el-select class="question-hub-select-goal" v-model="selectedGoal" clearable
                        placeholder="Please choose a Goal">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="question-hub-form-group">
                    <h5 class="question-hub-choose-title question-hub-question-heading">Options: </h5>
                    <div class="question-hub-choice-item">
                        <h6 class="question-hub-choice">Option A:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 1" style="width: 100%;"
                            v-model="choiceA" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="question-hub-choice-item">
                        <h6 class="question-hub-choice">Option B:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 2" style="width: 100%;"
                            v-model="choiceB" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="question-hub-choice-item">
                        <h6 class="question-hub-choice">Option C:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 3" style="width: 100%;"
                            v-model="choiceC" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="question-hub-choice-item">
                        <h6 class="question-hub-choice">Option D:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 4" style="width: 100%;"
                            v-model="choiceD" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                </div>
                <div class="question-hub-form-group">
                    <h5 class="question-hub-question-heading">Correct Answer:</h5>
                    <el-select class="question-hub-choose-answer" v-model="correctAnswer" clearable
                        placeholder="Please Choose Correct Answer">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="question-hub-form-group question-hub-buttons">
                    <el-button type="success">View uploaded Question</el-button>
                    <el-button type="primary" @click="clearForm">Clear</el-button>
                    <el-button type="primary" @click="validateForm">Publish</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // Import axios
export default {
    data() {
        return {
            question: '', // Question
            choiceA: '', 
            choiceB: '', 
            choiceC: '', 
            choiceD: '', 
            selectedGoal: '', 
            correctAnswer: '', // correct answer
            options1: [{
                value: '1',
                label: 'Goal 1: No Poverty'
            }, {
                value: '2',
                label: 'Goal 2: Zero Hunger'
            }, {
                value: '3',
                label: 'Goal 3: Good Health and Well-being'
            }, {
                value: '4',
                label: 'Goal 4: Quality Education'
            }, {
                value: '5',
                label: 'Goal 5: Gender Equality'
            }, {
                value: '6',
                label: 'Goal 6: Clean Water And Sanitation'
            }, {
                value: '7',
                label: 'Goal 7: Affordable and Clean Energy'
            }, {
                value: '8',
                label: 'Goal 8: Decent Work and Economic Growth'
            }, {
                value: '9',
                label: 'Goal 9: Industry, Innovation, and Infrastructure'
            }, {
                value: '10',
                label: 'Goal 10: Reduced Inequality'
            }, {
                value: '11',
                label: 'Goal 11: Sustainable Cities and Communities'
            }, {
                value: '12',
                label: 'Goal 12: Responsible Consumption and Production'
            }, {
                value: '13',
                label: 'Goal 13: Climate Action'
            }, {
                value: '14',
                label: 'Goal 14: Life Below Water'
            }, {
                value: '15',
                label: 'Goal 15: Life on Land'
            }, {
                value: '16',
                label: 'Goal 16: Peace, Justice, and Strong Institutions'
            }, {
                value: '17',
                label: 'Goal 17: Partnerships for the Goals'
            }],
            options2: [{
                value: 'option1',
                label: 'A'
            }, {
                value: 'option2',
                label: 'B'
            }, {
                value: 'option3',
                label: 'C'
            }, {
                value: 'option4',
                label: 'D'
            }],
        }
    },
    methods: {
        clearForm() {
            this.question = '';  // clear all inpput
            this.choiceA = '';
            this.choiceB = '';
            this.choiceC = '';
            this.choiceD = '';
            this.selectedGoal = '';
            this.correctAnswer = '';
        },
        validateForm() {
        // 这里可以进行表单验证逻辑，如果表单无误则调用 submitForm
        if (!this.question || !this.choiceA || !this.choiceB || !this.choiceC || !this.choiceD || !this.correctAnswer || !this.selectedGoal) {
            alert('Please fill in all required fields.');
        } else {
            this.submitForm();
        }
    },
        async submitForm() {
            

            // 组织 choice 数据
            const choices = `${this.choiceA},,,${this.choiceB},,,${this.choiceC},,,${this.choiceD}`;
            const mockServerUrl = 'https://4106d498-ed1a-41dc-85cc-c733a827f038.mock.pstmn.io';
            // 构造提交数据的 payload
            const payload = {
                userId: 1,  // 假设用户 ID 是 1
                moduleId: parseInt(this.selectedGoal),  // 选中的 SDG 类别
                question: this.question,
                choice: choices,
                answer: this.correctAnswer === 'option1' ? 1 :
                        this.correctAnswer === 'option2' ? 2 :
                        this.correctAnswer === 'option3' ? 3 : 4
            };

            try {
                // 发送 PUT 请求，将问题数据提交到后端
                const response = await axios.put(`${mockServerUrl}/community`, payload);

                if (response.data.code === 1) {
                    alert('Question submitted successfully!');
                    this.clearForm();  // 提交成功后清空表单
                } else {
                    alert('Failed to submit the question.');
                }
            } catch (error) {
                console.error('Error submitting the question:', error);
                alert('An error occurred while submitting the question.');
            }
        }
    }
}
</script>

<style>
.question-hub-outer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Keep content horizontally centered */
    margin-top: 10px;
    /* Reduce top margin */
}

.question-hub-center-container {
    width: 70%;
    /* Set width to control the form and title */
    max-width: 1200px;
    /* Maximum width */
}

.question-hub-form-title {
    text-align: left;
    /* Align the title to the left */
    margin-bottom: 20px;
    /* Add spacing between the title and the form */
    margin-top: 10px;
    /* Reduce the top margin of the title */
}


.question-hub-form-container {
    background-color: #fff;
    /* Optional: Add background color */
    padding: 40px 60px;
    /* Optional: Add padding */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* Optional: Add shadow */
    border-radius: 8px;
    /* Optional: Add border radius */
}

.question-hub-form-group {
    margin-bottom: 40px;
    /* Add bottom margin for each section */
}

.question-hub-select-goal {
    width: 400px;
    font-size: 16px;
    /* Set font size */
}

/* Modify the placeholder style of el-select */
.question-hub-select-goal ::v-deep .el-input__inner {
    font-size: 16px;
    /* Set font size of the text in el-select */
}

.question-hub-select-goal ::v-deep .el-input__inner::placeholder {
    font-size: 16px !important;
    /* Set font size of the placeholder */
    color: #c8c5c5;
    /* Optional: Set placeholder color */
}

.question-hub-buttons {
    display: flex;
    justify-content: flex-end;
    /* Align buttons to the right */
    gap: 10px;
    /* Add spacing between the buttons */
}

.question-hub-choice-item {
    margin-bottom: 20px;
    /* Set spacing between choices */
}

.question-hub-choose-title {
    margin-bottom: 20px;
}

.question-hub-choose-answer {
    width: 400px;
    font-size: 16px;
    /* Set font size */
}

/* Modify the placeholder of el-select */
.question-hub-choose-answer ::v-deep .el-input__inner {
    font-size: 16px;
    /* Set font size of the text in el-select */
}

.question-hub-choose-answer ::v-deep .el-input__inner::placeholder {
    font-size: 16px !important;
    /* Set font size of the placeholder */
    color: #c8c5c5;
    /* Optional: Set placeholder color */
}

.question-hub-question-heading {
    margin-bottom: 22px;
    font-size: 25px;
}

.question-hub-custom-question-textarea .el-textarea__inner {
    font-size: 16px;
    /* Adjust the font size of the input text */
}

/* Use a more specific selector to adjust the placeholder font size */
.question-hub-custom-question-textarea .el-textarea__inner::placeholder {
    font-size: 16px;
    /* Set the font size of the placeholder */
    color: #c8c5c5;
    /* Optional: Set the placeholder color */
}

.question-hub-choice {
    font-size: 17px;
    margin-bottom: 15px;
}

.question-hub-choice-item .el-input__inner::placeholder {
    font-size: 16px !important;
    /* Set the font size of the placeholder */
    color: #c8c5c5;
    /* Optional: Set the placeholder color */
}
</style>
