<template>
  <div class="shopping_cart">
    <div class="mk_container">

      <!-- bottone X all'interno del carrello -->
      <div class="py-2 fs-3 text-end" @click="store.openCart = !store.openCart">
        <i class="fa-solid fa-circle-xmark yellowButton"></i>
      </div>

      <!-- titolo  -->
      <h4 class="yellowButton">Shopping Cart</h4>
      <div class="product_list mt-5">

        <!-- nome del ristorante se cè un prodotto nel carrello  -->
        <h5 v-if="store.restaurant"> {{ store.restaurant.name }}</h5>

        <!-- inizio ciclo for per visuallizzare i prodotto aggiunti al carrello -->
        <div class="cart_item d-flex py-3 justify-content-between align-items-center"
          v-for="(cartItem, index) in store.cartData" :key="index">

          <div class="d-flex align-items-center ">

            <!-- immagine prodotto -->
            <img :src="`${store.imagBasePath}${cartItem.image_url}`" alt="" class="bordino">

            <div>

              <!-- nome prodotto -->
              <h5 class="colorName text-capitalize">{{ cartItem.name }}</h5>

              <!-- prezzo prodotto -->
              <p><span span v-if="cartItem.discount == 0">$ {{
                cartItem.price }}</span> <span v-if="cartItem.discount != 0"> $ {{ (cartItem.price - ((cartItem.price /
    100) * cartItem.discount)).toFixed(2) }}</span></p>

              <!-- bottone -   -->
              <button @click="decreaseQuantity(cartItem)" class="btn btn-link px-2" v-if="store.cartVisibility">
                <i class="fas fa-minus"></i>
              </button>

              <!-- quantità -->
              <input type="text" class="w-25 me-2 text-center myinput" v-model="cartItem.quantity" min="1" disabled />

              <!-- bottone +  -->
              <button @click="increaseQuantity(cartItem)" class="btn btn-link px-2" v-if="store.cartVisibility">
                <i class="fas fa-plus"></i>
              </button>


              <label for="quantity">Quantity</label>
            </div>

          </div>

          <!-- icona cestino  -->
          <span @click="removeFromCart(index)" v-if="store.cartVisibility"><i class="fa-solid fa-trash"></i></span>
        </div>
      </div>

      <!-- footer carrello -->
      <div class="cart_total mt-4 d-flex justify-content-between me-auto">
        <span class="fs-4">Total:</span>
        <span class="fs-4">$ {{ this.cartTotal.toFixed(2) }}</span>
      </div>
      <!-- bottone pagamento e svuota carrello -->
      <button class="btn mybtn mt-2" @click="checkOut()" :disabled="!store.cartData.length"
        v-if="store.cartVisibility">Order it</button>
      <button class="btn ms-2 mybtn mt-2" @click="clearCart()" :disabled="!store.cartData.length"
        v-if="store.cartVisibility">Clear All</button>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "ShoppingCartComponent",
  data() {
    return {
      store,

    };
  },
  methods: {
    removeFromCart(index) {
      store.cartData.splice(index, 1);
      localStorage.setItem(`cart`, JSON.stringify(store.cartData));
    },
    checkOut() {
      this.$router.push({ path: '/payment' })
    },
    clearCart() {
      localStorage.clear();
      this.$router.go(0)
      store.openCart = false;
    },

    increaseQuantity(cartItem) {
      cartItem.quantity++;
    },

    decreaseQuantity(cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      }
    },


  },
  computed: {
    cartTotal() {
      return store.cartData.reduce((a, b) => a + ((b.price - ((b.price / 100) * b.discount)) * b.quantity), 0);
    },

  },
  mounted() {
    console.log(this.restaurantId);
    // console.log(this.restaurant);
    // this.setRestaurantId();
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

.product_list {
  overflow-y: auto;
  height: 60vh;
}

.cart_item {
  border-bottom: 0.25px solid $light-grey;
}

.shopping_cart {
  position: fixed;
  padding: 30px;
  top: 0;
  right: 0;
  width: 500px;
  min-height: 100vh;
  background-color: $dark-gray;
  //box-shadow: -1px 1px 10px 0px $light_grey;
  z-index: 100000;
  color: $light_grey;

  i {
    cursor: pointer;
  }
}

.colorName {
  color: $orange;
}

.yellowButton {
  color: #EBB825;
}

.mybtn {
  background-color: #EBB825;
  font-weight: 700;

  &:hover {
    background-color: $orange;
  }
}

img {
  width: 30%;
  margin-right: 10px;
  border: 1px solid $orange;
}

.btn-link {
  color: #EBB825;

  &:hover {
    color: $orange;
  }
}

.myinput {
  color: white;
  background-color: transparent;
  border: #EBB825 1px solid;

  &:hover {
    color: $orange;
    border: $orange 1px solid;
  }
}
</style>
