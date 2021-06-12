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
        <v-list-item
          class="d-block mx-auto"
          href="https://co.linkedin.com/in/g1alexander/"
          rel="noopener"
          target="_blank"
          ><v-btn class="primary bg--text d-block mx-auto font-weight-bold">
            <v-icon small color="linkedin_btn darken-2">
              {{ mdiLinkedin }}
            </v-icon>
            LinkedIn</v-btn
          ></v-list-item
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
import { mdiLinkedin } from "@mdi/js";

export default {
  data() {
    return {
      mdiLinkedin,
    };
  },
};
</script>
