<script setup lang="ts">
import HelloNavigationVue from '@/components/HelloWorld/HelloNavigation.vue';
import bgimg from '@/assets/bg-img/bg-img-1.jpg';

</script>

<template>
  <section class="h-screen text-white bg-local bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgimg})` }">
    <HelloNavigationVue />
    <div class="container mx-auto text-center font-extrabold pt-20">
      <h2> I'm Salfi Bari Khan </h2>
      <div class="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Proffesional
        Photographer </div>
    </div>
  </section>
</template>

