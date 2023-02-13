<template>
  <!-- <div class="card" style="width: 18rem;">
       <img :src="`${store.imagBasePath}${product.image_url}`" />
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.ingredients}}</p>
    <a href="#" class="btn btn-primary">Order it</a>
  </div>
</div>  -->

  <div class="card cardMenu border-warning m-3 pt-2" style="width: 18rem;">
    <img class="card-img-top" :src="`${store.imagBasePath}${product.image_url}`" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-capitalize">{{ product.ingredients }}</p>
    </div>
    <a href="#" class="btn mybtn" @click="addtoCart()"><b>Order it</b> </a>
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
    }
  },
  methods:{
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
  },

  props: ['product'],
}


</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.cardMenu {
  background-color: black;
  height: 500px;
  overflow-y: hidden;
 


  .card-text {
    height: 120px;
    overflow-y: scroll;
  }

}

.mybtn {
  background-color: #EBB825;

  &:hover {
    background-color: $orange;
  }
}
h5{
  color: $orange;
}

// .mybtn:hover{
//     background-color: $orange;
// }
</style>