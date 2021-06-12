<template>
  <div id="contact">
    <v-main class="telegram rounded btn-telegram px-1 py-1">
      <v-list-item
        class="d-inline-block"
        href="https://wa.link/s3jnla/"
        rel="noopener"
        target="_blank"
      >
        <v-icon large color="white darken-2">
          {{ mdiTelegram }}
        </v-icon>
        <span class="white--text px-3">Contacto</span>
      </v-list-item>
    </v-main>
  </div>
</template>

<script>
import { mdiTelegram } from "@mdi/js";
export default {
  data() {
    return {
      mdiTelegram,
    };
  },
};
</script>

<style>
.v-main.btn-telegram {
  position: fixed;
  z-index: 3;
  left: auto;
  top: auto;
  right: 30px;
  bottom: 30px;
}
.btn-telegram span {
  display: none;
}
.btn-telegram:hover span {
  display: initial;
}
.v-list-item {
  min-height: 0 !important;
  padding: 0;
}
</style>
