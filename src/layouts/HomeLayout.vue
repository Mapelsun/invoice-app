<template>
  <div class="container">
    <app-sidenav class="sidenav"></app-sidenav>
    <main class="main">
      <transition name="slide-fade">
        <div>
          <slot />
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
// Main layout components
import MainSidebar from "@/components/layouts/MainSidebar";
export default {
  name: "homeLayout",
  components: {
    "app-sidenav": MainSidebar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-areas: "sidebar main";
  min-height: 100vh;
  background: var(--clr-bg-dark-two);
  overflow: hidden;
}

.sidenav {
  position: fixed;
  grid-area: sidebar;
  min-height: 100%;
  height: 100%;
  width: 10rem;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  background: var(--clr-bg-dark-three);
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
.main {
  grid-area: main;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
