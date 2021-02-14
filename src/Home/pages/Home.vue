<template>
  <v-app id="home" class="bg">
    <v-container class="py-0">
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
// @ is an alias to /src
import Contact from "@/layouts/Contact.vue";
import HeaderComponent from "@/layouts/HeaderComponent.vue";
import Content from "@/Home/components/Content.vue";
import Reviews from "@/Home/components/Reviews.vue";
import Projects from "@/Home/components/Projects.vue";
import FooterComponent from "@/layouts/FooterComponent.vue";

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

<style>
#home {
  /* background: #f5f5f5; */
  height: 100vh;
}
</style>
