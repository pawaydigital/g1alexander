<template>
  <v-container class="pt-0 mt-0" id="header-component">
    <v-app-bar color="bg-header primary--text">
      <router-link to="/" class="d-flex align-center">
        <img :src="darkMode" width="60" height="45" />
      </router-link>
      <v-spacer></v-spacer>
      <div class="ml-2">
        <v-btn icon @click="toggle_dark_mode" class="mt-1 ">
          <v-icon>{{ mdiThemeLightDark }}</v-icon>
        </v-btn>
      </div>
      <v-tabs class="d-flex justify-end">
        <v-tab to="/" class="font-weight-bold">
          Inicio
        </v-tab>
        <v-tab
          href="https://www.github.com/g1alexander/"
          rel="noopener"
          target="_blank"
          class="font-weight-bold"
        >
          <v-icon small color="github darken-2 pr-1">
            {{ mdiGithub }}
          </v-icon>
          Github
        </v-tab>
        <v-tab to="/proyectos" class="font-weight-bold">
          Proyectos
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="bg" absolute temporary>
      <NavResponsive @accion="drawer" />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mdiLaptop, mdiThemeLightDark, mdiGithub } from "@mdi/js";
import NavResponsive from "./components/NavResponsive.vue";
export default {
  name: "HeaderComponent",
  components: { NavResponsive },
  data() {
    return {
      drawer: false,
      mdiThemeLightDark,
      mdiLaptop,
      mdiGithub,
    };
  },
  computed: {
    darkMode() {
      return this.$vuetify.theme.dark
        ? "https://res.cloudinary.com/dlgvxohur/image/upload/v1628088399/proyectos/logo-dark.svg"
        : "https://res.cloudinary.com/dlgvxohur/image/upload/v1628088399/proyectos/logo.svg";
    },
  },
  methods: {
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  created() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      theme === "true"
        ? (this.$vuetify.theme.dark = true)
        : (this.$vuetify.theme.dark = false);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    } else {
      this.$vuetify.theme.dark = false;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
};
</script>

<style>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.v-app-bar__nav-icon {
  display: none !important;
}
.bg-header {
  background-color: transparent !important;
}

@media screen and (max-width: 600px) {
  .v-slide-group__content {
    display: none !important;
  }
  .v-app-bar__nav-icon {
    display: block !important;
  }
  .header_movil {
    height: 100vh;
  }
}
</style>
