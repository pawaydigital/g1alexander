<template>
  <v-app id="home" class="bg">
    <v-container class="py-0">
      <div
        class="d-flex justify-center align-center"
        id="circle"
        style="height: 100vh;"
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="blue"
          indeterminate
        ></v-progress-circular>
      </div>
      <HeaderComponent class="d-none" />
      <Content class="d-none" />
    </v-container>
    <Reviews class="d-none" />
    <Projects class="d-none" />
    <FooterComponent class="d-none" />
    <Contact class="d-none" />
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
  mounted() {
    this.carga();
  },
  methods: {
    carga: function() {
      window.addEventListener("load", () => {
        setTimeout(() => {
          document.getElementById("circle").className = "d-none";
          document.getElementById("header-component").className = "d-block";
          document.getElementById("content").className = "d-block";
          document.getElementById("reviews").className = "d-block accent";
          document.getElementById("projects").className = "d-block bg";
          document.getElementById("footer").className = "d-block bg";
          document.getElementById("contact").className = "d-block ";
        }, 2000);
      });
    },
  },
};
</script>

<style src="@/pages/Home/css/home.css"></style>
