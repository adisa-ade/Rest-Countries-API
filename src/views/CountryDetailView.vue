<script setup> 
import Nav from '../components/Nav.vue';
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core'
import q from '../data/countries.json'
const route = useRoute()
const isDark = useDark()
const toggleDark = useToggle(isDark)


const countryDetail = q.find(country => country.name === route.params.name)
console.log(countryDetail)
</script>
<template>    
    <Nav :toggleDark="toggleDark"/>    
    <div class="mx-4 py-10">
    <RouterLink to="/" class="flex gap-x-2 bg-white dark:bg-dark-blue-dark-mode-elements w-32 p-3 items-center justify-center cursor-pointer rounded-lg hover:scale-110  hover:transition-all hover:duration-500 duration-500">
        <img v-if="toggleDark()" src="../assets/icons/back-svgrepo-light.svg" class="w-5" alt="">
        <img src="../assets/icons/arrow-back-long-svgrepo-com.svg" v-if="toggleDark()" class="hidden w-6" :style="{display:'block'}"  alt="">        
        <p>Back</p>
    </RouterLink>                        
            <div class="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center rounded-xl mt-14">
               <img class="w-full lg:w-2/5" :src="countryDetail.flags.png" alt=""> 
            <div>
               <div class="mt-10">                        
              <h1 class="text-3xl font-bold">{{countryDetail.name}}</h1>              
              <div class="lg:flex lg:mt-4 lg:gap-x-20">
              <div class="mt-5 lg:mt-0  space-y-3">
                <div class="flex  space-x-1">
                    <label for="nativename" class="text-lg">Native Name:</label>
                    <p id="nativename" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.nativeName}}</p>
                  </div>                  
              <div class="flex  space-x-1">
                <label for="population" class="text-lg">Population:</label>
                <p id="population" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.population}}</p>
              </div>        
              <div class="flex  space-x-1">
                <label for="region" class="text-lg">Region:</label>
               <p id="region" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.region}}</p>
              </div>
              <div class="flex  space-x-1">
                <label for="subregion" class="text-lg">Sub Region:</label>
                <p id="subregion" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.subregion}}</p>
              </div>
              <div class="flex space-x-1">
                <label for="capital" class="text-lg">Capital:</label>
               <p id="capital" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.capital}}</p>
              </div>
            </div>            
              <div class="mt-10 lg:mt-0 space-y-3">
                <div class="flex  space-x-1">
                    <label for="topleveldomain" class="text-lg">Top Level Domain:</label>
                    <p id="topleveldomain" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.topLevelDomain.toString()}}</p>
                  </div>
                  <div class="flex  space-x-1">
                    <label for="currencies" class="text-lg">Currencies:</label>
                    <p id="currencies" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.currencies.map(currency => currency.name).toString()}}</p>
                  </div>
              <div class="flex  space-x-1">
                <label for="languages" class="text-lg">Language(s):</label>
                <p id="languages" class="text-lg text-vark-gray-light-mode-input">{{countryDetail.languages.map(language => language.name).join(', ')}}</p>
              </div>                      
            </div>
        </div>                       
            <div class="mt-10">                
                <div class="flex flex-col lg:flex-row lg:gap-x-2 lg:items-center">
                    <label for="bordercountries" class="text-lg">Border Countries:</label>
                    <RouterLink to="/">
                    <div class="flex gap-4 flex-wrap lg:flex-nowrap">                    
                    <p class="bg-white dark:bg-dark-blue-dark-mode-elements p-4 rounded-lg hover:scale-110  hover:transition-all hover:duration-500 duration-500  cursor-pointer" v-for="border in countryDetail.borders"                     
                    v-if="countryDetail.hasOwnProperty('borders') === true"
                    id="bordercountries">{{border}}</p>                
                    <p v-else>-- No Land Border --</p>  
                  </div>
                </RouterLink>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>          
</template>