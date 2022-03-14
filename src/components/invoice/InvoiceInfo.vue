<template>
  <div class="info">
    <div class="row info__sender">
      <div>
        <h3 class="h3-two lead"><span>&#35;</span>{{ invoice.id }}</h3>
        <p class="p-two">{{ invoice.description }}</p>
      </div>
      <div>
        <p class="p-two">{{ invoice.senderAddress.street }}</p>
        <p class="p-two">{{ invoice.senderAddress.city }}</p>
        <p class="p-two">{{ invoice.senderAddress.postCode }}</p>
        <p class="p-two">{{ invoice.senderAddress.country }}</p>
      </div>
    </div>
    <div class="row info__receiver">
      <div>
        <div>
          <p class="p-two lead">Invoice Date</p>
          <h3 class="h3-two">
            {{ invoice.createdAt | formatDate }}
          </h3>
        </div>
        <div>
          <p class="p-two lead">Payment Due</p>
          <h3 class="h3-two">
            {{ invoice.paymentDue | formatDate }}
          </h3>
        </div>
      </div>
      <div>
        <p class="p-two lead">Bill To</p>
        <h3 class="h3-two">{{ invoice.clientName }}</h3>
        <p class="p-two">{{ invoice.clientAddress.street }}</p>
        <p class="p-two">{{ invoice.clientAddress.city }}</p>
        <p class="p-two">{{ invoice.clientAddress.postCode }}</p>
        <p class="p-two">{{ invoice.clientAddress.country }}</p>
      </div>
      <div>
        <p class="p-two lead">Sent to</p>
        <h3 class="h3-two">{{ invoice.clientEmail }}</h3>
      </div>
    </div>
    <div class="row info__tab">
      <div class="items">
        <div class="items__heading">
          <p>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <div
          class="items__list"
          v-for="(item, index) in invoice.items"
          :key="index"
        >
          <p>{{ item.name }}</p>
          <p>{{ item.quantity }}</p>
          <p><span>&#163;</span>{{ item.price | formatAmount }}</p>
          <p><span>&#163;</span>{{ item.total | formatAmount }}</p>
        </div>
      </div>
      <div>
        <p>Amount Due</p>
        <p><span>&#163;</span>{{ invoice.total | formatAmount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invoiceInfo",
  props: {
    invoice: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  background: var(--clr-bg-dark-three);
  padding: 2.4em;
  border-radius: 0.75rem;
  transition: transform 0.2s linear;

  .lead,
  h3 {
    margin-bottom: 0.8rem;
  }

  .row:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  &__sender {
    display: flex;
    justify-content: space-between;
    div:nth-child(1) {
      span {
        font-size: 1.1rem;
        color: var(--clr-grey-two);
      }
    }
    div:nth-child(2) {
      p {
        text-align: right;
      }
    }
  }

  &__receiver {
    display: flex;
    gap: 20rem;
    div:nth-child(1) {
      margin-bottom: 3rem;
    }
  }

  &__tab {
    overflow: hidden;
    background: var(--clr-bg-dark-four);
    border-radius: 0.75rem;
    & > * {
      padding: 2em;
    }
    & > div:nth-of-type(1) {
      div {
        display: flex;
        justify-content: space-between;
        p {
          flex: 1;
        }
        p:nth-child(1) {
          flex-basis: 30%;
        }
      }
      div:not(:last-of-type) {
        margin-bottom: 2.5rem;
      }
    }
    & > div:nth-of-type(2) {
      background: var(--clr-bg-dark-one);
      display: flex;
      justify-content: space-between;
      align-items: center;

      p:nth-child(2) {
        font-size: 2rem;
        font-weight: bold;
      }
    }
    .items {
      &__heading,
      &__list {
        p:nth-child(2) {
          text-align: center;
        }
        p:nth-child(3),
        p:nth-child(4) {
          text-align: right;
        }
      }
      &__list {
        p {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
