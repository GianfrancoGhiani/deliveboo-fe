<template>
        <div class="text-center mymargin ">
            <img id="app" src="/img/AppDownload.jpg" alt="">
            <h1 class="mt-4">Download our App in your digital store</h1>

            <div class="container">
                <div class="row mt-4">
                    <div class="col col-6">
                        <a href="#">
                            <img src="/img/apple.png" alt="">
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="#">
                            <img src="/img/google-play.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'AppDownload'
}
</script>

<style lang="scss" scoped>
#app {
    width: 50%;
}

img {
    width: 70%;
}

.mymargin {
    margin-top: 100px;
}

@media screen and (max-width: 600px) {
    #app {
        min-width: 100%;
    }

    img {
        width: 100%;
    }
}
</style>