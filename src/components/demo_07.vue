<!-- 7 单选框和复选框 -->
<script lang="ts" setup>
import { ref } from 'vue'

// 单选框 定义数据
const radio_01 = ref('3')    // 单选框默认选中数据 1, 根据value属性匹配
const radio_02 = ref('b')    // 单选框默认选中数据 2
const radio_03 = ref('C')    // 单选框默认选中数据 3

// 单选框 改变事件
const radioChange = (val: string) => {
    console.log("radioChange事件返回对应的'value'值：", val)
}
const radioGroupChange = (val: string) => {  // 单选框组 group 改变事件
    console.log("radioGroupChange的值为：", val)
}

// 复选框 定义数据
const checked_01 = ref(['1', '2']) // 复选框 1，页面加载时默认选中1和2选项
const checked_02 = ref([])   // 复选框 2，初始值是个空数组，不会默认选中任何选项
const checkboxGroupChange = (val: string[]) => {
    console.log("checkboxGroupChange的值为：", val)
}


</script>
<!--单选框和复选框中，change事件的详细说明，
    单选框的change事件，返回的是选中的value值，
    复选框的change事件，返回的是选中的value值数组，
    数组中的每个元素，都是复选框的value属性值，
-->

<template>
    <h1> 7 单选框和复选框 </h1>
    <!--【单选框】：v-model 绑定单个值，@change 回调返回当前选中的单个 value -->
    <!--【复选框组】：v-model 绑定数组，@change 回调返回所有已选中项组成的数组 -->
    <h3>单选框</h3>
    <el-radio v-model="radio_01" value="1">1前端</el-radio>
    <el-radio v-model="radio_01" value="2">2后端</el-radio>
    <el-radio v-model="radio_01" value="3">3数据库</el-radio>
    <!-- // 默认选中value为3的选项 -->
    <h3>单选框 - 事件绑定</h3>
    <!-- 下面代码中的change事件，用于监听单选框的改变 -->
    <!--【单选框】：v-model 绑定单个值，@change 回调返回当前选中的单个 value -->
    <el-radio v-model="radio_02" value="a" @change="radioChange">1前端</el-radio>
    <el-radio v-model="radio_02" value="b" @change="radioChange">2后端</el-radio>
    <el-radio v-model="radio_02" value="c" @change="radioChange">3数据库</el-radio>

    <h3>单选框组</h3>
    <!--【单选框组】：v-model 绑定单个值，@change 回调返回当前选中的单个 value -->
    <el-radio-group v-model="radio_03" @change="radioGroupChange">
        <!-- 不需要对每一个单选框都绑定change事件，
            只需要对 单选框组group 绑定change事件，
            单选框组的改变事件，会触发所有单选框的改变事件  -->
        <el-radio value="A">1前端</el-radio>
        <el-radio value="B">2后端</el-radio>
        <el-radio value="C">3数据库</el-radio>
    </el-radio-group>

    <!-- 复选框 -->
    <h3>复选框</h3>
    <!--【复选框组】：v-model 绑定数组，@change 回调返回所有已选中项组成的数组 -->
    <el-checkbox-group v-model="checked_01" @change="checkboxGroupChange">
        <el-checkbox value="1">1前端</el-checkbox>
        <el-checkbox value="2">2后端</el-checkbox>
        <el-checkbox value="3">3数据库</el-checkbox>
    </el-checkbox-group>
    <h3>事件绑定</h3>
    <el-checkbox-group v-model="checked_02" @change="checkboxGroupChange">
        <el-checkbox value="1">1前端</el-checkbox>
        <el-checkbox value="2">2后端</el-checkbox>
        <el-checkbox value="3">3数据库</el-checkbox>
    </el-checkbox-group>
</template>
<style scoped></style>