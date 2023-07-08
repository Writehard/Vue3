<template>
  <div class="content">
    <el-button type="primary" @click="bol = !bol">切换组件</el-button>
    <h1>我是父级组件</h1>
    <div class="parent">
      <!-- 缓存 -->
      <keep-alive :exclude="['A']">
        <A v-if="bol"></A>
        <B v-else></B>
      </keep-alive>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
let bol = ref(true);
onMounted(()=>{
  console.log('初始化');
  
})

</script>
<style >

.parent {
  border: 1px solid black;
}
.content {
  border: 1px solid black;
}
</style>
        <!-- include可以指定缓存的组件 可以是数组 字符串 -->
        <!-- exclude不缓存 -->
        <!-- 性能优化-- 增加用户体检 -->
