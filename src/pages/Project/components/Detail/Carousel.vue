<template>
  <div id="carousel">
    <v-carousel
      cycle
      height="400"
      delimiter-icon="mdi-minus"
      hide-delimiter-background
      show-arrows-on-hover
      class="mt-8 detail-image"
    >
      <v-carousel-item v-for="(slide, i) in images" :key="i">
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <img v-bind:src="slide.img" :alt="`image-` + slide.id" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
};
</script>
