<template>
  <!-- <div class="card" style="width: 18rem;">
       <img :src="`${store.imagBasePath}${product.image_url}`" />
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.ingredients}}</p>
    <a href="#" class="btn btn-primary">Order it</a>
  </div>
</div>  -->
  <div class="containter-sm">
    <div class="card cardMenu border-warning mt-4 p-2">
      <router-link :to="{ name: 'show', params: { id: product.id, slug: product.slug } }">
        <img class="card-img-top" :src="`${store.imagBasePath}${product.image_url}`" alt="Card image cap">
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ truncateContent(product.name) }}</h5>
        <p class="card-text text-capitalize mt-3">{{ product.ingredients }}</p>
        <p class="prezzo">${{ product.price }}</p>
      </div>

      <a href="#" class="btn mybtn" @click="addtoCart()"><b>Order it</b> </a>
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
      singleProduct: this.product,
      contentMaxLen: 15,
    }
  },
  methods: {
    addtoCart() {
      let defaultquantity = 1;
      let cartItem = store.cartData.find(i => i.id === this.singleProduct.id);
      if (cartItem) {
        cartItem.quantity++
      } else {
        store.cartData.push({
          ...this.singleProduct,
          quantity: defaultquantity
        })
      }
      localStorage.setItem('cart', JSON.stringify(store.cartData));
      console.log(store.shoppingCart, store.cartData);
    },
    truncateContent(text) {
      if (text.length > this.contentMaxLen) {
        return text.substr(0, this.contentMaxLen) + "...";
      }
      return text;
    },
  },

  props: ['product'],
}


</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.cardMenu {
  background-color: black;
  height: 500px;
  overflow: hidden;



  .card-text {
    height: 120px;
    overflow-y: scroll;
  }

}

.card-img-top {
  height: 220px;
  object-fit: contain;
}

.mybtn {
  background-color: #EBB825;

  &:hover {
    background-color: $orange;
  }
}

h5 {
  color: $orange;
}

.prezzo {
  position: absolute;
  top: 8px;
  left: 10px;
  color: $orange;
  background-color: rgba(0, 0, 0, 0.445);
  font-weight: 600;
  border-radius: 8px;
  padding: 0 5px;
}
</style>