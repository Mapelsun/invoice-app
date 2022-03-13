<template>
  <section class="home">
    <app-invoice-header></app-invoice-header>
    <app-empty-invoice v-if="dataPresent"></app-empty-invoice>
    <app-invoices-list v-else></app-invoices-list>
  </section>
</template>

<script>
import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import EmptyInvoice from "@/components/invoice/EmptyInvoice";
import InvoicesList from "@/components/invoice/InvoicesList";
export default {
  name: "invoicesHome",
  components: {
    "app-invoice-header": InvoiceHeader,
    "app-empty-invoice": EmptyInvoice,
    "app-invoices-list": InvoicesList,
  },
  data() {
    return {
      dataPresent: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: min(95%, 90rem);
  margin: 5rem auto;
  min-height: calc(100vh - 10rem);
}
</style>
