<script setup>
const {toggleDark} = defineProps(['toggleDark'])
</script>
<template>
    <div class="flex bg-white dark:bg-dark-blue-dark-mode-elements justify-between py-8 px-3 text-xl items-center w-full">
        <h1 class="font-bold ">Where in the world?</h1>
        <button class="outline-none border-0"><div @click="toggleDark()" class="flex items-center justify-center space-x-2 cursor-pointer">
        <img v-if="toggleDark()"  class="w-7"  src="../assets/icons/moon-svgrepo-light.svg" alt="">          
        <img v-if="toggleDark()" class="hidden w-7" :style="{display:'block'}"  src="../assets/icons/moon-svgrepo-com.svg" alt="">                      
            <p class="font-normal">Dark Mode</p>
        </div>
    </button>
    </div>
</template>