import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
//在node环境下
// console.log(loadEnv(process.env));

// https://vitejs.dev/config/
export default ({mode}:any)=>{
  console.log(mode);
  console.log(loadEnv(mode, process.cwd()))
  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
