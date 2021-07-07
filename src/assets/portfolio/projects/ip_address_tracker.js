import images from "@/assets/images/img.js";
import icons from "@/assets/icons/technologies.js";

const ip = {
  title: "IP Address Tracker",
  date: "07/07/2021",
  status: "Terminado",
  images: [
    {
      id: 1,
      img: images.ip.img1,
    },
  ],
  description: [
    {
      text:
        "Solución de un reto de frontendmentor.io, en donde se plantea la construcción de un sitio web en el cual se puedan mostrar los datos y la dirección en donde se encuentra alojado un dominio.",
    },
    {
      text:
        "La información de la IP o dominio se obtuvo a través de la API de IP Geolocation API y para mostrar la dirección se implementó el mapa de leafletjs. Las tecnologías implementadas fueron Nuxt JS junto con Vuex y el proyecto fue desarrollado por Alexander Granados y Felipe Vargas.",
    },
  ],
  technologies: [icons.technologies.nuxt, icons.technologies.vercel],
  repo: "https://github.com/Felipev98/adressApp",
  web: "",
};

export default ip;
