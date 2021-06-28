<template>
  <v-container>
    <v-row class="header_movil" align-content="center" justify="center">
      <v-col cols="12">
        <router-link to="/" class="text-decoration-none mb-10"
          ><v-btn class="primary bg--text  d-block mx-auto font-weight-bold"
            >Inicio</v-btn
          ></router-link
        >
      </v-col>
      <v-col cols="12">
        <a
          class="d-block mx-auto"
          href="https://www.github.com/g1alexander/"
          rel="noopener"
          target="_blank"
          ><v-btn class="primary bg--text d-block mx-auto font-weight-bold">
            <v-icon small color="github_btn darken-2"> {{ mdiGithub }} </v-icon
            >Github</v-btn
          ></a
        >
      </v-col>
      <v-col cols="12">
        <router-link to="/proyectos" class="text-decoration-none mb-10"
          ><v-btn class="primary bg--text d-block mx-auto font-weight-bold"
            >Proyectos</v-btn
          ></router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiGithub } from "@mdi/js";

export default {
  data() {
    return {
      mdiGithub,
    };
  },
};
</script>
