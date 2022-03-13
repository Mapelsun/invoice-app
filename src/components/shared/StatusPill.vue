<template>
  <div
    class="pill"
    :class="
      stat === 'paid'
        ? 'paid'
        : stat === 'pending'
        ? 'pending'
        : stat === 'draft'
        ? 'draft'
        : ''
    "
  >
    <span></span>{{ stat | capitalize }}
  </div>
</template>

<script>
export default {
  name: "statusPill",
  props: {
    stat: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.pill {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 13rem;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 0.8em 1.2em;
  font-size: 1.6rem;
  letter-spacing: 0.1;
  span {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
}

.paid {
  background: rgba(#008000, 0.1);
  color: #008000;
  span {
    background: #008000;
  }
}
.pending {
  background: rgba(#d17d38, 0.1);
  color: #d17d38;
  span {
    background: #d17d38;
  }
}
.draft {
  background: rgba(#ffffff, 0.1);
  color: #ffffff;
  span {
    background: #ffffff;
  }
}
</style>
