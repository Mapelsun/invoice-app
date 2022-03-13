<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    layout() {
      return `${this.$route.meta.layout}`;
    },
  },
};
</script>

<style lang="scss">
// Font import
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;300;400;500;700&display=swap");

// Global variables
:root {
  --clr-primary: #7c5dfa;
  --clr-primary-hover: #9277ff;
  --clr-secondary: #ec5757;
  --clr-secondary-hover: rgb(255, 151, 151);

  // --clr-purple-dark: #1e2139;
  // --clr-purple-light: #252945;
  // --clr-purple-dark: #dfe3fa;
  // --clr-purple-light: #888eb0;
  // --clr-purple-dark: #7e88c3;
  // --clr-purple-light: #0c0e16;

  --clr-bg-light: #f8f8fb;
  --clr-bg-dark: #141625;
}

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
  font-family: "Spartan", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}

button,
input,
textarea,
select {
  font: inherit;
}

// Vue Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
