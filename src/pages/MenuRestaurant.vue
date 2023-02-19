<template>
    <div class="container">
        <h1 class="py-5 text-center ">What do you want to eat?</h1>
        <div class="row row-cols-4">
            <MenuCardComponent v-for="(product, index) in products" :product="product" :key="product.id">
            </MenuCardComponent>
        </div>
        <div class="justify-content-center d-flex">
            <nav aria-label="Page navigation example ">
                <ul class="pagination mt-5">

                    <li class="page-item " :class="{ 'disabled': currentPage === 1 }">
                        <a class="page-link" @click="getProducts(currentPage - 1)"
                            :disabled="currentPage === 1">Previous</a>
                    </li>

                    <li class="page-item" :class="{ 'disabled': currentPage === n }" v-for="n in lastPage">
                        <a class="page-link" @click="getProducts(n)" :disabled="currentPage === n">{{ n }}</a>
                    </li>

                    <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                        <a class="page-link" @click="getProducts(currentPage + 1)"
                            :disabled="currentPage === lastPage">Next</a>
                    </li>
                </ul>
            </nav>
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
            currentPage: 1,
            lastPage: null,
            total: 0,
        }
    },
    methods: {
        getProducts(pagenum) {
            const data = {
                params: {
                    page: pagenum,
                }
            }
            axios.get(`${this.store.apiBaseUrl}/restaurant/${this.$route.params.id}/${this.$route.params.slug}`, data).then((response) => {
                this.products = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
                // console.log(response)
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

.pagination {
    cursor: pointer
}

h1 {
    color: $orange;
}

.page-link {
    color: $orange;
}
</style>