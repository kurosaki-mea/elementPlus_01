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
    console.log(data_01.value)
    ElMessage.success('提交成功')
}
// 重置表单
const reset = () => {
    data_01.value = {
        name: '',
        radio: '',
        checkbox: [],
        date: '',
        select: '',
        multipleSelect: [],
        textarea: '',
    }
    ElMessage.success('重置成功')
}


</script>
<template>
    <h1>10 表单</h1>
    <!-- el-form 表单组件，然后每一个 el-from-item 都是一个表单项组件 -->
    <el-form label-width="80" style="width: 400px;">
        <h4>文本框</h4>
        <el-from-item label="文本框">
            <el-input v-model="data_01.name" placeholder="请输入姓名" />
        </el-from-item>

        <h4>单选框</h4>
        <el-from-item label="单选框">
            <el-radio-group v-model="data_01.radio">
                <el-radio value="1">前端</el-radio>
                <el-radio value="2">后端</el-radio>
                <el-radio value="3">数据库</el-radio>
            </el-radio-group>
        </el-from-item>

        <h4>复选框</h4>
        <el-from-item label="复选框">
            <el-checkbox-group v-model="data_01.checkbox">
                <el-checkbox value="1">前端</el-checkbox>
                <el-checkbox value="2">后端</el-checkbox>
                <el-checkbox value="3">数据库</el-checkbox>
            </el-checkbox-group>
        </el-from-item>

        <h4>日期选择器</h4>
        <el-from-item label="日期选择器">
            <el-date-picker v-model="data_01.date" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" />
        </el-from-item>

        <h4>下拉选择器</h4>
        <el-from-item label="下拉选择器">
            <el-select v-model="data_01.select" placeholder="请选择">
                <el-option label="选项1" value="1" />
                <el-option label="选项2" value="2" />
                <el-option label="选项3" value="3" />
            </el-select>
        </el-from-item>

        <h4>多选框</h4>
        <el-from-item label="多选框">
            <el-select v-model="data_01.multipleSelect" multiple placeholder="请选择">
                <el-option label="前端" value="A11" />
                <el-option label="后端" value="B22" />
                <el-option label="数据库" value="C33" />
            </el-select>
        </el-from-item>

        <h4>文本域</h4>
        <el-from-item label="文本域">
            <el-input type="textarea" v-model="data_01.textarea" rows="4" placeholder="请输入内容" />
        </el-from-item>

        <el-from-item>
            <el-button type="primary" @click="add">提交</el-button>
            <el-button type="info" @click="reset">重置</el-button>
        </el-from-item>
    </el-form>
</template>