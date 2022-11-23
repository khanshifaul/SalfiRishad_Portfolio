<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloNavigationVue from '@/components/HelloWorld/HelloNavigation.vue';
import HelloFooterVue from '@/components/HelloWorld/HelloFooter.vue';
</script>

<template>
  <HelloNavigationVue />
  <RouterView />
  <HelloFooterVue />
</template>

