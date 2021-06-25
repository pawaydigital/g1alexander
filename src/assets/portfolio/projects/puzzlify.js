import images from "@/assets/images/img.js";
import icons from "@/assets/icons/technologies.js";

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
  description: [
    {
      text:
        "Desarrollo de un sitio web llamado puzzlify en donde cualquier persona puede publicar sus fotos para compartirlas con la comunidad.",
    },
    {
      text:
        "Con este proyecto se tuvo la intención de que fuera un poco más allá de un sitio estático donde se tenga solo la biblioteca de imágenes.",
    },
    {
      text:
        "En el sitio web se puede registrar y tener control de las imágenes se vaya subiendo, sin alterar las que otros usuario hayan publicado y además también el sitio cuando con la posibilidad de que puedas instalarla en el computador o móvil, la razón, es que cuenta con soporte de PWA.",
    },
  ],
  technologies: [
    icons.technologies.vue,
    icons.technologies.vuetify,
    icons.technologies.netlify,
    icons.technologies.strapi,
    icons.technologies.mongo,
    icons.technologies.heroku,
  ],
  repo: "https://github.com/PawayDigital/puzzlify/",
  web: "https://puzzlify.netlify.app/",
};

export default puzzlify;
