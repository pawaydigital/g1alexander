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
        primary: "#1B1D2C",
        secondary: "#F7FAFC",
        accent: "#EDF1F7",
        info: "#2196F3",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",
        pagination_color: "#1B1D2C",

        logo: "#1B1D2C",
        btn: "#1B1D2C",
        btntext: "#f5f5f5",
        detail_tec: "#f5f5f5",

        linkedin: "#0e76a8",
        github_btn: "#fff",
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
        nuxt: "#00C58E",
        css: "#1572B6",
        ts: "#3178C6",
        webpack: "#75ccff",
      },
      dark: {
        bg: "#141B26",
        primary: "#F7FAFC",
        secondary: "#1B1D27",
        accent: "#2E3348",
        info: "#00acee",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",
        pagination_color: "#1B1D27",

        logo: "#F7FAFC",
        btn: "#F7FAFC",
        btntext: "#1B1D2C",

        linkedin: "#00acee",
        github_btn: "#222",
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
        nuxt: "#00C58E",
        css: "#1572B6",
        ts: "#3178C6",
        webpack: "#75ccff",
      },
    },
  },
});
