<template>
  <v-container id="content" class="bg">
    <v-row align="center" class="content-row">
      <v-col
        cols="12"
        md="4"
        class="order-md-2 offset-md-1 text-sm-center p-content p-sm-0"
      >
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dlgvxohur/image/upload/v1627483439/proyectos/g1alexander.webp"
          class="rounded-circle image-content"
          alt="g1alexander"
          height="285"
          width="285"
        />
      </v-col>
      <v-col
        cols="12"
        md="5"
        class="offset-md-1 text-sm-center text-md-start text-content pt-sm-0 pb-sm-0"
      >
        <h1>
          {{ content.title }}
        </h1>
        <p class="secundary mt-5">
          {{ content.description }}
        </p>
        <a
          class="d-inline-block text-decoration-none px-0 mb-5"
          href="https://drive.google.com/file/d/1q1ebhUgKT3FtupZxazOLgW48gVMUJFb3/view?usp=sharing/"
          rel="noopener"
          target="_blank"
          download="download"
          ><v-btn class="btntext--text btn font-weight-bold"
            >Descargar CV</v-btn
          ></a
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      content: {
        title: "Hola, Soy Alexander G Frontend developer",
        description:
          "Durante mi aprendizaje en el desarrollo de software he tenido la posibilidad de trabajar en proyectos web tanto en la parte frontend como backend, encontrando en ellos un mundo maravilloso en el cual se pueden crear soluciones, dar vida a sitios y páginas web a partir de un prototipo.",
      },
    };
  },
};
</script>
