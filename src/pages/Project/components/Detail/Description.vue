<template>
  <div id="description" class="mt-8">
    <v-row>
      <v-col cols="12" md="12">
        <p
          v-for="(desc, index) in description"
          :key="index"
          class="text-start text-md-justify mb-3"
        >
          {{ desc.text }}
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
              {{ mdiGithub }}
            </v-icon>
            Repositorio
          </v-list-item>
          <v-list-item class="d-inline-block" :href="web" target="_blank"
            ><v-icon large color="github darken-2"> {{ mdiSearchWeb }} </v-icon
            >Mirar proyecto</v-list-item
          >
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiGithub, mdiSearchWeb } from "@mdi/js";
export default {
  data() {
    return {
      mdiGithub,
      mdiSearchWeb,
    };
  },
  props: {
    technologies: Array,
    description: Array,
    repo: String,
    web: String,
  },
};
</script>
