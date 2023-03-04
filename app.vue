<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { useWindowStore } from './store/window'

const { width, height } = useWindowSize()
const windowStore = useWindowStore()
windowStore.setWindowSize(width.value, height.value)
</script>
<style lang="scss"></style>
