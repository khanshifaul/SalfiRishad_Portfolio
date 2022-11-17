<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloNavigationVue from './components/HelloNavigation.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld />

      <HelloNavigationVue />
    </div>
  </header>

  <RouterView />
</template>

