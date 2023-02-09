<template>
    <div class="container">
        <JumboComponent></JumboComponent>
    </div>
    <div class="container mt-5 mb-5">
        <CarouselComponent></CarouselComponent>
        <CarouselBrandComponent></CarouselBrandComponent>
        <CardComponent></CardComponent>
        <ReviewCarousel></ReviewCarousel>
    </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';
import JumboComponent from '../components/JumboComponent.vue';
import CarouselBrandComponent from '../components/CarouselBrandComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import ReviewCarousel from '../components/ReviewCarousel.vue';
export default {
    name: 'HomePage',
    components: {
        JumboComponent,
        CarouselComponent,
        CarouselBrandComponent,
        CardComponent,
        ReviewCarousel,
    }
}
</script>

<style lang="scss" scoped>

</style>