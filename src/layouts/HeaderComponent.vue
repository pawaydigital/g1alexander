<template>
  <div id="header-component">
    <v-card>
      <v-app-bar app>
        <v-img
          lazy-src="@/assets/images/logo.svg"
          max-height="50"
          max-width="50"
          src="@/assets/images/logo.svg"
          class="logo"
        ></v-img>

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
              <router-link to="/login" class="text-decoration-none mb-10"
                ><v-btn class="d-block mx-auto">Inicio</v-btn></router-link
              >
            </v-col>
            <v-col cols="12">
              <router-link to="/login" class="text-decoration-none mb-10"
                ><v-btn class="d-block mx-auto">LinkedIn</v-btn></router-link
              >
            </v-col>
            <v-col cols="12">
              <router-link to="/login" class="text-decoration-none mb-10"
                ><v-btn class="d-block mx-auto">Proyectos</v-btn></router-link
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

<style>
.v-app-bar.v-app-bar--fixed {
  position: unset;
}

.v-sheet.v-card:not(.v-sheet--outlined),
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.v-toolbar__content .v-btn.v-btn--icon.v-size--default {
  display: none;
}
.v-slide-group__content {
  justify-content: flex-end;
}
@media (max-width: 767px) {
  .v-toolbar__content .v-btn.v-btn--icon.v-size--default {
    display: inline-block;
  }
  .v-tabs {
    display: none;
  }
  .header_movil {
    height: 100vh;
  }
}
</style>
