import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "@midwayjs/hooks-kit"
import AutoImport from "unplugin-auto-import/vite"
import UnoCss from "unocss/vite"

export default defineConfig({
  vite: {
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: { enabled: true }
      }),
      UnoCss()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
})
