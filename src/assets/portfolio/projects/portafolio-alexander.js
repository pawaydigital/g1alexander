import images from "@/assets/images/projects/img.js";

const portafolio = {
  title: "Portafolio Alexander",
  date: "20/02/2021",
  images: [
    {
      id: 1,
      img: images.p_a.img,
    },
    {
      id: 2,
      img: images.p_a.img2,
    },
  ],
  description: `Este proyecto es muy importante y especial, porque, si ya te diste cuenta es el sitio donde te encuentras actualmente y aquí podrás ver todos mis proyectos de desarrollo web más importantes que he realizado a la fecha de hoy.`,
  technologies: [
    { id: 1, name: "Vue JS", url: "https://cli.vuejs.org/", color: "vue" },
    {
      id: 2,
      name: "Vuetify",
      url: "https://vuetifyjs.com/en/",
      color: "vuetify",
    },
  ],
  repo: "https://github.com/PawayDigital/g1alexander/",
  web: "https://g1alexander.com",
};

export default portafolio;
