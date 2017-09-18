<template>
  <div id="app">
    <my-head></my-head>
    <router-view name="main"></router-view>
    <!--<router-view name="sub" ref="child"></router-view>-->
  </div>
</template>

<script>
  //引入rem.js
  import rem from '../static/js/rem.js'
  //引入myhead组件
  import myHead from './components/myHead.vue'

  export default {
    name: 'app',
    data(){
        return {

        }
    },
    components:{
      myHead
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
li{
  list-style: none;
}
  a{
    text-decoration: none;
    color:#333
  }
</style>
