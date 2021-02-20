import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        bg: "#f5f5f5",
        primary: "#0e1319",
        secondary: "#2c3541",
        accent: "#edf7fa",
        info: "#2196F3",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",

        logo: "#0e1319",
        btn: "#0e1319",
        btntext: "#f5f5f5",
        detail_tec: "#f5f5f5",

        linkedin: "#0e76a8",
        github: "#2A2E35",
        twitter: "#00acee",
        instagram: "#E9006F",
        telegram: "#0088cc",

        detail: "#c4c4c4",

        vue: "#41b883",
        bootstrap: "#61177C",
        strapi: "#AA00FF",
        mongo: "#00BC58",
        heroku: "#6B2788",
      },
      dark: {
        bg: "#141B26",
        primary: "#f5f5f5",
        secondary: "#2c3541",
        accent: "#243048",
        info: "#2196F3",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",

        logo: "#f5f5f5",
        btn: "#f5f5f5",
        btntext: "#0e1319",

        linkedin: "#00acee",
        github: "#F7F7F7",
        twitter: "#00acee",
        instagram: "#E9006F",
        telegram: "#0069B8",

        detail: "#c4c4c4",

        vue: "#41b883",
        bootstrap: "#61177C",
        strapi: "#AA00FF",
        mongo: "#00BC58",
        heroku: "#6B2788",
      },
    },
  },
});
