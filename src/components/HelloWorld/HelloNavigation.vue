<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <Header class="container mx-auto flex space-x-20 sticky top-0 py-5">
        <div>
            <h1 class="font-bold">Salfi Rishad</h1>
        </div>
        <nav class="flex space-x-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </Header>
</template>