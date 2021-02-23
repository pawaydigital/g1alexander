<template>
  <v-app id="detail" class="bg">
    <Preloader />
    <v-container class="py-0">
      <HeaderComponent />
      <Title :title="this.data.titulo" :date="this.data.fecha" />
      <Carousel :images="this.data.images" />
      <Description
        :description="this.data.description"
        :technologies="this.data.tecnologias"
        :repo="this.data.repo"
        :web="this.data.web"
      />
    </v-container>
    <FooterComponent />
    <Contact />
  </v-app>
</template>

<script>
import Contact from "@/pages/layouts/Contact.vue";
import Preloader from "@/pages/layouts/Preloader.vue";
import HeaderComponent from "@/pages/layouts/HeaderComponent.vue";
import Title from "@/pages/Project/components/Detail/Title.vue";
import Carousel from "@/pages/Project/components/Detail/Carousel.vue";
import Description from "@/pages/Project/components/Detail/Description.vue";
import FooterComponent from "@/pages/layouts/FooterComponent.vue";
import prueba from "@/assets/portfolio/prueba.js";

export default {
  name: "Detail",
  components: {
    Contact,
    Preloader,
    HeaderComponent,
    Title,
    Carousel,
    Description,
    FooterComponent,
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.data = prueba;
  },
};
</script>

<style src="@/pages/Project/css/detail.css"></style>
