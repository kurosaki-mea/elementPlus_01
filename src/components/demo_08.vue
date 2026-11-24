<!-- 8 下拉框 -->
<script setup lang="ts">
import { reactive, ref } from 'vue'
// 定义下拉框的默认值，一开始就默认选中的选项值
const selected_01 = ref('2')
const selected_02 = ref('')
const selected_03 = ref('C')
const selected_04 = ref(['1', '3'])
// 定义 动态下拉框 的选项列表，响应式数据;
// 数组中每个对象都有 value 和 label 属性，用于动态渲染选项（列表项）
const data_01 = reactive({
    options: [
        { value: 'A', label: '前端' },
        { value: 'B', label: '后端' },
        { value: 'C', label: '服务端' },
    ]
})
// 回调
// 下拉框 change 事件：选中值发生变化时触发（注：仅用户操作/值变化触发，初始默认赋值不会触发）
// val 为当前选中项的 value（默认单个值，如 string | number；若开启 multiple 多选则为数组，如 string[]）
const selectChange = (val: string) => {
    console.log("事件变化 selectChange的参数", val)
}

</script>
<template>
    <h1> 8 下拉框 </h1>
    <div style="width: 330px;">
        <h3> 下拉框 1 </h3>
        <el-select v-model="selected_01" placeholder="请选择">
            <el-option value="1" label="前端" />
            <el-option value="2" label="后端" />
            <el-option value="3" label="服务端" />
        </el-select>
        <h3> 下拉框 2 - 事件绑定 </h3>
        <el-select v-model="selected_02" @change="selectChange" placeholder="请选择">
            <el-option value="a" label="前端" />
            <el-option value="b" label="后端" />
            <el-option value="c" label="服务端" />
        </el-select>
        <h3> 下拉框 3 - 动态下拉框</h3>
        <!-- 先定义下拉框的默认值，然后再动态渲染选项（列表项） -->
        <el-select v-model="selected_03" placeholder="请选择">
            <!-- 动态渲染选项（列表项） -->
            <!-- item 为每个选项对象，包含 value 和 label 属性
             :key="item.value" 为每个选项的唯一标识，用于优化渲染性能,例如A、B、C..
             :value="item.value" 为每个选项的 value，用于绑定到下拉框的 v-model,例如A、B.
             :label="item.label" 为每个选项的 label，用于显示在下拉框中,例如前端、后端..-->
            <el-option v-for="item in data_01.options" :key="item.value" :value="item.value" :label="item.label" />
        </el-select>
        <br>
        <h3> 下拉框 4 - 多选</h3>
        <!-- 开启 multiple 多选；在单选的基础上，加上multiple属性 -->
        <!-- 多选时，v-model 为数组，用于存储选中的选项值 -->
        <el-select v-model="selected_04" multiple @change="selectChange" placeholder="请选择">
            <el-option value="1" label="前端" />
            <el-option value="2" label="后端" />
            <el-option value="3" label="服务端" />
        </el-select>

    </div>

</template>