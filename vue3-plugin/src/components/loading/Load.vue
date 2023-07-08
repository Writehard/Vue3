<template>
    <div v-if="isShow" class="loading">
        Loading....
    </div>
</template>
    
<script setup lang="ts">
import { ref } from 'vue';
const isShow = ref<boolean>(true)
</script>
    
<style scoped>
.loading {
    background-color: black;
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
</style>