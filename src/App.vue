<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <router-view></router-view>
  </div>

  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,

  }
}
</script>


<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
</style>