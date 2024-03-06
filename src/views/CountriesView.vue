<script setup>
import {ref, watch} from "vue"
import Nav from '../components/Nav.vue'
import Card from '../components/Card.vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
  
import q from '../data/countries.json'

const countries = ref(q)
const search = ref("")
const filterByRegion = ref("")

watch(search, () => {   
  countries.value = q.filter((country) => country.name.toLowerCase().startsWith(search.value.toLowerCase())) 
})

watch(filterByRegion, () => {  
  if(filterByRegion.value === ""){
    countries.value = q.map(country => country)
  }
  else{
    countries.value = q.filter(country => country.region.toLowerCase() === filterByRegion.value.toLowerCase())     
  }  
})
</script>
<template>
    <Nav :toggleDark="toggleDark"/>    
    <div class="my-10 mx-4 space-y-7 md:space-y-0 flex flex-col md:flex-row md:items-center md:justify-between">    
        <div class="search relative">
          <img v-if="toggleDark()" class="w-7 absolute top-5 left-10 z-10" src="../assets/icons/search-svgrepo-light.svg" alt="serach-icon">
          <img v-if="toggleDark()" class="w-7 absolute top-5 left-10 z-10" :style="{display:'block'}" src="../assets/icons/search-svgrepo-com.svg" alt="serach-icon">
          <input v-model="search" class="py-5 px-20 w-11/12 rounded-lg bg-white dark:bg-dark-blue-dark-mode-elements outline-none" type="text" placeholder="Search for a country...">
        </div>
        <div>
          <select v-model="filterByRegion" name="regions" id="" class="bg-white dark:bg-dark-blue-dark-mode-elements outline-none rounded-lg cursor-pointer border-0 w-72 py-4 px-2">            
            <option class="p-4" value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>        
          </select>
        </div>
      </div>
      <div class="md:flex flex-wrap md:justify-center mx-4 md:gap-x-12">
      <Card v-for="country in countries" :key="country.name" :country="country"/>
      </div>   
    </template>