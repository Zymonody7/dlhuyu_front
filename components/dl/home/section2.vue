<template>
  <section class="wrapper">
    <div ref="myMap" id="myMap" style="width: 300px; height: 300px"></div>
  </section>
</template>

<script setup lang="ts">
const { $eChart } = useNuxtApp()
const myMap = ref<HTMLElement>()
onMounted(() => {
  const myChart = $eChart.init(myMap.value!)
  // 指定图表的配置项和数据
  const option = {
    series: [
      {
        name: '饼图',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '河南' },
          { value: 735, name: '河北' },
          { value: 580, name: '江西' },
          { value: 484, name: '湖南' },
          { value: 300, name: '湖北' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
})
</script>

<style scoped></style>
