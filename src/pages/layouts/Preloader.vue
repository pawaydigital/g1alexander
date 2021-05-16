<template>
  <transition id="preloader">
    <div
      class="d-flex justify-center preloader align-center"
      v-if="show"
      style="height: 100vh;"
    >
      <v-progress-circular
        :size="70"
        :width="7"
        color="blue"
        indeterminate
      ></v-progress-circular>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>
<style scoped>
.preloader {
  z-index: 4;
}
</style>
