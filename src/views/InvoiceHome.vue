<template>
  <section class="home">
    <app-invoice-header></app-invoice-header>
    <app-empty-invoice></app-empty-invoice>
  </section>
</template>

<script>
import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import EmptyInvoice from "@/components/invoice/EmptyInvoice";
export default {
  name: "invoiceHome",
  components: {
    "app-invoice-header": InvoiceHeader,
    "app-empty-invoice": EmptyInvoice,
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
