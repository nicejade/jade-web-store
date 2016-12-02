<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/theme/index.css'
import './assets/css/font.css'
import './assets/css/header.css'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
