<template>
  <div class="shopping_cart">
    <div class="container">
      <div class="py-2 fs-3 text-end" @click="store.openCart = !store.openCart">
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <h6>Shopping Cart</h6>
      <div class="product_list mt-5">
        <div class="cart_item d-flex py-3 align-items-center" v-for="(cartItem, index) in store.cartData"
          :key="cartItem.id" @change="store.updateCart()">

          <div class="me-2">id: {{ cartItem.product }}</div>
          <div class="me-auto">$ {{ cartItem.price.toFixed(2) }}</div>



          <label for="quantity" class="me-3">Quantity</label>
          <input type="number" id="quantity" class="me-3" style="width: 3rem" v-model="cartItem.quantity" min="1" />




          <span @click="removeFromCart(index)"><i class="fa-solid fa-trash"></i></span>
        </div>
      </div>
      <div class="cart_total d-flex justify-content-between me-auto">
        <span class="fs-4">Total:</span>
        <span class="fs-4" v-if="store.cartData">{{ this.cartTotal.toFixed(2) }}</span>
      </div>
      <div class="cart_total mt-2 d-flex justify-content-between me-auto">
        <button class="btn btn-primary" @click="invia()">Invia Ordine</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "ShoppingCartComponent",
  data() {
    return {
      store,
      order: {
        customer_firstname: "Mario",
        customer_lastname: "Rossi",
        customer_email: "mariorossi@gmail.it",
        customer_address: "via roma 100",
        customer_tel: "357847523",
        description: "Pizza buona, focaccia così, pizza all'ananas, pasta con il ketchap",
        paid: 0,
        cartTotal: 0,
        restaurant_id: 1,
        cart: store.cartData
      },
    };
  },
  methods: {
    removeFromCart(index) {
      store.cartData.splice(index, 1);
      localStorage.setItem(`cart`, JSON.stringify(store.cartData));
    },
    invia() {
      console.log(this.order);
    }
  },
  computed: {

    cartTotal() {
      if (store.cartData) {

        return store.cartData.reduce((a, b) => a + b.price * b.quantity, 0);

      } else {
        return
      }
      // return store.cartData[0].cartTotal;
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
  height: 70%;
}

.cart_item {
  border-bottom: 1px solid black;
}

.shopping_cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  min-height: 100vh;
  background-color: $white;
  box-shadow: -1px 1px 10px 0px $light_grey;
  z-index: 20;
  color: $dark_gray;

  i {
    cursor: pointer;
  }
}
</style>
