<template>
  <div id="contact">
    <v-main class="linkedin rounded btn-telegram px-1 py-1">
      <v-list-item
        class="d-inline-block"
        href="https://t.me/g1alexander/"
        target="_blank"
      >
        <v-icon large color="white darken-2">
          mdi-telegram
        </v-icon>
        <span class="white--text px-3">Contacto</span>
      </v-list-item>
    </v-main>
  </div>
</template>

<script>
export default {};
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
