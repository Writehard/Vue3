<template>
<div>
  <h1>我是headernav组件</h1>
</div>
</template>
<script setup lang='ts'>
// beforeCreate - created setup语法糖模式是没有这两个生命周期的 setup 去代替
// onBeforeMount 读取不到dom onMounted 可以读取到 dom
// onBeforeUpdate 获取的是更新之前的dom onUpdated 获取更新之后的dom
import { onBeforeMount,onBeforeUpdate,onBeforeUnmount, onMounted, onUpdated, onUnmounted } from "vue";
onBeforeMount(() => {
  console.log("创建之前----->");
  
});
onMounted(() => {
  console.log("创建完成------->")
});
// 更新钩子
onBeforeUpdate(() => {
  console.log("更新组件之前------>");
  
});
onUpdated(() => {
  console.log("更新组件完成---->");
  
});
// 卸载
onBeforeUnmount(() => {
  console.log("销毁之前-------->");
});
onUnmounted(() => {
  console.log("销毁完成-------->");
})
</script>
<style scoped>
</style>