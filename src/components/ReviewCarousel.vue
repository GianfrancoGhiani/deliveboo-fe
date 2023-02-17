<template >
    <div class="bkg mt-5">
        <div class="container">

            <div class="text-center">

                <h3 class="text-white mb-5">What <span>our clients</span> say about us <span class="dot">.</span></h3>
            </div>


            <Carousel class="cars" :wrap-around="true" :autoplay="4000" :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="slide in store.carouselcard" :key="slide">
                    <div class=" text-start mx-3 bg-transparent px-5 pb-5 rounded-3">
                        <h4>{{ slide.title }}</h4>
                        <p class="slide-content">{{ slide.content }}</p>
                        <div class="d-flex mt-2  align-items-center">
                            <p class="mb-0 ms-3 text-capitalize text-white">{{ slide.name }}</p>
                        </div>
                    </div>
                </Slide>

                <template #addons>

                    <Navigation />
                </template>
            </Carousel>


        </div>
    </div>
</template>

<script >
import { store } from '../store';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    name: 'ReviewCarousel',
    data() {
        return {
            store,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    computed: {
    numItemsToShow() {
      return this.$mq.matches ? 1 : 3;
    }
    },
    mounted() {
    this.$mq = window.matchMedia("(max-width: 768px)");
    this.$mq.addListener(this.onMediaQueryChanged);
    },
    beforeDestroy() {
    this.$mq.removeListener(this.onMediaQueryChanged);
    },
    methods: {
        onMediaQueryChanged() {
        this.$forceUpdate();
    }
  }
}

</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;



span,
h4 {
    color: $orange;
}

.cta {
    border: 0;
    background-color: $orange;
    color: white;
    padding: 10px 30px;
    border-radius: 8px;
}

.bkg {
    padding-top: 15px;
    background-color: #0F0F0F;
}

.img-cont {
    width: 60px;
    height: 60px;
    border-radius: 50%;

    img {
        height: 100%;

    }
}

h4 {
    font-size: 16px;
    font-weight: bold;
}

.slide-content {
    font-size: 12px;
    color: rgb(234, 223, 223);
}

.nomeproff {
    font-size: 14px;
    color: white;
}

.carousel__slide--next {
    opacity: 0.5;
}

.carousel__slide--prev {
    opacity: 0.5;
}

</style>