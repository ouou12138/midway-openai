import { defineConfig } from "unocss"

import { presetUno, transformerDirectives, transformerVariantGroup } from "unocss"

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      //主题色
      primary: "#2979ff",
      primaryl: "#ecf5ff",
      primaryd: "#2b85e4",
      primaryn: "#a0cfff",
      success: "#19be6b",
      successl: "#dbf1e1",
      successd: "#18b566",
      successn: "#71d5a1",
      error: "#fa3534",
      errorl: "#fef0f0",
      errord: "#dd6161",
      errorn: "#fab6b6",
      warning: "#ff9900",
      warningl: "#fdf6ec",
      warningd: "#f29100",
      warningn: "#ff9900",
      info: "#909399",
      infol: "#f4f4f5",
      infod: "#82848a",
      infon: "#c8c9cc",
      //文字颜色
      main: "var(--text-color)",
      content: "var(--text-color-2)",
      tips: "var(--text-color-3)",
      light: "#c0c4cc",
      //其他
      border: "var(--border-color)",
      bgC: "var(--background-color)",
      bgCl: "var(--background-color-2)",
      bgCll: "var(--background-color-3)",
      inputC: "#dcdfe6"
    }
  },
  shortcuts: {
    bgcard: "shadow-md rd-sm p-3 bg-bgCll"
  }
})
