<template>
  <header>
    <HeaderComponent />
  </header>
  App Vue
  <div>
    <router-view></router-view>
  </div>

  <FooterComponent />
  ciao

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