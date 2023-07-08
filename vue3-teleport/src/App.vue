<template>
 
    <div class="parent">
      <Teleport>
        <A></A>
      </Teleport>
      <h1>我是父级</h1>
    </div>
</template>
<script setup lang='ts'>
import { ref } from "vue";
import A from "./components/A.vue";
</script>
<style >
* {
  padding: 0;
  margin: 0;
}
.parent {
  background: yellow;
  height: 50vh;
  position: relative;
}
</style>