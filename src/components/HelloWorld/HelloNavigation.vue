<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

function showMobileNav() {
    document.getElementById('mobilenav')?.classList.remove('hidden')
}
function hideMobileNav() {
    document.getElementById('mobilenav')?.classList.add('hidden')
}

</script>

<template>
    <Header class="fixed w-screen top-0 p-6">
        <div class="container mx-auto flex items-center justify-between text-lg text-white font-semibold">
            <RouterLink class="font-bold font-RubikMicrobe" :to="{ name: 'home' }">Salfi Rishad</RouterLink>

            <nav class="md:space-x-6 hidden md:flex">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink :to="{ name: 'home', hash: '#about' }">About</RouterLink>
                <RouterLink :to="{ name: 'home', hash: '#gallery' }">Gallery</RouterLink>
                <RouterLink :to="{ name: 'home', hash: '#contact' }"
                    class="p—3 px-6 pt—2 bg-green-700 bg-darkgray rounded-full baseline hover:bg-green-600">
                    Contact</RouterLink>
            </nav>
            <Icon icon="mdi:menu" class="md:hidden text-2xl font-bold" @click="showMobileNav()" />
            <div id="mobilenav" class="hidden fixed top-0 right-0 p-6 bg-slate-600 h-screen w-96 z-10">
                <nav class="space-y-6 flex flex-col justify-items-end items-end">
                    <Icon icon="mdi:close" class="text-2xl font-bold" @click="hideMobileNav()" />
                    <RouterLink to="/" @click="hideMobileNav()">Home</RouterLink>
                    <RouterLink :to="{ name: 'home', hash: '#about' }" @click="hideMobileNav()">About</RouterLink>
                    <RouterLink :to="{ name: 'home', hash: '#gallery' }" @click="hideMobileNav()">Gallery</RouterLink>
                    <RouterLink :to="{ name: 'home', hash: '#contact' }"
                        class="px-4 py-1 w-fit bg-green-700 bg-darkgray rounded baseline hover:bg-green-600" @click="hideMobileNav()">
                        Contact</RouterLink>
                </nav>
            </div>
        </div>
    </Header>
</template>