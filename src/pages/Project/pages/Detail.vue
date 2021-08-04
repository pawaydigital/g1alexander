<template>
  <div id="detail" class="bg">
    <Header />
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <Title
            :title="this.data.title"
            :date="this.data.date"
            :status="this.data.status"
          />
          <Carousel v-if="carousel" :images="this.data.images" />
          <Description
            :description="this.data.description"
            :technologies="this.data.technologies"
            :repo="this.data.repo"
            :web="this.data.web"
          />
        </v-col>
        <v-col v-if="!carousel" cols="12" md="6" lg="6">
          <Carousel :images="this.data.images" />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
    <Contact />
  </div>
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
      carousel: null,
    };
  },
  created() {
    this.media();
    let route = this.$route.params.slug;
    for (const i in all) {
      if (i === route) return (this.data = all[i]);
    }
    if (Object.entries(this.data).length === 0)
      return this.$router.push("/404");
  },
  methods: {
    media() {
      let myFunction = (x) => {
        if (x.matches) {
          this.carousel = false;
        } else {
          this.carousel = true;
        }
      };
      let x = window.matchMedia("(min-width: 960px)");
      myFunction(x);
      x.addEventListener("change", myFunction);
    },
  },
};
</script>
