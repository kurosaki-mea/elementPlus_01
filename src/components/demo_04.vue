<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'; // 引入提示框组件

// 默认选中的菜单项的索引
const selectedIndex = ref('3-2'); // 默认选中的菜单项的索引

// 选中菜单项触发的回调函数
const selected = (index: number, indexPath: string) => {
    console.log("index索引：", index, "indexPath索引：", indexPath)
}

// 下拉菜单的回调函数，执行命令
const userCommand = (command: string) => { //点击下拉菜单，触发的回调
    // command 是下拉菜单的值，command形参名（可随便起），运行时会收到下面传过来的 "order"
    // 当用户点击下拉菜单的某一项时，会触发这个回调函数，并将该项的 command 值作为参数传入。
    // 点击下拉菜单时，就可以接收到对应的命令
    console.log("下拉菜单的值：", command)
}

</script>
<template>
    <h1> 4 导航菜单 Menu </h1>
    <h3>水平导航</h3>
    <!-- 
    el-menu 是 Element Plus 提供的菜单组件。
    mode="horizontal" 表示菜单的显示模式为水平模式。
    :default-active="selectedIndex" 默认选择的菜单索引，由 selectedIndex 变量控制。
    @select="selected" 绑定的事件，表示当用户选择菜单项时，会触发 selected 方法。
    -->
    <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">1级导航菜单</el-menu-item>
        <!-- 定义一个子菜单组件，索引值为 "2-1"，用于在菜单中嵌套子项 -->
        <el-sub-menu index="3">
            <!-- 这是一个具名插槽，插槽名称为 "title" -->
            <!-- 具名插槽 #title：专门用来放父级折叠菜单的标题（图标和文字） -->
            <template #title>我的工作台 #title</template>
            <!-- <template v-slot:title>我的工作台</template> -->
            <el-menu-item index="3-1">2级导航菜单1</el-menu-item>
            <el-menu-item index="3-2">2级导航菜单2</el-menu-item>
            <el-menu-item index="3-3">2级导航菜单3</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
    <h3>水平导航 2</h3>
    <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <!-- 加背景颜色，文字颜色，被选中的颜色 -->
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">1级导航菜单</el-menu-item>
        <el-sub-menu index="3">
            <template #title>我的工作台</template>
            <el-menu-item index="3-1">2级导航菜单1</el-menu-item>
            <el-menu-item index="3-2">2级导航菜单2</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
    <h3>垂直导航</h3>
    <el-menu :default-active="selectedIndex" @select="selected" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" style="width: 200px;">
        <!-- 去除mode="horizontal"，就默认是垂直导航，竖着，然后style样式设置宽度200px -->
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">1级导航菜单</el-menu-item>
        <el-sub-menu index="3">
            <template #title>我的工作台</template>
            <el-menu-item index="3-1">2级导航菜单1</el-menu-item>
            <el-menu-item index="3-2">2级导航菜单2</el-menu-item>
            <el-menu-item index="3-3">2级导航菜单3</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>

    <h3>面包屑 Breadcrumb</h3>
    <el-breadcrumb separator="/">
        <!-- 分隔符设置为 /  -->
        <el-breadcrumb-item><a href="#">首页</a></el-breadcrumb-item>
        <el-breadcrumb-item>导航菜单</el-breadcrumb-item>
        <el-breadcrumb-item>面包屑</el-breadcrumb-item>
    </el-breadcrumb>

    <h3>下拉菜单</h3><!-- 点击某个菜单时，接收对应的值 -->
    <el-dropdown @command="userCommand">
        <!-- 【1】 @command：固定事件名；userCommand：我自己写的处理函数名 -->
        <!-- <el-dropdown> 内部源码写的是“当用户点了某一项下拉菜单时，
        向外触发一个叫 command 的事件”，所以 @command 可以去执行我自定义的函数-->
        <!-- command 负责传“暗号” -->

        <span>个人中心 <el-icon>
                <Avatar />
            </el-icon></span>
        <template #dropdown>
            <el-dropdown-menu>
                <!-- 【2】 command：固定属性名；"order"：自己定的暗号值 -->
                <el-dropdown-item command="order">订单</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
                <el-dropdown-item command="logout" @click="ElMessage.success('已退出账号')">退出+提示</el-dropdown-item>
                <!-- El组件预留的属性(prop)名：command -->
            </el-dropdown-menu>
        </template>
        <!-- 因为 <el-dropdown> 内部源码写死的是“当用户点了某一项下拉菜单时，
        向外触发一个叫 command 的事件” -->
    </el-dropdown>


    <div id="divbox1" style="height: 900px;"> </div>
</template>
<style lang="css" scoped>
#divbox1 {
    height: 700px;
    background-color: #e9e5e5;
    margin: 50px 0;
}
</style>