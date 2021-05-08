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
            <v-img :src="slide.img" width="auto" height="auto"></v-img>

            <v-card-title>
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
  created() {
    this.projectsArray = projects;
  },
  methods: {
    after(slug) {
      this.$router.push(slug);
    },
  },
};
</script>
