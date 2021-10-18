<template>
<!-- <Home/> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <router-view />
  <div id="backToTop" class="" v-on:click="backToTop">Top</div><!-- sticky -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import Home from './components/Home.vue';

@Options({
  components: {
    
  },
})
export default class App extends Vue {
  private backToTop() {
      //console.log('0123456789');
      let speed=10;
      let interval_id=setInterval(function(){
        let scrolltop=document.documentElement.scrollTop;
        if(scrolltop>0){
          scrolltop=(scrolltop-speed>0)?(scrolltop-speed):0;
          speed+=20;
          window.scrollTo(0,scrolltop);
        }else{
          clearInterval(interval_id);
        }
      },16)
    }
}
</script>

<style>
@import "../static/css/project.css";
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
