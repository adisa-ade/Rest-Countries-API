import { createRouter, createWebHistory } from "vue-router";
import CountriesViewVue from "../views/CountriesView.vue";
import CountryDetailView from "../views/CountryDetailView.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path: '/',
        name:'home',
        component: CountriesViewVue
    },
    {
        path: '/country/:name',
        name: 'country',
        component: CountryDetailView
    }
]
})

export default router 