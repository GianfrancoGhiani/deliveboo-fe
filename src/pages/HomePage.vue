<template>
    <div>
        <JumboComponent></JumboComponent>
    </div>
    <div class="container mt-5 mb-5">
        <CarouselComponent></CarouselComponent>
    </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';
import JumboComponent from '../components/JumboComponent.vue';
export default {
    name: 'HomePage',
    components: {
        JumboComponent,
        CarouselComponent
    }
}
</script>

<style lang="scss" scoped>

</style>