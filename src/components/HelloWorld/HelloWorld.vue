<script setup lang="ts">
import HelloNavigationVue from '@/components/HelloWorld/HelloNavigation.vue';
import bgimg from '@/assets/bg-img/bg-img-1.jpg';
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="h-screen text-white bg-local bg-cover bg-right md:bg-center bg-no-repeat px-3"
    :style="{ backgroundImage: `url(${bgimg})` }">
    <HelloNavigationVue />
    <div class="container mx-auto text-left text-xl font-extrabold pt-48 space-y-6">
      <span>Hi,</span>
      <h2> I'm <span class="text-3xl"> Salfi Bari Khan </span> </h2>
      <div class="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Proffesional
        Photographer </div>
      <div class="flex space-x-4">
        <a href="#">
          <Icon icon="mdi:facebook" class="text-3xl font-bold" />
        </a>
        <a href="#">
          <Icon icon="mdi:instagram" class="text-3xl font-bold" />
        </a>
        <a href="#">
          <Icon icon="mdi:twitter" class="text-3xl font-bold" />
        </a>
      </div>
    </div>
  </section>
</template>

