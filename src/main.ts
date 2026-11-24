import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入 elementPlus
import ElementPlus from 'element-plus'  //导入elementPlus组件库的所有模块和功能
import 'element-plus/dist/index.css'  //导入elementPlus的全局css样式文件
// 【日期.1】导入elementPlus的中文语言包，日期选择器就会显示中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'  //导入elementPlus的中文语言包

const app = createApp(App)

// 引入 ElementPlus 图标库，并注册所有图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 注册图标，循环注册所有图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(createPinia())
app.use(router)

// 挂载elementPlus 到vue实例上
// app.use(ElementPlus)

// 挂载elementPlus到vue实例上的同时，接着挂载中文语言包
// 【日期.2】挂载中文语言包到vue实例上，日期选择器就会显示中文
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')
