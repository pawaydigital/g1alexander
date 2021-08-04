<template>
  <v-row id="description" class="mt-5">
    <v-col cols="12" md="12">
      <p
        v-for="(desc, index) in description"
        :key="index"
        class="text-start mb-3"
      >
        {{ desc.text }}
      </p>
    </v-col>
    <v-col cols="12">
      <h4>Tecnologias utilizadas</h4>
      <section class="mt-2">
        <a
          v-for="(slide, i) in technologies"
          :key="i"
          class="text-decoration-none mr-3"
          target="_blank"
        >
          <v-btn
            class="detail_tec--text mt-3 font-weight-bold"
            :class="slide.color"
            ><img
              :src="
                `https://img.shields.io/badge/-${slide.colorHex}?&logo=${slide.icon}&logoColor=ffffff`
              "
              :alt="slide.name"
            />{{ slide.name }}</v-btn
          >
        </a>
      </section>
    </v-col>
    <v-col cols="12">
      <h4>Información del proyecto</h4>

      <div class="mt-5 d-flex justify-space-between">
        <v-list-item
          class="d-inline-block mr-2"
          :href="repo"
          rel="noopener"
          target="_blank"
          ><v-icon large color="github darken-2">
            {{ mdiGithub }}
          </v-icon>
          Repositorio
        </v-list-item>
        <v-list-item
          class="d-inline-block"
          :href="web"
          target="_blank"
          rel="noopener"
          ><v-icon large color="github darken-2"> {{ mdiLinkVariant }} </v-icon
          >Mirar proyecto</v-list-item
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiGithub, mdiLinkVariant } from "@mdi/js";
export default {
  data() {
    return {
      mdiGithub,
      mdiLinkVariant,
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
