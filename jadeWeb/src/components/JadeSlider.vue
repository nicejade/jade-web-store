<template>
  <slider :pages="someList" :sliderinit="sliderinit">
    <!-- slot  -->
  </slider>
</template>

<script>
import Slider from 'components/slider/slider'

export default{
  name: 'JadeSlider',

  props: {
  },

  data () {
    return {
      someList: [
        {
          title: '',
          style: {
            background: 'url(src/img/testimg-1.jpg)'
          }
        },
        {
          title: 'slide1',
          style: {
            background: 'url(src/img/testimg-2.jpg)'
          }
        },
        {
          title: 'slide3',
          style: {
            background: '#4bbfc3'
          }
        }
      ],
      sliderinit: {
        currentPage: 0,  // 当前页码
        thresholdDistance: 500, // 滑动判定距离
        thresholdTime: 100, // 滑动判定时间
        autoplay: 5000, // 自动滚动[ms]
        loop: true, // 循环滚动
        direction: 'horizontal' // 方向设置，垂直滚动(vertical)
      }
    }
  },

  created () {
  },

  components: {
    Slider
  },

  methods: {
  }
}
</script>
