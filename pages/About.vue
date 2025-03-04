<template>
    <v-app>
        <div class="BoxAboutContent">
            <div class="BoxAboutContent_Items">
                <div class="SpanProfilImg">
                    <img class="ImageProfil" src="../assets/img/Profil.png">
                </div>
            </div>
            <div class="BoxAboutContent_Items">
                <div class="TextingContent">
                    <h3>I'M Shandi Bima</h3>
                    <h3>Full Stack Developer</h3>
                    <h3>I am a Full-Stack developer based in Bekasi, Indonesia.</h3>
                    <br/>
                    <p>Currently I am focused on achieving work results and have significant capabilities in Information Technology 
                        <br/>(ERP, Infrastructure, IT Security, Digital Transformation).I am able to improve and improve team performance, 
                        <br/>customer satisfaction in various business models, as well as building good collaboration with stakeholders 
                        <br/>both internally and externally. I am looking for opportunities to contribute further in the IT Development department 
                        <br/>to apply the knowledge and interests that I have. </p>
                    <br/>
                    <!-- <h3>Email : Shandibima47@gmail.com</h3> -->
                    <!-- <h3>Phone : 087856248180</h3> -->
                    <br/>
                    <v-btn>My Resume</v-btn>
                </div>
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
        

        return {}
    }
}
</script>

<style scoped>
@import "~/assets/css/About.css"
</style>