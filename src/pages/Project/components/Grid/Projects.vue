<template>
  <v-container id="projects">
    <h2 class="text-center mb-6">Proyectos</h2>
    <Grid :projects="arrayFilter" />

    <v-pagination
      v-model="page"
      :length="2"
      color="pagination_color"
      :prev-icon="mdiMenuLeft"
      :next-icon="mdiMenuRight"
      class="pagination mt-6"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";
import projects from "@/assets/portfolio/projects.js";
import Grid from "./Grid.vue";

export default {
  components: { Grid },
  data() {
    return {
      mdiMenuRight,
      mdiMenuLeft,
      page: 1,
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
  created() {
    this.mediaPagination();
  },
  methods: {
    mediaPagination() {
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
