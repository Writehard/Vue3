<script setup lang="ts">
import Element from "./components/Element.vue";
import Ant from "./components/Ant.vue";
import Vant from './components/Vant.vue'
</script>

<template>
  <header>
    <h1>vant -ui</h1>
    <Vant></Vant>
    <h1>element-ui</h1>
    <Element></Element>
    <h1>ant -ui</h1>
    <Ant></Ant>
     
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
