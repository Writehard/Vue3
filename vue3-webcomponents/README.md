# vue3-webcomponents

1-vite中的配置
vue({
    template:{
      compilerOptions:{
        isCustomElement: (tag) => tag.includes('evanzhe-btn')
      }
    }
  })
2-defineCustomElement从vue中引入
const Btn = defineCustomElement(customVueCe)
window.customElements.define('evanzhe-btn', Btn)
3创建custom-vue.ce.vue
4-传递参数
引用类型 需要使用json进行存储的类型
