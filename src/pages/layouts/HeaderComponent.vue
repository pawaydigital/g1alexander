<template>
  <div id="header-component">
    <v-card>
      <v-app-bar app>
        <router-link to="/">
          <v-img
            lazy-src="@/assets/images/logo.svg"
            max-height="30"
            max-width="30"
            src="@/assets/images/logo.svg"
            class="logo"
          ></v-img>
        </router-link>

        <v-spacer></v-spacer>

        <v-tabs color="secundary">
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
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" temporary>
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
    </v-card>
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
