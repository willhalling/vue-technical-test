<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  @import "./scss/_variables.scss";
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $body-colour;
  }

  #nav {
    padding: $default-spacing;
    border-bottom: 1px solid $body-colour;
    margin-bottom: $default-spacing;
    a {
      font-weight: bold;
      color: #000;
      &.router-link-exact-active {
        opacity: 0.5;
      }
    }
  }

  // Transition between routes
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
