<!-- 10 表单 -->
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

// 表单数据
const data_01 = ref({
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: '',
})
// 提交表单
const add = () => {
    console.log(data_01.value) // 查看提交的表单数据
    ElMessage.success('提交成功') // 提交成功后，显示成功提示
}
// 重置表单
const reset = () => {
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


</script>
<template>
    <h1>10 表单</h1>
    <!-- el-form 表单组件，然后每一个 el-form-item 都是一个表单项组件 -->
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
            <el-date-picker v-model="data_01.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" placeholder="选择日期" />
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
            <!--
            // rows和:rows的区别是，rows是固定行数，:rows是动态行数，根据内容自动调整行数
            // rows="4"的数值类型是字符串，需要转换为数字类型
            // :rows="4"的数值类型是数字类型，不需要转换
            -->
            <el-input type="textarea" v-model="data_01.textarea" :rows="4" placeholder="请输入内容" />
            <!-- 错误：传的是字符串 "2" ->
            <el-input type="textarea" rows="2" v-model="content" />

            <!- 正确：传的是数字 2 ->
            <el-input type="textarea" :rows="2" v-model="content" />-->
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="add">提交</el-button>
            <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
    </el-form>
</template>