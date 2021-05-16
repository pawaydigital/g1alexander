<template>
  <v-app id="home" class="bg">
    <v-container class="py-0" style="height: 100vh;">
      <HeaderComponent class="home-header" />
      <Content class="home-content" />
    </v-container>
    <Reviews />
    <Projects />
    <FooterComponent />
    <Contact />
  </v-app>
</template>

<script>
const Contact = () => import("@/pages/layouts/Contact.vue"),
  HeaderComponent = () => import("@/pages/layouts/HeaderComponent.vue"),
  Content = () => import("@/pages/Home/components/Content.vue"),
  Reviews = () => import("@/pages/Home/components/Reviews.vue"),
  Projects = () => import("@/pages/Home/components/Projects.vue"),
  FooterComponent = () => import("@/pages/layouts/FooterComponent.vue");

export default {
  name: "Home",
  components: {
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
