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
import Contact from "@/pages/layouts/Contact.vue";
import HeaderComponent from "@/pages/layouts/HeaderComponent.vue";
import Projects from "@/pages/Project/components/Grid/Projects.vue";
import FooterComponent from "@/pages/layouts/FooterComponent.vue";

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
