<template>
  <div id="carousel">
    <v-carousel
      class="mt-8"
      :height="this.height"
      delimiter-icon="mdi-minus"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in images"
        :key="i"
        :src="item.img"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        if (x.matches) {
          this.height = 444;
        } else {
          this.height = 244;
        }
      };

      let x = window.matchMedia("(min-width: 411px)");
      myFunction(x); // Call listener function at run time
      x.addEventListener("change", myFunction);
    },
  },
};
</script>
