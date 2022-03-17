<template>
  <header class="heading">
    <div class="heading__left">
      <h1>Invoices</h1>
      <p v-if="invoiceLength > 0">
        There are {{ invoiceLength }} total invoices
      </p>
      <p v-else>No invoices</p>
    </div>
    <div class="heading__right">
      <div class="form__group filter-bar">
        <input
          readonly
          class="form__input"
          v-model.lazy="searchFilter"
          name="searchFilter"
          @focus="showFilterDropdown = true"
        />
        <app-dropdown
          v-if="showFilterDropdown"
          :items="filters"
          @selected="changeFilter"
        ></app-dropdown>
      </div>

      <app-button type="default" @click.native="$emit('openForm')">
        <img src="@/assets/icon-plus.svg" alt="plus icon" />
        <p>New Invoice</p>
      </app-button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import ActionButton from "@/components/shared/ActionButton";
import AppDropDown from "@/components/widgets/AppDropDown";
export default {
  name: "invoicesHeader",
  computed: mapState(["invoices"]),
  props: {
    invoiceLength: {
      type: Number,
    },
  },
  components: {
    "app-button": ActionButton,
    "app-dropdown": AppDropDown,
  },
  data() {
    return {
      searchFilter: "Filter by status",
      showFilterDropdown: false,
      filters: ["Paid", "Pending", "Draft", "All"],
    };
  },
  methods: {
    toggleFilter(val) {
      if (val === "All") {
        this.$emit("filteredInvoices", this.invoices);
      } else {
        const filteredArr = this.invoices.filter(
          (invoice) => invoice.status === val.toLowerCase()
        );
        this.$emit("filteredInvoices", filteredArr);
      }
    },
    changeFilter(val) {
      this.searchFilter = val;
      this.toggleFilter(val);
      this.showFilterDropdown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  margin-bottom: 4rem;
  &__right {
    display: flex;
    align-items: center;
    gap: 4rem;
    img {
      background: var(--clr-white);
      padding: 0.5em;
      border-radius: 50%;
    }
  }
  input {
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: inherit;
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
.filter-bar {
  position: relative;
}
</style>
