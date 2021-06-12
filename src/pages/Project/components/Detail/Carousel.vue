<template>
  <div id="carousel">
    <v-carousel
      class="mt-8"
      :height="this.height"
      :delimiter-icon="mdiMinus"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in images"
        :key="i"
        :lazy-src="item.img"
        :src="item.img"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mdiMinus } from "@mdi/js";
export default {
  data() {
    return {
      mdiMinus,
      height: 0,
    };
  },
  props: {
    images: Array,
  },
  mounted() {
    this.media();
  },
  methods: {
    media() {
      let myFunction = (x) => {
        x.matches ? (this.height = 444) : (this.height = 244);
      };

      let x = window.matchMedia("(min-width: 550px)");
      myFunction(x); // Call listener function at run time
      x.addEventListener("change", myFunction);
    },
  },
};
</script>
