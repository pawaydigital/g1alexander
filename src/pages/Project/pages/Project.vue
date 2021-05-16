<template>
  <v-app id="project" class="bg">
    <v-container class="py-0">
      <HeaderComponent />
      <Projects />
    </v-container>
    <FooterComponent />
    <Contact />
  </v-app>
</template>

<script>
const Contact = () => import("@/pages/layouts/Contact.vue"),
  HeaderComponent = () => import("@/pages/layouts/HeaderComponent.vue"),
  Projects = () => import("@/pages/Project/components/Grid/Projects.vue"),
  FooterComponent = () => import("@/pages/layouts/FooterComponent.vue");

export default {
  name: "Project",
  components: {
    Contact,
    HeaderComponent,
    Projects,
    FooterComponent,
  },
};
</script>
