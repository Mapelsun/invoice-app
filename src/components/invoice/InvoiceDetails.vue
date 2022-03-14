<template>
  <div>{{ invoice }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "invoiceDetails",
  computed: mapState(["invoice"]),
};
</script>

<style lang="scss" scoped></style>
