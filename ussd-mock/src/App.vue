<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HomeScreen from './components/HomeScreen.vue';

export default {
  name: 'App',
};
</script>

<style>
@import 'tailwindcss/tailwind.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
