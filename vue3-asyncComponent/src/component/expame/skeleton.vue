<template>
    <div class="skeleton">
        <div class="card">
            <div class="img loading"></div>
            <div class="title loading"></div>
            <div class="text text-1 loading"></div>
            <div class="text loading"></div>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style scoped>
.skeleton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.card {
    position: relative;
    padding: 30px;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 0 6px #ddd;
}
.img {
    display: block;
    height: 150px;
}
.title {
    height: 40px;
    width: 100%;
    margin: 15px  0 20px;
}
.text {
    height: 30px;
    margin-top: 15px;
}
.text-1 {
    margin-left: 40px;
}
.loading {
    background: linear-gradient(90deg, #fff 25%, #d1d1d1 40%, #f2f2f2 50%);
    background-size: 400% 400%;
    animation: loading 1.5s case infinite;
}
@keyframes loading {
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
}
</style>
