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
          class="project"
          v-for="(slide, i) in projectsArray"
          :key="i"
        >
          <img
            :src="slide.img"
            class="secondary"
            :alt="'proyect-' + i"
            height="200"
            width="375"
          />
          <router-link :to="slide.url">
            <p class="project-overlay">Ver - {{ slide.name }}</p>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import projects from "@/assets/portfolio/projects.js";
export default {
  data() {
    return {
      projectsArray: [],
    };
  },
  mounted() {
    this.projectsArray = projects;
  },
};
</script>
