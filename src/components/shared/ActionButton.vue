<template>
  <button
    class="btn"
    :class="
      type === 'edit'
        ? 'edit'
        : type === 'delete'
        ? 'delete'
        : type === 'discard'
        ? 'discard'
        : type === 'draft'
        ? 'draft'
        : 'default'
    "
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "actionButton",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;
  padding: 0.7em 1em;
  border-radius: 20rem;
  cursor: pointer;
}

.default {
  background: var(--clr-accent-purple);
  &:hover {
    background: var(--clr-accent-purple-hover);
  }
}
.edit {
  background: var(--clr-bg-dark-four);
  &:hover {
    background: var(--clr-grey-one);
  }
}
.delete {
  background: var(--clr-accent-red);
  &:hover {
    background: var(--clr-accent-red-hover);
  }
}
.discard {
  background: var(--clr-white);
  color: var(--clr-grey-one);
  &:hover {
    background: var(--clr-grey-three);
  }
}
.draft {
  background: var(--clr-bg-dark-three);
  color: var(--clr-grey-one);
  &:hover {
    background: var(--clr-grey-three);
  }
}
</style>
