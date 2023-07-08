<script setup lang="ts">
const arr2:any[] = ['A', 'B', 'C', 'D', 'E']
arr2.splice(2,0,'DDD')
</script>

<template>
    <ul v-for="item in arr2">
      <li>
        {{ item }}
      </li>
    </ul>
</template>

<style scoped>


</style>
