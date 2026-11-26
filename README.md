# elementPlus_01

This template should help get you started developing with Vue 3 in Vite.

## elementPlus demo 1
2026年11月16日

[视频地址](https://www.bilibili.com/video/BV1Ei421o7To)
<https://www.bilibili.com/video/BV1Ei421o7To>
---
# 🎨 Vue 3 + Element Plus 组件库实战与进阶备忘录

> 这是一个系统学习与演练 **Element Plus** 企业级 UI 组件库的实战项目。项目基于 `Vue 3 + TypeScript + Vite` 构建，通过 `demo_01.vue` 至 `demo_13.vue` 共 **13 个渐进式演练模块**，由浅入深地覆盖了基础布局、表单与复杂校验、消息反馈弹窗、导航菜单以及表格分页 CRUD 综合业务场景。

---

## 📂 项目目录结构全览

```text
src/
├── main.ts                     # 应用入口 (Element Plus 全量/按需引入、中文语言包、Icon 图标全局注册)
├── App.vue                     # 根组件 (Demo 演练展示容器 / 切换入口 / 全局 ConfigProvider)
│
├── components/                 # 🧩 Element Plus 渐进式核心演练模块 (共 13 个阶段)
│   ├── demo_01.vue             # [基础入门] 按钮、图标、基础交互组件演练 
│   ├── demo_02.vue             # [布局系统] Layout 栅格布局 / Container 后台经典布局 
│   ├── demo_03.vue             # [基础表单] Input / Select / Radio / Checkbox / Switch 绑定 
│   ├── demo_04.vue             # [表单进阶] 完整 Form 表单结构与多规则校验 Rules 实战 
│   ├── demo_05.vue             # [复合录入] 日期时间选择器、级联/滑块/上传等复杂录入控件 
│   ├── demo_06.vue             # [反馈交互] Message 全局提示 / Notification 通知交互 
│   ├── demo_07.vue             # [弹窗抽屉] Dialog 对话框 / Drawer 抽屉与 MessageBox 确认框 
│   ├── demo_08.vue             # [状态展示] Tag 标签 / Badge 徽章 / Progress 进度条 / Alert  
│   ├── demo_09.vue             # [加载与空态] v-loading 指令 / Skeleton 骨架屏 / Empty 空状态  
│   ├── demo_10.vue             # [导航体系] Menu 导航菜单 / Tabs 标签页 / Breadcrumb 面包屑 
│   ├── demo_11.vue             # [核心表格] Table 数据表格、自定义列插槽与 Pagination 分页  
│   ├── demo_12.vue             # [辅助交互] Tooltip 文字提示 / Popover 弹出框 / Dropdown 下拉 
│   └── demo_13.vue             # [综合压轴] 完整后台 CRUD 业务闭环 (搜索+表格+分页+弹窗编辑)  
│
├── router/
│   └── index.ts                # Vue Router 路由配置底座
└── stores/
    └── counter.ts              # Pinia 状态管理配置底座
```

---

## ⚙️ 工程化配置亮点 (`main.ts` & `App.vue`)

1. **完整的全局环境初始化 (`main.ts`)**：
   * 引入 `ElementPlus` 核心库及其基础样式文件 `element-plus/dist/index.css`。
   * 配置 **国际化中文语言包 (`zhCn`)**，确保分页器（`el-pagination`）、日期选择器（`el-date-picker`）等组件默认显示中文文案。
   * 全局遍历注册 `@element-plus/icons-vue` 图标组件，使得所有 `<el-icon>` 均可直接在模板中使用。
2. **标准 Vue 3 工程底座**：
   * 项目同时集成了 `TypeScript` 类型支持、`Vue Router` 与 `Pinia`，随时可将单个 Demo 扩展为完整的多页面中后台管理系统。

---

## 🧩 13 个演练模块四阶段学习图谱

从文件体量与代码复杂度演进来看，你的学习路径非常清晰，呈现出标准的**“基础元件 $\rightarrow$ 复杂表单 $\rightarrow$ 交互反馈 $\rightarrow$ 表格 CRUD 综合实战”**四阶段递进曲线：

### 第一阶段：基础控件与页面骨架 (`demo_01` ~ `demo_03`)
* **核心聚焦**：熟悉组件命名规范（`el-*`）、属性传参（`type`、`size`、`disabled`）及响应式数据绑定。
* **关键知识点**：
  * **按钮与图标 (`demo_01`)**：`el-button` 的多种状态样式及 `<el-icon>` 图标组合。
  * **响应式布局 (`demo_02`)**：使用 `el-row`（24 分栏）与 `el-col` 实现自适应栅格；使用 `el-container`、`el-aside`、`el-header`、`el-main` 搭建经典后台管理骨架。
  * **基础录入 (`demo_03`)**：掌握 `v-model` 在 `el-input`、`el-select`（`el-option`）、`el-switch` 中的双向绑定。

### 第二阶段：复杂表单与规则校验重头戏 (`demo_04` ~ `demo_05`)
* **核心聚焦**：文件体量跃升至 `5KB` 左右，攻克中后台开发中最核心的**数据录入与前端校验**。
* **关键知识点**：
  * **表单校验闭环 (`demo_04`)**：`el-form` 绑定 `:model` 与 `:rules`，通过 `ref` 获取表单实例（TS 类型为 `FormInstance`），在提交时调用 `formEl.validate()` 执行异步校验，重置时调用 `formEl.resetFields()`。
  * **高阶录入控件 (`demo_05`)**：处理日期范围选择（`el-date-picker` 配合 `value-format` 格式化字符串）、级联选择或文件上传等复杂数据结构。

### 第三阶段：反馈弹窗、状态与导航体系 (`demo_06` ~ `demo_10`)
* **核心聚焦**：提升用户交互体验，掌握函数式调用组件与容器类组件。
* **关键知识点**：
  * **轻量级反馈 (`demo_06`)**：函数式调用 `ElMessage.success()` / `ElNotification()` 进行操作结果提示。
  * **模态框交互 (`demo_07`)**：控制 `el-dialog` 和 `el-drawer` 的 `v-model` 显隐状态；使用 `ElMessageBox.confirm()` 处理删除等高危操作的二次确认。
  * **导航与状态 (`demo_08` ~ `demo_10`)**：利用 `el-menu` 构建侧边栏导航，`el-tabs` 切换视图分区，`v-loading` 指令优雅处理异步等待态。

### 第四阶段：数据表格与综合 CRUD 实战 (`demo_11` ~ `demo_13`)
* **核心聚焦**：结合前三个阶段的所有技能，实现企业级数据管理界面。
* **关键知识点**：
  * **表格与分页 (`demo_11`)**：`el-table` 绑定 `:data` 数组，`el-table-column` 利用作用域插槽 `#default="{ row, $index }"` 自定义渲染操作按钮、状态标签（`el-tag`）；搭配 `el-pagination` 实现页码与每页条数联动。
  * **压轴综合实战 (`demo_13`, 6.3 KB)**：全项目体量最大的核心模块，完整串联了**顶部条件查询表单 $\rightarrow$ 表格数据渲染 $\rightarrow$ 分页切换 $\rightarrow$ 点击新增/编辑弹出 `el-dialog` 表单校验 $\rightarrow$ 删除触发 `ElMessageBox` 确认与 `ElMessage` 提示**的完整业务闭环。

---

## ⚡ Element Plus 高频核心语法速查手册

### 1. 图标全局注册 (`main.ts`)
```ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

### 2. TypeScript 表单校验标准写法
```ts
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      // 校验通过，执行提交逻辑
    }
  })
}
```

### 3. 表格自定义操作列与二次确认删除
```vue
<el-table :data="tableData" border stripe>
  <el-table-column prop="name" label="名称" />
  <el-table-column label="操作" width="180">
    <template #default="{ row }">
      <el-button size="small" type="primary" @click="handleEdit(row)">编辑</el-button>
      <el-button size="small" type="danger" @click="handleDelete(row)">删除</el-button>
    </template>
  </el-table-column>
</el-table>
```
```ts
import { ElMessage, ElMessageBox } from 'element-plus'

const handleDelete = (row: any) => {
  ElMessageBox.confirm(`确认要删除「${row.name}」吗？`, '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    ElMessage.success('删除成功')
  }).catch(() => {
    ElMessage.info('已取消删除')
  })
}
```

---

## 🎯 总结

本项目结构清晰、循序渐进，完整沉淀了 **Element Plus** 在现代 Vue 3 项目中的高频使用范式：
* **基础扎实**：从按钮、布局、基础表单起步，理清组件属性与事件机制。
* **重点突出**：在 `demo_04`、`demo_11`、`demo_13` 等大体积模块中重点攻克了**表单校验**、**自定义表格插槽**与 **CRUD 业务流转**，可直接作为日后开发后台管理系统的代码参考模板。