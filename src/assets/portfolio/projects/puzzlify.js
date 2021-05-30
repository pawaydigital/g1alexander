import images from "@/assets/images/projects/img.js";

const puzzlify = {
  title: "Puzzlify",
  date: "29/05/2021",
  status: "Terminado",
  images: [
    {
      id: 1,
      img: images.puzz.img2,
    },
    {
      id: 2,
      img: images.puzz.img3,
    },
  ],
  description: `Desarrollo de un sitio web llamado puzzlify en donde cualquier persona puede publicar sus fotos para compartirlas con la comunidad. Con este proyecto se tuvo la intención de que fuera un poco más allá de un sitio estático  donde se tenga solo la biblioteca de imágenes. En el sitio web se puede registrar y tener control de las imágenes se vaya subiendo, sin alterar las que otros usuario hayan publicado y además también el sitio cuando con la posibilidad de que puedas instalarla en el computador o móvil, la razón, es que cuenta con soporte de PWA.`,
  technologies: [
    { id: 1, name: "Vue JS", url: "https://cli.vuejs.org/", color: "vue" },
    {
      id: 2,
      name: "Vuetify",
      url: "https://vuetifyjs.com/en/",
      color: "vuetify",
    },
    {
      id: 3,
      name: "Netlify",
      url: "https://www.netlify.com/",
      color: "netlify",
    },
    {
      id: 4,
      name: "Strapi",
      url: "https://strapi.io/",
      color: "strapi",
    },
    {
      id: 5,
      name: "Mongo DB",
      url: "https://www.mongodb.com/",
      color: "mongo",
    },
    {
      id: 6,
      name: "Heroku",
      url: "https://www.heroku.com/home",
      color: "heroku",
    },
  ],
  repo: "https://github.com/PawayDigital/puzzlify/",
  web: "https://puzzlify.netlify.app/",
};

export default puzzlify;
