<template>
  <!-- <div class="card" style="width: 18rem;">
       <img :src="`${store.imagBasePath}${product.image_url}`" />
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.ingredients}}</p>
    <a href="#" class="btn btn-primary">Order it</a>
  </div>
</div>  -->

  <div class="card cardMenu m-3" style="width: 18rem;">
    <img class="card-img-top" :src="`${store.imagBasePath}${product.image_url}`" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.ingredients }}</p>
      <button class="btn mybtn" @click="addProduct(product), store.updateCart()">Order it</button>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: 'MenuCard',
  data() {
    return {
      store,
    }
  },
  methods: {
    addProduct(product) {

      let cartItem = store.cartData.find(i => i.product === product.id);

      if (cartItem) {
        cartItem.quantity++
      } else {
        store.cartData.push({
          product: product.id,
          quantity: 1,
          price: product.price
        })

        localStorage.setItem(`cart`, JSON.stringify(store.cartData));

        // store.cartData.push({
        //   ...this.singleProduct,
        //   quantity: defaultquantity
        // })
      }

    }
  },

  props: ['product'],
}


</script>

<style lang="scss" scoped>
.cardMenu {
  background-color: black;
}

.mybtn {
  background-color: #EBB825;
}
</style>