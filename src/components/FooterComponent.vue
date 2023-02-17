<template>
    <!-- Footer -->
<footer class="text-center text-lg-start bg-orange text-muted ">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white container">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <img src="../../public/img/Deliveboo-logo-white.png" alt="">

          <!--<h6 class="text-uppercase fw-bold mb-4 text-white">
            <i class="fas fa-gem me-3 "></i>Deliveboo
          </h6>-->
          <p class="text-white">
            We're an amazing app for food delivery based in New York City.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Pages
          </h6>
          <p v-for="(i, index) in menuPage" :key="index">
            <a :href="i.url" class="text-reset">{{ i.info }}</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p v-for="(i, index) in foodCategory" :key="index">
            <a :href="i.url" class="text-reset">{{ i.info }}</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@deliveboo.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4 text-white">
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Deliveboo</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
</template>

<script>
export default {
    name: "FooterComponent",
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
            ],

            foodCategory: [
                {
                    url: '/',
                    info: 'Condition of use',
                    id: 1,
                },
                {
                    url: '/',
                    info: 'Privacy Policy',
                    id: 2,
                },
                {
                    url: '/',
                    info: 'Cookies Policy',
                    id: 3,
                },
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
img{
  max-width: 150px;
}
</style>