<template>
  <div class="shopping_cart">
    <div class="mk_container">
      <div class="py-2 fs-3 text-end" @click="store.openCart = !store.openCart">
        <i class="fa-solid fa-circle-xmark yellowButton"></i>
      </div>
      <h4 class="yellowButton">Shopping Cart</h4>
      <div class="product_list mt-5">
        <div class="cart_item d-flex py-3 justify-content-between align-items-center"
          v-for="(cartItem, index) in store.cartData" :key="index">
          <div class="d-flex align-items-center ">
            <img :src="`${store.imagBasePath}${cartItem.image_url}`" alt="" class="bordino">
            <div>
              <h5 class="colorName">{{ cartItem.name }}</h5>
              <p>$ {{ cartItem.price_sign }}{{ cartItem.price }}</p>
              <input type="number" class="w-25 me-2" v-model="cartItem.quantity" min="1" />
              <label for="quantity">Quantity</label>
            </div>
          </div>
          <span @click="removeFromCart(index)"><i class="fa-solid fa-trash"></i></span>
        </div>
      </div>
      <div class="cart_total mt-4 d-flex justify-content-between me-auto">
        <span class="fs-4">Total:</span>
        <span class="fs-4">$ {{ this.cartTotal.toFixed(2) }}</span>
      </div>
      <button class="btn mybtn mt-2" @click="checkOut()" :disabled="!store.cartData.length">Order it</button>
      <button class="btn ms-2 mybtn mt-2" @click="clearCart()" :disabled="!store.cartData.length">Clear All</button>

    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "ShoppingCartComponent",
  data() {
    return {
      store
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
    }

  },
  computed: {
    cartTotal() {
      return store.cartData.reduce((a, b) => a + b.price * b.quantity, 0);
    },

  },
  mounted() {

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
  width: 20%;
  margin-right: 10px;
  border: 1px solid $orange;
}
</style>
