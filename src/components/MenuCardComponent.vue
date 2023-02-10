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
    <a href="#" class="btn mybtn"><b>Order it</b> </a>
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

  props: ['product'],
}


</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.cardMenu {
  background-color: black;
  height: 500px;
  overflow-y: hidden;
  &:hover{
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
  transform: scale(1.05);
  transition: all 1s ease-out;
  }


  .card-text {
    height: 140px;
    overflow-y: scroll;
  }

}

.mybtn {
  background-color: #EBB825;

  &:hover {
    background-color: $orange;
  }
}

// .mybtn:hover{
//     background-color: $orange;
// }
</style>