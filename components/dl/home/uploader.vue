<template>
  <section class="wrapper" v-if="!loading">
    <div class="title">
      <div class="text-4xl font-bold mb-3">服务博主案例</div>
      <div class="text-gray-400 text-sm mb-8">帮助博主全身心投入内容创作之中</div>
    </div>
    <div class="uploader">
      <div
        v-for="(item, index) in uploaderList"
        @mouseenter="handleHover(item, index)"
        @mouseleave="handleMove"
        :key="item.id"
        class="item"
        :class="{ active: isActive(index) }"
      >
        <img :src="item.avatar" class="img" />
        <div class="name">{{ item.name }}</div>
        <ElTag class="mt-4" effect="light" round>
          {{ item.tag }}
        </ElTag>
        <div class="fans" v-if="isActive(index)">
          粉丝数 <span>{{ Math.round(output) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
import { ElTag } from 'element-plus'

const loading = ref(true)
onMounted(() => {
  loading.value = false
})
const uploaderList = ref()
const fans = ref(0)
const activeUploader = ref(0)
const isActive = computed(() => {
  return (index: number) => {
    return activeUploader.value === index
  }
})
const output = useTransition(fans, {
  duration: 400,
  transition: TransitionPresets.easeOutExpo
})
let time: number = 0
const handleHover = (item: any, index: number) => {
  activeUploader.value = index
  fans.value = item.fans
}
const handleMove = () => {
  // fans.value = 0
}
onMounted(() => {
  uploaderList.value = [
    {
      id: '234',
      name: 'sien小慧君',
      avatar:
        'https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_2f94e00008ead9ec40767~c5_300x300.jpeg?from=2956013662',
      tag: '颜值',
      fans: 1305
    },
    {
      id: '334',
      name: 'sien小慧君',
      avatar:
        'https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_2f94e00008ead9ec40767~c5_300x300.jpeg?from=2956013662',
      tag: '颜值',
      fans: 105
    },
    {
      id: '2344',
      name: 'sien小慧君',
      avatar:
        'https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_2f94e00008ead9ec40767~c5_300x300.jpeg?from=2956013662',
      tag: '颜值',
      fans: 2301
    },
    {
      id: '224',
      name: 'sien小慧君',
      avatar:
        'https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_2f94e00008ead9ec40767~c5_300x300.jpeg?from=2956013662',
      tag: '颜值',
      fans: 842
    }
  ]
  fans.value = uploaderList.value[0].fans
})
</script>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-col items-center p-6;
  height: 600px;
}
.title {
  @apply mt-6 w-full flex flex-col items-center;
  animation: slideTop 1s ease forwards;
  animation-delay: 0.5s;
}
.uploader {
  @apply flex justify-between w-full gap-4;
  .item {
    animation: slideTop 1s ease forwards;
    height: 350px;
    @apply rounded-md flex-1 flex flex-col items-center px-10 pt-10 border-gray-500;
    transition: all 1s;
    .img {
      @apply w-20 h-20;
      border-radius: 50%;
      border: 4px solid rgba(0, 0, 0, 0.1);
    }
    .name {
      @apply text-xl font-bold mt-6;
    }
    .fans {
      @apply text-gray-500 text-lg mt-4;
      span {
        font-family: DLHuYu;
        @apply text-5xl text-black font-semibold;
        &::after {
          content: 'w';
          font-size: 28px;
        }
      }
    }
    &.active {
      @apply shadow-lg;
      margin-top: -20px;
    }
  }
}
</style>
