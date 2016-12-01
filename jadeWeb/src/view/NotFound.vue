<template>
  <div class="page-error">
    <h1>404</h1>
    <h4>Page Not Found</h4>
  </div>

</template>
<script>
export default{
  name: 'not-found',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.page-error {
  color: #333;
  text-align: center;
  h1 {
    margin-top: 100px;
    font-size: 160px;
  }
  h4 {
    font-size: 24px;
    margin-bottom: 40px;
  }
}
</style>
