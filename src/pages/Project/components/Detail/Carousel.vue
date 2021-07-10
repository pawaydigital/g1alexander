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
        v-for="(item, i) in arrImages"
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
      imgmd: false,
    };
  },
  props: {
    images: Array,
  },
  computed: {
    arrImages() {
      if (!this.images[0].md) return this.images;
      if (this.imgmd) {
        return this.images.filter((img) => img.md === true);
      }
      return this.images.filter((img) => img.md === false);
    },
  },
  mounted() {
    this.media();
    this.mediaImg();
  },
  methods: {
    media() {
      let myFunction = (x) => {
        if (x.matches) {
          this.height = 444;
        } else {
          this.height = 244;
        }
      };

      let x = window.matchMedia("(min-width: 550px)");
      myFunction(x); // Call listener function at run time
      x.addEventListener("change", myFunction);
    },
    mediaImg() {
      let myFunction = (x) => {
        if (x.matches) {
          this.imgmd = false;
        } else {
          this.imgmd = true;
        }
      };

      let x = window.matchMedia("(min-width: 1024px)");
      myFunction(x); // Call listener function at run time
      x.addEventListener("change", myFunction);
    },
  },
};
</script>
