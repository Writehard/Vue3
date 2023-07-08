<script setup lang="ts">
import Loading from './Loading/index.vue'
import { onMounted,getCurrentInstance } from "vue";
import useResize from "z-ressize"

onMounted(()=> {
  useResize(document.querySelector("#ressize") as HTMLElement,(e:any)=>{
    console.log(e)
  })
})

const app = getCurrentInstance()
console.log(app?.proxy.$filters.format('ts'));

</script>

<template>
  <div  id="ressize">
  <h1>{{ $env }}</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Loading msg="Vite + Vue" />
</template>

<style scoped>
#ressize {
  border: 1px solid #ccc;
  resize: both;
  overflow: hidden;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
