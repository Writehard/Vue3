<template>
    <div class="card">
        <div class="image">
            <img :src="data.url" alt="">
        </div>
        <div class="content">
            <h4>{{ data.name }}</h4>
            <div class="description">
                {{ data.desc }}
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { axios } from "@/server/index";
interface Data{
    data:{
        name:string,
        age:number,
        url:string,
        desc:string
    }
}
const {data} = await axios.get<Data>('../../../public/data.json');
</script>
<style scoped>

.card {
    width: 320px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, .12);
    margin: 0 100px;
}
.image {
    height: 200px;

}
.image img {
    display: block;
    width: 100%;
    height: inherit;
    object-fit: cover;
}
.content {
    padding: 2rem 1.8rem;
}
.description {
    font-size: 1rem;
    line-height: 1.4rem;
}


</style>