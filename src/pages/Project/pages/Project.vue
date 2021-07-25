<template>
  <v-app id="project" class="bg">
    <v-container class="py-0">
      <Header />
      <Projects />
    </v-container>
    <Footer />
    <Contact />
  </v-app>
</template>

<script>
const Contact = () => import("@/pages/layouts/Contact.vue"),
  Header = () => import("@/pages/layouts/Header.vue"),
  Projects = () => import("@/pages/Project/components/Grid/Projects.vue"),
  Footer = () => import("@/pages/layouts/Footer.vue");

export default {
  name: "Project",
  components: {
    Contact,
    Header,
    Projects,
    Footer,
  },
};
</script>
