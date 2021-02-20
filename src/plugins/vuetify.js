import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
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

        btn: "#0e1319",
        btntext: "#f5f5f5",

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
      dark: {},
    },
  },
});
