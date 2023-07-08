import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入插件
import  DefineOptions  from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default defineConfig({
  // 应用插件
  plugins: [vue(),DefineOptions()],
})
