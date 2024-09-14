<template>
    <div class="outer-container">
        <div class="center-container">
            <h3 class="form-title">Create New Question</h3>
            <div class="form-container">
                <div class="form-group">
                    <h5>Question</h5>
                    <el-input type="text" placeholder="Type Your Question Here" style="width: 100%;" v-model="question" maxlength="150" show-word-limit>
                    </el-input>
                </div>
                <div class="form-group">
                    <h5>Select SDGs Category</h5>
                    <el-select class="select-goal" v-model="selectedGoal" clearable placeholder="Please choose a Goal">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="form-group">
                    <h5 class="choose-title">Choices: </h5>
                    <div class="choice-item">
                        <h6>Choice A:</h6>
                        <el-input type="text" placeholder="Please Fill the Choice" style="width: 100%;" v-model="choiceA" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="choice-item">
                        <h6>Choice B:</h6>
                        <el-input type="text" placeholder="Please Fill the Choice" style="width: 100%;" v-model="choiceB" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="choice-item">
                        <h6>Choice C:</h6>
                        <el-input type="text" placeholder="Please Fill the Choice" style="width: 100%;" v-model="choiceC" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                    <div class="choice-item">
                        <h6>Choice D:</h6>
                        <el-input type="text" placeholder="Please Fill the Choice" style="width: 100%;" v-model="choiceD" maxlength="35" show-word-limit>
                        </el-input>
                    </div>
                </div>
                <div class="form-group">
                    <h5>Correct Answer:</h5>
                    <el-select class="choose-answer" v-model="correctAnswer" clearable placeholder="Please Choose Correct Answer">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="form-group buttons">
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

<style scoped>
.outer-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 保持内容水平居中 */
    margin-top: 20px; /* 可选: 为外部容器添加顶部间距 */
}

.center-container {
    width: 70%; /* 设置宽度以控制表单和标题 */
    max-width: 1200px; /* 最大宽度 */
}

.form-title {
    text-align: left; /* 将标题左对齐 */
    margin-bottom: 40px; /* 添加标题与表单之间的间距 */
    margin-top: 40px;
}

.form-container {
    background-color: #fff; /* 可选: 添加背景颜色 */
    padding: 40px 60px; /* 可选: 添加内边距 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 可选: 添加阴影 */
    border-radius: 8px; /* 可选: 添加圆角 */
    
}

.form-group {
    margin-bottom: 40px; /* 为每个部分增加下边距 */
}

.select-goal {
    width: 400px;
}

.buttons {
    display: flex;
    justify-content: flex-end; /* 将按钮靠右对齐 */
    gap: 10px; /* 添加按钮之间的间距 */
}

.choice-item {
    margin-bottom: 20px; /* 设置选择间距 */
}
.choose-title {
    margin-bottom: 20px;
}
.choose-answer {
    width: 400px;
}
</style>
