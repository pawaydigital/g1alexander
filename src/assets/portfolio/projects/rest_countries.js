import images from "@/assets/images/img.js";
import icons from "@/assets/icons/technologies.js";

const countries = {
  title: "Rest Countries",
  date: "05/06/2021",
  status: "Terminado",
  images: [
    {
      id: 1,
      img: images.r_c.img1,
    },
    {
      id: 2,
      img: images.r_c.img2,
    },
  ],
  description: [
    {
      text:
        "Solución de un reto de frontendmentor.io, en donde se plantea la construcción de un sitio web en el cual se puedan mostrar los datos de los países del mundo a partir del consumo de una api-rest.",
    },
    {
      text:
        "Aparte de esto, se puede buscar un país en específico, filtrar los países por región y un modo oscuro al sitio.",
    },
  ],
  technologies: [
    icons.technologies.vue,
    icons.technologies.tailwind,
    icons.technologies.vercel,
  ],
  repo: "https://github.com/pawaydigital/rest-countries/",
  web: "https://rest-countries-vue.vercel.app/",
};

export default countries;
