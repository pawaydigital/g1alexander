<template>
  <div id="home" class="bg">
    <Header />
    <Content />
    <Reviews />
    <Projects />
    <Footer />
    <Contact />
  </div>
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

<style>
/* page home */
.v-list-item {
  min-height: 0 !important;
}
.title-project {
  cursor: pointer;
}
.info--text:hover,
.title-project:hover {
  text-decoration: underline;
}

.content-row {
  padding: 10rem 0;
}
/* responsive */
@media screen and (max-width: 600px) {
  .image-content {
    width: 200px;
    height: 200px;
  }
  .text-content h1 {
    font-size: 25px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .text-content h2 {
    font-size: 20px;
  }
  .text-content h4 {
    font-size: 14px;
  }
  .text-content {
    padding: 0;
  }
  .text-content p {
    margin-bottom: 2em;
  }
  .content-row {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .p-content {
    padding: 0;
  }
  #projects-home p {
    display: none;
  }
  .image-projects {
    width: auto;
  }
}
</style>
