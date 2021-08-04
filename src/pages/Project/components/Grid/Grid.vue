<template>
  <v-row>
    <v-col
      cols="12"
      xs="12"
      sm="6"
      lg="4"
      v-for="(slide, i) in projects"
      :key="i"
    >
      <v-card color="secondary" class="mx-auto" max-width="344">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <v-img
            :lazy-src="slide.img"
            :src="slide.img"
            width="auto"
            height="auto"
          ></v-img>
        </v-lazy>

        <v-card-title class="font-weight-bold">
          {{ slide.name }}
        </v-card-title>

        <v-card-actions>
          <v-btn @click="after(slide.url)" color="btn lighten-2" small text>
            Mirar proyecto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    after(slug) {
      this.$router.push(slug);
    },
  },
};
</script>
