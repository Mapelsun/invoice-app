<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--clr-accent-purple);
  transition: all 0.3s;
  padding: 0.7em 1em;
  border-radius: 20rem;
  cursor: pointer;

  &:hover {
    background: var(--clr-accent-purple-hover);
  }
}
</style>
