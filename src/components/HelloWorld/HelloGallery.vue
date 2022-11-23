<script setup lang="ts"></script>
<template>
    <section id="gallery" class="container mx-auto p-6">
        <div class="text-3xl py-2 my-4 text-center justify-center border-b-2 font-RubikMicrobe">Gallery</div>
        <div class="flex space-x-4 items-center justify-center">
            <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">All</div>
            <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">Black & White</div>
            <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">Night</div>
            <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">Portrait</div>
        </div>
        <div class="grid grid-cols-2 grid-flow-dense gap-2 py-4 place-content-center">
            <div class="space-y-2">
                <img src="@/assets/bg-img/bg-img-2.jpg" alt="">
                <img src="@/assets/bg-img/bg-img-1.jpg" alt="">
                <img src="@/assets/bg-img/bg-img-2.jpg" alt="">
                <img src="@/assets/bg-img/bg-img-1.jpg" alt="">
            </div>
            <div class="space-y-2">
                <img src="@/assets/bg-img/bg-img-1.jpg" alt="">
                <img src="@/assets/bg-img/bg-img-2.jpg" alt="">
                <img src="@/assets/bg-img/bg-img-1.jpg" alt="">
                <img src="@/assets/bg-img/bg-img-2.jpg" alt="">
            </div>
        </div>
    </section>
</template>