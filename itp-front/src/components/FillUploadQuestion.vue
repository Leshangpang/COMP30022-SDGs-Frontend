<template>
    <div class="question-hub-outer-container">
        <div class="question-hub-center-container">
            <h3 class="question-hub-form-title">Create New Question</h3>
            <div class="question-hub-form-container">
                <div class="question-hub-form-group">
                    <h5 class="question-hub-question-heading">Question: </h5>
                    <el-input class="question-hub-custom-question-textarea" type="textarea" :rows="5" placeholder="Type Your Question Here" style="width: 100%;" v-model="question" maxlength="150" show-word-limit>
                    </el-input>
                </div>
                <div class="question-hub-form-group">
                    <h5 class="question-hub-question-heading">Select SDGs Category: </h5>
                    <el-select class="question-hub-select-goal" v-model="selectedGoal" clearable placeholder="Please choose a Goal">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="question-hub-form-group">
                    <h5 class="question-hub-choose-title question-hub-question-heading">Options: </h5>
                    <div class="question-hub-choice-item">
                        <h6 class = "question-hub-choice">Option A:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 1" style="width: 100%;" v-model="choiceA" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="question-hub-choice-item">
                        <h6 class = "question-hub-choice">Option B:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 2" style="width: 100%;" v-model="choiceB" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="question-hub-choice-item">
                        <h6 class = "question-hub-choice">Option C:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 3" style="width: 100%;" v-model="choiceC" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="question-hub-choice-item">
                        <h6 class = "question-hub-choice">Option D:</h6>
                        <el-input type="textarea" :rows="2" placeholder="Option 4" style="width: 100%;" v-model="choiceD" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                </div>
                <div class="question-hub-form-group">
                    <h5 class="question-hub-question-heading">Correct Answer:</h5>
                    <el-select class="question-hub-choose-answer" v-model="correctAnswer" clearable placeholder="Please Choose Correct Answer">
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
export default {
    data() {
        return {
            question: '', // 问题的文本
            choiceA: '', // 选择A的文本
            choiceB: '', // 选择B的文本
            choiceC: '', // 选择C的文本
            choiceD: '', // 选择D的文本
            selectedGoal: '', // 选择的目标
            correctAnswer: '', // 正确答案
            options1: [{
                value: 'option1',
                label: 'Goal 1: No Poverty'
            }, {
                value: 'option2',
                label: 'Goal 2: Zero Hunger'
            }, {
                value: 'option3',
                label: 'Goal 3: Good Health and Well-being'
            }, {
                value: 'option4',
                label: 'Goal 4: Quality Education'
            }, {
                value: 'option5',
                label: 'Goal 5: Gender Equality'
            }, {
                value: 'option6',
                label: 'Goal 6: Clean Water And Sanitation'
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
            this.text = '';
            this.selectedCategory = '';
            this.choiceA = '';
            this.choiceB = '';
            this.choiceC = '';
            this.choiceD = '';
            this.selectedAnswer = '';
        },
        validateForm() {
            let errors = [];
            if (!this.text) errors.push('Question is required.');
            if (!this.selectedCategory) errors.push('SDGs Category is required.');
            if (!this.choiceA) errors.push('Choice A is required.');
            if (!this.choiceB) errors.push('Choice B is required.');
            if (!this.choiceC) errors.push('Choice C is required.');
            if (!this.choiceD) errors.push('Choice D is required.');
            if (!this.selectedAnswer) errors.push('Correct Answer is required.');
            
            if (errors.length > 0) {
                alert(errors.join('\n')); // 显示错误信息
            } else {
                // 继续提交表单或进行其他操作
                alert('Form is valid! Submitting...');
            }
        }
    }
}
</script>

<style>
.question-hub-outer-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 保持内容水平居中 */
    margin-top: 10px; /* 减小顶部间距 */
}

.question-hub-center-container {
    width: 70%; /* 设置宽度以控制表单和标题 */
    max-width: 1200px; /* 最大宽度 */
}

.question-hub-form-title {
    text-align: left; /* 将标题左对齐 */
    margin-bottom: 20px; /* 添加标题与表单之间的间距 */
    margin-top: 10px; /* 减小标题顶部的空白区域 */
}

.question-hub-form-container {
    background-color: #fff; /* 可选: 添加背景颜色 */
    padding: 40px 60px; /* 可选: 添加内边距 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 可选: 添加阴影 */
    border-radius: 8px; /* 可选: 添加圆角 */
}

.question-hub-form-group {
    margin-bottom: 40px; /* 为每个部分增加下边距 */
}

.question-hub-select-goal {
    width: 400px;
    font-size: 16px; /* 设置字体大小 */
}

/* 修改 el-select 的 placeholder 的样式 */
.question-hub-select-goal ::v-deep .el-input__inner {
    font-size: 16px; /* 设置 el-select 的文本字体大小 */
}

.question-hub-select-goal ::v-deep .el-input__inner::placeholder {
    font-size: 16px !important; /* 设置 placeholder 的字体大小 */
    color: #c8c5c5; /* 可选：设置 placeholder 的颜色 */
}

.question-hub-buttons {
    display: flex;
    justify-content: flex-end; /* 将按钮靠右对齐 */
    gap: 10px; /* 添加按钮之间的间距 */
}

.question-hub-choice-item {
    margin-bottom: 20px; /* 设置选择间距 */
}

.question-hub-choose-title {
    margin-bottom: 20px;
}

.question-hub-choose-answer {
    width: 400px;
    font-size: 16px; /* 设置字体大小 */
}

/* 修改 el-select 的 placeholder */
.question-hub-choose-answer ::v-deep .el-input__inner {
    font-size: 16px; /* 设置 el-select 的文本字体大小 */
}

.question-hub-choose-answer ::v-deep .el-input__inner::placeholder {
    font-size: 16px !important; /* 设置 placeholder 的字体大小 */
    color: #c8c5c5; /* 可选：设置 placeholder 的颜色 */
}

.question-hub-question-heading {
    margin-bottom: 22px;
    font-size: 25px;
}

.question-hub-custom-question-textarea .el-textarea__inner {
    font-size: 16px; /* 调整输入文本的字体大小 */
}

/* 使用更具体的选择器来调整 placeholder 字体大小 */
.question-hub-custom-question-textarea .el-textarea__inner::placeholder {
    font-size: 16px; /* 设置 placeholder 的字体大小 */
    color: #c8c5c5; /* 可选：设置 placeholder 的颜色 */
}

.question-hub-choice {
    font-size: 17px;
    margin-bottom: 15px;
}

.question-hub-choice-item .el-input__inner::placeholder {
    font-size: 16px !important; /* 设置 placeholder 的字体大小 */
    color: #c8c5c5; /* 可选：设置 placeholder 的颜色 */
}
</style>
