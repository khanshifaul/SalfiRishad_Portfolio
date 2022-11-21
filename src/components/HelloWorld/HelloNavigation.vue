<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <Header class="container flex space-x-4">
        <div>
            <h1 class="font-bold">Salfi Rishad</h1>
        </div>
        <nav class="space-x-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </Header>
</template>