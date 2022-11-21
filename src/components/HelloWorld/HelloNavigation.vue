<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
</script>

<template>
    <Header class="container mx-auto flex items-center justify-between sticky text-lg font-semibold top-0 py-5">
        <div>
            <h1 class="font-bold font-RubikMicrobe">Salfi Rishad</h1>
        </div>
        <nav class="md:flex space-x-6 hidden">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/gallery">Gallery</RouterLink>
        </nav>
        <RouterLink to="/contact" class="hidden md:block p—3 px-6 pt—2 bg-orange bg-darkgray rounded-full baseline">Contact</RouterLink>
        <Icon icon="codicon:three-bars" class="md:hidden text-2xl font-bold"/>
    </Header>
</template>