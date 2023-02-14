<template>
    <div class="">
      <video src="public/video/production ID_4170500.mp4" autoplay muted loop class="w-100"></video>
    </div>
</template>

<script>
export default {
    name: 'JumboComponent',
}
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: 400px;
    object-fit: cover;
    position: top;
}
video{
    width: 100%;
    object-fit: fill;
}
</style>