<script setup lang="ts">
import Conversation from "./components/conversation.vue"
</script>

<template>
  <div class="w-100vw h-100vh bg-bgC flex min-w-700px">
    <aside
      class="w-10vw min-w-200px bg-bgCl h-100vh shrink-0 b-0 b-r-1px b-solid b-border shadow"
    ></aside>
    <div class="flex flex-col flex-1">
      <div class="h-50px w-100% bg-bgCl shrink-0 shadow">
        <div class="text-center text-main leading-50px">对话</div>
      </div>
      <div class="flex-1 overflow-hidden">
        <Conversation />
      </div>
    </div>
  </div>
</template>
<style>
/* .a{
  flex-shr
} */
</style>
