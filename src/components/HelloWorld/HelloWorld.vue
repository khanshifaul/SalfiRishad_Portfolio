<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="h-screen text-white hero-bg bg-local bg-cover bg-right lg:bg-center bg-no-repeat p-6">
    <div class="container mx-auto text-left text-xl font-extrabold pt-48 space-y-6">
      <span>I'm</span>
      <h2 class="text-2xl md:text-4xl font-Bacode"> Salfi Bari Khan </h2>
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

