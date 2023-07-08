<template>
<div>
  <h1>我是App.vue父组件</h1>
  <div class="btns">
    <button v-has-show="'shop:edit'">开关</button>
    <button v-has-show="'shop:create'">创建</button>
    <button v-has-show="'shop:delete'">编辑</button>
  </div>
  
  <A></A>
</div>
</template>

<script setup>
import A from "../src/components/view/A.vue";
import type { Directive } from "vue";
const vHasShow:Directive = (el, bingding) => {
  console.log(el, bingding);
}
// mock 后台返回的数据
const permission = [
  'userid:shop:edit',
  'userid:shop:create',
  'userid:shop:delete'
]



</script>

<style scoped lang="less">
.btns {
  button{
    margin: 10px;
  }
}
</style>
      <!-- 1-传值
      2-自定义参数 -aaa
      3-自定义修饰符 - zhe
  <A v-move:aaa.zhe="{background:red}"></A> -->