<template>
  <section id="projects-home" class="bg pt-5">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-space-between align-center"
          style="height: 80px;"
        >
          <h1 class="d-inline-block">Ultimos proyectos</h1>
          <router-link to="/proyectos" class="info--text text-decoration-none"
            >Ver más</router-link
          >
        </v-col>
        <v-col cols="12" v-for="(slide, i) in lastArray" :key="i">
          <v-row>
            <v-col cols="12" lg="3">
              <figure class="my-0">
                <v-img
                  :lazy-src="slide.img"
                  height="250"
                  width="285"
                  :alt="slide.alt"
                  :src="slide.img"
                  class="image-projects"
                ></v-img>
              </figure>
            </v-col>
            <v-col cols="12" lg="9">
              <router-link
                :to="slide.url"
                class="text-content text-decoration-none"
                ><h2 class="primary--text mb-3">
                  {{ slide.title }}
                </h2></router-link
              >
              <span class="span-projects btntext--text btn rounded px-2">
                {{ slide.date }}
              </span>
              <p class="secundary--text mt-2" style="width: 96%;">
                {{ slide.description }}
              </p>
            </v-col>
            <span class="border-project mt-3 mx-3"></span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import last from "@/assets/portfolio/last.js";
export default {
  data() {
    return {
      lastArray: [],
    };
  },
  mounted() {
    this.lastArray = last;
  },
};
</script>
