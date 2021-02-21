<template>
  <v-app id="home" class="bg">
    <v-container class="py-0">
      <Preloader />
      <HeaderComponent />
      <Content />
    </v-container>
    <Reviews />
    <Projects />
    <FooterComponent />
    <Contact />
  </v-app>
</template>

<script>
import Contact from "@/pages/layouts/Contact.vue";
import Preloader from "@/pages/layouts/Preloader.vue";
import HeaderComponent from "@/pages/layouts/HeaderComponent.vue";
import Content from "@/pages/Home/components/Content.vue";
import Reviews from "@/pages/Home/components/Reviews.vue";
import Projects from "@/pages/Home/components/Projects.vue";
import FooterComponent from "@/pages/layouts/FooterComponent.vue";

export default {
  name: "Home",
  components: {
    Preloader,
    Contact,
    HeaderComponent,
    Content,
    Reviews,
    Projects,
    FooterComponent,
  },
};
</script>

<style src="@/pages/Home/css/home.css"></style>
