<template>
<div class="container">
    <h1 class="py-5 text-center ">What do you want to eat?</h1>
<div class="row row-cols-4">
        <MenuCardComponent v-for="product in products" :product="product" ></MenuCardComponent>
    </div>
</div>

</template>

<script>
import MenuCardComponent from '../components/MenuCardComponent.vue';
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'MenuRestaurant',
        components: {
        MenuCardComponent
    },
    data() {
        return {
            store,
            products: [],
        }
    },
    methods: {
        getProducts() {
            axios.get(`${this.store.apiBaseUrl}/restaurant/${this.$route.params.id}/${this.$route.params.slug}`).then((response) => {
                this.products = response.data.results.data;
                console.log(response)
            });
        },
    },
    mounted() {
        this.getProducts();
    }
    }
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

h1{
    color: $orange;
}
</style>