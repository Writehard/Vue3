<template>
    <div>
        <h1>我是子组件</h1>
        <button @click="emitB">派发一个事件</button>
    </div>
    </template>
    
    <script setup>
    import Bus from '../Bus'
    let flag = false
    const emitB = () => {
        flag = !flag
        Bus.emit('on-click', flag)
    } 

    </script>
    
    <style scoped>
    </style>
      <!-- const emit = defineEmits(['on-click']);
      import { ref } from 'vue';
      // 修改ref对象时，一定要加上    .value
      let flag = ref(false);
      const emitB = () => {
          flag.value = !flag.value;
          emit('on-click', flag.value);
      } -->