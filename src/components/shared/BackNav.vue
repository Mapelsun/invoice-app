<template>
  <div class="back" @click="$router.go(-1)">
    <img src="@/assets/icon-arrow-left.svg" alt="arrow left icon" />
    <p>Go back</p>
  </div>
</template>

<script>
export default {
  name: "backNav",
};
</script>

<style lang="scss" scoped>
.back {
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
</style>
