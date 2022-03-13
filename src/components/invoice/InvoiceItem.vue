<template>
  <div class="inv">
    <p class="inv__id"><span>&#35;</span>RT3080</p>
    <p class="inv__date">Due &nbsp;{{ "2021-08-19" | formatDate }}</p>
    <p class="inv__name">Jensen Huang</p>
    <p class="inv__price"><span>&#163;</span>1800.90</p>
    <app-status-pill stat="paid"></app-status-pill>
    <img
      class="inv__image"
      src="@/assets/icon-arrow-right.svg"
      alt="arrow right icon"
    />
  </div>
</template>

<script>
import StatusPill from "@/components/shared/StatusPill";
export default {
  name: "invoiceItem",
  components: {
    "app-status-pill": StatusPill,
  },
};
</script>

<style lang="scss" scoped>
.inv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--clr-bg-dark-three);
  padding: 1.4em;
  border-radius: 0.75rem;
  transition: transform 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  &:hover &__image {
    transform: translateX(0.8rem);
  }
  &:not(:last-of-type) {
    margin-bottom: 1.8rem;
  }
  &__id,
  &__price {
    font-weight: bold;
  }
  &__id {
    font-size: 1.4rem;
    span {
      color: var(--clr-grey-two);
    }
  }
  &__date {
  }
  &__name {
    margin-right: 3rem;
  }
  &__price {
    font-size: 1.8rem;
    text-align: right;
  }
  &__image {
    transition: 0.2s linear;
  }
}
</style>
