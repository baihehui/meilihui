<template>
  <div id="app">
    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    <div>
   <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
*{
  padding:0;
  margin:0;
}
body,html{
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
