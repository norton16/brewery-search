<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">
        <img src="../src/assets/beer.png" alt="beer-icon">
      </router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  background: #ffbb00;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#nav img {
  width: 50px;
}
</style>
