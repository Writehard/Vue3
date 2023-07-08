<template>
<div>
</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive, ref } from 'vue';
const istance = getCurrentInstance()
istance?.proxy?.$loading.show()
setTimeout(()=> {
istance?.proxy?.$loading.head()

},5000)
</script>

<style scoped>
</style>