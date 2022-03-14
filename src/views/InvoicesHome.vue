<template>
  <section class="home">
    <app-invoice-header
      @openForm="showCreateInvoice = true"
    ></app-invoice-header>
    <div>
      <app-invoices-list
        v-if="invoices.length > 0"
        :invoices="invoices"
      ></app-invoices-list>
      <app-empty-invoice v-else></app-empty-invoice>
    </div>
    <app-create-invoice
      v-if="showCreateInvoice"
      @closeForm="showCreateInvoice = false"
    ></app-create-invoice>
  </section>
</template>

<script>
import { mapState } from "vuex";
import tempData from "@/json/data";
import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import EmptyInvoice from "@/components/invoice/EmptyInvoice";
import InvoicesList from "@/components/invoice/InvoicesList";
import CreateInvoice from "@/components/invoice/CreateInvoice";
export default {
  name: "invoicesHome",
  created() {
    // api call to get invoices list if it exist
    this.$store.dispatch("setInvoices", tempData);
  },
  computed: mapState(["invoices"]),
  components: {
    "app-invoice-header": InvoiceHeader,
    "app-empty-invoice": EmptyInvoice,
    "app-invoices-list": InvoicesList,
    "app-create-invoice": CreateInvoice,
  },
  data() {
    return {
      showCreateInvoice: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(95%, 90rem);
  margin: 5rem auto;
  min-height: calc(100vh - 10rem);
}
</style>
