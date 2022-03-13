<template>
  <div class="wrapper">
    <app-invoice-item></app-invoice-item>
  </div>
</template>

<script>
import InvoiceItem from "@/components/invoice/InvoiceItem";
export default {
  name: "invoicesList",
  components: {
    "app-invoice-item": InvoiceItem,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2rem;
}
</style>
