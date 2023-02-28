<template>
  <header class="header">
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
</script>

<style scoped lang="scss">
.header {
  @apply fixed top-0 left-0 w-full py-5 px-[10%] flex justify-between items-center z-[100] bg-transparent overflow-hidden border-b-2 border-b-gray-800;
  .logo {
    font-family: DLHuYu;
    @apply text-4xl text-white font-semibold cursor-default opacity-0;
    text-decoration: none;
    animation: slideRight 1s ease forwards;
  }
  .navbar {
    a {
      @apply inline-block text-white font-medium ml-9 opacity-0;
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
}
</style>
