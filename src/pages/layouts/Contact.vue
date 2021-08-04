<template>
  <div id="contact" class="telegram rounded btn-telegram px-1 py-1">
    <v-list-item
      class="d-inline-block"
      href="https://co.linkedin.com/in/g1alexander/"
      rel="noopener"
      target="_blank"
    >
      <v-icon large color="white darken-2">
        {{ mdiLinkedin }}
      </v-icon>
      <span class="white--text px-3">LinkedIn</span>
    </v-list-item>
  </div>
</template>

<script>
import { mdiLinkedin } from "@mdi/js";
export default {
  data() {
    return {
      mdiLinkedin,
    };
  },
};
</script>

<style>
#contact.btn-telegram {
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
