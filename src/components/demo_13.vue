<!-- 13 表格 -->
<script setup lang="ts">
import { ref } from 'vue'

// 表格数据 数组
const data_01 = ref({
    arr: [
        { id: 1, name: '戴尔', age: 18, date: '2026-01-01' },
        { id: 2, name: 'Eve', age: 20, date: '2026-01-02' },
        { id: 3, name: '韦恩', age: 22, date: '2026-01-03' },
        { id: 4, name: 'Nfuni', age: 24, date: '2026-01-04' },
    ]
})
// 1. 定义当前表格每一行的数据类型
interface UserRow {
  id: number
  name: string
  age: number
  date: string
}

// 多选列 选中的行
let idArr: number[] = [] // 选中的行的id数组, 类型是number数组
const selected_01 = (val: UserRow[]) => {
    console.log("选中的行为selected_01:", val)
    idArr = [] // 清空重置 选中的行的id数组
    // 遍历选中的行，将选中的行的id添加到idArr数组中
    val.forEach((item: UserRow) => {  // 遍历选中的行数组，将选中的行的id添加到idArr数组中
        // item类型限制为上面自定义的 UserRow 类型，确保item是表格的一行数据对象
        // item.id：选中的行的id，例如1,2,3,4等
        idArr.push(item.id)    // 将选中的行的id添加到idArr数组中, item：选中的行对象
    })
    console.log("选中的行的id数组:", idArr) 
}

// 删除选中的行
const del_01 = () => {
    // 删除选中的行，因为被选的id都存在idArr数组中，
    // 所以直接删除idArr数组中的元素即可
    console.log("del删除选中的行:", idArr)
}
// 删除所选中的行，单个行
const del_01_row = (index: number) => {
    console.log("del删除选中的行索引:", index)
}

// 编辑选中的行
const edit_01 = (index: number, row: UserRow) => {
    console.log("----你当前点击了这一行的编辑按钮:", index,"----")
    console.log("edit编辑选中的行:", index,"行数据:", row)
}



</script>
<template>
    <h1>13 表格</h1>
    <h3>表格</h3>
    <!-- 
      el-table 组件，用于定义表格   
      :data绑定的是表格数据，数组中的每个对象都是表格的一行数据
      border：表格是否有边框，默认是false，不写border属性，表格没有边框
      height：表格的高度，单位是像素px，不需要写px单位，因为是默认的单位
    -->
    <el-table :data="data_01.arr" border height="140" style="width: 600px">
        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="date" label="日期" />
        <!-- el-table-column 组件，用于定义表格的列 ->
        <- el-table-column：就是表格的列
        <- prop：绑定的数组中的对象的属性名，用于获取数组中每个对象的属性值
        <- label：列的名称，标题，显示在表格的列头
        <- width：列的宽度，单位是像素px，不需要写px单位，因为是默认的单位
        -->
    </el-table>
    <h3>表格边框 border</h3>
    <!-- border：表格是否有边框，默认是false，不写border属性，表格没有边框 -->
    <el-table :data="data_01.arr" border style="width: 600px">
        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="date" label="日期" />
    </el-table>
    <h3>表格高度 height</h3>
    <!-- height：表格的高度，单位是像素px，不需要写px单位，因为是默认的单位 -->
    <el-table :data="data_01.arr" border height="140" style="width: 600px">
        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="date" label="日期" />
    </el-table>
    <h3>多选列 type="selection"</h3>
    <el-table :data="data_01.arr" border style="width: 600px">
        <!-- 增加了这一行，就多了一个多选列 -->
        <el-table-column type="selection" width="55" />
        <!-- type="selection"：多选列，宽度是55px -->
        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="date" label="日期" />
    </el-table>
    <!----------------->
    <!----------------->
    <h3>分页+表格+按钮</h3>
    <el-button type="primary" @click="del_01">删除</el-button>

    <el-table :data="data_01.arr" @selection-change="selected_01" border style="width: 800px;margin:3px 0">
        <el-table-column type="selection" width="55" />

        <el-table-column prop="id" label="编号" width="80" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="date" label="日期" />

        <el-table-column label="操作" width="200">
            <template #default="scope">
                <!--
                // 这个#default="scope"的参数scope，是一个对象，包含了当前行的所有属性值
                // scope.$index：当前行的索引，从0开始，
                // scope.row：当前行的数据，是一个对象，包含了当前行的所有属性值
                // scope.row.id：当前行的id，例如1,2,3,4等
                // scope.row.name：当前行的姓名，例如张三，李四，王五等
                // scope.row.age：当前行的年龄，例如18,20,22等
                // ...
                // edit_01的参数：scope.$index：当前行的索引，scope.row：当前行的数据
                // scope.$index：当前行的索引，从0开始，
                //       $index是表格组件的属性，用于获取当前行的索引，从0开始计数
                // scope.row：当前行的数据，是一个对象，包含了当前行的所有属性值
                //      .row是表格组件的属性，用于获取当前行的数据对象
                // scope.row.id：当前行的id，例如1,2,3,4等
                // scope.row.name：当前行的姓名，例如张三，李四，王五等
                // scope.row.age：当前行的年龄，例如18,20,22等
                // ...
                -->
                <el-button size="small" type="primary" @click="edit_01(scope.$index, scope.row)">
                    编辑
                </el-button>
                <el-button size="small" type="danger" @click="del_01_row(scope.$index)">删除</el-button>
            </template>
        </el-table-column>

    </el-table>

    <el-pagination layout="prev, pager, next, jumper, total" :total="50" :page-size="5"/>


</template>
<style scoped></style>
