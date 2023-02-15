<template>
  <!-- <div class="card" style="width: 18rem;">
       <img :src="`${store.imagBasePath}${product.image_url}`" />
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.ingredients}}</p>
    <a href="#" class="btn btn-primary">Order it</a>
  </div>
</div>  -->
  <div class="containter-sm col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12">
    <div class="card cardMenu border-warning mt-4 p-2">
      <router-link :to="{ name: 'show', params: { id: product.id, slug: product.slug } }">
        <img class="card-img-top" :src="`${store.imagBasePath}${product.image_url}`" alt="Card image cap">
      </router-link>
      <div class="card-body">
        <h5 class="card-title text-capitalize">{{ truncateContent(product.name) }}</h5>
        <p class="card-text text-capitalize mt-3">{{ product.ingredients }}</p>
        <p class="prezzo">${{ product.price }}</p>
      </div>

      <a class="btn mybtn" @click="addtoCart()"><b>Add to Cart</b> </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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


      //se cè qualcosa nel carrello 
      if (store.cartData.length) {

        // e se il prodotto che aggiungiamo ha lo stesso id del ristorante del primo già aggiunto
        if (this.product.restaurant_id == store.cartData[0].restaurant_id) {

          //imposto quantità
          let defaultquantity = 1;

          //controllo che sia lo stesso prodotto
          let cartItem = store.cartData.find(i => i.id === this.singleProduct.id);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: `${this.product.name} add with success`
          })
          //se è lo stesso prodotto aumento solo la quantità
          if (cartItem) {
            cartItem.quantity++


          } else {

            //altrimenti pusho il nuovo prodotto con la quantià di default 1
            store.cartData.push({
              ...this.singleProduct,
              quantity: defaultquantity
            })
          }

          //salvo tutto nel localstorage 
          localStorage.setItem('cart', JSON.stringify(store.cartData));
          // console.log(cartItem);

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can\'t add product before to complete the order!',

          })
        }

      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: `${this.product.name} add with success`
        })
        //se non cè niente nel carrello aggiungo il prodotto con default quantity 1
        let defaultquantity = 1;
        store.cartData.push({
          ...this.singleProduct,
          quantity: defaultquantity
        });

        //chiamo la funzione per avere informazioni del ristorante
        store.infoRestaurant();

        //salvo il carrello 
        localStorage.setItem('cart', JSON.stringify(store.cartData));
      }
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

@media screen and (max-width: 576px) {
  .card-body {
    text-align: center;
  }
}
</style>