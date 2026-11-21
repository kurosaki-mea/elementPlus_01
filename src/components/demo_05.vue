<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { TabsPaneContext } from 'element-plus' //引入 TabsPaneContext 类型，用于定义标签页的上下文类型

// 默认选中的 标签名称
const selectedName = ref('2')

// 选中标签页触发的回调函数
const tabClick = (tab: TabsPaneContext, event: Event) => {
    console.log("点击的标签页：", tab, "点击事件：", event)
}
// 标签页数据
const tabs = reactive({
    arr: [
        { name: '1', title: '标签标题1', content: '标签页1的内容' },
        { name: '2', title: '标签页2', content: '标签页2的内容' },
        { name: '3', title: '标签页3', content: '标签页3的内容' },
    ]
})

// 动态添加标签页
const tabAdd = () => {
    let index = tabs.arr.length + 1 // 计算新标签页的索引，当前标签页数量 + 1
    // index++ // 也可以使用 index++，但是这里直接使用 tabs.arr.length + 1 更直观

    tabs.arr.push({
        name: index.toString(), // 标签页的名称，使用索引值转换为字符串
        title: '新选项卡' + index,
        content: '内容' + index
    })
}
// 动态删除标签页
const tabRemove = (name: string) => {    // name 是要删除的标签页的名称,例如'1'，'2'，'3'
    console.log("删除的标签页名称name：", name)
    // 下面的代码是通过 findIndex() 方法找到要删除的标签页在数组中的索引，
    // 然后使用 splice() 方法删除该索引对应的元素。
    const index = tabs.arr.findIndex((value) => { 
        // findIndex() 方法会遍历数组中的每个元素，并将当前元素作为参数传入回调函数。
        // findIndex() 返回数组中满足的 第一个元素 的索引，否则返回 -1。
        // 例如，如果要删除的标签页名称是 '2'，那么 findIndex() 会返回 1，因为 '2' 对应的元素在数组中的索引是 1。
        return value.name === name // 判断当前元素的 name 是否等于要删除的 name
        // 这里的 value 是 tabs.arr 数组中的每个元素，value.name 是当前元素的 name 属性。
        // 如果当前元素的 name 等于要删除的 name，就返回 true，findIndex() 就会返回该元素的索引。
    })
    tabs.arr.splice(index, 1) // 删除指定索引的元素
}





</script>
<template>
    <h1> 5 标签页 </h1>
    <h3>标签页 默认风格</h3>
    <el-tabs v-model="selectedName" @tab-click="tabClick">
        <!-- 
    //上面的 v-model="selectedName" 是双向绑定，表示当前选中的标签页的名称
    //      v-model 双向绑定当前选中的 tab 标识（对应子项的 name）
    // 谁被选中，它的名字就存进selectedName;反过来，selectedName里存的名字，就会被选中;
    //@tab-click="tabClick" 是点击标签页时触发的回调函数,监听标签点击事件
    // 当用户点击某个标签页时，会触发 tabClick 方法，并将该标签页的相关信息作为参数传入。
    // 下面的 el-tab-pane 是标签页的内容，每个标签页都有一个 name 属性，表示该标签页的名称
        -->
        <el-tab-pane label="标题1标题" name="1">标题1内容</el-tab-pane>
        <el-tab-pane label="标题2" name="2">这是标题2里面的内容</el-tab-pane>
        <el-tab-pane label="这是标题3" name="3">这是标题3里面的内容</el-tab-pane>
        <!-- label，标签的标题 -->
        <!-- name="1"：这页的“编号”（组件规定的属性名，值自己定），
         和 selectedName 对应就会被激活选中 -->
    </el-tabs>
    <h3>标签页 卡片风格</h3>
    <p>type="card"。带边框的卡片：type="border-card"</p>
    <el-tabs v-model="selectedName" @tab-click="tabClick" type="card">
        <el-tab-pane label="标签1标题" name="1">标签1的内容</el-tab-pane>
        <el-tab-pane label="标签2标题" name="2">标签2的内容</el-tab-pane>
    </el-tabs>

    <h3>动态添加</h3>
    <el-button @click="tabAdd">添加</el-button>
    <el-tabs v-model="selectedName" @tab-remove="tabRemove" closable type="card">
        <el-tab-pane v-for="(value, key) in tabs.arr" :key="value.name" :label="value.title" :name="value.name">
            {{ value.content }}
        </el-tab-pane>
    </el-tabs>


</template>
<style lang="css" scoped></style>