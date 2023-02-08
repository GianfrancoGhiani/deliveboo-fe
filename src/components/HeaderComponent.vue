<template>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contacts">contacts</router-link>

</template>

<script>
export default {
    name: "HeaderComponent",
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
// @use "../assets/styles/partials/mixins" as *;

.active_nav_link {
    // color: $mk_white;
    font-weight: 900;
}

.mk_container {
    // background-color: $mk_bg_pink;
    width: 100%;
    padding: .2rem 0;
}

.mk_nav_flex {
    // @include mk_dflex_between;
    width: 80%;
    margin: 0 auto;
}

.mk_logo_nav {
    width: 45px;
    padding: .25rem;
    cursor: pointer;
}

.mk_ul_flex {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;

    li {
        margin-left: 30px;
        cursor: pointer;
        font-weight: 600;
    }

    a:hover {
        // color: $mk_white;
    }
}
</style>