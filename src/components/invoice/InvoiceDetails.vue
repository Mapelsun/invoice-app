<template>
  <div>
    <section class="details">
      <app-back-nav></app-back-nav>
      <div class="details__actions">
        <div>
          <p>Status</p>
          <app-status-pill :stat="invoice.status"></app-status-pill>
        </div>
        <div>
          <app-button
            type="edit"
            v-if="invoice.status === 'draft'"
            @click.native="showEditInvoice = true"
          >
            <p>Edit</p>
          </app-button>
          <app-button type="delete" @click.native="showModal = true">
            <p>Delete</p>
          </app-button>
          <app-button
            type="default"
            v-if="invoice.status !== 'paid' && invoice.status !== 'draft'"
            @click.native="markAsPaid"
          >
            <p>Mark as Paid</p>
          </app-button>
        </div>
      </div>
      <app-invoice-info :invoice="invoice"></app-invoice-info>
    </section>
    <app-modal v-if="showModal" @close="showModal = false">
      <div class="delete">
        <div class="delete__text">
          <h2>Confirm Deletion</h2>
          <p class="p-two">
            Are you sure you want to delete <span>&#35;</span>{{ invoice.id }}?
            This action cannot be undone.
          </p>
        </div>
        <div class="delete__btns">
          <app-button type="edit" @click.native="showModal = false">
            <p>Cancel</p>
          </app-button>
          <app-button type="delete" @click.native="deleteItem">
            <p>Delete</p>
          </app-button>
        </div>
      </div>
    </app-modal>
    <app-edit-invoice
      v-if="showEditInvoice"
      @closeForm="showEditInvoice = false"
    ></app-edit-invoice>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { mapState } from "vuex";
import BackNav from "@/components/shared/BackNav";
import StatusPill from "@/components/shared/StatusPill";
import ActionButton from "@/components/shared/ActionButton";
import InvoiceInfo from "@/components/invoice/InvoiceInfo";
import AppModal from "@/components/widgets/AppModal";
import EditInvoice from "@/components/invoice/EditInvoice";
export default {
  name: "invoiceDetails",
  computed: mapState(["invoices", "invoice"]),
  components: {
    "app-back-nav": BackNav,
    "app-status-pill": StatusPill,
    "app-button": ActionButton,
    "app-invoice-info": InvoiceInfo,
    "app-modal": AppModal,
    "app-edit-invoice": EditInvoice,
  },
  data() {
    return {
      showModal: false,
      showEditInvoice: false,
    };
  },
  methods: {
    deleteItem() {
      api
        .deleteInvoice(this.invoice.id)
        .then((response) => {
          console.log(response);
          this.showModal = false;
          this.$router.go(-1);
        })
        .catch((err) => console.log(err));
    },
    markAsPaid() {
      let data = { status: "paid" };
      api
        .markInvoiceAsPaid(this.invoice.id, data)
        .then((response) => {
          console.log(response);
          this.showModal = false;
          this.$router.go(-1);
        })
        .catch((err) => console.log(err));
    },
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

.delete {
  &__text {
    margin-bottom: 2rem;
    h2 {
      margin-bottom: 1.5rem;
    }
    span {
      font-size: 1.1rem;
      color: var(--clr-grey-two);
    }
  }
  &__btns {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
}
</style>
