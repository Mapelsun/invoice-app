<template>
  <div class="wrapper">
    <app-invoice-item
      v-for="invoice in invoices"
      :key="invoice.id"
      :invoice="invoice"
    ></app-invoice-item>
  </div>
</template>

<script>
import InvoiceItem from "@/components/invoice/InvoiceItem";
export default {
  name: "invoicesList",
  components: {
    "app-invoice-item": InvoiceItem,
  },
  props: {
    invoices: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2rem;
}
</style>
