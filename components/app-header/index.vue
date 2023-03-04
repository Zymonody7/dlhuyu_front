<template>
  <header class="header" :class="{ 'header-white': headerWhite }" ref="header">
    <a href="#" class="logo">
      <!-- <image src="@/assets/images/logo.png"></image> -->
      鼎朗互娱
    </a>
    <div class="navbar">
      <NuxtLink
        v-for="(item, index) in headerList"
        :style="{ '--i': index }"
        :to="item.nav"
        @mouseover="handleHover"
        @mouseout="handleUnHover"
        >{{ item.title }}</NuxtLink
      >
    </div>
    <NuxtLink class="login" to="/login">登录</NuxtLink>
  </header>
  <div class="dropdown" :class="{ active: isShowDropdown }"></div>
</template>

<script setup lang="ts">
// 通过滚动使背景变白
const header = ref<HTMLHeadElement>()
const headerWhite = ref(false)
const handleScroll = () => {
  const top = document.documentElement.scrollTop
  if (top > 50) {
    headerWhite.value = true
  } else {
    headerWhite.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
// 通过hover使背景变白
const isShowDropdown = ref(false)
const handleHover = () => {
  headerWhite.value = true
  isShowDropdown.value = true
}
const handleUnHover = () => {
  headerWhite.value = false
  isShowDropdown.value = false
}

// headerItem列表
const headerList: headerType[] = [
  {
    id: '1',
    title: '首页',
    nav: '/'
  },
  {
    id: '2',
    title: '解决方案',
    nav: '/'
  },
  {
    id: '3',
    title: '营销产品',
    nav: '/',
    children: [
      {
        id: '3-1',
        title: '营销产品1',
        nav: '/'
      },
      {
        id: '3-2',
        title: '营销产品2',
        nav: '/'
      }
    ]
  },
  {
    id: '4',
    title: '关于',
    nav: '/about'
  }
]
</script>

<style scoped lang="scss">
.header {
  @apply fixed w-screen top-0 left-0 py-5 px-[10%] flex items-center z-50 text-black bg-transparent overflow-hidden;
  backdrop-filter: blur(8px);
  transition: background-color 0.3s;
}
.header-white {
  @apply bg-white text-gray-700;
}
.logo {
  font-family: DLHuYu;
  color: $primaryColor;
  @apply text-4xl font-semibold cursor-default opacity-0;
  text-decoration: none;
  animation: slideRight 1s ease forwards;
}
.navbar {
  flex: 1;
  margin-left: 120px;
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
.login {
  @apply px-5 py-1 text-white rounded-md cursor-pointer;
  background-color: $secondaryColor;
  transition: all 0.5s;
  /* animation: btn 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards; */
  &:hover {
    background-color: rgba($color: $secondaryColor, $alpha: 0.7);
    @apply shadow-lg;
  }
  transition: all 0.6s;
}

.dropdown {
  @apply w-full h-0 fixed top-16 z-50 bg-transparent;
  transition: all 0.3s;
  &.active {
    @apply h-40 bg-white;
  }
}
@keyframes btn {
  0% {
    background-color: $primaryColor;
  }
  100% {
    background-color: $secondaryColor;
  }
}
</style>
