import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unoCss from 'unocss/vite'
import {presetIcons, presetAttributify, presetUno} from 'unocss'
// https://vitejs.dev/config/
import {visualizer} from 'rollup-plugin-visualizer'
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [vue(), vueJsx(), visualizer({open:true}),unoCss({
    presets:[presetIcons(), presetAttributify(), presetUno()],
    rules:[
      ['flex', {display:'flex'}],
      ['red', {color:'red'}],
      [/^m-(\d+)$/,([, d])=> ({margin:`${Number(d)*10}px`})],
    ],
    shortcuts:{
      cike:['flex', 'red']
    }
  }), ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
