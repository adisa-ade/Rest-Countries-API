<script setup>
const {country} = defineProps(['country'])
import { useRouter } from "vue-router";
const router = useRouter();

const navigateToQuiz = () => {
  router.push(`/country/${country.name}`);
};
</script>
<template>
        <div class="flex justify-center md:justify-start transition-all ease-in-out duration-500 hover:scale-110 hover:duration-500">
          <div @click="navigateToQuiz" class="w-80 md:w-72 flex flex-col rounded-xl mb-10 bg-white cursor-pointer dark:bg-dark-blue-dark-mode-elements ">
             <img class="w-full h-60 rounded-tr-xl rounded-tl-xl" :src="country.flags.png" alt=""> 
             <div class="m-5">
            <h1>{{country.name}}</h1>
            <div class="mt-5">
            <div class="flex  space-x-1">
              <label for="population">Population:</label>
              <p id="population">{{country.population}}</p>
            </div>
            <div class="flex  space-x-1">
              <label for="population">Region:</label>
              <p id="population">{{country.region}}</p>
            </div>
            <div class="flex space-x-1">
              <label for="population">Capital:</label>
              <p id="population">{{country.capital}}</p>
            </div>
          </div>
          </div>
          </div>
          </div>        
</template>