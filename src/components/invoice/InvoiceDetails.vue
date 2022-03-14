<template>
  <section class="details">
    <div class="details__back" @click="$router.go(-1)">
      <img src="@/assets/icon-arrow-left.svg" alt="arrow left icon" />
      <p>Go back</p>
    </div>
    <div class="details__actions">
      <div>
        <p>Status</p>
        <app-status-pill :stat="invoice.status"></app-status-pill>
      </div>
      <div>
        <app-button>
          <p>Edit</p>
        </app-button>
        <app-button>
          <p>Delete</p>
        </app-button>
        <app-button>
          <p>Mark as Paid</p>
        </app-button>
      </div>
    </div>
    <div class="details__info"></div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import StatusPill from "@/components/shared/StatusPill";
import ActionButton from "@/components/shared/ActionButton";
export default {
  name: "invoiceDetails",
  computed: mapState(["invoice"]),
  components: {
    "app-status-pill": StatusPill,
    "app-button": ActionButton,
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
  &__back {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 3rem;
    gap: 2rem;
    transition: transform 0.5s linear;

    p {
      font-weight: bold;
    }

    img {
      transition: 0.2s linear;
    }

    &:hover img {
      transform: translateX(-0.8rem);
    }
  }
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
  &__info {
  }
}
</style>
