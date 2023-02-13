<template>
    <div class="py-5">
        <h2 class="text-center mt-4">Some of the brand that choose us</h2>
        <carousel :itemsToShow="8" :wrapAround="true" :transition="1000" :autoplay="1500">
            <slide v-for="(slide, index) in homePaths" :key="index">
                <div class="mt-2">
                    <img class="carousel__item" :src="slide.path" :alt="slide.alt">
                    <!--<h3 class="text-white pt-2 text-center">{{ slide.info }}<span class="dot">.</span></h3>-->
                </div>
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    name: 'CarouselBrandComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: function () {
        return {

            homePaths: [
                {
                    path: 'img/logos/100-montaditos.png',
                    alt: 'Montaditos',
                    id: 1,
                },
                {
                    path: 'img/logos/Burger-King.png',
                    alt: 'Burger King',
                    id: 2,
                },
                {
                    path: 'img/logos/Coca-Cola.png',
                    alt: 'Coca Cola',
                    id: 3,
                },
                {
                    path: 'img/logos/Costa-Cafe.png',
                    alt: 'Costa Cafe',
                    id: 4,
                },
                {
                    path: 'img/logos/dominos.png',
                    alt: 'Dominos',
                    id: 5,
                },
                {
                    path: 'img/logos/eatily.png',
                    alt: 'Eastily',
                    id: 6,
                },
                {
                    path: 'img/logos/Fanta.png',
                    alt: 'Fanta',
                    id: 7,
                },
                {
                    path: 'img/logos/Goiko.png',
                    alt: 'Goiko',
                    id: 8,
                },
                {
                    path: 'img/logos/honest-green.png',
                    alt: 'Honest Green',
                    id: 9,
                },
                {
                    path: 'img/logos/kebab.png',
                    alt: 'Kebab',
                    id: 10,
                },
                {
                    path: 'img/logos/kfc.png',
                    alt: 'Kfc',
                    id: 11,
                },
                {
                    path: 'img/logos/La-tagliatella.png',
                    alt: 'La tagliella',
                    id: 12,
                },
                {
                    path: 'img/logos/Mc-Donald.png',
                    alt: 'Mc Donald',
                    id: 13,
                },
                {
                    path: 'img/logos/Old-Wild-West.png',
                    alt: 'Old Wild West',
                    id: 14,
                },
                {
                    path: 'img/logos/pepsi.png',
                    alt: 'Pepsi',
                    id: 15,
                },
                {
                    path: 'img/logos/pizza-hut.png',
                    alt: 'Pizza Hut',
                    id: 16,
                },
                {
                    path: 'img/logos/starbucks.png',
                    alt: 'Starbucks',
                    id: 17,
                },
                {
                    path: 'img/logos/Sushi-Bar.png',
                    alt: 'Sushi Bar',
                    id: 18,
                },
                {
                    path: 'img/logos/vicio.png',
                    alt: 'Vicio',
                    id: 19,
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;
@import "../../node_modules/vue3-carousel/dist/carousel.css";


.dot {
    font-size: 30px;

}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 200px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

img {
    width: 100px;
}

h2{
    color: $orange;
}
</style>