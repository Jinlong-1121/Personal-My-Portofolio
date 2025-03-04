
import { updateAppConfig } from '#app'
import { defuFn } from '/mnt/hgfs/D/Bima/01. FILE DEV/01. FrontEnd/02. Old/SansTech/VueJs/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "test"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
