import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#0e1319",
        secondary: "#2c3541",
        accent: "#edf7fa",
        info: "#2196F3",
        bg: "#f5f5f5",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",
        linkedin: "#0e76a8",
        github: "#2A2E35",
        twitter: "#00acee",
        instagram: "#E9006F",
      },
    },
  },
});
