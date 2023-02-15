<template>
  <JumboComponent></JumboComponent>

  <div class="container mt-5 mb-5">
    <!-- <CarouselComponent></CarouselComponent> -->

    <h2 class="text-center m-4">Choose your restaurant</h2>

    <div v-if="types" class="text-center">
      <div class="form-check form-check-inline" v-for="(type, index) in types" :key="index">
        <input name="types[]" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
          @change="toggleType()" :value="type.id">
        <label class="form-check-label" for="flexSwitchCheckDefault">{{ type.name }}</label>
      </div>
      <div class="mt-3">
        <button @click="getRestaurant" class="btn mybtn">Get restaurant</button>
      </div>
    </div>

    <div v-if="restaurants" class="row row-cols-3">

      <div class="col" v-for="restaurant in restaurants" @click="">
        <CardComponent :restaurant="restaurant"></CardComponent>
      </div>
    </div>

    <ReviewCarousel></ReviewCarousel>
    <CarouselBrandComponent></CarouselBrandComponent>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import CarouselComponent from "../components/CarouselComponent.vue";
import JumboComponent from "../components/JumboComponent.vue";
import CarouselBrandComponent from "../components/CarouselBrandComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import ReviewCarousel from "../components/ReviewCarousel.vue";
export default {
  name: "HomePage",
  components: {
    JumboComponent,
    CarouselComponent,
    CarouselBrandComponent,
    CardComponent,
    ReviewCarousel,
  },
  data() {
    return {
      store,
      restaurants: [],
      types: [],
      selectedType: [],
    };
  },
  methods: {
    getRestaurant() {
      axios
        .get(`${this.store.apiBaseUrl}/restaurants`, {
          params: { types: this.selectedType },
        })
        .then((response) => {
          this.restaurants = response.data.results.restaurants;
          this.types = response.data.results.types;

          console.log(response)
        });
    },
    showRestaurant(restaurant) {
      this.selectedRestaurant = restaurant;
    },
    toggleType() {
      var checkboxes = document.querySelectorAll("input[type=checkbox]");
      this.selectedType = Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value)
      console.log(this.selectedType);
    }
  },
  mounted() {
    this.getRestaurant();
  }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;
@import "../../node_modules/vue3-carousel/dist/carousel.css";

h2 {
  color: $orange;
}

.mybtn {
  background-color: #ebb825;

  &:hover {
    background-color: $orange;
  }
}

.form-check-label {
  color: $orange;
  text-transform: capitalize;
}
</style>
