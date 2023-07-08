import { defineConfig } from "vite";
//umd 支持 amd cmd cjs 全局变量模式
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name:'useResize'
        },
        rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    useResize: 'useResize',
                },
            },
        },
    },
})