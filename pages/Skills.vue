<template>
    <v-app>
        <div class="SkillsContent">
            <div class="Showtherecontent">
                <ejs-dashboardlayout style="margin: auto;" id='defaultLayout' :cellSpacing="spacing" :rows="3" :columns="9">
                    <v-btn id="one" data-row="0" data-col="0" prepend-icon="$vuetify" color="green" stacked size="x-large" class="e-panel IconBtn e-drag" >VueJs</v-btn>
                    <v-btn id="two" data-row="0" data-col="1" prepend-icon="mdi mdi-android" color="green" stacked size="x-large" class="e-panel IconBtn e-drag" >Android</v-btn>
                    <v-btn id="three" data-row="0" data-col="2" prepend-icon="mdi mdi-angular" color="red" size="x-large" stacked class="e-panel IconBtn e-drag">Angular</v-btn>
                    <v-btn id="four" data-row="0" data-col="3"  prepend-icon="mdi mdi-aws" color="yellow" stacked size="x-large" class="e-panel IconBtn e-drag">Aws</v-btn>
                    <v-btn id="five" data-row="0" data-col="4"  prepend-icon="mdi mdi-bootstrap" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">BootStrap</v-btn>
                    <v-btn id="six" data-row="0" data-col="5"  prepend-icon="mdi mdi-dot-net" color="purple" stacked size="x-large" class="e-panel IconBtn e-drag">.Net</v-btn>
                    <v-btn id="seven" data-row="0" data-col="6"  prepend-icon="mdi mdi-docker" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">Docker</v-btn>
                    <v-btn id="eight" data-row="0" data-col="7"  prepend-icon="mdi mdi-firebase" color="orange" stacked size="x-large" class="e-panel IconBtn e-drag">Firebase</v-btn>
                    <v-btn id="nine" data-row="0" data-col="8"  prepend-icon="mdi mdi-language-csharp" color="purple" stacked size="x-large" class="e-panel IconBtn e-drag">C#</v-btn>
                    <v-btn id="ten" data-row="1" data-col="0"  prepend-icon="mdi mdi-language-css3" color="red" stacked size="x-large" class="e-panel IconBtn e-drag">Css3</v-btn>
                    <v-btn id="eleven" data-row="1" data-col="1"  prepend-icon="mdi mdi-language-html5" color="red" stacked size="x-large" class="e-panel IconBtn e-drag">Html 5</v-btn>
                    <v-btn id="twelve" data-row="1" data-col="2"  prepend-icon="mdi mdi-language-javascript" color="yellow" stacked size="x-large" class="e-panel IconBtn e-drag">JavaScript</v-btn>
                    <v-btn id="thirteen" data-row="1" data-col="3"  prepend-icon="mdi mdi-language-php" color="purple" stacked size="x-large" class="e-panel IconBtn e-drag">Php</v-btn>
                    <v-btn id="fourteen" data-row="1" data-col="4"  prepend-icon="mdi mdi-language-typescript" color="yellow" stacked size="x-large" class="e-panel IconBtn e-drag">TypeScript</v-btn>
                    <v-btn id="fifteen" data-row="1" data-col="5"  prepend-icon="mdi mdi-language-xaml" color="red" stacked size="x-large" class="e-panel IconBtn e-drag">Xaml</v-btn>
                    <v-btn id="sixteen" data-row="1" data-col="6"  prepend-icon="mdi mdi-laravel" color="red" stacked size="x-large" class="e-panel IconBtn e-drag">Laravel</v-btn>
                    <v-btn id="seventeen" data-row="1" data-col="7"  prepend-icon="mdi mdi-microsoft-visual-studio"  color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">Vs</v-btn>
                    <v-btn id="eighteen" data-row="1" data-col="8"  prepend-icon="mdi mdi-microsoft-visual-studio-code" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">VsCode</v-btn>
                    <v-btn id="nineteen" data-row="2" data-col="0"  prepend-icon="mdi mdi-server-network" color="deep-orange-darken-1" stacked size="x-large" class="e-panel IconBtn e-drag">Oracle</v-btn>
                    <v-btn id="twenty" data-row="2" data-col="1"  prepend-icon="mdi mdi-nodejs" color="green" stacked size="x-large" class="e-panel IconBtn e-drag">NodeJs</v-btn>
                    <v-btn id="twenty-one" data-row="2" data-col="2"  prepend-icon="mdi mdi-npm" color="yellow" stacked size="x-large" class="e-panel IconBtn e-drag">Npm</v-btn>
                    <v-btn id="twenty-two" data-row="2" data-col="3"  prepend-icon="mdi mdi-nuxt" color="green" stacked size="x-large" class="e-panel IconBtn e-drag">Nuxt</v-btn>
                    <v-btn id="twenty-three" data-row="2" data-col="4"  prepend-icon="mdi mdi-react" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">React</v-btn>
                    <v-btn id="twenty-four" data-row="2" data-col="5"  prepend-icon="mdi mdi-tailwind" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">TailWind</v-btn>
                    <v-btn id="twenty-five" data-row="2" data-col="6"  prepend-icon="mdi mdi-xamarin" color="orange" stacked size="x-large" class="e-panel IconBtn e-drag">Xamarin</v-btn>
                    <v-btn id="twenty-six" data-row="2" data-col="7"  prepend-icon="mdi mdi-database" color="yellow-lighten-5" stacked size="x-large" class="e-panel IconBtn e-drag">SqlServer</v-btn>
                    <v-btn id="twenty-seven" data-row="2" data-col="8"  prepend-icon="mdi mdi-server" color="light-blue-accent-3" stacked size="x-large" class="e-panel IconBtn e-drag">Mysql</v-btn>
                    <v-btn id="twenty-eight" data-row="3" data-col="0"  prepend-icon="mdi mdi-google-cloud" color="yellow-lighten-5" stacked size="x-large" class="e-panel IconBtn e-drag">Google Cloud</v-btn>
                    <v-btn id="twenty-nine" data-row="3" data-col="1"  prepend-icon="mdi mdi-database" color="light-blue-accent-3" stacked size="x-large" class="e-panel IconBtn e-drag">Google BigQuery</v-btn>
                    <v-btn id="thirty" data-row="3" data-col="2"  prepend-icon="mdi mdi-server" color="light-blue-accent-3" stacked size="x-large" class="e-panel IconBtn e-drag">Google Storage</v-btn>
                    <v-btn id="thirty-one" data-row="3" data-col="3"  prepend-icon="mdi mdi-language-python" color="yellow" stacked size="x-large" class="e-panel IconBtn e-drag">Python</v-btn>
                    <v-btn id="thirty-two" data-row="3" data-col="4"  prepend-icon="mdi mdi-microsoft-windows" color="green" stacked size="x-large" class="e-panel IconBtn e-drag">IIS</v-btn>
                    <v-btn id="thirty-three" data-row="3" data-col="5"  prepend-icon="mdi mdi-language-python" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">RPA Python</v-btn>
                    <v-btn id="thirty-four" data-row="3" data-col="6"  prepend-icon="mdi mdi-dot-net" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">ASP .Net</v-btn>
                    <v-btn id="thirty-five" data-row="3" data-col="7"  prepend-icon="mdi mdi-api" color="blue" stacked size="x-large" class="e-panel IconBtn e-drag">ASP Web Api</v-btn>
                    <v-btn id="thirty-six" data-row="3" data-col="8"  prepend-icon="mdi mdi-code-json" color="green" stacked size="x-large" class="e-panel IconBtn e-drag">Json</v-btn>
                </ejs-dashboardlayout>
            </div>
        </div>
    </v-app>
</template>

<script>

import { DashboardLayoutComponent } from "@syncfusion/ej2-vue-layouts";
definePageMeta({
        layout:'baselayouts'
    })

    export default {
        components: {
        'ejs-dashboardlayout': DashboardLayoutComponent
    },
    setup () 
        {
            return {

            }
        },
        data: function() {
    return {
        count: 9,
        spacing: [1,1]
    };
}
    }
</script>

<style>
@import "../assets/css/Skills.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
#defaultLayout .e-panel .e-panel-container {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
}
#defaultLayout .e-panel {
  transition:none !important;
}
</style>