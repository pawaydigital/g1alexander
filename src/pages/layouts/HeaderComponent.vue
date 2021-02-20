<template>
  <div id="header-component">
    <v-container>
      <v-app-bar color="bg primary--text">
        <router-link to="/">
          <v-icon color="logo darken-2">
            mdi-laptop
          </v-icon>
        </router-link>
        <v-spacer></v-spacer>
        <v-tabs class="d-flex justify-end">
          <v-tab to="/">
            Inicio
          </v-tab>
          <v-tab href="https://co.linkedin.com/in/g1alexander/" target="_blank">
            LinkedIn
          </v-tab>
          <v-tab to="/proyectos">
            Proyectos
          </v-tab>
        </v-tabs>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" color="bg" absolute temporary>
        <v-container>
          <v-row class="header_movil" align-content="center" justify="center">
            <v-col cols="12">
              <router-link to="/" class="text-decoration-none mb-10"
                ><v-btn class="primary bg--text d-block mx-auto"
                  >Inicio</v-btn
                ></router-link
              >
            </v-col>
            <v-col cols="12">
              <v-list-item
                class="d-block mx-auto"
                href="https://co.linkedin.com/in/g1alexander/"
                target="_blank"
                ><v-btn class="primary bg--text d-block mx-auto"
                  >LinkedIn</v-btn
                ></v-list-item
              >
            </v-col>
            <v-col cols="12">
              <router-link to="/proyectos" class="text-decoration-none mb-10"
                ><v-btn class="primary bg--text d-block mx-auto"
                  >Proyectos</v-btn
                ></router-link
              >
            </v-col>
          </v-row>
        </v-container>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style src="@/assets/css/header.css"></style>
