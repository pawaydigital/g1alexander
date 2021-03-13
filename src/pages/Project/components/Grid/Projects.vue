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
          v-for="(slide, i) in projectsArray"
          :key="i"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="slide.img" height="200px"></v-img>

            <v-card-title>
              {{ slide.name }}
            </v-card-title>

            <v-card-actions>
              <router-link :to="slide.url" class="text-decoration-none">
                <v-btn color="btn lighten-2" small text>
                  Mirar proyecto
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
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
