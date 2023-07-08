<template>
  <h1>我是主组件</h1>
  <div>
    <div ref="div">{{ str }}</div>
  </div>
  <HeaderNav v-if="bol"></HeaderNav>
  <button @click="change">修改Str</button>
  <hr>
  <button @click="bol = !bol">销毁组件</button>
</template>
<script setup lang='ts'>
// beforeCreate - created setup语法糖模式是没有这两个生命周期的 setup 去代替
// onBeforeMount 读取不到dom onMounted 可以读取到 dom
// onBeforeUpdate 获取的是更新之前的dom onUpdated 获取更新之后的dom
import { ref,onBeforeMount,onBeforeUpdate,onBeforeUnmount, onMounted, onUpdated, onUnmounted, onRenderTracked, onRenderTriggered } from "vue";
import HeaderNav from "./components/HeaderNav.vue";
const str = ref('wick');
const div = ref();
const bol = ref(true);
console.log("setup");
// 创建
onBeforeMount(() => {
  console.log("创建之前----->",div.value);
  
});
onMounted(() => {
  console.log("创建完成------->",div.value)
});
// 更新钩子
onBeforeUpdate(() => {
  console.log("更新组件之前------>", div.value?.innerText);
  
});
onUpdated(() => {
  console.log("更新组件完成---->", div.value?.innerText);
  
});
// 卸载
onBeforeUnmount(() => {
  console.log("销毁之前-------->");
});
onUnmounted(() => {
  console.log("销毁完成-------->");
})
const change = () =>{
  str.value = "evan"
}
onRenderTracked((e) => {
  console.log(e)
});
onRenderTriggered((e) => {
  console.log(e)
})
</script>
<style scoped>
</style>