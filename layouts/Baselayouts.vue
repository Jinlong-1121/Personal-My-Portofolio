<template>
    <meta name=viewport content="width=425,initial-scale=0.6">
    <v-layout class="rounded rounded-md justify-right ">
        <v-bottom-navigation :height="50" active>
                <NuxtLink to="/">
                <v-btn>Home</v-btn>
                </NuxtLink>
                <NuxtLink to="/About">
                    <v-btn>About</v-btn>
                </NuxtLink>
                <NuxtLink to="/Skills">
                    <v-btn>Skills</v-btn>
                </NuxtLink>
<!--                 <NuxtLink to="/Education">
                    <v-btn>Education</v-btn>
                </NuxtLink> -->
                <NuxtLink to="/WorkExp">
                    <v-btn>Work</v-btn>
                </NuxtLink>
                <NuxtLink>
                    <v-btn>Experience</v-btn>
                </NuxtLink>
                <NuxtLink>
                    <v-btn>Contact</v-btn>
                </NuxtLink>
            </v-bottom-navigation>
        <v-main class="d-flex align-center justify-center">
            <slot/>
        </v-main>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
        name: 'App'

    })
}
</script>

<style scoped>
@import "~/assets/css/baselayout.css";

</style>