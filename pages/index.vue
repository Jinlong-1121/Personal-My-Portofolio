<template>
    <title>HOME</title>
    <meta name=viewport content="width=1024,initial-scale=0.6">
    <v-app>
        <div class="BoxHomeContent">
            <div class="BoxHomeContent_Items">
                <div class="BoxHomeContent_Items_Inform">
                    <h2>Hi There,</h2>
                    <div style="display: flex;"><h2>I'm</h2><h3 class="SetNameColor" style="margin-left: 15px;">{{ MyName }}</h3></div>
                    <h4>I Am Into Full Stack Developer</h4>
                    <br>
                    <NuxtLink>
                        <v-btn class="AboutMeBtn" >About Me <span style="font-size: 20px;" class="mdi mdi-gesture-tap"></span></v-btn>
                    </NuxtLink>
                    <br>
                    <br>
                    <NuxtLink>
                        <v-btn class="SosmedBtn" icon="mdi mdi-linkedin"></v-btn>
                    </NuxtLink>
                    <NuxtLink>
                        <v-btn class="SosmedBtn" icon="mdi mdi-instagram"></v-btn>
                    </NuxtLink>
                    <NuxtLink>
                        <v-btn class="SosmedBtn" icon="mdi mdi-whatsapp"></v-btn>
                    </NuxtLink>
                    <NuxtLink>
                        <v-btn class="SosmedBtn" icon="mdi mdi-google-maps"></v-btn>
                    </NuxtLink>
                </div>
            </div>
            <div class="BoxHomeContent_Items">
                <img class="BoxImgAvatar" src="../assets/img/ProfilAvatar.png">
            </div>
        </div>
    </v-app>
</template>

<script>
definePageMeta({
        layout:'baselayouts'
    })

    export default {
    setup () {
        return {
            MyName:"Shandi Bima"
        }

    }
}
</script>

<style scoped>
@import "~/assets/css/index.css";
</style>