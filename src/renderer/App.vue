<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import products from '../components/products.vue';
// import cart from '../components/cart.vue';
// import LoginPage from './components/LoginPage.vue';
export default {
  name: 'app',
};
</script>

<style>
#app {
  transition: all 0.5s;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #007ea7;
}
</style>
