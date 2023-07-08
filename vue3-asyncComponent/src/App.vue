<template>
  <div class="box">
    <Suspense>
      <template #default>
          <SyncVue></SyncVue>
      </template>
      <template #fallback>
        <SkeletonVue></SkeletonVue>
      </template>
    </Suspense>
    <SkeletonVue></SkeletonVue>
  </div>
</template>
<script setup lang='ts'>
import {defineAsyncComponent} from 'vue'
import SkeletonVue from "./component/expame/skeleton.vue";
const SyncVue = defineAsyncComponent(()=>import('@/component/expame/sync.vue'))
</script>
<style>
body {
  background-color: #f6f6f6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
}
.box {
  display: flex;
} 
</style>
