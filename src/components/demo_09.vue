<!-- 9 日期选择器 -->
<script setup lang="ts">
import { ref } from 'vue'
// 日期选择器的值
const date = ref('')
// 日期选择器的值改变时，调用的函数
const dataChange = (val: string) => {
    console.log("dataChange的值为：",val)
}


</script>
<template>
    <h1>日期选择器</h1>
    <h3>日期</h3>
    <el-date-picker v-model="date" type="date" placeholder="请选择日期" />
    <!-- type为date时，就表示只能选择 日期，不能选择时间 -->

    <h3>日期时间</h3>
    <el-date-picker v-model="date" type="datetime" placeholder="请选择日期时间" />
    <!-- type为datetime时，就表示可以选择 日期和时间 -->
    <h3>事件绑定</h3>
    <span>没有指定value-format时：</span><el-date-picker v-model="date" type="date" @change="dataChange" /><br/>
    <span>指定value-format时：</span><el-date-picker v-model="date" type="date" value-format="YYYY-MM-DD HH:mm:ss" @change="dataChange" />
    <!-- 指定了value-format后，就表示日期选择器的值是YYYY-MM-DD HH:mm:ss 格式 -->
    <p>当前选择的日期为：{{date}}</p>


<!--    type="date" 日期选择器，只能选择日期，不能选择时间
        type="datetime" 日期时间选择器，可以选择日期和时间 
        type="month" 月份选择器，只能选择月份，不能选择日期 
        type="year" 年份选择器，只能选择年份，不能选择月份 
        type="week" 周选择器，只能选择周，不能选择日期  
        type="quarter" 季度选择器，只能选择季度，不能选择日期
-->
</template>
<style scoped></style>