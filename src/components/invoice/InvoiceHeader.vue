<template>
  <header class="heading">
    <div class="heading__left">
      <h2>Invoices</h2>
      <p>No invoices</p>
    </div>
    <div class="heading__right">
      <div class="form__group">
        <select
          class="form__input"
          v-model.lazy="form.searchFilter"
          name="searchFilter"
        >
          <option disabled value="">Filter by status</option>
          <option v-for="(data, index) in filters" :key="index" :value="data">
            {{ data }}
          </option>
        </select>
      </div>

      <app-button>
        <img src="@/assets/icon-plus.svg" alt="plus icon" />
        <p>New Invoice</p>
      </app-button>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton";
export default {
  components: {
    "app-button": ActionButton,
  },
  data() {
    return {
      form: {
        searchFilter: "",
      },
      filters: ["Paid", "Pending", "Draft"],
    };
  },
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  &__left {
    h2 {
      font-size: 3rem;
      font-weight: bold;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 4rem;
    img {
      background: var(--clr-white);
      padding: 0.5em;
      border-radius: 50%;
    }

    p {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--clr-white);
    }
  }
  select {
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: inherit;
    cursor: inherit;
    line-height: inherit;
    color: var(--clr-white);
    padding: 1.2em 2em;
    background: url("@/assets/icon-arrow-down.svg");
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    &:active,
    &:focus {
      outline: none;
    }

    option {
      color: var(--clr-bg-dark-three);
      padding: 0.5em 1em;
    }
  }
}
</style>
