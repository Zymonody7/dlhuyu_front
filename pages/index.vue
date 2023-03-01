<template>
  <div>
    <DlHomeSection1></DlHomeSection1>
    <LazyDlHomeSection2 ref="section2" v-if="section2IsVisible"></LazyDlHomeSection2>
    <LazyDlHomeUploader v-if="uploaderIsVisible"></LazyDlHomeUploader>
    <!-- <div v-else style="height: 600px" ref="uploader"></div> -->
  </div>
</template>

<script setup lang="ts">
const section2 = ref()
const section2IsVisible = ref(false)

const uploader = ref()
const uploaderIsVisible = ref(true)
const { stop } = useIntersectionObserver(uploader, ([{ isIntersecting }], observerElement) => {
  console.log(isIntersecting)

  uploaderIsVisible.value = isIntersecting
  if (isIntersecting) {
    stop()
  }
})
watch(section2IsVisible, (value, oldValue) => {
  console.log(value, oldValue)
})
</script>

<style scoped></style>
