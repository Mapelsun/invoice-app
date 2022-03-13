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
import MainSidebar from "@/components/layouts/MainSidebar.vue";
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
}

.sidenav {
  grid-area: sidebar;
  min-height: 100%;
  height: 100%;
  width: 10rem;
  transition: all 0.3s ease-in-out;
  z-index: 2;
}
.main {
  grid-area: main;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
