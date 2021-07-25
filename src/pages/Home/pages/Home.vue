<template>
  <v-app id="home" class="bg">
    <v-container class="py-0" style="height: 100vh;">
      <Header class="home-header" />
      <Content class="home-content" />
    </v-container>
    <Reviews />
    <Projects />
    <Footer />
    <Contact />
  </v-app>
</template>

<script>
const Contact = () => import("@/pages/layouts/Contact.vue"),
  Header = () => import("@/pages/layouts/Header.vue"),
  Content = () => import("@/pages/Home/components/Content.vue"),
  Reviews = () => import("@/pages/Home/components/Reviews.vue"),
  Projects = () => import("@/pages/Home/components/Projects.vue"),
  Footer = () => import("@/pages/layouts/Footer.vue");

export default {
  name: "Home",
  components: {
    Contact,
    Header,
    Content,
    Reviews,
    Projects,
    Footer,
  },
};
</script>

<style src="@/pages/Home/css/home.css"></style>
