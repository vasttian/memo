<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link :to="{name: 'home'}">首页</router-link></li>
          <li><router-link :to="{name: 'time-entries'}">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <left-sidebar></left-sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftSidebar from './components/LeftSidebar.vue';

  export default {
    name: 'app',
    components: {
      LeftSidebar,
    },
  }
</script>

<style>
</style>
