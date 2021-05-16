<template>
  <div id="description" class="mt-8">
    <v-row>
      <v-col cols="12" md="12">
        <p class="text-justify">
          {{ description }}
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <h4>Tecnologias utilizadas</h4>
        <p class="mt-2">
          <a
            v-for="(slide, i) in technologies"
            :key="i"
            :href="slide.url"
            class="text-decoration-none mr-3"
            target="_blank"
          >
            <v-btn
              class="detail_tec--text mt-3 font-weight-bold"
              :class="slide.color"
              >{{ slide.name }}</v-btn
            >
          </a>
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <h4>Información del proyecto</h4>

        <p class="mt-5 d-flex justify-space-between">
          <v-list-item class="d-inline-block mr-2" :href="repo" target="_blank"
            ><v-icon large color="github darken-2">
              mdi-github
            </v-icon>
            Repositorio
          </v-list-item>
          <v-list-item class="d-inline-block" :href="web" target="_blank"
            ><v-icon large color="github darken-2"> mdi-search-web </v-icon>Web
            site</v-list-item
          >
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    technologies: Array,
    description: String,
    repo: String,
    web: String,
  },
};
</script>
