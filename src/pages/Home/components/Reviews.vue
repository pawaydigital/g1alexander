<template>
  <section id="reviews" class="accent">
    <v-container>
      <v-carousel
        cycle
        height="230"
        show-arrows-on-hover
        hide-delimiters
        hide-delimiter-background
      >
        <v-carousel-item v-for="elemt in phrases" :key="elemt.id">
          <v-sheet color="accent" height="100%" tile>
            <v-row
              class="fill-height text-center"
              align="center"
              justify="center"
            >
              <div class="text-content">
                <h2 class="primary--text">"{{ elemt.phrase }}"</h2>
                <span class="primary--text font-weight-thin mt-5">---</span>
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
  </section>
</template>

<script>
export default {
  name: "reviews",
  data() {
    return {
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
