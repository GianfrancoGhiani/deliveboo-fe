<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <router-view></router-view>
  </div>
  <div class="aside_menu_shop">
    <i class="fa-brands fa-opencart" @click="store.openCart = true"></i>
    <Transition class="cart_animation">
      <div class="cart_counter" v-if="store.cartData.length > 0">
        <span>{{ store.cartData.length }}</span>
      </div>
    </Transition>
  </div>
  <Transition name="openCart">
    <ShoppingCartComponent v-if="store.openCart" />
  </Transition>

  <FooterComponent />
</template>

<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ShoppingCartComponent from './components/ShoppingCartComponent.vue';

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent
  },
  data() {
    return {
      store
    }
  },
  mounted(){
    const cartData = localStorage.getItem('cart');
    store.cartData = cartData ? JSON.parse(cartData) : [];
  }
}
</script>


<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;



.cart_animation-enter-active,
.cart_animation-leave-active {
  transition: opacity 0.5s ease;
}

.cart_animation-enter-from,
.cart_animation-leave-to {
  opacity: 0;
}



.openCart-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.openCart-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.openCart-enter-from,
.openCart-leave-to {
  transform: translateX(550px);
  // opacity: 0;
}
.aside_menu_shop {
  position: fixed;
  top: 6.5rem;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0.8rem;
  background-color: white;
  color: gray;
  font-size: 1.4rem;
  box-shadow: 0px 4px 8px -2px rgba(gray, 0.35);
  border-radius: 0.5rem 0 0 0.5rem;
  transition: all 450ms ease;
  cursor: pointer;

  &:hover {
    padding-right: 1.5rem;
  }
}
.cart_counter {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: pink;
  color: white;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
  position: absolute;
  bottom: -15px;
  left: -15px;
}

</style>