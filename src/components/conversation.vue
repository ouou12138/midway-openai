<template>
  <div class="conversation h-full w-full flex flex-col">
    <ul class="flex flex-col text-main p-20px w-full box-border flex-1 overflow-auto">
      <li
        class="flex mb-10px"
        :class="{ 'flex-row-reverse': item.role === 'user' }"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="avatar w-60px h60px rd-30px bg-white shadow shrink-0"></div>
        <div
          class="content px-10px py-10px bg-bgCll rd-10px mt-10px"
          :class="
            item.role === 'user' ? 'mr-20px ml-80px content-right' : 'ml-20px mr-80px content-left'
          "
        >
          <md :text="item.content" />
        </div>
      </li>
    </ul>

    <div class="flex flex-col w-full items-center p-20px box-border">
      <div class="w-80% h-50px rd-10px overflow-hidden shadow-md shadow-inner bg-bgCl">
        <input
          class="bg-transparent b-0 w-full h-full text-main text-5 px-10px focus-outline-none placeholder:text-tips"
          type="text"
          placeholder="在此输入"
          v-model="inputValue"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import md from "./md.vue"
import { useMagicKeys, whenever } from "@vueuse/core"
// import useModelLists from "@/api/getModels"
import convesation from "@/api/conversation"

type ConversationData = {
  content: string
  role: "assistant" | "user" | "system"
}

const list = ref<ConversationData[]>([])
const inputValue = ref("")
const loading = ref(false)
const { enter } = useMagicKeys()
whenever(enter, confirm)

async function confirm() {
  if (loading.value) return
  if (!inputValue.value.trim()) return
  loading.value = true
  try {
    let text = inputValue.value
    list.value.push({
      content: text,
      role: "user"
    })
    inputValue.value = ""
    const { code, data } = await convesation(text, {
      headers: { "Content-Type": "text/event-stream" }
    })
    if (code !== "ok") throw new Error("请求失败")
    list.value.push(data.choices[0].message)
    loading.value = false
  } catch (error) {
    loading.value = false
  }
}

// useModelLists().then((res) => {
//   console.log(res)
// })
</script>

<style scoped>
.content-left,
.content-right {
  position: relative;
  height: fit-content;
}
.content-left::before,
.content-right::after {
  content: "";
  @apply inline-block b-solid b-10px absolute;
  border-color: transparent;
}
.content-left::before {
  border-right-color: var(--background-color-3);
  left: -18px;
  top: 10px;
}
.content-right::after {
  border-left-color: var(--background-color-3);
  right: -18px;
  top: 10px;
}
</style>
