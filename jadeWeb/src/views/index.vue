<template>
  <div id="index">
    <header-component></header-component>
    <jade-slider></jade-slider>
  </div>
</template>

<script>
import HeaderComponent from 'partials/Header'
import JadeSlider from 'components/JadeSlider'

export default{
  name: 'Index',

  props: {
  },

  data () {
    return {
    }
  },

  created () {
  },

  components: {
    HeaderComponent,
    JadeSlider
  },

  methods: {
  }
}
</script>
