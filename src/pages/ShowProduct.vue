<template>

    <div class="container-sm">
        <div class="py-5">
            <div class="wrap d-flex">
                <div class="tile">
                    <img :src="`${store.imagBasePath}${product.image_url}`" />
                </div>
                <div class="text ms-3">
                    <div class="color">
                        <h2>{{ product.name }}</h2>
                    </div>
                    <p class="text-capitalize">{{ product.ingredients }}</p>
                    <span>{{ product.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ShowProduct',
    data() {
        return {
            store,
            product: null
        }

    },
    methods: {
        getProduct() {
            axios.get(`${this.store.apiBaseUrl}/product/${this.$route.params.id}/${this.$route.params.slug}`).then((response) => {
                this.product = response.data.results;
                console.log(response)
            });
        },
    },
    created() {
        this.getProduct();
        console.log(this.$route.params)
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.text {
    width: 300px;
    height: 200px;
}

.color {
    color: $orange;
}
</style>