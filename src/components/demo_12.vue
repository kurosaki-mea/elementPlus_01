<!-- 12 分页 -->
<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(1)
const currentPageChange = (val: number) => {
    // 当前页码数赋值给currentPage.value
    currentPage.value = val
    console.log("@current-change事件绑定,currentPage的值，当前页码数：", val)
}
</script>
<template>
    <h1>12 分页</h1>
    <h3>page-size: 每页显示记录数 total: 总记录数</h3>
    <el-pagination layout="prev, pager, next" :page-size="10" :total="50" />
    <!-- layout定义分页组件的布局 
    <-   
        layout可选值： prev, pager, next, jumper, total
        prev: 上一页；
        pager: 分页码；
        next: 下一页；
        jumper: 跳转；
        total: 总记录数;
    -->

    <h3>background: 显示背景</h3>
    <el-pagination layout="prev, pager, next" :page-size="5" :total="50" background />

    <h3>layout="total"：显示总数</h3>
    <el-pagination layout="prev, pager, next, total" :page-size="5" :total="50" />
    
    <h3>layout="jumper"：跳转</h3>
    <el-pagination layout="prev, pager, next, jumper" :page-size="5" :total="50" />

    <h3>@current-change事件绑定</h3>
    <el-pagination layout="prev, pager, next" :page-size="5" :total="50" @current-change="currentPageChange" />
    <!-- @current-change事件绑定，当分页组件的当前页码数发生变化时，会触发该事件 -->
    <p>当前页码数：{{ currentPage }}</p>  
</template>
<style scoped></style>