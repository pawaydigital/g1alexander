<template>
  <transition id="preloader">
    <div
      class="d-flex justify-center align-center"
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
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (Boolean(this.show)) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 700);
    },
  },
};
</script>
