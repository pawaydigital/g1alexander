<template>
  <v-app id="detail" class="bg">
    <v-container class="py-0">
      <Header />
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
    <Footer />
    <Contact />
  </v-app>
</template>

<script>
const Contact = () => import("@/pages/layouts/Contact.vue"),
  Header = () => import("@/pages/layouts/Header.vue"),
  Title = () => import("@/pages/Project/components/Detail/Title.vue"),
  Carousel = () => import("@/pages/Project/components/Detail/Carousel.vue"),
  Description = () =>
    import("@/pages/Project/components/Detail/Description.vue"),
  Footer = () => import("@/pages/layouts/Footer.vue");
import all from "@/assets/portfolio/all.js";

export default {
  name: "detail",
  components: {
    Contact,
    Header,
    Title,
    Carousel,
    Description,
    Footer,
  },
  data() {
    return {
      data: {},
    };
  },
  created() {
    let route = this.$route.params.slug;
    for (const i in all) {
      if (i === route) {
        this.data = all[i];
        return;
      }
    }
    if (Object.entries(this.data).length === 0) {
      this.$router.push("/404");
    }
  },
};
</script>
