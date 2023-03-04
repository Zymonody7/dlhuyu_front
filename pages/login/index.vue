<template>
  <div class="login">
    <div class="login-bg" ref="loginBg">
      <!-- <div>鼎朗互娱</div>
      <div>为内容创作者<span>提供超预期内容变现服务</span></div> -->
    </div>
    <div class="login-box">
      <div class="login-form">
        <div class="login-type">
          <div class="type" :class="{ active: curLoginType === 1 }" @click="choiceLoginType(1)">
            二维码登录
          </div>
          <div class="type" :class="{ active: curLoginType === 2 }" @click="choiceLoginType(2)">
            短信验证码登录
          </div>
        </div>
        <div class="login-content">
          <div v-if="curLoginType === 1">
            <img src="https://img1.imgtp.com/2023/03/04/bpAWLHCt.png" alt="" />
          </div>
          <div>
            <ElForm>
              <ElButton>123</ElButton>
            </ElForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElForm } from 'element-plus'

definePageMeta({
  layout: 'empty-layout'
})
// 左侧背景图调整
const loginBg = ref()
const handleHover = (e: MouseEvent) => {
  const maxRotate = 100
  const { clientWidth, clientHeight } = loginBg.value
  const centerX = clientWidth / 2
  const centerY = clientHeight / 2
  let { clientX: left, clientY: top } = e
  // 鼠标位置相对卡片左上角的坐标
  const offsetX = centerX - left
  const offsetY = centerY - top

  // 将和原点的距离线性折算成旋转角度
  // 📢 X 方向移动旋转 Y 轴，Y 方向移动旋转 X 轴
  let rotateX = ((maxRotate * (offsetY - centerY)) / centerY) * -1
  let rotateY = (maxRotate * (offsetX - centerX)) / centerX

  // // 设置 CSS Variables
  loginBg.value.style.setProperty('--rotateX', rotateX)
  loginBg.value.style.setProperty('--rotateY', rotateY)
}

// 登录方式
const curLoginType = ref(1)
const choiceLoginType = (type: number) => {
  curLoginType.value = type
}
</script>

<style scoped lang="scss">
.login {
  @apply flex justify-between w-screen h-screen;
  &-bg {
    @apply h-full flex-1;
    background-image: url('https://img1.imgtp.com/2023/03/04/YiC7PCce.jpg');
    animation: animatedBackground 5s linear infinite;
    background-size: auto 120%;
    background-repeat: no-repeat;
    transition: 300ms ease-out;
    /* &:hover {
      background-position: 32px 40px;
    } */
    /* transform: translateX(calc(var(--rotateX) * 1px)) translateY(calc(var(--rotateY) * 1px)); */
  }
  &-box {
    @apply flex items-center justify-center;
    background-color: $thirdColor;
    width: 0px;
    animation: slideLoginForm 1s cubic-bezier(0.65, 0.02, 0.36, 1) forwards;
    .login-form {
      @apply bg-white shadow-lg shadow-slate-300 relative;
      margin-bottom: -50px;
      opacity: 0;
      /* @apply flex justify-center items-center; */
      animation: opcityForm 2s ease forwards;
      animation-delay: 1s;
      width: 450px;
      height: 500px;
      border-radius: 6px;
      border-top-left-radius: 0;
    }
    .login-type {
      @apply absolute flex bg-white;
      top: -50px;
      .type {
        @apply flex justify-center items-center;
        transition: all 0.5s;
        height: 50px;
        width: 10rem;
      }
      .active {
        color: $primaryColor;
        box-shadow: inset 0 5px 0 -3px $secondaryColor;
      }
    }
    .item {
      opacity: 0;
      @apply flex justify-center items-center;
      animation: opcityForm 2s ease forwards;
      animation-delay: 1s;
    }
    .title {
      @apply text-2xl font-bold;
    }
  }
}
@keyframes animatedBackground {
  0% {
    background-position: 40% 10%;
  }
  50% {
    background-position: 50% 40%;
  }
  100% {
    background-position: 40% 10%;
  }
}
@keyframes slideLoginForm {
  0% {
    width: 0;
  }
  100% {
    width: 600px;
  }
}
@keyframes opcityForm {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
