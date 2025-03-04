import '@mdi/font/css/materialdesignicons.css'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
export default defineNuxtPlugin((app) => {
  
  const vuetify = createVuetify({
    // ... your configuration
    components: {
        VDatePicker
      }
  })
  app.vueApp.use(vuetify)
})