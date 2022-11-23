<script setup lang="ts"></script>
<template>
    <section id="gallery" class="p-6 bg-gradient-to-b from-green-300 to-green-100">
        <div class="container mx-auto overflow-x-hidden">
            <div class="text-3xl py-2 my-4 text-center justify-center border-b-2 font-Broadway-bt">Gallery</div>
            <div class="grid grid-flow-col gap-4 whitespace-nowrap items-center md:justify-center overscroll-x-contain overflow-x-scroll md:overflow-x-hidden p-4">
                <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">All</div>
                <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">B & W</div>
                <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">Night</div>
                <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">Portrait</div>
                <div class="bg-slate-200 px-4 py-2 rounded active:text-sky-300">Wedding</div>
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
        </div>
    </section>
</template>