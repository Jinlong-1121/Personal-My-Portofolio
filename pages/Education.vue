<template>
    <v-app>
        <v-timeline style="margin: auto;" direction="horizontal" line-inset="12">
            <v-timeline-item>
            <template v-slot:opposite>
                2007 - 2012
            </template>
            SDN 08 SEMARANG
            </v-timeline-item>

            <v-timeline-item>
            <template v-slot:opposite>
                2012 - 2015
            </template>
            SMP IT ELHURRIYAH
            </v-timeline-item>

            <v-timeline-item>
            <template v-slot:opposite>
                2015 -2018
            </template>
            SMK MITRA INDUSTRI MM2100
            </v-timeline-item>
        </v-timeline>
    </v-app>
</template>

<script>
definePageMeta({
        layout:'baselayouts'
    })

export default {
    setup () {
        
        return {}
    },
    
}

</script>

<style>
@import "../assets/css/Education.css";

</style>