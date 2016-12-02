<template>
  <header>
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple mannka">
          <a href="/" class="mannka-text">MANNKA</a>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-menu theme="" default-active="0" class="el-menu-demo" mode="horizontal" @select="onHandleSelect">
            <el-menu-item index="0">{{ menuList[0] }}</el-menu-item>
            <el-menu-item index="1">{{ menuList[1] }}</el-menu-item>
            <el-menu-item index="2">{{ menuList[2] }}</el-menu-item>
            <el-menu-item index="3">{{ menuList[3] }}</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="javascript:;" class="login" @click='onLoginClick'></a></div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import HeaderComponent from 'partials/Header'

export default{
  name: 'Index',

  props: {
  },

  data () {
    return {
      activeName: 'first',
      menuList: ['HOME', 'PRODUCTS', 'COMMUNITY', 'SUPPORT']
    }
  },

  created () {
  },

  components: {
    HeaderComponent
  },

  methods: {
    onHandleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    onLoginClick () {}
  }
}
</script>