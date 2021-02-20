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
        <div class="ml-3">
          <v-btn icon @click="toggle_dark_mode" class="mt-1 ">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </div>
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
  methods: {
    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
};
</script>

<style src="@/assets/css/header.css"></style>
