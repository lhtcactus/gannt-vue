import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
//引入全局组件start
import Test from '@/components/Test.vue'

const components: {
  [key: string]: any
} = {
  Test: Test,
}

for (const key in components) {
  app.component(key, components[key])
}

//全局组件 end

//引入全局样式
import '@/styles/index.scss'
//挂载
app.mount('#app')
