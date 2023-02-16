<template>
  <nav class="navbar navbar-expand-lg navbar-light text-white bg-orange text-capitalize fixed-top">
    <div class="container sticky-top">
      <!-- logo -->
      <a class="navbar-brand text-white" href="/">Deliveboo</a>

      <!-- bottone menu toggle schermo mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- voci menu  -->
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item" v-for="(i, index) in menuPage" :key="index">
            <a class="nav-link active text-white" aria-current="page" :href="i.url">{{ i.info }}</a>
          </li>

        </ul>

        <!-- link login laravel back-end -->
        <span class="navbar-text">
          <a class="nav-link active text-white" aria-current="page" href="http://127.0.0.1:8000/login"
            target="_blank">login</a>
        </span>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "HeaderComponent",
  data: function () {
    return {


      menuPage: [
        {
          url: '/',
          info: 'home',
          id: 1,
        },
        {
          url: '/about',
          info: 'about',
          id: 2,
        },
        {
          url: '/contacts',
          info: 'contacts',
          id: 3,
        },
        {
          url: '/app-download',
          info: 'app',
          id: 3,
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.sticky-top {
  position: sticky;
  top: 0;
}
</style>