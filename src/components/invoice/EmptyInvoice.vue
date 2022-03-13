<template>
  <div class="empty">
    <img
      class="empty__image"
      src="@/assets/illustration-empty.svg"
      alt="empty illustration"
    />
    <div class="empty__details">
      <h2>There is nothing here</h2>
      <p>
        Create an invoice by clicking the<br />
        <span>New Invoice</span> button to get started
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "emptyInvoices",
};
</script>

<style lang="scss" scoped>
.empty {
  flex: 1;
  display: grid;
  place-content: center;
  &__image {
    justify-self: center;
    margin-bottom: 5rem;
  }
  &__details {
    text-align: center;
    h2 {
      margin-bottom: 2rem;
    }
    span {
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
