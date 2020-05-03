<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav-items">Top</router-link> |
      <router-link to="/type" class="nav-items">Type</router-link> |
      <router-link to="/class" class="nav-items">Class</router-link> |
      <router-link to="/interface" class="nav-items">Interface</router-link>
    </div>
    <router-view />
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-items {
  margin: 0 1rem;
}
</style>
