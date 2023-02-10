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
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.ingredients}}</p>
    <a href="#" class="btn mybtn">Order it</a>
  </div>
</div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'MenuCard',
  data(){
    return{
      store,
    }
  },

  props: ['product'],
}


</script>

<style lang="scss" scoped>
  .cardMenu{
    background-color: black;
  }

  .mybtn{
    background-color: #EBB825;
  }
</style>