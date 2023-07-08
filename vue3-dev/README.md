# vue3-dev

获取环境变量
export default ({mode}:any)=>{
  console.log(mode);
  
  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}