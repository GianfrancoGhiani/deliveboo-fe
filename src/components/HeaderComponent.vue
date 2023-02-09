<template>
<nav class="navbar navbar-expand-lg navbar-light text-white bg-orange" >
  <div class="container">
    <a class="navbar-brand" href="#">Deliveboo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(i, index) in homeMenu" :key="index">
          <a class="nav-link active" aria-current="page" :href="i.url">{{ i.info }}</a>
        </li>
        
      </ul>
      <span class="navbar-text">
        <a class="nav-link active" aria-current="page" href="http://127.0.0.1:8000/login">login</a>

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

           
            homeMenu: [
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

</style>