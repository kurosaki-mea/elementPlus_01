<script setup lang="ts">

// 引入Element的 Search 图标
import { Search } from '@element-plus/icons-vue'

</script>
<template>
    <h1>1 按钮</h1>
    <div class="button-row">
        <el-button>默认按钮 Default</el-button>
        <el-button type="primary">主要按钮Primary</el-button>
        <el-button type="success">Success成功按钮</el-button>
        <el-button type="info">Info信息按钮</el-button>
        <el-button type="warning">Warning警告按钮</el-button>
        <el-button type="danger">Danger危险按钮</el-button>
    </div>
    <h3>按钮属性</h3>
    <div class="button-row">
        <el-button plain>朴素按钮 Plain </el-button>
        <el-button round>圆角按钮 round </el-button>
        <el-button dashed>虚线按钮 dashed </el-button>
        <el-button circle />圆按钮circl
        <el-button :icon="Search" circle />圆按钮circl + :icon图标
        <el-button type="primary" :icon="Search">Search</el-button>
        <el-button disabled>禁用按钮 disabled </el-button>
        <el-button type="primary" loading>加载按钮Loading</el-button>
    </div>
    <h3>按钮尺寸 size</h3>
    <div class="button-row">
        <el-button size="large">Large 大</el-button>
        <el-button>Default 中</el-button>
        <el-button size="small">Small 小</el-button>
    </div>

</template>
<style lang="css" scoped>
.button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
}

.button-row>* {
    margin: 0;
}
</style>