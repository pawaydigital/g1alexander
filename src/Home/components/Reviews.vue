<template>
  <div id="content" class="accent">
    <v-container>
      <v-carousel
        delimiter-icon="mdi-minus"
        height="250"
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item v-for="slide in frases" :key="slide.id">
          <v-sheet color="accent" class="" height="100%">
            <v-row
              class="fill-height text-center"
              align="center"
              justify="center"
            >
              <div>
                <h2 class="primary--text">"{{ slide.frase }}"</h2>
                <span class="secondary--text mt-5">------</span>
                <h4 class="primary--text font-weight-thin font-italic">
                  {{ slide.autor }}
                </h4>
              </div>
              <!-- <div class="display-1"></div> -->
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "reviews",
  data() {
    return {
      // colors: ["accent"],
      frases: [
        {
          id: 1,
          frase:
            "La única forma de hacer un gran trabajo, es amar lo que haces.",
          autor: "Steve Jobs / Fundador de Apple Inc.",
        },
        {
          id: 2,
          frase: "Si puedes imaginarlo, puedes programarlo.",
          autor: "Alejandro Taboada / Programación ATS",
        },
        {
          id: 3,
          frase: "Si cabe en tu mente, cabe en tu mundo.",
          autor: "Sie7e / Músico",
        },
      ],
    };
  },
};
</script>
