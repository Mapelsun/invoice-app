<template>
  <transition name="create">
    <div class="create-mask">
      <div class="create-container">
        <app-invoice-edit-form
          ref="userFormEdit"
          @close="$emit('closeForm')"
        ></app-invoice-edit-form>
      </div>
      <div class="create-btns">
        <app-button type="draft" @click.native="$emit('closeForm')">
          <p>Cancel</p>
        </app-button>
        <app-button type="default" @click.native="saveEditedInvoice">
          <p>Save Changes</p>
        </app-button>
      </div>
    </div>
  </transition>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton";
import InvoiceEditForm from "@/components/invoice/InvoiceEditForm";
export default {
  name: "editInvoice",
  components: {
    "app-button": ActionButton,
    "app-invoice-edit-form": InvoiceEditForm,
  },
  methods: {
    saveEditedInvoice() {
      this.$refs.userFormEdit.submitForm("send");
    },
  },
};
</script>

<style lang="scss" scoped>
.create {
  position: relative;
}
.create-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 10rem;
  width: min(50%, 60rem);
  height: 100%;
  transition: all 0.3s ease-in-out;
  background: var(--clr-bg-dark-three);
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  transition: opacity 0.3s ease;
  padding: 5rem 4rem;
  padding-bottom: 12rem;
}

.create-btns {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: var(--clr-bg-dark-four);
  padding: 3rem 4rem;
  border-top-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  .first {
    margin-right: auto;
  }
}

.create-enter {
  opacity: 0;
}

.create-leave-active {
  opacity: 0;
}

.create-container {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 0.5rem;
  border-radius: 2px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--clr-bg-dark-four);
  border-radius: 8px;
}
.create-enter .create-container,
.create-leave-active .create-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
