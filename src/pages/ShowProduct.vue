<template>
    <ul class="card-wrapper mymargin d-flex justify-content-center">
        <li class="card">
            <img :src="`${store.imagBasePath}${product.image_url}`" alt=''>
            <h5 class="card-title mt-2 text-center">{{ product.name }}</h5>
            <h5 class="text-center ingredient">Ingredients:</h5>
            <p class="card-text text-capitalize text-center">{{ product.ingredients }}</p>
            <button class="btn btn-primary bg-orange w-100" @click="$router.go(-1)">Back</button>

        </li>
</ul>
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
    },
    goBack() {
        // window.history.back()
        $router.go(-1)
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.card {
    width: 400px;
    background-color: #0F0F0F;

    img {
        border-radius: 0.5rem 0.5rem;
        width: 100%;
        object-fit: cover;
        mix-blend-mode: var(--card-blend-mode);

    }

    > :last-child {
        margin-bottom: 0;
    }

    &:hover,
    &:focus-within {
        --card-gradient: #24a9d5 max(8.5rem, 20vh);
    }
}

body {
    display: grid;
    place-content: center;
    justify-items: center;
    margin: 0;
    padding: 1rem;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
        helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: #444;
    background-color: #e1faf1;
}

.card h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
}

.card a {
    color: inherit;
}

.card-wrapper {
    list-style: none;
    padding: 0;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
    grid-gap: 1.5rem;
    max-width: 100vw;
    width: 120ch;
    padding-left: 1rem;
    padding-right: 1rem;
}

.card-title {
    color: $orange;
}

.card-text {
    color: white;
}

.btn {
    --bs-btn-border-color: orange;

    &:hover {
        --bs-btn-hover-bg: #ffc107;
        --bs-btn-hover-border-color: #fc8019;
        --bs-btn-active-bg: #ffc107;
        --bs-btn-active-border-color: #fc8019;
    }
}

.ingredient {
    color: #EBB825;
}</style>