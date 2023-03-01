<template>
  <section class="section">
    <video
      muted
      loop
      autoplay
      class="video"
      src="https://res-video.hc-cdn.com/activity/zh-cn/kainian-banner/banner-video-0228.mp4"
    ></video>
    <div class="item1">
      <h1>鼎朗互娱</h1>
      <h3>为内容创作者<span>提供超预期内容变现服务</span></h3>
      <NuxtLink
        to="https://res-video.hc-cdn.com/activity/zh-cn/kainian-banner/banner-video-0228.mp4"
        class="btn"
        >开始推广</NuxtLink
      >
    </div>
    <div class="item2"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section {
  @apply relative w-full h-screen flex justify-between items-center text-black;
  padding: 70px 10% 0;
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 000;
    pointer-events: none;
    object-fit: cover;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .item1 {
    max-width: 600px;
    h3 {
      @apply opacity-0;
      font-size: 32px;
      font-weight: 700;
      animation: slideBottom 1s ease forwards;
      animation-delay: 0.7s;
      span {
        color: #fff;
        animation: fontTransition 0.5s ease forwards;
        animation-delay: 1s;
      }
      &:nth-of-type(2) {
        margin-bottom: 30px;
        animation: slideTop 1s ease forwards;
      }
    }

    h1 {
      font-family: DLHuYu;
      @apply font-bold my-[-3px] opacity-0;
      font-size: 56px;
      animation: slideRight 1s ease forwards;
      animation-delay: 1s;
    }
    p {
      font-size: 16px;
      opacity: 0;
      animation: slideLeft 1s ease forwards;
      animation-delay: 1s;
    }
    .btn {
      @apply inline-block mt-4 px-12 py-3 font-extrabold opacity-0 text-white;
      background-color: $secondaryColor;
      border-radius: 40px;
      box-shadow: 0 0 10px $secondaryColor;
      font-size: 14px;
      letter-spacing: 1px;
      text-decoration: none;
      animation: slideTop 1s ease forwards;
      animation-delay: 1s;
    }
  }
}
@keyframes fontTransition {
  0% {
    color: #fff;
  }
  100% {
    color: $primaryColor;
  }
}
</style>
