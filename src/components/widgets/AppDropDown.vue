<template>
  <ul class="dropdown">
    <li
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('selected', item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "appDropdown",
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-bg-dark-four);
  border-radius: 0.5rem;
  z-index: 10;
  li {
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    &:not(:last-of-type) {
      border-bottom: 2px solid var(--clr-bg-dark-three);
    }
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
