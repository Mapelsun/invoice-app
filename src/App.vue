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
  --clr-accent-purple: #7c5dfa;
  --clr-accent-purple-hover: #9277ff;
  --clr-accent-red: #ec5757;
  --clr-accent-red-hover: rgb(255, 151, 151);
  --clr-grey-one: #888eb0;
  --clr-grey-two: #7e88c3;
  --clr-grey-three: #dfe3fa;
  --clr-bg-light: #f8f8fb;
  --clr-bg-dark-one: #0c0e16;
  --clr-bg-dark-two: #141625;
  --clr-bg-dark-three: #1e2139;
  --clr-bg-dark-four: #252945;
  --clr-white: #ffffff;
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
  color: var(--clr-white);
}

button,
input,
textarea,
select {
  font: inherit;
  color: inherit;
}

// Custom styles
h1 {
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: 1;
  margin-bottom: 0.8rem;
}

h2 {
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: 0.63;
}

h3 {
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.8;
}

h3.h3-two {
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.25;
}

p {
  font-family: "Spartan", sans-serif;
  font-weight: medium;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.25;
}

p.p-two {
  font-family: "Spartan", sans-serif;
  font-weight: medium;
  font-size: 1.1rem;
  line-height: 1.8rem;
  letter-spacing: 0.23;
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
