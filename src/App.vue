<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<script>
export default {
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
html::-webkit-scrollbar {
  width: 8px;
}
html::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

html::-webkit-scrollbar-thumb:active {
  background-color: #999999;
}

html::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
html::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 4px;
}
html::-webkit-scrollbar-track:hover,
html::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
</style>
