<template>
  <div class="page-wrap">
    <header-component></header-component>
    <div class="sidenav-placeholder"></div>
    <side-nav></side-nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderComponent from 'partials/Header'
export default{
  name: 'Frame',
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    HeaderComponent
  },
  methods: {
  }
}
</script>
