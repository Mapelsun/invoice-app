<template>
  <section class="home">
    <app-invoice-header></app-invoice-header>
    <app-empty-invoice v-if="dataPresent"></app-empty-invoice>
  </section>
</template>

<script>
import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import EmptyInvoice from "@/components/invoice/EmptyInvoice";
export default {
  name: "invoicesHome",
  components: {
    "app-invoice-header": InvoiceHeader,
    "app-empty-invoice": EmptyInvoice,
  },
  data() {
    return {
      dataPresent: true,
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
