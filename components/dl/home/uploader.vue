<template>
  <section class="wrapper" v-if="!loading">
    <div class="header">
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
        <div class="tag">
          {{ item.tag }}
        </div>
        <div class="fans" v-if="isActive(index)">
          粉丝数 <span>{{ Math.round(output) }}</span>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between gap-6">
      <div class="core_container">
        <h3 class="title">核心优势</h3>
        <div class="card">
          <div class="card__title">释放达人力量，撬动粉丝流量</div>
          <div class="card__content">借助达人网红的知名度和对粉丝的号召力</div>
          <div class="card__title">官方平台背书，与好内容相遇</div>
          <div class="card__content">官方平台背景，内容机制完善</div>
          <div class="card__title">标准化线上交易流程，合作有保障</div>
          <div class="card__content">商业活动有完善的流程和监管，保证交易双方的利益。</div>
          <div class="card__title">优秀视频创意，爆款有据可循</div>
          <div class="card__content">找用户喜欢的视频，成为爆款的视频案例</div>
        </div>
      </div>
      <div class="demo_container">
        <h3 class="title">经典案例</h3>
        <div class="card">
          <div class="card-item"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

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
  height: 1000px;
  .header {
    @apply mt-6 w-full flex flex-col items-center;
    animation: slideTop 1s ease forwards;
    animation-delay: 0.5s;
  }
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
    .tag {
      @apply mt-4 rounded-full px-4 text-white drop-shadow-lg;
      background-color: rgba($color: $secondaryColor, $alpha: 0.8);
      box-shadow: 0 0 4px $secondaryColor;
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
@mixin title() {
  @apply text-2xl font-bold mb-4;
}
.core_container {
  .title {
    @include title();
  }
  .card {
    height: 376px;
    width: 348px;
    @apply text-white rounded-lg p-8;
    background: linear-gradient(324.33deg, #030303, #373737 98.33%, #373737 0),
      linear-gradient(325.61deg, #030303 -1.97%, #373737 98.3%, #373737 0);
    &__title {
      @apply text-base mb-2;
    }
    &__content {
      @apply text-gray-400 mb-6;
    }
  }
}
.demo_container {
  @apply flex-1;
  .title {
    @include title();
  }
  .card {
    width: 362px;
    height: 376px;
    background-color: red;
  }
}
</style>
