<script setup lang="ts"></script>
<template>
    <section id="contact" class="p-6 bg-gradient-to-b from-green-100 to-white">
        <div class="container mx-auto">
            <div class="text-3xl text-center border-b-2 pb-2 font-Broadway-bt mb-4">
                Let's Work
            </div>
            <div class="grid grid-cols-1 gap-4 place-items-center">
                <div class="relative z-0">
                    <input type="text" id="floating_standard"
                        class="block py-2.5 px-0 w-80 md:w-96 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_standard"
                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
                        Name</label>
                </div>
                <div class="relative z-0">
                    <input type="text" id="floating_standard"
                        class="block py-2.5 px-0 w-80 md:w-96 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_standard"
                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
                        Email</label>
                </div>
                <div class="relative z-0">
                    <textarea id="floating_standard"
                        class="block py-2.5 px-0 w-80 md:w-96 min-h-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_standard"
                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
                        Message</label>
                </div>
                <input type="button" value="SEND MESSAGE"
                    class="bg-orange text-white px-6 py-2 rounded-full font-semibold baseline" />
            </div>
        </div>
    </section>
</template>
