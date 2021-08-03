<template>
  <v-container id="projects-home" class="pt-5">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-space-between align-center"
        style="height: 80px;"
      >
        <h2 class="d-inline-block">Ultimos proyectos</h2>
        <router-link to="/proyectos" class="text-decoration-none"
          ><span class="info--text">Ver más</span>
        </router-link>
      </v-col>
      <v-col cols="12" v-for="(slide, i) in lastArray" :key="i">
        <v-row>
          <v-col cols="12" sm="3" md="3" lg="3">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: 0.5,
              }"
              transition="fade-transition"
            >
              <figure class="my-0">
                <v-img
                  :lazy-src="slide.img"
                  height="auto"
                  width="auto"
                  :alt="slide.alt"
                  :src="slide.img"
                  class="image-projects"
                ></v-img>
              </figure>
            </v-lazy>
          </v-col>
          <v-col cols="12" sm="9" md="9" lg="9">
            <router-link :to="slide.url" class="text-decoration-none">
              <h2 class="primary--text title-project mb-3">
                {{ slide.title }}
              </h2>
            </router-link>
            <span class="span-projects btntext--text btn rounded px-2">
              {{ slide.date }}
            </span>
            <p class="secundary--text mt-2" style="width: 96%;">
              {{ slide.description }}
            </p>
          </v-col>
        </v-row>
        <v-divider class="mt-5"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import last from "@/assets/portfolio/last.js";
export default {
  data() {
    return {
      lastArray: [],
      isActive: false,
    };
  },
  created() {
    this.lastArray = last;
  },
};
</script>
