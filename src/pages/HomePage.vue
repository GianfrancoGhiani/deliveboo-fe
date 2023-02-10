<template>
    
        <JumboComponent></JumboComponent>
   
    <div class="container mt-5 mb-5">
        <CarouselComponent></CarouselComponent>
        <CarouselBrandComponent></CarouselBrandComponent>
        <div v-if="restaurants" class="row row-cols-3">

            <div class="col" v-for="restaurant in restaurants" @click="">
                <CardComponent :restaurant="restaurant"></CardComponent>
            </div>
        </div>
        <ReviewCarousel></ReviewCarousel>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CarouselComponent from '../components/CarouselComponent.vue';
import JumboComponent from '../components/JumboComponent.vue';
import CarouselBrandComponent from '../components/CarouselBrandComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import ReviewCarousel from '../components/ReviewCarousel.vue';
export default {
    name: 'HomePage',
    components: {
        JumboComponent,
        CarouselComponent,
        CarouselBrandComponent,
        CardComponent,
        ReviewCarousel,
    },
    data() {
        return {
            store,
            restaurants: [],
        }
    },
    methods: {
        getRestaurant() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((response) => {
                this.restaurants = response.data.results;
                console.log(response)
            });
        },
        showRestaurant(restaurant){
            this.selectedRestaurant = restaurant;
        }
    },
    mounted() {
        this.getRestaurant();
    }
}
</script>

<style lang="scss" scoped>

</style>