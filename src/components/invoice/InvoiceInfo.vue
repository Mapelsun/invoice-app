<template>
  <div class="info">{{ invoice }}</div>
</template>

<script>
export default {
  name: "invoiceDInfo",
  props: {
    invoice: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  background: var(--clr-bg-dark-three);
  padding: 1.4em;
  border-radius: 0.75rem;
  transition: transform 0.2s linear;
}
</style>
