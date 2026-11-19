<script setup lang="ts">
import { ElMessage,ElMessageBox,ElNotification } from 'element-plus' // 引入提示框组件

// 消息提示框
const open01 = () => {
    ElMessage({
        message: '这是一条提示消息', // 提示消息的内容
        type: 'success', // 提示消息的状态： success、warning、info、error
        duration: 3000, // 提示消息的显示时间，单位为毫秒
    })
}
// 确认框
const open02 = () => {
    ElMessageBox.confirm('你确认要删除吗？','提示标题',{
        type: 'warning', // 提示框的类型： warning、info、error
        confirmButtonText: '确认删除', // 确认按钮的文本
        cancelButtonText: '取消', // 取消按钮的文本
    }).then( () => {
        // 用户点击了确认按钮
        console.log('用户点击了确认按钮')
        ElMessage({
            message: '删除成功！', // 提示消息的内容
            type: 'success', // 提示：成功消息的状态 success
        })
    }).catch( () => {
        // 用户点击了取消按钮或关闭了提示框
        console.log('用户点击了取消按钮或关闭了提示框')
        ElMessage({
            type: 'info', // 提示消息的状态： info
            message: '已取消删除', // 提示消息的内容
        })
    })
}

// 通知
const open03_Notification = () => {
    ElNotification({
        title: '通知的标题', // 通知的标题
        message: '这是一条通知消息', // 通知的内容
        duration: 1500, // 通知的显示时间，单位为毫秒，显示1.5秒后自动关闭
    })
}
// 通知 2
const open03_Notification2 = () => {
    ElNotification({
        type: 'success', // 通知的类型： success、warning、info、error
        title: '成功通知', // 通知的标题
        message: '操作成功！', // 通知的内容
        duration: 1500, // 通知的显示时间，单位为毫秒，显示1.5秒后自动关闭
        position: 'bottom-right', // 通知的位置： top-right、top-left、bottom-right、bottom-left
    })
}
</script>
<template>
    <h1>3 提示框</h1>
    <div>
        <el-button type="primary" @click="open01">1 提示消息框</el-button>
        <el-button type="primary" @click="open02">2 确认框</el-button>
        <el-button type="primary" @click="open03_Notification">3 通知1</el-button>
        <el-button type="primary" @click="open03_Notification2">3 通知2</el-button>
    </div>
</template>
<style scoped lang="css">
</style>