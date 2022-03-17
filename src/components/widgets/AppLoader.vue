<template>
  <div class="container">
    <div class="lds-hourglass"></div>
    <h3>Loading<span class="ellipsis"></span></h3>
  </div>
</template>

<script>
export default {
  name: "appLoader",
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid var(--clr-accent-purple);
  border-color: var(--clr-accent-purple) transparent var(--clr-accent-purple)
    transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
.ellipsis {
  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis steps(4, end) 1000ms infinite;
    content: "\2026";
    width: 0px;
  }
}
@keyframes ellipsis {
  to {
    width: 2rem;
  }
}
</style>
