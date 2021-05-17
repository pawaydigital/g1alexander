<template>
  <div id="reviews" class="accent">
    <v-container>
      <v-carousel
        :delimiter-icon="mdiMinus"
        height="250"
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item v-for="elemt in phrases" :key="elemt.id">
          <v-sheet color="accent" height="100%">
            <v-row
              class="fill-height text-center"
              align="center"
              justify="center"
            >
              <div class="text-content">
                <h2 class="primary--text">"{{ elemt.phrase }}"</h2>
                <span class="primary--text font-weight-thin mt-5">------</span>
                <span
                  class="primary--text d-block font-weight-thin font-italic"
                >
                  {{ elemt.author }}
                </span>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import { mdiMinus } from "@mdi/js";
export default {
  name: "reviews",
  data() {
    return {
      mdiMinus,
      phrases: [
        {
          id: 1,
          phrase:
            "La única forma de hacer un gran trabajo, es amar lo que haces.",
          author: "Steve Jobs / Fundador de Apple Inc.",
        },
        {
          id: 2,
          phrase: "Si puedes imaginarlo, puedes programarlo.",
          author: "Alejandro Taboada / Programación ATS",
        },
        {
          id: 3,
          phrase: "Si cabe en tu mente, cabe en tu mundo.",
          author: "Sie7e / Músico",
        },
      ],
    };
  },
};
</script>
