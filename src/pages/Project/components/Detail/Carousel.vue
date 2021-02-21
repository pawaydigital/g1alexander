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
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
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
  data() {
    return {
      slides: [
        {
          id: 1,
          img:
            "https://images.unsplash.com/photo-1611095973763-414019e72400?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
        },
        {
          id: 2,
          img:
            "https://images.unsplash.com/photo-1613589524461-42663d531d5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          id: 3,
          img:
            "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
      ],
    };
  },
};
</script>
