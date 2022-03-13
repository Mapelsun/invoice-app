<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Basic default global reset
html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
}

button,
input,
textarea,
select {
  font: inherit;
}
</style>
