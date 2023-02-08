<template>
    <div>
        <JumboComponent></JumboComponent>
    </div>
    <div class="container mt-5 mb-5">
        <CarouselComponent></CarouselComponent>
        <CarouselBrandComponent></CarouselBrandComponent>
    </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';
import JumboComponent from '../components/JumboComponent.vue';
import CarouselBrandComponent from '../components/CarouselBrandComponent.vue';
export default {
    name: 'HomePage',
    components: {
        JumboComponent,
        CarouselComponent,
        CarouselBrandComponent
    }
}
</script>

<style lang="scss" scoped>

</style>