<!-- 输入框 -->
<script setup lang="ts">
import { ref } from 'vue'

// 输入框 定义数据
const name = ref('')
const password = ref('')
const content = ref('这是内容')
const url = ref('google.com')
const url2 = ref('youtube')
const email = ref('12345')

const selected = ref('2') // 选中的下拉框
const keyWord = ref('') // 搜索框输入内容

</script>
<template>
    <h1> 6 输入框 </h1>
    <div style="width: 300px;">
        <!-- clearable 可一键清空 -->
        <h3>输入框</h3>
        <el-input v-model="name" clearable placeholder="请输入用户名" />

        <!-- show-password 可切换显示/隐藏密码 -->
        <h3>密码框</h3>
        <el-input v-model="password" show-password placeholder="请输入密码" />

        <h3>文本域</h3>
        <!-- 定义一个只有 2 行的文本域：rows="2" -->
        <el-input type="textarea" v-model="content" rows="2" />

        <h3>输入内容长度限制，输入框</h3>
        <!-- maxlength 限制长度；show-word-limit 显示具体限制 -->
        <el-input v-model="name" maxlength="10" show-word-limit />
        <el-input v-model="name" maxlength="10" />

        <h3>输入内容长度限制，文本域</h3>
        <el-input type="textarea" v-model="content" maxlength="20" show-word-limit />

        <!-- 
            前置：#prepend；
            后置：#append    -->
        <h3>前置</h3>
        <el-input v-model="url">
            <template #prepend>http://</template>
            <!-- 此处的template 是一个组件，用于在输入框中显示前置内容 -->
            <!-- 可以是文本、图标、按钮等 -->
        </el-input>

        <h3>后置</h3>
        <el-input v-model="email">
            <template #append>@qq.com</template>
        </el-input>

        <h3>前置 后置</h3>
        <el-input v-model="url2">
            <template #prepend>http://</template>
            <template #append>.com</template>
        </el-input>

        <h3>前置后置扩展 - 搜索</h3>
        <el-input placeholder="请输入搜索名称" v-model="keyWord">
            <template #prepend>
                <el-select v-model="selected" placeholder="请选择" style="width:100px">
                    <el-option label="前端" value="1" />
                    <el-option label="后端" value="2" />
                    <el-option label="服务器" value="3" />
                </el-select>
            </template>
            <template #append>
                <el-button>
                    <el-icon>
                        <Search />
                    </el-icon>
                </el-button>
            </template>
        </el-input>

    </div>
    <div style="height: 300px;"></div>
</template>
<style lang="css" scoped></style>