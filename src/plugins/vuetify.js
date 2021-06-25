import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg",
  },
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
        pagination_color: "#0e1319",

        logo: "#0e1319",
        btn: "#0e1319",
        btntext: "#f5f5f5",
        detail_tec: "#f5f5f5",

        linkedin: "#0e76a8",
        linkedin_btn: "#f5f5f5",
        github: "#2A2E35",
        twitter: "#00acee",
        instagram: "#E9006F",
        telegram: "#0088cc",

        detail: "#c4c4c4",

        html: "#E34F26",
        js: "#FFC100",
        scss: "#CC6699",
        vue: "#4FC08D",
        vuetify: "#1867C0",
        bootstrap: "#7952B3",
        tailwind: "#38B2AC",
        strapi: "#2F2E8B",
        mongo: "#47A248",
        capacitor: "#119EFF",
        heroku: "#430098",
        netlify: "#00C7B7",
        vercel: "#111111",
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
        pagination_color: "#2c3541",

        logo: "#f5f5f5",
        btn: "#f5f5f5",
        btntext: "#0e1319",

        linkedin: "#00acee",
        linkedin_btn: "#00acee",
        github: "#F7F7F7",
        twitter: "#00acee",
        instagram: "#E9006F",
        telegram: "#0069B8",

        detail: "#c4c4c4",

        html: "#E34F26",
        js: "#FFC100",
        scss: "#CC6699",
        vue: "#4FC08D",
        vuetify: "#1867C0",
        bootstrap: "#7952B3",
        tailwind: "#38B2AC",
        strapi: "#2F2E8B",
        mongo: "#47A248",
        capacitor: "#119EFF",
        heroku: "#430098",
        netlify: "#00C7B7",
        vercel: "#111111",
      },
    },
  },
});
