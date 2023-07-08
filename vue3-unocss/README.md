# vue3-unocss
1-原子化css
下载插件 npm install unocss -D 
2-引入
import unoCss from 'unocss/vite'
*** 在main.ts中引入 
import 'uno.css'
3-配置
export default defineConfig({
  plugins: [vue(), vueJsx(),unoCss({
    rules:[
      ['flex', {display:'flex'}],
      ['red', {color:'red'}],
      [/^m-(\d+)$/,([, d])=> ({margin:`${Number(d)*10}px`})],
    ],
    shortcuts:{
      cike:['flex', 'red']
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
4-presetIcons 预设 使用图标  presetAttributify <div red flex m="10"> presetUno工具类 
/////////////////
打包基于roullup的打包工具
npm install rollup-plugin-visualizer -D 使用这个插件优化
引入element-ui太大了
所以使用按需引入