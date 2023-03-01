<template>
  <header class="header" :class="{ header_white }" ref="header">
    <a href="#" class="logo">
      <!-- <image src="@/assets/images/logo.png"></image> -->
      鼎朗互娱
    </a>
    <div class="navbar">
      <NuxtLink style="--i: 1.5" to="/">首页</NuxtLink>
      <NuxtLink style="--i: 1" to="/">解决方案</NuxtLink>
      <NuxtLink style="--i: 2" to="/">营销产品</NuxtLink>
      <NuxtLink style="--i: 3" to="/about">关于</NuxtLink>
    </div>
    <div class="">123</div>
  </header>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
const header = ref<HTMLHeadElement>()
// watch(header, () => {
//   console.log()
// })
const header_white = ref(false)
const handleScroll = () => {
  const top = document.documentElement.scrollTop
  if (top > 50) {
    header_white.value = true
  } else {
    header_white.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.header {
  @apply fixed top-0 left-0 w-screen py-5 px-[10%] flex justify-between items-center z-[100] text-black bg-transparent overflow-hidden;
  backdrop-filter: blur(8px);
  transition: background-color 0.3s;
}
.header_white {
  @apply bg-white text-gray-700;
}
.logo {
  font-family: DLHuYu;
  @apply text-4xl font-semibold cursor-default opacity-0;
  text-decoration: none;
  animation: slideRight 1s ease forwards;
}
.navbar {
  a {
    @apply inline-block font-medium ml-9 opacity-0;
    font-size: 18px;
    text-decoration: none;
    transition: 0.5s;
    animation: slideTop 0.5s ease forwards;
    animation-delay: calc(0.2s * var(--i));
    margin-bottom: -6px;
    padding-bottom: 2px;
    border-bottom: 4px solid transparent;

    &:hover,
    &.active {
      border-bottom: 4px solid $secondaryColor;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>
