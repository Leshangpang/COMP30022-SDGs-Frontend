<template>
  <div id="app">
    <router-view></router-view><!-- 路由视图，用于渲染匹配的路由组件 -->
  </div>
</template>

<script>
  
import Login from './components/Login.vue';

export default {
  name: 'app',
  components: {
    Login
  }

}
</script>

<style>




</style>
