<template>
  <v-app>
    <Preloader class="bg" :show="show" />
    <router-view />
  </v-app>
</template>
<script>
import Preloader from "./pages/layouts/Preloader.vue";

export default {
  components: { Preloader },
  data() {
    return {
      show: false,
    };
  },
  beforeMount() {
    this.show = true;
  },
  mounted() {
    this.show = false;
  },
  async accept() {
    this.showUpdateUI = false;
    await this.$workbox.messageSW({ type: "SKIP_WAITING" });
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap");
.v-application {
  font-family: "Quicksand", "sans-serif" !important;
}
</style>
