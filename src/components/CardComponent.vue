<template>
  <!-- <h2 class="text-center">Choose your favourite restaurant</h2>
    <div class="card" style="width: 18rem;">
  <img src="../../public/img/jumbo/jumbo-2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> -->
  <div class="contenitore">
    <div class="py-1">
      <router-link :to="{ name: 'menu', params: { id: restaurant.id, slug: restaurant.slug } }">
        <div class="wrap justify-content-center">

          <div class="tile">
            <img :src="`${store.imagBasePath}${restaurant.image_url}`" />
            <div>
              <h1>{{ restaurant.name }}</h1>
            </div>
            <div class="text">
              <h2 class="animate-text text-capitalize">{{ restaurant.address }}</h2>
              <p class="animate-text text-capitalize">{{ restaurant.tel_num }}</p>
              <p v-for="(type, index) in restaurant.types" class="animate-text text-capitalize">{{ type.name }}</p>
            </div>
          </div>

        </div>
      </router-link>
    </div>
  </div>
</template>



<script>
import { store } from '../store';
export default {
  name: "CardComponent",
  data() {
    return {
      store,
    }
  },

  props: ['restaurant'],
}

</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

body {
  background-color: #eee
}

.wrap {
  margin: 20px auto 0 auto;
  width: 100%;
  display: flex;
  align-items: space-around;
  max-width: 1200px;
}

.tile {
  width: 380px;
  height: 300px;
  margin: 10px;
  background-color: #30364e;
  display: inline-block;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
  color: white;
  font-family: 'Roboto';
  border-radius: 5px;


}

.tile img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: all 0.4s ease-out;
}

.tile .text {
  /*   z-index:99; */
  position: absolute;
  padding: 30px;
  height: calc(100% - 60px);
}

.tile h1 {

  font-weight: 300;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.tile h2 {
  font-weight: 100;
  margin: 20px 0 0 0;
  font-style: italic;
  transform: translateX(200px);
}

.tile p {
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 25px;
  /*   opacity:0; */
  transform: translateX(-200px);
  transition-delay: 0.2s;
}

.animate-text {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}

.tile:hover {
  /*   background-color:#99aeff; */
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
  transform: scale(1.05);
}

.tile:hover img {
  opacity: 0.2;
}

.tile:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}

.dots {
  position: absolute;
  bottom: 20px;
  right: 30px;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  color: currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

}

.dots span {
  width: 5px;
  height: 5px;
  background-color: currentColor;
  border-radius: 50%;
  display: block;
  opacity: 0;
  transition: transform 0.4s ease-out, opacity 0.5s ease;
  transform: translateY(30px);

}

.tile:hover span {
  opacity: 1;
  transform: translateY(0px);
}

.dots span:nth-child(1) {
  transition-delay: 0.05s;
}

.dots span:nth-child(2) {
  transition-delay: 0.1s;
}

.dots span:nth-child(3) {
  transition-delay: 0.15s;
}

h1 {
  color: $orange;
  font-weight: 400;
}

.text {
  overflow-y: auto;
}
</style>