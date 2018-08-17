
<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
  </div>
</template>
<script>
  import Vue from 'vue'


  export default {
    name: 'app',

    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .app-bg{

    background-size: cover;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .flex{
        justify-content: space-between;
  }
</style>

