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

<style src="@/assets/css/contact.css"></style>
