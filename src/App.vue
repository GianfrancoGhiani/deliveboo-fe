<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components:{
      HeaderComponent,
      FooterComponent,
    
  }
}
</script>

<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
App Vue
  <router-view></router-view>
  
<FooterComponent></FooterComponent>
 
  
</template>


<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;


</style>