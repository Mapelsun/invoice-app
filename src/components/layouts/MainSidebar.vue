<template>
  <nav class="nav">
    <div class="nav__top">
      <div class="nav__logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <div class="nav__toggle">
        <img src="@/assets/icon-sun.svg" alt="sun icon" />
      </div>
    </div>
    <div class="nav__user">
      <img src="@/assets/image-avatar.jpg" alt="user icon" />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &__top {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid var(--clr-bg-dark-four);
    padding-bottom: 4rem;
  }
  &__logo {
    position: relative;
    height: 10rem;
    border-top-right-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 70%;
      width: 100%;
      background: var(--clr-accent-purple);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50%;
      width: 100%;
      background: var(--clr-accent-purple-hover);
      border-top-left-radius: 2.5rem;
    }

    img {
      z-index: 2;
      width: 3.5rem;
    }
  }
  &__toggle {
    align-self: center;
    cursor: pointer;
  }
  &__user {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    img {
      cursor: pointer;
      border-radius: 50%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
