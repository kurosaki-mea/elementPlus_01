import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入 elementPlus
import ElementPlus from 'element-plus'  //导入elementPlus组件库的所有模块和功能
import 'element-plus/dist/index.css'  //导入elementPlus的全局css样式文件


const app = createApp(App)

app.use(createPinia())
app.use(router)

// 挂载elementPlus 到vue实例上
app.use(ElementPlus)

app.mount('#app')
