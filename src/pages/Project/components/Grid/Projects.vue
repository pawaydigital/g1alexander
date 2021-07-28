<template>
  <div id="projects">
    <v-container>
      <h2 class="text-center mb-6">Proyectos</h2>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          lg="4"
          v-for="(slide, i) in arrayFilter"
          :key="i"
        >
          <v-card class="mx-auto" max-width="344">
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
    </v-container>

    <v-pagination
      v-model="page"
      :length="2"
      color="pagination_color"
      :prev-icon="mdiMenuLeft"
      :next-icon="mdiMenuRight"
      class="pagination mt-6"
    ></v-pagination>
  </div>
</template>
<script>
import projects from "@/assets/portfolio/projects.js";
import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";

export default {
  data() {
    return {
      mdiMenuRight,
      mdiMenuLeft,
      page: 1,
      isActive: false,
      pagination: null,
    };
  },
  computed: {
    arrayFilter() {
      return this.pagination
        ? projects
        : projects.filter((el) => el.page === this.page);
    },
  },
  mounted() {
    this.media();
  },
  methods: {
    after(slug) {
      this.$router.push(slug);
    },
    media() {
      let myFunction = (x) => {
        x.matches ? (this.pagination = false) : (this.pagination = true);
      };

      let x = window.matchMedia("(max-width: 599px)");
      myFunction(x); // Call listener function at run time
      x.addEventListener("change", myFunction);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: none;
}
.theme--dark.v-pagination .v-pagination__navigation {
  background: white;
}
@media screen and (max-width: 599px) {
  .pagination {
    display: block;
  }
}
</style>
