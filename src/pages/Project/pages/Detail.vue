<template>
  <v-app id="project" class="bg">
    <v-container class="py-0">
      <HeaderComponent />
      <Title />
    </v-container>
    <FooterComponent />
    <Contact />
  </v-app>
</template>

<script>
import Contact from "@/pages/layouts/Contact.vue";
import HeaderComponent from "@/pages/layouts/HeaderComponent.vue";
import Title from "@/pages/Project/components/Detail/Title.vue";
import FooterComponent from "@/pages/layouts/FooterComponent.vue";

export default {
  name: "Project",
  components: {
    Contact,
    HeaderComponent,
    Title,
    FooterComponent,
  },
};
</script>

<style src="@/pages/Project/css/detail.css"></style>
