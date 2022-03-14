<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-body">
          <slot> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "appModal",
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  position: relative;
  max-width: 50rem;
  width: 90%;
  margin: 0px auto;
  padding: 5rem 6rem;
  background: var(--clr-bg-dark-three);
  border-radius: 0.75rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
