<template>
  <div id="app" class="app-container">
    <div class="logo">
      <img class="logo__img" src="./assets/logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  text-align: center;
}
.logo__img {
  max-width: 256px;
}

li {
  list-style: none;
}
</style>
