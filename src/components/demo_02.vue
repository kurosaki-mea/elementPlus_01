<script lang="ts" setup>



</script>
<template>
    <h1>2 图标</h1>
    <div>
        <h2>图标</h2>
        <div>
            <el-icon><Search /></el-icon>
            <el-icon><Edit /></el-icon>
            <el-icon><Delete /></el-icon>
            <el-icon><Loading /></el-icon>
        </div>
        <h2>属性</h2>
        <div>
            <el-icon size="20"><Search /></el-icon>
            <el-icon size="30"><Search /></el-icon>
            <el-icon size="40"><Search /></el-icon>
            <hr/>
            <el-icon color="red" size="20"><Search /></el-icon>
            <el-icon color="#409efc" size="20"><Search /></el-icon>
        </div>
        <h3>按钮 带 图标</h3>
        <div>
            <el-button type="primary" icon="Search">搜索</el-button>
            <el-button type="success" icon="Edit">编辑</el-button>
            <el-button type="danger" icon="Delete">删除</el-button>
            <el-button type="danger" icon="Delete"></el-button>=
            <el-button type="danger" icon="Delete"/>纯图标按钮
            <el-button icon="Search" circle color="red"/>
        </div>
        <h3>按钮组</h3>
        <el-button-group>
            <el-button type="primary" icon="Search"></el-button>
            <el-button type="primary" icon="Edit"></el-button>
            <el-button type="primary" icon="Delete"></el-button>
        </el-button-group>
        <br/><br/>
        <el-button-group type="primary"> <!-- 给整个group设置按钮类型属性-->
            <el-button icon="House"></el-button>
            <el-button icon="Edit"></el-button>
            <el-button icon="Delete"></el-button>
        </el-button-group>
        
    </div>


</template>
<style lang="css" scoped>
</style>