<template>
  <v-app id="detail" class="bg">
    <v-container class="py-0">
      <HeaderComponent />
      <Title
        :title="this.data.title"
        :date="this.data.date"
        :status="this.data.status"
      />
      <Carousel :images="this.data.images" />
      <Description
        :description="this.data.description"
        :technologies="this.data.technologies"
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
import HeaderComponent from "@/pages/layouts/HeaderComponent.vue";
import Title from "@/pages/Project/components/Detail/Title.vue";
import Carousel from "@/pages/Project/components/Detail/Carousel.vue";
import Description from "@/pages/Project/components/Detail/Description.vue";
import FooterComponent from "@/pages/layouts/FooterComponent.vue";
import all from "@/assets/portfolio/all.js";

export default {
  name: "detail",
  components: {
    Contact,
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
    let key = localStorage.getItem("key");
    for (const i in all) {
      if (i === key) {
        this.data = all[i];
      }
    }
  },
};
</script>

<style src="@/pages/Project/css/detail.css"></style>
