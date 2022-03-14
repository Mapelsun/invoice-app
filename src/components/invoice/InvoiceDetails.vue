<template>
  <section class="details">
    <app-back-nav></app-back-nav>
    <div class="details__actions">
      <div>
        <p>Status</p>
        <app-status-pill :stat="invoice.status"></app-status-pill>
      </div>
      <div>
        <app-button type="edit">
          <p>Edit</p>
        </app-button>
        <app-button type="delete">
          <p>Delete</p>
        </app-button>
        <app-button type="default">
          <p>Mark as Paid</p>
        </app-button>
      </div>
    </div>
    <app-invoice-info :invoice="invoice"></app-invoice-info>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BackNav from "@/components/shared/BackNav";
import StatusPill from "@/components/shared/StatusPill";
import ActionButton from "@/components/shared/ActionButton";
import InvoiceInfo from "@/components/invoice/InvoiceInfo";
export default {
  name: "invoiceDetails",
  computed: mapState(["invoice"]),
  components: {
    "app-back-nav": BackNav,
    "app-status-pill": StatusPill,
    "app-button": ActionButton,
    "app-invoice-info": InvoiceInfo,
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  width: min(95%, 90rem);
  margin: 5rem auto;
  min-height: calc(100vh - 10rem);

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 0 2rem;
    background: var(--clr-bg-dark-three);
    padding: 1.4em;
    border-radius: 0.75rem;
    transition: transform 0.2s linear;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
}
</style>
