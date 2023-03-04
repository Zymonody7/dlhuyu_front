<template>
  <section class="wrapper">
    <div class="header">
      <div class="text-4xl font-bold mb-3">团队成员</div>
      <div class="text-gray-400 text-sm mb-8">专业团队</div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  .header {
    @apply mt-6 w-full flex flex-col items-center;
    animation: slideTop 1s ease forwards;
    animation-delay: 0.5s;
  }
}
</style>
