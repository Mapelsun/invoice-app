<template>
  <section class="home">
    <app-invoice-header
      @openForm="showCreateInvoice = true"
      @filteredInvoices="setFilteredInvoices"
      :invoiceLength="displayedInvoices.length"
    ></app-invoice-header>
    <div>
      <app-invoices-list
        v-if="invoices.length > 0"
        :invoices="displayedInvoices"
      ></app-invoices-list>
      <app-empty-invoice v-else></app-empty-invoice>
    </div>
    <app-create-invoice
      v-if="showCreateInvoice"
      @closeForm="showCreateInvoice = false"
    ></app-create-invoice>
    <app-loading v-if="loading"></app-loading>
  </section>
</template>

<script>
import api from "@/api/api.js";
import { mapState } from "vuex";
import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import EmptyInvoice from "@/components/invoice/EmptyInvoice";
import InvoicesList from "@/components/invoice/InvoicesList";
import CreateInvoice from "@/components/invoice/CreateInvoice";
export default {
  name: "invoicesHome",
  created() {
    this.loading = true;
    api
      .getInvoices()
      .then((response) => {
        this.loading = false;
        this.$store.dispatch("setInvoices", response.data);
        this.displayedInvoices = response.data;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
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
      loading: false,
      showCreateInvoice: false,
      displayedInvoices: [],
    };
  },
  methods: {
    setFilteredInvoices(value) {
      this.displayedInvoices = value;
    },
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
