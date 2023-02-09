<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <router-view></router-view>
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
</style>