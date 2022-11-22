<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
</script>

<template>
    <Header class="container mx-auto flex items-center justify-between sticky text-lg font-semibold top-0 py-5">
        <div>
            <RouterLink class="font-bold font-RubikMicrobe" :to="{ name: 'home' }">Salfi Rishad</RouterLink>
        </div>
        <nav class="md:space-x-6 hidden md:flex">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#about' }">About</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#gallery' }">Gallery</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#contact' }" class="p—3 px-6 pt—2 bg-orange bg-darkgray rounded-full baseline">
                Contact</RouterLink>
        </nav>
        <Icon icon="codicon:three-bars" class="md:hidden text-2xl font-bold" />
    </Header>
</template>