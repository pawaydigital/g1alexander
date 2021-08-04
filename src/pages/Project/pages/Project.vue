<template>
  <div id="project" class="bg">
    <Header />
    <Projects />
    <Footer />
    <Contact />
  </div>
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
