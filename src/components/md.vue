<template>
  <div v-html="html"></div>
</template>

<script setup lang="ts">
import hljs from "highlight.js"
// import "highlight.js/styles/atom-one-dark.css"
import { marked } from "marked"
const props = defineProps<{
  text: string
}>()
const html = computed(() => {
  return marked.parse(props.text, {
    highlight: (code) => hljs.highlightAuto(code).value
  })
})
</script>
