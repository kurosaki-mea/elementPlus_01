<!-- 11 对话框 -->
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const data_01 = ref({
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: '',
})

const add_01 = () => {
    console.log(data_01.value)
    ElMessage.success('提交成功')
}
const reset_01 = () => {
    // 只需要把data_01.value赋值为空对象，即可重置表单数据
    data_01.value = {
        name: '',
        radio: '',
        checkbox: [],
        date: '',
        select: '',
        multipleSelect: [],
        textarea: '',
    }
    ElMessage.success('重置成功') // 重置成功后，显示成功提示
}

// 对话框
const dialog_01 = ref(false)
// 开启对话框
const dialogOpen = () => {
    dialog_01.value = true // 把dialog_01的值赋值为true，对话框显示出来
    // 因为对话框的显示是由v-model控制的，当dialog_01为true时，对话框显示，否则不显示
    // 所以，当点击打开按钮时，需要把dialog_01的值赋值为true，对话框显示出来。
    ElMessage.success('对话框已打开')
}
// 对话框关闭时，触发的通知回调
const dialogClose = () => {
    console.log('已关闭对话框')
    ElMessage.info('您已关闭对话框')
}



</script>
<template>
    <h1>11 对话框</h1>
    <!-- 对话框组件 -->
    <el-button @click="dialog_01 = true">打开对话框 方式1</el-button>
    <el-button @click="dialogOpen">打开对话框 方式2</el-button>
    <!-- draggable 可拖动 允许拖拽对话框 -->
    <!-- @close="dialogClose" 关闭对话框时，触发dialogClose函数，打印"您已关闭对话框"
    <- 对话框的显示是由v-model控制的，当dialog_01为true时，对话框显示，否则不显示。
    <- 而@close方法是对话框关闭时触发的通知回调，当对话框关闭时，会触发@close方法。 -->
    <el-dialog v-model="dialog_01" width="500px" title="对话框标题" draggable @close="dialogClose">
        <el-form label-width="80" style="width: 400px;">
            <h4>文本框</h4>
            <el-form-item label="文本框">
                <el-input v-model="data_01.name" placeholder="请输入姓名" />
            </el-form-item>

            <h4>单选框</h4>
            <el-form-item label="单选框">
                <el-radio-group v-model="data_01.radio">
                    <el-radio value="1">前端</el-radio>
                    <el-radio value="2">后端</el-radio>
                    <el-radio value="3">数据库</el-radio>
                </el-radio-group>
            </el-form-item>

            <h4>复选框</h4>
            <el-form-item label="复选框">
                <el-checkbox-group v-model="data_01.checkbox">
                    <el-checkbox value="1">前端</el-checkbox>
                    <el-checkbox value="2">后端</el-checkbox>
                    <el-checkbox value="3">数据库</el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <h4>日期选择器</h4>
            <el-form-item label="日期选择器">
                <el-date-picker v-model="data_01.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss"
                    placeholder="选择日期" />
            </el-form-item>

            <h4>下拉选择器</h4>
            <el-form-item label="下拉选择器">
                <el-select v-model="data_01.select" placeholder="请选择">
                    <el-option label="选项1" value="1" />
                    <el-option label="选项2" value="2" />
                    <el-option label="选项3" value="3" />
                </el-select>
            </el-form-item>

            <h4>多选框</h4>
            <el-form-item label="多选框">
                <el-select v-model="data_01.multipleSelect" multiple placeholder="请选择">
                    <el-option label="前端" value="A11" />
                    <el-option label="后端" value="B22" />
                    <el-option label="数据库" value="C33" />
                </el-select>
            </el-form-item>

            <h4>文本域</h4>
            <el-form-item label="文本域">
                <el-input type="textarea" v-model="data_01.textarea" rows="4" placeholder="请输入内容" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="add_01">提交</el-button>
                <el-button type="info" @click="reset_01">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<style scoped></style>
